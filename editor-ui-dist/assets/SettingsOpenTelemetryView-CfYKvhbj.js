import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, _ as Fragment, bt as withCtx, c as useCssModule, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { S as useResizeObserver, h as useEventListener } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as DropdownMenu_default } from "./DropdownMenu-Dut73qNY.js";
import { o as DialogClose_default } from "./DialogTitle-vvfpWO6w.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { o as onBeforeRouteLeave } from "./vue-router-DPnGeMd9.js";
import { t as SettingsLayout_default } from "./SettingsLayout-DHeGpvCA.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-C2J-ZIx7.js";
import { n as SettingsRow_default, t as SettingsRowGroup_default } from "./SettingsRowGroup-CYye8n3_.js";
import { t as SettingsSection_default } from "./SettingsSection-0dD8DyrT.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as DialogFooter_default } from "./DialogFooter-AKzGUZKF.js";
import { Qn as makeRestApiRequest, fr as defineStore, t as useRootStore } from "./useRootStore-CvqfnFUt.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { i as OTEL_TEST_SPAN_NAME, r as OTEL_STORE, t as OTEL_FIELD_ENV_VARS } from "./otel.constants-DQOz_clt.js";
//#region ../@n8n/design-system/src/components/N8nSettingsSaveBar/SettingsSaveBar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["aria-label"];
var SettingsSaveBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsSaveBar",
	__name: "SettingsSaveBar",
	props: {
		visible: {
			type: Boolean,
			default: true
		},
		message: { default: "Unsaved changes" },
		saveLabel: { default: "Save settings" },
		discardLabel: { default: "Discard changes" },
		saving: {
			type: Boolean,
			default: false
		},
		saveDisabled: {
			type: Boolean,
			default: false
		},
		floating: {
			type: Boolean,
			default: false
		},
		saveShortcut: {
			type: Boolean,
			default: true
		}
	},
	emits: ["save", "discard"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const barElement = ref(null);
		const stuck = ref(false);
		function measureStuck() {
			const bar = barElement.value;
			const parent = bar?.parentElement;
			if (!props.floating || !bar || !parent) {
				stuck.value = false;
				return;
			}
			const parentStyle = getComputedStyle(parent);
			const flowBottom = parent.getBoundingClientRect().bottom - Number.parseFloat(parentStyle.paddingBottom) - Number.parseFloat(parentStyle.borderBottomWidth) - Number.parseFloat(getComputedStyle(bar).marginBottom);
			stuck.value = bar.getBoundingClientRect().bottom < flowBottom - 1;
		}
		watch([() => props.visible, () => props.floating], measureStuck, { flush: "post" });
		onMounted(measureStuck);
		useResizeObserver(computed(() => props.floating ? barElement.value?.parentElement : void 0), measureStuck);
		function onScroll(event) {
			const target = event.target;
			if (target instanceof Node && target !== document && !target.contains(barElement.value)) return;
			measureStuck();
		}
		useEventListener(window, "scroll", onScroll, {
			capture: true,
			passive: true
		});
		useEventListener(window, "resize", measureStuck, { passive: true });
		function onKeydown(event) {
			if (!props.saveShortcut || !props.visible || props.saving || props.saveDisabled) return;
			if (!((event.metaKey || event.ctrlKey) && (event.key === "s" || event.key === "S"))) return;
			event.preventDefault();
			emit("save");
		}
		useEventListener(window, "keydown", onKeydown);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Transition, {
				name: "n8n-settings-save-bar",
				onAfterEnter: measureStuck
			}, {
				default: withCtx(() => [__props.visible ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "barElement",
					ref: barElement,
					class: normalizeClass([_ctx.$style.bar, {
						[_ctx.$style.floating]: __props.floating,
						[_ctx.$style.docked]: __props.floating && !stuck.value
					}]),
					role: "region",
					"aria-label": __props.message,
					"aria-live": "polite",
					"data-test-id": "settings-save-bar"
				}, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.status),
					"data-test-id": "settings-save-bar-status"
				}, [renderSlot(_ctx.$slots, "default", {}, () => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.statusIcon),
					"aria-hidden": "true"
				}, [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					size: "medium"
				})], 2), createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.statusMessage)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.message), 1)]),
					_: 1
				}, 8, ["class"])])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [renderSlot(_ctx.$slots, "actions", {}, () => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					label: __props.discardLabel,
					disabled: __props.saving,
					"data-test-id": "settings-save-bar-discard",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("discard"))
				}, null, 8, ["label", "disabled"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					label: __props.saveLabel,
					loading: __props.saving,
					disabled: __props.saveDisabled,
					"data-test-id": "settings-save-bar-save",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("save"))
				}, null, 8, [
					"label",
					"loading",
					"disabled"
				])])], 2)], 10, _hoisted_1$2)) : createCommentVNode("", true)]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSettingsSaveBar/SettingsSaveBar.vue?vue&type=style&index=0&lang.module.scss
