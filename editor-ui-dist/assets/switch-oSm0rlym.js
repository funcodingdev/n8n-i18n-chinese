import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, P as getCurrentInstance, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, bn as normalizeStyle, bt as withCtx, dn as isPromise, gt as watch, h as withModifiers, j as createVNode, m as withKeys, mn as isString, st as resolveDynamicComponent, tn as init_shared_esm_bundler, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { n as addUnit, o as debugWarn, s as throwError } from "./style-aw1HwLDr.js";
import { a as buildProps, o as definePropType, p as isNumber, r as useNamespace, u as isBoolean } from "./use-namespace-xWWi2xIE.js";
import { S as loading_default, n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-AbXb0iQc.js";
import { i as useDeprecated, l as iconPropType, t as ElIcon } from "./icon-DEwwsnFu.js";
import { t as isValidComponentSize } from "./validator-_yiJ_ICt.js";
import { n as INPUT_EVENT, r as UPDATE_MODEL_EVENT, t as CHANGE_EVENT } from "./event-BWR2J8pj.js";
import { i as useFormSize, n as useFormItemInputId, r as useFormDisabled, t as useFormItem } from "./use-form-item-CV4_f5CE.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/switch/src/switch.mjs
init_shared_esm_bundler();
var switchProps = buildProps({
	modelValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	loading: {
		type: Boolean,
		default: false
	},
	size: {
		type: String,
		validator: isValidComponentSize
	},
	width: {
		type: [String, Number],
		default: ""
	},
	inlinePrompt: {
		type: Boolean,
		default: false
	},
	inactiveActionIcon: { type: iconPropType },
	activeActionIcon: { type: iconPropType },
	activeIcon: { type: iconPropType },
	inactiveIcon: { type: iconPropType },
	activeText: {
		type: String,
		default: ""
	},
	inactiveText: {
		type: String,
		default: ""
	},
	activeValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: true
	},
	inactiveValue: {
		type: [
			Boolean,
			String,
			Number
		],
		default: false
	},
	activeColor: {
		type: String,
		default: ""
	},
	inactiveColor: {
		type: String,
		default: ""
	},
	borderColor: {
		type: String,
		default: ""
	},
	name: {
		type: String,
		default: ""
	},
	validateEvent: {
		type: Boolean,
		default: true
	},
	beforeChange: { type: definePropType(Function) },
	id: String,
	tabindex: { type: [String, Number] },
	value: {
		type: [
			Boolean,
			String,
			Number
		],
		default: false
	},
	label: {
		type: String,
		default: void 0
	}
});
var switchEmits = {
	[UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
	[CHANGE_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
	[INPUT_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val)
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/switch/src/switch2.mjs
init_shared_esm_bundler();
var _hoisted_1 = ["onClick"];
var _hoisted_2 = [
	"id",
	"aria-checked",
	"aria-disabled",
	"aria-label",
	"name",
	"true-value",
	"false-value",
	"disabled",
	"tabindex",
	"onKeydown"
];
var _hoisted_3 = ["aria-hidden"];
var _hoisted_4 = ["aria-hidden"];
var _hoisted_5 = ["aria-hidden"];
var COMPONENT_NAME = "ElSwitch";
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/switch/index.mjs
var ElSwitch = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: COMPONENT_NAME }),
	props: switchProps,
	emits: switchEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		const vm = getCurrentInstance();
		const { formItem } = useFormItem();
		const switchSize = useFormSize();
		const ns = useNamespace("switch");
		const useBatchDeprecated = (list) => {
			list.forEach((param) => {
				useDeprecated({
					from: param[0],
					replacement: param[1],
					scope: COMPONENT_NAME,
					version: "2.3.0",
					ref: "https://element-plus.org/en-US/component/switch.html#attributes",
					type: "Attribute"
				}, computed(() => {
					var _a;
					return !!((_a = vm.vnode.props) == null ? void 0 : _a[param[2]]);
				}));
			});
		};
		useBatchDeprecated([
			[
				"\"value\"",
				"\"model-value\" or \"v-model\"",
				"value"
			],
			[
				"\"active-color\"",
				"CSS var `--el-switch-on-color`",
				"activeColor"
			],
			[
				"\"inactive-color\"",
				"CSS var `--el-switch-off-color`",
				"inactiveColor"
			],
			[
				"\"border-color\"",
				"CSS var `--el-switch-border-color`",
				"borderColor"
			]
		]);
		const { inputId } = useFormItemInputId(props, { formItemContext: formItem });
		const switchDisabled = useFormDisabled(computed(() => props.loading));
		const isControlled = ref(props.modelValue !== false);
		const input = ref();
		const core = ref();
		const switchKls = computed(() => [
			ns.b(),
			ns.m(switchSize.value),
			ns.is("disabled", switchDisabled.value),
			ns.is("checked", checked.value)
		]);
		const labelLeftKls = computed(() => [
			ns.e("label"),
			ns.em("label", "left"),
			ns.is("active", !checked.value)
		]);
		const labelRightKls = computed(() => [
			ns.e("label"),
			ns.em("label", "right"),
			ns.is("active", checked.value)
		]);
		const coreStyle = computed(() => ({ width: addUnit(props.width) }));
		watch(() => props.modelValue, () => {
			isControlled.value = true;
		});
		watch(() => props.value, () => {
			isControlled.value = false;
		});
		const actualValue = computed(() => {
			return isControlled.value ? props.modelValue : props.value;
		});
		const checked = computed(() => actualValue.value === props.activeValue);
		if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
			emit(UPDATE_MODEL_EVENT, props.inactiveValue);
			emit(CHANGE_EVENT, props.inactiveValue);
			emit(INPUT_EVENT, props.inactiveValue);
		}
		watch(checked, (val) => {
			var _a;
			input.value.checked = val;
			if (props.validateEvent) (_a = formItem == null ? void 0 : formItem.validate) == null || _a.call(formItem, "change").catch((err) => debugWarn(err));
		});
		const handleChange = () => {
			const val = checked.value ? props.inactiveValue : props.activeValue;
			emit(UPDATE_MODEL_EVENT, val);
			emit(CHANGE_EVENT, val);
			emit(INPUT_EVENT, val);
			nextTick(() => {
				input.value.checked = checked.value;
			});
		};
		const switchValue = () => {
			if (switchDisabled.value) return;
			const { beforeChange } = props;
			if (!beforeChange) {
				handleChange();
				return;
			}
			const shouldChange = beforeChange();
			if (![isPromise(shouldChange), isBoolean(shouldChange)].includes(true)) throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
			if (isPromise(shouldChange)) shouldChange.then((result) => {
				if (result) handleChange();
			}).catch((e) => {
				debugWarn(COMPONENT_NAME, `some error occurred: ${e}`);
			});
			else if (shouldChange) handleChange();
		};
		const styles = computed(() => {
			return ns.cssVarBlock({
				...props.activeColor ? { "on-color": props.activeColor } : null,
				...props.inactiveColor ? { "off-color": props.inactiveColor } : null,
				...props.borderColor ? { "border-color": props.borderColor } : null
			});
		});
		const focus = () => {
			var _a, _b;
			(_b = (_a = input.value) == null ? void 0 : _a.focus) == null || _b.call(_a);
		};
		onMounted(() => {
			input.value.checked = checked.value;
		});
		expose({
			focus,
			checked
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(unref(switchKls)),
				style: normalizeStyle(unref(styles)),
				onClick: withModifiers(switchValue, ["prevent"])
			}, [
				createBaseVNode("input", {
					id: unref(inputId),
					ref_key: "input",
					ref: input,
					class: normalizeClass(unref(ns).e("input")),
					type: "checkbox",
					role: "switch",
					"aria-checked": unref(checked),
					"aria-disabled": unref(switchDisabled),
					"aria-label": _ctx.label,
					name: _ctx.name,
					"true-value": _ctx.activeValue,
					"false-value": _ctx.inactiveValue,
					disabled: unref(switchDisabled),
					tabindex: _ctx.tabindex,
					onChange: handleChange,
					onKeydown: withKeys(switchValue, ["enter"])
				}, null, 42, _hoisted_2),
				!_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(unref(labelLeftKls))
				}, [_ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))]),
					_: 1
				})) : createCommentVNode("v-if", true), !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
					key: 1,
					"aria-hidden": unref(checked)
				}, toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true),
				createBaseVNode("span", {
					ref_key: "core",
					ref: core,
					class: normalizeClass(unref(ns).e("core")),
					style: normalizeStyle(unref(coreStyle))
				}, [_ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref(ns).e("inner"))
				}, [_ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
					key: 0,
					class: normalizeClass(unref(ns).is("icon"))
				}, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(checked) ? _ctx.activeIcon : _ctx.inactiveIcon)))]),
					_: 1
				}, 8, ["class"])) : _ctx.activeText || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(unref(ns).is("text")),
					"aria-hidden": !unref(checked)
				}, toDisplayString(unref(checked) ? _ctx.activeText : _ctx.inactiveText), 11, _hoisted_4)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), createBaseVNode("div", { class: normalizeClass(unref(ns).e("action")) }, [_ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
					key: 0,
					class: normalizeClass(unref(ns).is("loading"))
				}, {
					default: withCtx(() => [createVNode(unref(loading_default))]),
					_: 1
				}, 8, ["class"])) : _ctx.activeActionIcon && unref(checked) ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.activeActionIcon)))]),
					_: 1
				})) : _ctx.inactiveActionIcon && !unref(checked) ? (openBlock(), createBlock(unref(ElIcon), { key: 2 }, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveActionIcon)))]),
					_: 1
				})) : createCommentVNode("v-if", true)], 2)], 6),
				!_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(unref(labelRightKls))
				}, [_ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))]),
					_: 1
				})) : createCommentVNode("v-if", true), !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
					key: 1,
					"aria-hidden": !unref(checked)
				}, toDisplayString(_ctx.activeText), 9, _hoisted_5)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true)
			], 14, _hoisted_1);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));
//#endregion
export { ElSwitch as t };
