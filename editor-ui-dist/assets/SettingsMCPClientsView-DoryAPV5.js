import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { i as DialogDescription_default, r as DialogHeader_default, t as DialogTitle_default } from "./DialogTitle-vvfpWO6w.js";
import { t as N8nPopover_default } from "./N8nPopover-C7WJvH2j.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as SettingsLayout_default } from "./SettingsLayout-DHeGpvCA.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-C2J-ZIx7.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { t as N8nUserInfo_default } from "./N8nUserInfo-CeS-_dpV.js";
import { t as N8nUserSelect_default } from "./N8nUserSelect-DypL4SNl.js";
import { t as N8nDataTableServer_default } from "./N8nDataTableServer-Bq1VQvhC.js";
import { ht as MCP_CLIENT_TYPE_FILTERS, mt as MCP_CLIENT_CONNECTED_PERIODS } from "./src-C3aqUyDp.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as DialogFooter_default } from "./DialogFooter-AKzGUZKF.js";
import { t as AlertDialog_default } from "./AlertDialog-CnF_GbCP.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import "./constants-DPRLSskW.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { r as require_debounce, t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { t as useRBACStore } from "./rbac.store-Ccg7Lc79.js";
import { n as useDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { t as TimeAgo_default } from "./TimeAgo-DdOhC6Ae.js";
import { t as useMcp } from "./useMcp-DjzI5beU.js";
import { l as MCP_SETTINGS_VIEW, o as MCP_DOCS_PAGE_URL } from "./mcp.constants-DyvBgGQm.js";
import { i as scopeLabel, n as getClientBrand, r as isFullAccessGrant, t as EMPTY_OAUTH_CLIENT_FILTERS } from "./clients.utils-CZbOCBN-.js";
import { t as useMCPStore } from "./mcp.store-Bn07AaYQ.js";
import { t as McpEmptyStateCard_default } from "./McpEmptyStateCard-BTxmqBRv.js";
//#region src/features/ai/mcpAccess/components/OAuthClientDetailsModal.vue?vue&type=script&setup=true&lang.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
var OAuthClientDetailsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientDetailsModal",
	props: {
		client: {},
		open: { type: Boolean }
	},
	emits: ["update:open", "revoke"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const brand = computed(() => props.client ? getClientBrand(props.client.name) : null);
		const ownerLabel = computed(() => {
			const owner = props.client?.owner;
			if (!owner) return null;
			const name = [owner.firstName, owner.lastName].filter(Boolean).join(" ");
			return name ? `${name} (${owner.email})` : owner.email;
		});
		const subtitle = computed(() => {
			const type = brand.value?.type;
			if (!type) return i18n.baseText("settings.mcp.oAuthClients.details.subtitle");
			return i18n.baseText("settings.mcp.oAuthClients.details.subtitleWithType", { interpolate: { type: i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`) } });
		});
		/** Granted scopes as human labels, listed plainly in grant order. */
		const grantedScopes = computed(() => props.client?.scopes ?? []);
		function onRevoke() {
			if (!props.client) return;
			emit("revoke", props.client);
			emit("update:open", false);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [__props.client ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.container),
					"data-test-id": "mcp-client-details-modal"
				}, [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style["icon-chip"]) }, [brand.value?.icon ? (openBlock(), createBlock(resolveDynamicComponent(brand.value.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "mcp",
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"]))], 2), createTextVNode(" " + toDisplayString(__props.client.name), 1)], 2)]),
							_: 1
						}), createVNode(unref(DialogDescription_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(subtitle.value), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [
						ownerLabel.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedBy")), 1)]),
							_: 1
						}), createVNode(unref(N8nText_default), {
							color: "text-dark",
							size: "small",
							"data-test-id": "mcp-client-details-connected-by"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(ownerLabel.value), 1)]),
							_: 1
						})], 64)) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedOn")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							color: "text-dark",
							size: "small",
							"data-test-id": "mcp-client-details-connected-on"
						}, {
							default: withCtx(() => [createVNode(TimeAgo_default, {
								date: new Date(__props.client.grantedAt).toISOString(),
								capitalize: ""
							}, null, 8, ["date"])]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.access")), 1)]),
							_: 1
						}),
						createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.access),
							"data-test-id": "mcp-client-details-access"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(grantedScopes.value, (scope) => {
							return openBlock(), createBlock(unref(N8nText_default), {
								key: scope,
								color: "text-dark",
								size: "small",
								"data-test-id": `mcp-client-details-scope-${scope}`
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(scopeLabel)(unref(i18n), scope)), 1)]),
								_: 2
							}, 1032, ["data-test-id"]);
						}), 128))], 2)
					], 2),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							"data-test-id": "mcp-client-details-close",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
							_: 1
						}), createVNode(unref(N8nButton_default), {
							variant: "destructive",
							"data-test-id": "mcp-client-details-revoke",
							onClick: onRevoke
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess")), 1)]),
							_: 1
						})]),
						_: 1
					})
				], 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/OAuthClientDetailsModal.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_m1gpe_388";
var title = "_title_m1gpe_394";
var icon = "_icon_m1gpe_400";
var details = "_details_m1gpe_420";
var access$1 = "_access_m1gpe_430";
var shimmer$3 = "_shimmer_m1gpe_1";
var spin$3 = "_spin_m1gpe_1";
var opacityPulse$3 = "_opacityPulse_m1gpe_1";
var popoverIn$3 = "_popoverIn_m1gpe_1";
var fadeIn$3 = "_fadeIn_m1gpe_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_m1gpe_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_m1gpe_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_m1gpe_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_m1gpe_1";
var blurSwapIn$3 = "_blurSwapIn_m1gpe_1";
var blurSwapOut$3 = "_blurSwapOut_m1gpe_1";
var pulseGlow$3 = "_pulseGlow_m1gpe_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_m1gpe_1";
var fade$3 = "_fade_m1gpe_1";
var fadeInUp$3 = "_fadeInUp_m1gpe_1";
var fadeInDown$3 = "_fadeInDown_m1gpe_1";
var fadeInLeft$3 = "_fadeInLeft_m1gpe_1";
var fadeInRight$3 = "_fadeInRight_m1gpe_1";
var fadeOut$3 = "_fadeOut_m1gpe_1";
var fadeOutDown$3 = "_fadeOutDown_m1gpe_1";
var fadeOutUp$3 = "_fadeOutUp_m1gpe_1";
var fadeOutLeft$3 = "_fadeOutLeft_m1gpe_1";
var fadeOutRight$3 = "_fadeOutRight_m1gpe_1";
var ping$3 = "_ping_m1gpe_1";
var blinkBackground$3 = "_blinkBackground_m1gpe_1";
var typingBlink$3 = "_typingBlink_m1gpe_1";
var OAuthClientDetailsModal_vue_vue_type_style_index_0_lang_module_default = {
	container,
	title,
	"icon-chip": "_icon-chip_m1gpe_400",
	icon,
	details,
	access: access$1,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_m1gpe_1",
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
var OAuthClientDetailsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientDetailsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientDetailsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientOwnerCell.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { "data-test-id": "mcp-client-owner-cell" };
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientOwnerCell.vue
var OAuthClientOwnerCell_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientOwnerCell",
	props: {
		owner: {},
		isCurrentUser: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(N8nUserInfo_default), {
				"first-name": __props.owner.firstName ?? "",
				"last-name": __props.owner.lastName ?? "",
				email: __props.owner.email,
				"is-current-user": __props.isCurrentUser
			}, null, 8, [
				"first-name",
				"last-name",
				"email",
				"is-current-user"
			])]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsFilters.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 1 };
var OAuthClientsFilters_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientsFilters",
	props: {
		modelValue: {},
		owners: {},
		showOwnerFilter: { type: Boolean },
		currentUserId: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const CLIENT_TYPE_OPTIONS = MCP_CLIENT_TYPE_FILTERS;
		const CONNECTED_OPTIONS = MCP_CLIENT_CONNECTED_PERIODS;
		const connectedOptionLabels = {
			last7: i18n.baseText("settings.mcp.oAuthClients.filters.connected.lastXDays", { interpolate: { count: 7 } }),
			last30: i18n.baseText("settings.mcp.oAuthClients.filters.connected.lastXDays", { interpolate: { count: 30 } }),
			older: i18n.baseText("settings.mcp.oAuthClients.filters.connected.older")
		};
		const filtersLength = computed(() => {
			const { type, ownerId, connected } = props.modelValue;
			return [
				type,
				ownerId,
				connected
			].filter((value) => value !== null).length;
		});
		const hasFilters = computed(() => filtersLength.value > 0);
		function setKeyValue(key, value) {
			emit("update:modelValue", {
				...props.modelValue,
				[key]: value === "" ? null : value
			});
		}
		function resetFilters() {
			emit("update:modelValue", {
				...props.modelValue,
				type: null,
				ownerId: null,
				connected: null
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				width: "304px",
				"content-class": _ctx.$style["popover-content"],
				align: "end"
			}, {
				trigger: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["trigger-wrapper"]) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					icon: "funnel",
					size: "medium",
					"icon-only": !hasFilters.value,
					active: hasFilters.value,
					"aria-label": unref(i18n).baseText("forms.resourceFiltersDropdown.filters"),
					"data-test-id": "mcp-clients-filters-trigger"
				}, {
					default: withCtx(() => [hasFilters.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style["filter-button-count"]),
						"data-test-id": "mcp-clients-filters-count",
						theme: "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(filtersLength.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), hasFilters.value ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 1)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"icon-only",
					"active",
					"aria-label"
				])], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["filters-dropdown"]),
					"data-test-id": "mcp-clients-filters-dropdown"
				}, [
					createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.clientType"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]),
					createVNode(unref(N8nSelect_default), {
						"model-value": __props.modelValue.type ?? "",
						size: "medium",
						"data-test-id": "mcp-clients-filter-type",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => setKeyValue("type", $event))
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "",
							label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.clientType.all")
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(CLIENT_TYPE_OPTIONS), (type) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: type,
								value: type,
								label: unref(i18n).baseText(`settings.mcp.oAuthClients.filters.clientType.${type}`)
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value"]),
					__props.showOwnerFilter ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connectedBy"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mt-s mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(N8nUserSelect_default), {
						users: __props.owners ?? [],
						"model-value": __props.modelValue.ownerId ?? "",
						"current-user-id": __props.currentUserId,
						placeholder: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connectedBy.all"),
						size: "medium",
						clearable: "",
						"data-test-id": "mcp-clients-filter-owner",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => setKeyValue("ownerId", $event ?? ""))
					}, null, 8, [
						"users",
						"model-value",
						"current-user-id",
						"placeholder"
					])], 64)) : createCommentVNode("", true),
					createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connected"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mt-s mb-3xs"
					}, null, 8, ["label"]),
					createVNode(unref(N8nSelect_default), {
						"model-value": __props.modelValue.connected ?? "",
						size: "medium",
						"data-test-id": "mcp-clients-filter-connected",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => setKeyValue("connected", $event))
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "",
							label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connected.allTime")
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(CONNECTED_OPTIONS), (period) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: period,
								value: period,
								label: connectedOptionLabels[period]
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value"]),
					hasFilters.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
					}, [createVNode(unref(N8nLink_default), {
						"data-test-id": "mcp-clients-filters-reset",
						onClick: resetFilters
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["content-class"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsFilters.vue?vue&type=style&index=0&lang.module.scss
var shimmer$2 = "_shimmer_e4so5_1";
var spin$2 = "_spin_e4so5_1";
var opacityPulse$2 = "_opacityPulse_e4so5_1";
var popoverIn$2 = "_popoverIn_e4so5_1";
var fadeIn$2 = "_fadeIn_e4so5_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_e4so5_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_e4so5_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_e4so5_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_e4so5_1";
var blurSwapIn$2 = "_blurSwapIn_e4so5_1";
var blurSwapOut$2 = "_blurSwapOut_e4so5_1";
var pulseGlow$2 = "_pulseGlow_e4so5_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_e4so5_1";
var fade$2 = "_fade_e4so5_1";
var fadeInUp$2 = "_fadeInUp_e4so5_1";
var fadeInDown$2 = "_fadeInDown_e4so5_1";
var fadeInLeft$2 = "_fadeInLeft_e4so5_1";
var fadeInRight$2 = "_fadeInRight_e4so5_1";
var fadeOut$2 = "_fadeOut_e4so5_1";
var fadeOutDown$2 = "_fadeOutDown_e4so5_1";
var fadeOutUp$2 = "_fadeOutUp_e4so5_1";
var fadeOutLeft$2 = "_fadeOutLeft_e4so5_1";
var fadeOutRight$2 = "_fadeOutRight_e4so5_1";
var ping$2 = "_ping_e4so5_1";
var blinkBackground$2 = "_blinkBackground_e4so5_1";
var typingBlink$2 = "_typingBlink_e4so5_1";
var OAuthClientsFilters_vue_vue_type_style_index_0_lang_module_default = {
	"popover-content": "_popover-content_e4so5_388",
	"trigger-wrapper": "_trigger-wrapper_e4so5_392",
	"filter-button-count": "_filter-button-count_e4so5_399",
	"filters-dropdown-footer": "_filters-dropdown-footer_e4so5_404",
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_e4so5_1",
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
var OAuthClientsFilters_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientsFilters_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientsFilters_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "oauth-clients-table" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = {
	key: 2,
	class: "mt-s mb-xl"
};
var _hoisted_4 = { key: 1 };
var OAuthClientsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientsTable",
	props: {
		clients: {},
		loading: { type: Boolean },
		scopeTools: {}
	},
	emits: [
		"revokeClient",
		"update:ownership",
		"update:filters",
		"update:options"
	],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const mcpStore = useMCPStore();
		const rbacStore = useRBACStore();
		const usersStore = useUsersStore();
		const props = __props;
		const emit = __emit;
		const page = computed({
			get: () => mcpStore.oauthClientsPage,
			set: (value) => emit("update:options", {
				page: value,
				itemsPerPage: itemsPerPage.value
			})
		});
		const itemsPerPage = computed({
			get: () => mcpStore.oauthClientsPageSize,
			set: (value) => emit("update:options", {
				page: page.value,
				itemsPerPage: value
			})
		});
		const detailsClient = ref(null);
		const detailsOpen = ref(false);
		const canManageAllClients = computed(() => rbacStore.hasScope("mcp:manage"));
		const ownership = computed(() => mcpStore.oauthClientsOwnership);
		const offeredScopes = computed(() => props.scopeTools ? Object.keys(props.scopeTools) : void 0);
		const tabOptions = computed(() => [{
			label: i18n.baseText("settings.mcp.oAuthClients.tabs.mine"),
			value: "mine",
			tag: String(mcpStore.oauthClientTotals.mine)
		}, {
			label: i18n.baseText("settings.mcp.oAuthClients.tabs.all"),
			value: "all",
			tag: String(mcpStore.oauthClientTotals.all ?? 0)
		}]);
		const filters = ref({ ...EMPTY_OAUTH_CLIENT_FILTERS });
		const searchQuery = ref("");
		const hasActiveFilters = computed(() => filters.value.search.trim() !== "" || filters.value.type !== null || filters.value.ownerId !== null || filters.value.connected !== null);
		const totalClients = computed(() => mcpStore.oauthClientTotals.all ?? mcpStore.oauthClientTotals.mine);
		const showEmptyState = computed(() => props.clients.length === 0 && totalClients.value === 0 && !hasActiveFilters.value);
		function onFiltersChange(newFilters) {
			filters.value = newFilters;
			emit("update:filters", newFilters);
		}
		const applySearch = (0, import_debounce.default)((value) => {
			onFiltersChange({
				...filters.value,
				search: value
			});
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		function onSearchInput(value) {
			searchQuery.value = value;
			applySearch(value);
		}
		const ownerOptions = computed(() => mcpStore.oauthClientOwners.map((owner) => ({
			id: owner.id,
			firstName: owner.firstName,
			lastName: owner.lastName,
			email: owner.email,
			fullName: [owner.firstName, owner.lastName].filter(Boolean).join(" ") || void 0
		})));
		function onOwnershipChange(newOwnership) {
			if (newOwnership === ownership.value) return;
			applySearch.cancel();
			filters.value = { ...EMPTY_OAUTH_CLIENT_FILTERS };
			searchQuery.value = "";
			emit("update:ownership", newOwnership);
		}
		function rowId(row) {
			return `${row.id}:${row.owner?.id ?? "mine"}`;
		}
		const tableHeaders = computed(() => [
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.clientName"),
				key: "name",
				width: 190,
				disableSort: true,
				value() {}
			},
			...ownership.value === "all" ? [{
				title: i18n.baseText("settings.mcp.oAuthClients.table.connectedBy"),
				key: "owner",
				width: 200,
				disableSort: true,
				value() {}
			}] : [],
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.access"),
				key: "scopes",
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.connectedAt"),
				key: "grantedAt",
				width: 110,
				disableSort: true,
				value() {}
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 140,
				disableSort: true,
				value() {}
			}
		]);
		function accessSummary(client) {
			if (client.scopes.length === 0) return i18n.baseText("settings.mcp.oAuthClients.access.none");
			if (isFullAccessGrant(client.scopes, offeredScopes.value)) return i18n.baseText("settings.mcp.oAuthClients.access.full");
			const visible = client.scopes.slice(0, 2).map((scope) => scopeLabel(i18n, scope)).join(", ");
			const remaining = client.scopes.length - 2;
			if (remaining <= 0) return visible;
			return `${visible} ${i18n.baseText("settings.mcp.oAuthClients.scope.more", { interpolate: { count: remaining } })}`;
		}
		function clientTypeLabel(client) {
			const type = getClientBrand(client.name).type;
			if (!type) return null;
			return i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`);
		}
		function openDetails(item) {
			detailsClient.value = item;
			detailsOpen.value = true;
		}
		function onRevoke(item) {
			emit("revokeClient", item);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : showEmptyState.value ? (openBlock(), createBlock(McpEmptyStateCard_default, {
				key: 1,
				"data-test-id": "mcp-clients-empty",
				title: unref(i18n).baseText("settings.mcp.connectedClients.empty.title"),
				description: unref(i18n).baseText("settings.mcp.connectedClients.empty.description")
			}, null, 8, ["title", "description"])) : (openBlock(), createElementBlock("div", _hoisted_3, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [canManageAllClients.value ? (openBlock(), createBlock(unref(N8nTabs_default), {
				key: 0,
				"model-value": ownership.value,
				options: tabOptions.value,
				"data-test-id": "mcp-clients-tabs",
				"onUpdate:modelValue": onOwnershipChange
			}, null, 8, ["model-value", "options"])) : (openBlock(), createElementBlock("div", _hoisted_4)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.filters) }, [createVNode(unref(Input_default), {
				"model-value": searchQuery.value,
				placeholder: unref(i18n).baseText("settings.mcp.oAuthClients.search.placeholder"),
				class: normalizeClass(_ctx.$style.search),
				size: "medium",
				clearable: "",
				"data-test-id": "mcp-clients-search",
				"onUpdate:modelValue": onSearchInput
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, [
				"model-value",
				"placeholder",
				"class"
			]), createVNode(OAuthClientsFilters_default, {
				"model-value": filters.value,
				owners: ownerOptions.value,
				"show-owner-filter": ownership.value === "all",
				"current-user-id": unref(usersStore).currentUser?.id,
				"onUpdate:modelValue": onFiltersChange
			}, null, 8, [
				"model-value",
				"owners",
				"show-owner-filter",
				"current-user-id"
			])], 2)], 2), createVNode(unref(N8nDataTableServer_default), {
				page: page.value,
				"onUpdate:page": _cache[0] || (_cache[0] = ($event) => page.value = $event),
				"items-per-page": itemsPerPage.value,
				"onUpdate:itemsPerPage": _cache[1] || (_cache[1] = ($event) => itemsPerPage.value = $event),
				class: normalizeClass(_ctx.$style.table),
				"data-test-id": "oauth-clients-data-table",
				headers: tableHeaders.value,
				items: props.clients,
				"items-length": unref(mcpStore).oauthClientsCount,
				"item-value": rowId,
				"onClick:row": _cache[2] || (_cache[2] = (_, { item }) => openDetails(item))
			}, createSlots({
				[`item.name`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.client) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style["client-icon-chip"]) }, [unref(getClientBrand)(item.name).icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(getClientBrand)(item.name).icon), {
					key: 0,
					class: normalizeClass(_ctx.$style["client-icon"])
				}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "mcp",
					class: normalizeClass(_ctx.$style["client-icon"])
				}, null, 8, ["class"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["client-name"]) }, [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-name",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
					_: 2
				}, 1024), clientTypeLabel(item) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					"data-test-id": "mcp-client-type",
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(clientTypeLabel(item)), 1)]),
					_: 2
				}, 1024)) : createCommentVNode("", true)], 2)], 2)]),
				[`item.owner`]: withCtx(({ item }) => [item.owner ? (openBlock(), createBlock(OAuthClientOwnerCell_default, {
					key: 0,
					owner: item.owner,
					"is-current-user": item.owner.id === unref(usersStore).currentUser?.id
				}, null, 8, ["owner", "is-current-user"])) : createCommentVNode("", true)]),
				[`item.scopes`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-access",
					color: "text-light",
					class: normalizeClass(_ctx.$style.access)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(accessSummary(item)), 1)]),
					_: 2
				}, 1032, ["class"])]),
				[`item.grantedAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-created-at",
					color: "text-base"
				}, {
					default: withCtx(() => [createVNode(TimeAgo_default, {
						date: new Date(item.grantedAt).toISOString(),
						capitalize: ""
					}, null, 8, ["date"])]),
					_: 2
				}, 1024)]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nButton_default), {
					class: normalizeClass(_ctx.$style["revoke-action"]),
					variant: "outline",
					size: "small",
					"data-test-id": "mcp-oauth-client-revoke-button",
					onClick: withModifiers(($event) => onRevoke(item), ["stop"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess")), 1)]),
					_: 1
				}, 8, ["class", "onClick"])]),
				_: 2
			}, [unref(mcpStore).oauthClientsCount === 0 ? {
				name: "cover",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["empty-state"]) }, [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-clients-no-results",
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.search.noResults")), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"page",
				"items-per-page",
				"class",
				"headers",
				"items",
				"items-length"
			])])), createVNode(OAuthClientDetailsModal_default, {
				open: detailsOpen.value,
				"onUpdate:open": _cache[3] || (_cache[3] = ($event) => detailsOpen.value = $event),
				client: detailsClient.value,
				onRevoke
			}, null, 8, ["open", "client"])]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsTable.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_yyhzx_388";
var toolbar = "_toolbar_yyhzx_394";
var filters = "_filters_yyhzx_402";
var search = "_search_yyhzx_408";
var client = "_client_yyhzx_412";
var access = "_access_yyhzx_440";
var table = "_table_yyhzx_469";
var shimmer$1 = "_shimmer_yyhzx_1";
var spin$1 = "_spin_yyhzx_1";
var opacityPulse$1 = "_opacityPulse_yyhzx_1";
var popoverIn$1 = "_popoverIn_yyhzx_1";
var fadeIn$1 = "_fadeIn_yyhzx_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_yyhzx_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_yyhzx_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_yyhzx_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_yyhzx_1";
var blurSwapIn$1 = "_blurSwapIn_yyhzx_1";
var blurSwapOut$1 = "_blurSwapOut_yyhzx_1";
var pulseGlow$1 = "_pulseGlow_yyhzx_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_yyhzx_1";
var fade$1 = "_fade_yyhzx_1";
var fadeInUp$1 = "_fadeInUp_yyhzx_1";
var fadeInDown$1 = "_fadeInDown_yyhzx_1";
var fadeInLeft$1 = "_fadeInLeft_yyhzx_1";
var fadeInRight$1 = "_fadeInRight_yyhzx_1";
var fadeOut$1 = "_fadeOut_yyhzx_1";
var fadeOutDown$1 = "_fadeOutDown_yyhzx_1";
var fadeOutUp$1 = "_fadeOutUp_yyhzx_1";
var fadeOutLeft$1 = "_fadeOutLeft_yyhzx_1";
var fadeOutRight$1 = "_fadeOutRight_yyhzx_1";
var ping$1 = "_ping_yyhzx_1";
var blinkBackground$1 = "_blinkBackground_yyhzx_1";
var typingBlink$1 = "_typingBlink_yyhzx_1";
var OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default = {
	header,
	toolbar,
	filters,
	search,
	client,
	"client-icon-chip": "_client-icon-chip_yyhzx_418",
	"client-icon": "_client-icon_yyhzx_418",
	access,
	"client-name": "_client-name_yyhzx_453",
	"empty-state": "_empty-state_yyhzx_458",
	table,
	"revoke-action": "_revoke-action_yyhzx_474",
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_yyhzx_1",
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
var OAuthClientsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/RevokeOAuthClientConfirmModal.vue
var RevokeOAuthClientConfirmModal_default = /* @__PURE__ */ defineComponent({
	__name: "RevokeOAuthClientConfirmModal",
	props: {
		client: {},
		open: { type: Boolean },
		loading: { type: Boolean },
		revokingForOther: { type: Boolean }
	},
	emits: [
		"update:open",
		"confirm",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = computed(() => props.client ? i18n.baseText("settings.mcp.oAuthClients.revoke.title", { interpolate: { name: props.client.name } }) : "");
		const description = computed(() => {
			if (!props.client) return "";
			if (props.revokingForOther) {
				const owner = props.client.owner;
				const ownerName = [owner?.firstName, owner?.lastName].filter(Boolean).join(" ") || owner?.email || "";
				return i18n.baseText("settings.mcp.oAuthClients.revoke.description.other", { interpolate: { ownerName } });
			}
			return i18n.baseText("settings.mcp.oAuthClients.revoke.description.own");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialog_default), {
				open: __props.open,
				title: title.value,
				description: description.value,
				"action-label": unref(i18n).baseText("settings.mcp.oAuthClients.revoke.button"),
				"cancel-label": unref(i18n).baseText("generic.cancel"),
				"action-variant": "destructive",
				loading: __props.loading,
				size: "medium",
				"data-test-id": "mcp-client-revoke-confirm",
				onAction: _cache[0] || (_cache[0] = ($event) => emit("confirm")),
				onCancel: _cache[1] || (_cache[1] = ($event) => emit("cancel")),
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, null, 8, [
				"open",
				"title",
				"description",
				"action-label",
				"cancel-label",
				"loading"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPClientsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "mcp-clients-view" };
var SettingsMCPClientsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsMCPClientsView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const mcp = useMcp();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const mcpStore = useMCPStore();
		const usersStore = useUsersStore();
		const oAuthClientsLoading = ref(false);
		const revokeClient = ref(null);
		const revoking = ref(false);
		const fetchoAuthCLients = async () => {
			try {
				oAuthClientsLoading.value = true;
				await mcpStore.getAllOAuthClients();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			} finally {
				setTimeout(() => {
					oAuthClientsLoading.value = false;
				}, 200);
			}
		};
		const onOwnershipChange = async (ownership) => {
			try {
				oAuthClientsLoading.value = true;
				await mcpStore.setOAuthClientsOwnership(ownership);
				if (ownership === "all") mcp.trackViewedAllClients();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			} finally {
				setTimeout(() => {
					oAuthClientsLoading.value = false;
				}, 200);
			}
		};
		const onClientsFiltersChange = async (filters) => {
			try {
				await mcpStore.setOAuthClientsFilters(filters);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			}
		};
		const onClientsOptionsChange = async (options) => {
			try {
				await mcpStore.setOAuthClientsPagination(options.page, options.itemsPerPage);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			}
		};
		const onRevokeRequest = (client) => {
			revokeClient.value = client;
		};
		/** An admin revoking someone else's grant rather than their own. */
		const isRevokingForOther = (client) => !!client.owner && client.owner.id !== usersStore.currentUser?.id;
		const onRevokeConfirm = async () => {
			const client = revokeClient.value;
			if (!client) return;
			try {
				revoking.value = true;
				await mcpStore.removeOAuthClient(client.id, client.owner?.id);
				mcp.trackClientAccessRevoked({
					clientId: client.id,
					clientName: client.name,
					revokedForOther: isRevokingForOther(client)
				});
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.mcp.oAuthClients.revoke.success.title"),
					message: i18n.baseText("settings.mcp.oAuthClients.revoke.success.message", { interpolate: { name: client.name } })
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.oAuthClients.revoke.error"));
			} finally {
				revoking.value = false;
				revokeClient.value = null;
			}
		};
		const onBack = () => {
			router.push({ name: MCP_SETTINGS_VIEW });
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp.connectedClients.title"));
			if (!mcpStore.mcpAccessEnabled) {
				await router.replace({ name: MCP_SETTINGS_VIEW });
				return;
			}
			await fetchoAuthCLients();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("settings.mcp.back"),
				class: normalizeClass(_ctx.$style.layout),
				onBack
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.mcp.connectedClients.title"),
						description: unref(i18n).baseText("settings.mcp.connectedClients.description"),
						"docs-url": unref(MCP_DOCS_PAGE_URL)
					}, null, 8, [
						"title",
						"description",
						"docs-url"
					]),
					createBaseVNode("div", _hoisted_1, [createVNode(OAuthClientsTable_default, {
						"data-test-id": "mcp-oauth-clients-table",
						clients: unref(mcpStore).oauthClients,
						"scope-tools": unref(mcpStore).oauthClientScopeTools,
						loading: oAuthClientsLoading.value,
						onRevokeClient: onRevokeRequest,
						"onUpdate:ownership": onOwnershipChange,
						"onUpdate:filters": onClientsFiltersChange,
						"onUpdate:options": onClientsOptionsChange,
						onRefresh: fetchoAuthCLients
					}, null, 8, [
						"clients",
						"scope-tools",
						"loading"
					])]),
					createVNode(RevokeOAuthClientConfirmModal_default, {
						client: revokeClient.value,
						open: !!revokeClient.value,
						loading: revoking.value,
						"revoking-for-other": !!revokeClient.value && isRevokingForOther(revokeClient.value),
						onConfirm: onRevokeConfirm,
						onCancel: _cache[0] || (_cache[0] = ($event) => revokeClient.value = null),
						"onUpdate:open": _cache[1] || (_cache[1] = ($event) => revokeClient.value = null)
					}, null, 8, [
						"client",
						"open",
						"loading",
						"revoking-for-other"
					])
				]),
				_: 1
			}, 8, ["back-label", "class"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPClientsView.vue?vue&type=style&index=0&lang.module.scss
var layout = "_layout_9iy8s_389";
var shimmer = "_shimmer_9iy8s_1";
var spin = "_spin_9iy8s_1";
var opacityPulse = "_opacityPulse_9iy8s_1";
var popoverIn = "_popoverIn_9iy8s_1";
var fadeIn = "_fadeIn_9iy8s_1";
var collapsibleSlideDown = "_collapsibleSlideDown_9iy8s_1";
var collapsibleSlideUp = "_collapsibleSlideUp_9iy8s_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_9iy8s_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_9iy8s_1";
var blurSwapIn = "_blurSwapIn_9iy8s_1";
var blurSwapOut = "_blurSwapOut_9iy8s_1";
var pulseGlow = "_pulseGlow_9iy8s_1";
var pulseGlowDelayed = "_pulseGlowDelayed_9iy8s_1";
var fade = "_fade_9iy8s_1";
var fadeInUp = "_fadeInUp_9iy8s_1";
var fadeInDown = "_fadeInDown_9iy8s_1";
var fadeInLeft = "_fadeInLeft_9iy8s_1";
var fadeInRight = "_fadeInRight_9iy8s_1";
var fadeOut = "_fadeOut_9iy8s_1";
var fadeOutDown = "_fadeOutDown_9iy8s_1";
var fadeOutUp = "_fadeOutUp_9iy8s_1";
var fadeOutLeft = "_fadeOutLeft_9iy8s_1";
var fadeOutRight = "_fadeOutRight_9iy8s_1";
var ping = "_ping_9iy8s_1";
var blinkBackground = "_blinkBackground_9iy8s_1";
var typingBlink = "_typingBlink_9iy8s_1";
var SettingsMCPClientsView_vue_vue_type_style_index_0_lang_module_default = {
	layout,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_9iy8s_1",
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
var SettingsMCPClientsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPClientsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPClientsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPClientsView_default as default };
