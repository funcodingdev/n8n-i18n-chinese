import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, j as createVNode, q as onBeforeUnmount, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CNBJaijc.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { h as useEventListener } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nCallout_default } from "./N8nCallout-DqmF6S4S.js";
import { t as N8nHeading_default } from "./N8nHeading-BWV9gsOh.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { t as useDocumentVisibility } from "./useDocumentVisibility-X63X9Bs_.js";
import { n as BROWSER_USE_EXTENSION_ID, r as CHROME_EXTENSION_URL } from "./constants-BLqhkQAv.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BmYIjnXO.js";
import { t as isBrowserUseSupportedForBrowser } from "./instanceAiBrowserUse-qZrm1H_b.js";
//#region src/features/ai/instanceAi/instanceAiBrowserUse.telemetry.ts
function useInstanceAiBrowserUseTelemetry() {
	const telemetry = useTelemetry();
	return {
		trackModalOpened(browserSupported) {
			telemetry.track("Instance AI Connect Browser Use modal opened", { browser_supported: browserSupported });
		},
		trackInstallExtensionClicked() {
			telemetry.track("Instance AI Install Chrome Browser Extension button clicked");
		},
		trackOpenExtensionClicked() {
			telemetry.track("Instance AI Open Browser Use Extension button clicked");
		},
		trackDirectConnectRequested() {
			telemetry.track("Instance AI Browser Use direct connect requested");
		}
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useExtensionDirectConnect.ts
var DIRECT_CONNECT_CONFIRMATION_TIMEOUT_MS = 15e3;
function getExtensionRuntime() {
	const runtime = globalThis.chrome?.runtime;
	return typeof runtime?.sendMessage === "function" ? runtime : null;
}
function isRecord(value) {
	return value !== null && typeof value === "object";
}
async function sendToExtension(runtime, extensionId, message) {
	return await new Promise((resolve, reject) => {
		try {
			runtime.sendMessage(extensionId, message, (response) => {
				const error = runtime.lastError;
				if (error) reject(new Error(error.message ?? "Extension messaging failed"));
				else resolve(response);
			});
		} catch (error) {
			reject(error instanceof Error ? error : new Error(String(error)));
		}
	});
}
async function timeout(ms) {
	return await new Promise((resolve) => setTimeout(() => resolve(void 0), ms));
}
/**
* Direct Browser Use connect flow: asks the installed extension (via
* `externally_connectable` messaging) to show its connect confirmation in an
* extension-owned popup, so the user only confirms once. `unsupported` means
* the extension did not open the popup — callers show the link-based flow.
*/
function useExtensionDirectConnect() {
	const status = ref("idle");
	let isAttempting = false;
	async function attempt(connectUrl) {
		if (isAttempting) return;
		isAttempting = true;
		try {
			await runAttempt(connectUrl);
		} finally {
			isAttempting = false;
		}
	}
	async function runAttempt(connectUrl) {
		const runtime = getExtensionRuntime();
		let extensionId = "";
		let relayUrl = null;
		try {
			const parsed = new URL(connectUrl);
			extensionId = parsed.hostname;
			relayUrl = parsed.searchParams.get("mcpRelayUrl");
		} catch {}
		if (!runtime || !extensionId || !relayUrl) {
			status.value = "unsupported";
			return;
		}
		try {
			const response = await sendToExtension(runtime, extensionId, {
				type: "connect",
				relayUrl
			});
			if (!isRecord(response) || response.accepted !== true) {
				status.value = "unsupported";
				return;
			}
		} catch {
			status.value = "unsupported";
			return;
		}
		status.value = "waiting";
		let connected = false;
		try {
			const result = await Promise.race([sendToExtension(runtime, extensionId, {
				type: "connectResult",
				relayUrl
			}), timeout(DIRECT_CONNECT_CONFIRMATION_TIMEOUT_MS)]);
			connected = isRecord(result) && result.connected === true;
		} catch {}
		if (!connected) status.value = "failed";
	}
	return {
		status,
		attempt
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseConnectStep.vue?vue&type=script&setup=true&lang.ts
var CONNECT_URL_REFRESH_MARGIN_MS = 3e4;
var CONNECT_POPUP_WIDTH = 620;
var CONNECT_POPUP_HEIGHT = 640;
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
		const { status, attempt } = useExtensionDirectConnect();
		const connectUrl = ref(null);
		let refreshTimer;
		function clearRefreshTimer() {
			if (refreshTimer) {
				clearTimeout(refreshTimer);
				refreshTimer = void 0;
			}
		}
		async function refreshConnectUrl() {
			clearRefreshTimer();
			connectUrl.value = await store.fetchBrowserConnectUrl();
			const expiresAt = store.browserConnectUrlExpiresAt;
			if (!connectUrl.value || !expiresAt) return;
			const delay = Date.parse(expiresAt) - Date.now() - CONNECT_URL_REFRESH_MARGIN_MS;
			if (!Number.isFinite(delay) || delay <= 0) return;
			refreshTimer = setTimeout(() => void refreshConnectUrl(), delay);
		}
		onMounted(async () => {
			await refreshConnectUrl();
			if (!props.autoConnect || !connectUrl.value) return;
			telemetry.trackDirectConnectRequested();
			await attempt(connectUrl.value);
		});
		async function retry() {
			if (!connectUrl.value) await refreshConnectUrl();
			if (!connectUrl.value) return;
			telemetry.trackDirectConnectRequested();
			await attempt(connectUrl.value);
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
			}), unref(status) === "waiting" ? (openBlock(), createElementBlock("div", {
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
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.browserUse.directConnect.waiting")), 1)]),
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
				onClick: retry
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
				icon: "external-link",
				disabled: !connectUrl.value,
				"data-test-id": "browser-use-open-connect-page",
				onClick: openConnectPage
			}, null, 8, ["label", "disabled"])], 64))], 2);
		};
	}
});
var BrowserUseConnectStep_vue_vue_type_style_index_0_lang_module_default = {
	passthrough: "_passthrough_odac7_125",
	waiting: "_waiting_odac7_129"
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
			telemetry.trackModalOpened(isBrowserSupported);
			if (!isBrowserSupported) return;
			await Promise.all([refreshExtensionState(), store.fetchBrowserStatus()]);
			statusChecked.value = true;
		});
		const reprobeExtension = () => void refreshExtensionState();
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
				}, [createVNode(BrowserUseConnectStep_default, { "auto-connect": props.autoConnect }, null, 8, ["auto-connect"])], 2)) : createCommentVNode("", true),
				!isExtensionMissing.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.waitingRow)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small"
				}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.browserUse.step.extension.waiting")), 1)], 2)) : createCommentVNode("", true)
			], 64))], 2);
		};
	}
});
var BrowserUseSetupContent_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_c2tkk_125",
	bodyEmbedded: "_bodyEmbedded_c2tkk_132",
	header: "_header_c2tkk_136",
	title: "_title_c2tkk_143",
	description: "_description_c2tkk_148",
	step: "_step_c2tkk_153",
	footer: "_footer_c2tkk_163",
	statusRow: "_statusRow_c2tkk_168",
	statusDot: "_statusDot_c2tkk_174",
	statusDotConnected: "_statusDotConnected_c2tkk_181",
	waitingRow: "_waitingRow_c2tkk_185"
};
var BrowserUseSetupContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BrowserUseSetupContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BrowserUseSetupContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { BrowserUseSetupContent_default as t };
