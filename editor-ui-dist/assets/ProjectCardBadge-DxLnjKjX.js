import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, at as resolveComponent, bt as withCtx, it as renderSlot, j as createVNode, ot as resolveDirective, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { bn as ProjectTypes, hn as splitName, pn as ResourceType } from "./workflows.store-Bo6ZgF_O.js";
import { t as isIconOrEmoji } from "./types-BozgK3KO.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DPRLSskW.js";
import { t as ProjectIcon_default } from "./ProjectIcon-Ckn88iUF.js";
//#region src/features/collaboration/projects/components/ProjectCardBadge.vue?vue&type=script&setup=true&lang.ts
var ProjectState = /* @__PURE__ */ function(ProjectState) {
	ProjectState["SharedPersonal"] = "shared-personal";
	ProjectState["SharedOwned"] = "shared-owned";
	ProjectState["Owned"] = "owned";
	ProjectState["Personal"] = "personal";
	ProjectState["Team"] = "team";
	ProjectState["SharedTeam"] = "shared-team";
	ProjectState["Unknown"] = "unknown";
	return ProjectState;
}(ProjectState || {});
var ProjectCardBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectCardBadge",
	props: {
		resource: {},
		resourceType: {},
		resourceTypeLabel: {},
		personalProject: {},
		showBadgeBorder: {
			type: Boolean,
			default: true
		},
		global: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const homeProject = computed(() => {
			if (props.resource.resourceType === "dataTable") return props.resource.project;
			return props.resource.homeProject;
		});
		const i18n = useI18n();
		const isShared = computed(() => {
			return "sharedWithProjects" in props.resource && props.resource.sharedWithProjects?.length;
		});
		const projectState = computed(() => {
			if (!homeProject.value || props.personalProject && homeProject.value?.id === props.personalProject.id) {
				if (isShared.value) return ProjectState.SharedOwned;
				return ProjectState.Owned;
			} else if (homeProject.value?.type !== ProjectTypes.Team) {
				if (isShared.value) return ProjectState.SharedPersonal;
				return ProjectState.Personal;
			} else if (homeProject.value?.type === ProjectTypes.Team) {
				if (isShared.value) return ProjectState.SharedTeam;
				return ProjectState.Team;
			}
			return ProjectState.Unknown;
		});
		const numberOfMembersInHomeTeamProject = computed(() => "sharedWithProjects" in props.resource ? props.resource.sharedWithProjects?.length ?? 0 : 0);
		const badgeText = computed(() => {
			if (projectState.value === ProjectState.Owned || projectState.value === ProjectState.SharedOwned) return i18n.baseText("projects.menu.personal");
			else {
				const { name, email } = splitName(homeProject.value?.name ?? "");
				return name ?? email ?? "";
			}
		});
		const badgeIcon = computed(() => {
			switch (projectState.value) {
				case ProjectState.Owned:
				case ProjectState.SharedOwned:
				case ProjectState.Personal:
				case ProjectState.SharedPersonal: return {
					type: "icon",
					value: "user"
				};
				case ProjectState.Team:
				case ProjectState.SharedTeam: return isIconOrEmoji(homeProject.value?.icon) ? homeProject.value?.icon : {
					type: "icon",
					value: "layers"
				};
				default: return {
					type: "icon",
					value: "layers"
				};
			}
		});
		const badgeTooltip = computed(() => {
			switch (projectState.value) {
				case ProjectState.SharedOwned: return i18n.baseText("projects.badge.tooltip.sharedOwned", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					count: numberOfMembersInHomeTeamProject.value
				} });
				case ProjectState.SharedPersonal: return i18n.baseText("projects.badge.tooltip.sharedPersonal", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					name: badgeText.value,
					count: numberOfMembersInHomeTeamProject.value
				} });
				case ProjectState.Personal: return i18n.baseText("projects.badge.tooltip.personal", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					name: badgeText.value
				} });
				case ProjectState.Team: return i18n.baseText("projects.badge.tooltip.team", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					name: badgeText.value
				} });
				case ProjectState.SharedTeam: return i18n.baseText("projects.badge.tooltip.sharedTeam", { interpolate: {
					resourceTypeLabel: props.resourceTypeLabel,
					name: badgeText.value,
					count: numberOfMembersInHomeTeamProject.value
				} });
				default: return "";
			}
		});
		const projectLocation = computed(() => {
			if (projectState.value !== ProjectState.Personal && projectState.value !== ProjectState.SharedPersonal && homeProject.value?.id && props.resourceType === ResourceType.Workflow) return {
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: homeProject.value?.id }
			};
			return null;
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			const _directive_n8n_truncate = resolveDirective("n8n-truncate");
			return openBlock(), createElementBlock("div", mergeProps({ class: {
				[_ctx.$style.wrapper]: true,
				[_ctx.$style["no-border"]]: __props.showBadgeBorder
			} }, _ctx.$attrs), [
				badgeText.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					disabled: !badgeTooltip.value || numberOfMembersInHomeTeamProject.value !== 0,
					placement: "top"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(badgeTooltip.value), 1)]),
					default: withCtx(() => [createVNode(unref(N8nBadge_default), {
						class: normalizeClass([
							_ctx.$style.badge,
							_ctx.$style.projectBadge,
							projectLocation.value && _ctx.$style.link
						]),
						theme: "tertiary",
						"data-test-id": "card-badge",
						"show-border": __props.showBadgeBorder
					}, {
						default: withCtx(() => [createVNode(ProjectIcon_default, {
							icon: badgeIcon.value,
							"border-less": true,
							size: "mini"
						}, null, 8, ["icon"]), projectLocation.value ? (openBlock(), createBlock(_component_RouterLink, {
							key: 0,
							to: projectLocation.value
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("span", { class: normalizeClass(_ctx.$style.nowrap) }, null, 2), [[
								_directive_n8n_truncate,
								badgeText.value,
								"20"
							]])]),
							_: 1
						}, 8, ["to"])) : withDirectives((openBlock(), createElementBlock("span", {
							key: 1,
							class: normalizeClass(_ctx.$style.nowrap)
						}, null, 2)), [[
							_directive_n8n_truncate,
							badgeText.value,
							"20"
						]])]),
						_: 1
					}, 8, ["class", "show-border"])]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "default"),
				__props.global ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "top"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.badge.tooltip.global", { interpolate: { resourceTypeLabel: props.resourceTypeLabel } })), 1)]),
					default: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style["global-badge"]),
						"data-test-id": "credential-global-badge",
						theme: "tertiary",
						bold: ""
					}, [createVNode(ProjectIcon_default, {
						icon: {
							type: "icon",
							value: "globe"
						},
						"border-less": true,
						size: "mini"
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("projects.badge.global")), 1)], 2)]),
					_: 1
				})) : createCommentVNode("", true),
				numberOfMembersInHomeTeamProject.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					disabled: !badgeTooltip.value || numberOfMembersInHomeTeamProject.value === 0,
					placement: "top"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(badgeTooltip.value), 1)]),
					default: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style["count-badge"]),
						theme: "tertiary",
						bold: ""
					}, " +" + toDisplayString(numberOfMembersInHomeTeamProject.value), 3)]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true)
			], 16);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectCardBadge.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_1tp6k_388";
