import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-B3sL8ZR7.js";
import { At as Checkbox_default, Gi as N8nBadge_default, L as AnimatedCollapsibleContent_default, La as CollapsibleTrigger_default, Ra as CollapsibleRoot_default, do as N8nIconButton_default, kt as N8nInputLabel_default, o as RadioGroup_default, oa as N8nTooltip_default, po as N8nIcon_default, s as RadioGroupItem_default, uo as Input_default } from "./src-VmSi6XTE.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as capitalCase } from "./dist-DHSLgU2f.js";
import { a as inferSelectionMode, i as groupScopes, n as classifyScope, r as getReadOnlyScopes, t as DEFAULT_READ_SCOPE_ACTIONS } from "./scopes.utils-DCMTVoZq.js";
//#region src/app/components/scopes/ScopesSelector.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = ["onClick"];
var _hoisted_3 = { "data-test-id": "scopes-count" };
var _hoisted_4 = ["data-test-id"];
var _hoisted_5 = ["data-test-id"];
var ScopesSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScopesSelector",
	props: {
		modelValue: {},
		availableScopes: {},
		groups: {},
		i18nKeyPrefix: {},
		rootTestId: { default: "scopes-selector" },
		readActions: { default: () => DEFAULT_READ_SCOPE_ACTIONS },
		disabled: {
			type: Boolean,
			default: false
		},
		scopeTools: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const searchTerm = ref("");
		const expandedGroups = ref(/* @__PURE__ */ new Set());
		const userPickedCustom = ref(false);
		const mode = ref(inferSelectionMode(props.modelValue, props.availableScopes, props.readActions));
		const treeExpanded = ref(mode.value === "custom");
		watch(() => [props.modelValue, props.availableScopes], () => {
			const inferred = inferSelectionMode(props.modelValue, props.availableScopes, props.readActions);
			if (userPickedCustom.value && inferred !== "custom") return;
			mode.value = inferred;
		});
		watch(mode, (newMode) => {
			treeExpanded.value = newMode === "custom";
		});
		const isSearching = computed(() => searchTerm.value.trim() !== "");
		const selectedSet = computed(() => new Set(props.modelValue));
		const groupedScopes = computed(() => groupScopes(props.availableScopes, props.groups));
		const filteredGroups = computed(() => {
			const term = searchTerm.value.trim().toLowerCase();
			if (!term) return groupedScopes.value.map((group) => ({
				group,
				visibleScopes: group.scopes
			}));
			return groupedScopes.value.map((group) => ({
				group,
				visibleScopes: group.scopes.filter((scope) => scope.toLowerCase().includes(term))
			})).filter((entry) => entry.visibleScopes.length > 0);
		});
		function baseText(suffix, interpolate, adjustToNumber) {
			return i18n.baseText(`${props.i18nKeyPrefix}.${suffix}`, {
				interpolate,
				adjustToNumber
			});
		}
		function getGroupLabel(group) {
			if (group.isFallback) return capitalCase(group.key);
			return baseText(`group.${group.key}`);
		}
		function getBadgeLabel(scope) {
			return classifyScope(scope, props.readActions) === "read" ? baseText("badge.read") : baseText("badge.write");
		}
		function emitScopes(scopes) {
			emit("update:modelValue", scopes);
		}
		const modeOptions = computed(() => [
			{
				value: "all",
				label: baseText("all"),
				description: baseText("allDescription"),
				"data-test-id": "scopes-mode-all"
			},
			{
				value: "readOnly",
				label: baseText("readOnly"),
				description: baseText("readOnlyDescription"),
				"data-test-id": "scopes-mode-read-only"
			},
			{
				value: "custom",
				label: baseText("custom"),
				description: baseText("customDescription"),
				"data-test-id": "scopes-mode-custom"
			}
		]);
		function onModeCardClick(value) {
			if (props.disabled || value === mode.value) return;
			mode.value = value;
			onModeChange(value);
		}
		function onModeChange(newMode) {
			if (newMode === void 0) return;
			userPickedCustom.value = newMode === "custom";
			if (newMode === "all") emitScopes([...props.availableScopes]);
			else if (newMode === "readOnly") emitScopes(getReadOnlyScopes(props.availableScopes, props.readActions));
			else if (newMode === "custom") emitScopes([]);
		}
		function isGroupExpanded(group) {
			return isSearching.value || expandedGroups.value.has(group.key);
		}
		function toggleGroupExpanded(group) {
			const expanded = new Set(expandedGroups.value);
			if (expanded.has(group.key)) expanded.delete(group.key);
			else expanded.add(group.key);
			expandedGroups.value = expanded;
		}
		const groupToolData = computed(() => {
			const data = /* @__PURE__ */ new Map();
			if (!props.scopeTools) return data;
			for (const group of groupedScopes.value) {
				const tools = /* @__PURE__ */ new Set();
				const enabled = /* @__PURE__ */ new Set();
				for (const scope of group.scopes) for (const tool of props.scopeTools[scope] ?? []) {
					tools.add(tool);
					if (selectedSet.value.has(scope)) enabled.add(tool);
				}
				data.set(group.key, {
					tools: [...tools],
					enabled
				});
			}
			return data;
		});
		function groupTools(group) {
			return groupToolData.value.get(group.key)?.tools ?? [];
		}
		function groupEnabledTools(group) {
			return groupToolData.value.get(group.key)?.enabled ?? /* @__PURE__ */ new Set();
		}
		function isGroupChecked(group) {
			return group.scopes.every((scope) => selectedSet.value.has(scope));
		}
		function isGroupIndeterminate(group) {
			return !isGroupChecked(group) && group.scopes.some((scope) => selectedSet.value.has(scope));
		}
		function toggleGroup(group, checked) {
			const selected = new Set(selectedSet.value);
			for (const scope of group.scopes) if (checked) selected.add(scope);
			else selected.delete(scope);
			emitScopes(props.availableScopes.filter((scope) => selected.has(scope)));
		}
		function toggleScope(scope, checked) {
			const selected = new Set(selectedSet.value);
			if (checked) selected.add(scope);
			else selected.delete(scope);
			emitScopes(props.availableScopes.filter((s) => selected.has(s)));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.selector),
				"data-test-id": __props.rootTestId
			}, [createVNode(unref(N8nInputLabel_default), {
				label: baseText("label"),
				size: "small",
				color: "text-dark"
			}, {
				default: withCtx(() => [createVNode(unref(RadioGroup_default), {
					modelValue: mode.value,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => mode.value = $event), onModeChange],
					orientation: "vertical",
					disabled: __props.disabled,
					"aria-label": baseText("label"),
					"data-test-id": "scopes-mode-radio",
					class: normalizeClass(_ctx.$style.modes)
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(modeOptions.value, (option) => {
						return openBlock(), createElementBlock("div", {
							key: option.value,
							class: normalizeClass([_ctx.$style.modeCard, mode.value === option.value && _ctx.$style.modeCardActive]),
							onClick: ($event) => onModeCardClick(option.value)
						}, [createVNode(unref(RadioGroupItem_default), {
							value: option.value,
							label: option.label,
							description: option.description,
							disabled: __props.disabled,
							"data-test-id": option["data-test-id"]
						}, null, 8, [
							"value",
							"label",
							"description",
							"disabled",
							"data-test-id"
						])], 10, _hoisted_2);
					}), 128))]),
					_: 1
				}, 8, [
					"modelValue",
					"disabled",
					"aria-label",
					"class"
				])]),
				_: 1
			}, 8, ["label"]), createVNode(unref(CollapsibleRoot_default), {
				open: treeExpanded.value,
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => treeExpanded.value = $event),
				class: normalizeClass(_ctx.$style.customSection)
			}, {
				default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("button", {
						type: "button",
						class: normalizeClass(_ctx.$style.treeHeader),
						"data-test-id": "scopes-tree-toggle"
					}, [createVNode(unref(N8nIcon_default), {
						icon: treeExpanded.value ? "chevron-down" : "chevron-right",
						size: "small"
					}, null, 8, ["icon"]), createBaseVNode("span", _hoisted_3, toDisplayString(baseText("count", {
						selected: __props.modelValue.length,
						total: __props.availableScopes.length
					})), 1)], 2)]),
					_: 1
				}), createVNode(unref(AnimatedCollapsibleContent_default), { blur: "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.treeBody) }, [createVNode(unref(Input_default), {
						modelValue: searchTerm.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchTerm.value = $event),
						size: "small",
						clearable: "",
						placeholder: baseText("search.placeholder"),
						"aria-label": baseText("search.placeholder"),
						"data-test-id": "scopes-search"
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"aria-label"
					]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.groups) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredGroups.value, ({ group, visibleScopes }) => {
						return openBlock(), createElementBlock("div", { key: group.key }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupHeader) }, [
							!isSearching.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
								key: 0,
								icon: isGroupExpanded(group) ? "chevron-down" : "chevron-right",
								variant: "ghost",
								size: "small",
								"aria-expanded": isGroupExpanded(group),
								"aria-label": baseText("toggleGroup", { group: getGroupLabel(group) }),
								"data-test-id": `scope-group-toggle-${group.key}`,
								onClick: ($event) => toggleGroupExpanded(group)
							}, null, 8, [
								"icon",
								"aria-expanded",
								"aria-label",
								"data-test-id",
								"onClick"
							])) : createCommentVNode("", true),
							createVNode(unref(Checkbox_default), {
								"model-value": isGroupChecked(group),
								indeterminate: isGroupIndeterminate(group),
								label: getGroupLabel(group),
								disabled: __props.disabled,
								"data-test-id": `scope-group-${group.key}`,
								"onUpdate:modelValue": (checked) => toggleGroup(group, checked)
							}, null, 8, [
								"model-value",
								"indeterminate",
								"label",
								"disabled",
								"data-test-id",
								"onUpdate:modelValue"
							]),
							groupTools(group).length > 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
								key: 1,
								placement: "right",
								"show-after": 150,
								"content-class": _ctx.$style["tools-tooltip"]
							}, {
								content: withCtx(() => [createBaseVNode("div", {
									class: normalizeClass(_ctx.$style["tools-popover"]),
									"data-test-id": `scope-group-tools-popover-${group.key}`
								}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["tools-popover-header"]) }, toDisplayString(baseText("tools.enabledOf", {
									enabled: groupEnabledTools(group).size,
									total: groupTools(group).length
								})), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(groupTools(group), (tool) => {
									return openBlock(), createElementBlock("div", {
										key: tool,
										class: normalizeClass([_ctx.$style["tool-row"], { [_ctx.$style["tool-row-disabled"]]: !groupEnabledTools(group).has(tool) }])
									}, [createVNode(unref(N8nIcon_default), {
										icon: groupEnabledTools(group).has(tool) ? "check" : "circle",
										size: "xsmall",
										class: normalizeClass(_ctx.$style["tool-icon"])
									}, null, 8, ["icon", "class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style["tool-name"]) }, toDisplayString(tool), 3)], 2);
								}), 128))], 10, _hoisted_4)]),
								default: withCtx(() => [createBaseVNode("span", {
									class: normalizeClass(_ctx.$style["tools-tag"]),
									tabindex: "0",
									"data-test-id": `scope-group-tools-${group.key}`
								}, [createVNode(unref(N8nIcon_default), {
									icon: "wrench",
									size: "xsmall"
								}), createTextVNode(" " + toDisplayString(baseText("tools.count", { count: groupTools(group).length }, groupTools(group).length)), 1)], 10, _hoisted_5)]),
								_: 2
							}, 1032, ["content-class"])) : createCommentVNode("", true)
						], 2), createVNode(unref(CollapsibleRoot_default), { open: isGroupExpanded(group) }, {
							default: withCtx(() => [createVNode(unref(AnimatedCollapsibleContent_default), { blur: "" }, {
								default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.scopeList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleScopes, (scope) => {
									return openBlock(), createElementBlock("div", {
										key: scope,
										class: normalizeClass(_ctx.$style.scopeRow)
									}, [createVNode(unref(Checkbox_default), {
										"model-value": selectedSet.value.has(scope),
										label: scope,
										disabled: __props.disabled,
										"data-test-id": `scope-checkbox-${scope}`,
										"onUpdate:modelValue": (checked) => toggleScope(scope, checked)
									}, null, 8, [
										"model-value",
										"label",
										"disabled",
										"data-test-id",
										"onUpdate:modelValue"
									]), createVNode(unref(N8nBadge_default), { theme: unref(classifyScope)(scope, __props.readActions) === "read" ? "default" : "success" }, {
										default: withCtx(() => [createTextVNode(toDisplayString(getBadgeLabel(scope)), 1)]),
										_: 2
									}, 1032, ["theme"])], 2);
								}), 128))], 2)]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1032, ["open"])]);
					}), 128))], 2)], 2)]),
					_: 1
				})]),
				_: 1
			}, 8, ["open", "class"])], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/app/components/scopes/ScopesSelector.vue?vue&type=style&index=0&lang.module.scss
