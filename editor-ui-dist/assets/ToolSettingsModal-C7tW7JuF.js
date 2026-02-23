import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-pm4B1YcD.js";
import { Hi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-B3wEFHds.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CrQvOihi.js";
import { r as useUIStore } from "./users.store-Cfyj76Cq.js";
import "./ParameterInputList-C24rEYmf.js";
import "./constants-Da_CaOjC.js";
import "./merge-C53jWkdi.js";
import "./_baseOrderBy-sLFpBNOQ.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-ChH2wV-P.js";
import { t as Modal_default } from "./Modal-BakHCdak.js";
import "./useClipboard-de0mRNfc.js";
import "./executions.store-C1uP3mjd.js";
import "./assistant.store-BINIpHue.js";
import "./chatPanel.store-niMC_nma.js";
import "./RunData-Dmu-F2Ma.js";
import "./NDVEmptyState-80UtyM16.js";
import "./useEnvFeatureFlag-ChToAhDn.js";
import "./externalSecrets.ee.store-CFWJ7aVK.js";
import "./uniqBy-Dv3czTGz.js";
import "./usePinnedData-Bzp4yEO4.js";
import "./nodeIcon-CXujg-pV.js";
import "./canvas.utils-BVvTHoyE.js";
import "./nodeCreator.store-BzWVn9l7.js";
import "./useCanvasOperations-DOt8fOsU.js";
import "./folders.store-C98OBIEG.js";
import "./useQuickConnect-C8g9A8r5.js";
import "./CredentialIcon-x4muH1rf.js";
import "./useDynamicCredentials-PHf_JqYF.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./Draggable-DGVX07rb.js";
import { t as NodeIcon_default } from "./NodeIcon-gEYnuVIT.js";
import "./VirtualSchema-D_vefbf0.js";
import "./useCalloutHelpers-BItflHeO.js";
import "./useTelemetryContext-DoFpkjR0.js";
import "./useRunWorkflow-dTCfA8UQ.js";
import "./pushConnection.store-BX30GAEI.js";
import "./nodeTransforms-tVjgS3uC.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-DnZd9c3G.js";
import "./dateFormatter-CprFMyvM.js";
import "./useExecutionHelpers-CoaC3ECl.js";
import "./vue-B-h9D2g4.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CEcATx1F.js";
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
