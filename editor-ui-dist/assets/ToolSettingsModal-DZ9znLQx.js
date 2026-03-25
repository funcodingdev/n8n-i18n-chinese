import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-BLQlsGfT.js";
import { Qi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-C3dDmkfF.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DGi4Ph71.js";
import { r as useUIStore } from "./users.store-YX3xGXV-.js";
import "./ParameterInputList-PPsSOaVk.js";
import "./constants-sixw52iU.js";
import "./merge-k3cP0hku.js";
import "./_baseOrderBy-BrADeb8X.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-C7GCj9g0.js";
import { t as Modal_default } from "./Modal-4yjBo_qw.js";
import "./useClipboard-BoJ-UiuZ.js";
import "./executions.store-BOXiu41e.js";
import "./assistant.store-L5qjcTMR.js";
import "./chatPanel.store-BKYmXTx_.js";
import "./RunData-DQY4gZ-Y.js";
import "./NDVEmptyState-DNwEDTZR.js";
import "./externalSecrets.ee.store-C7xHEDBd.js";
import "./uniqBy-CW5DnRCK.js";
import "./usePinnedData-Bs9REe2E.js";
import "./nodeIcon-DD8Nq4ie.js";
import "./canvas.utils-NT0VdpQR.js";
import "./canvas.eventBus-BzEuwcnY.js";
import "./useCanvasOperations-XFvid-gM.js";
import "./setupPanel.store-DHVkFp1_.js";
import "./nodeTransforms-CgrY1VoY.js";
import "./templateTransforms-DAUIusCv.js";
import "./useQuickConnect-DCYw_zpn.js";
import "./CredentialIcon-jEXVrifg.js";
import "./useDynamicCredentials-FGxy9Qgz.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-CcKFrSaI.js";
import { t as NodeIcon_default } from "./NodeIcon-E2eKe-jx.js";
import "./VirtualSchema-D7U4dC5I.js";
import "./useCalloutHelpers-B2vFqKg7.js";
import "./useTelemetryContext-CX0ppOn2.js";
import "./useRunWorkflow-GiBQIQS_.js";
import "./pushConnection.store-DI9FsxN3.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-8nZnC0dR.js";
import "./dateFormatter-B2XPNznj.js";
import "./useExecutionHelpers-C_Mdy6ht.js";
import "./vue-K5kPXnPp.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CYxsMJmo.js";
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
