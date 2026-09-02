import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, I as h, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, dt as useModel, h as withModifiers, j as createVNode, m as withKeys, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { bn as ProjectTypes, mn as getTruncatedProjectName, pn as ResourceType } from "./workflows.store-QD0eo9S6.js";
import { St as WORKFLOW_VERSION_DESCRIPTION_MAX_LENGTH } from "./src-DAIlllTg.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import "./constants-DxozP3cY.js";
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
//#region src/app/components/CharacterCount.vue?vue&type=script&setup=true&lang.ts
var CharacterCount_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CharacterCount",
	props: {
		value: {},
		max: {}
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return __props.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "xsmall",
				color: "text-light",
				class: normalizeClass(_ctx.$style.characterCount)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.characterCount", { interpolate: {
					count: String(__props.value.length),
					max: String(__props.max)
				} })), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/app/components/CharacterCount.vue?vue&type=style&index=0&lang.module.scss
var characterCount = "_characterCount_1inky_388";
var shimmer$1 = "_shimmer_1inky_1";
var spin$1 = "_spin_1inky_1";
var opacityPulse$1 = "_opacityPulse_1inky_1";
var popoverIn$1 = "_popoverIn_1inky_1";
var fadeIn$1 = "_fadeIn_1inky_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1inky_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1inky_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1inky_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1inky_1";
var blurSwapIn$1 = "_blurSwapIn_1inky_1";
var blurSwapOut$1 = "_blurSwapOut_1inky_1";
var pulseGlow$1 = "_pulseGlow_1inky_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1inky_1";
var fade$1 = "_fade_1inky_1";
var fadeInUp$1 = "_fadeInUp_1inky_1";
var fadeInDown$1 = "_fadeInDown_1inky_1";
var fadeInLeft$1 = "_fadeInLeft_1inky_1";
var fadeInRight$1 = "_fadeInRight_1inky_1";
var fadeOut$1 = "_fadeOut_1inky_1";
var fadeOutDown$1 = "_fadeOutDown_1inky_1";
var fadeOutUp$1 = "_fadeOutUp_1inky_1";
var fadeOutLeft$1 = "_fadeOutLeft_1inky_1";
var fadeOutRight$1 = "_fadeOutRight_1inky_1";
var ping$1 = "_ping_1inky_1";
var blinkBackground$1 = "_blinkBackground_1inky_1";
var typingBlink$1 = "_typingBlink_1inky_1";
var CharacterCount_vue_vue_type_style_index_0_lang_module_default = {
	characterCount,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1inky_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var CharacterCount_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CharacterCount_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CharacterCount_vue_vue_type_style_index_0_lang_module_default }]]);
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
				]), createVNode(CharacterCount_default, {
					value: versionName.value,
					max: unref(128),
					"data-test-id": "workflow-version-name-character-count"
				}, null, 8, ["value", "max"])]),
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
				]), createVNode(CharacterCount_default, {
					value: description.value,
					max: unref(WORKFLOW_VERSION_DESCRIPTION_MAX_LENGTH),
					"data-test-id": "workflow-version-description-character-count"
				}, null, 8, ["value", "max"])]),
				_: 1
			}, 8, ["label"])], 2);
		};
	}
});
//#endregion
//#region src/app/components/WorkflowVersionForm.vue?vue&type=style&index=0&lang.module.scss
var formContainer = "_formContainer_cvm0p_388";
var inputWrapper = "_inputWrapper_cvm0p_394";
var shimmer = "_shimmer_cvm0p_1";
var spin = "_spin_cvm0p_1";
var opacityPulse = "_opacityPulse_cvm0p_1";
var popoverIn = "_popoverIn_cvm0p_1";
var fadeIn = "_fadeIn_cvm0p_1";
var collapsibleSlideDown = "_collapsibleSlideDown_cvm0p_1";
var collapsibleSlideUp = "_collapsibleSlideUp_cvm0p_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_cvm0p_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_cvm0p_1";
var blurSwapIn = "_blurSwapIn_cvm0p_1";
var blurSwapOut = "_blurSwapOut_cvm0p_1";
var pulseGlow = "_pulseGlow_cvm0p_1";
var pulseGlowDelayed = "_pulseGlowDelayed_cvm0p_1";
var fade = "_fade_cvm0p_1";
var fadeInUp = "_fadeInUp_cvm0p_1";
var fadeInDown = "_fadeInDown_cvm0p_1";
var fadeInLeft = "_fadeInLeft_cvm0p_1";
var fadeInRight = "_fadeInRight_cvm0p_1";
var fadeOut = "_fadeOut_cvm0p_1";
var fadeOutDown = "_fadeOutDown_cvm0p_1";
var fadeOutUp = "_fadeOutUp_cvm0p_1";
var fadeOutLeft = "_fadeOutLeft_cvm0p_1";
var fadeOutRight = "_fadeOutRight_cvm0p_1";
var ping = "_ping_cvm0p_1";
var blinkBackground = "_blinkBackground_cvm0p_1";
var typingBlink = "_typingBlink_cvm0p_1";
var WorkflowVersionForm_vue_vue_type_style_index_0_lang_module_default = {
	formContainer,
	inputWrapper,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_cvm0p_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var WorkflowVersionForm_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowVersionForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowVersionForm_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CharacterCount_default as n, useMoveResourceToProjectToast as r, WorkflowVersionForm_default as t };
