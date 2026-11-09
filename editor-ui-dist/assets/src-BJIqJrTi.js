import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Cf as watch, Gd as createVNode, Kf as unref, Ld as computed, Md as withKeys, Nd as withModifiers, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Vf as toRaw, Wd as createTextVNode, as as useRoute, ep as init_shared_esm_bundler, ff as renderList, is as onBeforeRouteUpdate, mo as defineStore, nf as mergeProps, os as useRouter, pp as normalizeClass, qd as defineComponent, rf as nextTick, rs as onBeforeRouteLeave, sf as onMounted, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { DT as N8nDataTableServer_default, ED as N8nText_default, FD as N8nIcon_default, G as SELF_HEALING_CONFIGURATION_VIEW, HT as N8nTimeAgo_default, Hy as useToast, Jy as useUsersStore, MT as N8nUserInfo_default, ND as N8nIconButton_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, UD as useI18n, Uy as VIEWS, Xy as useRootStore, aT as Combobox_default, bb as makeRestApiRequest, cE as SettingsSection_default, fE as SettingsRow_default, hE as SettingsLayout_default, lD as N8nAvatar_default, lT as useMessage, mD as N8nActionToggle_default, mE as SettingsPageHeader_default, qT as N8nSwitch_default, rE as N8nSegmentControl_default, uE as SettingsRowGroup_default } from "./app-DbOOaPK6.js";
//#region ../../modules/self-healing/frontend/src/self-healing.api.ts
var path = (projectId) => `/projects/${projectId}/self-healing-configurations`;
var fetchConfigurations = async (context, projectId) => await makeRestApiRequest(context, "GET", path(projectId));
var fetchConfigurationOptions = async (context, projectId) => await makeRestApiRequest(context, "GET", `${path(projectId)}/options`);
var saveConfiguration = async (context, projectId, input, id) => {
	if (id === void 0) return await makeRestApiRequest(context, "POST", path(projectId), input);
	return await makeRestApiRequest(context, "PATCH", `${path(projectId)}/${id}`, input);
};
var setConfigurationEnabled = async (context, projectId, id, enabled) => await makeRestApiRequest(context, "PATCH", `${path(projectId)}/${id}/enabled`, { enabled });
var removeConfiguration = async (context, projectId, id) => await makeRestApiRequest(context, "DELETE", `${path(projectId)}/${id}`);
//#endregion
//#region ../../modules/self-healing/frontend/src/self-healing.store.ts
init_reactivity_esm_bundler();
var useSelfHealingStore = defineStore("selfHealing", () => {
	const root = useRootStore();
	const configurations = ref({});
	const options = ref({});
	const pendingLoads = /* @__PURE__ */ new Map();
	async function load(projectId) {
		const request = Symbol();
		pendingLoads.set(projectId, request);
		const [rows, choices] = await Promise.all([fetchConfigurations(root.restApiContext, projectId), fetchConfigurationOptions(root.restApiContext, projectId)]);
		if (pendingLoads.get(projectId) !== request) return;
		pendingLoads.delete(projectId);
		configurations.value[projectId] = rows;
		options.value[projectId] = choices;
	}
	function remember(projectId, configuration) {
		pendingLoads.delete(projectId);
		const rows = configurations.value[projectId] ?? [];
		configurations.value[projectId] = rows.some(({ id }) => id === configuration.id) ? rows.map((row) => row.id === configuration.id ? configuration : row) : [...rows, configuration];
	}
	async function save(projectId, input, id) {
		const configuration = await saveConfiguration(root.restApiContext, projectId, input, id);
		remember(projectId, configuration);
		return configuration;
	}
	async function setEnabled(projectId, id, enabled) {
		remember(projectId, await setConfigurationEnabled(root.restApiContext, projectId, id, enabled));
	}
	async function remove(projectId, id) {
		await removeConfiguration(root.restApiContext, projectId, id);
		pendingLoads.delete(projectId);
		configurations.value[projectId] = (configurations.value[projectId] ?? []).filter((row) => row.id !== id);
	}
	return {
		configurations,
		options,
		load,
		save,
		setEnabled,
		remove
	};
});
//#endregion
//#region ../../modules/self-healing/frontend/src/components/ProjectSelfHealingSection.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = { key: 0 };
var ProjectSelfHealingSection_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ProjectSelfHealingSection",
	props: { projectId: {} },
	setup(__props) {
		const props = __props;
		const store = useSelfHealingStore();
		const rootStore = useRootStore();
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const router = useRouter();
		const route = useRoute();
		const sectionRef = ref(null);
		const loading = ref(false);
		const isUpdating = ref(false);
		const failed = ref(false);
		const configurations = computed(() => store.configurations[props.projectId] ?? []);
		const headers = computed(() => [
			{
				title: i18n.baseText("selfHealing.config.scope"),
				key: "scope",
				width: 240,
				disableSort: true
			},
			{
				title: i18n.baseText("selfHealing.config.peopleToNotify"),
				key: "reviewerIds",
				width: 200,
				disableSort: true
			},
			{
				title: i18n.baseText("selfHealing.config.lastActivity"),
				key: "lastActivity",
				width: 200,
				disableSort: true
			},
			{
				title: i18n.baseText("selfHealing.config.active"),
				key: "enabled",
				width: 110,
				disableSort: true
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 46,
				disableSort: true,
				value: () => void 0
			}
		]);
		const configActions = computed(() => [{
			label: i18n.baseText("generic.edit"),
			value: "edit"
		}, {
			label: i18n.baseText("generic.delete"),
			value: "delete",
			destructive: true
		}]);
		const reviewersById = computed(() => new Map(store.options[props.projectId]?.reviewers.map((reviewer) => [reviewer.id, reviewer])));
		function scopeLabel(configuration) {
			if (configuration.scope === "all") return i18n.baseText("selfHealing.config.all");
			return i18n.baseText("selfHealing.config.selectedCount", {
				adjustToNumber: configuration.workflowIds.length,
				interpolate: { count: configuration.workflowIds.length }
			});
		}
		async function load() {
			loading.value = true;
			failed.value = false;
			try {
				await store.load(props.projectId);
			} catch (error) {
				failed.value = true;
				toast.showError(error, i18n.baseText("selfHealing.config.loadError"));
			} finally {
				loading.value = false;
				if (route.hash === "#self-healing") {
					await nextTick();
					sectionRef.value?.scrollIntoView({ block: "start" });
				}
			}
		}
		watch(() => props.projectId, load, { immediate: true });
		function edit(id) {
			router.push({
				name: SELF_HEALING_CONFIGURATION_VIEW,
				params: {
					projectId: props.projectId,
					configurationId: String(id)
				}
			});
		}
		function reviewerName(id) {
			const user = reviewersById.value.get(id);
			return user ? [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email : i18n.baseText("selfHealing.config.unavailableReviewer");
		}
		async function toggle(configuration) {
			isUpdating.value = true;
			try {
				await store.setEnabled(props.projectId, configuration.id, !configuration.enabled);
			} catch (error) {
				toast.showError(error, i18n.baseText("selfHealing.config.saveError"));
			} finally {
				isUpdating.value = false;
			}
		}
		async function remove(configuration) {
			if (await message.confirm(i18n.baseText("selfHealing.config.removeMessage"), i18n.baseText("selfHealing.config.removeTitle"), {
				confirmButtonText: i18n.baseText("generic.delete"),
				cancelButtonText: i18n.baseText("generic.cancel"),
				type: "warning"
			}) !== "confirm") return;
			isUpdating.value = true;
			try {
				await store.remove(props.projectId, configuration.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("selfHealing.config.removeError"));
			} finally {
				isUpdating.value = false;
			}
		}
		async function onAction(configuration, action) {
			if (action === "edit") edit(configuration.id);
			else if (action === "delete") await remove(configuration);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("fieldset", {
				id: "self-healing",
				ref_key: "sectionRef",
				ref: sectionRef,
				"data-test-id": "project-self-healing"
			}, [
				createBaseVNode("h3", null, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("selfHealing.config.heading")), 1)]),
				loading.value ? (openBlock(), createElementBlock("p", _hoisted_1$1, toDisplayString(unref(i18n).baseText("selfHealing.config.loading")), 1)) : failed.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					type: "button",
					variant: "outline",
					onClick: load
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.retry")), 1)]),
					_: 1
				})) : !configurations.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.empty)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.empty")), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.table)
				}, [createVNode(unref(N8nDataTableServer_default), {
					"items-per-page": configurations.value.length,
					headers: headers.value,
					items: configurations.value,
					"items-length": configurations.value.length,
					"page-sizes": [configurations.value.length + 1]
				}, {
					[`item.scope`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-dark",
						"data-test-id": "self-healing-configuration-row"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(scopeLabel(item)), 1)]),
						_: 2
					}, 1024)]),
					[`item.reviewerIds`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.people) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.reviewerIds, (id) => {
						return openBlock(), createElementBlock("div", {
							key: id,
							class: normalizeClass(_ctx.$style.person)
						}, [createVNode(unref(N8nAvatar_default), {
							"first-name": reviewersById.value.get(id)?.firstName,
							"last-name": reviewersById.value.get(id)?.lastName,
							size: "xsmall"
						}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), {
							size: "medium",
							color: "text-dark",
							class: normalizeClass(_ctx.$style.personName),
							title: reviewerName(id)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(reviewerName(id)), 1)]),
							_: 2
						}, 1032, ["class", "title"])], 2);
					}), 128))], 2)]),
					[`item.lastActivity`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
						size: "medium",
						color: item.lastActivity ? "text-dark" : "text-light"
					}, {
						default: withCtx(() => [item.lastActivity ? (openBlock(), createBlock(unref(N8nTimeAgo_default), {
							key: 0,
							date: item.lastActivity,
							locale: unref(rootStore).defaultLocale
						}, null, 8, ["date", "locale"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.noActivity")), 1)], 64))]),
						_: 2
					}, 1032, ["color"])]),
					[`item.enabled`]: withCtx(({ item }) => [createVNode(unref(N8nSwitch_default), {
						"model-value": item.enabled,
						disabled: isUpdating.value,
						"aria-label": unref(i18n).baseText("selfHealing.config.enabled"),
						"data-test-id": "self-healing-config-active",
						"onUpdate:modelValue": ($event) => toggle(item)
					}, null, 8, [
						"model-value",
						"disabled",
						"aria-label",
						"onUpdate:modelValue"
					])]),
					[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nActionToggle_default), {
						actions: configActions.value,
						placement: "bottom",
						disabled: isUpdating.value,
						"data-test-id": "self-healing-config-actions",
						onAction: ($event) => onAction(item, $event)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "ellipsis",
							variant: "ghost",
							size: "small",
							disabled: isUpdating.value,
							"aria-label": unref(i18n).baseText("selfHealing.config.actions")
						}, null, 8, ["disabled", "aria-label"])]),
						_: 1
					}, 8, [
						"actions",
						"disabled",
						"onAction"
					])]),
					_: 2
				}, 1032, [
					"items-per-page",
					"headers",
					"items",
					"items-length",
					"page-sizes"
				])], 2)),
				createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "large",
					icon: "plus",
					type: "button",
					"data-test-id": "self-healing-create",
					onClick: _cache[0] || (_cache[0] = ($event) => edit("new"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.create")), 1)]),
					_: 1
				})
			], 512);
		};
	}
}), [["__cssModules", { "$style": {
	table: "_table_1r9fs_1",
	people: "_people_1r9fs_8",
	person: "_person_1r9fs_15",
	personName: "_personName_1r9fs_22",
	empty: "_empty_1r9fs_28"
} }]]);
//#endregion
//#region ../../modules/self-healing/frontend/src/views/SelfHealingConfigView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { key: 0 };
var SelfHealingConfigView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SelfHealingConfigView",
	props: {
		projectId: {},
		configurationId: {}
	},
	setup(__props) {
		const props = __props;
		const store = useSelfHealingStore();
		const users = useUsersStore();
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const router = useRouter();
		const pageRef = ref(null);
		const loading = ref(true);
		const saving = ref(false);
		const loadError = ref(false);
		const savedForm = ref();
		const form = ref({
			scope: "all",
			workflowIds: [],
			reviewerIds: [],
			enabled: true
		});
		const isNew = computed(() => props.configurationId === "new");
		const choices = computed(() => store.options[props.projectId]);
		const otherConfigurations = computed(() => (store.configurations[props.projectId] ?? []).filter(({ id }) => String(id) !== props.configurationId));
		const hasAllWorkflowsConfiguration = computed(() => otherConfigurations.value.some(({ scope }) => scope === "all"));
		const reservedWorkflows = computed(() => new Set(otherConfigurations.value.flatMap(({ workflowIds }) => workflowIds)));
		const scopeOptions = computed(() => [{
			value: "all",
			label: i18n.baseText("selfHealing.config.allScope"),
			disabled: hasAllWorkflowsConfiguration.value
		}, {
			value: "selected",
			label: i18n.baseText("selfHealing.config.selected")
		}]);
		const workflowPickerItems = computed(() => (choices.value?.workflows ?? []).filter(({ id }) => !form.value.workflowIds.includes(id)).map(({ id, name }) => ({
			value: id,
			label: name,
			icon: "workflow",
			disabled: reservedWorkflows.value.has(id)
		})));
		const selectedWorkflows = computed(() => form.value.workflowIds.map((id) => ({
			id,
			name: choices.value?.workflows.find((workflow) => workflow.id === id)?.name ?? i18n.baseText("selfHealing.config.unavailableWorkflow")
		})));
		const reviewersById = computed(() => new Map(choices.value?.reviewers.map((reviewer) => [reviewer.id, reviewer])));
		function reviewerName(id) {
			const reviewer = reviewersById.value.get(id);
			if (!reviewer) return i18n.baseText("selfHealing.config.unavailableReviewer");
			const name = [reviewer.firstName, reviewer.lastName].filter(Boolean).join(" ") || reviewer.email;
			if (id === users.currentUser?.id) return i18n.baseText("selfHealing.config.you", { interpolate: { name } });
			return name;
		}
		const selectedReviewers = computed(() => form.value.reviewerIds.map((id) => ({
			id,
			user: reviewersById.value.get(id)
		})));
		const reviewerPickerItems = computed(() => (choices.value?.reviewers ?? []).filter(({ id }) => !form.value.reviewerIds.includes(id)).map((reviewer) => ({
			value: reviewer.id,
			label: reviewerName(reviewer.id),
			keywords: [reviewer.email]
		})));
		function addWorkflow(value) {
			if (typeof value === "string" && value && !form.value.workflowIds.includes(value)) form.value.workflowIds.push(value);
		}
		function addReviewer(value) {
			if (typeof value === "string" && value && !form.value.reviewerIds.includes(value)) form.value.reviewerIds.push(value);
		}
		onMounted(() => pageRef.value?.scrollIntoView({ block: "start" }));
		const dirty = computed(() => !!savedForm.value && JSON.stringify(form.value) !== JSON.stringify(savedForm.value));
		const isFormValid = computed(() => {
			if (form.value.reviewerIds.length === 0) return false;
			if (form.value.scope === "all") return !hasAllWorkflowsConfiguration.value;
			return form.value.workflowIds.length > 0 && form.value.workflowIds.every((id) => !reservedWorkflows.value.has(id));
		});
		const title = computed(() => i18n.baseText(isNew.value ? "selfHealing.config.new" : "selfHealing.config.edit"));
		let pendingLoad;
		async function load() {
			const request = Symbol();
			pendingLoad = request;
			loading.value = true;
			loadError.value = false;
			savedForm.value = void 0;
			try {
				await store.load(props.projectId);
				if (pendingLoad !== request) return;
				const configuration = store.configurations[props.projectId]?.find(({ id }) => String(id) === props.configurationId);
				if (!isNew.value && !configuration) throw new Error(i18n.baseText("selfHealing.config.notFound"));
				if (configuration) form.value = {
					scope: configuration.scope,
					workflowIds: [...configuration.workflowIds],
					reviewerIds: [...configuration.reviewerIds],
					enabled: configuration.enabled
				};
				else form.value = {
					scope: hasAllWorkflowsConfiguration.value ? "selected" : "all",
					workflowIds: [],
					reviewerIds: users.currentUser ? [users.currentUser.id] : [],
					enabled: true
				};
				savedForm.value = structuredClone(toRaw(form.value));
			} catch (error) {
				if (pendingLoad !== request) return;
				loadError.value = true;
				toast.showError(error, i18n.baseText("selfHealing.config.loadError"));
			} finally {
				if (pendingLoad === request) loading.value = false;
			}
		}
		watch(() => [props.projectId, props.configurationId], load, { immediate: true });
		function discard() {
			if (savedForm.value) form.value = structuredClone(toRaw(savedForm.value));
		}
		function back() {
			router.push({
				name: VIEWS.PROJECT_SETTINGS,
				params: { projectId: props.projectId },
				hash: "#self-healing"
			});
		}
		async function save() {
			saving.value = true;
			try {
				const payload = structuredClone(toRaw(form.value));
				if (payload.scope === "all") payload.workflowIds = [];
				const { scope, workflowIds, reviewerIds } = payload;
				await store.save(props.projectId, isNew.value ? payload : {
					scope,
					workflowIds,
					reviewerIds
				}, isNew.value ? void 0 : Number(props.configurationId));
				form.value = payload;
				savedForm.value = structuredClone(payload);
				toast.showMessage({
					title: i18n.baseText("selfHealing.config.saved"),
					type: "success"
				});
				if (isNew.value) back();
			} catch (error) {
				toast.showError(error, i18n.baseText("selfHealing.config.saveError"));
			} finally {
				saving.value = false;
			}
		}
		async function confirmDiscardChanges() {
			if (!dirty.value) return true;
			return await message.confirm(i18n.baseText("selfHealing.config.unsavedMessage"), i18n.baseText("selfHealing.config.unsavedTitle"), {
				confirmButtonText: i18n.baseText("selfHealing.config.discard"),
				cancelButtonText: i18n.baseText("generic.cancel"),
				type: "warning"
			}) === "confirm";
		}
		onBeforeRouteLeave(confirmDiscardChanges);
		onBeforeRouteUpdate(async (to, from) => {
			if (to.params.projectId !== from.params.projectId || to.params.configurationId !== from.params.configurationId) return await confirmDiscardChanges();
			return true;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "pageRef",
				ref: pageRef,
				class: normalizeClass(_ctx.$style.page)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.backBar) }, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				size: "small",
				class: normalizeClass(_ctx.$style.backButton),
				onClick: back
			}, {
				icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "arrow-left" })]),
				default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("selfHealing.config.back")), 1)]),
				_: 1
			}, 8, ["class"])], 2), createVNode(unref(SettingsLayout_default), {
				class: normalizeClass(_ctx.$style.layout),
				"data-test-id": "self-healing-config-page"
			}, {
				default: withCtx(() => [createVNode(unref(SettingsPageHeader_default), {
					title: title.value,
					description: unref(i18n).baseText("selfHealing.config.description"),
					"show-docs-link": false
				}, null, 8, ["title", "description"]), loading.value ? (openBlock(), createElementBlock("p", _hoisted_1, toDisplayString(unref(i18n).baseText("selfHealing.config.loading")), 1)) : loadError.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "outline",
					onClick: load
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.retry")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock("form", {
					key: 2,
					onSubmit: withModifiers(save, ["prevent"])
				}, [
					createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("selfHealing.config.scope") }, {
						default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRow_default), {
								title: unref(i18n).baseText("selfHealing.config.workflows"),
								description: unref(i18n).baseText("selfHealing.config.scopeHelp")
							}, {
								action: withCtx(() => [createVNode(unref(N8nSegmentControl_default), {
									modelValue: form.value.scope,
									"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.scope = $event),
									options: scopeOptions.value,
									disabled: saving.value,
									"aria-label": unref(i18n).baseText("selfHealing.config.scope"),
									"data-test-id": "self-healing-scope"
								}, null, 8, [
									"modelValue",
									"options",
									"disabled",
									"aria-label"
								])]),
								_: 1
							}, 8, ["title", "description"])]),
							_: 1
						}), form.value.scope === "selected" ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 0 }, {
							default: withCtx(() => [createVNode(unref(SettingsRow_default), { layout: "custom" }, {
								default: withCtx(() => [createVNode(unref(Combobox_default), {
									id: "self-healing-workflows",
									"model-value": "",
									icon: "search",
									class: normalizeClass(_ctx.$style.searchPicker),
									items: workflowPickerItems.value,
									disabled: saving.value,
									"aria-label": unref(i18n).baseText("selfHealing.config.workflows"),
									placeholder: unref(i18n).baseText("selfHealing.config.chooseWorkflows"),
									"data-test-id": "self-healing-workflows",
									"onUpdate:modelValue": addWorkflow,
									onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {}, ["prevent"]), ["enter"]))
								}, {
									"item-trailing": withCtx(({ item }) => [item.disabled ? (openBlock(), createBlock(unref(N8nText_default), {
										key: 0,
										size: "small",
										color: "text-light"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.workflowReserved")), 1)]),
										_: 1
									})) : createCommentVNode("", true)]),
									_: 1
								}, 8, [
									"class",
									"items",
									"disabled",
									"aria-label",
									"placeholder"
								]), !selectedWorkflows.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
									key: 0,
									size: "small",
									color: "text-light",
									class: normalizeClass(_ctx.$style.hint)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.noWorkflows")), 1)]),
									_: 1
								}, 8, ["class"])) : createCommentVNode("", true)]),
								_: 1
							}), (openBlock(true), createElementBlock(Fragment, null, renderList(selectedWorkflows.value, (workflow) => {
								return openBlock(), createBlock(unref(SettingsRow_default), {
									key: workflow.id,
									title: workflow.name,
									"show-visual": "",
									"data-test-id": "self-healing-selected-workflow"
								}, {
									visual: withCtx(() => [createVNode(unref(N8nIcon_default), {
										icon: "workflow",
										size: "large"
									})]),
									action: withCtx(() => [createVNode(unref(N8nIconButton_default), {
										icon: "x",
										variant: "ghost",
										size: "small",
										disabled: saving.value,
										"aria-label": unref(i18n).baseText("selfHealing.config.removeWorkflow"),
										onClick: ($event) => form.value.workflowIds = form.value.workflowIds.filter((id) => id !== workflow.id)
									}, null, 8, [
										"disabled",
										"aria-label",
										"onClick"
									])]),
									_: 2
								}, 1032, ["title"]);
							}), 128))]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["title"]),
					createVNode(unref(SettingsSection_default), {
						title: unref(i18n).baseText("selfHealing.config.reviewers"),
						description: unref(i18n).baseText("selfHealing.config.reviewersHelp")
					}, {
						default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRow_default), { layout: "custom" }, {
								default: withCtx(() => [createVNode(unref(Combobox_default), {
									id: "self-healing-reviewers",
									"model-value": "",
									items: reviewerPickerItems.value,
									disabled: saving.value,
									"aria-label": unref(i18n).baseText("selfHealing.config.reviewers"),
									placeholder: unref(i18n).baseText("selfHealing.config.chooseReviewers"),
									"data-test-id": "self-healing-reviewers",
									"onUpdate:modelValue": addReviewer,
									onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(() => {}, ["prevent"]), ["enter"]))
								}, {
									"item-leading": withCtx(({ item }) => [createVNode(unref(N8nAvatar_default), {
										"first-name": reviewersById.value.get(item.value)?.firstName,
										"last-name": reviewersById.value.get(item.value)?.lastName,
										size: "small"
									}, null, 8, ["first-name", "last-name"])]),
									_: 1
								}, 8, [
									"items",
									"disabled",
									"aria-label",
									"placeholder"
								]), !form.value.reviewerIds.length ? (openBlock(), createBlock(unref(N8nText_default), {
									key: 0,
									size: "small",
									color: "text-light",
									class: normalizeClass(_ctx.$style.hint)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.noReviewers")), 1)]),
									_: 1
								}, 8, ["class"])) : createCommentVNode("", true)]),
								_: 1
							}), (openBlock(true), createElementBlock(Fragment, null, renderList(selectedReviewers.value, (reviewer) => {
								return openBlock(), createBlock(unref(SettingsRow_default), {
									key: reviewer.id,
									"data-test-id": "self-healing-selected-reviewer"
								}, {
									info: withCtx(() => [reviewer.user ? (openBlock(), createBlock(unref(N8nUserInfo_default), mergeProps({
										key: 0,
										ref_for: true
									}, reviewer.user, { "is-current-user": reviewer.id === unref(users).currentUser?.id }), null, 16, ["is-current-user"])) : (openBlock(), createBlock(unref(N8nText_default), { key: 1 }, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("selfHealing.config.unavailableReviewer")), 1)]),
										_: 1
									}))]),
									action: withCtx(() => [createVNode(unref(N8nIconButton_default), {
										icon: "x",
										variant: "ghost",
										size: "small",
										disabled: saving.value,
										"aria-label": unref(i18n).baseText("selfHealing.config.removeReviewer"),
										onClick: ($event) => form.value.reviewerIds = form.value.reviewerIds.filter((id) => id !== reviewer.id)
									}, null, 8, [
										"disabled",
										"aria-label",
										"onClick"
									])]),
									_: 2
								}, 1024);
							}), 128))]),
							_: 1
						})]),
						_: 1
					}, 8, ["title", "description"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
						type: "button",
						variant: "outline",
						disabled: saving.value || !isNew.value && !dirty.value,
						onClick: _cache[3] || (_cache[3] = ($event) => isNew.value ? back() : discard())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(isNew.value ? "generic.cancel" : "selfHealing.config.discard")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						type: "submit",
						loading: saving.value,
						disabled: !isFormValid.value || !isNew.value && !dirty.value,
						"data-test-id": "self-healing-save"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(isNew.value ? "selfHealing.config.createAction" : "selfHealing.config.save")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"])], 2)
				], 32))]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
}), [["__cssModules", { "$style": {
	page: "_page_1qc2e_1",
	backBar: "_backBar_1qc2e_5",
	backButton: "_backButton_1qc2e_13",
	layout: "_layout_1qc2e_17",
	actions: "_actions_1qc2e_21",
	searchPicker: "_searchPicker_1qc2e_28",
	hint: "_hint_1qc2e_32"
} }]]);
//#endregion
export { ProjectSelfHealingSection_default as n, SelfHealingConfigView_default as t };
