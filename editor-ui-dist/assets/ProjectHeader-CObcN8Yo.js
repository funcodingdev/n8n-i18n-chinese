import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { S as useResizeObserver, m as useElementSize } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { bn as ProjectTypes, vn as useProjectsStore, yn as useSourceControlStore } from "./workflows.store-qP-dtzSs.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { Ea as getResourcePermissions } from "./src-B255AdRt.js";
import { t as isIconOrEmoji } from "./types-BozgK3KO.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useUsersStore } from "./users.store-BBpeiveu.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { no as EnterpriseEditionFeature, pr as PROJECT_DATA_TABLES } from "./constants-CMdL1Kzl.js";
import { n as useFavoritesStore } from "./workflowsList.store-y-0nsqzo.js";
import { n as useUIStore, v as VARIABLE_MODAL_KEY } from "./ui.store-xzfQIfPK.js";
import { t as ProjectIcon_default } from "./ProjectIcon-Ckn88iUF.js";
import { t as useFoldersStore } from "./folders.store-CTW_1MLV.js";
import { t as generateNanoId } from "./generate-nano-id-D-uepEwq.js";
import { t as instanceAiCreateAgentRoute } from "./createAgentRoute-B_66Iz8k.js";
import { i as useProjectPages, t as useReadyToRunStore } from "./readyToRun.store-BjW1hyJA.js";
import { t as useAgentPermissions } from "./useAgentPermissions-CYU0gh2a.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-DBVwl51W.js";
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
var ProjectCreateResource_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectCreateResource.vue?vue&type=style&index=0&lang.module.scss
var buttonGroup = "_buttonGroup_1pqt3_388";
var buttonGroupDropdown = "_buttonGroupDropdown_1pqt3_399";
var shimmer$1 = "_shimmer_1pqt3_1";
var spin$1 = "_spin_1pqt3_1";
var opacityPulse$1 = "_opacityPulse_1pqt3_1";
var popoverIn$1 = "_popoverIn_1pqt3_1";
var fadeIn$1 = "_fadeIn_1pqt3_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1pqt3_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1pqt3_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1pqt3_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1pqt3_1";
var blurSwapIn$1 = "_blurSwapIn_1pqt3_1";
var blurSwapOut$1 = "_blurSwapOut_1pqt3_1";
var pulseGlow$1 = "_pulseGlow_1pqt3_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1pqt3_1";
var fade$1 = "_fade_1pqt3_1";
var fadeInUp$1 = "_fadeInUp_1pqt3_1";
var fadeInDown$1 = "_fadeInDown_1pqt3_1";
var fadeInLeft$1 = "_fadeInLeft_1pqt3_1";
var fadeInRight$1 = "_fadeInRight_1pqt3_1";
var fadeOut$1 = "_fadeOut_1pqt3_1";
var fadeOutDown$1 = "_fadeOutDown_1pqt3_1";
var fadeOutUp$1 = "_fadeOutUp_1pqt3_1";
var fadeOutLeft$1 = "_fadeOutLeft_1pqt3_1";
var fadeOutRight$1 = "_fadeOutRight_1pqt3_1";
var ping$1 = "_ping_1pqt3_1";
var blinkBackground$1 = "_blinkBackground_1pqt3_1";
var typingBlink$1 = "_typingBlink_1pqt3_1";
var ProjectCreateResource_vue_vue_type_style_index_0_lang_module_default = {
	buttonGroup,
	buttonGroupDropdown,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1pqt3_1",
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
var ProjectCreateResource_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectCreateResource_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectCreateResource_vue_vue_type_style_index_0_lang_module_default }]]);
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
				variant: "subtle",
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
//#region src/features/collaboration/projects/components/ProjectHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { style: {
	"display": "flex",
	"gap": "var(--spacing--xs)",
	"align-items": "center"
} };
var ProjectHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const agentTelemetry = useAgentTelemetry();
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
		const customProjectTabs = computed(() => {
			let tabType;
			if (projectPages.isSharedSubPage) tabType = "shared";
			else if (projectPages.isOverviewSubPage) tabType = "overview";
			else tabType = "project";
			return Object.keys(uiStore.moduleTabs[tabType]).filter(settingsStore.isModuleActive).flatMap((module) => uiStore.moduleTabs[tabType][module]);
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
			if (props.mainButton === ACTION_TYPES.AGENT && !settingsStore.isModuleActive("agents")) return ACTION_TYPES.WORKFLOW;
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
			if (settingsStore.isModuleActive("agents") && selectedMainButtonType.value !== ACTION_TYPES.AGENT) items.push({
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
				const agentId = generateNanoId();
				agentTelemetry.trackClickedNewAgent(source, agentId);
				router.push(instanceAiCreateAgentRoute(projectId, agentId));
			}
		};
		const pageType = computed(() => {
			if (projectPages.isSharedSubPage) return "shared";
			else if (projectPages.isOverviewSubPage) return "overview";
			else return "project";
		});
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
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [projectName.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
						key: 0,
						bold: "",
						tag: "h2",
						size: "xlarge",
						"data-test-id": "project-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
						_: 1
					})) : createCommentVNode("", true), sectionDescription.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-light",
						"data-test-id": "project-subtitle"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(sectionDescription.value), 1)]),
						_: 1
					})) : projectDescription.value ? (openBlock(), createElementBlock("div", {
						key: 2,
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
						disabled: unref(sourceControlStore).preferences.branchReadOnly,
						onAction: _cache[1] || (_cache[1] = (action) => onSelect(action, "dropdown"))
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), mergeProps({ "data-test-id": `add-resource-${selectedMainButtonType.value}` }, mainButtonConfig.value, {
							size: "medium",
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
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectHeader.vue?vue&type=style&index=0&lang.module.scss
var projectHeader = "_projectHeader_1ikf2_388";
var projectDetails = "_projectDetails_1ikf2_395";
var actions = "_actions_1ikf2_400";
var projectDescriptionWrapper = "_projectDescriptionWrapper_1ikf2_404";
var tooltip = "_tooltip_1ikf2_408";
var favoriteBtn = "_favoriteBtn_1ikf2_425";
var favoriteBtnActive = "_favoriteBtnActive_1ikf2_432";
var headerActions = "_headerActions_1ikf2_446";
var shimmer = "_shimmer_1ikf2_1";
var spin = "_spin_1ikf2_1";
var opacityPulse = "_opacityPulse_1ikf2_1";
var popoverIn = "_popoverIn_1ikf2_1";
var fadeIn = "_fadeIn_1ikf2_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ikf2_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ikf2_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ikf2_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ikf2_1";
var blurSwapIn = "_blurSwapIn_1ikf2_1";
var blurSwapOut = "_blurSwapOut_1ikf2_1";
var pulseGlow = "_pulseGlow_1ikf2_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ikf2_1";
var fade = "_fade_1ikf2_1";
var fadeInUp = "_fadeInUp_1ikf2_1";
var fadeInDown = "_fadeInDown_1ikf2_1";
var fadeInLeft = "_fadeInLeft_1ikf2_1";
var fadeInRight = "_fadeInRight_1ikf2_1";
var fadeOut = "_fadeOut_1ikf2_1";
var fadeOutDown = "_fadeOutDown_1ikf2_1";
var fadeOutUp = "_fadeOutUp_1ikf2_1";
var fadeOutLeft = "_fadeOutLeft_1ikf2_1";
var fadeOutRight = "_fadeOutRight_1ikf2_1";
var ping = "_ping_1ikf2_1";
var blinkBackground = "_blinkBackground_1ikf2_1";
var typingBlink = "_typingBlink_1ikf2_1";
var ProjectHeader_vue_vue_type_style_index_0_lang_module_default = {
	projectHeader,
	projectDetails,
	actions,
	projectDescriptionWrapper,
	tooltip,
	favoriteBtn,
	favoriteBtnActive,
	headerActions,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ikf2_1",
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
var ProjectHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ProjectHeader_default as t };
