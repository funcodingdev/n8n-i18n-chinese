import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, R as inject, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-80JFTwhd.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-DG2qVkaw.js";
import { t as N8nIcon_default } from "./N8nIcon-6YtyWN3Q.js";
import { t as Input_default } from "./Input-CPcwWTAi.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nPopover_default } from "./N8nPopover-Br48TFHh.js";
import { t as N8nNodeIcon_default } from "./N8nNodeIcon-Cv3hMtF9.js";
import { t as N8nSpinner_default } from "./N8nSpinner-CqVCmyTt.js";
//#region src/features/shared/toolsConnection/types.ts
/** Whether a connection exists or is currently being established. */
function hasToolConnection(status) {
	return status !== "none";
}
/** Used when an item carries no explicit `category`. */
var CATEGORY_BY_KIND = {
	node: "app-action",
	workflow: "workflows",
	"mcp-server": "mcp",
	service: "built-in",
	agent: "agents",
	"data-store": "data"
};
var TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY = Symbol("tool-connection-credential-adapter");
var TOOL_CONNECTION_CREDITS_LABEL_KEY = Symbol("tool-connection-credits-label");
//#endregion
//#region src/features/shared/toolsConnection/ToolCredentialPicker.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = [
	"data-credential-id",
	"data-auth-type",
	"onClick"
];
var _hoisted_3 = [
	"title",
	"aria-label",
	"onClick"
];
var ToolCredentialPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolCredentialPicker",
	props: {
		item: {},
		credentials: {},
		connectVariant: { default: "solid" },
		teleported: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"select-credential",
		"credential-dropdown-open",
		"first-credential-connect",
		"new-credential-connect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const adapter = inject(TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY, null);
		const isOpen = ref(false);
		const searchQuery = ref("");
		const searchInputRef = ref(null);
		const selectedCredentialIds = computed(() => props.credentials.map((c) => c.credentialId).filter((id) => Boolean(id)));
		const availableCredentials = computed(() => {
			if (!adapter) return [];
			return props.credentials.flatMap((cred) => adapter.getCredentialsByType(cred.authType).map((c) => ({
				id: c.id,
				name: c.name,
				authType: cred.authType,
				authDisplayName: cred.displayName
			})));
		});
		const statusLabel = computed(() => {
			if (props.item.status === "connected") return i18n.baseText("tools.connection.action.connected");
			if (props.item.status === "disconnected") return i18n.baseText("tools.connection.action.reconnect");
			return "";
		});
		const filteredCredentials = computed(() => {
			const query = searchQuery.value.trim().toLowerCase();
			if (!query) return availableCredentials.value;
			return availableCredentials.value.filter((cred) => cred.name.toLowerCase().includes(query));
		});
		watch(isOpen, (open) => {
			if (open) {
				emit("credential-dropdown-open", props.item);
				searchQuery.value = "";
				nextTick(() => {
					(searchInputRef.value?.$el)?.querySelector("input")?.focus({ preventScroll: true });
				});
			}
		});
		function pickCredential(authType, credentialId) {
			emit("select-credential", props.item, authType, credentialId);
			isOpen.value = false;
		}
		const creatableCredentials = computed(() => props.credentials.filter((credential, index, credentials) => credentials.findIndex(({ authType }) => authType === credential.authType) === index));
		function createCredential(authType, source) {
			if (!authType) return;
			if (source === "direct") emit("first-credential-connect", props.item);
			else emit("new-credential-connect", props.item);
			const credentialTypes = creatableCredentials.value.length > 1 ? creatableCredentials.value.map((credential) => credential.authType) : void 0;
			adapter?.openNewCredential(authType, props.item, credentialTypes);
			isOpen.value = false;
		}
		function editCredential(credentialId) {
			adapter?.openExistingCredential(credentialId);
			isOpen.value = false;
		}
		return (_ctx, _cache) => {
			return __props.item.status === "connecting" ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.statusMarker),
				"data-test-id": "tool-credential-picker-trigger-connecting"
			}, [createVNode(unref(N8nSpinner_default), { size: "small" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("tools.connection.action.connecting")), 1)], 2)) : unref(hasToolConnection)(__props.item.status) || availableCredentials.value.length > 0 || creatableCredentials.value.length > 1 ? (openBlock(), createBlock(unref(N8nPopover_default), {
				key: 1,
				open: isOpen.value,
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => isOpen.value = $event),
				side: "bottom",
				align: "end",
				"side-offset": 6,
				width: "260px",
				teleported: __props.teleported,
				"z-index": 2e3,
				"data-test-id": "tool-credential-picker"
			}, {
				trigger: withCtx(() => [__props.item.status === "disconnected" ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "outline",
					size: "small",
					"data-test-id": "tool-credential-picker-trigger-disconnected"
				}, {
					default: withCtx(() => [
						createVNode(unref(N8nIcon_default), {
							icon: "circle-x",
							size: 14,
							class: normalizeClass(_ctx.$style.statusIconDisconnected),
							"aria-hidden": "true"
						}, null, 8, ["class"]),
						createBaseVNode("span", null, toDisplayString(statusLabel.value), 1),
						createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: 12
						})
					]),
					_: 1
				})) : unref(hasToolConnection)(__props.item.status) ? (openBlock(), createElementBlock("button", {
					key: 1,
					type: "button",
					class: normalizeClass(_ctx.$style.statusPill),
					"data-test-id": `tool-credential-picker-trigger-${__props.item.status}`
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: "check",
						size: 14,
						class: normalizeClass(_ctx.$style.statusIconConnected),
						"aria-hidden": "true"
					}, null, 8, ["class"]),
					createBaseVNode("span", null, toDisplayString(statusLabel.value), 1),
					createVNode(unref(N8nIcon_default), {
						icon: "chevron-down",
						size: 12
					})
				], 10, _hoisted_1)) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
					variant: __props.connectVariant,
					size: "small",
					"data-test-id": "tool-credential-picker-trigger-connect"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.action.connect")), 1), createVNode(unref(N8nIcon_default), {
						icon: "chevron-down",
						size: 14,
						class: normalizeClass(_ctx.$style.triggerCaret)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["variant"]))]),
				content: withCtx(() => [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.searchWrapper) }, [createVNode(unref(Input_default), {
						ref_key: "searchInputRef",
						ref: searchInputRef,
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						size: "small",
						placeholder: unref(i18n).baseText("tools.connection.credentialPicker.search"),
						"data-test-id": "tool-credential-picker-search",
						class: normalizeClass(_ctx.$style.searchInput)
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "search",
							size: 14
						})]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"class"
					])], 2),
					createBaseVNode("ul", {
						class: normalizeClass(_ctx.$style.list),
						"data-test-id": "tool-credential-picker-list"
					}, [filteredCredentials.value.length === 0 ? (openBlock(), createElementBlock("li", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyRow)
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("tools.connection.credentialPicker.noResults")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(filteredCredentials.value, (cred) => {
						return openBlock(), createElementBlock("li", {
							key: `${cred.authType}:${cred.id}`,
							class: normalizeClass(_ctx.$style.row),
							"data-test-id": "tool-credential-picker-row",
							"data-credential-id": cred.id,
							"data-auth-type": cred.authType,
							onClick: ($event) => pickCredential(cred.authType, cred.id)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowLabel) }, [createTextVNode(toDisplayString(cred.name) + " ", 1), creatableCredentials.value.length > 1 && cred.authDisplayName ? (openBlock(), createElementBlock("small", {
							key: 0,
							class: normalizeClass(_ctx.$style.authLabel)
						}, toDisplayString(cred.authDisplayName), 3)) : createCommentVNode("", true)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowActions) }, [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.rowCheck),
							"aria-hidden": "true"
						}, [selectedCredentialIds.value.includes(cred.id) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "check",
							size: 14
						})) : createCommentVNode("", true)], 2), createBaseVNode("button", {
							type: "button",
							class: normalizeClass(_ctx.$style.rowEdit),
							title: unref(i18n).baseText("generic.edit"),
							"aria-label": unref(i18n).baseText("generic.edit"),
							"data-test-id": "tool-credential-picker-edit",
							onClick: withModifiers(($event) => editCredential(cred.id), ["stop"])
						}, [createVNode(unref(N8nIcon_default), {
							icon: "square-pen",
							size: 14
						})], 10, _hoisted_3)], 2)], 10, _hoisted_2);
					}), 128))], 2),
					creatableCredentials.value[0] ? (openBlock(), createElementBlock("button", {
						key: 0,
						type: "button",
						class: normalizeClass(_ctx.$style.createRow),
						"data-test-id": "tool-credential-picker-create",
						onClick: _cache[1] || (_cache[1] = ($event) => createCredential(creatableCredentials.value[0].authType, "dropdown"))
					}, [createVNode(unref(N8nIcon_default), {
						icon: "plus",
						size: 14
					}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.credentialPicker.create")), 1)], 2)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["open", "teleported"])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 2,
				variant: __props.connectVariant,
				size: "small",
				"data-test-id": "tool-credential-picker-trigger-connect",
				onClick: _cache[3] || (_cache[3] = ($event) => createCredential(creatableCredentials.value[0]?.authType ?? "", "direct"))
			}, {
				default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.action.connect")), 1)]),
				_: 1
			}, 8, ["variant"]));
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/ToolCredentialPicker.vue?vue&type=style&index=0&lang.module.scss
var triggerCaret = "_triggerCaret_6expg_388";
var statusMarker = "_statusMarker_6expg_392";
var statusPill = "_statusPill_6expg_393";
var statusIconConnected = "_statusIconConnected_6expg_409";
var statusIconDisconnected = "_statusIconDisconnected_6expg_410";
var searchWrapper = "_searchWrapper_6expg_422";
var searchInput = "_searchInput_6expg_426";
var list = "_list_6expg_430";
var row = "_row_6expg_438";
var rowEdit = "_rowEdit_6expg_452";
var rowLabel = "_rowLabel_6expg_458";
var authLabel = "_authLabel_6expg_466";
var rowActions = "_rowActions_6expg_471";
var rowCheck = "_rowCheck_6expg_479";
var emptyRow = "_emptyRow_6expg_499";
var createRow = "_createRow_6expg_504";
var shimmer$1 = "_shimmer_6expg_1";
var spin$1 = "_spin_6expg_1";
var opacityPulse$1 = "_opacityPulse_6expg_1";
var popoverIn$1 = "_popoverIn_6expg_1";
var fadeIn$1 = "_fadeIn_6expg_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_6expg_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_6expg_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_6expg_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_6expg_1";
var blurSwapIn$1 = "_blurSwapIn_6expg_1";
var blurSwapOut$1 = "_blurSwapOut_6expg_1";
var pulseGlow$1 = "_pulseGlow_6expg_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_6expg_1";
var fade$1 = "_fade_6expg_1";
var fadeInUp$1 = "_fadeInUp_6expg_1";
var fadeInDown$1 = "_fadeInDown_6expg_1";
var fadeInLeft$1 = "_fadeInLeft_6expg_1";
var fadeInRight$1 = "_fadeInRight_6expg_1";
var fadeOut$1 = "_fadeOut_6expg_1";
var fadeOutDown$1 = "_fadeOutDown_6expg_1";
var fadeOutUp$1 = "_fadeOutUp_6expg_1";
var fadeOutLeft$1 = "_fadeOutLeft_6expg_1";
var fadeOutRight$1 = "_fadeOutRight_6expg_1";
var ping$1 = "_ping_6expg_1";
var blinkBackground$1 = "_blinkBackground_6expg_1";
var typingBlink$1 = "_typingBlink_6expg_1";
var ToolCredentialPicker_vue_vue_type_style_index_0_lang_module_default = {
	triggerCaret,
	statusMarker,
	statusPill,
	statusIconConnected,
	statusIconDisconnected,
	searchWrapper,
	searchInput,
	list,
	row,
	rowEdit,
	rowLabel,
	authLabel,
	rowActions,
	rowCheck,
	emptyRow,
	createRow,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_6expg_1",
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
var ToolCredentialPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolCredentialPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolCredentialPicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolIcon.vue?vue&type=script&setup=true&lang.ts
var INNER_SIZE = 20;
var ToolIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolIcon",
	props: {
		source: { default: null },
		fallbackIcon: { default: "toolbox" }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(_ctx.$style.wrapper),
				"aria-hidden": "true"
			}, [__props.source ? (openBlock(), createBlock(unref(N8nNodeIcon_default), {
				key: 0,
				type: __props.source.type,
				src: __props.source.type === "file" ? __props.source.src : void 0,
				name: __props.source.type === "icon" ? __props.source.name : void 0,
				color: __props.source.type === "icon" ? __props.source.color : void 0,
				size: INNER_SIZE
			}, null, 8, [
				"type",
				"src",
				"name",
				"color"
			])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: __props.fallbackIcon,
				size: INNER_SIZE,
				class: normalizeClass(_ctx.$style.fallback)
			}, null, 8, ["icon", "class"]))], 2);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/ToolIcon.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_hij88_388";
