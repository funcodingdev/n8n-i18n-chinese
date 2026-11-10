import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Nd as withKeys, Pd as withModifiers, Rd as computed, Ud as createSlots, Vd as createCommentVNode, Vr as require_FileSaver_min, bf as useModel, bp as toDisplayString, cf as onMounted, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, md as useDebounceFn, mf as renderSlot, nf as mergeModels, np as init_shared_esm_bundler, ns as useRouter, pf as renderList, ts as useRoute, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { $_ as TELEMETRY_EVENT, AO as N8nTooltip_default, AS as skillScopeSchema, BD as Checkbox_default, BO as _plugin_vue_export_helper_default, CO as N8nBadge_default, DS as MCP_SKILLS_EXTENSION_FLAG, Ex as ResponseError, GD as N8nHeading_default, GO as useI18n, ID as N8nSelect_default, IO as N8nButton_default, J_ as getDebounceTime, Jb as useToast, Jp as useDocumentTitle, LD as N8nOption_default, LO as N8nIcon_default, NE as N8nUserInfo_default, OE as N8nDataTableServer_default, OO as N8nText_default, OS as SKILLS_SORT_OPTIONS, PO as Input_default, Qb as useTelemetry, Rb as DEBOUNCE_TIME, SE as Dialog_default, Sg as AGENT_BUILDER_VIEW, Sh as useProjectsStore, VO as __vitePreload, Yb as VIEWS, ZS as getResourcePermissions, _O as N8nActionDropdown_default, _n as PREFERENCES_PAGE_SIZES, bE as DialogBody_default, bO as DropdownMenu_default, bc as TimeAgo_default, ex as useUsersStore, gD as SettingsLayout_default, gO as N8nActionToggle_default, hD as SettingsPageHeader_default, hn as CONTEXT_DEFAULT_SORT_BY, kS as SKILL_SYNC_FLAG, mn as toSortOption, oO as N8nCallout_default, q_ as usePostHog, rg as AGENT_SKILL_MODAL_KEY, ri as isSkillNameTakenError, rn as canWriteProjectSkillScope, s_ as useUIStore, sn as keepSortOnClear, tn as canWriteInstanceSkillScope, uE as useMessage, ub as ASSISTANT_SKILLS_EXPERIMENT, un as preferenceUserName, yE as DialogFooter_default, zD as N8nInputLabel_default } from "./app-DGoK9ugD.js";
import { t as ResourceFiltersDropdown_default } from "./ResourceFiltersDropdown-C3lq0BRw.js";
import { t as useLatestFetch } from "./useLatestFetch-Bxfz-zbp.js";
import { n as stringify } from "./browser-C1q7id8k.js";
import { a as useSkillScopeDisplay, i as useSkillDeleteRule, n as PROJECT_SCOPE_PREFIX, o as useSkillSourceReasons, r as parseScope, t as SkillScopeBadge_default } from "./SkillScopeBadge-BwY3-xFs.js";
import { t as useSkillsStore } from "./skills.store-BHSjS6DV.js";
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
		description: skill.description
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
//#region src/features/settings/context/components/SkillSourceConnectDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$2 = ["data-test-id"];
/** The options of the credential select that open the credential modal instead of picking. */
var NEW_CREDENTIAL_PREFIX = "__new__:";
var SKIPPED_FILES_SHOWN = 3;
var SkillSourceConnectDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillSourceConnectDialog",
	props: {
		open: { type: Boolean },
		scopeOptions: {}
	},
	emits: ["update:open", "connected"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		/** A loose check only: the server reads the link and answers with the exact reason. */
		const GITHUB_LINK = /^https?:\/\/(www\.)?github\.com\/[\w.-]+\/[\w.-]+([/?#].*)?$/i;
		/** A web link to another host, such as GitLab. */
		const OTHER_HOST_LINK = /^https?:\/\/(?!(www\.)?github\.com([/?#:]|$))[^\s/?#]+/i;
		/** A source reads a private repository with a token only, never with OAuth. */
		const TOKEN_CREDENTIAL_TYPES = ["githubApi", "githubAppApi"];
		const i18n = useI18n();
		const { showError } = useToast();
		const skillsStore = useSkillsStore();
		const { reasonText, findingsText, linkedDomainsText } = useSkillSourceReasons();
		const projectsStore = useProjectsStore();
		const uiStore = useUIStore();
		const step = ref("start");
		const mode = ref("url");
		const url = ref("");
		const scope = ref("");
		const discovering = ref(false);
		const connecting = ref(false);
		const linkError = ref("");
		const discovery = ref(null);
		const selected = ref([]);
		/** The link and credential that the shown discovery read, which connect sends again. */
		const discovered = ref(null);
		/** `''` is "None, the repository is public", which only the link mode offers. */
		const credentialId = ref("");
		const credentials = ref([]);
		const credentialsLoading = ref(false);
		/** The credential that the user created from this dialog, for the success box. */
		const createdCredential = ref(null);
		const repositories = ref([]);
		const repositoriesTruncated = ref(false);
		const repositoriesLoading = ref(false);
		const owner = ref("");
		const repositoryName = ref("");
		/** "I reviewed the warnings", for the picked skills that need review. */
		const reviewed = ref(false);
		/** Counts the reads of a link, so the answer of a read from before a close is dropped. */
		let discoverRun = 0;
		let credentialsRun = 0;
		let repositoriesRun = 0;
		function resetRepositories() {
			repositoriesRun += 1;
			repositories.value = [];
			repositoriesTruncated.value = false;
			repositoriesLoading.value = false;
			owner.value = "";
			repositoryName.value = "";
		}
		watch(() => props.open, (open) => {
			if (!open) return;
			discoverRun += 1;
			credentialsRun += 1;
			discovering.value = false;
			step.value = "start";
			mode.value = "url";
			url.value = "";
			scope.value = props.scopeOptions[0]?.value ?? "";
			linkError.value = "";
			discovery.value = null;
			discovered.value = null;
			selected.value = [];
			credentialId.value = "";
			credentials.value = [];
			credentialsLoading.value = false;
			createdCredential.value = null;
			resetRepositories();
			reviewed.value = false;
		}, { immediate: true });
		watch([
			url,
			scope,
			credentialId,
			owner,
			repositoryName,
			mode
		], () => {
			linkError.value = "";
			discovery.value = null;
		});
		const selectedScope = computed(() => props.scopeOptions.find((option) => option.value === scope.value));
		const scopeHint = computed(() => {
			const option = selectedScope.value;
			if (!option || option.value === "instance") return i18n.baseText("settings.context.skills.connect.scope.hint.instance");
			if (option.icon === "user") return i18n.baseText("settings.context.skills.connect.scope.hint.personal");
			return i18n.baseText("settings.context.skills.connect.scope.hint.project", { interpolate: { project: option.label } });
		});
		/**
		* Each reason has its own text. With a credential picked, `not_found` means the credential cannot
		* read the repository. An error without a reason, such as a 404 when skill sync is off, gets
		* `fallback`.
		*/
		function discoverErrorText(error, link, fallback = "settings.context.skills.connect.error.discover") {
			const reason = error instanceof ResponseError ? error.meta?.reason : void 0;
			if (reason === void 0) return i18n.baseText(fallback);
			return reasonText(reason, link, { withCredential: !!credentialId.value });
		}
		const credentialHint = computed(() => {
			const option = selectedScope.value;
			if (!option || option.value === "instance") return i18n.baseText("settings.context.skills.connect.credential.hint.instance");
			if (option.icon === "user") return i18n.baseText("settings.context.skills.connect.credential.hint.personal");
			return i18n.baseText("settings.context.skills.connect.credential.hint.project", { interpolate: { project: option.label } });
		});
		/**
		* Where a credential made from this dialog lives: the project of a project source, or the
		* personal project of the admin for a Global source, since Global uses credentials that
		* admins own.
		*/
		const credentialProject = computed(() => {
			const target = parseScope(scope.value);
			const projectId = target.scope === "instance" ? projectsStore.personalProject?.id : target.projectId;
			if (!projectId) return null;
			if (projectsStore.personalProject?.id === projectId) return projectsStore.personalProject;
			return projectsStore.myProjects.find((project) => project.id === projectId) ?? null;
		});
		const canCreateCredential = computed(() => !!credentialProject.value && !!getResourcePermissions(credentialProject.value.scopes).credential.create);
		const newCredentialOptions = computed(() => canCreateCredential.value ? [{
			value: `${NEW_CREDENTIAL_PREFIX}githubApi`,
			label: i18n.baseText("settings.context.skills.connect.credential.new")
		}, {
			value: `${NEW_CREDENTIAL_PREFIX}githubAppApi`,
			label: i18n.baseText("settings.context.skills.connect.credential.newApp")
		}] : []);
		/** Reads the credentials of the scope; `select` picks one, such as a credential just made. */
		async function loadCredentials(select) {
			const requestedScope = scope.value;
			const run = ++credentialsRun;
			credentialsLoading.value = true;
			try {
				const list = await skillsStore.fetchSourceCredentials(parseScope(requestedScope));
				if (run !== credentialsRun) return;
				credentials.value = list;
				const ids = credentials.value.map((credential) => credential.id);
				if (select && ids.includes(select)) credentialId.value = select;
				else if (!ids.includes(credentialId.value)) credentialId.value = mode.value === "account" ? ids[0] ?? "" : "";
			} catch (error) {
				if (run !== credentialsRun) return;
				credentials.value = [];
				credentialId.value = "";
				showError(error, i18n.baseText("settings.context.skills.connect.credential.error.load"));
			} finally {
				if (run === credentialsRun) credentialsLoading.value = false;
			}
		}
		async function loadRepositories() {
			resetRepositories();
			const id = credentialId.value;
			if (mode.value !== "account" || step.value !== "repository" || !id) return;
			const requestedScope = scope.value;
			const run = repositoriesRun;
			repositoriesLoading.value = true;
			try {
				const list = await skillsStore.fetchSourceRepositories({
					...parseScope(requestedScope),
					credentialId: id
				});
				if (run !== repositoriesRun) return;
				repositories.value = list.repositories;
				repositoriesTruncated.value = list.truncated;
			} catch (error) {
				if (run !== repositoriesRun) return;
				linkError.value = discoverErrorText(error, void 0, "settings.context.skills.connect.repository.error.load");
			} finally {
				if (run === repositoriesRun) repositoriesLoading.value = false;
			}
		}
		watch([
			credentialId,
			scope,
			mode,
			step
		], (next, previous) => {
			const nextStep = next[3];
			const prevStep = previous[3];
			if (nextStep === "choose" || prevStep === "choose" && nextStep === "repository") return;
			loadRepositories();
		});
		const owners = computed(() => [...new Set(repositories.value.map((repository) => repository.owner))]);
		const ownerRepositories = computed(() => repositories.value.filter((repository) => repository.owner === owner.value));
		const selectedRepository = computed(() => ownerRepositories.value.find((repository) => repository.name === repositoryName.value));
		function onOwnerChange(value) {
			owner.value = value;
			repositoryName.value = "";
		}
		/** The link that discover reads: the pasted one, or the one of the picked repository. */
		const sourceUrl = computed(() => mode.value === "url" ? url.value.trim() : selectedRepository.value?.url ?? "");
		function startMode(next) {
			mode.value = next;
			step.value = "repository";
			credentialId.value = "";
			createdCredential.value = null;
			loadCredentials();
		}
		function onScopeChange(value) {
			scope.value = value;
			credentialId.value = "";
			createdCredential.value = null;
			if (step.value === "repository") loadCredentials();
		}
		const credentialModalOpen = computed(() => uiStore.isModalActiveById?.["editCredential"] ?? false);
		function openCredentialModal(type) {
			const project = credentialProject.value;
			if (!project || !canCreateCredential.value) return;
			const requestedScope = scope.value;
			const scopeLabel = parseScope(requestedScope).scope === "instance" ? i18n.baseText("settings.context.skills.connect.credential.created.personal") : selectedScope.value?.label ?? "";
			uiStore.openNewCredential(type, false, false, project.id, void 0, void 0, void 0, {
				hideAskAssistant: true,
				appendToBody: true,
				closeOnSave: true,
				onCredentialCreated: (credential) => {
					onCredentialCreated(credential.id, requestedScope, scopeLabel);
				}
			});
		}
		async function onCredentialCreated(id, requestedScope, scopeLabel) {
			if (!props.open || step.value !== "repository" || requestedScope !== scope.value) return;
			await loadCredentials(id);
			if (credentialId.value === id) createdCredential.value = {
				id,
				scopeLabel
			};
		}
		function onCredentialSelect(value) {
			if (value.startsWith(NEW_CREDENTIAL_PREFIX)) {
				const type = TOKEN_CREDENTIAL_TYPES.find((known) => known === value.slice(8));
				if (type) openCredentialModal(type);
				return;
			}
			credentialId.value = value;
			createdCredential.value = null;
		}
		const duplicate = computed(() => discovery.value?.duplicate ?? { kind: "none" });
		const duplicateMessage = computed(() => {
			const dup = duplicate.value;
			const repo = discovery.value?.source.label ?? "";
			if (dup.kind === "blocked") return dup.where === "global" ? i18n.baseText("settings.context.skills.connect.duplicate.global", { interpolate: { repo } }) : i18n.baseText("settings.context.skills.connect.duplicate.scope", { interpolate: {
				repo,
				scope: selectedScope.value?.label ?? ""
			} });
			if (dup.kind === "warning") return i18n.baseText("settings.context.skills.connect.duplicate.warning", { interpolate: {
				repo,
				projects: dup.projects.map((project) => project.name).join(", ")
			} });
			return "";
		});
		const isBlocked = computed(() => duplicate.value.kind === "blocked");
		const canGoNext = computed(() => !!sourceUrl.value && !!scope.value && (mode.value === "url" || !!credentialId.value) && !discovering.value && !isBlocked.value);
		function isSelectable(skill) {
			return !skill.nameTaken && !skill.error && skill.check?.verdict !== "blocked";
		}
		const needsReviewKeys = computed(() => discovery.value?.skills.filter((skill) => selected.value.includes(skill.key) && skill.check?.verdict === "needs_review").map((skill) => skill.key) ?? []);
		const needsReview = computed(() => needsReviewKeys.value.length > 0);
		watch(needsReview, (needed) => {
			if (!needed) reviewed.value = false;
		});
		const canAdd = computed(() => selected.value.length > 0 && (!needsReview.value || reviewed.value));
		const CHECK_BADGES = {
			pass: {
				variant: "success",
				label: "settings.context.skills.connect.check.pass"
			},
			needs_review: {
				variant: "warning",
				label: "settings.context.skills.connect.check.needsReview"
			},
			blocked: {
				variant: "danger",
				label: "settings.context.skills.connect.check.blocked"
			}
		};
		/**
		* The findings line of a skill. A SKILL.md that n8n cannot read is blocked, and its findings
		* name the cause, so they replace the read error.
		*/
		function checkFindings(skill) {
			if (!skill.check || skill.nameTaken) return "";
			return findingsText(skill.check.findings);
		}
		/** The domains of a skill that can come in. A blocked row shows only why it is blocked. */
		function linkedDomains(skill) {
			if (!skill.check || skill.nameTaken || skill.check.verdict === "blocked") return "";
			return linkedDomainsText(skill.check.findings);
		}
		async function onNext() {
			const link = sourceUrl.value;
			if (!GITHUB_LINK.test(link)) {
				linkError.value = reasonText(OTHER_HOST_LINK.test(link) ? "unsupported_provider" : "invalid_url");
				return;
			}
			const requestedScope = scope.value;
			const requestedCredential = credentialId.value;
			const run = ++discoverRun;
			const isCurrent = () => run === discoverRun && link === sourceUrl.value && requestedScope === scope.value && requestedCredential === credentialId.value;
			const target = {
				url: link,
				...requestedCredential ? { credentialId: requestedCredential } : {}
			};
			discovering.value = true;
			try {
				const result = await skillsStore.discoverSource({
					...target,
					...parseScope(requestedScope)
				});
				if (!isCurrent()) return;
				discovery.value = result;
				discovered.value = target;
				if (result.duplicate.kind === "blocked") return;
				selected.value = result.skills.filter(isSelectable).map((skill) => skill.key);
				reviewed.value = false;
				step.value = "choose";
			} catch (error) {
				if (isCurrent()) linkError.value = discoverErrorText(error, link);
			} finally {
				if (run === discoverRun) discovering.value = false;
			}
		}
		function onBack() {
			discoverRun += 1;
			discovering.value = false;
			step.value = step.value === "choose" ? "repository" : "start";
		}
		function toggle(key, checked) {
			selected.value = checked ? [...selected.value, key] : selected.value.filter((selectedKey) => selectedKey !== key);
		}
		const sourceLine = computed(() => {
			const source = discovery.value?.source;
			if (!source) return "";
			return [
				source.label,
				source.ref,
				source.path
			].filter(Boolean).join(" · ");
		});
		function nameTakenReason(skill) {
			return i18n.baseText("settings.context.skills.connect.nameTaken.reason", { interpolate: {
				name: skill.name ?? skill.location,
				scope: selectedScope.value?.label ?? ""
			} });
		}
		/** How many skipped paths the list names before it only counts the rest. */
		function skippedFilesText(skill) {
			const count = skill.skippedFiles.length;
			const shown = skill.skippedFiles.slice(0, SKIPPED_FILES_SHOWN).join(", ");
			const files = count > SKIPPED_FILES_SHOWN ? i18n.baseText("settings.context.skills.connect.skippedFiles.more", { interpolate: {
				files: shown,
				count: count - SKIPPED_FILES_SHOWN
			} }) : shown;
			return i18n.baseText("settings.context.skills.connect.skippedFiles", {
				interpolate: {
					count,
					files
				},
				adjustToNumber: count
			});
		}
		const addLabel = computed(() => selected.value.length > 0 ? i18n.baseText("settings.context.skills.connect.addCount", { interpolate: { count: selected.value.length } }) : i18n.baseText("generic.add"));
		/** A skill that n8n could not read has no name in the answer, so it gets the name in the list. */
		function withSkillName(failure) {
			if (failure.name) return failure;
			const skill = discovery.value?.skills.find((item) => item.key === failure.key);
			return {
				...failure,
				name: skill ? skill.name ?? skill.location : null
			};
		}
		async function onAdd() {
			const source = discovery.value?.source;
			const target = discovered.value;
			if (!source || !target || !canAdd.value) return;
			connecting.value = true;
			try {
				const response = await skillsStore.connectSource({
					...target,
					...parseScope(scope.value),
					skillKeys: selected.value,
					...needsReview.value ? { reviewedSkillKeys: needsReviewKeys.value } : {}
				});
				emit("connected", {
					response: {
						...response,
						failed: response.failed.map(withSkillName)
					},
					sourceLabel: source.label,
					scopeLabel: selectedScope.value?.label ?? ""
				});
				emit("update:open", false);
			} catch (error) {
				const hasReason = error instanceof ResponseError && error.meta?.reason !== void 0;
				showError(hasReason ? new Error(discoverErrorText(error)) : error, i18n.baseText("settings.context.skills.connect.error.connect"));
			} finally {
				connecting.value = false;
			}
		}
		/**
		* The import runs on the server until it answers, so the dialog stays open until then. It
		* also stays open under the credential modal, which an Escape or a click there must not close.
		*/
		function onOpenChange(open) {
			if (!open && (connecting.value || credentialModalOpen.value)) return;
			emit("update:open", open);
		}
		function onInteractOutside(event) {
			if (credentialModalOpen.value) event.preventDefault();
		}
		const title = computed(() => {
			if (step.value === "start") return i18n.baseText("settings.context.skills.connect.start.title");
			if (step.value === "choose") return i18n.baseText("settings.context.skills.connect.choose.title");
			return mode.value === "account" ? i18n.baseText("settings.context.skills.connect.repository.title") : i18n.baseText("settings.context.skills.connect.link.title");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				header: title.value,
				size: "large",
				"trap-focus": !credentialModalOpen.value,
				"disable-outside-pointer-events": !credentialModalOpen.value,
				"data-test-id": "skill-source-connect-dialog",
				"onUpdate:open": onOpenChange,
				onInteractOutside
			}, {
				default: withCtx(() => [step.value === "start" ? (openBlock(), createBlock(unref(DialogBody_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.body)
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), { tag: "p" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.start.description")), 1)]),
						_: 1
					}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.start) }, [
						createVNode(unref(N8nButton_default), {
							icon: "git-branch",
							label: unref(i18n).baseText("settings.context.skills.connect.start.github"),
							"data-test-id": "skill-source-mode-account",
							onClick: _cache[0] || (_cache[0] = ($event) => startMode("account"))
						}, null, 8, ["label"]),
						createVNode(unref(N8nText_default), { color: "text-light" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.start.or")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							variant: "ghost",
							label: unref(i18n).baseText("settings.context.skills.connect.start.url"),
							"data-test-id": "skill-source-mode-url",
							onClick: _cache[1] || (_cache[1] = ($event) => startMode("url"))
						}, null, 8, ["label"])
					], 2)]),
					_: 1
				}, 8, ["class"])) : step.value === "repository" ? (openBlock(), createBlock(unref(DialogBody_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.body)
				}, {
					default: withCtx(() => [
						createdCredential.value && createdCredential.value.id === credentialId.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "success",
							"data-test-id": "skill-source-credential-created"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.credential.created", { interpolate: { scope: createdCredential.value.scopeLabel } })), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("settings.context.skills.connect.scope.label"),
							color: "text-dark"
						}, {
							default: withCtx(() => [createVNode(unref(N8nSelect_default), {
								"model-value": scope.value,
								size: "large",
								teleported: false,
								"data-test-id": "skill-source-scope-select",
								"onUpdate:modelValue": onScopeChange
							}, createSlots({
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.scopeOptions, (option) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: option.value,
										value: option.value,
										label: option.label
									}, {
										default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.option) }, [createVNode(unref(N8nIcon_default), { icon: option.icon }, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(option.label), 1)], 2)]),
										_: 2
									}, 1032, ["value", "label"]);
								}), 128))]),
								_: 2
							}, [selectedScope.value ? {
								name: "prefix",
								fn: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: selectedScope.value.icon }, null, 8, ["icon"])]),
								key: "0"
							} : void 0]), 1032, ["model-value"])]),
							_: 1
						}, 8, ["label"]), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							"data-test-id": "skill-source-scope-hint"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(scopeHint.value), 1)]),
							_: 1
						})], 2),
						mode.value === "url" ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.field)
						}, [createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("settings.context.skills.connect.url.label"),
							color: "text-dark"
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								modelValue: url.value,
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => url.value = $event),
								size: "large",
								placeholder: unref(i18n).baseText("settings.context.skills.connect.url.placeholder"),
								"data-test-id": "skill-source-url-input",
								onKeydown: _cache[3] || (_cache[3] = withKeys(($event) => canGoNext.value && onNext(), ["enter"]))
							}, null, 8, ["modelValue", "placeholder"])]),
							_: 1
						}, 8, ["label"]), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.url.hint")), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("settings.context.skills.connect.credential.label"),
							color: "text-dark"
						}, {
							default: withCtx(() => [createVNode(unref(N8nSelect_default), {
								"model-value": credentialId.value,
								size: "large",
								teleported: false,
								loading: credentialsLoading.value,
								placeholder: unref(i18n).baseText("settings.context.skills.connect.credential.placeholder"),
								"data-test-id": "skill-source-credential-select",
								"onUpdate:modelValue": onCredentialSelect
							}, {
								default: withCtx(() => [
									mode.value === "url" ? (openBlock(), createBlock(unref(N8nOption_default), {
										key: 0,
										value: "",
										label: unref(i18n).baseText("settings.context.skills.connect.credential.none")
									}, null, 8, ["label"])) : createCommentVNode("", true),
									(openBlock(true), createElementBlock(Fragment, null, renderList(credentials.value, (credential) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: credential.id,
											value: credential.id,
											label: credential.name
										}, null, 8, ["value", "label"]);
									}), 128)),
									(openBlock(true), createElementBlock(Fragment, null, renderList(newCredentialOptions.value, (option) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: option.value,
											value: option.value,
											label: option.label
										}, null, 8, ["value", "label"]);
									}), 128))
								]),
								_: 1
							}, 8, [
								"model-value",
								"loading",
								"placeholder"
							])]),
							_: 1
						}, 8, ["label"]), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							"data-test-id": "skill-source-credential-hint"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(credentialHint.value), 1)]),
							_: 1
						})], 2),
						mode.value === "account" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("settings.context.skills.connect.owner.label"),
							color: "text-dark"
						}, {
							default: withCtx(() => [createVNode(unref(N8nSelect_default), {
								"model-value": owner.value,
								size: "large",
								teleported: false,
								loading: repositoriesLoading.value,
								disabled: !credentialId.value,
								placeholder: unref(i18n).baseText("settings.context.skills.connect.owner.placeholder"),
								"no-data-text": unref(i18n).baseText("settings.context.skills.connect.repository.empty"),
								"data-test-id": "skill-source-owner-select",
								"onUpdate:modelValue": onOwnerChange
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(owners.value, (name) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: name,
										value: name,
										label: name
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, [
								"model-value",
								"loading",
								"disabled",
								"placeholder",
								"no-data-text"
							])]),
							_: 1
						}, 8, ["label"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
							createVNode(unref(N8nInputLabel_default), {
								label: unref(i18n).baseText("settings.context.skills.connect.repository.label"),
								color: "text-dark"
							}, {
								default: withCtx(() => [createVNode(unref(N8nSelect_default), {
									modelValue: repositoryName.value,
									"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => repositoryName.value = $event),
									size: "large",
									teleported: false,
									disabled: !owner.value,
									placeholder: unref(i18n).baseText("settings.context.skills.connect.repository.placeholder"),
									"data-test-id": "skill-source-repository-select"
								}, {
									default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(ownerRepositories.value, (repository) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: repository.url,
											value: repository.name,
											label: repository.name
										}, {
											default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.option) }, [createBaseVNode("span", null, toDisplayString(repository.name), 1), repository.private ? (openBlock(), createBlock(unref(N8nIcon_default), {
												key: 0,
												icon: "lock",
												size: "small",
												title: unref(i18n).baseText("settings.context.skills.connect.repository.private")
											}, null, 8, ["title"])) : createCommentVNode("", true)], 2)]),
											_: 2
										}, 1032, ["value", "label"]);
									}), 128))]),
									_: 1
								}, 8, [
									"modelValue",
									"disabled",
									"placeholder"
								])]),
								_: 1
							}, 8, ["label"]),
							createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.repository.hint")), 1)]),
								_: 1
							}),
							repositoriesTruncated.value ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								size: "small",
								color: "text-light",
								"data-test-id": "skill-source-repositories-truncated"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.repository.truncated")), 1)]),
								_: 1
							})) : createCommentVNode("", true)
						], 2)], 64)) : createCommentVNode("", true),
						linkError.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 3,
							theme: "danger",
							"data-test-id": "skill-source-link-error"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(linkError.value), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						duplicateMessage.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 4,
							theme: isBlocked.value ? "danger" : "warning",
							"data-test-id": "skill-source-duplicate"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(duplicateMessage.value), 1)]),
							_: 1
						}, 8, ["theme"])) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["class"])) : discovery.value ? (openBlock(), createBlock(unref(DialogBody_default), {
					key: 2,
					class: normalizeClass(_ctx.$style.body)
				}, {
					default: withCtx(() => [
						createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.source),
							"data-test-id": "skill-source-summary"
						}, [createVNode(unref(N8nIcon_default), {
							icon: "git-branch",
							size: "small"
						}), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(sourceLine.value), 1)]),
							_: 1
						})], 2),
						duplicateMessage.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "warning",
							"data-test-id": "skill-source-duplicate"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(duplicateMessage.value), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						createBaseVNode("ul", {
							class: normalizeClass(_ctx.$style.list),
							"data-test-id": "skill-source-skills"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(discovery.value.skills, (item) => {
							return openBlock(), createElementBlock("li", {
								key: item.key,
								class: normalizeClass([_ctx.$style.item, !isSelectable(item) && _ctx.$style.disabled]),
								"data-test-id": `skill-source-skill-${item.key}`
							}, [
								createVNode(unref(Checkbox_default), {
									"model-value": isSelectable(item) && selected.value.includes(item.key),
									disabled: !isSelectable(item),
									"aria-label": item.name ?? item.location,
									"data-test-id": "skill-source-skill-checkbox",
									"onUpdate:modelValue": ($event) => toggle(item.key, $event)
								}, null, 8, [
									"model-value",
									"disabled",
									"aria-label",
									"onUpdate:modelValue"
								]),
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.itemText) }, [
									createVNode(unref(N8nText_default), { bold: "" }, {
										default: withCtx(() => [createTextVNode(toDisplayString(item.name ?? item.location), 1)]),
										_: 2
									}, 1024),
									item.description ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 0,
										size: "small",
										color: "text-light"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
										_: 2
									}, 1024)) : createCommentVNode("", true),
									item.skippedFiles.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 1,
										size: "small",
										color: "text-light",
										"data-test-id": "skill-source-skill-skipped"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(skippedFilesText(item)), 1)]),
										_: 2
									}, 1024)) : createCommentVNode("", true),
									checkFindings(item) ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 2,
										size: "small",
										color: item.check?.verdict === "blocked" ? "danger" : "warning",
										"data-test-id": "skill-source-skill-findings"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(checkFindings(item)), 1)]),
										_: 2
									}, 1032, ["color"])) : createCommentVNode("", true),
									linkedDomains(item) ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 3,
										size: "small",
										color: "text-light",
										"data-test-id": "skill-source-skill-domains"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(linkedDomains(item)), 1)]),
										_: 2
									}, 1024)) : createCommentVNode("", true),
									item.nameTaken ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 4,
										size: "small",
										color: "text-light",
										"data-test-id": "skill-source-skill-reason"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(nameTakenReason(item)), 1)]),
										_: 2
									}, 1024)) : item.error && !checkFindings(item) ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 5,
										size: "small",
										color: "danger",
										"data-test-id": "skill-source-skill-reason"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(reasonText)(item.error.reason)), 1)]),
										_: 2
									}, 1024)) : createCommentVNode("", true)
								], 2),
								item.nameTaken ? (openBlock(), createBlock(unref(N8nBadge_default), {
									key: 0,
									variant: "subtle",
									"data-test-id": "skill-source-skill-name-taken"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.nameTaken.tag")), 1)]),
									_: 1
								})) : item.check ? (openBlock(), createBlock(unref(N8nBadge_default), {
									key: 1,
									variant: CHECK_BADGES[item.check.verdict].variant,
									"data-test-id": "skill-source-skill-check"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(CHECK_BADGES[item.check.verdict].label)), 1)]),
									_: 2
								}, 1032, ["variant"])) : createCommentVNode("", true)
							], 10, _hoisted_1$2);
						}), 128))], 2),
						discovery.value.truncated ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "text-light",
							"data-test-id": "skill-source-truncated"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(reasonText)("too_many_skills")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						discovery.value.tooDeep ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							size: "small",
							color: "text-light",
							"data-test-id": "skill-source-too-deep"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(reasonText)("too_deep")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.addTo) }, [
							createVNode(unref(N8nText_default), {
								size: "small",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.addTo")), 1)]),
								_: 1
							}),
							selectedScope.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
								key: 0,
								variant: "outline",
								"data-test-id": "skill-source-add-to"
							}, {
								leading: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: selectedScope.value.icon,
									size: "small"
								}, null, 8, ["icon"])]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(selectedScope.value.label), 1)]),
								_: 1
							})) : createCommentVNode("", true),
							createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.connect.addTo.hint")), 1)]),
								_: 1
							})
						], 2),
						needsReview.value ? (openBlock(), createBlock(unref(Checkbox_default), {
							key: 3,
							modelValue: reviewed.value,
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => reviewed.value = $event),
							label: unref(i18n).baseText("settings.context.skills.connect.check.reviewed"),
							"data-test-id": "skill-source-reviewed-warnings"
						}, null, 8, ["modelValue", "label"])) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [
						step.value !== "start" ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "ghost",
							label: unref(i18n).baseText("generic.back"),
							disabled: connecting.value,
							"data-test-id": "skill-source-back",
							onClick: onBack
						}, null, 8, ["label", "disabled"])) : createCommentVNode("", true),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.spacer) }, null, 2),
						createVNode(unref(N8nButton_default), {
							variant: "outline",
							label: unref(i18n).baseText("generic.cancel"),
							disabled: connecting.value,
							"data-test-id": "skill-source-cancel",
							onClick: _cache[6] || (_cache[6] = ($event) => onOpenChange(false))
						}, null, 8, ["label", "disabled"]),
						step.value === "repository" ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							label: unref(i18n).baseText("generic.next"),
							disabled: !canGoNext.value,
							loading: discovering.value,
							"data-test-id": "skill-source-next",
							onClick: onNext
						}, null, 8, [
							"label",
							"disabled",
							"loading"
						])) : step.value === "choose" ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 2,
							label: addLabel.value,
							disabled: !canAdd.value,
							loading: connecting.value,
							"data-test-id": "skill-source-add",
							onClick: onAdd
						}, null, 8, [
							"label",
							"disabled",
							"loading"
						])) : createCommentVNode("", true)
					]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"open",
				"header",
				"trap-focus",
				"disable-outside-pointer-events"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	body: "_body_8sajv_1",
	field: "_field_8sajv_7",
	start: "_start_8sajv_13",
	option: "_option_8sajv_20",
	source: "_source_8sajv_26",
	list: "_list_8sajv_33",
	item: "_item_8sajv_45",
	disabled: "_disabled_8sajv_55",
	itemText: "_itemText_8sajv_59",
	addTo: "_addTo_8sajv_67",
	spacer: "_spacer_8sajv_74"
} }]]);
//#endregion
//#region src/features/settings/context/components/SkillAgentsCell.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$1 = ["aria-label"];
var HIDDEN_AGENTS_ITEM = "hidden-agents";
var USED_BY_HEADER = "used-by";
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
		/** The version an agent draft runs, as the design shows it. */
		function versionBadge(draft, published) {
			if (draft.pinned) return {
				label: i18n.baseText("settings.context.skills.versions.agents.pinned", { interpolate: { version: draft.version } }),
				variant: "outline",
				pinned: true
			};
			const label = i18n.baseText("settings.context.skills.versions.agents.latest", { interpolate: { version: draft.version } });
			if (published !== null && published !== void 0 && published !== draft.version) return {
				label,
				variant: "warning",
				pinned: false,
				tooltip: i18n.baseText("settings.context.skills.versions.agents.publishedUses", { interpolate: { version: published } })
			};
			return {
				label,
				variant: "success",
				pinned: false
			};
		}
		/** A draft and a published version of the same agent count once, as `usedByAgents` does. */
		const agents = computed(() => {
			const published = new Map((usage.value?.pins ?? []).map((pin) => [pin.agentId, pin.version]));
			const byId = /* @__PURE__ */ new Map();
			for (const draft of usage.value?.drafts ?? []) byId.set(draft.agentId, {
				agentName: draft.agentName,
				projectId: draft.projectId,
				badge: versionBadge(draft, published.get(draft.agentId))
			});
			for (const pin of usage.value?.pins ?? []) if (!byId.has(pin.agentId)) byId.set(pin.agentId, pin);
			return byId;
		});
		const items = computed(() => {
			const list = [{
				id: USED_BY_HEADER,
				label: i18n.baseText("settings.context.skills.versions.agents.title"),
				header: true
			}, ...[...agents.value].map(([id, agent]) => ({
				id,
				label: agent.agentName,
				icon: {
					type: "icon",
					value: "bot"
				},
				data: agent
			}))];
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
		/** Opens the agent in a new tab, so the skills list keeps its search and page. */
		function onSelect(agentId) {
			const agent = agents.value.get(agentId);
			if (!agent) return;
			const { href } = router.resolve({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: agent.projectId,
					agentId
				}
			});
			window.open(href, "_blank", "noopener");
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
				"item-trailing": withCtx(({ item }) => [item.data?.badge ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: item.data.badge.tooltip,
					disabled: !item.data.badge.tooltip,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nBadge_default), {
						variant: item.data.badge.variant,
						"leading-icon": item.data.badge.pinned ? "pin" : void 0,
						size: "xsmall",
						"data-variant": item.data.badge.variant,
						"data-test-id": "skill-agents-version"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.data.badge.label), 1)]),
						_: 2
					}, 1032, [
						"variant",
						"leading-icon",
						"data-variant"
					])]),
					_: 2
				}, 1032, ["content", "disabled"])) : createCommentVNode("", true)]),
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
//#region src/features/settings/context/components/SkillsTable.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { "data-test-id": "skills-table" };
var _hoisted_2 = ["aria-label"];
var SkillsTable_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillsTable",
	props: /*@__PURE__*/ mergeModels({
		skills: {},
		itemsLength: {},
		loading: { type: Boolean },
		showAssistantAvailability: { type: Boolean },
		showEmpty: { type: Boolean },
		showMcpAvailability: { type: Boolean }
	}, {
		"tableOptions": { default: () => ({}) },
		"tableOptionsModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels([
		"open",
		"timeline",
		"download",
		"checkForUpdates",
		"stopSyncing",
		"delete",
		"update:options"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const i18n = useI18n();
		const { deleteBlockedReason } = useSkillDeleteRule();
		const usersStore = useUsersStore();
		function actionsFor(skill) {
			const deleteBlocked = deleteBlockedReason(skill);
			return [
				{
					value: "edit",
					label: i18n.baseText(skill.canEdit ? "settings.context.skills.actions.edit" : "settings.context.skills.actions.view"),
					icon: skill.canEdit ? "pencil" : "eye"
				},
				{
					value: "timeline",
					label: i18n.baseText("settings.context.skills.actions.timeline"),
					icon: "history"
				},
				{
					value: "download",
					label: i18n.baseText("settings.context.skills.actions.download"),
					icon: "download"
				},
				...skill.canCheckForUpdates ? [{
					value: "checkForUpdates",
					label: i18n.baseText("settings.context.skills.checkForUpdates.action"),
					icon: "refresh-cw"
				}] : [],
				...skill.canStopSyncing ? [{
					value: "stopSyncing",
					label: i18n.baseText("settings.context.skills.stopSyncing.action"),
					icon: "unlink"
				}] : [],
				{
					value: "delete",
					label: i18n.baseText("settings.context.skills.actions.delete"),
					icon: "trash-2",
					disabled: deleteBlocked !== void 0,
					tooltip: deleteBlocked,
					destructive: true
				}
			];
		}
		function onAction(skill, action) {
			if (action === "edit") emit("open", skill);
			else if (action === "timeline") emit("timeline", skill);
			else if (action === "download") emit("download", skill);
			else if (action === "checkForUpdates") emit("checkForUpdates", skill);
			else if (action === "stopSyncing") emit("stopSyncing", skill);
			else emit("delete", skill);
		}
		/** The badge of a synced skill whose source has new content that waits for review. */
		const SYNC_BADGES = {
			update_available: {
				variant: "info",
				key: "settings.context.skills.sync.updateAvailable"
			},
			update_blocked: {
				variant: "danger",
				key: "settings.context.skills.sync.updateBlocked"
			}
		};
		function syncBadgeOf({ syncState }) {
			if (syncState !== "update_available" && syncState !== "update_blocked") return void 0;
			const { variant, key } = SYNC_BADGES[syncState];
			return {
				variant,
				label: i18n.baseText(key),
				tooltip: i18n.baseText(`${key}.tooltip`)
			};
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
				[`item.name`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skillCell) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skillTitle) }, [
					createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-dark",
						"data-test-id": "skill-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
						_: 2
					}, 1024),
					syncBadgeOf(item) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: syncBadgeOf(item)?.tooltip
					}, {
						default: withCtx(() => [createVNode(unref(N8nBadge_default), {
							variant: syncBadgeOf(item)?.variant,
							"data-test-id": `skill-sync-badge-${item.syncState}`
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(syncBadgeOf(item)?.label), 1)]),
							_: 2
						}, 1032, ["variant", "data-test-id"])]),
						_: 2
					}, 1032, ["content"])) : createCommentVNode("", true),
					props.showAssistantAvailability && item.availableToAssistant ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
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
					}, 8, ["content"])) : createCommentVNode("", true),
					props.showMcpAvailability && item.availableToMCP ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 2,
						placement: "right",
						content: unref(i18n).baseText("settings.context.skills.modal.mcp.label")
					}, {
						default: withCtx(() => [createBaseVNode("span", {
							role: "img",
							"aria-label": unref(i18n).baseText("settings.context.skills.modal.mcp.label"),
							"data-test-id": "skill-available-to-mcp-icon"
						}, [createVNode(unref(N8nIcon_default), {
							icon: "mcp",
							size: "medium",
							color: "text-light"
						})], 8, _hoisted_2)]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)
				], 2), createVNode(unref(N8nText_default), {
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
					"is-current-user": item.createdBy.id === unref(usersStore).currentUserId,
					"hide-avatar": ""
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
//#region src/features/settings/context/composables/useSkillSyncFlag.ts
init_runtime_core_esm_bundler();
/**
* Whether the user sees Skill Sync: the Sources tab and "Connect to GitHub". The backend gates
* its routes with the same per-user flag. The server-evaluated flags carry the local overrides
* (`N8N_FEATURE_FLAG_OVERRIDES`), so the flag also works with telemetry off.
*/
var useSkillSyncFlag = () => {
	const postHog = usePostHog();
	return computed(() => postHog.isFeatureEnabled(SKILL_SYNC_FLAG) === true);
};
//#endregion
//#region src/features/settings/context/views/SettingsSkillsView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var INSTANCE_SCOPE = "instance";
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
		const posthogStore = usePostHog();
		const { deleteBlockedReason } = useSkillDeleteRule();
		const telemetry = useTelemetry();
		const { showError, showMessage } = useToast();
		const { scopeDisplay } = useSkillScopeDisplay();
		const { failedSkillReason, reasonText } = useSkillSourceReasons();
		const skillSyncEnabled = useSkillSyncFlag();
		const connectOpen = ref(false);
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
		const mcpSkillsEnabled = computed(() => posthogStore.isFeatureEnabled(MCP_SKILLS_EXTENSION_FLAG));
		const loadedFiltered = ref(false);
		const hasLoaded = ref(false);
		const showLoading = computed(() => skillsStore.loading && !hasLoaded.value);
		const emptyState = computed(() => {
			if (!hasLoaded.value || loadFailed.value || skillsStore.count > 0) return "none";
			return loadedFiltered.value ? "noResults" : "noSkills";
		});
		const scopeFilterOptions = computed(() => [["instance", "settings.context.skills.filter.instance"], ["project", "settings.context.skills.filter.project"]].map(([value, key]) => ({
			value,
			label: i18n.baseText(key)
		})));
		/** The name of a creator, or the email when the name is unknown. */
		function creatorLabel(creator) {
			return preferenceUserName(creator) || creator.id;
		}
		function scopeQuery(scope) {
			const parsed = skillScopeSchema.safeParse(scope);
			return parsed.success ? { scope: parsed.data } : {};
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
		* that the user may write to.
		*/
		const scopeOptions = computed(() => {
			const options = [];
			if (canWriteInstanceSkillScope()) options.push({
				value: INSTANCE_SCOPE,
				label: i18n.baseText("settings.context.skills.scope.instance"),
				icon: "globe",
				target: { projectId: null }
			});
			const personalProject = projectsStore.personalProject;
			if (personalProject && canWriteProjectSkillScope(personalProject.id)) options.push({
				value: `${PROJECT_SCOPE_PREFIX}${personalProject.id}`,
				label: i18n.baseText("settings.context.skills.scope.personalProject"),
				icon: "user",
				target: { projectId: personalProject.id }
			});
			for (const project of projectsStore.myProjects) {
				if (project.type !== "team" || !canWriteProjectSkillScope(project.id)) continue;
				options.push({
					value: `${PROJECT_SCOPE_PREFIX}${project.id}`,
					label: project.name ?? project.id,
					icon: "layers",
					target: { projectId: project.id }
				});
			}
			return options;
		});
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
				...mcpSkillsEnabled.value ? { availableToMCP: false } : {},
				existingSkillNames: [],
				getDefaultName: async (scopeValue) => await skillsStore.fetchNewSkillName({
					...parseScope(scopeValue),
					name: i18n.baseText("agents.builder.skills.defaultName")
				}),
				onConfirm: async ({ skill, scope, method, availableToMCP }) => await onCreate(skill, scope ?? options[0].value, method, availableToMCP)
			});
		}
		const createMenuItems = computed(() => [{
			id: "github",
			label: i18n.baseText("settings.context.skills.actions.connectGithub"),
			icon: "git-branch",
			testId: "skills-create-github"
		}, {
			id: "manual",
			label: i18n.baseText("settings.context.skills.actions.createManually"),
			icon: "pen",
			testId: "skills-create-manual"
		}]);
		function onCreateMenuSelect(action) {
			if (action === "github") connectOpen.value = true;
			else openCreateModal();
		}
		function failedNames(failed) {
			return failed.map((item) => i18n.baseText("settings.context.skills.connect.failed.item", { interpolate: {
				name: item.name ?? item.key,
				reason: failedSkillReason(item.reason)
			} })).join(", ");
		}
		/** The imported skills are new rows, so the list reloads. Skills that did not come in are named. */
		async function onSourceConnected({ response, sourceLabel, scopeLabel }) {
			const failed = response.failed.length > 0 ? failedNames(response.failed) : "";
			if (response.imported.length > 0) showMessage({
				title: i18n.baseText("settings.context.skills.connect.success", {
					interpolate: {
						count: response.imported.length,
						scope: scopeLabel,
						repo: sourceLabel
					},
					adjustToNumber: response.imported.length
				}),
				...failed ? { message: i18n.baseText("settings.context.skills.connect.failed", { interpolate: { names: failed } }) } : {},
				type: failed ? "warning" : "success"
			});
			else showMessage({
				title: i18n.baseText("settings.context.skills.connect.error.connect"),
				message: i18n.baseText("settings.context.skills.connect.failed", { interpolate: { names: failed } }),
				type: "error"
			});
			loadCreators();
			await load();
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
		async function onCreate(skill, scopeValue, method, availableToMCP) {
			let createdId;
			try {
				createdId = (await skillsStore.createSkill({
					...parseScope(scopeValue),
					skill,
					...method ? { method } : {},
					availableToMCP
				})).id;
			} catch (error) {
				return saveFailed(error);
			}
			loadCreators();
			await load();
			confirmIfHidden(createdId, "created");
		}
		/** The value of the scope picker for a saved skill. */
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
			if (detail.syncedFrom) return { scopeLockedReason: i18n.baseText("settings.context.skills.synced.scopeLocked", { interpolate: { repo: detail.syncedFrom.label } }) };
			if (!detail.canDelete) return { scopeLockedReason: i18n.baseText("settings.context.skills.modal.scope.noDelete") };
			return {};
		}
		/** `show` opens the editor with the Versions panel. */
		async function openEditModal(item, show) {
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
				let baseSkillHash = detail.skillHash;
				openModal({
					skill: detail.skill,
					skillId: detail.id,
					readOnly: !detail.canEdit,
					...detail.syncedFrom ? { syncedFrom: detail.syncedFrom } : {},
					...assistantSkillsEnabled.value ? { availableToAssistant: detail.availableToAssistant } : {},
					scopeOptions: options,
					initialScope: currentValue,
					...mcpSkillsEnabled.value ? { availableToMCP: detail.availableToMCP } : {},
					...scopeLock(detail),
					usedBy: detail.usedBy,
					existingSkillNames: [],
					latestVersion: detail.latestVersion,
					initialVersionsOpen: show === "versions",
					onDelete: async () => await onDelete(detail, () => uiStore.closeModal(AGENT_SKILL_MODAL_KEY)),
					deleteDisabledReason: deleteBlockedReason(detail),
					...detail.syncedFrom?.canStopSyncing ? { onStopSyncing: async () => await onStopSyncing(detail, () => uiStore.closeModal(AGENT_SKILL_MODAL_KEY)) } : {},
					onConfirm: async ({ skill, scope, availableToAssistant, availableToMCP }) => await onSave(detail.id, skill, baseSkillHash, scope !== currentValue ? scope : void 0, availableToAssistant, availableToMCP, (skillHash) => baseSkillHash = skillHash)
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.error.loadOne"));
			}
		}
		/** Saves the next version. There are no drafts: what the modal shows is what gets saved. */
		/** `newScope` is set when the user picked another scope: the save also moves the skill. */
		async function onSave(id, skill, baseSkillHash, newScope, availableToAssistant, availableToMCP, onSaved) {
			let created;
			try {
				const saved = await skillsStore.saveSkill(id, {
					name: skill.name,
					description: skill.description,
					instructions: skill.instructions,
					references: skill.references ?? [],
					baseSkillHash,
					...newScope ? parseScope(newScope) : {},
					...availableToAssistant !== void 0 ? { availableToAssistant } : {},
					availableToMCP
				});
				created = saved.created;
				onSaved?.(saved.skillHash);
			} catch (error) {
				return saveFailed(error);
			}
			if (created || newScope !== void 0 || availableToAssistant !== void 0 || availableToMCP !== void 0) {
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
		/** `onDeleted` runs as soon as the delete succeeds, before the list reloads. */
		async function onDelete(skill, onDeleted) {
			if (await message.confirm(i18n.baseText("settings.context.skills.delete.confirm.message"), i18n.baseText("settings.context.skills.delete.confirm.title"), {
				type: "warning",
				confirmButtonText: i18n.baseText("settings.context.skills.delete.confirm.button"),
				cancelButtonText: i18n.baseText("settings.context.skills.delete.cancel")
			}) !== "confirm") return;
			try {
				await skillsStore.deleteSkill(skill.id);
				onDeleted?.();
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
		/**
		* The skill keeps its versions and becomes a normal skill that the user can edit. The row
		* menu and the modal both use this. The modal closes, as in the prototype, and the list
		* reloads with the row editable.
		*/
		async function onStopSyncing(skill, onStopped) {
			const name = skill.name;
			if (await message.confirm(i18n.baseText("settings.context.skills.stopSyncing.confirm.message", {
				interpolate: {
					scope: scopeDisplay(skill).label,
					count: skill.latestVersion
				},
				adjustToNumber: skill.latestVersion
			}), i18n.baseText("settings.context.skills.stopSyncing.confirm.title", { interpolate: { name } }), {
				confirmButtonText: i18n.baseText("settings.context.skills.stopSyncing.action"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return;
			try {
				await skillsStore.stopSyncingSkill(skill.id);
			} catch (error) {
				showError(error, i18n.baseText("settings.context.skills.stopSyncing.error"));
				return;
			}
			onStopped?.();
			showMessage({
				title: i18n.baseText("settings.context.skills.stopSyncing.success", { interpolate: { name } }),
				type: "success"
			});
			await load();
		}
		/**
		* Check now: checks the whole source of the skill. The list reloads, so the badges of every
		* skill of the source show what the check found.
		*/
		async function onCheckForUpdates(skill) {
			let result;
			try {
				result = await skillsStore.checkForUpdates(skill.id);
			} catch (error) {
				const reason = error instanceof ResponseError ? error.meta?.reason : void 0;
				const text = reason === "credential_missing" ? i18n.baseText("settings.context.skills.checkForUpdates.error.credentialMissing") : reason !== void 0 ? reasonText(reason) : void 0;
				showError(text ? new Error(text) : error, i18n.baseText("settings.context.skills.checkForUpdates.error"));
				return;
			}
			const { label, updatesFound, throttled } = result;
			showMessage({
				title: throttled ? i18n.baseText("settings.context.skills.checkForUpdates.throttled", { interpolate: { label } }) : i18n.baseText("settings.context.skills.checkForUpdates.checked", { interpolate: { label } }),
				message: updatesFound === 0 ? i18n.baseText("settings.context.skills.checkForUpdates.none") : i18n.baseText("settings.context.skills.checkForUpdates.found", {
					interpolate: { count: updatesFound },
					adjustToNumber: updatesFound
				}),
				type: "success"
			});
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
						scopeOptions.value.length > 0 && unref(skillSyncEnabled) ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
							key: 0,
							items: createMenuItems.value,
							placement: "bottom-end",
							"data-test-id": "skills-create-menu",
							onSelect: onCreateMenuSelect
						}, {
							activator: withCtx(() => [createVNode(unref(N8nButton_default), { "data-test-id": "skills-create-menu-button" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.actions.createMenu")) + " ", 1), createVNode(unref(N8nIcon_default), {
									icon: "chevron-down",
									size: "small"
								})]),
								_: 1
							})]),
							_: 1
						}, 8, ["items"])) : scopeOptions.value.length > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
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
						"show-mcp-availability": mcpSkillsEnabled.value,
						onOpen: _cache[4] || (_cache[4] = ($event) => openEditModal($event)),
						onTimeline: _cache[5] || (_cache[5] = ($event) => openEditModal($event, "versions")),
						onDownload,
						onCheckForUpdates: _cache[6] || (_cache[6] = ($event) => onCheckForUpdates($event)),
						onStopSyncing: _cache[7] || (_cache[7] = ($event) => onStopSyncing($event)),
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
						"show-assistant-availability",
						"show-mcp-availability"
					]),
					unref(skillSyncEnabled) ? (openBlock(), createBlock(SkillSourceConnectDialog_default, {
						key: 0,
						open: connectOpen.value,
						"onUpdate:open": _cache[8] || (_cache[8] = ($event) => connectOpen.value = $event),
						"scope-options": scopeOptions.value,
						onConnected: onSourceConnected
					}, null, 8, ["open", "scope-options"])) : createCommentVNode("", true)
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
