import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, k as createStaticVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as DropdownMenu_default } from "./DropdownMenu-Dut73qNY.js";
import { o as DialogClose_default } from "./DialogTitle-vvfpWO6w.js";
import { n as RadioGroupItem_default, t as RadioGroup_default } from "./RadioGroup-BtDNIDfv.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as ElSwitch } from "./switch-VgJfpBOv.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nMarkdown_default } from "./N8nMarkdown-Coqw_pnO.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nInfoTip_default } from "./N8nInfoTip-BB_z6D-l.js";
import { t as SettingsLayout_default } from "./SettingsLayout-DHeGpvCA.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-C2J-ZIx7.js";
import { n as SettingsRow_default, t as SettingsRowGroup_default } from "./SettingsRowGroup-CYye8n3_.js";
import { t as SettingsRowConfigure_default } from "./SettingsRowConfigure-DOSIsTFU.js";
import { t as SettingsSection_default } from "./SettingsSection-0dD8DyrT.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as DialogFooter_default } from "./DialogFooter-AKzGUZKF.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { t as hasPermission } from "./permissions-CD6srtSi.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as useClipboard } from "./useClipboard-FfSvbxpY.js";
import { t as useMcp } from "./useMcp-BbYtBaqJ.js";
import { t as EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY } from "./constants-lFmXPm_O.js";
import { n as MCP_AGENTS_VIEW, o as MCP_DOCS_PAGE_URL, r as MCP_CLIENTS_VIEW, u as MCP_WORKFLOWS_VIEW } from "./mcp.constants-DyvBgGQm.js";
import { a as vscode_default, c as claude_default, o as openai_default, s as cursor_default } from "./clients.utils-DdGKzU2j.js";
import { t as useMCPStore } from "./mcp.store-DcDC1-y0.js";
import { t as useExposeAllWorkflowsToMcpStore } from "./exposeAllWorkflowsToMcp.store-CLLPkBPZ.js";
import { t as McpEmptyStateCard_default } from "./McpEmptyStateCard-D_ACgtxQ.js";
//#region src/experiments/exposeAllWorkflowsToMcp/composables/useExposeAllWorkflowsToMcpOffer.ts
function useExposeAllWorkflowsToMcpOffer() {
	const experimentStore = useExposeAllWorkflowsToMcpStore();
	const mcpStore = useMCPStore();
	const settingsStore = useSettingsStore();
	const uiStore = useUIStore();
	/**
	* Opens the expose-all modal for enrolled users with at least one eligible
	* workflow or agent. Failures of the eligibility probe are swallowed — the
	* offer is best-effort and must not disturb the flow that triggered it.
	* Returns whether the modal was opened, so callers can decide whether to
	* fall back to their own post-enable behavior instead.
	*/
	async function offerToExposeAllWorkflows(onExposed) {
		if (!experimentStore.isEnabled) return false;
		try {
			const [eligibleWorkflows, eligibleAgents] = await Promise.all([mcpStore.getMcpEligibleWorkflows({ take: 1 }), settingsStore.isModuleActive("agents") ? mcpStore.getMcpEligibleAgents({ take: 1 }) : Promise.resolve({ count: 0 })]);
			if (eligibleWorkflows.count === 0 && eligibleAgents.count === 0) return false;
		} catch {
			return false;
		}
		uiStore.openModalWithData({
			name: EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY,
			data: { onExposed }
		});
		return true;
	}
	return { offerToExposeAllWorkflows };
}
//#endregion
//#region src/features/ai/mcpAccess/components/MCPEmptyState.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var _hoisted_3 = { key: 2 };
var MCPEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPEmptyState",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		managedByEnv: {
			type: Boolean,
			default: false
		}
	},
	emits: ["turnOnMcp"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const buttonDisabled = computed(() => props.disabled || props.loading);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(McpEmptyStateCard_default, {
				surface: "",
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "mcp-empty-state-container",
				title: unref(i18n).baseText("settings.mcp.actionBox.heading"),
				description: unref(i18n).baseText("settings.mcp.emptyState.description")
			}, {
				actions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "medium",
					href: unref(MCP_DOCS_PAGE_URL),
					target: "_blank",
					"data-test-id": "mcp-empty-state-learn-more"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")) + " ", 1), createVNode(unref(N8nIcon_default), {
						icon: "arrow-up-right",
						size: "small"
					})]),
					_: 1
				}, 8, ["href"]), createVNode(unref(N8nTooltip_default), { disabled: !buttonDisabled.value }, {
					content: withCtx(() => [props.loading ? (openBlock(), createElementBlock("span", _hoisted_1$4, toDisplayString(unref(i18n).baseText("generic.loading")) + "...", 1)) : props.managedByEnv ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(i18n).baseText("settings.mcp.managedByEnv.tooltip")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.mcp.toggle.disabled.tooltip")), 1))]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "medium",
						disabled: buttonDisabled.value,
						"data-test-id": "enable-mcp-access-button",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("turnOnMcp"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.actionBox.button.label")), 1)]),
						_: 1
					}, 8, ["disabled"])]),
					_: 1
				}, 8, ["disabled"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"description"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/MCPEmptyState.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_jt5vo_388";
var shimmer$7 = "_shimmer_jt5vo_1";
var spin$7 = "_spin_jt5vo_1";
var opacityPulse$7 = "_opacityPulse_jt5vo_1";
var popoverIn$7 = "_popoverIn_jt5vo_1";
var fadeIn$7 = "_fadeIn_jt5vo_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_jt5vo_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_jt5vo_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_jt5vo_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_jt5vo_1";
var blurSwapIn$7 = "_blurSwapIn_jt5vo_1";
var blurSwapOut$7 = "_blurSwapOut_jt5vo_1";
var pulseGlow$7 = "_pulseGlow_jt5vo_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_jt5vo_1";
var fade$7 = "_fade_jt5vo_1";
var fadeInUp$7 = "_fadeInUp_jt5vo_1";
var fadeInDown$7 = "_fadeInDown_jt5vo_1";
var fadeInLeft$7 = "_fadeInLeft_jt5vo_1";
var fadeInRight$7 = "_fadeInRight_jt5vo_1";
var fadeOut$7 = "_fadeOut_jt5vo_1";
var fadeOutDown$7 = "_fadeOutDown_jt5vo_1";
var fadeOutUp$7 = "_fadeOutUp_jt5vo_1";
var fadeOutLeft$7 = "_fadeOutLeft_jt5vo_1";
var fadeOutRight$7 = "_fadeOutRight_jt5vo_1";
var ping$7 = "_ping_jt5vo_1";
var blinkBackground$7 = "_blinkBackground_jt5vo_1";
var typingBlink$7 = "_typingBlink_jt5vo_1";
var MCPEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	card,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_jt5vo_1",
	opacityPulse: opacityPulse$7,
	popoverIn: popoverIn$7,
	fadeIn: fadeIn$7,
	collapsibleSlideDown: collapsibleSlideDown$7,
	collapsibleSlideUp: collapsibleSlideUp$7,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$7,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$7,
	blurSwapIn: blurSwapIn$7,
	blurSwapOut: blurSwapOut$7,
	pulseGlow: pulseGlow$7,
	pulseGlowDelayed: pulseGlowDelayed$7,
	fade: fade$7,
	fadeInUp: fadeInUp$7,
	fadeInDown: fadeInDown$7,
	fadeInLeft: fadeInLeft$7,
	fadeInRight: fadeInRight$7,
	fadeOut: fadeOut$7,
	fadeOutDown: fadeOutDown$7,
	fadeOutUp: fadeOutUp$7,
	fadeOutLeft: fadeOutLeft$7,
	fadeOutRight: fadeOutRight$7,
	ping: ping$7,
	blinkBackground: blinkBackground$7,
	typingBlink: typingBlink$7
};
var MCPEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/redirect-uris.utils.ts
/** Validates a single OAuth redirect URI; returns the error kind or null when valid. */
function validateRedirectUri(uri) {
	let url;
	try {
		url = new URL(uri);
	} catch {
		return "invalidUrl";
	}
	if (url.protocol !== "http:" && url.protocol !== "https:") return "invalidProtocol";
	if (!(url.hostname === "localhost" || url.hostname === "127.0.0.1") && url.protocol !== "https:") return "httpsRequired";
	return null;
}
//#endregion
//#region src/features/ai/mcpAccess/components/McpAllowedCallbackUrlsDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["data-test-id", "onClick"];
var McpAllowedCallbackUrlsDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpAllowedCallbackUrlsDialog",
	props: {
		open: { type: Boolean },
		uris: {},
		saving: { type: Boolean }
	},
	emits: ["update:open", "save"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const mode = ref("all");
		const drafts = ref([""]);
		function resetFromUris() {
			mode.value = props.uris.length > 0 ? "trusted" : "all";
			drafts.value = props.uris.length > 0 ? [...props.uris] : [""];
		}
		watch([() => props.open, () => props.uris], ([open]) => {
			if (!open) return;
			resetFromUris();
		}, { immediate: true });
		const trimmedDrafts = computed(() => drafts.value.map((uri) => uri.trim()).filter((uri) => uri.length > 0));
		const validationError = computed(() => {
			if (mode.value !== "trusted") return null;
			for (const uri of trimmedDrafts.value) {
				const error = validateRedirectUri(uri);
				if (error) return i18n.baseText(`settings.mcp.allowedRedirectUris.validation.${error}`, { interpolate: { url: uri } });
			}
			return null;
		});
		const result = computed(() => mode.value === "all" ? [] : trimmedDrafts.value);
		const canSave = computed(() => {
			if (validationError.value) return false;
			if (mode.value === "trusted" && trimmedDrafts.value.length === 0) return false;
			return true;
		});
		const addUrl = () => {
			drafts.value.push("");
		};
		const removeUrl = (index) => {
			drafts.value.splice(index, 1);
			if (drafts.value.length === 0) drafts.value.push("");
		};
		const onCancel = () => emit("update:open", false);
		const onSave = () => emit("save", result.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				header: unref(i18n).baseText("settings.mcp.callbackUrls.dialog.title"),
				description: unref(i18n).baseText("settings.mcp.callbackUrls.dialog.description"),
				"data-test-id": "mcp-callback-urls-dialog",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(RadioGroup_default), {
					modelValue: mode.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mode.value = $event),
					orientation: "vertical",
					class: normalizeClass(_ctx.$style.modes)
				}, {
					default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(["all", "trusted"], (option) => {
						return createBaseVNode("div", {
							key: option,
							class: normalizeClass([_ctx.$style["mode-card"], mode.value === option && _ctx.$style["mode-card-active"]]),
							"data-test-id": `mcp-callback-urls-mode-${option}`,
							onClick: ($event) => mode.value = option
						}, [createVNode(unref(RadioGroupItem_default), {
							value: option,
							label: unref(i18n).baseText(`settings.mcp.callbackUrls.mode.${option}.label`),
							description: unref(i18n).baseText(`settings.mcp.callbackUrls.mode.${option}.description`)
						}, null, 8, [
							"value",
							"label",
							"description"
						])], 10, _hoisted_1$3);
					}), 64))]),
					_: 1
				}, 8, ["modelValue", "class"]), mode.value === "trusted" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.trusted)
				}, [
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.callbackUrls.trusted.label")), 1)]),
						_: 1
					}),
					(openBlock(true), createElementBlock(Fragment, null, renderList(drafts.value, (_, index) => {
						return openBlock(), createElementBlock("div", {
							key: index,
							class: normalizeClass(_ctx.$style["url-row"]),
							"data-test-id": "mcp-callback-url-row"
						}, [createVNode(unref(Input_default), {
							modelValue: drafts.value[index],
							"onUpdate:modelValue": ($event) => drafts.value[index] = $event,
							type: "text",
							placeholder: unref(i18n).baseText("settings.mcp.callbackUrls.trusted.placeholder"),
							"data-test-id": "mcp-callback-url-input"
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"placeholder"
						]), drafts.value.length > 1 || drafts.value[index].length > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "ghost",
							size: "small",
							iconOnly: "",
							icon: "x",
							"aria-label": unref(i18n).baseText("generic.delete"),
							"data-test-id": "mcp-callback-url-remove",
							onClick: ($event) => removeUrl(index)
						}, null, 8, ["aria-label", "onClick"])) : createCommentVNode("", true)], 2);
					}), 128)),
					validationError.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "danger",
						"data-test-id": "mcp-callback-urls-error"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(validationError.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						icon: "plus",
						label: unref(i18n).baseText("settings.mcp.callbackUrls.trusted.addUrl"),
						"data-test-id": "mcp-callback-url-add",
						onClick: addUrl
					}, null, 8, ["label"])])
				], 2)) : createCommentVNode("", true)], 2), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						label: unref(i18n).baseText("generic.cancel"),
						onClick: onCancel
					}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
						variant: "solid",
						label: unref(i18n).baseText("settings.mcp.callbackUrls.dialog.save"),
						disabled: !canSave.value,
						loading: __props.saving,
						"data-test-id": "mcp-callback-urls-save",
						onClick: onSave
					}, null, 8, [
						"label",
						"disabled",
						"loading"
					])]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"open",
				"header",
				"description"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpAllowedCallbackUrlsDialog.vue?vue&type=style&index=0&lang.module.scss