var badge = "_badge_1tp6k_398";
var projectBadge = "_projectBadge_1tp6k_411";
var link = "_link_1tp6k_416";
var nowrap = "_nowrap_1tp6k_435";
var shimmer = "_shimmer_1tp6k_1";
var spin = "_spin_1tp6k_1";
var opacityPulse = "_opacityPulse_1tp6k_1";
var popoverIn = "_popoverIn_1tp6k_1";
var fadeIn = "_fadeIn_1tp6k_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1tp6k_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1tp6k_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1tp6k_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1tp6k_1";
var blurSwapIn = "_blurSwapIn_1tp6k_1";
var blurSwapOut = "_blurSwapOut_1tp6k_1";
var pulseGlow = "_pulseGlow_1tp6k_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1tp6k_1";
var fade = "_fade_1tp6k_1";
var fadeInUp = "_fadeInUp_1tp6k_1";
var fadeInDown = "_fadeInDown_1tp6k_1";
var fadeInLeft = "_fadeInLeft_1tp6k_1";
var fadeInRight = "_fadeInRight_1tp6k_1";
var fadeOut = "_fadeOut_1tp6k_1";
var fadeOutDown = "_fadeOutDown_1tp6k_1";
var fadeOutUp = "_fadeOutUp_1tp6k_1";
var fadeOutLeft = "_fadeOutLeft_1tp6k_1";
var fadeOutRight = "_fadeOutRight_1tp6k_1";
var ping = "_ping_1tp6k_1";
var blinkBackground = "_blinkBackground_1tp6k_1";
var typingBlink = "_typingBlink_1tp6k_1";
var ProjectCardBadge_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	"no-border": "_no-border_1tp6k_394",
	badge,
	projectBadge,
	link,
	"count-badge": "_count-badge_1tp6k_420",
	"global-badge": "_global-badge_1tp6k_428 _count-badge_1tp6k_420",
	nowrap,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1tp6k_1",
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
var ProjectCardBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectCardBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectCardBadge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ProjectCardBadge_default as t };
