import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, It as ref, N as defineComponent, O as createSlots, R as inject, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nNodeIcon_default } from "./N8nNodeIcon-85L9TdKh.js";
import { t as N8nRecycleScroller_default } from "./N8nRecycleScroller-C60eAEpe.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { t as shield_alt_default } from "./shield-alt-DK8armLv.js";
import { a as hasToolConnection, i as TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY, n as ToolCredentialPicker_default, r as CATEGORY_BY_KIND, t as ToolIcon_default } from "./ToolIcon-7GUB4TfR.js";
//#region src/features/shared/toolsConnection/toolItemIcon.ts
function resolveToolItemIcon(item) {
	return item.iconSource ?? null;
}
//#endregion
//#region src/features/shared/toolsConnection/ToolRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["data-row-kind"];
var _hoisted_2$2 = ["disabled"];
var _hoisted_3 = ["aria-label"];
var ToolRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolRow",
	props: { item: {} },
	emits: [
		"open-detail",
		"connect",
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const credentialAdapter = inject(TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY, null);
		/**
		* The picker needs both credential definitions and an injected adapter.
		* Consumers that manage credentials elsewhere simply get the static marker below.
		*/
		const shouldShowCredentialPicker = computed(() => {
			if (!credentialAdapter || !props.item.credentials?.length) return false;
			if (props.item.status === "connecting") return false;
			if (hasToolConnection(props.item.status)) return true;
			return Boolean(props.item.credentials?.some(({ authType }) => credentialAdapter.getCredentialsByType(authType).length > 0));
		});
		const placeholderIcon = computed(() => {
			switch (props.item.kind) {
				case "service":
				case "mcp-server": return "plug";
				case "workflow": return "workflow";
				case "agent": return "bot";
				case "data-store": return "database";
				default: return "toolbox";
			}
		});
		const resolvedIcon = computed(() => resolveToolItemIcon(props.item));
		const actionLabel = computed(() => props.item.communityPreview ? i18n.baseText("communityNodeDetails.install") : i18n.baseText(props.item.status === "disconnected" ? "tools.connection.action.reconnect" : "tools.connection.action.connect"));
		const installBlocked = computed(() => Boolean(props.item.communityPreview) && Boolean(props.item.installDisabled));
		const isDisabled = computed(() => Boolean(props.item.disabled));
		/**
		* For most rows the button only repeated what clicking the row already does.
		* What survives is the pair that goes somewhere the row body cannot: installing
		* a community package, and connecting an MCP server without a detour through
		* its detail view.
		*/
		const hasDirectAction = computed(() => Boolean(props.item.communityPreview) || props.item.kind === "mcp-server");
		function handleRowClick() {
			if (props.item.disabled) return;
			if (props.item.status === "connecting") return;
			emit("open-detail", props.item);
		}
		function handleConnect() {
			emit("connect", props.item);
			if (props.item.credentials?.length) emit("first-credential-connect", props.item);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([
					_ctx.$style.row,
					_ctx.$style[`row--${__props.item.kind}`],
					{ [_ctx.$style.rowDisabled]: isDisabled.value }
				]),
				"data-test-id": `tools-connection-row`,
				"data-row-kind": __props.item.kind
			}, [createBaseVNode("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.mainAction),
				disabled: isDisabled.value || __props.item.status === "connecting",
				"data-test-id": "tools-connection-row-main",
				onClick: handleRowClick
			}, [__props.item.kind === "workflow" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.workflowIcon),
				"aria-hidden": "true"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "workflow",
				size: 20
			})], 2), createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.workflowTitle),
				tag: "span",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.item.title), 1)]),
				_: 1
			}, 8, ["class"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(ToolIcon_default, {
				source: resolvedIcon.value,
				"fallback-icon": placeholderIcon.value
			}, null, 8, ["source", "fallback-icon"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.text) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.titleRow) }, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.title),
				tag: "span",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.item.title), 1)]),
				_: 1
			}, 8, ["class"]), __props.item.verified ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: unref(i18n).baseText("communityNodeInfo.approved"),
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(shield_alt_default), {
					class: normalizeClass(_ctx.$style.verifiedIcon),
					role: "img",
					"aria-label": unref(i18n).baseText("communityNodeInfo.approved"),
					"data-test-id": "tools-connection-row-verified-badge"
				}, null, 8, ["class", "aria-label"])]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true)], 2), __props.item.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.description),
				tag: "span",
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.item.description), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 64))], 10, _hoisted_2$2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.action) }, [isDisabled.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: __props.item.disabledReason ?? "",
				disabled: !__props.item.disabledReason,
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.disabledMarker),
					role: "img",
					tabindex: "0",
					"aria-label": __props.item.disabledReason,
					"data-test-id": "tools-connection-row-disabled"
				}, [createVNode(unref(N8nIcon_default), {
					icon: "info",
					size: 14,
					color: "text-light"
				})], 10, _hoisted_3)]),
				_: 1
			}, 8, ["content", "disabled"])) : shouldShowCredentialPicker.value ? (openBlock(), createBlock(ToolCredentialPicker_default, {
				key: 1,
				item: __props.item,
				credentials: __props.item.credentials ?? [],
				"connect-variant": "outline",
				onSelectCredential: _cache[0] || (_cache[0] = (toolItem, authType, credentialId) => emit("select-credential", toolItem, authType, credentialId)),
				onCredentialDropdownOpen: _cache[1] || (_cache[1] = ($event) => emit("credential-dropdown-open", $event)),
				onFirstCredentialConnect: _cache[2] || (_cache[2] = ($event) => emit("first-credential-connect", $event)),
				onNewCredentialConnect: _cache[3] || (_cache[3] = ($event) => emit("new-credential-connect", $event))
			}, null, 8, ["item", "credentials"])) : __props.item.status === "connected" ? (openBlock(), createElementBlock("span", {
				key: 2,
				class: normalizeClass(_ctx.$style.statusMarker),
				"data-test-id": "tools-connection-row-connected"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "check",
				size: 14,
				class: normalizeClass(_ctx.$style.statusIconConnected),
				"aria-hidden": "true"
			}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("tools.connection.action.connected")), 1)], 2)) : __props.item.status === "connecting" ? (openBlock(), createElementBlock("span", {
				key: 3,
				class: normalizeClass(_ctx.$style.statusMarker),
				"data-test-id": "tools-connection-row-connecting"
			}, [createVNode(unref(N8nSpinner_default), { size: "small" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("tools.connection.action.connecting")), 1)], 2)) : hasDirectAction.value ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [installBlocked.value && !__props.item.installing ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: unref(i18n).baseText("tools.connection.install.contactAdmin"),
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nButton_default), {
					label: actionLabel.value,
					variant: "outline",
					size: "small",
					disabled: "",
					"data-test-id": "tools-connection-row-install"
				}, null, 8, ["label"])])]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "outline",
				size: "small",
				loading: __props.item.installing,
				"data-test-id": __props.item.communityPreview ? "tools-connection-row-install" : "tools-connection-row-connect",
				onClick: handleConnect
			}, {
				default: withCtx(() => [!__props.item.communityPreview && __props.item.status === "disconnected" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "circle-x",
					size: 14,
					class: normalizeClass(_ctx.$style.statusIconDisconnected),
					"aria-hidden": "true"
				}, null, 8, ["class"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(actionLabel.value), 1)]),
				_: 1
			}, 8, ["loading", "data-test-id"]))], 64)) : __props.item.status === "disconnected" ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 5,
				variant: "outline",
				size: "small",
				"data-test-id": "tools-connection-row-disconnected",
				onClick: handleRowClick
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "circle-x",
					size: 14,
					class: normalizeClass(_ctx.$style.statusIconDisconnected),
					"aria-hidden": "true"
				}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("tools.connection.action.reconnect")), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2)], 10, _hoisted_1$3);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/ToolRow.vue?vue&type=style&index=0&lang.module.scss
