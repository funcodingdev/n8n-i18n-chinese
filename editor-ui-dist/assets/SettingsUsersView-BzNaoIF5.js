import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, h as withModifiers, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { r as DialogHeader_default, t as DialogTitle_default } from "./DialogTitle-vvfpWO6w.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as Alert_default } from "./Alert-BWRBD2qF.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nUserInfo_default } from "./N8nUserInfo-CeS-_dpV.js";
import { t as N8nDataTableServer_default } from "./N8nDataTableServer-CHVD4l1X.js";
import { E as ROLE, xt as USERS_LIST_SORT_OPTIONS } from "./src-B255AdRt.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useUsersStore } from "./users.store-BBpeiveu.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjOArG71.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { no as EnterpriseEditionFeature } from "./constants-CMdL1Kzl.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { Z as DELETE_USER_MODAL_KEY, mt as INVITE_USER_MODAL_KEY, n as useUIStore, w as DEFAULT_PROJECT_ICON } from "./ui.store-xzfQIfPK.js";
import { t as hasPermission } from "./permissions-CD6srtSi.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as useClipboard } from "./useClipboard-FfSvbxpY.js";
import { t as ProjectIcon_default } from "./ProjectIcon-Ckn88iUF.js";
import { r as formatTimeAgo } from "./dateFormatter-CW32wdc_.js";
import { t as useRolesStore } from "./roles.store-BxCv78Yh.js";
import { t as copyInviteLink } from "./invite-link.utils-DGeyge-M.js";
import { n as useSSOStore } from "./sso.store-DCthOCfS.js";
import { n as CustomRolesUpgradeModal_default, t as RoleSelectDropdown_default } from "./RoleSelectDropdown-D2ejaL5t.js";
import { a as countGrantedInstancePermissions, i as TOTAL_INSTANCE_PERMISSIONS } from "./instanceRoleScopes-S6yv2Psz.js";
import { t as useUserRoleProvisioningStore } from "./userRoleProvisioning.store-BrDhm2Zw.js";
//#region src/features/settings/users/components/SettingsUsersRoleCell.vue?vue&type=script&setup=true&lang.ts
var SettingsUsersRoleCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersRoleCell",
	props: {
		data: {},
		loading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:role"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const settingsStore = useSettingsStore();
		const rolesStore = useRolesStore();
		const currentRole = computed(() => props.data.role ?? ROLE.Default);
		const selectedRole = computed(() => rolesStore.roles.global.find((role) => role.slug === currentRole.value));
		const isEditable = computed(() => currentRole.value !== ROLE.Owner && currentRole.value !== ROLE.Default);
		const hasCustomRolesLicense = computed(() => settingsStore.isCustomRolesFeatureEnabled);
		const canChangeRole = computed(() => hasPermission(["rbac"], { rbac: { scope: "user:changeRole" } }));
		const canManageRoles = computed(() => hasPermission(["rbac"], { rbac: { scope: "role:manage" } }));
		const assignableRoles = computed(() => rolesStore.processedInstanceRoles);
		const systemRoles = computed(() => assignableRoles.value.filter((role) => role.systemRole));
		const customRoles = computed(() => rolesStore.customInstanceRoles);
		const permissionCountFor = (role) => countGrantedInstancePermissions(role.scopes ?? []);
		const upgradeModalVisible = ref(false);
		const onRoleUpdate = (role) => {
			emit("update:role", {
				role,
				userId: props.data.id
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.roleCell) }, [isEditable.value && canChangeRole.value ? (openBlock(), createBlock(RoleSelectDropdown_default, {
				key: 0,
				"system-roles": systemRoles.value,
				"custom-roles": customRoles.value,
				"current-role": currentRole.value,
				"has-custom-roles-license": hasCustomRolesLicense.value,
				"can-manage-roles": canManageRoles.value,
				"add-custom-role-route-name": unref(VIEWS).INSTANCE_NEW_ROLE,
				loading: __props.loading,
				"permission-count-fn": permissionCountFor,
				"total-permissions": unref(TOTAL_INSTANCE_PERMISSIONS),
				"edit-route-name": unref(VIEWS).INSTANCE_ROLE_SETTINGS,
				"view-route-name": unref(VIEWS).INSTANCE_ROLE_VIEW,
				"from-view": unref(VIEWS).USERS_SETTINGS,
				"test-id": "user-role-dropdown",
				"onUpdate:role": onRoleUpdate,
				onSystemRoleUpgradeNeeded: _cache[0] || (_cache[0] = ($event) => upgradeModalVisible.value = true)
			}, null, 8, [
				"system-roles",
				"custom-roles",
				"current-role",
				"has-custom-roles-license",
				"can-manage-roles",
				"add-custom-role-route-name",
				"loading",
				"total-permissions",
				"edit-route-name",
				"view-route-name",
				"from-view"
			])) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.roleName)
			}, toDisplayString(selectedRole.value?.displayName), 3)), createVNode(CustomRolesUpgradeModal_default, {
				modelValue: upgradeModalVisible.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => upgradeModalVisible.value = $event)
			}, null, 8, ["modelValue"])], 2);
		};
	}
});
//#endregion
//#region src/features/settings/users/components/SettingsUsersRoleCell.vue?vue&type=style&index=0&lang.module.scss
var roleCell = "_roleCell_1dwmf_390";
var roleName$1 = "_roleName_1dwmf_395";
var shimmer$4 = "_shimmer_1dwmf_1";
var spin$4 = "_spin_1dwmf_1";
var opacityPulse$4 = "_opacityPulse_1dwmf_1";
var popoverIn$4 = "_popoverIn_1dwmf_1";
var fadeIn$4 = "_fadeIn_1dwmf_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_1dwmf_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_1dwmf_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_1dwmf_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_1dwmf_1";
var blurSwapIn$4 = "_blurSwapIn_1dwmf_1";
var blurSwapOut$4 = "_blurSwapOut_1dwmf_1";
var pulseGlow$4 = "_pulseGlow_1dwmf_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_1dwmf_1";
var fade$4 = "_fade_1dwmf_1";
var fadeInUp$4 = "_fadeInUp_1dwmf_1";
var fadeInDown$4 = "_fadeInDown_1dwmf_1";
var fadeInLeft$4 = "_fadeInLeft_1dwmf_1";
var fadeInRight$4 = "_fadeInRight_1dwmf_1";
var fadeOut$4 = "_fadeOut_1dwmf_1";
var fadeOutDown$4 = "_fadeOutDown_1dwmf_1";
var fadeOutUp$4 = "_fadeOutUp_1dwmf_1";
var fadeOutLeft$4 = "_fadeOutLeft_1dwmf_1";
var fadeOutRight$4 = "_fadeOutRight_1dwmf_1";
var ping$4 = "_ping_1dwmf_1";
var blinkBackground$4 = "_blinkBackground_1dwmf_1";
var typingBlink$4 = "_typingBlink_1dwmf_1";
var SettingsUsersRoleCell_vue_vue_type_style_index_0_lang_module_default = {
	roleCell,
	roleName: roleName$1,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_1dwmf_1",
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
var SettingsUsersRoleCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsUsersRoleCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsersRoleCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/users/components/SettingsUsersProjectsModal.vue?vue&type=script&setup=true&lang.ts
var SettingsUsersProjectsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersProjectsModal",
	props: {
		open: { type: Boolean },
		firstName: {},
		lastName: {},
		email: {},
		projects: {}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const projectNameFilter = ref("");
		const i18n = useI18n();
		const rolesStore = useRolesStore();
		const roleDisplayNameMap = computed(() => new Map(rolesStore.roles.project.map((role) => [role.slug, role.displayName])));
		function getRoleDisplayName(slug) {
			return roleDisplayNameMap.value.get(slug) ?? slug;
		}
		const userName = computed(() => [props.firstName, props.lastName].filter(Boolean).join(" ").trim() || props.email || "");
		const projectsToShow = computed(() => {
			const query = projectNameFilter.value.trim().toLowerCase();
			if (!query) return props.projects;
			return props.projects.filter((project) => project.name.toLowerCase().includes(query));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), { class: normalizeClass(_ctx.$style.header) }, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.users.projectsModal.title", { interpolate: { user: userName.value } })), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(Input_default), {
						modelValue: projectNameFilter.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => projectNameFilter.value = $event),
						class: normalizeClass(_ctx.$style.search),
						placeholder: unref(i18n).baseText("settings.users.projectsModal.searchPlaceholder"),
						clearable: "",
						"data-test-id": "user-projects-modal-search"
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, [
						"modelValue",
						"class",
						"placeholder"
					]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.list) }, [projectsToShow.value.length === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.empty),
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.users.projectsModal.noResults")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(projectsToShow.value, (p) => {
						return openBlock(), createElementBlock("div", {
							key: p.id,
							class: normalizeClass(_ctx.$style.row)
						}, [createVNode(ProjectIcon_default, {
							icon: p.icon ?? unref(DEFAULT_PROJECT_ICON),
							size: "medium",
							round: ""
						}, null, 8, ["icon"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [createVNode(unref(N8nText_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(p.name), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(getRoleDisplayName(p.role)), 1)]),
							_: 2
						}, 1024)], 2)], 2);
					}), 128))], 2)
				]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/settings/users/components/SettingsUsersProjectsModal.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_fy7ru_388";
