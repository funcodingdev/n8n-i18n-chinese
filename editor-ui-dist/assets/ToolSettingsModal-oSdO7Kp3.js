import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-BhiJVBN1.js";
import { Hi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-fKjZmfjv.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DpR-yZfv.js";
import { r as useUIStore } from "./users.store-V01ymwEk.js";
import "./ParameterInputList-lt67ER1H.js";
import "./constants-dxedTdnr.js";
import "./merge-Ch7EvJB5.js";
import "./_baseOrderBy-D9ro0sYB.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DRfCRtqt.js";
import { t as Modal_default } from "./Modal-B2pnCQFN.js";
import "./useClipboard-C5Le13oQ.js";
import "./executions.store-CjIRy-YK.js";
import "./assistant.store-1WQmSFts.js";
import "./chatPanel.store-BXZRxA86.js";
import "./RunData-D7CbJzq7.js";
import "./NDVEmptyState-BVApZ8qi.js";
import "./useEnvFeatureFlag-B2u1Bjgc.js";
import "./externalSecrets.ee.store-C50GolIR.js";
import "./uniqBy-D9t4MGKO.js";
import "./usePinnedData-CpMEgjvP.js";
import "./nodeIcon-Bi4E81FS.js";
import "./canvas.utils-Df6_R1uh.js";
import "./nodeCreator.store-C5mN1XoH.js";
import "./useCanvasOperations-BFyU6Gvq.js";
import "./folders.store-B_rpgfRe.js";
import "./useQuickConnect-gukndEC6.js";
import "./CredentialIcon-Cpd2tLpJ.js";
import "./useDynamicCredentials-DtjLKTW9.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./Draggable-DO1UerQx.js";
import { t as NodeIcon_default } from "./NodeIcon-BRciE0jp.js";
import "./VirtualSchema-C5q88Ax_.js";
import "./useCalloutHelpers-BY0DcI9N.js";
import "./useTelemetryContext-DcP4X5P5.js";
import "./useRunWorkflow-T2Mb3HKI.js";
import "./pushConnection.store-m4OODaB3.js";
import "./nodeTransforms-DbVdpCHc.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-BvwvY5wW.js";
import "./dateFormatter-jGhDtpFs.js";
import "./useExecutionHelpers-DwNxmRxs.js";
import "./vue-B-h9D2g4.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-BahYOeIK.js";
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
