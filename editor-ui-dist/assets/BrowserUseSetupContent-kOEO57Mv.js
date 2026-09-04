import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, j as createVNode, q as onBeforeUnmount, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { h as useEventListener } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as useDocumentVisibility } from "./useDocumentVisibility-oMVAC2C1.js";
import { n as BROWSER_USE_EXTENSION_ID, r as CHROME_EXTENSION_URL } from "./constants-CM4MaaDd.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-Cl3SksNd.js";
import { t as isBrowserUseSupportedForBrowser } from "./instanceAiBrowserUse-C0KKhikr.js";
import { i as useInstanceAiBrowserUseTelemetry, n as resetExtensionDirectConnect, r as useExtensionDirectConnect } from "./useExtensionDirectConnect-D-l-MMfU.js";
//#region src/features/ai/instanceAi/components/modals/BrowserUseConnectStep.vue?vue&type=script&setup=true&lang.ts
var CONNECT_URL_REFRESH_MARGIN_MS = 3e4;
var CONNECT_POPUP_WIDTH = 540;
var CONNECT_POPUP_HEIGHT = 700;
var BrowserUseConnectStep_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BrowserUseConnectStep",
	props: { autoConnect: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useInstanceAiSettingsStore();
		const telemetry = useInstanceAiBrowserUseTelemetry();
		const { status, isFlowActive, attempt } = useExtensionDirectConnect();
		const connectUrl = ref(null);
		const inFlightTextKey = computed(() => {
			if (status.value === "waiting") return "instanceAi.browserUse.directConnect.waiting";
			if (status.value === "connecting" || status.value === "connected") return "instanceAi.browserUse.directConnect.connecting";
			return null;
		});
		let refreshTimer;
		function clearRefreshTimer() {
			if (refreshTimer) {
				clearTimeout(refreshTimer);
				refreshTimer = void 0;
			}
		}
		/**
		* Minting rotates the relay token server-side, killing any connect already in flight — so
		* reuse a stored link while it has life left in it.
		*/
		function usableStoredConnectUrl() {
			const url = store.browserConnectUrl;
			const expiresAt = store.browserConnectUrlExpiresAt;
			if (!url || !expiresAt) return null;
			return Date.parse(expiresAt) - Date.now() > CONNECT_URL_REFRESH_MARGIN_MS ? url : null;
		}
		async function refreshConnectUrl() {
			clearRefreshTimer();
			connectUrl.value = usableStoredConnectUrl() ?? await store.fetchBrowserConnectUrl();
			const expiresAt = store.browserConnectUrlExpiresAt;
			if (!connectUrl.value || !expiresAt) return;
			const delay = Date.parse(expiresAt) - Date.now() - CONNECT_URL_REFRESH_MARGIN_MS;
			if (!Number.isFinite(delay) || delay <= 0) return;
			refreshTimer = setTimeout(() => {
				refreshConnectUrl();
			}, delay);
		}
		onMounted(async () => {
			const joinedOuterFlow = isFlowActive.value;
			if (!joinedOuterFlow) resetExtensionDirectConnect();
			await refreshConnectUrl();
			if (!props.autoConnect || !connectUrl.value) return;
			if (joinedOuterFlow) return;
			telemetry.trackDirectConnectRequested();
			await attempt(connectUrl.value);
		});
		/**
		* Let the extension own the confirmation first — a remembered instance connects with no
		* window at all. The unreachable case resolves fast enough that the click's transient
		* activation still permits `window.open`.
		*/
		async function connect() {
			if (!connectUrl.value) return;
			telemetry.trackDirectConnectRequested();
			await attempt(connectUrl.value);
			if (status.value === "unsupported") openConnectPage();
		}
		function openConnectPage() {
			if (!connectUrl.value) return;
			telemetry.trackOpenExtensionClicked();
			const left = Math.max(0, Math.round(window.screenX + (window.outerWidth - CONNECT_POPUP_WIDTH) / 2));
			const top = Math.max(0, Math.round(window.screenY + (window.outerHeight - CONNECT_POPUP_HEIGHT) / 2));
			window.open(connectUrl.value, "n8n-browser-use-connect", `popup,width=${CONNECT_POPUP_WIDTH},height=${CONNECT_POPUP_HEIGHT},left=${left},top=${top}`);
		}
		onBeforeUnmount(() => {
			clearRefreshTimer();
			store.clearBrowserConnectUrl();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.passthrough) }, [createVNode(unref(N8nText_default), {
				bold: true,
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.connect.title")), 1)]),
				_: 1
			}), inFlightTextKey.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.waiting),
				"data-test-id": "browser-use-direct-connect-waiting"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "spinner",
				color: "primary",
				spin: "",
				size: "small"
			}), createVNode(unref(N8nText_default), {
				color: "text-light",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(inFlightTextKey.value)), 1)]),
				_: 1
			})], 2)) : unref(status) === "failed" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nText_default), {
				color: "text-light",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.directConnect.failed")), 1)]),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				label: unref(i18n).baseText("instanceAi.browserUse.directConnect.retry"),
				variant: "solid",
				size: "medium",
				"data-test-id": "browser-use-direct-connect-retry",
				onClick: connect
			}, null, 8, ["label"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nText_default), {
				color: "text-light",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.connect.description")), 1)]),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				label: unref(i18n).baseText("instanceAi.browserUse.step.connect.cta"),
				variant: "solid",
				size: "medium",
				disabled: !connectUrl.value,
				"data-test-id": "browser-use-open-connect-page",
				onClick: connect
			}, null, 8, ["label", "disabled"])], 64))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseConnectStep.vue?vue&type=style&index=0&lang.module.scss