var row = "_row_eq8vl_388";
var rowDisabled = "_rowDisabled_eq8vl_402";
var mainAction = "_mainAction_eq8vl_409";
var workflowIcon = "_workflowIcon_eq8vl_435";
var text = "_text_eq8vl_445";
var workflowTitle = "_workflowTitle_eq8vl_453";
var titleRow = "_titleRow_eq8vl_459";
var title$2 = "_title_eq8vl_459";
var verifiedIcon = "_verifiedIcon_eq8vl_470";
var description$2 = "_description_eq8vl_477";
var action = "_action_eq8vl_483";
var statusMarker = "_statusMarker_eq8vl_490";
var statusIconConnected = "_statusIconConnected_eq8vl_500";
var statusIconDisconnected = "_statusIconDisconnected_eq8vl_501";
var disabledMarker = "_disabledMarker_eq8vl_505";
var shimmer$5 = "_shimmer_eq8vl_1";
var spin$5 = "_spin_eq8vl_1";
var opacityPulse$5 = "_opacityPulse_eq8vl_1";
var popoverIn$5 = "_popoverIn_eq8vl_1";
var fadeIn$5 = "_fadeIn_eq8vl_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_eq8vl_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_eq8vl_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_eq8vl_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_eq8vl_1";
var blurSwapIn$5 = "_blurSwapIn_eq8vl_1";
var blurSwapOut$5 = "_blurSwapOut_eq8vl_1";
var pulseGlow$5 = "_pulseGlow_eq8vl_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_eq8vl_1";
var fade$5 = "_fade_eq8vl_1";
var fadeInUp$5 = "_fadeInUp_eq8vl_1";
var fadeInDown$5 = "_fadeInDown_eq8vl_1";
var fadeInLeft$5 = "_fadeInLeft_eq8vl_1";
var fadeInRight$5 = "_fadeInRight_eq8vl_1";
var fadeOut$5 = "_fadeOut_eq8vl_1";
var fadeOutDown$5 = "_fadeOutDown_eq8vl_1";
var fadeOutUp$5 = "_fadeOutUp_eq8vl_1";
var fadeOutLeft$5 = "_fadeOutLeft_eq8vl_1";
var fadeOutRight$5 = "_fadeOutRight_eq8vl_1";
var ping$5 = "_ping_eq8vl_1";
var blinkBackground$5 = "_blinkBackground_eq8vl_1";
var typingBlink$5 = "_typingBlink_eq8vl_1";
var ToolRow_vue_vue_type_style_index_0_lang_module_default = {
	row,
	rowDisabled,
	mainAction,
	"row--workflow": "_row--workflow_eq8vl_431",
	workflowIcon,
	text,
	workflowTitle,
	titleRow,
	title: title$2,
	verifiedIcon,
	description: description$2,
	action,
	statusMarker,
	statusIconConnected,
	statusIconDisconnected,
	disabledMarker,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_eq8vl_1",
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
var ToolRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/DefaultDetailBody.vue?vue&type=script&setup=true&lang.ts
var DefaultDetailBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultDetailBody",
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const hasContent = computed(() => Boolean(props.item.longDescription));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "tools-connection-default-detail-body"
			}, [hasContent.value ? (openBlock(), createElementBlock("p", {
				key: 0,
				class: normalizeClass(_ctx.$style.description)
			}, toDisplayString(__props.item.longDescription), 3)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.placeholder),
				"data-test-id": "tools-connection-detail-placeholder"
			}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.noAdditionalDetails")), 1)]),
				_: 1
			})], 2))], 2);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/DefaultDetailBody.vue?vue&type=style&index=0&lang.module.scss
