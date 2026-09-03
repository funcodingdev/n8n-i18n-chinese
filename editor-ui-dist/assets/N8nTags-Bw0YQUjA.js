import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, h as withModifiers, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nTag_default } from "./N8nTag-BOt_Vn3b.js";
//#region ../@n8n/design-system/src/components/N8nTags/Tags.vue?vue&type=script&setup=true&lang.ts
var Tags_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nTags",
	__name: "Tags",
	props: {
		tags: { default: () => [] },
		truncate: {
			type: Boolean,
			default: false
		},
		truncateAt: { default: 3 },
		clickable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["expand", "click:tag"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { t } = useI18n();
		const showAll = ref(false);
		const visibleTags = computed(() => {
			const { tags, truncate, truncateAt } = props;
			if (truncate && !showAll.value && tags.length > truncateAt) return tags.slice(0, truncateAt);
			return tags;
		});
		const hiddenTagsLength = computed(() => props.tags.length - props.truncateAt);
		const onExpand = () => {
			showAll.value = true;
			emit("expand", true);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["n8n-tags", _ctx.$style.tags]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleTags.value, (tag) => {
				return openBlock(), createBlock(unref(N8nTag_default), {
					key: tag.id,
					text: tag.name,
					clickable: __props.clickable,
					onClick: ($event) => emit("click:tag", tag.id, $event)
				}, null, 8, [
					"text",
					"clickable",
					"onClick"
				]);
			}), 128)), __props.truncate && !showAll.value && hiddenTagsLength.value > 0 ? (openBlock(), createBlock(unref(N8nLink_default), {
				key: 0,
				theme: "text",
				underline: "",
				size: "small",
				onClick: withModifiers(onExpand, ["stop", "prevent"])
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("tags.showMore", [`${hiddenTagsLength.value}`])), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nTags/Tags.vue?vue&type=style&index=0&lang.module.scss
var tags = "_tags_7jq2t_388";
var shimmer = "_shimmer_7jq2t_1";
var spin = "_spin_7jq2t_1";
var opacityPulse = "_opacityPulse_7jq2t_1";
var popoverIn = "_popoverIn_7jq2t_1";
var fadeIn = "_fadeIn_7jq2t_1";
var collapsibleSlideDown = "_collapsibleSlideDown_7jq2t_1";
var collapsibleSlideUp = "_collapsibleSlideUp_7jq2t_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_7jq2t_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_7jq2t_1";
var blurSwapIn = "_blurSwapIn_7jq2t_1";
var blurSwapOut = "_blurSwapOut_7jq2t_1";
var pulseGlow = "_pulseGlow_7jq2t_1";
var pulseGlowDelayed = "_pulseGlowDelayed_7jq2t_1";
var fade = "_fade_7jq2t_1";
var fadeInUp = "_fadeInUp_7jq2t_1";
var fadeInDown = "_fadeInDown_7jq2t_1";
var fadeInLeft = "_fadeInLeft_7jq2t_1";
var fadeInRight = "_fadeInRight_7jq2t_1";
var fadeOut = "_fadeOut_7jq2t_1";
var fadeOutDown = "_fadeOutDown_7jq2t_1";
var fadeOutUp = "_fadeOutUp_7jq2t_1";
var fadeOutLeft = "_fadeOutLeft_7jq2t_1";
var fadeOutRight = "_fadeOutRight_7jq2t_1";
var ping = "_ping_7jq2t_1";
var blinkBackground = "_blinkBackground_7jq2t_1";
var typingBlink = "_typingBlink_7jq2t_1";
var Tags_vue_vue_type_style_index_0_lang_module_default = {
	tags,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_7jq2t_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nTags/index.ts
var N8nTags_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Tags_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Tags_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nTags_default as t };
