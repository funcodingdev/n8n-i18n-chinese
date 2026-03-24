import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache--L8adXi_.js";
import { Qi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-DWsTOZiq.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CTiwYXdt.js";
import { r as useUIStore } from "./users.store-Sw4oHdJA.js";
import "./ParameterInputList-Cre0giuw.js";
import "./constants-C3KfTTly.js";
import "./merge-DjxP3JHE.js";
import "./_baseOrderBy-BACeL77R.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DyfAlHJb.js";
import { t as Modal_default } from "./Modal-zVdq9PNm.js";
import "./useClipboard-DUVW12aX.js";
import "./executions.store-_7d9ev4e.js";
import "./assistant.store-0KmEXlD7.js";
import "./chatPanel.store-CDCIr--i.js";
import "./RunData-DYgvwsEH.js";
import "./NDVEmptyState-CCQIUWsT.js";
import "./externalSecrets.ee.store-DGI6OZ1I.js";
import "./uniqBy-jlKsgmiA.js";
import "./usePinnedData-CXtPmhAX.js";
import "./nodeIcon-IyeWTxCP.js";
import "./canvas.utils-CkJ5V5RF.js";
import "./canvas.eventBus-BydD8zVz.js";
import "./useCanvasOperations-CJRh2Vr3.js";
import "./setupPanel.store-BiMbfKDK.js";
import "./nodeTransforms-CUcky-fs.js";
import "./templateTransforms-CdXuJb6D.js";
import "./useQuickConnect-BceEeD4x.js";
import "./CredentialIcon-DaEmcCJ7.js";
import "./useDynamicCredentials-D0w9yakQ.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-CTx1h02o.js";
import { t as NodeIcon_default } from "./NodeIcon-Ckjj4qv-.js";
import "./VirtualSchema--L4Hn3CV.js";
import "./useCalloutHelpers-l-O6YzBz.js";
import "./useTelemetryContext-BMn0C1Yo.js";
import "./useRunWorkflow-C1jL9RFq.js";
import "./pushConnection.store-_XKDoJMI.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-BX8zAbnn.js";
import "./dateFormatter-CTl59i2g.js";
import "./useExecutionHelpers-D_VqlLp-.js";
import "./vue-K5kPXnPp.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-BfJ-IULq.js";
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
