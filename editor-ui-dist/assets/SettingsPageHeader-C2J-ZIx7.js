import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, ft as useSlots, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
//#region ../@n8n/design-system/src/components/N8nSettingsPageHeader/SettingsPageHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["href"];
var SettingsPageHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsPageHeader",
	__name: "SettingsPageHeader",
	props: {
		title: {},
		description: { default: void 0 },
		showDocsLink: {
			type: Boolean,
			default: true
		},
		docsUrl: { default: void 0 },
		docsLabel: { default: "documentation" },
		docsLeadingText: { default: "Learn more in the " },
		headingTag: { default: "h1" }
	},
	setup(__props) {
		const props = __props;
		const slots = useSlots();
		const hasDescription = computed(() => Boolean(props.description || slots.description));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", { class: normalizeClass(_ctx.$style.header) }, [unref(slots).titleTrailing ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.titleRow)
			}, [createVNode(unref(N8nHeading_default), {
				tag: __props.headingTag,
				class: normalizeClass(_ctx.$style.title),
				step: "xl",
				color: "text-dark"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}, 8, ["tag", "class"]), renderSlot(_ctx.$slots, "titleTrailing")], 2)) : (openBlock(), createBlock(unref(N8nHeading_default), {
				key: 1,
				tag: __props.headingTag,
				class: normalizeClass(_ctx.$style.title),
				step: "xl",
				color: "text-dark"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}, 8, ["tag", "class"])), hasDescription.value || __props.showDocsLink ? (openBlock(), createElementBlock("p", {
				key: 2,
				class: normalizeClass(_ctx.$style.description)
			}, [renderSlot(_ctx.$slots, "description", {}, () => [__props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "medium",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			})) : createCommentVNode("", true)]), __props.showDocsLink ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(hasDescription.value ? " " : ""), 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.docsPhrase) }, [createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.docsLeadingText), 1)]),
				_: 1
			}), createBaseVNode("a", {
				class: normalizeClass(_ctx.$style.docsLink),
				href: __props.docsUrl || void 0,
				target: "_blank",
				rel: "noopener noreferrer",
				"data-test-id": "settings-page-header-docs"
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.docsLabel) }, toDisplayString(__props.docsLabel), 3), _cache[0] || (_cache[0] = createBaseVNode("span", { "aria-hidden": "true" }, "↗", -1))], 10, _hoisted_1)], 2)], 64)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSettingsPageHeader/SettingsPageHeader.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_7pesj_389";
var title = "_title_7pesj_403";
var titleRow = "_titleRow_7pesj_407";
var description = "_description_7pesj_413";
var docsPhrase = "_docsPhrase_7pesj_426";
var docsLink = "_docsLink_7pesj_430";
var docsLabel = "_docsLabel_7pesj_440";
var shimmer = "_shimmer_7pesj_1";
var spin = "_spin_7pesj_1";
var opacityPulse = "_opacityPulse_7pesj_1";
var popoverIn = "_popoverIn_7pesj_1";
var fadeIn = "_fadeIn_7pesj_1";
var collapsibleSlideDown = "_collapsibleSlideDown_7pesj_1";
var collapsibleSlideUp = "_collapsibleSlideUp_7pesj_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_7pesj_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_7pesj_1";
var blurSwapIn = "_blurSwapIn_7pesj_1";
var blurSwapOut = "_blurSwapOut_7pesj_1";
var pulseGlow = "_pulseGlow_7pesj_1";
var pulseGlowDelayed = "_pulseGlowDelayed_7pesj_1";
var fade = "_fade_7pesj_1";
var fadeInUp = "_fadeInUp_7pesj_1";
var fadeInDown = "_fadeInDown_7pesj_1";
var fadeInLeft = "_fadeInLeft_7pesj_1";
var fadeInRight = "_fadeInRight_7pesj_1";
var fadeOut = "_fadeOut_7pesj_1";
var fadeOutDown = "_fadeOutDown_7pesj_1";
var fadeOutUp = "_fadeOutUp_7pesj_1";
var fadeOutLeft = "_fadeOutLeft_7pesj_1";
var fadeOutRight = "_fadeOutRight_7pesj_1";
var ping = "_ping_7pesj_1";
var blinkBackground = "_blinkBackground_7pesj_1";
var typingBlink = "_typingBlink_7pesj_1";
var SettingsPageHeader_vue_vue_type_style_index_0_lang_module_default = {
	header,
	title,
	titleRow,
	description,
	docsPhrase,
	docsLink,
	docsLabel,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_7pesj_1",
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
var SettingsPageHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsPageHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsPageHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsPageHeader_default as t };
