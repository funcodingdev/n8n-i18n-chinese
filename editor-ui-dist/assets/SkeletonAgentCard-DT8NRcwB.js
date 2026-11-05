import { Bd as createCommentVNode, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Vd as createElementBlock, ep as init_shared_esm_bundler, pp as normalizeClass, qd as defineComponent, uf as openBlock } from "./vendor-BA8kaY8M.js";
import { RD as _plugin_vue_export_helper_default } from "./app-CfhiRDif.js";
//#region src/features/ai/chatHub/components/SkeletonAgentCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var SkeletonAgentCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkeletonAgentCard",
	props: { showActionButton: {
		type: Boolean,
		default: true
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.card) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, null, 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.title]) }, null, 2), createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.description]) }, null, 2)], 2),
				__props.showActionButton ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.actionButton])
				}, null, 2)) : createCommentVNode("", true)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	card: "_card_1wlg9_276",
	skeleton: "_skeleton_1wlg9_286",
	"skeleton-pulse": "_skeleton-pulse_1wlg9_1",
	avatar: "_avatar_1wlg9_302",
	content: "_content_1wlg9_319",
	title: "_title_1wlg9_327",
	description: "_description_1wlg9_332",
	actionButton: "_actionButton_1wlg9_337",
	shimmer: "_shimmer_1wlg9_1",
	spin: "_spin_1wlg9_1",
	opacityPulse: "_opacityPulse_1wlg9_1",
	popoverIn: "_popoverIn_1wlg9_1",
	fadeIn: "_fadeIn_1wlg9_1",
	collapsibleSlideDown: "_collapsibleSlideDown_1wlg9_1",
	collapsibleSlideUp: "_collapsibleSlideUp_1wlg9_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_1wlg9_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_1wlg9_1",
	blurSwapIn: "_blurSwapIn_1wlg9_1",
	blurSwapOut: "_blurSwapOut_1wlg9_1",
	pulseGlow: "_pulseGlow_1wlg9_1",
	pulseGlowDelayed: "_pulseGlowDelayed_1wlg9_1",
	fade: "_fade_1wlg9_1",
	fadeInUp: "_fadeInUp_1wlg9_1",
	fadeInDown: "_fadeInDown_1wlg9_1",
	fadeInLeft: "_fadeInLeft_1wlg9_1",
	fadeInRight: "_fadeInRight_1wlg9_1",
	fadeOut: "_fadeOut_1wlg9_1",
	fadeOutDown: "_fadeOutDown_1wlg9_1",
	fadeOutUp: "_fadeOutUp_1wlg9_1",
	fadeOutLeft: "_fadeOutLeft_1wlg9_1",
	fadeOutRight: "_fadeOutRight_1wlg9_1",
	ping: "_ping_1wlg9_1",
	blinkBackground: "_blinkBackground_1wlg9_1",
	typingBlink: "_typingBlink_1wlg9_1"
} }]]);
//#endregion
export { SkeletonAgentCard_default as t };
