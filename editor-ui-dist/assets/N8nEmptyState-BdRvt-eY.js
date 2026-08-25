import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bn as normalizeStyle, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, ot as resolveDirective, q as onBeforeUnmount, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { n as Tooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as N8nCallout_default } from "./N8nCallout-DqmF6S4S.js";
import { t as N8nHeading_default } from "./N8nHeading-BWV9gsOh.js";
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
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [createVNode(unref(N8nIcon_default), {
					icon: __props.centerIcon,
					color: "text-light"
				}, null, 8, ["icon"])], 2),
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
var EmptyStateIconCards_vue_vue_type_style_index_0_lang_module_default = {
	cards: "_cards_163qf_125",
	card: "_card_163qf_125",
	sideIcon: "_sideIcon_163qf_157",
	fading: "_fading_163qf_169"
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
var EmptyState_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_7delj_125",
	icon: "_icon_7delj_135",
	text: "_text_7delj_139",
	heading: "_heading_7delj_146",
	description: "_description_7delj_150",
	callout: "_callout_7delj_155",
	"additional-content": "_additional-content_7delj_160"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nEmptyState/index.ts
var N8nEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nEmptyState_default as t };
