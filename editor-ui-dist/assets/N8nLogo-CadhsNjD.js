import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, c as useCssModule, it as renderSlot, j as createVNode, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { g as useFavicon } from "./dist-BKkqSB6h.js";
//#region ../@n8n/design-system/src/components/N8nLogo/logo-icon.svg
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "32",
	height: "26",
	fill: "none",
	viewBox: "0 0 32 26"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "#EA4B71",
		"fill-rule": "evenodd",
		d: "M27.2 11.396a3.2 3.2 0 0 1-3.1-2.4h-3.667a1.6 1.6 0 0 0-1.578 1.336l-.132.79a3.2 3.2 0 0 1-1.04 1.874 3.2 3.2 0 0 1 1.04 1.874l.132.789a1.6 1.6 0 0 0 1.578 1.336h.468a3.201 3.201 0 1 1-.001 1.6h-.467a3.2 3.2 0 0 1-3.156-2.673l-.132-.79a1.6 1.6 0 0 0-1.578-1.336h-1.268a3.2 3.2 0 0 1-6.198 0H6.299a3.2 3.2 0 1 1 .001-1.6h1.8a3.2 3.2 0 0 1 6.2 0h1.267a1.6 1.6 0 0 0 1.578-1.338l.132-.79a3.2 3.2 0 0 1 3.156-2.672h3.668a3.201 3.201 0 0 1 6.299.8 3.2 3.2 0 0 1-3.2 3.2m0-1.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m-24 4.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m9.6-1.6a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0m12.8 4.8a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0",
		"clip-rule": "evenodd"
	}, null, -1)])]);
}
var logo_icon_default = { render: render$1 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nLogo/logo-text.svg
var _hoisted_1 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "26",
	height: "26",
	fill: "none",
	viewBox: "0 0 26 26"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "#101330",
		"fill-rule": "evenodd",
		d: "M15.002 12.99v-.076c.558-.28 1.116-.762 1.116-1.716 0-1.372-1.13-2.198-2.69-2.198-1.598 0-2.74.877-2.74 2.224 0 .915.533 1.41 1.116 1.69v.076a2.16 2.16 0 0 0-1.42 2.059c0 1.385 1.141 2.351 3.032 2.351 1.89 0 2.994-.966 2.994-2.351a2.16 2.16 0 0 0-1.408-2.059m-1.587-2.82c.635 0 1.104.406 1.104 1.092s-.482 1.093-1.103 1.093c-.622 0-1.142-.407-1.142-1.093 0-.699.495-1.093 1.142-1.093m0 6.01c-.735 0-1.332-.47-1.332-1.27 0-.725.495-1.272 1.32-1.272.812 0 1.307.534 1.307 1.297 0 .775-.572 1.245-1.295 1.245",
		"clip-rule": "evenodd"
	}, null, -1), createBaseVNode("path", {
		fill: "#101330",
		d: "M18.367 17.272h1.624V13.83c0-1.131.685-1.627 1.46-1.627.76 0 1.357.509 1.357 1.55v3.52h1.624v-3.851c0-1.664-.964-2.63-2.474-2.63-.952 0-1.485.381-1.865.877h-.102l-.14-.75h-1.484zm-14.376 0H2.367V10.92h1.485l.14.75h.1c.381-.496.914-.877 1.866-.877 1.51 0 2.474.966 2.474 2.63v3.85H6.808v-3.521c0-1.041-.596-1.55-1.358-1.55-.774 0-1.459.496-1.459 1.627z"
	}, null, -1)])]);
}
var logo_text_default = { render };
//#endregion
//#region ../@n8n/design-system/src/components/N8nLogo/Logo.vue?vue&type=script&setup=true&lang.ts
var Logo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Logo",
	props: {
		size: {},
		collapsed: { type: Boolean },
		releaseChannel: {}
	},
	setup(__props) {
		const props = __props;
		const { size, releaseChannel } = props;
		const showLogoText = computed(() => {
			if (size === "large") return true;
			return !props.collapsed;
		});
		const $style = useCssModule();
		const containerClasses = computed(() => {
			if (size === "large") return [$style.logoContainer, $style.large];
			return [
				$style.logoContainer,
				$style.sidebar,
				props.collapsed ? $style.sidebarCollapsed : $style.sidebarExpanded
			];
		});
		const svg = useTemplateRef("logo");
		onMounted(() => {
			if (!releaseChannel || releaseChannel === "stable" || !("createObjectURL" in URL)) return;
			const logoEl = svg.value.$el;
			const logoColor = releaseChannel === "dev" ? "#838383" : "#E9984B";
			logoEl.querySelector("path")?.setAttribute("fill", logoColor);
			const blob = new Blob([logoEl.outerHTML], { type: "image/svg+xml" });
			useFavicon(URL.createObjectURL(blob));
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(containerClasses.value),
				"data-test-id": "n8n-logo"
			}, [
				createVNode(unref(logo_icon_default), {
					ref: "logo",
					class: normalizeClass(unref($style).logo)
				}, null, 8, ["class"]),
				showLogoText.value ? (openBlock(), createBlock(unref(logo_text_default), {
					key: 0,
					class: normalizeClass(unref($style).logoText)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "default")
			], 2);
		};
	}
});
var Logo_vue_vue_type_style_index_0_lang_module_default = {
	logoContainer: "_logoContainer_bk7tg_125",
	logoText: "_logoText_bk7tg_131",
	large: "_large_bk7tg_138",
	logo: "_logo_bk7tg_125",
	sidebarExpanded: "_sidebarExpanded_bk7tg_151",
	sidebarCollapsed: "_sidebarCollapsed_bk7tg_155"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nLogo/index.ts
var N8nLogo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Logo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Logo_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nLogo_default as t };
