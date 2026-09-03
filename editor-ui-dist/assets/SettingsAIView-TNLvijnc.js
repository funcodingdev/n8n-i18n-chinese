import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, X as onMounted, bt as withCtx, j as createVNode, ot as resolveDirective, vn as normalizeClass, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import "./constants-DPRLSskW.js";
import { n as useDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { t as useAssistantStore } from "./assistant.store-DZ_Sj4kR.js";
//#region src/features/ai/assistant/views/SettingsAIView.vue?vue&type=script&setup=true&lang.ts
var SettingsAIView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsAIView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const settingsStore = useSettingsStore();
		const allowSendingSchema = ref(true);
		const isAssistantEnabled = computed(() => assistantStore.isAssistantEnabled);
		const isBuilderEnabled = computed(() => settingsStore.isAiBuilderEnabled);
		const isAskAiEnabled = computed(() => settingsStore.isAskAiEnabled);
		const allowSendingParameterValues = computed(() => settingsStore.isAiDataSharingEnabled);
		const aiSettingsDescription = computed(() => {
			if (isAssistantEnabled.value && isAskAiEnabled.value) return i18n.baseText("settings.ai.description.both");
			else if (isAssistantEnabled.value) return i18n.baseText("settings.ai.description.assistantOnly");
			else if (isAskAiEnabled.value) return i18n.baseText("settings.ai.description.askAiOnly");
			return i18n.baseText("settings.ai.description.both");
		});
		const confirmationMessage = computed(() => {
			if (isBuilderEnabled.value) return i18n.baseText("settings.ai.confirm.message.builderEnabled");
			return i18n.baseText("settings.ai.confirm.message.builderDisabled");
		});
		const onallowSendingParameterValuesChange = async (newValue) => {
			if (typeof newValue !== "boolean") return;
			if (!newValue) {
				if (await message.confirm(confirmationMessage.value, {
					title: i18n.baseText("settings.ai.confirm.title"),
					confirmButtonText: i18n.baseText("settings.ai.confirm.confirmButtonText"),
					cancelButtonText: i18n.baseText("generic.cancel")
				}) !== "confirm") return;
			}
			try {
				await settingsStore.updateAiDataSharingSettings(newValue);
				toast.showMessage({
					title: i18n.baseText("settings.ai.updated.success"),
					type: "success"
				});
				telemetry.track("User changed AI Usage settings", { allow_sending_parameter_values: newValue });
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.ai.updated.error"));
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.ai"));
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "ai"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai")), 1)]),
					_: 1
				}), withDirectives(createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, null, 512), [[_directive_n8n_html, aiSettingsDescription.value]])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxContainer) }, [createVNode(unref(Checkbox_default), {
					modelValue: allowSendingSchema.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allowSendingSchema.value = $event),
					disabled: true,
					label: unref(i18n).baseText("settings.ai.allowSendingSchema.label")
				}, null, 8, ["modelValue", "label"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.checkboxDescription),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingSchema.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxContainer) }, [createVNode(unref(Checkbox_default), {
					"model-value": allowSendingParameterValues.value,
					label: unref(i18n).baseText("settings.ai.allowSendingParameterValues.label"),
					"onUpdate:modelValue": onallowSendingParameterValuesChange
				}, null, 8, ["model-value", "label"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.checkboxDescription),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingParameterValues.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.privacyNote) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.privacyNote.heading")), 1)]),
					_: 1
				}), withDirectives(createVNode(unref(N8nText_default), { color: "text-base" }, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.ai.privacyNote.content", { interpolate: { docsLink: "https://docs.n8n.io/manage-cloud/ai-assistant" } })]])], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/assistant/views/SettingsAIView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_iwyl9_388";
var header = "_header_iwyl9_394";
var content = "_content_iwyl9_400";
var checkboxContainer = "_checkboxContainer_iwyl9_406";
var checkboxDescription = "_checkboxDescription_iwyl9_417";
var notice = "_notice_iwyl9_420";
var privacyNote = "_privacyNote_iwyl9_425";
var shimmer = "_shimmer_iwyl9_1";
var spin = "_spin_iwyl9_1";
var opacityPulse = "_opacityPulse_iwyl9_1";
var popoverIn = "_popoverIn_iwyl9_1";
var fadeIn = "_fadeIn_iwyl9_1";
var collapsibleSlideDown = "_collapsibleSlideDown_iwyl9_1";
var collapsibleSlideUp = "_collapsibleSlideUp_iwyl9_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_iwyl9_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_iwyl9_1";
var blurSwapIn = "_blurSwapIn_iwyl9_1";
var blurSwapOut = "_blurSwapOut_iwyl9_1";
var pulseGlow = "_pulseGlow_iwyl9_1";
var pulseGlowDelayed = "_pulseGlowDelayed_iwyl9_1";
var fade = "_fade_iwyl9_1";
var fadeInUp = "_fadeInUp_iwyl9_1";
var fadeInDown = "_fadeInDown_iwyl9_1";
var fadeInLeft = "_fadeInLeft_iwyl9_1";
var fadeInRight = "_fadeInRight_iwyl9_1";
var fadeOut = "_fadeOut_iwyl9_1";
var fadeOutDown = "_fadeOutDown_iwyl9_1";
var fadeOutUp = "_fadeOutUp_iwyl9_1";
var fadeOutLeft = "_fadeOutLeft_iwyl9_1";
var fadeOutRight = "_fadeOutRight_iwyl9_1";
var ping = "_ping_iwyl9_1";
var blinkBackground = "_blinkBackground_iwyl9_1";
var typingBlink = "_typingBlink_iwyl9_1";
var SettingsAIView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	header,
	content,
	checkboxContainer,
	checkboxDescription,
	notice,
	privacyNote,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_iwyl9_1",
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
var SettingsAIView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsAIView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsAIView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsAIView_default as default };
