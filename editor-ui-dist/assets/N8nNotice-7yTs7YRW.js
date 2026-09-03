import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, ot as resolveDirective, vn as normalizeClass, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as require_sanitize_html } from "./sanitize-html-HcOJCXUs.js";
//#region ../@n8n/design-system/src/utils/uid.ts
/**
* Math.random should be unique because of its seeding algorithm.
* Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
*
*/
function uid(baseId) {
	return `${baseId ? `${baseId}-` : ""}${Math.random().toString(36).substring(2, 11)}`;
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nNotice/Notice.vue?vue&type=script&setup=true&lang.ts
var import_sanitize_html = /* @__PURE__ */ __toESM(require_sanitize_html(), 1);
var _hoisted_1 = ["id"];
var _hoisted_2 = { class: "notice-content" };
var _hoisted_3 = ["id"];
var Notice_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Notice",
	props: {
		id: { default: () => uid("notice") },
		theme: { default: "warning" },
		content: { default: "" },
		fullContent: { default: "" },
		compact: {
			type: Boolean,
			default: true
		}
	},
	emits: ["action"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const $style = useCssModule();
		const classes = computed(() => [
			"notice",
			$style.notice,
			$style[props.theme]
		]);
		const canTruncate = computed(() => props.fullContent !== void 0);
		const showFullContent = ref(false);
		const displayContent = computed(() => (0, import_sanitize_html.default)(showFullContent.value ? props.fullContent : props.content, {
			allowedAttributes: { a: [
				"data-key",
				"href",
				"target",
				"data-action",
				"data-action-parameter-connectiontype",
				"data-action-parameter-creatorview"
			] },
			allowedTags: [
				"a",
				"ul",
				"li"
			]
		}));
		const onClick = (event) => {
			if (!(event.target instanceof HTMLElement)) return;
			if (event.target.localName !== "a") return;
			const anchorKey = event.target.dataset?.key;
			if (anchorKey) {
				event.stopPropagation();
				event.preventDefault();
				if (anchorKey === "show-less") showFullContent.value = false;
				else if (canTruncate.value && anchorKey === "toggle-expand") showFullContent.value = !showFullContent.value;
				else emit("action", anchorKey);
			}
		};
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", {
				id: __props.id,
				class: normalizeClass(classes.value),
				role: "alert",
				onClick
			}, [createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nText_default), {
				size: "small",
				compact: __props.compact
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [withDirectives(createBaseVNode("span", {
					id: `${__props.id}-content`,
					class: normalizeClass(showFullContent.value ? unref($style)["expanded"] : unref($style)["truncated"]),
					role: "region"
				}, null, 10, _hoisted_3), [[_directive_n8n_html, displayContent.value]])])]),
				_: 3
			}, 8, ["compact"])])], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nNotice/Notice.vue?vue&type=style&index=0&lang.module.scss
var notice = "_notice_2lmrg_388";
var warning = "_warning_2lmrg_412";
var danger = "_danger_2lmrg_417";
var success = "_success_2lmrg_422";
var info = "_info_2lmrg_427";
var expanded = "_expanded_2lmrg_432";
var truncated = "_truncated_2lmrg_437";
var shimmer = "_shimmer_2lmrg_1";
var spin = "_spin_2lmrg_1";
var opacityPulse = "_opacityPulse_2lmrg_1";
var popoverIn = "_popoverIn_2lmrg_1";
var fadeIn = "_fadeIn_2lmrg_1";
var collapsibleSlideDown = "_collapsibleSlideDown_2lmrg_1";
var collapsibleSlideUp = "_collapsibleSlideUp_2lmrg_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_2lmrg_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_2lmrg_1";
var blurSwapIn = "_blurSwapIn_2lmrg_1";
var blurSwapOut = "_blurSwapOut_2lmrg_1";
var pulseGlow = "_pulseGlow_2lmrg_1";
var pulseGlowDelayed = "_pulseGlowDelayed_2lmrg_1";
var fade = "_fade_2lmrg_1";
var fadeInUp = "_fadeInUp_2lmrg_1";
var fadeInDown = "_fadeInDown_2lmrg_1";
var fadeInLeft = "_fadeInLeft_2lmrg_1";
var fadeInRight = "_fadeInRight_2lmrg_1";
var fadeOut = "_fadeOut_2lmrg_1";
var fadeOutDown = "_fadeOutDown_2lmrg_1";
var fadeOutUp = "_fadeOutUp_2lmrg_1";
var fadeOutLeft = "_fadeOutLeft_2lmrg_1";
var fadeOutRight = "_fadeOutRight_2lmrg_1";
var ping = "_ping_2lmrg_1";
var blinkBackground = "_blinkBackground_2lmrg_1";
var typingBlink = "_typingBlink_2lmrg_1";
var Notice_vue_vue_type_style_index_0_lang_module_default = {
	notice,
	warning,
	danger,
	success,
	info,
	expanded,
	truncated,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_2lmrg_1",
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
//#region ../@n8n/design-system/src/components/N8nNotice/index.ts
var N8nNotice_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Notice_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Notice_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { uid as n, N8nNotice_default as t };
