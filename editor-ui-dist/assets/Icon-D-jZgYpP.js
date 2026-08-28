const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/node-icons-AMb9l94j.js","assets/vue.runtime.esm-bundler-DYHsQBZB.js","assets/chunk-CC9Q-vWm.js"])))=>i.map(i=>d[i]);
import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, Mt as markRaw, N as defineComponent, R as inject, S as computed, T as createCommentVNode, bn as normalizeStyle, c as useCssModule, gt as watch, k as createStaticVNode, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as __vitePreload } from "./preload-helper-CMc80dNB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nIcon/iconColor.ts
var colorMap = {
	primary: "--color--primary",
	secondary: "--color--secondary",
	"text-dark": "--color--text--shade-1",
	"text-base": "--color--text",
	"text-light": "--color--text--tint-1",
	"text-xlight": "--color--text--tint-2",
	danger: "--color--danger",
	success: "--color--success",
	warning: "--color--warning",
	"foreground-dark": "--color--foreground--shade-1",
	"foreground-xdark": "--color--foreground--shade-2"
};
/**
* Resolve an icon color to a CSS `color` value.
*
* Named `IconColor` tokens map to their design-system CSS variable; a raw CSS custom
* property (e.g. `--node--icon--color--blue`) is used directly. Anything else (no color,
* or an unknown non-variable value) yields `undefined` so no inline color is applied.
*/
function resolveIconColor(color) {
	if (!color) return void 0;
	if (color in colorMap) return `var(${colorMap[color]})`;
	if (color.startsWith("--")) return `var(${color})`;
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/anthropic.svg
var _hoisted_1$284 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xml:space": "preserve",
	id: "Layer_1",
	x: "0",
	y: "0",
	version: "1.1",
	viewBox: "0 0 92.2 65"
};
function render$283(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$284, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		d: "M66.5 0H52.4l25.7 65h14.1zM25.7 0 0 65h14.4l5.3-13.6h26.9L51.8 65h14.4L40.5 0zm-1.4 39.3 8.8-22.8 8.8 22.8z",
		style: { "fill": "#181818" }
	}, null, -1)])]);
}
var anthropic_default = { render: render$283 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/binary.svg
var _hoisted_1$283 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 12 12"
};
function render$282(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$283, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M1 .643C1 .288 1.275 0 1.614 0h2.454c.34 0 .614.288.614.643V4.5c0 .355-.275.643-.614.643H1.614C1.274 5.143 1 4.855 1 4.5zm1.227.643v2.571h1.228V1.286zM6.318.643c0-.355.275-.643.614-.643h1.227c.339 0 .614.288.614.643v3.214h.613c.34 0 .614.288.614.643s-.275.643-.614.643H6.932c-.34 0-.614-.288-.614-.643s.275-.643.614-.643h.613V1.286h-.613c-.34 0-.614-.288-.614-.643M1 7.5c0-.355.275-.643.614-.643H2.84c.339 0 .614.288.614.643v3.214h.613c.34 0 .614.288.614.643S4.407 12 4.068 12H1.614c-.34 0-.614-.288-.614-.643s.275-.643.614-.643h.613V8.143h-.613C1.274 8.143 1 7.855 1 7.5m5.318 0c0-.355.275-.643.614-.643h2.454c.34 0 .614.288.614.643v3.857c0 .355-.275.643-.614.643H6.932c-.34 0-.614-.288-.614-.643zm1.227.643v2.571h1.228V8.143z"
	}, null, -1)])]);
}
var binary_default = { render: render$282 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/bolt-filled.svg
var _hoisted_1$282 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$281(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$282, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		"fill-opacity": ".9",
		d: "M13.225 1.023a1.5 1.5 0 0 1 .866.096l.115.056.109.065a1.5 1.5 0 0 1 .506.551l.055.115.045.119a1.5 1.5 0 0 1 .023.87l-.01.039-1.92 6.02-.018.046H20a2 2 0 0 1 1.556 3.26l-.059.066-9.9 10.2a1.5 1.5 0 0 1-1.803.3 1.5 1.5 0 0 1-.738-1.721l.01-.04 1.92-6.019.017-.046H4a2.002 2.002 0 0 1-1.555-3.26l.058-.067 9.9-10.2c.22-.233.507-.392.823-.45",
		style: {
			"fill": "currentColor",
			"fill-opacity": ".9"
		}
	}, null, -1)])]);
}
var bolt_filled_default = { render: render$281 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/continue.svg
var _hoisted_1$281 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 512 512"
};
function render$280(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$281, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M224.975 49.429c17.138-17.139 44.919-17.139 62.057 0l175.546 175.546a43.8 43.8 0 0 1 9.347 13.817l.146.349q.125.298.243.598.1.25.197.5l.147.388q.133.356.261.716l.09.257q.141.407.275.818l.044.136a39 39 0 0 1 .306.988 43.9 43.9 0 0 1 1.802 12.473c0 12.497-5.225 23.774-13.608 31.767L287.032 462.578c-17.138 17.138-44.919 17.138-62.057 0s-17.139-44.92 0-62.059l100.618-100.618H80.458c-24.238 0-43.887-19.649-43.887-43.886s19.65-43.887 43.887-43.887h245.158L224.975 111.486c-17.139-17.138-17.139-44.919 0-62.057"
	}, null, -1)])]);
}
var continue_default = { render: render$280 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/discord.svg
var _hoisted_1$280 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24"
};
function render$279(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$280, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "#5865F2",
		d: "M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 13 13 0 0 0-.617-1.25.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13 13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10 10 0 0 0 .372-.292.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.332c-1.182 0-2.157-1.086-2.157-2.419s.956-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.42 0 1.332-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.086-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.42 0 1.332-.946 2.418-2.157 2.418"
	}, null, -1)])]);
}
var discord_default = { render: render$279 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/empty-output.svg
var _hoisted_1$279 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 512 512"
};
function render$278(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$279, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M209.675 387.718c20.945 10.711 30.794 35.749 22.073 58.141-9.306 23.886-36.221 35.695-60.107 26.389-29.106-11.34-56.354-28.746-79.744-52.137-20.47-20.47-36.356-43.894-47.607-68.932l-4.53-10.812-1.517-4.508c-6.284-22.673 5.511-46.874 27.906-55.599 22.392-8.721 47.431 1.129 58.141 22.073l1.945 4.338 2.735 6.453c6.714 14.943 16.204 28.982 28.568 41.346 14.132 14.132 30.44 24.54 47.799 31.304zM91.897 91.905c23.39-23.39 50.638-40.796 79.744-52.137l4.508-1.517c22.673-6.284 46.874 5.512 55.599 27.906 9.303 23.885-2.526 50.781-26.411 60.086-17.359 6.763-33.667 17.171-47.799 31.303-12.364 12.364-21.854 26.403-28.568 41.347l-2.735 6.453-1.945 4.337c-10.71 20.945-35.75 30.794-58.141 22.073-23.886-9.306-35.695-36.221-26.39-60.107 11.341-29.106 28.747-56.353 52.138-79.744M354.462 354.47c12.364-12.364 21.854-26.403 28.568-41.346l2.735-6.453 1.945-4.338c10.71-20.944 35.749-30.794 58.141-22.073 22.394 8.725 34.19 32.926 27.906 55.599l-1.517 4.508-4.53 10.812c-11.251 25.038-27.137 48.462-47.607 68.932-23.39 23.391-50.638 40.797-79.744 52.137-23.886 9.306-50.801-2.503-60.107-26.389-9.303-23.885 2.526-50.78 26.411-60.085l6.453-2.735c14.943-6.715 28.982-16.205 41.346-28.569m65.641-262.565c23.391 23.391 40.796 50.638 52.137 79.744 9.306 23.886-2.503 50.801-26.389 60.107-22.392 8.721-47.431-1.128-58.141-22.073l-1.945-4.337-2.735-6.453c-6.714-14.944-16.204-28.983-28.568-41.347-14.132-14.132-30.44-24.54-47.799-31.303-23.885-9.305-35.714-36.201-26.411-60.086 9.306-23.886 36.221-35.694 60.107-26.389l10.812 4.53c25.038 11.25 48.462 27.137 68.932 47.607"
	}, null, -1)])]);
}
var empty_output_default = { render: render$278 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/filled-square.svg
var _hoisted_1$278 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "currentColor",
	overflow: "hidden",
	viewBox: "0 0 10 10"
};
function render$277(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$278, [..._cache[0] || (_cache[0] = [createBaseVNode("rect", {
		width: "10",
		height: "10",
		rx: "2",
		ry: "2"
	}, null, -1)])]);
}
var filled_square_default = { render: render$277 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/form.svg
var _hoisted_1$277 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 50 50"
};
function render$276(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$277, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M47.267 22.554c-.002.31-.126.608-.344.829l-6.805 6.796a1.13 1.13 0 0 1-.828.344 1.15 1.15 0 0 1-.828-.344 1.18 1.18 0 0 1 0-1.656l5.977-5.969-1.313-1.312-1.383 1.414L28.595 35.78l-4.617.781.781-4.617.336-.336 2.563 2.555c.214.227.515.351.828.343.311.006.611-.119.828-.343a1.18 1.18 0 0 0 0-1.657l-2.563-2.562 8.25-8.273 4.29-4.29 3.757 3.711 1.617-1.617 2.258 2.258c.218.218.342.512.344.82m-17.282 15.15 3.032-3.032v8.297a1.56 1.56 0 0 1-1.563 1.563H4.298a1.56 1.56 0 0 1-1.563-1.563V14.843c0-.405.157-.794.438-1.086l6.304-6.531v5.344H6.251a1.172 1.172 0 1 0 0 2.344h4.43a1.17 1.17 0 0 0 1.171-1.172V5.468h19.602a1.56 1.56 0 0 1 1.563 1.563v13.281L22.86 30.468a1.24 1.24 0 0 0-.328.633l-1.102 6.61c-.06.373.062.753.329 1.023.22.22.517.343.828.343h.195l6.602-1.101a1.16 1.16 0 0 0 .601-.274m-21-16a1.18 1.18 0 0 0 1.172 1.172h15.266a1.172 1.172 0 1 0 0-2.344H10.157a1.17 1.17 0 0 0-1.172 1.172m10.711 14.766a1.17 1.17 0 0 0-1.172-1.172h-8.367a1.172 1.172 0 1 0 0 2.343h8.367a1.17 1.17 0 0 0 1.172-1.172m.86-7.391a1.17 1.17 0 0 0-1.172-1.172h-9.227a1.172 1.172 0 1 0 0 2.344h9.227a1.164 1.164 0 0 0 1.171-1.172M45.75 18.617a1.563 1.563 0 0 0 0-2.203l-1.64-1.64a1.563 1.563 0 0 0-2.204 0l-.93.929 3.852 3.828z"
	}, null, -1)])]);
}
var form_default = { render: render$276 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/grip-lines-vertical.svg
var _hoisted_1$276 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$275(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$276, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M9 3v18M15 3v18",
		style: { "stroke-opacity": "1" }
	}, null, -1)])]);
}
var grip_lines_vertical_default = { render: render$275 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/linear.svg
var _hoisted_1$275 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 64 64"
};
function render$274(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$275, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "#5E6AD2",
		d: "m.403 37.4 26.198 26.197C13.223 61.336 2.664 50.777.403 37.399M0 30.287 33.713 64a32 32 0 0 0 5.852-.858L.858 24.435c-.46 1.89-.75 3.847-.858 5.852m2.536-10.883 42.06 42.06a32 32 0 0 0 4.4-2.31l-44.15-44.15a32 32 0 0 0-2.31 4.4m5.159-8.259C13.568 4.32 22.268 0 31.977 0 49.663 0 64 14.337 64 32.023c0 9.71-4.32 18.41-11.145 24.282z"
	}, null, -1)])]);
}
var linear_default = { render: render$274 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/lovable.svg
var _hoisted_1$274 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "121",
	height: "122",
	fill: "none",
	viewBox: "0 0 121 122"
};
function render$273(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$274, [..._cache[0] || (_cache[0] = [createStaticVNode("<mask id=\"mask0_572_319\" width=\"121\" height=\"122\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:alpha;\"><path fill=\"url(#paint0_linear_572_319)\" fill-rule=\"evenodd\" d=\"M36.069 0c19.92 0 36.068 16.155 36.068 36.084v13.713h12.004c19.92 0 36.069 16.156 36.069 36.084s-16.149 36.083-36.069 36.083H0v-85.88C0 16.155 16.148 0 36.069 0\" clip-rule=\"evenodd\"></path></mask><g mask=\"url(#mask0_572_319)\"><g filter=\"url(#filter0_f_572_319)\"><ellipse cx=\"52.738\" cy=\"65.101\" fill=\"#4B73FF\" rx=\"81.373\" ry=\"81.192\"></ellipse></g><g filter=\"url(#filter1_f_572_319)\"><ellipse cx=\"61.673\" cy=\"20.547\" fill=\"#FF66F4\" rx=\"104.216\" ry=\"81.192\"></ellipse></g><g filter=\"url(#filter2_f_572_319)\"><ellipse cx=\"78.666\" cy=\"5.268\" fill=\"#FF0105\" rx=\"81.373\" ry=\"71.304\"></ellipse></g><g filter=\"url(#filter3_f_572_319)\"><ellipse cx=\"63.121\" cy=\"20.527\" fill=\"#FE7B02\" rx=\"48.937\" ry=\"48.829\"></ellipse></g></g><defs><filter id=\"filter0_f_572_319\" width=\"235.52\" height=\"235.159\" x=\"-65.022\" y=\"-52.478\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feBlend in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"></feBlend><feGaussianBlur result=\"effect1_foregroundBlur_572_319\" stdDeviation=\"18.194\"></feGaussianBlur></filter><filter id=\"filter1_f_572_319\" width=\"281.208\" height=\"235.159\" x=\"-78.93\" y=\"-97.032\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feBlend in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"></feBlend><feGaussianBlur result=\"effect1_foregroundBlur_572_319\" stdDeviation=\"18.194\"></feGaussianBlur></filter><filter id=\"filter2_f_572_319\" width=\"235.52\" height=\"215.383\" x=\"-39.094\" y=\"-102.423\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feBlend in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"></feBlend><feGaussianBlur result=\"effect1_foregroundBlur_572_319\" stdDeviation=\"18.194\"></feGaussianBlur></filter><filter id=\"filter3_f_572_319\" width=\"170.649\" height=\"170.432\" x=\"-22.204\" y=\"-64.688\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feBlend in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"></feBlend><feGaussianBlur result=\"effect1_foregroundBlur_572_319\" stdDeviation=\"18.194\"></feGaussianBlur></filter><linearGradient id=\"paint0_linear_572_319\" x1=\"40.453\" x2=\"76.933\" y1=\"21.433\" y2=\"121.971\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".025\" stop-color=\"#FF8E63\"></stop><stop offset=\".56\" stop-color=\"#FF7EB0\"></stop><stop offset=\".95\" stop-color=\"#4B73FF\"></stop></linearGradient></defs>", 3)])]);
}
var lovable_default = { render: render$273 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/mcp.svg
var _hoisted_1$273 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "1em",
	height: "1em",
	fill: "currentColor",
	"fill-rule": "evenodd",
	style: {
		"flex": "none",
		"line-height": "1"
	},
	viewBox: "0 0 24 24"
};
function render$272(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$273, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M15.688 2.343a2.59 2.59 0 0 0-3.61 0l-9.626 9.44a.863.863 0 0 1-1.203 0 .823.823 0 0 1 0-1.18l9.626-9.44a4.313 4.313 0 0 1 6.016 0 4.12 4.12 0 0 1 1.204 3.54 4.3 4.3 0 0 1 3.609 1.18l.05.05a4.115 4.115 0 0 1 0 5.9l-8.706 8.537a.274.274 0 0 0 0 .393l1.788 1.754a.823.823 0 0 1 0 1.18.863.863 0 0 1-1.203 0l-1.788-1.753a1.92 1.92 0 0 1 0-2.754l8.706-8.538a2.47 2.47 0 0 0 0-3.54l-.05-.049a2.59 2.59 0 0 0-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 0 1-1.204 0 .823.823 0 0 1 0-1.18l7.273-7.133a2.47 2.47 0 0 0-.003-3.537" }, null, -1), createBaseVNode("path", { d: "M14.485 4.703a.823.823 0 0 0 0-1.18.863.863 0 0 0-1.204 0l-7.119 6.982a4.115 4.115 0 0 0 0 5.9 4.314 4.314 0 0 0 6.016 0l7.12-6.982a.823.823 0 0 0 0-1.18.863.863 0 0 0-1.204 0l-7.119 6.982a2.59 2.59 0 0 1-3.61 0 2.47 2.47 0 0 1 0-3.54z" }, null, -1)])]);
}
var mcp_default = { render: render$272 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-dirty.svg
var _hoisted_1$272 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$271(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$272, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M10.12 3.3c.911-1.395 3.012-1.349 3.844.14l8.222 14.712c.838 1.5-.246 3.348-1.964 3.348H3.778c-1.718 0-2.802-1.848-1.964-3.348L10.036 3.44zM5.057 18.5h13.886L12 6.073z"
	}, null, -1)])]);
}
var node_dirty_default = { render: render$271 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-ellipsis.svg
var _hoisted_1$271 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$270(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$271, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M4.5 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m7.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m7.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
	}, null, -1)])]);
}
var node_ellipsis_default = { render: render$270 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-execution-error.svg
var _hoisted_1$270 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$269(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$270, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		"fill-rule": "evenodd",
		d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m5.56 5.44a1.5 1.5 0 0 0-2.12 0L12 9.878l-3.44-3.44A1.5 1.5 0 1 0 6.44 8.56L9.878 12l-3.44 3.44a1.5 1.5 0 1 0 2.122 2.12L12 14.122l3.44 3.44.114.103a1.5 1.5 0 0 0 2.11-2.11l-.104-.114L14.122 12l3.44-3.44a1.5 1.5 0 0 0 0-2.12",
		"clip-rule": "evenodd"
	}, null, -1)])]);
}
var node_execution_error_default = { render: render$269 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-pin.svg
var _hoisted_1$269 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$268(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$269, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M16.297 2.515A3 3 0 0 1 16 8.5v2.26l.01.138a1 1 0 0 0 .545.756l.006.003 1.774.898.184.1A3 3 0 0 1 20 15.238V16a2 2 0 0 1-2 2h-4.5v4a1.5 1.5 0 0 1-3 0v-4H6a2 2 0 0 1-1.99-1.803L4 16v-.76l.008-.209a3 3 0 0 1 1.657-2.476l1.773-.898.007-.003a1 1 0 0 0 .545-.756L8 10.76V8.5a3 3 0 0 1 0-6h8z"
	}, null, -1)])]);
}
var node_pin_default = { render: render$268 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-play.svg
var _hoisted_1$268 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$267(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$268, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M5.52 2.122c.322-.175.713-.16 1.021.037l14 9a1 1 0 0 1 0 1.682l-14 9A1.001 1.001 0 0 1 5 21V3a1 1 0 0 1 .52-.878"
	}, null, -1)])]);
}
var node_play_default = { render: render$267 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-power.svg
var _hoisted_1$267 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$266(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$267, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M16.645 5.907a1.5 1.5 0 0 1 2.122.028 9.77 9.77 0 0 1 2.585 4.953 9.9 9.9 0 0 1-.53 5.579 9.66 9.66 0 0 1-3.476 4.357 9.36 9.36 0 0 1-5.28 1.657 9.36 9.36 0 0 1-5.292-1.623 9.66 9.66 0 0 1-3.504-4.335 9.9 9.9 0 0 1-.564-5.576 9.77 9.77 0 0 1 2.556-4.97l.11-.105a1.501 1.501 0 0 1 2.05 2.187l-.166.178a6.8 6.8 0 0 0-1.602 3.266 6.9 6.9 0 0 0 .393 3.884 6.66 6.66 0 0 0 2.413 2.989 6.36 6.36 0 0 0 3.595 1.105 6.36 6.36 0 0 0 3.59-1.128 6.66 6.66 0 0 0 2.394-3.005 6.9 6.9 0 0 0 .37-3.887 6.77 6.77 0 0 0-1.79-3.433 1.5 1.5 0 0 1 .026-2.12"
	}, null, -1), createBaseVNode("path", {
		fill: "currentColor",
		d: "M12.035 1.481a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5"
	}, null, -1)])]);
}
var node_power_default = { render: render$266 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-success.svg
var _hoisted_1$266 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$265(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$266, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M19.94 5.502a1.5 1.5 0 1 1 2.12 2.12L9.687 19.999a1.5 1.5 0 0 1-2.122 0L1.94 14.373a1.5 1.5 0 0 1 2.007-2.225l.115.104 4.564 4.564z"
	}, null, -1)])]);
}
var node_success_default = { render: render$265 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-trash.svg
var _hoisted_1$265 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$264(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$265, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M21 6a1 1 0 1 1 0 2h-1v12.125c0 .817-.424 1.534-.941 2.019-.522.488-1.256.856-2.059.856H7c-.803 0-1.537-.368-2.059-.856C4.424 21.659 4 20.943 4 20.125V8H3a1 1 0 0 1 0-2zm-7-5a3 3 0 0 1 3 3H7a3 3 0 0 1 3-3z"
	}, null, -1)])]);
}
var node_trash_default = { render: render$264 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/node-validation-error.svg
var _hoisted_1$264 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$263(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$264, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M10.05 2.385c.866-1.503 3.034-1.503 3.9 0l9.357 16.242c.864 1.5-.219 3.373-1.95 3.373H2.642C.912 22-.17 20.127.693 18.627zM12 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8.5A1.5 1.5 0 0 0 10.5 9v3.5a1.5 1.5 0 0 0 3 0V9A1.5 1.5 0 0 0 12 7.5"
	}, null, -1)])]);
}
var node_validation_error_default = { render: render$263 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/pop-out.svg
var _hoisted_1$263 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 16 16"
};
function render$262(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$263, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M13.333 12.553v-.104a2.48 2.48 0 0 0 1.524-2.286V3.62a2.476 2.476 0 0 0-2.476-2.476H5.905a2.48 2.48 0 0 0-2.357 1.714h-.153c-.695 0-1.286.245-1.693.727-.395.467-.56 1.09-.56 1.75V12c0 .808.293 1.535.847 2.057.553.52 1.32.797 2.201.797h2.987l3.106.003h.001c.744.004 1.48-.152 2.052-.518.594-.38.997-.987.997-1.787M3.395 4h.034v6.163a2.476 2.476 0 0 0 2.476 2.476h6.282c-.024.318-.184.556-.467.737-.33.212-.83.341-1.431.338h-.003l-3.11-.003H4.19c-.642 0-1.112-.199-1.417-.486-.303-.285-.487-.7-.487-1.225V5.334c0-.484.122-.813.29-1.013.155-.184.405-.32.819-.32m4.622-.19h3.602a.57.57 0 0 1 .571.571v3.603a.572.572 0 0 1-1.142 0V5.76L7.07 9.737a.572.572 0 1 1-.807-.808l3.977-3.976H8.017a.571.571 0 1 1 0-1.143"
	}, null, -1)])]);
}
var pop_out_default = { render: render$262 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/resolver.svg
var _hoisted_1$262 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "28",
	height: "28",
	fill: "none",
	viewBox: "0 0 28 28"
};
function render$261(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$262, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M23.088 0h-9.094l2.81 8.758h9.094l-7.357 5.223 2.811 8.807c4.736-3.45 6.283-8.67 4.547-14.03zM2.09 8.758h9.093L13.994 0H4.902zc-1.737 5.36-.19 10.58 4.546 14.03l2.81-8.808zm4.546 14.03L13.994 28l7.358-5.212-7.358-5.298z"
	}, null, -1)])]);
}
var resolver_default = { render: render$261 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/retry.svg
var _hoisted_1$261 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 512 512"
};
function render$260(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$261, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M416.648 227.85c23.324 0 42.232 18.908 42.232 42.232v84.462c0 38.872-31.513 70.384-70.385 70.385H191.423v36.402c0 12.541-15.163 18.822-24.031 9.954l-78.63-78.631c-5.498-5.497-5.498-14.411 0-19.908l78.63-78.631c8.868-8.868 24.031-2.587 24.031 9.954v36.398h182.995v-70.385c0-23.324 18.907-42.231 42.23-42.232M304.028 50.669c0-12.541 15.163-18.822 24.031-9.954l78.63 78.631c5.498 5.497 5.498 14.41 0 19.908l-78.63 78.631c-8.868 8.867-24.031 2.587-24.031-9.954v-36.38H121.033v70.385c0 23.324-18.908 42.231-42.231 42.231s-42.23-18.907-42.23-42.231v-84.462c0-38.872 31.512-70.385 70.384-70.385h197.072z"
	}, null, -1)])]);
}
var retry_default = { render: render$260 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/run-once.svg
var _hoisted_1$260 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 512 512"
};
function render$259(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$260, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M275.114 36.8c22.13 2.247 39.401 20.934 39.401 43.657v307.204h73.142c24.237 0 43.886 19.648 43.886 43.885s-19.648 43.886-43.886 43.886H153.6c-24.238-.001-43.886-19.649-43.886-43.886s19.648-43.885 43.886-43.885h73.143V124.343H153.6c-24.238 0-43.886-19.649-43.886-43.886s19.648-43.885 43.886-43.886h117.029z"
	}, null, -1)])]);
}
var run_once_default = { render: render$259 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/schema.svg
var _hoisted_1$259 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 -1 14 14"
};
function render$258(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$259, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M1.636 0h6.546a1.636 1.636 0 1 1 0 3.273H1.636a1.636 1.636 0 0 1 0-3.273m0 1.09a.545.545 0 0 0 0 1.092h6.546a.545.545 0 0 0 0-1.091zm5.455 3.274h4.363a1.636 1.636 0 1 1 0 3.272H7.091a1.636 1.636 0 1 1 0-3.272m0 1.09a.545.545 0 1 0 0 1.091h4.363a.545.545 0 1 0 0-1.09zm0 3.273h4.363a1.636 1.636 0 1 1 0 3.273H7.091a1.636 1.636 0 1 1 0-3.273m0 1.091a.545.545 0 0 0 0 1.091h4.363a.545.545 0 1 0 0-1.09z"
	}, null, -1)])]);
}
var schema_default = { render: render$258 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/slack.svg
var _hoisted_1$258 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	fill: "#fff",
	"fill-rule": "evenodd",
	stroke: "#000",
	"stroke-linecap": "round",
	"stroke-linejoin": "round",
	viewBox: "0 0 150.852 150.852"
};
function render$257(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$258, [..._cache[0] || (_cache[0] = [createStaticVNode("<use xlink:href=\"#a\" x=\".926\" y=\".926\"></use><symbol id=\"a\" overflow=\"visible\"><g stroke-width=\"1.852\"><path fill=\"#e01e5a\" stroke=\"#e01e5a\" d=\"M40.741 93.55c0-8.735 6.607-15.772 14.815-15.772s14.815 7.037 14.815 15.772v38.824c0 8.737-6.607 15.774-14.815 15.774s-14.815-7.037-14.815-15.772z\"></path><path fill=\"#ecb22d\" stroke=\"#ecb22d\" d=\"M93.55 107.408c-8.735 0-15.772-6.607-15.772-14.815s7.037-14.815 15.772-14.815h38.826c8.735 0 15.772 6.607 15.772 14.815s-7.037 14.815-15.772 14.815z\"></path><path fill=\"#2fb67c\" stroke=\"#2fb67c\" d=\"M77.778 15.772C77.778 7.037 84.385 0 92.593 0s14.815 7.037 14.815 15.772v38.826c0 8.735-6.607 15.772-14.815 15.772s-14.815-7.037-14.815-15.772z\"></path><path fill=\"#36c5f1\" stroke=\"#36c5f1\" d=\"M15.772 70.371C7.037 70.371 0 63.763 0 55.556s7.037-14.815 15.772-14.815h38.826c8.735 0 15.772 6.607 15.772 14.815s-7.037 14.815-15.772 14.815z\"></path><g stroke-linejoin=\"miter\"><path fill=\"#ecb22d\" stroke=\"#ecb22d\" d=\"M77.778 133.333c0 8.208 6.607 14.815 14.815 14.815s14.815-6.607 14.815-14.815-6.607-14.815-14.815-14.815H77.778z\"></path><path fill=\"#2fb67c\" stroke=\"#2fb67c\" d=\"M133.334 70.371h-14.815V55.556c0-8.207 6.607-14.815 14.815-14.815s14.815 6.607 14.815 14.815-6.607 14.815-14.815 14.815z\"></path><path fill=\"#e01e5a\" stroke=\"#e01e5a\" d=\"M14.815 77.778H29.63v14.815c0 8.207-6.607 14.815-14.815 14.815S0 100.8 0 92.593s6.607-14.815 14.815-14.815z\"></path><path fill=\"#36c5f1\" stroke=\"#36c5f1\" d=\"M70.371 14.815V29.63H55.556c-8.207 0-14.815-6.607-14.815-14.815S47.348 0 55.556 0s14.815 6.607 14.815 14.815z\"></path></g></g></symbol>", 2)])]);
}
var slack_default = { render: render$257 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/spinner.svg
var _hoisted_1$257 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$256(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$257, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-width": "2",
		d: "M12 2v3M12 19v3M12 2v3M12 19v3M22.005 11.995h-3M5.005 11.995h-3M19.08 19.068l-2.122-2.122M7.059 7.047 4.938 4.926M4.938 19.068l2.12-2.122M16.958 7.047l2.122-2.121",
		style: {
			"stroke": "currentColor",
			"stroke-opacity": "1"
		}
	}, null, -1)])]);
}
var spinner_default = { render: render$256 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/star-filled.svg
var _hoisted_1$256 = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "24",
	height: "24",
	fill: "currentColor",
	stroke: "currentColor",
	"stroke-linecap": "round",
	"stroke-linejoin": "round",
	"stroke-width": "2",
	class: "lucide lucide-star-icon lucide-star",
	viewBox: "0 0 24 24"
};
function render$255(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$256, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" }, null, -1)])]);
}
var star_filled_default = { render: render$255 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/status-canceled.svg
var _hoisted_1$255 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 14 14"
};
function render$254(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$255, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0m-2.757-1H2.758v2h8.485z"
	}, null, -1)])]);
}
var status_canceled_default = { render: render$254 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/status-completed.svg
var _hoisted_1$254 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 14 14"
};
function render$253(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$254, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0m-11.425.728 3.207 3.207 5.707-5.707-1.414-1.414-4.293 4.293-1.793-1.793z"
	}, null, -1)])]);
}
var status_completed_default = { render: render$253 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/status-error.svg
var _hoisted_1$253 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 14 14"
};
function render$252(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$253, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M4.207 2.793 7 5.586l2.793-2.793 1.414 1.414L8.414 7l2.793 2.793-1.414 1.414L7 8.414l-2.793 2.793-1.414-1.414L5.586 7 2.793 4.207zM7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0"
	}, null, -1)])]);
}
var status_error_default = { render: render$252 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/status-new.svg
var _hoisted_1$252 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 14 14"
};
function render$251(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$252, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M14 7.006c0 1.861-.838 3.738-2.05 4.95s-3.089 2.05-4.95 2.05-3.738-.838-4.95-2.05S0 8.867 0 7.006s.838-3.738 2.05-4.95S5.139.006 7 .006s3.738.838 4.95 2.05S14 5.145 14 7.006M10.536 3.47C9.576 2.511 8.453 2.006 7 2.006s-2.576.505-3.536 1.464C2.505 4.43 2 5.553 2 7.006s.505 2.576 1.464 3.536c.96.959 2.083 1.464 3.536 1.464s2.576-.505 3.536-1.464C11.495 9.582 12 8.459 12 7.006s-.505-2.576-1.464-3.536"
	}, null, -1)])]);
}
var status_new_default = { render: render$251 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/status-unknown.svg
var _hoisted_1$251 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 14 14"
};
function render$250(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$251, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "m13.867 8.366-1.962-.388a5 5 0 0 0 0-1.956l1.962-.388a7 7 0 0 1 0 2.732M12.82 3.111l-1.662 1.112a5 5 0 0 0-1.382-1.382l1.112-1.662a7 7 0 0 1 1.932 1.932M8.366.133l-.388 1.962a5 5 0 0 0-1.956 0L5.634.133a7 7 0 0 1 2.732 0M3.111 1.18l1.112 1.662a5 5 0 0 0-1.382 1.382L1.179 3.111a7 7 0 0 1 1.932-1.932M.133 5.634a7 7 0 0 0 0 2.732l1.962-.388a5 5 0 0 1 0-1.956zm1.046 5.255 1.662-1.112a5 5 0 0 0 1.382 1.382l-1.112 1.662a7 7 0 0 1-1.932-1.932m4.455 2.978.388-1.962a5 5 0 0 0 1.956 0l.388 1.962a7 7 0 0 1-2.732 0m5.255-1.046-1.112-1.662a5 5 0 0 0 1.382-1.382l1.662 1.112a7 7 0 0 1-1.932 1.932"
	}, null, -1)])]);
}
var status_unknown_default = { render: render$250 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/status-waiting.svg
var _hoisted_1$250 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 14 14"
};
function render$249(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$250, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14m0-2A5 5 0 1 1 7 2a5 5 0 0 1 0 10M6 3v5h5a5 5 0 0 0-5-5"
	}, null, -1)])]);
}
var status_waiting_default = { render: render$249 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/status-warning.svg
var _hoisted_1$249 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 14 14"
};
function render$248(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$249, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M6.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0-6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z"
	}, null, -1)])]);
}
var status_warning_default = { render: render$248 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/telegram.svg
var _hoisted_1$248 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24"
};
function render$247(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$248, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "#26A5E4",
		d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024q-.16.036-5.061 3.345-.72.495-1.302.48c-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789q.04-.324.893-.663 5.247-2.286 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635"
	}, null, -1)])]);
}
var telegram_default = { render: render$247 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/text.svg
var _hoisted_1$247 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 12 12"
};
function render$246(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$247, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M0 .667C0 .298.298 0 .667 0h10.666a.667.667 0 1 1 0 1.333H.667A.667.667 0 0 1 0 .667M0 3.63c0-.369.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.333H.667A.667.667 0 0 1 0 3.63m0 2.963c0-.369.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.333H.667A.667.667 0 0 1 0 6.593m0 2.963c0-.369.298-.667.667-.667h8a.667.667 0 0 1 0 1.333h-8A.667.667 0 0 1 0 9.556"
	}, null, -1)])]);
}
var text_default = { render: render$246 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/toolbox.svg
var _hoisted_1$246 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	"aria-hidden": "true",
	viewBox: "0 0 24 24"
};
function render$245(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$246, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-width": "2",
		d: "M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4m6 12V10a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM8 13v4m8-4v4M2 15h20",
		style: {
			"stroke": "currentColor",
			"stroke-opacity": "1"
		}
	}, null, -1)])]);
}
var toolbox_default = { render: render$245 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/triangle.svg
var _hoisted_1$245 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 512 512"
};
function render$244(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$245, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M214.433 56c18.475-32 64.663-32 83.138 0l180.133 312c18.476 32-4.619 72-41.569 72H75.869c-36.951 0-60.045-40-41.57-72zm41.569 88L131.294 360h249.415z"
	}, null, -1)])]);
}
var triangle_default = { render: render$244 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/vector-square.svg
var _hoisted_1$244 = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24"
};
function render$243(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$244, [..._cache[0] || (_cache[0] = [createStaticVNode("<rect width=\"5\" height=\"5\" x=\"2\" y=\"2\" stroke=\"currentColor\" stroke-width=\"2\" rx=\"1\" style=\"stroke:currentColor;stroke-opacity:1;\"></rect><rect width=\"5\" height=\"5\" x=\"17\" y=\"2\" stroke=\"currentColor\" stroke-width=\"2\" rx=\"1\" style=\"stroke:currentColor;stroke-opacity:1;\"></rect><rect width=\"5\" height=\"5\" x=\"17\" y=\"17\" stroke=\"currentColor\" stroke-width=\"2\" rx=\"1\" style=\"stroke:currentColor;stroke-opacity:1;\"></rect><rect width=\"5\" height=\"5\" x=\"2\" y=\"17\" stroke=\"currentColor\" stroke-width=\"2\" rx=\"1\" style=\"stroke:currentColor;stroke-opacity:1;\"></rect><path fill=\"currentColor\" d=\"M7 3h10v2H7zM7 19h10v2H7zM3 7h2v10H3zM19 7h2v10h-2z\" style=\"fill:currentColor;fill-opacity:1;\"></path>", 5)])]);
}
var vector_square_default = { render: render$243 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/custom/webhook.svg
var _hoisted_1$243 = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 48 48"
};
function render$242(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$243, [..._cache[0] || (_cache[0] = [createStaticVNode("<path fill=\"currentColor\" d=\"M35 37c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4\"></path><path fill=\"currentColor\" d=\"M35 43c-3 0-5.9-1.4-7.8-3.7l3.1-2.5c1.1 1.4 2.9 2.3 4.7 2.3 3.3 0 6-2.7 6-6s-2.7-6-6-6c-1 0-2 .3-2.9.7l-1.7 1L23.3 16l3.5-1.9 5.3 9.4c1-.3 2-.5 3-.5 5.5 0 10 4.5 10 10S40.5 43 35 43\"></path><path fill=\"currentColor\" d=\"M14 43C8.5 43 4 38.5 4 33c0-4.6 3.1-8.5 7.5-9.7l1 3.9C9.9 27.9 8 30.3 8 33c0 3.3 2.7 6 6 6s6-2.7 6-6v-2h15v4H23.8c-.9 4.6-5 8-9.8 8\"></path><path fill=\"currentColor\" d=\"M14 37c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4M25 19c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4\"></path><path fill=\"currentColor\" d=\"m15.7 34-3.4-2 5.9-9.7c-2-1.9-3.2-4.5-3.2-7.3 0-5.5 4.5-10 10-10s10 4.5 10 10c0 .9-.1 1.7-.3 2.5l-3.9-1c.1-.5.2-1 .2-1.5 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.1 1.1 4 2.9 5.1l1.7 1z\"></path>", 5)])]);
}
var webhook_default = { render: render$242 };
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/node-icon-names.ts
var nodeIconNames = [
	"node:aggregate",
	"node:ai-agent",
	"node:ai-transform",
	"node:basic-llm-chain",
	"node:calculator",
	"node:call-n8n-sub-workflow-tool",
	"node:character-text-splitter",
	"node:chat-memory-manager",
	"node:chat-trigger",
	"node:code",
	"node:compare-datasets",
	"node:compression",
	"node:contextual-compression-retriever",
	"node:convert-to-file",
	"node:crypto",
	"node:data-table",
	"node:date-and-time",
	"node:default-data-loader",
	"node:edit-fields",
	"node:edit-image",
	"node:email-trigger",
	"node:error-trigger",
	"node:execute-command",
	"node:execute-sub-workflow",
	"node:execution-data",
	"node:extract-from-file",
	"node:filter",
	"node:form-trigger",
	"node:ftp",
	"node:guardrails",
	"node:html",
	"node:http-request",
	"node:if",
	"node:information-extractor",
	"node:item-list-output-parser",
	"node:limit",
	"node:local-file-trigger",
	"node:loop-over-items",
	"node:manual-trigger",
	"node:markdown",
	"node:merge",
	"node:model-selector",
	"node:multiquery-retriever",
	"node:n8n",
	"node:n8n-trigger",
	"node:no-operation",
	"node:question-and-answer-chain",
	"node:read-write-files-from-disk",
	"node:recursive-character-text-splitter",
	"node:remove-duplicates",
	"node:rename-keys",
	"node:respond-to-webhook",
	"node:rss-feed-trigger",
	"node:rss-read",
	"node:schedule-trigger",
	"node:send-mail",
	"node:sentiment-analysis",
	"node:simple-memory",
	"node:simple-vector-store",
	"node:sort",
	"node:split-out",
	"node:sse-trigger",
	"node:ssh",
	"node:stop-and-error",
	"node:structured-output-parser",
	"node:sub-workflow-trigger",
	"node:summarization-chain",
	"node:summarize",
	"node:switch",
	"node:text-classifier",
	"node:think-tool",
	"node:token-splitter",
	"node:totp",
	"node:track-time-saved",
	"node:vector-store-question-answer-tool",
	"node:vector-store-retriever",
	"node:wait",
	"node:webhook",
	"node:workflow-retriever",
	"node:xml"
];
//#endregion
//#region ~icons/lucide/align-right
var _hoisted_1$242 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$241(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$242, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M21 12H9m12 6H7M21 6H3"
	}, null, -1)])]);
}
var align_right_default = markRaw({
	name: "lucide-align-right",
	render: render$241
});
//#endregion
//#region ~icons/lucide/archive
var _hoisted_1$241 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$240(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$241, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1"
	}), createBaseVNode("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4" })], -1)])]);
}
var archive_default = markRaw({
	name: "lucide-archive",
	render: render$240
});
//#endregion
//#region ~icons/lucide/archive-restore
var _hoisted_1$240 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$239(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$240, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1"
	}), createBaseVNode("path", { d: "M4 8v11a2 2 0 0 0 2 2h2M20 8v11a2 2 0 0 1-2 2h-2m-7-6l3-3l3 3m-3-3v9" })], -1)])]);
}
var archive_restore_default = markRaw({
	name: "lucide-archive-restore",
	render: render$239
});
//#endregion
//#region ~icons/lucide/arrow-down
var _hoisted_1$239 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$238(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$239, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 5v14m7-7l-7 7l-7-7"
	}, null, -1)])]);
}
var arrow_down_default = markRaw({
	name: "lucide-arrow-down",
	render: render$238
});
//#endregion
//#region ~icons/lucide/arrow-left
var _hoisted_1$238 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$237(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$238, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m12 19l-7-7l7-7m7 7H5"
	}, null, -1)])]);
}
var arrow_left_default = markRaw({
	name: "lucide-arrow-left",
	render: render$237
});
//#endregion
//#region ~icons/lucide/arrow-left-right
var _hoisted_1$237 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$236(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$237, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
	}, null, -1)])]);
}
var arrow_left_right_default = markRaw({
	name: "lucide-arrow-left-right",
	render: render$236
});
//#endregion
//#region ~icons/lucide/arrow-right
var _hoisted_1$236 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$235(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$236, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M5 12h14m-7-7l7 7l-7 7"
	}, null, -1)])]);
}
var arrow_right_default = markRaw({
	name: "lucide-arrow-right",
	render: render$235
});
//#endregion
//#region ~icons/lucide/arrow-right-from-line
var _hoisted_1$235 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$234(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$235, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M3 5v14m18-7H7m8 6l6-6l-6-6"
	}, null, -1)])]);
}
var arrow_right_from_line_default = markRaw({
	name: "lucide-arrow-right-from-line",
	render: render$234
});
//#endregion
//#region ~icons/lucide/arrow-right-to-line
var _hoisted_1$234 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$233(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$234, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M17 12H3m8 6l6-6l-6-6m10-1v14"
	}, null, -1)])]);
}
var arrow_right_to_line_default = markRaw({
	name: "lucide-arrow-right-to-line",
	render: render$233
});
//#endregion
//#region ~icons/lucide/arrow-up
var _hoisted_1$233 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$232(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$233, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m5 12l7-7l7 7m-7 7V5"
	}, null, -1)])]);
}
var arrow_up_default = markRaw({
	name: "lucide-arrow-up",
	render: render$232
});
//#endregion
//#region ~icons/lucide/arrow-up-right
var _hoisted_1$232 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$231(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$232, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M7 7h10v10M7 17L17 7"
	}, null, -1)])]);
}
var arrow_up_right_default = markRaw({
	name: "lucide-arrow-up-right",
	render: render$231
});
//#endregion
//#region ~icons/lucide/at-sign
var _hoisted_1$231 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$230(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$231, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "4"
	}), createBaseVNode("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })], -1)])]);
}
var at_sign_default = markRaw({
	name: "lucide-at-sign",
	render: render$230
});
//#endregion
//#region ~icons/lucide/badge-check
var _hoisted_1$230 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$229(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$230, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76" }), createBaseVNode("path", { d: "m9 12l2 2l4-4" })], -1)])]);
}
var badge_check_default = markRaw({
	name: "lucide-badge-check",
	render: render$229
});
//#endregion
//#region ~icons/lucide/ban
var _hoisted_1$229 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$228(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$229, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M4.929 4.929L19.07 19.071" })], -1)])]);
}
var ban_default = markRaw({
	name: "lucide-ban",
	render: render$228
});
//#endregion
//#region ~icons/lucide/bell
var _hoisted_1$228 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$227(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$228, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
	}, null, -1)])]);
}
var bell_default = markRaw({
	name: "lucide-bell",
	render: render$227
});
//#endregion
//#region ~icons/lucide/blocks
var _hoisted_1$227 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$226(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$227, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" }), createBaseVNode("rect", {
		width: "8",
		height: "8",
		x: "14",
		y: "2",
		rx: "1"
	})], -1)])]);
}
var blocks_default = markRaw({
	name: "lucide-blocks",
	render: render$226
});
//#endregion
//#region ~icons/lucide/bold
var _hoisted_1$226 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$225(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$226, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
	}, null, -1)])]);
}
var bold_default = markRaw({
	name: "lucide-bold",
	render: render$225
});
//#endregion
//#region ~icons/lucide/book
var _hoisted_1$225 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$224(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$225, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
	}, null, -1)])]);
}
var book_default = markRaw({
	name: "lucide-book",
	render: render$224
});
//#endregion
//#region ~icons/lucide/book-open
var _hoisted_1$224 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$223(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$224, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z"
	}, null, -1)])]);
}
var book_open_default = markRaw({
	name: "lucide-book-open",
	render: render$223
});
//#endregion
//#region ~icons/lucide/bot
var _hoisted_1$223 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$222(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$223, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M12 8V4H8" }),
		createBaseVNode("rect", {
			width: "16",
			height: "12",
			x: "4",
			y: "8",
			rx: "2"
		}),
		createBaseVNode("path", { d: "M2 14h2m16 0h2m-7-1v2m-6-2v2" })
	], -1)])]);
}
var bot_default = markRaw({
	name: "lucide-bot",
	render: render$222
});
//#endregion
//#region ~icons/lucide/box
var _hoisted_1$222 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$221(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$222, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }), createBaseVNode("path", { d: "m3.3 7l8.7 5l8.7-5M12 22V12" })], -1)])]);
}
var box_default = markRaw({
	name: "lucide-box",
	render: render$221
});
//#endregion
//#region ~icons/lucide/braces
var _hoisted_1$221 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$220(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$221, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1m8 0h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
	}, null, -1)])]);
}
var braces_default = markRaw({
	name: "lucide-braces",
	render: render$220
});
//#endregion
//#region ~icons/lucide/brain
var _hoisted_1$220 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$219(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$220, [..._cache[0] || (_cache[0] = [createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5\"></path><path d=\"M17.997 5.125a4 4 0 0 1 2.526 5.77\"></path><path d=\"M18 18a4 4 0 0 0 2-7.464\"></path><path d=\"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517\"></path><path d=\"M6 18a4 4 0 0 1-2-7.464\"></path><path d=\"M6.003 5.125a4 4 0 0 0-2.526 5.77\"></path></g>", 1)])]);
}
var brain_default = markRaw({
	name: "lucide-brain",
	render: render$219
});
//#endregion
//#region ~icons/lucide/bug
var _hoisted_1$219 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$218(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$219, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 20v-9m2-4a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4zm.12-3.12L16 2" }), createBaseVNode("path", { d: "M21 21a4 4 0 0 0-3.81-4M21 5a4 4 0 0 1-3.55 3.97M22 13h-4M3 21a4 4 0 0 1 3.81-4M3 5a4 4 0 0 0 3.55 3.97M6 13H2M8 2l1.88 1.88M9 7.13V6a3 3 0 1 1 6 0v1.13" })], -1)])]);
}
var bug_default = markRaw({
	name: "lucide-bug",
	render: render$218
});
//#endregion
//#region ~icons/lucide/calculator
var _hoisted_1$218 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$217(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$218, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2"
	}), createBaseVNode("path", { d: "M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" })], -1)])]);
}
var calculator_default = markRaw({
	name: "lucide-calculator",
	render: render$217
});
//#endregion
//#region ~icons/lucide/calendar
var _hoisted_1$217 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$216(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$217, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M8 2v4m8-4v4" }),
		createBaseVNode("rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "4",
			rx: "2"
		}),
		createBaseVNode("path", { d: "M3 10h18" })
	], -1)])]);
}
var calendar_default = markRaw({
	name: "lucide-calendar",
	render: render$216
});
//#endregion
//#region ~icons/lucide/case-upper
var _hoisted_1$216 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$215(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$216, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"
	}, null, -1)])]);
}
var case_upper_default = markRaw({
	name: "lucide-case-upper",
	render: render$215
});
//#endregion
//#region ~icons/lucide/chart-column-decreasing
var _hoisted_1$215 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$214(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$215, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"
	}, null, -1)])]);
}
var chart_column_decreasing_default = markRaw({
	name: "lucide-chart-column-decreasing",
	render: render$214
});
//#endregion
//#region ~icons/lucide/check
var _hoisted_1$214 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$213(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$214, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M20 6L9 17l-5-5"
	}, null, -1)])]);
}
var check_default = markRaw({
	name: "lucide-check",
	render: render$213
});
//#endregion
//#region ~icons/lucide/check-check
var _hoisted_1$213 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$212(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$213, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
	}, null, -1)])]);
}
var check_check_default = markRaw({
	name: "lucide-check-check",
	render: render$212
});
//#endregion
//#region ~icons/lucide/chevron-down
var _hoisted_1$212 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$211(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$212, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m6 9l6 6l6-6"
	}, null, -1)])]);
}
var chevron_down_default = markRaw({
	name: "lucide-chevron-down",
	render: render$211
});
//#endregion
//#region ~icons/lucide/chevron-left
var _hoisted_1$211 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$210(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$211, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m15 18l-6-6l6-6"
	}, null, -1)])]);
}
var chevron_left_default = markRaw({
	name: "lucide-chevron-left",
	render: render$210
});
//#endregion
//#region ~icons/lucide/chevron-right
var _hoisted_1$210 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$209(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$210, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m9 18l6-6l-6-6"
	}, null, -1)])]);
}
var chevron_right_default = markRaw({
	name: "lucide-chevron-right",
	render: render$209
});
//#endregion
//#region ~icons/lucide/chevron-up
var _hoisted_1$209 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$208(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$209, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m18 15l-6-6l-6 6"
	}, null, -1)])]);
}
var chevron_up_default = markRaw({
	name: "lucide-chevron-up",
	render: render$208
});
//#endregion
//#region ~icons/lucide/chevrons-down-up
var _hoisted_1$208 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$207(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$208, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m7 20l5-5l5 5M7 4l5 5l5-5"
	}, null, -1)])]);
}
var chevrons_down_up_default = markRaw({
	name: "lucide-chevrons-down-up",
	render: render$207
});
//#endregion
//#region ~icons/lucide/chevrons-left
var _hoisted_1$207 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$206(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$207, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m11 17l-5-5l5-5m7 10l-5-5l5-5"
	}, null, -1)])]);
}
var chevrons_left_default = markRaw({
	name: "lucide-chevrons-left",
	render: render$206
});
//#endregion
//#region ~icons/lucide/chevrons-right
var _hoisted_1$206 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$205(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$206, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m6 17l5-5l-5-5m7 10l5-5l-5-5"
	}, null, -1)])]);
}
var chevrons_right_default = markRaw({
	name: "lucide-chevrons-right",
	render: render$205
});
//#endregion
//#region ~icons/lucide/chevrons-up-down
var _hoisted_1$205 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$204(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$205, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m7 15l5 5l5-5M7 9l5-5l5 5"
	}, null, -1)])]);
}
var chevrons_up_down_default = markRaw({
	name: "lucide-chevrons-up-down",
	render: render$204
});
//#endregion
//#region ~icons/lucide/circle
var _hoisted_1$204 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$203(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$204, [..._cache[0] || (_cache[0] = [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10",
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, null, -1)])]);
}
var circle_default = markRaw({
	name: "lucide-circle",
	render: render$203
});
//#endregion
//#region ~icons/lucide/circle-alert
var _hoisted_1$203 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$202(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$203, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M12 8v4m0 4h.01" })], -1)])]);
}
var circle_alert_default = markRaw({
	name: "lucide-circle-alert",
	render: render$202
});
//#endregion
//#region ~icons/lucide/circle-check
var _hoisted_1$202 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$201(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$202, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "m9 12l2 2l4-4" })], -1)])]);
}
var circle_check_default = markRaw({
	name: "lucide-circle-check",
	render: render$201
});
//#endregion
//#region ~icons/lucide/circle-dollar-sign
var _hoisted_1$201 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$200(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$201, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6" })], -1)])]);
}
var circle_dollar_sign_default = markRaw({
	name: "lucide-circle-dollar-sign",
	render: render$200
});
//#endregion
//#region ~icons/lucide/circle-dot
var _hoisted_1$200 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$199(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$200, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "1"
	})], -1)])]);
}
var circle_dot_default = markRaw({
	name: "lucide-circle-dot",
	render: render$199
});
//#endregion
//#region ~icons/lucide/circle-ellipsis
var _hoisted_1$199 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$198(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$199, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M17 12h.01M12 12h.01M7 12h.01" })], -1)])]);
}
var circle_ellipsis_default = markRaw({
	name: "lucide-circle-ellipsis",
	render: render$198
});
//#endregion
//#region ~icons/lucide/circle-help
var _hoisted_1$198 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$197(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$198, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" })], -1)])]);
}
var circle_help_default = markRaw({
	name: "lucide-circle-help",
	render: render$197
});
//#endregion
//#region ~icons/lucide/circle-minus
var _hoisted_1$197 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$196(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$197, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M8 12h8" })], -1)])]);
}
var circle_minus_default = markRaw({
	name: "lucide-circle-minus",
	render: render$196
});
//#endregion
//#region ~icons/lucide/circle-pause
var _hoisted_1$196 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$195(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$196, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M10 15V9m4 6V9" })], -1)])]);
}
var circle_pause_default = markRaw({
	name: "lucide-circle-pause",
	render: render$195
});
//#endregion
//#region ~icons/lucide/circle-play
var _hoisted_1$195 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$194(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$195, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }), createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	})], -1)])]);
}
var circle_play_default = markRaw({
	name: "lucide-circle-play",
	render: render$194
});
//#endregion
//#region ~icons/lucide/circle-plus
var _hoisted_1$194 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$193(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$194, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M8 12h8m-4-4v8" })], -1)])]);
}
var circle_plus_default = markRaw({
	name: "lucide-circle-plus",
	render: render$193
});
//#endregion
//#region ~icons/lucide/circle-user-round
var _hoisted_1$193 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$192(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$193, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M17.925 20.056a6 6 0 0 0-11.851.001" }),
		createBaseVNode("circle", {
			cx: "12",
			cy: "11",
			r: "4"
		}),
		createBaseVNode("circle", {
			cx: "12",
			cy: "12",
			r: "10"
		})
	], -1)])]);
}
var circle_user_round_default = markRaw({
	name: "lucide-circle-user-round",
	render: render$192
});
//#endregion
//#region ~icons/lucide/circle-x
var _hoisted_1$192 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$191(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$192, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "m15 9l-6 6m0-6l6 6" })], -1)])]);
}
var circle_x_default = markRaw({
	name: "lucide-circle-x",
	render: render$191
});
//#endregion
//#region ~icons/lucide/clipboard
var _hoisted_1$191 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$190(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$191, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1"
	}), createBaseVNode("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" })], -1)])]);
}
var clipboard_default = markRaw({
	name: "lucide-clipboard",
	render: render$190
});
//#endregion
//#region ~icons/lucide/clipboard-check
var _hoisted_1$190 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$189(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$190, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("rect", {
			width: "8",
			height: "4",
			x: "8",
			y: "2",
			rx: "1",
			ry: "1"
		}),
		createBaseVNode("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
		createBaseVNode("path", { d: "m9 14l2 2l4-4" })
	], -1)])]);
}
var clipboard_check_default = markRaw({
	name: "lucide-clipboard-check",
	render: render$189
});
//#endregion
//#region ~icons/lucide/clipboard-list
var _hoisted_1$189 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$188(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$189, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1"
	}), createBaseVNode("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01" })], -1)])]);
}
var clipboard_list_default = markRaw({
	name: "lucide-clipboard-list",
	render: render$188
});
//#endregion
//#region ~icons/lucide/clock
var _hoisted_1$188 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$187(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$188, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M12 6v6l4 2" })], -1)])]);
}
var clock_default = markRaw({
	name: "lucide-clock",
	render: render$187
});
//#endregion
//#region ~icons/lucide/cloud
var _hoisted_1$187 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$186(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$187, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
	}, null, -1)])]);
}
var cloud_default = markRaw({
	name: "lucide-cloud",
	render: render$186
});
//#endregion
//#region ~icons/lucide/cloud-download
var _hoisted_1$186 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$185(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$186, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 13v8l-4-4m4 4l4-4" }), createBaseVNode("path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" })], -1)])]);
}
var cloud_download_default = markRaw({
	name: "lucide-cloud-download",
	render: render$185
});
//#endregion
//#region ~icons/lucide/code
var _hoisted_1$185 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$184(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$185, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m16 18l6-6l-6-6M8 6l-6 6l6 6"
	}, null, -1)])]);
}
var code_default = markRaw({
	name: "lucide-code",
	render: render$184
});
//#endregion
//#region ~icons/lucide/cog
var _hoisted_1$184 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$183(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$184, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M11 10.27L7 3.34m4 10.39l-4 6.93M12 22v-2m0-18v2m2 8h8m-5 8.66l-1-1.73m1-15.59l-1 1.73M2 12h2m16.66 5l-1.73-1m1.73-9l-1.73 1M3.34 17l1.73-1M3.34 7l1.73 1" }),
		createBaseVNode("circle", {
			cx: "12",
			cy: "12",
			r: "2"
		}),
		createBaseVNode("circle", {
			cx: "12",
			cy: "12",
			r: "8"
		})
	], -1)])]);
}
var cog_default = markRaw({
	name: "lucide-cog",
	render: render$183
});
//#endregion
//#region ~icons/lucide/columns-3-cog
var _hoisted_1$183 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$182(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$183, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5m-6.7 9.1l1-.4M15 3v7.5m.2 6.4l-.9-.3m2.3 5.1l.3-.9m-.1-5.5l-.4-1m2.7.9l.3-.9m.2 7.4l-.4-1m1.5-3.9l1-.4m0 3l-.9-.3M9 3v18" }), createBaseVNode("circle", {
		cx: "18",
		cy: "18",
		r: "3"
	})], -1)])]);
}
var columns_3_cog_default = markRaw({
	name: "lucide-columns-3-cog",
	render: render$182
});
//#endregion
//#region ~icons/lucide/contrast
var _hoisted_1$182 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$181(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$182, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M12 18a6 6 0 0 0 0-12z" })], -1)])]);
}
var contrast_default = markRaw({
	name: "lucide-contrast",
	render: render$181
});
//#endregion
//#region ~icons/lucide/copy
var _hoisted_1$181 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$180(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$181, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2"
	}), createBaseVNode("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })], -1)])]);
}
var copy_default = markRaw({
	name: "lucide-copy",
	render: render$180
});
//#endregion
//#region ~icons/lucide/corner-down-right
var _hoisted_1$180 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$179(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$180, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "m15 10l5 5l-5 5" }), createBaseVNode("path", { d: "M4 4v7a4 4 0 0 0 4 4h12" })], -1)])]);
}
var corner_down_right_default = markRaw({
	name: "lucide-corner-down-right",
	render: render$179
});
//#endregion
//#region ~icons/lucide/crosshair
var _hoisted_1$179 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$178(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$179, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M22 12h-4M6 12H2m10-6V2m0 20v-4" })], -1)])]);
}
var crosshair_default = markRaw({
	name: "lucide-crosshair",
	render: render$178
});
//#endregion
//#region ~icons/lucide/database
var _hoisted_1$178 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$177(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$178, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("ellipse", {
			cx: "12",
			cy: "5",
			rx: "9",
			ry: "3"
		}),
		createBaseVNode("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
		createBaseVNode("path", { d: "M3 12a9 3 0 0 0 18 0" })
	], -1)])]);
}
var database_default = markRaw({
	name: "lucide-database",
	render: render$177
});
//#endregion
//#region ~icons/lucide/door-open
var _hoisted_1$177 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$176(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$177, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3"
	}, null, -1)])]);
}
var door_open_default = markRaw({
	name: "lucide-door-open",
	render: render$176
});
//#endregion
//#region ~icons/lucide/dot
var _hoisted_1$176 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$175(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$176, [..._cache[0] || (_cache[0] = [createBaseVNode("circle", {
		cx: "12.1",
		cy: "12.1",
		r: "1",
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, null, -1)])]);
}
var dot_default = markRaw({
	name: "lucide-dot",
	render: render$175
});
//#endregion
//#region ~icons/lucide/download
var _hoisted_1$175 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$174(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$175, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), createBaseVNode("path", { d: "m7 10l5 5l5-5" })], -1)])]);
}
var download_default = markRaw({
	name: "lucide-download",
	render: render$174
});
//#endregion
//#region ~icons/lucide/earth
var _hoisted_1$174 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$173(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$174, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }), createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	})], -1)])]);
}
var earth_default = markRaw({
	name: "lucide-earth",
	render: render$173
});
//#endregion
//#region ~icons/lucide/ellipsis
var _hoisted_1$173 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$172(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$173, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("circle", {
			cx: "12",
			cy: "12",
			r: "1"
		}),
		createBaseVNode("circle", {
			cx: "19",
			cy: "12",
			r: "1"
		}),
		createBaseVNode("circle", {
			cx: "5",
			cy: "12",
			r: "1"
		})
	], -1)])]);
}
var ellipsis_default = markRaw({
	name: "lucide-ellipsis",
	render: render$172
});
//#endregion
//#region ~icons/lucide/ellipsis-vertical
var _hoisted_1$172 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$171(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$172, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("circle", {
			cx: "12",
			cy: "12",
			r: "1"
		}),
		createBaseVNode("circle", {
			cx: "12",
			cy: "5",
			r: "1"
		}),
		createBaseVNode("circle", {
			cx: "12",
			cy: "19",
			r: "1"
		})
	], -1)])]);
}
var ellipsis_vertical_default = markRaw({
	name: "lucide-ellipsis-vertical",
	render: render$171
});
//#endregion
//#region ~icons/lucide/equal
var _hoisted_1$171 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$170(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$171, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M5 9h14M5 15h14"
	}, null, -1)])]);
}
var equal_default = markRaw({
	name: "lucide-equal",
	render: render$170
});
//#endregion
//#region ~icons/lucide/expand
var _hoisted_1$170 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$169(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$170, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m15 15l6 6M15 9l6-6m0 13v5h-5m5-13V3h-5M3 16v5h5m-5 0l6-6M3 8V3h5m1 6L3 3"
	}, null, -1)])]);
}
var expand_default = markRaw({
	name: "lucide-expand",
	render: render$169
});
//#endregion
//#region ~icons/lucide/external-link
var _hoisted_1$169 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$168(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$169, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
	}, null, -1)])]);
}
var external_link_default = markRaw({
	name: "lucide-external-link",
	render: render$168
});
//#endregion
//#region ~icons/lucide/eye
var _hoisted_1$168 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$167(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$168, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }), createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "3"
	})], -1)])]);
}
var eye_default = markRaw({
	name: "lucide-eye",
	render: render$167
});
//#endregion
//#region ~icons/lucide/eye-off
var _hoisted_1$167 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$166(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$167, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242" }), createBaseVNode("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" })], -1)])]);
}
var eye_off_default = markRaw({
	name: "lucide-eye-off",
	render: render$166
});
//#endregion
//#region ~icons/lucide/file
var _hoisted_1$166 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$165(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$166, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), createBaseVNode("path", { d: "M14 2v5a1 1 0 0 0 1 1h5" })], -1)])]);
}
var file_default = markRaw({
	name: "lucide-file",
	render: render$165
});
//#endregion
//#region ~icons/lucide/file-archive
var _hoisted_1$165 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$164(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$165, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" }),
		createBaseVNode("path", { d: "M14 2v5a1 1 0 0 0 1 1h5M8 12v-1m0 7v-2m0-9V6" }),
		createBaseVNode("circle", {
			cx: "8",
			cy: "20",
			r: "2"
		})
	], -1)])]);
}
var file_archive_default = markRaw({
	name: "lucide-file-archive",
	render: render$164
});
//#endregion
//#region ~icons/lucide/file-code
var _hoisted_1$164 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$163(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$164, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), createBaseVNode("path", { d: "M14 2v5a1 1 0 0 0 1 1h5m-10 4.5L8 15l2 2.5m4-5l2 2.5l-2 2.5" })], -1)])]);
}
var file_code_default = markRaw({
	name: "lucide-file-code",
	render: render$163
});
//#endregion
//#region ~icons/lucide/file-diff
var _hoisted_1$163 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$162(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$163, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2zm3-12h6m-3 3V7M9 17h6"
	}, null, -1)])]);
}
var file_diff_default = markRaw({
	name: "lucide-file-diff",
	render: render$162
});
//#endregion
//#region ~icons/lucide/file-down
var _hoisted_1$162 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$161(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$162, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), createBaseVNode("path", { d: "M14 2v5a1 1 0 0 0 1 1h5m-8 10v-6m-3 3l3 3l3-3" })], -1)])]);
}
var file_down_default = markRaw({
	name: "lucide-file-down",
	render: render$161
});
//#endregion
//#region ~icons/lucide/file-input
var _hoisted_1$161 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$160(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$161, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" }), createBaseVNode("path", { d: "M14 2v5a1 1 0 0 0 1 1h5M2 15h10m-3 3l3-3l-3-3" })], -1)])]);
}
var file_input_default = markRaw({
	name: "lucide-file-input",
	render: render$160
});
//#endregion
//#region ~icons/lucide/file-output
var _hoisted_1$160 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$159(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$160, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127" }), createBaseVNode("path", { d: "M14 2v5a1 1 0 0 0 1 1h5M5 11l-3 3m3 3l-3-3h10" })], -1)])]);
}
var file_output_default = markRaw({
	name: "lucide-file-output",
	render: render$159
});
//#endregion
//#region ~icons/lucide/file-text
var _hoisted_1$159 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$158(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$159, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), createBaseVNode("path", { d: "M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8" })], -1)])]);
}
var file_text_default = markRaw({
	name: "lucide-file-text",
	render: render$158
});
//#endregion
//#region ~icons/lucide/files
var _hoisted_1$158 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$157(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$158, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }), createBaseVNode("path", { d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706zM5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" })], -1)])]);
}
var files_default = markRaw({
	name: "lucide-files",
	render: render$157
});
//#endregion
//#region ~icons/lucide/fingerprint
var _hoisted_1$157 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$156(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$157, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6" }), createBaseVNode("path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2" })], -1)])]);
}
var fingerprint_default = markRaw({
	name: "lucide-fingerprint",
	render: render$156
});
//#endregion
//#region ~icons/lucide/flame
var _hoisted_1$156 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$155(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$156, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
	}, null, -1)])]);
}
var flame_default = markRaw({
	name: "lucide-flame",
	render: render$155
});
//#endregion
//#region ~icons/lucide/flask-conical
var _hoisted_1$155 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$154(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$155, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"
	}, null, -1)])]);
}
var flask_conical_default = markRaw({
	name: "lucide-flask-conical",
	render: render$154
});
//#endregion
//#region ~icons/lucide/folder
var _hoisted_1$154 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$153(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$154, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
	}, null, -1)])]);
}
var folder_default = markRaw({
	name: "lucide-folder",
	render: render$153
});
//#endregion
//#region ~icons/lucide/folder-open
var _hoisted_1$153 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$152(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$153, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
	}, null, -1)])]);
}
var folder_open_default = markRaw({
	name: "lucide-folder-open",
	render: render$152
});
//#endregion
//#region ~icons/lucide/folder-plus
var _hoisted_1$152 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$151(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$152, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
	}, null, -1)])]);
}
var folder_plus_default = markRaw({
	name: "lucide-folder-plus",
	render: render$151
});
//#endregion
//#region ~icons/lucide/funnel
var _hoisted_1$151 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$150(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$151, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
	}, null, -1)])]);
}
var funnel_default = markRaw({
	name: "lucide-funnel",
	render: render$150
});
//#endregion
//#region ~icons/lucide/gauge
var _hoisted_1$150 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$149(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$150, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0"
	}, null, -1)])]);
}
var gauge_default = markRaw({
	name: "lucide-gauge",
	render: render$149
});
//#endregion
//#region ~icons/lucide/gem
var _hoisted_1$149 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$148(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$149, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M10.5 3L8 9l4 13l4-13l-2.5-6" }), createBaseVNode("path", { d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20" })], -1)])]);
}
var gem_default = markRaw({
	name: "lucide-gem",
	render: render$148
});
//#endregion
//#region ~icons/lucide/gift
var _hoisted_1$148 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$147(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$148, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 7v14m8-10v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8m3.5-4a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5a1 1 0 0 1 0 5" }), createBaseVNode("rect", {
		width: "18",
		height: "4",
		x: "3",
		y: "7",
		rx: "1"
	})], -1)])]);
}
var gift_default = markRaw({
	name: "lucide-gift",
	render: render$147
});
//#endregion
//#region ~icons/lucide/git-branch
var _hoisted_1$147 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$146(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$147, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M15 6a9 9 0 0 0-9 9V3" }),
		createBaseVNode("circle", {
			cx: "18",
			cy: "6",
			r: "3"
		}),
		createBaseVNode("circle", {
			cx: "6",
			cy: "18",
			r: "3"
		})
	], -1)])]);
}
var git_branch_default = markRaw({
	name: "lucide-git-branch",
	render: render$146
});
//#endregion
//#region ~icons/lucide/globe
var _hoisted_1$146 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$145(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$146, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" })], -1)])]);
}
var globe_default = markRaw({
	name: "lucide-globe",
	render: render$145
});
//#endregion
//#region ~icons/lucide/graduation-cap
var _hoisted_1$145 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$144(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$145, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" }), createBaseVNode("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })], -1)])]);
}
var graduation_cap_default = markRaw({
	name: "lucide-graduation-cap",
	render: render$144
});
//#endregion
//#region ~icons/lucide/grid-2x2
var _hoisted_1$144 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$143(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$144, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 3v18m-9-9h18" }), createBaseVNode("rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2"
	})], -1)])]);
}
var grid_2x2_default = markRaw({
	name: "lucide-grid-2x2",
	render: render$143
});
//#endregion
//#region ~icons/lucide/grip-vertical
var _hoisted_1$143 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$142(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$143, [..._cache[0] || (_cache[0] = [createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"9\" cy=\"12\" r=\"1\"></circle><circle cx=\"9\" cy=\"5\" r=\"1\"></circle><circle cx=\"9\" cy=\"19\" r=\"1\"></circle><circle cx=\"15\" cy=\"12\" r=\"1\"></circle><circle cx=\"15\" cy=\"5\" r=\"1\"></circle><circle cx=\"15\" cy=\"19\" r=\"1\"></circle></g>", 1)])]);
}
var grip_vertical_default = markRaw({
	name: "lucide-grip-vertical",
	render: render$142
});
//#endregion
//#region ~icons/lucide/group
var _hoisted_1$142 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$141(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$142, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M3 7V5c0-1.1.9-2 2-2h2m10 0h2c1.1 0 2 .9 2 2v2m0 10v2c0 1.1-.9 2-2 2h-2M7 21H5c-1.1 0-2-.9-2-2v-2" }),
		createBaseVNode("rect", {
			width: "7",
			height: "5",
			x: "7",
			y: "7",
			rx: "1"
		}),
		createBaseVNode("rect", {
			width: "7",
			height: "5",
			x: "10",
			y: "12",
			rx: "1"
		})
	], -1)])]);
}
var group_default = markRaw({
	name: "lucide-group",
	render: render$141
});
//#endregion
//#region ~icons/lucide/hand-coins
var _hoisted_1$141 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$140(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$141, [..._cache[0] || (_cache[0] = [createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17\"></path><path d=\"m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6\"></path><circle cx=\"16\" cy=\"9\" r=\"2.9\"></circle><circle cx=\"6\" cy=\"5\" r=\"3\"></circle></g>", 1)])]);
}
var hand_coins_default = markRaw({
	name: "lucide-hand-coins",
	render: render$140
});
//#endregion
//#region ~icons/lucide/handshake
var _hoisted_1$140 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$139(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$140, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "m11 17l2 2a1 1 0 1 0 3-3" }),
		createBaseVNode("path", { d: "m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }),
		createBaseVNode("path", { d: "m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" })
	], -1)])]);
}
var handshake_default = markRaw({
	name: "lucide-handshake",
	render: render$139
});
//#endregion
//#region ~icons/lucide/hard-drive
var _hoisted_1$139 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$138(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$139, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M10 16h.01m-7.798-4.423a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zm19.734.436H2.054M6 16h.01"
	}, null, -1)])]);
}
var hard_drive_default = markRaw({
	name: "lucide-hard-drive",
	render: render$138
});
//#endregion
//#region ~icons/lucide/hard-drive-download
var _hoisted_1$138 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$137(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$138, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M12 2v8m4-4l-4 4l-4-4" }),
		createBaseVNode("rect", {
			width: "20",
			height: "8",
			x: "2",
			y: "14",
			rx: "2"
		}),
		createBaseVNode("path", { d: "M6 18h.01M10 18h.01" })
	], -1)])]);
}
var hard_drive_download_default = markRaw({
	name: "lucide-hard-drive-download",
	render: render$137
});
//#endregion
//#region ~icons/lucide/hash
var _hoisted_1$137 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$136(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$137, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"
	}, null, -1)])]);
}
var hash_default = markRaw({
	name: "lucide-hash",
	render: render$136
});
//#endregion
//#region ~icons/lucide/heading-1
var _hoisted_1$136 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$135(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$136, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 12h8m-8 6V6m8 12V6m5 6l3-2v8"
	}, null, -1)])]);
}
var heading_1_default = markRaw({
	name: "lucide-heading-1",
	render: render$135
});
//#endregion
//#region ~icons/lucide/heading-2
var _hoisted_1$135 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$134(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$135, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 12h8m-8 6V6m8 12V6m9 12h-4c0-4 4-3 4-6c0-1.5-2-2.5-4-1"
	}, null, -1)])]);
}
var heading_2_default = markRaw({
	name: "lucide-heading-2",
	render: render$134
});
//#endregion
//#region ~icons/lucide/heading-3
var _hoisted_1$134 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$133(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$134, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 12h8m-8 6V6m8 12V6m5.5 4.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2m-2 3.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"
	}, null, -1)])]);
}
var heading_3_default = markRaw({
	name: "lucide-heading-3",
	render: render$133
});
//#endregion
//#region ~icons/lucide/history
var _hoisted_1$133 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$132(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$133, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }), createBaseVNode("path", { d: "M3 3v5h5m4-1v5l4 2" })], -1)])]);
}
var history_default = markRaw({
	name: "lucide-history",
	render: render$132
});
//#endregion
//#region ~icons/lucide/hourglass
var _hoisted_1$132 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$131(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$132, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
	}, null, -1)])]);
}
var hourglass_default = markRaw({
	name: "lucide-hourglass",
	render: render$131
});
//#endregion
//#region ~icons/lucide/house
var _hoisted_1$131 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$130(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$131, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }), createBaseVNode("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })], -1)])]);
}
var house_default = markRaw({
	name: "lucide-house",
	render: render$130
});
//#endregion
//#region ~icons/lucide/image
var _hoisted_1$130 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$129(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$130, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "3",
			rx: "2",
			ry: "2"
		}),
		createBaseVNode("circle", {
			cx: "9",
			cy: "9",
			r: "2"
		}),
		createBaseVNode("path", { d: "m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
	], -1)])]);
}
var image_default = markRaw({
	name: "lucide-image",
	render: render$129
});
//#endregion
//#region ~icons/lucide/inbox
var _hoisted_1$129 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$128(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$129, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }), createBaseVNode("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11" })], -1)])]);
}
var inbox_default = markRaw({
	name: "lucide-inbox",
	render: render$128
});
//#endregion
//#region ~icons/lucide/info
var _hoisted_1$128 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$127(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$128, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M12 16v-4m0-4h.01" })], -1)])]);
}
var info_default = markRaw({
	name: "lucide-info",
	render: render$127
});
//#endregion
//#region ~icons/lucide/italic
var _hoisted_1$127 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$126(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$127, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M19 4h-9m4 16H5M15 4L9 20"
	}, null, -1)])]);
}
var italic_default = markRaw({
	name: "lucide-italic",
	render: render$126
});
//#endregion
//#region ~icons/lucide/key-round
var _hoisted_1$126 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$125(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$126, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }), createBaseVNode("circle", {
		cx: "16.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor"
	})], -1)])]);
}
var key_round_default = markRaw({
	name: "lucide-key-round",
	render: render$125
});
//#endregion
//#region ~icons/lucide/languages
var _hoisted_1$125 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$124(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$125, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
	}, null, -1)])]);
}
var languages_default = markRaw({
	name: "lucide-languages",
	render: render$124
});
//#endregion
//#region ~icons/lucide/layers
var _hoisted_1$124 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$123(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$124, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }),
		createBaseVNode("path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }),
		createBaseVNode("path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" })
	], -1)])]);
}
var layers_default = markRaw({
	name: "lucide-layers",
	render: render$123
});
//#endregion
//#region ~icons/lucide/layout-template
var _hoisted_1$123 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$122(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$123, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("rect", {
			width: "18",
			height: "7",
			x: "3",
			y: "3",
			rx: "1"
		}),
		createBaseVNode("rect", {
			width: "9",
			height: "7",
			x: "3",
			y: "14",
			rx: "1"
		}),
		createBaseVNode("rect", {
			width: "5",
			height: "7",
			x: "16",
			y: "14",
			rx: "1"
		})
	], -1)])]);
}
var layout_template_default = markRaw({
	name: "lucide-layout-template",
	render: render$122
});
//#endregion
//#region ~icons/lucide/lightbulb
var _hoisted_1$122 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$121(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$122, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
	}, null, -1)])]);
}
var lightbulb_default = markRaw({
	name: "lucide-lightbulb",
	render: render$121
});
//#endregion
//#region ~icons/lucide/link
var _hoisted_1$121 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$120(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$121, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), createBaseVNode("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })], -1)])]);
}
var link_default = markRaw({
	name: "lucide-link",
	render: render$120
});
//#endregion
//#region ~icons/lucide/list
var _hoisted_1$120 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$119(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$120, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"
	}, null, -1)])]);
}
var list_default = markRaw({
	name: "lucide-list",
	render: render$119
});
//#endregion
//#region ~icons/lucide/list-checks
var _hoisted_1$119 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$118(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$119, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4M3 7l2 2l4-4"
	}, null, -1)])]);
}
var list_checks_default = markRaw({
	name: "lucide-list-checks",
	render: render$118
});
//#endregion
//#region ~icons/lucide/list-ordered
var _hoisted_1$118 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$117(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$118, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M11 5h10m-10 7h10m-10 7h10M4 4h1v5M4 9h2m.5 11H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"
	}, null, -1)])]);
}
var list_ordered_default = markRaw({
	name: "lucide-list-ordered",
	render: render$117
});
//#endregion
//#region ~icons/lucide/list-plus
var _hoisted_1$117 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$116(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$117, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M16 5H3m8 7H3m13 7H3M18 9v6m3-3h-6"
	}, null, -1)])]);
}
var list_plus_default = markRaw({
	name: "lucide-list-plus",
	render: render$116
});
//#endregion
//#region ~icons/lucide/list-tree
var _hoisted_1$116 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$115(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$116, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M8 5h13m-8 7h8m-8 7h8M3 10a2 2 0 0 0 2 2h3" }), createBaseVNode("path", { d: "M3 5v12a2 2 0 0 0 2 2h3" })], -1)])]);
}
var list_tree_default = markRaw({
	name: "lucide-list-tree",
	render: render$115
});
//#endregion
//#region ~icons/lucide/loader-circle
var _hoisted_1$115 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$114(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$115, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M21 12a9 9 0 1 1-6.219-8.56"
	}, null, -1)])]);
}
var loader_circle_default = markRaw({
	name: "lucide-loader-circle",
	render: render$114
});
//#endregion
//#region ~icons/lucide/loader2
var _hoisted_1$114 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$113(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$114, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M21 12a9 9 0 1 1-6.219-8.56"
	}, null, -1)])]);
}
var loader2_default = markRaw({
	name: "lucide-loader2",
	render: render$113
});
//#endregion
//#region ~icons/lucide/lock
var _hoisted_1$113 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$112(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$113, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "18",
		height: "11",
		x: "3",
		y: "11",
		rx: "2",
		ry: "2"
	}), createBaseVNode("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })], -1)])]);
}
var lock_default = markRaw({
	name: "lucide-lock",
	render: render$112
});
//#endregion
//#region ~icons/lucide/log-in
var _hoisted_1$112 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$111(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$112, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
	}, null, -1)])]);
}
var log_in_default = markRaw({
	name: "lucide-log-in",
	render: render$111
});
//#endregion
//#region ~icons/lucide/log-out
var _hoisted_1$111 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$110(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$111, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
	}, null, -1)])]);
}
var log_out_default = markRaw({
	name: "lucide-log-out",
	render: render$110
});
//#endregion
//#region ~icons/lucide/mail
var _hoisted_1$110 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$109(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$110, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }), createBaseVNode("rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2"
	})], -1)])]);
}
var mail_default = markRaw({
	name: "lucide-mail",
	render: render$109
});
//#endregion
//#region ~icons/lucide/maximize
var _hoisted_1$109 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$108(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$109, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
	}, null, -1)])]);
}
var maximize_default = markRaw({
	name: "lucide-maximize",
	render: render$108
});
//#endregion
//#region ~icons/lucide/maximize-2
var _hoisted_1$108 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$107(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$108, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"
	}, null, -1)])]);
}
var maximize_2_default = markRaw({
	name: "lucide-maximize-2",
	render: render$107
});
//#endregion
//#region ~icons/lucide/menu
var _hoisted_1$107 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$106(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$107, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 5h16M4 12h16M4 19h16"
	}, null, -1)])]);
}
var menu_default = markRaw({
	name: "lucide-menu",
	render: render$106
});
//#endregion
//#region ~icons/lucide/message-circle
var _hoisted_1$106 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$105(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$106, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
	}, null, -1)])]);
}
var message_circle_default = markRaw({
	name: "lucide-message-circle",
	render: render$105
});
//#endregion
//#region ~icons/lucide/message-circle-plus
var _hoisted_1$105 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$104(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$105, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719M8 12h8m-4-4v8"
	}, null, -1)])]);
}
var message_circle_plus_default = markRaw({
	name: "lucide-message-circle-plus",
	render: render$104
});
//#endregion
//#region ~icons/lucide/message-square
var _hoisted_1$104 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$103(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$104, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
	}, null, -1)])]);
}
var message_square_default = markRaw({
	name: "lucide-message-square",
	render: render$103
});
//#endregion
//#region ~icons/lucide/message-square-plus
var _hoisted_1$103 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$102(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$103, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM12 8v6m-3-3h6"
	}, null, -1)])]);
}
var message_square_plus_default = markRaw({
	name: "lucide-message-square-plus",
	render: render$102
});
//#endregion
//#region ~icons/lucide/messages-square
var _hoisted_1$102 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$101(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$102, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"
	}, null, -1)])]);
}
var messages_square_default = markRaw({
	name: "lucide-messages-square",
	render: render$101
});
//#endregion
//#region ~icons/lucide/mic
var _hoisted_1$101 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$100(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$101, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 19v3m7-12v2a7 7 0 0 1-14 0v-2" }), createBaseVNode("rect", {
		width: "6",
		height: "13",
		x: "9",
		y: "2",
		rx: "3"
	})], -1)])]);
}
var mic_default = markRaw({
	name: "lucide-mic",
	render: render$100
});
//#endregion
//#region ~icons/lucide/milestone
var _hoisted_1$100 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$99(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$100, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 13v8m0-18v3m6.172 0a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
	}, null, -1)])]);
}
var milestone_default = markRaw({
	name: "lucide-milestone",
	render: render$99
});
//#endregion
//#region ~icons/lucide/minimize-2
var _hoisted_1$99 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$98(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$99, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"
	}, null, -1)])]);
}
var minimize_2_default = markRaw({
	name: "lucide-minimize-2",
	render: render$98
});
//#endregion
//#region ~icons/lucide/minus
var _hoisted_1$98 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$97(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$98, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M5 12h14"
	}, null, -1)])]);
}
var minus_default = markRaw({
	name: "lucide-minus",
	render: render$97
});
//#endregion
//#region ~icons/lucide/mouse-pointer
var _hoisted_1$97 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$96(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$97, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
	}, null, -1)])]);
}
var mouse_pointer_default = markRaw({
	name: "lucide-mouse-pointer",
	render: render$96
});
//#endregion
//#region ~icons/lucide/network
var _hoisted_1$96 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$95(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$96, [..._cache[0] || (_cache[0] = [createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"6\" height=\"6\" x=\"16\" y=\"16\" rx=\"1\"></rect><rect width=\"6\" height=\"6\" x=\"2\" y=\"16\" rx=\"1\"></rect><rect width=\"6\" height=\"6\" x=\"9\" y=\"2\" rx=\"1\"></rect><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8\"></path></g>", 1)])]);
}
var network_default = markRaw({
	name: "lucide-network",
	render: render$95
});
//#endregion
//#region ~icons/lucide/notebook-pen
var _hoisted_1$95 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$94(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$95, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4M2 6h4m-4 4h4m-4 4h4m-4 4h4" }), createBaseVNode("path", { d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" })], -1)])]);
}
var notebook_pen_default = markRaw({
	name: "lucide-notebook-pen",
	render: render$94
});
//#endregion
//#region ~icons/lucide/package-open
var _hoisted_1$94 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$93(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$94, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
		createBaseVNode("path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
		createBaseVNode("path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z" })
	], -1)])]);
}
var package_open_default = markRaw({
	name: "lucide-package-open",
	render: render$93
});
//#endregion
//#region ~icons/lucide/palette
var _hoisted_1$93 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$92(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$93, [..._cache[0] || (_cache[0] = [createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z\"></path><circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"></circle><circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\"></circle><circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"></circle><circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle></g>", 1)])]);
}
var palette_default = markRaw({
	name: "lucide-palette",
	render: render$92
});
//#endregion
//#region ~icons/lucide/panel-left
var _hoisted_1$92 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$91(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$92, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2"
	}), createBaseVNode("path", { d: "M9 3v18" })], -1)])]);
}
var panel_left_default = markRaw({
	name: "lucide-panel-left",
	render: render$91
});
//#endregion
//#region ~icons/lucide/panel-left-close
var _hoisted_1$91 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$90(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$91, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2"
	}), createBaseVNode("path", { d: "M9 3v18m7-6l-3-3l3-3" })], -1)])]);
}
var panel_left_close_default = markRaw({
	name: "lucide-panel-left-close",
	render: render$90
});
//#endregion
//#region ~icons/lucide/panel-right
var _hoisted_1$90 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$89(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$90, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2"
	}), createBaseVNode("path", { d: "M15 3v18" })], -1)])]);
}
var panel_right_default = markRaw({
	name: "lucide-panel-right",
	render: render$89
});
//#endregion
//#region ~icons/lucide/paperclip
var _hoisted_1$89 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$88(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$89, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m16 6l-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"
	}, null, -1)])]);
}
var paperclip_default = markRaw({
	name: "lucide-paperclip",
	render: render$88
});
//#endregion
//#region ~icons/lucide/pause
var _hoisted_1$88 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$87(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$88, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "5",
		height: "18",
		x: "14",
		y: "3",
		rx: "1"
	}), createBaseVNode("rect", {
		width: "5",
		height: "18",
		x: "5",
		y: "3",
		rx: "1"
	})], -1)])]);
}
var pause_default = markRaw({
	name: "lucide-pause",
	render: render$87
});
//#endregion
//#region ~icons/lucide/pen
var _hoisted_1$87 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$86(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$87, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
	}, null, -1)])]);
}
var pen_default = markRaw({
	name: "lucide-pen",
	render: render$86
});
//#endregion
//#region ~icons/lucide/pencil
var _hoisted_1$86 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$85(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$86, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
	}, null, -1)])]);
}
var pencil_default = markRaw({
	name: "lucide-pencil",
	render: render$85
});
//#endregion
//#region ~icons/lucide/pencil-off
var _hoisted_1$85 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$84(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$85, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m10 10l-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982m-1.171-6.81l4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353M15 5l4 4M2 2l20 20"
	}, null, -1)])]);
}
var pencil_off_default = markRaw({
	name: "lucide-pencil-off",
	render: render$84
});
//#endregion
//#region ~icons/lucide/picture-in-picture-2
var _hoisted_1$84 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$83(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$84, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }), createBaseVNode("rect", {
		width: "10",
		height: "7",
		x: "12",
		y: "13",
		rx: "2"
	})], -1)])]);
}
var picture_in_picture_2_default = markRaw({
	name: "lucide-picture-in-picture-2",
	render: render$83
});
//#endregion
//#region ~icons/lucide/pin
var _hoisted_1$83 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$82(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$83, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z"
	}, null, -1)])]);
}
var pin_default = markRaw({
	name: "lucide-pin",
	render: render$82
});
//#endregion
//#region ~icons/lucide/play
var _hoisted_1$82 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$81(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$82, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
	}, null, -1)])]);
}
var play_default = markRaw({
	name: "lucide-play",
	render: render$81
});
//#endregion
//#region ~icons/lucide/plug
var _hoisted_1$81 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$80(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$81, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 22v-5m3-9V2m2 6a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1zM9 8V2"
	}, null, -1)])]);
}
var plug_default = markRaw({
	name: "lucide-plug",
	render: render$80
});
//#endregion
//#region ~icons/lucide/plug-zap
var _hoisted_1$80 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$79(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$80, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6l-2.3 2.3a2.4 2.4 0 0 0 0 3.4ZM2 22l3-3m2.5-5.5L10 11m.5 5.5L13 14m5-11l-4 4h6l-4 4"
	}, null, -1)])]);
}
var plug_zap_default = markRaw({
	name: "lucide-plug-zap",
	render: render$79
});
//#endregion
//#region ~icons/lucide/plus
var _hoisted_1$79 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$78(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$79, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M5 12h14m-7-7v14"
	}, null, -1)])]);
}
var plus_default = markRaw({
	name: "lucide-plus",
	render: render$78
});
//#endregion
//#region ~icons/lucide/pocket-knife
var _hoisted_1$78 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$77(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$78, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }), createBaseVNode("path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" })], -1)])]);
}
var pocket_knife_default = markRaw({
	name: "lucide-pocket-knife",
	render: render$77
});
//#endregion
//#region ~icons/lucide/power
var _hoisted_1$77 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$76(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$77, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
	}, null, -1)])]);
}
var power_default = markRaw({
	name: "lucide-power",
	render: render$76
});
//#endregion
//#region ~icons/lucide/quote
var _hoisted_1$76 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$75(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$76, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
	}, null, -1)])]);
}
var quote_default = markRaw({
	name: "lucide-quote",
	render: render$75
});
//#endregion
//#region ~icons/lucide/redo-2
var _hoisted_1$75 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$74(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$75, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "m15 14l5-5l-5-5" }), createBaseVNode("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })], -1)])]);
}
var redo_2_default = markRaw({
	name: "lucide-redo-2",
	render: render$74
});
//#endregion
//#region ~icons/lucide/refresh-cw
var _hoisted_1$74 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$73(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$74, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" }),
		createBaseVNode("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" }),
		createBaseVNode("path", { d: "M8 16H3v5" })
	], -1)])]);
}
var refresh_cw_default = markRaw({
	name: "lucide-refresh-cw",
	render: render$73
});
//#endregion
//#region ~icons/lucide/remove-formatting
var _hoisted_1$73 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$72(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$73, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"
	}, null, -1)])]);
}
var remove_formatting_default = markRaw({
	name: "lucide-remove-formatting",
	render: render$72
});
//#endregion
//#region ~icons/lucide/rss
var _hoisted_1$72 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$71(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$72, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }), createBaseVNode("circle", {
		cx: "5",
		cy: "19",
		r: "1"
	})], -1)])]);
}
var rss_default = markRaw({
	name: "lucide-rss",
	render: render$71
});
//#endregion
//#region ~icons/lucide/satellite-dish
var _hoisted_1$71 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$70(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$71, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"
	}, null, -1)])]);
}
var satellite_dish_default = markRaw({
	name: "lucide-satellite-dish",
	render: render$70
});
//#endregion
//#region ~icons/lucide/save
var _hoisted_1$70 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$69(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$70, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }), createBaseVNode("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" })], -1)])]);
}
var save_default = markRaw({
	name: "lucide-save",
	render: render$69
});
//#endregion
//#region ~icons/lucide/scale
var _hoisted_1$69 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$68(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$69, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7" }), createBaseVNode("path", { d: "M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10" })], -1)])]);
}
var scale_default = markRaw({
	name: "lucide-scale",
	render: render$68
});
//#endregion
//#region ~icons/lucide/scissors
var _hoisted_1$68 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$67(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$68, [..._cache[0] || (_cache[0] = [createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M8.12 8.12L12 12m8-8L8.12 15.88\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M14.8 14.8L20 20\"></path></g>", 1)])]);
}
var scissors_default = markRaw({
	name: "lucide-scissors",
	render: render$67
});
//#endregion
//#region ~icons/lucide/scroll-text
var _hoisted_1$67 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$66(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$67, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4" }), createBaseVNode("path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" })], -1)])]);
}
var scroll_text_default = markRaw({
	name: "lucide-scroll-text",
	render: render$66
});
//#endregion
//#region ~icons/lucide/search
var _hoisted_1$66 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$65(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$66, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "m21 21l-4.34-4.34" }), createBaseVNode("circle", {
		cx: "11",
		cy: "11",
		r: "8"
	})], -1)])]);
}
var search_default = markRaw({
	name: "lucide-search",
	render: render$65
});
//#endregion
//#region ~icons/lucide/send
var _hoisted_1$65 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$64(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$65, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
	}, null, -1)])]);
}
var send_default = markRaw({
	name: "lucide-send",
	render: render$64
});
//#endregion
//#region ~icons/lucide/server
var _hoisted_1$64 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$63(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$64, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("rect", {
			width: "20",
			height: "8",
			x: "2",
			y: "2",
			rx: "2",
			ry: "2"
		}),
		createBaseVNode("rect", {
			width: "20",
			height: "8",
			x: "2",
			y: "14",
			rx: "2",
			ry: "2"
		}),
		createBaseVNode("path", { d: "M6 6h.01M6 18h.01" })
	], -1)])]);
}
var server_default = markRaw({
	name: "lucide-server",
	render: render$63
});
//#endregion
//#region ~icons/lucide/settings
var _hoisted_1$63 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$62(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$63, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" }), createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "3"
	})], -1)])]);
}
var settings_default = markRaw({
	name: "lucide-settings",
	render: render$62
});
//#endregion
//#region ~icons/lucide/settings-2
var _hoisted_1$62 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$61(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$62, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M14 17H5M19 7h-9" }),
		createBaseVNode("circle", {
			cx: "17",
			cy: "17",
			r: "3"
		}),
		createBaseVNode("circle", {
			cx: "7",
			cy: "7",
			r: "3"
		})
	], -1)])]);
}
var settings_2_default = markRaw({
	name: "lucide-settings-2",
	render: render$61
});
//#endregion
//#region ~icons/lucide/share
var _hoisted_1$61 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$60(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$61, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
	}, null, -1)])]);
}
var share_default = markRaw({
	name: "lucide-share",
	render: render$60
});
//#endregion
//#region ~icons/lucide/shield
var _hoisted_1$60 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$59(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$60, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
	}, null, -1)])]);
}
var shield_default = markRaw({
	name: "lucide-shield",
	render: render$59
});
//#endregion
//#region ~icons/lucide/shield-half
var _hoisted_1$59 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$58(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$59, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8 9V2"
	}, null, -1)])]);
}
var shield_half_default = markRaw({
	name: "lucide-shield-half",
	render: render$58
});
//#endregion
//#region ~icons/lucide/shield-user
var _hoisted_1$58 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$57(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$58, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }),
		createBaseVNode("path", { d: "M6.376 18.91a6 6 0 0 1 11.249.003" }),
		createBaseVNode("circle", {
			cx: "12",
			cy: "11",
			r: "4"
		})
	], -1)])]);
}
var shield_user_default = markRaw({
	name: "lucide-shield-user",
	render: render$57
});
//#endregion
//#region ~icons/lucide/shredder
var _hoisted_1$57 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$56(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$57, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" }), createBaseVNode("path", { d: "M14 2v5a1 1 0 0 0 1 1h5M10 22v-5m4 2v-2m4 3v-3M2 13h20M6 20v-3" })], -1)])]);
}
var shredder_default = markRaw({
	name: "lucide-shredder",
	render: render$56
});
//#endregion
//#region ~icons/lucide/sliders-horizontal
var _hoisted_1$56 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$55(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$56, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3"
	}, null, -1)])]);
}
var sliders_horizontal_default = markRaw({
	name: "lucide-sliders-horizontal",
	render: render$55
});
//#endregion
//#region ~icons/lucide/smile
var _hoisted_1$55 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$54(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$55, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), createBaseVNode("path", { d: "M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" })], -1)])]);
}
var smile_default = markRaw({
	name: "lucide-smile",
	render: render$54
});
//#endregion
//#region ~icons/lucide/sparkles
var _hoisted_1$54 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$53(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$54, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4" }), createBaseVNode("circle", {
		cx: "4",
		cy: "20",
		r: "2"
	})], -1)])]);
}
var sparkles_default = markRaw({
	name: "lucide-sparkles",
	render: render$53
});
//#endregion
//#region ~icons/lucide/split
var _hoisted_1$53 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$52(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$53, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M16 3h5v5M8 3H3v5" }), createBaseVNode("path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3m12 6l6-6" })], -1)])]);
}
var split_default = markRaw({
	name: "lucide-split",
	render: render$52
});
//#endregion
//#region ~icons/lucide/square
var _hoisted_1$52 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$51(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$52, [..._cache[0] || (_cache[0] = [createBaseVNode("rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		rx: "2"
	}, null, -1)])]);
}
var square_default = markRaw({
	name: "lucide-square",
	render: render$51
});
//#endregion
//#region ~icons/lucide/square-arrow-out-up-right
var _hoisted_1$51 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$50(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$51, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6m10 0l-9 9m3-9h6v6"
	}, null, -1)])]);
}
var square_arrow_out_up_right_default = markRaw({
	name: "lucide-square-arrow-out-up-right",
	render: render$50
});
//#endregion
//#region ~icons/lucide/square-check
var _hoisted_1$50 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$49(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$50, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2"
	}), createBaseVNode("path", { d: "m9 12l2 2l4-4" })], -1)])]);
}
var square_check_default = markRaw({
	name: "lucide-square-check",
	render: render$49
});
//#endregion
//#region ~icons/lucide/square-minus
var _hoisted_1$49 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$48(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$49, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2"
	}), createBaseVNode("path", { d: "M8 12h8" })], -1)])]);
}
var square_minus_default = markRaw({
	name: "lucide-square-minus",
	render: render$48
});
//#endregion
//#region ~icons/lucide/square-pen
var _hoisted_1$48 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$47(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$48, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }), createBaseVNode("path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" })], -1)])]);
}
var square_pen_default = markRaw({
	name: "lucide-square-pen",
	render: render$47
});
//#endregion
//#region ~icons/lucide/square-plus
var _hoisted_1$47 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$46(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$47, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2"
	}), createBaseVNode("path", { d: "M8 12h8m-4-4v8" })], -1)])]);
}
var square_plus_default = markRaw({
	name: "lucide-square-plus",
	render: render$46
});
//#endregion
//#region ~icons/lucide/star
var _hoisted_1$46 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$45(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$46, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
	}, null, -1)])]);
}
var star_default = markRaw({
	name: "lucide-star",
	render: render$45
});
//#endregion
//#region ~icons/lucide/sticky-note
var _hoisted_1$45 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$44(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$45, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" }), createBaseVNode("path", { d: "M15 3v5a1 1 0 0 0 1 1h5" })], -1)])]);
}
var sticky_note_default = markRaw({
	name: "lucide-sticky-note",
	render: render$44
});
//#endregion
//#region ~icons/lucide/strikethrough
var _hoisted_1$44 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$43(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$44, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6m-2-8h16"
	}, null, -1)])]);
}
var strikethrough_default = markRaw({
	name: "lucide-strikethrough",
	render: render$43
});
//#endregion
//#region ~icons/lucide/sun
var _hoisted_1$43 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$42(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$43, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "12",
		r: "4"
	}), createBaseVNode("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })], -1)])]);
}
var sun_default = markRaw({
	name: "lucide-sun",
	render: render$42
});
//#endregion
//#region ~icons/lucide/table
var _hoisted_1$42 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$41(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$42, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M12 3v18" }),
		createBaseVNode("rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "3",
			rx: "2"
		}),
		createBaseVNode("path", { d: "M3 9h18M3 15h18" })
	], -1)])]);
}
var table_default = markRaw({
	name: "lucide-table",
	render: render$41
});
//#endregion
//#region ~icons/lucide/tags
var _hoisted_1$41 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$40(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$41, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1zM2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" }), createBaseVNode("circle", {
		cx: "10.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor"
	})], -1)])]);
}
var tags_default = markRaw({
	name: "lucide-tags",
	render: render$40
});
//#endregion
//#region ~icons/lucide/telescope
var _hoisted_1$40 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$39(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$40, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "m10.065 12.493l-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44m-2.875 6.493l4.332-.924M16 21l-3.105-6.21" }),
		createBaseVNode("path", { d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455zM6.158 8.633l1.114 4.456M8 21l3.105-6.21" }),
		createBaseVNode("circle", {
			cx: "12",
			cy: "13",
			r: "2"
		})
	], -1)])]);
}
var telescope_default = markRaw({
	name: "lucide-telescope",
	render: render$39
});
//#endregion
//#region ~icons/lucide/terminal
var _hoisted_1$39 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$38(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$39, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 19h8M4 17l6-6l-6-6"
	}, null, -1)])]);
}
var terminal_default = markRaw({
	name: "lucide-terminal",
	render: render$38
});
//#endregion
//#region ~icons/lucide/thumbs-down
var _hoisted_1$38 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$37(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$38, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88M17 14V2"
	}, null, -1)])]);
}
var thumbs_down_default = markRaw({
	name: "lucide-thumbs-down",
	render: render$37
});
//#endregion
//#region ~icons/lucide/thumbs-up
var _hoisted_1$37 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$36(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$37, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88M7 10v12"
	}, null, -1)])]);
}
var thumbs_up_default = markRaw({
	name: "lucide-thumbs-up",
	render: render$36
});
//#endregion
//#region ~icons/lucide/timer
var _hoisted_1$36 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$35(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$36, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M10 2h4m-2 12l3-3" }), createBaseVNode("circle", {
		cx: "12",
		cy: "14",
		r: "8"
	})], -1)])]);
}
var timer_default = markRaw({
	name: "lucide-timer",
	render: render$35
});
//#endregion
//#region ~icons/lucide/toggle-right
var _hoisted_1$35 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$34(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$35, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "15",
		cy: "12",
		r: "3"
	}), createBaseVNode("rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "5",
		rx: "7"
	})], -1)])]);
}
var toggle_right_default = markRaw({
	name: "lucide-toggle-right",
	render: render$34
});
//#endregion
//#region ~icons/lucide/trash-2
var _hoisted_1$34 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$33(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$34, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
	}, null, -1)])]);
}
var trash_2_default = markRaw({
	name: "lucide-trash-2",
	render: render$33
});
//#endregion
//#region ~icons/lucide/tree-pine
var _hoisted_1$33 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$32(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$33, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"
	}, null, -1)])]);
}
var tree_pine_default = markRaw({
	name: "lucide-tree-pine",
	render: render$32
});
//#endregion
//#region ~icons/lucide/trending-down
var _hoisted_1$32 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$31(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$32, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M16 17h6v-6" }), createBaseVNode("path", { d: "m22 17l-8.5-8.5l-5 5L2 7" })], -1)])]);
}
var trending_down_default = markRaw({
	name: "lucide-trending-down",
	render: render$31
});
//#endregion
//#region ~icons/lucide/trending-up
var _hoisted_1$31 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$30(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$31, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M16 7h6v6" }), createBaseVNode("path", { d: "m22 7l-8.5 8.5l-5-5L2 17" })], -1)])]);
}
var trending_up_default = markRaw({
	name: "lucide-trending-up",
	render: render$30
});
//#endregion
//#region ~icons/lucide/triangle-alert
var _hoisted_1$30 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$29(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$30, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"
	}, null, -1)])]);
}
var triangle_alert_default = markRaw({
	name: "lucide-triangle-alert",
	render: render$29
});
//#endregion
//#region ~icons/lucide/type
var _hoisted_1$29 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$28(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$29, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6"
	}, null, -1)])]);
}
var type_default = markRaw({
	name: "lucide-type",
	render: render$28
});
//#endregion
//#region ~icons/lucide/underline
var _hoisted_1$28 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$27(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$28, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M6 4v6a6 6 0 0 0 12 0V4M4 20h16"
	}, null, -1)])]);
}
var underline_default = markRaw({
	name: "lucide-underline",
	render: render$27
});
//#endregion
//#region ~icons/lucide/undo-2
var _hoisted_1$27 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$26(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$27, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M9 14L4 9l5-5" }), createBaseVNode("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })], -1)])]);
}
var undo_2_default = markRaw({
	name: "lucide-undo-2",
	render: render$26
});
//#endregion
//#region ~icons/lucide/ungroup
var _hoisted_1$26 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$25(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$26, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("rect", {
		width: "8",
		height: "6",
		x: "5",
		y: "4",
		rx: "1"
	}), createBaseVNode("rect", {
		width: "8",
		height: "6",
		x: "11",
		y: "14",
		rx: "1"
	})], -1)])]);
}
var ungroup_default = markRaw({
	name: "lucide-ungroup",
	render: render$25
});
//#endregion
//#region ~icons/lucide/unlink
var _hoisted_1$25 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$24(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$25, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"
	}, null, -1)])]);
}
var unlink_default = markRaw({
	name: "lucide-unlink",
	render: render$24
});
//#endregion
//#region ~icons/lucide/unplug
var _hoisted_1$24 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$23(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$24, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m19 5l3-3M2 22l3-3m1.3 1.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6l-2.3 2.3a2.4 2.4 0 0 0 0 3.4Zm1.2-6.8L10 11m.5 5.5L13 14m-1-8l6 6l2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
	}, null, -1)])]);
}
var unplug_default = markRaw({
	name: "lucide-unplug",
	render: render$23
});
//#endregion
//#region ~icons/lucide/upload
var _hoisted_1$23 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$22(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$23, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
	}, null, -1)])]);
}
var upload_default = markRaw({
	name: "lucide-upload",
	render: render$22
});
//#endregion
//#region ~icons/lucide/user
var _hoisted_1$22 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$21(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$22, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), createBaseVNode("circle", {
		cx: "12",
		cy: "7",
		r: "4"
	})], -1)])]);
}
var user_default = markRaw({
	name: "lucide-user",
	render: render$21
});
//#endregion
//#region ~icons/lucide/user-check
var _hoisted_1$21 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$20(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$21, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), createBaseVNode("circle", {
		cx: "9",
		cy: "7",
		r: "4"
	})], -1)])]);
}
var user_check_default = markRaw({
	name: "lucide-user-check",
	render: render$20
});
//#endregion
//#region ~icons/lucide/user-lock
var _hoisted_1$20 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$19(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$20, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M19 16v-2a2 2 0 0 0-4 0v2m-5.5-1H7a4 4 0 0 0-4 4v2" }),
		createBaseVNode("circle", {
			cx: "10",
			cy: "7",
			r: "4"
		}),
		createBaseVNode("rect", {
			width: "8",
			height: "5",
			x: "13",
			y: "16",
			rx: ".899"
		})
	], -1)])]);
}
var user_lock_default = markRaw({
	name: "lucide-user-lock",
	render: render$19
});
//#endregion
//#region ~icons/lucide/user-pen
var _hoisted_1$19 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$18(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$19, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2m18.378-4.374a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }), createBaseVNode("circle", {
		cx: "10",
		cy: "7",
		r: "4"
	})], -1)])]);
}
var user_pen_default = markRaw({
	name: "lucide-user-pen",
	render: render$18
});
//#endregion
//#region ~icons/lucide/user-round
var _hoisted_1$18 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$17(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$18, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "12",
		cy: "8",
		r: "5"
	}), createBaseVNode("path", { d: "M20 21a8 8 0 0 0-16 0" })], -1)])]);
}
var user_round_default = markRaw({
	name: "lucide-user-round",
	render: render$17
});
//#endregion
//#region ~icons/lucide/user-round-key
var _hoisted_1$17 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$16(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$17, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("path", { d: "M19 11v6m0-4h2M2 21a8 8 0 0 1 12.868-6.349" }),
		createBaseVNode("circle", {
			cx: "10",
			cy: "8",
			r: "5"
		}),
		createBaseVNode("circle", {
			cx: "19",
			cy: "19",
			r: "2"
		})
	], -1)])]);
}
var user_round_key_default = markRaw({
	name: "lucide-user-round-key",
	render: render$16
});
//#endregion
//#region ~icons/lucide/users
var _hoisted_1$16 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$15(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$16, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }), createBaseVNode("circle", {
		cx: "9",
		cy: "7",
		r: "4"
	})], -1)])]);
}
var users_default = markRaw({
	name: "lucide-users",
	render: render$15
});
//#endregion
//#region ~icons/lucide/variable
var _hoisted_1$15 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$14(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$15, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6"
	}, null, -1)])]);
}
var variable_default = markRaw({
	name: "lucide-variable",
	render: render$14
});
//#endregion
//#region ~icons/lucide/vault
var _hoisted_1$14 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$13(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$14, [..._cache[0] || (_cache[0] = [createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"></rect><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle><path d=\"m7.9 7.9l2.7 2.7\"></path><circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle><path d=\"m13.4 10.6l2.7-2.7\"></path><circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"></circle><path d=\"m7.9 16.1l2.7-2.7\"></path><circle cx=\"16.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"></circle><path d=\"m13.4 13.4l2.7 2.7\"></path><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></g>", 1)])]);
}
var vault_default = markRaw({
	name: "lucide-vault",
	render: render$13
});
//#endregion
//#region ~icons/lucide/video
var _hoisted_1$13 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$12(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$13, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }), createBaseVNode("rect", {
		width: "14",
		height: "12",
		x: "2",
		y: "6",
		rx: "2"
	})], -1)])]);
}
var video_default = markRaw({
	name: "lucide-video",
	render: render$12
});
//#endregion
//#region ~icons/lucide/volume-2
var _hoisted_1$12 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$11(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$12, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728"
	}, null, -1)])]);
}
var volume_2_default = markRaw({
	name: "lucide-volume-2",
	render: render$11
});
//#endregion
//#region ~icons/lucide/volume-x
var _hoisted_1$11 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$10(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$11, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM22 9l-6 6m0-6l6 6"
	}, null, -1)])]);
}
var volume_x_default = markRaw({
	name: "lucide-volume-x",
	render: render$10
});
//#endregion
//#region ~icons/lucide/wallet
var _hoisted_1$10 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$9(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$10, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }), createBaseVNode("path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" })], -1)])]);
}
var wallet_default = markRaw({
	name: "lucide-wallet",
	render: render$9
});
//#endregion
//#region ~icons/lucide/wand-sparkles
var _hoisted_1$9 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$8(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$9, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"
	}, null, -1)])]);
}
var wand_sparkles_default = markRaw({
	name: "lucide-wand-sparkles",
	render: render$8
});
//#endregion
//#region ~icons/lucide/waypoints
var _hoisted_1$8 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$7(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._cache[0] || (_cache[0] = [createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"m10.586 5.414l-5.172 5.172m13.172 2.828l-5.172 5.172M6 12h12\"></path><circle cx=\"12\" cy=\"20\" r=\"2\"></circle><circle cx=\"12\" cy=\"4\" r=\"2\"></circle><circle cx=\"20\" cy=\"12\" r=\"2\"></circle><circle cx=\"4\" cy=\"12\" r=\"2\"></circle></g>", 1)])]);
}
var waypoints_default = markRaw({
	name: "lucide-waypoints",
	render: render$7
});
//#endregion
//#region ~icons/lucide/workflow
var _hoisted_1$7 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$6(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [
		createBaseVNode("rect", {
			width: "8",
			height: "8",
			x: "3",
			y: "3",
			rx: "2"
		}),
		createBaseVNode("path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }),
		createBaseVNode("rect", {
			width: "8",
			height: "8",
			x: "13",
			y: "13",
			rx: "2"
		})
	], -1)])]);
}
var workflow_default = markRaw({
	name: "lucide-workflow",
	render: render$6
});
//#endregion
//#region ~icons/lucide/wrench
var _hoisted_1$6 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$5(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
	}, null, -1)])]);
}
var wrench_default = markRaw({
	name: "lucide-wrench",
	render: render$5
});
//#endregion
//#region ~icons/lucide/x
var _hoisted_1$5 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$4(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M18 6L6 18M6 6l12 12"
	}, null, -1)])]);
}
var x_default = markRaw({
	name: "lucide-x",
	render: render$4
});
//#endregion
//#region ~icons/lucide/youtube
var _hoisted_1$4 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$3(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }), createBaseVNode("path", { d: "m10 15l5-3l-5-3z" })], -1)])]);
}
var youtube_default = markRaw({
	name: "lucide-youtube",
	render: render$3
});
//#endregion
//#region ~icons/lucide/zap
var _hoisted_1$3 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
	}, null, -1)])]);
}
var zap_default = markRaw({
	name: "lucide-zap",
	render: render$2
});
//#endregion
//#region ~icons/lucide/zoom-in
var _hoisted_1$2 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "11",
		cy: "11",
		r: "8"
	}), createBaseVNode("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })], -1)])]);
}
var zoom_in_default = markRaw({
	name: "lucide-zoom-in",
	render: render$1
});
//#endregion
//#region ~icons/lucide/zoom-out
var _hoisted_1$1 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("circle", {
		cx: "11",
		cy: "11",
		r: "8"
	}), createBaseVNode("path", { d: "m21 21l-4.35-4.35M8 11h6" })], -1)])]);
}
var zoom_out_default = markRaw({
	name: "lucide-zoom-out",
	render
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/icons.ts
/**
* Need to keep old icon names
* To support old project icons
* Which used to include all icons in instance
*/
var deprecatedIconSet = {
	variable: variable_default,
	"pop-out": pop_out_default,
	triangle: triangle_default,
	"status-completed": status_completed_default,
	"status-waiting": status_waiting_default,
	"status-error": status_error_default,
	"status-canceled": status_canceled_default,
	"status-new": status_new_default,
	"status-unknown": status_unknown_default,
	"status-warning": status_warning_default,
	"vector-square": vector_square_default,
	schema: schema_default,
	json: braces_default,
	binary: binary_default,
	text: text_default,
	toolbox: toolbox_default,
	slack: slack_default,
	linear: linear_default,
	telegram: telegram_default,
	discord: discord_default,
	spinner: spinner_default,
	xmark: x_default,
	mcp: mcp_default,
	"caret-up": chevron_up_default,
	"caret-down": chevron_down_default,
	"caret-right": chevron_right_default,
	"caret-left": chevron_left_default,
	"folder-plus": folder_plus_default,
	share: share_default,
	"user-check": user_check_default,
	"check-double": check_check_default,
	"exclamation-circle": circle_alert_default,
	circle: circle_default,
	"eye-slash": eye_off_default,
	folder: folder_default,
	"minus-circle": circle_minus_default,
	adjust: contrast_default,
	refresh: refresh_cw_default,
	vault: vault_default,
	"angle-double-left": chevrons_left_default,
	"angle-down": chevron_down_default,
	"angle-left": chevron_left_default,
	"angle-right": chevron_right_default,
	"angle-up": chevron_up_default,
	archive: archive_default,
	"arrow-left": arrow_left_default,
	"arrow-right": arrow_right_default,
	"arrow-up": arrow_up_default,
	"arrow-down": arrow_down_default,
	at: at_sign_default,
	ban: ban_default,
	"balance-scale-left": scale_default,
	bars: menu_default,
	bolt: zap_default,
	book: book_default,
	"box-open": package_open_default,
	bug: bug_default,
	brain: brain_default,
	calculator: calculator_default,
	calendar: calendar_default,
	"chart-bar": chart_column_decreasing_default,
	check: check_default,
	"check-circle": circle_check_default,
	"check-square": square_check_default,
	"chevron-left": chevron_left_default,
	"chevron-right": chevron_right_default,
	"chevron-down": chevron_down_default,
	"chevron-up": chevron_up_default,
	code: code_default,
	"code-branch": git_branch_default,
	cog: cog_default,
	cogs: cog_default,
	"columns-3-cog": columns_3_cog_default,
	comment: message_circle_default,
	comments: messages_square_default,
	clipboard: clipboard_default,
	"clipboard-check": clipboard_check_default,
	"clipboard-list": clipboard_list_default,
	clock: clock_default,
	clone: copy_default,
	cloud: cloud_default,
	"cloud-download-alt": cloud_download_default,
	compress: chevrons_up_down_default,
	copy: files_default,
	cube: box_default,
	cut: scissors_default,
	database: database_default,
	"dot-circle": circle_dot_default,
	"grip-lines-vertical": grip_lines_vertical_default,
	"grip-vertical": grip_vertical_default,
	edit: square_pen_default,
	"ellipsis-h": ellipsis_default,
	"ellipsis-v": ellipsis_vertical_default,
	envelope: mail_default,
	equals: equal_default,
	eye: eye_default,
	"exclamation-triangle": triangle_alert_default,
	expand: maximize_default,
	"expand-alt": maximize_2_default,
	"external-link-alt": external_link_default,
	"exchange-alt": arrow_left_right_default,
	file: file_default,
	"file-alt": file_text_default,
	"file-archive": file_archive_default,
	"file-code": file_code_default,
	"file-download": file_down_default,
	"file-export": file_output_default,
	"file-import": file_input_default,
	"file-pdf": file_text_default,
	filter: funnel_default,
	fingerprint: fingerprint_default,
	flask: flask_conical_default,
	"folder-open": folder_open_default,
	font: case_upper_default,
	gift: gift_default,
	globe: globe_default,
	"globe-americas": earth_default,
	"graduation-cap": graduation_cap_default,
	"hand-holding-usd": hand_coins_default,
	"hand-scissors": scissors_default,
	handshake: handshake_default,
	"hand-point-left": arrow_left_default,
	hashtag: hash_default,
	hdd: hard_drive_default,
	history: history_default,
	home: house_default,
	hourglass: hourglass_default,
	image: image_default,
	inbox: inbox_default,
	info: info_default,
	"info-circle": info_default,
	key: key_round_default,
	language: languages_default,
	"layer-group": layers_default,
	link: link_default,
	list: list_default,
	lightbulb: lightbulb_default,
	lock: lock_default,
	"map-signs": milestone_default,
	"mouse-pointer": mouse_pointer_default,
	"network-wired": network_default,
	palette: palette_default,
	pause: pause_default,
	"pause-circle": circle_pause_default,
	pen: pen_default,
	"pencil-alt": pencil_default,
	play: play_default,
	"play-circle": circle_play_default,
	plug: plug_default,
	"plug-zap": plug_zap_default,
	plus: plus_default,
	"plus-circle": circle_plus_default,
	"plus-square": square_plus_default,
	"project-diagram": waypoints_default,
	question: circle_help_default,
	"question-circle": circle_help_default,
	quote: quote_default,
	redo: redo_2_default,
	"remove-format": remove_formatting_default,
	robot: bot_default,
	rss: rss_default,
	save: save_default,
	"satellite-dish": satellite_dish_default,
	search: search_default,
	"search-minus": zoom_out_default,
	"search-plus": zoom_in_default,
	server: server_default,
	screwdriver: pocket_knife_default,
	smile: smile_default,
	"sign-in-alt": log_in_default,
	"sign-out-alt": log_out_default,
	"sliders-h": sliders_horizontal_default,
	"sticky-note": sticky_note_default,
	stop: square_default,
	stream: align_right_default,
	sun: sun_default,
	sync: refresh_cw_default,
	"sync-alt": refresh_cw_default,
	table: table_default,
	tags: tags_default,
	tasks: list_checks_default,
	terminal: terminal_default,
	"th-large": grid_2x2_default,
	timer: timer_default,
	thumbtack: pin_default,
	"thumbs-down": thumbs_down_default,
	"thumbs-up": thumbs_up_default,
	times: x_default,
	"times-circle": circle_x_default,
	tools: wrench_default,
	trash: trash_2_default,
	undo: undo_2_default,
	unlink: unlink_default,
	user: user_default,
	"user-circle": circle_user_round_default,
	"user-friends": user_round_default,
	users: users_default,
	video: video_default,
	tree: tree_pine_default,
	"user-lock": user_lock_default,
	gem: gem_default,
	download: hard_drive_download_default,
	"power-off": power_default,
	"paper-plane": send_default,
	bell: bell_default
};
var updatedIconSet = {
	anthropic: anthropic_default,
	"bolt-filled": bolt_filled_default,
	"filled-square": filled_square_default,
	"grip-lines-vertical": grip_lines_vertical_default,
	variable: variable_default,
	"pop-out": pop_out_default,
	triangle: triangle_default,
	"status-completed": status_completed_default,
	"status-waiting": status_waiting_default,
	"status-error": status_error_default,
	"status-canceled": status_canceled_default,
	"status-new": status_new_default,
	"status-unknown": status_unknown_default,
	"status-warning": status_warning_default,
	"star-filled": star_filled_default,
	"vector-square": vector_square_default,
	"continue-on-error": continue_default,
	"always-output-data": empty_output_default,
	"retry-on-fail": retry_default,
	"execute-once": run_once_default,
	schema: schema_default,
	json: braces_default,
	binary: binary_default,
	text: text_default,
	toolbox: toolbox_default,
	slack: slack_default,
	linear: linear_default,
	telegram: telegram_default,
	discord: discord_default,
	spinner: spinner_default,
	"node-dirty": node_dirty_default,
	"node-ellipsis": node_ellipsis_default,
	"node-execution-error": node_execution_error_default,
	"node-validation-error": node_validation_error_default,
	"node-pin": node_pin_default,
	"node-play": node_play_default,
	"node-power": node_power_default,
	"node-success": node_success_default,
	"node-trash": node_trash_default,
	mcp: mcp_default,
	lovable: lovable_default,
	resolver: resolver_default,
	form: form_default,
	webhook: webhook_default,
	"align-right": align_right_default,
	archive: archive_default,
	"archive-restore": archive_restore_default,
	"arrow-down": arrow_down_default,
	"arrow-left": arrow_left_default,
	"arrow-left-right": arrow_left_right_default,
	"arrow-right": arrow_right_default,
	"arrow-right-from-line": arrow_right_from_line_default,
	"arrow-right-to-line": arrow_right_to_line_default,
	"arrow-up": arrow_up_default,
	"arrow-up-right": arrow_up_right_default,
	"at-sign": at_sign_default,
	ban: ban_default,
	"badge-check": badge_check_default,
	bell: bell_default,
	blocks: blocks_default,
	bold: bold_default,
	book: book_default,
	"book-open": book_open_default,
	bot: bot_default,
	box: box_default,
	brain: brain_default,
	bug: bug_default,
	calculator: calculator_default,
	calendar: calendar_default,
	"case-upper": case_upper_default,
	"chart-column-decreasing": chart_column_decreasing_default,
	check: check_default,
	"check-check": check_check_default,
	"chevron-down": chevron_down_default,
	"chevron-left": chevron_left_default,
	"chevron-right": chevron_right_default,
	"chevron-up": chevron_up_default,
	"chevrons-left": chevrons_left_default,
	"chevrons-right": chevrons_right_default,
	"chevrons-down-up": chevrons_down_up_default,
	"chevrons-up-down": chevrons_up_down_default,
	circle: circle_default,
	"circle-alert": circle_alert_default,
	"circle-check": circle_check_default,
	"circle-dollar-sign": circle_dollar_sign_default,
	"circle-dot": circle_dot_default,
	"circle-ellipsis": circle_ellipsis_default,
	"circle-help": circle_help_default,
	"circle-minus": circle_minus_default,
	"circle-pause": circle_pause_default,
	"circle-play": circle_play_default,
	"circle-plus": circle_plus_default,
	"circle-user-round": circle_user_round_default,
	"circle-x": circle_x_default,
	clipboard: clipboard_default,
	"clipboard-check": clipboard_check_default,
	"clipboard-list": clipboard_list_default,
	clock: clock_default,
	cloud: cloud_default,
	"cloud-download": cloud_download_default,
	code: code_default,
	cog: cog_default,
	contrast: contrast_default,
	copy: copy_default,
	"corner-down-right": corner_down_right_default,
	crosshair: crosshair_default,
	database: database_default,
	"door-open": door_open_default,
	dot: dot_default,
	download: download_default,
	earth: earth_default,
	ellipsis: ellipsis_default,
	"ellipsis-vertical": ellipsis_vertical_default,
	equal: equal_default,
	expand: expand_default,
	"external-link": external_link_default,
	eye: eye_default,
	"eye-off": eye_off_default,
	file: file_default,
	"file-archive": file_archive_default,
	"file-code": file_code_default,
	"file-diff": file_diff_default,
	"file-down": file_down_default,
	"file-input": file_input_default,
	"file-output": file_output_default,
	"file-text": file_text_default,
	files: files_default,
	fingerprint: fingerprint_default,
	"flask-conical": flask_conical_default,
	folder: folder_default,
	"folder-open": folder_open_default,
	"folder-plus": folder_plus_default,
	funnel: funnel_default,
	gauge: gauge_default,
	gem: gem_default,
	gift: gift_default,
	"git-branch": git_branch_default,
	globe: globe_default,
	"graduation-cap": graduation_cap_default,
	"grid-2x2": grid_2x2_default,
	"grip-vertical": grip_vertical_default,
	group: group_default,
	"hand-coins": hand_coins_default,
	handshake: handshake_default,
	"hard-drive": hard_drive_default,
	"hard-drive-download": hard_drive_download_default,
	hash: hash_default,
	"heading-1": heading_1_default,
	"heading-2": heading_2_default,
	"heading-3": heading_3_default,
	history: history_default,
	hourglass: hourglass_default,
	house: house_default,
	image: image_default,
	inbox: inbox_default,
	info: info_default,
	italic: italic_default,
	"key-round": key_round_default,
	languages: languages_default,
	layers: layers_default,
	"layout-template": layout_template_default,
	lightbulb: lightbulb_default,
	link: link_default,
	list: list_default,
	"list-checks": list_checks_default,
	"list-plus": list_plus_default,
	"list-tree": list_tree_default,
	"list-ordered": list_ordered_default,
	lock: lock_default,
	"log-in": log_in_default,
	"log-out": log_out_default,
	mail: mail_default,
	"minimize-2": minimize_2_default,
	maximize: maximize_default,
	"maximize-2": maximize_2_default,
	menu: menu_default,
	"message-circle": message_circle_default,
	"message-square": message_square_default,
	"message-square-plus": message_square_plus_default,
	"message-circle-plus": message_circle_plus_default,
	"messages-square": messages_square_default,
	mic: mic_default,
	milestone: milestone_default,
	minus: minus_default,
	"mouse-pointer": mouse_pointer_default,
	network: network_default,
	"notebook-pen": notebook_pen_default,
	"package-open": package_open_default,
	palette: palette_default,
	"panel-left": panel_left_default,
	"panel-left-close": panel_left_close_default,
	"panel-right": panel_right_default,
	paperclip: paperclip_default,
	pause: pause_default,
	pen: pen_default,
	pencil: pencil_default,
	"pencil-off": pencil_off_default,
	"picture-in-picture-2": picture_in_picture_2_default,
	pin: pin_default,
	play: play_default,
	plug: plug_default,
	"plug-zap": plug_zap_default,
	plus: plus_default,
	"pocket-knife": pocket_knife_default,
	power: power_default,
	"redo-2": redo_2_default,
	"refresh-cw": refresh_cw_default,
	"remove-formatting": remove_formatting_default,
	rss: rss_default,
	robot: bot_default,
	"satellite-dish": satellite_dish_default,
	save: save_default,
	scale: scale_default,
	scissors: scissors_default,
	"scroll-text": scroll_text_default,
	search: search_default,
	settings: settings_default,
	settings2: settings_2_default,
	send: send_default,
	server: server_default,
	share: share_default,
	shield: shield_default,
	"shield-half": shield_half_default,
	"shield-user": shield_user_default,
	shredder: shredder_default,
	"sliders-horizontal": sliders_horizontal_default,
	smile: smile_default,
	sparkles: sparkles_default,
	split: split_default,
	square: square_default,
	"square-arrow-out-up-right": square_arrow_out_up_right_default,
	"square-check": square_check_default,
	"square-minus": square_minus_default,
	"square-pen": square_pen_default,
	"square-plus": square_plus_default,
	star: star_default,
	"sticky-note": sticky_note_default,
	strikethrough: strikethrough_default,
	sun: sun_default,
	table: table_default,
	tags: tags_default,
	telescope: telescope_default,
	terminal: terminal_default,
	"thumbs-down": thumbs_down_default,
	"thumbs-up": thumbs_up_default,
	"trash-2": trash_2_default,
	"tree-pine": tree_pine_default,
	"trending-down": trending_down_default,
	"trending-up": trending_up_default,
	"triangle-alert": triangle_alert_default,
	type: type_default,
	"toggle-right": toggle_right_default,
	"undo-2": undo_2_default,
	ungroup: ungroup_default,
	unlink: unlink_default,
	unplug: unplug_default,
	upload: upload_default,
	user: user_default,
	"user-check": user_check_default,
	"user-lock": user_lock_default,
	"user-pen": user_pen_default,
	"user-round": user_round_default,
	"user-round-key": user_round_key_default,
	users: users_default,
	vault: vault_default,
	video: video_default,
	"volume-2": volume_2_default,
	"volume-x": volume_x_default,
	wallet: wallet_default,
	"wand-sparkles": wand_sparkles_default,
	waypoints: waypoints_default,
	workflow: workflow_default,
	wrench: wrench_default,
	x: x_default,
	youtube: youtube_default,
	zap: zap_default,
	"zoom-in": zoom_in_default,
	"zoom-out": zoom_out_default,
	loader: loader2_default,
	"loader-circle": loader_circle_default,
	quote: quote_default,
	"quick-connect": flame_default,
	underline: underline_default
};
var NODE_ICON_PREFIX = "node:";
var nodeIconNameSet = new Set(nodeIconNames);
function isNodeIcon(iconName) {
	return typeof iconName === "string" && iconName.startsWith(NODE_ICON_PREFIX);
}
function isSupportedIconName(iconName) {
	return typeof iconName === "string" && (iconName in updatedIconSet || iconName in deprecatedIconSet || nodeIconNameSet.has(iconName));
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/svgContentDirective.ts
/**
* Custom directive that safely renders SVG child elements from a body string.
*
* Parses the body via DOMParser (no script execution) and imports only the
* resulting child nodes into the host `<svg>` element. This avoids Vue's
* `v-html` directive while keeping the same visual result.
*
* Usage: `<svg v-svg-content="bodyString" />`
*/
var vSvgContent = {
	mounted(el, { value }) {
		if (value) setSvgChildren(el, value);
	},
	updated(el, { value, oldValue }) {
		if (value !== oldValue) setSvgChildren(el, value ?? null);
	}
};
function setSvgChildren(el, body) {
	while (el.firstChild) el.removeChild(el.firstChild);
	if (!body) return;
	const doc = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${body}</svg>`, "image/svg+xml");
	if (doc.querySelector("parsererror")) return;
	const ownerDoc = el.ownerDocument;
	for (const child of Array.from(doc.documentElement.childNodes)) el.appendChild(ownerDoc.importNode(child, true));
}
//#endregion
//#region ../@n8n/design-system/src/composables/useIconBodyLoader.ts
var IconBodyLoaderKey = Symbol("IconBodyLoader");
var noopLoader = async () => {
	return null;
};
function useInjectIconBodyLoader() {
	return inject(IconBodyLoaderKey, noopLoader);
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/Icon.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"height",
	"width",
	"data-icon"
];
var Icon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nIcon",
	__name: "Icon",
	props: {
		icon: {},
		size: { default: void 0 },
		spin: {
			type: Boolean,
			default: false
		},
		color: { default: void 0 },
		strokeWidth: {}
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => {
			const applied = [];
			if (props.spin) applied.push("spin");
			if (props.strokeWidth) applied.push("strokeWidth");
			return ["n8n-icon", ...applied.map((c) => $style[c])];
		});
		const sizesInPixels = {
			xsmall: 10,
			small: 12,
			medium: 14,
			large: 16,
			xlarge: 20,
			xxlarge: 40
		};
		const size = computed(() => {
			let sizeToApply = "1em";
			if (props.size) sizeToApply = `${typeof props.size === "number" ? props.size : sizesInPixels[props.size]}px`;
			return {
				height: sizeToApply,
				width: sizeToApply
			};
		});
		const styles = computed(() => {
			const stylesToApply = {};
			const color = resolveIconColor(props.color);
			if (color) stylesToApply.color = color;
			if (props.strokeWidth) stylesToApply["--icon--stroke-width"] = `${props.strokeWidth}px`;
			return stylesToApply;
		});
		const nodeIconSetRef = shallowRef(null);
		const resolvedComponent = computed(() => nodeIconSetRef.value?.[props.icon] ?? updatedIconSet[props.icon] ?? deprecatedIconSet[props.icon] ?? null);
		watch(() => props.icon, async (icon) => {
			if (typeof icon === "string" && icon.startsWith("node:") && !nodeIconSetRef.value) {
				const { nodeIconSet } = await __vitePreload(async () => {
					const { nodeIconSet } = await import("./node-icons-AMb9l94j.js");
					return { nodeIconSet };
				}, __vite__mapDeps([0,1,2]));
				nodeIconSetRef.value = nodeIconSet;
			}
		}, { immediate: true });
		const loadIconBody = useInjectIconBodyLoader();
		const fallbackBody = ref(null);
		let fallbackRequestId = 0;
		watch(() => [props.icon, resolvedComponent.value], async ([iconName, resolvedIcon]) => {
			const requestId = ++fallbackRequestId;
			if (resolvedIcon) {
				fallbackBody.value = null;
				return;
			}
			try {
				const body = await loadIconBody(iconName);
				if (requestId === fallbackRequestId) fallbackBody.value = body;
			} catch {
				if (requestId === fallbackRequestId) fallbackBody.value = null;
			}
		}, { immediate: true });
		return (_ctx, _cache) => {
			return resolvedComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(resolvedComponent.value), {
				key: 0,
				class: normalizeClass(classes.value),
				"aria-hidden": "true",
				focusable: "false",
				role: "img",
				height: size.value.height,
				width: size.value.width,
				"data-icon": props.icon,
				style: normalizeStyle(styles.value)
			}, null, 8, [
				"class",
				"height",
				"width",
				"data-icon",
				"style"
			])) : fallbackBody.value ? withDirectives((openBlock(), createElementBlock("svg", {
				key: 1,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				class: normalizeClass([...classes.value, unref($style).fallbackIcon]),
				height: size.value.height,
				width: size.value.width,
				fill: "none",
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true",
				focusable: "false",
				role: "img",
				"data-icon": props.icon,
				style: normalizeStyle(styles.value)
			}, null, 14, _hoisted_1)), [[unref(vSvgContent), fallbackBody.value]]) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nIcon/Icon.vue?vue&type=style&index=0&lang.module.scss
var fallbackIcon = "_fallbackIcon_1jnaa_390";
var strokeWidth = "_strokeWidth_1jnaa_394";
var spin = "_spin_1jnaa_399";
var shimmer = "_shimmer_1jnaa_1";
var opacityPulse = "_opacityPulse_1jnaa_1";
var popoverIn = "_popoverIn_1jnaa_1";
var fadeIn = "_fadeIn_1jnaa_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1jnaa_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1jnaa_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1jnaa_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1jnaa_1";
var blurSwapIn = "_blurSwapIn_1jnaa_1";
var blurSwapOut = "_blurSwapOut_1jnaa_1";
var pulseGlow = "_pulseGlow_1jnaa_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1jnaa_1";
var fade = "_fade_1jnaa_1";
var fadeInUp = "_fadeInUp_1jnaa_1";
var fadeInDown = "_fadeInDown_1jnaa_1";
var fadeInLeft = "_fadeInLeft_1jnaa_1";
var fadeInRight = "_fadeInRight_1jnaa_1";
var fadeOut = "_fadeOut_1jnaa_1";
var fadeOutDown = "_fadeOutDown_1jnaa_1";
var fadeOutUp = "_fadeOutUp_1jnaa_1";
var fadeOutLeft = "_fadeOutLeft_1jnaa_1";
var fadeOutRight = "_fadeOutRight_1jnaa_1";
var ping = "_ping_1jnaa_1";
var blinkBackground = "_blinkBackground_1jnaa_1";
var typingBlink = "_typingBlink_1jnaa_1";
var Icon_vue_vue_type_style_index_0_lang_module_default = {
	fallbackIcon,
	strokeWidth,
	spin,
	shimmer,
	"skeleton-pulse": "_skeleton-pulse_1jnaa_1",
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
var Icon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Icon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Icon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { updatedIconSet as a, isSupportedIconName as i, IconBodyLoaderKey as n, isNodeIcon as r, Icon_default as t };
