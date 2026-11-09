import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Cf as watch, Gd as createVNode, Hd as createSlots, Ju as useResizeObserver, Kf as unref, Ld as computed, Nd as withModifiers, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Qo as RouterLink, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, af as onBeforeUnmount, as as useRoute, ep as init_shared_esm_bundler, ff as renderList, nf as mergeProps, os as useRouter, pf as renderSlot, pp as normalizeClass, qd as defineComponent, sf as onMounted, uf as openBlock, vp as toDisplayString, xf as useTemplateRef, zd as createBlock, zu as useElementSize } from "./vendor-BA8kaY8M.js";
import { Ai as useAgentPermissions, Cm as useProjectsStore, D as PROMOTION_PREVIEW_VIEWS, ED as N8nText_default, Ei as useCreateAgent, Ey as EnterpriseEditionFeature, GT as N8nTabs_default, Jy as useUsersStore, Ky as useTelemetry, ND as N8nIconButton_default, OD as N8nTooltip_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, Su as ProjectIcon_default, Tm as useSourceControlStore, UD as useI18n, Uy as VIEWS, WE as N8nHeading_default, Xy as useRootStore, Yy as useSettingsStore, ag as useUIStore, dt as usePromotionsEnabled, eo as useFoldersStore, hT as isIconOrEmoji, if as PROJECT_DATA_TABLES, mD as N8nActionToggle_default, sb as ProjectTypes, wm as useFavoritesStore, xD as N8nBadge_default, yg as VARIABLE_MODAL_KEY, zx as getResourcePermissions } from "./app-DbOOaPK6.js";
import { t as promotionEventBus } from "./promotions.eventBus-wTuPGz2a.js";
import { i as useProjectPages, t as useReadyToRunStore } from "./readyToRun.store-B6z1a2lc.js";
import { t as useLatestFetch } from "./useLatestFetch-qxqEmkzg.js";
import { n as useInstancePromotionConnection } from "./useInstancePromotionConnection-D03GmHF-.js";
import { f as totalChangeCount, r as buildSelectionGraph, y as getPromotionPreview } from "./promotionPreview.selection-CX530Q46.js";
//#region src/app/utils/modules/tabUtils.ts
/**
* Process dynamic route configuration for tabs
* Resolves dynamic routes with project IDs and other parameters
*/
function processDynamicTab(tab, projectId) {
	if (!tab.dynamicRoute) return tab;
	const tabRoute = { name: tab.dynamicRoute.name };
	if (tab.dynamicRoute.includeProjectId && projectId) tabRoute.params = { projectId };
	const { dynamicRoute, ...tabWithoutDynamic } = tab;
	return {
		...tabWithoutDynamic,
		to: tabRoute
	};
}
/**
* Process an array of tabs with dynamic route resolution
*/
function processDynamicTabs(tabs, projectId) {
	return tabs.map((tab) => processDynamicTab(tab, projectId));
}
//#endregion
//#region src/features/collaboration/projects/components/ProjectTabs.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/collaboration/projects/components/ProjectTabs.vue
var ProjectTabs_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectTabs",
	props: {
		showSettings: {
			type: Boolean,
			default: false
		},
		showExecutions: {
			type: Boolean,
			default: true
		},
		pageType: { default: "project" },
		additionalTabs: { default: () => [] }
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const route = useRoute();
		const projectStore = useProjectsStore();
		const telemetry = useTelemetry();
		const selectedTab = ref("");
		const selectedTabLabel = computed(() => selectedTab.value ? String(selectedTab.value) : "");
		const projectId = computed(() => {
			return Array.isArray(route?.params?.projectId) ? route.params.projectId[0] : route?.params?.projectId;
		});
		const isPublicProject = computed(() => projectStore.currentProject?.type === ProjectTypes.Public);
		const getRouteConfigs = () => {
			if (projectId.value) return {
				workflows: {
					name: VIEWS.PROJECTS_WORKFLOWS,
					params: { projectId: projectId.value }
				},
				credentials: {
					name: VIEWS.PROJECTS_CREDENTIALS,
					params: { projectId: projectId.value }
				},
				executions: {
					name: VIEWS.PROJECTS_EXECUTIONS,
					params: { projectId: projectId.value }
				},
				variables: {
					name: VIEWS.PROJECTS_VARIABLES,
					params: { projectId: projectId.value }
				}
			};
			if (props.pageType === "shared") return {
				workflows: { name: VIEWS.SHARED_WORKFLOWS },
				credentials: { name: VIEWS.SHARED_CREDENTIALS },
				executions: { name: VIEWS.NOT_FOUND },
				variables: { name: VIEWS.NOT_FOUND }
			};
			return {
				workflows: { name: VIEWS.WORKFLOWS },
				credentials: { name: VIEWS.CREDENTIALS },
				executions: { name: VIEWS.EXECUTIONS },
				variables: { name: VIEWS.HOME_VARIABLES }
			};
		};
		const createTab = (label, routeKey, routes) => {
			return {
				label: locale.baseText(label),
				value: routes[routeKey].name,
				to: routes[routeKey]
			};
		};
		const options = computed(() => {
			const routes = getRouteConfigs();
			const tabs = [createTab("mainSidebar.workflows", "workflows", routes), createTab("mainSidebar.credentials", "credentials", routes)];
			if (props.showExecutions) tabs.push(createTab("mainSidebar.executions", "executions", routes));
			if (props.pageType === "overview" || props.pageType === "project" && !isPublicProject.value) tabs.push(createTab("mainSidebar.variables", "variables", routes));
			if (props.additionalTabs?.length) {
				const processedAdditionalTabs = processDynamicTabs(props.additionalTabs, projectId.value);
				for (const processed of processedAdditionalTabs) {
					const { insertAfter, ...tab } = processed;
					const anchorIndex = insertAfter ? tabs.findIndex((t) => t.value === insertAfter) : -1;
					if (anchorIndex !== -1) tabs.splice(anchorIndex + 1, 0, tab);
					else tabs.push(tab);
				}
			}
			if (props.showSettings) tabs.push({
				label: locale.baseText("projects.settings"),
				value: VIEWS.PROJECT_SETTINGS,
				to: {
					name: VIEWS.PROJECT_SETTINGS,
					params: { projectId: projectId.value }
				}
			});
			return tabs;
		});
		watch(() => route?.name, () => {
			selectedTab.value = route.name === VIEWS.PROJECTS_FOLDERS ? VIEWS.PROJECTS_WORKFLOWS : route.name;
		}, { immediate: true });
		function onSelectTab(value) {
			if (selectedTab.value === "variables") telemetry.track("User clicked project variables tab", { project_id: projectId.value });
			selectedTab.value = value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTabs_default), {
				"model-value": selectedTabLabel.value,
				options: options.value,
				"data-test-id": "project-tabs",
				"onUpdate:modelValue": onSelectTab
			}, null, 8, ["model-value", "options"]);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectCreateResource.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ProjectCreateResource_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ProjectCreateResource",
	props: {
		actions: {},
		disabled: { type: Boolean },
		variant: {}
	},
	emits: ["action"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const actionToggleRef = useTemplateRef("actionToggleRef");
		__expose({ openActionToggle: (isOpen) => actionToggleRef.value?.openActionToggle(isOpen) });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.buttonGroup]) }, [renderSlot(_ctx.$slots, "default"), createVNode(unref(N8nActionToggle_default), {
				ref_key: "actionToggleRef",
				ref: actionToggleRef,
				"data-test-id": "add-resource",
				actions: __props.actions,
				placement: "bottom-end",
				teleported: false,
				onAction: _cache[0] || (_cache[0] = ($event) => emit("action", $event))
			}, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					disabled: __props.disabled,
					class: normalizeClass([_ctx.$style.buttonGroupDropdown]),
					icon: "chevron-down",
					variant: __props.variant ?? "solid"
				}, null, 8, [
					"disabled",
					"class",
					"variant"
				])]),
				_: 1
			}, 8, ["actions"])], 2);
		};
	}
}), [["__cssModules", { "$style": {
	buttonGroup: "_buttonGroup_1d8c0_1",
	buttonGroupDropdown: "_buttonGroupDropdown_1d8c0_14"
} }]]);
//#endregion
//#region src/app/utils/formatters/textFormatter.ts
/**
* Truncate text to fit within a specified width, adding an ellipsis if necessary.
* @param text The text to truncate.
* @param availableWidth The available width for the text in pixels.
* @param fontSizeInPixels The font size of the text in pixels.
* @returns The truncated text with ellipsis, or an empty string if the text fits within the available width.
*/
var truncateTextToFitWidth = (text, availableWidth, fontSizeInPixels) => {
	if (!text || availableWidth <= 0) return "";
	const averageCharWidth = .55 * fontSizeInPixels;
	const maxLengthToDisplay = Math.floor(availableWidth / averageCharWidth);
	if (text.length <= maxLengthToDisplay) return "";
	const truncated = text.slice(0, maxLengthToDisplay);
	const lastSpaceIndex = truncated.lastIndexOf(" ");
	return truncated.slice(0, lastSpaceIndex === -1 ? maxLengthToDisplay : lastSpaceIndex) + "...";
};
//#endregion
//#region src/features/workflows/readyToRun/components/ReadyToRunButton.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
//#endregion
//#region src/features/workflows/readyToRun/components/ReadyToRunButton.vue
var ReadyToRunButton_default = /* @__PURE__ */ defineComponent({
	__name: "ReadyToRunButton",
	props: { hasActiveCallouts: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const route = useRoute();
		const i18n = useI18n();
		const projectPages = useProjectPages();
		const projectsStore = useProjectsStore();
		const sourceControlStore = useSourceControlStore();
		const foldersStore = useFoldersStore();
		const readyToRunStore = useReadyToRunStore();
		const projectPermissions = computed(() => {
			return getResourcePermissions(projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes);
		});
		const showButton = computed(() => {
			return readyToRunStore.getButtonVisibility(foldersStore.totalWorkflowCount > 0, projectPermissions.value.workflow.create, sourceControlStore.preferences.branchReadOnly) && !props.hasActiveCallouts;
		});
		const handleClick = async () => {
			const projectId = projectPages.isOverviewSubPage ? projectsStore.personalProject?.id : route.params.projectId;
			try {
				await readyToRunStore.claimCreditsAndOpenWorkflow("button", route.params.folderId, projectId);
			} catch {}
		};
		return (_ctx, _cache) => {
			return showButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "outline",
				"data-test-id": "ready-to-run-button",
				icon: "zap",
				loading: unref(readyToRunStore).claimingCredits,
				disabled: unref(sourceControlStore).preferences.branchReadOnly || unref(readyToRunStore).claimingCredits,
				onClick: handleClick
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.readyToRun")), 1)]),
				_: 1
			}, 8, ["loading", "disabled"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionChangeCount.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
/** How many changes the preview lists for a project in one direction, while `enabled` holds. */
function usePromotionChangeCount(projectId, direction, enabled) {
	const rootStore = useRootStore();
	const { next } = useLatestFetch();
	/** All changed resources that the preview page can include. */
	const changeCount = ref(0);
	/** True when the last check failed, so the badge can show the failure. */
	const failed = ref(false);
	/** Set when an open review already holds the changes. The preview then lists none. */
	const blocker = ref(null);
	async function fetchCount() {
		const isLatest = next();
		const requestedProjectId = projectId.value;
		changeCount.value = 0;
		failed.value = false;
		blocker.value = null;
		if (!enabled.value || !requestedProjectId) return;
		try {
			const preview = await getPromotionPreview(rootStore.restApiContext, requestedProjectId, direction);
			if (!isLatest()) return;
			changeCount.value = totalChangeCount(buildSelectionGraph(preview, direction));
			blocker.value = preview.blocker ?? null;
		} catch {
			if (isLatest()) failed.value = true;
		}
	}
	watch([projectId, enabled], fetchCount, { immediate: true });
	return {
		changeCount,
		failed,
		blocker,
		refetch: fetchCount
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionPreviewBadges.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = ["aria-label", "data-test-id"];
var PromotionPreviewBadges_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionPreviewBadges",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const usersStore = useUsersStore();
		const projectsStore = useProjectsStore();
		const { isEnabled: isPromotionsEnabled } = usePromotionsEnabled();
		const currentProjectId = computed(() => projectsStore.currentProject?.id);
		const isTeamProject = computed(() => projectsStore.currentProject?.type === ProjectTypes.Team);
		const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes).project);
		const gitConnectionPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).gitConnection);
		const { hasPromoteConfig, hasApplyConfig, load: loadConnection } = useInstancePromotionConnection();
		const canPreviewChanges = computed(() => isTeamProject.value && isPromotionsEnabled.value && !!projectPermissions.value.export && !!gitConnectionPermissions.value.list && !!gitConnectionPermissions.value.read && (!!gitConnectionPermissions.value.push || !!gitConnectionPermissions.value.pull));
		const showPromote = computed(() => canPreviewChanges.value && hasPromoteConfig.value && !!gitConnectionPermissions.value.push);
		const showApply = computed(() => canPreviewChanges.value && hasApplyConfig.value && !!gitConnectionPermissions.value.pull);
		watch([canPreviewChanges, currentProjectId], async ([canPreview]) => {
			if (canPreview) await loadConnection();
		}, { immediate: true });
		const promote = usePromotionChangeCount(currentProjectId, "promote", showPromote);
		const apply = usePromotionChangeCount(currentProjectId, "apply", showApply);
		async function onPromotionApplied({ projectId, project }) {
			if (project && projectsStore.currentProjectId === projectId) projectsStore.setCurrentProject(project);
			await Promise.all([promote.refetch(), apply.refetch()]);
		}
		async function onPromoted({ projectId }) {
			if (projectsStore.currentProjectId !== projectId) return;
			await promote.refetch();
		}
		async function onProjectRemoved({ projectId }) {
			if (projectsStore.currentProjectId !== projectId) return;
			await router.replace({ name: VIEWS.HOMEPAGE });
		}
		onMounted(() => {
			promotionEventBus.on("applied", onPromotionApplied);
			promotionEventBus.on("promoted", onPromoted);
			promotionEventBus.on("projectRemoved", onProjectRemoved);
		});
		onBeforeUnmount(() => {
			promotionEventBus.off("applied", onPromotionApplied);
			promotionEventBus.off("promoted", onPromoted);
			promotionEventBus.off("projectRemoved", onProjectRemoved);
		});
		const ICONS = {
			apply: "arrow-down",
			promote: "arrow-up"
		};
		const badges = computed(() => {
			const projectId = currentProjectId.value;
			if (!projectId) return [];
			return [{
				direction: "apply",
				show: showApply.value,
				changes: apply
			}, {
				direction: "promote",
				show: showPromote.value,
				changes: promote
			}].filter(({ show, changes }) => show && (changes.failed.value || changes.changeCount.value > 0 || !!changes.blocker.value)).map(({ direction, changes }) => ({
				direction,
				failed: changes.failed.value,
				blocked: !!changes.blocker.value,
				changeCount: changes.changeCount.value,
				label: changes.failed.value ? i18n.baseText(`promotions.preview.badge.failed.${direction}`) : changes.blocker.value ? i18n.baseText("promotions.preview.badge.blocked.promote") : i18n.baseText(`promotions.preview.badge.${direction}`, {
					adjustToNumber: changes.changeCount.value,
					interpolate: { count: String(changes.changeCount.value) }
				}),
				to: {
					name: PROMOTION_PREVIEW_VIEWS[direction],
					params: { projectId }
				}
			}));
		});
		return (_ctx, _cache) => {
			return badges.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.badges),
				"data-test-id": "promotion-preview-badges"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(badges.value, (badge) => {
				return openBlock(), createBlock(unref(N8nTooltip_default), {
					key: badge.direction,
					content: badge.label,
					"as-child": ""
				}, {
					default: withCtx(() => [badge.blocked ? (openBlock(), createElementBlock("span", {
						key: 0,
						role: "button",
						tabindex: "0",
						"aria-disabled": "true",
						"aria-label": badge.label,
						class: normalizeClass([_ctx.$style.link, _ctx.$style.disabled]),
						"data-test-id": `promotion-preview-badge-${badge.direction}`
					}, [createVNode(unref(N8nBadge_default), {
						class: normalizeClass(_ctx.$style.inert),
						variant: "subtle",
						size: "small",
						"leading-icon": ICONS[badge.direction],
						clickable: "",
						disabled: "",
						"aria-hidden": "true"
					}, null, 8, ["class", "leading-icon"])], 10, _hoisted_1$1)) : (openBlock(), createBlock(unref(RouterLink), {
						key: 1,
						to: badge.to,
						"aria-label": badge.label,
						class: normalizeClass(_ctx.$style.link),
						"data-test-id": `promotion-preview-badge-${badge.direction}`
					}, {
						default: withCtx(() => [createVNode(unref(N8nBadge_default), {
							variant: badge.failed ? "warning" : "subtle",
							size: "small",
							"leading-icon": badge.failed ? "circle-alert" : ICONS[badge.direction]
						}, createSlots({ _: 2 }, [!badge.failed ? {
							name: "default",
							fn: withCtx(() => [createTextVNode(toDisplayString(badge.changeCount), 1)]),
							key: "0"
						} : void 0]), 1032, ["variant", "leading-icon"])]),
						_: 2
					}, 1032, [
						"to",
						"aria-label",
						"class",
						"data-test-id"
					]))]),
					_: 2
				}, 1032, ["content"]);
			}), 128))], 2)) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": {
	badges: "_badges_1lsl4_1",
	link: "_link_1lsl4_7",
	disabled: "_disabled_1lsl4_17",
	inert: "_inert_1lsl4_22"
} }]]);
//#endregion
//#region src/features/collaboration/projects/components/ProjectHeader.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { style: {
	"display": "flex",
	"gap": "var(--spacing--xs)",
	"align-items": "center"
} };
var ProjectHeader_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ProjectHeader",
	props: {
		hasActiveCallouts: { type: Boolean },
		mainButton: {}
	},
	emits: ["createFolder"],
	setup(__props, { emit: __emit }) {
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const projectsStore = useProjectsStore();
		const sourceControlStore = useSourceControlStore();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const { createAgent } = useCreateAgent();
		const usersStore = useUsersStore();
		const favoritesStore = useFavoritesStore();
		const currentProjectId = computed(() => projectsStore.currentProject?.id);
		const isTeamProject = computed(() => projectsStore.currentProject?.type === ProjectTypes.Team);
		const isProjectFavorited = computed(() => currentProjectId.value ? favoritesStore.isFavorite(currentProjectId.value, "project") : false);
		async function onToggleProjectFavorite() {
			if (!currentProjectId.value) return;
			await favoritesStore.toggleFavorite(currentProjectId.value, "project");
		}
		const projectPages = useProjectPages();
		const props = __props;
		const emit = __emit;
		const headerIcon = computed(() => {
			if (projectsStore.currentProject?.type === ProjectTypes.Personal) return {
				type: "icon",
				value: "user"
			};
			else if (projectsStore.currentProject?.name) return isIconOrEmoji(projectsStore.currentProject.icon) ? projectsStore.currentProject.icon : {
				type: "icon",
				value: "layers"
			};
			else return {
				type: "icon",
				value: "house"
			};
		});
		const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
		const { canCreate: canCreateAgent } = useAgentPermissions(() => homeProject.value?.id);
		const isPersonalProject = computed(() => {
			return homeProject.value?.type === ProjectTypes.Personal;
		});
		const projectName = computed(() => {
			if (!projectsStore.currentProject) {
				if (projectPages.isSharedSubPage) return i18n.baseText("projects.header.shared.title");
				else if (projectPages.isOverviewSubPage) return i18n.baseText("projects.menu.overview");
				else if (isPersonalProject.value) return i18n.baseText("projects.menu.personal");
				return null;
			} else if (projectsStore.currentProject.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
			else return projectsStore.currentProject.name;
		});
		const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes).project);
		const projectVariablePermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes).projectVariable);
		const globalVariablesPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).variable);
		const externalSecretsProviderPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes).externalSecretsProvider);
		const showSettings = computed(() => !!route?.params?.projectId && (!!projectPermissions.value.update || !!projectPermissions.value.manageMembers || !!externalSecretsProviderPermissions.value.read) && projectsStore.currentProject?.type === ProjectTypes.Team);
		const showFolders = computed(() => {
			return settingsStore.isFoldersFeatureEnabled && [VIEWS.PROJECTS_WORKFLOWS, VIEWS.PROJECTS_FOLDERS].includes(route.name);
		});
		const pageType = computed(() => {
			if (projectPages.isSharedSubPage) return "shared";
			else if (projectPages.isOverviewSubPage) return "overview";
			else return "project";
		});
		const customProjectTabs = computed(() => {
			const moduleTabs = uiStore.moduleTabs[pageType.value];
			return Object.keys(moduleTabs).filter((module) => settingsStore.isModuleActive(module) && (module !== "agents" || settingsStore.isAgentsEnabled)).flatMap((module) => moduleTabs[module]);
		});
		const ACTION_TYPES = {
			WORKFLOW: "workflow",
			CREDENTIAL: "credential",
			FOLDER: "folder",
			DATA_TABLE: "dataTable",
			VARIABLE: "variable",
			AGENT: "agent"
		};
		const createWorkflowButton = computed(() => ({
			value: ACTION_TYPES.WORKFLOW,
			label: i18n.baseText("projects.header.create.workflow"),
			icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
			size: "mini",
			disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).workflow.create
		}));
		const createCredentialButton = computed(() => ({
			value: ACTION_TYPES.CREDENTIAL,
			label: i18n.baseText("projects.header.create.credential"),
			icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
			size: "mini",
			disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).credential.create
		}));
		const createDataTableButton = computed(() => ({
			value: ACTION_TYPES.DATA_TABLE,
			label: i18n.baseText("dataTable.add.button.label"),
			icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
			size: "mini",
			disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes)?.dataTable?.create
		}));
		const createVariableButton = computed(() => ({
			value: ACTION_TYPES.VARIABLE,
			label: i18n.baseText("variables.add.button.label"),
			icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
			size: "mini",
			disabled: sourceControlStore.preferences.branchReadOnly || !settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables] || !projectVariablePermissions.value.create && !globalVariablesPermissions.value.create
		}));
		const createAgentButton = computed(() => ({
			value: ACTION_TYPES.AGENT,
			label: i18n.baseText("projects.header.create.agent"),
			size: "mini",
			disabled: !canCreateAgent.value
		}));
		const selectedMainButtonType = computed(() => {
			if (props.mainButton === ACTION_TYPES.AGENT && !settingsStore.isAgentsEnabled) return ACTION_TYPES.WORKFLOW;
			return props.mainButton ?? ACTION_TYPES.WORKFLOW;
		});
		const mainButtonConfig = computed(() => {
			switch (selectedMainButtonType.value) {
				case ACTION_TYPES.CREDENTIAL: return createCredentialButton.value;
				case ACTION_TYPES.DATA_TABLE: return createDataTableButton.value;
				case ACTION_TYPES.VARIABLE: return createVariableButton.value;
				case ACTION_TYPES.AGENT: return createAgentButton.value;
				case ACTION_TYPES.WORKFLOW:
				default: return createWorkflowButton.value;
			}
		});
		const menu = computed(() => {
			const items = [];
			if (selectedMainButtonType.value !== ACTION_TYPES.WORKFLOW) items.push({
				value: ACTION_TYPES.WORKFLOW,
				label: i18n.baseText("projects.header.create.workflow"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).workflow.create
			});
			if (selectedMainButtonType.value !== ACTION_TYPES.CREDENTIAL) items.push({
				value: ACTION_TYPES.CREDENTIAL,
				label: i18n.baseText("projects.header.create.credential"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).credential.create
			});
			if (selectedMainButtonType.value !== ACTION_TYPES.VARIABLE && settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) items.push({
				value: ACTION_TYPES.VARIABLE,
				label: i18n.baseText("variables.add.button.label"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).projectVariable.create
			});
			if (showFolders.value) items.push({
				value: ACTION_TYPES.FOLDER,
				label: i18n.baseText("projects.header.create.folder"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).folder.create
			});
			if (settingsStore.isDataTableFeatureEnabled && selectedMainButtonType.value !== ACTION_TYPES.DATA_TABLE) items.push({
				value: ACTION_TYPES.DATA_TABLE,
				label: i18n.baseText("dataTable.add.button.label"),
				disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes)?.dataTable?.create
			});
			if (settingsStore.isAgentsEnabled && selectedMainButtonType.value !== ACTION_TYPES.AGENT) items.push({
				value: ACTION_TYPES.AGENT,
				label: i18n.baseText("projects.header.create.agent"),
				disabled: !canCreateAgent.value
			});
			return items;
		});
		const showProjectIcon = computed(() => {
			return !projectPages.isOverviewSubPage && !projectPages.isSharedSubPage && !isPersonalProject.value;
		});
		function isCredentialsListView(routeName) {
			return [
				VIEWS.PROJECTS_CREDENTIALS,
				VIEWS.CREDENTIALS,
				VIEWS.SHARED_CREDENTIALS
			].includes(routeName);
		}
		function isWorkflowListView(routeName) {
			return [
				VIEWS.PROJECTS_WORKFLOWS,
				VIEWS.WORKFLOWS,
				VIEWS.SHARED_WORKFLOWS,
				VIEWS.PROJECTS_FOLDERS
			].includes(routeName);
		}
		function getUIContext(routeName) {
			if (isCredentialsListView(routeName)) return "credentials_list";
			else if (isWorkflowListView(routeName)) return "workflow_list";
			else return;
		}
		const actions = {
			[ACTION_TYPES.WORKFLOW]: (projectId) => {
				router.push({
					name: VIEWS.NEW_WORKFLOW,
					query: {
						projectId,
						parentFolderId: route.params.folderId,
						uiContext: getUIContext(route.name?.toString() ?? "")
					}
				});
			},
			[ACTION_TYPES.CREDENTIAL]: (projectId) => {
				router.push({
					name: VIEWS.PROJECTS_CREDENTIALS,
					params: {
						projectId,
						credentialId: "create"
					},
					query: { uiContext: getUIContext(route.name?.toString() ?? "") }
				});
			},
			[ACTION_TYPES.FOLDER]: () => {
				emit("createFolder");
			},
			[ACTION_TYPES.DATA_TABLE]: (projectId) => {
				router.push({
					name: PROJECT_DATA_TABLES,
					params: {
						projectId,
						new: "new"
					}
				});
			},
			[ACTION_TYPES.VARIABLE]: () => {
				uiStore.openModalWithData({
					name: VARIABLE_MODAL_KEY,
					data: { mode: "new" }
				});
				telemetry.track("User clicked header add variable button");
			},
			[ACTION_TYPES.AGENT]: (projectId, source) => {
				createAgent(source, projectId);
			}
		};
		const sectionDescription = computed(() => {
			if (projectPages.isSharedSubPage) return i18n.baseText("projects.header.shared.subtitle");
			else if (projectPages.isOverviewSubPage) return i18n.baseText(settingsStore.isDataTableFeatureEnabled ? "projects.header.overview.subtitleWithDataTables" : "projects.header.overview.subtitle");
			else if (isPersonalProject.value) return i18n.baseText(settingsStore.isDataTableFeatureEnabled ? "projects.header.personal.subtitleWithDataTables" : "projects.header.personal.subtitle");
			return null;
		});
		const projectDescription = computed(() => {
			if (projectPages.isProjectsSubPage) return projectsStore.currentProject?.description;
			return null;
		});
		const favoriteIcon = computed(() => isProjectFavorited.value ? "star-filled" : "star");
		const projectHeaderRef = ref(null);
		const { width: projectHeaderWidth } = useElementSize(projectHeaderRef);
		const headerActionsRef = ref(null);
		const { width: headerActionsWidth } = useElementSize(headerActionsRef);
		const projectSubtitleFontSizeInPxs = ref(null);
		useResizeObserver(projectHeaderRef, () => {
			if (!projectHeaderRef.value) return;
			const projectSubtitleEl = projectHeaderRef.value.querySelector("span[data-test-id=\"project-subtitle\"]");
			if (projectSubtitleEl) {
				const computedStyle = window.getComputedStyle(projectSubtitleEl);
				projectSubtitleFontSizeInPxs.value = parseFloat(computedStyle.fontSize);
			}
		});
		const projectDescriptionTruncated = computed(() => {
			if (!projectDescription.value) return "";
			const availableTextWidth = projectHeaderWidth.value - headerActionsWidth.value;
			const fontSizeInPixels = projectSubtitleFontSizeInPxs.value ?? 14;
			return truncateTextToFitWidth(projectDescription.value, availableTextWidth, fontSizeInPixels);
		});
		const onSelect = (action, source) => {
			const executableAction = actions[action];
			if (!homeProject.value) return;
			executableAction(homeProject.value.id, source);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("div", {
					ref_key: "projectHeaderRef",
					ref: projectHeaderRef,
					class: normalizeClass(_ctx.$style.projectHeader)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.projectDetails) }, [
					showProjectIcon.value ? (openBlock(), createBlock(ProjectIcon_default, {
						key: 0,
						icon: headerIcon.value,
						"border-less": true,
						size: "medium"
					}, null, 8, ["icon"])) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleRow) }, [projectName.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
						key: 0,
						bold: "",
						tag: "h2",
						size: "xlarge",
						"data-test-id": "project-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
						_: 1
					})) : createCommentVNode("", true), createVNode(PromotionPreviewBadges_default)], 2), sectionDescription.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						"data-test-id": "project-subtitle"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(sectionDescription.value), 1)]),
						_: 1
					})) : projectDescription.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.projectDescriptionWrapper)
					}, [createVNode(unref(N8nText_default), {
						color: "text-light",
						"data-test-id": "project-subtitle"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(projectDescriptionTruncated.value || projectDescription.value), 1)]),
						_: 1
					}), projectDescriptionTruncated.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.tooltip)
					}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(projectDescription.value), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2),
					isTeamProject.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 1,
						class: normalizeClass([_ctx.$style.favoriteBtn, isProjectFavorited.value && _ctx.$style.favoriteBtnActive]),
						icon: favoriteIcon.value,
						"aria-label": unref(i18n).baseText(isProjectFavorited.value ? "favorites.remove" : "favorites.add"),
						variant: "ghost",
						size: "medium",
						"data-test-id": "project-favorite-btn",
						onClick: withModifiers(onToggleProjectFavorite, ["stop"])
					}, null, 8, [
						"class",
						"icon",
						"aria-label"
					])) : createCommentVNode("", true)
				], 2), unref(route).name !== unref(VIEWS).PROJECT_SETTINGS ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "headerActionsRef",
					ref: headerActionsRef,
					class: normalizeClass([_ctx.$style.headerActions])
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: !unref(sourceControlStore).preferences.branchReadOnly,
					content: unref(i18n).baseText("readOnlyEnv.cantAdd.any")
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createVNode(ReadyToRunButton_default, { "has-active-callouts": props.hasActiveCallouts }, null, 8, ["has-active-callouts"]), createVNode(ProjectCreateResource_default, {
						"data-test-id": "add-resource-buttons",
						actions: menu.value,
						variant: "brand",
						disabled: unref(sourceControlStore).preferences.branchReadOnly,
						onAction: _cache[1] || (_cache[1] = (action) => onSelect(action, "dropdown"))
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), mergeProps({ "data-test-id": `add-resource-${selectedMainButtonType.value}` }, mainButtonConfig.value, {
							size: "medium",
							variant: "brand",
							onClick: _cache[0] || (_cache[0] = ($event) => onSelect(selectedMainButtonType.value, "button"))
						}), null, 16, ["data-test-id"])]),
						_: 1
					}, 8, ["actions", "disabled"])])]),
					_: 1
				}, 8, ["disabled", "content"])], 2)) : createCommentVNode("", true)], 2),
				renderSlot(_ctx.$slots, "default"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(ProjectTabs_default, {
					"page-type": pageType.value,
					"show-executions": !unref(projectPages).isSharedSubPage,
					"show-settings": showSettings.value,
					"additional-tabs": customProjectTabs.value
				}, null, 8, [
					"page-type",
					"show-executions",
					"show-settings",
					"additional-tabs"
				])], 2)
			]);
		};
	}
}), [["__cssModules", { "$style": {
	projectHeader: "_projectHeader_18cko_113",
	projectDetails: "_projectDetails_18cko_120",
	actions: "_actions_18cko_125",
	projectDescriptionWrapper: "_projectDescriptionWrapper_18cko_129",
	tooltip: "_tooltip_18cko_133",
	favoriteBtn: "_favoriteBtn_18cko_150",
	favoriteBtnActive: "_favoriteBtnActive_18cko_157",
	titleRow: "_titleRow_18cko_161",
	headerActions: "_headerActions_18cko_177"
} }]]);
//#endregion
export { ProjectHeader_default as t };
