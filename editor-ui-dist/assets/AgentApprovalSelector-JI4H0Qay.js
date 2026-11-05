import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Cf as watch, Gd as createVNode, Kf as unref, Ld as computed, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, ep as init_shared_esm_bundler, ff as renderList, pf as renderSlot, pp as normalizeClass, qd as defineComponent, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { ED as N8nText_default, FE as N8nSelect_default, IE as N8nOption_default, RD as _plugin_vue_export_helper_default, UD as useI18n } from "./app-CfhiRDif.js";
//#region src/features/agents/components/AgentFormSettingRow.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = ["for"];
var AgentFormSettingRow_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentFormSettingRow",
	props: {
		controlId: {},
		title: {},
		description: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [createBaseVNode("label", { for: __props.controlId }, [createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-dark",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			})], 8, _hoisted_1), __props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.action) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	row: "_row_mfit1_1",
	info: "_info_mfit1_8",
	action: "_action_mfit1_15"
} }]]);
//#endregion
//#region src/features/agents/components/AgentApprovalSelector.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var AgentApprovalSelector_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentApprovalSelector",
	props: {
		modelValue: {},
		options: {},
		label: {},
		hint: {},
		placeholder: {},
		testIdPrefix: {},
		loading: { type: Boolean },
		error: {},
		selectionOnly: { type: Boolean },
		disabled: { type: Boolean }
	},
	emits: [
		"update:modelValue",
		"update:valid",
		"update:mode"
	],
	setup(__props, { emit: __emit }) {
		/**
		* Mode picker plus tag list for a human-in-the-loop approval selection.
		* Shared by MCP servers, whose entries are tool names, and channels, whose
		* entries are action names.
		*
		* The caller owns where the entries come from: MCP fetches them from the
		* server, a channel takes them from the integration catalog.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const approvalMode = ref("disabled");
		const selectedEntries = ref([]);
		const modeOptions = computed(() => [
			{
				label: i18n.baseText("agents.toolConfig.mcpApproval.disabled"),
				value: "disabled"
			},
			{
				label: i18n.baseText("agents.toolConfig.mcpApproval.askAll"),
				value: "global"
			},
			{
				label: i18n.baseText("agents.toolConfig.mcpApproval.askSelected"),
				value: "selected"
			}
		]);
		const displayedEntries = computed(() => props.selectionOnly && approvalMode.value === "global" ? props.options.map((option) => option.value) : selectedEntries.value);
		const isValid = computed(() => approvalMode.value !== "selected" || selectedEntries.value.length > 0);
		watch(() => props.modelValue, (approval) => {
			if (!approval) {
				approvalMode.value = "disabled";
				selectedEntries.value = [];
				return;
			}
			approvalMode.value = approval.mode;
			selectedEntries.value = approval.mode === "selected" ? approval.tools : [];
		}, { immediate: true });
		watch(isValid, (valid) => emit("update:valid", valid), { immediate: true });
		watch([() => props.modelValue, () => props.options], ([, options]) => {
			if (approvalMode.value !== "selected" || options.length === 0) return;
			const available = new Set(options.map((option) => option.value));
			const pruned = selectedEntries.value.filter((entry) => available.has(entry));
			if (pruned.length !== selectedEntries.value.length) {
				selectedEntries.value = pruned;
				emitApproval();
			}
		}, { immediate: true });
		function toStringArray(value) {
			return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
		}
		function toApprovalMode(value) {
			return value === "global" || value === "selected" ? value : "disabled";
		}
		function emitApproval() {
			if (approvalMode.value === "global") {
				emit("update:modelValue", { mode: "global" });
				return;
			}
			if (approvalMode.value === "selected") {
				emit("update:modelValue", {
					mode: "selected",
					tools: selectedEntries.value
				});
				return;
			}
			emit("update:modelValue", void 0);
		}
		function handleModeUpdate(value) {
			approvalMode.value = toApprovalMode(value);
			emitApproval();
			emit("update:mode", approvalMode.value);
		}
		function handleSelectedUpdate(value) {
			selectedEntries.value = toStringArray(value);
			if (props.selectionOnly) approvalMode.value = "selected";
			emitApproval();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.approvalRow, { [_ctx.$style.selectionOnly]: props.selectionOnly }]) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalText) }, [createVNode(unref(N8nText_default), {
					tag: "label",
					for: `${props.testIdPrefix}-tools`,
					size: "small",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.label), 1)]),
					_: 1
				}, 8, ["for"]), props.hint ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.hint), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2),
				!props.selectionOnly ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.controls)
				}, [createVNode(unref(N8nSelect_default), {
					"model-value": approvalMode.value,
					disabled: props.disabled,
					size: "small",
					"data-test-id": `${props.testIdPrefix}-mode`,
					class: normalizeClass(_ctx.$style.modeSelect),
					"onUpdate:modelValue": handleModeUpdate
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(modeOptions.value, (option) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: option.value,
							value: option.value,
							label: option.label
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, [
					"model-value",
					"disabled",
					"data-test-id",
					"class"
				]), renderSlot(_ctx.$slots, "controls", { mode: approvalMode.value })], 2)) : createCommentVNode("", true),
				props.selectionOnly || approvalMode.value === "selected" ? (openBlock(), createBlock(unref(N8nSelect_default), {
					key: 1,
					id: `${props.testIdPrefix}-tools`,
					"model-value": displayedEntries.value,
					multiple: "",
					filterable: "",
					disabled: props.disabled,
					size: props.selectionOnly ? "medium" : "small",
					teleported: !props.selectionOnly,
					"aria-label": props.label,
					loading: props.loading,
					placeholder: props.placeholder,
					"data-test-id": `${props.testIdPrefix}-tools`,
					"onUpdate:modelValue": handleSelectedUpdate
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (option) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: option.value,
							value: option.value,
							label: option.label
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, [
					"id",
					"model-value",
					"disabled",
					"size",
					"teleported",
					"aria-label",
					"loading",
					"placeholder",
					"data-test-id"
				])) : createCommentVNode("", true),
				props.error && approvalMode.value === "selected" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					size: "xsmall",
					color: "danger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.error), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	approvalRow: "_approvalRow_1xe68_1",
	approvalText: "_approvalText_1xe68_9",
	selectionOnly: "_selectionOnly_1xe68_16",
	controls: "_controls_1xe68_21",
	modeSelect: "_modeSelect_1xe68_27"
} }]]);
//#endregion
export { AgentFormSettingRow_default as n, AgentApprovalSelector_default as t };
