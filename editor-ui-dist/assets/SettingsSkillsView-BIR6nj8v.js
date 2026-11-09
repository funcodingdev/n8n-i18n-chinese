import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Br as require_FileSaver_min, Gd as createVNode, Hd as createSlots, Kf as unref, Ld as computed, Nd as withModifiers, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, as as useRoute, ep as init_shared_esm_bundler, ff as renderList, os as useRouter, pd as useDebounceFn, pf as renderSlot, pp as normalizeClass, qd as defineComponent, sf as onMounted, tf as mergeModels, uf as openBlock, vp as toDisplayString, yf as useModel, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { Cm as useProjectsStore, DT as N8nDataTableServer_default, ED as N8nText_default, FD as N8nIcon_default, FE as N8nSelect_default, Gg as usePostHog, Hy as useToast, IE as N8nOption_default, Jy as useUsersStore, Kg as getDebounceTime, Ky as useTelemetry, MD as Input_default, MT as N8nUserInfo_default, My as DEBOUNCE_TIME, OD as N8nTooltip_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, RE as N8nInputLabel_default, UD as useI18n, Uy as VIEWS, WE as N8nHeading_default, Zg as TELEMETRY_EVENT, a as canWriteInstanceSkillScope, ag as useUIStore, ay as ASSISTANT_SKILLS_EXPERIMENT, d as keepSortOnClear, hE as SettingsLayout_default, lT as useMessage, m as preferenceUserName, mD as N8nActionToggle_default, mE as SettingsPageHeader_default, np as useDocumentTitle, qr as isSkillNameTakenError, rh as AGENT_SKILL_MODAL_KEY, s as canWriteProjectSkillScope, v as toSortOption, vD as DropdownMenu_default, x as PREFERENCES_PAGE_SIZES, xD as N8nBadge_default, xh as AGENT_BUILDER_VIEW, xm as splitName, y as CONTEXT_DEFAULT_SORT_BY, yx as SKILLS_SORT_OPTIONS, zD as __vitePreload, zs as TimeAgo_default } from "./app-DbOOaPK6.js";
import { t as useLatestFetch } from "./useLatestFetch-qxqEmkzg.js";
import { t as ResourceFiltersDropdown_default } from "./ResourceFiltersDropdown-DWw4AH_l.js";
import { n as stringify } from "./browser-C1q7id8k.js";
import { t as useSkillsStore } from "./skills.store-9LocpGvl.js";
//#region src/experiments/assistantSkills/useAssistantSkillsExperiment.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
init_runtime_core_esm_bundler();
function useAssistantSkillsExperiment() {
	const posthog = usePostHog();
	return { isEnabled: computed(() => posthog.isFeatureEnabled(ASSISTANT_SKILLS_EXPERIMENT.name)) };
}
//#endregion
//#region src/features/agents/utils/agentSkillExport.ts
var SKILL_FILE_NAME = "SKILL.md";
/** The SKILL.md text that the skill upload reads back: YAML frontmatter, then the instructions. */
function agentSkillToMarkdown(skill) {
	return `---\n${stringify({
		name: skill.name,
		description: skill.description,
		...skill.allowedTools?.length ? { allowed_tools: skill.allowedTools } : {}
	})}---\n\n${skill.instructions.trim()}\n`;
}
/**
* A lone SKILL.md, or a zip with a `<name>/` folder when the skill has reference files.
* The upload reads the SKILL.md, or the folder once the zip is unzipped.
*/
async function exportAgentSkill(skill) {
	const markdown = agentSkillToMarkdown(skill);
	const safeName = skill.name.trim().replace(/[\\/:*?"<>|]+/g, "-");
	const baseName = /^\.*$/.test(safeName) ? "skill" : safeName;
	const references = skill.references ?? [];
	if (references.length === 0) return {
		blob: new Blob([markdown], { type: "text/markdown" }),
		fileName: SKILL_FILE_NAME,
		format: "markdown"
	};
	const { strToU8, zipSync } = await __vitePreload(async () => {
		const { strToU8, zipSync } = await import("./browser-CGZJ8s6i.js");
		return {
			strToU8,
			zipSync
		};
	}, []);
	const files = { [`${baseName}/${SKILL_FILE_NAME}`]: strToU8(markdown) };
	for (const reference of references) files[`${baseName}/${reference.path}`] = strToU8(reference.content);
	return {
		blob: new Blob([zipSync(files)], { type: "application/zip" }),
		fileName: `${baseName}.zip`,
		format: "zip"
	};
}
//#endregion
//#region src/features/settings/context/components/SkillAgentsCell.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$1 = ["aria-label"];
var HIDDEN_AGENTS_ITEM = "hidden-agents";
var SkillAgentsCell_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillAgentsCell",
	props: { skill: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const skillsStore = useSkillsStore();
		const { showError } = useToast();
		const usage = ref(null);
		const loading = ref(false);
		/** A draft and a published version of the same agent count once, as `usedByAgents` does. */
		const agents = computed(() => {
			const byId = /* @__PURE__ */ new Map();
			for (const agent of [...usage.value?.drafts ?? [], ...usage.value?.pins ?? []]) if (!byId.has(agent.agentId)) byId.set(agent.agentId, agent);
			return byId;
		});
		const items = computed(() => {
			const list = [...agents.value].map(([id, agent]) => ({
				id,
				label: agent.agentName,
				icon: {
					type: "icon",
					value: "bot"
				}
			}));
			const hidden = usage.value?.hiddenAgents ?? 0;
			if (hidden > 0) list.push({
				id: HIDDEN_AGENTS_ITEM,
				label: i18n.baseText("settings.context.skills.agents.hidden", {
					interpolate: { count: hidden },
					adjustToNumber: hidden
				}),
				disabled: true
			});
			return list;
		});
		/** The list row has the count only, so the names load when the menu first opens. */
		async function onOpenChange(open) {
			if (!open || usage.value || loading.value) return;
			loading.value = true;
			try {
				usage.value = (await skillsStore.fetchSkill(props.skill.id)).usedBy;
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.error.agents"));
			} finally {
				loading.value = false;
			}
		}
		async function onSelect(agentId) {
			const agent = agents.value.get(agentId);
			if (!agent) return;
			await router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: agent.projectId,
					agentId
				}
			});
		}
		return (_ctx, _cache) => {
			return props.skill.usedByAgents === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				color: "text-light",
				"data-test-id": "skill-agents-none"
			}, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" — ", -1)])]),
				_: 1
			})) : (openBlock(), createElementBlock("span", {
				key: 1,
				onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
			}, [createVNode(unref(DropdownMenu_default), {
				items: items.value,
				loading: loading.value,
				"loading-item-count": Math.min(props.skill.usedByAgents, 3),
				modal: false,
				placement: "bottom-start",
				"content-test-id": "skill-agents-menu",
				"onUpdate:modelValue": onOpenChange,
				onSelect
			}, {
				trigger: withCtx(() => [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.trigger),
					"aria-label": unref(i18n).baseText("settings.context.skills.agents.label"),
					"data-test-id": "skill-agents-trigger"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.skill.usedByAgents), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: "small",
					color: "text-light"
				})], 10, _hoisted_1$1)]),
				_: 1
			}, 8, [
				"items",
				"loading",
				"loading-item-count"
			])]));
		};
	}
}), [["__cssModules", { "$style": { trigger: "_trigger_1sa5x_1" } }]]);
//#endregion
//#region src/features/settings/context/skills.utils.ts
/** How the badge and the modal name the scope of a skill. */
function useSkillScopeDisplay() {
	const i18n = useI18n();
	const projectsStore = useProjectsStore();
	function projectLabel(projectId, projectName, projectType) {
		if (projectId === projectsStore.personalProject?.id) return i18n.baseText("settings.context.skills.scope.personalProject");
		if (projectType === "personal" && projectName) {
			const { name, email } = splitName(projectName);
			return name ?? email ?? projectName;
		}
		return projectName ?? i18n.baseText("settings.context.skills.scope.project");
	}
	function scopeDisplay(skill) {
		switch (skill.scope) {
			case "instance": return {
				icon: "globe",
				label: i18n.baseText("settings.context.skills.scope.instance")
			};
			case "agent": return {
				icon: "bot",
				label: skill.agentName ? i18n.baseText("settings.context.skills.scope.agent", { interpolate: { name: skill.agentName } }) : i18n.baseText("settings.context.skills.scope.agentFallback")
			};
			case "project":
				if (!skill.projectId) return {
					icon: "layers",
					label: i18n.baseText("settings.context.skills.scope.project")
				};
				return {
					icon: skill.projectType === "personal" ? "user" : "layers",
					label: projectLabel(skill.projectId, skill.projectName, skill.projectType)
				};
		}
	}
	return { scopeDisplay };
}
//#endregion
//#region src/features/settings/context/components/SkillScopeBadge.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SkillScopeBadge_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillScopeBadge",
	props: { skill: {} },
	setup(__props) {
		const props = __props;
		const { scopeDisplay } = useSkillScopeDisplay();
		const display = computed(() => scopeDisplay(props.skill));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nBadge_default), {
				variant: "outline",
				class: normalizeClass(_ctx.$style.badge),
				"data-test-id": "skill-scope-badge"
			}, {
				leading: withCtx(() => [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: display.value.icon,
					size: "small"
				}, null, 8, ["class", "icon"])]),
				default: withCtx(() => [createTextVNode(" " + toDisplayString(display.value.label), 1)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	badge: "_badge_rs0ww_1",
	icon: "_icon_rs0ww_9"
} }]]);
//#endregion
//#region src/features/settings/context/components/SkillsTable.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { "data-test-id": "skills-table" };
var SkillsTable_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillsTable",
	props: /*@__PURE__*/ mergeModels({
		skills: {},
		itemsLength: {},
		loading: { type: Boolean },
		showAssistantAvailability: { type: Boolean },
		showEmpty: { type: Boolean }
	}, {
		"tableOptions": { default: () => ({}) },
		"tableOptionsModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels([
		"open",
		"download",
		"delete",
		"update:options"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const i18n = useI18n();
		const usersStore = useUsersStore();
		/** The backend refuses to delete a skill that an agent uses, so the action is off before the user tries. */
		function canDeleteNow(skill) {
			return skill.canDelete && skill.usedByAgents === 0;
		}
		function deleteHint(skill) {
			if (canDeleteNow(skill)) return void 0;
			if (!skill.canDelete) return i18n.baseText("settings.context.skills.readOnly");
			return i18n.baseText("settings.context.skills.delete.inUse", {
				interpolate: { count: skill.usedByAgents },
				adjustToNumber: skill.usedByAgents
			});
		}
		function actionsFor(skill) {
			return [
				{
					value: "edit",
					label: i18n.baseText(skill.canEdit ? "settings.context.skills.actions.edit" : "settings.context.skills.actions.view")
				},
				{
					value: "download",
					label: i18n.baseText("settings.context.skills.actions.download")
				},
				{
					value: "delete",
					label: i18n.baseText("settings.context.skills.actions.delete"),
					disabled: !canDeleteNow(skill),
					tooltip: deleteHint(skill),
					destructive: true
				}
			];
		}
		function onAction(skill, action) {
			if (action === "edit") emit("open", skill);
			else if (action === "download") emit("download", skill);
			else emit("delete", skill);
		}
		function onRowClick(_event, payload) {
			emit("open", payload.item);
		}
		const headers = computed(() => [
			{
				title: i18n.baseText("settings.context.skills.columns.skill"),
				key: "name",
				width: 300
			},
			{
				title: i18n.baseText("settings.context.skills.columns.scope"),
				key: "scope",
				width: 220,
				disableSort: true
			},
			{
				title: i18n.baseText("settings.context.skills.columns.agents"),
				key: "usedByAgents",
				width: 110,
				disableSort: true
			},
			{
				title: i18n.baseText("settings.context.skills.columns.createdBy"),
				key: "createdBy",
				width: 220,
				disableSort: true
			},
			{
				title: i18n.baseText("settings.context.skills.columns.updatedAt"),
				key: "updatedAt",
				width: 130
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 64,
				disableSort: true,
				resize: false,
				value: () => void 0
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nDataTableServer_default), {
				page: tableOptions.value.page,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => tableOptions.value.page = $event),
				"items-per-page": tableOptions.value.itemsPerPage,
				"onUpdate:itemsPerPage": _cache[2] || (_cache[2] = ($event) => tableOptions.value.itemsPerPage = $event),
				"sort-by": tableOptions.value.sortBy,
				headers: headers.value,
				items: props.skills,
				"items-length": props.itemsLength,
				loading: props.loading,
				"page-sizes": unref(PREFERENCES_PAGE_SIZES),
				"row-props": { class: _ctx.$style.row },
				"onUpdate:options": _cache[3] || (_cache[3] = ($event) => emit("update:options", $event)),
				"onClick:row": onRowClick
			}, createSlots({
				[`item.name`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skillCell) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skillTitle) }, [createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-dark",
					"data-test-id": "skill-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
					_: 2
				}, 1024), props.showAssistantAvailability && item.scope !== "agent" && item.availableToAssistant ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("settings.context.skills.assistant.label")
				}, {
					default: withCtx(() => [createVNode(unref(N8nBadge_default), {
						variant: "secondary",
						"leading-icon": "n8n-assistant",
						"data-test-id": "skill-assistant-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.assistant.badge")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
					_: 2
				}, 1032, ["class"])], 2)]),
				[`item.scope`]: withCtx(({ item }) => [createVNode(SkillScopeBadge_default, { skill: item }, null, 8, ["skill"])]),
				[`item.usedByAgents`]: withCtx(({ item }) => [createVNode(SkillAgentsCell_default, { skill: item }, null, 8, ["skill"])]),
				[`item.createdBy`]: withCtx(({ item }) => [item.createdBy ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.creator),
					"data-test-id": "skill-created-by"
				}, [createVNode(unref(N8nUserInfo_default), {
					"first-name": item.createdBy.firstName,
					"last-name": item.createdBy.lastName,
					email: item.createdBy.email,
					"is-current-user": item.createdBy.id === unref(usersStore).currentUserId
				}, null, 8, [
					"first-name",
					"last-name",
					"email",
					"is-current-user"
				])], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light",
					"data-test-id": "skill-created-by-none"
				}, {
					default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" — ", -1)])]),
					_: 1
				}))]),
				[`item.updatedAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					"data-test-id": "skill-updated-at"
				}, {
					default: withCtx(() => [createVNode(TimeAgo_default, { date: item.updatedAt }, null, 8, ["date"])]),
					_: 2
				}, 1024)]),
				[`item.actions`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.actions),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [createVNode(unref(N8nActionToggle_default), {
					actions: actionsFor(item),
					"data-test-id": "skill-actions",
					onAction: (action) => onAction(item, action)
				}, null, 8, ["actions", "onAction"])], 2)]),
				_: 2
			}, [props.showEmpty ? {
				name: "cover",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
				key: "0"
			} : void 0]), 1032, [
				"page",
				"items-per-page",
				"sort-by",
				"headers",
				"items",
				"items-length",
				"loading",
				"page-sizes",
				"row-props"
			])]);
		};
	}
}), [["__cssModules", { "$style": {
	skillCell: "_skillCell_t38t9_1",
	creator: "_creator_t38t9_8",
	skillTitle: "_skillTitle_t38t9_13",
	description: "_description_t38t9_20",
	actions: "_actions_t38t9_26",
	row: "_row_t38t9_31"
} }]]);
//#endregion
//#region src/features/settings/context/views/SettingsSkillsView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var INSTANCE_SCOPE = "instance";
var PROJECT_SCOPE_PREFIX = "project:";
var SettingsSkillsView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SettingsSkillsView",
	setup(__props) {
		const FILTER_KEYS = [
			"scope",
			"agentId",
			"createdById"
		];
		const NO_FILTERS = {
			scope: "",
			agentId: "",
			createdById: ""
		};
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
		const uiStore = useUIStore();
		const projectsStore = useProjectsStore();
		const skillsStore = useSkillsStore();
		const { isEnabled: assistantSkillsEnabled } = useAssistantSkillsExperiment();
		const telemetry = useTelemetry();
		const { showError, showMessage } = useToast();
		const { scopeDisplay } = useSkillScopeDisplay();
		const tableOptions = ref({
			page: 0,
			itemsPerPage: 10,
			sortBy: CONTEXT_DEFAULT_SORT_BY
		});
		const search = ref("");
		const filters = ref({ ...NO_FILTERS });
		const agentOptions = ref([]);
		const selectedAgent = ref(null);
		const agentsLoading = ref(false);
		const agentFilterOptions = computed(() => selectedAgent.value && !agentOptions.value.some((agent) => agent.id === selectedAgent.value?.id) ? [selectedAgent.value, ...agentOptions.value] : agentOptions.value);
		const creators = ref([]);
		const loadFailed = ref(false);
		const loadedFiltered = ref(false);
		const hasLoaded = ref(false);
		const showLoading = computed(() => skillsStore.loading && !hasLoaded.value);
		const emptyState = computed(() => {
			if (!hasLoaded.value || loadFailed.value || skillsStore.count > 0) return "none";
			return loadedFiltered.value ? "noResults" : "noSkills";
		});
		const scopeFilterOptions = computed(() => [
			["instance", "settings.context.skills.filter.instance"],
			["project", "settings.context.skills.filter.project"],
			["agent", "settings.context.skills.filter.agent"]
		].map(([value, key]) => ({
			value,
			label: i18n.baseText(key)
		})));
		/** The name of a creator, or the email when the name is unknown. */
		function creatorLabel(creator) {
			return preferenceUserName(creator) || creator.id;
		}
		function scopeQuery(scope) {
			return scope === "instance" || scope === "project" || scope === "agent" ? { scope } : {};
		}
		function listQuery(page, itemsPerPage) {
			const term = search.value.trim();
			const { scope, agentId, createdById } = filters.value;
			const sortBy = toSortOption(tableOptions.value.sortBy, SKILLS_SORT_OPTIONS);
			return {
				skip: page * itemsPerPage,
				take: itemsPerPage,
				...term ? { search: term } : {},
				...scopeQuery(scope),
				...agentId ? { agentId } : {},
				...createdById ? { createdById } : {},
				...sortBy ? { sortBy } : {}
			};
		}
		/**
		* Where a new skill can live: the instance, the personal project and the team projects
		* that the user may write to. An agent skill is made from inside its agent, not here.
		*/
		const scopeOptions = computed(() => {
			const options = [];
			if (canWriteInstanceSkillScope()) options.push({
				value: INSTANCE_SCOPE,
				label: i18n.baseText("settings.context.skills.scope.instance"),
				icon: "globe",
				target: {
					projectId: null,
					agentId: null
				}
			});
			const personalProject = projectsStore.personalProject;
			if (personalProject && canWriteProjectSkillScope(personalProject.id)) options.push({
				value: `${PROJECT_SCOPE_PREFIX}${personalProject.id}`,
				label: i18n.baseText("settings.context.skills.scope.personalProject"),
				icon: "user",
				target: {
					projectId: personalProject.id,
					agentId: null
				}
			});
			for (const project of projectsStore.myProjects) {
				if (project.type !== "team" || !canWriteProjectSkillScope(project.id)) continue;
				options.push({
					value: `${PROJECT_SCOPE_PREFIX}${project.id}`,
					label: project.name ?? project.id,
					icon: "layers",
					target: {
						projectId: project.id,
						agentId: null
					}
				});
			}
			return options;
		});
		/** Settings creates and moves skills only to a project or the instance, never to one agent. */
		function parseScope(value) {
			if (value.startsWith(PROJECT_SCOPE_PREFIX)) return {
				scope: "project",
				projectId: value.slice(8)
			};
			return { scope: "instance" };
		}
		const { next: nextLoad } = useLatestFetch();
		async function load() {
			const isLatest = nextLoad();
			const { page = 0, itemsPerPage = 10 } = tableOptions.value;
			const query = listQuery(page, itemsPerPage);
			const filtered = [
				query.search,
				query.scope,
				query.agentId,
				query.createdById
			].some((value) => value !== void 0);
			try {
				await skillsStore.fetchSkills(query);
				if (!isLatest()) return;
				const lastPage = Math.max(0, Math.ceil(skillsStore.count / itemsPerPage) - 1);
				if (page > lastPage) {
					tableOptions.value = {
						...tableOptions.value,
						page: lastPage
					};
					await skillsStore.fetchSkills(listQuery(lastPage, itemsPerPage));
					if (!isLatest()) return;
				}
				loadFailed.value = false;
				loadedFiltered.value = filtered;
			} catch (error) {
				if (!isLatest()) return;
				loadFailed.value = true;
				showError(error, i18n.baseText("settings.context.skills.error.load"));
			} finally {
				if (isLatest()) hasLoaded.value = true;
			}
		}
		async function onOptionsUpdate(options) {
			tableOptions.value = {
				...options,
				sortBy: keepSortOnClear(tableOptions.value.sortBy, options.sortBy)
			};
			await load();
		}
		/** A new filter starts at the first page. */
		async function resetPage() {
			tableOptions.value = {
				...tableOptions.value,
				page: 0
			};
			await load();
		}
		const onSearch = useDebounceFn(resetPage, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		async function setFilter(key, value) {
			filters.value = {
				...filters.value,
				[key]: typeof value === "string" ? value : ""
			};
			await resetPage();
		}
		/** Keeps the picked agent, so its name still shows when a later search leaves it out. */
		async function onAgentFilter(value) {
			selectedAgent.value = agentFilterOptions.value.find((agent) => agent.id === value) ?? null;
			await setFilter("agentId", value);
		}
		const { next: nextAgentSearch } = useLatestFetch();
		/** The agent filter searches on the server and lists a capped page of matches. */
		async function searchAgents(term = "") {
			const isLatest = nextAgentSearch();
			agentsLoading.value = true;
			try {
				const agents = await skillsStore.fetchAgents(term.trim() ? { search: term.trim() } : {});
				if (isLatest()) agentOptions.value = agents;
			} catch {} finally {
				if (isLatest()) agentsLoading.value = false;
			}
		}
		const onAgentSearch = useDebounceFn(searchAgents, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const { next: nextCreatorsLoad } = useLatestFetch();
		async function loadCreators() {
			const isLatest = nextCreatorsLoad();
			try {
				const users = await skillsStore.fetchCreators();
				if (!isLatest()) return;
				creators.value = [...users].sort((a, b) => creatorLabel(a).localeCompare(creatorLabel(b)));
			} catch {}
		}
		async function resetFilters() {
			filters.value = { ...NO_FILTERS };
			await resetPage();
		}
		/** Options for the filters. Each one is optional, so a failed read leaves its list empty. */
		async function loadFilterOptions() {
			await Promise.all([searchAgents(), loadCreators()]);
		}
		function openModal(data) {
			uiStore.openModalWithData({
				name: AGENT_SKILL_MODAL_KEY,
				data
			});
		}
		/** Starts at the SKILL.md upload step, which also offers "Add manually". */
		function openCreateModal() {
			const options = scopeOptions.value;
			if (options.length === 0) return;
			openModal({
				scopeOptions: options,
				initialScope: options[0].value,
				existingSkillNames: [],
				getDefaultName: async (scopeValue) => await skillsStore.fetchNewSkillName({
					...parseScope(scopeValue),
					name: i18n.baseText("agents.builder.skills.defaultName")
				}),
				onConfirm: async ({ skill, scope, method }) => await onCreate(skill, scope ?? options[0].value, method)
			});
		}
		/**
		* The row is the feedback for a create or a save, as on the preferences page. The list
		* keeps the search and the scope filter, so a skill they hide gets a message instead.
		*/
		function confirmIfHidden(skillId, key) {
			if (skillsStore.skills.some((item) => item.id === skillId)) return;
			showMessage({
				title: i18n.baseText(key === "created" ? "settings.context.skills.create.hidden" : "settings.context.skills.save.hidden"),
				type: "success"
			});
		}
		/**
		* A refused save keeps the modal open, so the user keeps what they typed. A taken name
		* shows on the name field, any other error in a toast.
		*/
		function saveFailed(error) {
			if (isSkillNameTakenError(error)) return {
				saved: false,
				nameError: i18n.baseText("settings.context.skills.error.nameTaken")
			};
			showError(error, i18n.baseText("settings.context.skills.error.save"));
			return { saved: false };
		}
		async function onCreate(skill, scopeValue, method) {
			let createdId;
			try {
				createdId = (await skillsStore.createSkill({
					...parseScope(scopeValue),
					skill,
					...method ? { method } : {}
				})).id;
			} catch (error) {
				return saveFailed(error);
			}
			loadCreators();
			await load();
			confirmIfHidden(createdId, "created");
		}
		/** The value of the scope picker for a saved skill. An agent skill has no picker value of its own. */
		function scopeValueOf(skill) {
			if (skill.scope === "project" && skill.projectId) return `${PROJECT_SCOPE_PREFIX}${skill.projectId}`;
			return skill.scope;
		}
		/**
		* Why the scope of a saved skill cannot change, if it cannot. A move needs the delete
		* permission where the skill is, because it takes the skill out of that scope. A skill in
		* use can still move: the modal warns about a scope that drops an agent.
		*/
		function scopeLock(detail) {
			if (!detail.canDelete) return { scopeLockedReason: i18n.baseText("settings.context.skills.modal.scope.noDelete") };
			return {};
		}
		async function openEditModal(item) {
			try {
				const detail = await skillsStore.fetchSkill(item.id);
				telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_OPENED_SKILL, {
					skill_id: detail.id,
					scope: detail.scope,
					...detail.projectId ? { project_id: detail.projectId } : {},
					read_only: !detail.canEdit
				});
				const currentValue = scopeValueOf(detail);
				const options = scopeOptions.value.some((option) => option.value === currentValue) ? scopeOptions.value : [{
					value: currentValue,
					...scopeDisplay(detail)
				}, ...scopeOptions.value];
				openModal({
					skill: detail.skill,
					skillId: detail.id,
					readOnly: !detail.canEdit,
					...assistantSkillsEnabled.value ? { availableToAssistant: detail.availableToAssistant } : {},
					scopeOptions: options,
					initialScope: currentValue,
					...scopeLock(detail),
					usedBy: detail.usedBy,
					existingSkillNames: [],
					onConfirm: async ({ skill, scope, availableToAssistant }) => await onSave(detail.id, skill, detail.skillHash, scope !== currentValue ? scope : void 0, availableToAssistant)
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.error.loadOne"));
			}
		}
		/** Saves the next version. There are no drafts: what the modal shows is what gets saved. */
		/** `newScope` is set when the user picked another scope: the save also moves the skill. */
		async function onSave(id, skill, baseSkillHash, newScope, availableToAssistant) {
			let created;
			try {
				({created} = await skillsStore.saveSkill(id, {
					name: skill.name,
					description: skill.description,
					instructions: skill.instructions,
					references: skill.references ?? [],
					baseSkillHash,
					...newScope ? parseScope(newScope) : {},
					...availableToAssistant !== void 0 ? { availableToAssistant } : {}
				}));
			} catch (error) {
				return saveFailed(error);
			}
			if (created || newScope !== void 0 || availableToAssistant !== void 0) {
				await load();
				confirmIfHidden(id, "saved");
			} else showMessage({
				title: i18n.baseText("settings.context.skills.save.noChanges"),
				type: "info"
			});
		}
		/** The list row has no content, so the download reads the latest version first. */
		async function onDownload(item) {
			try {
				const detail = await skillsStore.fetchSkill(item.id);
				const { blob, fileName, format } = await exportAgentSkill(detail.skill);
				(0, import_FileSaver_min.saveAs)(blob, fileName);
				telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_DOWNLOADED_SKILL, {
					skill_id: detail.id,
					scope: detail.scope,
					...detail.projectId ? { project_id: detail.projectId } : {},
					format
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.error.download"));
			}
		}
		async function onDelete(skill) {
			if (await message.confirm(i18n.baseText("settings.context.skills.delete.confirm.message"), i18n.baseText("settings.context.skills.delete.confirm.title"), {
				type: "warning",
				confirmButtonText: i18n.baseText("settings.context.skills.delete.confirm.button"),
				cancelButtonText: i18n.baseText("settings.context.skills.delete.cancel")
			}) !== "confirm") return;
			try {
				await skillsStore.deleteSkill(skill.id);
				showMessage({
					title: i18n.baseText("settings.context.skills.delete.success"),
					type: "success"
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.error.delete"));
			}
			loadCreators();
			await load();
		}
		async function goBack() {
			await router.push({ name: VIEWS.SETTINGS_CONTEXT });
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.context.skills.title"));
			loadFilterOptions();
			await Promise.all([load(), projectsStore.getMyProjects().catch(() => void 0)]);
			if (!loadFailed.value) telemetry.track(TELEMETRY_EVENT.CONTEXT.USER_VIEWED_SKILLS, { count: skillsStore.count });
			const { skillId, create } = route.query;
			if (typeof skillId === "string") await openEditModal({ id: skillId });
			else if (create === "true") openCreateModal();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				class: normalizeClass(_ctx.$style.layout),
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("settings.context.skills.back"),
				"data-test-id": "settings-skills-view",
				onBack: goBack
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.context.skills.title"),
						description: unref(i18n).baseText("settings.context.skills.description"),
						"show-docs-link": false
					}, null, 8, ["title", "description"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
						createVNode(unref(Input_default), {
							modelValue: search.value,
							"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => search.value = $event), unref(onSearch)],
							class: normalizeClass(_ctx.$style.search),
							placeholder: unref(i18n).baseText("settings.context.skills.search.placeholder"),
							clearable: "",
							"data-test-id": "skills-search"
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"modelValue",
							"class",
							"placeholder",
							"onUpdate:modelValue"
						]),
						createVNode(ResourceFiltersDropdown_default, {
							"model-value": filters.value,
							keys: FILTER_KEYS,
							reset: resetFilters,
							shareable: false,
							"just-icon": ""
						}, {
							default: withCtx(() => [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.filter) }, [createVNode(unref(N8nInputLabel_default), {
									label: unref(i18n).baseText("settings.context.skills.filter.scope"),
									bold: false,
									size: "small",
									color: "text-base"
								}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
									"model-value": filters.value.scope,
									size: "medium",
									filterable: "",
									clearable: "",
									placeholder: unref(i18n).baseText("settings.context.skills.filter.all"),
									"data-test-id": "skills-filter-scope",
									"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => setFilter("scope", $event))
								}, {
									default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(scopeFilterOptions.value, (option) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: option.value,
											value: option.value,
											label: option.label
										}, null, 8, ["value", "label"]);
									}), 128))]),
									_: 1
								}, 8, ["model-value", "placeholder"])], 2),
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.filter) }, [createVNode(unref(N8nInputLabel_default), {
									label: unref(i18n).baseText("settings.context.skills.filter.agentLabel"),
									bold: false,
									size: "small",
									color: "text-base"
								}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
									"model-value": filters.value.agentId,
									size: "medium",
									filterable: "",
									remote: "",
									"remote-method": unref(onAgentSearch),
									loading: agentsLoading.value,
									clearable: "",
									placeholder: unref(i18n).baseText("settings.context.skills.filter.anyAgent"),
									"data-test-id": "skills-filter-agent",
									"onUpdate:modelValue": onAgentFilter
								}, {
									default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(agentFilterOptions.value, (agent) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: agent.id,
											value: agent.id,
											label: agent.name
										}, null, 8, ["value", "label"]);
									}), 128))]),
									_: 1
								}, 8, [
									"model-value",
									"remote-method",
									"loading",
									"placeholder"
								])], 2),
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.filter) }, [createVNode(unref(N8nInputLabel_default), {
									label: unref(i18n).baseText("settings.context.skills.filter.createdBy"),
									bold: false,
									size: "small",
									color: "text-base"
								}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
									"model-value": filters.value.createdById,
									size: "medium",
									filterable: "",
									clearable: "",
									placeholder: unref(i18n).baseText("settings.context.skills.filter.anyone"),
									"data-test-id": "skills-filter-created-by",
									"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => setFilter("createdById", $event))
								}, {
									default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(creators.value, (creator) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: creator.id,
											value: creator.id,
											label: creatorLabel(creator)
										}, null, 8, ["value", "label"]);
									}), 128))]),
									_: 1
								}, 8, ["model-value", "placeholder"])], 2)
							]),
							_: 1
						}, 8, ["model-value"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.spacer) }, null, 2),
						scopeOptions.value.length > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							label: unref(i18n).baseText("settings.context.skills.actions.create"),
							"data-test-id": "skills-create-button",
							onClick: openCreateModal
						}, null, 8, ["label"])) : createCommentVNode("", true)
					], 2),
					createVNode(SkillsTable_default, {
						"table-options": tableOptions.value,
						"onUpdate:tableOptions": _cache[3] || (_cache[3] = ($event) => tableOptions.value = $event),
						skills: unref(skillsStore).skills,
						"items-length": unref(skillsStore).count,
						loading: showLoading.value,
						"show-empty": emptyState.value !== "none",
						"show-assistant-availability": unref(assistantSkillsEnabled),
						onOpen: openEditModal,
						onDownload,
						onDelete,
						"onUpdate:options": onOptionsUpdate
					}, {
						empty: withCtx(() => [emptyState.value === "noResults" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.empty),
							"data-test-id": "skills-no-results"
						}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.search.noResults")), 1)]),
							_: 1
						})], 2)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.empty),
							"data-test-id": "skills-empty-state"
						}, [
							createVNode(unref(N8nHeading_default), {
								tag: "h2",
								size: "medium",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.empty.title")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), { color: "text-light" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.empty.description")), 1)]),
								_: 1
							}),
							scopeOptions.value.length > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								label: unref(i18n).baseText("settings.context.skills.actions.create"),
								"data-test-id": "skills-empty-create-button",
								onClick: openCreateModal
							}, null, 8, ["label"])) : createCommentVNode("", true)
						], 2))]),
						_: 1
					}, 8, [
						"table-options",
						"skills",
						"items-length",
						"loading",
						"show-empty",
						"show-assistant-availability"
					])
				]),
				_: 1
			}, 8, ["class", "back-label"]);
		};
	}
}), [["__cssModules", { "$style": {
	layout: "_layout_1l2i4_2",
	toolbar: "_toolbar_1l2i4_9",
	spacer: "_spacer_1l2i4_16",
	search: "_search_1l2i4_20",
	filter: "_filter_1l2i4_24",
	empty: "_empty_1l2i4_33"
} }]]);
//#endregion
export { SettingsSkillsView_default as default };
