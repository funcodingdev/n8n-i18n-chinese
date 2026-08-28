import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, ot as resolveDirective, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as RouterLink } from "./vue-router-Dl3cOHxO.js";
import { t as Tag_default } from "./Tag-Dk91zsHc.js";
import { t as PreviewTag_default } from "./PreviewTag-CNtczTvi.js";
//#region ../@n8n/design-system/src/components/N8nTabs/Tabs.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["id", "data-test-id"];
var _hoisted_2 = ["onClick"];
var _hoisted_3 = ["href", "onClick"];
var _hoisted_4 = { key: 1 };
var _hoisted_5 = [
	"aria-selected",
	"aria-disabled",
	"onClick",
	"onKeydown"
];
var Tabs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Tabs",
	props: {
		modelValue: { default: void 0 },
		options: { default: () => [] },
		size: { default: "medium" },
		variant: { default: "legacy" },
		justified: {
			type: Boolean,
			default: false
		}
	},
	emits: ["tooltipClick", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const scrollPosition = ref(0);
		const canScrollRight = ref(false);
		const tabs = ref(void 0);
		let resizeObserver = null;
		const updateScrollState = () => {
			const container = tabs.value;
			if (!container) return;
			scrollPosition.value = container.scrollLeft;
			canScrollRight.value = container.scrollWidth - container.clientWidth > container.scrollLeft;
		};
		onMounted(() => {
			const container = tabs.value;
			if (!container) return;
			container.addEventListener("scroll", updateScrollState);
			resizeObserver = new ResizeObserver(updateScrollState);
			resizeObserver.observe(container);
			updateScrollState();
		});
		onUnmounted(() => {
			tabs.value?.removeEventListener("scroll", updateScrollState);
			resizeObserver?.disconnect();
		});
		/**
		* The observer only fires when the container itself resizes. Options that
		* arrive or change label after mount grow scrollWidth without touching it, so
		* the arrows would otherwise stay hidden until the next mount.
		*/
		watch(() => props.options, async () => {
			await nextTick();
			updateScrollState();
		}, { deep: true });
		const emit = __emit;
		const handleTooltipClick = (tab, event) => emit("tooltipClick", tab, event);
		const handleTabClick = (option) => {
			if (option.disabled) return;
			emit("update:modelValue", option.value);
		};
		const scroll = (left) => {
			const container = tabs.value;
			if (container) container.scrollBy({
				left,
				top: 0,
				behavior: "smooth"
			});
		};
		const scrollLeft = () => scroll(-50);
		const scrollRight = () => scroll(50);
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				"n8n-tabs",
				_ctx.$style.container,
				__props.size === "small" ? _ctx.$style.small : "",
				__props.variant === "modern" ? _ctx.$style.modern : "",
				__props.justified ? _ctx.$style.justified : ""
			]) }, [
				scrollPosition.value > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.back),
					onClick: scrollLeft
				}, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.positionIcon),
					icon: "chevron-left",
					size: "small"
				}, null, 8, ["class"])], 2)) : createCommentVNode("", true),
				canScrollRight.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.next),
					onClick: scrollRight
				}, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.positionIcon),
					icon: "chevron-right",
					size: "small"
				}, null, 8, ["class"])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", {
					ref_key: "tabs",
					ref: tabs,
					role: "tablist",
					class: normalizeClass(_ctx.$style.tabs)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
					return openBlock(), createElementBlock("div", {
						id: option.value.toString(),
						key: option.value,
						"data-test-id": `tab-${option.value.toString()}`,
						class: normalizeClass({ [_ctx.$style.alignRight]: option.align === "right" })
					}, [createVNode(unref(N8nTooltip_default), {
						disabled: !option.tooltip,
						placement: "bottom",
						"show-after": 100
					}, {
						content: withCtx(() => [withDirectives(createBaseVNode("div", { onClick: ($event) => handleTooltipClick(option.value, $event) }, null, 8, _hoisted_2), [[_directive_n8n_html, option.tooltip]])]),
						default: withCtx(() => [option.href && !option.disabled ? (openBlock(), createElementBlock("a", {
							key: 0,
							target: "_blank",
							href: option.href,
							rel: "noopener noreferrer",
							class: normalizeClass([
								_ctx.$style.link,
								_ctx.$style.tab,
								option.label ? "" : _ctx.$style.noText
							]),
							onClick: () => handleTabClick(option)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.externalLinkContent) }, [
							createTextVNode(toDisplayString(option.label) + " ", 1),
							createVNode(unref(N8nIcon_default), {
								class: normalizeClass(_ctx.$style.external),
								icon: option.icon ?? "external-link",
								size: "small"
							}, null, 8, ["class", "icon"]),
							option.preview ? (openBlock(), createBlock(PreviewTag_default, { key: 0 })) : createCommentVNode("", true),
							option.tag ? (openBlock(), createBlock(Tag_default, {
								key: 1,
								text: option.tag,
								clickable: false
							}, null, 8, ["text"])) : createCommentVNode("", true)
						], 2)], 10, _hoisted_3)) : option.to && !option.disabled ? (openBlock(), createBlock(unref(RouterLink), {
							key: 1,
							to: option.to,
							class: normalizeClass([_ctx.$style.tab, {
								[_ctx.$style.activeTab]: __props.modelValue === option.value,
								[_ctx.$style.noText]: !option.label
							}])
						}, {
							default: withCtx(() => [
								option.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
									key: 0,
									icon: option.icon,
									size: "medium"
								}, null, 8, ["icon"])) : createCommentVNode("", true),
								option.label ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(option.label), 1)) : createCommentVNode("", true),
								option.preview ? (openBlock(), createBlock(PreviewTag_default, { key: 2 })) : createCommentVNode("", true),
								option.tag ? (openBlock(), createBlock(Tag_default, {
									key: 3,
									text: option.tag,
									clickable: false
								}, null, 8, ["text"])) : createCommentVNode("", true)
							]),
							_: 2
						}, 1032, ["to", "class"])) : (openBlock(), createElementBlock("div", {
							key: 2,
							role: "tab",
							tabindex: "0",
							"aria-selected": __props.modelValue === option.value,
							class: normalizeClass({
								[_ctx.$style.tab]: true,
								[_ctx.$style.activeTab]: __props.modelValue === option.value,
								[_ctx.$style.noText]: !option.label,
								[_ctx.$style.dangerTab]: option.variant === "danger",
								[_ctx.$style.disabledTab]: option.disabled === true
							}),
							"aria-disabled": option.disabled || void 0,
							onClick: () => handleTabClick(option),
							onKeydown: [withKeys(withModifiers(() => handleTabClick(option), ["prevent"]), ["enter"]), withKeys(withModifiers(() => handleTabClick(option), ["prevent"]), ["space"])]
						}, [
							option.icon && option.iconPosition !== "right" ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 0,
								icon: option.icon,
								class: normalizeClass(_ctx.$style.icon),
								size: "small"
							}, null, 8, ["icon", "class"])) : createCommentVNode("", true),
							option.label ? (openBlock(), createElementBlock("span", {
								key: 1,
								class: normalizeClass(_ctx.$style.notificationContainer)
							}, [createTextVNode(toDisplayString(option.label) + " ", 1), option.notification ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.notification)
							}, null, 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
							option.icon && option.iconPosition === "right" ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 2,
								icon: option.icon,
								class: normalizeClass(_ctx.$style.icon),
								size: "small"
							}, null, 8, ["icon", "class"])) : createCommentVNode("", true),
							option.preview ? (openBlock(), createBlock(PreviewTag_default, { key: 3 })) : createCommentVNode("", true),
							option.tag ? (openBlock(), createBlock(Tag_default, {
								key: 4,
								text: option.tag,
								clickable: false
							}, null, 8, ["text"])) : createCommentVNode("", true)
						], 42, _hoisted_5))]),
						_: 2
					}, 1032, ["disabled"])], 10, _hoisted_1);
				}), 128))], 2)
			], 2);
		};
	}
});
var Tabs_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_ybg0g_125",
	modern: "_modern_ybg0g_131",
	tabs: "_tabs_ybg0g_136",
	small: "_small_ybg0g_154",
	tab: "_tab_ybg0g_136",
	activeTab: "_activeTab_ybg0g_205",
	justified: "_justified_ybg0g_214",
	notificationContainer: "_notificationContainer_ybg0g_222",
	notification: "_notification_ybg0g_222",
	alignRight: "_alignRight_ybg0g_232",
	link: "_link_ybg0g_236",
	external: "_external_ybg0g_244",
	noText: "_noText_ybg0g_248",
	externalLinkContent: "_externalLinkContent_ybg0g_253",
	icon: "_icon_ybg0g_262",
	dangerTab: "_dangerTab_ybg0g_266",
	disabledTab: "_disabledTab_ybg0g_273",
	button: "_button_ybg0g_281",
	back: "_back_ybg0g_313 _tab_ybg0g_136 _button_ybg0g_281",
	next: "_next_ybg0g_319 _tab_ybg0g_136 _button_ybg0g_281",
	positionIcon: "_positionIcon_ybg0g_325"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nTabs/index.ts
var N8nTabs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Tabs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Tabs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nTabs_default as t };
