import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BjbSP7dI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-CK49ozr4.js";
import { t as N8nIcon_default } from "./N8nIcon-Cb6ivP-y.js";
import { t as N8nIconButton_default } from "./N8nIconButton-WmwX0N4c.js";
import { O as useStorage } from "./dist-CYNfKCbA.js";
import { t as DropdownMenu_default } from "./DropdownMenu-CfEiybjF.js";
import { n as N8nToggle_default } from "./N8nToggleGroup-DvT5BoMO.js";
import { t as truncate } from "./truncate-B0m9bkui.js";
import { t as N8nTooltip_default } from "./N8nTooltip-CXMYm6HE.js";
import { c as useRoute, l as useRouter } from "./vue-router-CMlLwP0b.js";
import { bn as useProjectsStore } from "./workflows.store-BO9owX3m.js";
import { c as useAgentBuilderSession, n as AgentSessionTimelinePanel_default, r as useAgentSessionLangSmithExport, t as AgentPreviewDock_default } from "./AgentPreviewDock-BjoKKuyU.js";
import { t as N8nBreadcrumbs_default } from "./N8nBreadcrumbs-BuDfZNdB.js";
import { t as useRootStore } from "./useRootStore-B4L7-X8D.js";
import { t as VIEWS } from "./views-Bvvv9vv2.js";
import { Sr as AGENT_SESSION_DETAIL_VIEW, gr as AGENT_BUILDER_VIEW, jr as EXECUTIONS_SECTION_KEY } from "./constants-DOw6b_w2.js";
import { d as getAgent } from "./useAgentApi-C6kFPtBY.js";
import { t as convertToDisplayDate } from "./dateFormatter-PxD81FVB.js";
import { t as useAgentConfig } from "./useAgentConfig-BDhke_Se.js";
import { n as useAgentSessionsStore, r as defaultAgentSessionFilters, t as useThreadTitle } from "./thread-title-dMud_E0i.js";
//#region src/features/agents/components/AgentSessionTimelineHeader.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelineHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineHeader",
	props: {
		breadcrumbItems: {},
		sessionTitle: {},
		sessionOptions: {},
		showMetrics: { type: Boolean },
		triggerSource: {},
		triggerIcon: {},
		triggerLabel: {},
		totalTokens: {},
		totalCost: {},
		durationLabel: {},
		showLangsmithExport: { type: Boolean },
		langsmithExportLoading: { type: Boolean },
		isPreviewOpen: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"breadcrumb-select",
		"session-select",
		"langsmith-export",
		"toggle-preview",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.topBar) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.topBarLeft) }, [createVNode(unref(N8nBreadcrumbs_default), {
				items: props.breadcrumbItems,
				theme: "medium",
				onItemSelected: _cache[1] || (_cache[1] = ($event) => emit("breadcrumb-select", $event))
			}, {
				append: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.crumbSeparator),
					"aria-hidden": "true"
				}, "/", 2), createVNode(unref(DropdownMenu_default), {
					items: props.sessionOptions,
					placement: "bottom-start",
					"extra-popper-class": _ctx.$style.sessionDropdownMenu,
					"data-testid": "session-header-switcher",
					onSelect: _cache[0] || (_cache[0] = ($event) => emit("session-select", $event))
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.switcherButton),
						"aria-label": unref(i18n).baseText("agentSessions.sessionName")
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switcherLabel) }, toDisplayString(props.sessionTitle), 3), createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: 12
						})]),
						_: 1
					}, 8, ["class", "aria-label"])]),
					"item-label": withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sessionDropdownName) }, toDisplayString(item.label), 3)]),
					"item-trailing": withCtx(({ item }) => [item.data?.date ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.sessionDropdownDate)
					}, toDisplayString(item.data.date), 3)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["items", "extra-popper-class"])]),
				_: 1
			}, 8, ["items"])], 2), props.showMetrics ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.topBarRight)
			}, [
				props.showLangsmithExport ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agentSessions.langsmithExport.button"),
					placement: "bottom",
					"show-after": unref(500)
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "bug",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						loading: props.langsmithExportLoading,
						"aria-label": unref(i18n).baseText("agentSessions.langsmithExport.button"),
						"data-testid": "agent-session-langsmith-export",
						onClick: _cache[2] || (_cache[2] = ($event) => emit("langsmith-export"))
					}, null, 8, ["loading", "aria-label"])]),
					_: 1
				}, 8, ["content", "show-after"])) : createCommentVNode("", true),
				props.triggerSource ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.metricItem)
				}, [createVNode(unref(N8nIcon_default), {
					icon: props.triggerIcon,
					size: 12
				}, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(props.triggerLabel), 1)], 2)) : createCommentVNode("", true),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.sep) }, "·", 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.metricItem) }, [createVNode(unref(N8nIcon_default), {
					icon: "circle-dollar-sign",
					size: 12
				}), createBaseVNode("span", null, toDisplayString(props.totalTokens.toLocaleString()) + "t ($" + toDisplayString(props.totalCost.toFixed(4)) + ")", 1)], 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.sep) }, "·", 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.metricItem) }, [createVNode(unref(N8nIcon_default), {
					icon: "clock",
					size: 12
				}), createBaseVNode("span", null, toDisplayString(props.durationLabel), 1)], 2),
				createVNode(unref(N8nToggle_default), {
					"model-value": props.isPreviewOpen,
					variant: "ghost",
					size: "medium",
					icon: "play",
					label: unref(i18n).baseText("agents.builder.preview.button"),
					"data-testid": "agent-session-timeline-preview-btn",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("toggle-preview"))
				}, null, 8, ["model-value", "label"]),
				createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("generic.close") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						"icon-only": "",
						icon: "x",
						size: "medium",
						"aria-label": unref(i18n).baseText("generic.close"),
						"data-testid": "agent-session-timeline-close",
						"data-test-id": "agent-session-timeline-close",
						onClick: _cache[4] || (_cache[4] = ($event) => emit("close"))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content"])
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentSessionTimelineHeader.vue?vue&type=style&index=0&lang.module.scss
var topBar = "_topBar_fof2j_388";
var topBarLeft = "_topBarLeft_fof2j_399";
var topBarRight = "_topBarRight_fof2j_417";
var sep = "_sep_fof2j_428";
var metricItem = "_metricItem_fof2j_432";
var crumbSeparator = "_crumbSeparator_fof2j_439";
var switcherButton = "_switcherButton_fof2j_446";
var switcherLabel = "_switcherLabel_fof2j_451";
var sessionDropdownMenu = "_sessionDropdownMenu_fof2j_459";
var sessionDropdownName = "_sessionDropdownName_fof2j_470";
var sessionDropdownDate = "_sessionDropdownDate_fof2j_478";
var shimmer$1 = "_shimmer_fof2j_1";
var spin$1 = "_spin_fof2j_1";
var opacityPulse$1 = "_opacityPulse_fof2j_1";
var popoverIn$1 = "_popoverIn_fof2j_1";
var fadeIn$1 = "_fadeIn_fof2j_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_fof2j_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_fof2j_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_fof2j_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_fof2j_1";
var blurSwapIn$1 = "_blurSwapIn_fof2j_1";
var blurSwapOut$1 = "_blurSwapOut_fof2j_1";
var pulseGlow$1 = "_pulseGlow_fof2j_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_fof2j_1";
var fade$1 = "_fade_fof2j_1";
var fadeInUp$1 = "_fadeInUp_fof2j_1";
var fadeInDown$1 = "_fadeInDown_fof2j_1";
var fadeInLeft$1 = "_fadeInLeft_fof2j_1";
var fadeInRight$1 = "_fadeInRight_fof2j_1";
var fadeOut$1 = "_fadeOut_fof2j_1";
var fadeOutDown$1 = "_fadeOutDown_fof2j_1";
var fadeOutUp$1 = "_fadeOutUp_fof2j_1";
var fadeOutLeft$1 = "_fadeOutLeft_fof2j_1";
var fadeOutRight$1 = "_fadeOutRight_fof2j_1";
var ping$1 = "_ping_fof2j_1";
var blinkBackground$1 = "_blinkBackground_fof2j_1";
var typingBlink$1 = "_typingBlink_fof2j_1";
var AgentSessionTimelineHeader_vue_vue_type_style_index_0_lang_module_default = {
	topBar,
	topBarLeft,
	topBarRight,
	sep,
	metricItem,
	crumbSeparator,
	switcherButton,
	switcherLabel,
	sessionDropdownMenu,
	sessionDropdownName,
	sessionDropdownDate,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_fof2j_1",
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
var AgentSessionTimelineHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelineHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelineHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentSessionTimelineView.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelineView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineView",
	setup(__props) {
		const i18n = useI18n();
		const threadTitleOf = useThreadTitle();
		const route = useRoute();
		const router = useRouter();
		const sessionsStore = useAgentSessionsStore();
		const projectsStore = useProjectsStore();
		const { isEnabled: isLangSmithExportEnabled, isExporting, sendSession } = useAgentSessionLangSmithExport();
		const rootStore = useRootStore();
		const { config: localConfig, fetchConfig } = useAgentConfig();
		const projectId = computed(() => route.params.projectId);
		const agentId = computed(() => route.params.agentId);
		const threadId = computed(() => route.params.threadId);
		const previewOpenStorageKey = computed(function getPreviewOpenStorageKey() {
			return `N8N_AGENT_PREVIEW_OPEN:${projectId.value}:${agentId.value}`;
		});
		const thread = ref(null);
		const executions = ref([]);
		const agent = ref(null);
		const isPreviewOpen = useStorage(previewOpenStorageKey, false);
		const previewInitialized = ref(false);
		const { activeChatSessionId, effectiveSessionId, currentSessionHasMessages, currentSessionTitle, sessionMenu, onSessionPick, onNewChat } = useAgentBuilderSession({ routeBacked: computed(() => false) });
		const triggerSource = computed(() => {
			if (executions.value.length === 0) return null;
			const first = executions.value[0];
			/** Relabel InstanceAI to AI Assistant for the UI */
			if (first.source === "instance-ai") return "AI Assistant";
			return first.source ?? "chat";
		});
		const triggerIcon = computed(() => {
			const source = triggerSource.value;
			if (!source) return "bolt-filled";
			switch (source) {
				case "slack": return "slack";
				case "AI Assistant": return "sparkles";
				default: return "bolt-filled";
			}
		});
		const triggerLabel = computed(() => {
			const source = triggerSource.value;
			if (!source) return "";
			if (source === "chat" || source === "n8n_chat") return i18n.baseText("agentSessions.origin.preview");
			return source.charAt(0).toUpperCase() + source.slice(1);
		});
		const sessionTitle = computed(() => {
			if (!thread.value) return "";
			return truncate(threadTitleOf(thread.value), 64);
		});
		const projectName = computed(() => {
			if (projectsStore.personalProject?.id === projectId.value) return i18n.baseText("projects.menu.personal");
			const current = projectsStore.currentProject;
			if (current && current.id === projectId.value) return current.name ?? null;
			return projectsStore.myProjects.find((p) => p.id === projectId.value)?.name ?? null;
		});
		const projectRoute = computed(() => ({
			name: VIEWS.PROJECTS_WORKFLOWS,
			params: { projectId: projectId.value }
		}));
		const agentRoute = computed(() => ({
			name: AGENT_BUILDER_VIEW,
			params: {
				projectId: projectId.value,
				agentId: agentId.value
			}
		}));
		const agentExecutionsRoute = computed(() => ({
			...typeof agentRoute.value === "object" ? agentRoute.value : {},
			query: { section: EXECUTIONS_SECTION_KEY }
		}));
		const breadcrumbItems = computed(() => [{
			id: projectId.value,
			label: projectName.value ?? i18n.baseText("agents.builder.header.projectFallback"),
			href: router.resolve(projectRoute.value).href
		}, {
			id: agentId.value,
			label: thread.value?.agentName ?? "…",
			href: router.resolve(agentRoute.value).href
		}]);
		const sessionOptions = computed(() => {
			const sessions = sessionsStore.threads;
			if (sessions.length === 0) return [{
				id: "__empty__",
				label: i18n.baseText("agentSessions.empty"),
				disabled: true
			}];
			return sessions.map((session) => ({
				id: session.id,
				label: truncate(threadTitleOf(session), 64),
				class: session.id === threadId.value ? "session-dropdown-item-active" : void 0,
				data: {
					date: formatDate(session.updatedAt),
					active: session.id === threadId.value
				}
			}));
		});
		const totalTokens = computed(() => {
			if (!thread.value) return 0;
			return thread.value.totalPromptTokens + thread.value.totalCompletionTokens;
		});
		const hasLoadedThread = computed(() => thread.value?.id === threadId.value);
		const totalCost = computed(() => thread.value?.totalCost ?? 0);
		const durationLabel = computed(() => formatDuration(thread.value?.totalDuration ?? 0));
		function onPanelLoaded(detail) {
			thread.value = detail?.thread ?? null;
			executions.value = detail?.executions ?? [];
		}
		let previewLoadRequestId = 0;
		/** Load the agent data required by the shared preview dock. */
		watch([projectId, agentId], async ([nextProjectId, nextAgentId]) => {
			const requestId = ++previewLoadRequestId;
			previewInitialized.value = false;
			agent.value = null;
			try {
				const [loadedAgent] = await Promise.all([
					getAgent(rootStore.restApiContext, nextProjectId, nextAgentId),
					fetchConfig(nextProjectId, nextAgentId),
					sessionsStore.fetchThreads(nextProjectId, nextAgentId, { filters: defaultAgentSessionFilters() })
				]);
				if (requestId === previewLoadRequestId) agent.value = loadedAgent;
			} finally {
				if (requestId === previewLoadRequestId) previewInitialized.value = true;
			}
		}, { immediate: true });
		watch(threadId, (nextThreadId) => {
			activeChatSessionId.value = nextThreadId;
		}, { immediate: true });
		function formatDuration(ms) {
			if (!ms || ms <= 0) return "0ms";
			if (ms < 1e3) return `${ms}ms`;
			return `${(ms / 1e3).toFixed(1)}s`;
		}
		function formatDate(fullDate) {
			if (!fullDate) return "";
			const { date, time } = convertToDisplayDate(fullDate);
			return `${date} ${time}`;
		}
		function closeTimeline() {
			/**
			* Get the last visited route from Vue router so we return to the correct starting point (e.g Preview)
			* If no state is available, it's most likey because the link was visited directly.
			* Here we fallback to default Agents view.
			*/
			const previousRoute = router.options.history.state.back;
			if ((typeof previousRoute === "string" ? router.resolve(previousRoute) : null)?.matched.length) {
				router.back();
				return;
			}
			router.push(agentExecutionsRoute.value);
		}
		function onBreadcrumbSelect(item) {
			if (item.id === projectId.value) router.push(projectRoute.value);
			else if (item.id === agentId.value) router.push(agentRoute.value);
		}
		function onSessionSelect(nextThreadId) {
			if (nextThreadId === "__empty__" || nextThreadId === threadId.value) return;
			router.push({
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value,
					threadId: nextThreadId
				}
			});
		}
		function togglePreview() {
			isPreviewOpen.value = !isPreviewOpen.value;
		}
		function viewPreviewTrace() {
			if (!effectiveSessionId.value) return;
			onSessionSelect(effectiveSessionId.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.view) }, [createVNode(AgentSessionTimelineHeader_default, {
				"breadcrumb-items": breadcrumbItems.value,
				"session-title": sessionTitle.value,
				"session-options": sessionOptions.value,
				"show-metrics": Boolean(thread.value),
				"trigger-source": triggerSource.value,
				"trigger-icon": triggerIcon.value,
				"trigger-label": triggerLabel.value,
				"total-tokens": totalTokens.value,
				"total-cost": totalCost.value,
				"duration-label": durationLabel.value,
				"show-langsmith-export": unref(isLangSmithExportEnabled) && hasLoadedThread.value,
				"langsmith-export-loading": unref(isExporting),
				"is-preview-open": unref(isPreviewOpen),
				onBreadcrumbSelect,
				onSessionSelect,
				onLangsmithExport: _cache[0] || (_cache[0] = ($event) => unref(sendSession)({
					projectId: projectId.value,
					agentId: agentId.value,
					threadId: threadId.value
				})),
				onTogglePreview: togglePreview,
				onClose: closeTimeline
			}, null, 8, [
				"breadcrumb-items",
				"session-title",
				"session-options",
				"show-metrics",
				"trigger-source",
				"trigger-icon",
				"trigger-label",
				"total-tokens",
				"total-cost",
				"duration-label",
				"show-langsmith-export",
				"langsmith-export-loading",
				"is-preview-open"
			]), createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.previewOpen]: unref(isPreviewOpen) }]) }, [createVNode(AgentSessionTimelinePanel_default, {
				"project-id": projectId.value,
				"agent-id": agentId.value,
				"thread-id": threadId.value,
				onLoaded: onPanelLoaded
			}, null, 8, [
				"project-id",
				"agent-id",
				"thread-id"
			]), createVNode(AgentPreviewDock_default, {
				"is-open": unref(isPreviewOpen),
				"session-title": unref(currentSessionTitle),
				"session-options": unref(sessionMenu),
				"has-session": unref(currentSessionHasMessages),
				initialized: previewInitialized.value,
				"project-id": projectId.value,
				"agent-id": agentId.value,
				agent: agent.value,
				"local-config": unref(localConfig),
				"connected-triggers": [],
				"effective-session-id": unref(effectiveSessionId),
				onViewTrace: viewPreviewTrace,
				onNewSession: unref(onNewChat),
				onSessionSelect: unref(onSessionPick),
				onClose: togglePreview
			}, null, 8, [
				"is-open",
				"session-title",
				"session-options",
				"has-session",
				"initialized",
				"project-id",
				"agent-id",
				"agent",
				"local-config",
				"effective-session-id",
				"onNewSession",
				"onSessionSelect"
			])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/agents/views/AgentSessionTimelineView.vue?vue&type=style&index=0&lang.module.scss
var view = "_view_1f3iu_388";
var content = "_content_1f3iu_395";
var previewOpen = "_previewOpen_1f3iu_404";
var shimmer = "_shimmer_1f3iu_1";
var spin = "_spin_1f3iu_1";
var opacityPulse = "_opacityPulse_1f3iu_1";
var popoverIn = "_popoverIn_1f3iu_1";
var fadeIn = "_fadeIn_1f3iu_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1f3iu_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1f3iu_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1f3iu_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1f3iu_1";
var blurSwapIn = "_blurSwapIn_1f3iu_1";
var blurSwapOut = "_blurSwapOut_1f3iu_1";
var pulseGlow = "_pulseGlow_1f3iu_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1f3iu_1";
var fade = "_fade_1f3iu_1";
var fadeInUp = "_fadeInUp_1f3iu_1";
var fadeInDown = "_fadeInDown_1f3iu_1";
var fadeInLeft = "_fadeInLeft_1f3iu_1";
var fadeInRight = "_fadeInRight_1f3iu_1";
var fadeOut = "_fadeOut_1f3iu_1";
var fadeOutDown = "_fadeOutDown_1f3iu_1";
var fadeOutUp = "_fadeOutUp_1f3iu_1";
var fadeOutLeft = "_fadeOutLeft_1f3iu_1";
var fadeOutRight = "_fadeOutRight_1f3iu_1";
var ping = "_ping_1f3iu_1";
var blinkBackground = "_blinkBackground_1f3iu_1";
var typingBlink = "_typingBlink_1f3iu_1";
var AgentSessionTimelineView_vue_vue_type_style_index_0_lang_module_default = {
	view,
	content,
	previewOpen,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1f3iu_1",
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
var AgentSessionTimelineView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelineView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelineView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionTimelineView_default as default };
