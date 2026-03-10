import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DwkzWRqU.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-GXsra_I5.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-B6GxK5zW.js";
import { r as useUIStore } from "./users.store-DSeNCs16.js";
import "./ParameterInputList-D6aOXwqi.js";
import "./constants-DFXtU1Pw.js";
import "./merge-CKdiHidc.js";
import "./_baseOrderBy-COGSHfpp.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-q-aewVnG.js";
import { t as Modal_default } from "./Modal-Cs8n3hHC.js";
import "./useClipboard-CGjjqaqQ.js";
import "./executions.store-30t4F5WB.js";
import "./assistant.store-D4G-iVGk.js";
import "./chatPanel.store-BT_ynfe0.js";
import "./RunData-CfhKkpLl.js";
import "./NDVEmptyState-DBcaOHDZ.js";
import "./externalSecrets.ee.store-BWPCsq3Z.js";
import "./uniqBy-DIMlDJ3D.js";
import "./usePinnedData-BF1rKVo9.js";
import "./nodeIcon-BMRXYoUK.js";
import "./canvas.utils-CEDTlx4N.js";
import "./canvas.eventBus-B9SGSxxt.js";
import "./useCanvasOperations-CednDKIa.js";
import "./folders.store-DKweL38s.js";
import "./useQuickConnect-DsWgI8tM.js";
import "./CredentialIcon-BaLI24S0.js";
import "./useDynamicCredentials-9ugcNyTx.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-ClEDgCgp.js";
import { t as NodeIcon_default } from "./NodeIcon-ARAzHKT2.js";
import "./VirtualSchema-C4KHTUGN.js";
import "./useCalloutHelpers-CCKtBG3s.js";
import "./useTelemetryContext-Crb1oPM1.js";
import "./useRunWorkflow-DjJ0mX2w.js";
import "./pushConnection.store-CwvPFQVx.js";
import "./nodeTransforms-CCNM4SLN.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BsG87CXt.js";
import "./dateFormatter-D5c8u43g.js";
import "./useExecutionHelpers-labeYe8w.js";
import "./vue-D9RoU6zv.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-RpOsyCk6.js";
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
