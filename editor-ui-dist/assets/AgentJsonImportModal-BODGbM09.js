import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, bt as withCtx, j as createVNode, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { eo as AgentJsonConfigSchema } from "./src-DAIlllTg.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
import { t as Modal_default } from "./Modal-DFINaSSV.js";
//#region src/features/agents/components/AgentJsonImportModal.vue?vue&type=script&setup=true&lang.ts
var AgentJsonImportModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentJsonImportModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const parsedConfig = ref(null);
		const errorMessage = ref("");
		const importing = ref(false);
		const fileInput = useTemplateRef("fileInput");
		function resetImportState() {
			parsedConfig.value = null;
			errorMessage.value = "";
			if (fileInput.value) fileInput.value.value = "";
		}
		function closeModal() {
			resetImportState();
			uiStore.closeModal(props.modalName);
		}
		async function onFileChange(event) {
			const input = event.target;
			if (!(input instanceof HTMLInputElement)) return;
			const file = input.files?.[0];
			parsedConfig.value = null;
			errorMessage.value = "";
			if (!file) return;
			try {
				const parsed = JSON.parse(await file.text());
				const result = AgentJsonConfigSchema.safeParse(parsed);
				if (!result.success) throw new Error("Invalid agent JSON");
				parsedConfig.value = result.data;
			} catch {
				errorMessage.value = i18n.baseText("agents.builder.importJsonModal.invalidJson");
			}
		}
		async function onConfirm() {
			if (!parsedConfig.value || importing.value) return;
			importing.value = true;
			try {
				await props.data.onConfirm(parsedConfig.value);
				closeModal();
			} finally {
				importing.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				title: unref(i18n).baseText("agents.builder.importJsonModal.title"),
				width: "520px",
				"data-testid": "agent-json-import-modal"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.importJsonModal.description")), 1)]),
						_: 1
					}),
					createBaseVNode("label", { class: normalizeClass(_ctx.$style.fileField) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.importJsonModal.fileLabel")), 1)]),
						_: 1
					}), createBaseVNode("input", {
						ref_key: "fileInput",
						ref: fileInput,
						type: "file",
						accept: "application/json,.json",
						"data-testid": "agent-json-import-file-input",
						onChange: onFileChange
					}, null, 544)], 2),
					errorMessage.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 0,
						theme: "danger",
						"data-testid": "agent-json-import-error"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					label: unref(i18n).baseText("generic.cancel"),
					onClick: closeModal
				}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("agents.builder.importJsonModal.import"),
					disabled: !parsedConfig.value || importing.value,
					"data-testid": "agent-json-import-confirm",
					onClick: onConfirm
				}, null, 8, ["label", "disabled"])], 2)]),
				_: 1
			}, 8, ["name", "title"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentJsonImportModal.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_1xxf7_388";
var fileField = "_fileField_1xxf7_394";
var footer = "_footer_1xxf7_400";
var shimmer = "_shimmer_1xxf7_1";
var spin = "_spin_1xxf7_1";
var opacityPulse = "_opacityPulse_1xxf7_1";
var popoverIn = "_popoverIn_1xxf7_1";
var fadeIn = "_fadeIn_1xxf7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1xxf7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1xxf7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1xxf7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1xxf7_1";
var blurSwapIn = "_blurSwapIn_1xxf7_1";
var blurSwapOut = "_blurSwapOut_1xxf7_1";
var pulseGlow = "_pulseGlow_1xxf7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1xxf7_1";
var fade = "_fade_1xxf7_1";
var fadeInUp = "_fadeInUp_1xxf7_1";
var fadeInDown = "_fadeInDown_1xxf7_1";
var fadeInLeft = "_fadeInLeft_1xxf7_1";
var fadeInRight = "_fadeInRight_1xxf7_1";
var fadeOut = "_fadeOut_1xxf7_1";
var fadeOutDown = "_fadeOutDown_1xxf7_1";
var fadeOutUp = "_fadeOutUp_1xxf7_1";
var fadeOutLeft = "_fadeOutLeft_1xxf7_1";
var fadeOutRight = "_fadeOutRight_1xxf7_1";
var ping = "_ping_1xxf7_1";
var blinkBackground = "_blinkBackground_1xxf7_1";
var typingBlink = "_typingBlink_1xxf7_1";
var AgentJsonImportModal_vue_vue_type_style_index_0_lang_module_default = {
	content,
	fileField,
	footer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1xxf7_1",
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
var AgentJsonImportModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentJsonImportModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentJsonImportModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentJsonImportModal_default as default };
