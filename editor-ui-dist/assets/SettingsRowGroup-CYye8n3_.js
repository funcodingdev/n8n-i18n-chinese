import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, _ as Fragment, bn as normalizeStyle, bt as withCtx, dt as useModel, ft as useSlots, gt as watch, it as renderSlot, j as createVNode, st as resolveDynamicComponent, ut as useId, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { S as useResizeObserver } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
//#region ../@n8n/design-system/src/components/N8nSettingsRow/SettingsRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-layout"];
var _hoisted_2 = ["aria-expanded", "aria-label"];
var _hoisted_3 = ["data-expanded"];
var SettingsRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsRow",
	__name: "SettingsRow",
	props: /* @__PURE__ */ mergeModels({
		title: { default: void 0 },
		description: { default: void 0 },
		layout: { default: "horizontal" },
		maxDescriptionLines: { default: 2 },
		truncateTitle: {
			type: Boolean,
			default: true
		},
		actionMaxWidth: {
			type: [String, Boolean],
			default: "50%"
		},
		actionFill: {
			type: Boolean,
			default: false
		},
		showDivider: {
			type: Boolean,
			default: true
		},
		showVisual: {
			type: Boolean,
			default: false
		},
		expandable: {
			type: Boolean,
			default: false
		},
		disclosure: {
			type: Boolean,
			default: true
		},
		expandLabel: { default: "View more" },
		collapseLabel: { default: "Show less" },
		hoverable: {
			type: Boolean,
			default: false
		},
		clickable: {
			type: Boolean,
			default: false
		},
		revealActionsOnHover: {
			type: Boolean,
			default: false
		}
	}, {
		"modelValue": {
			type: Boolean,
			default: false
		},
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["click"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const slots = useSlots();
		const expandRegionId = `settings-row-expand-${useId()}`;
		const expanded = useModel(__props, "modelValue");
		const isExpanded = computed(() => props.expandable && expanded.value);
		const hasExpandedOnce = ref(isExpanded.value);
		watch(isExpanded, (value) => {
			if (value) hasExpandedOnce.value = true;
		});
		const disclosureLabel = computed(() => isExpanded.value ? props.collapseLabel : props.expandLabel);
		function toggleExpanded(event) {
			event.stopPropagation();
			expanded.value = !expanded.value;
		}
		const descriptionLines = computed(() => Math.min(Math.max(props.maxDescriptionLines, 1), 3));
		const descriptionRef = ref();
		const isDescriptionTruncated = ref(false);
		function getDescriptionEl() {
			const el = descriptionRef.value?.$el;
			return el instanceof HTMLElement ? el : null;
		}
		function measureDescriptionTruncation() {
			const el = getDescriptionEl();
			isDescriptionTruncated.value = el ? el.scrollHeight - el.clientHeight > 1 : false;
		}
		useResizeObserver(descriptionRef, measureDescriptionTruncation);
		watch(() => [
			getDescriptionEl(),
			props.description,
			descriptionLines.value
		], measureDescriptionTruncation, {
			flush: "post",
			immediate: true
		});
		const showVisualSlot = computed(() => props.showVisual || Boolean(slots.visual));
		const actionStyle = computed(() => {
			if (props.layout !== "horizontal" || props.actionMaxWidth === false) return;
			return { maxWidth: props.actionMaxWidth };
		});
		const interactiveAttrs = computed(() => props.clickable ? {
			role: "button",
			tabindex: 0,
			"aria-label": props.title || void 0
		} : {});
		function isFromNestedInteractive(event) {
			const { target, currentTarget } = event;
			if (!(target instanceof Element) || !(currentTarget instanceof Element)) return false;
			const interactive = target.closest("button, a[href], input, select, textarea, [tabindex]");
			return interactive !== null && interactive !== currentTarget;
		}
		function onActivate(event) {
			if (props.clickable && !isFromNestedInteractive(event)) emit("click", event);
		}
		function onKeydown(event) {
			if (!props.clickable) return;
			if (event.target !== event.currentTarget) return;
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				emit("click", event);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({
				class: [
					_ctx.$style.row,
					_ctx.$style[__props.layout],
					{
						[_ctx.$style.hoverable]: __props.hoverable,
						[_ctx.$style.clickable]: __props.clickable
					}
				],
				"data-layout": __props.layout
			}, interactiveAttrs.value, {
				onClick: onActivate,
				onKeydown
			}), [
				__props.layout === "custom" ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [showVisualSlot.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.visual),
						"data-test-id": "settings-row-visual"
					}, [renderSlot(_ctx.$slots, "visual")], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [renderSlot(_ctx.$slots, "info", {}, () => [__props.title ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass([_ctx.$style.title, { [_ctx.$style.truncate]: __props.truncateTitle }]),
						bold: "",
						size: "medium",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), __props.description ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						content: __props.description,
						disabled: !isDescriptionTruncated.value,
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							ref_key: "descriptionRef",
							ref: descriptionRef,
							class: normalizeClass(_ctx.$style.description),
							style: normalizeStyle({ "--settings-row--description-lines": descriptionLines.value }),
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
							_: 1
						}, 8, ["class", "style"])]),
						_: 1
					}, 8, ["content", "disabled"])) : createCommentVNode("", true)])], 2)], 2),
					slots.action ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass([_ctx.$style.action, {
							[_ctx.$style.revealActions]: __props.revealActionsOnHover,
							[_ctx.$style.actionFill]: __props.actionFill && __props.layout === "horizontal"
						}]),
						style: normalizeStyle(actionStyle.value),
						onClick: _cache[0] || (_cache[0] = ($event) => __props.revealActionsOnHover ? $event.stopPropagation() : void 0)
					}, [renderSlot(_ctx.$slots, "action")], 6)) : createCommentVNode("", true),
					__props.expandable && __props.disclosure ? (openBlock(), createElementBlock("button", {
						key: 1,
						type: "button",
						class: normalizeClass(_ctx.$style.disclosure),
						"aria-expanded": isExpanded.value,
						"aria-controls": expandRegionId,
						"aria-label": __props.title ? `Toggle ${__props.title}` : "Toggle details",
						onClick: toggleExpanded
					}, [disclosureLabel.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.disclosureLabel),
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(disclosureLabel.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style.disclosureIcon),
						icon: "chevron-down"
					}, null, 8, ["class"])], 10, _hoisted_2)) : createCommentVNode("", true)
				], 64)),
				__props.expandable ? (openBlock(), createElementBlock("div", {
					key: 2,
					id: expandRegionId,
					class: normalizeClass(_ctx.$style.expandRegion),
					"data-expanded": isExpanded.value,
					role: "region"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.expandInner) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.expandContent) }, [hasExpandedOnce.value ? renderSlot(_ctx.$slots, "expanded", { key: 0 }) : createCommentVNode("", true)], 2)], 2)], 10, _hoisted_3)) : createCommentVNode("", true),
				__props.showDivider ? (openBlock(), createElementBlock("span", {
					key: 3,
					class: normalizeClass(_ctx.$style.divider),
					"data-test-id": "settings-row-divider",
					"aria-hidden": "true"
				}, null, 2)) : createCommentVNode("", true)
			], 16, _hoisted_1);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSettingsRow/SettingsRow.vue?vue&type=style&index=0&lang.module.scss