var bar = "_bar_3pzfm_393";
var docked = "_docked_3pzfm_457";
var floating = "_floating_3pzfm_464";
var actions = "_actions_3pzfm_488";
var status = "_status_3pzfm_496";
var statusIcon = "_statusIcon_3pzfm_504";
var statusMessage = "_statusMessage_3pzfm_512";
var shimmer$4 = "_shimmer_3pzfm_1";
var spin$4 = "_spin_3pzfm_1";
var opacityPulse$4 = "_opacityPulse_3pzfm_1";
var popoverIn$4 = "_popoverIn_3pzfm_1";
var fadeIn$4 = "_fadeIn_3pzfm_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_3pzfm_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_3pzfm_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_3pzfm_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_3pzfm_1";
var blurSwapIn$4 = "_blurSwapIn_3pzfm_1";
var blurSwapOut$4 = "_blurSwapOut_3pzfm_1";
var pulseGlow$4 = "_pulseGlow_3pzfm_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_3pzfm_1";
var fade$4 = "_fade_3pzfm_1";
var fadeInUp$4 = "_fadeInUp_3pzfm_1";
var fadeInDown$4 = "_fadeInDown_3pzfm_1";
var fadeInLeft$4 = "_fadeInLeft_3pzfm_1";
var fadeInRight$4 = "_fadeInRight_3pzfm_1";
var fadeOut$4 = "_fadeOut_3pzfm_1";
var fadeOutDown$4 = "_fadeOutDown_3pzfm_1";
var fadeOutUp$4 = "_fadeOutUp_3pzfm_1";
var fadeOutLeft$4 = "_fadeOutLeft_3pzfm_1";
var fadeOutRight$4 = "_fadeOutRight_3pzfm_1";
var ping$4 = "_ping_3pzfm_1";
var blinkBackground$4 = "_blinkBackground_3pzfm_1";
var typingBlink$4 = "_typingBlink_3pzfm_1";
var SettingsSaveBar_vue_vue_type_style_index_0_lang_module_default = {
	bar,
	docked,
	floating,
	actions,
	status,
	statusIcon,
	statusMessage,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_3pzfm_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var SettingsSaveBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSaveBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSaveBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/otel/otel.api.ts
async function getOtelSettings(context) {
	return await makeRestApiRequest(context, "GET", "/otel/settings");
}
async function updateOtelSettings(context, settings) {
	return await makeRestApiRequest(context, "PUT", "/otel/settings", settings);
}
async function sendOtelTestTrace(context, connection) {
	return await makeRestApiRequest(context, "POST", "/otel/test-trace", connection);
}
//#endregion
//#region src/features/settings/otel/otel.store.ts
function headersStringToPairs(str) {
	if (!str.trim()) return [];
	return str.split(",").map((pair) => {
		const idx = pair.indexOf("=");
		if (idx === -1) return {
			key: pair.trim(),
			value: ""
		};
		return {
			key: pair.slice(0, idx).trim(),
			value: pair.slice(idx + 1).trim()
		};
	}).filter((p) => p.key);
}
function headersPairsToString(pairs) {
	return pairs.filter((p) => p.key.trim()).map((p) => `${p.key}=${p.value}`).join(",");
}
var defaultSettings = {
	enabled: false,
	exporterEndpoint: "http://localhost:4318",
	exporterTracingPath: "/v1/traces",
	exporterServiceName: "n8n",
	exporterHeaders: "",
	tracesSampleRate: 1,
	startupConnectivityTimeoutMs: 2e3,
	includeNodeSpans: true,
	injectOutbound: true,
	productionExecutionsOnly: true
};
function extractSettings(response) {
	const { envManagedFields: _, ...settings } = response;
	return settings;
}
var useOtelStore = defineStore(OTEL_STORE, () => {
	const rootStore = useRootStore();
	const settings = ref({ ...defaultSettings });
	const savedSettings = ref({ ...defaultSettings });
	const envManagedFields = ref([]);
	const loading = ref(true);
	const saving = ref(false);
	const testState = ref("idle");
	const testError = ref("");
	const testTimestamp = ref("");
	const isDirty = computed(() => JSON.stringify(settings.value) !== JSON.stringify(savedSettings.value));
	async function fetchSettings() {
		loading.value = true;
		try {
			const fetched = await getOtelSettings(rootStore.restApiContext);
			settings.value = extractSettings(fetched);
			savedSettings.value = extractSettings(fetched);
			envManagedFields.value = fetched.envManagedFields;
		} finally {
			loading.value = false;
		}
	}
	async function saveSettings() {
		saving.value = true;
		try {
			const updated = await updateOtelSettings(rootStore.restApiContext, settings.value);
			settings.value = extractSettings(updated);
			savedSettings.value = extractSettings(updated);
			envManagedFields.value = updated.envManagedFields;
		} finally {
			saving.value = false;
		}
	}
	function discardChanges() {
		settings.value = { ...savedSettings.value };
	}
	let currentTestRun = 0;
	function resetTestState() {
		currentTestRun++;
		testState.value = "idle";
		testError.value = "";
		testTimestamp.value = "";
	}
	async function sendTestTrace() {
		const runId = ++currentTestRun;
		testState.value = "sending";
		testError.value = "";
		try {
			const result = await sendOtelTestTrace(rootStore.restApiContext, {
				exporterEndpoint: settings.value.exporterEndpoint,
				exporterTracingPath: settings.value.exporterTracingPath,
				exporterServiceName: settings.value.exporterServiceName,
				exporterHeaders: settings.value.exporterHeaders,
				startupConnectivityTimeoutMs: settings.value.startupConnectivityTimeoutMs
			});
			if (runId !== currentTestRun) return;
			if (result.success) {
				testTimestamp.value = (/* @__PURE__ */ new Date()).toLocaleTimeString();
				testState.value = "sent";
			} else {
				testError.value = result.error;
				testState.value = "error";
			}
		} catch (error) {
			if (runId !== currentTestRun) return;
			testError.value = error instanceof Error ? error.message : String(error);
			testState.value = "error";
		}
	}
	return {
		settings,
		savedSettings,
		envManagedFields,
		loading,
		saving,
		isDirty,
		testState,
		testError,
		testTimestamp,
		fetchSettings,
		saveSettings,
		discardChanges,
		sendTestTrace,
		resetTestState
	};
});
//#endregion
//#region src/features/settings/otel/otel.utils.ts
/**
* Locale-aware formatting and parsing for the traces sample rate (0..1).
*
* The parser inverts the formatter: the locale's digits are mapped back to
* ASCII and its decimal separator is accepted alongside '.' and ',', so any
* value the formatter renders (or a user types) parses back to the same number.
*/
function createSampleRateFormat(locale) {
	const formatter = new Intl.NumberFormat(locale, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	});
	const decimalSeparator = formatter.formatToParts(1.1).find((part) => part.type === "decimal")?.value ?? ".";
	const digitFormatter = new Intl.NumberFormat(locale);
	const asciiDigits = new Map(Array.from({ length: 10 }, (_, digit) => [digitFormatter.format(digit), String(digit)]));
	/** Parse a rate in this locale; null when not a number (incl. empty). Clamps to [0, 1]. */
	function parse(text) {
		const trimmed = text.replace(/[\u200e\u200f\u061c]/gu, "").trim();
		if (!trimmed) return null;
		const normalized = [...trimmed].map((char) => asciiDigits.get(char) ?? char).join("").replace(decimalSeparator, ".").replace(",", ".");
		const parsed = Number(normalized);
		return Number.isFinite(parsed) ? Math.min(1, Math.max(0, parsed)) : null;
	}
	return {
		format: (value) => formatter.format(value),
		parse
	};
}
//#endregion
//#region src/features/settings/otel/OtelSettingsRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var OtelSettingsRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "OtelSettingsRow",
	props: {
		title: {},
		description: {},
		envTooltip: { default: void 0 },
		layout: { default: "horizontal" },
		actionFill: {
			type: Boolean,
			default: false
		},
		actionMaxWidth: {
			type: [String, Boolean],
			default: "50%"
		},
		descriptionError: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsRow_default), mergeProps(_ctx.$attrs, {
				layout: __props.layout,
				"action-fill": __props.actionFill,
				"action-max-width": __props.actionMaxWidth
			}), {
				info: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "medium",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}), __props.envTooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: __props.envTooltip,
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.envInfo),
						role: "img",
						tabindex: "0",
						"aria-label": __props.envTooltip
					}, [createVNode(unref(N8nIcon_default), {
						icon: "circle-help",
						size: "small"
					})], 10, _hoisted_1$1)]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), {
					size: "small",
					color: __props.descriptionError ? "danger" : "text-light",
					"data-test-id": __props.descriptionError ? "otel-settings-row-error" : void 0
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
					_: 1
				}, 8, ["color", "data-test-id"])], 2)]),
				action: withCtx(() => [renderSlot(_ctx.$slots, "action")]),
				_: 3
			}, 16, [
				"layout",
				"action-fill",
				"action-max-width"
			]);
		};
	}
});
//#endregion
//#region src/features/settings/otel/OtelSettingsRow.vue?vue&type=style&index=0&lang.module.scss
var info = "_info_1k7s1_388";
var title = "_title_1k7s1_395";
var envInfo = "_envInfo_1k7s1_401";
var shimmer$3 = "_shimmer_1k7s1_1";
var spin$3 = "_spin_1k7s1_1";
var opacityPulse$3 = "_opacityPulse_1k7s1_1";
var popoverIn$3 = "_popoverIn_1k7s1_1";
var fadeIn$3 = "_fadeIn_1k7s1_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_1k7s1_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_1k7s1_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_1k7s1_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_1k7s1_1";
var blurSwapIn$3 = "_blurSwapIn_1k7s1_1";
var blurSwapOut$3 = "_blurSwapOut_1k7s1_1";
var pulseGlow$3 = "_pulseGlow_1k7s1_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_1k7s1_1";
var fade$3 = "_fade_1k7s1_1";
var fadeInUp$3 = "_fadeInUp_1k7s1_1";
var fadeInDown$3 = "_fadeInDown_1k7s1_1";
var fadeInLeft$3 = "_fadeInLeft_1k7s1_1";
var fadeInRight$3 = "_fadeInRight_1k7s1_1";
var fadeOut$3 = "_fadeOut_1k7s1_1";
var fadeOutDown$3 = "_fadeOutDown_1k7s1_1";
var fadeOutUp$3 = "_fadeOutUp_1k7s1_1";
var fadeOutLeft$3 = "_fadeOutLeft_1k7s1_1";
var fadeOutRight$3 = "_fadeOutRight_1k7s1_1";
var ping$3 = "_ping_1k7s1_1";
var blinkBackground$3 = "_blinkBackground_1k7s1_1";
var typingBlink$3 = "_typingBlink_1k7s1_1";
var OtelSettingsRow_vue_vue_type_style_index_0_lang_module_default = {
	info,
	title,
	envInfo,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_1k7s1_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var OtelSettingsRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OtelSettingsRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OtelSettingsRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/otel/OtelStatusDot.vue?vue&type=style&index=0&lang.module.scss
var dot = "_dot_1scs7_393";
var shimmer$2 = "_shimmer_1scs7_1";
var spin$2 = "_spin_1scs7_1";
var opacityPulse$2 = "_opacityPulse_1scs7_1";
var popoverIn$2 = "_popoverIn_1scs7_1";
var fadeIn$2 = "_fadeIn_1scs7_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1scs7_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1scs7_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1scs7_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1scs7_1";
var blurSwapIn$2 = "_blurSwapIn_1scs7_1";
var blurSwapOut$2 = "_blurSwapOut_1scs7_1";
var pulseGlow$2 = "_pulseGlow_1scs7_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1scs7_1";
var fade$2 = "_fade_1scs7_1";
var fadeInUp$2 = "_fadeInUp_1scs7_1";
var fadeInDown$2 = "_fadeInDown_1scs7_1";
var fadeInLeft$2 = "_fadeInLeft_1scs7_1";
var fadeInRight$2 = "_fadeInRight_1scs7_1";
var fadeOut$2 = "_fadeOut_1scs7_1";
var fadeOutDown$2 = "_fadeOutDown_1scs7_1";
var fadeOutUp$2 = "_fadeOutUp_1scs7_1";
var fadeOutLeft$2 = "_fadeOutLeft_1scs7_1";
var fadeOutRight$2 = "_fadeOutRight_1scs7_1";
var ping$2 = "_ping_1scs7_1";
var blinkBackground$2 = "_blinkBackground_1scs7_1";
var typingBlink$2 = "_typingBlink_1scs7_1";
var OtelStatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot,
	"status-dot-pulse": "_status-dot-pulse_1scs7_1",
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1scs7_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
//#endregion
//#region src/features/settings/otel/OtelStatusDot.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.dot),
		"aria-hidden": "true"
	}, null, 2);
}
var OtelStatusDot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": OtelStatusDot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/otel/OtelStatusControl.vue?vue&type=script&setup=true&lang.ts
var OtelStatusControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OtelStatusControl",
	props: {
		enabled: { type: Boolean },
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:enabled"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const $style = useCssModule();
		const menuItems = computed(() => [{
			id: "disable",
			label: i18n.baseText("settings.opentelemetry.enable.action.disable"),
			icon: {
				type: "icon",
				value: "power"
			},
			class: $style.dangerItem
		}]);
		function onSelect(id) {
			if (id === "disable") emit("update:enabled", false);
		}
		return (_ctx, _cache) => {
			return __props.enabled ? (openBlock(), createBlock(unref(DropdownMenu_default), {
				key: 0,
				items: menuItems.value,
				placement: "bottom-end",
				disabled: __props.disabled || __props.loading,
				"data-test-id": "otel-enabled-menu",
				onSelect
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					disabled: __props.disabled,
					loading: __props.loading,
					"aria-label": unref(i18n).baseText("settings.opentelemetry.enable.action.enabledAriaLabel"),
					"data-test-id": "otel-enabled-toggle"
				}, {
					default: withCtx(() => [
						createVNode(OtelStatusDot_default),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("settings.opentelemetry.enable.option.enabled")) + " ", 1),
						createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: "small"
						})
					]),
					_: 1
				}, 8, [
					"disabled",
					"loading",
					"aria-label"
				])]),
				_: 1
			}, 8, ["items", "disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "outline",
				size: "medium",
				disabled: __props.disabled,
				loading: __props.loading,
				"aria-label": unref(i18n).baseText("settings.opentelemetry.enable.action.enableAriaLabel"),
				"data-test-id": "otel-enabled-toggle",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("update:enabled", true))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.enable.action.enable")), 1)]),
				_: 1
			}, 8, [
				"disabled",
				"loading",
				"aria-label"
			]));
		};
	}
});
//#endregion
//#region src/features/settings/otel/OtelStatusControl.vue?vue&type=style&index=0&lang.module.scss
var dangerItem = "_dangerItem_1ulyc_392";
var shimmer$1 = "_shimmer_1ulyc_1";
var spin$1 = "_spin_1ulyc_1";
var opacityPulse$1 = "_opacityPulse_1ulyc_1";
var popoverIn$1 = "_popoverIn_1ulyc_1";
var fadeIn$1 = "_fadeIn_1ulyc_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1ulyc_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1ulyc_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1ulyc_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1ulyc_1";
var blurSwapIn$1 = "_blurSwapIn_1ulyc_1";
var blurSwapOut$1 = "_blurSwapOut_1ulyc_1";
var pulseGlow$1 = "_pulseGlow_1ulyc_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1ulyc_1";
var fade$1 = "_fade_1ulyc_1";
var fadeInUp$1 = "_fadeInUp_1ulyc_1";
var fadeInDown$1 = "_fadeInDown_1ulyc_1";
var fadeInLeft$1 = "_fadeInLeft_1ulyc_1";
var fadeInRight$1 = "_fadeInRight_1ulyc_1";
var fadeOut$1 = "_fadeOut_1ulyc_1";
var fadeOutDown$1 = "_fadeOutDown_1ulyc_1";
var fadeOutUp$1 = "_fadeOutUp_1ulyc_1";
var fadeOutLeft$1 = "_fadeOutLeft_1ulyc_1";
var fadeOutRight$1 = "_fadeOutRight_1ulyc_1";
var ping$1 = "_ping_1ulyc_1";
var blinkBackground$1 = "_blinkBackground_1ulyc_1";
var typingBlink$1 = "_typingBlink_1ulyc_1";
var OtelStatusControl_vue_vue_type_style_index_0_lang_module_default = {
	dangerItem,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1ulyc_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var OtelStatusControl_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OtelStatusControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OtelStatusControl_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/otel/SettingsOpenTelemetryView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "otel-unsaved-changes-dialog" };
