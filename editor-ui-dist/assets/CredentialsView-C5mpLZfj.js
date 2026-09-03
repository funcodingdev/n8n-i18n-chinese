import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, p as vShow, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { V as useNodeTypesStore, fn as useEnvironmentsStore, ki as isCredentialsResource, pn as ResourceType, vn as useProjectsStore, wt as useCredentialsStore, yn as useSourceControlStore } from "./workflows.store-Bo6ZgF_O.js";
import { va as getResourcePermissions } from "./src-C3aqUyDp.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { no as EnterpriseEditionFeature } from "./constants-DPRLSskW.js";
import { t as require_dateformat } from "./dateformat-DxkxG_VE.js";
import { T as PROJECT_MOVE_RESOURCE_MODAL, n as useUIStore, sn as CREDENTIAL_SELECT_MODAL_KEY, t as listenForModalChanges } from "./ui.store-BhVgRazX.js";
import { n as useDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { t as usePrivateCredentials } from "./usePrivateCredentials-CwL_2m9E.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-DMTI8uea.js";
import { t as useCredentialOAuth } from "./useCredentialOAuth-49ka04lq.js";
import { t as ProjectCardBadge_default } from "./ProjectCardBadge-DxLnjKjX.js";
import { t as CredentialIcon_default } from "./CredentialIcon-T9rabh9H.js";
import { t as TimeAgo_default } from "./TimeAgo-DdOhC6Ae.js";
import { t as PrivateCredentialIcon_default } from "./PrivateCredentialIcon-B0qZtZOx.js";
import { t as useInstanceAiCredentialHelp } from "./useInstanceAiCredentialHelp-BNgEPTh5.js";
import { i as useProjectPages } from "./readyToRun.store-CQ0Vr5TN.js";
import { t as EmptySharedSectionActionBox_default } from "./EmptySharedSectionActionBox-DeaP_mI8.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-BIVNOBod.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-Bkk4p7HG.js";
import { t as ProjectHeader_default } from "./ProjectHeader-CGDHAK1n.js";
import { n as useDependencies, t as DependencyPill_default } from "./DependencyPill-DFsnq5iB.js";
import { t as useInsightsStore } from "./insights.store-DMY05Y3U.js";
import { t as InsightsSummary_default } from "./InsightsSummary-BMs5fvD3.js";
import "./insights-XIgLvurK.js";
import { t as require_pickBy } from "./pickBy-BjZEdraS.js";
//#region src/features/credentials/components/CredentialCard.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1$1 = { key: 0 };
var CredentialCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const credentialHasDependents = computed(() => hasDependencies(props.data.id));
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
				case CREDENTIAL_LIST_ITEM_ACTIONS.DISCONNECT:
					await disconnectResource();
					break;
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
							theme: "tertiary",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.readonly")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						__props.needsSetup ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 1,
							class: "ml-3xs",
							theme: "warning"
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
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [createVNode(unref(N8nText_default), {
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
				}, null, 8, ["tooltip-title", "tooltip-text"])], 2)) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/credentials/components/CredentialCard.vue?vue&type=style&index=0&lang.module.scss
