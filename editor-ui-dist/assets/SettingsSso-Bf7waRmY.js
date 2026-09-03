import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, jt as isRef, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as ElDialog } from "./dialog-BWWCBb2k.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { o as onBeforeRouteLeave } from "./vue-router-DPnGeMd9.js";
import { Ft as LanguageSupport, Hn as N8nSegmentControl_default, Nt as HighlightStyle, Pt as LRLanguage, Xt as syntaxTree, Yt as syntaxHighlighting, _n as keymap, an as EditorView, en as tags, et as history, i as javascriptLanguage, in as Decoration, kn as EditorState, n as parserWithMetaData, nt as historyKeymap, rn as parseMixed, sn as ViewPlugin } from "./expressions-D0CrLSIZ.js";
import { vn as useProjectsStore } from "./workflows.store-Bo6ZgF_O.js";
import { E as ROLE, t as BLOCK_ACCESS_ASSIGNMENT } from "./src-C3aqUyDp.js";
import { dt as createRoleMappingRule, ft as deleteRoleMappingRule, h as getUsers, ht as updateRoleMappingRule, mt as moveRoleMappingRule, pt as listRoleMappingRules, t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-mu-wA-a0.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import "./constants-DPRLSskW.js";
import { t as hasPermission } from "./permissions-DkZpSVVu.js";
import { t as useRBACStore } from "./rbac.store-Ccg7Lc79.js";
import { n as useDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { t as useClipboard } from "./useClipboard-FfSvbxpY.js";
import { r as captureMessage } from "./exports-kkeZrzev.js";
import { t as CopyInput_default } from "./CopyInput-GFjFgDpf.js";
import { t as useRolesStore } from "./roles.store-CO744ciA.js";
import { t as draggableComponent } from "./vuedraggable-DbY2AIiN.js";
import { n as useSSOStore, t as SupportedProtocols } from "./sso.store-BrWB_AE6.js";
import { n as CustomRolesUpgradeModal_default, t as RoleSelectDropdown_default } from "./RoleSelectDropdown-C2NOmP0X.js";
import { a as countGrantedInstancePermissions, i as TOTAL_INSTANCE_PERMISSIONS } from "./instanceRoleScopes-BmXwJXy3.js";
import { t as useUserRoleProvisioningStore } from "./userRoleProvisioning.store-Ddi_Uoyj.js";
//#region src/features/settings/sso/provisioning/components/InstanceRoleAssignmentSelect.vue?vue&type=script&setup=true&lang.ts
var InstanceRoleAssignmentSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceRoleAssignmentSelect",
	props: /* @__PURE__ */ mergeModels({
		disabled: {
			type: Boolean,
			default: false
		},
		testId: { default: "instance-role-assignment-select" },
		allowBlockAccess: {
			type: Boolean,
			default: false
		}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const rolesStore = useRolesStore();
		const hasCustomRolesLicense = computed(() => settingsStore.isCustomRolesFeatureEnabled);
		const canManageRoles = computed(() => hasPermission(["rbac"], { rbac: { scope: "role:manage" } }));
		const systemRoles = computed(() => rolesStore.processedInstanceRoles.filter((role) => role.systemRole));
		const customRoles = computed(() => rolesStore.customInstanceRoles);
		const permissionCountFor = (role) => countGrantedInstancePermissions(role.scopes ?? []);
		const blockAccessOption = computed(() => __props.allowBlockAccess ? {
			value: BLOCK_ACCESS_ASSIGNMENT,
			label: i18n.baseText("settings.sso.settings.roleMappingRules.blockAccess")
		} : void 0);
		const upgradeModalVisible = ref(false);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(_ctx.$style.wrapper) }, [createVNode(RoleSelectDropdown_default, {
				"system-roles": systemRoles.value,
				"custom-roles": customRoles.value,
				"current-role": modelValue.value,
				"has-custom-roles-license": hasCustomRolesLicense.value,
				"can-manage-roles": canManageRoles.value,
				"add-custom-role-route-name": unref(VIEWS).INSTANCE_NEW_ROLE,
				"terminal-option": blockAccessOption.value,
				placeholder: unref(i18n).baseText("settings.sso.settings.roleMappingRules.selectRole"),
				variant: "default",
				disabled: __props.disabled,
				"permission-count-fn": permissionCountFor,
				"total-permissions": unref(TOTAL_INSTANCE_PERMISSIONS),
				"edit-route-name": unref(VIEWS).INSTANCE_ROLE_SETTINGS,
				"view-route-name": unref(VIEWS).INSTANCE_ROLE_VIEW,
				"from-view": unref(VIEWS).SSO_SETTINGS,
				"test-id": __props.testId,
				"onUpdate:role": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				onSystemRoleUpgradeNeeded: _cache[1] || (_cache[1] = ($event) => upgradeModalVisible.value = true)
			}, null, 8, [
				"system-roles",
				"custom-roles",
				"current-role",
				"has-custom-roles-license",
				"can-manage-roles",
				"add-custom-role-route-name",
				"terminal-option",
				"placeholder",
				"disabled",
				"total-permissions",
				"edit-route-name",
				"view-route-name",
				"from-view",
				"test-id"
			]), createVNode(CustomRolesUpgradeModal_default, {
				modelValue: upgradeModalVisible.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => upgradeModalVisible.value = $event)
			}, null, 8, ["modelValue"])], 2);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/InstanceRoleAssignmentSelect.vue?vue&type=style&index=0&lang.module.scss
var wrapper$2 = "_wrapper_1ixx6_388";
var shimmer$11 = "_shimmer_1ixx6_1";
var spin$11 = "_spin_1ixx6_1";
var opacityPulse$11 = "_opacityPulse_1ixx6_1";
var popoverIn$11 = "_popoverIn_1ixx6_1";
var fadeIn$11 = "_fadeIn_1ixx6_1";
var collapsibleSlideDown$11 = "_collapsibleSlideDown_1ixx6_1";
var collapsibleSlideUp$11 = "_collapsibleSlideUp_1ixx6_1";
var collapsibleSlideDownBlurred$11 = "_collapsibleSlideDownBlurred_1ixx6_1";
var collapsibleSlideUpBlurred$11 = "_collapsibleSlideUpBlurred_1ixx6_1";
var blurSwapIn$11 = "_blurSwapIn_1ixx6_1";
var blurSwapOut$11 = "_blurSwapOut_1ixx6_1";
var pulseGlow$11 = "_pulseGlow_1ixx6_1";
var pulseGlowDelayed$11 = "_pulseGlowDelayed_1ixx6_1";
var fade$11 = "_fade_1ixx6_1";
var fadeInUp$11 = "_fadeInUp_1ixx6_1";
var fadeInDown$11 = "_fadeInDown_1ixx6_1";
var fadeInLeft$11 = "_fadeInLeft_1ixx6_1";
var fadeInRight$11 = "_fadeInRight_1ixx6_1";
var fadeOut$11 = "_fadeOut_1ixx6_1";
var fadeOutDown$11 = "_fadeOutDown_1ixx6_1";
var fadeOutUp$11 = "_fadeOutUp_1ixx6_1";
var fadeOutLeft$11 = "_fadeOutLeft_1ixx6_1";
var fadeOutRight$11 = "_fadeOutRight_1ixx6_1";
var ping$11 = "_ping_1ixx6_1";
var blinkBackground$11 = "_blinkBackground_1ixx6_1";
var typingBlink$11 = "_typingBlink_1ixx6_1";
var InstanceRoleAssignmentSelect_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: wrapper$2,
	shimmer: shimmer$11,
	spin: spin$11,
	"skeleton-pulse": "_skeleton-pulse_1ixx6_1",
	opacityPulse: opacityPulse$11,
	popoverIn: popoverIn$11,
	fadeIn: fadeIn$11,
	collapsibleSlideDown: collapsibleSlideDown$11,
	collapsibleSlideUp: collapsibleSlideUp$11,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$11,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$11,
	blurSwapIn: blurSwapIn$11,
	blurSwapOut: blurSwapOut$11,
	pulseGlow: pulseGlow$11,
	pulseGlowDelayed: pulseGlowDelayed$11,
	fade: fade$11,
	fadeInUp: fadeInUp$11,
	fadeInDown: fadeInDown$11,
	fadeInLeft: fadeInLeft$11,
	fadeInRight: fadeInRight$11,
	fadeOut: fadeOut$11,
	fadeOutDown: fadeOutDown$11,
	fadeOutUp: fadeOutUp$11,
	fadeOutLeft: fadeOutLeft$11,
	fadeOutRight: fadeOutRight$11,
	ping: ping$11,
	blinkBackground: blinkBackground$11,
	typingBlink: typingBlink$11
};
var InstanceRoleAssignmentSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceRoleAssignmentSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceRoleAssignmentSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/provisioning/components/DefaultConditionRow.vue?vue&type=script&setup=true&lang.ts
var DefaultConditionRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultConditionRow",
	props: /* @__PURE__ */ mergeModels({
		label: {},
		disabled: {
			type: Boolean,
			default: false
		},
		standalone: {
			type: Boolean,
			default: false
		}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.defaultRow, { [_ctx.$style.standalone]: __props.standalone }]),
				"data-test-id": "default-condition-row"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.defaultCellIcon) }, [createVNode(unref(N8nIcon_default), {
					icon: "lock",
					size: "small",
					color: "text-light"
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.defaultCellText) }, toDisplayString(__props.label), 3),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.defaultCellRole) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.sso.settings.roleMappingRules.assign")), 3), createVNode(InstanceRoleAssignmentSelect_default, {
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
					disabled: __props.disabled,
					"allow-block-access": "",
					"test-id": "default-condition-role-select"
				}, null, 8, ["modelValue", "disabled"])], 2),
				!__props.standalone ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.defaultCellSpacer)
				}, null, 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/DefaultConditionRow.vue?vue&type=style&index=0&lang.module.scss
var defaultRow$1 = "_defaultRow_17plr_388";
var standalone = "_standalone_17plr_396";
var defaultCellIcon$1 = "_defaultCellIcon_17plr_401";
var defaultCellText$1 = "_defaultCellText_17plr_410";
var defaultCellRole = "_defaultCellRole_17plr_418";
var defaultCellSpacer$1 = "_defaultCellSpacer_17plr_426";
var label$1 = "_label_17plr_431";
var shimmer$10 = "_shimmer_17plr_1";
var spin$10 = "_spin_17plr_1";
var opacityPulse$10 = "_opacityPulse_17plr_1";
var popoverIn$10 = "_popoverIn_17plr_1";
var fadeIn$10 = "_fadeIn_17plr_1";
var collapsibleSlideDown$10 = "_collapsibleSlideDown_17plr_1";
var collapsibleSlideUp$10 = "_collapsibleSlideUp_17plr_1";
var collapsibleSlideDownBlurred$10 = "_collapsibleSlideDownBlurred_17plr_1";
var collapsibleSlideUpBlurred$10 = "_collapsibleSlideUpBlurred_17plr_1";
var blurSwapIn$10 = "_blurSwapIn_17plr_1";
var blurSwapOut$10 = "_blurSwapOut_17plr_1";
var pulseGlow$10 = "_pulseGlow_17plr_1";
var pulseGlowDelayed$10 = "_pulseGlowDelayed_17plr_1";
var fade$10 = "_fade_17plr_1";
var fadeInUp$10 = "_fadeInUp_17plr_1";
var fadeInDown$10 = "_fadeInDown_17plr_1";
var fadeInLeft$10 = "_fadeInLeft_17plr_1";
var fadeInRight$10 = "_fadeInRight_17plr_1";
var fadeOut$10 = "_fadeOut_17plr_1";
var fadeOutDown$10 = "_fadeOutDown_17plr_1";
var fadeOutUp$10 = "_fadeOutUp_17plr_1";
var fadeOutLeft$10 = "_fadeOutLeft_17plr_1";
var fadeOutRight$10 = "_fadeOutRight_17plr_1";
var ping$10 = "_ping_17plr_1";
var blinkBackground$10 = "_blinkBackground_17plr_1";
var typingBlink$10 = "_typingBlink_17plr_1";
var DefaultConditionRow_vue_vue_type_style_index_0_lang_module_default = {
	defaultRow: defaultRow$1,
	standalone,
	defaultCellIcon: defaultCellIcon$1,
	defaultCellText: defaultCellText$1,
	defaultCellRole,
	defaultCellSpacer: defaultCellSpacer$1,
	label: label$1,
	shimmer: shimmer$10,
	spin: spin$10,
	"skeleton-pulse": "_skeleton-pulse_17plr_1",
	opacityPulse: opacityPulse$10,
	popoverIn: popoverIn$10,
	fadeIn: fadeIn$10,
	collapsibleSlideDown: collapsibleSlideDown$10,
	collapsibleSlideUp: collapsibleSlideUp$10,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$10,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$10,
	blurSwapIn: blurSwapIn$10,
	blurSwapOut: blurSwapOut$10,
	pulseGlow: pulseGlow$10,
	pulseGlowDelayed: pulseGlowDelayed$10,
	fade: fade$10,
	fadeInUp: fadeInUp$10,
	fadeInDown: fadeInDown$10,
	fadeInLeft: fadeInLeft$10,
	fadeInRight: fadeInRight$10,
	fadeOut: fadeOut$10,
	fadeOutDown: fadeOutDown$10,
	fadeOutUp: fadeOutUp$10,
	fadeOutLeft: fadeOutLeft$10,
	fadeOutRight: fadeOutRight$10,
	ping: ping$10,
	blinkBackground: blinkBackground$10,
	typingBlink: typingBlink$10
};
var DefaultConditionRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DefaultConditionRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DefaultConditionRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/provisioning/components/UserRoleProvisioningDropdown.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["href"];
var UserRoleProvisioningDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "UserRoleProvisioningDropdown",
	props: /* @__PURE__ */ mergeModels({
		authProtocol: {},
		disabled: {
			type: Boolean,
			default: false
		}
	}, {
		"roleAssignment": { default: "manual" },
		"roleAssignmentModifiers": {},
		"mappingMethod": { default: "idp" },
		"mappingMethodModifiers": {},
		"defaultInstanceRole": { default: ROLE.Member },
		"defaultInstanceRoleModifiers": {}
	}),
	emits: [
		"update:roleAssignment",
		"update:mappingMethod",
		"update:defaultInstanceRole"
	],
	setup(__props) {
		const roleAssignment = useModel(__props, "roleAssignment");
		const mappingMethod = useModel(__props, "mappingMethod");
		const defaultInstanceRole = useModel(__props, "defaultInstanceRole");
		const i18n = useI18n();
		const canManage = useRBACStore().hasScope("provisioning:manage");
		const showMappingMethod = computed(() => roleAssignment.value !== "manual");
		const showIdpInfoBox = computed(() => showMappingMethod.value && mappingMethod.value === "idp");
		const idpInfoText = computed(() => roleAssignment.value === "instance_and_project" ? i18n.baseText("settings.sso.settings.roleMappingMethod.idp.instanceAndProjectInfo") : i18n.baseText("settings.sso.settings.roleMappingMethod.idp.instanceInfo"));
		const roleAssignmentOptions = [
			{
				value: "manual",
				label: "roleAssignment.manual",
				desc: "roleAssignment.manual.description"
			},
			{
				value: "instance",
				label: "roleAssignment.instanceRoles",
				desc: "roleAssignment.instanceRoles.description"
			},
			{
				value: "instance_and_project",
				label: "roleAssignment.instanceAndProjectRoles",
				desc: "roleAssignment.instanceAndProjectRoles.description"
			}
		];
		const mappingMethodOptions = [{
			value: "idp",
			label: "roleMappingMethod.idp",
			desc: "roleMappingMethod.idp.description"
		}, {
			value: "rules_in_n8n",
			label: "roleMappingMethod.rulesInN8n",
			desc: "roleMappingMethod.rulesInN8n.description"
		}];
		const ssoKey = (key) => i18n.baseText(`settings.sso.settings.${key}`);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("div", { class: normalizeClass([_ctx.shared.settingsItem, { [_ctx.shared.settingsItemNoBorder]: !showMappingMethod.value }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.shared.settingsItemLabel) }, [createBaseVNode("label", null, toDisplayString(ssoKey("roleAssignment.label")), 1), createBaseVNode("small", null, toDisplayString(ssoKey("roleAssignment.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.shared.settingsItemControl) }, [createVNode(unref(N8nSelect_default), {
					modelValue: roleAssignment.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => roleAssignment.value = $event),
					size: "medium",
					disabled: __props.disabled || !unref(canManage),
					"data-test-id": "role-assignment-select"
				}, {
					default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(roleAssignmentOptions, (opt) => {
						return createVNode(unref(N8nOption_default), {
							key: opt.value,
							label: ssoKey(opt.label),
							value: opt.value
						}, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionContent) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionTitle) }, toDisplayString(ssoKey(opt.label)), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionDescription) }, toDisplayString(ssoKey(opt.desc)), 3)], 2)]),
							_: 2
						}, 1032, ["label", "value"]);
					}), 64))]),
					_: 1
				}, 8, ["modelValue", "disabled"])], 2)], 2),
				showMappingMethod.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.shared.settingsItem)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.shared.settingsItemLabel) }, [createBaseVNode("label", null, toDisplayString(ssoKey("roleMappingMethod.label")), 1), createBaseVNode("small", null, toDisplayString(ssoKey("roleMappingMethod.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.shared.settingsItemControl) }, [createVNode(unref(N8nSelect_default), {
					modelValue: mappingMethod.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => mappingMethod.value = $event),
					size: "medium",
					disabled: __props.disabled || !unref(canManage),
					"data-test-id": "role-mapping-method-select"
				}, {
					default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(mappingMethodOptions, (opt) => {
						return createVNode(unref(N8nOption_default), {
							key: opt.value,
							label: ssoKey(opt.label),
							value: opt.value
						}, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionContent) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionTitle) }, toDisplayString(ssoKey(opt.label)), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionDescription) }, toDisplayString(ssoKey(opt.desc)), 3)], 2)]),
							_: 2
						}, 1032, ["label", "value"]);
					}), 64))]),
					_: 1
				}, 8, ["modelValue", "disabled"])], 2)], 2)) : createCommentVNode("", true),
				showIdpInfoBox.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.infoBox) }, [createVNode(unref(N8nCallout_default), {
					theme: "custom",
					icon: "info",
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [createBaseVNode("div", null, toDisplayString(idpInfoText.value), 1), createBaseVNode("a", {
						href: `https://docs.n8n.io/user-management/${__props.authProtocol}/setup/`,
						target: "_blank",
						class: normalizeClass(_ctx.$style.learnMoreLink)
					}, toDisplayString(unref(i18n).baseText("settings.sso.settings.roleMappingMethod.idp.learnMore")), 11, _hoisted_1$5)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(DefaultConditionRow_default, {
					modelValue: defaultInstanceRole.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => defaultInstanceRole.value = $event),
					standalone: "",
					label: unref(i18n).baseText("settings.sso.settings.roleMappingRules.defaultCondition.idp"),
					disabled: __props.disabled || !unref(canManage)
				}, null, 8, [
					"modelValue",
					"label",
					"disabled"
				])], 64)) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
