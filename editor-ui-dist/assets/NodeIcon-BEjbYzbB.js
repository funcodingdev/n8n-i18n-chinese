import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, Ut as toValue, l as useCssVars, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nNodeIcon_default } from "./N8nNodeIcon-85L9TdKh.js";
import { D as injectWorkflowDocumentStore } from "./workflows.store-qP-dtzSs.js";
import { n as getNodeIconSource } from "./nodeIcon-CQdUphJu.js";
//#region src/app/composables/useNodeIconSource.ts
function useNodeIconSource(nodeType, node) {
	const workflowDocumentStore = injectWorkflowDocumentStore();
	return computed(() => {
		const typeValue = toValue(nodeType);
		const nodeValue = toValue(node);
		return getNodeIconSource(typeValue ?? nodeValue?.type, nodeValue ?? null, workflowDocumentStore.value.getExpressionHandler());
	});
}
//#endregion
//#region src/app/components/NodeIcon.vue?vue&type=script&setup=true&lang.ts
var NodeIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeIcon",
	props: {
		size: { default: void 0 },
		disabled: {
			type: Boolean,
			default: false
		},
		circle: {
			type: Boolean,
			default: false
		},
		colorDefault: { default: "" },
		showTooltip: {
			type: Boolean,
			default: false
		},
		tooltipPosition: { default: "top" },
		nodeName: { default: "" },
		iconSource: { default: void 0 },
		nodeType: { default: void 0 },
		node: { default: void 0 }
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		useCssVars((_ctx) => ({ "v8b78d264": iconColor.value }));
		const props = __props;
		const emit = __emit;
		const iconSourceFromNodeType = useNodeIconSource(() => props.nodeType, () => props.node ?? null);
		const iconSource = computed(() => props.iconSource ?? iconSourceFromNodeType.value);
		const iconType = computed(() => iconSource.value?.type ?? "unknown");
		const src = computed(() => {
			if (iconSource.value?.type !== "file") return;
			return iconSource.value.src;
		});
		const iconName = computed(() => {
			if (iconSource.value?.type !== "icon") return;
			return iconSource.value.name;
		});
		const iconColor = computed(() => {
			if (iconSource.value?.type !== "icon") return;
			return iconSource.value.color ?? props.colorDefault;
		});
		const badge = computed(() => iconSource.value?.badge);
		const nodeTypeName = computed(() => props.nodeName && props.nodeName !== "" ? props.nodeName : props.nodeType?.displayName);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeIcon_default), {
				type: iconType.value,
				src: src.value,
				name: iconName.value,
				disabled: __props.disabled,
				size: __props.size,
				circle: __props.circle,
				"node-type-name": nodeTypeName.value,
				"show-tooltip": __props.showTooltip,
				"tooltip-position": __props.tooltipPosition,
				badge: badge.value,
				class: normalizeClass(_ctx.$style.nodeIcon),
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
			}, null, 8, [
				"type",
				"src",
				"name",
				"disabled",
				"size",
				"circle",
				"node-type-name",
				"show-tooltip",
				"tooltip-position",
				"badge",
				"class"
			]);
		};
	}
});
//#endregion
//#region src/app/components/NodeIcon.vue?vue&type=style&index=0&lang.module.scss
var nodeIcon = "_nodeIcon_1jjbq_388";
var shimmer = "_shimmer_1jjbq_1";
var spin = "_spin_1jjbq_1";
var opacityPulse = "_opacityPulse_1jjbq_1";
var popoverIn = "_popoverIn_1jjbq_1";
var fadeIn = "_fadeIn_1jjbq_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1jjbq_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1jjbq_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1jjbq_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1jjbq_1";
var blurSwapIn = "_blurSwapIn_1jjbq_1";
var blurSwapOut = "_blurSwapOut_1jjbq_1";
var pulseGlow = "_pulseGlow_1jjbq_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1jjbq_1";
var fade = "_fade_1jjbq_1";
var fadeInUp = "_fadeInUp_1jjbq_1";
var fadeInDown = "_fadeInDown_1jjbq_1";
var fadeInLeft = "_fadeInLeft_1jjbq_1";
var fadeInRight = "_fadeInRight_1jjbq_1";
var fadeOut = "_fadeOut_1jjbq_1";
var fadeOutDown = "_fadeOutDown_1jjbq_1";
var fadeOutUp = "_fadeOutUp_1jjbq_1";
var fadeOutLeft = "_fadeOutLeft_1jjbq_1";
var fadeOutRight = "_fadeOutRight_1jjbq_1";
var ping = "_ping_1jjbq_1";
var blinkBackground = "_blinkBackground_1jjbq_1";
var typingBlink = "_typingBlink_1jjbq_1";
var NodeIcon_vue_vue_type_style_index_0_lang_module_default = {
	nodeIcon,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1jjbq_1",
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
var NodeIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useNodeIconSource as n, NodeIcon_default as t };
