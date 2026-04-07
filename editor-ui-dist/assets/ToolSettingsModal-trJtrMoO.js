import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-C80pWp05.js";
import { h as N8nInlineTextEdit_default, ra as N8nButton_default } from "./src-DXhOkTfb.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-b-su1XNy.js";
import { r as useUIStore } from "./users.store-bYJP9NEL.js";
import "./ParameterInputList-CquLPExM.js";
import "./constants-neq36s1h.js";
import "./merge-CyZj1oIp.js";
import "./_baseOrderBy-2EL3KkTw.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-CnJGc_VC.js";
import { t as Modal_default } from "./Modal-CfUJvxx-.js";
import "./useClipboard-B1HjyDZ5.js";
import "./executions.store-CXfJa1PO.js";
import "./assistant.store-Hv2aiFHq.js";
import "./chatPanel.store-CNq_-Rf2.js";
import "./RunData-DdcHm1OG.js";
import "./NDVEmptyState-CVg1Bg2x.js";
import "./externalSecrets.ee.store-_S24qRr8.js";
import "./uniqBy-DJ2emvPb.js";
import "./usePinnedData-D6iG-vVW.js";
import "./nodeIcon-DVYiuXDq.js";
import "./canvas.utils-I742fAt-.js";
import "./canvas.eventBus-CHyag3df.js";
import "./useCanvasOperations-Cc3fbdBt.js";
import "./setupPanel.store-CAfS8IPe.js";
import "./nodeTransforms-BQzHSoiA.js";
import "./templateTransforms-Bl0C8A0m.js";
import "./useQuickConnect-qKJEJ615.js";
import "./CredentialIcon-BkypOquL.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-DRUKdpnL.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-CPyRg6w8.js";
import { t as NodeIcon_default } from "./NodeIcon-Df-cIZ1j.js";
import "./VirtualSchema-D-WHMgJQ.js";
import "./useCalloutHelpers-wkfPx7eZ.js";
import "./useTelemetryContext-CMsal0ao.js";
import "./useRunWorkflow-BgxUvcZG.js";
import "./pushConnection.store-CVCuUA8u.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BHVxfZAc.js";
import "./dateFormatter-ChtiEljD.js";
import "./useExecutionHelpers-CORCJaOn.js";
import "./vue-DTCBCWxb.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-DOhd7SCC.js";
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
