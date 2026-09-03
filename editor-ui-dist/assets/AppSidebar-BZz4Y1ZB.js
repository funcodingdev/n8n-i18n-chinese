import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { n as BottomMenu_default, t as MainSidebarHeader_default } from "./MainSidebarHeader-BCjo7onS.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nMenuItem_default } from "./N8nMenuItem-n3_H9HM4.js";
import { t as N8nResizeWrapper_default } from "./N8nResizeWrapper-C_gNBgTM.js";
import { D as injectWorkflowDocumentStore, vn as useProjectsStore, yn as useSourceControlStore } from "./workflows.store-Bo6ZgF_O.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-EbE2ruUr.js";
import { va as getResourcePermissions } from "./src-C3aqUyDp.js";
import { t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-mu-wA-a0.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-ef8PM4CK.js";
import { t as usePostHog } from "./posthog.store-CnmkBX62.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { Br as ABOUT_MODAL_KEY, Gi as LOCAL_STORAGE_SIDEBAR_WIDTH, Ya as SIDEBAR_EXPANDED_EXPERIMENT, gr as AGENT_BUILDER_VIEW, po as WHATS_NEW_MODAL_KEY, rr as DATA_TABLE_DETAILS } from "./constants-DPRLSskW.js";
import { t as useVersionsStore } from "./versions.store-CRxDWwbW.js";
import { n as useFavoritesStore } from "./workflowsList.store-AYTNm4a5.js";
import { n as useUIStore, w as DEFAULT_PROJECT_ICON } from "./ui.store-BhVgRazX.js";
import { t as hasPermission } from "./permissions-DkZpSVVu.js";
import { a as trackTemplatesClick, t as TemplateClickSource } from "./utils-BgFcwycp.js";
import { t as useInstanceAiAvailable } from "./useInstanceAiAvailability-Dmse0Wb7.js";
import { t as useTemplatesStore } from "./templates.store-CPTN09Ar.js";
import { n as EXTERNAL_LINKS, t as useBugReporting } from "./useBugReporting-Bg1P0VXG.js";
import { t as useAiGateway } from "./useAiGateway-CU3Dq84r.js";
import { v as INSTANCE_AI_VIEW } from "./constants-CGZjWQGx.js";
import { t as sourceControlEventBus } from "./sourceControl.eventBus-Bauy10pr.js";
import { t as useKeybindings } from "./useKeybindings-u3L03Pvp.js";
import { t as useGlobalEntityCreation } from "./useGlobalEntityCreation-CnOqMP3O.js";
import { c as CHAT_VIEW } from "./constants-zeVT1Ciq.js";
import { t as useWorkflowReviewsFeature } from "./useWorkflowReviewsFeature-CDZD5zMX.js";
import { r as WORKFLOW_REVIEW_REQUESTS_VIEW } from "./constants-552-xuTF.js";
import { t as useSettingsItems } from "./useSettingsItems-B0g-Pw7Y.js";
import { t as useSidebarLayout } from "./useSidebarLayout-C17HXsgR.js";
import { t as useResourceCenterStore } from "./resourceCenter.store-DQiRyrZ9.js";
//#region src/app/components/MainSidebarSourceControl.vue?vue&type=script&setup=true&lang.ts
var MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebarSourceControl",
	props: { isCollapsed: { type: Boolean } },
	setup(__props) {
		const sourceControlStore = useSourceControlStore();
		const projectStore = useProjectsStore();
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const tooltipOpenDelay = ref(300);
		const currentBranch = computed(() => {
			return sourceControlStore.preferences.branchName;
		});
		const hasPushPermission = computed(() => {
			return hasPermission(["rbac"], { rbac: { scope: "sourceControl:push" } }) || projectStore.myProjects.some((project) => project.type === "team" && getResourcePermissions(project?.scopes)?.sourceControl?.push);
		});
		const hasPullPermission = computed(() => {
			return hasPermission(["rbac"], { rbac: { scope: "sourceControl:pull" } });
		});
		const sourceControlAvailable = computed(() => sourceControlStore.isEnterpriseSourceControlEnabled && (hasPullPermission.value || hasPushPermission.value));
		function getAccessibleTextColor(backgroundColor) {
			const hex = backgroundColor.replace("#", "");
			const r = parseInt(hex.slice(0, 2), 16) / 255;
			const g = parseInt(hex.slice(2, 4), 16) / 255;
			const b = parseInt(hex.slice(4, 6), 16) / 255;
			const getLuminance = (channel) => {
				return channel <= .03928 ? channel / 12.92 : Math.pow((channel + .055) / 1.055, 2.4);
			};
			return .2126 * getLuminance(r) + .7152 * getLuminance(g) + .0722 * getLuminance(b) > .5 ? "#000000" : "#ffffff";
		}
		const accessibleTextColor = computed(() => {
			return getAccessibleTextColor(sourceControlStore.preferences.branchColor);
		});
		async function pushWorkfolder() {
			router.push({ query: {
				...route.query,
				sourceControl: "push"
			} });
		}
		function pullWorkfolder() {
			router.push({ query: {
				...route.query,
				sourceControl: "pull"
			} });
		}
		return (_ctx, _cache) => {
			return sourceControlAvailable.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.sync]: true,
					[_ctx.$style.collapsed]: __props.isCollapsed,
					[_ctx.$style.isConnected]: unref(sourceControlStore).isEnterpriseSourceControlEnabled
				}),
				"data-test-id": "main-sidebar-source-control"
			}, [unref(sourceControlStore).preferences.connected && unref(sourceControlStore).preferences.branchName ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.connected),
				"data-test-id": "main-sidebar-source-control-connected"
			}, [__props.isCollapsed ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				"show-after": tooltipOpenDelay.value,
				placement: "right",
				"avoid-collisions": false
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(currentBranch.value), 1)]),
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.icon),
					style: normalizeStyle({
						color: accessibleTextColor.value,
						background: unref(sourceControlStore).preferences.branchColor
					})
				}, [createVNode(unref(N8nIcon_default), {
					icon: "git-branch",
					size: "small"
				})], 6)]),
				_: 1
			}, 8, ["show-after"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.icon),
				style: normalizeStyle({
					color: accessibleTextColor.value,
					background: unref(sourceControlStore).preferences.branchColor
				})
			}, [createVNode(unref(N8nIcon_default), {
				icon: "git-branch",
				size: "small"
			}), createVNode(unref(N8nText_default), {
				bold: "",
				size: "small",
				class: normalizeClass(_ctx.$style.branchName)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(currentBranch.value), 1)]),
				_: 1
			}, 8, ["class"])], 6)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttonContainer) }, [createVNode(unref(N8nTooltip_default), {
				disabled: !__props.isCollapsed && hasPullPermission.value,
				"show-after": tooltipOpenDelay.value,
				placement: __props.isCollapsed ? "right" : "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n).baseText("settings.sourceControl.button.pull")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "xsmall",
					"data-test-id": "main-sidebar-source-control-pull",
					icon: "arrow-down",
					disabled: !hasPullPermission.value,
					label: __props.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.pull"),
					onClick: pullWorkfolder
				}, null, 8, ["disabled", "label"])]),
				_: 1
			}, 8, [
				"disabled",
				"show-after",
				"placement"
			]), createVNode(unref(N8nTooltip_default), {
				disabled: !__props.isCollapsed && !unref(sourceControlStore).preferences.branchReadOnly && hasPushPermission.value,
				"show-after": tooltipOpenDelay.value,
				placement: __props.isCollapsed ? "right" : "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value ? unref(i18n).baseText("settings.sourceControl.button.push.forbidden") : unref(i18n).baseText("settings.sourceControl.button.push")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "xsmall",
					"data-test-id": "main-sidebar-source-control-push",
					icon: "arrow-up",
					label: __props.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.push"),
					disabled: unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value,
					onClick: pushWorkfolder
				}, null, 8, ["label", "disabled"])]),
				_: 1
			}, 8, [
				"disabled",
				"show-after",
				"placement"
			])], 2)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/app/components/MainSidebarSourceControl.vue?vue&type=style&index=0&lang.module.scss
