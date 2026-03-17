import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-Dq2XPUGI.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-caSpAzoz.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-MahmdV1L.js";
import { r as useUIStore } from "./users.store-2EsruVYR.js";
import "./ParameterInputList-CLI0w28f.js";
import "./constants-_O8nYJwx.js";
import "./merge-DC9T2n_q.js";
import "./_baseOrderBy-V792pLeL.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BZgy_zf7.js";
import { t as Modal_default } from "./Modal-B3wusGjD.js";
import "./useClipboard-CVpuSQWa.js";
import "./executions.store-sPE3-_WQ.js";
import "./assistant.store-DpCnQbxG.js";
import "./chatPanel.store-fi0sPEKh.js";
import "./RunData-l6UC6PUo.js";
import "./NDVEmptyState-Wx7cJ4DQ.js";
import "./externalSecrets.ee.store-sBSKEi6X.js";
import "./uniqBy-9zkEjrL3.js";
import "./usePinnedData-DqWABxxE.js";
import "./nodeIcon-c7bgB_oY.js";
import "./canvas.utils-BvUu3pSa.js";
import "./canvas.eventBus-CtIScaLg.js";
import "./useCanvasOperations-D_arrNY7.js";
import "./useQuickConnect-CkCsNI-2.js";
import "./CredentialIcon-0k4ZpOmq.js";
import "./useDynamicCredentials-Di4NBrDm.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-BlzfLrPg.js";
import { t as NodeIcon_default } from "./NodeIcon-BFUZ9PMM.js";
import "./VirtualSchema-Ca0EzonE.js";
import "./useCalloutHelpers--nBNmi0j.js";
import "./useTelemetryContext-Df13Vw0I.js";
import "./useRunWorkflow-D5H3LTDC.js";
import "./pushConnection.store-BszLNG-V.js";
import "./nodeTransforms-DlOb0JCo.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-HDkKzYvC.js";
import "./dateFormatter-CoVxa8zs.js";
import "./useExecutionHelpers-BCv0GW7d.js";
import "./vue-C5mU5rBa.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-C0TMzsq8.js";
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
