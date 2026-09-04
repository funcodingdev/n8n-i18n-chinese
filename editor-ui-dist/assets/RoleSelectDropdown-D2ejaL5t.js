import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { n as SelectItem_default, t as Select_default } from "./Select-Oh0j1SpO.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as ElDialog } from "./dialog-BWWCBb2k.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjOArG71.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { O as APP_MODALS_ELEMENT_ID, f as CUSTOM_ROLES_DOCS_URL } from "./constants-CMdL1Kzl.js";
import { t as hasPermission } from "./permissions-CD6srtSi.js";
import { i as UI_VISIBLE_SCOPES, r as TOTAL_PROJECT_PERMISSIONS } from "./projectRoleScopes-DeUzuLdf.js";
//#region src/features/roles/components/CustomRolesUpgradeModal.vue?vue&type=script&setup=true&lang.ts
var CustomRolesUpgradeModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CustomRolesUpgradeModal",
	props: {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const visible = useModel(__props, "modelValue");
		const i18n = useI18n();
		const { goToUpgrade } = usePageRedirectionHelper();
		const onViewPlans = async () => {
			await goToUpgrade("custom-roles-selector", "upgrade-custom-roles");
			visible.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
				title: unref(i18n).baseText("projects.settings.role.upgrade.title"),
				width: "400",
				"append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`
			}, {
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					onClick: onViewPlans
				}, {
					append: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.externalIcon) }, "↗", 2)]),
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.role.upgrade.custom.viewPlans")) + " ", 1)]),
					_: 1
				})], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "medium"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "projects.settings.role.upgrade.custom.body",
						tag: "span"
					}, {
						documentation: withCtx(() => [createVNode(unref(N8nLink_default), {
							href: unref(CUSTOM_ROLES_DOCS_URL),
							"new-window": true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.documentation")), 1)]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					})]),
					_: 1
				})], 2)]),
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
//#region src/features/roles/components/CustomRolesUpgradeModal.vue?vue&type=style&index=0&lang.module.scss
var content$1 = "_content_grkpk_388";
var footer = "_footer_grkpk_392";
var externalIcon$1 = "_externalIcon_grkpk_398";
var shimmer$3 = "_shimmer_grkpk_1";
var spin$3 = "_spin_grkpk_1";
var opacityPulse$3 = "_opacityPulse_grkpk_1";
var popoverIn$3 = "_popoverIn_grkpk_1";
var fadeIn$3 = "_fadeIn_grkpk_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_grkpk_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_grkpk_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_grkpk_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_grkpk_1";
var blurSwapIn$3 = "_blurSwapIn_grkpk_1";
var blurSwapOut$3 = "_blurSwapOut_grkpk_1";
var pulseGlow$3 = "_pulseGlow_grkpk_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_grkpk_1";
var fade$3 = "_fade_grkpk_1";
var fadeInUp$3 = "_fadeInUp_grkpk_1";
var fadeInDown$3 = "_fadeInDown_grkpk_1";
var fadeInLeft$3 = "_fadeInLeft_grkpk_1";
var fadeInRight$3 = "_fadeInRight_grkpk_1";
var fadeOut$3 = "_fadeOut_grkpk_1";
var fadeOutDown$3 = "_fadeOutDown_grkpk_1";
var fadeOutUp$3 = "_fadeOutUp_grkpk_1";
var fadeOutLeft$3 = "_fadeOutLeft_grkpk_1";
var fadeOutRight$3 = "_fadeOutRight_grkpk_1";
var ping$3 = "_ping_grkpk_1";
var blinkBackground$3 = "_blinkBackground_grkpk_1";
var typingBlink$3 = "_typingBlink_grkpk_1";
var CustomRolesUpgradeModal_vue_vue_type_style_index_0_lang_module_default = {
	content: content$1,
	footer,
	externalIcon: externalIcon$1,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_grkpk_1",
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
var CustomRolesUpgradeModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CustomRolesUpgradeModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CustomRolesUpgradeModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/components/RoleHoverPopover.vue?vue&type=script&setup=true&lang.ts
var RoleHoverPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleHoverPopover",
	props: {
		role: {},
		permissionCount: { default: void 0 },
		totalPermissions: { default: void 0 },
		editRouteName: { default: VIEWS.PROJECT_ROLE_SETTINGS },
		viewRouteName: { default: VIEWS.PROJECT_ROLE_VIEW },
		fromView: { default: VIEWS.PROJECT_SETTINGS }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const settingsStore = useSettingsStore();
		const upgradeModalVisible = ref(false);
		const canManageRoles = computed(() => hasPermission(["rbac"], { rbac: { scope: "role:manage" } }));
		const canEditRole = computed(() => canManageRoles.value && !props.role.systemRole);
		const resolvedPermissionCount = computed(() => props.permissionCount ?? props.role.scopes?.filter((scope) => UI_VISIBLE_SCOPES.has(scope)).length ?? 0);
		const resolvedTotalPermissions = computed(() => props.totalPermissions ?? TOTAL_PROJECT_PERMISSIONS);
		const buttonText = computed(() => canEditRole.value ? i18n.baseText("projects.settings.role.popover.viewAndEdit") : i18n.baseText("projects.settings.role.popover.viewDetails"));
		const onButtonClick = () => {
			if (!settingsStore.isCustomRolesFeatureEnabled) {
				upgradeModalVisible.value = true;
				return;
			}
			router.push({
				name: canEditRole.value ? props.editRouteName : props.viewRouteName,
				params: { roleSlug: props.role.slug },
				query: { from: props.fromView }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(N8nTooltip_default), {
				placement: "right",
				"show-after": 300,
				enterable: true,
				offset: 1,
				"content-class": "role-hover-popover"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popoverContent) }, [
					createVNode(unref(N8nText_default), {
						tag: "div",
						bold: true,
						size: "large",
						class: normalizeClass(_ctx.$style.roleName)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.role.displayName), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "div",
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.permissionCount)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.role.selector.permissionCount", { interpolate: {
							count: String(resolvedPermissionCount.value),
							total: String(resolvedTotalPermissions.value)
						} })), 1)]),
						_: 1
					}, 8, ["class"]),
					__props.role.description ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						tag: "div",
						size: "small",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.role.description), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						class: normalizeClass(_ctx.$style.actionButton),
						disabled: !canManageRoles.value,
						onClick: onButtonClick
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(buttonText.value) + " ", 1), createVNode(unref(N8nIcon_default), {
							icon: "arrow-up-right",
							size: "large",
							class: normalizeClass(_ctx.$style.externalIcon)
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["class", "disabled"])
				], 2)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}), createVNode(CustomRolesUpgradeModal_default, {
				modelValue: upgradeModalVisible.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => upgradeModalVisible.value = $event)
			}, null, 8, ["modelValue"])], 64);
		};
	}
});
//#endregion
//#region src/features/roles/components/RoleHoverPopover.vue?vue&type=style&index=0&lang.module.scss
var popoverContent = "_popoverContent_1pdqw_388";
var roleName = "_roleName_1pdqw_393";
var permissionCount = "_permissionCount_1pdqw_397";
var description = "_description_1pdqw_401";
var actionButton = "_actionButton_1pdqw_405";
var externalIcon = "_externalIcon_1pdqw_411";
var shimmer$2 = "_shimmer_1pdqw_1";
var spin$2 = "_spin_1pdqw_1";
var opacityPulse$2 = "_opacityPulse_1pdqw_1";
var popoverIn$2 = "_popoverIn_1pdqw_1";
var fadeIn$2 = "_fadeIn_1pdqw_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1pdqw_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1pdqw_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1pdqw_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1pdqw_1";
var blurSwapIn$2 = "_blurSwapIn_1pdqw_1";
var blurSwapOut$2 = "_blurSwapOut_1pdqw_1";
var pulseGlow$2 = "_pulseGlow_1pdqw_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1pdqw_1";
var fade$2 = "_fade_1pdqw_1";
var fadeInUp$2 = "_fadeInUp_1pdqw_1";
var fadeInDown$2 = "_fadeInDown_1pdqw_1";
var fadeInLeft$2 = "_fadeInLeft_1pdqw_1";
var fadeInRight$2 = "_fadeInRight_1pdqw_1";
var fadeOut$2 = "_fadeOut_1pdqw_1";
var fadeOutDown$2 = "_fadeOutDown_1pdqw_1";
var fadeOutUp$2 = "_fadeOutUp_1pdqw_1";
var fadeOutLeft$2 = "_fadeOutLeft_1pdqw_1";
var fadeOutRight$2 = "_fadeOutRight_1pdqw_1";
var ping$2 = "_ping_1pdqw_1";
var blinkBackground$2 = "_blinkBackground_1pdqw_1";
var typingBlink$2 = "_typingBlink_1pdqw_1";
var RoleHoverPopover_vue_vue_type_style_index_0_lang_module_default = {
	popoverContent,
	roleName,
	permissionCount,
	description,
	actionButton,
	externalIcon,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1pdqw_1",
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
var RoleHoverPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RoleHoverPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleHoverPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/components/RoleContactAdminModal.vue?vue&type=script&setup=true&lang.ts
var RoleContactAdminModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleContactAdminModal",
	props: /* @__PURE__ */ mergeModels({ customRolesExist: {
		type: Boolean,
		default: false
	} }, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const visible = useModel(__props, "modelValue");
		const i18n = useI18n();
		const titleKey = computed(() => props.customRolesExist ? "projects.settings.role.contactAdmin.titleWithRoles" : "projects.settings.role.contactAdmin.title");
		const bodyKey = computed(() => props.customRolesExist ? "projects.settings.role.contactAdmin.bodyWithRoles" : "projects.settings.role.contactAdmin.body");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
				width: "400",
				"show-close": true,
				"append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`
			}, {
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "span",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(titleKey.value)), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "medium"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: bodyKey.value,
						tag: "span"
					}, {
						documentation: withCtx(() => [createVNode(unref(N8nLink_default), {
							href: unref(CUSTOM_ROLES_DOCS_URL),
							"new-window": true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.documentation")), 1)]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					}, 8, ["keypath"])]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["modelValue", "append-to"]);
		};
	}
});
//#endregion
//#region src/features/roles/components/RoleContactAdminModal.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_739iy_388";
var shimmer$1 = "_shimmer_739iy_1";
var spin$1 = "_spin_739iy_1";
var opacityPulse$1 = "_opacityPulse_739iy_1";
var popoverIn$1 = "_popoverIn_739iy_1";
var fadeIn$1 = "_fadeIn_739iy_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_739iy_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_739iy_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_739iy_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_739iy_1";
var blurSwapIn$1 = "_blurSwapIn_739iy_1";
var blurSwapOut$1 = "_blurSwapOut_739iy_1";
var pulseGlow$1 = "_pulseGlow_739iy_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_739iy_1";
var fade$1 = "_fade_739iy_1";
var fadeInUp$1 = "_fadeInUp_739iy_1";
var fadeInDown$1 = "_fadeInDown_739iy_1";
var fadeInLeft$1 = "_fadeInLeft_739iy_1";
var fadeInRight$1 = "_fadeInRight_739iy_1";
var fadeOut$1 = "_fadeOut_739iy_1";
var fadeOutDown$1 = "_fadeOutDown_739iy_1";
var fadeOutUp$1 = "_fadeOutUp_739iy_1";
var fadeOutLeft$1 = "_fadeOutLeft_739iy_1";
var fadeOutRight$1 = "_fadeOutRight_739iy_1";
var ping$1 = "_ping_739iy_1";
var blinkBackground$1 = "_blinkBackground_739iy_1";
var typingBlink$1 = "_typingBlink_739iy_1";
var RoleContactAdminModal_vue_vue_type_style_index_0_lang_module_default = {
	content,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_739iy_1",
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
var RoleContactAdminModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RoleContactAdminModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleContactAdminModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/components/RoleSelectDropdown.vue?vue&type=script&setup=true&lang.ts
var RoleSelectDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleSelectDropdown",
	props: {
		systemRoles: {},
		customRoles: {},
		currentRole: {},
		hasCustomRolesLicense: { type: Boolean },
		canManageRoles: { type: Boolean },
		addCustomRoleRouteName: {},
		loading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		testId: { default: "role-dropdown" },
		variant: { default: "ghost" },
		placeholder: { default: void 0 },
		terminalOption: { default: void 0 },
		permissionCountFn: {
			type: Function,
			default: void 0
		},
		totalPermissions: { default: void 0 },
		editRouteName: { default: void 0 },
		viewRouteName: { default: void 0 },
		fromView: { default: void 0 }
	},
	emits: ["update:role", "system-role-upgrade-needed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const telemetry = useTelemetry();
		const dropdownOpen = ref(false);
		const contactAdminModalVisible = ref(false);
		const upgradeModalVisible = ref(false);
		const searchQuery = ref("");
		watch(dropdownOpen, (open) => {
			if (!open) {
				searchQuery.value = "";
				setTimeout(() => {
					if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
				}, 0);
			}
		});
		const closeDropdown = () => {
			dropdownOpen.value = false;
		};
		const selectedRole = computed(() => [...props.systemRoles, ...props.customRoles].find((role) => role.slug === props.currentRole));
		const selectedLabel = computed(() => {
			if (selectedRole.value) return selectedRole.value.displayName;
			if (props.terminalOption && props.currentRole === props.terminalOption.value) return props.terminalOption.label;
		});
		const filteredSystemRoles = computed(() => {
			const query = searchQuery.value.toLowerCase().trim();
			if (!query) return props.systemRoles;
			return props.systemRoles.filter((role) => role.displayName.toLowerCase().includes(query));
		});
		const filteredCustomRoles = computed(() => {
			const query = searchQuery.value.toLowerCase().trim();
			if (!query) return props.customRoles;
			return props.customRoles.filter((role) => role.displayName.toLowerCase().includes(query));
		});
		const roleItems = computed(() => {
			const items = [];
			if (filteredSystemRoles.value.length > 0) {
				items.push({
					type: "label",
					label: i18n.baseText("projects.settings.role.selector.section.system")
				});
				filteredSystemRoles.value.forEach((role) => {
					items.push({
						value: role.slug,
						label: role.displayName,
						role,
						requiresUpgrade: !role.licensed
					});
				});
			}
			if (filteredCustomRoles.value.length > 0 || !searchQuery.value && !props.hasCustomRolesLicense) {
				items.push({
					type: "label",
					label: i18n.baseText("projects.settings.role.selector.section.custom")
				});
				filteredCustomRoles.value.forEach((role) => {
					items.push({
						value: role.slug,
						label: role.displayName,
						role,
						requiresUpgrade: !role.licensed
					});
				});
			}
			if (props.terminalOption) {
				if (items.length > 0) items.push({ type: "separator" });
				items.push({
					value: props.terminalOption.value,
					label: props.terminalOption.label
				});
			}
			return items;
		});
		const onRoleSelect = (value) => {
			if (!value || typeof value !== "string") return;
			const role = [...props.systemRoles, ...props.customRoles].find((r) => r.slug === value);
			if (role && !role.licensed) {
				closeDropdown();
				if (role.systemRole) emit("system-role-upgrade-needed");
				else upgradeModalVisible.value = true;
				return;
			}
			emit("update:role", value);
		};
		const onAddCustomRoleClick = () => {
			telemetry.track("User clicked add custom role from role selector");
			closeDropdown();
			if (!props.hasCustomRolesLicense) upgradeModalVisible.value = true;
			else if (!props.canManageRoles) contactAdminModalVisible.value = true;
			else router.push({ name: props.addCustomRoleRouteName });
		};
		const isUnavailableRoleItem = (item) => item.requiresUpgrade === true;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(Select_default), {
					open: dropdownOpen.value,
					"onUpdate:open": _cache[4] || (_cache[4] = ($event) => dropdownOpen.value = $event),
					items: roleItems.value,
					"model-value": __props.currentRole,
					size: "small",
					variant: __props.variant,
					placeholder: __props.placeholder,
					position: "popper",
					disabled: __props.loading || __props.disabled,
					"content-class": _ctx.$style.roleSelectContent,
					class: normalizeClass([_ctx.$style.roleSelect, { [_ctx.$style.roleSelectGhost]: __props.variant === "ghost" }]),
					"data-test-id": __props.testId,
					"onUpdate:modelValue": onRoleSelect
				}, {
					default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: selectedLabel.value,
						disabled: !selectedLabel.value || dropdownOpen.value,
						placement: "top",
						"as-child": ""
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass([_ctx.$style.triggerContent, { [_ctx.$style.triggerContentGhost]: __props.variant === "ghost" }]) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.triggerLabel, { [_ctx.$style.placeholder]: !selectedLabel.value }]) }, toDisplayString(selectedLabel.value ?? __props.placeholder), 3), __props.loading ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "spinner",
							spin: "",
							size: "small"
						})) : createCommentVNode("", true)], 2)]),
						_: 1
					}, 8, ["content", "disabled"])]),
					header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.searchContainer) }, [createVNode(unref(Input_default), {
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						placeholder: unref(i18n).baseText("generic.search"),
						size: "medium",
						class: normalizeClass(_ctx.$style.searchInput),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
						onKeydown: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
					}, null, 8, [
						"modelValue",
						"placeholder",
						"class"
					])], 2)]),
					item: withCtx(({ item }) => [item.role ? (openBlock(), createBlock(RoleHoverPopover_default, {
						key: 0,
						role: item.role,
						"permission-count": __props.permissionCountFn ? __props.permissionCountFn(item.role) : void 0,
						"total-permissions": __props.totalPermissions,
						"edit-route-name": __props.editRouteName,
						"view-route-name": __props.viewRouteName,
						"from-view": __props.fromView
					}, {
						default: withCtx(() => [createVNode(unref(SelectItem_default), mergeProps(item, { class: _ctx.$style.selectItem }), {
							"item-label": withCtx(() => [createVNode(unref(N8nText_default), {
								tag: "span",
								size: "medium",
								color: isUnavailableRoleItem(item) ? "text-light" : "text-dark",
								class: normalizeClass(_ctx.$style.itemLabel)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
								_: 2
							}, 1032, ["color", "class"])]),
							"item-trailing": withCtx(() => [isUnavailableRoleItem(item) ? (openBlock(), createBlock(unref(N8nBadge_default), {
								key: 0,
								theme: "warning",
								class: normalizeClass(_ctx.$style.upgradeBadge)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
								_: 1
							}, 8, ["class"])) : createCommentVNode("", true)]),
							_: 2
						}, 1040, ["class"])]),
						_: 2
					}, 1032, [
						"role",
						"permission-count",
						"total-permissions",
						"edit-route-name",
						"view-route-name",
						"from-view"
					])) : (openBlock(), createBlock(unref(SelectItem_default), mergeProps({ key: 1 }, item, { class: _ctx.$style.selectItem }), null, 16, ["class"]))]),
					label: withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabelContent) }, [createTextVNode(toDisplayString(item.label) + " ", 1), item.label === unref(i18n).baseText("projects.settings.role.selector.section.custom") && !__props.hasCustomRolesLicense ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						theme: "default",
						class: normalizeClass(_ctx.$style.sectionUpgradeBadge),
						onClick: _cache[3] || (_cache[3] = withModifiers(($event) => {
							closeDropdown();
							upgradeModalVisible.value = true;
						}, ["stop"]))
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "lock",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)], 2)]),
					footer: withCtx(() => [createBaseVNode("button", {
						type: "button",
						class: normalizeClass(_ctx.$style.addCustomRoleButton),
						onClick: withModifiers(onAddCustomRoleClick, ["stop"])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "plus",
						size: "small"
					}), createVNode(unref(N8nText_default), {
						tag: "span",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.role.selector.addCustomRole")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, [
					"open",
					"items",
					"model-value",
					"variant",
					"placeholder",
					"disabled",
					"content-class",
					"class",
					"data-test-id"
				]),
				createVNode(RoleContactAdminModal_default, {
					modelValue: contactAdminModalVisible.value,
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => contactAdminModalVisible.value = $event),
					"custom-roles-exist": __props.customRoles.length > 0
				}, null, 8, ["modelValue", "custom-roles-exist"]),
				createVNode(CustomRolesUpgradeModal_default, {
					modelValue: upgradeModalVisible.value,
					"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => upgradeModalVisible.value = $event)
				}, null, 8, ["modelValue"])
			], 2);
		};
	}
});
//#endregion
//#region src/features/roles/components/RoleSelectDropdown.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1rjf4_388";
var searchContainer = "_searchContainer_1rjf4_394";
var searchInput = "_searchInput_1rjf4_398";
var roleSelect = "_roleSelect_1rjf4_406";
var roleSelectGhost = "_roleSelectGhost_1rjf4_411";
var triggerContent = "_triggerContent_1rjf4_420";
var triggerContentGhost = "_triggerContentGhost_1rjf4_428";
var triggerLabel = "_triggerLabel_1rjf4_432";
var placeholder = "_placeholder_1rjf4_439";
var itemLabel = "_itemLabel_1rjf4_443";
var selectItem = "_selectItem_1rjf4_451";
var upgradeBadge = "_upgradeBadge_1rjf4_458";
var sectionLabelContent = "_sectionLabelContent_1rjf4_463";
var sectionUpgradeBadge = "_sectionUpgradeBadge_1rjf4_469";
var addCustomRoleButton = "_addCustomRoleButton_1rjf4_476";
var roleSelectContent = "_roleSelectContent_1rjf4_492";
var shimmer = "_shimmer_1rjf4_1";
var spin = "_spin_1rjf4_1";
var opacityPulse = "_opacityPulse_1rjf4_1";
var popoverIn = "_popoverIn_1rjf4_1";
var fadeIn = "_fadeIn_1rjf4_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1rjf4_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1rjf4_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1rjf4_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1rjf4_1";
var blurSwapIn = "_blurSwapIn_1rjf4_1";
var blurSwapOut = "_blurSwapOut_1rjf4_1";
var pulseGlow = "_pulseGlow_1rjf4_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1rjf4_1";
var fade = "_fade_1rjf4_1";
var fadeInUp = "_fadeInUp_1rjf4_1";
var fadeInDown = "_fadeInDown_1rjf4_1";
var fadeInLeft = "_fadeInLeft_1rjf4_1";
var fadeInRight = "_fadeInRight_1rjf4_1";
var fadeOut = "_fadeOut_1rjf4_1";
var fadeOutDown = "_fadeOutDown_1rjf4_1";
var fadeOutUp = "_fadeOutUp_1rjf4_1";
var fadeOutLeft = "_fadeOutLeft_1rjf4_1";
var fadeOutRight = "_fadeOutRight_1rjf4_1";
var ping = "_ping_1rjf4_1";
var blinkBackground = "_blinkBackground_1rjf4_1";
var typingBlink = "_typingBlink_1rjf4_1";
var RoleSelectDropdown_vue_vue_type_style_index_0_lang_module_default = {
	container,
	searchContainer,
	searchInput,
	roleSelect,
	roleSelectGhost,
	triggerContent,
	triggerContentGhost,
	triggerLabel,
	placeholder,
	itemLabel,
	selectItem,
	upgradeBadge,
	sectionLabelContent,
	sectionUpgradeBadge,
	addCustomRoleButton,
	roleSelectContent,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1rjf4_1",
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
var RoleSelectDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RoleSelectDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleSelectDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CustomRolesUpgradeModal_default as n, RoleSelectDropdown_default as t };