var fallback = "_fallback_hij88_400";
var shimmer = "_shimmer_hij88_1";
var spin = "_spin_hij88_1";
var opacityPulse = "_opacityPulse_hij88_1";
var popoverIn = "_popoverIn_hij88_1";
var fadeIn = "_fadeIn_hij88_1";
var collapsibleSlideDown = "_collapsibleSlideDown_hij88_1";
var collapsibleSlideUp = "_collapsibleSlideUp_hij88_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_hij88_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_hij88_1";
var blurSwapIn = "_blurSwapIn_hij88_1";
var blurSwapOut = "_blurSwapOut_hij88_1";
var pulseGlow = "_pulseGlow_hij88_1";
var pulseGlowDelayed = "_pulseGlowDelayed_hij88_1";
var fade = "_fade_hij88_1";
var fadeInUp = "_fadeInUp_hij88_1";
var fadeInDown = "_fadeInDown_hij88_1";
var fadeInLeft = "_fadeInLeft_hij88_1";
var fadeInRight = "_fadeInRight_hij88_1";
var fadeOut = "_fadeOut_hij88_1";
var fadeOutDown = "_fadeOutDown_hij88_1";
var fadeOutUp = "_fadeOutUp_hij88_1";
var fadeOutLeft = "_fadeOutLeft_hij88_1";
var fadeOutRight = "_fadeOutRight_hij88_1";
var ping = "_ping_hij88_1";
var blinkBackground = "_blinkBackground_hij88_1";
var typingBlink = "_typingBlink_hij88_1";
var ToolIcon_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	fallback,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_hij88_1",
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
var ToolIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TOOL_CONNECTION_CREDITS_LABEL_KEY as a, TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY as i, ToolCredentialPicker_default as n, hasToolConnection as o, CATEGORY_BY_KIND as r, ToolIcon_default as t };
