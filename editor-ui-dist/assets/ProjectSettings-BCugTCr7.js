import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, H as mergeModels, It as ref, K as onBeforeMount, N as defineComponent, Pt as reactive, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as ElRadio } from "./radio-BHh-pAFY.js";
import { t as ElDialog } from "./dialog-BWWCBb2k.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as Alert_default } from "./Alert-BWRBD2qF.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nFormInput_default } from "./N8nFormInput-C49MRcy5.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { Ni as isProjectRole, gn as useAvailableProjectSearch, vn as useProjectsStore } from "./workflows.store-qP-dtzSs.js";
import { t as N8nUserInfo_default } from "./N8nUserInfo-CeS-_dpV.js";
import { t as N8nUserSelect_default } from "./N8nUserSelect-DypL4SNl.js";
import { t as N8nIconPicker_default } from "./N8nIconPicker-DW5oXkK8.js";
import { t as N8nDataTableServer_default } from "./N8nDataTableServer-CHVD4l1X.js";
import { E as ROLE, Ea as getResourcePermissions, Ei as deepCopy } from "./src-B255AdRt.js";
import { t as isIconOrEmoji } from "./types-BozgK3KO.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useUsersStore } from "./users.store-BBpeiveu.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjOArG71.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-mMl9vyKw.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { O as APP_MODALS_ELEMENT_ID, ci as SECRETS_PROVIDER_CONNECTION_MODAL_KEY } from "./constants-CMdL1Kzl.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { n as useUIStore, w as DEFAULT_PROJECT_ICON } from "./ui.store-xzfQIfPK.js";
import { t as hasPermission } from "./permissions-CD6srtSi.js";
import { t as useRBACStore } from "./rbac.store-BmweLn1V.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as ProjectSharing_default } from "./ProjectSharing-Bg5_IJ1H.js";
import { t as useRolesStore } from "./roles.store-BxCv78Yh.js";
import { t as useSecretsProviderConnection } from "./useSecretsProviderConnection.ee-CsexqEng.js";
import { t as ProjectHeader_default } from "./ProjectHeader-CObcN8Yo.js";
import { t as RoleSelectDropdown_default } from "./RoleSelectDropdown-D2ejaL5t.js";
import { t as useSecretsProvidersList } from "./useSecretsProvidersList.ee-CyTs7J4P.js";
//#region src/features/collaboration/projects/components/ProjectDeleteDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = { key: 1 };
var _hoisted_2$2 = { class: "pt-l" };
var ProjectDeleteDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectDeleteDialog",
	props: /* @__PURE__ */ mergeModels({
		currentProject: {},
		searchFn: { type: Function },
		resourceCounts: {}
	}, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["confirmDelete"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const visible = useModel(__props, "modelValue");
		const resolvedSearchFn = computed(() => props.searchFn ?? useAvailableProjectSearch());
		const filterFn = (project) => project.id !== props.currentProject?.id;
		const emit = __emit;
		const locale = useI18n();
		const selectedProject = ref(null);
		const operation = ref(null);
		const wipeConfirmText = ref("");
		const hasMovableResources = computed(() => props.resourceCounts.credentials + props.resourceCounts.workflows + props.resourceCounts.dataTables > 0);
		const isValid = computed(() => {
			const expectedWipeConfirmation = locale.baseText("projects.settings.delete.question.wipe.placeholder");
			return !hasMovableResources.value || operation.value === "transfer" && !!selectedProject.value || operation.value === "wipe" && wipeConfirmText.value === expectedWipeConfirmation;
		});
		const onDelete = () => {
			if (!isValid.value) return;
			if (operation.value === "wipe") selectedProject.value = null;
			emit("confirmDelete", selectedProject.value?.id);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => visible.value = $event),
				title: unref(locale).baseText("projects.settings.delete.title", { interpolate: { projectName: props.currentProject?.name ?? "" } }),
				width: "650",
				"append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`
			}, {
				footer: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "destructive",
					type: "button",
					disabled: !isValid.value,
					"data-test-id": "project-settings-delete-confirm-button",
					onClick: withModifiers(onDelete, ["stop", "prevent"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.danger.deleteProject")), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				default: withCtx(() => [!hasMovableResources.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message.empty")), 1)]),
					_: 1
				})) : hasMovableResources.value ? (openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message")), 1)]),
					_: 1
				}), createBaseVNode("div", _hoisted_2$2, [
					createVNode(unref(ElRadio), {
						"model-value": operation.value ?? "",
						label: "transfer",
						class: "mb-s",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => operation.value = "transfer")
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { color: "text-dark" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.label")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["model-value"]),
					operation.value === "transfer" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.operation)
					}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.title")), 1)]),
						_: 1
					}), createVNode(ProjectSharing_default, {
						modelValue: selectedProject.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedProject.value = $event),
						class: "pt-2xs",
						"search-fn": resolvedSearchFn.value,
						"filter-fn": filterFn,
						"empty-options-text": unref(locale).baseText("projects.sharing.noMatchingProjects")
					}, null, 8, [
						"modelValue",
						"search-fn",
						"empty-options-text"
					])], 2)) : createCommentVNode("", true),
					createVNode(unref(ElRadio), {
						"model-value": operation.value ?? "",
						label: "wipe",
						class: "mb-s",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => operation.value = "wipe")
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { color: "text-dark" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.wipe.label")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["model-value"]),
					operation.value === "wipe" ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.operation)
					}, [createVNode(unref(N8nInputLabel_default), { label: unref(locale).baseText("projects.settings.delete.question.wipe.title") }, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							modelValue: wipeConfirmText.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => wipeConfirmText.value = $event),
							"data-test-id": "project-delete-confirm-input",
							placeholder: unref(locale).baseText("projects.settings.delete.question.wipe.placeholder")
						}, null, 8, ["modelValue", "placeholder"])]),
						_: 1
					}, 8, ["label"])], 2)) : createCommentVNode("", true)
				])])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"modelValue",
				"title",
				"append-to"
			]);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectDeleteDialog.vue?vue&type=style&index=0&lang.module.scss
var operation = "_operation_11bw7_388";
var shimmer$4 = "_shimmer_11bw7_1";
var spin$4 = "_spin_11bw7_1";
var opacityPulse$4 = "_opacityPulse_11bw7_1";
var popoverIn$4 = "_popoverIn_11bw7_1";
var fadeIn$4 = "_fadeIn_11bw7_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_11bw7_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_11bw7_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_11bw7_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_11bw7_1";
var blurSwapIn$4 = "_blurSwapIn_11bw7_1";
var blurSwapOut$4 = "_blurSwapOut_11bw7_1";
var pulseGlow$4 = "_pulseGlow_11bw7_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_11bw7_1";
var fade$4 = "_fade_11bw7_1";
var fadeInUp$4 = "_fadeInUp_11bw7_1";
var fadeInDown$4 = "_fadeInDown_11bw7_1";
var fadeInLeft$4 = "_fadeInLeft_11bw7_1";
var fadeInRight$4 = "_fadeInRight_11bw7_1";
var fadeOut$4 = "_fadeOut_11bw7_1";
var fadeOutDown$4 = "_fadeOutDown_11bw7_1";
var fadeOutUp$4 = "_fadeOutUp_11bw7_1";
var fadeOutLeft$4 = "_fadeOutLeft_11bw7_1";
var fadeOutRight$4 = "_fadeOutRight_11bw7_1";
var ping$4 = "_ping_11bw7_1";
var blinkBackground$4 = "_blinkBackground_11bw7_1";
var typingBlink$4 = "_typingBlink_11bw7_1";
var ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default = {
	operation,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_11bw7_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var ProjectDeleteDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectDeleteDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/collaboration/projects/components/ProjectRoleUpgradeDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "pt-l" };
var ProjectRoleUpgradeDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRoleUpgradeDialog",
	props: /* @__PURE__ */ mergeModels({
		limit: {},
		planName: {}
	}, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const visible = useModel(__props, "modelValue");
		const pageRedirectionHelper = usePageRedirectionHelper();
		const locale = useI18n();
		const goToUpgrade = async () => {
			await pageRedirectionHelper.goToUpgrade("rbac", "upgrade-rbac");
			visible.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
				title: unref(locale).baseText("projects.settings.role.upgrade.title"),
				width: "500",
				"append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`
			}, {
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"native-type": "button",
					onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					"native-type": "button",
					onClick: goToUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limitReached.link")), 1)]),
					_: 1
				})], 2)]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$4, [createVNode(unref(I18nT), {
					keypath: "projects.settings.role.upgrade.message",
					scope: "global"
				}, {
					planName: withCtx(() => [createTextVNode(toDisplayString(props.planName), 1)]),
					limit: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limit", {
						adjustToNumber: props.limit,
						interpolate: { count: String(props.limit) }
					})), 1)]),
					_: 1
				})])]),
				_: 1
			}, 8, [
				"modelValue",
				"title",
				"append-to"
			]);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectRoleUpgradeDialog.vue?vue&type=style&index=0&lang.module.scss