var title = "_title_fy7ru_393";
var search$1 = "_search_fy7ru_397";
var list = "_list_fy7ru_401";
var empty = "_empty_fy7ru_407";
var row = "_row_fy7ru_413";
var info = "_info_fy7ru_420";
var shimmer$3 = "_shimmer_fy7ru_1";
var spin$3 = "_spin_fy7ru_1";
var opacityPulse$3 = "_opacityPulse_fy7ru_1";
var popoverIn$3 = "_popoverIn_fy7ru_1";
var fadeIn$3 = "_fadeIn_fy7ru_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_fy7ru_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_fy7ru_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_fy7ru_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_fy7ru_1";
var blurSwapIn$3 = "_blurSwapIn_fy7ru_1";
var blurSwapOut$3 = "_blurSwapOut_fy7ru_1";
var pulseGlow$3 = "_pulseGlow_fy7ru_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_fy7ru_1";
var fade$3 = "_fade_fy7ru_1";
var fadeInUp$3 = "_fadeInUp_fy7ru_1";
var fadeInDown$3 = "_fadeInDown_fy7ru_1";
var fadeInLeft$3 = "_fadeInLeft_fy7ru_1";
var fadeInRight$3 = "_fadeInRight_fy7ru_1";
var fadeOut$3 = "_fadeOut_fy7ru_1";
var fadeOutDown$3 = "_fadeOutDown_fy7ru_1";
var fadeOutUp$3 = "_fadeOutUp_fy7ru_1";
var fadeOutLeft$3 = "_fadeOutLeft_fy7ru_1";
var fadeOutRight$3 = "_fadeOutRight_fy7ru_1";
var ping$3 = "_ping_fy7ru_1";
var blinkBackground$3 = "_blinkBackground_fy7ru_1";
var typingBlink$3 = "_typingBlink_fy7ru_1";
var SettingsUsersProjectsModal_vue_vue_type_style_index_0_lang_module_default = {
	header,
	title,
	search: search$1,
	list,
	empty,
	row,
	info,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_fy7ru_1",
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
var SettingsUsersProjectsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsUsersProjectsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsersProjectsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/users/components/SettingsUsersProjectsCell.vue?vue&type=script&setup=true&lang.ts
var SettingsUsersProjectsCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersProjectsCell",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const rolesAccessingAllProjects = ref([ROLE.Owner, ROLE.Admin]);
		const visibleProjectsNum = ref(1);
		const dialogOpen = ref(false);
		const hasProjectList = computed(() => !(props.data.role && rolesAccessingAllProjects.value.includes(props.data.role)) && (props.data.projectRelations?.length ?? 0) > 0);
		const label = computed(() => {
			if (props.data.role && rolesAccessingAllProjects.value.includes(props.data.role)) return i18n.baseText("settings.users.table.row.allProjects");
			return i18n.baseText("settings.users.table.row.personalProject");
		});
		const projectNames = computed(() => props.data.projectRelations?.map(({ name }) => name) ?? []);
		const projects = computed(() => ({
			visible: projectNames.value.slice(0, visibleProjectsNum.value),
			additional: projectNames.value.slice(visibleProjectsNum.value)
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.projects) }, [hasProjectList.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nLink_default), {
				theme: "text",
				underline: "",
				class: normalizeClass(_ctx.$style.trigger),
				"aria-label": unref(i18n).baseText("settings.users.projectsModal.trigger"),
				title: unref(i18n).baseText("settings.users.projectsModal.trigger"),
				"data-test-id": "user-projects-cell-trigger",
				onClick: _cache[0] || (_cache[0] = withModifiers(($event) => dialogOpen.value = true, ["stop"]))
			}, {
				default: withCtx(() => [
					(openBlock(true), createElementBlock(Fragment, null, renderList(projects.value.visible, (project, index) => {
						return openBlock(), createElementBlock(Fragment, { key: index }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.project) }, toDisplayString(project), 3), index < projects.value.visible.length - 1 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.comma)
						}, ",", 2)) : createCommentVNode("", true)], 64);
					}), 128)),
					projects.value.additional.length > 0 ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.comma)
					}, ",", 2)) : createCommentVNode("", true),
					projects.value.additional.length > 0 ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.additional)
					}, "+ " + toDisplayString(projects.value.additional.length), 3)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, [
				"class",
				"aria-label",
				"title"
			]), createVNode(SettingsUsersProjectsModal_default, {
				open: dialogOpen.value,
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => dialogOpen.value = $event),
				"first-name": props.data.firstName,
				"last-name": props.data.lastName,
				email: props.data.email,
				projects: props.data.projectRelations ?? []
			}, null, 8, [
				"open",
				"first-name",
				"last-name",
				"email",
				"projects"
			])], 64)) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.project)
			}, toDisplayString(label.value), 3))], 2);
		};
	}
});
//#endregion
//#region src/features/settings/users/components/SettingsUsersProjectsCell.vue?vue&type=style&index=0&lang.module.scss
var projects = "_projects_1gdz2_388";
var trigger = "_trigger_1gdz2_395";
var project = "_project_1gdz2_388";
var comma = "_comma_1gdz2_421";
var additional = "_additional_1gdz2_426";
var shimmer$2 = "_shimmer_1gdz2_1";
var spin$2 = "_spin_1gdz2_1";
var opacityPulse$2 = "_opacityPulse_1gdz2_1";
var popoverIn$2 = "_popoverIn_1gdz2_1";
var fadeIn$2 = "_fadeIn_1gdz2_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1gdz2_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1gdz2_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1gdz2_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1gdz2_1";
var blurSwapIn$2 = "_blurSwapIn_1gdz2_1";
var blurSwapOut$2 = "_blurSwapOut_1gdz2_1";
var pulseGlow$2 = "_pulseGlow_1gdz2_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1gdz2_1";
var fade$2 = "_fade_1gdz2_1";
var fadeInUp$2 = "_fadeInUp_1gdz2_1";
var fadeInDown$2 = "_fadeInDown_1gdz2_1";
var fadeInLeft$2 = "_fadeInLeft_1gdz2_1";
var fadeInRight$2 = "_fadeInRight_1gdz2_1";
var fadeOut$2 = "_fadeOut_1gdz2_1";
var fadeOutDown$2 = "_fadeOutDown_1gdz2_1";
var fadeOutUp$2 = "_fadeOutUp_1gdz2_1";
var fadeOutLeft$2 = "_fadeOutLeft_1gdz2_1";
var fadeOutRight$2 = "_fadeOutRight_1gdz2_1";
var ping$2 = "_ping_1gdz2_1";
var blinkBackground$2 = "_blinkBackground_1gdz2_1";
var typingBlink$2 = "_typingBlink_1gdz2_1";
var SettingsUsersProjectsCell_vue_vue_type_style_index_0_lang_module_default = {
	projects,
	trigger,
	project,
	comma,
	additional,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1gdz2_1",
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
var SettingsUsersProjectsCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsUsersProjectsCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsersProjectsCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/users/components/SettingsUsersActionsCell.vue
var SettingsUsersActionsCell_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersActionsCell",
	props: {
		data: {},
		actions: {}
	},
	emits: ["action"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const onUserAction = (action) => {
			emit("action", {
				action,
				userId: props.data.id
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [props.data.signInType !== "ldap" && props.actions.length > 0 ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
				key: 0,
				placement: "bottom",
				actions: props.actions,
				theme: "dark",
				onAction: onUserAction
			}, null, 8, ["actions"])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/features/settings/users/components/SettingsUsersLastActiveCell.vue
var SettingsUsersLastActiveCell_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersLastActiveCell",
	props: { data: {} },
	setup(__props) {
		const i18n = useI18n();
		const props = __props;
		const formattedDate = computed(() => props.data.lastActiveAt ? formatTimeAgo(props.data.lastActiveAt) : i18n.baseText("generic.never"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", null, toDisplayString(formattedDate.value), 1);
		};
	}
});
//#endregion
//#region src/features/settings/users/components/SettingsUsersTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pt-xs pb-xs" };
var SettingsUsersTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersTable",
	props: /* @__PURE__ */ mergeModels({
		data: {},
		actions: {},
		loading: { type: Boolean },
		canEditRole: { type: Boolean },
		updatingRoleUserId: {}
	}, {
		"tableOptions": { default: () => ({}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"update:options",
		"update:role",
		"action"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const rolesStore = useRolesStore();
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const rows = computed(() => props.data.items);
		const headers = ref([
			{
				title: i18n.baseText("settings.users.table.header.user"),
				key: "name",
				width: 300,
				value(row) {
					return {
						...row,
						isPendingUser: row.isPending
					};
				}
			},
			{
				title: i18n.baseText("settings.users.table.header.accountType"),
				key: "role",
				width: 200
			},
			{
				title: i18n.baseText("settings.users.table.header.lastActive"),
				key: "lastActiveAt",
				value(row) {
					return {
						...row,
						lastActiveAt: row.lastActiveAt ?? ""
					};
				}
			},
			{
				title: i18n.baseText("settings.users.table.header.2fa"),
				key: "mfaEnabled",
				value(row) {
					return row.mfaEnabled ? i18n.baseText("settings.users.table.row.2fa.enabled") : i18n.baseText("settings.users.table.row.2fa.disabled");
				}
			},
			{
				title: i18n.baseText("projects.menu.title"),
				key: "projects",
				disableSort: true,
				value() {}
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
		const roles = computed(() => ({
			[ROLE.Owner]: {
				label: i18n.baseText("auth.roles.owner"),
				desc: ""
			},
			[ROLE.Admin]: {
				label: i18n.baseText("auth.roles.admin"),
				desc: i18n.baseText("settings.users.table.row.role.description.admin")
			},
			[ROLE.Member]: {
				label: i18n.baseText("auth.roles.member"),
				desc: i18n.baseText("settings.users.table.row.role.description.member")
			},
			...settingsStore.isChatFeatureEnabled && { [ROLE.ChatUser]: {
				label: i18n.baseText("auth.roles.chatUser"),
				desc: i18n.baseText("settings.users.table.row.role.description.chatUser")
			} },
			[ROLE.Default]: {
				label: i18n.baseText("auth.roles.default"),
				desc: ""
			},
			...Object.fromEntries(rolesStore.customInstanceRoles.map((role) => [role.slug, {
				label: role.displayName,
				desc: role.description ?? ""
			}]))
		}));
		const canUpdateRole = computed(() => {
			if (!hasPermission(["rbac"], { rbac: { scope: ["user:update", "user:changeRole"] } })) return false;
			if (!props.canEditRole) return false;
			return true;
		});
		const filterActions = (user) => {
			if (user.isOwner) return [];
			return props.actions.filter((action) => action.guard?.({
				...user,
				isPendingUser: user.isPending
			}) ?? true);
		};
		const onRoleChange = ({ role, userId }) => {
			emit("update:role", {
				role,
				userId
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nDataTableServer_default), {
				"sort-by": tableOptions.value.sortBy,
				"onUpdate:sortBy": _cache[1] || (_cache[1] = ($event) => tableOptions.value.sortBy = $event),
				page: tableOptions.value.page,
				"onUpdate:page": _cache[2] || (_cache[2] = ($event) => tableOptions.value.page = $event),
				"items-per-page": tableOptions.value.itemsPerPage,
				"onUpdate:itemsPerPage": _cache[3] || (_cache[3] = ($event) => tableOptions.value.itemsPerPage = $event),
				headers: headers.value,
				items: rows.value,
				"items-length": __props.data.count,
				"page-sizes": [
					10,
					25,
					50
				],
				"onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
			}, {
				[`item.name`]: withCtx(({ value }) => [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nUserInfo_default), normalizeProps(guardReactiveProps(value)), null, 16)])]),
				[`item.role`]: withCtx(({ item }) => [canUpdateRole.value ? (openBlock(), createBlock(SettingsUsersRoleCell_default, {
					key: 0,
					data: item,
					loading: props.updatingRoleUserId === item.id,
					"onUpdate:role": onRoleChange
				}, null, 8, ["data", "loading"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-dark",
					class: normalizeClass(_ctx.$style.roleName)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(roles.value[item.role ?? unref(ROLE).Default]?.label), 1)]),
					_: 2
				}, 1032, ["class"]))]),
				[`item.lastActiveAt`]: withCtx(({ item }) => [createVNode(SettingsUsersLastActiveCell_default, { data: item }, null, 8, ["data"])]),
				[`item.projects`]: withCtx(({ item }) => [createVNode(SettingsUsersProjectsCell_default, { data: item }, null, 8, ["data"])]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(SettingsUsersActionsCell_default, {
					data: item,
					actions: filterActions(item),
					onAction: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("action", $event))
				}, null, 8, ["data", "actions"])]),
				_: 2
			}, 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length"
			])]);
		};
	}
});
//#endregion
//#region src/features/settings/users/components/SettingsUsersTable.vue?vue&type=style&index=0&lang.module.scss
var roleName = "_roleName_tqc6c_388";
var shimmer$1 = "_shimmer_tqc6c_1";
var spin$1 = "_spin_tqc6c_1";
var opacityPulse$1 = "_opacityPulse_tqc6c_1";
var popoverIn$1 = "_popoverIn_tqc6c_1";
var fadeIn$1 = "_fadeIn_tqc6c_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_tqc6c_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_tqc6c_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_tqc6c_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_tqc6c_1";
var blurSwapIn$1 = "_blurSwapIn_tqc6c_1";
var blurSwapOut$1 = "_blurSwapOut_tqc6c_1";
var pulseGlow$1 = "_pulseGlow_tqc6c_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_tqc6c_1";
var fade$1 = "_fade_tqc6c_1";
var fadeInUp$1 = "_fadeInUp_tqc6c_1";
var fadeInDown$1 = "_fadeInDown_tqc6c_1";
var fadeInLeft$1 = "_fadeInLeft_tqc6c_1";
var fadeInRight$1 = "_fadeInRight_tqc6c_1";
var fadeOut$1 = "_fadeOut_tqc6c_1";
var fadeOutDown$1 = "_fadeOutDown_tqc6c_1";
var fadeOutUp$1 = "_fadeOutUp_tqc6c_1";
var fadeOutLeft$1 = "_fadeOutLeft_tqc6c_1";
var fadeOutRight$1 = "_fadeOutRight_tqc6c_1";
var ping$1 = "_ping_tqc6c_1";
var blinkBackground$1 = "_blinkBackground_tqc6c_1";
var typingBlink$1 = "_typingBlink_tqc6c_1";
var SettingsUsersTable_vue_vue_type_style_index_0_lang_module_default = {
	roleName,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_tqc6c_1",
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
var SettingsUsersTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsUsersTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsersTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/users/views/SettingsUsersView.vue?vue&type=script&setup=true&lang.ts
var SettingsUsersView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersView",
	setup(__props) {
		const clipboard = useClipboard();
		const { showToast, showError } = useToast();
		const message = useMessage();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const rolesStore = useRolesStore();
		const ssoStore = useSSOStore();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const userRoleProvisioningStore = useUserRoleProvisioningStore();
		const i18n = useI18n();
		const search = ref("");
		const usersTableState = ref({
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
		const showUMSetupWarning = computed(() => hasPermission(["defaultUser"]));
		const isInstanceRoleProvisioningEnabled = computed(() => userRoleProvisioningStore.provisioningConfig?.scopesProvisionInstanceRole || false);
		const isExpressionMappingEnabled = computed(() => userRoleProvisioningStore.provisioningConfig?.scopesUseExpressionMapping || false);
		const isSSOEnabled = computed(() => !!ssoStore.isSamlLoginEnabled || !!ssoStore.isOidcLoginEnabled);
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.users"));
			if (!showUMSetupWarning.value) await updateUsersTableData(usersTableState.value);
			if (!rolesStore.roles.project.length) rolesStore.fetchRoles();
			await userRoleProvisioningStore.getProvisioningConfig();
		});
		const usersListActions = computed(() => {
			return [
				{
					label: i18n.baseText("settings.users.actions.generateInviteLink"),
					value: "generateInviteLink",
					guard: (user) => hasPermission(["rbac"], { rbac: { scope: "user:generateInviteLink" } }) && usersStore.usersLimitNotReached && user.id !== usersStore.currentUserId && !user.firstName
				},
				{
					label: i18n.baseText("settings.users.actions.reinvite"),
					value: "reinvite",
					guard: (user) => usersStore.usersLimitNotReached && !user.firstName && settingsStore.isSmtpSetup
				},
				{
					label: i18n.baseText("settings.users.actions.delete"),
					value: "delete",
					guard: (user) => hasPermission(["rbac"], { rbac: { scope: "user:delete" } }) && user.id !== usersStore.currentUserId
				},
				{
					label: i18n.baseText("settings.users.actions.copyPasswordResetLink"),
					value: "copyPasswordResetLink",
					guard: (user) => hasPermission(["rbac"], { rbac: { scope: "user:resetPassword" } }) && usersStore.usersLimitNotReached && !user.isPendingUser && user.id !== usersStore.currentUserId
				},
				{
					label: i18n.baseText("settings.users.actions.allowSSOManualLogin"),
					value: "allowSSOManualLogin",
					guard: (user) => isSSOEnabled.value && !user.settings?.allowSSOManualLogin
				},
				{
					label: i18n.baseText("settings.users.actions.disallowSSOManualLogin"),
					value: "disallowSSOManualLogin",
					guard: (user) => isSSOEnabled.value && user.settings?.allowSSOManualLogin === true
				}
			];
		});
		const isAdvancedPermissionsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedPermissions]);
		const userRoles = computed(() => {
			return [
				{
					value: ROLE.Member,
					label: i18n.baseText("auth.roles.member")
				},
				{
					value: ROLE.ChatUser,
					label: i18n.baseText("auth.roles.chatUser"),
					disabled: !isAdvancedPermissionsEnabled.value
				},
				{
					value: ROLE.Admin,
					label: i18n.baseText("auth.roles.admin"),
					disabled: !isAdvancedPermissionsEnabled.value
				},
				...rolesStore.customInstanceRoles.map((role) => ({
					value: role.slug,
					label: role.displayName,
					disabled: !role.licensed
				}))
			];
		});
		async function onUsersListAction({ action, userId }) {
			switch (action) {
				case "delete":
					await onDelete(userId);
					break;
				case "reinvite":
					await onReinvite(userId);
					break;
				case "copyInviteLink":
					await onCopyInviteLink(userId);
					break;
				case "generateInviteLink":
					await onGenerateInviteLink(userId);
					break;
				case "copyPasswordResetLink":
					await onCopyPasswordResetLink(userId);
					break;
				case "allowSSOManualLogin":
					await onAllowSSOManualLogin(userId);
					break;
				case "disallowSSOManualLogin":
					await onDisallowSSOManualLogin(userId);
					break;
			}
		}
		function onInvite() {
			uiStore.openModalWithData({
				name: INVITE_USER_MODAL_KEY,
				data: { afterInvite: async () => {
					await updateUsersTableData(usersTableState.value);
				} }
			});
		}
		async function onDelete(userId) {
			uiStore.openModalWithData({
				name: DELETE_USER_MODAL_KEY,
				data: {
					userId,
					afterDelete: async () => {
						await updateUsersTableData(usersTableState.value);
					}
				}
			});
		}
		async function onReinvite(userId) {
			try {
				const user = usersStore.usersList.state.items.find((u) => u.id === userId);
				if (user?.email && user?.role) {
					if (!(user.role !== ROLE.Owner && user.role !== ROLE.Default && user.role !== ROLE.ChatUser)) throw new Error("Invalid role name on reinvite");
					await usersStore.reinviteUser({
						email: user.email,
						role: user.role
					});
					showToast({
						type: "success",
						title: i18n.baseText("settings.users.inviteResent"),
						message: i18n.baseText("settings.users.emailSentTo", { interpolate: { email: user.email ?? "" } })
					});
				}
			} catch (e) {
				showError(e, i18n.baseText("settings.users.userReinviteError"));
			}
		}
		async function onCopyInviteLink(userId) {
			const user = usersStore.usersList.state.items.find((u) => u.id === userId);
			if (user?.inviteAcceptUrl) {
				clipboard.copy(user.inviteAcceptUrl);
				showToast({
					type: "success",
					title: i18n.baseText("settings.users.inviteUrlCreated"),
					message: i18n.baseText("settings.users.inviteUrlCreated.message")
				});
			}
		}
		async function onGenerateInviteLink(userId) {
			try {
				if (usersStore.usersList.state.items.find((u) => u.id === userId)) {
					await copyInviteLink(clipboard, usersStore, userId);
					showToast({
						type: "success",
						title: i18n.baseText("settings.users.inviteUrlCreated"),
						message: i18n.baseText("settings.users.inviteUrlCreated.message")
					});
				}
			} catch (error) {
				showError(error, i18n.baseText("settings.users.inviteLinkError"));
			}
		}
		async function onCopyPasswordResetLink(userId) {
			try {
				const user = usersStore.usersList.state.items.find((u) => u.id === userId);
				if (user) {
					const url = await usersStore.getUserPasswordResetLink(user);
					clipboard.copy(url.link);
					showToast({
						type: "success",
						title: i18n.baseText("settings.users.passwordResetUrlCreated"),
						message: i18n.baseText("settings.users.passwordResetUrlCreated.message")
					});
				}
			} catch (error) {
				showError(error, i18n.baseText("settings.users.passwordResetLinkError"));
			}
		}
		async function onAllowSSOManualLogin(userId) {
			const user = usersStore.usersList.state.items.find((u) => u.id === userId);
			if (user) {
				if (!user.settings) user.settings = {};
				user.settings.allowSSOManualLogin = true;
				await usersStore.updateOtherUserSettings(userId, user.settings);
				await updateUsersTableData(usersTableState.value);
				showToast({
					type: "success",
					title: i18n.baseText("settings.users.allowSSOManualLogin"),
					message: i18n.baseText("settings.users.allowSSOManualLogin.message")
				});
			}
		}
		async function onDisallowSSOManualLogin(userId) {
			const user = usersStore.usersList.state.items.find((u) => u.id === userId);
			if (user?.settings) {
				user.settings.allowSSOManualLogin = false;
				await usersStore.updateOtherUserSettings(userId, user.settings);
				await updateUsersTableData(usersTableState.value);
				showToast({
					type: "success",
					title: i18n.baseText("settings.users.disallowSSOManualLogin"),
					message: i18n.baseText("settings.users.disallowSSOManualLogin.message")
				});
			}
		}
		function goToUpgrade() {
			pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-users");
		}
		function goToUpgradeAdvancedPermissions() {
			pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-advanced-permissions");
		}
		const updatingRoleUserId = ref(null);
		const onUpdateRole = async (payload) => {
			const user = usersStore.usersList.state.items.find((u) => u.id === payload.userId);
			if (!user) {
				showError(/* @__PURE__ */ new Error("User not found"), i18n.baseText("settings.users.userNotFound"));
				return;
			}
			await onRoleChange(user, payload.role);
		};
		const updateUsersTableData = async ({ page, itemsPerPage, sortBy }) => {
			try {
				usersTableState.value = {
					page,
					itemsPerPage,
					sortBy
				};
				const skip = page * itemsPerPage;
				const take = itemsPerPage;
				const transformedSortBy = sortBy.flatMap(({ id, desc }) => {
					const dir = desc ? "desc" : "asc";
					if (id === "name") return [
						`firstName:${dir}`,
						`lastName:${dir}`,
						`email:${dir}`
					];
					return `${id}:${dir}`;
				}).filter(isValidSortKey);
				await usersStore.usersList.execute(0, {
					skip,
					take,
					sortBy: transformedSortBy,
					expand: ["projectRelations"],
					filter: { fullText: search.value.trim() }
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.users.table.update.error"));
			}
		};
		async function onRoleChange(user, newRoleName) {
			if (newRoleName === user.role) return;
			const name = user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.email ?? "";
			const role = userRoles.value.find(({ value }) => value === newRoleName)?.label ?? newRoleName;
			if (newRoleName === ROLE.ChatUser) {
				if (await message.confirm(i18n.baseText("settings.users.userRoleUpdated.confirm.message", { interpolate: { role } }), i18n.baseText("settings.users.userRoleUpdated.confirm.title", { interpolate: { user: name } }), {
					confirmButtonText: i18n.baseText("settings.users.userRoleUpdated.confirm.button"),
					cancelButtonText: i18n.baseText("settings.users.userRoleUpdated.cancel.button")
				}) !== "confirm") return;
			}
			updatingRoleUserId.value = user.id;
			try {
				await usersStore.updateGlobalRole({
					id: user.id,
					newRoleName
				});
				await updateUsersTableData(usersTableState.value);
				showToast({
					type: "success",
					title: i18n.baseText("settings.users.userRoleUpdated"),
					message: i18n.baseText("settings.users.userRoleUpdated.message", { interpolate: {
						user: name,
						role
					} })
				});
			} catch (e) {
				showError(e, i18n.baseText("settings.users.userRoleUpdatedError"));
			} finally {
				updatingRoleUserId.value = null;
			}
		}
		const isValidSortKey = (key) => USERS_LIST_SORT_OPTIONS.includes(key);
		const debouncedUpdateUsersTableData = useDebounceFn(() => {
			usersTableState.value.page = 0;
			updateUsersTableData(usersTableState.value);
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const onSearch = (value) => {
			search.value = value;
			debouncedUpdateUsersTableData();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge",
					class: "mb-xl"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.users")) + " ", 1), !showUMSetupWarning.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.userCount),
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.users.count", {
							interpolate: { count: unref(usersStore).usersList.state.count },
							adjustToNumber: unref(usersStore).usersList.state.count
						})), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}),
				!unref(usersStore).usersLimitNotReached ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.setupInfoContainer)
				}, [createVNode(unref(N8nEmptyState_default), {
					heading: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.title),
					description: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.description),
					"button-text": unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.button),
					"onClick:button": goToUpgrade
				}, null, 8, [
					"heading",
					"description",
					"button-text"
				])], 2)) : createCommentVNode("", true),
				!isAdvancedPermissionsEnabled.value ? (openBlock(), createBlock(unref(N8nNotice_default), { key: 1 }, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.users.advancedPermissions.warning",
						scope: "global"
					}, {
						link: withCtx(() => [createVNode(unref(N8nLink_default), {
							"data-test-id": "upgrade-permissions-link",
							size: "small",
							onClick: goToUpgradeAdvancedPermissions
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				})) : createCommentVNode("", true),
				isExpressionMappingEnabled.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.container)
				}, [createVNode(unref(Alert_default), {
					type: "info",
					title: unref(i18n).baseText("settings.provisioningInstanceRolesHandledByExpressionMapping.description")
				}, null, 8, ["title"])], 2)) : isInstanceRoleProvisioningEnabled.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.container)
				}, [createVNode(unref(Alert_default), {
					type: "info",
					title: unref(i18n).baseText("settings.provisioningInstanceRolesHandledBySsoProvider.description")
				}, null, 8, ["title"])], 2)) : createCommentVNode("", true),
				!showUMSetupWarning.value ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass(_ctx.$style.buttonContainer)
				}, [createVNode(unref(Input_default), {
					class: normalizeClass(_ctx.$style.search),
					"model-value": search.value,
					placeholder: unref(i18n).baseText("settings.users.search.placeholder"),
					clearable: "",
					"data-test-id": "users-list-search",
					"onUpdate:modelValue": onSearch
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
					_: 1
				}, 8, [
					"class",
					"model-value",
					"placeholder"
				]), createVNode(unref(N8nTooltip_default), { disabled: !isSSOEnabled.value }, {
					content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.users.invite.tooltip")), 1)]),
					default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
						disabled: isSSOEnabled.value || !unref(usersStore).usersLimitNotReached || isInstanceRoleProvisioningEnabled.value,
						label: unref(i18n).baseText("settings.users.invite"),
						size: "large",
						"data-test-id": "settings-users-invite-button",
						onClick: onInvite
					}, null, 8, ["disabled", "label"])])]),
					_: 1
				}, 8, ["disabled"])], 2)) : createCommentVNode("", true),
				unref(usersStore).usersLimitNotReached || unref(usersStore).usersList.state.count > 1 ? (openBlock(), createElementBlock("div", {
					key: 5,
					class: normalizeClass(_ctx.$style.usersContainer)
				}, [createVNode(SettingsUsersTable_default, {
					"table-options": usersTableState.value,
					"onUpdate:tableOptions": _cache[0] || (_cache[0] = ($event) => usersTableState.value = $event),
					"data-test-id": "settings-users-table",
					"can-edit-role": !isInstanceRoleProvisioningEnabled.value && !isExpressionMappingEnabled.value,
					data: unref(usersStore).usersList.state,
					loading: unref(usersStore).usersList.isLoading,
					"updating-role-user-id": updatingRoleUserId.value,
					actions: usersListActions.value,
					"onUpdate:options": updateUsersTableData,
					"onUpdate:role": onUpdateRole,
					onAction: onUsersListAction
				}, null, 8, [
					"table-options",
					"can-edit-role",
					"data",
					"loading",
					"updating-role-user-id",
					"actions"
				])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/users/views/SettingsUsersView.vue?vue&type=style&index=0&lang.module.scss
var userCount = "_userCount_4pyc2_388";
var buttonContainer = "_buttonContainer_4pyc2_393";
var search = "_search_4pyc2_400";
var setupInfoContainer = "_setupInfoContainer_4pyc2_404";
var container = "_container_4pyc2_408";
var shimmer = "_shimmer_4pyc2_1";
var spin = "_spin_4pyc2_1";
var opacityPulse = "_opacityPulse_4pyc2_1";
var popoverIn = "_popoverIn_4pyc2_1";
var fadeIn = "_fadeIn_4pyc2_1";
var collapsibleSlideDown = "_collapsibleSlideDown_4pyc2_1";
var collapsibleSlideUp = "_collapsibleSlideUp_4pyc2_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_4pyc2_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_4pyc2_1";
var blurSwapIn = "_blurSwapIn_4pyc2_1";
var blurSwapOut = "_blurSwapOut_4pyc2_1";
var pulseGlow = "_pulseGlow_4pyc2_1";
var pulseGlowDelayed = "_pulseGlowDelayed_4pyc2_1";
var fade = "_fade_4pyc2_1";
var fadeInUp = "_fadeInUp_4pyc2_1";
var fadeInDown = "_fadeInDown_4pyc2_1";
var fadeInLeft = "_fadeInLeft_4pyc2_1";
var fadeInRight = "_fadeInRight_4pyc2_1";
var fadeOut = "_fadeOut_4pyc2_1";
var fadeOutDown = "_fadeOutDown_4pyc2_1";
var fadeOutUp = "_fadeOutUp_4pyc2_1";
var fadeOutLeft = "_fadeOutLeft_4pyc2_1";
var fadeOutRight = "_fadeOutRight_4pyc2_1";
var ping = "_ping_4pyc2_1";
var blinkBackground = "_blinkBackground_4pyc2_1";
var typingBlink = "_typingBlink_4pyc2_1";
var SettingsUsersView_vue_vue_type_style_index_0_lang_module_default = {
	userCount,
	buttonContainer,
	search,
	setupInfoContainer,
	container,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_4pyc2_1",
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
var SettingsUsersView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsUsersView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsersView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsUsersView_default as default };