var passthrough = "_passthrough_q1hn8_388";
var waiting = "_waiting_q1hn8_392";
var shimmer$1 = "_shimmer_q1hn8_1";
var spin$1 = "_spin_q1hn8_1";
var opacityPulse$1 = "_opacityPulse_q1hn8_1";
var popoverIn$1 = "_popoverIn_q1hn8_1";
var fadeIn$1 = "_fadeIn_q1hn8_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_q1hn8_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_q1hn8_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_q1hn8_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_q1hn8_1";
var blurSwapIn$1 = "_blurSwapIn_q1hn8_1";
var blurSwapOut$1 = "_blurSwapOut_q1hn8_1";
var pulseGlow$1 = "_pulseGlow_q1hn8_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_q1hn8_1";
var fade$1 = "_fade_q1hn8_1";
var fadeInUp$1 = "_fadeInUp_q1hn8_1";
var fadeInDown$1 = "_fadeInDown_q1hn8_1";
var fadeInLeft$1 = "_fadeInLeft_q1hn8_1";
var fadeInRight$1 = "_fadeInRight_q1hn8_1";
var fadeOut$1 = "_fadeOut_q1hn8_1";
var fadeOutDown$1 = "_fadeOutDown_q1hn8_1";
var fadeOutUp$1 = "_fadeOutUp_q1hn8_1";
var fadeOutLeft$1 = "_fadeOutLeft_q1hn8_1";
var fadeOutRight$1 = "_fadeOutRight_q1hn8_1";
var ping$1 = "_ping_q1hn8_1";
var blinkBackground$1 = "_blinkBackground_q1hn8_1";
var typingBlink$1 = "_typingBlink_q1hn8_1";
var BrowserUseConnectStep_vue_vue_type_style_index_0_lang_module_default = {
	passthrough,
	waiting,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_q1hn8_1",
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
var BrowserUseConnectStep_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BrowserUseConnectStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BrowserUseConnectStep_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/utils/browserUseExtension.ts
var EXTENSION_CONNECT_PAGE_URL = `chrome-extension://${BROWSER_USE_EXTENSION_ID}/connect.html`;
var PROBEABLE_LOCAL_HOSTS = ["localhost", "127.0.0.1"];
var PROBEABLE_CLOUD_HOST = /\.(stage-)?app\.n8n\.cloud$/;
/**
* Mirrors `web_accessible_resources.matches` in the extension manifest, and must stay a
* subset of it: probing an origin the manifest does not cover reports a confident
* "not installed" to users who do have the extension.
*/
function isProbeableOrigin() {
	const { hostname, protocol } = window.location;
	if (protocol !== "http:" && protocol !== "https:") return false;
	if (PROBEABLE_LOCAL_HOSTS.includes(hostname)) return true;
	return protocol === "https:" && PROBEABLE_CLOUD_HOST.test(hostname);
}
/**
* Uncovered origins report `unknown` rather than being probed, so the flow stays available
* where detection is impossible. A rejection reports `not-installed`, which is not airtight:
* a disabled extension or a restrictive `Content-Security-Policy` also reject.
*/
async function detectBrowserUseExtension() {
	if (!isProbeableOrigin()) return "unknown";
	try {
		return (await fetch(EXTENSION_CONNECT_PAGE_URL, { method: "HEAD" })).ok ? "installed" : "unknown";
	} catch {
		return "not-installed";
	}
}
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseSetupContent.vue?vue&type=script&setup=true&lang.ts
var BrowserUseSetupContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BrowserUseSetupContent",
	props: {
		embedded: {
			type: Boolean,
			default: false
		},
		autoConnect: {
			type: Boolean,
			default: false
		}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const store = useInstanceAiSettingsStore();
		const telemetry = useInstanceAiBrowserUseTelemetry();
		const { onDocumentVisible } = useDocumentVisibility();
		const isBrowserSupported = isBrowserUseSupportedForBrowser();
		const isConnected = computed(() => store.browserConnected);
		const statusChecked = ref(false);
		const extensionState = ref("unknown");
		const isExtensionMissing = computed(() => extensionState.value === "not-installed");
		const isExtensionInstalled = computed(() => extensionState.value === "installed");
		let isProbingExtension = false;
		async function refreshExtensionState() {
			if (!isBrowserSupported || store.browserConnected || isProbingExtension) return;
			isProbingExtension = true;
			try {
				extensionState.value = await detectBrowserUseExtension();
			} finally {
				isProbingExtension = false;
			}
		}
		onMounted(async () => {
			if (!isBrowserSupported) return;
			await Promise.all([refreshExtensionState(), store.fetchBrowserStatus()]);
			statusChecked.value = true;
		});
		const reprobeExtension = () => {
			refreshExtensionState();
		};
		onDocumentVisible(reprobeExtension);
		useEventListener(window, "focus", reprobeExtension);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.body, props.embedded && _ctx.$style.bodyEmbedded]) }, [!props.embedded ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "large",
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.modal.title")), 1)]),
				_: 1
			}, 8, ["class"])], 2)) : createCommentVNode("", true), !unref(isBrowserSupported) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nCallout_default), {
				theme: "warning",
				"data-test-id": "browser-use-unsupported-browser"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.unsupportedBrowser")), 1)]),
				_: 1
			}), !props.embedded ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.footer)
			}, [createVNode(unref(N8nButton_default), {
				label: unref(i18n).baseText("generic.close"),
				variant: "outline",
				size: "medium",
				"data-test-id": "browser-use-unsupported-close",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
			}, null, 8, ["label"])], 2)) : createCommentVNode("", true)], 64)) : isConnected.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusRow) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style.statusDotConnected]) }, null, 2), createVNode(unref(N8nText_default), {
				size: "small",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.connected")), 1)]),
				_: 1
			})], 2), createVNode(unref(N8nText_default), {
				color: "text-light",
				class: normalizeClass(_ctx.$style.description)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.connected.description")), 1)]),
				_: 1
			}, 8, ["class"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
				createVNode(unref(N8nText_default), {
					color: "text-light",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.modal.description")), 1)]),
					_: 1
				}, 8, ["class"]),
				!isExtensionInstalled.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.step)
				}, [
					createVNode(unref(N8nText_default), {
						bold: true,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.extension.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.extension.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						label: unref(i18n).baseText("instanceAi.browserUse.step.extension.cta"),
						href: unref(CHROME_EXTENSION_URL),
						target: "_blank",
						variant: isExtensionMissing.value ? "solid" : "outline",
						size: "medium",
						icon: "external-link",
						"data-test-id": "browser-use-install-extension",
						onClick: unref(telemetry).trackInstallExtensionClicked
					}, null, 8, [
						"label",
						"href",
						"variant",
						"onClick"
					])
				], 2)) : createCommentVNode("", true),
				isExtensionMissing.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.step)
				}, [createVNode(unref(N8nText_default), {
					bold: true,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.connect.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small",
					"data-test-id": "browser-use-extension-missing-note"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.connect.extensionMissing")), 1)]),
					_: 1
				})], 2)) : statusChecked.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.step)
				}, [createVNode(BrowserUseConnectStep_default, { "auto-connect": props.autoConnect }, null, 8, ["auto-connect"])], 2)) : createCommentVNode("", true)
			], 64))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseSetupContent.vue?vue&type=style&index=0&lang.module.scss