var OTEL_DOCS_URL = "https://docs.n8n.io/hosting/logging-monitoring/opentelemetry/";
var SettingsOpenTelemetryView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsOpenTelemetryView",
	setup(__props) {
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const otelStore = useOtelStore();
		const headerPairs = ref([]);
		const showUnsavedChangesDialog = ref(false);
		const pendingNext = ref(null);
		function syncHeaderPairsFromStore() {
			headerPairs.value = headersStringToPairs(otelStore.settings.exporterHeaders);
		}
		function syncHeaderPairsToStore() {
			otelStore.settings.exporterHeaders = headersPairsToString(headerPairs.value);
		}
		function addHeader() {
			headerPairs.value.push({
				key: "",
				value: ""
			});
			syncHeaderPairsToStore();
		}
		function removeHeader(index) {
			headerPairs.value.splice(index, 1);
			syncHeaderPairsToStore();
		}
		function onHeaderChange(index, field, value) {
			headerPairs.value = headerPairs.value.map((pair, i) => i === index ? {
				...pair,
				[field]: value
			} : pair);
			syncHeaderPairsToStore();
		}
		function isEnvManaged(field) {
			return otelStore.envManagedFields.includes(field);
		}
		const statusDescription = computed(() => otelStore.settings.enabled ? i18n.baseText("settings.opentelemetry.status.enabledDescription") : i18n.baseText("settings.opentelemetry.status.disabledDescription"));
		function envTooltip(field) {
			const envVariable = i18n.baseText("settings.opentelemetry.envVarTooltip", { interpolate: { envVar: OTEL_FIELD_ENV_VARS[field] } });
			return isEnvManaged(field) ? `${i18n.baseText("settings.opentelemetry.envVarManagedTooltip")}. ${envVariable}` : envVariable;
		}
		async function save() {
			try {
				const wasEnabled = otelStore.savedSettings.enabled;
				await otelStore.saveSettings();
				const isNowEnabled = otelStore.settings.enabled;
				if (!wasEnabled && isNowEnabled) telemetry.track("Activated otel via UI", {
					includeNodeSpans: otelStore.settings.includeNodeSpans,
					productionExecutionsOnly: otelStore.settings.productionExecutionsOnly,
					tracesSampleRate: otelStore.settings.tracesSampleRate,
					injectOutbound: otelStore.settings.injectOutbound
				});
				else if (wasEnabled && !isNowEnabled) telemetry.track("Disabled otel via UI");
				else telemetry.track("Updated otel via UI", {
					enabled: isNowEnabled,
					includeNodeSpans: otelStore.settings.includeNodeSpans,
					productionExecutionsOnly: otelStore.settings.productionExecutionsOnly,
					tracesSampleRate: otelStore.settings.tracesSampleRate,
					injectOutbound: otelStore.settings.injectOutbound
				});
				toast.showMessage({
					title: i18n.baseText("settings.opentelemetry.savedSuccess"),
					type: "success"
				});
				return true;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.opentelemetry.savedError"));
				return false;
			}
		}
		function discard() {
			otelStore.discardChanges();
			syncHeaderPairsFromStore();
		}
		const statusSaving = ref(false);
		async function onToggleEnabled(enabled) {
			otelStore.settings.enabled = enabled;
			statusSaving.value = true;
			try {
				if (!await save()) otelStore.settings.enabled = !enabled;
			} finally {
				statusSaving.value = false;
			}
		}
		function onLeaveWithoutSaving() {
			showUnsavedChangesDialog.value = false;
			pendingNext.value?.();
			pendingNext.value = null;
		}
		async function onSaveAndLeave() {
			if (!await save()) return;
			showUnsavedChangesDialog.value = false;
			pendingNext.value?.();
			pendingNext.value = null;
		}
		function onKeepEditing() {
			showUnsavedChangesDialog.value = false;
			pendingNext.value?.(false);
			pendingNext.value = null;
		}
		onBeforeRouteLeave((_to, _from, next) => {
			if (!otelStore.isDirty) {
				next();
				return;
			}
			pendingNext.value = next;
			showUnsavedChangesDialog.value = true;
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.opentelemetry.title"));
			await otelStore.fetchSettings();
			syncHeaderPairsFromStore();
			syncSampleRateInput();
			syncConnectivityTimeoutInput();
		});
		watch(() => otelStore.settings?.exporterHeaders, (newVal) => {
			if (newVal !== headersPairsToString(headerPairs.value)) headerPairs.value = headersStringToPairs(newVal ?? "");
		});
		const canTestTrace = computed(() => !!otelStore.settings.exporterEndpoint && otelStore.testState !== "sending");
		const { format: formatSampleRate, parse: parseSampleRate } = createSampleRateFormat();
		const sampleRateMax = formatSampleRate(1);
		const sampleRateInput = ref("");
		const connectivityTimeoutInput = ref("");
		function syncSampleRateInput() {
			sampleRateInput.value = formatSampleRate(otelStore.settings.tracesSampleRate);
		}
		function syncConnectivityTimeoutInput() {
			connectivityTimeoutInput.value = String(otelStore.settings.startupConnectivityTimeoutMs);
		}
		function parseConnectivityTimeout(text) {
			const trimmed = text.trim();
			if (!trimmed) return null;
			const parsed = Number(trimmed);
			return Number.isFinite(parsed) ? Math.max(0, Math.round(parsed)) : null;
		}
		function commitSampleRate() {
			const parsed = parseSampleRate(sampleRateInput.value);
			if (parsed !== null) otelStore.settings.tracesSampleRate = parsed;
			syncSampleRateInput();
		}
		function commitConnectivityTimeout() {
			const parsed = parseConnectivityTimeout(connectivityTimeoutInput.value);
			if (parsed !== null) otelStore.settings.startupConnectivityTimeoutMs = parsed;
			syncConnectivityTimeoutInput();
		}
		function stepSampleRate(direction) {
			const current = parseSampleRate(sampleRateInput.value) ?? otelStore.settings.tracesSampleRate;
			const next = Math.min(1, Math.max(0, Math.round((current + direction * .01) * 100) / 100));
			otelStore.settings.tracesSampleRate = next;
			syncSampleRateInput();
		}
		function stepConnectivityTimeout(direction) {
			const current = parseConnectivityTimeout(connectivityTimeoutInput.value) ?? otelStore.settings.startupConnectivityTimeoutMs;
			otelStore.settings.startupConnectivityTimeoutMs = Math.max(0, current + direction * 100);
			syncConnectivityTimeoutInput();
		}
		watch(sampleRateInput, (text) => {
			const parsed = parseSampleRate(text);
			if (parsed !== null) otelStore.settings.tracesSampleRate = parsed;
		});
		watch(connectivityTimeoutInput, (text) => {
			const parsed = parseConnectivityTimeout(text);
			if (parsed !== null) otelStore.settings.startupConnectivityTimeoutMs = parsed;
		});
		watch(() => otelStore.settings.tracesSampleRate, (value) => {
			if (parseSampleRate(sampleRateInput.value) !== value) syncSampleRateInput();
		});
		watch(() => otelStore.settings.startupConnectivityTimeoutMs, (value) => {
			if (parseConnectivityTimeout(connectivityTimeoutInput.value) !== value) syncConnectivityTimeoutInput();
		});
		const testTraceSubtitle = computed(() => {
			if (otelStore.testState === "sent") return i18n.baseText("settings.opentelemetry.testTrace.success", { interpolate: {
				spanName: OTEL_TEST_SPAN_NAME,
				time: otelStore.testTimestamp
			} });
			if (otelStore.testState === "error") return i18n.baseText("settings.opentelemetry.testTrace.error", { interpolate: { error: otelStore.testError } });
			return i18n.baseText("settings.opentelemetry.testTrace.description");
		});
		async function onSendTestTrace() {
			await otelStore.sendTestTrace();
		}
		watch(() => [
			otelStore.settings.exporterEndpoint,
			otelStore.settings.exporterTracingPath,
			otelStore.settings.exporterServiceName,
			otelStore.settings.exporterHeaders,
			otelStore.settings.startupConnectivityTimeoutMs
		], () => {
			if (otelStore.testState !== "idle") otelStore.resetTestState();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), { class: normalizeClass(_ctx.$style.layout) }, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.opentelemetry.title"),
						description: unref(i18n).baseText("settings.opentelemetry.description"),
						"docs-url": OTEL_DOCS_URL
					}, null, 8, ["title", "description"]),
					unref(otelStore).loading ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loading),
						"data-test-id": "otel-loading"
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						spin: ""
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.settingsContent)
					}, [
						createVNode(unref(SettingsSection_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(OtelSettingsRow_default, {
									title: unref(i18n).baseText("settings.opentelemetry.status.label"),
									description: statusDescription.value,
									"env-tooltip": envTooltip("enabled")
								}, {
									action: withCtx(() => [createVNode(OtelStatusControl_default, {
										enabled: unref(otelStore).settings.enabled,
										disabled: isEnvManaged("enabled"),
										loading: statusSaving.value,
										"onUpdate:enabled": onToggleEnabled
									}, null, 8, [
										"enabled",
										"disabled",
										"loading"
									])]),
									_: 1
								}, 8, [
									"title",
									"description",
									"env-tooltip"
								])]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.opentelemetry.collectorConnection.title") }, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.label"),
										description: unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.description"),
										"env-tooltip": envTooltip("exporterEndpoint"),
										"action-fill": ""
									}, {
										action: withCtx(() => [createVNode(unref(Input_default), {
											modelValue: unref(otelStore).settings.exporterEndpoint,
											"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(otelStore).settings.exporterEndpoint = $event),
											class: normalizeClass(_ctx.$style.control),
											placeholder: unref(i18n).baseText("settings.opentelemetry.exporterEndpoint.placeholder"),
											disabled: isEnvManaged("exporterEndpoint"),
											"data-test-id": "otel-exporter-endpoint"
										}, null, 8, [
											"modelValue",
											"class",
											"placeholder",
											"disabled"
										])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.exporterServiceName.label"),
										description: unref(i18n).baseText("settings.opentelemetry.exporterServiceName.description"),
										"env-tooltip": envTooltip("exporterServiceName"),
										"action-fill": ""
									}, {
										action: withCtx(() => [createVNode(unref(Input_default), {
											modelValue: unref(otelStore).settings.exporterServiceName,
											"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(otelStore).settings.exporterServiceName = $event),
											class: normalizeClass(_ctx.$style.control),
											placeholder: unref(i18n).baseText("settings.opentelemetry.exporterServiceName.placeholder"),
											disabled: isEnvManaged("exporterServiceName"),
											"data-test-id": "otel-service-name"
										}, null, 8, [
											"modelValue",
											"class",
											"placeholder",
											"disabled"
										])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.exporterHeaders.label"),
										description: unref(i18n).baseText("settings.opentelemetry.exporterHeaders.description"),
										"env-tooltip": envTooltip("exporterHeaders"),
										layout: "vertical",
										"action-fill": "",
										"action-max-width": false
									}, {
										action: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headersBlock) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(headerPairs.value, (pair, index) => {
											return openBlock(), createElementBlock("div", {
												key: index,
												class: normalizeClass(_ctx.$style.headerRow)
											}, [
												createVNode(unref(N8nInputLabel_default), {
													label: index === 0 ? unref(i18n).baseText("settings.opentelemetry.exporterHeaders.keyLabel") : void 0,
													size: "small"
												}, {
													default: withCtx(() => [createVNode(unref(Input_default), {
														"model-value": pair.key,
														placeholder: unref(i18n).baseText("settings.opentelemetry.exporterHeaders.keyPlaceholder"),
														disabled: isEnvManaged("exporterHeaders"),
														"data-test-id": "otel-header-key",
														"onUpdate:modelValue": (v) => onHeaderChange(index, "key", v)
													}, null, 8, [
														"model-value",
														"placeholder",
														"disabled",
														"onUpdate:modelValue"
													])]),
													_: 2
												}, 1032, ["label"]),
												createVNode(unref(N8nInputLabel_default), {
													label: index === 0 ? unref(i18n).baseText("settings.opentelemetry.exporterHeaders.valueLabel") : void 0,
													size: "small"
												}, {
													default: withCtx(() => [createVNode(unref(Input_default), {
														"model-value": pair.value,
														placeholder: unref(i18n).baseText("settings.opentelemetry.exporterHeaders.valuePlaceholder"),
														disabled: isEnvManaged("exporterHeaders"),
														"data-test-id": "otel-header-value",
														"onUpdate:modelValue": (v) => onHeaderChange(index, "value", v)
													}, null, 8, [
														"model-value",
														"placeholder",
														"disabled",
														"onUpdate:modelValue"
													])]),
													_: 2
												}, 1032, ["label"]),
												createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerRemove) }, [createVNode(unref(N8nButton_default), {
													icon: "trash-2",
													variant: "ghost",
													size: "small",
													"native-type": "button",
													disabled: isEnvManaged("exporterHeaders"),
													"aria-label": unref(i18n).baseText("settings.opentelemetry.exporterHeaders.remove"),
													"data-test-id": "otel-header-remove",
													onClick: withModifiers(($event) => removeHeader(index), ["stop", "prevent"])
												}, null, 8, [
													"disabled",
													"aria-label",
													"onClick"
												])], 2)
											], 2);
										}), 128)), createVNode(unref(N8nButton_default), {
											icon: "plus",
											variant: "subtle",
											size: "small",
											"native-type": "button",
											disabled: isEnvManaged("exporterHeaders"),
											class: normalizeClass(_ctx.$style.addHeaderButton),
											"data-test-id": "otel-header-add",
											onClick: withModifiers(addHeader, ["stop", "prevent"])
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.exporterHeaders.addHeader")), 1)]),
											_: 1
										}, 8, ["disabled", "class"])], 2)]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.label"),
										description: unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.description"),
										"env-tooltip": envTooltip("exporterTracingPath"),
										"action-fill": ""
									}, {
										action: withCtx(() => [createVNode(unref(Input_default), {
											modelValue: unref(otelStore).settings.exporterTracingPath,
											"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(otelStore).settings.exporterTracingPath = $event),
											class: normalizeClass(_ctx.$style.control),
											placeholder: unref(i18n).baseText("settings.opentelemetry.exporterTracingPath.placeholder"),
											disabled: isEnvManaged("exporterTracingPath"),
											"data-test-id": "otel-tracing-path"
										}, null, 8, [
											"modelValue",
											"class",
											"placeholder",
											"disabled"
										])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.label"),
										description: unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.description"),
										"env-tooltip": envTooltip("startupConnectivityTimeoutMs")
									}, {
										action: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWithSlug) }, [createVNode(unref(Input_default), {
											modelValue: connectivityTimeoutInput.value,
											"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => connectivityTimeoutInput.value = $event),
											disabled: isEnvManaged("startupConnectivityTimeoutMs"),
											"aria-label": unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.label"),
											"data-test-id": "otel-connectivity-timeout",
											onBlur: commitConnectivityTimeout,
											onKeydown: [
												withKeys(commitConnectivityTimeout, ["enter"]),
												_cache[4] || (_cache[4] = withKeys(withModifiers(($event) => stepConnectivityTimeout(1), ["prevent"]), ["up"])),
												_cache[5] || (_cache[5] = withKeys(withModifiers(($event) => stepConnectivityTimeout(-1), ["prevent"]), ["down"]))
											]
										}, null, 8, [
											"modelValue",
											"disabled",
											"aria-label"
										]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.slug) }, toDisplayString(unref(i18n).baseText("settings.opentelemetry.startupConnectivityTimeoutMs.slug")), 3)], 2)]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.testTrace.label"),
										description: testTraceSubtitle.value,
										"description-error": unref(otelStore).testState === "error"
									}, {
										action: withCtx(() => [unref(otelStore).testState === "sent" ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "outline",
											icon: "check",
											"native-type": "button",
											"data-test-id": "otel-test-trace-button",
											onClick: withModifiers(onSendTestTrace, ["stop", "prevent"])
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.opentelemetry.testTrace.sent")), 1)]),
											_: 1
										})) : (openBlock(), createBlock(unref(N8nButton_default), {
											key: 1,
											variant: "outline",
											loading: unref(otelStore).testState === "sending",
											disabled: !canTestTrace.value,
											"native-type": "button",
											"data-test-id": "otel-test-trace-button",
											onClick: withModifiers(onSendTestTrace, ["stop", "prevent"])
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(otelStore).testState === "sending" ? unref(i18n).baseText("settings.opentelemetry.testTrace.sending") : unref(i18n).baseText("settings.opentelemetry.testTrace.send")), 1)]),
											_: 1
										}, 8, ["loading", "disabled"]))]),
										_: 1
									}, 8, [
										"title",
										"description",
										"description-error"
									])
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["title"]),
						createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.opentelemetry.tracing.title") }, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.label"),
										description: unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.description", { interpolate: { max: unref(sampleRateMax) } }),
										"env-tooltip": envTooltip("tracesSampleRate")
									}, {
										action: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWithSlug) }, [createVNode(unref(Input_default), {
											modelValue: sampleRateInput.value,
											"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sampleRateInput.value = $event),
											disabled: isEnvManaged("tracesSampleRate"),
											"aria-label": unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.label"),
											"data-test-id": "otel-sample-rate",
											onBlur: commitSampleRate,
											onKeydown: [
												withKeys(commitSampleRate, ["enter"]),
												_cache[7] || (_cache[7] = withKeys(withModifiers(($event) => stepSampleRate(1), ["prevent"]), ["up"])),
												_cache[8] || (_cache[8] = withKeys(withModifiers(($event) => stepSampleRate(-1), ["prevent"]), ["down"]))
											]
										}, null, 8, [
											"modelValue",
											"disabled",
											"aria-label"
										]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.slug) }, toDisplayString(unref(i18n).baseText("settings.opentelemetry.tracesSampleRate.slug", { interpolate: { max: unref(sampleRateMax) } })), 3)], 2)]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.includeNodeSpans.label"),
										description: unref(i18n).baseText("settings.opentelemetry.includeNodeSpans.description"),
										"env-tooltip": envTooltip("includeNodeSpans")
									}, {
										action: withCtx(() => [createVNode(unref(Checkbox_default), {
											"model-value": unref(otelStore).settings.includeNodeSpans,
											disabled: isEnvManaged("includeNodeSpans"),
											"data-test-id": "otel-include-node-spans",
											"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(otelStore).settings.includeNodeSpans = Boolean($event))
										}, null, 8, ["model-value", "disabled"])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.injectOutbound.label"),
										description: unref(i18n).baseText("settings.opentelemetry.injectOutbound.description"),
										"env-tooltip": envTooltip("injectOutbound")
									}, {
										action: withCtx(() => [createVNode(unref(Checkbox_default), {
											"model-value": unref(otelStore).settings.injectOutbound,
											disabled: isEnvManaged("injectOutbound"),
											"data-test-id": "otel-inject-outbound",
											"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(otelStore).settings.injectOutbound = Boolean($event))
										}, null, 8, ["model-value", "disabled"])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									]),
									createVNode(OtelSettingsRow_default, {
										title: unref(i18n).baseText("settings.opentelemetry.productionExecutionsOnly.label"),
										description: unref(i18n).baseText("settings.opentelemetry.productionExecutionsOnly.description"),
										"env-tooltip": envTooltip("productionExecutionsOnly")
									}, {
										action: withCtx(() => [createVNode(unref(Checkbox_default), {
											"model-value": unref(otelStore).settings.productionExecutionsOnly,
											disabled: isEnvManaged("productionExecutionsOnly"),
											"data-test-id": "otel-production-only",
											"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(otelStore).settings.productionExecutionsOnly = Boolean($event))
										}, null, 8, ["model-value", "disabled"])]),
										_: 1
									}, 8, [
										"title",
										"description",
										"env-tooltip"
									])
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["title"]),
						createVNode(unref(SettingsSaveBar_default), {
							class: normalizeClass(_ctx.$style.saveBar),
							visible: unref(otelStore).isDirty,
							message: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.title"),
							"save-label": unref(i18n).baseText("settings.opentelemetry.save"),
							"discard-label": unref(i18n).baseText("settings.opentelemetry.discard"),
							saving: unref(otelStore).saving,
							floating: "",
							onSave: save,
							onDiscard: discard
						}, null, 8, [
							"class",
							"visible",
							"message",
							"save-label",
							"discard-label",
							"saving"
						])
					], 2)),
					createVNode(unref(Dialog_default), {
						open: showUnsavedChangesDialog.value,
						"onUpdate:open": _cache[12] || (_cache[12] = ($event) => showUnsavedChangesDialog.value = $event),
						header: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.title"),
						description: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.message"),
						size: "medium"
					}, {
						default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createVNode(unref(DialogFooter_default), null, {
							default: withCtx(() => [
								createVNode(unref(DialogClose_default), { "as-child": "" }, {
									default: withCtx(() => [createVNode(unref(N8nButton_default), {
										variant: "outline",
										label: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.cancel"),
										onClick: onKeepEditing
									}, null, 8, ["label"])]),
									_: 1
								}),
								createVNode(unref(N8nButton_default), {
									variant: "outline",
									label: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.leaveWithoutSaving"),
									onClick: onLeaveWithoutSaving
								}, null, 8, ["label"]),
								createVNode(unref(N8nButton_default), {
									variant: "solid",
									label: unref(i18n).baseText("settings.opentelemetry.unsavedChanges.saveAndLeave"),
									loading: unref(otelStore).saving,
									onClick: onSaveAndLeave
								}, null, 8, ["label", "loading"])
							]),
							_: 1
						})])]),
						_: 1
					}, 8, [
						"open",
						"header",
						"description"
					])
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/settings/otel/SettingsOpenTelemetryView.vue?vue&type=style&index=0&lang.module.scss
var layout = "_layout_zkms8_388";
var settingsContent = "_settingsContent_zkms8_392";
var saveBar = "_saveBar_zkms8_398";
var loading = "_loading_zkms8_406";
var control = "_control_zkms8_414";
var headersBlock = "_headersBlock_zkms8_418";
var headerRow = "_headerRow_zkms8_426";
var headerRemove = "_headerRemove_zkms8_437";
var addHeaderButton = "_addHeaderButton_zkms8_445";
var inputWithSlug = "_inputWithSlug_zkms8_449";
var slug = "_slug_zkms8_460";
var shimmer = "_shimmer_zkms8_1";
var spin = "_spin_zkms8_1";
var opacityPulse = "_opacityPulse_zkms8_1";
var popoverIn = "_popoverIn_zkms8_1";
var fadeIn = "_fadeIn_zkms8_1";
var collapsibleSlideDown = "_collapsibleSlideDown_zkms8_1";
var collapsibleSlideUp = "_collapsibleSlideUp_zkms8_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_zkms8_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_zkms8_1";
var blurSwapIn = "_blurSwapIn_zkms8_1";
var blurSwapOut = "_blurSwapOut_zkms8_1";
var pulseGlow = "_pulseGlow_zkms8_1";
var pulseGlowDelayed = "_pulseGlowDelayed_zkms8_1";
var fade = "_fade_zkms8_1";
var fadeInUp = "_fadeInUp_zkms8_1";
var fadeInDown = "_fadeInDown_zkms8_1";
var fadeInLeft = "_fadeInLeft_zkms8_1";
var fadeInRight = "_fadeInRight_zkms8_1";
var fadeOut = "_fadeOut_zkms8_1";
var fadeOutDown = "_fadeOutDown_zkms8_1";
var fadeOutUp = "_fadeOutUp_zkms8_1";
var fadeOutLeft = "_fadeOutLeft_zkms8_1";
var fadeOutRight = "_fadeOutRight_zkms8_1";
var ping = "_ping_zkms8_1";
var blinkBackground = "_blinkBackground_zkms8_1";
var typingBlink = "_typingBlink_zkms8_1";
var SettingsOpenTelemetryView_vue_vue_type_style_index_0_lang_module_default = {
	layout,
	settingsContent,
	saveBar,
	loading,
	control,
	headersBlock,
	headerRow,
	headerRemove,
	addHeaderButton,
	inputWithSlug,
	slug,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_zkms8_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var SettingsOpenTelemetryView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsOpenTelemetryView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsOpenTelemetryView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsOpenTelemetryView_default as default };
