import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Tf as withCtx, Wd as createTextVNode, ep as init_shared_esm_bundler, pp as normalizeClass, qd as defineComponent, uf as openBlock, vp as toDisplayString, xf as useTemplateRef, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { ED as N8nText_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, UD as useI18n, aD as N8nCallout_default, ag as useUIStore, oC as AgentJsonConfigSchema } from "./app-CfhiRDif.js";
import { t as AgentModal_default } from "./AgentModal-CEo_nVUo.js";
//#region src/features/agents/components/AgentJsonImportModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentJsonImportModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentJsonImportModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
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
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: unref(i18n).baseText("agents.builder.importJsonModal.title"),
				busy: importing.value,
				size: "large",
				"data-testid": "agent-json-import-modal",
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => !$event && closeModal())
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("agents.builder.importJsonModal.import"),
					disabled: !parsedConfig.value || importing.value,
					loading: importing.value,
					"data-testid": "agent-json-import-confirm",
					onClick: onConfirm
				}, null, 8, [
					"label",
					"disabled",
					"loading"
				])]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
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
				_: 1
			}, 8, [
				"open",
				"title",
				"busy"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_u7zyb_1",
	fileField: "_fileField_u7zyb_7"
} }]]);
//#endregion
export { AgentJsonImportModal_default as default };
