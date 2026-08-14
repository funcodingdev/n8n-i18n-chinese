import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, It as ref, N as defineComponent, O as createSlots, R as inject, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-aHDyP5Mf.js";
import { J as N8nRecycleScroller_default, Z as N8nPopover_default, co as N8nIconButton_default, ct as N8nNodeIcon_default, h as Dialog_default, lo as N8nButton_default, ra as N8nTooltip_default, ro as N8nText_default, so as Input_default, uo as N8nIcon_default, z as N8nTabs_default } from "./src-BPgPnOl4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { V as useDebounceFn } from "./dist-BkE9aYmt.js";
import { t as DEBOUNCE_TIME } from "./durations-CAil8xsz.js";
import { t as getDebounceTime } from "./useDebounce-Cc58bOKS.js";
import { t as shield_alt_default } from "./shield-alt-ChshBLJi.js";
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
var DefaultDetailBody_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_7g09m_125",
	description: "_description_7g09m_130",
	placeholder: "_placeholder_7g09m_137"
};
var DefaultDetailBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DefaultDetailBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DefaultDetailBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/McpDetailBody.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["href"];
var _hoisted_2$2 = ["href"];
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
					}, toDisplayString(__props.item.publisher.name), 11, _hoisted_1$3)) : (openBlock(), createBlock(unref(N8nText_default), {
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
					}, toDisplayString(unref(i18n).baseText("tools.connection.detail.docs")), 11, _hoisted_2$2)], 2)) : createCommentVNode("", true)
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
var McpDetailBody_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_80jyr_125",
	description: "_description_80jyr_131",
	metadata: "_metadata_80jyr_138",
	metadataCell: "_metadataCell_80jyr_143",
	metadataLabel: "_metadataLabel_80jyr_150",
	metadataLink: "_metadataLink_80jyr_156",
	divider: "_divider_80jyr_165",
	toolsSection: "_toolsSection_80jyr_170",
	toolsHeader: "_toolsHeader_80jyr_176",
	toolsLabel: "_toolsLabel_80jyr_182",
	toolsCount: "_toolsCount_80jyr_188",
	chipList: "_chipList_80jyr_202",
	chip: "_chip_80jyr_202"
};
var McpDetailBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpDetailBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpDetailBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
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
var _hoisted_1$2 = [
	"data-credential-id",
	"data-auth-type",
	"onClick"
];
var _hoisted_2$1 = [
	"title",
	"aria-label",
	"onClick"
];
var ToolCredentialPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolCredentialPicker",
	props: {
		item: {},
		credentials: {},
		connectVariant: { default: "solid" }
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
			adapter?.openNewCredential(createAuthType.value);
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
				teleported: false,
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
						})], 10, _hoisted_2$1)], 2)], 10, _hoisted_1$2);
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
			}, 8, ["open"])) : (openBlock(), createBlock(unref(N8nButton_default), {
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
//#region src/features/shared/toolsConnection/toolItemIcon.ts
function resolveToolItemIcon(item) {
	return item.iconSource ?? null;
}
//#endregion
//#region src/features/shared/toolsConnection/ToolRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["data-row-kind"];
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
		* The picker only does anything with an injected adapter: without one it lists
		* nothing and its create/edit actions go nowhere. Consumers that manage
		* credentials elsewhere (the agents panel does it in its tool config modal)
		* simply provide no adapter and get the static marker below instead.
		*/
		const shouldShowCredentialPicker = computed(() => {
			if (!credentialAdapter) return false;
			if (props.item.isConnected) return true;
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
		const actionLabel = computed(() => props.item.communityPreview ? i18n.baseText("communityNodeDetails.install") : i18n.baseText("tools.connection.action.connect"));
		const installBlocked = computed(() => Boolean(props.item.communityPreview) && Boolean(props.item.installDisabled));
		/**
		* For most rows the button only repeated what clicking the row already does.
		* What survives is the pair that goes somewhere the row body cannot: installing
		* a community package, and connecting an MCP server without a detour through
		* its detail view.
		*/
		const hasDirectAction = computed(() => Boolean(props.item.communityPreview) || props.item.kind === "mcp-server");
		function handleRowClick() {
			emit("open-detail", props.item);
		}
		function handleConnect() {
			emit("connect", props.item);
			if (props.item.credentials?.length) emit("first-credential-connect", props.item);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.row, _ctx.$style[`row--${__props.item.kind}`]]),
				"data-test-id": `tools-connection-row`,
				"data-row-kind": __props.item.kind
			}, [createBaseVNode("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.mainAction),
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
			}, 8, ["class"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("span", {
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
			}, null, 8, ["icon", "class"]))], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.text) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.titleRow) }, [createVNode(unref(N8nText_default), {
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
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 64))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.action) }, [shouldShowCredentialPicker.value ? (openBlock(), createBlock(ToolCredentialPicker_default, {
				key: 0,
				item: __props.item,
				credentials: __props.item.credentials ?? [],
				"connect-variant": "outline",
				onSelectCredential: _cache[0] || (_cache[0] = (toolItem, authType, credentialId) => emit("select-credential", toolItem, authType, credentialId)),
				onCredentialDropdownOpen: _cache[1] || (_cache[1] = ($event) => emit("credential-dropdown-open", $event)),
				onFirstCredentialConnect: _cache[2] || (_cache[2] = ($event) => emit("first-credential-connect", $event)),
				onNewCredentialConnect: _cache[3] || (_cache[3] = ($event) => emit("new-credential-connect", $event))
			}, null, 8, ["item", "credentials"])) : __props.item.isConnected ? (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.connectedMarker),
				"data-test-id": "tools-connection-row-connected"
			}, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.statusDot),
				"aria-hidden": "true"
			}, null, 2), createTextVNode(" " + toDisplayString(unref(i18n).baseText("tools.connection.action.connected")), 1)], 2)) : hasDirectAction.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [installBlocked.value && !__props.item.installing ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
				label: actionLabel.value,
				variant: "outline",
				size: "small",
				loading: __props.item.installing,
				"data-test-id": __props.item.communityPreview ? "tools-connection-row-install" : "tools-connection-row-connect",
				onClick: handleConnect
			}, null, 8, [
				"label",
				"loading",
				"data-test-id"
			]))], 64)) : createCommentVNode("", true)], 2)], 10, _hoisted_1$1);
		};
	}
});
//#endregion
//#region src/features/shared/toolsConnection/ToolRow.vue?vue&type=style&index=0&lang.module.scss
var row = "_row_3jhd2_125";
var mainAction = "_mainAction_3jhd2_139";
var iconWrapper$2 = "_iconWrapper_3jhd2_162";
var iconFallback$2 = "_iconFallback_3jhd2_174";
var workflowIcon = "_workflowIcon_3jhd2_178";
var text = "_text_3jhd2_188";
var workflowTitle = "_workflowTitle_3jhd2_196";
var titleRow = "_titleRow_3jhd2_202";
var title$2 = "_title_3jhd2_202";
var verifiedIcon = "_verifiedIcon_3jhd2_213";
var description = "_description_3jhd2_220";
var action = "_action_3jhd2_226";
var connectedMarker = "_connectedMarker_3jhd2_233";
var statusDot = "_statusDot_3jhd2_243";
var ToolRow_vue_vue_type_style_index_0_lang_module_default = {
	row,
	mainAction,
	"row--workflow": "_row--workflow_3jhd2_158",
	iconWrapper: iconWrapper$2,
	iconFallback: iconFallback$2,
	workflowIcon,
	text,
	workflowTitle,
	titleRow,
	title: title$2,
	verifiedIcon,
	description,
	action,
	connectedMarker,
	statusDot
};
var ToolRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolRow_vue_vue_type_style_index_0_lang_module_default }]]);
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
var ToolDetailView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_wbssr_125",
	header: "_header_wbssr_131",
	headerLeft: "_headerLeft_wbssr_138",
	headerActions: "_headerActions_wbssr_146",
	iconWrapper: "_iconWrapper_wbssr_153",
	iconFallback: "_iconFallback_wbssr_163",
	title: "_title_wbssr_167"
};
var ToolDetailView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolDetailView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolDetailView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolSettingsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-selected"];
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
				}, toDisplayString(unref(i18n).baseText("tools.connection.tabs.settings")), 11, _hoisted_1), createBaseVNode("button", {
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
var ToolSettingsView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1dyej_125",
	header: "_header_1dyej_132",
	headerLeft: "_headerLeft_1dyej_139",
	headerActions: "_headerActions_1dyej_147",
	iconWrapper: "_iconWrapper_1dyej_154",
	iconFallback: "_iconFallback_1dyej_164",
	title: "_title_1dyej_168",
	tabs: "_tabs_1dyej_177",
	tab: "_tab_1dyej_177",
	tabActive: "_tabActive_1dyej_203",
	bodyWrapper: "_bodyWrapper_1dyej_208"
};
var ToolSettingsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolSettingsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/toolsConnection/ToolsConnectionModal.vue?vue&type=script&setup=true&lang.ts
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
		detailItem: { default: null },
		detailMode: { default: "detail" },
		hideBackButton: { type: Boolean }
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
		"connect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
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
			if (category === "connected") return props.items.filter((item) => item.isConnected);
			return props.items.filter((item) => categoryOf(item) === category && (hasConnectedTab.value ? !item.isConnected : true));
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
				header: __props.detailItem ? "" : unref(i18n).baseText("tools.connection.title"),
				"show-close-button": !__props.detailItem,
				"aria-label": unref(i18n).baseText("tools.connection.title"),
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
						placeholder: unref(i18n).baseText("tools.connection.search.placeholder"),
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
					isListEmpty.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.empty),
						"data-test-id": "tools-connection-empty"
					}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(emptyMessage.value), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 2,
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
							onOpenDetail: _cache[13] || (_cache[13] = ($event) => openDetail($event)),
							onConnect: _cache[14] || (_cache[14] = ($event) => emit("connect", $event)),
							onSelectCredential: _cache[15] || (_cache[15] = (item, authType, credentialId) => emit("select-credential", item, authType, credentialId)),
							onCredentialDropdownOpen: _cache[16] || (_cache[16] = ($event) => emit("credential-dropdown-open", $event)),
							onFirstCredentialConnect: _cache[17] || (_cache[17] = ($event) => emit("first-credential-connect", $event)),
							onNewCredentialConnect: _cache[18] || (_cache[18] = ($event) => emit("new-credential-connect", $event))
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
var ToolsConnectionModal_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_49dhi_125",
	searchInput: "_searchInput_49dhi_133",
	tabs: "_tabs_49dhi_139",
	listWrapper: "_listWrapper_49dhi_144",
	scroller: "_scroller_49dhi_151",
	empty: "_empty_49dhi_156"
};
var ToolsConnectionModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolsConnectionModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsConnectionModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DefaultDetailBody_default as i, TOOL_CONNECTION_CREDENTIAL_ADAPTER_KEY as n, McpDetailBody_default as r, ToolsConnectionModal_default as t };
