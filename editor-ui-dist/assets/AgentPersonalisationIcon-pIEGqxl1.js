import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, bn as normalizeStyle, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { to as DEFAULT_AGENT_PERSONALISATION } from "./src-DAIlllTg.js";
//#region src/features/agents/components/AgentPersonalisationIcon.vue?vue&type=script&setup=true&lang.ts
var AgentPersonalisationIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPersonalisationIcon",
	props: {
		personalisation: { default: null },
		size: { default: 24 }
	},
	setup(__props) {
		const props = __props;
		const resolved = computed(() => {
			const value = props.personalisation;
			return {
				icon: value?.icon ?? DEFAULT_AGENT_PERSONALISATION.icon,
				gradient: {
					...DEFAULT_AGENT_PERSONALISATION.gradient,
					...value?.gradient
				}
			};
		});
		const tileStyle = computed(() => ({
			"--agent-personalisation-gradient-from": resolved.value.gradient.from,
			"--agent-personalisation-gradient-to": resolved.value.gradient.to,
			"--agent-personalisation-gradient-angle": `${resolved.value.gradient.angle}deg`,
			"--agent-personalisation-gradient-from-stop": `${resolved.value.gradient.fromStop}%`,
			"--agent-personalisation-gradient-to-stop": `${resolved.value.gradient.toStop}%`,
			width: `${props.size}px`,
			height: `${props.size}px`
		}));
		const iconSize = computed(() => Math.round(props.size * .6));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.tile),
				style: normalizeStyle(tileStyle.value),
				"data-test-id": "agent-personalisation-icon-tile"
			}, [createVNode(unref(N8nIcon_default), {
				icon: resolved.value.icon,
				size: iconSize.value
			}, null, 8, ["icon", "size"])], 6);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentPersonalisationIcon.vue?vue&type=style&index=0&lang.module.scss
var tile = "_tile_gb7b7_388";
var shimmer = "_shimmer_gb7b7_1";
var spin = "_spin_gb7b7_1";
var opacityPulse = "_opacityPulse_gb7b7_1";
var popoverIn = "_popoverIn_gb7b7_1";
var fadeIn = "_fadeIn_gb7b7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_gb7b7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_gb7b7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_gb7b7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_gb7b7_1";
var blurSwapIn = "_blurSwapIn_gb7b7_1";
var blurSwapOut = "_blurSwapOut_gb7b7_1";
var pulseGlow = "_pulseGlow_gb7b7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_gb7b7_1";
var fade = "_fade_gb7b7_1";
var fadeInUp = "_fadeInUp_gb7b7_1";
var fadeInDown = "_fadeInDown_gb7b7_1";
var fadeInLeft = "_fadeInLeft_gb7b7_1";
var fadeInRight = "_fadeInRight_gb7b7_1";
var fadeOut = "_fadeOut_gb7b7_1";
var fadeOutDown = "_fadeOutDown_gb7b7_1";
var fadeOutUp = "_fadeOutUp_gb7b7_1";
var fadeOutLeft = "_fadeOutLeft_gb7b7_1";
var fadeOutRight = "_fadeOutRight_gb7b7_1";
var ping = "_ping_gb7b7_1";
var blinkBackground = "_blinkBackground_gb7b7_1";
var typingBlink = "_typingBlink_gb7b7_1";
var AgentPersonalisationIcon_vue_vue_type_style_index_0_lang_module_default = {
	tile,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_gb7b7_1",
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
var AgentPersonalisationIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPersonalisationIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPersonalisationIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentPersonalisationIcon_default as t };
