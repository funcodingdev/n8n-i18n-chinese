import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, U as mergeProps, bt as withCtx, it as renderSlot, j as createVNode, ot as resolveDirective, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
//#region ../@n8n/design-system/src/components/N8nInputLabel/InputLabel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["for"];
var _hoisted_2 = ["data-test-id"];
var _hoisted_3 = ["data-test-id"];
var _hoisted_4 = ["data-test-id"];
var InputLabel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nInputLabel",
	__name: "InputLabel",
	props: {
		compact: {
			type: Boolean,
			default: false
		},
		color: {},
		label: {},
		tooltipText: {},
		inputName: {},
		required: { type: Boolean },
		bold: {
			type: Boolean,
			default: true
		},
		size: { default: "medium" },
		underline: { type: Boolean },
		showTooltip: { type: Boolean },
		showOptions: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const addTargetBlank = (html) => html && html.includes("href=") ? html.replace(/href=/g, "target=\"_blank\" href=") : html;
		const onLabelClick = (event) => {
			if (!props.inputName) event.preventDefault();
		};
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", mergeProps({ class: {
				[_ctx.$style.container]: true,
				[_ctx.$style.withOptions]: _ctx.$slots.options
			} }, _ctx.$attrs, { "data-test-id": "input-label" }), [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [__props.label || _ctx.$slots.options ? (openBlock(), createElementBlock("label", {
				key: 0,
				for: __props.inputName,
				class: normalizeClass({
					"n8n-input-label": true,
					[_ctx.$style.inputLabel]: true,
					[_ctx.$style.heading]: !!__props.label,
					[_ctx.$style.underline]: __props.underline,
					[_ctx.$style[__props.size]]: true,
					[_ctx.$style.overflow]: !!_ctx.$slots.options
				}),
				onClick: onLabelClick
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["main-content"]) }, [__props.label ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.title)
			}, [createVNode(unref(N8nText_default), {
				bold: __props.bold,
				size: __props.size,
				compact: __props.compact,
				color: __props.color,
				class: normalizeClass({ [_ctx.$style.textEllipses]: __props.showOptions })
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.label) + " ", 1), __props.required ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "primary",
					bold: __props.bold,
					size: __props.size
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("*", -1)])]),
					_: 1
				}, 8, ["bold", "size"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"bold",
				"size",
				"compact",
				"color",
				"class"
			])], 2)) : createCommentVNode("", true), __props.tooltipText && __props.label ? (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass([_ctx.$style.infoIcon, __props.showTooltip ? _ctx.$style.visible : _ctx.$style.hidden])
			}, [createVNode(unref(N8nTooltip_default), {
				placement: "top",
				"content-class": _ctx.$style.tooltipPopper,
				"show-after": 300
			}, {
				content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, addTargetBlank(__props.tooltipText)]])]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: "circle-help",
					size: "small"
				}, null, 8, ["class"])]),
				_: 1
			}, 8, ["content-class"])], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["trailing-content"]) }, [
				_ctx.$slots.options && __props.label ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass({
						[_ctx.$style.overlay]: true,
						[_ctx.$style.visible]: __props.showOptions
					})
				}, null, 2)) : createCommentVNode("", true),
				_ctx.$slots.options ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass({
						[_ctx.$style.options]: true,
						[_ctx.$style.visible]: __props.showOptions
					}),
					"data-test-id": `${__props.inputName}-parameter-input-options-container`
				}, [renderSlot(_ctx.$slots, "options")], 10, _hoisted_2)) : createCommentVNode("", true),
				_ctx.$slots.issues ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.issues),
					"data-test-id": `${__props.inputName}-parameter-input-issues-container`
				}, [renderSlot(_ctx.$slots, "issues")], 10, _hoisted_3)) : createCommentVNode("", true)
			], 2)], 10, _hoisted_1)) : createCommentVNode("", true), _ctx.$slots.persistentOptions ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: "pl-4xs",
				"data-test-id": `${__props.inputName}-parameter-input-persistent-options-container`
			}, [renderSlot(_ctx.$slots, "persistentOptions")], 8, _hoisted_4)) : createCommentVNode("", true)], 2), renderSlot(_ctx.$slots, "default")], 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInputLabel/InputLabel.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_bav5l_125";
var labelRow = "_labelRow_bav5l_134";
var infoIcon = "_infoIcon_bav5l_144";
var icon = "_icon_bav5l_151";
var inputLabel = "_inputLabel_bav5l_164";
var options = "_options_bav5l_169";
var overlay = "_overlay_bav5l_174";
var withOptions = "_withOptions_bav5l_180";
var title = "_title_bav5l_180";
var issues = "_issues_bav5l_209";
var hidden = "_hidden_bav5l_230";
var visible = "_visible_bav5l_234";
var overflow = "_overflow_bav5l_238";
var textEllipses = "_textEllipses_bav5l_243";
var heading = "_heading_bav5l_248";
var small = "_small_bav5l_251";
var medium = "_medium_bav5l_254";
var underline = "_underline_bav5l_258";
var tooltipPopper = "_tooltipPopper_bav5l_262";
var InputLabel_vue_vue_type_style_index_0_lang_module_default = {
	container,
	labelRow,
	"main-content": "_main-content_bav5l_139",
	infoIcon,
	icon,
	"trailing-content": "_trailing-content_bav5l_155",
	inputLabel,
	options,
	overlay,
	withOptions,
	title,
	issues,
	hidden,
	visible,
	overflow,
	textEllipses,
	heading,
	small,
	medium,
	underline,
	tooltipPopper
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nInputLabel/index.ts
var N8nInputLabel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InputLabel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InputLabel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInputLabel_default as t };
