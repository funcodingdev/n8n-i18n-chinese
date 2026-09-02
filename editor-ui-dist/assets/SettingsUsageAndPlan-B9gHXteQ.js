import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bn as normalizeStyle, bt as withCtx, h as withModifiers, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, i as i18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as ElDialog } from "./dialog-BWWCBb2k.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nInfoTip_default } from "./N8nInfoTip-BB_z6D-l.js";
import { va as getResourcePermissions } from "./src-DAIlllTg.js";
import { t as useUsersStore } from "./users.store-C9pohnYN.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-Dx1UCP52.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { _ as COMMUNITY_PLUS_ENROLLMENT_MODAL, n as useUIStore } from "./ui.store-Bnte4owf.js";
import { t as hasPermission } from "./permissions-CL97eZ0v.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { t as useUsageStore } from "./usage.store-Bw05ykAn.js";
import { n as telemetry } from "./telemetry-Cf9EZWDY.js";
//#region src/features/settings/usage/components/EulaAcceptanceModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["href"];
var EulaAcceptanceModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EulaAcceptanceModal",
	props: {
		modelValue: { type: Boolean },
		eulaUrl: {}
	},
	emits: [
		"update:modelValue",
		"accept",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const accepted = ref(false);
		const isAcceptDisabled = computed(() => !accepted.value);
		const onCancel = () => {
			accepted.value = false;
			emit("cancel");
		};
		const onAccept = () => {
			emit("accept");
		};
		const onClose = () => {
			emit("update:modelValue", false);
			onCancel();
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				"model-value": __props.modelValue,
				title: unref(i18n).baseText("settings.usageAndPlan.dialog.eula.title"),
				"before-close": onClose,
				width: "540px",
				"data-test-id": "eula-acceptance-modal"
			}, {
				default: withCtx(() => [createBaseVNode("div", null, [
					createVNode(unref(N8nText_default), {
						color: "text-base",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.auditNotice),
						color: "text-base",
						size: "medium",
						tag: "p"
					}, {
						default: withCtx(() => [createBaseVNode("em", null, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.audit.notice")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxWrapper) }, [createVNode(unref(Checkbox_default), {
						modelValue: accepted.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => accepted.value = $event),
						"data-test-id": "eula-checkbox"
					}, {
						label: withCtx(() => [createBaseVNode("span", null, [
							createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.checkbox.label")) + " " + toDisplayString(" ") + " ", 1),
							createBaseVNode("a", {
								href: __props.eulaUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								"data-test-id": "eula-link"
							}, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.link.text")), 9, _hoisted_1$1),
							_cache[1] || (_cache[1] = createTextVNode(". ", -1))
						])]),
						_: 1
					}, 8, ["modelValue"])], 2)
				])]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "eula-cancel-button",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.button.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: isAcceptDisabled.value,
					"data-test-id": "eula-accept-button",
					onClick: onAccept
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.button.accept")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["model-value", "title"]);
		};
	}
});
//#endregion
//#region src/features/settings/usage/components/EulaAcceptanceModal.vue?vue&type=style&index=0&lang.module.scss
var auditNotice = "_auditNotice_1q3rh_388";
var checkboxWrapper = "_checkboxWrapper_1q3rh_392";
var footerActions = "_footerActions_1q3rh_396";
var shimmer$1 = "_shimmer_1q3rh_1";
var spin$1 = "_spin_1q3rh_1";
var opacityPulse$1 = "_opacityPulse_1q3rh_1";
var popoverIn$1 = "_popoverIn_1q3rh_1";
var fadeIn$1 = "_fadeIn_1q3rh_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1q3rh_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1q3rh_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1q3rh_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1q3rh_1";
var blurSwapIn$1 = "_blurSwapIn_1q3rh_1";
var blurSwapOut$1 = "_blurSwapOut_1q3rh_1";
var pulseGlow$1 = "_pulseGlow_1q3rh_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1q3rh_1";
var fade$1 = "_fade_1q3rh_1";
var fadeInUp$1 = "_fadeInUp_1q3rh_1";
var fadeInDown$1 = "_fadeInDown_1q3rh_1";
var fadeInLeft$1 = "_fadeInLeft_1q3rh_1";
var fadeInRight$1 = "_fadeInRight_1q3rh_1";
var fadeOut$1 = "_fadeOut_1q3rh_1";
var fadeOutDown$1 = "_fadeOutDown_1q3rh_1";
var fadeOutUp$1 = "_fadeOutUp_1q3rh_1";
var fadeOutLeft$1 = "_fadeOutLeft_1q3rh_1";
var fadeOutRight$1 = "_fadeOutRight_1q3rh_1";
var ping$1 = "_ping_1q3rh_1";
var blinkBackground$1 = "_blinkBackground_1q3rh_1";
var typingBlink$1 = "_typingBlink_1q3rh_1";
var EulaAcceptanceModal_vue_vue_type_style_index_0_lang_module_default = {
	auditNotice,
	checkboxWrapper,
	footerActions,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1q3rh_1",
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
var EulaAcceptanceModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EulaAcceptanceModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EulaAcceptanceModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/usage/views/SettingsUsageAndPlan.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "settings-usage-and-plan" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = { key: 1 };
var _hoisted_5 = { key: 0 };
var _hoisted_6 = { key: 1 };
var _hoisted_7 = ["href"];
var _hoisted_8 = ["href"];
var SettingsUsageAndPlan_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsageAndPlan",
	setup(__props) {
		const usageStore = useUsageStore();
		const route = useRoute();
		const router = useRouter();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const queryParamCallback = ref(`callback=${encodeURIComponent(`${window.location.origin}${window.location.pathname}`)}`);
		const viewPlansUrl = computed(() => `${usageStore.viewPlansUrl}&${queryParamCallback.value}&source=usage_page`);
		const managePlanUrl = computed(() => `${usageStore.managePlanUrl}&${queryParamCallback.value}`);
		const activationKeyModal = ref(false);
		const activationKey = ref("");
		const activationKeyInput = ref(null);
		const eulaModal = ref(false);
		const eulaUrl = ref("");
		const canUserActivateLicense = computed(() => hasPermission(["rbac"], { rbac: { scope: "license:manage" } }));
		const badgedPlanName = computed(() => {
			const [badge, name] = usageStore.planName.split(" ");
			return {
				name,
				badge
			};
		});
		const isCommunity = computed(() => usageStore.planName.toLowerCase() === "community");
		const isCommunityEditionRegistered = computed(() => usageStore.planName.toLowerCase() === "registered community");
		const canUserRegisterCommunityPlus = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).community.register);
		const showActivationSuccess = (eulaAccepted = false) => {
			const message = eulaAccepted ? i18n.baseText("settings.usageAndPlan.license.activation.success.message.eula", { interpolate: { name: usageStore.planName } }) : i18n.baseText("settings.usageAndPlan.license.activation.success.message", { interpolate: {
				name: usageStore.planName,
				type: usageStore.planId ? i18n.baseText("settings.usageAndPlan.plan") : i18n.baseText("settings.usageAndPlan.edition")
			} });
			toast.showMessage({
				type: "success",
				title: i18n.baseText("settings.usageAndPlan.license.activation.success.title"),
				message
			});
		};
		const showActivationError = (error) => {
			toast.showError(error, i18n.baseText("settings.usageAndPlan.license.activation.error.title"));
		};
		const isEulaError = (error) => {
			const e = error;
			return e.httpStatusCode === 400 && !!e.meta?.eulaUrl;
		};
		const onLicenseActivation = async (eulaUri) => {
			try {
				await usageStore.activateLicense(activationKey.value.trim(), eulaUri?.trim());
				activationKeyModal.value = false;
				eulaModal.value = false;
				activationKey.value = "";
				showActivationSuccess(!!eulaUri);
			} catch (error) {
				if (isEulaError(error)) {
					eulaUrl.value = error.meta.eulaUrl;
					eulaModal.value = true;
					activationKeyModal.value = false;
					return;
				}
				showActivationError(error);
			}
		};
		const onEulaAccept = async () => {
			try {
				await onLicenseActivation(eulaUrl.value);
			} catch (error) {
				eulaModal.value = false;
				showActivationError(error);
			}
		};
		const onEulaCancel = () => {
			eulaModal.value = false;
			eulaUrl.value = "";
			activationKey.value = "";
		};
		const onActivationCancel = () => {
			activationKeyModal.value = false;
			activationKey.value = "";
		};
		const onActivationModalClose = () => {
			if (!eulaModal.value) onActivationCancel();
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.usageAndPlan.title"));
			usageStore.setLoading(true);
			if (route.query.key) try {
				await usageStore.activateLicense(route.query.key);
				await router.replace({ query: {} });
				showActivationSuccess();
				usageStore.setLoading(false);
				return;
			} catch (error) {
				showActivationError(error);
			}
			try {
				if (!route.query.key && canUserActivateLicense.value) await usageStore.refreshLicenseManagementToken();
				else await usageStore.getLicenseInfo();
				usageStore.setLoading(false);
			} catch (error) {
				if (!error.name) error.name = i18n.baseText("settings.usageAndPlan.error");
				toast.showError(error, error.name, { message: error.message });
			}
		});
		const sendUsageTelemetry = (action) => {
			const telemetryPayload = usageStore.telemetryPayload;
			telemetryPayload.action = action;
			telemetry.track("User clicked button on usage page", telemetryPayload);
		};
		const onAddActivationKey = () => {
			activationKeyModal.value = true;
			sendUsageTelemetry("add_activation_key");
		};
		const onViewPlans = () => {
			pageRedirectionHelper.goToUpgrade("usage_page", "open");
			sendUsageTelemetry("view_plans");
		};
		const onManagePlan = () => {
			sendUsageTelemetry("manage_plan");
		};
		const onDialogOpened = () => {
			activationKeyInput.value?.focus();
		};
		const openCommunityRegisterModal = () => {
			uiStore.openModalWithData({
				name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
				data: { customHeading: void 0 }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "2xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.title")), 1)]),
				_: 1
			}), !unref(usageStore).isLoading ? (openBlock(), createElementBlock("div", _hoisted_2, [
				createVNode(unref(N8nHeading_default), {
					tag: "h3",
					class: normalizeClass(_ctx.$style.title),
					size: "large"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.usageAndPlan.description",
						tag: "span",
						scope: "global"
					}, {
						name: withCtx(() => [createTextVNode(toDisplayString(badgedPlanName.value.name ?? unref(usageStore).planName), 1)]),
						type: withCtx(() => [unref(usageStore).planId ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.plan")), 1)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.edition")), 1))]),
						_: 1
					}), badgedPlanName.value.badge && badgedPlanName.value.name ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.titleTooltip)
					}, [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
						content: withCtx(() => [isCommunityEditionRegistered.value ? (openBlock(), createBlock(unref(I18nT), {
							key: 0,
							keypath: "settings.usageAndPlan.license.communityRegistered.tooltip",
							scope: "global"
						})) : createCommentVNode("", true)]),
						default: withCtx(() => [createVNode(unref(N8nBadge_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(badgedPlanName.value.badge), 1)]),
							_: 1
						})]),
						_: 1
					})], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["class"]),
				isCommunity.value && canUserRegisterCommunityPlus.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					class: "mt-0",
					theme: "warning"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.usageAndPlan.callOut",
						scope: "global"
					}, {
						link: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							class: "pl-0 pr-0",
							label: unref(i18n).baseText("settings.usageAndPlan.callOut.link"),
							onClick: openCommunityRegisterModal
						}, null, 8, ["label"])]),
						_: 1
					})]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.quota) }, [createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chart) }, [unref(usageStore).activeWorkflowTriggersLimit > 0 ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.chartLine)
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.chartBar),
					style: normalizeStyle({ width: `${unref(usageStore).executionPercentage}%` })
				}, null, 6)], 2)) : createCommentVNode("", true), createVNode(unref(I18nT), {
					tag: "span",
					class: normalizeClass(_ctx.$style.count),
					keypath: "settings.usageAndPlan.activeWorkflows.count",
					scope: "global"
				}, {
					count: withCtx(() => [createTextVNode(toDisplayString(unref(usageStore).activeWorkflowTriggersCount), 1)]),
					limit: withCtx(() => [unref(usageStore).activeWorkflowTriggersLimit < 0 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows.unlimited")), 1)) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(usageStore).activeWorkflowTriggersLimit), 1))]),
					_: 1
				}, 8, ["class"])], 2)], 2),
				createVNode(unref(N8nInfoTip_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows.hint")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [canUserActivateLicense.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					class: normalizeClass(_ctx.$style.buttonTertiary),
					size: "large",
					onClick: onAddActivationKey
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.activation")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), unref(usageStore).managementToken ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					size: "large",
					onClick: onManagePlan
				}, {
					default: withCtx(() => [createBaseVNode("a", {
						href: managePlanUrl.value,
						target: "_blank"
					}, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.manage")), 9, _hoisted_7)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
					size: "large",
					onClick: withModifiers(onViewPlans, ["prevent"])
				}, {
					default: withCtx(() => [createBaseVNode("a", {
						href: viewPlansUrl.value,
						target: "_blank"
					}, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.plans")), 9, _hoisted_8)]),
					_: 1
				}))], 2),
				createVNode(unref(ElDialog), {
					modelValue: activationKeyModal.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => activationKeyModal.value = $event),
					width: "480px",
					top: "0",
					title: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.title"),
					"modal-class": _ctx.$style.center,
					onClosed: onActivationModalClose,
					onOpened: onDialogOpened
				}, {
					default: withCtx(() => [createVNode(unref(Input_default), {
						ref_key: "activationKeyInput",
						ref: activationKeyInput,
						modelValue: activationKey.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activationKey.value = $event),
						placeholder: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.label")
					}, null, 8, ["modelValue", "placeholder"])]),
					footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.dialogButtonsContainer) }, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						onClick: onActivationCancel
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.cancel")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						disabled: !activationKey.value,
						onClick: _cache[1] || (_cache[1] = () => onLicenseActivation())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.activate")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)]),
					_: 1
				}, 8, [
					"modelValue",
					"title",
					"modal-class"
				]),
				createVNode(EulaAcceptanceModal_default, {
					modelValue: eulaModal.value,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => eulaModal.value = $event),
					"eula-url": eulaUrl.value,
					onAccept: onEulaAccept,
					onCancel: onEulaCancel
				}, null, 8, ["modelValue", "eula-url"])
			])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/features/settings/usage/views/SettingsUsageAndPlan.vue?vue&type=style&index=0&lang.module.scss