var sync = "_sync_c0aej_388";
var collapsed$1 = "_collapsed_c0aej_395";
var icon = "_icon_c0aej_399";
var buttonContainer = "_buttonContainer_c0aej_409";
var connected = "_connected_c0aej_415";
var branchName = "_branchName_c0aej_423";
var shimmer$2 = "_shimmer_c0aej_1";
var spin$2 = "_spin_c0aej_1";
var opacityPulse$2 = "_opacityPulse_c0aej_1";
var popoverIn$2 = "_popoverIn_c0aej_1";
var fadeIn$2 = "_fadeIn_c0aej_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_c0aej_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_c0aej_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_c0aej_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_c0aej_1";
var blurSwapIn$2 = "_blurSwapIn_c0aej_1";
var blurSwapOut$2 = "_blurSwapOut_c0aej_1";
var pulseGlow$2 = "_pulseGlow_c0aej_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_c0aej_1";
var fade$2 = "_fade_c0aej_1";
var fadeInUp$2 = "_fadeInUp_c0aej_1";
var fadeInDown$2 = "_fadeInDown_c0aej_1";
var fadeInLeft$2 = "_fadeInLeft_c0aej_1";
var fadeInRight$2 = "_fadeInRight_c0aej_1";
var fadeOut$2 = "_fadeOut_c0aej_1";
var fadeOutDown$2 = "_fadeOutDown_c0aej_1";
var fadeOutUp$2 = "_fadeOutUp_c0aej_1";
var fadeOutLeft$2 = "_fadeOutLeft_c0aej_1";
var fadeOutRight$2 = "_fadeOutRight_c0aej_1";
var ping$2 = "_ping_c0aej_1";
var blinkBackground$2 = "_blinkBackground_c0aej_1";
var typingBlink$2 = "_typingBlink_c0aej_1";
var MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default = {
	sync,
	collapsed: collapsed$1,
	icon,
	buttonContainer,
	connected,
	branchName,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_c0aej_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var MainSidebarSourceControl_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/collaboration/projects/composables/useFavoriteNavItems.ts
function useFavoriteNavItems() {
	const favoritesStore = useFavoritesStore();
	const projectsStore = useProjectsStore();
	const favoriteWorkflowItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "workflow").map((f) => ({
		menuItem: {
			id: `favorite-workflow-${f.resourceId}`,
			label: f.resourceName,
			icon: "log-in",
			route: { to: {
				name: VIEWS.WORKFLOW,
				params: { workflowId: f.resourceId }
			} }
		},
		resourceId: f.resourceId,
		resourceType: "workflow"
	})));
	const favoriteProjectItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "project").map((f) => {
		const project = projectsStore.myProjects.find((p) => p.id === f.resourceId);
		return {
			menuItem: {
				id: f.resourceId,
				label: f.resourceName,
				icon: project?.icon ?? DEFAULT_PROJECT_ICON,
				route: { to: {
					name: VIEWS.PROJECTS_WORKFLOWS,
					params: { projectId: f.resourceId }
				} }
			},
			resourceId: f.resourceId,
			resourceType: "project"
		};
	}));
	const favoriteDataTableItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "dataTable" && f.resourceProjectId).map((f) => ({
		menuItem: {
			id: `favorite-datatable-${f.resourceId}`,
			label: f.resourceName,
			icon: "table",
			route: { to: {
				name: DATA_TABLE_DETAILS,
				params: {
					projectId: f.resourceProjectId,
					id: f.resourceId
				}
			} }
		},
		resourceId: f.resourceId,
		resourceType: "dataTable"
	})));
	const favoriteFolderItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "folder" && f.resourceProjectId).map((f) => ({
		menuItem: {
			id: `favorite-folder-${f.resourceId}`,
			label: f.resourceName,
			icon: "folder",
			route: { to: {
				name: VIEWS.PROJECTS_FOLDERS,
				params: {
					projectId: f.resourceProjectId,
					folderId: f.resourceId
				}
			} }
		},
		resourceId: f.resourceId,
		resourceType: "folder"
	})));
	const favoriteAgentItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "agent" && f.resourceProjectId).map((f) => ({
		menuItem: {
			id: `favorite-agent-${f.resourceId}`,
			label: f.resourceName,
			icon: "robot",
			route: { to: {
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: f.resourceProjectId,
					agentId: f.resourceId
				}
			} }
		},
		resourceId: f.resourceId,
		resourceType: "agent"
	})));
	const favoriteGroups = computed(() => {
		const groups = [];
		if (favoriteProjectItems.value.length > 0) groups.push({
			type: "project",
			items: favoriteProjectItems.value
		});
		if (favoriteFolderItems.value.length > 0) groups.push({
			type: "folder",
			items: favoriteFolderItems.value
		});
		if (favoriteWorkflowItems.value.length > 0) groups.push({
			type: "workflow",
			items: favoriteWorkflowItems.value
		});
		if (favoriteDataTableItems.value.length > 0) groups.push({
			type: "dataTable",
			items: favoriteDataTableItems.value
		});
		if (favoriteAgentItems.value.length > 0) groups.push({
			type: "agent",
			items: favoriteAgentItems.value
		});
		return groups;
	});
	const activeTabId = computed(() => {
		const id = projectsStore.projectNavActiveId;
		return (Array.isArray(id) ? id[0] : id) ?? void 0;
	});
	function onFavoriteProjectClick(itemId) {
		const project = projectsStore.myProjects.find((p) => p.id === itemId);
		if (project) projectsStore.setCurrentProject(project);
	}
	function onFavoriteWorkflowClick() {
		projectsStore.setCurrentProject(null);
	}
	async function onUnpinFavorite(resourceId, resourceType) {
		await favoritesStore.toggleFavorite(resourceId, resourceType);
	}
	return {
		favoriteWorkflowItems,
		favoriteProjectItems,
		favoriteDataTableItems,
		favoriteFolderItems,
		favoriteAgentItems,
		favoriteGroups,
		activeTabId,
		onFavoriteProjectClick,
		onFavoriteWorkflowClick,
		onUnpinFavorite
	};
}
//#endregion
//#region src/features/collaboration/projects/components/ProjectNavigation.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var _hoisted_2 = ["aria-label", "onClick"];
var PROJECTS_COLLAPSED_KEY = "n8n:sidebar:projects-collapsed";
var ProjectNavigation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectNavigation",
	props: {
		collapsed: { type: Boolean },
		planName: {}
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const globalEntityCreation = useGlobalEntityCreation();
		const projectsStore = useProjectsStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const favoritesStore = useFavoritesStore();
		const { favoriteGroups, activeTabId, onFavoriteProjectClick, onFavoriteWorkflowClick, onUnpinFavorite } = useFavoriteNavItems();
		const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
		const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
		const isChatLinkAvailable = computed(() => settingsStore.isChatFeatureEnabled && hasPermission(["rbac"], { rbac: { scope: "chatHub:message" } }));
		const isInstanceAiNavVisible = useInstanceAiAvailable();
		const hasMultipleVerifiedUsers = computed(() => usersStore.allUsers.filter((user) => !user.isPendingUser).length > 1);
		const FAVORITES_COLLAPSED_KEY = computed(() => `n8n:sidebar:${usersStore.currentUser?.id ?? "anonymous"}:favorites-collapsed`);
		const favoritesCollapsed = ref(localStorage.getItem(FAVORITES_COLLAPSED_KEY.value) === "true");
		const projectsCollapsed = ref(localStorage.getItem(PROJECTS_COLLAPSED_KEY) === "true");
		watch(favoritesCollapsed, (val) => localStorage.setItem(FAVORITES_COLLAPSED_KEY.value, String(val)));
		watch(projectsCollapsed, (val) => localStorage.setItem(PROJECTS_COLLAPSED_KEY, String(val)));
		const home = computed(() => ({
			id: "home",
			label: locale.baseText("projects.menu.overview"),
			icon: "house",
			route: { to: { name: VIEWS.HOMEPAGE } }
		}));
		const shared = computed(() => ({
			id: "shared",
			label: locale.baseText("projects.menu.shared"),
			icon: "share",
			route: { to: { name: VIEWS.SHARED_WITH_ME } }
		}));
		const getProjectMenuItem = (project) => ({
			id: project.id,
			label: project.name ?? "",
			icon: project.icon ?? DEFAULT_PROJECT_ICON,
			route: { to: {
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: project.id }
			} }
		});
		const personalProject = computed(() => ({
			id: projectsStore.personalProject?.id ?? "",
			label: locale.baseText("projects.menu.personal"),
			icon: "user",
			route: { to: {
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: projectsStore.personalProject?.id }
			} }
		}));
		const hasFavorites = computed(() => favoritesStore.favorites.length > 0);
		const instanceAi = computed(() => ({
			id: "instance-ai",
			icon: "sparkles",
			label: locale.baseText("projects.menu.instanceAi"),
			route: { to: { name: INSTANCE_AI_VIEW } },
			preview: true
		}));
		const { isWorkflowReviewsEnabled: isWorkflowReviewsNavVisible } = useWorkflowReviewsFeature();
		const workflowReviews = computed(() => ({
			id: "workflow-reviews",
			icon: "message-square-text",
			label: locale.baseText("workflowReviews.menu.title"),
			route: { to: { name: WORKFLOW_REVIEW_REQUESTS_VIEW } },
			preview: true
		}));
		const chat = computed(() => ({
			id: "chat",
			icon: "message-circle",
			label: locale.baseText("projects.menu.chat"),
			position: "bottom",
			route: { to: { name: CHAT_VIEW } },
			preview: true
		}));
		async function onSourceControlPull() {
			await projectsStore.getMyProjects();
		}
		onBeforeMount(async () => {
			await usersStore.fetchUsers({
				filter: { isPending: false },
				take: 2
			});
			sourceControlEventBus.on("pull", onSourceControlPull);
		});
		onBeforeUnmount(() => {
			sourceControlEventBus.off("pull", onSourceControlPull);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.projects) }, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.home, props.collapsed ? _ctx.$style.collapsed : ""]) }, [
					unref(isInstanceAiNavVisible) ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 0,
						item: instanceAi.value,
						compact: props.collapsed,
						active: unref(activeTabId) === "instance-ai",
						"data-test-id": "project-instance-ai-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					createVNode(unref(N8nMenuItem_default), {
						item: home.value,
						compact: props.collapsed,
						active: unref(activeTabId) === "home",
						"data-test-id": "project-home-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					]),
					unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 1,
						item: personalProject.value,
						compact: props.collapsed,
						active: unref(activeTabId) === personalProject.value.id,
						"data-test-id": "project-personal-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					(unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) && hasMultipleVerifiedUsers.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 2,
						item: shared.value,
						compact: props.collapsed,
						active: unref(activeTabId) === "shared",
						"data-test-id": "project-shared-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					unref(isWorkflowReviewsNavVisible) ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 3,
						item: workflowReviews.value,
						compact: props.collapsed,
						active: unref(activeTabId) === "workflow-reviews",
						"data-test-id": "project-workflow-reviews-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					isChatLinkAvailable.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 4,
						item: chat.value,
						compact: props.collapsed,
						active: unref(activeTabId) === "chat",
						"data-test-id": "project-chat-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true)
				], 2),
				hasFavorites.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!props.collapsed ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(_ctx.$style.sectionHeader),
					onClick: _cache[0] || (_cache[0] = ($event) => favoritesCollapsed.value = !favoritesCollapsed.value)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("favorites.menu.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: "medium",
					class: normalizeClass([_ctx.$style.chevron, favoritesCollapsed.value ? _ctx.$style.chevronCollapsed : ""])
				}, null, 8, ["class"])], 2)) : createCommentVNode("", true), props.collapsed || !favoritesCollapsed.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.projectItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(favoriteGroups), (group, groupIndex) => {
					return openBlock(), createElementBlock(Fragment, { key: group.type }, [!props.collapsed && groupIndex > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.groupSpacer)
					}, null, 2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(group.items, (entry) => {
						return openBlock(), createElementBlock("div", {
							key: entry.menuItem.id,
							class: normalizeClass([_ctx.$style.favoriteItem, props.collapsed && _ctx.$style.collapsed]),
							onClick: ($event) => group.type === "project" ? unref(onFavoriteProjectClick)(entry.resourceId) : group.type === "workflow" ? unref(onFavoriteWorkflowClick)() : void 0
						}, [createVNode(unref(N8nMenuItem_default), {
							item: entry.menuItem,
							compact: props.collapsed,
							active: unref(activeTabId) === entry.menuItem.id
						}, null, 8, [
							"item",
							"compact",
							"active"
						]), !props.collapsed ? (openBlock(), createElementBlock("button", {
							key: 0,
							class: normalizeClass(_ctx.$style.unpinButton),
							"aria-label": unref(locale).baseText("favorites.remove"),
							"data-test-id": "favorite-unpin-button",
							onClick: withModifiers(($event) => unref(onUnpinFavorite)(entry.resourceId, entry.resourceType), ["stop", "prevent"])
						}, [createVNode(unref(N8nIcon_default), {
							icon: "x",
							size: "small"
						})], 10, _hoisted_2)) : createCommentVNode("", true)], 10, _hoisted_1);
					}), 128))], 64);
				}), 128))], 2)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
				unref(projectsStore).isTeamProjectFeatureEnabled && displayProjects.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [!props.collapsed ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(_ctx.$style.sectionHeader),
					onClick: _cache[1] || (_cache[1] = ($event) => projectsCollapsed.value = !projectsCollapsed.value)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.menu.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: "medium",
					class: normalizeClass([_ctx.$style.chevron, projectsCollapsed.value ? _ctx.$style.chevronCollapsed : ""])
				}, null, 8, ["class"])], 2)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
				(unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) && (!unref(projectsStore).isTeamProjectFeatureEnabled || !projectsCollapsed.value || props.collapsed) ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.projectItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayProjects.value, (project) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: project.id,
						class: normalizeClass({ [_ctx.$style.collapsed]: props.collapsed }),
						item: getProjectMenuItem(project),
						compact: props.collapsed,
						active: unref(activeTabId) === project.id,
						"data-test-id": "project-menu-item"
					}, null, 8, [
						"class",
						"item",
						"compact",
						"active"
					]);
				}), 128))], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectNavigation.vue?vue&type=style&index=0&lang.module.scss
