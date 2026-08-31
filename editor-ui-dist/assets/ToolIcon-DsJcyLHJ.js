import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, R as inject, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-ChH4gKEU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as Input_default } from "./Input-CkIGinhL.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nPopover_default } from "./N8nPopover-KufkLzBT.js";
import { t as N8nNodeIcon_default } from "./N8nNodeIcon-B691V9Zr.js";
//#region src/features/shared/toolsConnection/types.ts
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
//#endregion
//#region src/features/shared/toolsConnection/ToolCredentialPicker.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"data-credential-id",
	"data-auth-type",
	"onClick"
];
var _hoisted_2 = [
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
		const isConnected = computed(() => selectedCredentialIds.value.length > 0);
		const availableCredentials = computed(() => {
			if (!adapter) return [];
			return props.credentials.flatMap((cred) => adapter.getCredentialsByType(cred.authType).map((c) => ({
				id: c.id,
				name: c.name,
				authType: cred.authType
			})));
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
		const createAuthType = computed(() => props.credentials.find((c) => c.required)?.authType ?? props.credentials[0]?.authType);
		function createCredential(source) {
			if (!createAuthType.value) return;
			if (source === "direct") emit("first-credential-connect", props.item);
			else emit("new-credential-connect", props.item);
			adapter?.openNewCredential(createAuthType.value, props.item);
			isOpen.value = false;
		}
		function editCredential(credentialId) {
			adapter?.openExistingCredential(credentialId);
			isOpen.value = false;
		}
		return (_ctx, _cache) => {
			return isConnected.value || availableCredentials.value.length > 0 ? (openBlock(), createBlock(unref(N8nPopover_default), {
				key: 0,
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
				trigger: withCtx(() => [isConnected.value ? (openBlock(), createElementBlock("button", {
					key: 0,
					type: "button",
					class: normalizeClass(_ctx.$style.connectedPill),
					"data-test-id": "tool-credential-picker-trigger-connected"
				}, [
					createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.statusDot),
						"aria-hidden": "true"
					}, null, 2),
					createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.action.connected")), 1),
					createVNode(unref(N8nIcon_default), {
						icon: "chevron-down",
						size: 12
					})
				], 2)) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
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
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowLabel) }, toDisplayString(cred.name), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowActions) }, [createBaseVNode("span", {
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
						})], 10, _hoisted_2)], 2)], 10, _hoisted_1);
					}), 128))], 2),
					createAuthType.value ? (openBlock(), createElementBlock("button", {
						key: 0,
						type: "button",
						class: normalizeClass(_ctx.$style.createRow),
						"data-test-id": "tool-credential-picker-create",
						onClick: _cache[1] || (_cache[1] = ($event) => createCredential("dropdown"))
					}, [createVNode(unref(N8nIcon_default), {
						icon: "plus",
						size: 14
					}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.credentialPicker.create")), 1)], 2)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["open", "teleported"])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: __props.connectVariant,
				size: "small",
				"data-test-id": "tool-credential-picker-trigger-connect",
				onClick: _cache[3] || (_cache[3] = ($event) => createCredential("direct"))
			}, {
				default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("tools.connection.action.connect")), 1)]),
				_: 1
			}, 8, ["variant"]));
		};
	}
});
var ToolCredentialPicker_vue_vue_type_style_index_0_lang_module_default = {
	triggerCaret: "_triggerCaret_1q95z_125",
	connectedPill: "_connectedPill_1q95z_129",
	statusDot: "_statusDot_1q95z_142",
	searchWrapper: "_searchWrapper_1q95z_150",
	searchInput: "_searchInput_1q95z_154",
	list: "_list_1q95z_158",
	row: "_row_1q95z_166",
	rowEdit: "_rowEdit_1q95z_180",
	rowLabel: "_rowLabel_1q95z_186",
	rowActions: "_rowActions_1q95z_192",
	rowCheck: "_rowCheck_1q95z_200",
	emptyRow: "_emptyRow_1q95z_220",
	createRow: "_createRow_1q95z_225"
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
var ToolIcon_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_qborj_125",
	fallback: "_fallback_qborj_137"
};
var ToolIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY as i, ToolCredentialPicker_default as n, CATEGORY_BY_KIND as r, ToolIcon_default as t };
