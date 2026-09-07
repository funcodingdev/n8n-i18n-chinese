import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, ot as resolveDirective, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
//#region ../@n8n/design-system/src/components/N8nInfoAccordion/InfoAccordion.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var InfoAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nInfoAccordion",
	__name: "InfoAccordion",
	props: {
		title: {},
		description: {},
		items: { default: () => [] },
		initiallyExpanded: {
			type: Boolean,
			default: false
		},
		headerIcon: {},
		eventBus: { default: () => createEventBus() }
	},
	emits: ["click:body", "tooltipClick"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const expanded = ref(false);
		onMounted(() => {
			props.eventBus.on("expand", () => {
				expanded.value = true;
			});
			expanded.value = props.initiallyExpanded;
		});
		const toggle = () => {
			expanded.value = !expanded.value;
		};
		const onClick = (e) => emit("click:body", e);
		const onTooltipClick = (item, event) => emit("tooltipClick", item, event);
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass(["accordion", _ctx.$style.container]) }, [createBaseVNode("div", {
				class: normalizeClass({
					[_ctx.$style.header]: true,
					[_ctx.$style.expanded]: expanded.value
				}),
				onClick: toggle
			}, [
				__props.headerIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: __props.headerIcon.icon,
					color: __props.headerIcon.color,
					size: "small"
				}, null, 8, ["icon", "color"])) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.headerText),
					color: "text-base",
					size: "small",
					align: "left",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nIcon_default), {
					icon: expanded.value ? "chevron-up" : "chevron-down",
					bold: ""
				}, null, 8, ["icon"])
			], 2), expanded.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.description]: true,
					[_ctx.$style.collapsed]: !expanded.value
				}),
				onClick
			}, [
				__props.items.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.accordionItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
					return openBlock(), createElementBlock("div", {
						key: item.id,
						class: normalizeClass(_ctx.$style.accordionItem)
					}, [createVNode(unref(N8nTooltip_default), { disabled: !item.tooltip }, {
						content: withCtx(() => [withDirectives(createBaseVNode("div", { onClick: ($event) => onTooltipClick(item.id, $event) }, null, 8, _hoisted_1), [[_directive_n8n_html, item.tooltip]])]),
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: item.icon,
							color: item.iconColor,
							size: "small",
							class: "mr-2xs"
						}, null, 8, ["icon", "color"])]),
						_: 2
					}, 1032, ["disabled"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
						_: 2
					}, 1024)], 2);
				}), 128))], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "small",
					align: "left"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, __props.description]])]),
					_: 1
				}),
				renderSlot(_ctx.$slots, "customContent")
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInfoAccordion/InfoAccordion.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_j75km_388";
var header = "_header_j75km_392";
var expanded = "_expanded_j75km_401";
var accordionItems = "_accordionItems_j75km_405";
var accordionItem = "_accordionItem_j75km_405";
var description = "_description_j75km_417";
var shimmer = "_shimmer_j75km_1";
var spin = "_spin_j75km_1";
var opacityPulse = "_opacityPulse_j75km_1";
var popoverIn = "_popoverIn_j75km_1";
var fadeIn = "_fadeIn_j75km_1";
var collapsibleSlideDown = "_collapsibleSlideDown_j75km_1";
var collapsibleSlideUp = "_collapsibleSlideUp_j75km_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_j75km_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_j75km_1";
var blurSwapIn = "_blurSwapIn_j75km_1";
var blurSwapOut = "_blurSwapOut_j75km_1";
var pulseGlow = "_pulseGlow_j75km_1";
var pulseGlowDelayed = "_pulseGlowDelayed_j75km_1";
var fade = "_fade_j75km_1";
var fadeInUp = "_fadeInUp_j75km_1";
var fadeInDown = "_fadeInDown_j75km_1";
var fadeInLeft = "_fadeInLeft_j75km_1";
var fadeInRight = "_fadeInRight_j75km_1";
var fadeOut = "_fadeOut_j75km_1";
var fadeOutDown = "_fadeOutDown_j75km_1";
var fadeOutUp = "_fadeOutUp_j75km_1";
var fadeOutLeft = "_fadeOutLeft_j75km_1";
var fadeOutRight = "_fadeOutRight_j75km_1";
var ping = "_ping_j75km_1";
var blinkBackground = "_blinkBackground_j75km_1";
var typingBlink = "_typingBlink_j75km_1";
var InfoAccordion_vue_vue_type_style_index_0_lang_module_default = {
	container,
	header,
	expanded,
	accordionItems,
	accordionItem,
	description,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_j75km_1",
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
//#region ../@n8n/design-system/src/components/N8nInfoAccordion/index.ts
var N8nInfoAccordion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InfoAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InfoAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInfoAccordion_default as t };