var footer = "_footer_17t0u_388";
var shimmer$3 = "_shimmer_17t0u_1";
var spin$3 = "_spin_17t0u_1";
var opacityPulse$3 = "_opacityPulse_17t0u_1";
var popoverIn$3 = "_popoverIn_17t0u_1";
var fadeIn$3 = "_fadeIn_17t0u_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_17t0u_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_17t0u_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_17t0u_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_17t0u_1";
var blurSwapIn$3 = "_blurSwapIn_17t0u_1";
var blurSwapOut$3 = "_blurSwapOut_17t0u_1";
var pulseGlow$3 = "_pulseGlow_17t0u_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_17t0u_1";
var fade$3 = "_fade_17t0u_1";
var fadeInUp$3 = "_fadeInUp_17t0u_1";
var fadeInDown$3 = "_fadeInDown_17t0u_1";
var fadeInLeft$3 = "_fadeInLeft_17t0u_1";
var fadeInRight$3 = "_fadeInRight_17t0u_1";
var fadeOut$3 = "_fadeOut_17t0u_1";
var fadeOutDown$3 = "_fadeOutDown_17t0u_1";
var fadeOutUp$3 = "_fadeOutUp_17t0u_1";
var fadeOutLeft$3 = "_fadeOutLeft_17t0u_1";
var fadeOutRight$3 = "_fadeOutRight_17t0u_1";
var ping$3 = "_ping_17t0u_1";
var blinkBackground$3 = "_blinkBackground_17t0u_1";
var typingBlink$3 = "_typingBlink_17t0u_1";
var ProjectRoleUpgradeDialog_vue_vue_type_style_index_0_lang_module_default = {
	footer,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_17t0u_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var ProjectRoleUpgradeDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectRoleUpgradeDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectRoleUpgradeDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/collaboration/projects/components/ProjectMembersActionsCell.vue
var ProjectMembersActionsCell_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMembersActionsCell",
	props: {
		data: {},
		actions: {}
	},
	emits: ["action"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const onAction = (action) => {
			emit("action", {
				action,
				userId: props.data.id
			});
		};
		return (_ctx, _cache) => {
			return props.actions.length > 0 ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
				key: 0,
				placement: "bottom",
				actions: props.actions,
				theme: "dark",
				onAction
			}, null, 8, ["actions"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectMembersRoleCell.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { key: 1 };
//#endregion
//#region src/features/collaboration/projects/components/ProjectMembersRoleCell.vue
var ProjectMembersRoleCell_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMembersRoleCell",
	props: {
		data: {},
		roles: {}
	},
	emits: ["update:role", "show-role-upgrade-dialog"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const settingsStore = useSettingsStore();
		const selectedRole = computed(() => props.roles.find((role) => role.slug === props.data.role));
		const isEditable = computed(() => props.data.role !== "project:personalOwner");
		const hasCustomRolesLicense = computed(() => settingsStore.isCustomRolesFeatureEnabled);
		const canManageRoles = computed(() => hasPermission(["rbac"], { rbac: { scope: "role:manage" } }));
		const systemRoles = computed(() => props.roles.filter((role) => role.systemRole));
		const customRoles = computed(() => props.roles.filter((role) => !role.systemRole));
		const onRoleUpdate = (role) => {
			emit("update:role", {
				role,
				userId: props.data.id
			});
		};
		return (_ctx, _cache) => {
			return isEditable.value ? (openBlock(), createBlock(RoleSelectDropdown_default, {
				key: 0,
				"system-roles": systemRoles.value,
				"custom-roles": customRoles.value,
				"current-role": __props.data.role,
				"has-custom-roles-license": hasCustomRolesLicense.value,
				"can-manage-roles": canManageRoles.value,
				"add-custom-role-route-name": unref(VIEWS).PROJECT_NEW_ROLE,
				"test-id": "project-member-role-dropdown",
				"onUpdate:role": onRoleUpdate,
				onSystemRoleUpgradeNeeded: _cache[0] || (_cache[0] = ($event) => emit("show-role-upgrade-dialog"))
			}, null, 8, [
				"system-roles",
				"custom-roles",
				"current-role",
				"has-custom-roles-license",
				"can-manage-roles",
				"add-custom-role-route-name"
			])) : (openBlock(), createElementBlock("span", _hoisted_1$3, toDisplayString(selectedRole.value?.displayName), 1));
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectMembersTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "pt-xs pb-xs" };
//#endregion
//#region src/features/collaboration/projects/components/ProjectMembersTable.vue
var ProjectMembersTable_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMembersTable",
	props: /* @__PURE__ */ mergeModels({
		data: {},
		loading: { type: Boolean },
		currentUserId: {},
		projectRoles: {},
		actions: {},
		canEditRole: { type: Boolean }
	}, {
		"tableOptions": { default: () => ({
			page: 0,
			itemsPerPage: 10,
			sortBy: []
		}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"update:options",
		"update:role",
		"show-role-upgrade-dialog",
		"action"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const rows = computed(() => props.data.items);
		const headers = ref([
			{
				title: i18n.baseText("projects.settings.table.header.user"),
				key: "name",
				width: 400,
				disableSort: true,
				value: (row) => row
			},
			{
				title: i18n.baseText("projects.settings.table.header.role"),
				key: "role",
				width: 200,
				disableSort: true
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 46,
				disableSort: true,
				value() {}
			}
		]);
		const canUpdateRole = (member) => member.id !== props.currentUserId && props.canEditRole;
		const onRoleChange = ({ role, userId }) => {
			emit("update:role", {
				role,
				userId
			});
		};
		const filterActions = (member) => {
			if (member.id === props.currentUserId || member.role === "project:personalOwner") return [];
			return (props.actions ?? []).filter((action) => action.guard?.(member) ?? true);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nDataTableServer_default), {
				"sort-by": tableOptions.value.sortBy,
				"onUpdate:sortBy": _cache[2] || (_cache[2] = ($event) => tableOptions.value.sortBy = $event),
				page: tableOptions.value.page,
				"onUpdate:page": _cache[3] || (_cache[3] = ($event) => tableOptions.value.page = $event),
				"items-per-page": __props.data.count,
				headers: headers.value,
				items: rows.value,
				"items-length": __props.data.count,
				loading: __props.loading,
				"page-sizes": [__props.data.count + 1],
				"onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
			}, {
				[`item.name`]: withCtx(({ value }) => [createBaseVNode("div", _hoisted_1$2, [createVNode(unref(N8nUserInfo_default), normalizeProps(guardReactiveProps(value)), null, 16)])]),
				[`item.role`]: withCtx(({ item }) => [canUpdateRole(item) ? (openBlock(), createBlock(ProjectMembersRoleCell_default, {
					key: 0,
					data: item,
					roles: props.projectRoles,
					"onUpdate:role": onRoleChange,
					onShowRoleUpgradeDialog: _cache[0] || (_cache[0] = ($event) => emit("show-role-upgrade-dialog"))
				}, null, 8, ["data", "roles"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.projectRoles.find((role) => role.slug === item.role)?.displayName ?? item.role), 1)]),
					_: 2
				}, 1024))]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(ProjectMembersActionsCell_default, {
					data: item,
					actions: filterActions(item),
					onAction: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("action", $event))
				}, null, 8, ["data", "actions"])]),
				_: 2
			}, 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length",
				"loading",
				"page-sizes"
			])]);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectExternalSecrets.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = {
	key: 0,
	"data-test-id": "external-secrets-section"
};
var _hoisted_2$1 = { class: "mb-s" };
var _hoisted_3$1 = { for: "projectExternalSecrets" };
var _hoisted_4$1 = { key: 0 };
var ProjectExternalSecrets_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectExternalSecrets",
	setup(__props, { expose: __expose }) {
		const i18n = useI18n();
		const toast = useToast();
		const router = useRouter();
		const projectsStore = useProjectsStore();
		const uiStore = useUIStore();
		const rbacStore = useRBACStore();
		const settingsStore = useSettingsStore();
		const secretsProviders = useSecretsProvidersList();
		const secretsProviderConnection = useSecretsProviderConnection(projectsStore.currentProjectId);
		const projectSecretConnections = ref([]);
		const connectionSecrets = reactive({});
		const isLoadingSecretConnections = ref(false);
		const secretsSearch = ref("");
		const expandedConnections = ref(/* @__PURE__ */ new Set());
		const currentPage = ref(0);
		const itemsPerPage = ref(5);
		const isFeatureEnabled = computed(() => settingsStore.moduleSettings["external-secrets"]?.forProjects ?? false);
		const hasExternalSecretsListPermission = computed(() => projectsStore.currentProject?.scopes?.includes("externalSecretsProvider:list") ?? false);
		const hasProjectExternalSecretsCreatePermission = computed(() => projectsStore.currentProject?.scopes?.includes("externalSecretsProvider:create") ?? false);
		const canCreateGlobalSecretsStore = computed(() => rbacStore.hasScope("externalSecretsProvider:create"));
		const showExternalSecretsSection = computed(() => isFeatureEnabled.value && hasExternalSecretsListPermission.value);
		const emptyStateType = computed(() => {
			if (projectSecretConnections.value.length > 0) return null;
			if (canCreateGlobalSecretsStore.value) return secretsProviders.activeProviders.value.length > 0 ? "instance-admin-no-project-providers" : "project-admin-no-providers";
			return hasProjectExternalSecretsCreatePermission.value ? "project-admin-no-providers" : null;
		});
		const emptyStateConfig = computed(() => {
			const type = emptyStateType.value;
			if (!type) return null;
			return {
				"instance-admin-no-project-providers": {
					heading: i18n.baseText("projects.settings.externalSecrets.emptyState.heading"),
					description: i18n.baseText("projects.settings.externalSecrets.emptyState.instanceAdmin.noProjectProviders.description"),
					buttonText: i18n.baseText("projects.settings.externalSecrets.button.shareSecretsStore"),
					buttonAction: onShareSecretsStore,
					testId: "external-secrets-empty-state-no-project-providers"
				},
				"project-admin-no-providers": {
					heading: i18n.baseText("projects.settings.externalSecrets.emptyState.heading"),
					description: i18n.baseText("projects.settings.externalSecrets.emptyState.projectAdmin.description"),
					buttonText: i18n.baseText("projects.settings.externalSecrets.button.addSecretsStore"),
					buttonAction: onAddSecretsStore,
					testId: "external-secrets-empty-state-project-admin"
				}
			}[type];
		});
		const sortedConnections = computed(() => [...projectSecretConnections.value].sort((a, b) => a.name.localeCompare(b.name)));
		const filteredConnections = computed(() => {
			if (!secretsSearch.value.trim()) return sortedConnections.value;
			const searchTerm = secretsSearch.value.toLowerCase();
			return sortedConnections.value.filter((connection) => {
				if (connection.name.toLowerCase().includes(searchTerm)) return true;
				return (connectionSecrets[connection.name] ?? []).some((s) => s.name.toLowerCase().includes(searchTerm));
			});
		});
		const paginatedConnections = computed(() => {
			const start = currentPage.value * itemsPerPage.value;
			const end = start + itemsPerPage.value;
			return filteredConnections.value.slice(start, end);
		});
		function getFilteredSecrets(connectionName) {
			const secrets = connectionSecrets[connectionName] ?? [];
			const searchTerm = secretsSearch.value.trim().toLowerCase();
			if (!searchTerm) return secrets;
			return secrets.filter((secret) => secret.name.toLowerCase().includes(searchTerm) || connectionName.toLowerCase().includes(searchTerm));
		}
		const tableRows = computed(() => paginatedConnections.value.map((connection) => {
			const isExpanded = expandedConnections.value.has(connection.name);
			return {
				id: `header-${connection.name}`,
				connectionName: connection.name,
				secretsCount: connection.secretsCount,
				isExpanded,
				secrets: isExpanded ? getFilteredSecrets(connection.name) : []
			};
		}));
		const tableHeaders = computed(() => [{
			title: i18n.baseText("projects.settings.externalSecrets.table.header.secretName"),
			key: "connectionName",
			disableSort: true,
			resize: false,
			value: (row) => row.connectionName
		}]);
		async function fetchSecretsForConnection(connectionName) {
			if (connectionSecrets[connectionName]?.length) return;
			const { secrets } = await secretsProviderConnection.getConnection(connectionName);
			connectionSecrets[connectionName] = secrets ?? [];
		}
		async function fetchSecretsForCurrentPage() {
			await Promise.all(paginatedConnections.value.filter((connection) => connection.secretsCount > 0).map(async (connection) => await fetchSecretsForConnection(connection.name)));
		}
		async function fetchProjectSecretConnections() {
			if (!projectsStore.currentProjectId || !hasExternalSecretsListPermission.value || !isFeatureEnabled.value) return;
			isLoadingSecretConnections.value = true;
			try {
				projectSecretConnections.value = await projectsStore.getProjectSecretProviders(projectsStore.currentProjectId);
				await fetchSecretsForCurrentPage();
			} catch (error) {
				toast.showError(error, i18n.baseText("projects.settings.externalSecrets.load.error"));
			} finally {
				isLoadingSecretConnections.value = false;
			}
		}
		function toggleConnection(connectionName) {
			if (expandedConnections.value.has(connectionName)) expandedConnections.value.delete(connectionName);
			else expandedConnections.value.add(connectionName);
		}
		function openConnectionModal(providerKey, activeTab = "connection") {
			const existingNames = secretsProviders.activeProviders.value.map((provider) => provider.name);
			uiStore.openModalWithData({
				name: SECRETS_PROVIDER_CONNECTION_MODAL_KEY,
				data: {
					activeTab,
					providerKey,
					providerTypes: secretsProviders.providerTypes.value,
					existingProviderNames: existingNames,
					projectId: projectsStore.currentProjectId,
					onClose: async () => {
						await fetchProjectSecretConnections();
					}
				}
			});
		}
		function openProviderModal(providerKey) {
			openConnectionModal(providerKey, "connection");
		}
		function onAddSecretsStore() {
			if (!hasProjectExternalSecretsCreatePermission.value) return;
			openConnectionModal();
		}
		function onShareSecretsStore() {
			router.push({ name: VIEWS.EXTERNAL_SECRETS_SETTINGS });
		}
		watch(secretsSearch, () => {
			currentPage.value = 0;
		});
		watch([currentPage, itemsPerPage], async () => {
			await fetchSecretsForCurrentPage();
		});
		watch([() => projectsStore.currentProjectId, showExternalSecretsSection], async ([newProjectId, showSection]) => {
			if (newProjectId && showSection) await fetchProjectSecretConnections();
		}, { immediate: true });
		watch(showExternalSecretsSection, async (showSection) => {
			if (!showSection) return;
			await Promise.allSettled([secretsProviders.fetchProviderTypes(), secretsProviders.fetchActiveConnections()]);
			if (canCreateGlobalSecretsStore.value) await projectsStore.getAllProjects();
		}, { immediate: true });
		__expose({ fetchProjectSecretConnections });
		return (_ctx, _cache) => {
			return showExternalSecretsSection.value ? (openBlock(), createElementBlock("fieldset", _hoisted_1$1, [createBaseVNode("h3", _hoisted_2$1, [createBaseVNode("label", _hoisted_3$1, toDisplayString(unref(i18n).baseText("projects.settings.externalSecrets")), 1)]), emptyStateConfig.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 0,
				"data-test-id": emptyStateConfig.value.testId,
				description: "yes"
			}, {
				description: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyStateConfig.value.heading), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyStateConfig.value.description), 1)]),
					_: 1
				}, 8, ["class"])]),
				additionalContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "xsmall",
					class: "mr-2xs",
					element: "a",
					href: unref(i18n).baseText("settings.externalSecrets.docs"),
					target: "_blank",
					"data-test-id": "secrets-provider-connections-learn-more"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "arrow-up-right" })]),
					_: 1
				}, 8, ["href"]), createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "xsmall",
					"data-test-id": `${emptyStateType.value}-button`,
					onClick: emptyStateConfig.value.buttonAction
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyStateConfig.value.buttonText), 1)]),
					_: 1
				}, 8, ["data-test-id", "onClick"])]),
				_: 1
			}, 8, ["data-test-id"])) : projectSecretConnections.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.secretProvidersContainer)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionsContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.searchContainer) }, [createVNode(unref(Input_default), {
				modelValue: secretsSearch.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => secretsSearch.value = $event),
				placeholder: unref(i18n).baseText("projects.settings.externalSecrets.search.placeholder"),
				clearable: "",
				"data-test-id": "secrets-providers-search",
				size: "small"
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, ["modelValue", "placeholder"])], 2), hasProjectExternalSecretsCreatePermission.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "outline",
				size: "small",
				"data-test-id": "external-secrets-add-button",
				onClick: onAddSecretsStore
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.externalSecrets.button.addSecretsStore")), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2), createVNode(unref(N8nDataTableServer_default), {
				page: currentPage.value,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => currentPage.value = $event),
				"items-per-page": itemsPerPage.value,
				"onUpdate:itemsPerPage": _cache[2] || (_cache[2] = ($event) => itemsPerPage.value = $event),
				headers: tableHeaders.value,
				items: tableRows.value,
				"items-length": filteredConnections.value.length,
				loading: isLoadingSecretConnections.value,
				"page-sizes": [
					5,
					10,
					25,
					50
				],
				"row-props": () => ({ class: _ctx.$style.groupHeaderRow }),
				"data-test-id": "external-secrets-table"
			}, {
				item: withCtx(({ item }) => [createBaseVNode("tr", { class: normalizeClass(_ctx.$style.groupHeaderRow) }, [createBaseVNode("td", { class: normalizeClass(_ctx.$style.groupHeaderCell) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupHeaderContent) }, [
					createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: item.isExpanded ? "chevron-down" : "chevron-right",
						class: normalizeClass(_ctx.$style.expandButton),
						disabled: item.secretsCount === 0,
						title: item.isExpanded ? unref(i18n).baseText("projects.settings.externalSecrets.collapse") : unref(i18n).baseText("projects.settings.externalSecrets.expand"),
						"data-test-id": "external-secrets-expand-button",
						onClick: ($event) => toggleConnection(item.connectionName)
					}, null, 8, [
						"icon",
						"class",
						"disabled",
						"title",
						"onClick"
					]),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.connectionLink),
						bold: "",
						onClick: ($event) => openProviderModal(item.connectionName)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.connectionName), 1)]),
						_: 2
					}, 1032, ["class", "onClick"]),
					createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.secretsCount === 1 ? unref(i18n).baseText("settings.secretsProviderConnections.oneSecret") : unref(i18n).baseText("settings.secretsProviderConnections.secrets", { interpolate: { count: item.secretsCount.toString() } })), 1)]),
						_: 2
					}, 1024)
				], 2)], 2)], 2), item.isExpanded && item.secrets.length > 0 ? (openBlock(), createElementBlock("tr", _hoisted_4$1, [createBaseVNode("td", { class: normalizeClass(_ctx.$style.secretsCell) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.secretsList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.secrets, (secret) => {
					return openBlock(), createElementBlock("div", {
						key: secret.name,
						class: normalizeClass(_ctx.$style.secretRow)
					}, [createBaseVNode("span", null, [createBaseVNode("code", { class: normalizeClass(_ctx.$style.secretName) }, toDisplayString(secret.name), 3)])], 2);
				}), 128))], 2)], 2)])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length",
				"loading",
				"row-props"
			])], 2)) : createCommentVNode("", true)])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectExternalSecrets.vue?vue&type=style&index=0&lang.module.scss
