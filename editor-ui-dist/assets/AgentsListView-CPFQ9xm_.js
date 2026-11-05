import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Cf as watch, Gd as createVNode, Kf as unref, Ld as computed, Nd as withModifiers, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, Yo as require_dateformat, af as onBeforeUnmount, as as useRoute, ep as init_shared_esm_bundler, li as require_debounce, os as useRouter, pp as normalizeClass, qd as defineComponent, rf as nextTick, sf as onMounted, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { $c as listAgentsPageGlobal, Ai as useAgentPermissions, Cc as deleteAgent, Cm as useProjectsStore, Di as useAgentTelemetry, ED as N8nText_default, Ei as useCreateAgent, FD as N8nIcon_default, Gg as usePostHog, Hy as useToast, Kg as getDebounceTime, Mi as upsertProjectAgentsListCache, My as DEBOUNCE_TIME, ND as N8nIconButton_default, OD as N8nTooltip_default, PD as N8nButton_default, Qc as listAgentsPage, RD as _plugin_vue_export_helper_default, UD as useI18n, WE as N8nHeading_default, Xy as useRootStore, Yy as useSettingsStore, Zm as AGENT_DUPLICATE_MODAL_KEY, _a as useMCPStore, ag as useUIStore, fh as NEW_SESSION_PARAM, ga as useMcp, iy as AGENTS_LIST_EMPTY_STATE_TEMPLATES_EXPERIMENT, ji as removeProjectAgentFromListCache, kc as duplicateAgent, mD as N8nActionToggle_default, np as useDocumentTitle, qg as useDebounce, tD as N8nCard_default, wD as N8nChatInput_default, wf as useInstanceAiReady, wm as useFavoritesStore, xD as N8nBadge_default, xh as AGENT_BUILDER_VIEW, zs as TimeAgo_default } from "./app-CfhiRDif.js";
import { i as useProjectPages } from "./readyToRun.store-Cq2nYZHT.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-mD-s-u8q.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-C85rQYh0.js";
import { t as ProjectHeader_default } from "./ProjectHeader-D398b6Dv.js";
import { t as PublicationIndicator_default } from "./PublicationIndicator-bzKy_PAs.js";
import { t as useInsightsStore } from "./insights.store-DB98yOGb.js";
import { t as InsightsSummary_default } from "./InsightsSummary-CyiX3auK.js";
import "./src-B_lZgES8.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-xhqL8Xkx.js";
import { r as useAgentPublish, t as AgentTemplateList_default } from "./AgentTemplateList-j662Blaa.js";
//#region src/experiments/agentsListEmptyStateTemplates/useAgentsListEmptyStateTemplatesExperiment.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
init_runtime_core_esm_bundler();
function useAgentsListEmptyStateTemplatesExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.isFeatureEnabled(AGENTS_LIST_EMPTY_STATE_TEMPLATES_EXPERIMENT.name)) };
}
//#endregion
//#region src/features/agents/components/AgentCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1 = { key: 0 };
var AgentCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentCard",
	props: {
		agent: {},
		projectId: {}
	},
	emits: [
		"select",
		"published",
		"unpublished",
		"deleted",
		"new-chat",
		"duplicate"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const mcpStore = useMCPStore();
		const mcp = useMcp();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const { publish, unpublish } = useAgentPublish();
		const { canCreate, canUpdate, canDelete, canPublish, canUnpublish } = useAgentPermissions(() => props.projectId);
		const isPublished = computed(() => props.agent.activeVersionId !== null);
		const hasUnpublishedChanges = computed(() => isPublished.value && props.agent.versionId !== props.agent.activeVersionId);
		const isUntitled = computed(() => props.agent.name === locale.baseText("agents.new.defaultName"));
		const isMcpEnabled = computed(() => settingsStore.isModuleActive("mcp") && !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
		const mcpToggleStatus = ref(null);
		const isAvailableInMCP = computed(() => mcpToggleStatus.value ?? props.agent.availableInMCP ?? false);
		watch([() => props.agent, () => props.agent.availableInMCP], () => {
			mcpToggleStatus.value = null;
		});
		const showMcpIndicator = computed(() => isMcpEnabled.value && isAvailableInMCP.value);
		const favoriteStore = useFavoritesStore();
		const isFavorite = computed(() => favoriteStore.isFavorite(props.agent.id, "agent"));
		const actions = computed(() => {
			const items = [];
			items.push({
				value: "toggleFavorite",
				label: locale.baseText(isFavorite.value ? "favorites.remove" : "favorites.add"),
				divided: !isPublished.value ? !canPublish.value : !canUnpublish.value
			});
			if (canCreate.value) items.push({
				value: "duplicate",
				label: locale.baseText("agents.list.actions.duplicate")
			});
			if (isPublished.value && canUnpublish.value) items.push({
				value: "unpublish",
				label: locale.baseText("agents.list.actions.unpublish")
			});
			else if (!isPublished.value && canPublish.value) items.push({
				value: "publish",
				label: locale.baseText("agents.list.actions.publish")
			});
			if (isMcpEnabled.value && canUpdate.value) items.push({
				value: "toggleMCPAccess",
				label: locale.baseText(isAvailableInMCP.value ? "agents.list.actions.disableMCPAccess" : "agents.list.actions.enableMCPAccess"),
				divided: true
			});
			if (canDelete.value) items.push({
				value: "delete",
				label: locale.baseText("agents.list.actions.delete"),
				divided: true,
				destructive: true
			});
			return items;
		});
		const showActions = computed(() => actions.value.length > 0);
		const formattedCreatedAtDate = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			return (0, import_dateformat.default)(props.agent.createdAt, `d mmmm${String(props.agent.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
		});
		async function onAction(action) {
			if (action === "publish") {
				const updated = await publish(props.projectId, props.agent.id);
				if (updated) emit("published", updated);
			} else if (action === "unpublish") {
				const updated = await unpublish(props.projectId, props.agent.id, props.agent.name);
				if (updated) emit("unpublished", updated);
			} else if (action === "toggleFavorite") await favoriteStore.toggleFavorite(props.agent.id, "agent");
			else if (action === "toggleMCPAccess") await toggleMCPAccess(!isAvailableInMCP.value);
			else if (action === "delete") {
				if (await openAgentConfirmationModal({
					title: locale.baseText("agents.delete.modal.title", { interpolate: { name: props.agent.name } }),
					description: locale.baseText("agents.delete.modal.description", { interpolate: { name: props.agent.name } }),
					isDestructive: true,
					confirmButtonText: locale.baseText("agents.delete.modal.button.delete"),
					cancelButtonText: locale.baseText("generic.cancel")
				}) !== "confirm") return;
				await deleteAgent(rootStore.restApiContext, props.projectId, props.agent.id);
				removeProjectAgentFromListCache(props.projectId, props.agent.id);
				favoriteStore.removeFavoriteLocally(props.agent.id, "agent");
				emit("deleted", props.agent.id);
			} else if (action === "duplicate") emit("duplicate", props.agent.id);
		}
		async function toggleMCPAccess(enabled) {
			try {
				await mcpStore.toggleAgentMcpAccess(props.agent.id, enabled);
				mcpToggleStatus.value = enabled;
				if (enabled) mcp.trackMcpAccessEnabledForAgent(props.agent.id);
			} catch (error) {
				toast.showError(error, locale.baseText("agents.toggleMCP.error.title"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				"data-test-id": "agent-card",
				onClick: _cache[2] || (_cache[2] = ($event) => emit("select", __props.agent.id))
			}, {
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: !isUntitled.value,
					color: isUntitled.value ? "text-light" : void 0,
					class: normalizeClass([_ctx.$style.cardHeading, { [_ctx.$style.untitledName]: isUntitled.value }]),
					"data-test-id": "agent-card-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.name) + " ", 1), !unref(canUpdate) ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.readonlyBadge),
						variant: "outline",
						"data-test-id": "agent-card-readonly-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.list.readonly")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"bold",
					"color",
					"class"
				])]),
				append: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.cardActions),
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}, [
					isPublished.value ? (openBlock(), createBlock(PublicationIndicator_default, {
						key: 0,
						label: unref(locale).baseText(hasUnpublishedChanges.value ? "agents.list.changesToPublish" : "agents.list.published"),
						variant: hasUnpublishedChanges.value ? "warning" : "success",
						"data-state": hasUnpublishedChanges.value ? "changes-to-publish" : "published",
						"data-test-id": "agent-card-publish-indicator"
					}, null, 8, [
						"label",
						"variant",
						"data-state"
					])) : createCommentVNode("", true),
					createVNode(unref(N8nTooltip_default), { content: unref(locale).baseText("agents.list.actions.newChat") }, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "message-circle-plus",
							variant: "ghost",
							size: "medium",
							"aria-label": unref(locale).baseText("agents.list.actions.newChat"),
							"data-test-id": "agent-card-new-chat",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("new-chat", __props.agent.id, __props.projectId))
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["content"]),
					showActions.value ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
						key: 1,
						actions: actions.value,
						theme: "dark",
						"data-test-id": "agent-card-actions",
						onAction
					}, null, 8, ["actions"])) : createCommentVNode("", true)
				], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [
					createBaseVNode("span", null, [
						createTextVNode(toDisplayString(unref(locale).baseText("agents.list.updated")) + " ", 1),
						createVNode(TimeAgo_default, { date: String(__props.agent.updatedAt) }, null, 8, ["date"]),
						_cache[3] || (_cache[3] = createTextVNode(" | ", -1))
					]),
					createBaseVNode("span", null, toDisplayString(unref(locale).baseText("agents.list.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 1),
					showMcpIndicator.value ? (openBlock(), createElementBlock("span", _hoisted_1, "|")) : createCommentVNode("", true),
					showMcpIndicator.value ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.mcpIndicator),
						"data-test-id": "agent-card-mcp"
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "right",
						content: unref(locale).baseText("agents.list.availableInMCP")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "mcp",
							size: "medium"
						})]),
						_: 1
					}, 8, ["content"])], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	cardLink: "_cardLink_1n6h6_113",
	cardHeading: "_cardHeading_1n6h6_119",
	untitledName: "_untitledName_1n6h6_127",
	readonlyBadge: "_readonlyBadge_1n6h6_131",
	cardDescription: "_cardDescription_1n6h6_135",
	mcpIndicator: "_mcpIndicator_1n6h6_145",
	cardActions: "_cardActions_1n6h6_150"
} }]]);
//#endregion
//#region src/features/agents/components/AgentsListIntro.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentsListIntro_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentsListIntro",
	props: { disabled: { type: Boolean } },
	emits: [
		"create-blank",
		"submit",
		"select"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const draft = ref("");
		const chatInputRef = ref(null);
		let isUnmounted = false;
		function focusComposer() {
			if (isUnmounted || props.disabled) return;
			chatInputRef.value?.focusInput();
		}
		onMounted(() => {
			nextTick(() => focusComposer());
		});
		onBeforeUnmount(() => {
			isUnmounted = true;
		});
		function onComposerBlur() {
			nextTick(() => focusComposer());
		}
		function onSubmit() {
			const text = draft.value.trim();
			if (!text || props.disabled) return;
			emit("submit", text);
		}
		function onSelectTemplate(template) {
			if (props.disabled) return;
			emit("select", template);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.intro),
				"data-test-id": "agents-list-intro"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(unref(N8nIcon_default), {
						icon: "bot",
						size: "xxlarge",
						color: "text-light"
					}),
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.templates.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.templates.subtitle")), 1)]),
						_: 1
					})
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.composerContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.createBlank) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					disabled: __props.disabled,
					"data-test-id": "agents-list-intro-create-blank",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("create-blank"))
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "pencil" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.list.intro.createBlank")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2), createVNode(unref(N8nChatInput_default), {
					ref_key: "chatInputRef",
					ref: chatInputRef,
					modelValue: draft.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => draft.value = $event),
					layout: "multiline",
					autofocus: true,
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("agents.list.intro.placeholder"),
					"input-test-id": "agents-list-intro-input",
					onBlur: onComposerBlur,
					onSubmit
				}, null, 8, [
					"modelValue",
					"disabled",
					"placeholder"
				])], 2),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.templatesLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.list.intro.templatesLabel")), 1)]),
					_: 1
				}, 8, ["class"]),
				createVNode(AgentTemplateList_default, { onSelect: onSelectTemplate })
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	intro: "_intro_4uvb4_1",
	header: "_header_4uvb4_11",
	createBlank: "_createBlank_4uvb4_20",
	composerContainer: "_composerContainer_4uvb4_29",
	templatesLabel: "_templatesLabel_4uvb4_33"
} }]]);
//#endregion
//#region src/features/agents/views/AgentsListView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/views/AgentsListView.vue
var AgentsListView_default = /* @__PURE__ */ defineComponent({
	__name: "AgentsListView",
	setup(__props) {
		function isAgentResource(value) {
			return typeof value === "object" && value !== null && "id" in value;
		}
		const AGENTS_SORT_MAP = {
			lastUpdated: "updatedAt:desc",
			lastCreated: "createdAt:desc",
			nameAsc: "name:asc",
			nameDesc: "name:desc"
		};
		const locale = useI18n();
		const documentTitle = useDocumentTitle();
		const route = useRoute();
		const router = useRouter();
		const rootStore = useRootStore();
		const projectsStore = useProjectsStore();
		const insightsStore = useInsightsStore();
		const projectPages = useProjectPages();
		const uiStore = useUIStore();
		const toast = useToast();
		const agentTelemetry = useAgentTelemetry();
		const { createAgent } = useCreateAgent();
		const { callDebounced } = useDebounce();
		const { isFeatureEnabled: templatesExperimentEnabled } = useAgentsListEmptyStateTemplatesExperiment();
		const instanceAiReady = useInstanceAiReady();
		const showTemplatesIntro = computed(() => templatesExperimentEnabled.value && instanceAiReady.value);
		const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
		const { canCreate: canCreateAgent } = useAgentPermissions(() => projectId.value ?? homeProject.value?.id);
		const allAgents = ref([]);
		const filters = ref({
			search: "",
			homeProject: ""
		});
		const currentPage = ref(1);
		const pageSize = ref(50);
		const currentSort = ref("updatedAt:desc");
		const totalAgents = ref(0);
		const loading = ref(true);
		const projectId = computed(() => route.params.projectId);
		const sortFns = {
			lastUpdated: (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
			lastCreated: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			nameAsc: (a, b) => a.name.localeCompare(b.name),
			nameDesc: (a, b) => b.name.localeCompare(a.name)
		};
		async function fetchAgents() {
			const shouldDelayLoading = allAgents.value.length > 0;
			const delayedLoading = (0, import_debounce.default)(() => {
				loading.value = true;
			}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
			if (shouldDelayLoading) delayedLoading();
			else loading.value = true;
			try {
				const fetchOptions = {
					skip: (currentPage.value - 1) * pageSize.value,
					take: pageSize.value,
					sortBy: currentSort.value,
					filter: filters.value.search ? { query: filters.value.search } : void 0
				};
				const { count, data } = projectId.value ? await listAgentsPage(rootStore.restApiContext, projectId.value, fetchOptions) : await listAgentsPageGlobal(rootStore.restApiContext, fetchOptions);
				allAgents.value = data;
				totalAgents.value = count;
			} finally {
				delayedLoading.cancel();
				loading.value = false;
			}
		}
		function onSelectAgent(agentId, agentProjectId) {
			router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: agentProjectId,
					agentId
				}
			});
		}
		function onNewAgentChat(agentId, agentProjectId) {
			router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: agentProjectId,
					agentId
				},
				query: { [NEW_SESSION_PARAM]: "true" }
			});
		}
		function onAgentDuplicate(agentId) {
			const agent = allAgents.value.find((a) => a.id === agentId);
			if (!agent) return;
			if (!agent.schema) {
				toast.showMessage({
					title: locale.baseText("agents.duplicate.modal.unconfigured"),
					type: "info"
				});
				return;
			}
			uiStore.openModalWithData({
				name: AGENT_DUPLICATE_MODAL_KEY,
				data: {
					projectId: agent.projectId,
					agentId: agent.id,
					name: agent.name,
					existingNames: allAgents.value.map((a) => a.name),
					onConfirm: async (newName) => {
						try {
							const duplicated = await duplicateAgent(rootStore.restApiContext, agent.projectId, agent.id, newName);
							agentTelemetry.trackDuplicatedAgent({
								sourceAgentId: agent.id,
								agentId: duplicated.id,
								projectId: agent.projectId
							});
							upsertProjectAgentsListCache(agent.projectId, duplicated);
							toast.showMessage({
								title: locale.baseText("agents.duplicate.modal.success"),
								type: "success"
							});
							onSelectAgent(duplicated.id, agent.projectId);
						} catch (error) {
							toast.showError(error, locale.baseText("agents.duplicate.modal.error"));
							throw error;
						}
					}
				}
			});
		}
		function onAgentPublished(updated) {
			allAgents.value = allAgents.value.map((a) => a.id === updated.id ? updated : a);
			fetchAgents();
		}
		function onAgentUnpublished(updated) {
			allAgents.value = allAgents.value.map((a) => a.id === updated.id ? updated : a);
			fetchAgents();
		}
		function onAgentDeleted(agentId) {
			allAgents.value = allAgents.value.filter((a) => a.id !== agentId);
			totalAgents.value = Math.max(0, totalAgents.value - 1);
			if (allAgents.value.length === 0 && currentPage.value > 1) currentPage.value -= 1;
			fetchAgents();
		}
		async function onSearchUpdated(search) {
			filters.value = {
				...filters.value,
				search
			};
			currentPage.value = 1;
			if (search) await callDebounced(fetchAgents, {
				debounceTime: DEBOUNCE_TIME.INPUT.SEARCH,
				trailing: true
			});
			else await fetchAgents();
		}
		async function setPaginationAndSort(payload) {
			if (payload.page) currentPage.value = payload.page;
			if (payload.pageSize) pageSize.value = payload.pageSize;
			if (payload.sort) currentSort.value = AGENTS_SORT_MAP[payload.sort] ?? "updatedAt:desc";
			if (!loading.value) await callDebounced(fetchAgents, {
				debounceTime: DEBOUNCE_TIME.API.RESOURCE_SEARCH,
				trailing: true
			});
		}
		function targetProjectIdForCreate() {
			return projectId.value ?? projectsStore.personalProject?.id ?? "";
		}
		function onCreateAgentClick() {
			createAgent("button", targetProjectIdForCreate());
		}
		function onCreateBlank() {
			createAgent("empty_state_blank", targetProjectIdForCreate());
		}
		function onCreateFromPrompt(text) {
			createAgent("empty_state_prompt", targetProjectIdForCreate(), {
				kind: "prompt",
				text
			});
		}
		function onCreateFromTemplate(template) {
			createAgent("empty_state_template", targetProjectIdForCreate(), {
				kind: "template",
				templateId: template.id
			});
		}
		onMounted(async () => {
			documentTitle.set(locale.baseText("agents.heading"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				filters: filters.value,
				"onUpdate:filters": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
				"resource-key": "agents",
				type: "list-paginated",
				resources: allAgents.value,
				initialize: fetchAgents,
				loading: false,
				"resources-refreshing": loading.value,
				disabled: false,
				"sort-fns": sortFns,
				"sort-options": [
					"lastUpdated",
					"lastCreated",
					"nameAsc",
					"nameDesc"
				],
				"type-props": { itemSize: 80 },
				"custom-page-size": unref(50),
				"total-items": totalAgents.value,
				"dont-perform-sorting-and-filtering": true,
				shareable: false,
				"ui-config": {
					searchEnabled: true,
					showFiltersDropdown: false,
					sortEnabled: true
				},
				"display-name": (agent) => agent.name,
				"tab-key": "agents",
				"onUpdate:search": onSearchUpdated,
				"onUpdate:paginationAndSort": setPaginationAndSort
			}, {
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "agent" }, {
					default: withCtx(() => [unref(projectPages).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(unref(InsightsSummary_default), {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				empty: withCtx(() => [showTemplatesIntro.value ? (openBlock(), createBlock(AgentsListIntro_default, {
					key: 0,
					disabled: !unref(canCreateAgent),
					onCreateBlank,
					onSubmit: onCreateFromPrompt,
					onSelect: onCreateFromTemplate
				}, null, 8, ["disabled"])) : (openBlock(), createBlock(ResourcesListEmptyState_default, {
					key: 1,
					"resource-key": "agents",
					"button-disabled": !unref(canCreateAgent),
					"onClick:button": onCreateAgentClick
				}, null, 8, ["button-disabled"]))]),
				item: withCtx(({ item: data }) => [isAgentResource(data) ? (openBlock(), createBlock(AgentCard_default, {
					key: 0,
					class: "mb-2xs",
					agent: data,
					"project-id": data.projectId,
					onSelect: ($event) => onSelectAgent(data.id, data.projectId),
					onNewChat: onNewAgentChat,
					onPublished: onAgentPublished,
					onUnpublished: onAgentUnpublished,
					onDeleted: onAgentDeleted,
					onDuplicate: onAgentDuplicate
				}, null, 8, [
					"agent",
					"project-id",
					"onSelect"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"filters",
				"resources",
				"resources-refreshing",
				"custom-page-size",
				"total-items",
				"display-name"
			]);
		};
	}
});
//#endregion
export { AgentsListView_default as default };