//#region src/features/settings/sso/styles/sso-form.module.scss?vue&type=style&index=0&src=true&lang.module.scss
var buttons = "_buttons_ngd88_397";
var group = "_group_ngd88_406";
var checkboxGroup = "_checkboxGroup_ngd88_427";
var actionBox$1 = "_actionBox_ngd88_431";
var card$1 = "_card_ngd88_435";
var firstCard = "_firstCard_ngd88_443";
var settingsItem = "_settingsItem_ngd88_453";
var settingsItemNoBorder = "_settingsItemNoBorder_ngd88_465";
var settingsItemLabel = "_settingsItemLabel_ngd88_469";
var settingsItemControl = "_settingsItemControl_ngd88_486";
var copyInputGroup = "_copyInputGroup_ngd88_496";
var copyInputField = "_copyInputField_ngd88_505";
var copyButtonWrapper = "_copyButtonWrapper_ngd88_526";
var ipsBlock = "_ipsBlock_ngd88_544";
var fieldError = "_fieldError_ngd88_554";
var optional = "_optional_ngd88_561";
var greenDot = "_greenDot_ngd88_566";
var footer$1 = "_footer_ngd88_575";
var shimmer$9 = "_shimmer_ngd88_1";
var spin$9 = "_spin_ngd88_1";
var opacityPulse$9 = "_opacityPulse_ngd88_1";
var popoverIn$9 = "_popoverIn_ngd88_1";
var fadeIn$9 = "_fadeIn_ngd88_1";
var collapsibleSlideDown$9 = "_collapsibleSlideDown_ngd88_1";
var collapsibleSlideUp$9 = "_collapsibleSlideUp_ngd88_1";
var collapsibleSlideDownBlurred$9 = "_collapsibleSlideDownBlurred_ngd88_1";
var collapsibleSlideUpBlurred$9 = "_collapsibleSlideUpBlurred_ngd88_1";
var blurSwapIn$9 = "_blurSwapIn_ngd88_1";
var blurSwapOut$9 = "_blurSwapOut_ngd88_1";
var pulseGlow$9 = "_pulseGlow_ngd88_1";
var pulseGlowDelayed$9 = "_pulseGlowDelayed_ngd88_1";
var fade$9 = "_fade_ngd88_1";
var fadeInUp$9 = "_fadeInUp_ngd88_1";
var fadeInDown$9 = "_fadeInDown_ngd88_1";
var fadeInLeft$9 = "_fadeInLeft_ngd88_1";
var fadeInRight$9 = "_fadeInRight_ngd88_1";
var fadeOut$9 = "_fadeOut_ngd88_1";
var fadeOutDown$9 = "_fadeOutDown_ngd88_1";
var fadeOutUp$9 = "_fadeOutUp_ngd88_1";
var fadeOutLeft$9 = "_fadeOutLeft_ngd88_1";
var fadeOutRight$9 = "_fadeOutRight_ngd88_1";
var ping$9 = "_ping_ngd88_1";
var blinkBackground$9 = "_blinkBackground_ngd88_1";
var typingBlink$9 = "_typingBlink_ngd88_1";
var sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default = {
	"switch": "_switch_ngd88_391",
	buttons,
	group,
	checkboxGroup,
	actionBox: actionBox$1,
	card: card$1,
	firstCard,
	settingsItem,
	settingsItemNoBorder,
	settingsItemLabel,
	settingsItemControl,
	copyInputGroup,
	copyInputField,
	copyButtonWrapper,
	ipsBlock,
	fieldError,
	optional,
	greenDot,
	footer: footer$1,
	shimmer: shimmer$9,
	spin: spin$9,
	"skeleton-pulse": "_skeleton-pulse_ngd88_1",
	opacityPulse: opacityPulse$9,
	popoverIn: popoverIn$9,
	fadeIn: fadeIn$9,
	collapsibleSlideDown: collapsibleSlideDown$9,
	collapsibleSlideUp: collapsibleSlideUp$9,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$9,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$9,
	blurSwapIn: blurSwapIn$9,
	blurSwapOut: blurSwapOut$9,
	pulseGlow: pulseGlow$9,
	pulseGlowDelayed: pulseGlowDelayed$9,
	fade: fade$9,
	fadeInUp: fadeInUp$9,
	fadeInDown: fadeInDown$9,
	fadeInLeft: fadeInLeft$9,
	fadeInRight: fadeInRight$9,
	fadeOut: fadeOut$9,
	fadeOutDown: fadeOutDown$9,
	fadeOutUp: fadeOutUp$9,
	fadeOutLeft: fadeOutLeft$9,
	fadeOutRight: fadeOutRight$9,
	ping: ping$9,
	blinkBackground: blinkBackground$9,
	typingBlink: typingBlink$9
};
//#endregion
//#region src/features/settings/sso/provisioning/components/UserRoleProvisioningDropdown.vue?vue&type=style&index=1&lang.module.scss
var optionContent = "_optionContent_1wde8_388";
var optionTitle = "_optionTitle_1wde8_397";
var optionDescription = "_optionDescription_1wde8_403";
var callout = "_callout_1wde8_408";
var infoBox = "_infoBox_1wde8_416";
var learnMoreLink = "_learnMoreLink_1wde8_420";
var shimmer$8 = "_shimmer_1wde8_1";
var spin$8 = "_spin_1wde8_1";
var opacityPulse$8 = "_opacityPulse_1wde8_1";
var popoverIn$8 = "_popoverIn_1wde8_1";
var fadeIn$8 = "_fadeIn_1wde8_1";
var collapsibleSlideDown$8 = "_collapsibleSlideDown_1wde8_1";
var collapsibleSlideUp$8 = "_collapsibleSlideUp_1wde8_1";
var collapsibleSlideDownBlurred$8 = "_collapsibleSlideDownBlurred_1wde8_1";
var collapsibleSlideUpBlurred$8 = "_collapsibleSlideUpBlurred_1wde8_1";
var blurSwapIn$8 = "_blurSwapIn_1wde8_1";
var blurSwapOut$8 = "_blurSwapOut_1wde8_1";
var pulseGlow$8 = "_pulseGlow_1wde8_1";
var pulseGlowDelayed$8 = "_pulseGlowDelayed_1wde8_1";
var fade$8 = "_fade_1wde8_1";
var fadeInUp$8 = "_fadeInUp_1wde8_1";
var fadeInDown$8 = "_fadeInDown_1wde8_1";
var fadeInLeft$8 = "_fadeInLeft_1wde8_1";
var fadeInRight$8 = "_fadeInRight_1wde8_1";
var fadeOut$8 = "_fadeOut_1wde8_1";
var fadeOutDown$8 = "_fadeOutDown_1wde8_1";
var fadeOutUp$8 = "_fadeOutUp_1wde8_1";
var fadeOutLeft$8 = "_fadeOutLeft_1wde8_1";
var fadeOutRight$8 = "_fadeOutRight_1wde8_1";
var ping$8 = "_ping_1wde8_1";
var blinkBackground$8 = "_blinkBackground_1wde8_1";
var typingBlink$8 = "_typingBlink_1wde8_1";
var UserRoleProvisioningDropdown_vue_vue_type_style_index_1_lang_module_default = {
	optionContent,
	optionTitle,
	optionDescription,
	callout,
	infoBox,
	learnMoreLink,
	shimmer: shimmer$8,
	spin: spin$8,
	"skeleton-pulse": "_skeleton-pulse_1wde8_1",
	opacityPulse: opacityPulse$8,
	popoverIn: popoverIn$8,
	fadeIn: fadeIn$8,
	collapsibleSlideDown: collapsibleSlideDown$8,
	collapsibleSlideUp: collapsibleSlideUp$8,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$8,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$8,
	blurSwapIn: blurSwapIn$8,
	blurSwapOut: blurSwapOut$8,
	pulseGlow: pulseGlow$8,
	pulseGlowDelayed: pulseGlowDelayed$8,
	fade: fade$8,
	fadeInUp: fadeInUp$8,
	fadeInDown: fadeInDown$8,
	fadeInLeft: fadeInLeft$8,
	fadeInRight: fadeInRight$8,
	fadeOut: fadeOut$8,
	fadeOutDown: fadeOutDown$8,
	fadeOutUp: fadeOutUp$8,
	fadeOutLeft: fadeOutLeft$8,
	fadeOutRight: fadeOutRight$8,
	ping: ping$8,
	blinkBackground: blinkBackground$8,
	typingBlink: typingBlink$8
};
var UserRoleProvisioningDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(UserRoleProvisioningDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", {
	"shared": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default,
	"$style": UserRoleProvisioningDropdown_vue_vue_type_style_index_1_lang_module_default
}]]);
//#endregion
//#region src/features/settings/sso/provisioning/composables/useRoleMappingRulesApi.ts
/**
* API layer for role mapping rules.
* Delegates to the REST API client in @n8n/rest-api-client.
*/
function useRoleMappingRulesApi() {
	const rootStore = useRootStore();
	async function listRules() {
		return await listRoleMappingRules(rootStore.restApiContext);
	}
	async function createRule(input) {
		return await createRoleMappingRule(rootStore.restApiContext, input);
	}
	async function updateRule(id, patch) {
		return await updateRoleMappingRule(rootStore.restApiContext, id, patch);
	}
	async function deleteRule(id) {
		await deleteRoleMappingRule(rootStore.restApiContext, id);
	}
	async function moveRule(id, targetIndex) {
		return await moveRoleMappingRule(rootStore.restApiContext, id, targetIndex);
	}
	return {
		listRules,
		createRule,
		updateRule,
		deleteRule,
		moveRule
	};
}
//#endregion
//#region src/features/settings/sso/provisioning/composables/useUserRoleProvisioningForm.ts
var DEFAULTS = {
	roleAssignment: "manual",
	mappingMethod: "idp"
};
var DEFAULT_INSTANCE_ROLE = ROLE.Member;
function getDropdownValuesFromConfig(config, hasProjectRules = false) {
	if (!config) return DEFAULTS;
	const mappingMethod = config.scopesUseExpressionMapping ? "rules_in_n8n" : "idp";
	if (config.scopesProvisionInstanceRole && config.scopesProvisionProjectRoles) return {
		roleAssignment: "instance_and_project",
		mappingMethod
	};
	else if (config.scopesProvisionInstanceRole) return {
		roleAssignment: "instance",
		mappingMethod
	};
	else if (config.scopesUseExpressionMapping) return {
		roleAssignment: hasProjectRules ? "instance_and_project" : "instance",
		mappingMethod: "rules_in_n8n"
	};
	return DEFAULTS;
}
function getProvisioningConfigFromDropdowns(roleAssignment, mappingMethod) {
	if (roleAssignment === "manual") return {
		scopesProvisionInstanceRole: false,
		scopesProvisionProjectRoles: false,
		scopesUseExpressionMapping: false
	};
	const useExpressions = mappingMethod === "rules_in_n8n";
	return {
		scopesProvisionInstanceRole: !useExpressions,
		scopesProvisionProjectRoles: !useExpressions && roleAssignment === "instance_and_project",
		scopesUseExpressionMapping: useExpressions
	};
}
function getTelemetryAssignmentMethod(roleAssignment) {
	if (roleAssignment === "manual") return "disabled";
	if (roleAssignment === "instance_and_project") return "instance_and_project_roles";
	return "instance_role";
}
function getTelemetryRoleMappingMethod(mappingMethod) {
	return mappingMethod === "rules_in_n8n" ? "n8n_rule_mapping" : "idp_rule_mapping";
}
function useUserRoleProvisioningForm(protocol) {
	const provisioningStore = useUserRoleProvisioningStore();
	const telemetry = useTelemetry();
	const roleAssignment = ref("manual");
	const mappingMethod = ref("idp");
	const defaultInstanceRole = ref(DEFAULT_INSTANCE_ROLE);
	const storedHasProjectRules = ref(false);
	const storedValues = computed(() => getDropdownValuesFromConfig(provisioningStore.provisioningConfig, storedHasProjectRules.value));
	const storedDefaultInstanceRole = computed(() => provisioningStore.provisioningConfig?.defaultInstanceRole ?? DEFAULT_INSTANCE_ROLE);
	const isUserRoleProvisioningChanged = computed(() => {
		const stored = storedValues.value;
		return stored.roleAssignment !== roleAssignment.value || stored.mappingMethod !== mappingMethod.value || storedDefaultInstanceRole.value !== defaultInstanceRole.value;
	});
	const trackProvisioningChange = (provisioningResult, ruleSaveResult) => {
		const rulesChanged = (ruleSaveResult?.createdCount ?? 0) > 0 || (ruleSaveResult?.deletedCount ?? 0) > 0;
		if (!provisioningResult.configChanged && !rulesChanged) return;
		telemetry.track("User updated provisioning settings", {
			instance_id: useRootStore().instanceId,
			authentication_method: protocol,
			assignment_method: getTelemetryAssignmentMethod(roleAssignment.value),
			role_mapping_method: getTelemetryRoleMappingMethod(mappingMethod.value),
			instance_rule_count: ruleSaveResult?.instanceRuleCount ?? 0,
			project_rule_count: ruleSaveResult?.projectRuleCount ?? 0
		});
	};
	const saveProvisioningConfig = async (isDisablingSso) => {
		const effectiveRoleAssignment = isDisablingSso ? "manual" : roleAssignment.value;
		const effectiveMappingMethod = isDisablingSso ? "idp" : mappingMethod.value;
		const effectiveDefaultInstanceRole = defaultInstanceRole.value;
		const shouldDeleteProjectRules = effectiveRoleAssignment !== "instance_and_project";
		const stored = storedValues.value;
		const defaultInstanceRoleChanged = effectiveDefaultInstanceRole !== storedDefaultInstanceRole.value;
		const configChanged = effectiveRoleAssignment !== stored.roleAssignment || effectiveMappingMethod !== stored.mappingMethod || defaultInstanceRoleChanged;
		if (!configChanged && !shouldDeleteProjectRules) return { configChanged: false };
		await provisioningStore.saveProvisioningConfig({
			...getProvisioningConfigFromDropdowns(effectiveRoleAssignment, effectiveMappingMethod),
			...defaultInstanceRoleChanged ? { defaultInstanceRole: effectiveDefaultInstanceRole } : {},
			...shouldDeleteProjectRules ? { deleteProjectRules: true } : {}
		});
		roleAssignment.value = effectiveRoleAssignment;
		mappingMethod.value = effectiveMappingMethod;
		defaultInstanceRole.value = effectiveDefaultInstanceRole;
		if (shouldDeleteProjectRules) storedHasProjectRules.value = false;
		return { configChanged: configChanged || shouldDeleteProjectRules };
	};
	const roleAssignmentTransition = computed(() => {
		const stored = storedValues.value;
		if (stored.roleAssignment === roleAssignment.value && stored.mappingMethod === mappingMethod.value) return "none";
		if (roleAssignment.value === "manual") return "switchToManual";
		return "backup";
	});
	const storedHasProjectRoles = computed(() => storedValues.value.roleAssignment === "instance_and_project");
	const isDroppingProjectRules = computed(() => storedValues.value.roleAssignment === "instance_and_project" && roleAssignment.value !== "instance_and_project");
	const revertRoleAssignment = () => {
		const stored = storedValues.value;
		roleAssignment.value = stored.roleAssignment;
		mappingMethod.value = stored.mappingMethod;
		defaultInstanceRole.value = storedDefaultInstanceRole.value;
	};
	const initFormValue = () => {
		provisioningStore.getProvisioningConfig().then(async () => {
			const config = provisioningStore.provisioningConfig;
			let hasProjectRules = false;
			if (config?.scopesUseExpressionMapping) hasProjectRules = (await useRoleMappingRulesApi().listRules()).some((r) => r.type === "project");
			storedHasProjectRules.value = hasProjectRules;
			const values = getDropdownValuesFromConfig(config, hasProjectRules);
			roleAssignment.value = values.roleAssignment;
			mappingMethod.value = values.mappingMethod;
			defaultInstanceRole.value = config?.defaultInstanceRole ?? DEFAULT_INSTANCE_ROLE;
		});
	};
	initFormValue();
	return {
		roleAssignment,
		mappingMethod,
		defaultInstanceRole,
		isUserRoleProvisioningChanged,
		saveProvisioningConfig,
		trackProvisioningChange,
		roleAssignmentTransition,
		storedHasProjectRoles,
		isDroppingProjectRules,
		revertRoleAssignment
	};
}
//#endregion
//#region src/features/settings/sso/provisioning/composables/useAccessSettingsCsvExport.ts
async function fetchUsers(context) {
	const allUsers = [];
	const fieldsNeededForAccessSettingExport = {
		select: ["email", "role"],
		expand: ["projectRelations"]
	};
	const PAGE_SIZE = 50;
	let currentPage = 0;
	let totalCount = 0;
	let hasMorePages = true;
	while (hasMorePages) {
		const response = await getUsers(context, {
			...fieldsNeededForAccessSettingExport,
			sortBy: ["email:desc"],
			take: PAGE_SIZE,
			skip: currentPage * PAGE_SIZE
		});
		if (currentPage === 0) totalCount = response.count;
		allUsers.push(...response.items);
		hasMorePages = response.items.length === PAGE_SIZE && allUsers.length < totalCount;
		currentPage++;
	}
	return {
		count: totalCount,
		items: allUsers
	};
}
function useAccessSettingsCsvExport() {
	const cachedUserData = ref();
	/**
	* Since users can click the "download project roles" and "download instance roles"
	* buttons right after one another, we're tracking the active request here
	* to not have to fetch the users list twice.
	*/
	const pendingUserDataRequest = ref();
	const rootStore = useRootStore();
	const formatDateForFilename = () => {
		const now = /* @__PURE__ */ new Date();
		return `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}_${now.getHours()}_${now.getMinutes()}`;
	};
	const escapeCsvValue = (value) => {
		if (value.includes(",") || value.includes("\"")) return `"${value.replace(/"/g, "\"\"")}"`;
		return value;
	};
	const downloadCsv = (csvContent, filename) => {
		const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const tempElement = document.createElement("a");
		tempElement.setAttribute("href", url);
		tempElement.setAttribute("download", filename);
		tempElement.style.display = "none";
		document.body.appendChild(tempElement);
		tempElement.click();
		document.body.removeChild(tempElement);
		URL.revokeObjectURL(url);
	};
	const getUserData = async () => {
		if (cachedUserData.value) return cachedUserData.value;
		if (pendingUserDataRequest.value) return await pendingUserDataRequest.value;
		const userDataRequest = fetchUsers(rootStore.restApiContext).then((userData) => {
			cachedUserData.value = userData;
			pendingUserDataRequest.value = void 0;
			return userData;
		}).catch((error) => {
			pendingUserDataRequest.value = void 0;
			throw error;
		});
		pendingUserDataRequest.value = userDataRequest;
		return await userDataRequest;
	};
	const hasDownloadedProjectRoleCsv = ref(false);
	const downloadProjectRolesCsv = async () => {
		const userData = await getUserData();
		const csvRows = ["email,project_displayname,project_id,project_role"];
		for (const user of userData.items) {
			const email = escapeCsvValue(user.email ?? "");
			if (user.projectRelations && user.projectRelations.length > 0) for (const project of user.projectRelations) {
				const projectName = escapeCsvValue(project.name ?? "");
				const projectId = escapeCsvValue(project.id ?? "");
				const projectRole = escapeCsvValue(project.role.split(":")[1] ?? project.role);
				csvRows.push(`${email},${projectName},${projectId},${projectRole}`);
			}
		}
		downloadCsv(csvRows.join("\n"), `n8n_project_role_export_${formatDateForFilename()}.csv`);
		hasDownloadedProjectRoleCsv.value = true;
	};
	const hasDownloadedInstanceRoleCsv = ref(false);
	const downloadInstanceRolesCsv = async () => {
		const userData = await getUserData();
		const csvRows = ["email,instance_role"];
		for (const user of userData.items) {
			const email = escapeCsvValue(user.email ?? "");
			const instanceRole = escapeCsvValue(user.role ?? "");
			csvRows.push(`${email},${instanceRole}`);
		}
		downloadCsv(csvRows.join("\n"), `n8n_instance_role_export_${formatDateForFilename()}.csv`);
		hasDownloadedInstanceRoleCsv.value = true;
	};
	const accessSettingsCsvExportOnModalClose = () => {
		hasDownloadedInstanceRoleCsv.value = false;
		hasDownloadedProjectRoleCsv.value = false;
		cachedUserData.value = void 0;
		pendingUserDataRequest.value = void 0;
	};
	return {
		downloadProjectRolesCsv,
		downloadInstanceRolesCsv,
		hasDownloadedInstanceRoleCsv,
		hasDownloadedProjectRoleCsv,
		accessSettingsCsvExportOnModalClose
	};
}
//#endregion
//#region src/features/settings/sso/provisioning/components/ConfirmProvisioningDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "mb-s" };
var _hoisted_2$2 = { class: "mb-s" };
var _hoisted_3$1 = ["href"];
var _hoisted_4 = { key: 0 };
var _hoisted_5 = { class: "mb-s" };
var _hoisted_6 = { class: "mb-s" };
var _hoisted_7 = ["href"];
var _hoisted_8 = {
	key: 2,
	class: "mb-s",
	"data-test-id": "provisioning-project-rules-deletion-warning"
};
var _hoisted_9 = { class: "mb-s" };
var ConfirmProvisioningDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConfirmProvisioningDialog",
	props: /* @__PURE__ */ mergeModels({
		transitionType: {},
		showProjectRolesCsv: { type: Boolean },
		authProtocol: {},
		willDeleteProjectRules: {
			type: Boolean,
			default: false
		}
	}, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["confirmProvisioning", "cancel"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const visible = useModel(__props, "modelValue");
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const downloadingInstanceRolesCsv = ref(false);
		const downloadingProjectRolesCsv = ref(false);
		const loading = ref(false);
		const confirmationChecked = ref(false);
		const { hasDownloadedInstanceRoleCsv, hasDownloadedProjectRoleCsv, downloadProjectRolesCsv, downloadInstanceRolesCsv, accessSettingsCsvExportOnModalClose } = useAccessSettingsCsvExport();
		const isSwitchingToManual = computed(() => props.transitionType === "switchToManual");
		const messagingKey = computed(() => isSwitchingToManual.value ? "disable" : "enable");
		const shouldShowProjectRolesCsv = computed(() => props.showProjectRolesCsv);
		watch(visible, () => {
			loading.value = false;
			confirmationChecked.value = false;
			accessSettingsCsvExportOnModalClose();
		});
		const onDownloadInstanceRolesCsv = async () => {
			downloadingInstanceRolesCsv.value = true;
			try {
				await downloadInstanceRolesCsv();
			} finally {
				downloadingInstanceRolesCsv.value = false;
			}
		};
		const onDownloadProjectRolesCsv = async () => {
			downloadingProjectRolesCsv.value = true;
			try {
				await downloadProjectRolesCsv();
			} finally {
				downloadingProjectRolesCsv.value = false;
			}
		};
		const onConfirmProvisioningSetting = () => {
			loading.value = true;
			emit("confirmProvisioning");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => visible.value = $event),
				title: unref(locale).baseText(`settings.provisioningConfirmDialog.${messagingKey.value}.title`),
				width: "650"
			}, {
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					type: "button",
					"data-test-id": "provisioning-cancel-button",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("cancel"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					type: "button",
					disabled: loading.value || !confirmationChecked.value || !isSwitchingToManual.value && !unref(hasDownloadedInstanceRoleCsv) || shouldShowProjectRolesCsv.value && !unref(hasDownloadedProjectRoleCsv),
					"data-test-id": "provisioning-confirm-button",
					onClick: onConfirmProvisioningSetting
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`settings.provisioningConfirmDialog.button.${messagingKey.value}.confirm`)), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				default: withCtx(() => [
					!isSwitchingToManual.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
						createBaseVNode("div", _hoisted_1$4, [createVNode(unref(N8nText_default), { color: "text-base" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.enable.description")), 1)]),
							_: 1
						})]),
						createBaseVNode("div", _hoisted_2$2, [createVNode(unref(N8nText_default), { color: "text-base" }, {
							default: withCtx(() => [createBaseVNode("a", {
								href: `https://docs.n8n.io/user-management/${__props.authProtocol}/setup/`,
								target: "_blank"
							}, toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.link.docs")), 9, _hoisted_3$1)]),
							_: 1
						})]),
						createBaseVNode("ul", { class: normalizeClass([_ctx.$style.list, "mb-s"]) }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), { color: "text-base" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadInstanceRolesCsv")), 1)]),
							_: 1
						}), !unref(hasDownloadedInstanceRoleCsv) ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "ghost",
							"native-type": "button",
							icon: "file-download",
							"data-test-id": "provisioning-download-instance-roles-csv-button",
							disabled: downloadingInstanceRolesCsv.value,
							loading: downloadingInstanceRolesCsv.value,
							class: normalizeClass([_ctx.$style.button, "n8n-button--highlight"]),
							onClick: onDownloadInstanceRolesCsv
						}, null, 8, [
							"disabled",
							"loading",
							"class"
						])) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "check",
							color: "success",
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, ["class"]))]), shouldShowProjectRolesCsv.value ? (openBlock(), createElementBlock("li", _hoisted_4, [createVNode(unref(N8nText_default), { color: "text-base" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadProjectRolesCsv")), 1)]),
							_: 1
						}), !unref(hasDownloadedProjectRoleCsv) ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "ghost",
							"native-type": "button",
							icon: "file-download",
							"data-test-id": "provisioning-download-project-roles-csv-button",
							disabled: downloadingProjectRolesCsv.value,
							loading: downloadingProjectRolesCsv.value,
							class: normalizeClass([_ctx.$style.button, "n8n-button--highlight"]),
							onClick: onDownloadProjectRolesCsv
						}, null, 8, [
							"disabled",
							"loading",
							"class"
						])) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "check",
							color: "success",
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, ["class"]))])) : createCommentVNode("", true)], 2)
					], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", _hoisted_5, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.disable.description")), 1)]),
						_: 1
					})]), createBaseVNode("div", _hoisted_6, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createBaseVNode("a", {
							href: `https://docs.n8n.io/user-management/${__props.authProtocol}/setup/`,
							target: "_blank"
						}, toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.link.docs")), 9, _hoisted_7)]),
						_: 1
					})])], 64)),
					props.willDeleteProjectRules ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(unref(N8nCallout_default), { theme: "danger" }, {
						default: withCtx(() => [
							createVNode(unref(N8nText_default), {
								color: "text-base",
								size: "small",
								bold: true
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.projectRulesDeletion.warning")), 1)]),
								_: 1
							}),
							_cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
							createVNode(unref(N8nText_default), {
								color: "text-base",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.projectRulesDeletion.description")), 1)]),
								_: 1
							})
						]),
						_: 1
					})])) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_9, [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
						default: withCtx(() => [createVNode(unref(Checkbox_default), {
							modelValue: confirmationChecked.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => confirmationChecked.value = $event),
							disabled: !isSwitchingToManual.value && (!unref(hasDownloadedInstanceRoleCsv) || shouldShowProjectRolesCsv.value && !unref(hasDownloadedProjectRoleCsv)),
							"data-test-id": "provisioning-confirmation-checkbox"
						}, {
							label: withCtx(() => [createVNode(unref(N8nText_default), { color: "text-base" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`settings.provisioningConfirmDialog.${messagingKey.value}.checkbox`)), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["class"])])
				]),
				_: 1
			}, 8, ["modelValue", "title"]);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/ConfirmProvisioningDialog.vue?vue&type=style&index=0&lang.module.scss