var description = "_description_1tm6e_388";
var secretProvidersContainer = "_secretProvidersContainer_1tm6e_393";
var actionsContainer = "_actionsContainer_1tm6e_399";
var searchContainer = "_searchContainer_1tm6e_404";
var groupHeaderRow = "_groupHeaderRow_1tm6e_409";
var groupHeaderCell = "_groupHeaderCell_1tm6e_416";
var secretsCell = "_secretsCell_1tm6e_428";
var secretsList = "_secretsList_1tm6e_432";
var secretRow = "_secretRow_1tm6e_437";
var groupHeaderContent = "_groupHeaderContent_1tm6e_452";
var expandButton = "_expandButton_1tm6e_461";
var secretName = "_secretName_1tm6e_475";
var connectionLink = "_connectionLink_1tm6e_482";
var shimmer$2 = "_shimmer_1tm6e_1";
var spin$2 = "_spin_1tm6e_1";
var opacityPulse$2 = "_opacityPulse_1tm6e_1";
var popoverIn$2 = "_popoverIn_1tm6e_1";
var fadeIn$2 = "_fadeIn_1tm6e_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1tm6e_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1tm6e_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1tm6e_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1tm6e_1";
var blurSwapIn$2 = "_blurSwapIn_1tm6e_1";
var blurSwapOut$2 = "_blurSwapOut_1tm6e_1";
var pulseGlow$2 = "_pulseGlow_1tm6e_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1tm6e_1";
var fade$2 = "_fade_1tm6e_1";
var fadeInUp$2 = "_fadeInUp_1tm6e_1";
var fadeInDown$2 = "_fadeInDown_1tm6e_1";
var fadeInLeft$2 = "_fadeInLeft_1tm6e_1";
var fadeInRight$2 = "_fadeInRight_1tm6e_1";
var fadeOut$2 = "_fadeOut_1tm6e_1";
var fadeOutDown$2 = "_fadeOutDown_1tm6e_1";
var fadeOutUp$2 = "_fadeOutUp_1tm6e_1";
var fadeOutLeft$2 = "_fadeOutLeft_1tm6e_1";
var fadeOutRight$2 = "_fadeOutRight_1tm6e_1";
var ping$2 = "_ping_1tm6e_1";
var blinkBackground$2 = "_blinkBackground_1tm6e_1";
var typingBlink$2 = "_typingBlink_1tm6e_1";
var ProjectExternalSecrets_vue_vue_type_style_index_0_lang_module_default = {
	description,
	secretProvidersContainer,
	actionsContainer,
	searchContainer,
	groupHeaderRow,
	groupHeaderCell,
	secretsCell,
	secretsList,
	secretRow,
	groupHeaderContent,
	expandButton,
	secretName,
	connectionLink,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1tm6e_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var ProjectExternalSecrets_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectExternalSecrets_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectExternalSecrets_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/collaboration/projects/components/ProjectSettingsCustomTelemetryTags.vue?vue&type=script&setup=true&lang.ts
var ProjectSettingsCustomTelemetryTags_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSettingsCustomTelemetryTags",
	props: { modelValue: {} },
	emits: ["update:modelValue", "validate"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tagTouched = ref(props.modelValue.map(() => false));
		watch(() => props.modelValue.length, (len) => {
			if (len < tagTouched.value.length) tagTouched.value = tagTouched.value.slice(0, len);
		});
		const tagErrors = computed(() => {
			const seen = /* @__PURE__ */ new Set();
			return props.modelValue.map((tag) => {
				const trimmed = tag.key.trim();
				if (!trimmed) return i18n.baseText("projects.settings.customSpanAttributes.error.emptyKey");
				if (seen.has(trimmed)) return i18n.baseText("projects.settings.customSpanAttributes.error.duplicateKey");
				seen.add(trimmed);
				return null;
			});
		});
		watch(computed(() => tagErrors.value.some((e) => e !== null)), (val) => emit("validate", !val), { immediate: true });
		function resetTouched() {
			tagTouched.value = props.modelValue.map(() => false);
		}
		function onTagKeyBlur(index) {
			tagTouched.value[index] = true;
		}
		function addTag() {
			emit("update:modelValue", [...props.modelValue, {
				key: "",
				value: ""
			}]);
			tagTouched.value.push(false);
		}
		function removeTag(index) {
			emit("update:modelValue", props.modelValue.filter((_, i) => i !== index));
			tagTouched.value.splice(index, 1);
		}
		function onTagInput(index, field, value) {
			emit("update:modelValue", props.modelValue.map((tag, i) => i === index ? {
				...tag,
				[field]: value
			} : tag));
		}
		__expose({ resetTouched });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(unref(N8nText_default), {
					size: "small",
					class: "mb-s",
					tag: "p"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.customSpanAttributes.description")) + " ", 1), createBaseVNode("a", {
						class: normalizeClass(_ctx.$style.docsLink),
						href: "https://docs.n8n.io/hosting/logging-monitoring/opentelemetry/",
						target: "_blank"
					}, [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.customSpanAttributes.docsLink")), 1), createVNode(unref(N8nIcon_default), {
						icon: "arrow-up-right",
						size: "xsmall"
					})], 2)]),
					_: 1
				}),
				(openBlock(true), createElementBlock(Fragment, null, renderList(__props.modelValue, (tag, index) => {
					return openBlock(), createElementBlock("div", {
						key: index,
						class: normalizeClass(_ctx.$style.telemetryTagContainer)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.telemetryTagRow) }, [
						createVNode(unref(N8nInputLabel_default), {
							label: index === 0 ? unref(i18n).baseText("projects.settings.customSpanAttributes.key.label") : void 0,
							size: "small"
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								"model-value": tag.key,
								placeholder: unref(i18n).baseText("projects.settings.customSpanAttributes.key.placeholder"),
								"aria-label": unref(i18n).baseText("projects.settings.customSpanAttributes.key.label"),
								"data-test-id": "project-telemetry-tag-key",
								"onUpdate:modelValue": (v) => onTagInput(index, "key", v),
								onBlur: ($event) => onTagKeyBlur(index)
							}, null, 8, [
								"model-value",
								"placeholder",
								"aria-label",
								"onUpdate:modelValue",
								"onBlur"
							])]),
							_: 2
						}, 1032, ["label"]),
						createVNode(unref(N8nInputLabel_default), {
							label: index === 0 ? unref(i18n).baseText("projects.settings.customSpanAttributes.value.label") : void 0,
							size: "small"
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								"model-value": tag.value,
								placeholder: unref(i18n).baseText("projects.settings.customSpanAttributes.value.placeholder"),
								"aria-label": unref(i18n).baseText("projects.settings.customSpanAttributes.value.label"),
								"data-test-id": "project-telemetry-tag-value",
								"onUpdate:modelValue": (v) => onTagInput(index, "value", v)
							}, null, 8, [
								"model-value",
								"placeholder",
								"aria-label",
								"onUpdate:modelValue"
							])]),
							_: 2
						}, 1032, ["label"]),
						createVNode(unref(N8nButton_default), {
							icon: "trash-2",
							variant: "ghost",
							size: "small",
							"native-type": "button",
							title: unref(i18n).baseText("projects.settings.customSpanAttributes.remove"),
							"aria-label": unref(i18n).baseText("projects.settings.customSpanAttributes.remove"),
							"data-test-id": "project-telemetry-tag-remove",
							onClick: withModifiers(($event) => removeTag(index), ["stop", "prevent"])
						}, null, 8, [
							"title",
							"aria-label",
							"onClick"
						])
					], 2), tagTouched.value[index] && tagErrors.value[index] ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.tagErrorMessage),
						"data-test-id": "project-telemetry-tag-key-error"
					}, toDisplayString(tagErrors.value[index]), 3)) : createCommentVNode("", true)], 2);
				}), 128)),
				createVNode(unref(N8nButton_default), {
					icon: "plus",
					variant: "subtle",
					"native-type": "button",
					class: "mt-2xs",
					"data-test-id": "project-telemetry-tag-add",
					onClick: withModifiers(addTag, ["stop", "prevent"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.customSpanAttributes.add")), 1)]),
					_: 1
				})
			]);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectSettingsCustomTelemetryTags.vue?vue&type=style&index=0&lang.module.scss