var body$1 = "_body_l9clq_388";
var modes = "_modes_l9clq_395";
var trusted = "_trusted_l9clq_412";
var shimmer$6 = "_shimmer_l9clq_1";
var spin$6 = "_spin_l9clq_1";
var opacityPulse$6 = "_opacityPulse_l9clq_1";
var popoverIn$6 = "_popoverIn_l9clq_1";
var fadeIn$6 = "_fadeIn_l9clq_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_l9clq_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_l9clq_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_l9clq_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_l9clq_1";
var blurSwapIn$6 = "_blurSwapIn_l9clq_1";
var blurSwapOut$6 = "_blurSwapOut_l9clq_1";
var pulseGlow$6 = "_pulseGlow_l9clq_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_l9clq_1";
var fade$6 = "_fade_l9clq_1";
var fadeInUp$6 = "_fadeInUp_l9clq_1";
var fadeInDown$6 = "_fadeInDown_l9clq_1";
var fadeInLeft$6 = "_fadeInLeft_l9clq_1";
var fadeInRight$6 = "_fadeInRight_l9clq_1";
var fadeOut$6 = "_fadeOut_l9clq_1";
var fadeOutDown$6 = "_fadeOutDown_l9clq_1";
var fadeOutUp$6 = "_fadeOutUp_l9clq_1";
var fadeOutLeft$6 = "_fadeOutLeft_l9clq_1";
var fadeOutRight$6 = "_fadeOutRight_l9clq_1";
var ping$6 = "_ping_l9clq_1";
var blinkBackground$6 = "_blinkBackground_l9clq_1";
var typingBlink$6 = "_typingBlink_l9clq_1";
var McpAllowedCallbackUrlsDialog_vue_vue_type_style_index_0_lang_module_default = {
	body: body$1,
	modes,
	"mode-card": "_mode-card_l9clq_401",
	"mode-card-active": "_mode-card-active_l9clq_408",
	trusted,
	"url-row": "_url-row_l9clq_418",
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_l9clq_1",
	opacityPulse: opacityPulse$6,
	popoverIn: popoverIn$6,
	fadeIn: fadeIn$6,
	collapsibleSlideDown: collapsibleSlideDown$6,
	collapsibleSlideUp: collapsibleSlideUp$6,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$6,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$6,
	blurSwapIn: blurSwapIn$6,
	blurSwapOut: blurSwapOut$6,
	pulseGlow: pulseGlow$6,
	pulseGlowDelayed: pulseGlowDelayed$6,
	fade: fade$6,
	fadeInUp: fadeInUp$6,
	fadeInDown: fadeInDown$6,
	fadeInLeft: fadeInLeft$6,
	fadeInRight: fadeInRight$6,
	fadeOut: fadeOut$6,
	fadeOutDown: fadeOutDown$6,
	fadeOutUp: fadeOutUp$6,
	fadeOutLeft: fadeOutLeft$6,
	fadeOutRight: fadeOutRight$6,
	ping: ping$6,
	blinkBackground: blinkBackground$6,
	typingBlink: typingBlink$6
};
var McpAllowedCallbackUrlsDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpAllowedCallbackUrlsDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpAllowedCallbackUrlsDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/assets/client-icons/codex.svg?component
var _hoisted_1$2 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [createStaticVNode("<defs><linearGradient id=\"codex-blossom-gradient\" x1=\"12\" x2=\"12\" y1=\"3\" y2=\"21\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#9C8CFF\"></stop><stop offset=\"1\" stop-color=\"#3A45F5\"></stop></linearGradient></defs><g fill=\"url(#codex-blossom-gradient)\"><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><circle cx=\"12\" cy=\"7.4\" r=\"4.4\"></circle><circle cx=\"15.6\" cy=\"9.13\" r=\"4.4\"></circle><circle cx=\"16.48\" cy=\"13.02\" r=\"4.4\"></circle><circle cx=\"14\" cy=\"16.14\" r=\"4.4\"></circle><circle cx=\"10\" cy=\"16.14\" r=\"4.4\"></circle><circle cx=\"7.52\" cy=\"13.02\" r=\"4.4\"></circle><circle cx=\"8.4\" cy=\"9.13\" r=\"4.4\"></circle></g><path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" d=\"m9 8.4 3.9 3.6L9 15.6\"></path><path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"1.8\" d=\"M13.7 15.1H17\"></path>", 4)])]);
}
var codex_default = { render: render$1 };
//#endregion
//#region src/features/ai/mcpAccess/assets/client-icons/gemini.svg?component
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [createStaticVNode("<defs><linearGradient id=\"gemini-spark-gradient\" x1=\"3\" x2=\"21\" y1=\"4\" y2=\"20\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#4285F4\"></stop><stop offset=\".5\" stop-color=\"#9B72CB\"></stop><stop offset=\"1\" stop-color=\"#D96570\"></stop></linearGradient></defs><path fill=\"url(#gemini-spark-gradient)\" d=\"M12 1q0 11 11 11-11 0-11 11 0-11-11-11 11 0 11-11\"></path>", 2)])]);
}
var gemini_default = { render };
//#endregion
//#region src/features/ai/mcpAccess/mcp.clients.catalog.ts
/**
* The "Connect a client" setup catalogue, in picker order. Each client carries
* the per-category payload its setup steps render: CLIs an install command +
* config + auth step, web clients a one-click connector URL, IDEs a deep link
* (when the editor supports one) + manual config.
*/
function getMcpClientCatalog(serverUrl) {
	const claudeSnippet = `{
  "mcpServers": {
    "n8n": {
      "type": "http",
      "url": "${serverUrl}"
    }
  }
}`;
	const cursorSnippet = `{
  "mcpServers": {
    "n8n": {
      "type": "streamable-http",
      "url": "${serverUrl}"
    }
  }
}`;
	const codexSnippet = `[features]
experimental_use_rmcp_client = true

[mcp_servers.n8n]
url = "${serverUrl}"`;
	const geminiSnippet = `{
  "mcpServers": {
    "n8n": {
      "httpUrl": "${serverUrl}"
    }
  }
}`;
	const vscodeSnippet = `{
  "servers": {
    "n8n": {
      "type": "http",
      "url": "${serverUrl}"
    }
  }
}`;
	const windsurfSnippet = `{\n  "mcpServers": {\n    "n8n": {\n      "serverUrl": "${serverUrl}"\n    }\n  }\n}`;
	const cursorDeepLink = `cursor://anysphere.cursor-deeplink/mcp/install?name=n8n&config=${btoa(`{"url":"${serverUrl}"}`)}`;
	const vscodeDeepLink = `vscode:mcp/install?${encodeURIComponent(`{"name":"n8n","type":"http","url":"${serverUrl}"}`)}`;
	return [
		{
			id: "cli",
			clients: [
				{
					id: "claude-code",
					name: "Claude Code",
					category: "cli",
					icon: claude_default,
					installCommand: `claude mcp add --transport http n8n ${serverUrl}`,
					configSnippet: claudeSnippet
				},
				{
					id: "codex",
					name: "Codex",
					category: "cli",
					icon: codex_default,
					installCommand: `codex mcp add n8n --url "${serverUrl}"`,
					configSnippet: codexSnippet,
					authCommand: "codex mcp login n8n"
				},
				{
					id: "gemini-cli",
					name: "Gemini CLI",
					category: "cli",
					icon: gemini_default,
					installCommand: `gemini mcp add --transport http n8n ${serverUrl}`,
					configSnippet: geminiSnippet
				}
			]
		},
		{
			id: "web",
			clients: [{
				id: "claude-ai",
				name: "Claude.ai",
				category: "web",
				icon: claude_default,
				addUrl: "https://claude.ai/directory/connectors/n8n"
			}, {
				id: "chatgpt",
				name: "ChatGPT",
				category: "web",
				icon: openai_default,
				addUrl: "https://chatgpt.com/plugins#settings/Connectors?create-connector=true&redirectAfter=%2Fplugins"
			}]
		},
		{
			id: "ide",
			clients: [
				{
					id: "cursor",
					name: "Cursor",
					category: "ide",
					icon: cursor_default,
					deepLink: cursorDeepLink,
					configSnippet: cursorSnippet
				},
				{
					id: "vscode",
					name: "VS Code",
					category: "ide",
					icon: vscode_default,
					deepLink: vscodeDeepLink,
					configSnippet: vscodeSnippet
				},
				{
					id: "windsurf",
					name: "Windsurf",
					category: "ide",
					icon: null,
					configSnippet: windsurfSnippet
				}
			]
		}
	];
}
//#endregion
//#region src/features/ai/mcpAccess/components/ConnectionParameter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["for"];
var _hoisted_2 = ["id"];
var ConnectionParameter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionParameter",
	props: {
		id: {},
		label: {},
		value: {},
		valueLoading: {
			type: Boolean,
			default: false
		},
		infoTip: { default: void 0 },
		allowCopy: {
			type: Boolean,
			default: true
		}
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const { copy, copied, isSupported } = useClipboard();
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const handleCopy = async (value) => {
			await copy(value);
			emit("copy", value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["label-wrapper"]) }, [createBaseVNode("label", {
				class: normalizeClass(_ctx.$style.label),
				for: `connection-parameter-${props.id}`
			}, toDisplayString(props.label), 11, _hoisted_1), props.infoTip ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style["info-tip"])
			}, [createVNode(unref(N8nInfoTip_default), {
				type: "tooltip",
				size: "small",
				enterable: false
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.infoTip), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", {
				id: `connection-parameter-${props.id}`,
				class: normalizeClass({
					[_ctx.$style["parameter-value"]]: true,
					[_ctx.$style["parameter-value--loading"]]: props.valueLoading
				}),
				"data-test-id": "connection-parameter-value"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["input-wrapper"]) }, [props.valueLoading ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				loading: props.valueLoading,
				variant: "h1",
				class: normalizeClass(_ctx.$style["parameter-skeleton"])
			}, null, 8, ["loading", "class"])) : (openBlock(), createBlock(unref(Input_default), {
				key: 1,
				modelValue: props.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => props.value = $event),
				type: "text",
				readonly: true
			}, null, 8, ["modelValue"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["copy-button-wrapper"]) }, [renderSlot(_ctx.$slots, "customActions"), createVNode(unref(N8nTooltip_default), {
				disabled: !unref(isSupported),
				content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy"),
				"show-after": unref(100),
				placement: "bottom"
			}, {
				default: withCtx(() => [props.allowCopy && unref(isSupported) ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					iconOnly: "",
					icon: unref(copied) ? "check" : "copy",
					class: normalizeClass(_ctx.$style["copy-button"]),
					disabled: props.valueLoading,
					onClick: _cache[1] || (_cache[1] = ($event) => handleCopy(props.value))
				}, null, 8, [
					"icon",
					"class",
					"disabled"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"disabled",
				"content",
				"show-after"
			])], 2)], 10, _hoisted_2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/ConnectionParameter.vue?vue&type=style&index=0&lang.module.scss
