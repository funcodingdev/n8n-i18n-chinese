import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, I as h, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, dt as useModel, h as withModifiers, j as createVNode, m as withKeys, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-DTYzu2mo.js";
import { kt as N8nInputLabel_default, oo as N8nText_default, uo as Input_default } from "./src-CH7oGKAF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter } from "./htmlUtils-BvbMD63z.js";
import { gn as ProjectTypes, ln as ResourceType, un as getTruncatedProjectName } from "./workflows.store-By74034z.js";
import { mt as WORKFLOW_VERSION_DESCRIPTION_MAX_LENGTH } from "./src-DjpOA2sH.js";
import { t as VIEWS } from "./views-Cm6YRZ1u.js";
import { n as useToast } from "./useToast-TR8GO7L_.js";
import "./constants-CV_3h7tS.js";
//#region src/features/collaboration/projects/components/ProjectMoveSuccessToastMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { key: 2 };
var _hoisted_4 = {
	key: 1,
	class: "pt-s"
};
var _hoisted_5 = { href: "#" };
//#endregion
//#region src/features/collaboration/projects/components/ProjectMoveSuccessToastMessage.vue
var ProjectMoveSuccessToastMessage_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMoveSuccessToastMessage",
	props: {
		routeName: {},
		resourceType: {},
		targetProject: {},
		isShareCredentialsChecked: { type: Boolean },
		areAllUsedCredentialsShareable: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isWorkflow = computed(() => props.resourceType === ResourceType.Workflow);
		const isTargetProjectTeam = computed(() => props.targetProject.type === ProjectTypes.Team);
		const targetProjectName = computed(() => {
			return getTruncatedProjectName(props.targetProject?.name);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [isWorkflow.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				tag: "p",
				class: "pt-xs"
			}, {
				default: withCtx(() => [props.isShareCredentialsChecked && props.areAllUsedCredentialsShareable ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow.withAllCredentials")), 1)) : props.isShareCredentialsChecked ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow.withSomeCredentials")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("projects.move.resource.success.message.workflow")), 1))]),
				_: 1
			})) : createCommentVNode("", true), isTargetProjectTeam.value ? (openBlock(), createElementBlock("p", _hoisted_4, [createBaseVNode("a", _hoisted_5, toDisplayString(unref(i18n).baseText("projects.move.resource.success.link", { interpolate: { targetProjectName: targetProjectName.value } })), 1)])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/composables/useMoveResourceToProjectToast.ts
function useMoveResourceToProjectToast() {
	const router = useRouter();
	const i18n = useI18n();
	const toast = useToast();
	function showMoveToProjectToast(options) {
		const viewName = options.resourceType === ResourceType.Workflow ? VIEWS.PROJECTS_WORKFLOWS : VIEWS.PROJECTS_CREDENTIALS;
		toast.showToast({
			title: i18n.baseText("projects.move.resource.success.title", { interpolate: {
				resourceTypeLabel: options.resourceTypeLabel,
				resourceName: options.resourceName,
				targetProjectName: options.targetProjectName
			} }),
			message: h(ProjectMoveSuccessToastMessage_default, {
				routeName: viewName,
				resourceType: options.resourceType,
				targetProject: options.targetProject,
				isShareCredentialsChecked: options.shareUsedCredentials,
				areAllUsedCredentialsShareable: options.areAllUsedCredentialsShareable
			}),
			onClick: (event) => {
				if (event?.target instanceof HTMLAnchorElement) {
					event.preventDefault();
					router.push(options.destinationFolderId ? {
						name: VIEWS.PROJECTS_FOLDERS,
						params: {
							projectId: options.targetProject.id,
							folderId: options.destinationFolderId
						}
					} : {
						name: viewName,
						params: { projectId: options.targetProject.id }
					});
				}
			},
			type: "success",
			duration: 8e3
		});
	}
	return { showMoveToProjectToast };
}
//#endregion
//#region src/app/components/WorkflowVersionForm.vue?vue&type=script&setup=true&lang.ts
var WorkflowVersionForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowVersionForm",
	props: /* @__PURE__ */ mergeModels({
		disabled: { type: Boolean },
		versionNameTestId: {},
		descriptionTestId: {}
	}, {
		"versionName": { required: true },
		"versionNameModifiers": {},
		"description": { required: true },
		"descriptionModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["submit"], ["update:versionName", "update:description"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const versionName = useModel(__props, "versionName");
		const description = useModel(__props, "description");
		const nameInputRef = useTemplateRef("nameInput");
		const i18n = useI18n();
		const emit = __emit;
		const focusInput = () => {
			nameInputRef.value?.select();
		};
		const handleEnterKey = () => {
			emit("submit");
		};
		__expose({ focusInput });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.formContainer) }, [createVNode(unref(N8nInputLabel_default), {
				"input-name": "workflow-version-name",
				label: unref(i18n).baseText("workflows.publishModal.versionNameLabel"),
				required: true,
				class: normalizeClass(_ctx.$style.inputWrapper)
			}, {
				default: withCtx(() => [createVNode(unref(Input_default), {
					id: "workflow-version-name",
					ref: "nameInput",
					modelValue: versionName.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => versionName.value = $event),
					disabled: __props.disabled,
					size: "large",
					maxlength: unref(128),
					"data-test-id": __props.versionNameTestId,
					onKeydown: withKeys(withModifiers(handleEnterKey, ["prevent"]), ["enter"])
				}, null, 8, [
					"modelValue",
					"disabled",
					"maxlength",
					"data-test-id",
					"onKeydown"
				])]),
				_: 1
			}, 8, ["label", "class"]), createVNode(unref(N8nInputLabel_default), {
				"input-name": "workflow-version-description",
				label: unref(i18n).baseText("workflows.publishModal.descriptionPlaceholder")
			}, {
				default: withCtx(() => [createVNode(unref(Input_default), {
					id: "workflow-version-description",
					modelValue: description.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => description.value = $event),
					type: "textarea",
					rows: 4,
					disabled: __props.disabled,
					size: "large",
					maxlength: unref(WORKFLOW_VERSION_DESCRIPTION_MAX_LENGTH),
					"data-test-id": __props.descriptionTestId
				}, null, 8, [
					"modelValue",
					"disabled",
					"maxlength",
					"data-test-id"
				])]),
				_: 1
			}, 8, ["label"])], 2);
		};
	}
});
var WorkflowVersionForm_vue_vue_type_style_index_0_lang_module_default = {
	formContainer: "_formContainer_1ibyw_125",
	inputWrapper: "_inputWrapper_1ibyw_131"
};
var WorkflowVersionForm_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowVersionForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowVersionForm_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useMoveResourceToProjectToast as n, WorkflowVersionForm_default as t };