var telemetryTagContainer = "_telemetryTagContainer_y0uvz_388";
var telemetryTagRow = "_telemetryTagRow_y0uvz_393";
var tagErrorMessage = "_tagErrorMessage_y0uvz_399";
var docsLink = "_docsLink_y0uvz_406";
var shimmer$1 = "_shimmer_y0uvz_1";
var spin$1 = "_spin_y0uvz_1";
var opacityPulse$1 = "_opacityPulse_y0uvz_1";
var popoverIn$1 = "_popoverIn_y0uvz_1";
var fadeIn$1 = "_fadeIn_y0uvz_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_y0uvz_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_y0uvz_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_y0uvz_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_y0uvz_1";
var blurSwapIn$1 = "_blurSwapIn_y0uvz_1";
var blurSwapOut$1 = "_blurSwapOut_y0uvz_1";
var pulseGlow$1 = "_pulseGlow_y0uvz_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_y0uvz_1";
var fade$1 = "_fade_y0uvz_1";
var fadeInUp$1 = "_fadeInUp_y0uvz_1";
var fadeInDown$1 = "_fadeInDown_y0uvz_1";
var fadeInLeft$1 = "_fadeInLeft_y0uvz_1";
var fadeInRight$1 = "_fadeInRight_y0uvz_1";
var fadeOut$1 = "_fadeOut_y0uvz_1";
var fadeOutDown$1 = "_fadeOutDown_y0uvz_1";
var fadeOutUp$1 = "_fadeOutUp_y0uvz_1";
var fadeOutLeft$1 = "_fadeOutLeft_y0uvz_1";
var fadeOutRight$1 = "_fadeOutRight_y0uvz_1";
var ping$1 = "_ping_y0uvz_1";
var blinkBackground$1 = "_blinkBackground_y0uvz_1";
var typingBlink$1 = "_typingBlink_y0uvz_1";
var ProjectSettingsCustomTelemetryTags_vue_vue_type_style_index_0_lang_module_default = {
	telemetryTagContainer,
	telemetryTagRow,
	tagErrorMessage,
	docsLink,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_y0uvz_1",
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
var ProjectSettingsCustomTelemetryTags_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectSettingsCustomTelemetryTags_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSettingsCustomTelemetryTags_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/collaboration/projects/views/ProjectSettings.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { for: "projectName" };
var _hoisted_2 = { for: "projectDescription" };
var _hoisted_3 = {
	key: 1,
	id: "projectMembers"
};
var _hoisted_4 = { for: "projectMembers" };
var _hoisted_5 = {
	key: 0,
	class: "mb-m",
	"data-test-id": "project-roles-managed-notice"
};
var _hoisted_6 = { key: 0 };
var _hoisted_7 = { class: "mb-m" };
var SEARCH_THRESHOLD = 10;
var ProjectSettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSettings",
	setup(__props) {
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const projectsStore = useProjectsStore();
		const rolesStore = useRolesStore();
		const cloudPlanStore = useCloudPlanStore();
		const settingsStore = useSettingsStore();
		const toast = useToast();
		const router = useRouter();
		const telemetry = useTelemetry();
		const documentTitle = useDocumentTitle();
		const canUpdateProject = computed(() => !!getResourcePermissions(projectsStore.currentProject?.scopes).project.update);
		/** Changing the membership list is gated separately from editing project details. */
		const canManageMembers = computed(() => !!getResourcePermissions(projectsStore.currentProject?.scopes).project.manageMembers);
		const showSaveError = (error) => {
			toast.showError(error, i18n.baseText("projects.settings.save.error.title"));
		};
		const dialogVisible = ref(false);
		const upgradeDialogVisible = ref(false);
		const isDirty = ref(false);
		const isNameValid = ref(false);
		const isDescriptionValid = ref(true);
		const isTelemetryTagsValid = ref(true);
		const isValid = computed(() => isNameValid.value && isDescriptionValid.value && isTelemetryTagsValid.value);
		const resourceCounts = ref({
			credentials: -1,
			dataTables: -1,
			workflows: -1
		});
		const formData = ref({
			name: "",
			description: "",
			relations: [],
			customTelemetryTags: []
		});
		const suppressNextSync = ref(false);
		const nameInput = ref(null);
		const projectIcon = ref({ ...DEFAULT_PROJECT_ICON });
		const search = ref("");
		const membersTableState = ref({
			page: 0,
			itemsPerPage: 10,
			sortBy: [
				{
					id: "firstName",
					desc: false
				},
				{
					id: "lastName",
					desc: false
				},
				{
					id: "email",
					desc: false
				}
			]
		});
		const userSearchQuery = ref("");
		const userSearchResults = ref([]);
		const isLoadingUsers = ref(false);
		const shouldFetchAllUsers = computed(() => hasPermission(["rbac"], { rbac: { scope: "user:list" } }) || canManageMembers.value);
		const usersList = computed(() => userSearchResults.value.filter((user) => {
			return !(formData.value.relations || []).find((r) => r.id === user.id);
		}));
		const firstLicensedRole = computed(() => rolesStore.processedProjectRoles.find((role) => role.licensed)?.slug);
		const projectMembersActions = computed(() => {
			if (rolesManaged.value || !canManageMembers.value) return [];
			return [{
				label: i18n.baseText("projects.settings.table.row.removeUser"),
				value: "remove",
				guard: (member) => member.id !== usersStore.currentUser?.id && member.role !== "project:personalOwner"
			}];
		});
		const onAddMember = async (userId) => {
			if (!projectsStore.currentProject) return;
			const user = usersStore.usersById[userId];
			if (!user) return;
			let role = firstLicensedRole.value;
			if (!role) return;
			if (user.role === ROLE.Owner || user.role === ROLE.Admin) {
				if (rolesStore.processedProjectRoles.find((r) => r.slug === "project:admin" && r.licensed)) role = "project:admin";
			}
			if (!formData.value.relations.find((r) => r.id === userId)) formData.value.relations.push({
				id: userId,
				role
			});
			try {
				suppressNextSync.value = true;
				await projectsStore.addMember(projectsStore.currentProject.id, {
					userId,
					role
				});
				toast.showMessage({
					type: "success",
					title: i18n.baseText("projects.settings.member.added.title")
				});
				telemetry.track("User added member to project", {
					project_id: projectsStore.currentProject.id,
					target_user_id: userId,
					role
				});
			} catch (error) {
				formData.value.relations = formData.value.relations.filter((r) => r.id !== userId);
				showSaveError(error);
			}
		};
		const onUpdateMemberRole = async ({ userId, role }) => {
			if (!projectsStore.currentProject) return;
			const memberIndex = formData.value.relations.findIndex((r) => r.id === userId);
			if (memberIndex === -1) return;
			const originalRole = formData.value.relations[memberIndex].role;
			formData.value.relations[memberIndex].role = role;
			try {
				suppressNextSync.value = true;
				await projectsStore.updateMemberRole(projectsStore.currentProject.id, userId, role);
				rolesStore.fetchRoles();
				toast.showMessage({
					type: "success",
					title: i18n.baseText("projects.settings.memberRole.updated.title")
				});
				telemetry.track("User changed member role on project", {
					project_id: projectsStore.currentProject.id,
					target_user_id: userId,
					role
				});
			} catch (error) {
				formData.value.relations[memberIndex].role = originalRole;
				toast.showError(error, i18n.baseText("projects.settings.memberRole.update.error.title"));
			}
		};
		const onTextInput = () => {
			isDirty.value = true;
		};
		const telemetryTagsRef = ref(null);
		async function onRemoveMember(userId) {
			const current = projectsStore.currentProject;
			if (!current) return;
			const idx = formData.value.relations.findIndex((r) => r.id === userId);
			if (idx === -1) return;
			const removed = formData.value.relations.splice(idx, 1)[0];
			if (!current.relations.some((r) => r.id === userId)) return;
			try {
				suppressNextSync.value = true;
				await projectsStore.removeMember(current.id, userId);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("projects.settings.member.removed.title")
				});
				telemetry.track("User removed member from project", {
					project_id: current.id,
					target_user_id: userId
				});
			} catch (error) {
				formData.value.relations.splice(idx, 0, removed);
				showSaveError(error);
			}
		}
		const onMembersListAction = async ({ action, userId }) => {
			switch (action) {
				case "remove":
					await onRemoveMember(userId);
					break;
				default: break;
			}
		};
		const resetFormData = () => {
			formData.value.relations = projectsStore.currentProject?.relations ? deepCopy(projectsStore.currentProject.relations) : [];
			formData.value.name = projectsStore.currentProject?.name ?? "";
			formData.value.description = projectsStore.currentProject?.description ?? "";
			formData.value.customTelemetryTags = projectsStore.currentProject?.customTelemetryTags ? deepCopy(projectsStore.currentProject.customTelemetryTags) : [];
			telemetryTagsRef.value?.resetTouched();
		};
		const onCancel = () => {
			resetFormData();
			isDirty.value = false;
		};
		const makeFormDataDiff = () => {
			const diff = {};
			if (!projectsStore.currentProject) return diff;
			if (formData.value.name !== projectsStore.currentProject.name) diff.name = formData.value.name ?? "";
			if (formData.value.description !== projectsStore.currentProject.description) diff.description = formData.value.description ?? "";
			if (formData.value.relations.length !== projectsStore.currentProject.relations.length) {
				diff.memberAdded = formData.value.relations.filter((r) => !projectsStore.currentProject?.relations.find((cr) => cr.id === r.id));
				diff.memberRemoved = projectsStore.currentProject.relations.filter((cr) => !formData.value.relations.find((r) => r.id === cr.id));
			}
			diff.role = formData.value.relations.filter((r) => {
				return (projectsStore.currentProject?.relations.find((cr) => cr.id === r.id))?.role !== r.role && !diff.memberAdded?.find((ar) => ar.id === r.id);
			});
			return diff;
		};
		const sendTelemetry = (diff) => {
			const projectId = projectsStore.currentProject?.id;
			if (diff.name) telemetry.track("User changed project name", {
				project_id: projectId,
				name: diff.name
			});
			diff.memberAdded?.forEach((r) => {
				telemetry.track("User added member to project", {
					project_id: projectId,
					target_user_id: r.id,
					role: r.role
				});
			});
			diff.memberRemoved?.forEach((r) => {
				telemetry.track("User removed member from project", {
					project_id: projectId,
					target_user_id: r.id
				});
			});
			diff.role?.forEach((r) => {
				telemetry.track("User changed member role on project", {
					project_id: projectId,
					target_user_id: r.id,
					role: r.role
				});
			});
		};
		const updateProject = async () => {
			if (!projectsStore.currentProject) return;
			try {
				await projectsStore.updateProject(projectsStore.currentProject.id, {
					name: formData.value.name ?? "",
					description: formData.value.description ?? "",
					...settingsStore.isOtelCustomSpanAttributesEnabled ? { customTelemetryTags: formData.value.customTelemetryTags } : {}
				});
				isDirty.value = false;
			} catch (error) {
				showSaveError(error);
				throw error;
			}
		};
		const onSubmit = async () => {
			if (!isDirty.value) return;
			try {
				await updateProject();
				sendTelemetry(makeFormDataDiff());
				toast.showMessage({
					title: i18n.baseText("projects.settings.save.successful.title", { interpolate: { projectName: formData.value.name ?? "" } }),
					type: "success"
				});
			} catch (error) {}
		};
		const onDelete = async () => {
			if (projectsStore.currentProjectId) resourceCounts.value = await projectsStore.getResourceCounts(projectsStore.currentProjectId);
			dialogVisible.value = true;
		};
		const onConfirmDelete = async (transferId) => {
			try {
				if (projectsStore.currentProject) {
					const projectName = projectsStore.currentProject?.name ?? "";
					await projectsStore.deleteProject(projectsStore.currentProject.id, transferId);
					await router.push({ name: VIEWS.HOMEPAGE });
					toast.showMessage({
						title: i18n.baseText("projects.settings.delete.successful.title", { interpolate: { projectName } }),
						type: "success"
					});
					dialogVisible.value = true;
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("projects.settings.delete.error.title"));
			}
		};
		const selectProjectNameIfMatchesDefault = () => {
			if (formData.value.name === i18n.baseText("projects.settings.newProjectName")) {
				nameInput.value?.inputRef?.focus();
				nameInput.value?.inputRef?.select();
			}
		};
		const onIconUpdated = async () => {
			if (!projectsStore.currentProject) return;
			try {
				await projectsStore.updateProject(projectsStore.currentProject.id, { icon: projectIcon.value });
				toast.showMessage({
					title: i18n.baseText("projects.settings.icon.update.successful.title"),
					type: "success"
				});
			} catch (error) {
				showSaveError(error);
			}
		};
		watch(() => projectsStore.currentProject, async () => {
			if (suppressNextSync.value) {
				suppressNextSync.value = false;
				return;
			}
			resetFormData();
			await nextTick();
			selectProjectNameIfMatchesDefault();
			if (projectsStore.currentProject?.icon && isIconOrEmoji(projectsStore.currentProject.icon)) projectIcon.value = projectsStore.currentProject.icon;
		}, { immediate: true });
		const relationUsers = computed(() => formData.value.relations.map((relation) => {
			const user = usersStore.usersById[relation.id];
			const safeRole = isProjectRole(relation.role) ? relation.role : "project:viewer";
			return {
				...user,
				...relation,
				role: safeRole,
				firstName: relation?.firstName ?? user?.firstName ?? null,
				lastName: relation?.lastName ?? user?.lastName ?? null,
				email: relation?.email ?? user?.email ?? null
			};
		}));
		const membersTableData = computed(() => ({
			items: relationUsers.value,
			count: relationUsers.value.length
		}));
		const filteredMembersData = computed(() => {
			if (!search.value.trim()) return membersTableData.value;
			const searchTerm = search.value.toLowerCase();
			const filtered = relationUsers.value.filter((member) => {
				const fullName = `${member.firstName ?? ""} ${member.lastName ?? ""}`.toLowerCase();
				const email = (member.email ?? "").toLowerCase();
				return fullName.includes(searchTerm) || email.includes(searchTerm);
			});
			return {
				items: filtered,
				count: filtered.length
			};
		});
		const shouldShowSearch = computed(() => relationUsers.value.length >= SEARCH_THRESHOLD);
		watch(shouldShowSearch, (show) => {
			if (!show && search.value) search.value = "";
		});
		const debouncedSearch = useDebounceFn(() => {
			membersTableState.value.page = 0;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const onSearch = (value) => {
			search.value = value;
			debouncedSearch();
		};
		const onUpdateMembersTableOptions = (options) => {
			membersTableState.value = options;
		};
		const searchUsers = async (query) => {
			userSearchQuery.value = query;
			isLoadingUsers.value = true;
			try {
				const projectId = projectsStore.currentProject?.id;
				if (!projectId) {
					userSearchResults.value = [];
					return;
				}
				const filter = {};
				if (query.trim()) filter.fullText = query;
				if (!shouldFetchAllUsers.value) filter.projectId = projectId;
				await usersStore.fetchUsers({
					take: 50,
					filter
				});
				if (query.trim()) userSearchResults.value = usersStore.allUsers.filter((user) => {
					const searchLower = query.toLowerCase();
					const fullName = `${user.firstName ?? ""} ${user.lastName ?? ""}`.toLowerCase();
					const email = (user.email ?? "").toLowerCase();
					return fullName.includes(searchLower) || email.includes(searchLower);
				});
				else userSearchResults.value = usersStore.allUsers;
			} catch (error) {
				toast.showError(error, i18n.baseText("projects.settings.users.search.error"));
			} finally {
				isLoadingUsers.value = false;
			}
		};
		const debouncedUserSearch = useDebounceFn(searchUsers, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		onBeforeMount(async () => {
			if (!canManageMembers.value) return;
			await searchUsers("");
		});
		const rolesManaged = computed(() => projectsStore.currentProject?.rolesManaged ?? false);
		onMounted(async () => {
			documentTitle.set(i18n.baseText("projects.settings"));
			if (!canUpdateProject.value && !canManageMembers.value) return;
			selectProjectNameIfMatchesDefault();
			await rolesStore.fetchRoles();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.projectSettings),
				"data-test-id": "project-settings-container"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(ProjectHeader_default), canUpdateProject.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.headerRow)
				}, [createVNode(unref(N8nText_default), {
					tag: "h1",
					size: "xlarge",
					class: "pt-xs pb-m"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.info")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerButtons) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"native-type": "button",
					disabled: !isDirty.value,
					class: "mr-2xs",
					"data-test-id": "project-settings-cancel-button",
					onClick: withModifiers(onCancel, ["stop", "prevent"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.cancel")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					disabled: !isValid.value || !isDirty.value,
					variant: "solid",
					"data-test-id": "project-settings-save-button",
					onClick: withModifiers(onSubmit, ["stop", "prevent"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.save")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("form", { onSubmit: withModifiers(onSubmit, ["prevent"]) }, [
					canUpdateProject.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("fieldset", null, [createBaseVNode("label", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.settings.name")), 1), createBaseVNode("div", { class: normalizeClass(_ctx.$style.projectName) }, [createVNode(unref(N8nIconPicker_default), {
						modelValue: projectIcon.value,
						"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => projectIcon.value = $event), onIconUpdated],
						"button-tooltip": unref(i18n).baseText("projects.settings.iconPicker.button.tooltip"),
						"show-color-picker": ""
					}, null, 8, ["modelValue", "button-tooltip"]), createVNode(unref(N8nFormInput_default), {
						id: "projectName",
						ref_key: "nameInput",
						ref: nameInput,
						modelValue: formData.value.name,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.name = $event),
						label: "",
						type: "text",
						name: "name",
						required: "",
						"data-test-id": "project-settings-name-input",
						class: normalizeClass(_ctx.$style.projectNameInput),
						onEnter: onSubmit,
						onInput: onTextInput,
						onValidate: _cache[2] || (_cache[2] = ($event) => isNameValid.value = $event)
					}, null, 8, ["modelValue", "class"])], 2)]), createBaseVNode("fieldset", null, [createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("projects.settings.description")), 1), createVNode(unref(N8nFormInput_default), {
						id: "projectDescription",
						modelValue: formData.value.description,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.description = $event),
						label: "",
						name: "description",
						type: "textarea",
						maxlength: 512,
						autosize: true,
						"data-test-id": "project-settings-description-input",
						class: normalizeClass(_ctx.$style.projectDescriptionInput),
						onEnter: onSubmit,
						onInput: onTextInput,
						onValidate: _cache[4] || (_cache[4] = ($event) => isDescriptionValid.value = $event)
					}, null, 8, ["modelValue", "class"])])], 64)) : createCommentVNode("", true),
					createVNode(ProjectExternalSecrets_default, { class: normalizeClass(_ctx.$style.externalSecrets) }, null, 8, ["class"]),
					canUpdateProject.value || canManageMembers.value ? (openBlock(), createElementBlock("fieldset", _hoisted_3, [
						createBaseVNode("h3", null, [createBaseVNode("label", _hoisted_4, toDisplayString(unref(i18n).baseText("projects.settings.projectMembers")), 1)]),
						createBaseVNode("div", { class: normalizeClass([_ctx.$style.membersInputRow, "mb-s"]) }, [createVNode(unref(N8nUserSelect_default), {
							id: "projectMembers",
							class: normalizeClass(_ctx.$style.userSelect),
							size: "large",
							users: usersList.value,
							"current-user-id": unref(usersStore).currentUser?.id,
							placeholder: unref(i18n).baseText("workflows.shareModal.select.placeholder"),
							"data-test-id": "project-members-select",
							remote: "",
							"remote-method": unref(debouncedUserSearch),
							loading: isLoadingUsers.value,
							disabled: rolesManaged.value || !canManageMembers.value,
							"onUpdate:modelValue": onAddMember
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"class",
							"users",
							"current-user-id",
							"placeholder",
							"remote-method",
							"loading",
							"disabled"
						]), shouldShowSearch.value ? (openBlock(), createBlock(unref(Input_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.search),
							"model-value": search.value,
							placeholder: unref(i18n).baseText("projects.settings.members.search.placeholder"),
							clearable: "",
							"data-test-id": "project-members-search",
							"onUpdate:modelValue": onSearch
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"class",
							"model-value",
							"placeholder"
						])) : createCommentVNode("", true)], 2),
						rolesManaged.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(Alert_default), {
							type: "info",
							title: unref(i18n).baseText("settings.projectRolesManaged.description")
						}, null, 8, ["title"])])) : createCommentVNode("", true),
						relationUsers.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.membersTableContainer)
						}, [createVNode(ProjectMembersTable_default, {
							"table-options": membersTableState.value,
							"onUpdate:tableOptions": _cache[5] || (_cache[5] = ($event) => membersTableState.value = $event),
							"data-test-id": "project-members-table",
							data: filteredMembersData.value,
							"current-user-id": unref(usersStore).currentUser?.id,
							"project-roles": unref(rolesStore).processedProjectRoles,
							actions: projectMembersActions.value,
							"can-edit-role": !rolesManaged.value && canManageMembers.value,
							"onUpdate:options": onUpdateMembersTableOptions,
							"onUpdate:role": onUpdateMemberRole,
							onShowRoleUpgradeDialog: _cache[6] || (_cache[6] = ($event) => upgradeDialogVisible.value = true),
							onAction: onMembersListAction
						}, null, 8, [
							"table-options",
							"data",
							"current-user-id",
							"project-roles",
							"actions",
							"can-edit-role"
						])], 2)) : createCommentVNode("", true)
					])) : createCommentVNode("", true),
					canUpdateProject.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [unref(settingsStore).isOtelCustomSpanAttributesEnabled ? (openBlock(), createElementBlock("fieldset", _hoisted_6, [createBaseVNode("h3", null, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("projects.settings.customSpanAttributes.label")), 1)]), createVNode(ProjectSettingsCustomTelemetryTags_default, {
						ref_key: "telemetryTagsRef",
						ref: telemetryTagsRef,
						modelValue: formData.value.customTelemetryTags,
						"onUpdate:modelValue": [_cache[7] || (_cache[7] = ($event) => formData.value.customTelemetryTags = $event), onTextInput],
						onValidate: _cache[8] || (_cache[8] = ($event) => isTelemetryTagsValid.value = $event)
					}, null, 8, ["modelValue"])])) : createCommentVNode("", true), createBaseVNode("fieldset", null, [
						createBaseVNode("h3", _hoisted_7, toDisplayString(unref(i18n).baseText("projects.settings.danger.title")), 1),
						createBaseVNode("small", { class: normalizeClass(_ctx.$style.danger) }, toDisplayString(unref(i18n).baseText("projects.settings.danger.message")), 3),
						createVNode(unref(N8nButton_default), {
							variant: "subtle",
							size: "large",
							"native-type": "button",
							"data-test-id": "project-settings-delete-button",
							onClick: withModifiers(onDelete, ["stop", "prevent"])
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.danger.deleteProject")), 1)]),
							_: 1
						})
					])], 64)) : createCommentVNode("", true)
				], 32),
				createVNode(ProjectDeleteDialog_default, {
					modelValue: dialogVisible.value,
					"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => dialogVisible.value = $event),
					"current-project": unref(projectsStore).currentProject,
					"resource-counts": resourceCounts.value,
					onConfirmDelete
				}, null, 8, [
					"modelValue",
					"current-project",
					"resource-counts"
				]),
				createVNode(ProjectRoleUpgradeDialog_default, {
					modelValue: upgradeDialogVisible.value,
					"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => upgradeDialogVisible.value = $event),
					limit: unref(projectsStore).teamProjectsLimit,
					"plan-name": unref(cloudPlanStore).currentPlanData?.displayName
				}, null, 8, [
					"modelValue",
					"limit",
					"plan-name"
				])
			], 2);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/views/ProjectSettings.vue?vue&type=style&index=0&lang.module.scss
