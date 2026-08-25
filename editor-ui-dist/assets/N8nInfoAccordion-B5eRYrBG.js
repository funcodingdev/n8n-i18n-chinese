import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, ot as resolveDirective, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as createEventBus } from "./event-bus-CWhIcyjm.js";
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
var InfoAccordion_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_ghcz0_125",
	header: "_header_ghcz0_129",
	expanded: "_expanded_ghcz0_138",
	accordionItems: "_accordionItems_ghcz0_142",
	accordionItem: "_accordionItem_ghcz0_142",
	description: "_description_ghcz0_154"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nInfoAccordion/index.ts
var N8nInfoAccordion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InfoAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InfoAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInfoAccordion_default as t };
