import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, lt as useAttrs, n as Transition, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
//#region ../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
//#endregion
//#region ../@n8n/design-system/src/utils/cn.ts
/** NOTE (@heymynameisrob): This function is used to merge class names */
function cn(...inputs) {
	return clsx(inputs);
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nButton/Button.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 1 };
var Button_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nButton",
	inheritAttrs: false,
	__name: "Button",
	props: {
		variant: { default: "solid" },
		size: { default: "medium" },
		href: {},
		loading: {
			type: Boolean,
			default: false
		},
		iconOnly: { type: Boolean },
		disabled: {
			type: Boolean,
			default: false
		},
		class: { type: [
			Array,
			Object,
			String,
			Number,
			null,
			Boolean
		] },
		icon: {},
		iconSize: {},
		label: {}
	},
	setup(__props) {
		const $style = useCssModule();
		const attrs = useAttrs();
		const props = __props;
		const effectiveSize = computed(() => {
			if (props.size === "mini" || props.size === "xmini") return "xsmall";
			return props.size;
		});
		const effectiveVariant = computed(() => {
			if (props.variant === "highlight") return "ghost";
			if (props.variant === "highlight-fill") return "ghost";
			return props.variant;
		});
		const computedIconSize = computed(() => {
			if (props.iconSize) return props.iconSize;
			if (effectiveSize.value === "xsmall") return "xsmall";
			return effectiveSize.value;
		});
		const componentTag = computed(() => {
			if (props.href) return "a";
			return "button";
		});
		const buttonType = computed(() => {
			if (componentTag.value === "a") return void 0;
			return attrs.type ?? "button";
		});
		const isDisabled = computed(() => props.disabled || props.loading);
		const classes = computed(() => cn("button", $style.button, $style[effectiveVariant.value], $style[effectiveSize.value], props.loading && $style.loading, props.iconOnly && $style.iconOnly, props.disabled && $style.disabled, isDisabled.value && "is-disabled", props.class));
		const handleClick = (event) => {
			if (props.href && isDisabled.value) event.preventDefault();
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(componentTag.value), mergeProps(unref(attrs), {
				type: buttonType.value,
				href: __props.href,
				rel: __props.href ? "nofollow noopener noreferrer" : void 0,
				disabled: componentTag.value === "button" ? isDisabled.value || void 0 : void 0,
				"aria-disabled": isDisabled.value || void 0,
				"aria-busy": __props.loading || void 0,
				tabindex: componentTag.value === "a" && isDisabled.value ? -1 : unref(attrs).tabindex,
				class: classes.value,
				"data-icon-only": __props.iconOnly ? "true" : void 0,
				"aria-live": "polite",
				onClick: handleClick
			}), {
				default: withCtx(() => [createVNode(Transition, { name: "n8n-button-fade" }, {
					default: withCtx(() => [__props.loading ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(unref($style)["loading-container"])
					}, [createBaseVNode("div", { class: normalizeClass([unref($style)["loading-spinner"], "n8n-spinner"]) }, [createVNode(unref(N8nIcon_default), {
						icon: "loader",
						size: computedIconSize.value,
						"transform-origin": "center"
					}, null, 8, ["size"])], 2)], 2)) : createCommentVNode("", true)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(unref($style)["button-inner"]) }, [!__props.loading ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [__props.icon && !__props.loading ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: __props.icon,
					size: computedIconSize.value
				}, null, 8, ["icon", "size"])) : createCommentVNode("", true)]) : createCommentVNode("", true), __props.label ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(__props.label), 1)) : renderSlot(_ctx.$slots, "default", { key: 2 })], 2)]),
				_: 3
			}, 16, [
				"type",
				"href",
				"rel",
				"disabled",
				"aria-disabled",
				"aria-busy",
				"tabindex",
				"class",
				"data-icon-only"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nButton/Button.vue?vue&type=style&index=1&lang.module.scss
var button = "_button_1k6j8_388";
var xsmall = "_xsmall_1k6j8_440";
var small = "_small_1k6j8_446";
var medium = "_medium_1k6j8_452";
var large = "_large_1k6j8_458";
var xlarge = "_xlarge_1k6j8_464";
var solid = "_solid_1k6j8_470";
var subtle = "_subtle_1k6j8_485";
var outline = "_outline_1k6j8_513";
var ghost = "_ghost_1k6j8_528";
var destructive = "_destructive_1k6j8_535";
var success = "_success_1k6j8_559";
var disabled = "_disabled_1k6j8_586";
var loading = "_loading_1k6j8_594";
var iconOnly = "_iconOnly_1k6j8_597";
var spin = "_spin_1k6j8_1";
var shimmer = "_shimmer_1k6j8_1";
var opacityPulse = "_opacityPulse_1k6j8_1";
var popoverIn = "_popoverIn_1k6j8_1";
var fadeIn = "_fadeIn_1k6j8_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1k6j8_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1k6j8_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1k6j8_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1k6j8_1";
var blurSwapIn = "_blurSwapIn_1k6j8_1";
var blurSwapOut = "_blurSwapOut_1k6j8_1";
var pulseGlow = "_pulseGlow_1k6j8_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1k6j8_1";
var fade = "_fade_1k6j8_1";
var fadeInUp = "_fadeInUp_1k6j8_1";
var fadeInDown = "_fadeInDown_1k6j8_1";
var fadeInLeft = "_fadeInLeft_1k6j8_1";
var fadeInRight = "_fadeInRight_1k6j8_1";
var fadeOut = "_fadeOut_1k6j8_1";
var fadeOutDown = "_fadeOutDown_1k6j8_1";
var fadeOutUp = "_fadeOutUp_1k6j8_1";
var fadeOutLeft = "_fadeOutLeft_1k6j8_1";
var fadeOutRight = "_fadeOutRight_1k6j8_1";
var ping = "_ping_1k6j8_1";
var blinkBackground = "_blinkBackground_1k6j8_1";
var typingBlink = "_typingBlink_1k6j8_1";
var Button_vue_vue_type_style_index_1_lang_module_default = {
	button,
	xsmall,
	small,
	medium,
	large,
	xlarge,
	solid,
	subtle,
	outline,
	ghost,
	destructive,
	success,
	disabled,
	loading,
	iconOnly,
	"loading-container": "_loading-container_1k6j8_607",
	"button-inner": "_button-inner_1k6j8_614",
	"loading-spinner": "_loading-spinner_1k6j8_632",
	spin,
	shimmer,
	"skeleton-pulse": "_skeleton-pulse_1k6j8_1",
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
var Button_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Button_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Button_vue_vue_type_style_index_1_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nButton/index.ts
var N8nButton_default = Button_default;
//#endregion
export { Button_default as n, cn as r, N8nButton_default as t };
