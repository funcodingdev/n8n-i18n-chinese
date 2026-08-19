import { t as useRootStore } from "./useRootStore-BSEpDaXx.js";
import { t as useSettingsStore } from "./settings.store-C7bZgKnf.js";
import { n as TelemetryKey, r as setTelemetry } from "./useTelemetry-CZKoOy4G.js";
import { t as usePostHog } from "./posthog.store-By4GjBhz.js";
import { Rn as SLACK_NODE_TYPE, Wn as TELEGRAM_NODE_TYPE } from "./constants-BqyeOg5z.js";
import { t as POSTHOG_EVENTS_BLACKLIST } from "./src-BhviKzfW.js";
import { n as useUIStore } from "./ui.store-DIz2Hj-V.js";
//#region src/app/plugins/telemetry/index.ts
var POSTHOG_BLACKLISTED_EVENT_NAMES = new Set(POSTHOG_EVENTS_BLACKLIST.map((blacklisted) => blacklisted.name));
var TelemetryService = class {
	pageEventQueue;
	previousPath;
	get rudderStack() {
		return window.rudderanalytics;
	}
	constructor() {
		this.pageEventQueue = [];
		this.previousPath = "";
	}
	init(telemetrySettings, { instanceId, userId, projectId, versionCli, userRole }) {
		if (!telemetrySettings.enabled || !telemetrySettings.config || this.rudderStack) return;
		const { config: { key, proxy, sourceConfig } } = telemetrySettings;
		const rootStore = useRootStore();
		this.initRudderStack(key, proxy, {
			integrations: { All: false },
			loadIntegration: false,
			configUrl: sourceConfig
		});
		this.identify({
			instanceId,
			userId,
			versionCli,
			projectId,
			userRole
		});
		this.flushPageEvents();
		this.track("Session started", { session_id: rootStore.pushRef });
	}
	identify({ instanceId, userId, versionCli, projectId, userRole }) {
		const settingsStore = useSettingsStore();
		const traits = {
			instance_id: instanceId,
			version_cli: versionCli,
			user_role: userRole
		};
		if (settingsStore.isCloudDeployment) traits.user_cloud_id = settingsStore.settings?.n8nMetadata?.userId ?? "";
		if (userId) this.rudderStack?.identify(`${instanceId}#${userId}${projectId ? "#" + projectId : ""}`, traits, { context: { ip: "0.0.0.0" } });
		else this.rudderStack?.reset();
	}
	track(event, properties) {
		const eventName = typeof event === "string" ? event : event.name;
		if (typeof event !== "string") {
			const validationError = event.getValidationError(properties);
			if (validationError) console.warn(validationError);
		}
		if (!this.rudderStack) return;
		const posthogSessionId = window.posthog?.get_session_id?.();
		const updatedProperties = {
			...properties,
			version_cli: useRootStore().versionCli,
			posthog_session_id: posthogSessionId
		};
		this.rudderStack.track(eventName, updatedProperties, { context: { ip: "0.0.0.0" } });
		if (!POSTHOG_BLACKLISTED_EVENT_NAMES.has(eventName)) usePostHog().capture(eventName, updatedProperties);
	}
	page(route) {
		if (this.rudderStack) {
			if (route.path === this.previousPath) return;
			this.previousPath = route.path;
			const pageName = String(route.name);
			let properties = {};
			if (route.meta?.telemetry && typeof route.meta.telemetry.getProperties === "function") properties = route.meta.telemetry.getProperties(route);
			properties.theme = useUIStore().appliedTheme;
			const category = route.meta?.telemetry?.pageCategory || "Editor";
			this.rudderStack.page(category, pageName, properties, { context: { ip: "0.0.0.0" } });
		} else this.pageEventQueue.push({ route });
	}
	reset() {
		this.rudderStack?.reset();
	}
	flushPageEvents() {
		const queue = this.pageEventQueue;
		this.pageEventQueue = [];
		queue.forEach(({ route }) => {
			this.page(route);
		});
	}
	trackAskAI(event, ndvPushRef, properties = {}) {
		if (this.rudderStack) {
			properties.session_id = useRootStore().pushRef;
			properties.ndv_session_id = ndvPushRef;
			switch (event) {
				case "askAi.generationFinished": this.track("Ai code generation finished", properties);
				default: break;
			}
		}
	}
	trackAiTransform(event, ndvPushRef, properties = {}) {
		if (this.rudderStack) {
			properties.session_id = useRootStore().pushRef;
			properties.ndv_session_id = ndvPushRef;
			switch (event) {
				case "generationFinished": this.track("Ai Transform code generation finished", properties);
				default: break;
			}
		}
	}
	trackNodeParametersValuesChange(nodeType, change) {
		if (this.rudderStack) {
			const changeName = {
				["n8n-nodes-base.slack"]: "parameters.otherOptions.includeLinkToWorkflow",
				["n8n-nodes-base.microsoftTeams"]: "parameters.options.includeLinkToWorkflow",
				["n8n-nodes-base.telegram"]: "parameters.additionalFields.appendAttribution"
			}[nodeType] || "parameters.options.appendAttribution";
			if (change.name === changeName) this.track("User toggled n8n reference option", {
				node: nodeType,
				toValue: change.value
			});
			const advancedHitlPathMap = {
				[SLACK_NODE_TYPE]: "parameters.captureResponder",
				[TELEGRAM_NODE_TYPE]: "parameters.chatApproval"
			};
			if (change.name === advancedHitlPathMap[nodeType] && change.value === true) this.track("User enabled advanced HITL", { node_type: nodeType });
		}
	}
	initRudderStack(key, proxy, options) {
		window.rudderanalytics = window.rudderanalytics || [];
		if (!this.rudderStack) return;
		this.rudderStack.methods = [
			"load",
			"page",
			"track",
			"identify",
			"alias",
			"group",
			"ready",
			"reset",
			"getAnonymousId",
			"setAnonymousId"
		];
		this.rudderStack.factory = (method) => {
			return (...args) => {
				if (!this.rudderStack) throw new Error("RudderStack not initialized");
				const argsCopy = [method, ...args];
				this.rudderStack.push(argsCopy);
				return this.rudderStack;
			};
		};
		for (const method of this.rudderStack.methods) this.rudderStack[method] = this.rudderStack.factory(method);
		this.rudderStack.loadJS = () => {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.async = !0;
			script.src = "https://cdn-rs.n8n.io/v1/ra.min.js";
			const element = document.getElementsByTagName("script")[0];
			if (element && element.parentNode) element.parentNode.insertBefore(script, element);
		};
		this.rudderStack.loadJS();
		this.rudderStack.load(key, proxy, options);
	}
};
var telemetry = new TelemetryService();
setTelemetry(telemetry);
var TelemetryPlugin = { install(app) {
	app.config.globalProperties.$telemetry = telemetry;
	app.provide(TelemetryKey, telemetry);
} };
//#endregion
export { telemetry as n, TelemetryPlugin as t };