var row = "_row_1p4wi_389";
var hoverable = "_hoverable_1p4wi_397";
var clickable = "_clickable_1p4wi_398";
var horizontal = "_horizontal_1p4wi_420";
var vertical = "_vertical_1p4wi_429";
var custom = "_custom_1p4wi_435";
var info = "_info_1p4wi_441";
var visual = "_visual_1p4wi_464";
var text = "_text_1p4wi_477";
var title = "_title_1p4wi_486";
var truncate = "_truncate_1p4wi_486";
var description = "_description_1p4wi_493";
var action = "_action_1p4wi_500";
var actionFill = "_actionFill_1p4wi_513";
var revealActions = "_revealActions_1p4wi_522";
var disclosure = "_disclosure_1p4wi_532";
var disclosureLabel = "_disclosureLabel_1p4wi_556";
var disclosureIcon = "_disclosureIcon_1p4wi_560";
var expandRegion = "_expandRegion_1p4wi_574";
var expandInner = "_expandInner_1p4wi_595";
var expandContent = "_expandContent_1p4wi_600";
var divider = "_divider_1p4wi_622";
var shimmer$1 = "_shimmer_1p4wi_1";
var spin$1 = "_spin_1p4wi_1";
var opacityPulse$1 = "_opacityPulse_1p4wi_1";
var popoverIn$1 = "_popoverIn_1p4wi_1";
var fadeIn$1 = "_fadeIn_1p4wi_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1p4wi_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1p4wi_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1p4wi_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1p4wi_1";
var blurSwapIn$1 = "_blurSwapIn_1p4wi_1";
var blurSwapOut$1 = "_blurSwapOut_1p4wi_1";
var pulseGlow$1 = "_pulseGlow_1p4wi_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1p4wi_1";
var fade$1 = "_fade_1p4wi_1";
var fadeInUp$1 = "_fadeInUp_1p4wi_1";
var fadeInDown$1 = "_fadeInDown_1p4wi_1";
var fadeInLeft$1 = "_fadeInLeft_1p4wi_1";
var fadeInRight$1 = "_fadeInRight_1p4wi_1";
var fadeOut$1 = "_fadeOut_1p4wi_1";
var fadeOutDown$1 = "_fadeOutDown_1p4wi_1";
var fadeOutUp$1 = "_fadeOutUp_1p4wi_1";
var fadeOutLeft$1 = "_fadeOutLeft_1p4wi_1";
var fadeOutRight$1 = "_fadeOutRight_1p4wi_1";
var ping$1 = "_ping_1p4wi_1";
var blinkBackground$1 = "_blinkBackground_1p4wi_1";
var typingBlink$1 = "_typingBlink_1p4wi_1";
var SettingsRow_vue_vue_type_style_index_0_lang_module_default = {
	row,
	hoverable,
	clickable,
	horizontal,
	vertical,
	custom,
	info,
	visual,
	text,
	title,
	truncate,
	description,
	action,
	actionFill,
	revealActions,
	disclosure,
	disclosureLabel,
	disclosureIcon,
	expandRegion,
	expandInner,
	expandContent,
	divider,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1p4wi_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var SettingsRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nSettingsRowGroup/SettingsRowGroup.vue?vue&type=script&setup=true&lang.ts
var SettingsRowGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsRowGroup",
	__name: "SettingsRowGroup",
	props: { tag: { default: "div" } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
				class: normalizeClass(_ctx.$style.group),
				"data-test-id": "settings-row-group"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSettingsRowGroup/SettingsRowGroup.vue?vue&type=style&index=0&lang.module.scss
var group = "_group_1j7es_388";
var shimmer = "_shimmer_1j7es_1";
var spin = "_spin_1j7es_1";
var opacityPulse = "_opacityPulse_1j7es_1";
var popoverIn = "_popoverIn_1j7es_1";
var fadeIn = "_fadeIn_1j7es_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1j7es_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1j7es_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1j7es_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1j7es_1";
var blurSwapIn = "_blurSwapIn_1j7es_1";
var blurSwapOut = "_blurSwapOut_1j7es_1";
var pulseGlow = "_pulseGlow_1j7es_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1j7es_1";
var fade = "_fade_1j7es_1";
var fadeInUp = "_fadeInUp_1j7es_1";
var fadeInDown = "_fadeInDown_1j7es_1";
var fadeInLeft = "_fadeInLeft_1j7es_1";
var fadeInRight = "_fadeInRight_1j7es_1";
var fadeOut = "_fadeOut_1j7es_1";
var fadeOutDown = "_fadeOutDown_1j7es_1";
var fadeOutUp = "_fadeOutUp_1j7es_1";
var fadeOutLeft = "_fadeOutLeft_1j7es_1";
var fadeOutRight = "_fadeOutRight_1j7es_1";
var ping = "_ping_1j7es_1";
var blinkBackground = "_blinkBackground_1j7es_1";
var typingBlink = "_typingBlink_1j7es_1";
var SettingsRowGroup_vue_vue_type_style_index_0_lang_module_default = {
	group,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1j7es_1",
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
var SettingsRowGroup_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsRowGroup_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsRowGroup_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsRow_default as n, SettingsRowGroup_default as t };
