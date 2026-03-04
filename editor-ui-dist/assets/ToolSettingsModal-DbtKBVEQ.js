import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-CWW28IIa.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-KhoUjpIZ.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DE4-n4WM.js";
import { r as useUIStore } from "./users.store-_5IHF4E9.js";
import "./ParameterInputList-DT-8OAxj.js";
import "./constants-BvvNYkkp.js";
import "./merge-DwOwVsNY.js";
import "./_baseOrderBy-FLsk2_E-.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-_1izN00A.js";
import { t as Modal_default } from "./Modal-DrTs8PLe.js";
import "./useClipboard-CZFaJ5QF.js";
import "./executions.store-B5rY8GHB.js";
import "./assistant.store-Bs42ylN0.js";
import "./chatPanel.store-D3y40Onh.js";
import "./RunData-C6Yx5DS4.js";
import "./NDVEmptyState-B4BPz70N.js";
import "./externalSecrets.ee.store-CcuB3vzX.js";
import "./uniqBy-yeSyos6F.js";
import "./usePinnedData-C7Q4Z_NJ.js";
import "./nodeIcon-CFAW5yKM.js";
import "./canvas.utils-CGnqcSax.js";
import "./nodeCreator.store-B6bthFSQ.js";
import "./useCanvasOperations-CRPdYHEV.js";
import "./folders.store-CXDRqrH6.js";
import "./useQuickConnect-D8Se24Ug.js";
import "./CredentialIcon-DYVLPYXh.js";
import "./useDynamicCredentials-Djp3afZl.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-DzLyahCI.js";
import { t as NodeIcon_default } from "./NodeIcon-DOySjPRL.js";
import "./VirtualSchema-CTdm_TVf.js";
import "./useCalloutHelpers-D-g5L4ru.js";
import "./useTelemetryContext-DhNAv3aU.js";
import "./useRunWorkflow-BxwaZ91A.js";
import "./pushConnection.store-Bt2xErnB.js";
import "./nodeTransforms-BQzzaIhv.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-D1SRWsY-.js";
import "./dateFormatter-CqQ_s-tG.js";
import "./useExecutionHelpers-NeFf9BDX.js";
import "./vue-BFCEDk8Q.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-D7sfsDMV.js";
var ToolSettingsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolSettingsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const contentRef = ref(null);
		const isValid = ref(false);
		const nodeName = ref(props.data.node?.name ?? "");
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function handleConfirm() {
			const currentNode = contentRef.value?.node;
			if (!currentNode) return;
			props.data.onConfirm(currentNode);
			closeDialog();
		}
		function handleCancel() {
			closeDialog();
		}
		function handleChangeName(name) {
			contentRef.value?.handleChangeName(name);
		}
		function handleValidUpdate(valid) {
			isValid.value = valid;
		}
		function handleNodeNameUpdate(name) {
			nodeName.value = name;
		}
		return (_ctx, _cache) => {
			return __props.data.node ? (openBlock(), createBlock(Modal_default, {
				key: 0,
				name: __props.modalName,
				width: "780px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [contentRef.value?.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					"node-type": contentRef.value.nodeTypeDescription,
					size: 24,
					circle: true,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"])) : createCommentVNode("", true), createVNode(unref(N8nInlineTextEdit_default), {
					"model-value": nodeName.value,
					"max-width": 400,
					class: normalizeClass(_ctx.$style.title),
					"onUpdate:modelValue": handleChangeName
				}, null, 8, ["model-value", "class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [createVNode(ToolSettingsContent_default, {
					ref_key: "contentRef",
					ref: contentRef,
					"initial-node": __props.data.node,
					"existing-tool-names": __props.data.existingToolNames,
					"onUpdate:valid": handleValidUpdate,
					"onUpdate:nodeName": handleNodeNameUpdate
				}, null, 8, ["initial-node", "existing-tool-names"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: handleCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !isValid.value,
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
var ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_148s1_125",
	icon: "_icon_148s1_132",
	title: "_title_148s1_137",
	footer: "_footer_148s1_146",
	contentWrapper: "_contentWrapper_148s1_152"
};
var ToolSettingsModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolSettingsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ToolSettingsModal_default as default };