var center = "_center_y727f_388";
var actionBox = "_actionBox_y727f_392";
var spacedFlex = "_spacedFlex_y727f_396";
var title = "_title_y727f_402";
var quota = "_quota_y727f_408";
var count = "_count_y727f_420";
var buttons = "_buttons_y727f_425";
var chart = "_chart_y727f_441";
var chartLine = "_chartLine_y727f_448";
var chartBar = "_chartBar_y727f_458";
var titleTooltip = "_titleTooltip_y727f_472";
var dialogButtonsContainer = "_dialogButtonsContainer_y727f_478";
var shimmer = "_shimmer_y727f_1";
var spin = "_spin_y727f_1";
var opacityPulse = "_opacityPulse_y727f_1";
var popoverIn = "_popoverIn_y727f_1";
var fadeIn = "_fadeIn_y727f_1";
var collapsibleSlideDown = "_collapsibleSlideDown_y727f_1";
var collapsibleSlideUp = "_collapsibleSlideUp_y727f_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_y727f_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_y727f_1";
var blurSwapIn = "_blurSwapIn_y727f_1";
var blurSwapOut = "_blurSwapOut_y727f_1";
var pulseGlow = "_pulseGlow_y727f_1";
var pulseGlowDelayed = "_pulseGlowDelayed_y727f_1";
var fade = "_fade_y727f_1";
var fadeInUp = "_fadeInUp_y727f_1";
var fadeInDown = "_fadeInDown_y727f_1";
var fadeInLeft = "_fadeInLeft_y727f_1";
var fadeInRight = "_fadeInRight_y727f_1";
var fadeOut = "_fadeOut_y727f_1";
var fadeOutDown = "_fadeOutDown_y727f_1";
var fadeOutUp = "_fadeOutUp_y727f_1";
var fadeOutLeft = "_fadeOutLeft_y727f_1";
var fadeOutRight = "_fadeOutRight_y727f_1";
var ping = "_ping_y727f_1";
var blinkBackground = "_blinkBackground_y727f_1";
var typingBlink = "_typingBlink_y727f_1";
var SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default = {
	center,
	actionBox,
	spacedFlex,
	title,
	quota,
	count,
	buttons,
	chart,
	chartLine,
	chartBar,
	titleTooltip,
	dialogButtonsContainer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_y727f_1",
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
var SettingsUsageAndPlan_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsUsageAndPlan_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-d40da0ca"]]);
//#endregion
export { SettingsUsageAndPlan_default as default };
