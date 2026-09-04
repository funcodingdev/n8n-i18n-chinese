import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as require_lib } from "./lib-BC5w3MlX.js";
import { t as core_default } from "./core-D8l50o8u.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { t as useClipboard } from "./useClipboard-FfSvbxpY.js";
import { t as VueMarkdown } from "./VueMarkdown-3PWC1Djv.js";
import { n as splitTextBySearch, t as TextWithHighlights_default } from "./TextWithHighlights-ChHTPNl7.js";
//#region src/features/ndv/runData/components/ai/utils.ts
var import_lib = /* @__PURE__ */ __toESM(require_lib(), 1);
function getReferencedData(taskData) {
	const returnData = [];
	function addFunction(data, inOut) {
		if (!data) return;
		Object.keys(data).map((type) => {
			returnData.push({
				data: data[type][0],
				inOut,
				type,
				source: taskData.source,
				metadata: {
					executionTime: taskData.executionTime,
					startTime: taskData.startTime,
					subExecution: taskData.metadata?.subExecution
				}
			});
		});
	}
	addFunction(taskData.inputOverride, "input");
	addFunction(taskData.data, "output");
	return returnData;
}
function createHtmlFragmentWithSearchHighlight(text, search) {
	const escaped = (0, import_lib.escapeHtml)(text);
	return search ? splitTextBySearch(escaped, search).map((part) => part.isMatched ? `<mark>${part.content}</mark>` : part.content).join("") : escaped;
}
function createSearchHighlightPlugin(search) {
	return (md) => {
		md.renderer.rules.text = (tokens, idx) => createHtmlFragmentWithSearchHighlight(tokens[idx].content, search);
		md.renderer.rules.code_inline = (tokens, idx, _, __, slf) => `<code${slf.renderAttrs(tokens[idx])}>${createHtmlFragmentWithSearchHighlight(tokens[idx].content, search)}</code>`;
		md.renderer.rules.code_block = (tokens, idx, _, __, slf) => `<pre${slf.renderAttrs(tokens[idx])}><code>${createHtmlFragmentWithSearchHighlight(tokens[idx].content, search)}</code></pre>\n`;
		md.renderer.rules.fence = (tokens, idx, options, _, slf) => {
			const token = tokens[idx];
			const info = token.info ? md.utils.unescapeAll(token.info).trim() : "";
			let langName = "";
			let langAttrs = "";
			if (info) {
				const arr = info.split(/(\s+)/g);
				langName = arr[0];
				langAttrs = arr.slice(2).join("");
			}
			const highlighted = options.highlight?.(token.content, langName, langAttrs) ?? createHtmlFragmentWithSearchHighlight(token.content, search);
			if (highlighted.indexOf("<pre") === 0) return highlighted + "\n";
			return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>\n`;
		};
	};
}
//#endregion
//#region src/features/ndv/runData/components/RunDataParsedAiContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-content-type"];
var RunDataParsedAiContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataParsedAiContent",
	props: {
		content: {},
		compact: {
			type: Boolean,
			default: false
		},
		search: {},
		renderType: {}
	},
	setup(__props) {
		const i18n = useI18n();
		const clipboard = useClipboard();
		const { showMessage } = useToast();
		const vueMarkdownPlugins = computed(() => [createSearchHighlightPlugin(__props.search)]);
		function isJsonString(text) {
			try {
				JSON.parse(text);
				return true;
			} catch (e) {
				return false;
			}
		}
		const markdownOptions = { highlight(str, lang) {
			if (lang && core_default.getLanguage(lang)) try {
				return core_default.highlight(str, { language: lang }).value;
			} catch {}
		} };
		function isMarkdown(jsonMarkdown) {
			if (typeof jsonMarkdown !== "string") return false;
			return [
				/^# .+/gm,
				/\*{1,2}.+\*{1,2}/g,
				/\[.+\]\(.+\)/g,
				/```[\s\S]+```/g
			].some((pattern) => pattern.test(jsonMarkdown));
		}
		function formatToJsonMarkdown(data) {
			return "```json\n" + data + "\n```";
		}
		function jsonToMarkdown(data) {
			if (isMarkdown(data)) return data;
			if (Array.isArray(data) && data.length && typeof data[0] !== "number") return data.map((item) => jsonToMarkdown(item)).join("\n\n").trim();
			if (typeof data === "string") {
				if (isJsonString(data)) return formatToJsonMarkdown(data);
				return data;
			}
			return formatToJsonMarkdown(JSON.stringify(data, null, 2));
		}
		function onCopyToClipboard(object) {
			try {
				clipboard.copy(JSON.stringify(object, void 0, 2));
				showMessage({
					title: i18n.baseText("generic.copiedToClipboard"),
					type: "success"
				});
			} catch {}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.component, __props.compact ? _ctx.$style.compact : ""]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.content, ({ parsedContent, raw }, index) => {
				return openBlock(), createElementBlock("div", {
					key: index,
					class: normalizeClass(_ctx.$style.contentText),
					"data-content-type": parsedContent?.type
				}, [parsedContent && __props.renderType === "rendered" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [parsedContent.type === "json" ? (openBlock(), createBlock(unref(VueMarkdown), {
					key: 0,
					source: jsonToMarkdown(parsedContent.data),
					class: normalizeClass(_ctx.$style.markdown),
					options: markdownOptions,
					plugins: vueMarkdownPlugins.value
				}, null, 8, [
					"source",
					"class",
					"plugins"
				])) : parsedContent.type === "markdown" ? (openBlock(), createBlock(unref(VueMarkdown), {
					key: 1,
					source: parsedContent.data,
					class: normalizeClass(_ctx.$style.markdown),
					options: markdownOptions,
					plugins: vueMarkdownPlugins.value
				}, null, 8, [
					"source",
					"class",
					"plugins"
				])) : parsedContent.type === "text" ? (openBlock(), createBlock(TextWithHighlights_default, {
					key: 2,
					class: normalizeClass(_ctx.$style.runText),
					content: String(parsedContent.data),
					search: __props.search
				}, null, 8, [
					"class",
					"content",
					"search"
				])) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.rawContent)
				}, [createVNode(unref(N8nIconButton_default), {
					variant: "subtle",
					size: "small",
					class: normalizeClass(_ctx.$style.copyToClipboard),
					title: unref(i18n).baseText("nodeErrorView.copyToClipboard"),
					icon: "files",
					onClick: ($event) => onCopyToClipboard(raw)
				}, null, 8, [
					"class",
					"title",
					"onClick"
				]), createVNode(unref(VueMarkdown), {
					source: jsonToMarkdown(raw),
					class: normalizeClass(_ctx.$style.markdown),
					plugins: vueMarkdownPlugins.value
				}, null, 8, [
					"source",
					"class",
					"plugins"
				])], 2))], 10, _hoisted_1);
			}), 128))], 2);
		};
	}
});
//#endregion
//#region src/features/ndv/runData/components/RunDataParsedAiContent.vue?vue&type=style&index=0&lang.module.scss
var runText = "_runText_910t1_388";
var markdown = "_markdown_910t1_393";
var compact = "_compact_910t1_416";
var copyToClipboard = "_copyToClipboard_910t1_424";
var rawContent = "_rawContent_910t1_434";
var contentText = "_contentText_910t1_438";
var shimmer = "_shimmer_910t1_1";
var spin = "_spin_910t1_1";
var opacityPulse = "_opacityPulse_910t1_1";
var popoverIn = "_popoverIn_910t1_1";
var fadeIn = "_fadeIn_910t1_1";
var collapsibleSlideDown = "_collapsibleSlideDown_910t1_1";
var collapsibleSlideUp = "_collapsibleSlideUp_910t1_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_910t1_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_910t1_1";
var blurSwapIn = "_blurSwapIn_910t1_1";
var blurSwapOut = "_blurSwapOut_910t1_1";
var pulseGlow = "_pulseGlow_910t1_1";
var pulseGlowDelayed = "_pulseGlowDelayed_910t1_1";
var fade = "_fade_910t1_1";
var fadeInUp = "_fadeInUp_910t1_1";
var fadeInDown = "_fadeInDown_910t1_1";
var fadeInLeft = "_fadeInLeft_910t1_1";
var fadeInRight = "_fadeInRight_910t1_1";
var fadeOut = "_fadeOut_910t1_1";
var fadeOutDown = "_fadeOutDown_910t1_1";
var fadeOutUp = "_fadeOutUp_910t1_1";
var fadeOutLeft = "_fadeOutLeft_910t1_1";
var fadeOutRight = "_fadeOutRight_910t1_1";
var ping = "_ping_910t1_1";
var blinkBackground = "_blinkBackground_910t1_1";
var typingBlink = "_typingBlink_910t1_1";
var RunDataParsedAiContent_vue_vue_type_style_index_0_lang_module_default = {
	runText,
	markdown,
	compact,
	copyToClipboard,
	rawContent,
	contentText,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_910t1_1",
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
var RunDataParsedAiContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataParsedAiContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataParsedAiContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { getReferencedData as n, RunDataParsedAiContent_default as t };