var body = "_body_1w497_388";
var bodyEmbedded = "_bodyEmbedded_1w497_395";
var header = "_header_1w497_399";
var title = "_title_1w497_406";
var description = "_description_1w497_411";
var step = "_step_1w497_416";
var footer = "_footer_1w497_426";
var statusRow = "_statusRow_1w497_431";
var statusDot = "_statusDot_1w497_437";
var statusDotConnected = "_statusDotConnected_1w497_444";
var shimmer = "_shimmer_1w497_1";
var spin = "_spin_1w497_1";
var opacityPulse = "_opacityPulse_1w497_1";
var popoverIn = "_popoverIn_1w497_1";
var fadeIn = "_fadeIn_1w497_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1w497_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1w497_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1w497_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1w497_1";
var blurSwapIn = "_blurSwapIn_1w497_1";
var blurSwapOut = "_blurSwapOut_1w497_1";
var pulseGlow = "_pulseGlow_1w497_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1w497_1";
var fade = "_fade_1w497_1";
var fadeInUp = "_fadeInUp_1w497_1";
var fadeInDown = "_fadeInDown_1w497_1";
var fadeInLeft = "_fadeInLeft_1w497_1";
var fadeInRight = "_fadeInRight_1w497_1";
var fadeOut = "_fadeOut_1w497_1";
var fadeOutDown = "_fadeOutDown_1w497_1";
var fadeOutUp = "_fadeOutUp_1w497_1";
var fadeOutLeft = "_fadeOutLeft_1w497_1";
var fadeOutRight = "_fadeOutRight_1w497_1";
var ping = "_ping_1w497_1";
var blinkBackground = "_blinkBackground_1w497_1";
var typingBlink = "_typingBlink_1w497_1";
var BrowserUseSetupContent_vue_vue_type_style_index_0_lang_module_default = {
	body,
	bodyEmbedded,
	header,
	title,
	description,
	step,
	footer,
	statusRow,
	statusDot,
	statusDotConnected,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1w497_1",
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
var BrowserUseSetupContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BrowserUseSetupContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BrowserUseSetupContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { BrowserUseSetupContent_default as t };