var container$3 = "_container_1ulll_388";
var description$1 = "_description_1ulll_393";
var placeholder = "_placeholder_1ulll_400";
var shimmer$4 = "_shimmer_1ulll_1";
var spin$4 = "_spin_1ulll_1";
var opacityPulse$4 = "_opacityPulse_1ulll_1";
var popoverIn$4 = "_popoverIn_1ulll_1";
var fadeIn$4 = "_fadeIn_1ulll_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_1ulll_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_1ulll_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_1ulll_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_1ulll_1";
var blurSwapIn$4 = "_blurSwapIn_1ulll_1";
var blurSwapOut$4 = "_blurSwapOut_1ulll_1";
var pulseGlow$4 = "_pulseGlow_1ulll_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_1ulll_1";
var fade$4 = "_fade_1ulll_1";
var fadeInUp$4 = "_fadeInUp_1ulll_1";
var fadeInDown$4 = "_fadeInDown_1ulll_1";
var fadeInLeft$4 = "_fadeInLeft_1ulll_1";
var fadeInRight$4 = "_fadeInRight_1ulll_1";
var fadeOut$4 = "_fadeOut_1ulll_1";
var fadeOutDown$4 = "_fadeOutDown_1ulll_1";
var fadeOutUp$4 = "_fadeOutUp_1ulll_1";
var fadeOutLeft$4 = "_fadeOutLeft_1ulll_1";
var fadeOutRight$4 = "_fadeOutRight_1ulll_1";
var ping$4 = "_ping_1ulll_1";
var blinkBackground$4 = "_blinkBackground_1ulll_1";
var typingBlink$4 = "_typingBlink_1ulll_1";
var DefaultDetailBody_vue_vue_type_style_index_0_lang_module_default = {
	container: container$3,
	description: description$1,
	placeholder,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_1ulll_1",
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
var DefaultDetailBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DefaultDetailBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DefaultDetailBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/McpDetailBody.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["href"];
var _hoisted_2$1 = ["href"];
var McpDetailBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpDetailBody",
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const readTools = computed(() => props.item.availableTools.filter((tool) => tool.category === "read"));
		const writeTools = computed(() => props.item.availableTools.filter((tool) => tool.category === "write"));
		const otherTools = computed(() => props.item.availableTools.filter((tool) => tool.category === void 0));
		const hasMetadata = computed(() => Boolean(props.item.publisher) || Boolean(props.item.version) || Boolean(props.item.docsUrl));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				__props.item.longDescription ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.description)
				}, toDisplayString(__props.item.longDescription), 3)) : createCommentVNode("", true),
				hasMetadata.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.metadata),
					"data-test-id": "tools-connection-detail-metadata"
				}, [
					__props.item.publisher ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.metadataCell)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.metadataLabel),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.publisher")), 1)]),
						_: 1
					}, 8, ["class"]), __props.item.publisher.url ? (openBlock(), createElementBlock("a", {
						key: 0,
						href: __props.item.publisher.url,
						target: "_blank",
						rel: "noopener noreferrer",
						class: normalizeClass(_ctx.$style.metadataLink)
					}, toDisplayString(__props.item.publisher.name), 11, _hoisted_1$2)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.item.publisher.name), 1)]),
						_: 1
					}))], 2)) : createCommentVNode("", true),
					__props.item.version ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.metadataCell)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.metadataLabel),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.version")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.item.version), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					__props.item.docsUrl ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.metadataCell)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.metadataLabel),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.moreInfo")), 1)]),
						_: 1
					}, 8, ["class"]), createBaseVNode("a", {
						href: __props.item.docsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						class: normalizeClass(_ctx.$style.metadataLink)
					}, toDisplayString(unref(i18n).baseText("tools.connection.detail.docs")), 11, _hoisted_2$1)], 2)) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true),
				hasMetadata.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.divider)
				}, null, 2)) : createCommentVNode("", true),
				readTools.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 3,
					class: normalizeClass(_ctx.$style.toolsSection)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsHeader) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.toolsLabel),
					size: "small",
					color: "text-light",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.readTools")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolsCount) }, toDisplayString(readTools.value.length), 3)], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.chipList),
					"data-test-id": "tools-connection-detail-read-tools"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(readTools.value, (tool) => {
					return openBlock(), createElementBlock("span", {
						key: tool.id,
						class: normalizeClass(_ctx.$style.chip),
						"data-test-id": "tools-connection-detail-tool"
					}, toDisplayString(tool.name), 3);
				}), 128))], 2)], 2)) : createCommentVNode("", true),
				writeTools.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 4,
					class: normalizeClass(_ctx.$style.toolsSection)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsHeader) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.toolsLabel),
					size: "small",
					color: "text-light",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.writeTools")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolsCount) }, toDisplayString(writeTools.value.length), 3)], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.chipList),
					"data-test-id": "tools-connection-detail-write-tools"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(writeTools.value, (tool) => {
					return openBlock(), createElementBlock("span", {
						key: tool.id,
						class: normalizeClass(_ctx.$style.chip),
						"data-test-id": "tools-connection-detail-tool"
					}, toDisplayString(tool.name), 3);
				}), 128))], 2)], 2)) : createCommentVNode("", true),
				otherTools.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 5,
					class: normalizeClass(_ctx.$style.toolsSection)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsHeader) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.toolsLabel),
					size: "small",
					color: "text-light",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.detail.otherTools")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolsCount) }, toDisplayString(otherTools.value.length), 3)], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.chipList),
					"data-test-id": "tools-connection-detail-other-tools"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(otherTools.value, (tool) => {
					return openBlock(), createElementBlock("span", {
						key: tool.id,
						class: normalizeClass(_ctx.$style.chip),
						"data-test-id": "tools-connection-detail-tool"
					}, toDisplayString(tool.name), 3);
				}), 128))], 2)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/McpDetailBody.vue?vue&type=style&index=0&lang.module.scss
