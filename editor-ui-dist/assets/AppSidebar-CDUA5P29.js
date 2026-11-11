import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Pd as withModifiers, Rd as computed, Ud as createSlots, Vd as createCommentVNode, _p as normalizeStyle, af as onBeforeMount, bp as toDisplayString, cf as onMounted, df as openBlock, hf as resolveComponent, hp as normalizeClass, if as nextTick, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, ns as useRouter, of as onBeforeUnmount, pf as renderList, ts as useRoute, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { $b as useTelemetry, AO as N8nText_default, Bi as useAgentsN8nChatFlag, Ch as useFavoritesStore, Eb as SIDEBAR_EXPANDED_EXPERIMENT, HO as _plugin_vue_export_helper_default, IE as N8nScrollArea_default, Jb as WHATS_NEW_MODAL_KEY, MO as N8nTooltip_default, Mn as CHAT_VIEW, QS as getResourcePermissions, Qb as useCloudPlanStore, Qf as usePageRedirectionHelper, RO as N8nButton_default, Ro as useInstanceAiStore, Sg as AGENT_BUILDER_VIEW, Sh as useProjectsStore, Th as hasPermission, Uy as LOCAL_STORAGE_SIDEBAR_WIDTH, Vf as DATA_TABLE_DETAILS, Vr as McpDiscoveryEntry_default, Xa as sourceControlEventBus, Xb as VIEWS, _p as TemplateClickSource, _s as useInstanceAiSettingsStore, ac as INSTANCE_AI_THREADS_VIEW, bn as EXTERNAL_LINKS, cc as INSTANCE_AI_VIEW, hp as useInstanceAiAvailable, j as INBOX_VIEW, ma as useKeybindings, mp as useTemplatesStore, nD as N8nResizeWrapper_default, nt as usePromotionsEnabled, nx as useSettingsStore, ny as ABOUT_MODAL_KEY, oc as INSTANCE_AI_THREAD_VIEW, pu as useDocumentVisibility, qO as useI18n, q_ as usePostHog, qb as useVersionsStore, rx as useRootStore, s_ as useUIStore, td as useAiGateway, tm as injectWorkflowDocumentStore, tx as useUsersStore, wD as N8nMenuItem_default, w_ as DEFAULT_PROJECT_ICON, wh as useSourceControlStore, xn as useGlobalEntityCreation, yn as useBugReporting, yp as trackTemplatesClick, zO as N8nIcon_default, zi as useAgentTelemetry } from "./app-MbtXRI_F.js";
import { t as useSettingsItems } from "./useSettingsItems-BCtjLm6K.js";
import { t as useSidebarLayout } from "./useSidebarLayout-DtigbWL6.js";
import { n as BottomMenu_default, t as MainSidebarHeader_default } from "./MainSidebarHeader-BDe2tGQ-.js";
import { t as promotionEventBus } from "./promotions.eventBus-DzItr_kq.js";
import { t as N8nChatHintPopover_default } from "./N8nChatHintPopover-BZOHv7SA.js";
import { n as useAssistantAgentThreadsStore, t as RecentChatIcon_default } from "./RecentChatIcon-CqdwmDYv.js";
import { n as chatItemRoute, o as mergeRecentChats, r as chatItemTitle, s as useAgentN8nChatThreadsStore } from "./mergeRecentChats-DVvIPjIj.js";
import { t as useResourceCenterStore } from "./resourceCenter.store-kJuAQ0xW.js";
//#region src/app/components/MainSidebarSourceControl.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var MainSidebarSourceControl_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "MainSidebarSourceControl",
	props: { isCollapsed: { type: Boolean } },
	setup(__props) {
		const sourceControlStore = useSourceControlStore();
		const projectStore = useProjectsStore();
		const { isEnabled: isPromotionsEnabled } = usePromotionsEnabled();
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
		const sourceControlAvailable = computed(() => sourceControlStore.isEnterpriseSourceControlEnabled && !isPromotionsEnabled.value && (hasPullPermission.value || hasPushPermission.value));
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
}), [["__cssModules", { "$style": {
	sync: "_sync_zvc60_1",
	collapsed: "_collapsed_zvc60_8",
	icon: "_icon_zvc60_12",
	buttonContainer: "_buttonContainer_zvc60_22",
	connected: "_connected_zvc60_28",
	branchName: "_branchName_zvc60_36"
} }]]);
//#endregion
//#region src/features/collaboration/projects/composables/useFavoriteNavItems.ts
init_runtime_core_esm_bundler();
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
//#region src/features/agents/n8nChatPage/useRecentChats.ts
init_runtime_core_esm_bundler();
var asRouteParam = (value) => typeof value === "string" ? value : void 0;
/**
* The sidebar's recent-chats list: Instance AI threads only when the n8n Chat flag is
* off, merged with agent n8n Chat threads when it's on — one place for callers (the
* sidebar) to read instead of branching on the flag themselves. Assistant agent threads
* merge in while the Assistant agent is on.
*/
function useRecentChats() {
	const route = useRoute();
	const isAgentsN8nChatFlag = useAgentsN8nChatFlag();
	const instanceAiStore = useInstanceAiStore();
	const agentThreadsStore = useAgentN8nChatThreadsStore();
	const assistantAgentThreadsStore = useAssistantAgentThreadsStore();
	const instanceAiSettingsStore = useInstanceAiSettingsStore();
	const openThreadId = computed(() => {
		if (route.name === "InstanceAiThread") return asRouteParam(route.params.threadId);
		if (route.name === "AgentN8nChatView") return asRouteParam(route.params.agentThreadId);
	});
	return { recentChats: computed(() => mergeRecentChats(instanceAiStore.threads, isAgentsN8nChatFlag.value ? agentThreadsStore.knownThreads : [], {
		limit: 5,
		openThreadId: openThreadId.value,
		assistantAgentThreads: instanceAiSettingsStore.isAssistantAgentEnabled ? assistantAgentThreadsStore.knownThreads : []
	})) };
}
//#endregion
//#region src/features/collaboration/projects/components/ProjectNavigation.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = ["onClick"];
var _hoisted_2 = ["aria-label", "onClick"];
var _hoisted_3 = ["aria-expanded"];
var PROJECTS_COLLAPSED_KEY = "n8n:sidebar:projects-collapsed";
var INSTANCE_AI_CHATS_COLLAPSED_KEY = "n8n:sidebar:instance-ai-chats-collapsed";
var ProjectNavigation_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ProjectNavigation",
	props: {
		collapsed: { type: Boolean },
		planName: {}
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const route = useRoute();
		const globalEntityCreation = useGlobalEntityCreation();
		const projectsStore = useProjectsStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const favoritesStore = useFavoritesStore();
		const instanceAiStore = useInstanceAiStore();
		const agentThreadsStore = useAgentN8nChatThreadsStore();
		const isAgentsN8nChatFlag = useAgentsN8nChatFlag();
		const assistantAgentThreadsStore = useAssistantAgentThreadsStore();
		const instanceAiSettingsStore = useInstanceAiSettingsStore();
		const agentTelemetry = useAgentTelemetry();
		const { favoriteGroups, activeTabId, onFavoriteProjectClick, onFavoriteWorkflowClick, onUnpinFavorite } = useFavoriteNavItems();
		const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
		const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
		const isChatLinkAvailable = computed(() => settingsStore.isChatFeatureEnabled && hasPermission(["rbac"], { rbac: { scope: "chatHub:message" } }));
		const isInstanceAiNavVisible = useInstanceAiAvailable();
		const hasMultipleVerifiedUsers = computed(() => usersStore.allUsers.filter((user) => !user.isPendingUser).length > 1);
		const FAVORITES_COLLAPSED_KEY = computed(() => `n8n:sidebar:${usersStore.currentUser?.id ?? "anonymous"}:favorites-collapsed`);
		const favoritesCollapsed = ref(localStorage.getItem(FAVORITES_COLLAPSED_KEY.value) === "true");
		const projectsCollapsed = ref(localStorage.getItem(PROJECTS_COLLAPSED_KEY) === "true");
		const instanceAiChatsCollapsed = ref(localStorage.getItem(INSTANCE_AI_CHATS_COLLAPSED_KEY) === "true");
		watch(isInstanceAiNavVisible, (visible) => {
			if (visible) instanceAiStore.loadThreads();
		}, { immediate: true });
		watch([isInstanceAiNavVisible, isAgentsN8nChatFlag], ([visible, flagOn]) => {
			if (visible && flagOn) agentThreadsStore.fetchRecent(10);
		}, { immediate: true });
		watch([isInstanceAiNavVisible, () => instanceAiSettingsStore.isAssistantAgentEnabled], ([visible, enabled]) => {
			if (visible && enabled) assistantAgentThreadsStore.fetchRecent();
		}, { immediate: true });
		const { onDocumentVisible } = useDocumentVisibility();
		onDocumentVisible(() => {
			if (!isInstanceAiNavVisible.value) return;
			instanceAiStore.loadThreads();
			if (isAgentsN8nChatFlag.value) agentThreadsStore.fetchRecent(10);
			if (instanceAiSettingsStore.isAssistantAgentEnabled) assistantAgentThreadsStore.fetchRecent();
		});
		watch(favoritesCollapsed, (val) => localStorage.setItem(FAVORITES_COLLAPSED_KEY.value, String(val)));
		watch(projectsCollapsed, (val) => localStorage.setItem(PROJECTS_COLLAPSED_KEY, String(val)));
		watch(instanceAiChatsCollapsed, (val) => localStorage.setItem(INSTANCE_AI_CHATS_COLLAPSED_KEY, String(val)));
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
			icon: isAgentsN8nChatFlag.value ? "message-square-plus" : "n8n-assistant",
			label: isAgentsN8nChatFlag.value ? locale.baseText("instanceAi.thread.new") : locale.baseText("projects.menu.instanceAi"),
			route: { to: { name: INSTANCE_AI_VIEW } }
		}));
		function onNewChatClick() {
			agentTelemetry.trackClickedSidebarItem({ item: "new_chat" });
		}
		const isInstanceAiThreadView = computed(() => route.name === INSTANCE_AI_THREAD_VIEW);
		const isAgentN8nChatThreadView = computed(() => route.name === "AgentN8nChatView" && typeof route.params.agentThreadId === "string");
		const { recentChats } = useRecentChats();
		const sidebarActiveTabId = computed(() => isInstanceAiThreadView.value ? void 0 : activeTabId.value);
		const CHAT_MENU_ITEM_ID_PREFIX = {
			assistant: "instance-ai-thread-",
			"assistant-agent": "assistant-agent-thread-",
			agent: "agent-n8n-chat-thread-"
		};
		const getChatMenuItem = (item) => ({
			id: `${CHAT_MENU_ITEM_ID_PREFIX[item.kind]}${item.thread.id}`,
			icon: "message-circle",
			label: chatItemTitle(item, locale),
			route: { to: chatItemRoute(item) }
		});
		function onChatItemClick(item) {
			agentTelemetry.trackClickedSidebarItem({
				item: "chat",
				chatType: item.kind === "agent" ? "agent" : "assistant"
			});
		}
		const isInboxVisible = computed(() => settingsStore.settings.inbox?.enabled === true);
		const inbox = computed(() => ({
			id: "inbox",
			icon: "inbox",
			label: locale.baseText("inbox.title"),
			route: { to: { name: INBOX_VIEW } }
		}));
		const chat = computed(() => ({
			id: "chat",
			icon: "message-circle",
			label: locale.baseText("projects.menu.chat"),
			position: "bottom",
			route: { to: { name: CHAT_VIEW } }
		}));
		/** A pull or an applied package can create and delete projects behind the sidebar. */
		async function reloadMyProjects() {
			await projectsStore.getMyProjects();
		}
		onBeforeMount(async () => {
			await usersStore.fetchUsers({
				filter: { isPending: false },
				take: 2
			});
			sourceControlEventBus.on("pull", reloadMyProjects);
			promotionEventBus.on("applied", reloadMyProjects);
			promotionEventBus.on("projectRemoved", reloadMyProjects);
		});
		onBeforeUnmount(() => {
			sourceControlEventBus.off("pull", reloadMyProjects);
			promotionEventBus.off("applied", reloadMyProjects);
			promotionEventBus.off("projectRemoved", reloadMyProjects);
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.projects) }, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.home, props.collapsed ? _ctx.$style.collapsed : ""]) }, [
					unref(isInstanceAiNavVisible) ? (openBlock(), createBlock(N8nChatHintPopover_default, {
						key: 0,
						hint: "new_chat_sidebar",
						active: unref(isAgentsN8nChatFlag),
						title: unref(locale).baseText("agents.n8nChatHint.newChatSidebar.title"),
						body: unref(locale).baseText("agents.n8nChatHint.newChatSidebar.body"),
						side: "right"
					}, {
						default: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
							item: instanceAi.value,
							compact: props.collapsed,
							active: unref(activeTabId) === "instance-ai" && !isInstanceAiThreadView.value && !isAgentN8nChatThreadView.value,
							class: normalizeClass({ [_ctx.$style.instanceAiParentInactive]: isInstanceAiThreadView.value || isAgentN8nChatThreadView.value }),
							"data-test-id": "project-instance-ai-menu-item",
							onClick: onNewChatClick
						}, null, 8, [
							"item",
							"compact",
							"active",
							"class"
						])]),
						_: 1
					}, 8, [
						"active",
						"title",
						"body"
					])) : createCommentVNode("", true),
					createVNode(unref(N8nMenuItem_default), {
						item: home.value,
						compact: props.collapsed,
						active: sidebarActiveTabId.value === "home",
						"data-test-id": "project-home-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					]),
					unref(projectsStore).personalProject?.id && (unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 1,
						item: personalProject.value,
						compact: props.collapsed,
						active: sidebarActiveTabId.value === personalProject.value.id,
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
						active: sidebarActiveTabId.value === "shared",
						"data-test-id": "project-shared-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					isInboxVisible.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 3,
						item: inbox.value,
						compact: props.collapsed,
						active: sidebarActiveTabId.value === "inbox",
						"data-test-id": "project-inbox-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					isChatLinkAvailable.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 4,
						item: chat.value,
						compact: props.collapsed,
						active: sidebarActiveTabId.value === "chat",
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
					size: "xsmall",
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
							active: sidebarActiveTabId.value === entry.menuItem.id
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
				unref(isInstanceAiNavVisible) && !props.collapsed && unref(recentChats).length > 0 ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.instanceAiSidebar),
					"data-test-id": "instance-ai-sidebar-chats"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.instanceAiChatsHeader) }, [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.instanceAiChatsToggle),
					"aria-expanded": !instanceAiChatsCollapsed.value,
					onClick: _cache[1] || (_cache[1] = ($event) => instanceAiChatsCollapsed.value = !instanceAiChatsCollapsed.value)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("instanceAi.threads.chats")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: 12,
					class: normalizeClass([_ctx.$style.chevron, instanceAiChatsCollapsed.value ? _ctx.$style.chevronCollapsed : ""])
				}, null, 8, ["class"])], 10, _hoisted_3), createVNode(_component_RouterLink, {
					to: { name: unref(INSTANCE_AI_THREADS_VIEW) },
					class: normalizeClass(_ctx.$style.instanceAiChatsViewAll)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("instanceAi.threads.viewAll")), 1)]),
					_: 1
				}, 8, ["to", "class"])], 2), !instanceAiChatsCollapsed.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.instanceAiChatItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(recentChats), (item) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: item.thread.id,
						item: getChatMenuItem(item),
						"scroll-label-on-overflow": "",
						onClick: ($event) => onChatItemClick(item)
					}, createSlots({ _: 2 }, [unref(isAgentsN8nChatFlag) ? {
						name: "icon",
						fn: withCtx(() => [createVNode(RecentChatIcon_default, { item }, null, 8, ["item"])]),
						key: "0"
					} : void 0]), 1032, ["item", "onClick"]);
				}), 128))], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				unref(projectsStore).isTeamProjectFeatureEnabled && displayProjects.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [!props.collapsed ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(_ctx.$style.sectionHeader),
					onClick: _cache[2] || (_cache[2] = ($event) => projectsCollapsed.value = !projectsCollapsed.value)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.menu.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: "small",
					class: normalizeClass([_ctx.$style.chevron, projectsCollapsed.value ? _ctx.$style.chevronCollapsed : ""])
				}, null, 8, ["class"])], 2)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
				(unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) && (!unref(projectsStore).isTeamProjectFeatureEnabled || !projectsCollapsed.value || props.collapsed) ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.projectItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayProjects.value, (project) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: project.id,
						class: normalizeClass({ [_ctx.$style.collapsed]: props.collapsed }),
						item: getProjectMenuItem(project),
						compact: props.collapsed,
						active: sidebarActiveTabId.value === project.id,
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
}), [["__cssModules", { "$style": {
	projects: "_projects_1gsv8_3",
	plusBtn: "_plusBtn_1gsv8_8",
	projectItems: "_projectItems_1gsv8_12",
	instanceAiSidebar: "_instanceAiSidebar_1gsv8_16",
	instanceAiParentInactive: "_instanceAiParentInactive_1gsv8_23",
	instanceAiChatsHeader: "_instanceAiChatsHeader_1gsv8_31",
	chevron: "_chevron_1gsv8_44",
	instanceAiChatsToggle: "_instanceAiChatsToggle_1gsv8_48",
	instanceAiChatsViewAll: "_instanceAiChatsViewAll_1gsv8_65",
	upgradeLink: "_upgradeLink_1gsv8_90",
	sectionHeader: "_sectionHeader_1gsv8_95",
	chevronCollapsed: "_chevronCollapsed_1gsv8_126",
	projectsLabel: "_projectsLabel_1gsv8_130",
	collapsed: "_collapsed_1gsv8_140",
	addFirstProjectBtn: "_addFirstProjectBtn_1gsv8_153",
	home: "_home_1gsv8_162",
	groupSpacer: "_groupSpacer_1gsv8_170",
	favoriteItem: "_favoriteItem_1gsv8_174",
	unpinButton: "_unpinButton_1gsv8_177"
} }]]);
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
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var MainSidebar_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
		const { settingsItems, settingsSections, handleSettingsItemSelect } = useSettingsItems();
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
				label: i18n.baseText("mainSidebar.cloudConsole"),
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
				icon: "grid-2x2",
				label: i18n.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && templatesStore.hasCustomTemplatesHost && !isResourceCenterEnabled.value,
				route: { to: { name: VIEWS.TEMPLATES } }
			},
			{
				id: "templates",
				icon: "grid-2x2",
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
						icon: "book-open",
						label: i18n.baseText("mainSidebar.helpMenuItems.documentation"),
						link: {
							href: EXTERNAL_LINKS.DOCUMENTATION,
							target: "_blank"
						}
					},
					{
						id: "forum",
						icon: "book",
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
						id: "contact-support",
						icon: "life-buoy",
						label: i18n.baseText("mainSidebar.helpMenuItems.contactSupport"),
						available: settingsStore.isCloudDeployment,
						link: {
							href: EXTERNAL_LINKS.SUPPORT,
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
				icon: "wrench",
				available: true,
				children: settingsItems.value
			}
		]);
		const visibleMenuItems = computed(() => mainMenuItems.value.filter((item) => item.available !== false).map((item) => ({
			...item,
			children: item.children?.filter((child) => child.available !== false)
		})));
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
				case "contact-support":
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
				default: if (key.startsWith("whats-new-article-")) {
					const articleId = Number(key.replace("whats-new-article-", ""));
					telemetry.track("User clicked on what's new section", { article_id: articleId });
					uiStore.openModalWithData({
						name: WHATS_NEW_MODAL_KEY,
						data: { articleId }
					});
				}
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
					createVNode(McpDiscoveryEntry_default, {
						placement: "sidebar",
						collapsed: unref(isCollapsed)
					}, null, 8, ["collapsed"]),
					createVNode(BottomMenu_default, {
						items: visibleMenuItems.value,
						"settings-sections": unref(settingsSections),
						"is-collapsed": unref(isCollapsed),
						onLogout,
						onSelect: handleSelect
					}, null, 8, [
						"items",
						"settings-sections",
						"is-collapsed"
					]),
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
}), [["__cssModules", { "$style": {
	sideMenu: "_sideMenu_7ioga_1",
	sideMenuCollapsed: "_sideMenuCollapsed_7ioga_11",
	sideMenuResizing: "_sideMenuResizing_7ioga_15",
	scrollAreaWrapper: "_scrollAreaWrapper_7ioga_19",
	scrollAreaWrapperWithBottomBorder: "_scrollAreaWrapperWithBottomBorder_7ioga_28",
	scrollAreaWrapperWithTopBorder: "_scrollAreaWrapperWithTopBorder_7ioga_32"
} }]]);
//#endregion
//#region src/app/components/app/AppSidebar.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
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
