import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bn as normalizeStyle, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, ot as resolveDirective, q as onBeforeUnmount, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Tooltip_default } from "./Tooltip-Dttq7ldI.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
//#region ../@n8n/design-system/src/components/N8nEmptyState/EmptyStateIconCards.vue?vue&type=script&setup=true&lang.ts
var FADE_MS = 300;
var STAGGER_MS = 1500;
var CYCLE_MS = 3e3;
var EmptyStateIconCards_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nEmptyStateIconCards",
	__name: "EmptyStateIconCards",
	props: {
		centerIcon: {},
		sideIcons: {},
		animated: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const count = computed(() => props.sideIcons.length);
		const leftIndex = ref(0);
		const rightIndex = ref(Math.floor(props.sideIcons.length / 2));
		const leftFading = ref(false);
		const rightFading = ref(false);
		const leftIcon = computed(() => count.value > 0 ? props.sideIcons[leftIndex.value % count.value] : void 0);
		const rightIcon = computed(() => count.value > 0 ? props.sideIcons[rightIndex.value % count.value] : void 0);
		const isIconName = (icon) => typeof icon === "string";
		const prefersReducedMotion = () => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let cycleTimer = 0;
		let staggerTimer = 0;
		let leftSwapTimer = 0;
		let rightSwapTimer = 0;
		const swapLeft = () => {
			leftFading.value = true;
			leftSwapTimer = window.setTimeout(() => {
				leftIndex.value = (leftIndex.value + 1) % count.value;
				leftFading.value = false;
			}, FADE_MS);
		};
		const swapRight = () => {
			rightFading.value = true;
			rightSwapTimer = window.setTimeout(() => {
				rightIndex.value = (rightIndex.value + 1) % count.value;
				rightFading.value = false;
			}, FADE_MS);
		};
		const stopCycling = () => {
			window.clearInterval(cycleTimer);
			window.clearTimeout(staggerTimer);
			window.clearTimeout(leftSwapTimer);
			window.clearTimeout(rightSwapTimer);
		};
		const shouldCycle = computed(() => props.animated && count.value >= 3);
		const startCycling = () => {
			stopCycling();
			leftIndex.value = 0;
			rightIndex.value = shouldCycle.value ? Math.floor(count.value / 2) : count.value > 1 ? 1 : 0;
			leftFading.value = false;
			rightFading.value = false;
			if (!shouldCycle.value || prefersReducedMotion()) return;
			cycleTimer = window.setInterval(() => {
				swapLeft();
				staggerTimer = window.setTimeout(swapRight, STAGGER_MS);
			}, CYCLE_MS);
		};
		onMounted(startCycling);
		watch([count, () => props.animated], startCycling);
		onBeforeUnmount(stopCycling);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.cards),
				style: normalizeStyle({ "--empty-state-icon-cards--fade-duration": `${FADE_MS}ms` }),
				"aria-hidden": "true"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [leftIcon.value !== void 0 ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.sideIcon, { [_ctx.$style.fading]: leftFading.value }])
				}, [isIconName(leftIcon.value) ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: leftIcon.value
				}, null, 8, ["icon"])) : (openBlock(), createBlock(resolveDynamicComponent(leftIcon.value), { key: 1 }))], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [createVNode(unref(N8nIcon_default), { icon: __props.centerIcon }, null, 8, ["icon"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [rightIcon.value !== void 0 ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.sideIcon, { [_ctx.$style.fading]: rightFading.value }])
				}, [isIconName(rightIcon.value) ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: rightIcon.value
				}, null, 8, ["icon"])) : (openBlock(), createBlock(resolveDynamicComponent(rightIcon.value), { key: 1 }))], 2)) : createCommentVNode("", true)], 2)
			], 6);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nEmptyState/EmptyStateIconCards.vue?vue&type=style&index=0&lang.module.scss
