import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-7s9WlDJz.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-BmkbTfty.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Ck4DJj2_.js";
import { r as useUIStore } from "./users.store-BuTOTUJu.js";
import "./ParameterInputList-TJky5Q9K.js";
import "./constants-4mYM-BCx.js";
import "./merge-DIySfLBl.js";
import "./_baseOrderBy-C9x_k_9m.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-q3EZxFLd.js";
import { t as Modal_default } from "./Modal-D1hjESmR.js";
import "./useClipboard-De4Pc5kX.js";
import "./executions.store-rI--m9dR.js";
import "./assistant.store-DqNt79Az.js";
import "./chatPanel.store-CptX1KKU.js";
import "./RunData-CNJYelOf.js";
import "./NDVEmptyState-CEgrBtsb.js";
import "./externalSecrets.ee.store-C08G8-MG.js";
import "./uniqBy-ICYm5Bnn.js";
import "./usePinnedData-B25BjKte.js";
import "./nodeIcon-DXpX28qV.js";
import "./canvas.utils-DDNpbd20.js";
import "./nodeCreator.store-BkvRFjbm.js";
import "./useCanvasOperations-COiTkqAi.js";
import "./folders.store-PpGQTRLC.js";
import "./useQuickConnect-BiJ9MA11.js";
import "./CredentialIcon-DFqw8oSx.js";
import "./useDynamicCredentials-DiQwHyaB.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-CcZQhUfZ.js";
import { t as NodeIcon_default } from "./NodeIcon-BWZ3CJAT.js";
import "./VirtualSchema-T2LJ6df-.js";
import "./useCalloutHelpers-Bsd5uWfv.js";
import "./useTelemetryContext-FbTWTDTy.js";
import "./useRunWorkflow-DhXStslV.js";
import "./pushConnection.store-DUVlJlAs.js";
import "./nodeTransforms-zi1kjYAO.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-ByrR_him.js";
import "./dateFormatter-Cv7TTA8K.js";
import "./useExecutionHelpers-Dxhi1bGm.js";
import "./vue-BFCEDk8Q.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-Bd4synkC.js";
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