var footer = "_footer_liow0_389";
var button = "_button_liow0_395";
var card = "_card_liow0_399";
var icon = "_icon_liow0_403";
var list = "_list_liow0_408";
var shimmer$7 = "_shimmer_liow0_1";
var spin$7 = "_spin_liow0_1";
var opacityPulse$7 = "_opacityPulse_liow0_1";
var popoverIn$7 = "_popoverIn_liow0_1";
var fadeIn$7 = "_fadeIn_liow0_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_liow0_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_liow0_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_liow0_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_liow0_1";
var blurSwapIn$7 = "_blurSwapIn_liow0_1";
var blurSwapOut$7 = "_blurSwapOut_liow0_1";
var pulseGlow$7 = "_pulseGlow_liow0_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_liow0_1";
var fade$7 = "_fade_liow0_1";
var fadeInUp$7 = "_fadeInUp_liow0_1";
var fadeInDown$7 = "_fadeInDown_liow0_1";
var fadeInLeft$7 = "_fadeInLeft_liow0_1";
var fadeInRight$7 = "_fadeInRight_liow0_1";
var fadeOut$7 = "_fadeOut_liow0_1";
var fadeOutDown$7 = "_fadeOutDown_liow0_1";
var fadeOutUp$7 = "_fadeOutUp_liow0_1";
var fadeOutLeft$7 = "_fadeOutLeft_liow0_1";
var fadeOutRight$7 = "_fadeOutRight_liow0_1";
var ping$7 = "_ping_liow0_1";
var blinkBackground$7 = "_blinkBackground_liow0_1";
var typingBlink$7 = "_typingBlink_liow0_1";
var ConfirmProvisioningDialog_vue_vue_type_style_index_0_lang_module_default = {
	footer,
	button,
	card,
	icon,
	list,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_liow0_1",
	opacityPulse: opacityPulse$7,
	popoverIn: popoverIn$7,
	fadeIn: fadeIn$7,
	collapsibleSlideDown: collapsibleSlideDown$7,
	collapsibleSlideUp: collapsibleSlideUp$7,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$7,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$7,
	blurSwapIn: blurSwapIn$7,
	blurSwapOut: blurSwapOut$7,
	pulseGlow: pulseGlow$7,
	pulseGlowDelayed: pulseGlowDelayed$7,
	fade: fade$7,
	fadeInUp: fadeInUp$7,
	fadeInDown: fadeInDown$7,
	fadeInLeft: fadeInLeft$7,
	fadeInRight: fadeInRight$7,
	fadeOut: fadeOut$7,
	fadeOutDown: fadeOutDown$7,
	fadeOutUp: fadeOutUp$7,
	fadeOutLeft: fadeOutLeft$7,
	fadeOutRight: fadeOutRight$7,
	ping: ping$7,
	blinkBackground: blinkBackground$7,
	typingBlink: typingBlink$7
};
var ConfirmProvisioningDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConfirmProvisioningDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfirmProvisioningDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/provisioning/composables/useRoleMappingRules.ts
function generateLocalId() {
	return `local-${crypto.randomUUID()}`;
}
function createEmptyRule(type, order) {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	return {
		id: generateLocalId(),
		expression: "",
		role: "",
		type,
		order,
		projectIds: [],
		createdAt: now,
		updatedAt: now
	};
}
function useRoleMappingRules() {
	const api = useRoleMappingRulesApi();
	const instanceRules = ref([]);
	const projectRules = ref([]);
	const isLoading = ref(false);
	const isDirty = ref(false);
	let serverRuleIds = /* @__PURE__ */ new Set();
	let serverProjectRuleIds = /* @__PURE__ */ new Set();
	function getRulesRef(type) {
		return type === "instance" ? instanceRules : projectRules;
	}
	function addRule(type) {
		const rules = getRulesRef(type);
		const order = rules.value.length;
		rules.value.push(createEmptyRule(type, order));
		isDirty.value = true;
	}
	function updateRule(id, patch) {
		for (const rules of [instanceRules, projectRules]) {
			const index = rules.value.findIndex((r) => r.id === id);
			if (index !== -1) {
				rules.value[index] = {
					...rules.value[index],
					...patch,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				isDirty.value = true;
				return;
			}
		}
	}
	function deleteRule(id) {
		for (const rules of [instanceRules, projectRules]) {
			const index = rules.value.findIndex((r) => r.id === id);
			if (index !== -1) {
				rules.value.splice(index, 1);
				rules.value.forEach((r, i) => {
					r.order = i;
				});
				isDirty.value = true;
				return;
			}
		}
	}
	async function reorder(type, fromIndex, toIndex) {
		const rules = getRulesRef(type);
		const movedRule = rules.value[fromIndex];
		if (!movedRule) return;
		const [moved] = rules.value.splice(fromIndex, 1);
		rules.value.splice(toIndex, 0, moved);
		rules.value.forEach((r, i) => {
			r.order = i;
		});
		if (!movedRule.id.startsWith("local-")) try {
			await api.moveRule(movedRule.id, toIndex);
		} catch {
			await loadRules();
			return;
		}
		isDirty.value = true;
	}
	async function loadRules() {
		isLoading.value = true;
		try {
			const allRules = await api.listRules();
			instanceRules.value = allRules.filter((r) => r.type === "instance");
			projectRules.value = allRules.filter((r) => r.type === "project");
			serverRuleIds = new Set(allRules.map((r) => r.id));
			serverProjectRuleIds = new Set(allRules.filter((r) => r.type === "project").map((r) => r.id));
			isDirty.value = false;
		} finally {
			isLoading.value = false;
		}
	}
	function discardProjectRules() {
		projectRules.value = [];
		for (const id of serverProjectRuleIds) serverRuleIds.delete(id);
		serverProjectRuleIds = /* @__PURE__ */ new Set();
	}
	async function save() {
		isLoading.value = true;
		try {
			const freshServerRules = await api.listRules();
			const freshServerIds = new Set(freshServerRules.map((r) => r.id));
			serverRuleIds = new Set([...serverRuleIds].filter((id) => freshServerIds.has(id)));
			serverProjectRuleIds = new Set([...serverProjectRuleIds].filter((id) => freshServerIds.has(id)));
			const allLocalRules = [...instanceRules.value, ...projectRules.value];
			const localRuleIds = new Set(allLocalRules.map((r) => r.id));
			const rulePayload = (r) => ({
				expression: r.expression,
				role: r.role,
				type: r.type,
				order: r.order,
				projectIds: r.projectIds
			});
			const deleteIds = [...serverRuleIds].filter((id) => !localRuleIds.has(id));
			const updateRules = allLocalRules.filter((r) => !r.id.startsWith("local-") && serverRuleIds.has(r.id));
			const createRules = allLocalRules.filter((r) => r.id.startsWith("local-"));
			await Promise.all([...deleteIds.map(async (id) => await api.deleteRule(id)), ...updateRules.map(async (r) => await api.updateRule(r.id, rulePayload(r)))]);
			for (const rule of createRules) await api.createRule(rulePayload(rule));
			await loadRules();
			return {
				createdCount: createRules.length,
				deletedCount: deleteIds.length,
				instanceRuleCount: instanceRules.value.length,
				projectRuleCount: projectRules.value.length
			};
		} finally {
			isLoading.value = false;
		}
	}
	return {
		instanceRules,
		projectRules,
		isLoading: computed(() => isLoading.value),
		isDirty: computed(() => isDirty.value),
		addRule,
		updateRule,
		deleteRule,
		reorder,
		loadRules,
		save,
		discardProjectRules
	};
}
//#endregion
//#region src/features/settings/sso/provisioning/components/RuleSectionHeader.vue?vue&type=script&setup=true&lang.ts
var RuleSectionHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RuleSectionHeader",
	props: {
		title: {},
		description: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("h3", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(__props.title), 3), createBaseVNode("p", { class: normalizeClass(_ctx.$style.description) }, toDisplayString(__props.description), 3)], 2);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/RuleSectionHeader.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_1ulho_388";