var cards = "_cards_4j8yq_388";
var card = "_card_4j8yq_388";
var sideIcon = "_sideIcon_4j8yq_420";
var fading = "_fading_4j8yq_432";
var shimmer$1 = "_shimmer_4j8yq_1";
var spin$1 = "_spin_4j8yq_1";
var opacityPulse$1 = "_opacityPulse_4j8yq_1";
var popoverIn$1 = "_popoverIn_4j8yq_1";
var fadeIn$1 = "_fadeIn_4j8yq_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_4j8yq_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_4j8yq_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_4j8yq_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_4j8yq_1";
var blurSwapIn$1 = "_blurSwapIn_4j8yq_1";
var blurSwapOut$1 = "_blurSwapOut_4j8yq_1";
var pulseGlow$1 = "_pulseGlow_4j8yq_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_4j8yq_1";
var fade$1 = "_fade_4j8yq_1";
var fadeInUp$1 = "_fadeInUp_4j8yq_1";
var fadeInDown$1 = "_fadeInDown_4j8yq_1";
var fadeInLeft$1 = "_fadeInLeft_4j8yq_1";
var fadeInRight$1 = "_fadeInRight_4j8yq_1";
var fadeOut$1 = "_fadeOut_4j8yq_1";
var fadeOutDown$1 = "_fadeOutDown_4j8yq_1";
var fadeOutUp$1 = "_fadeOutUp_4j8yq_1";
var fadeOutLeft$1 = "_fadeOutLeft_4j8yq_1";
var fadeOutRight$1 = "_fadeOutRight_4j8yq_1";
var ping$1 = "_ping_4j8yq_1";
var blinkBackground$1 = "_blinkBackground_4j8yq_1";
var typingBlink$1 = "_typingBlink_4j8yq_1";
var EmptyStateIconCards_vue_vue_type_style_index_0_lang_module_default = {
	cards,
	card,
	sideIcon,
	fading,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_4j8yq_1",
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
var EmptyStateIconCards_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EmptyStateIconCards_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EmptyStateIconCards_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nEmptyState/EmptyState.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 2 };
var _hoisted_2 = { size: "small" };
var EmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nEmptyState",
	__name: "EmptyState",
	props: {
		icon: {},
		heading: {},
		buttonText: {},
		buttonVariant: {},
		buttonDisabled: { type: Boolean },
		buttonIcon: { default: void 0 },
		description: {},
		calloutText: {},
		calloutTheme: { default: "info" },
		calloutIcon: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(["n8n-empty-state", _ctx.$style.container]),
				"data-test-id": "empty-state"
			}, [
				__props.icon ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.icon)
				}, [__props.icon.type === "cards" ? (openBlock(), createBlock(EmptyStateIconCards_default, {
					key: 0,
					"center-icon": __props.icon.center,
					"side-icons": __props.icon.sides,
					animated: __props.icon.animated ?? true
				}, null, 8, [
					"center-icon",
					"side-icons",
					"animated"
				])) : __props.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: __props.icon.value,
					size: 40,
					"stroke-width": 1.5,
					color: "foreground-xdark"
				}, null, 8, ["icon"])) : (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(__props.icon.value), 1))], 2)) : createCommentVNode("", true),
				__props.heading || _ctx.$slots.heading || __props.description ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.text)
				}, [__props.heading || _ctx.$slots.heading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.heading)
				}, [createVNode(unref(N8nHeading_default), {
					size: "xlarge",
					align: "center"
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "heading", {}, () => [createTextVNode(toDisplayString(__props.heading), 1)])]),
					_: 3
				})], 2)) : createCommentVNode("", true), __props.description ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.description),
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("descriptionClick", $event))
				}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, __props.description]])])]),
					_: 3
				})], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				__props.buttonText ? (openBlock(), createBlock(Tooltip_default, {
					key: 2,
					disabled: !__props.buttonDisabled
				}, {
					content: withCtx(() => [renderSlot(_ctx.$slots, "disabledButtonTooltip")]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						label: __props.buttonText,
						variant: __props.buttonVariant,
						disabled: __props.buttonDisabled,
						icon: __props.buttonIcon,
						size: "large",
						role: "button",
						onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("click:button", $event))
					}, null, 8, [
						"label",
						"variant",
						"disabled",
						"icon"
					])]),
					_: 3
				}, 8, ["disabled"])) : createCommentVNode("", true),
				_ctx.$slots.additionalContent ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style["additional-content"])
				}, [renderSlot(_ctx.$slots, "additionalContent")], 2)) : createCommentVNode("", true),
				__props.calloutText ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 4,
					theme: __props.calloutTheme,
					icon: __props.calloutIcon,
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [withDirectives(createBaseVNode("span", _hoisted_2, null, 512), [[_directive_n8n_html, __props.calloutText]])]),
						_: 1
					})]),
					_: 1
				}, 8, [
					"theme",
					"icon",
					"class"
				])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nEmptyState/EmptyState.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_142c1_388";
var icon = "_icon_142c1_398";
var text = "_text_142c1_402";
var heading = "_heading_142c1_409";
var description = "_description_142c1_413";
var callout = "_callout_142c1_418";
var shimmer = "_shimmer_142c1_1";
var spin = "_spin_142c1_1";
var opacityPulse = "_opacityPulse_142c1_1";
var popoverIn = "_popoverIn_142c1_1";
var fadeIn = "_fadeIn_142c1_1";
var collapsibleSlideDown = "_collapsibleSlideDown_142c1_1";
var collapsibleSlideUp = "_collapsibleSlideUp_142c1_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_142c1_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_142c1_1";
var blurSwapIn = "_blurSwapIn_142c1_1";
var blurSwapOut = "_blurSwapOut_142c1_1";
var pulseGlow = "_pulseGlow_142c1_1";
var pulseGlowDelayed = "_pulseGlowDelayed_142c1_1";
var fade = "_fade_142c1_1";
var fadeInUp = "_fadeInUp_142c1_1";
var fadeInDown = "_fadeInDown_142c1_1";
var fadeInLeft = "_fadeInLeft_142c1_1";
var fadeInRight = "_fadeInRight_142c1_1";
var fadeOut = "_fadeOut_142c1_1";
var fadeOutDown = "_fadeOutDown_142c1_1";
var fadeOutUp = "_fadeOutUp_142c1_1";
var fadeOutLeft = "_fadeOutLeft_142c1_1";
var fadeOutRight = "_fadeOutRight_142c1_1";
var ping = "_ping_142c1_1";
var blinkBackground = "_blinkBackground_142c1_1";
var typingBlink = "_typingBlink_142c1_1";
var EmptyState_vue_vue_type_style_index_0_lang_module_default = {
	container,
	icon,
	text,
	heading,
	description,
	callout,
	"additional-content": "_additional-content_142c1_423",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_142c1_1",
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
//#region ../@n8n/design-system/src/components/N8nEmptyState/index.ts
var N8nEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nEmptyState_default as t };