var cardLink = "_cardLink_2q5kf_388";
var cardHeading = "_cardHeading_2q5kf_398";
var cardDescription = "_cardDescription_2q5kf_405";
var privateCredentialIndicator = "_privateCredentialIndicator_2q5kf_412";
var cardActions = "_cardActions_2q5kf_418";
var cardBadge = "_cardBadge_2q5kf_439";
var shimmer$1 = "_shimmer_2q5kf_1";
var spin$1 = "_spin_2q5kf_1";
var opacityPulse$1 = "_opacityPulse_2q5kf_1";
var popoverIn$1 = "_popoverIn_2q5kf_1";
var fadeIn$1 = "_fadeIn_2q5kf_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_2q5kf_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_2q5kf_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_2q5kf_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_2q5kf_1";
var blurSwapIn$1 = "_blurSwapIn_2q5kf_1";
var blurSwapOut$1 = "_blurSwapOut_2q5kf_1";
var pulseGlow$1 = "_pulseGlow_2q5kf_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_2q5kf_1";
var fade$1 = "_fade_2q5kf_1";
var fadeInUp$1 = "_fadeInUp_2q5kf_1";
var fadeInDown$1 = "_fadeInDown_2q5kf_1";
var fadeInLeft$1 = "_fadeInLeft_2q5kf_1";
var fadeInRight$1 = "_fadeInRight_2q5kf_1";
var fadeOut$1 = "_fadeOut_2q5kf_1";
var fadeOutDown$1 = "_fadeOutDown_2q5kf_1";
var fadeOutUp$1 = "_fadeOutUp_2q5kf_1";
var fadeOutLeft$1 = "_fadeOutLeft_2q5kf_1";
var fadeOutRight$1 = "_fadeOutRight_2q5kf_1";
var ping$1 = "_ping_2q5kf_1";
var blinkBackground$1 = "_blinkBackground_2q5kf_1";
var typingBlink$1 = "_typingBlink_2q5kf_1";
var CredentialCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink,
	cardHeading,
	cardDescription,
	privateCredentialIndicator,
	cardActions,
	cardBadge,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_2q5kf_1",
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
var CredentialCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/credentials/views/CredentialsView.vue?vue&type=script&setup=true&lang.ts
var import_pickBy = /* @__PURE__ */ __toESM(require_pickBy(), 1);
var _hoisted_1 = { class: "mb-s" };
var _hoisted_2 = { class: "mb-s" };
var _hoisted_3 = {
	key: 0,
	class: "mb-s"
};
var CredentialsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
			if (props.credentialId === "create") if (projectPermissions.value.credential.create) uiStore.openModalWithData({
				name: CREDENTIAL_SELECT_MODAL_KEY,
				data: {}
			});
			else router.replace({ name: VIEWS.HOMEPAGE });
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
			const isPersonalView = !overview.isSharedSubPage && overview.isProjectsSubPage && route?.params?.projectId === projectsStore.personalProject?.id;
			const loadPromises = [
				credentialsStore.fetchAllCredentials({
					projectId: route?.params?.projectId,
					includeScopes: true,
					onlySharedWithMe: overview.isSharedSubPage,
					includeGlobal: !isPersonalView,
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
			fetchDependencyCounts(credentialsStore.allCredentials.map((c) => c.id), "credential");
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
});
//#endregion
//#region src/features/credentials/views/CredentialsView.vue?vue&type=style&index=0&lang.module.scss
var sidebarContainer = "_sidebarContainer_12ag1_392";
var shimmer = "_shimmer_12ag1_1";
var spin = "_spin_12ag1_1";
var opacityPulse = "_opacityPulse_12ag1_1";
var popoverIn = "_popoverIn_12ag1_1";
var fadeIn = "_fadeIn_12ag1_1";
var collapsibleSlideDown = "_collapsibleSlideDown_12ag1_1";
var collapsibleSlideUp = "_collapsibleSlideUp_12ag1_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_12ag1_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_12ag1_1";
var blurSwapIn = "_blurSwapIn_12ag1_1";
var blurSwapOut = "_blurSwapOut_12ag1_1";
var pulseGlow = "_pulseGlow_12ag1_1";
var pulseGlowDelayed = "_pulseGlowDelayed_12ag1_1";
var fade = "_fade_12ag1_1";
var fadeInUp = "_fadeInUp_12ag1_1";
var fadeInDown = "_fadeInDown_12ag1_1";
var fadeInLeft = "_fadeInLeft_12ag1_1";
var fadeInRight = "_fadeInRight_12ag1_1";
var fadeOut = "_fadeOut_12ag1_1";
var fadeOutDown = "_fadeOutDown_12ag1_1";
var fadeOutUp = "_fadeOutUp_12ag1_1";
var fadeOutLeft = "_fadeOutLeft_12ag1_1";
var fadeOutRight = "_fadeOutRight_12ag1_1";
var ping = "_ping_12ag1_1";
var blinkBackground = "_blinkBackground_12ag1_1";
var typingBlink = "_typingBlink_12ag1_1";
var CredentialsView_vue_vue_type_style_index_0_lang_module_default = {
	"type-input": "_type-input_12ag1_388",
	sidebarContainer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_12ag1_1",
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
var CredentialsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CredentialsView_default as default };