var container$2 = "_container_pelnb_388";
var label$1 = "_label_pelnb_394";
var shimmer$5 = "_shimmer_pelnb_1";
var spin$5 = "_spin_pelnb_1";
var opacityPulse$5 = "_opacityPulse_pelnb_1";
var popoverIn$5 = "_popoverIn_pelnb_1";
var fadeIn$5 = "_fadeIn_pelnb_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_pelnb_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_pelnb_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_pelnb_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_pelnb_1";
var blurSwapIn$5 = "_blurSwapIn_pelnb_1";
var blurSwapOut$5 = "_blurSwapOut_pelnb_1";
var pulseGlow$5 = "_pulseGlow_pelnb_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_pelnb_1";
var fade$5 = "_fade_pelnb_1";
var fadeInUp$5 = "_fadeInUp_pelnb_1";
var fadeInDown$5 = "_fadeInDown_pelnb_1";
var fadeInLeft$5 = "_fadeInLeft_pelnb_1";
var fadeInRight$5 = "_fadeInRight_pelnb_1";
var fadeOut$5 = "_fadeOut_pelnb_1";
var fadeOutDown$5 = "_fadeOutDown_pelnb_1";
var fadeOutUp$5 = "_fadeOutUp_pelnb_1";
var fadeOutLeft$5 = "_fadeOutLeft_pelnb_1";
var fadeOutRight$5 = "_fadeOutRight_pelnb_1";
var ping$5 = "_ping_pelnb_1";
var blinkBackground$5 = "_blinkBackground_pelnb_1";
var typingBlink$5 = "_typingBlink_pelnb_1";
var ConnectionParameter_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	"label-wrapper": "_label-wrapper_pelnb_394",
	"info-tip": "_info-tip_pelnb_399",
	label: label$1,
	"parameter-value": "_parameter-value_pelnb_416",
	"parameter-value--loading": "_parameter-value--loading_pelnb_427",
	"input-wrapper": "_input-wrapper_pelnb_430",
	"parameter-skeleton": "_parameter-skeleton_pelnb_456",
	"copy-button-wrapper": "_copy-button-wrapper_pelnb_483",
	"copy-button": "_copy-button_pelnb_483",
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_pelnb_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var ConnectionParameter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionParameter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionParameter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/McpConfigSnippet.vue?vue&type=script&setup=true&lang.ts
var McpConfigSnippet_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpConfigSnippet",
	props: {
		value: {},
		language: {},
		disabled: { type: Boolean }
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { copy, copied, isSupported } = useClipboard();
		const code = computed(() => `\`\`\`${props.language ?? "json"}\n${props.value}\n\`\`\``);
		const handleCopy = async () => {
			await copy(props.value);
			emit("copy", props.value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-config-snippet"
			}, [createVNode(unref(N8nMarkdown_default), { content: code.value }, null, 8, ["content"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style["copy-wrapper"]) }, [createVNode(unref(N8nTooltip_default), {
				placement: "bottom-end",
				disabled: !unref(isSupported),
				content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy"),
				"show-after": unref(100)
			}, {
				default: withCtx(() => [unref(isSupported) && !__props.disabled ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "ghost",
					iconOnly: "",
					icon: unref(copied) ? "check" : "copy",
					class: normalizeClass(_ctx.$style["copy-button"]),
					"data-test-id": "mcp-config-snippet-copy",
					onClick: handleCopy
				}, null, 8, ["icon", "class"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"disabled",
				"content",
				"show-after"
			])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpConfigSnippet.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_xcd2r_388";
var shimmer$4 = "_shimmer_xcd2r_1";
var spin$4 = "_spin_xcd2r_1";
var opacityPulse$4 = "_opacityPulse_xcd2r_1";
var popoverIn$4 = "_popoverIn_xcd2r_1";
var fadeIn$4 = "_fadeIn_xcd2r_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_xcd2r_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_xcd2r_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_xcd2r_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_xcd2r_1";
var blurSwapIn$4 = "_blurSwapIn_xcd2r_1";
var blurSwapOut$4 = "_blurSwapOut_xcd2r_1";
var pulseGlow$4 = "_pulseGlow_xcd2r_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_xcd2r_1";
var fade$4 = "_fade_xcd2r_1";
var fadeInUp$4 = "_fadeInUp_xcd2r_1";
var fadeInDown$4 = "_fadeInDown_xcd2r_1";
var fadeInLeft$4 = "_fadeInLeft_xcd2r_1";
var fadeInRight$4 = "_fadeInRight_xcd2r_1";
var fadeOut$4 = "_fadeOut_xcd2r_1";
var fadeOutDown$4 = "_fadeOutDown_xcd2r_1";
var fadeOutUp$4 = "_fadeOutUp_xcd2r_1";
var fadeOutLeft$4 = "_fadeOutLeft_xcd2r_1";
var fadeOutRight$4 = "_fadeOutRight_xcd2r_1";
var ping$4 = "_ping_xcd2r_1";
var blinkBackground$4 = "_blinkBackground_xcd2r_1";
var typingBlink$4 = "_typingBlink_xcd2r_1";
var McpConfigSnippet_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	"copy-wrapper": "_copy-wrapper_xcd2r_404",
	"copy-button": "_copy-button_xcd2r_414",
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_xcd2r_1",
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
var McpConfigSnippet_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpConfigSnippet_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpConfigSnippet_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/McpAccessTokenTab.vue?vue&type=script&setup=true&lang.ts
var McpAccessTokenTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpAccessTokenTab",
	props: { serverUrl: {} },
	emits: ["copied"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const mcpStore = useMCPStore();
		const loadingApiKey = ref(true);
		const keyRotating = ref(false);
		const apiKey = computed(() => mcpStore.currentUserMCPKey);
		const connectionString = computed(() => {
			return `{
  "mcpServers": {
    "n8n-mcp": {
      "type": "http",
      "url": "${props.serverUrl}",
      "headers": {
        "Authorization": "Bearer ${apiKeyText.value}"
      }
    }
  }
}`;
		});
		const isKeyRedacted = computed(() => {
			return apiKey.value?.apiKey?.includes("******") ?? false;
		});
		const apiKeyText = computed(() => {
			if (keyRotating.value) return `<${i18n.baseText("generic.loading")}...>`;
			return isKeyRedacted.value ? "<YOUR_ACCESS_TOKEN_HERE>" : apiKey.value?.apiKey;
		});
		const fetchApiKey = async () => {
			try {
				loadingApiKey.value = true;
				await mcpStore.getOrCreateApiKey();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.apiKey"));
			} finally {
				setTimeout(() => {
					loadingApiKey.value = false;
				}, 200);
			}
		};
		const rotateKey = async () => {
			try {
				keyRotating.value = true;
				await mcpStore.generateNewApiKey();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.rotating.apiKey"));
			} finally {
				setTimeout(() => {
					keyRotating.value = false;
				}, 200);
			}
		};
		const handleConnectionStringCopy = (value) => {
			emit("copied", "mcpJson", value);
		};
		const handleUrlCopy = (url) => {
			emit("copied", "serverUrl", url);
		};
		const handleAccessTokenCopy = () => {
			if (apiKey.value?.apiKey) emit("copied", "accessToken", apiKey.value.apiKey);
		};
		onMounted(async () => {
			if (!apiKey.value) await fetchApiKey();
			else loadingApiKey.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-access-token-tab"
			}, [createVNode(ConnectionParameter_default, {
				id: "oauth-server-url",
				label: unref(i18n).baseText("settings.mcp.connectDialog.serverUrl"),
				value: props.serverUrl,
				onCopy: handleUrlCopy
			}, null, 8, ["label", "value"]), loadingApiKey.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style["loading-container"])
			}, [createVNode(unref(N8nLoading_default), {
				loading: loadingApiKey.value,
				variant: "h1",
				class: normalizeClass(_ctx.$style["url-skeleton"])
			}, null, 8, ["loading", "class"]), createVNode(unref(N8nLoading_default), {
				loading: loadingApiKey.value,
				variant: "button",
				class: normalizeClass(_ctx.$style["code-skeleton"])
			}, null, 8, ["loading", "class"])], 2)) : apiKey.value?.apiKey ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style["parameters-container"])
			}, [
				createVNode(ConnectionParameter_default, {
					id: "access-token",
					value: apiKey.value.apiKey,
					"value-loading": keyRotating.value,
					label: unref(i18n).baseText("settings.mcp.connectDialog.tab.accessToken"),
					"info-tip": unref(i18n).baseText("settings.mcp.instructions.apiKey.tip"),
					"allow-copy": !isKeyRedacted.value,
					onCopy: handleAccessTokenCopy
				}, {
					customActions: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: unref(i18n).baseText("settings.mcp.instructions.rotateKey.tooltip"),
						"show-after": unref(100)
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							iconOnly: "",
							icon: "refresh-cw",
							disabled: keyRotating.value,
							onClick: rotateKey
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content", "show-after"])]),
					_: 1
				}, 8, [
					"value",
					"value-loading",
					"label",
					"info-tip",
					"allow-copy"
				]),
				!isKeyRedacted.value ? (openBlock(), createBlock(unref(N8nNotice_default), { key: 0 }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.access.token.notice")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["json-container"]),
					"data-test-id": "mcp-access-token-json"
				}, [createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.connectDialog.jsonConfig")), 3), createVNode(McpConfigSnippet_default, {
					value: connectionString.value,
					disabled: keyRotating.value,
					onCopy: handleConnectionStringCopy
				}, null, 8, ["value", "disabled"])], 2)
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpAccessTokenTab.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_chqjr_388";
var label = "_label_chqjr_419";
var shimmer$3 = "_shimmer_chqjr_1";
var spin$3 = "_spin_chqjr_1";
var opacityPulse$3 = "_opacityPulse_chqjr_1";
var popoverIn$3 = "_popoverIn_chqjr_1";
var fadeIn$3 = "_fadeIn_chqjr_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_chqjr_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_chqjr_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_chqjr_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_chqjr_1";
var blurSwapIn$3 = "_blurSwapIn_chqjr_1";
var blurSwapOut$3 = "_blurSwapOut_chqjr_1";
var pulseGlow$3 = "_pulseGlow_chqjr_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_chqjr_1";
var fade$3 = "_fade_chqjr_1";
var fadeInUp$3 = "_fadeInUp_chqjr_1";
var fadeInDown$3 = "_fadeInDown_chqjr_1";
var fadeInLeft$3 = "_fadeInLeft_chqjr_1";
var fadeInRight$3 = "_fadeInRight_chqjr_1";
var fadeOut$3 = "_fadeOut_chqjr_1";
var fadeOutDown$3 = "_fadeOutDown_chqjr_1";
var fadeOutUp$3 = "_fadeOutUp_chqjr_1";
var fadeOutLeft$3 = "_fadeOutLeft_chqjr_1";
var fadeOutRight$3 = "_fadeOutRight_chqjr_1";
var ping$3 = "_ping_chqjr_1";
var blinkBackground$3 = "_blinkBackground_chqjr_1";
var typingBlink$3 = "_typingBlink_chqjr_1";
var McpAccessTokenTab_vue_vue_type_style_index_0_lang_module_default = {
	container,
	"loading-container": "_loading-container_chqjr_393",
	"url-skeleton": "_url-skeleton_chqjr_399",
	"code-skeleton": "_code-skeleton_chqjr_404",
	"parameters-container": "_parameters-container_chqjr_409",
	"json-container": "_json-container_chqjr_415",
	label,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_chqjr_1",
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
var McpAccessTokenTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpAccessTokenTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpAccessTokenTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/McpConnectClientDialog.vue?vue&type=script&setup=true&lang.ts
var McpConnectClientDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpConnectClientDialog",
	setup(__props) {
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const mcpStore = useMCPStore();
		const serverUrl = computed(() => mcpStore.serverUrl);
		const catalog = computed(() => getMcpClientCatalog(serverUrl.value));
		const clientsById = computed(() => new Map(catalog.value.flatMap((group) => group.clients.map((client) => [client.id, client]))));
		const activeMethod = ref("oauth");
		const methodTabs = computed(() => [{
			label: i18n.baseText("settings.mcp.connectDialog.method.oauth"),
			value: "oauth"
		}, {
			label: i18n.baseText("settings.mcp.connectDialog.method.apiKey"),
			value: "apiKey"
		}]);
		const activeClientId = ref("claude-ai");
		const activeClient = computed(() => clientsById.value.get(activeClientId.value));
		const clientMenuItems = computed(() => {
			const items = [];
			for (const group of catalog.value) {
				items.push({
					id: `header:${group.id}`,
					label: i18n.baseText(`settings.mcp.connectDialog.category.${group.id}`),
					disabled: true,
					divided: items.length > 0,
					data: { kind: "header" }
				});
				for (const client of group.clients) items.push({
					id: client.id,
					label: client.name,
					checked: client.id === activeClientId.value,
					data: {
						kind: "client",
						client
					}
				});
			}
			return items;
		});
		const onSelectClient = (id) => {
			if (clientMenuItems.value.find((menuItem) => menuItem.id === id)?.data?.kind !== "client") return;
			activeClientId.value = id;
			telemetry.track("User selected MCP client in connect dialog", { client: id });
		};
		const onOpenChange = (open) => {
			if (open) mcpStore.openConnectPopover();
			else {
				mcpStore.closeConnectPopover();
				mcpStore.resetCurrentUserMCPKey();
				activeMethod.value = "oauth";
			}
		};
		const trackCopy = (parameter) => {
			telemetry.track("User copied MCP connection parameter", {
				parameter,
				source: "connect-dialog"
			});
		};
		const handleTokenTabCopy = (type) => {
			trackCopy({
				serverUrl: "server-url",
				accessToken: "access-token",
				mcpJson: "mcp-json"
			}[type]);
		};
		const installTitle = computed(() => i18n.baseText("settings.mcp.connectDialog.install.title", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const installDescription = computed(() => i18n.baseText("settings.mcp.connectDialog.install.description", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const authenticateDescription = computed(() => activeClient.value?.authCommand ? i18n.baseText("settings.mcp.connectDialog.authenticate.description.command") : i18n.baseText("settings.mcp.connectDialog.authenticate.description.mcpCommand", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const oneClickDescription = computed(() => activeClient.value?.category === "web" ? i18n.baseText("settings.mcp.connectDialog.oneClick.description.web", { interpolate: { client: activeClient.value?.name ?? "" } }) : i18n.baseText("settings.mcp.connectDialog.oneClick.description.ide", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const addButtonLabel = computed(() => i18n.baseText("settings.mcp.connectDialog.oneClick.button", { interpolate: { client: activeClient.value?.name ?? "" } }));
		const serverUrlDescription = computed(() => i18n.baseText("settings.mcp.connectDialog.serverUrl.description", { interpolate: { client: activeClient.value?.name ?? "" } }));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: unref(mcpStore).connectPopoverOpen,
				size: "large",
				header: unref(i18n).baseText("settings.mcp.connectDialog.title"),
				description: unref(i18n).baseText("settings.mcp.connectDialog.description"),
				"data-test-id": "mcp-connect-dialog",
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(N8nTabs_default), {
					"model-value": activeMethod.value,
					options: methodTabs.value,
					class: normalizeClass(_ctx.$style.tabs),
					"data-test-id": "mcp-connect-method-tabs",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeMethod.value = $event)
				}, null, 8, [
					"model-value",
					"options",
					"class"
				]), activeMethod.value === "oauth" ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 0 }, {
					default: withCtx(() => [createVNode(unref(SettingsRow_default), {
						title: unref(i18n).baseText("settings.mcp.connectDialog.yourClient.title"),
						description: unref(i18n).baseText("settings.mcp.connectDialog.yourClient.description"),
						"show-divider": !!activeClient.value
					}, {
						action: withCtx(() => [createVNode(unref(DropdownMenu_default), {
							items: clientMenuItems.value,
							placement: "bottom-end",
							"max-height": "min(var(--reka-dropdown-menu-content-available-height), 30rem)",
							"extra-popper-class": _ctx.$style["picker-menu"],
							"data-test-id": "mcp-connect-client-picker",
							onSelect: onSelectClient
						}, {
							trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "medium",
								"aria-label": unref(i18n).baseText("settings.mcp.connectDialog.yourClient.title"),
								"data-test-id": "mcp-connect-client-picker-trigger"
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["picker-trigger"]) }, [
									activeClient.value?.icon ? (openBlock(), createBlock(resolveDynamicComponent(activeClient.value.icon), {
										key: 0,
										class: normalizeClass(_ctx.$style["brand-icon"])
									}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
										key: 1,
										icon: "mcp",
										size: "small",
										color: "text-light"
									})),
									createTextVNode(" " + toDisplayString(activeClient.value?.name) + " ", 1),
									createVNode(unref(N8nIcon_default), {
										icon: "chevron-down",
										size: "small"
									})
								], 2)]),
								_: 1
							}, 8, ["aria-label"])]),
							"item-leading": withCtx(({ item }) => [item.data?.kind === "client" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [item.data.client.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.data.client.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style["brand-icon"])
							}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "mcp",
								size: "large",
								color: "text-light"
							}))], 64)) : createCommentVNode("", true)]),
							"item-label": withCtx(({ item }) => [item.data?.kind === "header" ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.category)
							}, toDisplayString(item.label), 3)) : (openBlock(), createBlock(unref(N8nText_default), {
								key: 1,
								size: "medium",
								color: "text-dark",
								class: normalizeClass(_ctx.$style["client-label"])
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
								_: 2
							}, 1032, ["class"]))]),
							_: 1
						}, 8, ["items", "extra-popper-class"])]),
						_: 1
					}, 8, [
						"title",
						"description",
						"show-divider"
					]), activeClient.value?.category === "cli" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: installTitle.value,
							description: installDescription.value
						}, {
							action: withCtx(() => [createVNode(ConnectionParameter_default, {
								class: normalizeClass(_ctx.$style["copy-field"]),
								id: "mcp-install-command",
								label: "",
								value: activeClient.value.installCommand ?? "",
								onCopy: _cache[1] || (_cache[1] = ($event) => trackCopy("install-command"))
							}, null, 8, ["class", "value"])]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.configure.titleAlt"),
							description: unref(i18n).baseText("settings.mcp.connectDialog.configure.descriptionAlt")
						}, {
							action: withCtx(() => [createVNode(McpConfigSnippet_default, {
								class: normalizeClass(_ctx.$style["copy-field"]),
								value: activeClient.value.configSnippet ?? "",
								language: activeClient.value.id === "codex" ? "toml" : "json",
								onCopy: _cache[2] || (_cache[2] = ($event) => trackCopy("config"))
							}, null, 8, [
								"class",
								"value",
								"language"
							])]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.authenticate.title"),
							description: authenticateDescription.value
						}, {
							action: withCtx(() => [createVNode(ConnectionParameter_default, {
								class: normalizeClass(_ctx.$style["copy-field"]),
								id: "mcp-auth-command",
								label: "",
								value: activeClient.value.authCommand ?? "/mcp",
								onCopy: _cache[3] || (_cache[3] = ($event) => trackCopy("auth-command"))
							}, null, 8, ["class", "value"])]),
							_: 1
						}, 8, ["title", "description"])
					], 64)) : activeClient.value?.category === "web" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [activeClient.value.addUrl ? (openBlock(), createBlock(unref(SettingsRow_default), {
						key: 0,
						"show-divider": false,
						title: unref(i18n).baseText("settings.mcp.connectDialog.oneClick.title"),
						description: oneClickDescription.value
					}, {
						action: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "medium",
							href: activeClient.value.addUrl,
							target: "_blank",
							"data-test-id": "mcp-connect-one-click"
						}, {
							default: withCtx(() => [activeClient.value.icon ? (openBlock(), createBlock(resolveDynamicComponent(activeClient.value.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style["brand-icon"])
							}, null, 8, ["class"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(addButtonLabel.value), 1)]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					}, 8, ["title", "description"])) : createCommentVNode("", true), createVNode(unref(SettingsRow_default), {
						layout: "vertical",
						"show-divider": false,
						title: unref(i18n).baseText("settings.mcp.connectDialog.serverUrl"),
						description: serverUrlDescription.value
					}, {
						action: withCtx(() => [createVNode(ConnectionParameter_default, {
							class: normalizeClass(_ctx.$style["copy-field"]),
							id: "mcp-web-server-url",
							label: "",
							value: serverUrl.value,
							onCopy: _cache[4] || (_cache[4] = ($event) => trackCopy("server-url"))
						}, null, 8, ["class", "value"])]),
						_: 1
					}, 8, ["title", "description"])], 64)) : activeClient.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
						activeClient.value.deepLink ? (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 0,
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.oneClick.title"),
							description: oneClickDescription.value
						}, {
							action: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "medium",
								href: activeClient.value.deepLink,
								"data-test-id": "mcp-connect-one-click"
							}, {
								default: withCtx(() => [activeClient.value.icon ? (openBlock(), createBlock(resolveDynamicComponent(activeClient.value.icon), {
									key: 0,
									class: normalizeClass(_ctx.$style["brand-icon"])
								}, null, 8, ["class"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(addButtonLabel.value), 1)]),
								_: 1
							}, 8, ["href"])]),
							_: 1
						}, 8, ["title", "description"])) : createCommentVNode("", true),
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.serverUrl"),
							description: serverUrlDescription.value
						}, {
							action: withCtx(() => [createVNode(ConnectionParameter_default, {
								class: normalizeClass(_ctx.$style["copy-field"]),
								id: "mcp-server-url",
								label: "",
								value: serverUrl.value,
								onCopy: _cache[5] || (_cache[5] = ($event) => trackCopy("server-url"))
							}, null, 8, ["class", "value"])]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsRow_default), {
							layout: "vertical",
							"show-divider": false,
							title: unref(i18n).baseText("settings.mcp.connectDialog.configure.title"),
							description: unref(i18n).baseText("settings.mcp.connectDialog.configure.description")
						}, {
							action: withCtx(() => [createVNode(McpConfigSnippet_default, {
								class: normalizeClass(_ctx.$style["copy-field"]),
								value: activeClient.value.configSnippet ?? "",
								onCopy: _cache[6] || (_cache[6] = ($event) => trackCopy("config"))
							}, null, 8, ["class", "value"])]),
							_: 1
						}, 8, ["title", "description"])
					], 64)) : createCommentVNode("", true)]),
					_: 1
				})) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style["token-setup"]),
					"data-test-id": "mcp-connect-token-setup"
				}, [createVNode(McpAccessTokenTab_default, {
					"server-url": serverUrl.value,
					onCopied: handleTokenTabCopy
				}, null, 8, ["server-url"])], 2))], 2)]),
				_: 1
			}, 8, [
				"open",
				"header",
				"description"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpConnectClientDialog.vue?vue&type=style&index=0&lang.module.scss
var body = "_body_21mb3_390";
var tabs = "_tabs_21mb3_397";
var category = "_category_21mb3_423";
var shimmer$2 = "_shimmer_21mb3_1";
var spin$2 = "_spin_21mb3_1";
var opacityPulse$2 = "_opacityPulse_21mb3_1";
var popoverIn$2 = "_popoverIn_21mb3_1";
var fadeIn$2 = "_fadeIn_21mb3_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_21mb3_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_21mb3_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_21mb3_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_21mb3_1";
var blurSwapIn$2 = "_blurSwapIn_21mb3_1";
var blurSwapOut$2 = "_blurSwapOut_21mb3_1";
var pulseGlow$2 = "_pulseGlow_21mb3_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_21mb3_1";
var fade$2 = "_fade_21mb3_1";
var fadeInUp$2 = "_fadeInUp_21mb3_1";
var fadeInDown$2 = "_fadeInDown_21mb3_1";
var fadeInLeft$2 = "_fadeInLeft_21mb3_1";
var fadeInRight$2 = "_fadeInRight_21mb3_1";
var fadeOut$2 = "_fadeOut_21mb3_1";
var fadeOutDown$2 = "_fadeOutDown_21mb3_1";
var fadeOutUp$2 = "_fadeOutUp_21mb3_1";
var fadeOutLeft$2 = "_fadeOutLeft_21mb3_1";
var fadeOutRight$2 = "_fadeOutRight_21mb3_1";
var ping$2 = "_ping_21mb3_1";
var blinkBackground$2 = "_blinkBackground_21mb3_1";
var typingBlink$2 = "_typingBlink_21mb3_1";
var McpConnectClientDialog_vue_vue_type_style_index_0_lang_module_default = {
	body,
	tabs,
	"picker-trigger": "_picker-trigger_21mb3_401",
	"picker-menu": "_picker-menu_21mb3_408",
	"client-label": "_client-label_21mb3_412",
	"brand-icon": "_brand-icon_21mb3_416",
	category,
	"copy-field": "_copy-field_21mb3_435",
	"token-setup": "_token-setup_21mb3_439",
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_21mb3_1",
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
var McpConnectClientDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpConnectClientDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpConnectClientDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/McpStatusControl.vue?vue&type=script&setup=true&lang.ts
var McpStatusControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpStatusControl",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		managedByEnv: {
			type: Boolean,
			default: false
		}
	},
	emits: ["disable"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const disabledTooltip = computed(() => props.managedByEnv ? i18n.baseText("settings.mcp.managedByEnv.tooltip") : i18n.baseText("settings.mcp.toggle.disabled.tooltip"));
		const menuItems = computed(() => [{
			id: "disable",
			label: i18n.baseText("settings.mcp.status.disable")
		}]);
		const onSelect = (id) => {
			if (id === "disable") emit("disable");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: disabledTooltip.value,
				disabled: !props.disabled,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					items: menuItems.value,
					placement: "bottom-end",
					disabled: props.disabled || props.loading,
					"data-test-id": "mcp-status-control",
					onSelect
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						disabled: props.disabled,
						loading: props.loading,
						"aria-label": unref(i18n).baseText("settings.mcp.status.ariaLabel"),
						"data-test-id": "mcp-status-control-trigger"
					}, {
						default: withCtx(() => [
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.dot) }, null, 2),
							createTextVNode(" " + toDisplayString(unref(i18n).baseText("settings.mcp.header.toggle.enabled")) + " ", 1),
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
					"item-leading": withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "power",
						size: "large",
						color: "danger"
					})]),
					"item-label": withCtx(({ item }) => [createVNode(unref(N8nText_default), {
						size: "medium",
						color: "danger",
						"data-test-id": "mcp-status-disable-item"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
						_: 2
					}, 1024)]),
					_: 1
				}, 8, ["items", "disabled"])]),
				_: 1
			}, 8, ["content", "disabled"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpStatusControl.vue?vue&type=style&index=0&lang.module.scss
var dot = "_dot_1h5h2_388";
var shimmer$1 = "_shimmer_1h5h2_1";
var spin$1 = "_spin_1h5h2_1";
var opacityPulse$1 = "_opacityPulse_1h5h2_1";
var popoverIn$1 = "_popoverIn_1h5h2_1";
var fadeIn$1 = "_fadeIn_1h5h2_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1h5h2_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1h5h2_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1h5h2_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1h5h2_1";
var blurSwapIn$1 = "_blurSwapIn_1h5h2_1";
var blurSwapOut$1 = "_blurSwapOut_1h5h2_1";
var pulseGlow$1 = "_pulseGlow_1h5h2_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1h5h2_1";
var fade$1 = "_fade_1h5h2_1";
var fadeInUp$1 = "_fadeInUp_1h5h2_1";
var fadeInDown$1 = "_fadeInDown_1h5h2_1";
var fadeInLeft$1 = "_fadeInLeft_1h5h2_1";
var fadeInRight$1 = "_fadeInRight_1h5h2_1";
var fadeOut$1 = "_fadeOut_1h5h2_1";
var fadeOutDown$1 = "_fadeOutDown_1h5h2_1";
var fadeOutUp$1 = "_fadeOutUp_1h5h2_1";
var fadeOutLeft$1 = "_fadeOutLeft_1h5h2_1";
var fadeOutRight$1 = "_fadeOutRight_1h5h2_1";
var ping$1 = "_ping_1h5h2_1";
var blinkBackground$1 = "_blinkBackground_1h5h2_1";
var typingBlink$1 = "_typingBlink_1h5h2_1";
var McpStatusControl_vue_vue_type_style_index_0_lang_module_default = {
	dot,
	"mcp-status-pulse": "_mcp-status-pulse_1h5h2_1",
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1h5h2_1",
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
var McpStatusControl_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpStatusControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpStatusControl_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPView.vue?vue&type=script&setup=true&lang.ts
var SettingsMCPView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsMCPView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const mcp = useMcp();
		const router = useRouter();
		const mcpStore = useMCPStore();
		const settingsStore = useSettingsStore();
		const { offerToExposeAllWorkflows } = useExposeAllWorkflowsToMcpOffer();
		const exposeAllWorkflowsToMcpStore = useExposeAllWorkflowsToMcpStore();
		const agentsModuleActive = computed(() => settingsStore.isModuleActive("agents"));
		const mcpStatusLoading = ref(false);
		const showDisableDialog = ref(false);
		const isLoadingClients = ref(true);
		const canManageMcpInstance = computed(() => hasPermission(["rbac"], { rbac: { scope: "mcp:manage" } }));
		const canToggleMCP = computed(() => canManageMcpInstance.value && !mcpStore.mcpManagedByEnv);
		const exposedWorkflowsCount = ref(null);
		const autoExposeSaving = ref(false);
		const showCallbackUrlsDialog = ref(false);
		const savingCallbackUrls = ref(false);
		const onAutoExposeSwitchUpdate = (value) => {
			onToggleAutoExpose(value === true);
		};
		const onToggleAutoExpose = async (value) => {
			autoExposeSaving.value = true;
			try {
				const updated = await mcpStore.setAutoExposeNewWorkflows(value);
				mcp.trackAutoExposeToggled({
					enabled: updated,
					source: "settings"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.autoExpose.error.title"));
			} finally {
				autoExposeSaving.value = false;
			}
		};
		const showInstanceCapacityNotice = computed(() => canManageMcpInstance.value && mcpStore.instanceClientStats?.atCapacity === true);
		const instanceCapacityNoticeContent = computed(() => {
			const stats = mcpStore.instanceClientStats;
			if (!stats) return "";
			return i18n.baseText("settings.mcp.instanceCapacity.warning", { interpolate: {
				count: String(stats.count),
				limit: String(stats.limit)
			} });
		});
		const workflowsExposedValue = computed(() => exposedWorkflowsCount.value === null ? "—" : i18n.baseText("settings.mcp.workflowsExposed.count", {
			adjustToNumber: exposedWorkflowsCount.value,
			interpolate: { count: String(exposedWorkflowsCount.value) }
		}));
		const exposedAgentsCount = ref(null);
		const agentsExposedValue = computed(() => exposedAgentsCount.value === null ? "—" : i18n.baseText("settings.mcp.agentsExposed.count", {
			adjustToNumber: exposedAgentsCount.value,
			interpolate: { count: String(exposedAgentsCount.value) }
		}));
		const callbackUrlsValue = computed(() => mcpStore.allowedRedirectUris.length === 0 ? i18n.baseText("settings.mcp.callbackUrls.value.all") : i18n.baseText("settings.mcp.callbackUrls.value.count", {
			adjustToNumber: mcpStore.allowedRedirectUris.length,
			interpolate: { count: String(mcpStore.allowedRedirectUris.length) }
		}));
		const fetchExposedWorkflowsCount = async () => {
			try {
				exposedWorkflowsCount.value = (await mcpStore.fetchWorkflowsAvailableForMCP(1, 1)).count;
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
			}
		};
		const fetchExposedAgentsCount = async () => {
			if (!agentsModuleActive.value) return;
			try {
				exposedAgentsCount.value = (await mcpStore.fetchAgentsAvailableForMCP(1, 1)).count;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.agents.list.error.fetching"));
			}
		};
		const onToggleMCPAccess = async (enabled) => {
			try {
				mcpStatusLoading.value = true;
				const updated = await mcpStore.setMcpAccessEnabled(enabled);
				if (updated) await Promise.all([
					fetchExposedWorkflowsCount(),
					fetchExposedAgentsCount(),
					fetchoAuthCLients()
				]);
				mcp.trackUserToggledMcpAccess(enabled);
				if (enabled && updated) offerToExposeAllWorkflows(async () => {
					await Promise.all([fetchExposedWorkflowsCount(), fetchExposedAgentsCount()]);
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.toggle.error"));
			} finally {
				mcpStatusLoading.value = false;
			}
		};
		const onConfirmDisable = async () => {
			showDisableDialog.value = false;
			await onToggleMCPAccess(false);
		};
		/** Populates the store's client totals so the "N clients have access" count renders. */
		const fetchoAuthCLients = async () => {
			isLoadingClients.value = true;
			try {
				await mcpStore.getAllOAuthClients();
				isLoadingClients.value = false;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			}
		};
		/** Instance-wide count when the user can see it, own count otherwise. */
		const connectedClientsTotal = computed(() => mcpStore.oauthClientTotals.all ?? mcpStore.oauthClientTotals.mine);
		const onConnectClient = () => {
			mcp.trackConnectClientClicked("settings");
			mcpStore.openConnectPopover();
		};
		const openClientsView = () => {
			router.push({ name: MCP_CLIENTS_VIEW });
		};
		const openWorkflowsView = () => {
			router.push({ name: MCP_WORKFLOWS_VIEW });
		};
		const openAgentsView = () => {
			router.push({ name: MCP_AGENTS_VIEW });
		};
		const loadRedirectUris = async () => {
			try {
				await mcpStore.fetchAllowedRedirectUris();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.allowedRedirectUris.error.loading"));
			}
		};
		const onSaveCallbackUrls = async (uris) => {
			try {
				savingCallbackUrls.value = true;
				await mcpStore.setAllowedRedirectUris(uris);
				showCallbackUrlsDialog.value = false;
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.mcp.allowedRedirectUris.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.allowedRedirectUris.error.saving"));
			} finally {
				savingCallbackUrls.value = false;
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp"));
			if (!mcpStore.mcpAccessEnabled) return;
			const fetches = [
				fetchExposedWorkflowsCount(),
				fetchExposedAgentsCount(),
				fetchoAuthCLients()
			];
			if (canManageMcpInstance.value) {
				fetches.push(loadRedirectUris());
				fetches.push(mcpStore.getInstanceClientStats());
			}
			await Promise.all(fetches);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), { class: normalizeClass(_ctx.$style.layout) }, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.mcp.page.title"),
						description: unref(i18n).baseText("settings.mcp.page.description"),
						"docs-url": unref(MCP_DOCS_PAGE_URL),
						"data-test-id": "mcp-settings-header"
					}, null, 8, [
						"title",
						"description",
						"docs-url"
					]),
					!unref(mcpStore).mcpAccessEnabled ? (openBlock(), createBlock(MCPEmptyState_default, {
						key: 0,
						disabled: !canToggleMCP.value,
						loading: mcpStatusLoading.value,
						"managed-by-env": unref(mcpStore).mcpManagedByEnv,
						onTurnOnMcp: _cache[0] || (_cache[0] = ($event) => onToggleMCPAccess(true))
					}, null, 8, [
						"disabled",
						"loading",
						"managed-by-env"
					])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						showInstanceCapacityNotice.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
							key: 0,
							theme: "warning",
							"data-test-id": "mcp-instance-capacity-notice",
							content: instanceCapacityNoticeContent.value
						}, null, 8, ["content"])) : createCommentVNode("", true),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.mcp.connectionDetails.title"),
							"data-test-id": "mcp-enabled-section"
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									title: unref(i18n).baseText("settings.mcp.status.title"),
									description: unref(i18n).baseText("settings.mcp.status.description")
								}, {
									action: withCtx(() => [createVNode(McpStatusControl_default, {
										disabled: !canToggleMCP.value,
										loading: mcpStatusLoading.value,
										"managed-by-env": unref(mcpStore).mcpManagedByEnv,
										onDisable: _cache[1] || (_cache[1] = ($event) => showDisableDialog.value = true)
									}, null, 8, [
										"disabled",
										"loading",
										"managed-by-env"
									])]),
									_: 1
								}, 8, ["title", "description"]), createVNode(unref(SettingsRow_default), {
									title: unref(i18n).baseText("settings.mcp.yourClient.title"),
									description: unref(i18n).baseText("settings.mcp.yourClient.description")
								}, {
									action: withCtx(() => [createVNode(unref(N8nButton_default), {
										variant: "outline",
										size: "medium",
										icon: "mcp",
										label: unref(i18n).baseText("settings.mcp.yourClient.connect"),
										"data-test-id": "mcp-connect-client-button",
										onClick: onConnectClient
									}, null, 8, ["label"])]),
									_: 1
								}, 8, ["title", "description"])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title"]),
						createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.mcp.access.title") }, {
							default: withCtx(() => [
								createVNode(unref(SettingsRowGroup_default), null, {
									default: withCtx(() => [createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.mcp.workflowsExposed.title"),
										description: unref(i18n).baseText("settings.mcp.workflowsExposed.description"),
										clickable: "",
										"data-test-id": "mcp-workflows-exposed-row",
										onClick: openWorkflowsView
									}, {
										action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: workflowsExposedValue.value }, null, 8, ["value"])]),
										_: 1
									}, 8, ["title", "description"]), canManageMcpInstance.value && unref(exposeAllWorkflowsToMcpStore).isEnabled ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										title: unref(i18n).baseText("settings.mcp.autoExpose.title"),
										description: unref(i18n).baseText("settings.mcp.autoExpose.description")
									}, {
										action: withCtx(() => [createVNode(unref(ElSwitch), {
											"data-test-id": "mcp-auto-expose-toggle",
											"model-value": unref(mcpStore).autoExposeNewWorkflows,
											disabled: unref(mcpStore).mcpManagedByEnv,
											loading: autoExposeSaving.value,
											"onUpdate:modelValue": onAutoExposeSwitchUpdate
										}, null, 8, [
											"model-value",
											"disabled",
											"loading"
										])]),
										_: 1
									}, 8, ["title", "description"])) : createCommentVNode("", true)]),
									_: 1
								}),
								agentsModuleActive.value ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 0 }, {
									default: withCtx(() => [createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.mcp.agentsExposed.title"),
										description: unref(i18n).baseText("settings.mcp.agentsExposed.description"),
										clickable: "",
										"data-test-id": "mcp-agents-exposed-row",
										onClick: openAgentsView
									}, {
										action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: agentsExposedValue.value }, null, 8, ["value"])]),
										_: 1
									}, 8, ["title", "description"])]),
									_: 1
								})) : createCommentVNode("", true),
								canManageMcpInstance.value ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
									default: withCtx(() => [createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.mcp.callbackUrls.title"),
										description: unref(i18n).baseText("settings.mcp.callbackUrls.description"),
										clickable: "",
										"data-test-id": "mcp-callback-urls-row",
										onClick: _cache[2] || (_cache[2] = ($event) => showCallbackUrlsDialog.value = true)
									}, {
										action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: callbackUrlsValue.value }, null, 8, ["value"])]),
										_: 1
									}, 8, ["title", "description"])]),
									_: 1
								})) : createCommentVNode("", true)
							]),
							_: 1
						}, 8, ["title"]),
						createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.mcp.connectedClients.title") }, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									title: unref(i18n).baseText("settings.mcp.connectedClients.viewAll.title"),
									description: isLoadingClients.value ? unref("—") : unref(i18n).baseText("settings.mcp.connectedClients.viewAll.description", {
										adjustToNumber: connectedClientsTotal.value,
										interpolate: { count: String(connectedClientsTotal.value) }
									}),
									clickable: "",
									"data-test-id": "mcp-clients-view-all-row",
									onClick: openClientsView
								}, {
									action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: unref(i18n).baseText("settings.mcp.connectedClients.viewAll.action") }, null, 8, ["value"])]),
									_: 1
								}, 8, ["title", "description"])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title"])
					], 64)),
					createVNode(unref(Dialog_default), {
						open: showDisableDialog.value,
						"onUpdate:open": _cache[3] || (_cache[3] = ($event) => showDisableDialog.value = $event),
						size: "small",
						header: unref(i18n).baseText("settings.mcp.status.disableDialog.title"),
						description: unref(i18n).baseText("settings.mcp.status.disableDialog.description"),
						"data-test-id": "mcp-disable-dialog"
					}, {
						default: withCtx(() => [createVNode(unref(DialogFooter_default), null, {
							default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
								default: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "outline",
									label: unref(i18n).baseText("generic.cancel")
								}, null, 8, ["label"])]),
								_: 1
							}), createVNode(unref(N8nButton_default), {
								variant: "destructive",
								label: unref(i18n).baseText("settings.mcp.status.disableDialog.confirm"),
								"data-test-id": "mcp-disable-dialog-confirm",
								onClick: onConfirmDisable
							}, null, 8, ["label"])]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"open",
						"header",
						"description"
					]),
					createVNode(McpConnectClientDialog_default),
					createVNode(McpAllowedCallbackUrlsDialog_default, {
						open: showCallbackUrlsDialog.value,
						"onUpdate:open": _cache[4] || (_cache[4] = ($event) => showCallbackUrlsDialog.value = $event),
						uris: unref(mcpStore).allowedRedirectUris,
						saving: savingCallbackUrls.value,
						onSave: onSaveCallbackUrls
					}, null, 8, [
						"open",
						"uris",
						"saving"
					])
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPView.vue?vue&type=style&index=0&lang.module.scss
var layout = "_layout_q5bgh_389";
var shimmer = "_shimmer_q5bgh_1";
var spin = "_spin_q5bgh_1";
var opacityPulse = "_opacityPulse_q5bgh_1";
var popoverIn = "_popoverIn_q5bgh_1";
var fadeIn = "_fadeIn_q5bgh_1";
var collapsibleSlideDown = "_collapsibleSlideDown_q5bgh_1";
var collapsibleSlideUp = "_collapsibleSlideUp_q5bgh_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_q5bgh_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_q5bgh_1";
var blurSwapIn = "_blurSwapIn_q5bgh_1";
var blurSwapOut = "_blurSwapOut_q5bgh_1";
var pulseGlow = "_pulseGlow_q5bgh_1";
var pulseGlowDelayed = "_pulseGlowDelayed_q5bgh_1";
var fade = "_fade_q5bgh_1";
var fadeInUp = "_fadeInUp_q5bgh_1";
var fadeInDown = "_fadeInDown_q5bgh_1";
var fadeInLeft = "_fadeInLeft_q5bgh_1";
var fadeInRight = "_fadeInRight_q5bgh_1";
var fadeOut = "_fadeOut_q5bgh_1";
var fadeOutDown = "_fadeOutDown_q5bgh_1";
var fadeOutUp = "_fadeOutUp_q5bgh_1";
var fadeOutLeft = "_fadeOutLeft_q5bgh_1";
var fadeOutRight = "_fadeOutRight_q5bgh_1";
var ping = "_ping_q5bgh_1";
var blinkBackground = "_blinkBackground_q5bgh_1";
var typingBlink = "_typingBlink_q5bgh_1";
var SettingsMCPView_vue_vue_type_style_index_0_lang_module_default = {
	layout,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_q5bgh_1",
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
var SettingsMCPView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPView_default as default };
