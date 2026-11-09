import { Af as init_reactivity_esm_bundler, Bf as shallowRef, Cf as watch, Ff as onScopeDispose, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Rf as ref, Tf as withCtx, Xd as h, qd as defineComponent, tf as mergeModels, uf as openBlock, xf as useTemplateRef, yf as useModel, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { Cm as useProjectsStore, Ey as EnterpriseEditionFeature, Hy as useToast, Km as createPublicCredential, MD as Input_default, Mx as PROMOTION_COMMIT_MESSAGE_MAX_LENGTH, RE as N8nInputLabel_default, Rs as CharacterCount_default, UD as useI18n, Xy as useRootStore, Yy as useSettingsStore, ag as useUIStore, jg as CREDENTIAL_EDIT_MODAL_KEY, km as createPublicProject, sm as useCredentialsStore, yb as ResponseError, yg as VARIABLE_MODAL_KEY, ym as useEnvironmentsStore, zx as getResourcePermissions } from "./app-DbOOaPK6.js";
import { s as continueApplyPromotion } from "./useInstancePromotionConnection-D03GmHF-.js";
//#region src/features/integrations/promotions.ee/composables/usePromotionBindingCreation.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function usePromotionBindingCreation(result, onProjectCreated) {
	const uiStore = useUIStore();
	const rootStore = useRootStore();
	const projectsStore = useProjectsStore();
	const credentialsStore = useCredentialsStore();
	const environmentsStore = useEnvironmentsStore();
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const toast = useToast();
	const createdProjects = shallowRef(/* @__PURE__ */ new Map());
	const knownProjectIds = /* @__PURE__ */ new Set();
	let preflight = result.preflight;
	function updatePreflight(value) {
		preflight = value;
		for (const project of value.missingProjects) knownProjectIds.delete(project.id);
	}
	let active = false;
	let disposed = false;
	let finish;
	async function loadProject(id) {
		const project = await projectsStore.fetchProject(id);
		await projectsStore.getMyProjects();
		return project;
	}
	async function ensureProject(id, resource) {
		const missing = preflight.missingProjects.find((project) => project.id === id);
		if (missing && !knownProjectIds.has(id)) try {
			const project = await createPublicProject(rootStore.publicApiContext, missing);
			knownProjectIds.add(id);
			const metadata = {
				id: project.id,
				name: project.name
			};
			createdProjects.value = new Map(createdProjects.value).set(project.id, metadata);
			onProjectCreated(metadata);
		} catch (error) {
			if (error instanceof ResponseError && error.httpStatusCode && error.httpStatusCode < 500 && error.httpStatusCode !== 409) throw error;
		}
		const project = await loadProject(id);
		knownProjectIds.add(id);
		if (project.type !== "team" || !getResourcePermissions(project.scopes)[resource].create) throw new Error(i18n.baseText("promotions.bindings.destinationDenied"));
		return project;
	}
	function bindingProject(binding) {
		if (binding.kind === "credential") return binding.ownerProject;
		return binding.scope.kind === "project" ? binding.scope.project : void 0;
	}
	async function prepareDestination(project) {
		if (!project) return {};
		const missing = preflight.missingProjects.find((item) => item.id === project.id);
		if (!missing || knownProjectIds.has(project.id)) return { destination: {
			kind: "resolved",
			project: await loadProject(project.id)
		} };
		return {
			destination: {
				kind: "pending",
				id: project.id,
				name: missing.name,
				permissions: { create: projectsStore.hasTeamProjectQuota && projectsStore.hasPermissionToCreateProjects }
			},
			notice: () => {
				const created = createdProjects.value.get(project.id);
				return i18n.baseText(created ? "promotions.bindings.projectSetup.retained" : "promotions.bindings.projectSetup.beforeSave", { interpolate: { projectName: created?.name ?? missing.name } });
			}
		};
	}
	async function assertEditorAvailable(binding) {
		if (binding.kind === "credential") {
			await credentialsStore.fetchCredentialTypes(false);
			if (!credentialsStore.getCredentialTypeByName(binding.credentialType)) throw new Error(i18n.baseText("credentialEdit.typeUnavailable"));
			return;
		}
		if (!settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) throw new Error(i18n.baseText("promotions.bindings.variablesUnavailable"));
		await environmentsStore.fetchAllVariables();
	}
	function openCredentialEditor(binding, setup, session) {
		uiStore.openNewCredential(binding.credentialType, false, true, void 0, void 0, void 0, void 0, {
			...setup,
			initialName: binding.name,
			initialData: binding.expressionData,
			appendToBody: true,
			hideAskAssistant: true,
			usageScope: "project",
			onInitializeError: session.fail,
			createCredential: async (details, projectId) => {
				session.checkActive();
				await ensureProject(projectId, "credential");
				session.checkActive();
				const credential = await createPublicCredential(rootStore.publicApiContext, {
					id: binding.sourceId,
					name: details.name,
					description: details.description,
					type: binding.credentialType,
					data: details.data ?? {},
					projectId,
					isResolvable: false
				});
				session.checkActive();
				session.save({
					kind: "credential",
					sourceId: binding.sourceId,
					id: credential.id,
					name: credential.name,
					credentialType: credential.type,
					projectId
				});
				return credential.id;
			}
		});
	}
	function openVariableEditor(binding, setup, session) {
		const project = bindingProject(binding);
		const options = {
			...setup,
			mode: "new",
			initialValues: {
				key: binding.name,
				value: ""
			},
			fixedKey: true,
			projectId: project?.id ?? null,
			allowOnProtectedInstance: true,
			appendToBody: true,
			onCreate: async (values) => {
				session.checkActive();
				if (project) await ensureProject(project.id, "projectVariable");
				session.checkActive();
				const variable = await environmentsStore.createVariable({
					key: binding.name,
					value: values.value,
					projectId: project?.id ?? null
				});
				session.checkActive();
				session.save({
					kind: "variable",
					id: variable.id,
					name: variable.key,
					scope: variable.project ? {
						kind: "project",
						project: variable.project
					} : { kind: "global" }
				});
				return variable;
			}
		};
		uiStore.openModalWithData({
			name: VARIABLE_MODAL_KEY,
			data: options
		});
	}
	const createBinding = async (binding) => {
		if (active || disposed) throw new Error(i18n.baseText("promotions.bindings.editorBusy"));
		active = true;
		try {
			const setup = await prepareDestination(bindingProject(binding));
			await assertEditorAvailable(binding);
			if (disposed) return null;
			const modalName = binding.kind === "credential" ? CREDENTIAL_EDIT_MODAL_KEY : VARIABLE_MODAL_KEY;
			if (uiStore.modalsById[modalName]?.open) throw new Error(i18n.baseText("promotions.bindings.editorBusy"));
			return await new Promise((resolve, reject) => {
				let saved = null;
				let settled = false;
				let stopWatching;
				const settle = (error) => {
					if (settled) return;
					settled = true;
					stopWatching?.();
					finish = void 0;
					if (error) reject(error);
					else resolve(saved);
				};
				finish = () => {
					settle();
					uiStore.closeModal(modalName);
				};
				const session = {
					checkActive: () => {
						if (settled || disposed) throw new Error(i18n.baseText("promotions.bindings.editorClosed"));
					},
					save: (value) => {
						saved = value;
					},
					fail: (error) => {
						if (settled || disposed) return;
						settle(error);
						uiStore.closeModal(modalName);
					}
				};
				try {
					if (binding.kind === "credential") openCredentialEditor(binding, setup, session);
					else openVariableEditor(binding, setup, session);
					stopWatching = watch(() => uiStore.modalsById[modalName]?.open, (open) => {
						if (!open) settle();
					});
				} catch (error) {
					settle(error);
				}
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("promotions.bindings.error.setup"));
			throw error;
		} finally {
			active = false;
		}
	};
	onScopeDispose(() => {
		disposed = true;
		finish?.();
	});
	return {
		createBinding,
		updatePreflight,
		createdProjects: computed(() => Array.from(createdProjects.value.values()))
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionBindings.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function promotionBindingKey(binding) {
	if (binding.kind === "credential") return JSON.stringify([binding.kind, binding.sourceId]);
	return JSON.stringify([
		binding.kind,
		binding.name,
		binding.scope.kind,
		binding.scope.kind === "project" ? binding.scope.project.id : null
	]);
}
var isDestructiveChange = (conflict) => conflict.code === "destructive-change";
var isProjectDeletion = (conflict) => conflict.code === "project-deletion";
var isHardConflict = (conflict) => !isDestructiveChange(conflict) && !isProjectDeletion(conflict);
function matchesCreation(binding, created) {
	if (!created.id || promotionBindingKey(binding) !== promotionBindingKey(created)) return false;
	if (binding.kind === "credential" && created.kind === "credential") return created.id === binding.sourceId && created.credentialType === binding.credentialType && created.projectId === binding.ownerProject.id;
	return binding.kind === "variable" && created.kind === "variable";
}
function usePromotionBindings() {
	const rootStore = useRootStore();
	const originalResult = shallowRef();
	const preflight = shallowRef();
	const knownBindings = shallowRef(/* @__PURE__ */ new Map());
	const missingKeys = shallowRef(/* @__PURE__ */ new Set());
	const accessByKey = shallowRef(/* @__PURE__ */ new Map());
	const createdBindings = shallowRef(/* @__PURE__ */ new Map());
	const isSubmitting = ref(false);
	const isCreating = ref(false);
	const isFinished = ref(false);
	const sourceChanged = ref(false);
	const error = shallowRef(null);
	let session = 0;
	let expectedSource;
	let environmentId;
	function statusOf(key, projectId) {
		if (missingKeys.value.has(key)) return "missing";
		if (accessByKey.value.get(key)?.has(projectId)) return "access";
		return "resolved";
	}
	const groups = computed(() => {
		const projects = /* @__PURE__ */ new Map();
		for (const [key, binding] of knownBindings.value) for (const consumer of binding.consumers) {
			let group = projects.get(consumer.project.id);
			if (!group) {
				group = {
					project: consumer.project,
					workflows: []
				};
				projects.set(consumer.project.id, group);
			}
			const row = {
				key,
				binding,
				status: statusOf(key, consumer.project.id),
				created: createdBindings.value.get(key)
			};
			for (const workflow of consumer.workflows) {
				let workflowGroup = group.workflows.find((entry) => entry.workflow.id === workflow.id);
				if (!workflowGroup) {
					workflowGroup = {
						workflow,
						rows: []
					};
					group.workflows.push(workflowGroup);
				}
				if (!workflowGroup.rows.some((entry) => entry.key === row.key)) workflowGroup.rows.push(row);
			}
		}
		return Array.from(projects.values());
	});
	/** One row for each missing binding of the session. A created binding stays as resolved. */
	const rows = computed(() => Array.from(knownBindings.value, ([key, binding]) => ({
		key,
		binding,
		status: statusOf(key, binding.consumers[0].project.id)
	})));
	const destructiveChanges = computed(() => preflight.value?.conflicts.filter(isDestructiveChange) ?? []);
	const projectDeletions = computed(() => preflight.value?.conflicts.filter(isProjectDeletion) ?? []);
	const needsConfirmation = computed(() => destructiveChanges.value.length > 0 || projectDeletions.value.length > 0);
	const hardConflicts = computed(() => preflight.value?.conflicts.filter(isHardConflict) ?? []);
	const mode = computed(() => {
		if (hardConflicts.value.length || preflight.value?.accessRequirements.length) return "blocked";
		if (needsConfirmation.value && knownBindings.value.size === 0) return "review";
		return "bindings";
	});
	const unresolvedCount = computed(() => missingKeys.value.size + accessByKey.value.size + hardConflicts.value.length);
	const isBusy = computed(() => isSubmitting.value || isCreating.value);
	const canContinue = computed(() => !!originalResult.value && unresolvedCount.value === 0 && !isBusy.value && !sourceChanged.value && !isFinished.value);
	const savedResources = computed(() => Array.from(createdBindings.value.values()));
	function reconcile(result) {
		preflight.value = result.preflight;
		const next = new Map(knownBindings.value);
		for (const binding of result.preflight.missingBindings) next.set(promotionBindingKey(binding), binding);
		knownBindings.value = next;
		missingKeys.value = new Set(result.preflight.missingBindings.map(promotionBindingKey));
		accessByKey.value = new Map(result.preflight.accessRequirements.map((access) => [JSON.stringify([access.kind, access.sourceId]), new Set(access.consumers.map((consumer) => consumer.project.id))]));
	}
	function start(result) {
		session++;
		originalResult.value = result;
		environmentId = result.environmentId;
		expectedSource = {
			environmentId: result.environmentId,
			...result.git
		};
		knownBindings.value = /* @__PURE__ */ new Map();
		createdBindings.value = /* @__PURE__ */ new Map();
		isSubmitting.value = false;
		isCreating.value = false;
		isFinished.value = false;
		sourceChanged.value = false;
		error.value = null;
		reconcile(result);
	}
	function end() {
		session++;
		originalResult.value = void 0;
	}
	async function createBinding(key, create) {
		const binding = knownBindings.value.get(key);
		if (!originalResult.value || !binding || !missingKeys.value.has(key) || isBusy.value || sourceChanged.value || isFinished.value) return;
		const currentSession = session;
		isCreating.value = true;
		error.value = null;
		try {
			const created = await create(binding);
			if (currentSession !== session || !created) return;
			if (!matchesCreation(binding, created)) {
				error.value = { kind: "creationMismatch" };
				return;
			}
			createdBindings.value = new Map(createdBindings.value).set(key, created);
			const next = new Set(missingKeys.value);
			next.delete(key);
			missingKeys.value = next;
		} catch {} finally {
			if (currentSession === session) isCreating.value = false;
		}
	}
	async function continueInstanceApply() {
		if (!canContinue.value || !environmentId || !expectedSource) return;
		const currentSession = session;
		isSubmitting.value = true;
		error.value = null;
		try {
			const confirmDestructiveChanges = needsConfirmation.value || void 0;
			const result = await continueApplyPromotion(rootStore.publicApiContext, environmentId, {
				expectedSource: { ...expectedSource },
				confirmDestructiveChanges
			});
			if (currentSession !== session) return;
			if (result.status === "blocked") reconcile(result);
			if (result.status === "source-changed") sourceChanged.value = true;
			if (result.status === "applied") isFinished.value = true;
			return result;
		} catch (cause) {
			if (currentSession === session) error.value = {
				kind: "continue",
				cause
			};
			return;
		} finally {
			if (currentSession === session) isSubmitting.value = false;
		}
	}
	return {
		originalResult,
		preflight,
		groups,
		rows,
		destructiveChanges,
		projectDeletions,
		needsConfirmation,
		hardConflicts,
		mode,
		unresolvedCount,
		savedResources,
		isBusy,
		isSubmitting,
		isCreating,
		sourceChanged,
		error,
		canContinue,
		start,
		reconcile,
		end,
		createBinding,
		continueInstanceApply
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionCommitMessageField.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionCommitMessageField.vue
var PromotionCommitMessageField_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionCommitMessageField",
	props: /*@__PURE__*/ mergeModels({ disabled: { type: Boolean } }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		/** Optional. The backend generates the message when the trimmed value is empty. */
		const commitMessage = useModel(__props, "modelValue");
		const i18n = useI18n();
		const input = useTemplateRef("input");
		__expose({ focus: () => input.value?.focus() });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nInputLabel_default), {
				"input-name": "promote-commit-message",
				label: unref(i18n).baseText("promotions.commitMessage.label")
			}, {
				default: withCtx(() => [createVNode(unref(Input_default), {
					id: "promote-commit-message",
					ref_key: "input",
					ref: input,
					modelValue: commitMessage.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => commitMessage.value = $event),
					type: "textarea",
					rows: 3,
					maxlength: unref(PROMOTION_COMMIT_MESSAGE_MAX_LENGTH),
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("promotions.commitMessage.placeholder"),
					"data-test-id": "promote-commit-message"
				}, null, 8, [
					"modelValue",
					"maxlength",
					"disabled",
					"placeholder"
				]), createVNode(CharacterCount_default, {
					value: commitMessage.value,
					max: unref(PROMOTION_COMMIT_MESSAGE_MAX_LENGTH),
					"data-test-id": "promote-commit-message-character-count"
				}, null, 8, ["value", "max"])]),
				_: 1
			}, 8, ["label"]);
		};
	}
});
//#endregion
//#region src/features/integrations/promotions.ee/promotionResult.ts
init_runtime_core_esm_bundler();
/** Returns the URL when it uses http or https. */
function httpUrl(value) {
	if (!value) return void 0;
	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:" ? url.href : void 0;
	} catch {
		return;
	}
}
/** Renders the translated sentence when the warning has a safe link. */
function warningSegments(warning, reviewNotRecorded) {
	const url = httpUrl(warning.linkUrl);
	if (!url) return [{
		kind: "text",
		text: warning.message
	}];
	const [before, after = ""] = reviewNotRecorded.split("%%url%%");
	return [
		...before ? [{
			kind: "text",
			text: before
		}] : [],
		{
			kind: "link",
			url
		},
		...after ? [{
			kind: "text",
			text: after
		}] : []
	];
}
var externalLink = (href, label) => h("a", {
	href,
	target: "_blank",
	rel: "noopener noreferrer"
}, label);
/** Toast body for a selection promote. A link or a warning keeps the toast open. */
function promoteSuccessToast(result, text) {
	const warnings = result.warnings ?? [];
	const mergeRequestUrl = httpUrl(result.review?.webUrl);
	if (!mergeRequestUrl && warnings.length === 0) return { message: text.pushed };
	const summary = mergeRequestUrl ? externalLink(mergeRequestUrl, text.viewMergeRequest) : text.pushed;
	return {
		message: h("div", [h("div", [summary]), ...warnings.map((warning) => h("div", warningNodes(warning, text.reviewNotRecorded)))]),
		duration: 0
	};
}
var warningNodes = (warning, reviewNotRecorded) => warningSegments(warning, reviewNotRecorded).map((segment) => segment.kind === "link" ? externalLink(segment.url, segment.url) : segment.text);
/**
* Appends how many workflows and folders an Apply moved within their projects, and how many
* folders it renamed, so prod does not change without notice. Moved workflows are part of the
* updated count.
*/
function withMoveAndRenameNote(i18n, message, { workflows, folders }) {
	const folderCount = (count) => i18n.baseText("promotions.applied.moved.folders", {
		adjustToNumber: count,
		interpolate: { count: String(count) }
	});
	const notes = [message];
	if (workflows.moved + folders.moved > 0) notes.push(i18n.baseText("promotions.applied.moved", { interpolate: {
		workflows: i18n.baseText("promotions.applied.moved.workflows", {
			adjustToNumber: workflows.moved,
			interpolate: { count: String(workflows.moved) }
		}),
		folders: folderCount(folders.moved)
	} }));
	if (folders.renamed > 0) notes.push(i18n.baseText("promotions.applied.renamed", { interpolate: { folders: folderCount(folders.renamed) } }));
	return notes.join(" ");
}
//#endregion
export { PromotionCommitMessageField_default as a, withMoveAndRenameNote as i, promoteSuccessToast as n, usePromotionBindings as o, warningSegments as r, usePromotionBindingCreation as s, httpUrl as t };
