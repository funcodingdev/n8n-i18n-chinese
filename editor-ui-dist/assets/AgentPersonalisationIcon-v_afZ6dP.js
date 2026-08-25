import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, bn as normalizeStyle, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { Ja as DEFAULT_AGENT_PERSONALISATION } from "./src-JwBmTNgK.js";
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
var AgentPersonalisationIcon_vue_vue_type_style_index_0_lang_module_default = { tile: "_tile_1kp69_125" };
var AgentPersonalisationIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPersonalisationIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPersonalisationIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentPersonalisationIcon_default as t };
