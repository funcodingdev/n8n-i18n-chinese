import { $ as openBlock, A as createTextVNode, Bt as toRaw, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, jt as isRef, p as vShow, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { c as useAsyncState } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as TableBase_default } from "./TableBase-BhnVYm7H.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { t as N8nUserInfo_default } from "./N8nUserInfo-CeS-_dpV.js";
import "./src-C3aqUyDp.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { ai as MODAL_CONFIRM, f as CUSTOM_ROLES_DOCS_URL } from "./constants-DPRLSskW.js";
import { t as useRolesStore } from "./roles.store-CO744ciA.js";
import { n as useRoleDeletion, r as useRoleDeleteGuard, t as DeleteInstanceRoleModal_default } from "./DeleteInstanceRoleModal-M9Imy9F-.js";
import { n as RoleEditorLayout_default, t as useRoleEditorForm } from "./useRoleEditorForm-Dqfe4uEB.js";
import { c as resolveOptionState, l as toggleOptionInGroup, n as INSTANCE_SCOPE_GROUP_LIST, o as getEscalationWarningKey, r as SUPERSEDED_BY, s as isOptionImplied, t as ALL_INSTANCE_SCOPES } from "./instanceRoleScopes-BmXwJXy3.js";
//#region src/features/roles/instance/InstanceRoleAssignmentsTab.vue?vue&type=script&setup=true&lang.ts
var InstanceRoleAssignmentsTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceRoleAssignmentsTab",
	props: { roleSlug: {} },
	setup(__props) {
		const props = __props;
		const rolesStore = useRolesStore();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const { state: members, isLoading, error, execute } = useAsyncState(async () => await rolesStore.fetchRoleMembers(props.roleSlug), {
			members: [],
			total: 0
		});
		watch(() => props.roleSlug, async () => await execute());
		function roleLabel(slug) {
			return rolesStore.processedInstanceRoles.find((role) => role.slug === slug)?.displayName ?? slug;
		}
		function isCurrentUser(member) {
			return member.userId === usersStore.currentUserId;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [unref(isLoading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				rows: 3
			})) : unref(error) ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.stateBox)
			}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.assignments.fetch.error")), 1)]),
				_: 1
			})], 2)) : unref(members).members.length === 0 ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.stateBox)
			}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.assignments.emptyState")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createBlock(unref(TableBase_default), { key: 3 }, {
				default: withCtx(() => [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("roles.instance.assignments.memberColumn")), 1), createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("roles.instance.assignments.roleColumn")), 1)])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(members).members, (member) => {
					return openBlock(), createElementBlock("tr", {
						key: member.userId,
						"data-test-id": "instance-role-member-row"
					}, [createBaseVNode("td", null, [createVNode(unref(N8nUserInfo_default), {
						"first-name": member.firstName,
						"last-name": member.lastName,
						email: member.email,
						"is-current-user": isCurrentUser(member)
					}, null, 8, [
						"first-name",
						"last-name",
						"email",
						"is-current-user"
					])]), createBaseVNode("td", null, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(roleLabel(member.role)), 1)]),
						_: 2
					}, 1024)])]);
				}), 128))])]),
				_: 1
			}))], 2);
		};
	}
});
//#endregion
//#region src/features/roles/instance/InstanceRoleAssignmentsTab.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_tr46p_388";
var stateBox = "_stateBox_tr46p_392";
var shimmer = "_shimmer_tr46p_1";
var spin = "_spin_tr46p_1";
var opacityPulse = "_opacityPulse_tr46p_1";
var popoverIn = "_popoverIn_tr46p_1";
var fadeIn = "_fadeIn_tr46p_1";
var collapsibleSlideDown = "_collapsibleSlideDown_tr46p_1";
var collapsibleSlideUp = "_collapsibleSlideUp_tr46p_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_tr46p_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_tr46p_1";
var blurSwapIn = "_blurSwapIn_tr46p_1";
var blurSwapOut = "_blurSwapOut_tr46p_1";
var pulseGlow = "_pulseGlow_tr46p_1";
var pulseGlowDelayed = "_pulseGlowDelayed_tr46p_1";
var fade = "_fade_tr46p_1";
var fadeInUp = "_fadeInUp_tr46p_1";
var fadeInDown = "_fadeInDown_tr46p_1";
var fadeInLeft = "_fadeInLeft_tr46p_1";
var fadeInRight = "_fadeInRight_tr46p_1";
var fadeOut = "_fadeOut_tr46p_1";
var fadeOutDown = "_fadeOutDown_tr46p_1";
var fadeOutUp = "_fadeOutUp_tr46p_1";
var fadeOutLeft = "_fadeOutLeft_tr46p_1";
var fadeOutRight = "_fadeOutRight_tr46p_1";
var ping = "_ping_tr46p_1";
var blinkBackground = "_blinkBackground_tr46p_1";
var typingBlink = "_typingBlink_tr46p_1";
var InstanceRoleAssignmentsTab_vue_vue_type_style_index_0_lang_module_default = {
	container,
	stateBox,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_tr46p_1",
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
var InstanceRoleAssignmentsTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceRoleAssignmentsTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceRoleAssignmentsTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/instance/components/ScopeGroupSelector.vue?vue&type=script&setup=true&lang.ts
var ScopeGroupSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScopeGroupSelector",
	props: {
		modelValue: {},
		readonly: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const groups = INSTANCE_SCOPE_GROUP_LIST;
		/** data-testid must be a single value: turn "Manage own" into "manage-own". */
		function optionTestId(resource, option) {
			return `scope-option-${resource}-${option.key.toLowerCase().replace(/\s+/g, "-")}`;
		}
		function impliedTooltip(option, groupOptions) {
			const supersededByKey = SUPERSEDED_BY[option.key];
			if (!supersededByKey) return "";
			const superseding = groupOptions.find((o) => o.key === supersededByKey);
			if (!superseding) return "";
			return i18n.baseText("instanceRoles.option.includedIn", { interpolate: { option: i18n.baseText(superseding.labelKey) } });
		}
		/**
		* Tooltip shown for a permission option. When the option is implied by another
		* (e.g. "Manage own" under a checked "Manage all") the "Included in …" note
		* takes precedence; otherwise it explains what the permission grants.
		*/
		function optionTooltip(option, groupOptions) {
			if (isOptionImplied(option, groupOptions, props.modelValue)) return impliedTooltip(option, groupOptions);
			return option.descriptionKey ? i18n.baseText(option.descriptionKey) : "";
		}
		function onToggle(option, groupOptions) {
			if (props.readonly) return;
			if (isOptionImplied(option, groupOptions, props.modelValue)) return;
			emit("update:modelValue", toggleOptionInGroup(props.modelValue, option, groupOptions));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.cardContainer) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(groups), (group) => {
				return openBlock(), createElementBlock("div", {
					key: group.resource,
					class: normalizeClass(_ctx.$style.card)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardTitle) }, toDisplayString(unref(i18n).baseText(group.labelKey)), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionList) }, [__props.loading ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 0,
					rows: group.options.length,
					"shrink-last": false
				}, null, 8, ["rows"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(group.options, (option) => {
					return openBlock(), createBlock(unref(N8nTooltip_default), {
						key: option.key,
						content: optionTooltip(option, group.options),
						disabled: !optionTooltip(option, group.options),
						placement: "right",
						enterable: false,
						"show-after": 250
					}, {
						default: withCtx(() => [createVNode(unref(Checkbox_default), {
							"data-test-id": optionTestId(group.resource, option),
							label: unref(i18n).baseText(option.labelKey),
							"model-value": unref(resolveOptionState)(option, group.options, __props.modelValue) === "checked",
							indeterminate: unref(resolveOptionState)(option, group.options, __props.modelValue) === "indeterminate",
							disabled: __props.readonly || unref(isOptionImplied)(option, group.options, __props.modelValue),
							class: normalizeClass(_ctx.$style.checkbox),
							"onUpdate:modelValue": ($event) => onToggle(option, group.options)
						}, null, 8, [
							"data-test-id",
							"label",
							"model-value",
							"indeterminate",
							"disabled",
							"class",
							"onUpdate:modelValue"
						])]),
						_: 2
					}, 1032, ["content", "disabled"]);
				}), 128)), !__props.readonly && unref(getEscalationWarningKey)(group.resource, __props.modelValue) ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 2,
					theme: "warning",
					class: normalizeClass(_ctx.$style.warning),
					"data-test-id": `scope-escalation-warning-${group.resource}`
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: unref(getEscalationWarningKey)(group.resource, __props.modelValue),
						scope: "global"
					}, {
						link: withCtx(() => [createVNode(unref(N8nLink_default), {
							href: unref(CUSTOM_ROLES_DOCS_URL),
							"new-window": true,
							size: "small",
							theme: "secondary",
							bold: true,
							underline: true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceRoles.warning.viewDocs")), 1)]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					}, 8, ["keypath"])]),
					_: 2
				}, 1032, ["class", "data-test-id"])) : createCommentVNode("", true)], 2)], 2);
			}), 128))], 2);
		};
	}
});
var ScopeGroupSelector_vue_vue_type_style_index_0_lang_module_default = {
	cardContainer: "_cardContainer_1tpb8_2",
	card: "_card_1tpb8_2",
	cardTitle: "_cardTitle_1tpb8_20",
	optionList: "_optionList_1tpb8_25",
	checkbox: "_checkbox_1tpb8_32",
	warning: "_warning_1tpb8_36"
};
var ScopeGroupSelector_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ScopeGroupSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ScopeGroupSelector_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/instance/InstanceRoleView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "mb-l"
};
var _hoisted_2 = {
	key: 1,
	class: "mt-xl"
};
var _hoisted_3 = { key: 1 };
var InstanceRoleView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceRoleView",
	props: { roleSlug: {} },
	setup(__props) {
		const rolesStore = useRolesStore();
		const router = useRouter();
		const { deleteBlockedReason } = useRoleDeleteGuard();
		const { showMessage, showError } = useToast();
		const i18n = useI18n();
		const message = useMessage();
		const telemetry = useTelemetry();
		const { reassignState, requestDelete, confirmReassignDelete, cancelReassign } = useRoleDeletion();
		const props = __props;
		const { activeTab, tabOptions, form, isLoading, initialState, isReadOnly, isNew, showEditButtons, showCreateButton, hasUnsavedChanges, displayNameValidationRules, submitted, validateOnSubmit, resetForm } = useRoleEditorForm({
			roleSlug: () => props.roleSlug,
			viewRoute: VIEWS.INSTANCE_ROLE_VIEW,
			filterScopes: (scopes) => scopes.filter((s) => ALL_INSTANCE_SCOPES.includes(s)),
			fetchError: i18n.baseText("roles.instance.action.fetch.error")
		});
		const editorLabels = computed(() => ({
			newRoleTitle: i18n.baseText("roles.instance.newRole"),
			roleName: i18n.baseText("projectRoles.roleName"),
			description: i18n.baseText("projectRoles.description"),
			optional: i18n.baseText("projectRoles.optional"),
			systemRoleNotEditable: i18n.baseText("projectRoles.systemRoleNotEditable"),
			discardChanges: i18n.baseText("projectRoles.discardChanges"),
			save: i18n.baseText("projectRoles.save"),
			create: i18n.baseText("projectRoles.create")
		}));
		const presetRoles = computed(() => rolesStore.processedInstanceRoles.filter((r) => r.systemRole && r.slug === "global:admin"));
		const reassignTargetRoles = computed(() => rolesStore.processedInstanceRoles.filter((r) => r.slug !== reassignState.value?.role.slug));
		const deleteBlockedTooltip = computed(() => initialState.value ? deleteBlockedReason(initialState.value, "global") : void 0);
		const isDeleteDisabled = computed(() => Boolean(deleteBlockedTooltip.value));
		function onBackClick() {
			router.push({
				name: VIEWS.ROLES_SETTINGS,
				query: { tab: "instance" }
			});
		}
		function setPreset(slug) {
			const preset = rolesStore.processedInstanceRoles.find((role) => role.slug === slug);
			if (!preset) return;
			form.value.scopes = structuredClone(toRaw(preset.scopes)).filter((s) => ALL_INSTANCE_SCOPES.includes(s));
		}
		async function createInstanceRole() {
			if (!validateOnSubmit("roles.instance.action.create.error")) return;
			try {
				const role = await rolesStore.createRole({
					displayName: form.value.displayName,
					description: form.value.description ?? void 0,
					scopes: form.value.scopes,
					roleType: "global"
				});
				rolesStore.fetchRoles();
				telemetry.track("User successfully created new role", {
					role_id: role.slug,
					role_name: role.displayName,
					role_type: "instance",
					permissions: role.scopes
				});
				router.replace({
					name: VIEWS.INSTANCE_ROLE_SETTINGS,
					params: { roleSlug: role.slug }
				});
				showMessage({
					type: "success",
					message: i18n.baseText("roles.instance.action.create.success")
				});
				initialState.value = structuredClone(role);
				return role;
			} catch (error) {
				showError(error, i18n.baseText("roles.instance.action.create.error"));
				return;
			}
		}
		async function confirmRoleUpdate(slug) {
			const usedByUsers = await rolesStore.fetchRoleBySlug({ slug }).then((role) => role.usedByUsers).catch(() => initialState.value?.usedByUsers);
			if (!usedByUsers) return true;
			return await message.confirm(i18n.baseText("roles.instance.action.update.text", {
				interpolate: { count: usedByUsers },
				adjustToNumber: usedByUsers
			}), i18n.baseText("roles.instance.action.update.title"), {
				type: "warning",
				confirmButtonText: i18n.baseText("projectRoles.action.update"),
				cancelButtonText: i18n.baseText("roles.action.cancel")
			}) === MODAL_CONFIRM;
		}
		async function updateInstanceRole(slug) {
			if (!await confirmRoleUpdate(slug)) return;
			try {
				const role = await rolesStore.updateRole(slug, {
					displayName: form.value.displayName,
					description: form.value.description ?? void 0,
					scopes: form.value.scopes
				});
				rolesStore.fetchRoles();
				telemetry.track("User updated role", {
					role_id: role.slug,
					role_name: role.displayName,
					role_type: "instance",
					permissions_from: initialState.value?.scopes,
					permissions_to: role.scopes
				});
				initialState.value = structuredClone(role);
				showMessage({
					type: "success",
					message: i18n.baseText("roles.instance.action.update.success")
				});
				return role;
			} catch (error) {
				showError(error, i18n.baseText("roles.instance.action.update.error"));
				return;
			}
		}
		async function handleSubmit() {
			if (props.roleSlug) await updateInstanceRole(props.roleSlug);
			else await createInstanceRole();
		}
		async function deleteRole() {
			if (!initialState.value) return;
			await requestDelete(initialState.value, {
				roleType: "global",
				redirectTo: {
					name: VIEWS.ROLES_SETTINGS,
					query: { tab: "instance" }
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(RoleEditorLayout_default, {
				"display-name": unref(form).displayName,
				"onUpdate:displayName": _cache[3] || (_cache[3] = ($event) => unref(form).displayName = $event),
				description: unref(form).description,
				"onUpdate:description": _cache[4] || (_cache[4] = ($event) => unref(form).description = $event),
				"is-new": unref(isNew),
				"is-read-only": unref(isReadOnly),
				"show-edit-buttons": unref(showEditButtons),
				"show-create-button": unref(showCreateButton),
				"has-unsaved-changes": unref(hasUnsavedChanges),
				"back-button-text": unref(i18n).baseText("roles.instance.backToRoles"),
				labels: editorLabels.value,
				"display-name-validation-rules": unref(displayNameValidationRules),
				"show-display-name-error": unref(submitted),
				onBack: onBackClick,
				onSave: handleSubmit,
				onDiscard: _cache[5] || (_cache[5] = ($event) => unref(resetForm)(unref(initialState))),
				onCreate: handleSubmit
			}, {
				default: withCtx(() => [
					__props.roleSlug ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nTabs_default), {
						modelValue: unref(activeTab),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(activeTab) ? activeTab.value = $event : null),
						options: unref(tabOptions)
					}, null, 8, ["modelValue", "options"])])) : createCommentVNode("", true),
					withDirectives(createBaseVNode("div", null, [
						!unref(isReadOnly) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
							color: "text-light",
							class: "mb-2xs",
							tag: "p"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.preset")), 1)]),
							_: 1
						}), createBaseVNode("div", { class: normalizeClass(["mb-s", _ctx.$style.presetsContainer]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(presetRoles.value, (preset) => {
							return openBlock(), createBlock(unref(N8nButton_default), {
								key: preset.slug,
								variant: "subtle",
								"data-test-id": `role-preset-${preset.slug}`,
								onClick: ($event) => setPreset(preset.slug)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(preset.displayName), 1)]),
								_: 2
							}, 1032, ["data-test-id", "onClick"]);
						}), 128))], 2)], 64)) : createCommentVNode("", true),
						createVNode(ScopeGroupSelector_default, {
							modelValue: unref(form).scopes,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).scopes = $event),
							readonly: unref(isReadOnly),
							loading: unref(isLoading)
						}, null, 8, [
							"modelValue",
							"readonly",
							"loading"
						]),
						__props.roleSlug && !unref(isReadOnly) ? (openBlock(), createElementBlock("div", _hoisted_2, [
							createVNode(unref(N8nHeading_default), {
								tag: "h2",
								class: "mb-2xs",
								size: "large"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.dangerZone")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								tag: "p",
								class: "mb-s"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.action.delete.warning")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nTooltip_default), {
								disabled: !isDeleteDisabled.value,
								placement: "top-start",
								"content-class": "instanceRoleDeleteTooltip",
								content: deleteBlockedTooltip.value
							}, {
								default: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "destructive",
									disabled: isDeleteDisabled.value,
									onClick: deleteRole
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.action.delete.button")), 1)]),
									_: 1
								}, 8, ["disabled"])]),
								_: 1
							}, 8, ["disabled", "content"])
						])) : createCommentVNode("", true)
					], 512), [[vShow, !__props.roleSlug || unref(activeTab) === "permissions"]]),
					__props.roleSlug && unref(activeTab) === "assignments" ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(InstanceRoleAssignmentsTab_default, { "role-slug": __props.roleSlug }, null, 8, ["role-slug"])])) : createCommentVNode("", true),
					createVNode(DeleteInstanceRoleModal_default, {
						"model-value": unref(reassignState) !== null,
						role: unref(reassignState)?.role ?? null,
						"user-count": unref(reassignState)?.userCount ?? 0,
						"available-roles": reassignTargetRoles.value,
						onConfirm: unref(confirmReassignDelete),
						"onUpdate:modelValue": _cache[2] || (_cache[2] = (open) => !open && unref(cancelReassign)())
					}, null, 8, [
						"model-value",
						"role",
						"user-count",
						"available-roles",
						"onConfirm"
					])
				]),
				_: 1
			}, 8, [
				"display-name",
				"description",
				"is-new",
				"is-read-only",
				"show-edit-buttons",
				"show-create-button",
				"has-unsaved-changes",
				"back-button-text",
				"labels",
				"display-name-validation-rules",
				"show-display-name-error"
			]);
		};
	}
});
var InstanceRoleView_vue_vue_type_style_index_0_lang_module_default = { presetsContainer: "_presetsContainer_1a5k5_2" };
var InstanceRoleView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceRoleView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceRoleView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceRoleView_default as default };