var projectSettings = "_projectSettings_1kzho_388";
var header = "_header_1kzho_412";
var headerRow = "_headerRow_1kzho_418";
var headerButtons = "_headerButtons_1kzho_425";
var upgrade = "_upgrade_1kzho_431";
var externalSecrets = "_externalSecrets_1kzho_435";
var membersInputRow = "_membersInputRow_1kzho_440";
var membersTableContainer = "_membersTableContainer_1kzho_448";
var search = "_search_1kzho_452";
var projectName = "_projectName_1kzho_457";
var projectNameInput = "_projectNameInput_1kzho_462";
var projectDescriptionInput = "_projectDescriptionInput_1kzho_466";
var userSelect = "_userSelect_1kzho_467";
var danger = "_danger_1kzho_477";
var shimmer = "_shimmer_1kzho_1";
var spin = "_spin_1kzho_1";
var opacityPulse = "_opacityPulse_1kzho_1";
var popoverIn = "_popoverIn_1kzho_1";
var fadeIn = "_fadeIn_1kzho_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1kzho_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1kzho_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1kzho_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1kzho_1";
var blurSwapIn = "_blurSwapIn_1kzho_1";
var blurSwapOut = "_blurSwapOut_1kzho_1";
var pulseGlow = "_pulseGlow_1kzho_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1kzho_1";
var fade = "_fade_1kzho_1";
var fadeInUp = "_fadeInUp_1kzho_1";
var fadeInDown = "_fadeInDown_1kzho_1";
var fadeInLeft = "_fadeInLeft_1kzho_1";
var fadeInRight = "_fadeInRight_1kzho_1";
var fadeOut = "_fadeOut_1kzho_1";
var fadeOutDown = "_fadeOutDown_1kzho_1";
var fadeOutUp = "_fadeOutUp_1kzho_1";
var fadeOutLeft = "_fadeOutLeft_1kzho_1";
var fadeOutRight = "_fadeOutRight_1kzho_1";
var ping = "_ping_1kzho_1";
var blinkBackground = "_blinkBackground_1kzho_1";
var typingBlink = "_typingBlink_1kzho_1";
var ProjectSettings_vue_vue_type_style_index_0_lang_module_default = {
	projectSettings,
	header,
	headerRow,
	headerButtons,
	upgrade,
	externalSecrets,
	membersInputRow,
	membersTableContainer,
	search,
	projectName,
	projectNameInput,
	projectDescriptionInput,
	userSelect,
	danger,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1kzho_1",
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
var ProjectSettings_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectSettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSettings_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ProjectSettings_default as default };