var container$2 = "_container_1hzez_388";
var description = "_description_1hzez_394";
var metadata = "_metadata_1hzez_401";
var metadataCell = "_metadataCell_1hzez_406";
var metadataLabel = "_metadataLabel_1hzez_413";
var metadataLink = "_metadataLink_1hzez_419";
var divider = "_divider_1hzez_428";
var toolsSection = "_toolsSection_1hzez_433";
var toolsHeader = "_toolsHeader_1hzez_439";
var toolsLabel = "_toolsLabel_1hzez_445";
var toolsCount = "_toolsCount_1hzez_451";
var chipList = "_chipList_1hzez_465";
var chip = "_chip_1hzez_465";
var shimmer$3 = "_shimmer_1hzez_1";
var spin$3 = "_spin_1hzez_1";
var opacityPulse$3 = "_opacityPulse_1hzez_1";
var popoverIn$3 = "_popoverIn_1hzez_1";
var fadeIn$3 = "_fadeIn_1hzez_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_1hzez_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_1hzez_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_1hzez_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_1hzez_1";
var blurSwapIn$3 = "_blurSwapIn_1hzez_1";
var blurSwapOut$3 = "_blurSwapOut_1hzez_1";
var pulseGlow$3 = "_pulseGlow_1hzez_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_1hzez_1";
var fade$3 = "_fade_1hzez_1";
var fadeInUp$3 = "_fadeInUp_1hzez_1";
var fadeInDown$3 = "_fadeInDown_1hzez_1";
var fadeInLeft$3 = "_fadeInLeft_1hzez_1";
var fadeInRight$3 = "_fadeInRight_1hzez_1";
var fadeOut$3 = "_fadeOut_1hzez_1";
var fadeOutDown$3 = "_fadeOutDown_1hzez_1";
var fadeOutUp$3 = "_fadeOutUp_1hzez_1";
var fadeOutLeft$3 = "_fadeOutLeft_1hzez_1";
var fadeOutRight$3 = "_fadeOutRight_1hzez_1";
var ping$3 = "_ping_1hzez_1";
var blinkBackground$3 = "_blinkBackground_1hzez_1";
var typingBlink$3 = "_typingBlink_1hzez_1";
var McpDetailBody_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	description,
	metadata,
	metadataCell,
	metadataLabel,
	metadataLink,
	divider,
	toolsSection,
	toolsHeader,
	toolsLabel,
	toolsCount,
	chipList,
	chip,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_1hzez_1",
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
var McpDetailBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpDetailBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpDetailBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolDetailView.vue?vue&type=script&setup=true&lang.ts
var ToolDetailView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolDetailView",
	props: {
		item: {},
		hideBackButton: { type: Boolean }
	},
	emits: [
		"back",
		"close",
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const placeholderIcon = computed(() => {
			switch (props.item.kind) {
				case "service":
				case "mcp-server": return "plug";
				case "workflow": return "workflow";
				case "agent": return "bot";
				case "data-store": return "database";
				default: return "toolbox";
			}
		});
		const resolvedIcon = computed(() => resolveToolItemIcon(props.item));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "tools-connection-detail"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerLeft) }, [
				!__props.hideBackButton ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "arrow-left",
					variant: "ghost",
					size: "medium",
					"aria-label": unref(i18n).baseText("tools.connection.detail.back"),
					"data-test-id": "tools-connection-detail-back",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("back"))
				}, null, 8, ["aria-label"])) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.iconWrapper),
					"aria-hidden": "true"
				}, [resolvedIcon.value ? (openBlock(), createBlock(unref(N8nNodeIcon_default), {
					key: 0,
					type: resolvedIcon.value.type,
					src: resolvedIcon.value.type === "file" ? resolvedIcon.value.src : void 0,
					name: resolvedIcon.value.type === "icon" ? resolvedIcon.value.name : void 0,
					color: resolvedIcon.value.type === "icon" ? resolvedIcon.value.color : void 0,
					size: 20
				}, null, 8, [
					"type",
					"src",
					"name",
					"color"
				])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: placeholderIcon.value,
					size: 20,
					class: normalizeClass(_ctx.$style.iconFallback)
				}, null, 8, ["icon", "class"]))], 2),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					tag: "h2",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.item.title), 1)]),
					_: 1
				}, 8, ["class"])
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [__props.item.credentials?.length ? (openBlock(), createBlock(ToolCredentialPicker_default, {
				key: 0,
				item: __props.item,
				credentials: __props.item.credentials,
				onSelectCredential: _cache[1] || (_cache[1] = (toolItem, authType, credentialId) => emit("select-credential", toolItem, authType, credentialId)),
				onCredentialDropdownOpen: _cache[2] || (_cache[2] = ($event) => emit("credential-dropdown-open", $event)),
				onFirstCredentialConnect: _cache[3] || (_cache[3] = ($event) => emit("first-credential-connect", $event)),
				onNewCredentialConnect: _cache[4] || (_cache[4] = ($event) => emit("new-credential-connect", $event))
			}, null, 8, ["item", "credentials"])) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
				icon: "x",
				variant: "ghost",
				size: "medium",
				"aria-label": unref(i18n).baseText("tools.connection.action.close"),
				"data-test-id": "tools-connection-detail-close",
				onClick: _cache[5] || (_cache[5] = ($event) => emit("close"))
			}, null, 8, ["aria-label"])], 2)], 2), renderSlot(_ctx.$slots, "body", { item: __props.item }, () => [__props.item.kind === "mcp-server" ? (openBlock(), createBlock(McpDetailBody_default, {
				key: 0,
				item: __props.item
			}, null, 8, ["item"])) : (openBlock(), createBlock(DefaultDetailBody_default, {
				key: 1,
				item: __props.item
			}, null, 8, ["item"]))])], 2);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/ToolDetailView.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_16bor_388";
