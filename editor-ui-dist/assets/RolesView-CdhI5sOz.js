import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, c as useCssModule, gt as watch, h as withModifiers, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CcR38nth.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as useMessage } from "./useMessage-B2KuXuge.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-1S4CtkrK.js";
import { t as N8nDatatable_default } from "./N8nDatatable-CXpKtDCR.js";
import { t as N8nHeading_default } from "./N8nHeading-BWV9gsOh.js";
import { c as useRouter, s as useRoute, t as RouterLink } from "./vue-router-Dl3cOHxO.js";
import { t as N8nLink_default } from "./N8nLink-DzyV3f-o.js";
import { t as N8nTag_default } from "./N8nTag-DRIEYo3D.js";
import { t as N8nTabs_default } from "./N8nTabs-D1Q6GI32.js";
import { t as useSettingsStore } from "./settings.store-ClBf6TZq.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-nKOH1E5v.js";
import { t as VIEWS } from "./views-o5a97N_l.js";
import { n as useToast } from "./useToast-pp0Nt2mU.js";
import { d as CUSTOM_ROLES_DOCS_URL } from "./constants-BP1FOJvU.js";
import { t as require_dateformat } from "./dateformat-C4T67FBC.js";
import { t as useRBACStore } from "./rbac.store-DuIB9b1a.js";
import { n as useDocumentTitle } from "./useDocumentTitle-il6HlPYJ.js";
import { t as useRolesStore } from "./roles.store-rhCe0sQR.js";
import { n as useRoleDeletion, r as useRoleDeleteGuard, t as DeleteInstanceRoleModal_default } from "./DeleteInstanceRoleModal-CGaYr7le.js";
//#region src/features/roles/components/RolesTable.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1$2 = ["onClick"];
var RolesTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RolesTable",
	props: {
		roles: {},
		showPaywall: { type: Boolean },
		countColumnTitle: {},
		countColumnKey: {},
		rowActions: { type: Function },
		getCountRoute: { type: Function }
	},
	emits: ["action", "row-click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const $style = useCssModule();
		const settingsStore = useSettingsStore();
		const { goToUpgrade } = usePageRedirectionHelper();
		const columns = computed(() => [
			{
				id: "displayName",
				path: "displayName",
				label: i18n.baseText("roles.table.name"),
				width: "400px"
			},
			{
				id: "systemRole",
				path: "systemRole",
				label: i18n.baseText("roles.table.type")
			},
			{
				id: props.countColumnKey,
				path: props.countColumnKey,
				label: props.countColumnTitle
			},
			{
				id: "updatedAt",
				path: "updatedAt",
				label: i18n.baseText("roles.table.lastEdited")
			},
			{
				id: "actions",
				path: "actions",
				label: "",
				width: "50px"
			}
		]);
		const rows = computed(() => props.roles.map((r) => ({
			...r,
			id: r.slug
		})));
		function resolveCountRoute(row) {
			return props.getCountRoute?.(row) ?? "";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [__props.showPaywall ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).paywallContainer)
			}, [
				createBaseVNode("div", { class: normalizeClass(unref($style).paywallIcons) }, [
					createBaseVNode("div", { class: normalizeClass([unref($style).iconBox, unref($style).iconBoxLeft]) }, [createVNode(unref(N8nIcon_default), {
						icon: "eye-off",
						size: 20,
						color: "foreground-xdark"
					})], 2),
					createBaseVNode("div", { class: normalizeClass([unref($style).iconBox, unref($style).iconBoxCenter]) }, [createVNode(unref(N8nIcon_default), {
						icon: "shield-user",
						size: 20,
						color: "foreground-xdark"
					})], 2),
					createBaseVNode("div", { class: normalizeClass([unref($style).iconBox, unref($style).iconBoxRight]) }, [createVNode(unref(N8nIcon_default), {
						icon: "pencil-off",
						size: 20,
						color: "foreground-xdark"
					})], 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass(unref($style).paywallText) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "medium",
					bold: true,
					align: "center"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.paywall.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					tag: "p",
					color: "text-light",
					align: "center"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.paywall.description")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(unref($style).paywallActions) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					href: unref(CUSTOM_ROLES_DOCS_URL),
					target: "_blank"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")) + " ", 1), createVNode(unref(N8nIcon_default), {
						icon: "external-link",
						size: "small"
					})]),
					_: 1
				}, 8, ["href"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(goToUpgrade)("custom-roles-list", "upgrade-custom-roles"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(settingsStore).isCloudDeployment ? unref(i18n).baseText("roles.paywall.viewPlans") : unref(i18n).baseText("generic.upgrade")), 1)]),
					_: 1
				})], 2)
			], 2)) : (openBlock(), createBlock(unref(N8nDatatable_default), {
				key: 1,
				columns: columns.value,
				rows: rows.value,
				pagination: false
			}, {
				row: withCtx(({ row }) => [createBaseVNode("tr", {
					class: normalizeClass([unref($style).tallRow, unref($style).clickableRow]),
					onClick: ($event) => emit("row-click", row)
				}, [
					createBaseVNode("td", null, [createVNode(unref(N8nText_default), {
						tag: "div",
						class: "mb-4xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(row.displayName), 1)]),
						_: 2
					}, 1024), createVNode(unref(N8nText_default), {
						tag: "div",
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(row.description), 1)]),
						_: 2
					}, 1024)]),
					createBaseVNode("td", null, [row.systemRole ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), { icon: "lock" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("roles.literal.system")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), { icon: "user-pen" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("roles.literal.custom")), 1)], 64))]),
					createBaseVNode("td", { class: normalizeClass(unref($style).countCell) }, [(row[__props.countColumnKey] ?? 0) > 0 && resolveCountRoute(row) ? (openBlock(), createBlock(unref(RouterLink), {
						key: 0,
						to: resolveCountRoute(row),
						class: normalizeClass(unref($style).countLink),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(row[__props.countColumnKey]), 1)]),
						_: 2
					}, 1032, ["to", "class"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(row[__props.countColumnKey] ?? 0), 1)], 64))], 2),
					createBaseVNode("td", null, toDisplayString(row.updatedAt && !row.systemRole ? unref(import_dateformat.default)(row.updatedAt, "d mmm, yyyy") : "—"), 1),
					createBaseVNode("td", { class: normalizeClass(unref($style).actionsCell) }, [!row.systemRole ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
						key: 0,
						actions: __props.rowActions(row),
						onAction: ($event) => emit("action", $event, row)
					}, null, 8, ["actions", "onAction"])) : createCommentVNode("", true)], 2)
				], 10, _hoisted_1$2)]),
				_: 1
			}, 8, ["columns", "rows"]))]);
		};
	}
});
var RolesTable_vue_vue_type_style_index_0_lang_module_default = {
	paywallContainer: "_paywallContainer_1n7d2_2",
	paywallIcons: "_paywallIcons_1n7d2_12",
	iconBox: "_iconBox_1n7d2_18",
	iconBoxLeft: "_iconBoxLeft_1n7d2_33",
	iconBoxCenter: "_iconBoxCenter_1n7d2_38",
	iconBoxRight: "_iconBoxRight_1n7d2_47",
	paywallText: "_paywallText_1n7d2_52",
	paywallActions: "_paywallActions_1n7d2_59",
	clickableRow: "_clickableRow_1n7d2_65",
	tallRow: "_tallRow_1n7d2_69",
	countCell: "_countCell_1n7d2_73",
	actionsCell: "_actionsCell_1n7d2_78",
	countLink: "_countLink_1n7d2_83"
};
var RolesTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RolesTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RolesTable_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-9640f41a"]]);
//#endregion
//#region src/features/roles/composables/useRolesListActions.ts
function useRolesListActions({ roleType, views, onBeforeDelete }) {
	const { showError, showMessage } = useToast();
	const rolesStore = useRolesStore();
	const i18n = useI18n();
	const { deleteBlockedReason } = useRoleDeleteGuard();
	const telemetry = useTelemetry();
	const router = useRouter();
	const { reassignState, requestDelete, confirmReassignDelete, cancelReassign } = useRoleDeletion();
	async function duplicateRole(item) {
		try {
			const displayName = i18n.baseText("roles.action.duplicate.name", { interpolate: { roleName: item.displayName } });
			const role = await rolesStore.createRole({
				displayName,
				description: item.description ?? void 0,
				roleType,
				scopes: item.scopes
			});
			rolesStore.roles[roleType].push(role);
			rolesStore.fetchRoles();
			telemetry.track("User duplicated role", {
				role_id: item.slug,
				role_name: item.displayName,
				permissions: item.scopes
			});
			showMessage({
				type: "success",
				message: i18n.baseText("roles.action.duplicate.success", { interpolate: {
					roleName: item.displayName,
					roleDuplicateName: displayName
				} })
			});
			return role;
		} catch (error) {
			showError(error, i18n.baseText("roles.action.duplicate.error"));
			return;
		}
	}
	async function deleteRole(item) {
		await requestDelete(item, {
			roleType,
			onBeforeDelete
		});
	}
	const actions = {
		duplicate: duplicateRole,
		delete: deleteRole
	};
	function rowActions(item) {
		const deleteBlocked = deleteBlockedReason(item, roleType);
		return [{
			label: i18n.baseText("roles.action.duplicate"),
			value: "duplicate"
		}, {
			label: i18n.baseText("roles.action.delete"),
			value: "delete",
			disabled: Boolean(deleteBlocked),
			tooltip: deleteBlocked
		}];
	}
	function handleAction(action, item) {
		actions[action](item);
	}
	function handleRowClick(item) {
		router.push({
			name: item.systemRole ? views.viewRoute : views.editRoute,
			params: { roleSlug: item.slug }
		});
	}
	return {
		duplicateRole,
		deleteRole,
		actions,
		rowActions,
		handleAction,
		handleRowClick,
		reassignState,
		confirmReassignDelete,
		cancelReassign
	};
}
//#endregion
//#region src/features/roles/instance/InstanceRolesView.vue
var InstanceRolesView_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceRolesView",
	setup(__props) {
		const rolesStore = useRolesStore();
		const settingsStore = useSettingsStore();
		const i18n = useI18n();
		const { rowActions, handleAction, handleRowClick, reassignState, confirmReassignDelete, cancelReassign } = useRolesListActions({
			roleType: "global",
			views: {
				viewRoute: VIEWS.INSTANCE_ROLE_VIEW,
				editRoute: VIEWS.INSTANCE_ROLE_SETTINGS
			}
		});
		const reassignTargetRoles = computed(() => reassignState.value ? rolesStore.processedInstanceRoles.filter((r) => r.slug !== reassignState.value?.role.slug) : []);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(RolesTable_default, {
				roles: unref(rolesStore).processedInstanceRoles,
				"show-paywall": !unref(settingsStore).isCustomRolesFeatureEnabled,
				"count-column-title": unref(i18n).baseText("instanceRoles.table.membersAssigned"),
				"count-column-key": "usedByUsers",
				"row-actions": unref(rowActions),
				onAction: unref(handleAction),
				onRowClick: unref(handleRowClick)
			}, null, 8, [
				"roles",
				"show-paywall",
				"count-column-title",
				"row-actions",
				"onAction",
				"onRowClick"
			]), createVNode(DeleteInstanceRoleModal_default, {
				"model-value": unref(reassignState) !== null,
				role: unref(reassignState)?.role ?? null,
				"user-count": unref(reassignState)?.userCount ?? 0,
				"available-roles": reassignTargetRoles.value,
				onConfirm: unref(confirmReassignDelete),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = (open) => !open && unref(cancelReassign)())
			}, null, 8, [
				"model-value",
				"role",
				"user-count",
				"available-roles",
				"onConfirm"
			])]);
		};
	}
});
//#endregion
//#region src/features/roles/project/ProjectRolesView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "pb-xl" };
//#endregion
//#region src/features/roles/project/ProjectRolesView.vue
var ProjectRolesView_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRolesView",
	setup(__props) {
		const rolesStore = useRolesStore();
		const router = useRouter();
		const message = useMessage();
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		function projectAssignmentsRoute(item) {
			return {
				name: item.systemRole ? VIEWS.PROJECT_ROLE_VIEW : VIEWS.PROJECT_ROLE_SETTINGS,
				params: { roleSlug: item.slug },
				query: { tab: "assignments" }
			};
		}
		async function onBeforeDelete(item) {
			if (!item.usedByProjects || item.usedByProjects === 0) return true;
			const inUseText = [i18n.baseText("projectRoles.action.delete.useWarning.before"), i18n.baseText("projectRoles.action.delete.useWarning.linkText", {
				adjustToNumber: item.usedByProjects,
				interpolate: { count: item.usedByProjects }
			})].join(" ") + ". " + i18n.baseText("projectRoles.action.delete.useWarning.after");
			if (await message.confirm(inUseText, i18n.baseText("projectRoles.action.delete.inUse.title", { interpolate: { roleName: item.displayName } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("projectRoles.action.delete.inUse.goToAssignments"),
				cancelButtonText: i18n.baseText("roles.action.cancel")
			}) === "confirm") router.push({
				name: item.systemRole ? VIEWS.PROJECT_ROLE_VIEW : VIEWS.PROJECT_ROLE_SETTINGS,
				params: { roleSlug: item.slug },
				query: { tab: "assignments" }
			});
			return false;
		}
		const { rowActions, handleAction, handleRowClick } = useRolesListActions({
			roleType: "project",
			views: {
				viewRoute: VIEWS.PROJECT_ROLE_VIEW,
				editRoute: VIEWS.PROJECT_ROLE_SETTINGS
			},
			onBeforeDelete
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(RolesTable_default, {
				roles: unref(rolesStore).processedProjectRoles,
				"show-paywall": !unref(settingsStore).isCustomRolesFeatureEnabled,
				"count-column-title": unref(i18n).baseText("projectRoles.sourceControl.table.projectsAssigned"),
				"count-column-key": "usedByProjects",
				"row-actions": unref(rowActions),
				"get-count-route": projectAssignmentsRoute,
				onAction: unref(handleAction),
				onRowClick: unref(handleRowClick)
			}, null, 8, [
				"roles",
				"show-paywall",
				"count-column-title",
				"row-actions",
				"onAction",
				"onRowClick"
			])]);
		};
	}
});
//#endregion
//#region src/features/roles/RolesView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pb-xl" };
var DEFAULT_TAB = "instance";
var RolesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RolesView",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const rolesStore = useRolesStore();
		const settingsStore = useSettingsStore();
		const { showError } = useToast();
		const rbacStore = useRBACStore();
		function normalizeTab(value) {
			return value === "project" || !rbacStore.hasScope("role:manage") ? "project" : DEFAULT_TAB;
		}
		const canManageInstanceRoles = computed(() => rbacStore.hasScope("role:manage"));
		const activeTab = ref(normalizeTab(route.query.tab));
		function addRole() {
			router.push({ name: activeTab.value === "project" ? VIEWS.PROJECT_NEW_ROLE : VIEWS.INSTANCE_NEW_ROLE });
		}
		const addRoleLabel = computed(() => i18n.baseText(activeTab.value === "project" ? "roles.addRole.project" : "roles.addRole.instance"));
		const tabOptions = computed(() => [{
			label: i18n.baseText("roles.tab.instance"),
			value: "instance",
			disabled: !canManageInstanceRoles.value,
			tooltip: canManageInstanceRoles.value ? void 0 : i18n.baseText("roles.tab.instance.disabledTooltip")
		}, {
			label: i18n.baseText("roles.tab.project"),
			value: "project"
		}]);
		watch(activeTab, (tab) => {
			if (normalizeTab(route.query.tab) !== tab) router.replace({ query: {
				...route.query,
				tab
			} });
		});
		watch(() => route.query.tab, (tab) => {
			activeTab.value = normalizeTab(tab);
		});
		onMounted(async () => {
			useDocumentTitle().set(i18n.baseText("settings.roles"));
			try {
				await rolesStore.fetchRoles();
			} catch (error) {
				showError(error, i18n.baseText("roles.fetch.error"));
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", { class: normalizeClass(["mb-m", _ctx.$style.headerTitle]) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.roles")), 1)]),
					_: 1
				}), createVNode(unref(N8nTag_default), {
					clickable: false,
					text: "New",
					class: normalizeClass(_ctx.$style.newTag)
				}, null, 8, ["class"])], 2),
				createVNode(unref(N8nText_default), {
					color: "text-base",
					class: "mb-xl",
					tag: "p"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.description")) + " ", 1), createVNode(unref(N8nLink_default), {
						href: unref(CUSTOM_ROLES_DOCS_URL),
						target: "_blank",
						"new-window": ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.description.docsLink")), 1)]),
						_: 1
					}, 8, ["href"])]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.tabsRow, "mb-l"]) }, [createVNode(unref(N8nTabs_default), {
					modelValue: activeTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
					options: tabOptions.value,
					"data-test-id": "roles-tabs"
				}, null, 8, ["modelValue", "options"]), unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					icon: "plus",
					onClick: addRole
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(addRoleLabel.value), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2),
				activeTab.value === "instance" && canManageInstanceRoles.value ? (openBlock(), createBlock(InstanceRolesView_default, { key: 0 })) : (openBlock(), createBlock(ProjectRolesView_default, { key: 1 }))
			]);
		};
	}
});
var RolesView_vue_vue_type_style_index_0_lang_module_default = {
	headerTitle: "_headerTitle_1z0lv_2",
	tabsRow: "_tabsRow_1z0lv_8",
	newTag: "_newTag_1z0lv_14"
};
var RolesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RolesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RolesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RolesView_default as default };
