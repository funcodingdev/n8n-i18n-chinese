import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, c as useCssModule, it as renderSlot, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
//#region ../@n8n/design-system/src/components/N8nAlert/Alert.vue?vue&type=script&setup=true&lang.ts
var Alert_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Alert",
	props: {
		title: {},
		type: { default: "info" },
		description: {},
		center: { type: Boolean },
		showIcon: {
			type: Boolean,
			default: true
		},
		effect: { default: "light" },
		background: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const icon = computed(() => {
			switch (props.type) {
				case "success": return "circle-check";
				case "warning": return "triangle-alert";
				case "error": return "circle-x";
				default: return "info";
			}
		});
		const $style = useCssModule();
		const alertBoxClassNames = computed(() => {
			const classNames = ["n8n-alert", $style.alert];
			if (props.type) classNames.push($style[props.type]);
			if (props.effect) classNames.push($style[props.effect]);
			if (props.center) classNames.push($style.center);
			if (props.background) classNames.push($style.background);
			return classNames;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(alertBoxClassNames.value),
				role: "alert"
			}, [createBaseVNode("div", { class: normalizeClass(unref($style).content) }, [__props.showIcon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(unref($style).icon)
			}, [__props.showIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: icon.value
			}, null, 8, ["icon"])) : _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(unref($style).text) }, [_ctx.$slots.title || __props.title ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).title)
			}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])], 2)) : createCommentVNode("", true), _ctx.$slots.default || __props.description ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass({
					[unref($style).description]: true,
					[unref($style).hasTitle]: _ctx.$slots.title || __props.title
				})
			}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.description), 1)])], 2)) : createCommentVNode("", true)], 2)], 2), _ctx.$slots.aside ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).aside)
			}, [renderSlot(_ctx.$slots, "aside")], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAlert/Alert.vue?vue&type=style&index=0&lang.module.scss
var alert = "_alert_12843_125";
var center = "_center_12843_134";
var success = "_success_12843_137";
var light = "_light_12843_137";
var background = "_background_12843_140";
var dark = "_dark_12843_147";
var info = "_info_12843_157";
var warning = "_warning_12843_177";
var error = "_error_12843_197";
var content = "_content_12843_218";
var icon = "_icon_12843_223";
var text = "_text_12843_231";
var title = "_title_12843_237";
var description = "_description_12843_243";
var hasTitle = "_hasTitle_12843_246";
var aside = "_aside_12843_250";
var Alert_vue_vue_type_style_index_0_lang_module_default = {
	alert,
	center,
	success,
	light,
	background,
	"el-alert__description": "_el-alert__description_12843_144",
	dark,
	info,
	warning,
	error,
	content,
	icon,
	text,
	title,
	description,
	hasTitle,
	aside
};
var Alert_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Alert_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Alert_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Alert_default as t };