var header$1 = "_header_16bor_394";
var headerLeft$1 = "_headerLeft_16bor_401";
var headerActions$1 = "_headerActions_16bor_409";
var iconWrapper$1 = "_iconWrapper_16bor_416";
var iconFallback$1 = "_iconFallback_16bor_426";
var title$1 = "_title_16bor_430";
var shimmer$2 = "_shimmer_16bor_1";
var spin$2 = "_spin_16bor_1";
var opacityPulse$2 = "_opacityPulse_16bor_1";
var popoverIn$2 = "_popoverIn_16bor_1";
var fadeIn$2 = "_fadeIn_16bor_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_16bor_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_16bor_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_16bor_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_16bor_1";
var blurSwapIn$2 = "_blurSwapIn_16bor_1";
var blurSwapOut$2 = "_blurSwapOut_16bor_1";
var pulseGlow$2 = "_pulseGlow_16bor_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_16bor_1";
var fade$2 = "_fade_16bor_1";
var fadeInUp$2 = "_fadeInUp_16bor_1";
var fadeInDown$2 = "_fadeInDown_16bor_1";
var fadeInLeft$2 = "_fadeInLeft_16bor_1";
var fadeInRight$2 = "_fadeInRight_16bor_1";
var fadeOut$2 = "_fadeOut_16bor_1";
var fadeOutDown$2 = "_fadeOutDown_16bor_1";
var fadeOutUp$2 = "_fadeOutUp_16bor_1";
var fadeOutLeft$2 = "_fadeOutLeft_16bor_1";
var fadeOutRight$2 = "_fadeOutRight_16bor_1";
var ping$2 = "_ping_16bor_1";
var blinkBackground$2 = "_blinkBackground_16bor_1";
var typingBlink$2 = "_typingBlink_16bor_1";
var ToolDetailView_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	header: header$1,
	headerLeft: headerLeft$1,
	headerActions: headerActions$1,
	iconWrapper: iconWrapper$1,
	iconFallback: iconFallback$1,
	title: title$1,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_16bor_1",
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
var ToolDetailView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolDetailView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolDetailView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolSettingsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-selected"];
var _hoisted_2 = ["aria-selected"];
var ToolSettingsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolSettingsView",
	props: {
		item: {},
		hideBackButton: { type: Boolean }
	},
	emits: [
		"back",
		"close",
		"disconnect",
		"save",
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const resolvedIcon = computed(() => resolveToolItemIcon(props.item));
		const activeTab = ref("settings");
		function onSave(settings) {
			emit("save", props.item, settings);
		}
		function onDisconnect() {
			emit("disconnect", props.item);
		}
		function onClose() {
			emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "tools-connection-settings"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerLeft) }, [
					!__props.hideBackButton ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						icon: "arrow-left",
						variant: "ghost",
						size: "medium",
						class: normalizeClass(_ctx.$style.backButton),
						"aria-label": unref(i18n).baseText("tools.connection.detail.back"),
						"data-test-id": "tools-connection-settings-back",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("back"))
					}, null, 8, ["class", "aria-label"])) : createCommentVNode("", true),
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.iconWrapper),
						"aria-hidden": "true"
					}, [resolvedIcon.value ? (openBlock(), createBlock(unref(N8nNodeIcon_default), {
						key: 0,
						type: resolvedIcon.value.type,
						src: resolvedIcon.value.type === "file" ? resolvedIcon.value.src : void 0,
						name: resolvedIcon.value.type === "icon" ? resolvedIcon.value.name : void 0,
						color: resolvedIcon.value.type === "icon" ? resolvedIcon.value.color : void 0,
						size: 20
					}, null, 8, [
						"type",
						"src",
						"name",
						"color"
					])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "plug",
						size: 20,
						class: normalizeClass(_ctx.$style.iconFallback)
					}, null, 8, ["class"]))], 2),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.title),
						tag: "h2",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.item.title), 1)]),
						_: 1
					}, 8, ["class"])
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [__props.item.credentials?.length ? (openBlock(), createBlock(ToolCredentialPicker_default, {
					key: 0,
					item: __props.item,
					credentials: __props.item.credentials,
					onSelectCredential: _cache[1] || (_cache[1] = (toolItem, authType, credentialId) => emit("select-credential", toolItem, authType, credentialId)),
					onCredentialDropdownOpen: _cache[2] || (_cache[2] = ($event) => emit("credential-dropdown-open", $event)),
					onFirstCredentialConnect: _cache[3] || (_cache[3] = ($event) => emit("first-credential-connect", $event)),
					onNewCredentialConnect: _cache[4] || (_cache[4] = ($event) => emit("new-credential-connect", $event))
				}, null, 8, ["item", "credentials"])) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "medium",
					"aria-label": unref(i18n).baseText("tools.connection.action.close"),
					"data-test-id": "tools-connection-settings-close",
					onClick: onClose
				}, null, 8, ["aria-label"])], 2)], 2),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.tabs),
					role: "tablist"
				}, [createBaseVNode("button", {
					type: "button",
					role: "tab",
					class: normalizeClass([_ctx.$style.tab, { [_ctx.$style.tabActive]: activeTab.value === "settings" }]),
					"aria-selected": activeTab.value === "settings",
					"data-test-id": "tools-connection-settings-tab-settings",
					onClick: _cache[5] || (_cache[5] = ($event) => activeTab.value = "settings")
				}, toDisplayString(unref(i18n).baseText("tools.connection.tabs.settings")), 11, _hoisted_1$1), createBaseVNode("button", {
					type: "button",
					role: "tab",
					class: normalizeClass([_ctx.$style.tab, { [_ctx.$style.tabActive]: activeTab.value === "details" }]),
					"aria-selected": activeTab.value === "details",
					"data-test-id": "tools-connection-settings-tab-details",
					onClick: _cache[6] || (_cache[6] = ($event) => activeTab.value = "details")
				}, toDisplayString(unref(i18n).baseText("tools.connection.tabs.details")), 11, _hoisted_2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.bodyWrapper) }, [activeTab.value === "settings" ? renderSlot(_ctx.$slots, "body", {
					key: 0,
					item: __props.item,
					onSave,
					onDisconnect,
					onClose
				}) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.item.kind === "mcp-server" ? (openBlock(), createBlock(McpDetailBody_default, {
					key: 0,
					item: __props.item
				}, null, 8, ["item"])) : (openBlock(), createBlock(DefaultDetailBody_default, {
					key: 1,
					item: __props.item
				}, null, 8, ["item"]))], 64))], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/ToolSettingsView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1f4pv_388";