var title = "_title_1ulho_395";
var description$1 = "_description_1ulho_402";
var shimmer$6 = "_shimmer_1ulho_1";
var spin$6 = "_spin_1ulho_1";
var opacityPulse$6 = "_opacityPulse_1ulho_1";
var popoverIn$6 = "_popoverIn_1ulho_1";
var fadeIn$6 = "_fadeIn_1ulho_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_1ulho_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_1ulho_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_1ulho_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_1ulho_1";
var blurSwapIn$6 = "_blurSwapIn_1ulho_1";
var blurSwapOut$6 = "_blurSwapOut_1ulho_1";
var pulseGlow$6 = "_pulseGlow_1ulho_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_1ulho_1";
var fade$6 = "_fade_1ulho_1";
var fadeInUp$6 = "_fadeInUp_1ulho_1";
var fadeInDown$6 = "_fadeInDown_1ulho_1";
var fadeInLeft$6 = "_fadeInLeft_1ulho_1";
var fadeInRight$6 = "_fadeInRight_1ulho_1";
var fadeOut$6 = "_fadeOut_1ulho_1";
var fadeOutDown$6 = "_fadeOutDown_1ulho_1";
var fadeOutUp$6 = "_fadeOutUp_1ulho_1";
var fadeOutLeft$6 = "_fadeOutLeft_1ulho_1";
var fadeOutRight$6 = "_fadeOutRight_1ulho_1";
var ping$6 = "_ping_1ulho_1";
var blinkBackground$6 = "_blinkBackground_1ulho_1";
var typingBlink$6 = "_typingBlink_1ulho_1";
var RuleSectionHeader_vue_vue_type_style_index_0_lang_module_default = {
	header,
	title,
	description: description$1,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_1ulho_1",
	opacityPulse: opacityPulse$6,
	popoverIn: popoverIn$6,
	fadeIn: fadeIn$6,
	collapsibleSlideDown: collapsibleSlideDown$6,
	collapsibleSlideUp: collapsibleSlideUp$6,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$6,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$6,
	blurSwapIn: blurSwapIn$6,
	blurSwapOut: blurSwapOut$6,
	pulseGlow: pulseGlow$6,
	pulseGlowDelayed: pulseGlowDelayed$6,
	fade: fade$6,
	fadeInUp: fadeInUp$6,
	fadeInDown: fadeInDown$6,
	fadeInLeft: fadeInLeft$6,
	fadeInRight: fadeInRight$6,
	fadeOut: fadeOut$6,
	fadeOutDown: fadeOutDown$6,
	fadeOutUp: fadeOutUp$6,
	fadeOutLeft: fadeOutLeft$6,
	fadeOutRight: fadeOutRight$6,
	ping: ping$6,
	blinkBackground: blinkBackground$6,
	typingBlink: typingBlink$6
};
var RuleSectionHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RuleSectionHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RuleSectionHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/provisioning/components/ProjectRoleAssignmentSelect.vue?vue&type=script&setup=true&lang.ts
var ProjectRoleAssignmentSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRoleAssignmentSelect",
	props: /* @__PURE__ */ mergeModels({
		disabled: {
			type: Boolean,
			default: false
		},
		testId: { default: "project-role-assignment-select" }
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const rolesStore = useRolesStore();
		const hasCustomRolesLicense = computed(() => settingsStore.isCustomRolesFeatureEnabled);
		const canManageRoles = computed(() => hasPermission(["rbac"], { rbac: { scope: "role:manage" } }));
		const systemRoles = computed(() => rolesStore.processedProjectRoles.filter((role) => role.systemRole));
		const customRoles = computed(() => rolesStore.processedProjectRoles.filter((role) => !role.systemRole));
		const upgradeModalVisible = ref(false);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(_ctx.$style.wrapper) }, [createVNode(RoleSelectDropdown_default, {
				"system-roles": systemRoles.value,
				"custom-roles": customRoles.value,
				"current-role": modelValue.value,
				"has-custom-roles-license": hasCustomRolesLicense.value,
				"can-manage-roles": canManageRoles.value,
				"add-custom-role-route-name": unref(VIEWS).PROJECT_NEW_ROLE,
				placeholder: unref(i18n).baseText("settings.sso.settings.roleMappingRules.selectRole"),
				variant: "default",
				disabled: __props.disabled,
				"test-id": __props.testId,
				"onUpdate:role": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				onSystemRoleUpgradeNeeded: _cache[1] || (_cache[1] = ($event) => upgradeModalVisible.value = true)
			}, null, 8, [
				"system-roles",
				"custom-roles",
				"current-role",
				"has-custom-roles-license",
				"can-manage-roles",
				"add-custom-role-route-name",
				"placeholder",
				"disabled",
				"test-id"
			]), createVNode(CustomRolesUpgradeModal_default, {
				modelValue: upgradeModalVisible.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => upgradeModalVisible.value = $event)
			}, null, 8, ["modelValue"])], 2);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/ProjectRoleAssignmentSelect.vue?vue&type=style&index=0&lang.module.scss
