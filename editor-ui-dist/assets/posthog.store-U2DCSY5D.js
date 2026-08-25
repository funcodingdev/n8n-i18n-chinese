import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { D as useStorage$1 } from "./dist-BKkqSB6h.js";
import { fr as defineStore, t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useSettingsStore } from "./settings.store-DtdxCj3f.js";
import { t as useUsersStore } from "./users.store-BWk82WBM.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { Ea as EXPERIMENTS_TO_TRACK, Fi as LOCAL_STORAGE_EXPERIMENT_OVERRIDES } from "./constants-BP1FOJvU.js";
import { n as TELEMETRY_EVENT } from "./src-WHIExFVW.js";
import { n as useDebounce } from "./useDebounce-Bcd_ZnT1.js";
//#region ../@n8n/composables/src/useStorage.ts
function useStorage(key) {
	const data = useStorage$1(key, null, void 0, { writeDefaults: false });
	if (data.value === "undefined") data.value = null;
	return data;
}
//#endregion
//#region src/app/stores/posthog.store.ts
var POSTHOG_GROUP_TYPE_INSTANCE = "company";
var usePostHog = defineStore("posthog", () => {
	const usersStore = useUsersStore();
	const settingsStore = useSettingsStore();
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const { debounce } = useDebounce();
	const featureFlags = ref(null);
	const trackedDemoExp = ref({});
	const trackedExposures = ref({});
	const pendingFeatureFlagsEvaluation = ref(false);
	const overrides = ref({});
	let featureFlagsWaitPromise = null;
	let resolveFeatureFlagsWait = null;
	const clearFeatureFlagsWait = () => {
		featureFlagsWaitPromise = null;
		resolveFeatureFlagsWait = null;
	};
	const resolveFeatureFlagsWaiters = (flags) => {
		pendingFeatureFlagsEvaluation.value = false;
		if (resolveFeatureFlagsWait) resolveFeatureFlagsWait(flags);
		clearFeatureFlagsWait();
	};
	const reset = () => {
		window.posthog?.reset?.();
		featureFlags.value = null;
		trackedDemoExp.value = {};
		trackedExposures.value = {};
		pendingFeatureFlagsEvaluation.value = false;
		clearFeatureFlagsWait();
	};
	const getVariant = (experiment) => {
		return overrides.value[experiment] ?? featureFlags.value?.[experiment];
	};
	const isVariantEnabled = (experiment, variant) => {
		return getVariant(experiment) === variant;
	};
	/**
	* Checks if the given feature flag is enabled. Should only be used for boolean flags
	*/
	const isFeatureEnabled = (experiment) => {
		return getVariant(experiment) === true;
	};
	const hasPendingFeatureFlags = () => pendingFeatureFlagsEvaluation.value;
	const waitForFeatureFlags = async () => {
		if (!pendingFeatureFlagsEvaluation.value) return featureFlags.value;
		if (!featureFlagsWaitPromise) featureFlagsWaitPromise = new Promise((resolve) => {
			resolveFeatureFlagsWait = resolve;
		});
		return await featureFlagsWaitPromise;
	};
	if (!window.featureFlags) {
		const cachedOverrides = useStorage(LOCAL_STORAGE_EXPERIMENT_OVERRIDES).value;
		if (cachedOverrides) try {
			console.log("Overriding feature flags", cachedOverrides);
			if (typeof JSON.parse(cachedOverrides) === "object") overrides.value = JSON.parse(cachedOverrides);
		} catch (e) {
			console.log("Could not override experiment", e);
		}
		window.featureFlags = {
			override: (name, value) => {
				overrides.value[name] = value;
				try {
					useStorage(LOCAL_STORAGE_EXPERIMENT_OVERRIDES).value = JSON.stringify(overrides.value);
				} catch (e) {}
			},
			getVariant,
			getAll: () => featureFlags.value ?? {}
		};
	}
	const groupIdentify = (groupKey, instanceId) => {
		window.posthog?.group?.(groupKey, instanceId);
	};
	const identify = () => {
		const instanceId = rootStore.instanceId;
		const user = usersStore.currentUser;
		if (!user) return;
		const traits = {
			instance_id: instanceId,
			version_cli: rootStore.versionCli
		};
		if (typeof user.createdAt === "string") traits.created_at_timestamp = new Date(user.createdAt).getTime();
		window.posthog?.identify?.(`${instanceId}#${user.id}`, traits);
	};
	const trackExperiment = (featFlags, name) => {
		const variant = featFlags[name];
		if (!variant || trackedDemoExp.value[name] === variant) return;
		telemetry.track(TELEMETRY_EVENT.PLATFORM.USER_IS_PART_OF_EXPERIMENT, {
			name,
			variant
		});
		trackedDemoExp.value[name] = variant;
	};
	const trackExperiments = (featFlags) => {
		EXPERIMENTS_TO_TRACK.forEach((name) => trackExperiment(featFlags, name));
	};
	const trackExperimentsDebounced = debounce(trackExperiments, { debounceTime: 2e3 });
	const init = (evaluatedFeatureFlags) => {
		if (!window.posthog) return;
		const config = settingsStore.settings.posthog;
		if (!config.enabled) return;
		const userId = usersStore.currentUserId;
		if (!userId) return;
		const instanceId = rootStore.instanceId;
		const distinctId = `${instanceId}#${userId}`;
		const options = {
			api_host: settingsStore.settings.posthog.proxy,
			autocapture: config.autocapture,
			disable_session_recording: config.disableSessionRecording,
			debug: false,
			session_recording: { maskAllInputs: false },
			...!config.disableSessionRecording && { tracing_headers: [new URL(rootStore.restUrl, window.location.origin).hostname] }
		};
		if (evaluatedFeatureFlags && Object.keys(evaluatedFeatureFlags).length) {
			options.bootstrap = {
				distinctID: distinctId,
				featureFlags: evaluatedFeatureFlags
			};
			options.advanced_disable_feature_flags = true;
		}
		window.posthog?.init(config.apiKey, {
			...options,
			loaded: () => {
				identify();
				groupIdentify(POSTHOG_GROUP_TYPE_INSTANCE, instanceId);
			}
		});
		if (evaluatedFeatureFlags && Object.keys(evaluatedFeatureFlags).length) {
			featureFlags.value = evaluatedFeatureFlags;
			resolveFeatureFlagsWaiters(featureFlags.value);
			trackExperimentsDebounced(featureFlags.value);
		} else {
			pendingFeatureFlagsEvaluation.value = true;
			window.posthog?.onFeatureFlags?.((_, map) => {
				featureFlags.value = map;
				resolveFeatureFlagsWaiters(featureFlags.value);
				trackExperimentsDebounced(featureFlags.value);
			});
		}
	};
	const setMetadata = (metadata, target) => {
		if (typeof window.posthog?.people?.set !== "function") return;
		if (typeof window.posthog?.register !== "function") return;
		if (target === "user") window.posthog?.people?.set(metadata);
		else if (target === "events") window.posthog?.register(metadata);
	};
	const capture = (event, properties = {}) => {
		if (typeof window.posthog?.capture === "function") window.posthog.capture(event, properties);
	};
	/**
	* Fires PostHog's native exposure event for an experiment so results can use
	* built-in exposure analysis. Uses getVariant() so the recorded variant is the
	* one the user actually experienced, including local overrides. Deduped per
	* flag+variant; cleared on reset().
	*/
	const trackExposure = (experiment) => {
		const variant = getVariant(experiment);
		if (variant === void 0 || variant === false) return;
		if (trackedExposures.value[experiment] === variant) return;
		capture("$feature_flag_called", {
			$feature_flag: experiment,
			$feature_flag_response: variant
		});
		trackedExposures.value[experiment] = variant;
	};
	return {
		init,
		isFeatureEnabled,
		isVariantEnabled,
		getVariant,
		hasPendingFeatureFlags,
		waitForFeatureFlags,
		reset,
		identify,
		groupIdentify,
		setMetadata,
		capture,
		trackExposure,
		overrides
	};
});
//#endregion
export { useStorage as n, usePostHog as t };