var selector = "_selector_ctq9l_126";
var modes = "_modes_ctq9l_131";
var modeCard = "_modeCard_ctq9l_138";
var modeCardActive = "_modeCardActive_ctq9l_145";
var customSection = "_customSection_ctq9l_150";
var treeBody = "_treeBody_ctq9l_158";
var treeHeader = "_treeHeader_ctq9l_165";
var groups = "_groups_ctq9l_183";
var groupHeader = "_groupHeader_ctq9l_192";
var scopeList = "_scopeList_ctq9l_268";
var scopeRow = "_scopeRow_ctq9l_275";
var ScopesSelector_vue_vue_type_style_index_0_lang_module_default = {
	selector,
	modes,
	modeCard,
	modeCardActive,
	customSection,
	treeBody,
	treeHeader,
	groups,
	groupHeader,
	"tools-tag": "_tools-tag_ctq9l_203",
	"tools-tooltip": "_tools-tooltip_ctq9l_224",
	"tools-popover": "_tools-popover_ctq9l_229",
	"tools-popover-header": "_tools-popover-header_ctq9l_240",
	"tool-row": "_tool-row_ctq9l_249",
	"tool-icon": "_tool-icon_ctq9l_254",
	"tool-row-disabled": "_tool-row-disabled_ctq9l_258",
	"tool-name": "_tool-name_ctq9l_259",
	scopeList,
	scopeRow
};
var ScopesSelector_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ScopesSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ScopesSelector_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ScopesSelector_default as t };
