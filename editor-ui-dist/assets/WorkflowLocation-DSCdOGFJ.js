import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DxozP3cY.js";
import { t as router } from "./router-CV0B_luQ.js";
//#region src/features/ai/mcpAccess/components/WorkflowLocation.vue?vue&type=script&setup=true&lang.ts
var WorkflowLocation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowLocation",
	props: {
		workflowId: {},
		workflowName: { default: void 0 },
		homeProject: { default: void 0 },
		parentFolder: { default: void 0 },
		asLinks: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const projectName = computed(() => {
			if (props.homeProject?.type === "personal") return i18n.baseText("projects.menu.personal");
			return props.homeProject?.name ?? "";
		});
		const projectLink = computed(() => {
			if (!props.homeProject) return "";
			return router.resolve({
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: props.homeProject.id }
			}).fullPath;
		});
		const folderLink = computed(() => {
			if (!props.homeProject || !props.parentFolder) return "";
			return `/projects/${props.homeProject.id}/folders/${props.parentFolder.id}/workflows`;
		});
		const workflowLink = computed(() => {
			if (!props.workflowId) return "";
			return router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: props.workflowId }
			}).fullPath;
		});
		const hasGrandparentFolder = computed(() => !!props.parentFolder?.parentFolderId);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style["location-container"]) }, [
				__props.homeProject ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.truncate)
				}, [__props.asLinks ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					"data-test-id": "workflow-location-project-link",
					to: projectLink.value,
					theme: "text",
					class: normalizeClass([_ctx.$style["location-link"], _ctx.$style.truncate]),
					"new-window": true
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "workflow-location-project-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["to", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.truncate),
					"data-test-id": "workflow-location-project-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
					_: 1
				}, 8, ["class"]))], 2)) : createCommentVNode("", true),
				__props.parentFolder || __props.workflowName ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.separator),
					"data-test-id": "workflow-location-separator"
				}, " / ", 2)) : createCommentVNode("", true),
				hasGrandparentFolder.value ? (openBlock(), createElementBlock("span", {
					key: 2,
					class: normalizeClass(_ctx.$style.grandparent),
					"data-test-id": "workflow-location-grandparent"
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.ellipsis) }, "...", 2), createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.separator),
					"data-test-id": "workflow-location-ellipsis-separator"
				}, "/", 2)], 2)) : createCommentVNode("", true),
				__props.parentFolder ? (openBlock(), createElementBlock("span", {
					key: 3,
					class: normalizeClass(_ctx.$style["parent-folder"])
				}, [__props.asLinks && __props.homeProject ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					"data-test-id": "workflow-location-folder-link",
					to: folderLink.value,
					theme: "text",
					class: normalizeClass([_ctx.$style["location-link"], _ctx.$style.truncate]),
					"new-window": true
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "workflow-location-folder-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.parentFolder.name), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["to", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.truncate),
					"data-test-id": "workflow-location-folder-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.parentFolder.name), 1)]),
					_: 1
				}, 8, ["class"]))], 2)) : createCommentVNode("", true),
				__props.parentFolder && __props.workflowName ? (openBlock(), createElementBlock("span", {
					key: 4,
					class: normalizeClass(_ctx.$style.separator)
				}, "/", 2)) : createCommentVNode("", true),
				__props.workflowName ? (openBlock(), createElementBlock("span", {
					key: 5,
					class: normalizeClass([_ctx.$style["workflow-name"], _ctx.$style.truncate])
				}, [__props.asLinks && __props.workflowId ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					"data-test-id": "workflow-location-workflow-link",
					to: workflowLink.value,
					theme: "text",
					class: normalizeClass([_ctx.$style["location-link"], _ctx.$style.truncate]),
					"new-window": true
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "workflow-location-workflow-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.workflowName), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["to", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.truncate),
					"data-test-id": "workflow-location-workflow-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.workflowName), 1)]),
					_: 1
				}, 8, ["class"]))], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/WorkflowLocation.vue?vue&type=style&index=0&lang.module.scss
var ellipsis = "_ellipsis_1c8b1_397";
var separator = "_separator_1c8b1_402";
var grandparent = "_grandparent_1c8b1_407";
var truncate = "_truncate_1c8b1_421";
var shimmer = "_shimmer_1c8b1_1";
var spin = "_spin_1c8b1_1";
var opacityPulse = "_opacityPulse_1c8b1_1";
var popoverIn = "_popoverIn_1c8b1_1";
var fadeIn = "_fadeIn_1c8b1_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1c8b1_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1c8b1_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1c8b1_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1c8b1_1";
var blurSwapIn = "_blurSwapIn_1c8b1_1";
var blurSwapOut = "_blurSwapOut_1c8b1_1";
var pulseGlow = "_pulseGlow_1c8b1_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1c8b1_1";
var fade = "_fade_1c8b1_1";
var fadeInUp = "_fadeInUp_1c8b1_1";
var fadeInDown = "_fadeInDown_1c8b1_1";
var fadeInLeft = "_fadeInLeft_1c8b1_1";
var fadeInRight = "_fadeInRight_1c8b1_1";
var fadeOut = "_fadeOut_1c8b1_1";
var fadeOutDown = "_fadeOutDown_1c8b1_1";
var fadeOutUp = "_fadeOutUp_1c8b1_1";
var fadeOutLeft = "_fadeOutLeft_1c8b1_1";
var fadeOutRight = "_fadeOutRight_1c8b1_1";
var ping = "_ping_1c8b1_1";
var blinkBackground = "_blinkBackground_1c8b1_1";
var typingBlink = "_typingBlink_1c8b1_1";
var WorkflowLocation_vue_vue_type_style_index_0_lang_module_default = {
	"location-container": "_location-container_1c8b1_388",
	ellipsis,
	separator,
	grandparent,
	"parent-folder": "_parent-folder_1c8b1_413",
	truncate,
	"location-link": "_location-link_1c8b1_429",
	"workflow-name": "_workflow-name_1c8b1_433",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1c8b1_1",
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
var WorkflowLocation_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowLocation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowLocation_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowLocation_default as t };
