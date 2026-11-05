import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Cf as watch, Ef as withDirectives, Gd as createVNode, Kf as unref, Ld as computed, Nd as withModifiers, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, Yo as require_dateformat, as as useRoute, ep as init_shared_esm_bundler, ff as renderList, jd as vShow, os as useRouter, pp as normalizeClass, qd as defineComponent, sf as onMounted, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { Cg as PROJECT_MOVE_RESOURCE_MODAL, Cm as useProjectsStore, ED as N8nText_default, Ey as EnterpriseEditionFeature, FE as N8nSelect_default, Hy as useToast, IE as N8nOption_default, Is as useDependencies, Ky as useTelemetry, Mg as CREDENTIAL_SELECT_MODAL_KEY, Ns as PrivateCredentialIcon_default, OD as N8nTooltip_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, RE as N8nInputLabel_default, Tm as useSourceControlStore, UD as useI18n, Uy as VIEWS, Wh as isCredentialsResource, Yy as useSettingsStore, ag as useUIStore, bm as ResourceType, gu as CredentialIcon_default, ig as listenForModalChanges, jd as useExternalSecretsStore, kf as usePrivateCredentials, lT as useMessage, mD as N8nActionToggle_default, np as useDocumentTitle, qm as useCredentialDescriptionsExperiment, sm as useCredentialsStore, tD as N8nCard_default, to as useInstanceAiCredentialHelp, wu as useCredentialOAuth, xD as N8nBadge_default, xu as ProjectCardBadge_default, ym as useEnvironmentsStore, yp as useNodeTypesStore, zE as Checkbox_default, zs as TimeAgo_default, zx as getResourcePermissions } from "./app-CfhiRDif.js";
import { i as useProjectPages } from "./readyToRun.store-Cq2nYZHT.js";
import { t as EmptySharedSectionActionBox_default } from "./EmptySharedSectionActionBox-DDfdb4eD.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-mD-s-u8q.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-C85rQYh0.js";
import { t as ProjectHeader_default } from "./ProjectHeader-D398b6Dv.js";
import { t as DependencyPill_default } from "./DependencyPill-DbZC-aJW.js";
import { t as useInsightsStore } from "./insights.store-DB98yOGb.js";
import { t as InsightsSummary_default } from "./InsightsSummary-CyiX3auK.js";
import "./src-B_lZgES8.js";
import { t as require_pickBy } from "./pickBy-Be8KcaJm.js";
//#region src/features/credentials/components/CredentialCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1$1 = { key: 0 };
var CredentialCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CredentialCard",
	props: {
		data: {},
		readOnly: {
			type: Boolean,
			default: false
		},
		needsSetup: {
			type: Boolean,
			default: false
		}
	},
	emits: ["click", "connected"],
	setup(__props, { emit: __emit }) {
		const { isEnabled: credentialDescriptionsEnabled } = useCredentialDescriptionsExperiment();
		const CREDENTIAL_LIST_ITEM_ACTIONS = {
			OPEN: "open",
			DELETE: "delete",
			MOVE: "move",
			DISCONNECT: "disconnect"
		};
		const emit = __emit;
		const props = __props;
		const locale = useI18n();
		const message = useMessage();
		const toast = useToast();
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const { isEnabled: isPrivateCredentialsEnabled } = usePrivateCredentials();
		const { hasDependencies } = useDependencies();
		const { authorize, isOAuthCredentialType } = useCredentialOAuth();
		const isConnecting = ref(false);
		const resourceTypeLabel = computed(() => locale.baseText("generic.credential").toLowerCase());
		const credentialType = computed(() => credentialsStore.getCredentialTypeByName(props.data.type ?? ""));
		const credentialPermissions = computed(() => getResourcePermissions(props.data.scopes).credential);
		const isPrivateUnconnected = computed(() => isPrivateCredentialsEnabled.value && props.data.isResolvable === true && props.data.connectedByMe === false && credentialPermissions.value.connect === true);
		const actions = computed(() => {
			const items = [{
				label: locale.baseText("credentials.item.open"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.OPEN
			}];
			if (credentialPermissions.value.delete && (!props.data.isResolvable || credentialPermissions.value.createEndUser)) items.push({
				label: locale.baseText("credentials.item.delete"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.DELETE
			});
			if (credentialPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) items.push({
				label: locale.baseText("credentials.item.move"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.MOVE
			});
			if (isPrivateCredentialsEnabled.value && props.data.isResolvable && props.data.connectedByMe) items.push({
				label: locale.baseText("credentials.item.disconnect"),
				value: CREDENTIAL_LIST_ITEM_ACTIONS.DISCONNECT
			});
			return items;
		});
		const formattedCreatedAtDate = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			return (0, import_dateformat.default)(props.data.createdAt, `d mmmm${String(props.data.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
		});
		const credentialHasDependents = computed(() => hasDependencies(props.data.id, "credential"));
		function onClick() {
			emit("click", props.data.id);
		}
		async function onConnect() {
			const credential = credentialsStore.getCredentialById(props.data.id);
			if (!credential) return;
			if (!isOAuthCredentialType(credential.type)) {
				onClick();
				return;
			}
			isConnecting.value = true;
			try {
				if (await authorize(credential)) emit("connected", props.data.id);
			} finally {
				isConnecting.value = false;
			}
		}
		async function onAction(action) {
			switch (action) {
				case CREDENTIAL_LIST_ITEM_ACTIONS.OPEN:
					onClick();
					break;
				case CREDENTIAL_LIST_ITEM_ACTIONS.DELETE:
					await deleteResource();
					break;
				case CREDENTIAL_LIST_ITEM_ACTIONS.MOVE:
					moveResource();
					break;
				case CREDENTIAL_LIST_ITEM_ACTIONS.DISCONNECT: await disconnectResource();
			}
		}
		async function deleteResource() {
			if (await message.confirm(locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.message", { interpolate: { savedCredentialName: props.data.name } }), locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline"), { confirmButtonText: locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText") }) === "confirm") await credentialsStore.deleteCredential({ id: props.data.id });
		}
		async function disconnectResource() {
			if (await message.confirm(locale.baseText("credentialEdit.credentialEdit.confirmMessage.disconnectCredential.message", { interpolate: { savedCredentialName: props.data.name } }), locale.baseText("credentialEdit.credentialEdit.confirmMessage.disconnectCredential.headline"), { confirmButtonText: locale.baseText("credentialEdit.credentialEdit.confirmMessage.disconnectCredential.confirmButtonText") }) !== "confirm") return;
			try {
				await credentialsStore.disconnectMyConnection({ id: props.data.id });
				toast.showMessage({
					title: locale.baseText("credentialEdit.credentialEdit.showMessage.disconnected.title"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("credentialEdit.credentialEdit.showError.disconnectCredential.title"));
			}
		}
		function moveResource() {
			uiStore.openModalWithData({
				name: PROJECT_MOVE_RESOURCE_MODAL,
				data: {
					resource: props.data,
					resourceType: ResourceType.Credential,
					resourceTypeLabel: resourceTypeLabel.value
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				onClick: withModifiers(onClick, ["stop"])
			}, {
				prepend: withCtx(() => [createVNode(CredentialIcon_default, { "credential-type-name": credentialType.value?.name ?? "" }, null, 8, ["credential-type-name"])]),
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(_ctx.$style.cardHeading)
				}, {
					default: withCtx(() => [
						createTextVNode(toDisplayString(__props.data.name) + " ", 1),
						__props.readOnly ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							class: "ml-3xs",
							variant: "outline"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.readonly")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						__props.needsSetup ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 1,
							class: "ml-3xs",
							variant: "warning"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.needsSetup")), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["class"])]),
				append: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.cardActions),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [
					credentialHasDependents.value ? (openBlock(), createBlock(DependencyPill_default, {
						key: 0,
						"resource-type": "credential",
						"resource-id": __props.data.id,
						source: "credential_card",
						"data-test-id": "credential-card-dependents"
					}, null, 8, ["resource-id"])) : createCommentVNode("", true),
					createVNode(ProjectCardBadge_default, {
						class: normalizeClass(_ctx.$style.cardBadge),
						resource: __props.data,
						"resource-type": unref(ResourceType).Credential,
						"resource-type-label": resourceTypeLabel.value,
						"personal-project": unref(projectsStore).personalProject,
						"show-badge-border": false,
						global: __props.data.isGlobal
					}, null, 8, [
						"class",
						"resource",
						"resource-type",
						"resource-type-label",
						"personal-project",
						"global"
					]),
					isPrivateUnconnected.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.connect.tooltip")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							size: "mini",
							loading: isConnecting.value,
							"data-test-id": "credential-card-connect",
							onClick: onConnect
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.connect")), 1)]),
							_: 1
						}, 8, ["loading"])]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nActionToggle_default), {
						"data-test-id": "credential-card-actions",
						actions: actions.value,
						theme: "dark",
						onAction
					}, null, 8, ["actions"])
				], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.cardDescription, { [_ctx.$style.hasDescription]: __props.data.description }]) }, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [
						credentialType.value ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(credentialType.value.displayName) + " | ", 1)) : createCommentVNode("", true),
						withDirectives(createBaseVNode("span", null, [
							createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.updated")) + " ", 1),
							createVNode(TimeAgo_default, { date: __props.data.updatedAt }, null, 8, ["date"]),
							_cache[1] || (_cache[1] = createTextVNode(" | ", -1))
						], 512), [[vShow, __props.data]]),
						withDirectives(createBaseVNode("span", null, toDisplayString(unref(locale).baseText("credentials.item.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 513), [[vShow, __props.data]])
					]),
					_: 1
				}), unref(isPrivateCredentialsEnabled) && __props.data.isResolvable ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.privateCredentialIndicator),
					"data-test-id": "credential-card-dynamic"
				}, [createVNode(PrivateCredentialIcon_default, {
					"tooltip-title": unref(locale).baseText("credentials.private.tooltipTitle"),
					"tooltip-text": unref(locale).baseText("credentials.private.tooltip"),
					size: "small"
				}, null, 8, ["tooltip-title", "tooltip-text"])], 2)) : createCommentVNode("", true)], 2), unref(credentialDescriptionsEnabled) && __props.data.description ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "top",
					"as-child": ""
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(__props.data.description), 1)]),
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.credentialDescription),
						"data-test-id": "credential-card-description"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.data.description), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	cardLink: "_cardLink_11x3s_113",
	cardHeading: "_cardHeading_11x3s_123",
	cardDescription: "_cardDescription_11x3s_130",
	hasDescription: "_hasDescription_11x3s_137",
	credentialDescription: "_credentialDescription_11x3s_141",
	privateCredentialIndicator: "_privateCredentialIndicator_11x3s_151",
	cardActions: "_cardActions_11x3s_157",
	cardBadge: "_cardBadge_11x3s_178"
} }]]);
//#endregion
//#region src/features/credentials/views/CredentialsView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var import_pickBy = /* @__PURE__ */ __toESM(require_pickBy(), 1);
var _hoisted_1 = { class: "mb-s" };
var _hoisted_2 = { class: "mb-s" };
var _hoisted_3 = {
	key: 0,
	class: "mb-s"
};
var CredentialsView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CredentialsView",
	props: { credentialId: {} },
	setup(__props) {
		const props = __props;
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const sourceControlStore = useSourceControlStore();
		const externalSecretsStore = useExternalSecretsStore();
		const projectsStore = useProjectsStore();
		const instanceAiCredentialHelp = useInstanceAiCredentialHelp();
		const insightsStore = useInsightsStore();
		const { fetchDependencyCounts } = useDependencies();
		const documentTitle = useDocumentTitle();
		const route = useRoute();
		const router = useRouter();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const overview = useProjectPages();
		const updateFilter = (state) => {
			router.replace({ query: (0, import_pickBy.default)(state) });
		};
		const onSearchUpdated = (search) => {
			updateFilter({
				...filters.value,
				search
			});
		};
		const filters = ref({
			...route.query,
			setupNeeded: route.query.setupNeeded?.toString() === "true",
			...route.query.externalSecretsStore ? { externalSecretsStore: route.query.externalSecretsStore.toString() } : {}
		});
		const loading = ref(false);
		const needsSetup = (credential) => {
			if (credential.isResolvable) return false;
			const dataObject = credential.data;
			if (!dataObject) return false;
			if (Object.keys(dataObject).length === 0) return true;
			return Object.values(dataObject).every((value) => !value || value === "__n8n_EMPTY_VALUE_7b1af746-3729-4c60-9b9b-e08eb29e58da");
		};
		const allCredentials = computed(() => credentialsStore.allCredentials.map((credential) => ({
			resourceType: "credential",
			id: credential.id,
			name: credential.name,
			description: credential.description,
			value: "",
			updatedAt: credential.updatedAt,
			createdAt: credential.createdAt,
			homeProject: credential.homeProject,
			scopes: credential.scopes,
			sharedWithProjects: credential.sharedWithProjects,
			readOnly: !getResourcePermissions(credential.scopes).credential.update,
			needsSetup: needsSetup(credential),
			isGlobal: credential.isGlobal,
			isResolvable: credential.isResolvable,
			connectedByMe: credential.connectedByMe,
			type: credential.type
		})));
		const allCredentialTypes = computed(() => credentialsStore.allCredentialTypes);
		const credentialTypesById = computed(() => credentialsStore.credentialTypesById);
		const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
		const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes));
		const personalProject = computed(() => {
			return projectsStore.personalProject;
		});
		const showSecretStoreFilter = computed(() => {
			return !!route.query.externalSecretsStore && externalSecretsStore.isEnterpriseExternalSecretsEnabled;
		});
		const setRouteCredentialId = (credentialId) => {
			router.replace({
				params: { credentialId },
				query: route.query
			});
		};
		const refreshCredentials = () => {
			credentialsStore.fetchAllCredentials({
				projectId: route?.params?.projectId,
				includeScopes: true,
				externalSecretsStore: filters.value.externalSecretsStore
			});
		};
		const addCredential = () => {
			setRouteCredentialId("create");
			telemetry.track("User clicked add cred button", { source: "Creds list" });
		};
		listenForModalChanges({
			store: uiStore,
			onModalClosed(modalName) {
				if (["selectCredential", "editCredential"].includes(modalName)) router.replace({
					params: { credentialId: "" },
					query: route.query
				});
				if (modalName === "editCredential" && credentialsStore.pendingOAuthRefresh) {
					credentialsStore.pendingOAuthRefresh = false;
					refreshCredentials();
				}
			}
		});
		const onFilter = (resource, newFilters, matches) => {
			if (!isCredentialsResource(resource)) return false;
			const filtersToApply = newFilters;
			if (filtersToApply.type && filtersToApply.type.length > 0) matches = matches && filtersToApply.type.includes(resource.type);
			if (filtersToApply.search) {
				const searchString = filtersToApply.search.toLowerCase();
				matches = matches || credentialTypesById.value[resource.type] && credentialTypesById.value[resource.type].displayName.toLowerCase().includes(searchString);
			}
			if (filtersToApply.setupNeeded) matches = matches && resource.needsSetup;
			return matches;
		};
		const maybeCreateCredential = () => {
			if (props.credentialId === "create") {
				if (projectPermissions.value.credential.create) uiStore.openModalWithData({
					name: CREDENTIAL_SELECT_MODAL_KEY,
					data: {}
				});
				else router.replace({ name: VIEWS.HOMEPAGE });
			}
		};
		const maybeEditCredential = async () => {
			if (!!props.credentialId && props.credentialId !== "create") {
				const credential = credentialsStore.getCredentialById(props.credentialId);
				const credentialPermissions = getResourcePermissions(credential?.scopes).credential;
				if (!credential) return await router.replace({
					name: VIEWS.ENTITY_NOT_FOUND,
					params: { entityType: "credential" }
				});
				if (credentialPermissions.update || credentialPermissions.read) {
					uiStore.openExistingCredential(props.credentialId, { instanceAiCredentialHelp: instanceAiCredentialHelp() });
					return;
				}
				return await router.replace({
					name: VIEWS.ENTITY_UNAUTHORIZED,
					params: { entityType: "credential" }
				});
			}
		};
		const initialize = async () => {
			loading.value = true;
			const isVarsEnabled = useSettingsStore().isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables];
			const loadPromises = [
				credentialsStore.fetchAllCredentials({
					projectId: route?.params?.projectId,
					includeScopes: true,
					onlySharedWithMe: overview.isSharedSubPage,
					includeGlobal: true,
					externalSecretsStore: filters.value.externalSecretsStore
				}),
				credentialsStore.fetchCredentialTypes(false),
				nodeTypesStore.loadNodeTypesIfNotLoaded(),
				isVarsEnabled ? useEnvironmentsStore().fetchAllVariables() : Promise.resolve()
			];
			await Promise.all(loadPromises);
			maybeCreateCredential();
			await maybeEditCredential();
			loading.value = false;
			const credentialIds = credentialsStore.allCredentials.map((c) => c.id);
			fetchDependencyCounts(credentialIds, "credential");
		};
		credentialsStore.$onAction(({ name, after }) => {
			if (name === "createNewCredential" || name === "updateCredential") after(() => {
				refreshCredentials();
			});
		});
		sourceControlStore.$onAction(({ name, after }) => {
			if (name !== "pullWorkfolder") return;
			after(() => {
				initialize();
			});
		});
		watch(() => route?.params?.projectId, initialize);
		watch(() => props.credentialId, () => {
			maybeCreateCredential();
			maybeEditCredential();
		});
		watch(() => filters.value.externalSecretsStore, async (newValue, oldValue) => {
			if (newValue !== oldValue && (newValue !== void 0 || oldValue !== void 0)) initialize();
		});
		onMounted(() => {
			documentTitle.set(i18n.baseText("credentials.heading"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				ref: "layout",
				filters: filters.value,
				"onUpdate:filters": [_cache[0] || (_cache[0] = ($event) => filters.value = $event), updateFilter],
				"resource-key": "credentials",
				resources: allCredentials.value,
				initialize,
				"additional-filters-handler": onFilter,
				"type-props": { itemSize: 77 },
				loading: loading.value,
				disabled: readOnlyEnv.value || !projectPermissions.value.credential.create,
				"onUpdate:search": onSearchUpdated
			}, {
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "credential" }, {
					default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(unref(InsightsSummary_default), {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				default: withCtx(({ data }) => [createVNode(CredentialCard_default, {
					"data-test-id": "resources-list-item",
					class: "mb-2xs",
					data,
					"read-only": data.readOnly,
					"needs-setup": data.needsSetup,
					onClick: setRouteCredentialId,
					onConnected: refreshCredentials
				}, null, 8, [
					"data",
					"read-only",
					"needs-setup"
				])]),
				filters: withCtx(({ setKeyValue }) => [
					createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("credentials.filters.type"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
						ref: "typeInput",
						"model-value": filters.value.type,
						size: "medium",
						multiple: "",
						filterable: "",
						class: normalizeClass(_ctx.$style["type-input"]),
						"onUpdate:modelValue": ($event) => setKeyValue("type", $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(allCredentialTypes.value, (credentialType) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: credentialType.name,
								value: credentialType.name,
								label: credentialType.displayName
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, [
						"model-value",
						"class",
						"onUpdate:modelValue"
					])]),
					createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("credentials.filters.status"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(Checkbox_default), {
						label: unref(i18n).baseText("credentials.filters.setup"),
						"data-test-id": "credential-filter-setup-needed",
						"model-value": filters.value.setupNeeded,
						"onUpdate:modelValue": ($event) => setKeyValue("setupNeeded", $event)
					}, null, 8, [
						"label",
						"model-value",
						"onUpdate:modelValue"
					])]),
					showSecretStoreFilter.value && filters.value.externalSecretsStore ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("credentials.filters.secretStore"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
						"model-value": filters.value.externalSecretsStore,
						size: "medium",
						disabled: "",
						"data-test-id": "credential-filter-secret-store",
						class: normalizeClass(_ctx.$style["type-input"])
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: filters.value.externalSecretsStore,
							label: filters.value.externalSecretsStore
						}, null, 8, ["value", "label"])]),
						_: 1
					}, 8, ["model-value", "class"])])) : createCommentVNode("", true)
				]),
				empty: withCtx(() => [unref(overview).isSharedSubPage && personalProject.value ? (openBlock(), createBlock(EmptySharedSectionActionBox_default, {
					key: 0,
					"personal-project": personalProject.value,
					"resource-type": "credentials"
				}, null, 8, ["personal-project"])) : (openBlock(), createBlock(ResourcesListEmptyState_default, {
					key: 1,
					"resource-key": "credentials",
					"button-disabled": readOnlyEnv.value || !projectPermissions.value.credential.create,
					"disabled-tooltip-text": readOnlyEnv.value ? unref(i18n).baseText("readOnlyEnv.cantAdd.credential") : void 0,
					"onClick:button": addCredential
				}, null, 8, ["button-disabled", "disabled-tooltip-text"]))]),
				_: 1
			}, 8, [
				"filters",
				"resources",
				"loading",
				"disabled"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	"type-input": "_type-input_11p01_1",
	sidebarContainer: "_sidebarContainer_11p01_5"
} }]]);
//#endregion
export { CredentialsView_default as default };
