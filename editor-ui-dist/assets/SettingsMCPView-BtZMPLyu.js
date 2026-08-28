import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, k as createStaticVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CcR38nth.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as Input_default } from "./Input-CkIGinhL.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as DropdownMenu_default } from "./DropdownMenu-DPWQUABM.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { o as DialogClose_default } from "./DialogTitle-CsjedgpC.js";
import { n as RadioGroupItem_default, t as RadioGroup_default } from "./RadioGroup-GTxi6nNE.js";
import { t as ElSwitch } from "./switch-Bo2McIde.js";
import { t as N8nLoading_default } from "./N8nLoading-COb2kWGg.js";
import { t as N8nMarkdown_default } from "./N8nMarkdown-Bo1lF9Qg.js";
import { t as N8nNotice_default } from "./N8nNotice-ByhBXL94.js";
import { c as useRouter } from "./vue-router-Dl3cOHxO.js";
import { t as N8nInfoTip_default } from "./N8nInfoTip-ubG35Adh.js";
import { t as SettingsLayout_default } from "./SettingsLayout-DFIItUy1.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-IxxsCxGu.js";
import { n as SettingsRow_default, t as SettingsRowGroup_default } from "./SettingsRowGroup-_rTMIgRk.js";
import { t as SettingsRowConfigure_default } from "./SettingsRowConfigure-X8AHmw4d.js";
import { t as SettingsSection_default } from "./SettingsSection-BXvzzu85.js";
import { t as N8nTabs_default } from "./N8nTabs-D1Q6GI32.js";
import { t as Dialog_default } from "./Dialog-CyM_ifaq.js";
import { t as DialogFooter_default } from "./DialogFooter-AKzGUZKF.js";
import { t as useSettingsStore } from "./settings.store-ClBf6TZq.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { n as useToast } from "./useToast-pp0Nt2mU.js";
import { n as useUIStore } from "./ui.store-TEDcozpu.js";
import { t as hasPermission } from "./permissions-DznL6pzp.js";
import { n as useDocumentTitle } from "./useDocumentTitle-il6HlPYJ.js";
import { t as useClipboard } from "./useClipboard-1pSyfErQ.js";
import { t as useMcp } from "./useMcp-y4hDB-If.js";
import { t as EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY } from "./constants-D87SFn6O.js";
import { n as MCP_AGENTS_VIEW, o as MCP_DOCS_PAGE_URL, r as MCP_CLIENTS_VIEW, u as MCP_WORKFLOWS_VIEW } from "./mcp.constants-CtGlan57.js";
import { a as vscode_default, c as claude_default, o as openai_default, s as cursor_default } from "./clients.utils-CRRqDZhO.js";
import { t as useMCPStore } from "./mcp.store-C960CEFG.js";
import { t as useExposeAllWorkflowsToMcpStore } from "./exposeAllWorkflowsToMcp.store-CvIfFwHL.js";
import { t as McpEmptyStateCard_default } from "./McpEmptyStateCard-CPEXjaYr.js";
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
var MCPEmptyState_vue_vue_type_style_index_0_lang_module_default = { card: "_card_1esfo_125" };
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
var body$1 = "_body_4utde_125";
var modes = "_modes_4utde_132";
var trusted = "_trusted_4utde_149";
var McpAllowedCallbackUrlsDialog_vue_vue_type_style_index_0_lang_module_default = {
	body: body$1,
	modes,
	"mode-card": "_mode-card_4utde_138",
	"mode-card-active": "_mode-card-active_4utde_145",
	trusted,
	"url-row": "_url-row_4utde_155"
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
var container$2 = "_container_heprf_125";
var label$1 = "_label_heprf_131";
var ConnectionParameter_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	"label-wrapper": "_label-wrapper_heprf_131",
	"info-tip": "_info-tip_heprf_136",
	label: label$1,
	"parameter-value": "_parameter-value_heprf_153",
	"parameter-value--loading": "_parameter-value--loading_heprf_164",
	"input-wrapper": "_input-wrapper_heprf_167",
	"parameter-skeleton": "_parameter-skeleton_heprf_193",
	"copy-button-wrapper": "_copy-button-wrapper_heprf_220",
	"copy-button": "_copy-button_heprf_220"
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
var McpConfigSnippet_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1xf9k_125",
	"copy-wrapper": "_copy-wrapper_1xf9k_141",
	"copy-button": "_copy-button_1xf9k_151"
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
var container = "_container_15q9k_125";
var label = "_label_15q9k_156";
var McpAccessTokenTab_vue_vue_type_style_index_0_lang_module_default = {
	container,
	"loading-container": "_loading-container_15q9k_130",
	"url-skeleton": "_url-skeleton_15q9k_136",
	"code-skeleton": "_code-skeleton_15q9k_141",
	"parameters-container": "_parameters-container_15q9k_146",
	"json-container": "_json-container_15q9k_152",
	label
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
var body = "_body_hxko4_127";
var tabs = "_tabs_hxko4_134";
var category = "_category_hxko4_160";
var McpConnectClientDialog_vue_vue_type_style_index_0_lang_module_default = {
	body,
	tabs,
	"picker-trigger": "_picker-trigger_hxko4_138",
	"picker-menu": "_picker-menu_hxko4_145",
	"client-label": "_client-label_hxko4_149",
	"brand-icon": "_brand-icon_hxko4_153",
	category,
	"copy-field": "_copy-field_hxko4_172",
	"token-setup": "_token-setup_hxko4_176"
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
var McpStatusControl_vue_vue_type_style_index_0_lang_module_default = {
	dot: "_dot_1f6u7_125",
	"mcp-status-pulse": "_mcp-status-pulse_1f6u7_1"
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
										onClick: _cache[2] || (_cache[2] = ($event) => unref(mcpStore).openConnectPopover())
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
									}, 8, ["title", "description"]), agentsModuleActive.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										title: unref(i18n).baseText("settings.mcp.agentsExposed.title"),
										description: unref(i18n).baseText("settings.mcp.agentsExposed.description"),
										clickable: "",
										"data-test-id": "mcp-agents-exposed-row",
										onClick: openAgentsView
									}, {
										action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: agentsExposedValue.value }, null, 8, ["value"])]),
										_: 1
									}, 8, ["title", "description"])) : createCommentVNode("", true)]),
									_: 1
								}),
								canManageMcpInstance.value && unref(exposeAllWorkflowsToMcpStore).isEnabled ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 0 }, {
									default: withCtx(() => [createVNode(unref(SettingsRow_default), {
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
									}, 8, ["title", "description"])]),
									_: 1
								})) : createCommentVNode("", true),
								canManageMcpInstance.value ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
									default: withCtx(() => [createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.mcp.callbackUrls.title"),
										description: unref(i18n).baseText("settings.mcp.callbackUrls.description"),
										clickable: "",
										"data-test-id": "mcp-callback-urls-row",
										onClick: _cache[3] || (_cache[3] = ($event) => showCallbackUrlsDialog.value = true)
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
						"onUpdate:open": _cache[4] || (_cache[4] = ($event) => showDisableDialog.value = $event),
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
						"onUpdate:open": _cache[5] || (_cache[5] = ($event) => showCallbackUrlsDialog.value = $event),
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
var SettingsMCPView_vue_vue_type_style_index_0_lang_module_default = { layout: "_layout_1pc7m_126" };
var SettingsMCPView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPView_default as default };
