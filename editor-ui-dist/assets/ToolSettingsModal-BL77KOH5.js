import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-BhiJVBN1.js";
import { Hi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-CoXSecun.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Z1oHCFLd.js";
import { r as useUIStore } from "./users.store-DNFsxBs3.js";
import "./ParameterInputList-BC--Knmm.js";
import "./constants-B69HgT-U.js";
import "./merge-Ch7EvJB5.js";
import "./_baseOrderBy-DDmiqX1z.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-fUGsrtT8.js";
import { t as Modal_default } from "./Modal-qGbCucjU.js";
import "./useClipboard-CQ_Uhb1w.js";
import "./executions.store-DHH2BiK8.js";
import "./assistant.store-BzAvwlAU.js";
import "./chatPanel.store-iPbty1hv.js";
import "./RunData-BgEucZdE.js";
import "./NDVEmptyState-Cdm1At8u.js";
import "./useEnvFeatureFlag-DUmya-lf.js";
import "./externalSecrets.ee.store-By0_F3Jt.js";
import "./uniqBy-CmQy5pUu.js";
import "./usePinnedData-DsohccEA.js";
import "./nodeIcon-BcpIPds6.js";
import "./canvas.utils-BDUvA23o.js";
import "./nodeCreator.store-BnureRr3.js";
import "./useCanvasOperations-G8rwRmFs.js";
import "./folders.store-b4jaUjZA.js";
import "./useQuickConnect-CbbgrGNv.js";
import "./CredentialIcon-M6G23oKR.js";
import "./useDynamicCredentials-CcsHJahX.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./Draggable-gLtXyPRr.js";
import { t as NodeIcon_default } from "./NodeIcon-C8wQqbVB.js";
import "./VirtualSchema-y75pcXO0.js";
import "./useCalloutHelpers-BzpSFcWq.js";
import "./useTelemetryContext-BOSg3DtS.js";
import "./useRunWorkflow-CboG-y2C.js";
import "./pushConnection.store-C86FgEPy.js";
import "./nodeTransforms-BLdnX7uq.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-BXIFY4WE.js";
import "./dateFormatter-jGhDtpFs.js";
import "./useExecutionHelpers-DsDOyTD4.js";
import "./vue-B-h9D2g4.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-C3CBpjj-.js";
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