var wrapper$1 = "_wrapper_1ixx6_388";
var shimmer$5 = "_shimmer_1ixx6_1";
var spin$5 = "_spin_1ixx6_1";
var opacityPulse$5 = "_opacityPulse_1ixx6_1";
var popoverIn$5 = "_popoverIn_1ixx6_1";
var fadeIn$5 = "_fadeIn_1ixx6_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_1ixx6_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_1ixx6_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_1ixx6_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_1ixx6_1";
var blurSwapIn$5 = "_blurSwapIn_1ixx6_1";
var blurSwapOut$5 = "_blurSwapOut_1ixx6_1";
var pulseGlow$5 = "_pulseGlow_1ixx6_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_1ixx6_1";
var fade$5 = "_fade_1ixx6_1";
var fadeInUp$5 = "_fadeInUp_1ixx6_1";
var fadeInDown$5 = "_fadeInDown_1ixx6_1";
var fadeInLeft$5 = "_fadeInLeft_1ixx6_1";
var fadeInRight$5 = "_fadeInRight_1ixx6_1";
var fadeOut$5 = "_fadeOut_1ixx6_1";
var fadeOutDown$5 = "_fadeOutDown_1ixx6_1";
var fadeOutUp$5 = "_fadeOutUp_1ixx6_1";
var fadeOutLeft$5 = "_fadeOutLeft_1ixx6_1";
var fadeOutRight$5 = "_fadeOutRight_1ixx6_1";
var ping$5 = "_ping_1ixx6_1";
var blinkBackground$5 = "_blinkBackground_1ixx6_1";
var typingBlink$5 = "_typingBlink_1ixx6_1";
var ProjectRoleAssignmentSelect_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: wrapper$1,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_1ixx6_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var ProjectRoleAssignmentSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectRoleAssignmentSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectRoleAssignmentSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/provisioning/components/RuleMappingExpressionInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["data-placeholder"];
var RuleMappingExpressionInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RuleMappingExpressionInput",
	props: {
		modelValue: {},
		placeholder: { default: "" },
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const editorRef = ref();
		const expandedEditorRef = ref();
		const isEmpty = ref(true);
		const hasError = ref(false);
		const dialogVisible = ref(false);
		let editorView = null;
		let expandedEditorView = null;
		const mockClaims = new Proxy({}, { get: (_target, prop) => typeof prop === "symbol" ? void 0 : ["mock"] });
		function validateExpression(value) {
			if (!value.trim()) return true;
			const match = value.match(/^\{\{(.+)\}\}$/s);
			const jsContent = match ? match[1].trim() : value.trim();
			if (!jsContent) return true;
			try {
				new Function("$claims", "$oidc", "$saml", "$provider", `return (${jsContent})`)(mockClaims, {
					idToken: {},
					userInfo: {}
				}, { attributes: {} }, "oidc");
				return true;
			} catch {
				return false;
			}
		}
		const isResolvable = (node) => node.type.name === "Resolvable";
		const n8nParserWithNestedJs = parserWithMetaData.configure({ wrap: parseMixed((node) => {
			if (node.type.isTop) return null;
			return node.name === "Resolvable" ? {
				parser: javascriptLanguage.parser,
				overlay: isResolvable
			} : null;
		}) });
		const n8nLanguage = LRLanguage.define({ parser: n8nParserWithNestedJs });
		const bracketDecoMark = Decoration.mark({ class: "cm-expression-bracket" });
		function buildDecorations(view) {
			const decorations = [];
			syntaxTree(view.state).iterate({ enter(node) {
				if (node.name === "OpenMarker" || node.name === "CloseMarker") decorations.push(bracketDecoMark.range(node.from, node.to));
			} });
			return Decoration.set(decorations, true);
		}
		function createBracketPlugin() {
			return ViewPlugin.fromClass(class {
				decorations;
				constructor(view) {
					this.decorations = buildDecorations(view);
				}
				update(update) {
					if (update.docChanged || update.viewportChanged) this.decorations = buildDecorations(update.view);
				}
			}, { decorations: (v) => v.decorations });
		}
		const expressionHighlightStyle = HighlightStyle.define([
			{
				tag: tags.string,
				color: "var(--color--success--shade-1)"
			},
			{
				tag: tags.number,
				color: "var(--color--primary)"
			},
			{
				tag: tags.bool,
				color: "var(--color--primary)"
			},
			{
				tag: tags.keyword,
				color: "var(--color--primary--shade-1)"
			},
			{
				tag: tags.operator,
				color: "var(--color--text--shade-1)"
			},
			{
				tag: tags.propertyName,
				color: "var(--color--success)"
			},
			{
				tag: tags.variableName,
				color: "var(--color--text--shade-1)"
			},
			{
				tag: tags.function(tags.variableName),
				color: "var(--color--success--shade-1)"
			},
			{
				tag: tags.paren,
				color: "var(--color--text--tint-1)"
			},
			{
				tag: tags.punctuation,
				color: "var(--color--text--tint-1)"
			}
		]);
		const editorUpdateListener = EditorView.updateListener.of((update) => {
			if (update.docChanged) {
				const newValue = update.state.doc.toString();
				isEmpty.value = newValue.length === 0;
				hasError.value = !validateExpression(newValue);
				if (newValue !== props.modelValue) emit("update:modelValue", newValue);
			}
		});
		const sharedThemeRules = {
			".cm-content": {
				fontFamily: "var(--font-family--monospace)",
				color: "var(--input--color--text, var(--color--text--shade-1))",
				caretColor: "var(--code--caret--color)"
			},
			".cm-cursor, .cm-dropCursor": { borderLeftColor: "var(--code--caret--color)" },
			".cm-expression-bracket": {
				color: "var(--color--text--shade-1)",
				fontWeight: "700"
			}
		};
		function createInlineExtensions() {
			return [
				new LanguageSupport(n8nLanguage),
				syntaxHighlighting(expressionHighlightStyle),
				createBracketPlugin(),
				history(),
				keymap.of(historyKeymap),
				EditorState.readOnly.of(props.disabled),
				EditorView.theme({
					"&": {
						fontSize: "var(--font-size--sm)",
						borderWidth: "var(--border-width)",
						borderStyle: "var(--border-style)",
						borderColor: "var(--input--border-color, var(--border-color))",
						borderRadius: "var(--radius)",
						backgroundColor: "var(--color--foreground--tint-2)",
						height: "30px",
						width: "100%",
						padding: "0 0 0 var(--spacing--2xs)"
					},
					"&.cm-focused": {
						outline: "0 !important",
						borderColor: "var(--color--foreground--shade-1, var(--input--border-color))"
					},
					".cm-content": {
						fontFamily: "var(--font-family--monospace)",
						color: "var(--input--color--text, var(--color--text--shade-1))",
						caretColor: props.disabled ? "transparent" : "var(--code--caret--color)",
						padding: "0 !important",
						lineHeight: "28px"
					},
					".cm-line": {
						padding: "0 !important",
						whiteSpace: "nowrap",
						lineHeight: "28px"
					},
					".cm-scroller": {
						overflowX: "auto",
						overflowY: "hidden",
						display: "flex",
						alignItems: "center"
					},
					".cm-cursor, .cm-dropCursor": sharedThemeRules[".cm-cursor, .cm-dropCursor"],
					".cm-expression-bracket": sharedThemeRules[".cm-expression-bracket"]
				}),
				editorUpdateListener
			];
		}
		function createExpandedExtensions() {
			return [
				new LanguageSupport(n8nLanguage),
				syntaxHighlighting(expressionHighlightStyle),
				createBracketPlugin(),
				history(),
				keymap.of(historyKeymap),
				EditorView.lineWrapping,
				EditorView.theme({
					"&": {
						fontSize: "var(--font-size--xs)",
						borderWidth: "var(--border-width)",
						borderStyle: "var(--border-style)",
						borderColor: "var(--input--border-color, var(--border-color))",
						borderRadius: "var(--radius--lg)",
						backgroundColor: "var(--color--foreground--tint-2)",
						minHeight: "120px",
						width: "100%",
						padding: "var(--spacing--2xs) var(--spacing--xs)"
					},
					"&.cm-focused": {
						outline: "0 !important",
						borderColor: "var(--color--foreground--shade-1, var(--input--border-color))"
					},
					".cm-content": {
						fontFamily: "var(--font-family--monospace)",
						color: "var(--input--color--text, var(--color--text--shade-1))",
						caretColor: "var(--code--caret--color)",
						padding: "var(--spacing--4xs) 0"
					},
					".cm-line": { padding: "0" },
					".cm-scroller": {
						lineHeight: "1.68",
						overflow: "auto"
					},
					".cm-cursor, .cm-dropCursor": sharedThemeRules[".cm-cursor, .cm-dropCursor"],
					".cm-expression-bracket": sharedThemeRules[".cm-expression-bracket"]
				}),
				editorUpdateListener
			];
		}
		function openExpandedEditor() {
			dialogVisible.value = true;
			nextTick(() => {
				if (!expandedEditorRef.value) return;
				expandedEditorView = new EditorView({
					state: EditorState.create({
						doc: props.modelValue,
						extensions: createExpandedExtensions()
					}),
					parent: expandedEditorRef.value
				});
				expandedEditorView.focus();
			});
		}
		function closeExpandedEditor() {
			dialogVisible.value = false;
			expandedEditorView?.destroy();
			expandedEditorView = null;
		}
		onMounted(() => {
			if (!editorRef.value) return;
			isEmpty.value = !props.modelValue;
			hasError.value = !validateExpression(props.modelValue);
			editorView = new EditorView({
				state: EditorState.create({
					doc: props.modelValue,
					extensions: createInlineExtensions()
				}),
				parent: editorRef.value
			});
		});
		onBeforeUnmount(() => {
			editorView?.destroy();
			editorView = null;
			expandedEditorView?.destroy();
			expandedEditorView = null;
		});
		watch(() => props.modelValue, (newVal) => {
			for (const view of [editorView, expandedEditorView]) {
				if (!view) continue;
				if (newVal !== view.state.doc.toString()) view.dispatch({ changes: {
					from: 0,
					to: view.state.doc.length,
					insert: newVal
				} });
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [
				createBaseVNode("div", {
					ref_key: "editorRef",
					ref: editorRef,
					class: normalizeClass([_ctx.$style.container, {
						[_ctx.$style.disabled]: __props.disabled,
						[_ctx.$style.empty]: isEmpty.value,
						[_ctx.$style.error]: hasError.value,
						[_ctx.$style.valid]: !isEmpty.value && !hasError.value
					}]),
					"data-placeholder": __props.placeholder ? `{{ ${__props.placeholder} }}` : "",
					"data-test-id": "rule-expression-input"
				}, null, 10, _hoisted_1$3),
				!__props.disabled ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "ghost",
					size: "mini",
					class: normalizeClass(_ctx.$style.expandButton),
					"aria-label": unref(i18n).baseText("expressionEdit.editExpression"),
					"data-test-id": "expression-expand-button",
					onClick: openExpandedEditor
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("svg", {
						width: "9",
						height: "9",
						viewBox: "0 0 24 24",
						fill: "currentColor"
					}, [createBaseVNode("path", {
						d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3",
						stroke: "currentColor",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						fill: "none"
					})], -1)])]),
					_: 1
				}, 8, ["class", "aria-label"])) : createCommentVNode("", true),
				createVNode(unref(ElDialog), {
					"model-value": dialogVisible.value,
					title: unref(i18n).baseText("expressionEdit.editExpression"),
					width: "620px",
					"close-on-click-modal": true,
					"append-to-body": true,
					onClose: closeExpandedEditor
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						ref_key: "expandedEditorRef",
						ref: expandedEditorRef,
						class: normalizeClass(_ctx.$style.expandedContainer)
					}, null, 2)]),
					_: 1
				}, 8, ["model-value", "title"])
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/RuleMappingExpressionInput.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_1cg0o_388";
var container = "_container_1cg0o_394";
var valid = "_valid_1cg0o_401";
var error = "_error_1cg0o_405";
var empty = "_empty_1cg0o_417";
var expandButton = "_expandButton_1cg0o_435";
var expandedContainer = "_expandedContainer_1cg0o_458";
var disabled$1 = "_disabled_1cg0o_462";
var shimmer$4 = "_shimmer_1cg0o_1";
var spin$4 = "_spin_1cg0o_1";
var opacityPulse$4 = "_opacityPulse_1cg0o_1";
var popoverIn$4 = "_popoverIn_1cg0o_1";
var fadeIn$4 = "_fadeIn_1cg0o_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_1cg0o_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_1cg0o_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_1cg0o_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_1cg0o_1";
var blurSwapIn$4 = "_blurSwapIn_1cg0o_1";
var blurSwapOut$4 = "_blurSwapOut_1cg0o_1";
var pulseGlow$4 = "_pulseGlow_1cg0o_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_1cg0o_1";
var fade$4 = "_fade_1cg0o_1";
var fadeInUp$4 = "_fadeInUp_1cg0o_1";
var fadeInDown$4 = "_fadeInDown_1cg0o_1";
var fadeInLeft$4 = "_fadeInLeft_1cg0o_1";
var fadeInRight$4 = "_fadeInRight_1cg0o_1";
var fadeOut$4 = "_fadeOut_1cg0o_1";
var fadeOutDown$4 = "_fadeOutDown_1cg0o_1";
var fadeOutUp$4 = "_fadeOutUp_1cg0o_1";
var fadeOutLeft$4 = "_fadeOutLeft_1cg0o_1";
var fadeOutRight$4 = "_fadeOutRight_1cg0o_1";
var ping$4 = "_ping_1cg0o_1";
var blinkBackground$4 = "_blinkBackground_1cg0o_1";
var typingBlink$4 = "_typingBlink_1cg0o_1";
var RuleMappingExpressionInput_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	container,
	valid,
	error,
	empty,
	expandButton,
	expandedContainer,
	disabled: disabled$1,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_1cg0o_1",
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
var RuleMappingExpressionInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RuleMappingExpressionInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RuleMappingExpressionInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/provisioning/components/RuleRow.vue?vue&type=script&setup=true&lang.ts
var RuleRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RuleRow",
	props: {
		rule: {},
		priority: {},
		type: { default: "instance" },
		projects: { default: () => [] },
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update",
		"delete",
		"duplicate"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const selectedProjectNames = computed(() => {
			if (!props.rule.projectIds?.length) return "";
			return props.projects.filter((p) => props.rule.projectIds.includes(p.id)).map((p) => p.name).join(", ");
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.row, { [_ctx.$style.disabled]: props.disabled }]),
				"data-test-id": "rule-row"
			}, [
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.cellDrag, "drag-handle"]),
					"aria-label": "Reorder rule"
				}, [createVNode(unref(N8nIcon_default), {
					icon: "grip-vertical",
					size: "small",
					color: "text-light"
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellPriority) }, toDisplayString(__props.priority) + ".", 3),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellCondition) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, "If", 2), createVNode(RuleMappingExpressionInput_default, {
					"model-value": props.rule.expression,
					disabled: props.disabled,
					placeholder: unref(i18n).baseText("settings.sso.settings.roleMappingRules.expression.placeholder"),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update", props.rule.id, { expression: $event }))
				}, null, 8, [
					"model-value",
					"disabled",
					"placeholder"
				])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellRole) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, "assign", 2), props.type !== "project" ? (openBlock(), createBlock(InstanceRoleAssignmentSelect_default, {
					key: 0,
					"model-value": props.rule.role,
					disabled: props.disabled,
					"test-id": "rule-role-select",
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("update", props.rule.id, { role: $event }))
				}, null, 8, ["model-value", "disabled"])) : (openBlock(), createBlock(ProjectRoleAssignmentSelect_default, {
					key: 1,
					"model-value": props.rule.role,
					disabled: props.disabled,
					"test-id": "rule-role-select",
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => emit("update", props.rule.id, { role: $event }))
				}, null, 8, ["model-value", "disabled"]))], 2),
				props.type === "project" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.cellProject)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, "in", 2), createVNode(unref(N8nTooltip_default), {
					content: selectedProjectNames.value,
					disabled: !selectedProjectNames.value,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nSelect_default), {
						"model-value": props.rule.projectIds,
						size: "small",
						multiple: "",
						"collapse-tags": "",
						"collapse-tags-tooltip": false,
						disabled: props.disabled,
						placeholder: "Select proj...",
						"data-test-id": "rule-project-select",
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => emit("update", props.rule.id, { projectIds: $event ?? [] }))
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.projects, (project) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: project.id,
								label: project.name,
								value: project.id
							}, null, 8, ["label", "value"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value", "disabled"])]),
					_: 1
				}, 8, ["content", "disabled"])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellAction) }, [createVNode(unref(N8nIcon_default), {
					icon: "copy",
					size: "small",
					color: "text-light",
					class: normalizeClass([_ctx.$style.actionIcon, { [_ctx.$style.disabledIcon]: props.disabled }]),
					"aria-label": "Duplicate rule",
					"data-test-id": "rule-copy-button",
					onClick: _cache[4] || (_cache[4] = ($event) => !props.disabled && emit("duplicate", props.rule.id))
				}, null, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellAction) }, [createVNode(unref(N8nIcon_default), {
					icon: "trash-2",
					size: "small",
					color: "text-light",
					class: normalizeClass([_ctx.$style.actionIcon, { [_ctx.$style.disabledIcon]: props.disabled }]),
					"aria-label": "Delete rule",
					"data-test-id": "rule-delete-button",
					onClick: _cache[5] || (_cache[5] = ($event) => !props.disabled && emit("delete", props.rule.id))
				}, null, 8, ["class"])], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/RuleRow.vue?vue&type=style&index=0&lang.module.scss