var projects = "_projects_16unc_388";
var plusBtn = "_plusBtn_16unc_393";
var projectItems = "_projectItems_16unc_397";
var upgradeLink = "_upgradeLink_16unc_401";
var sectionHeader = "_sectionHeader_16unc_406";
var chevron = "_chevron_16unc_424";
var chevronCollapsed = "_chevronCollapsed_16unc_438";
var projectsLabel = "_projectsLabel_16unc_442";
var collapsed = "_collapsed_16unc_452";
var addFirstProjectBtn = "_addFirstProjectBtn_16unc_465";
var home = "_home_16unc_474";
var groupSpacer = "_groupSpacer_16unc_481";
var favoriteItem = "_favoriteItem_16unc_485";
var unpinButton = "_unpinButton_16unc_488";
var shimmer$1 = "_shimmer_16unc_1";
var spin$1 = "_spin_16unc_1";
var opacityPulse$1 = "_opacityPulse_16unc_1";
var popoverIn$1 = "_popoverIn_16unc_1";
var fadeIn$1 = "_fadeIn_16unc_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_16unc_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_16unc_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_16unc_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_16unc_1";
var blurSwapIn$1 = "_blurSwapIn_16unc_1";
var blurSwapOut$1 = "_blurSwapOut_16unc_1";
var pulseGlow$1 = "_pulseGlow_16unc_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_16unc_1";
var fade$1 = "_fade_16unc_1";
var fadeInUp$1 = "_fadeInUp_16unc_1";
var fadeInDown$1 = "_fadeInDown_16unc_1";
var fadeInLeft$1 = "_fadeInLeft_16unc_1";
var fadeInRight$1 = "_fadeInRight_16unc_1";
var fadeOut$1 = "_fadeOut_16unc_1";
var fadeOutDown$1 = "_fadeOutDown_16unc_1";
var fadeOutUp$1 = "_fadeOutUp_16unc_1";
var fadeOutLeft$1 = "_fadeOutLeft_16unc_1";
var fadeOutRight$1 = "_fadeOutRight_16unc_1";
var ping$1 = "_ping_16unc_1";
var blinkBackground$1 = "_blinkBackground_16unc_1";
var typingBlink$1 = "_typingBlink_16unc_1";
var ProjectNavigation_vue_vue_type_style_index_0_lang_module_default = {
	projects,
	plusBtn,
	projectItems,
	upgradeLink,
	sectionHeader,
	chevron,
	chevronCollapsed,
	projectsLabel,
	collapsed,
	addFirstProjectBtn,
	home,
	groupSpacer,
	favoriteItem,
	unpinButton,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_16unc_1",
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
var ProjectNavigation_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectNavigation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectNavigation_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/sidebarExpanded/useSidebarExpandedExperiment.ts
function useSidebarExpandedExperiment() {
	const posthogStore = usePostHog();
	const uiStore = useUIStore();
	const applyExperiment = () => {
		if (uiStore.sidebarMenuCollapsed === null) {
			const isVariant = posthogStore.getVariant(SIDEBAR_EXPANDED_EXPERIMENT.name) === SIDEBAR_EXPANDED_EXPERIMENT.variant;
			uiStore.sidebarMenuCollapsed = !isVariant;
			if (isVariant) localStorage.setItem(LOCAL_STORAGE_SIDEBAR_WIDTH, "200");
		}
	};
	return { applyExperiment };
}
//#endregion
//#region src/app/components/MainSidebar.vue?vue&type=script&setup=true&lang.ts
var MainSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebar",
	setup(__props) {
		const cloudPlanStore = useCloudPlanStore();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const templatesStore = useTemplatesStore();
		const uiStore = useUIStore();
		const versionsStore = useVersionsStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const resourceCenterStore = useResourceCenterStore();
		const i18n = useI18n();
		const router = useRouter();
		const telemetry = useTelemetry();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const { getReportingURL } = useBugReporting();
		const { applyExperiment: applySidebarExpandedExperiment } = useSidebarExpandedExperiment();
		applySidebarExpandedExperiment();
		if (resourceCenterStore.shouldAutoExpandSidebar) {
			if (uiStore.sidebarMenuCollapsed) {
				uiStore.sidebarMenuCollapsed = false;
				localStorage.setItem(LOCAL_STORAGE_SIDEBAR_WIDTH, "200");
			}
			resourceCenterStore.markSidebarAutoExpanded();
		}
		const { isCollapsed, isResizing, sidebarWidth, onResizeStart, onResize, onResizeEnd, toggleCollapse } = useSidebarLayout();
		const { settingsItems, handleSettingsItemSelect } = useSettingsItems();
		const { fetchWallet, isEnabled: isAiGatewayEnabled } = useAiGateway();
		const basePath = ref("");
		const scrollAreaRef = ref();
		const hasOverflow = ref(false);
		const hasScrolledFromTop = ref(false);
		let resizeObserver = null;
		const showWhatsNewNotification = computed(() => versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.some((article) => !versionsStore.isWhatsNewArticleRead(article.id)));
		const isResourceCenterEnabled = computed(() => resourceCenterStore.isFeatureEnabled());
		const mainMenuItems = computed(() => [
			{
				id: "cloud-admin",
				position: "bottom",
				label: "Admin Panel",
				icon: "cloud",
				available: settingsStore.isCloudDeployment && hasPermission(["instanceOwner"])
			},
			{
				id: "resource-center",
				icon: {
					type: "icon",
					value: "lightbulb",
					color: "primary"
				},
				label: i18n.baseText("experiments.resourceCenter.sidebar"),
				position: "bottom",
				available: isResourceCenterEnabled.value,
				route: { to: { name: VIEWS.RESOURCE_CENTER } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && templatesStore.hasCustomTemplatesHost && !isResourceCenterEnabled.value,
				route: { to: { name: VIEWS.TEMPLATES } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && !templatesStore.hasCustomTemplatesHost && !isResourceCenterEnabled.value,
				link: {
					href: templatesStore.websiteTemplateRepositoryURL,
					target: "_blank"
				}
			},
			{
				id: "insights",
				icon: "chart-column-decreasing",
				label: "Insights",
				position: "bottom",
				route: { to: { name: VIEWS.INSIGHTS } },
				available: settingsStore.isModuleActive("insights") && hasPermission(["rbac"], { rbac: { scope: "insights:list" } })
			},
			{
				id: "help",
				icon: "circle-help",
				label: i18n.baseText("mainSidebar.help"),
				notification: showWhatsNewNotification.value,
				position: "bottom",
				children: [
					{
						id: "quickstart",
						icon: "video",
						label: i18n.baseText("mainSidebar.helpMenuItems.quickstart"),
						link: {
							href: EXTERNAL_LINKS.QUICKSTART_VIDEO,
							target: "_blank"
						}
					},
					{
						id: "docs",
						icon: "book",
						label: i18n.baseText("mainSidebar.helpMenuItems.documentation"),
						link: {
							href: EXTERNAL_LINKS.DOCUMENTATION,
							target: "_blank"
						}
					},
					{
						id: "forum",
						icon: "users",
						label: i18n.baseText("mainSidebar.helpMenuItems.forum"),
						link: {
							href: EXTERNAL_LINKS.FORUM,
							target: "_blank"
						}
					},
					{
						id: "examples",
						icon: "graduation-cap",
						label: i18n.baseText("mainSidebar.helpMenuItems.course"),
						link: {
							href: EXTERNAL_LINKS.COURSES,
							target: "_blank"
						}
					},
					{
						id: "report-bug",
						icon: "bug",
						label: i18n.baseText("mainSidebar.helpMenuItems.reportBug"),
						link: {
							href: getReportingURL(),
							target: "_blank"
						}
					},
					{
						id: "about",
						icon: "info",
						label: i18n.baseText("mainSidebar.aboutN8n"),
						position: "bottom"
					}
				]
			},
			{
				id: "settings",
				label: i18n.baseText("mainSidebar.settings"),
				icon: "settings",
				available: true,
				children: settingsItems.value
			}
		]);
		const visibleMenuItems = computed(() => mainMenuItems.value.filter((item) => item.available !== false));
		const checkOverflow = () => {
			const position = scrollAreaRef.value?.getScrollPosition();
			if (position && scrollAreaRef.value?.$el) {
				const element = scrollAreaRef.value.$el;
				const hasVerticalOverflow = position.height > element.clientHeight;
				hasOverflow.value = hasVerticalOverflow;
				hasScrolledFromTop.value = hasVerticalOverflow && position.top > 0;
			}
		};
		watch(isCollapsed, () => {
			nextTick(() => {
				checkOverflow();
			});
		});
		onMounted(() => {
			basePath.value = rootStore.baseUrl;
			if (isAiGatewayEnabled.value) fetchWallet();
			nextTick(() => {
				checkOverflow();
				if (scrollAreaRef.value?.$el) {
					const element = scrollAreaRef.value.$el;
					resizeObserver = new ResizeObserver(() => {
						checkOverflow();
					});
					resizeObserver.observe(element);
					checkOverflow();
				}
			});
			window.addEventListener("resize", checkOverflow);
		});
		onBeforeUnmount(() => {
			if (resizeObserver) {
				resizeObserver.disconnect();
				resizeObserver = null;
			}
			window.removeEventListener("resize", checkOverflow);
		});
		const trackHelpItemClick = (itemType) => {
			telemetry.track("User clicked help resource", {
				type: itemType,
				workflow_id: workflowDocumentStore.value.workflowId
			});
		};
		function openCommandBar(event) {
			event.stopPropagation();
			nextTick(() => {
				const keyboardEvent = new KeyboardEvent("keydown", {
					key: "k",
					code: "KeyK",
					metaKey: true,
					bubbles: true,
					cancelable: true
				});
				document.dispatchEvent(keyboardEvent);
			});
		}
		const handleSelect = (key) => {
			switch (key) {
				case "about":
					trackHelpItemClick("about");
					uiStore.openModal(ABOUT_MODAL_KEY);
					break;
				case "cloud-admin":
					pageRedirectionHelper.goToDashboard();
					break;
				case "settings-n8n-connect":
					handleSettingsItemSelect(key);
					break;
				case "quickstart":
				case "docs":
				case "forum":
				case "examples":
					trackHelpItemClick(key);
					break;
				case "templates":
					trackTemplatesClick(TemplateClickSource.sidebarButton);
					break;
				case "insights":
					telemetry.track("User clicked insights link from side menu");
					break;
				default:
					if (key.startsWith("whats-new-article-")) {
						const articleId = Number(key.replace("whats-new-article-", ""));
						telemetry.track("User clicked on what's new section", { article_id: articleId });
						uiStore.openModalWithData({
							name: WHATS_NEW_MODAL_KEY,
							data: { articleId }
						});
					}
					break;
			}
		};
		const onLogout = () => {
			router.push({ name: VIEWS.SIGNOUT });
		};
		useKeybindings({
			ctrl_alt_o: () => handleSelect("about"),
			["bracketleft"]: () => toggleCollapse()
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nResizeWrapper_default), {
				id: "side-menu",
				class: normalizeClass({
					[_ctx.$style.sideMenu]: true,
					[_ctx.$style.sideMenuCollapsed]: unref(isCollapsed),
					[_ctx.$style.sideMenuResizing]: unref(isResizing)
				}),
				width: unref(sidebarWidth),
				style: normalizeStyle(unref(isCollapsed) ? {} : { width: `${unref(sidebarWidth)}px` }),
				"supported-directions": ["right"],
				"min-width": unref(200),
				"max-width": unref(500),
				"grid-size": 8,
				onResizestart: unref(onResizeStart),
				onResize: unref(onResize),
				onResizeend: unref(onResizeEnd)
			}, {
				default: withCtx(() => [
					createVNode(MainSidebarHeader_default, {
						"is-collapsed": unref(isCollapsed),
						onCollapse: unref(toggleCollapse),
						onOpenCommandBar: openCommandBar
					}, null, 8, ["is-collapsed", "onCollapse"]),
					createBaseVNode("div", { class: normalizeClass({
						[_ctx.$style.scrollAreaWrapper]: true,
						[_ctx.$style.scrollAreaWrapperWithBottomBorder]: hasOverflow.value && !unref(isCollapsed),
						[_ctx.$style.scrollAreaWrapperWithTopBorder]: hasScrolledFromTop.value && !unref(isCollapsed)
					}) }, [createVNode(unref(N8nScrollArea_default), {
						ref_key: "scrollAreaRef",
						ref: scrollAreaRef,
						onScrollCapture: checkOverflow
					}, {
						default: withCtx(() => [createVNode(ProjectNavigation_default, {
							collapsed: unref(isCollapsed),
							"plan-name": unref(cloudPlanStore).currentPlanData?.displayName
						}, null, 8, ["collapsed", "plan-name"])]),
						_: 1
					}, 512)], 2),
					createVNode(BottomMenu_default, {
						items: visibleMenuItems.value,
						"is-collapsed": unref(isCollapsed),
						onLogout,
						onSelect: handleSelect
					}, null, 8, ["items", "is-collapsed"]),
					createVNode(MainSidebarSourceControl_default, { "is-collapsed": unref(isCollapsed) }, null, 8, ["is-collapsed"])
				]),
				_: 1
			}, 8, [
				"class",
				"width",
				"style",
				"min-width",
				"max-width",
				"onResizestart",
				"onResize",
				"onResizeend"
			]);
		};
	}
});
//#endregion
//#region src/app/components/MainSidebar.vue?vue&type=style&index=0&lang.module.scss
var sideMenu = "_sideMenu_52bjb_388";
var sideMenuCollapsed = "_sideMenuCollapsed_52bjb_398";
var sideMenuResizing = "_sideMenuResizing_52bjb_402";
var scrollAreaWrapper = "_scrollAreaWrapper_52bjb_406";
var scrollAreaWrapperWithBottomBorder = "_scrollAreaWrapperWithBottomBorder_52bjb_415";
var scrollAreaWrapperWithTopBorder = "_scrollAreaWrapperWithTopBorder_52bjb_419";
var shimmer = "_shimmer_52bjb_1";
var spin = "_spin_52bjb_1";
var opacityPulse = "_opacityPulse_52bjb_1";
var popoverIn = "_popoverIn_52bjb_1";
var fadeIn = "_fadeIn_52bjb_1";
var collapsibleSlideDown = "_collapsibleSlideDown_52bjb_1";
var collapsibleSlideUp = "_collapsibleSlideUp_52bjb_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_52bjb_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_52bjb_1";
var blurSwapIn = "_blurSwapIn_52bjb_1";
var blurSwapOut = "_blurSwapOut_52bjb_1";
var pulseGlow = "_pulseGlow_52bjb_1";
var pulseGlowDelayed = "_pulseGlowDelayed_52bjb_1";
var fade = "_fade_52bjb_1";
var fadeInUp = "_fadeInUp_52bjb_1";
var fadeInDown = "_fadeInDown_52bjb_1";
var fadeInLeft = "_fadeInLeft_52bjb_1";
var fadeInRight = "_fadeInRight_52bjb_1";
var fadeOut = "_fadeOut_52bjb_1";
var fadeOutDown = "_fadeOutDown_52bjb_1";
var fadeOutUp = "_fadeOutUp_52bjb_1";
var fadeOutLeft = "_fadeOutLeft_52bjb_1";
var fadeOutRight = "_fadeOutRight_52bjb_1";
var ping = "_ping_52bjb_1";
var blinkBackground = "_blinkBackground_52bjb_1";
var typingBlink = "_typingBlink_52bjb_1";
var MainSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sideMenu,
	sideMenuCollapsed,
	sideMenuResizing,
	scrollAreaWrapper,
	scrollAreaWrapperWithBottomBorder,
	scrollAreaWrapperWithTopBorder,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_52bjb_1",
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
var MainSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MainSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/app/AppSidebar.vue
var AppSidebar_default = /* @__PURE__ */ defineComponent({
	__name: "AppSidebar",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MainSidebar_default);
		};
	}
});
//#endregion
export { AppSidebar_default as t };