var header = "_header_1f4pv_395";
var headerLeft = "_headerLeft_1f4pv_402";
var headerActions = "_headerActions_1f4pv_410";
var iconWrapper = "_iconWrapper_1f4pv_417";
var iconFallback = "_iconFallback_1f4pv_427";
var title = "_title_1f4pv_431";
var tabs$1 = "_tabs_1f4pv_440";
var tab = "_tab_1f4pv_440";
var tabActive = "_tabActive_1f4pv_466";
var bodyWrapper = "_bodyWrapper_1f4pv_471";
var shimmer$1 = "_shimmer_1f4pv_1";
var spin$1 = "_spin_1f4pv_1";
var opacityPulse$1 = "_opacityPulse_1f4pv_1";
var popoverIn$1 = "_popoverIn_1f4pv_1";
var fadeIn$1 = "_fadeIn_1f4pv_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1f4pv_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1f4pv_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1f4pv_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1f4pv_1";
var blurSwapIn$1 = "_blurSwapIn_1f4pv_1";
var blurSwapOut$1 = "_blurSwapOut_1f4pv_1";
var pulseGlow$1 = "_pulseGlow_1f4pv_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1f4pv_1";
var fade$1 = "_fade_1f4pv_1";
var fadeInUp$1 = "_fadeInUp_1f4pv_1";
var fadeInDown$1 = "_fadeInDown_1f4pv_1";
var fadeInLeft$1 = "_fadeInLeft_1f4pv_1";
var fadeInRight$1 = "_fadeInRight_1f4pv_1";
var fadeOut$1 = "_fadeOut_1f4pv_1";
var fadeOutDown$1 = "_fadeOutDown_1f4pv_1";
var fadeOutUp$1 = "_fadeOutUp_1f4pv_1";
var fadeOutLeft$1 = "_fadeOutLeft_1f4pv_1";
var fadeOutRight$1 = "_fadeOutRight_1f4pv_1";
var ping$1 = "_ping_1f4pv_1";
var blinkBackground$1 = "_blinkBackground_1f4pv_1";
var typingBlink$1 = "_typingBlink_1f4pv_1";
var ToolSettingsView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	header,
	headerLeft,
	headerActions,
	iconWrapper,
	iconFallback,
	title,
	tabs: tabs$1,
	tab,
	tabActive,
	bodyWrapper,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1f4pv_1",
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
var ToolSettingsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolSettingsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolsConnectionModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["disabled", "aria-busy"];
var ITEM_HEIGHT = 58;
var MAX_DISPLAYED_COUNT = 99;
/**
* Every tab states its count, zero included: a bare tab would be ambiguous
* between "nothing here" and "not loaded yet", and some categories populate
* asynchronously (project workflows, community previews).
*/
var ToolsConnectionModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsConnectionModal",
	props: {
		open: {
			type: Boolean,
			default: false
		},
		items: {},
		categories: {},
		title: {},
		searchPlaceholder: {},
		detailItem: { default: null },
		detailMode: { default: "detail" },
		hideBackButton: { type: Boolean },
		allowWorkflowCreation: {
			type: Boolean,
			default: false
		},
		workflowCreationLoading: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update:open",
		"update:searchQuery",
		"update:detailItem",
		"disconnect",
		"save",
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect",
		"open-detail",
		"connect",
		"create-workflow"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const modalTitle = computed(() => props.title ?? i18n.baseText("tools.connection.title"));
		const searchPlaceholder = computed(() => props.searchPlaceholder ?? i18n.baseText("tools.connection.search.placeholder"));
		const searchQuery = ref("");
		const debouncedSearchQuery = ref("");
		const setDebouncedSearch = useDebounceFn((value) => {
			debouncedSearchQuery.value = value;
			emit("update:searchQuery", value);
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		watch(searchQuery, (value) => {
			setDebouncedSearch(value);
		});
		const activeCategory = ref(props.categories[0] ?? "connected");
		const searchInputRef = useTemplateRef("searchInputRef");
		const scrollerRef = useTemplateRef("scrollerRef");
		function focusSearchInput() {
			nextTick(() => {
				searchInputRef.value?.focus();
			});
		}
		/**
		* Search text and active tab live as long as this component, which a consumer
		* mounts for exactly one modal session — so stepping aside for a follow-up
		* dialog leaves them intact. The scroll offset does not survive on its own:
		* the dialog content unmounts while hidden, so carry it across by hand.
		*/
		const savedScrollTop = ref(0);
		watch(() => props.open, async (isOpen) => {
			if (!isOpen) {
				savedScrollTop.value = scrollerRef.value?.scrollTop ?? 0;
				return;
			}
			focusSearchInput();
			await nextTick();
			scrollerRef.value?.scrollTo(savedScrollTop.value);
		});
		onMounted(() => {
			if (props.open) focusSearchInput();
		});
		const hasActiveSearch = computed(() => debouncedSearchQuery.value.length > 0);
		function matchesQuery(item) {
			if (!debouncedSearchQuery.value) return true;
			const query = debouncedSearchQuery.value.toLowerCase();
			return item.title.toLowerCase().includes(query) || (item.description ?? "").toLowerCase().includes(query);
		}
		const hasConnectedTab = computed(() => props.categories.includes("connected"));
		function categoryOf(item) {
			return item.category ?? CATEGORY_BY_KIND[item.kind];
		}
		function itemsForCategory(category) {
			if (category === "all") return props.items;
			if (category === "connected") return props.items.filter((item) => hasToolConnection(item.status));
			return props.items.filter((item) => categoryOf(item) === category && (hasConnectedTab.value ? !hasToolConnection(item.status) : true));
		}
		const countByCategory = computed(() => {
			const counts = {};
			for (const category of props.categories) counts[category] = itemsForCategory(category).filter(matchesQuery).length;
			return counts;
		});
		/** Past this the exact number stops being useful and starts crowding the tab. */
		function tabCount(category) {
			const count = countByCategory.value[category] ?? 0;
			return count > MAX_DISPLAYED_COUNT ? `${MAX_DISPLAYED_COUNT}+` : String(count);
		}
		const flattenedRows = computed(() => itemsForCategory(activeCategory.value).filter(matchesQuery).map((item) => ({
			key: `item:${item.id}`,
			item
		})));
		/** Categories only worth a tab once they hold something. */
		const HIDE_WHEN_EMPTY = ["community"];
		/**
		* Deliberately independent of the search query, so the tab strip stays put
		* while typing and the counts alone show where the matches are.
		*/
		const visibleCategories = computed(() => props.categories.filter((category) => !HIDE_WHEN_EMPTY.includes(category) || itemsForCategory(category).length > 0));
		const tabsVisible = computed(() => props.categories.length > 1 && visibleCategories.value.length > 0);
		async function selectCategory(category) {
			activeCategory.value = category;
			await nextTick();
			const firstKey = flattenedRows.value[0]?.key;
			if (firstKey) scrollerRef.value?.scrollToKey(firstKey);
		}
		const CATEGORY_I18N = {
			all: "tools.connection.categories.all",
			connected: "tools.connection.categories.connected",
			"built-in": "tools.connection.categories.builtIn",
			mcp: "tools.connection.categories.mcp",
			ai: "tools.connection.categories.ai",
			n8n: "tools.connection.categories.n8n",
			"app-action": "tools.connection.categories.appAction",
			community: "tools.connection.categories.community",
			workflows: "tools.connection.categories.workflows",
			agents: "tools.connection.categories.agents",
			data: "tools.connection.categories.data"
		};
		function categoryLabel(category) {
			return i18n.baseText(CATEGORY_I18N[category]);
		}
		/**
		* The count rides in the label rather than `tag`, which would render a chip per
		* tab — far louder than a muted number next to the name.
		*/
		const tabOptions = computed(() => visibleCategories.value.map((category) => ({
			value: category,
			label: `${categoryLabel(category)} (${tabCount(category)})`
		})));
		watch(visibleCategories, (categories) => {
			if (categories.length > 0 && !categories.includes(activeCategory.value)) activeCategory.value = categories[0];
		});
		const isListEmpty = computed(() => flattenedRows.value.length === 0);
		const emptyMessage = computed(() => {
			if (hasActiveSearch.value) return i18n.baseText("tools.connection.empty.noResults", { interpolate: { query: debouncedSearchQuery.value } });
			return i18n.baseText("tools.connection.empty.title");
		});
		function openDetail(item) {
			emit("open-detail", item);
			emit("update:detailItem", item);
		}
		function closeDetail() {
			emit("update:detailItem", null);
		}
		function handleOpenChange(value) {
			emit("update:open", value);
			if (!value) closeDetail();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "xlarge",
				header: __props.detailItem ? "" : modalTitle.value,
				"show-close-button": !__props.detailItem,
				"aria-label": modalTitle.value,
				"data-test-id": "tools-connection-modal",
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [__props.detailItem && __props.detailMode === "settings" ? (openBlock(), createBlock(ToolSettingsView_default, {
					key: __props.detailItem.id,
					item: __props.detailItem,
					"hide-back-button": __props.hideBackButton,
					onBack: closeDetail,
					onClose: _cache[0] || (_cache[0] = ($event) => handleOpenChange(false)),
					onDisconnect: _cache[1] || (_cache[1] = ($event) => emit("disconnect", $event)),
					onSave: _cache[2] || (_cache[2] = (item, settings) => emit("save", item, settings)),
					onSelectCredential: _cache[3] || (_cache[3] = (item, authType, credentialId) => emit("select-credential", item, authType, credentialId)),
					onCredentialDropdownOpen: _cache[4] || (_cache[4] = ($event) => emit("credential-dropdown-open", $event)),
					onFirstCredentialConnect: _cache[5] || (_cache[5] = ($event) => emit("first-credential-connect", $event)),
					onNewCredentialConnect: _cache[6] || (_cache[6] = ($event) => emit("new-credential-connect", $event))
				}, createSlots({ _: 2 }, [_ctx.$slots["settings-body"] ? {
					name: "body",
					fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "settings-body", normalizeProps(guardReactiveProps(slotProps)))]),
					key: "0"
				} : void 0]), 1032, ["item", "hide-back-button"])) : __props.detailItem ? (openBlock(), createBlock(ToolDetailView_default, {
					key: 1,
					item: __props.detailItem,
					"hide-back-button": __props.hideBackButton,
					onBack: closeDetail,
					onClose: _cache[7] || (_cache[7] = ($event) => handleOpenChange(false)),
					onSelectCredential: _cache[8] || (_cache[8] = (item, authType, credentialId) => emit("select-credential", item, authType, credentialId)),
					onCredentialDropdownOpen: _cache[9] || (_cache[9] = ($event) => emit("credential-dropdown-open", $event)),
					onFirstCredentialConnect: _cache[10] || (_cache[10] = ($event) => emit("first-credential-connect", $event)),
					onNewCredentialConnect: _cache[11] || (_cache[11] = ($event) => emit("new-credential-connect", $event))
				}, createSlots({ _: 2 }, [_ctx.$slots["detail-body"] ? {
					name: "body",
					fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "detail-body", normalizeProps(guardReactiveProps(slotProps)))]),
					key: "0"
				} : void 0]), 1032, ["item", "hide-back-button"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					createVNode(unref(Input_default), {
						ref_key: "searchInputRef",
						ref: searchInputRef,
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => searchQuery.value = $event),
						placeholder: searchPlaceholder.value,
						clearable: "",
						"data-test-id": "tools-connection-search",
						class: normalizeClass(_ctx.$style.searchInput)
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"class"
					]),
					tabsVisible.value ? (openBlock(), createBlock(unref(N8nTabs_default), {
						key: 0,
						"model-value": activeCategory.value,
						options: tabOptions.value,
						size: "small",
						variant: "modern",
						justified: "",
						class: normalizeClass(_ctx.$style.tabs),
						"data-test-id": "tools-connection-tabs",
						"onUpdate:modelValue": selectCategory
					}, null, 8, [
						"model-value",
						"options",
						"class"
					])) : createCommentVNode("", true),
					activeCategory.value === "workflows" && __props.allowWorkflowCreation ? (openBlock(), createElementBlock("button", {
						key: 1,
						type: "button",
						class: normalizeClass(_ctx.$style.createWorkflowRow),
						disabled: __props.workflowCreationLoading,
						"aria-busy": __props.workflowCreationLoading,
						"data-test-id": "tools-connection-create-workflow",
						onClick: _cache[13] || (_cache[13] = ($event) => emit("create-workflow"))
					}, [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.createWorkflowIcon),
						"aria-hidden": "true"
					}, [createVNode(unref(N8nIcon_default), {
						icon: __props.workflowCreationLoading ? "loader-circle" : "plus",
						size: 20,
						spin: __props.workflowCreationLoading
					}, null, 8, ["icon", "spin"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.createWorkflowText) }, [createVNode(unref(N8nText_default), {
						tag: "span",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.create.workflow")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						tag: "span",
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.workflow:create.tooltip")), 1)]),
						_: 1
					})], 2)], 10, _hoisted_1)) : createCommentVNode("", true),
					isListEmpty.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.empty),
						"data-test-id": "tools-connection-empty"
					}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(emptyMessage.value), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.listWrapper)
					}, [createVNode(unref(N8nRecycleScroller_default), {
						ref_key: "scrollerRef",
						ref: scrollerRef,
						items: flattenedRows.value,
						"item-size": ITEM_HEIGHT,
						"item-key": "key",
						class: normalizeClass(_ctx.$style.scroller)
					}, {
						default: withCtx(({ item: row }) => [createVNode(ToolRow_default, {
							item: row.item,
							onOpenDetail: _cache[14] || (_cache[14] = ($event) => openDetail($event)),
							onConnect: _cache[15] || (_cache[15] = ($event) => emit("connect", $event)),
							onSelectCredential: _cache[16] || (_cache[16] = (item, authType, credentialId) => emit("select-credential", item, authType, credentialId)),
							onCredentialDropdownOpen: _cache[17] || (_cache[17] = ($event) => emit("credential-dropdown-open", $event)),
							onFirstCredentialConnect: _cache[18] || (_cache[18] = ($event) => emit("first-credential-connect", $event)),
							onNewCredentialConnect: _cache[19] || (_cache[19] = ($event) => emit("new-credential-connect", $event))
						}, null, 8, ["item"])]),
						_: 1
					}, 8, ["items", "class"])], 2))
				], 64))], 2)]),
				_: 3
			}, 8, [
				"open",
				"header",
				"show-close-button",
				"aria-label"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/ToolsConnectionModal.vue?vue&type=style&index=0&lang.module.scss
var body = "_body_ksfy7_388";
var searchInput = "_searchInput_ksfy7_396";
var tabs = "_tabs_ksfy7_402";
var createWorkflowRow = "_createWorkflowRow_ksfy7_407";
var createWorkflowIcon = "_createWorkflowIcon_ksfy7_433";
var createWorkflowText = "_createWorkflowText_ksfy7_443";
var listWrapper = "_listWrapper_ksfy7_450";
var scroller = "_scroller_ksfy7_457";
var empty = "_empty_ksfy7_462";
var shimmer = "_shimmer_ksfy7_1";
var spin = "_spin_ksfy7_1";
var opacityPulse = "_opacityPulse_ksfy7_1";
var popoverIn = "_popoverIn_ksfy7_1";
var fadeIn = "_fadeIn_ksfy7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_ksfy7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_ksfy7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_ksfy7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_ksfy7_1";
var blurSwapIn = "_blurSwapIn_ksfy7_1";
var blurSwapOut = "_blurSwapOut_ksfy7_1";
var pulseGlow = "_pulseGlow_ksfy7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_ksfy7_1";
var fade = "_fade_ksfy7_1";
var fadeInUp = "_fadeInUp_ksfy7_1";
var fadeInDown = "_fadeInDown_ksfy7_1";
var fadeInLeft = "_fadeInLeft_ksfy7_1";
var fadeInRight = "_fadeInRight_ksfy7_1";
var fadeOut = "_fadeOut_ksfy7_1";
var fadeOutDown = "_fadeOutDown_ksfy7_1";
var fadeOutUp = "_fadeOutUp_ksfy7_1";
var fadeOutLeft = "_fadeOutLeft_ksfy7_1";
var fadeOutRight = "_fadeOutRight_ksfy7_1";
var ping = "_ping_ksfy7_1";
var blinkBackground = "_blinkBackground_ksfy7_1";
var typingBlink = "_typingBlink_ksfy7_1";
var ToolsConnectionModal_vue_vue_type_style_index_0_lang_module_default = {
	body,
	searchInput,
	tabs,
	createWorkflowRow,
	createWorkflowIcon,
	createWorkflowText,
	listWrapper,
	scroller,
	empty,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_ksfy7_1",
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
var ToolsConnectionModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolsConnectionModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsConnectionModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { McpDetailBody_default as n, DefaultDetailBody_default as r, ToolsConnectionModal_default as t };