var row = "_row_199k3_388";
var cellDrag = "_cellDrag_199k3_399";
var cellPriority = "_cellPriority_199k3_412";
var cellCondition = "_cellCondition_199k3_419";
var cellProject = "_cellProject_199k3_428";
var cellRole = "_cellRole_199k3_436";
var cellAction = "_cellAction_199k3_444";
var actionIcon = "_actionIcon_199k3_452";
var disabledIcon = "_disabledIcon_199k3_459";
var disabled = "_disabled_199k3_459";
var label = "_label_199k3_472";
var shimmer$3 = "_shimmer_199k3_1";
var spin$3 = "_spin_199k3_1";
var opacityPulse$3 = "_opacityPulse_199k3_1";
var popoverIn$3 = "_popoverIn_199k3_1";
var fadeIn$3 = "_fadeIn_199k3_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_199k3_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_199k3_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_199k3_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_199k3_1";
var blurSwapIn$3 = "_blurSwapIn_199k3_1";
var blurSwapOut$3 = "_blurSwapOut_199k3_1";
var pulseGlow$3 = "_pulseGlow_199k3_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_199k3_1";
var fade$3 = "_fade_199k3_1";
var fadeInUp$3 = "_fadeInUp_199k3_1";
var fadeInDown$3 = "_fadeInDown_199k3_1";
var fadeInLeft$3 = "_fadeInLeft_199k3_1";
var fadeInRight$3 = "_fadeInRight_199k3_1";
var fadeOut$3 = "_fadeOut_199k3_1";
var fadeOutDown$3 = "_fadeOutDown_199k3_1";
var fadeOutUp$3 = "_fadeOutUp_199k3_1";
var fadeOutLeft$3 = "_fadeOutLeft_199k3_1";
var fadeOutRight$3 = "_fadeOutRight_199k3_1";
var ping$3 = "_ping_199k3_1";
var blinkBackground$3 = "_blinkBackground_199k3_1";
var typingBlink$3 = "_typingBlink_199k3_1";
var RuleRow_vue_vue_type_style_index_0_lang_module_default = {
	row,
	cellDrag,
	cellPriority,
	cellCondition,
	cellProject,
	cellRole,
	cellAction,
	actionIcon,
	disabledIcon,
	disabled,
	label,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_199k3_1",
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
var RuleRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RuleRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RuleRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/provisioning/components/RuleList.vue?vue&type=script&setup=true&lang.ts
var RuleList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RuleList",
	props: {
		rules: {},
		fallbackRole: { default: ROLE.Member },
		type: { default: "instance" },
		projects: { default: () => [] },
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"reorder",
		"update",
		"delete",
		"duplicate",
		"update:fallbackRole"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		function onDragEnd(event) {
			if (event.oldIndex !== void 0 && event.newIndex !== void 0 && event.oldIndex !== event.newIndex) emit("reorder", event.oldIndex, event.newIndex);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.table),
				"data-test-id": "rule-list"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerCellFull) }, "Condition & Assignment", 2)], 2),
				createVNode(unref(draggableComponent), {
					"model-value": props.rules,
					"item-key": "id",
					handle: ".drag-handle",
					animation: 150,
					disabled: props.disabled,
					"drag-class": _ctx.$style.dragging,
					"ghost-class": _ctx.$style.ghost,
					"chosen-class": _ctx.$style.chosen,
					onEnd: onDragEnd
				}, {
					item: withCtx(({ element, index }) => [createVNode(RuleRow_default, {
						rule: element,
						priority: index + 1,
						type: props.type,
						projects: props.projects,
						disabled: props.disabled,
						onUpdate: _cache[0] || (_cache[0] = (id, patch) => emit("update", id, patch)),
						onDelete: _cache[1] || (_cache[1] = (id) => emit("delete", id)),
						onDuplicate: _cache[2] || (_cache[2] = (id) => emit("duplicate", id))
					}, null, 8, [
						"rule",
						"priority",
						"type",
						"projects",
						"disabled"
					])]),
					_: 1
				}, 8, [
					"model-value",
					"disabled",
					"drag-class",
					"ghost-class",
					"chosen-class"
				]),
				props.type !== "project" ? (openBlock(), createBlock(DefaultConditionRow_default, {
					key: 0,
					"model-value": props.fallbackRole,
					label: unref(i18n).baseText("settings.sso.settings.roleMappingRules.defaultCondition.instance"),
					disabled: props.disabled,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => emit("update:fallbackRole", String($event)))
				}, null, 8, [
					"model-value",
					"label",
					"disabled"
				])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.defaultRow)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.defaultCellIcon) }, [createVNode(unref(N8nIcon_default), {
						icon: "lock",
						size: "small",
						color: "text-light"
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.defaultCellText) }, toDisplayString(unref(i18n).baseText("settings.sso.settings.roleMappingRules.defaultCondition.project")), 3),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.defaultCellSpacer) }, null, 2)
				], 2))
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/RuleList.vue?vue&type=style&index=0&lang.module.scss
var table = "_table_1oebg_388";
var headerRow = "_headerRow_1oebg_394";
var headerCellFull = "_headerCellFull_1oebg_402";
var defaultRow = "_defaultRow_1oebg_410";
var defaultCellIcon = "_defaultCellIcon_1oebg_418";
var defaultCellText = "_defaultCellText_1oebg_427";
var defaultCellSpacer = "_defaultCellSpacer_1oebg_435";
var ghost = "_ghost_1oebg_440";
var chosen = "_chosen_1oebg_444";
var dragging = "_dragging_1oebg_448";
var shimmer$2 = "_shimmer_1oebg_1";
var spin$2 = "_spin_1oebg_1";
var opacityPulse$2 = "_opacityPulse_1oebg_1";
var popoverIn$2 = "_popoverIn_1oebg_1";
var fadeIn$2 = "_fadeIn_1oebg_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1oebg_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1oebg_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1oebg_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1oebg_1";
var blurSwapIn$2 = "_blurSwapIn_1oebg_1";
var blurSwapOut$2 = "_blurSwapOut_1oebg_1";
var pulseGlow$2 = "_pulseGlow_1oebg_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1oebg_1";
var fade$2 = "_fade_1oebg_1";
var fadeInUp$2 = "_fadeInUp_1oebg_1";
var fadeInDown$2 = "_fadeInDown_1oebg_1";
var fadeInLeft$2 = "_fadeInLeft_1oebg_1";
var fadeInRight$2 = "_fadeInRight_1oebg_1";
var fadeOut$2 = "_fadeOut_1oebg_1";
var fadeOutDown$2 = "_fadeOutDown_1oebg_1";
var fadeOutUp$2 = "_fadeOutUp_1oebg_1";
var fadeOutLeft$2 = "_fadeOutLeft_1oebg_1";
var fadeOutRight$2 = "_fadeOutRight_1oebg_1";
var ping$2 = "_ping_1oebg_1";
var blinkBackground$2 = "_blinkBackground_1oebg_1";
var typingBlink$2 = "_typingBlink_1oebg_1";
var RuleList_vue_vue_type_style_index_0_lang_module_default = {
	table,
	headerRow,
	headerCellFull,
	defaultRow,
	defaultCellIcon,
	defaultCellText,
	defaultCellSpacer,
	ghost,
	chosen,
	dragging,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1oebg_1",
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
var RuleList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RuleList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RuleList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/provisioning/components/RoleMappingRuleEditor.vue?vue&type=script&setup=true&lang.ts
var RoleMappingRuleEditor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleMappingRuleEditor",
	props: /* @__PURE__ */ mergeModels({ showProjectRules: {
		type: Boolean,
		default: true
	} }, {
		"defaultInstanceRole": { required: true },
		"defaultInstanceRoleModifiers": {}
	}),
	emits: ["update:defaultInstanceRole"],
	setup(__props, { expose: __expose }) {
		const props = __props;
		const defaultInstanceRole = useModel(__props, "defaultInstanceRole");
		const i18n = useI18n();
		const rbacStore = useRBACStore();
		const rolesStore = useRolesStore();
		const projectsStore = useProjectsStore();
		const canEdit = computed(() => rbacStore.hasScope("roleMappingRule:create"));
		const teamProjectOptions = computed(() => projectsStore.teamProjects.map((p) => ({
			id: p.id,
			name: p.name ?? ""
		})));
		const { instanceRules, projectRules, isDirty, addRule, updateRule, deleteRule, reorder, loadRules, save, discardProjectRules } = useRoleMappingRules();
		function duplicateRule(id) {
			const source = [...instanceRules.value, ...projectRules.value].find((r) => r.id === id);
			if (!source) return;
			addRule(source.type);
			const rules = source.type === "instance" ? instanceRules : projectRules;
			const newRule = rules.value[rules.value.length - 1];
			updateRule(newRule.id, {
				expression: source.expression,
				role: source.role,
				projectIds: [...source.projectIds]
			});
		}
		onMounted(async () => {
			await Promise.all([
				loadRules(),
				rolesStore.fetchRoles(),
				projectsStore.getAllProjects()
			]);
		});
		__expose({
			isDirty,
			save,
			discardProjectRules
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.editor),
				"data-test-id": "role-mapping-rule-editor"
			}, [
				createVNode(RuleSectionHeader_default, {
					title: unref(i18n).baseText("settings.sso.settings.roleMappingRules.instanceRules.title"),
					description: unref(i18n).baseText("settings.sso.settings.roleMappingRules.instanceRules.description")
				}, null, 8, ["title", "description"]),
				createVNode(RuleList_default, {
					type: "instance",
					rules: unref(instanceRules),
					"fallback-role": defaultInstanceRole.value,
					disabled: !canEdit.value,
					onReorder: _cache[0] || (_cache[0] = (from, to) => unref(reorder)("instance", from, to)),
					onUpdate: unref(updateRule),
					onDelete: unref(deleteRule),
					onDuplicate: duplicateRule,
					"onUpdate:fallbackRole": _cache[1] || (_cache[1] = ($event) => defaultInstanceRole.value = $event)
				}, null, 8, [
					"rules",
					"fallback-role",
					"disabled",
					"onUpdate",
					"onDelete"
				]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.addButtonRow) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					icon: "plus",
					disabled: !canEdit.value,
					"data-test-id": "add-instance-rule-button",
					onClick: _cache[2] || (_cache[2] = ($event) => unref(addRule)("instance"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.roleMappingRules.addRule")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2),
				props.showProjectRules ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createBaseVNode("hr", { class: normalizeClass(_ctx.$style.sectionDivider) }, null, 2),
					createVNode(RuleSectionHeader_default, {
						title: unref(i18n).baseText("settings.sso.settings.roleMappingRules.projectRules.title"),
						description: unref(i18n).baseText("settings.sso.settings.roleMappingRules.projectRules.description")
					}, null, 8, ["title", "description"]),
					createVNode(RuleList_default, {
						type: "project",
						rules: unref(projectRules),
						projects: teamProjectOptions.value,
						disabled: !canEdit.value,
						onReorder: _cache[3] || (_cache[3] = (from, to) => unref(reorder)("project", from, to)),
						onUpdate: unref(updateRule),
						onDelete: unref(deleteRule),
						onDuplicate: duplicateRule
					}, null, 8, [
						"rules",
						"projects",
						"disabled",
						"onUpdate",
						"onDelete"
					]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.addButtonRow) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						icon: "plus",
						disabled: !canEdit.value,
						"data-test-id": "add-project-rule-button",
						onClick: _cache[4] || (_cache[4] = ($event) => unref(addRule)("project"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.roleMappingRules.addRule")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)
				], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/sso/provisioning/components/RoleMappingRuleEditor.vue?vue&type=style&index=0&lang.module.scss
var editor = "_editor_1ides_388";
var addButtonRow = "_addButtonRow_1ides_392";
var sectionDivider = "_sectionDivider_1ides_398";
var shimmer$1 = "_shimmer_1ides_1";
var spin$1 = "_spin_1ides_1";
var opacityPulse$1 = "_opacityPulse_1ides_1";
var popoverIn$1 = "_popoverIn_1ides_1";
var fadeIn$1 = "_fadeIn_1ides_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1ides_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1ides_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1ides_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1ides_1";
var blurSwapIn$1 = "_blurSwapIn_1ides_1";
var blurSwapOut$1 = "_blurSwapOut_1ides_1";
var pulseGlow$1 = "_pulseGlow_1ides_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1ides_1";
var fade$1 = "_fade_1ides_1";
var fadeInUp$1 = "_fadeInUp_1ides_1";
var fadeInDown$1 = "_fadeInDown_1ides_1";
var fadeInLeft$1 = "_fadeInLeft_1ides_1";
var fadeInRight$1 = "_fadeInRight_1ides_1";
var fadeOut$1 = "_fadeOut_1ides_1";
var fadeOutDown$1 = "_fadeOutDown_1ides_1";
var fadeOutUp$1 = "_fadeOutUp_1ides_1";
var fadeOutLeft$1 = "_fadeOutLeft_1ides_1";
var fadeOutRight$1 = "_fadeOutRight_1ides_1";
var ping$1 = "_ping_1ides_1";
var blinkBackground$1 = "_blinkBackground_1ides_1";
var typingBlink$1 = "_typingBlink_1ides_1";
var RoleMappingRuleEditor_vue_vue_type_style_index_0_lang_module_default = {
	editor,
	addButtonRow,
	sectionDivider,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1ides_1",
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
var RoleMappingRuleEditor_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RoleMappingRuleEditor_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleMappingRuleEditor_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/components/SamlSettingsForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var SamlSettingsForm_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SamlSettingsForm",
	setup(__props, { expose: __expose }) {
		const i18n = useI18n();
		const ssoStore = useSSOStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const message = useMessage();
		const clipboard = useClipboard();
		const redirectUrlCopied = ref(false);
		const entityIdCopied = ref(false);
		async function handleCopy(value, field) {
			await clipboard.copy(value);
			if (field === "redirectUrl") {
				redirectUrlCopied.value = true;
				setTimeout(() => redirectUrlCopied.value = false, 2e3);
			} else if (field === "entityId") {
				entityIdCopied.value = true;
				setTimeout(() => entityIdCopied.value = false, 2e3);
			}
		}
		const isSsoManagedByEnv = computed(() => ssoStore.ssoManagedByEnv);
		const isRulesMappingInN8n = computed(() => mappingMethod.value === "rules_in_n8n");
		const savingForm = ref(false);
		const roleMappingRuleEditorRef = ref(null);
		const redirectUrl = ref();
		const samlLoginEnabled = ref(false);
		const IdentityProviderSettingsType = {
			URL: "url",
			XML: "xml"
		};
		const ipsOptions = ref([{
			label: i18n.baseText("settings.sso.settings.ips.options.url"),
			value: IdentityProviderSettingsType.URL
		}, {
			label: i18n.baseText("settings.sso.settings.ips.options.xml"),
			value: IdentityProviderSettingsType.XML
		}]);
		const ipsType = ref(IdentityProviderSettingsType.URL);
		const metadataUrl = ref();
		const metadata = ref();
		const entityId = ref();
		const showUserRoleProvisioningDialog = ref(false);
		const { roleAssignment, mappingMethod, defaultInstanceRole, isUserRoleProvisioningChanged, saveProvisioningConfig, trackProvisioningChange, roleAssignmentTransition, storedHasProjectRoles, isDroppingProjectRules, revertRoleAssignment } = useUserRoleProvisioningForm(SupportedProtocols.SAML);
		async function loadSamlConfig() {
			if (!ssoStore.isEnterpriseSamlEnabled) return;
			try {
				await getSamlConfig();
			} catch (error) {
				toast.showError(error, "error");
			}
		}
		const getSamlConfig = async () => {
			const config = await ssoStore.getSamlConfig();
			entityId.value = config?.entityID;
			redirectUrl.value = config?.returnUrl;
			if (config?.metadataUrl) ipsType.value = IdentityProviderSettingsType.URL;
			else if (config?.metadata) ipsType.value = IdentityProviderSettingsType.XML;
			metadata.value = config?.metadata;
			metadataUrl.value = config?.metadataUrl;
			samlLoginEnabled.value = config.loginEnabled ?? false;
		};
		const isSaveEnabled = computed(() => {
			if (savingForm.value) return false;
			const isIdentityProviderChanged = () => {
				if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value && metadataUrl.value !== ssoStore.samlConfig?.metadataUrl;
				else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value && metadata.value !== ssoStore.samlConfig?.metadata;
				return false;
			};
			const isSamlLoginEnabledChanged = ssoStore.isSamlLoginEnabled !== samlLoginEnabled.value;
			const isRuleMappingDirty = roleMappingRuleEditorRef.value?.isDirty ?? false;
			return isUserRoleProvisioningChanged.value || isIdentityProviderChanged() || isSamlLoginEnabledChanged || isRuleMappingDirty;
		});
		const isTestEnabled = computed(() => {
			if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value;
			else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value;
			return false;
		});
		const sendTrackingEvent = (config) => {
			if (!config) {
				captureMessage("Single Sign-On SAML: telemtetry data undefined on submit", { level: "error" });
				return;
			}
			const trackingMetadata = {
				instance_id: useRootStore().instanceId,
				authentication_method: SupportedProtocols.SAML,
				identity_provider: config.metadataUrl ? "metadata" : "xml",
				is_active: config.loginEnabled ?? false
			};
			telemetry.track("User updated single sign on settings", trackingMetadata);
		};
		const promptConfirmDisablingSamlLogin = async () => {
			return await message.confirm(i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.message", { interpolate: { protocol: "SAML" } }), i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.headline", { interpolate: { protocol: "SAML" } }), {
				cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
				confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
			});
		};
		const prompTestSamlConnectionBeforeActivating = async () => {
			const promptOpeningTestConnectionPage = await message.confirm(i18n.baseText("settings.sso.settings.save.testConnection.message"), i18n.baseText("settings.sso.settings.save.testConnection.title"), {
				confirmButtonText: i18n.baseText("settings.sso.settings.save.testConnection.test"),
				cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
			});
			if (promptOpeningTestConnectionPage === "confirm") {
				await onTest();
				return await message.confirm(i18n.baseText("settings.sso.settings.save.confirmTestConnection.message"), i18n.baseText("settings.sso.settings.save.confirmTestConnection.title"), {
					confirmButtonText: i18n.baseText("settings.sso.settings.save.confirmTestConnection.confirm"),
					cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
				});
			}
			return promptOpeningTestConnectionPage;
		};
		const onSave = async (provisioningChangesConfirmed = false) => {
			if (isSsoManagedByEnv.value) try {
				savingForm.value = true;
				trackProvisioningChange({ configChanged: false }, await roleMappingRuleEditorRef.value?.save());
				toast.showMessage({
					title: i18n.baseText("settings.sso.settings.save.success"),
					type: "success"
				});
				return true;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error"));
				return false;
			} finally {
				savingForm.value = false;
			}
			try {
				savingForm.value = true;
				validateSamlInput();
				const isDisablingSamlLogin = samlLoginEnabled.value !== ssoStore.isSamlLoginEnabled && ssoStore.isSamlLoginEnabled === true;
				if (isDisablingSamlLogin) {
					if (await promptConfirmDisablingSamlLogin() !== "confirm") return false;
				}
				if (!provisioningChangesConfirmed && roleAssignmentTransition.value !== "none") {
					showUserRoleProvisioningDialog.value = true;
					return false;
				}
				showUserRoleProvisioningDialog.value = false;
				const metaDataConfig = ipsType.value === IdentityProviderSettingsType.URL ? { metadataUrl: metadataUrl.value } : { metadata: metadata.value };
				if (!ssoStore.isSamlLoginEnabled && samlLoginEnabled.value) {
					await ssoStore.saveSamlConfig(metaDataConfig);
					if (await prompTestSamlConnectionBeforeActivating() !== "confirm") return false;
				}
				const configResponse = await ssoStore.saveSamlConfig({
					...metaDataConfig,
					loginEnabled: samlLoginEnabled.value
				});
				const provisioningResult = await saveProvisioningConfig(isDisablingSamlLogin);
				if ((isDisablingSamlLogin ? "manual" : roleAssignment.value) !== "instance_and_project") roleMappingRuleEditorRef.value?.discardProjectRules();
				trackProvisioningChange(provisioningResult, mappingMethod.value === "rules_in_n8n" ? await roleMappingRuleEditorRef.value?.save() : void 0);
				ssoStore.selectedAuthProtocol = SupportedProtocols.SAML;
				await getSamlConfig();
				sendTrackingEvent(configResponse);
				toast.showMessage({
					title: i18n.baseText("settings.sso.settings.save.success"),
					type: "success"
				});
				return true;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error"));
				return false;
			} finally {
				savingForm.value = false;
			}
		};
		const onTest = async () => {
			try {
				const metaDataConfig = ipsType.value === IdentityProviderSettingsType.URL ? { metadataUrl: metadataUrl.value } : { metadata: metadata.value };
				const url = await ssoStore.testSamlConfig(metaDataConfig);
				if (typeof window !== "undefined") window.open(url, "_blank");
			} catch (error) {
				toast.showError(error, "error");
			}
		};
		const validateSamlInput = () => {
			if (ipsType.value === IdentityProviderSettingsType.URL) try {
				const parsedUrl = new URL(metadataUrl.value);
				if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") throw new Error("The provided protocol is not supported");
			} catch (error) {
				throw new Error(i18n.baseText("settings.sso.settings.ips.url.invalid"));
			}
		};
		__expose({
			hasUnsavedChanges: computed(() => isSaveEnabled.value && (!isSsoManagedByEnv.value || isRulesMappingInN8n.value)),
			onSave
		});
		onMounted(async () => {
			await loadSamlConfig();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.card, _ctx.$style.firstCard]) }, [
					renderSlot(_ctx.$slots, "protocol-select"),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.label")), 1), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.help")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.copyInputGroup),
						"data-test-id": "copy-input"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.copyInputField) }, [createVNode(unref(Input_default), {
						"model-value": redirectUrl.value,
						type: "text",
						readonly: true
					}, null, 8, ["model-value"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.copyButtonWrapper) }, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"icon-only": "",
						icon: redirectUrlCopied.value ? "check" : "copy",
						onClick: _cache[0] || (_cache[0] = ($event) => handleCopy(redirectUrl.value, "redirectUrl"))
					}, null, 8, ["icon"])], 2)], 2)], 2)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.label")), 1), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.help")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.copyInputGroup),
						"data-test-id": "copy-input"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.copyInputField) }, [createVNode(unref(Input_default), {
						"model-value": entityId.value,
						type: "text",
						readonly: true
					}, null, 8, ["model-value"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.copyButtonWrapper) }, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"icon-only": "",
						icon: entityIdCopied.value ? "check" : "copy",
						onClick: _cache[1] || (_cache[1] = ($event) => handleCopy(entityId.value, "entityId"))
					}, null, 8, ["icon"])], 2)], 2)], 2)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.ipsBlock) }, [
						createBaseVNode("div", { class: normalizeClass([_ctx.$style.settingsItem, _ctx.$style.settingsItemNoBorder]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.label")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [createVNode(unref(N8nSegmentControl_default), {
							modelValue: ipsType.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ipsType.value = $event),
							disabled: isSsoManagedByEnv.value,
							options: ipsOptions.value
						}, null, 8, [
							"modelValue",
							"disabled",
							"options"
						])], 2)], 2),
						ipsType.value === IdentityProviderSettingsType.URL ? (openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(unref(Input_default), {
							modelValue: metadataUrl.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => metadataUrl.value = $event),
							disabled: isSsoManagedByEnv.value,
							type: "text",
							name: "metadataUrl",
							size: "large",
							placeholder: unref(i18n).baseText("settings.sso.settings.ips.url.placeholder"),
							"data-test-id": "sso-provider-url"
						}, null, 8, [
							"modelValue",
							"disabled",
							"placeholder"
						]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.url.help")), 1)])) : createCommentVNode("", true),
						ipsType.value === IdentityProviderSettingsType.XML ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(unref(Input_default), {
							modelValue: metadata.value,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => metadata.value = $event),
							disabled: isSsoManagedByEnv.value,
							type: "textarea",
							name: "metadata",
							rows: 4,
							"data-test-id": "sso-provider-xml"
						}, null, 8, ["modelValue", "disabled"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.xml.help")), 1)])) : createCommentVNode("", true)
					], 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [
					createVNode(UserRoleProvisioningDropdown_default, {
						"role-assignment": unref(roleAssignment),
						"onUpdate:roleAssignment": _cache[5] || (_cache[5] = ($event) => isRef(roleAssignment) ? roleAssignment.value = $event : null),
						"mapping-method": unref(mappingMethod),
						"onUpdate:mappingMethod": _cache[6] || (_cache[6] = ($event) => isRef(mappingMethod) ? mappingMethod.value = $event : null),
						"default-instance-role": unref(defaultInstanceRole),
						"onUpdate:defaultInstanceRole": _cache[7] || (_cache[7] = ($event) => isRef(defaultInstanceRole) ? defaultInstanceRole.value = $event : null),
						disabled: isSsoManagedByEnv.value,
						"auth-protocol": "saml"
					}, null, 8, [
						"role-assignment",
						"mapping-method",
						"default-instance-role",
						"disabled"
					]),
					unref(mappingMethod) === "rules_in_n8n" ? (openBlock(), createBlock(RoleMappingRuleEditor_default, {
						key: 0,
						ref_key: "roleMappingRuleEditorRef",
						ref: roleMappingRuleEditorRef,
						"default-instance-role": unref(defaultInstanceRole),
						"onUpdate:defaultInstanceRole": _cache[8] || (_cache[8] = ($event) => isRef(defaultInstanceRole) ? defaultInstanceRole.value = $event : null),
						"show-project-rules": unref(roleAssignment) === "instance_and_project"
					}, null, 8, ["default-instance-role", "show-project-rules"])) : createCommentVNode("", true),
					createVNode(ConfirmProvisioningDialog_default, {
						modelValue: showUserRoleProvisioningDialog.value,
						"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => showUserRoleProvisioningDialog.value = $event),
						"transition-type": unref(roleAssignmentTransition),
						"show-project-roles-csv": unref(storedHasProjectRoles) || unref(roleAssignment) === "instance_and_project",
						"will-delete-project-rules": unref(isDroppingProjectRules),
						"auth-protocol": "saml",
						onConfirmProvisioning: _cache[10] || (_cache[10] = ($event) => onSave(true)),
						onCancel: _cache[11] || (_cache[11] = ($event) => {
							unref(revertRoleAssignment)();
							showUserRoleProvisioningDialog.value = false;
						})
					}, null, 8, [
						"modelValue",
						"transition-type",
						"show-project-roles-csv",
						"will-delete-project-rules"
					])
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.settingsItem, _ctx.$style.settingsItemNoBorder]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ssoToggle.label")), 1), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ssoToggle.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [createVNode(unref(N8nSelect_default), {
					"model-value": samlLoginEnabled.value ? "enabled" : "disabled",
					size: "medium",
					disabled: isSsoManagedByEnv.value,
					"data-test-id": "sso-toggle",
					"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => samlLoginEnabled.value = $event === "enabled")
				}, {
					prefix: withCtx(() => [samlLoginEnabled.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.greenDot)
					}, null, 2)) : createCommentVNode("", true)]),
					default: withCtx(() => [createVNode(unref(N8nOption_default), {
						value: "enabled",
						label: unref(i18n).baseText("settings.sso.settings.ssoToggle.enabled")
					}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
						value: "disabled",
						label: unref(i18n).baseText("settings.sso.settings.ssoToggle.disabled")
					}, null, 8, ["label"])]),
					_: 1
				}, 8, ["model-value", "disabled"])], 2)], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [!isSsoManagedByEnv.value || isRulesMappingInN8n.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					disabled: !isSaveEnabled.value,
					loading: savingForm.value,
					size: "large",
					"data-test-id": "sso-save",
					onClick: _cache[13] || (_cache[13] = ($event) => onSave(false))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
					variant: "subtle",
					disabled: !isTestEnabled.value,
					size: "large",
					"data-test-id": "sso-test",
					onClick: onTest
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.test")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)
			]);
		};
	}
}), [["__cssModules", { "$style": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/components/OidcSettingsForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 1 };
var OidcSettingsForm_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "OidcSettingsForm",
	setup(__props, { expose: __expose }) {
		const i18n = useI18n();
		const ssoStore = useSSOStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const message = useMessage();
		const savingForm = ref(false);
		const roleMappingRuleEditorRef = ref(null);
		const isSsoManagedByEnv = computed(() => ssoStore.ssoManagedByEnv);
		const isRulesMappingInN8n = computed(() => mappingMethod.value === "rules_in_n8n");
		const discoveryEndpoint = ref("");
		const clientId = ref("");
		const clientSecret = ref("");
		const showUserRoleProvisioningDialog = ref(false);
		const { roleAssignment, mappingMethod, defaultInstanceRole, isUserRoleProvisioningChanged, saveProvisioningConfig, trackProvisioningChange, roleAssignmentTransition, storedHasProjectRoles, isDroppingProjectRules, revertRoleAssignment } = useUserRoleProvisioningForm(SupportedProtocols.OIDC);
		const prompt = ref("select_account");
		const handlePromptChange = (value) => {
			prompt.value = value;
		};
		const promptDescriptions = [
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.login"),
				value: "login"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.none"),
				value: "none"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.consent"),
				value: "consent"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.select_account"),
				value: "select_account"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.create"),
				value: "create"
			}
		];
		const authenticationContextClassReference = ref("");
		const additionalScopes = ref("");
		const rpInitiatedLogoutEnabled = ref(false);
		const isAdditionalScopesInvalid = computed(() => [",", ";"].some((c) => additionalScopes.value.includes(c)));
		const getOidcConfig = async () => {
			const config = await ssoStore.getOidcConfig();
			clientId.value = config.clientId;
			clientSecret.value = config.clientSecret;
			discoveryEndpoint.value = config.discoveryEndpoint;
			prompt.value = config.prompt ?? "select_account";
			authenticationContextClassReference.value = config.authenticationContextClassReference?.join(",") || "";
			additionalScopes.value = config.additionalScopes ?? "";
			rpInitiatedLogoutEnabled.value = config.rpInitiatedLogoutEnabled ?? false;
		};
		const loadOidcConfig = async () => {
			if (!ssoStore.isEnterpriseOidcEnabled) return;
			try {
				await getOidcConfig();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error_oidc"));
			}
		};
		const cannotSaveOidcSettings = computed(() => {
			const currentAcrString = authenticationContextClassReference.value.split(",").map((s) => s.trim()).filter(Boolean).join(",");
			const storedAcrString = ssoStore.oidcConfig?.authenticationContextClassReference?.join(",") || "";
			const isRuleMappingDirty = roleMappingRuleEditorRef.value?.isDirty ?? false;
			return isAdditionalScopesInvalid.value || ssoStore.oidcConfig?.clientId === clientId.value && ssoStore.oidcConfig?.clientSecret === clientSecret.value && ssoStore.oidcConfig?.discoveryEndpoint === discoveryEndpoint.value && ssoStore.oidcConfig?.loginEnabled === ssoStore.isOidcLoginEnabled && ssoStore.oidcConfig?.prompt === prompt.value && ssoStore.oidcConfig?.additionalScopes === additionalScopes.value && ssoStore.oidcConfig?.rpInitiatedLogoutEnabled === rpInitiatedLogoutEnabled.value && !isUserRoleProvisioningChanged.value && !isRuleMappingDirty && storedAcrString === authenticationContextClassReference.value && currentAcrString === storedAcrString;
		});
		async function onOidcSettingsSave(provisioningChangesConfirmed = false) {
			if (isSsoManagedByEnv.value) try {
				savingForm.value = true;
				trackProvisioningChange({ configChanged: false }, await roleMappingRuleEditorRef.value?.save());
				toast.showMessage({
					title: i18n.baseText("settings.sso.settings.save.success"),
					type: "success"
				});
				return true;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error_oidc"));
				return false;
			} finally {
				savingForm.value = false;
			}
			if (!provisioningChangesConfirmed && roleAssignmentTransition.value !== "none") {
				showUserRoleProvisioningDialog.value = true;
				return false;
			}
			const isDisablingOidcLogin = ssoStore.oidcConfig?.loginEnabled !== ssoStore.isOidcLoginEnabled && ssoStore.oidcConfig?.loginEnabled === true;
			if (isDisablingOidcLogin) {
				if (await message.confirm(i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.message", { interpolate: { protocol: "OIDC" } }), i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.headline", { interpolate: { protocol: "OIDC" } }), {
					cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
					confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
				}) !== "confirm") return false;
			}
			const acrArray = authenticationContextClassReference.value.split(",").map((s) => s.trim()).filter(Boolean);
			try {
				savingForm.value = true;
				const newConfig = await ssoStore.saveOidcConfig({
					clientId: clientId.value,
					clientSecret: clientSecret.value,
					discoveryEndpoint: discoveryEndpoint.value,
					prompt: prompt.value,
					loginEnabled: ssoStore.isOidcLoginEnabled,
					authenticationContextClassReference: acrArray,
					additionalScopes: additionalScopes.value,
					rpInitiatedLogoutEnabled: rpInitiatedLogoutEnabled.value
				});
				const provisioningResult = await saveProvisioningConfig(isDisablingOidcLogin);
				if ((isDisablingOidcLogin ? "manual" : roleAssignment.value) !== "instance_and_project") roleMappingRuleEditorRef.value?.discardProjectRules();
				trackProvisioningChange(provisioningResult, mappingMethod.value === "rules_in_n8n" ? await roleMappingRuleEditorRef.value?.save() : void 0);
				showUserRoleProvisioningDialog.value = false;
				ssoStore.selectedAuthProtocol = SupportedProtocols.OIDC;
				clientSecret.value = newConfig.clientSecret;
				sendTrackingEvent(newConfig);
				toast.showMessage({
					title: i18n.baseText("settings.sso.settings.save.success"),
					type: "success"
				});
				return true;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error_oidc"));
				return false;
			} finally {
				await getOidcConfig();
				savingForm.value = false;
			}
		}
		function sendTrackingEvent(config) {
			const trackingMetadata = {
				instance_id: useRootStore().instanceId,
				authentication_method: SupportedProtocols.OIDC,
				discovery_endpoint: config.discoveryEndpoint,
				is_active: config.loginEnabled
			};
			telemetry.track("User updated single sign on settings", trackingMetadata);
		}
		const isTestEnabled = computed(() => !!ssoStore.oidcConfig?.discoveryEndpoint && ssoStore.oidcConfig.discoveryEndpoint !== "" && !!ssoStore.oidcConfig?.clientId && !!ssoStore.oidcConfig?.clientSecret);
		const onTest = async () => {
			try {
				const { url } = await ssoStore.testOidcConfig();
				if (typeof window !== "undefined") window.open(url, "_blank");
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.test.error"));
			}
		};
		__expose({
			hasUnsavedChanges: computed(() => !cannotSaveOidcSettings.value && !savingForm.value && (!isSsoManagedByEnv.value || isRulesMappingInN8n.value)),
			onSave: onOidcSettingsSave
		});
		onMounted(async () => {
			await loadOidcConfig();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.card, _ctx.$style.firstCard]) }, [
					renderSlot(_ctx.$slots, "protocol-select"),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[15] || (_cache[15] = createBaseVNode("label", null, "Redirect URL", -1)),
						createVNode(CopyInput_default, {
							value: unref(ssoStore).oidc.callbackUrl,
							"copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
							"toast-title": "Redirect URL copied to clipboard"
						}, null, 8, ["value", "copy-button-text"]),
						_cache[16] || (_cache[16] = createBaseVNode("small", null, "Copy the Redirect URL to configure your OIDC provider ", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[17] || (_cache[17] = createBaseVNode("label", null, "Discovery Endpoint", -1)),
						createVNode(unref(Input_default), {
							"model-value": discoveryEndpoint.value,
							disabled: isSsoManagedByEnv.value,
							type: "text",
							"data-test-id": "oidc-discovery-endpoint",
							placeholder: "https://accounts.google.com/.well-known/openid-configuration",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => discoveryEndpoint.value = v)
						}, null, 8, ["model-value", "disabled"]),
						_cache[18] || (_cache[18] = createBaseVNode("small", null, "Paste here your discovery endpoint", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[19] || (_cache[19] = createBaseVNode("label", null, "Client ID", -1)),
						createVNode(unref(Input_default), {
							"model-value": clientId.value,
							disabled: isSsoManagedByEnv.value,
							type: "text",
							"data-test-id": "oidc-client-id",
							"onUpdate:modelValue": _cache[1] || (_cache[1] = (v) => clientId.value = v)
						}, null, 8, ["model-value", "disabled"]),
						_cache[20] || (_cache[20] = createBaseVNode("small", null, "The client ID you received when registering your application with your provider", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[21] || (_cache[21] = createBaseVNode("label", null, "Client Secret", -1)),
						createVNode(unref(Input_default), {
							"model-value": clientSecret.value,
							disabled: isSsoManagedByEnv.value,
							type: "password",
							"data-test-id": "oidc-client-secret",
							"onUpdate:modelValue": _cache[2] || (_cache[2] = (v) => clientSecret.value = v)
						}, null, 8, ["model-value", "disabled"]),
						_cache[22] || (_cache[22] = createBaseVNode("small", null, "The client Secret you received when registering your application with your provider", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[23] || (_cache[23] = createBaseVNode("label", null, "Prompt", -1)),
						createVNode(unref(N8nSelect_default), {
							"model-value": prompt.value,
							disabled: isSsoManagedByEnv.value,
							"data-test-id": "oidc-prompt",
							"onUpdate:modelValue": handlePromptChange
						}, {
							default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(promptDescriptions, (option) => {
								return createVNode(unref(N8nOption_default), {
									key: option.value,
									label: option.label,
									"data-test-id": "oidc-prompt-filter-option",
									value: option.value
								}, null, 8, ["label", "value"]);
							}), 64))]),
							_: 1
						}, 8, ["model-value", "disabled"]),
						_cache[24] || (_cache[24] = createBaseVNode("small", null, "The prompt parameter to use when authenticating with the OIDC provider", -1))
					], 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [
					createVNode(UserRoleProvisioningDropdown_default, {
						"role-assignment": unref(roleAssignment),
						"onUpdate:roleAssignment": _cache[3] || (_cache[3] = ($event) => isRef(roleAssignment) ? roleAssignment.value = $event : null),
						"mapping-method": unref(mappingMethod),
						"onUpdate:mappingMethod": _cache[4] || (_cache[4] = ($event) => isRef(mappingMethod) ? mappingMethod.value = $event : null),
						"default-instance-role": unref(defaultInstanceRole),
						"onUpdate:defaultInstanceRole": _cache[5] || (_cache[5] = ($event) => isRef(defaultInstanceRole) ? defaultInstanceRole.value = $event : null),
						"auth-protocol": "oidc",
						disabled: isSsoManagedByEnv.value
					}, null, 8, [
						"role-assignment",
						"mapping-method",
						"default-instance-role",
						"disabled"
					]),
					unref(mappingMethod) === "rules_in_n8n" ? (openBlock(), createBlock(RoleMappingRuleEditor_default, {
						key: 0,
						ref_key: "roleMappingRuleEditorRef",
						ref: roleMappingRuleEditorRef,
						"default-instance-role": unref(defaultInstanceRole),
						"onUpdate:defaultInstanceRole": _cache[6] || (_cache[6] = ($event) => isRef(defaultInstanceRole) ? defaultInstanceRole.value = $event : null),
						"show-project-rules": unref(roleAssignment) === "instance_and_project"
					}, null, 8, ["default-instance-role", "show-project-rules"])) : createCommentVNode("", true),
					createVNode(ConfirmProvisioningDialog_default, {
						modelValue: showUserRoleProvisioningDialog.value,
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => showUserRoleProvisioningDialog.value = $event),
						"transition-type": unref(roleAssignmentTransition),
						"show-project-roles-csv": unref(storedHasProjectRoles) || unref(roleAssignment) === "instance_and_project",
						"will-delete-project-rules": unref(isDroppingProjectRules),
						"auth-protocol": "oidc",
						onConfirmProvisioning: _cache[8] || (_cache[8] = ($event) => onOidcSettingsSave(true)),
						onCancel: _cache[9] || (_cache[9] = ($event) => {
							unref(revertRoleAssignment)();
							showUserRoleProvisioningDialog.value = false;
						})
					}, null, 8, [
						"modelValue",
						"transition-type",
						"show-project-roles-csv",
						"will-delete-project-rules"
					]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[25] || (_cache[25] = createBaseVNode("label", null, "Authentication Context Class Reference", -1)),
						createVNode(unref(Input_default), {
							"model-value": authenticationContextClassReference.value,
							type: "textarea",
							disabled: isSsoManagedByEnv.value,
							"data-test-id": "oidc-authentication-context-class-reference",
							placeholder: "mfa, phrh, pwd",
							"onUpdate:modelValue": _cache[10] || (_cache[10] = (v) => authenticationContextClassReference.value = v)
						}, null, 8, ["model-value", "disabled"]),
						_cache[26] || (_cache[26] = createBaseVNode("small", null, "ACR values to include in the authorization request (acr_values parameter), separated by commas in order of preference.", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, [_cache[27] || (_cache[27] = createTextVNode("Additional scopes ", -1)), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optional) }, "(Optional)", 2)]),
						createVNode(unref(Input_default), {
							"model-value": additionalScopes.value,
							disabled: isSsoManagedByEnv.value,
							type: "text",
							"data-test-id": "oidc-additional-scopes",
							placeholder: "e.g. groups roles",
							"onUpdate:modelValue": _cache[11] || (_cache[11] = (v) => additionalScopes.value = v)
						}, null, 8, ["model-value", "disabled"]),
						isAdditionalScopesInvalid.value ? (openBlock(), createElementBlock("small", {
							key: 0,
							class: normalizeClass(_ctx.$style.fieldError)
						}, "Use spaces to separate scopes. Commas and semicolons are not allowed.", 2)) : (openBlock(), createElementBlock("small", _hoisted_1$1, [..._cache[28] || (_cache[28] = [
							createTextVNode("By default n8n requests ", -1),
							createBaseVNode("code", null, "openid", -1),
							createTextVNode(", ", -1),
							createBaseVNode("code", null, "profile", -1),
							createTextVNode(" and ", -1),
							createBaseVNode("code", null, "email", -1),
							createTextVNode(". If you need other scopes, define them here space separated.", -1)
						])]))
					], 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [..._cache[29] || (_cache[29] = [createBaseVNode("label", null, "Single sign-on (SSO)", -1), createBaseVNode("small", null, "Allow users to sign in through your identity provider", -1)])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [createVNode(unref(N8nSelect_default), {
					"model-value": unref(ssoStore).isOidcLoginEnabled ? "enabled" : "disabled",
					size: "medium",
					"data-test-id": "sso-oidc-toggle",
					disabled: isSsoManagedByEnv.value,
					"onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(ssoStore).isOidcLoginEnabled = $event === "enabled")
				}, {
					prefix: withCtx(() => [unref(ssoStore).isOidcLoginEnabled ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.greenDot)
					}, null, 2)) : createCommentVNode("", true)]),
					default: withCtx(() => [createVNode(unref(N8nOption_default), {
						value: "enabled",
						label: "Enabled",
						"data-test-id": "sso-oidc-toggle-option"
					}), createVNode(unref(N8nOption_default), {
						value: "disabled",
						label: "Disabled",
						"data-test-id": "sso-oidc-toggle-option"
					})]),
					_: 1
				}, 8, ["model-value", "disabled"])], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemLabel) }, [..._cache[30] || (_cache[30] = [createBaseVNode("label", null, "Log out from identity provider", -1), createBaseVNode("small", null, "Also end your session at the identity provider when signing out of n8n", -1)])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsItemControl) }, [createVNode(unref(N8nSelect_default), {
					"model-value": rpInitiatedLogoutEnabled.value ? "enabled" : "disabled",
					size: "medium",
					"data-test-id": "sso-oidc-logout-toggle",
					disabled: isSsoManagedByEnv.value,
					"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => rpInitiatedLogoutEnabled.value = $event === "enabled")
				}, {
					prefix: withCtx(() => [rpInitiatedLogoutEnabled.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.greenDot)
					}, null, 2)) : createCommentVNode("", true)]),
					default: withCtx(() => [createVNode(unref(N8nOption_default), {
						value: "enabled",
						label: "Enabled"
					}), createVNode(unref(N8nOption_default), {
						value: "disabled",
						label: "Disabled"
					})]),
					_: 1
				}, 8, ["model-value", "disabled"])], 2)], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [!isSsoManagedByEnv.value || isRulesMappingInN8n.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					"data-test-id": "sso-oidc-save",
					size: "large",
					loading: savingForm.value,
					disabled: savingForm.value || cannotSaveOidcSettings.value,
					onClick: _cache[14] || (_cache[14] = ($event) => onOidcSettingsSave(false))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
					variant: "subtle",
					disabled: !isTestEnabled.value,
					size: "large",
					"data-test-id": "sso-oidc-test",
					onClick: onTest
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.test")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)
			]);
		};
	}
}), [["__cssModules", { "$style": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/views/SettingsSso.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pb-2xl" };
var _hoisted_2 = {
	key: 2,
	"data-test-id": "sso-content-licensed"
};
var _hoisted_3 = {
	key: 3,
	"data-test-id": "sso-content-licensed"
};
var SettingsSso_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSso",
	setup(__props) {
		const i18n = useI18n();
		const ssoStore = useSSOStore();
		const provisioningStore = useUserRoleProvisioningStore();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const isRulesMappingInN8n = computed(() => provisioningStore.provisioningConfig?.scopesUseExpressionMapping ?? false);
		const samlFormRef = useTemplateRef("samlForm");
		const oidcFormRef = useTemplateRef("oidcForm");
		const showUnsavedChangesDialog = ref(false);
		const pendingNext = ref(null);
		const options = computed(() => {
			return [{
				label: SupportedProtocols.SAML.toUpperCase(),
				value: SupportedProtocols.SAML
			}, {
				label: ssoStore.isEnterpriseOidcEnabled ? SupportedProtocols.OIDC.toUpperCase() : `${SupportedProtocols.OIDC.toUpperCase()} (${i18n.baseText("generic.upgradeToEnterprise")})`,
				value: SupportedProtocols.OIDC
			}];
		});
		const hasAnySsoEnabled = computed(() => ssoStore.isEnterpriseSamlEnabled || ssoStore.isEnterpriseOidcEnabled);
		const activeForm = computed(() => {
			if (authProtocol.value === SupportedProtocols.SAML) return samlFormRef.value;
			if (authProtocol.value === SupportedProtocols.OIDC) return oidcFormRef.value;
			return null;
		});
		const authProtocol = ref(SupportedProtocols.SAML);
		function onAuthProtocolUpdated(value) {
			authProtocol.value = value;
		}
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("sso", "upgrade-sso");
		};
		onBeforeRouteLeave((_to, _from, next) => {
			if (!activeForm.value?.hasUnsavedChanges) {
				next();
				return;
			}
			pendingNext.value = next;
			showUnsavedChangesDialog.value = true;
		});
		async function onSaveAndLeave() {
			showUnsavedChangesDialog.value = false;
			if (await activeForm.value?.onSave()) {
				pendingNext.value?.();
				pendingNext.value = null;
			}
		}
		function onLeaveWithoutSaving() {
			showUnsavedChangesDialog.value = false;
			pendingNext.value?.();
			pendingNext.value = null;
		}
		function onKeepEditing() {
			showUnsavedChangesDialog.value = false;
			pendingNext.value?.(false);
			pendingNext.value = null;
		}
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.sso.title"));
			ssoStore.initializeSelectedProtocol();
			authProtocol.value = ssoStore.selectedAuthProtocol || SupportedProtocols.SAML;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.title")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("p", { class: normalizeClass(_ctx.$style.description) }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.info")) + " ", 1), createBaseVNode("a", {
					class: normalizeClass(_ctx.$style.docLink),
					href: "https://docs.n8n.io/user-management/saml/",
					target: "_blank"
				}, toDisplayString(unref(i18n).baseText("settings.sso.info.link")), 3)], 2),
				unref(ssoStore).ssoManagedByEnv ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "warning",
					class: "mb-m"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(isRulesMappingInN8n.value ? unref(i18n).baseText("settings.sso.settings.envConfigBannerWithRules") : unref(i18n).baseText("settings.sso.settings.envConfigBanner")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				hasAnySsoEnabled.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.shared.card, _ctx.$style.protocolCard])
				}, [createBaseVNode("div", {
					"data-test-id": "sso-auth-protocol-select",
					class: normalizeClass(_ctx.shared.settingsItem)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.shared.settingsItemLabel) }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.authProtocol.label")), 1), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.authProtocol.description")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.shared.settingsItemControl) }, [createVNode(unref(N8nSelect_default), {
					filterable: "",
					size: "medium",
					disabled: unref(ssoStore).ssoManagedByEnv,
					"model-value": authProtocol.value,
					placeholder: unref(i18n).baseText("parameterInput.select"),
					"onUpdate:modelValue": onAuthProtocolUpdated,
					onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(options.value, ({ label, value }) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: value,
							value,
							label,
							"data-test-id": "credential-select-option"
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, [
					"disabled",
					"model-value",
					"placeholder"
				])], 2)], 2)], 2)) : createCommentVNode("", true),
				unref(ssoStore).isEnterpriseSamlEnabled && authProtocol.value === unref(SupportedProtocols).SAML ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(SamlSettingsForm_default, { ref: "samlForm" }, null, 512)])) : createCommentVNode("", true),
				unref(ssoStore).isEnterpriseOidcEnabled && authProtocol.value === unref(SupportedProtocols).OIDC ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(OidcSettingsForm_default, { ref: "oidcForm" }, null, 512)])) : createCommentVNode("", true),
				!hasAnySsoEnabled.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
					key: 4,
					"data-test-id": "sso-content-unlicensed",
					class: normalizeClass(_ctx.$style.actionBox),
					description: unref(i18n).baseText("settings.sso.actionBox.description"),
					"button-text": unref(i18n).baseText("settings.sso.actionBox.buttonText"),
					"onClick:button": goToUpgrade
				}, {
					heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.actionBox.title")), 1)]),
					_: 1
				}, 8, [
					"class",
					"description",
					"button-text"
				])) : createCommentVNode("", true),
				createVNode(unref(ElDialog), {
					modelValue: showUnsavedChangesDialog.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showUnsavedChangesDialog.value = $event),
					title: unref(i18n).baseText("settings.sso.settings.unsavedChanges.title"),
					width: "500",
					"data-test-id": "sso-unsaved-changes-dialog"
				}, {
					footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.dialogFooter) }, [
						createVNode(unref(N8nButton_default), {
							variant: "ghost",
							"data-test-id": "sso-unsaved-keep-editing",
							onClick: onKeepEditing
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.unsavedChanges.keepEditing")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							variant: "outline",
							"data-test-id": "sso-unsaved-leave",
							onClick: onLeaveWithoutSaving
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.unsavedChanges.leaveWithoutSaving")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							variant: "solid",
							"data-test-id": "sso-unsaved-save-and-leave",
							onClick: onSaveAndLeave
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.unsavedChanges.saveAndLeave")), 1)]),
							_: 1
						})
					], 2)]),
					default: withCtx(() => [createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.unsavedChanges.message")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["modelValue", "title"])
			]);
		};
	}
});
//#endregion
//#region src/features/settings/sso/views/SettingsSso.vue?vue&type=style&index=1&lang.module.scss
var heading = "_heading_ngx1g_389";
var description = "_description_ngx1g_393";
var docLink = "_docLink_ngx1g_400";
var protocolCard = "_protocolCard_ngx1g_409";
var actionBox = "_actionBox_ngx1g_417";
var dialogFooter = "_dialogFooter_ngx1g_421";
var shimmer = "_shimmer_ngx1g_1";
var spin = "_spin_ngx1g_1";
var opacityPulse = "_opacityPulse_ngx1g_1";
var popoverIn = "_popoverIn_ngx1g_1";
var fadeIn = "_fadeIn_ngx1g_1";
var collapsibleSlideDown = "_collapsibleSlideDown_ngx1g_1";
var collapsibleSlideUp = "_collapsibleSlideUp_ngx1g_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_ngx1g_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_ngx1g_1";
var blurSwapIn = "_blurSwapIn_ngx1g_1";
var blurSwapOut = "_blurSwapOut_ngx1g_1";
var pulseGlow = "_pulseGlow_ngx1g_1";
var pulseGlowDelayed = "_pulseGlowDelayed_ngx1g_1";
var fade = "_fade_ngx1g_1";
var fadeInUp = "_fadeInUp_ngx1g_1";
var fadeInDown = "_fadeInDown_ngx1g_1";
var fadeInLeft = "_fadeInLeft_ngx1g_1";
var fadeInRight = "_fadeInRight_ngx1g_1";
var fadeOut = "_fadeOut_ngx1g_1";
var fadeOutDown = "_fadeOutDown_ngx1g_1";
var fadeOutUp = "_fadeOutUp_ngx1g_1";
var fadeOutLeft = "_fadeOutLeft_ngx1g_1";
var fadeOutRight = "_fadeOutRight_ngx1g_1";
var ping = "_ping_ngx1g_1";
var blinkBackground = "_blinkBackground_ngx1g_1";
var typingBlink = "_typingBlink_ngx1g_1";
var SettingsSso_vue_vue_type_style_index_1_lang_module_default = {
	heading,
	description,
	docLink,
	protocolCard,
	actionBox,
	dialogFooter,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_ngx1g_1",
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
var SettingsSso_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSso_vue_vue_type_script_setup_true_lang_default, [["__cssModules", {
	"shared": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default,
	"$style": SettingsSso_vue_vue_type_style_index_1_lang_module_default
}]]);
//#endregion
export { SettingsSso_default as default };
