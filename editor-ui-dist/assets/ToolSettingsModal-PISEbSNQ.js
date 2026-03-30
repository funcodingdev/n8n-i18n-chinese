import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-COzuLMdL.js";
import { Qi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-BvUzUaLE.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-dyHeUo1r.js";
import { r as useUIStore } from "./users.store-Qyayth1w.js";
import "./ParameterInputList-brxFRKkw.js";
import "./constants-CbM6Kczw.js";
import "./merge-Bt9d3GSb.js";
import "./_baseOrderBy-DWejZi4o.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-DzkgMLTI.js";
import { t as Modal_default } from "./Modal-BK9ENleX.js";
import "./useClipboard-BWqYzY1b.js";
import "./executions.store-CZVSqgkG.js";
import "./assistant.store-n7YbUFsH.js";
import "./chatPanel.store-CeY6_pL_.js";
import "./RunData-DtcbVOMq.js";
import "./NDVEmptyState-CnRh5qxJ.js";
import "./externalSecrets.ee.store-BUP4UyQ6.js";
import "./uniqBy-4EqtcIN9.js";
import "./usePinnedData-D0I3IPdg.js";
import "./nodeIcon-B4FMjHPj.js";
import "./canvas.utils-wNLuSy5w.js";
import "./canvas.eventBus-BeMGLVv1.js";
import "./useCanvasOperations-DK2z0FQ_.js";
import "./setupPanel.store-6vkDnRUS.js";
import "./nodeTransforms-fyYeHICA.js";
import "./templateTransforms-D_S2oYHe.js";
import "./useQuickConnect-DVxmyy9h.js";
import "./CredentialIcon-CKYXcAcv.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-NDpndVkW.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-8CP1cO35.js";
import { t as NodeIcon_default } from "./NodeIcon-KIuAUrWX.js";
import "./VirtualSchema-CtwbPSA2.js";
import "./useCalloutHelpers-62UFNsl1.js";
import "./useTelemetryContext-BW9qfXcG.js";
import "./useRunWorkflow-CeRLv-a6.js";
import "./pushConnection.store-DzbGSScq.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-slU7leRI.js";
import "./dateFormatter-Bej0iQ6f.js";
import "./useExecutionHelpers-DWnDw3K7.js";
import "./vue-DTCBCWxb.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-DmPaF9Ve.js";
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
