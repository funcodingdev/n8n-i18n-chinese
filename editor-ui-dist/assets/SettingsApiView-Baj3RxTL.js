import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, f as vModelText, gt as watch, h as withModifiers, j as createVNode, jt as isRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nPopover_default } from "./N8nPopover-C7WJvH2j.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-DC_W9Qy-.js";
import { t as N8nAvatar_default } from "./N8nAvatar-BN7Hde99.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nTag_default } from "./N8nTag-BOt_Vn3b.js";
import { t as SettingsLayout_default } from "./SettingsLayout-DHeGpvCA.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-C2J-ZIx7.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { t as N8nDataTableServer_default } from "./N8nDataTableServer-CQSFfSXf.js";
import { ui as DateTime } from "./src-DAIlllTg.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as AlertDialog_default } from "./AlertDialog-CnF_GbCP.js";
import { mr as storeToRefs, t as useRootStore } from "./useRootStore-CvqfnFUt.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as useUsersStore } from "./users.store-C9pohnYN.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-Dx1UCP52.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Cx8feVUd.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { h as DOCS_DOMAIN } from "./constants-DxozP3cY.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { n as useUIStore, y as API_KEY_CREATE_OR_EDIT_MODAL_KEY } from "./ui.store-Bnte4owf.js";
import { t as useRBACStore } from "./rbac.store-DYpojWRE.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { i as isApiKeyExpired, n as RevokeApiKeyConfirmModal_default, r as getApiKeyOwnerDisplayName, t as useApiKeysStore } from "./apiKeys.store-B4rXSNPd.js";
//#region src/features/settings/apiKeys/components/ApiKeyOwnerFilter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["aria-expanded"];
var _hoisted_2$1 = ["placeholder", "aria-label"];
var _hoisted_3$1 = {
	id: "api-key-owner-filter-listbox",
	role: "listbox",
	"aria-multiselectable": "true"
};
var _hoisted_4 = ["aria-selected"];
var _hoisted_5 = [
	"aria-selected",
	"data-test-id",
	"onClick"
];
var _hoisted_6 = ["disabled"];
var ApiKeyOwnerFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyOwnerFilter",
	props: {
		modelValue: { default: () => [] },
		users: { default: () => [] },
		currentUserId: { default: "" },
		counts: { default: () => ({}) },
		totalCount: { default: void 0 }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const open = ref(false);
		const filter = ref("");
		const selectedSet = computed(() => new Set(props.modelValue));
		const allOwnerIds = computed(() => props.users.map((user) => user.id));
		const allSelected = computed(() => props.users.length > 0 && props.modelValue.length === props.users.length);
		const someSelected = computed(() => props.modelValue.length > 0 && props.modelValue.length < props.users.length);
		const effectiveAll = computed(() => allSelected.value || props.modelValue.length === 0);
		const displayName = (user) => getApiKeyOwnerDisplayName(user);
		const filteredUsers = computed(() => {
			const needle = filter.value.trim().toLowerCase();
			if (!needle) return props.users;
			return props.users.filter((user) => {
				const nameMatch = displayName(user).toLowerCase().includes(needle);
				const emailMatch = user.email?.toLowerCase().includes(needle) ?? false;
				return nameMatch || emailMatch;
			});
		});
		const sortedUsers = computed(() => [...filteredUsers.value].sort((a, b) => displayName(a).localeCompare(displayName(b))));
		const effectiveTotalCount = computed(() => props.totalCount ?? Object.values(props.counts).reduce((sum, count) => sum + count, 0));
		const selectedKeyCount = computed(() => effectiveAll.value ? effectiveTotalCount.value : props.modelValue.reduce((sum, id) => sum + (props.counts[id] ?? 0), 0));
		const pillCount = computed(() => effectiveAll.value ? props.users.length : props.modelValue.length);
		const singleSelectedUser = computed(() => !effectiveAll.value && props.modelValue.length === 1 ? props.users.find((user) => user.id === props.modelValue[0]) : void 0);
		const triggerLabel = computed(() => {
			if (effectiveAll.value) return i18n.baseText("settings.api.owners.all");
			if (singleSelectedUser.value) return displayName(singleSelectedUser.value);
			return i18n.baseText("settings.api.owners.selected", {
				interpolate: { count: props.modelValue.length },
				adjustToNumber: props.modelValue.length
			});
		});
		const summaryLabel = computed(() => effectiveAll.value ? i18n.baseText("settings.api.owners.summary.all", {
			interpolate: { count: selectedKeyCount.value },
			adjustToNumber: selectedKeyCount.value
		}) : i18n.baseText("settings.api.owners.summary.filtered", {
			interpolate: { count: selectedKeyCount.value },
			adjustToNumber: selectedKeyCount.value
		}));
		function toggleUser(id) {
			const next = new Set(selectedSet.value);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			emit("update:modelValue", [...next]);
		}
		function toggleAll() {
			emit("update:modelValue", allSelected.value ? [] : allOwnerIds.value);
		}
		function clearFilter() {
			emit("update:modelValue", allOwnerIds.value);
		}
		watch(open, (isOpen, wasOpen) => {
			if (wasOpen && !isOpen && props.modelValue.length === 0) emit("update:modelValue", allOwnerIds.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: open.value,
				"enable-scrolling": false,
				width: "300px",
				"data-test-id": "api-key-owner-filter",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => open.value = $event)
			}, {
				trigger: withCtx(() => [createBaseVNode("button", {
					type: "button",
					role: "combobox",
					"aria-expanded": open.value,
					"aria-haspopup": "listbox",
					"aria-controls": "api-key-owner-filter-listbox",
					class: normalizeClass([_ctx.$style.trigger, { [_ctx.$style.triggerOpen]: open.value }]),
					"data-test-id": "api-key-owner-filter-trigger"
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerLeft) }, [
					singleSelectedUser.value ? (openBlock(), createBlock(unref(N8nAvatar_default), {
						key: 0,
						"first-name": singleSelectedUser.value.firstName,
						"last-name": singleSelectedUser.value.lastName,
						size: "xsmall"
					}, null, 8, ["first-name", "last-name"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "users",
						class: normalizeClass(_ctx.$style.triggerIcon)
					}, null, 8, ["class"])),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerText) }, toDisplayString(triggerLabel.value), 3),
					createVNode(unref(N8nTag_default), {
						text: String(pillCount.value),
						clickable: false,
						class: normalizeClass(_ctx.$style.triggerTag)
					}, null, 8, ["text", "class"])
				], 2), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					class: normalizeClass(_ctx.$style.chevron)
				}, null, 8, ["class"])], 10, _hoisted_1$3)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.panel) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.search) }, [createVNode(unref(N8nIcon_default), {
						icon: "search",
						class: normalizeClass(_ctx.$style.searchIcon)
					}, null, 8, ["class"]), withDirectives(createBaseVNode("input", {
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filter.value = $event),
						type: "text",
						placeholder: unref(i18n).baseText("settings.api.owners.search"),
						"aria-label": unref(i18n).baseText("settings.api.owners.search"),
						class: normalizeClass(_ctx.$style.searchInput),
						"data-test-id": "api-key-owner-filter-search"
					}, null, 10, _hoisted_2$1), [[vModelText, filter.value]])], 2),
					createBaseVNode("div", _hoisted_3$1, [
						createBaseVNode("button", {
							type: "button",
							role: "option",
							"aria-selected": allSelected.value,
							class: normalizeClass([_ctx.$style.option, { [_ctx.$style.optionSelected]: allSelected.value }]),
							"data-test-id": "api-key-owner-filter-all",
							onClick: toggleAll
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLeft) }, [
							createVNode(unref(Checkbox_default), {
								"model-value": allSelected.value,
								indeterminate: someSelected.value,
								class: normalizeClass(_ctx.$style.checkbox),
								"aria-hidden": "true",
								tabindex: "-1"
							}, null, 8, [
								"model-value",
								"indeterminate",
								"class"
							]),
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.allAvatar) }, [createVNode(unref(N8nIcon_default), { icon: "users" })], 2),
							createVNode(unref(N8nText_default), {
								class: normalizeClass(_ctx.$style.allLabel),
								color: "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.owners.all")), 1)]),
								_: 1
							}, 8, ["class"])
						], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionRight) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.count) }, toDisplayString(effectiveTotalCount.value), 3)], 2)], 10, _hoisted_4),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.divider) }, null, 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedUsers.value, (user) => {
							return openBlock(), createElementBlock("button", {
								key: user.id,
								type: "button",
								role: "option",
								"aria-selected": selectedSet.value.has(user.id),
								class: normalizeClass([_ctx.$style.option, { [_ctx.$style.optionSelected]: selectedSet.value.has(user.id) }]),
								"data-test-id": `api-key-owner-filter-option-${user.id}`,
								onClick: ($event) => toggleUser(user.id)
							}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.optionLeft, _ctx.$style.personLeft]) }, [
								createVNode(unref(Checkbox_default), {
									"model-value": selectedSet.value.has(user.id),
									class: normalizeClass(_ctx.$style.checkbox),
									"aria-hidden": "true",
									tabindex: "-1"
								}, null, 8, ["model-value", "class"]),
								createVNode(unref(N8nAvatar_default), {
									"first-name": user.firstName,
									"last-name": user.lastName,
									size: "xsmall"
								}, null, 8, ["first-name", "last-name"]),
								createBaseVNode("span", { class: normalizeClass(_ctx.$style.personText) }, [createVNode(unref(N8nText_default), {
									class: normalizeClass(_ctx.$style.personName),
									color: "text-dark"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(displayName(user)) + " ", 1), __props.currentUserId === user.id ? (openBlock(), createElementBlock("span", {
										key: 0,
										class: normalizeClass(_ctx.$style.you)
									}, toDisplayString(unref(i18n).baseText("settings.api.owners.you")), 3)) : createCommentVNode("", true)]),
									_: 2
								}, 1032, ["class"]), createVNode(unref(N8nText_default), {
									size: "small",
									color: "text-light",
									class: normalizeClass(_ctx.$style.personEmail)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(user.email), 1)]),
									_: 2
								}, 1032, ["class"])], 2)
							], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionRight) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.count) }, toDisplayString(__props.counts[user.id] ?? 0), 3)], 2)], 10, _hoisted_5);
						}), 128)), !sortedUsers.value.length ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.noResults)
						}, toDisplayString(unref(i18n).baseText("settings.api.owners.noResults")), 3)) : createCommentVNode("", true)], 2)
					]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.summary) }, toDisplayString(summaryLabel.value), 3), createBaseVNode("button", {
						type: "button",
						class: normalizeClass(_ctx.$style.clear),
						disabled: effectiveAll.value,
						"data-test-id": "api-key-owner-filter-clear",
						onClick: clearFilter
					}, toDisplayString(unref(i18n).baseText("settings.api.owners.clear")), 11, _hoisted_6)], 2)
				], 2)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyOwnerFilter.vue?vue&type=style&index=0&lang.module.scss
var trigger = "_trigger_183z5_388";
var panel = "_panel_183z5_389";
var triggerOpen = "_triggerOpen_183z5_410";
var triggerLeft = "_triggerLeft_183z5_415";
var triggerIcon = "_triggerIcon_183z5_422";
var triggerText = "_triggerText_183z5_427";
var triggerTag = "_triggerTag_183z5_437";
var chevron = "_chevron_183z5_441";
var search$1 = "_search_183z5_456";
var searchIcon = "_searchIcon_183z5_465";
var searchInput = "_searchInput_183z5_470";
var optionList = "_optionList_183z5_483";
var option = "_option_183z5_483";
var optionSelected = "_optionSelected_183z5_506";
var optionLeft = "_optionLeft_183z5_511";
var personLeft = "_personLeft_183z5_518";
var checkbox = "_checkbox_183z5_522";
var allAvatar = "_allAvatar_183z5_527";
var allLabel = "_allLabel_183z5_538";
var personText = "_personText_183z5_542";
var personName = "_personName_183z5_548";
var you = "_you_183z5_555";
var personEmail = "_personEmail_183z5_559";
var optionRight = "_optionRight_183z5_565";
var count = "_count_183z5_572";
var divider = "_divider_183z5_577";
var noResults$1 = "_noResults_183z5_583";
var footer = "_footer_183z5_590";
var summary = "_summary_183z5_599";
var clear = "_clear_183z5_604";
var shimmer$6 = "_shimmer_183z5_1";
var spin$6 = "_spin_183z5_1";
var opacityPulse$6 = "_opacityPulse_183z5_1";
var popoverIn$6 = "_popoverIn_183z5_1";
var fadeIn$6 = "_fadeIn_183z5_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_183z5_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_183z5_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_183z5_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_183z5_1";
var blurSwapIn$6 = "_blurSwapIn_183z5_1";
var blurSwapOut$6 = "_blurSwapOut_183z5_1";
var pulseGlow$6 = "_pulseGlow_183z5_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_183z5_1";
var fade$6 = "_fade_183z5_1";
var fadeInUp$6 = "_fadeInUp_183z5_1";
var fadeInDown$6 = "_fadeInDown_183z5_1";
var fadeInLeft$6 = "_fadeInLeft_183z5_1";
var fadeInRight$6 = "_fadeInRight_183z5_1";
var fadeOut$6 = "_fadeOut_183z5_1";
var fadeOutDown$6 = "_fadeOutDown_183z5_1";
var fadeOutUp$6 = "_fadeOutUp_183z5_1";
var fadeOutLeft$6 = "_fadeOutLeft_183z5_1";
var fadeOutRight$6 = "_fadeOutRight_183z5_1";
var ping$6 = "_ping_183z5_1";
var blinkBackground$6 = "_blinkBackground_183z5_1";
var typingBlink$6 = "_typingBlink_183z5_1";
var ApiKeyOwnerFilter_vue_vue_type_style_index_0_lang_module_default = {
	trigger,
	panel,
	triggerOpen,
	triggerLeft,
	triggerIcon,
	triggerText,
	triggerTag,
	chevron,
	search: search$1,
	searchIcon,
	searchInput,
	optionList,
	option,
	optionSelected,
	optionLeft,
	personLeft,
	checkbox,
	allAvatar,
	allLabel,
	personText,
	personName,
	you,
	personEmail,
	optionRight,
	count,
	divider,
	noResults: noResults$1,
	footer,
	summary,
	clear,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_183z5_1",
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
var ApiKeyOwnerFilter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyOwnerFilter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyOwnerFilter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyLabelCell.vue?vue&type=script&setup=true&lang.ts
var ApiKeyLabelCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyLabelCell",
	props: {
		label: {},
		apiKey: {}
	},
	setup(__props) {
		const props = __props;
		const labelEl = ref(null);
		const isOverflowing = ref(false);
		let observer = null;
		const update = () => {
			const el = labelEl.value;
			if (!el) return;
			isOverflowing.value = el.scrollWidth > el.clientWidth;
		};
		onMounted(() => {
			update();
			if (labelEl.value) {
				observer = new ResizeObserver(update);
				observer.observe(labelEl.value);
			}
		});
		watch(() => props.label, update, { flush: "post" });
		onBeforeUnmount(() => {
			observer?.disconnect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.cell) }, [createVNode(unref(N8nTooltip_default), {
				content: __props.label,
				"show-after": 500,
				disabled: !isOverflowing.value,
				"content-class": _ctx.$style.tooltip
			}, {
				default: withCtx(() => [createBaseVNode("span", {
					ref_key: "labelEl",
					ref: labelEl,
					class: normalizeClass(_ctx.$style.label)
				}, [createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, [
				"content",
				"disabled",
				"content-class"
			]), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light",
				class: normalizeClass(_ctx.$style.redacted)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.apiKey), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyLabelCell.vue?vue&type=style&index=0&lang.module.scss
var cell$1 = "_cell_kyplv_388";
var label = "_label_kyplv_395";
var redacted = "_redacted_kyplv_403";
var tooltip = "_tooltip_kyplv_407";
var shimmer$5 = "_shimmer_kyplv_1";
var spin$5 = "_spin_kyplv_1";
var opacityPulse$5 = "_opacityPulse_kyplv_1";
var popoverIn$5 = "_popoverIn_kyplv_1";
var fadeIn$5 = "_fadeIn_kyplv_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_kyplv_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_kyplv_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_kyplv_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_kyplv_1";
var blurSwapIn$5 = "_blurSwapIn_kyplv_1";
var blurSwapOut$5 = "_blurSwapOut_kyplv_1";
var pulseGlow$5 = "_pulseGlow_kyplv_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_kyplv_1";
var fade$5 = "_fade_kyplv_1";
var fadeInUp$5 = "_fadeInUp_kyplv_1";
var fadeInDown$5 = "_fadeInDown_kyplv_1";
var fadeInLeft$5 = "_fadeInLeft_kyplv_1";
var fadeInRight$5 = "_fadeInRight_kyplv_1";
var fadeOut$5 = "_fadeOut_kyplv_1";
var fadeOutDown$5 = "_fadeOutDown_kyplv_1";
var fadeOutUp$5 = "_fadeOutUp_kyplv_1";
var fadeOutLeft$5 = "_fadeOutLeft_kyplv_1";
var fadeOutRight$5 = "_fadeOutRight_kyplv_1";
var ping$5 = "_ping_kyplv_1";
var blinkBackground$5 = "_blinkBackground_kyplv_1";
var typingBlink$5 = "_typingBlink_kyplv_1";
var ApiKeyLabelCell_vue_vue_type_style_index_0_lang_module_default = {
	cell: cell$1,
	label,
	redacted,
	tooltip,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_kyplv_1",
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
var ApiKeyLabelCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyLabelCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyLabelCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyOwnerCell.vue?vue&type=script&setup=true&lang.ts
var ApiKeyOwnerCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyOwnerCell",
	props: {
		owner: {},
		isCurrentUser: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const displayName = computed(() => getApiKeyOwnerDisplayName(props.owner));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.cell),
				"data-test-id": "api-key-owner-cell"
			}, [createVNode(unref(N8nAvatar_default), {
				"first-name": __props.owner.firstName ?? "",
				"last-name": __props.owner.lastName ?? "",
				size: "xsmall",
				class: normalizeClass(_ctx.$style.avatar)
			}, null, 8, [
				"first-name",
				"last-name",
				"class"
			]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-dark",
				class: normalizeClass(_ctx.$style.name)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(displayName.value) + " ", 1), __props.isCurrentUser ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.owners.you")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nText_default), {
				size: "xsmall",
				color: "text-light",
				class: normalizeClass(_ctx.$style.email),
				"data-test-id": "user-email"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.owner.email), 1)]),
				_: 1
			}, 8, ["class"])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyOwnerCell.vue?vue&type=style&index=0&lang.module.scss
var cell = "_cell_f49n2_388";
var avatar = "_avatar_f49n2_395";
var info = "_info_f49n2_399";
var name = "_name_f49n2_405";
var email = "_email_f49n2_406";
var shimmer$4 = "_shimmer_f49n2_1";
var spin$4 = "_spin_f49n2_1";
var opacityPulse$4 = "_opacityPulse_f49n2_1";
var popoverIn$4 = "_popoverIn_f49n2_1";
var fadeIn$4 = "_fadeIn_f49n2_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_f49n2_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_f49n2_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_f49n2_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_f49n2_1";
var blurSwapIn$4 = "_blurSwapIn_f49n2_1";
var blurSwapOut$4 = "_blurSwapOut_f49n2_1";
var pulseGlow$4 = "_pulseGlow_f49n2_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_f49n2_1";
var fade$4 = "_fade_f49n2_1";
var fadeInUp$4 = "_fadeInUp_f49n2_1";
var fadeInDown$4 = "_fadeInDown_f49n2_1";
var fadeInLeft$4 = "_fadeInLeft_f49n2_1";
var fadeInRight$4 = "_fadeInRight_f49n2_1";
var fadeOut$4 = "_fadeOut_f49n2_1";
var fadeOutDown$4 = "_fadeOutDown_f49n2_1";
var fadeOutUp$4 = "_fadeOutUp_f49n2_1";
var fadeOutLeft$4 = "_fadeOutLeft_f49n2_1";
var fadeOutRight$4 = "_fadeOutRight_f49n2_1";
var ping$4 = "_ping_f49n2_1";
var blinkBackground$4 = "_blinkBackground_f49n2_1";
var typingBlink$4 = "_typingBlink_f49n2_1";
var ApiKeyOwnerCell_vue_vue_type_style_index_0_lang_module_default = {
	cell,
	avatar,
	info,
	name,
	email,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_f49n2_1",
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
var ApiKeyOwnerCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyOwnerCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyOwnerCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyScopesCell.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["disabled"];
var ApiKeyScopesCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyScopesCell",
	props: { apiKey: {} },
	emits: ["open"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.button),
				disabled: !__props.apiKey.scopes.length,
				"data-test-id": "api-key-scopes-cell",
				onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("open", __props.apiKey), ["stop"]))
			}, toDisplayString(__props.apiKey.scopes.length), 11, _hoisted_1$2);
		};
	}
});
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyScopesCell.vue?vue&type=style&index=0&lang.module.scss
var button = "_button_188ow_388";
var shimmer$3 = "_shimmer_188ow_1";
var spin$3 = "_spin_188ow_1";
var opacityPulse$3 = "_opacityPulse_188ow_1";
var popoverIn$3 = "_popoverIn_188ow_1";
var fadeIn$3 = "_fadeIn_188ow_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_188ow_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_188ow_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_188ow_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_188ow_1";
var blurSwapIn$3 = "_blurSwapIn_188ow_1";
var blurSwapOut$3 = "_blurSwapOut_188ow_1";
var pulseGlow$3 = "_pulseGlow_188ow_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_188ow_1";
var fade$3 = "_fade_188ow_1";
var fadeInUp$3 = "_fadeInUp_188ow_1";
var fadeInDown$3 = "_fadeInDown_188ow_1";
var fadeInLeft$3 = "_fadeInLeft_188ow_1";
var fadeInRight$3 = "_fadeInRight_188ow_1";
var fadeOut$3 = "_fadeOut_188ow_1";
var fadeOutDown$3 = "_fadeOutDown_188ow_1";
var fadeOutUp$3 = "_fadeOutUp_188ow_1";
var fadeOutLeft$3 = "_fadeOutLeft_188ow_1";
var fadeOutRight$3 = "_fadeOutRight_188ow_1";
var ping$3 = "_ping_188ow_1";
var blinkBackground$3 = "_blinkBackground_188ow_1";
var typingBlink$3 = "_typingBlink_188ow_1";
var ApiKeyScopesCell_vue_vue_type_style_index_0_lang_module_default = {
	button,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_188ow_1",
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
var ApiKeyScopesCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyScopesCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyScopesCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "api-key-table" };
var ApiKeyTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyTable",
	props: /* @__PURE__ */ mergeModels({
		apiKeys: {},
		itemsLength: {},
		loading: { type: Boolean },
		currentUserId: { default: void 0 },
		showOwner: {
			type: Boolean,
			default: true
		},
		canUpdate: {
			type: Boolean,
			default: true
		}
	}, {
		"tableOptions": { default: () => ({}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"edit",
		"revoke",
		"rotate",
		"open-scopes",
		"update:options"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const i18n = useI18n();
		function formatExpiration(expiresAt) {
			if (!expiresAt) return i18n.baseText("settings.api.expiration.never");
			return DateTime.fromSeconds(expiresAt).toFormat("d LLL yyyy");
		}
		function formatLastUsed(iso) {
			if (!iso) return i18n.baseText("settings.api.lastUsed.never");
			return DateTime.fromISO(iso).toRelative() ?? i18n.baseText("settings.api.lastUsed.never");
		}
		function isOwn(apiKey) {
			if (!props.currentUserId) return true;
			return apiKey.owner?.id === props.currentUserId;
		}
		function onRowClick(_event, payload) {
			emit("edit", payload.item);
		}
		function getRowActions(apiKey) {
			const actions = [];
			if (isOwn(apiKey) && props.canUpdate) {
				actions.push({
					id: "edit",
					label: i18n.baseText("settings.api.actions.edit"),
					icon: "square-pen",
					testId: "api-key-edit-action"
				});
				if (!isApiKeyExpired(apiKey)) actions.push({
					id: "rotate",
					label: i18n.baseText("settings.api.actions.rotate"),
					icon: "refresh-cw",
					testId: "api-key-rotate-action"
				});
			} else actions.push({
				id: "view",
				label: i18n.baseText("settings.api.actions.view"),
				icon: "eye",
				testId: "api-key-view-action"
			});
			actions.push({
				id: "revoke",
				label: i18n.baseText("settings.api.actions.revoke"),
				icon: "trash-2",
				testId: "api-key-revoke-action",
				divided: true,
				variant: "destructive"
			});
			return actions;
		}
		function onAction(action, apiKey) {
			if (action === "revoke") emit("revoke", apiKey);
			else if (action === "rotate") emit("rotate", apiKey);
			else emit("edit", apiKey);
		}
		const rows = computed(() => props.apiKeys);
		const headers = computed(() => [
			{
				title: i18n.baseText("settings.api.columns.name"),
				key: "label",
				width: 280,
				resize: false
			},
			...props.showOwner ? [{
				title: i18n.baseText("settings.api.columns.owner"),
				key: "owner",
				width: 240,
				disableSort: true,
				resize: false
			}] : [],
			{
				title: i18n.baseText("settings.api.columns.scopes"),
				key: "scopes",
				resize: false
			},
			{
				title: i18n.baseText("settings.api.columns.expiration"),
				key: "expiresAt",
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.api.columns.lastUsed"),
				key: "lastUsedAt",
				resize: false
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 80,
				disableSort: true,
				resize: false,
				value: () => void 0
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nDataTableServer_default), {
				"sort-by": tableOptions.value.sortBy,
				"onUpdate:sortBy": _cache[2] || (_cache[2] = ($event) => tableOptions.value.sortBy = $event),
				page: tableOptions.value.page,
				"onUpdate:page": _cache[3] || (_cache[3] = ($event) => tableOptions.value.page = $event),
				"items-per-page": tableOptions.value.itemsPerPage,
				"onUpdate:itemsPerPage": _cache[4] || (_cache[4] = ($event) => tableOptions.value.itemsPerPage = $event),
				headers: headers.value,
				items: rows.value,
				"items-length": __props.itemsLength,
				loading: __props.loading,
				"page-sizes": [
					10,
					25,
					50
				],
				"row-props": { class: _ctx.$style.clickableRow },
				"onUpdate:options": _cache[5] || (_cache[5] = ($event) => emit("update:options", $event)),
				"onClick:row": onRowClick
			}, {
				[`item.label`]: withCtx(({ item }) => [createVNode(ApiKeyLabelCell_default, {
					label: item.label,
					"api-key": item.apiKey
				}, null, 8, ["label", "api-key"])]),
				[`item.owner`]: withCtx(({ item }) => [item.owner ? (openBlock(), createBlock(ApiKeyOwnerCell_default, {
					key: 0,
					owner: item.owner,
					"is-current-user": isOwn(item)
				}, null, 8, ["owner", "is-current-user"])) : createCommentVNode("", true)]),
				[`item.scopes`]: withCtx(({ item }) => [createVNode(ApiKeyScopesCell_default, {
					"api-key": item,
					onOpen: _cache[0] || (_cache[0] = ($event) => emit("open-scopes", $event))
				}, null, 8, ["api-key"])]),
				[`item.expiresAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), { color: item.expiresAt ? void 0 : "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(formatExpiration(item.expiresAt)), 1)]),
					_: 2
				}, 1032, ["color"])]),
				[`item.lastUsedAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), { color: item.lastUsedAt ? void 0 : "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(formatLastUsed(item.lastUsedAt)), 1)]),
					_: 2
				}, 1032, ["color"])]),
				[`item.actions`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.rowActions),
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}, [createVNode(unref(N8nActionDropdown_default), {
					items: getRowActions(item),
					placement: "bottom-end",
					"activator-size": "small",
					"activator-icon": "ellipsis-vertical",
					"data-test-id": "api-key-actions-toggle",
					onSelect: (action) => onAction(action, item)
				}, null, 8, ["items", "onSelect"])], 2)]),
				_: 2
			}, 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length",
				"loading",
				"row-props"
			])]);
		};
	}
});
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyTable.vue?vue&type=style&index=0&lang.module.scss
var rowActions = "_rowActions_1f8zr_388";
var clickableRow = "_clickableRow_1f8zr_394";
var shimmer$2 = "_shimmer_1f8zr_1";
var spin$2 = "_spin_1f8zr_1";
var opacityPulse$2 = "_opacityPulse_1f8zr_1";
var popoverIn$2 = "_popoverIn_1f8zr_1";
var fadeIn$2 = "_fadeIn_1f8zr_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1f8zr_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1f8zr_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1f8zr_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1f8zr_1";
var blurSwapIn$2 = "_blurSwapIn_1f8zr_1";
var blurSwapOut$2 = "_blurSwapOut_1f8zr_1";
var pulseGlow$2 = "_pulseGlow_1f8zr_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1f8zr_1";
var fade$2 = "_fade_1f8zr_1";
var fadeInUp$2 = "_fadeInUp_1f8zr_1";
var fadeInDown$2 = "_fadeInDown_1f8zr_1";
var fadeInLeft$2 = "_fadeInLeft_1f8zr_1";
var fadeInRight$2 = "_fadeInRight_1f8zr_1";
var fadeOut$2 = "_fadeOut_1f8zr_1";
var fadeOutDown$2 = "_fadeOutDown_1f8zr_1";
var fadeOutUp$2 = "_fadeOutUp_1f8zr_1";
var fadeOutLeft$2 = "_fadeOutLeft_1f8zr_1";
var fadeOutRight$2 = "_fadeOutRight_1f8zr_1";
var ping$2 = "_ping_1f8zr_1";
var blinkBackground$2 = "_blinkBackground_1f8zr_1";
var typingBlink$2 = "_typingBlink_1f8zr_1";
var ApiKeyTable_vue_vue_type_style_index_0_lang_module_default = {
	rowActions,
	clickableRow,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1f8zr_1",
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
var ApiKeyTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyScopesModal.vue?vue&type=script&setup=true&lang.ts
var ApiKeyScopesModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyScopesModal",
	props: {
		apiKey: {},
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = computed(() => props.apiKey ? i18n.baseText("settings.api.scopes.modal.title", { interpolate: { label: props.apiKey.label } }) : "");
		const scopes = computed(() => props.apiKey?.scopes ?? []);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				header: title.value,
				size: "medium",
				"data-test-id": "api-key-scopes-modal",
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [!scopes.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.scopes.modal.empty")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock("ul", {
					key: 1,
					class: normalizeClass(_ctx.$style.pills)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(scopes.value, (scope) => {
					return openBlock(), createElementBlock("li", {
						key: scope,
						class: normalizeClass(_ctx.$style.pill)
					}, toDisplayString(scope), 3);
				}), 128))], 2))], 2)]),
				_: 1
			}, 8, ["open", "header"]);
		};
	}
});
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyScopesModal.vue?vue&type=style&index=0&lang.module.scss
var body = "_body_13kjd_388";
var pills = "_pills_13kjd_396";
var pill = "_pill_13kjd_396";
var shimmer$1 = "_shimmer_13kjd_1";
var spin$1 = "_spin_13kjd_1";
var opacityPulse$1 = "_opacityPulse_13kjd_1";
var popoverIn$1 = "_popoverIn_13kjd_1";
var fadeIn$1 = "_fadeIn_13kjd_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_13kjd_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_13kjd_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_13kjd_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_13kjd_1";
var blurSwapIn$1 = "_blurSwapIn_13kjd_1";
var blurSwapOut$1 = "_blurSwapOut_13kjd_1";
var pulseGlow$1 = "_pulseGlow_13kjd_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_13kjd_1";
var fade$1 = "_fade_13kjd_1";
var fadeInUp$1 = "_fadeInUp_13kjd_1";
var fadeInDown$1 = "_fadeInDown_13kjd_1";
var fadeInLeft$1 = "_fadeInLeft_13kjd_1";
var fadeInRight$1 = "_fadeInRight_13kjd_1";
var fadeOut$1 = "_fadeOut_13kjd_1";
var fadeOutDown$1 = "_fadeOutDown_13kjd_1";
var fadeOutUp$1 = "_fadeOutUp_13kjd_1";
var fadeOutLeft$1 = "_fadeOutLeft_13kjd_1";
var fadeOutRight$1 = "_fadeOutRight_13kjd_1";
var ping$1 = "_ping_13kjd_1";
var blinkBackground$1 = "_blinkBackground_13kjd_1";
var typingBlink$1 = "_typingBlink_13kjd_1";
var ApiKeyScopesModal_vue_vue_type_style_index_0_lang_module_default = {
	body,
	pills,
	pill,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_13kjd_1",
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
var ApiKeyScopesModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyScopesModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyScopesModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/RotateApiKeyConfirmModal.vue
var RotateApiKeyConfirmModal_default = /* @__PURE__ */ defineComponent({
	__name: "RotateApiKeyConfirmModal",
	props: {
		apiKey: {},
		open: { type: Boolean },
		loading: { type: Boolean }
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
		const title = computed(() => props.apiKey ? i18n.baseText("settings.api.rotate.title", { interpolate: { label: props.apiKey.label } }) : "");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialog_default), {
				open: __props.open,
				title: title.value,
				description: unref(i18n).baseText("settings.api.rotate.description"),
				"action-label": unref(i18n).baseText("settings.api.rotate.button"),
				"cancel-label": unref(i18n).baseText("generic.cancel"),
				"action-variant": "solid",
				loading: __props.loading,
				size: "medium",
				"data-test-id": "api-key-rotate-confirm",
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
//#region src/features/settings/apiKeys/views/SettingsApiView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["href", "textContent"];
var _hoisted_2 = ["textContent"];
var _hoisted_3 = ["textContent"];
var SettingsApiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsApiView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const cloudPlanStore = useCloudPlanStore();
		const usersStore = useUsersStore();
		const rbacStore = useRBACStore();
		const { showError, showMessage } = useToast();
		const documentTitle = useDocumentTitle();
		const i18n = useI18n();
		const { goToUpgrade } = usePageRedirectionHelper();
		const telemetry = useTelemetry();
		const loading = ref(false);
		const apiKeysStore = useApiKeysStore();
		const { fetchApiKeys, setOwnership, setLabelFilter, setOwnerFilter, applyTableOptions, deleteApiKey, rotateApiKey, getApiKeyAvailableScopes } = apiKeysStore;
		const { apiKeys, apiKeysCount, totalCountForOwnership, ownership, labelFilter, ownerIds, owners, totalMineCount, totalAllCount, hasAnyKeys, tableOptions } = storeToRefs(apiKeysStore);
		const ownerOptions = computed(() => owners.value.map((owner) => ({
			id: owner.id,
			firstName: owner.firstName,
			lastName: owner.lastName,
			email: owner.email
		})));
		const ownerKeyCounts = computed(() => owners.value.reduce((acc, owner) => {
			acc[owner.id] = owner.keyCount;
			return acc;
		}, {}));
		const selectedOwnerIds = computed(() => ownerIds.value ?? ownerOptions.value.map((owner) => owner.id));
		async function onOwnerFilterChange(selected) {
			try {
				loading.value = true;
				await setOwnerFilter(selected);
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		const searchQuery = ref(labelFilter.value);
		const onSearch = useDebounceFn(async (value) => {
			try {
				loading.value = true;
				await setLabelFilter(value.trim());
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		function onSearchInput(value) {
			searchQuery.value = value;
			onSearch(value);
		}
		const { isSwaggerUIEnabled, publicApiPath, publicApiLatestVersion } = settingsStore;
		const { baseUrl } = useRootStore();
		const { isPublicApiEnabled } = settingsStore;
		const apiDocsURL = computed(() => {
			if (!isSwaggerUIEnabled) return `https://${DOCS_DOMAIN}/api/api-reference/`;
			return `${`${baseUrl.replace(/\/+$/, "")}/${publicApiPath.replace(/^\/+/, "")}`}/v${publicApiLatestVersion}/docs`;
		});
		const scopesModalApiKey = ref(null);
		const revokeApiKey = ref(null);
		const revoking = ref(false);
		const rotateConfirmApiKey = ref(null);
		const rotating = ref(false);
		const canManageAllKeys = computed(() => rbacStore.hasScope("apiKey:manage"));
		const canCreateKeys = computed(() => rbacStore.hasScope("apiKey:create"));
		const canUpdateKeys = computed(() => rbacStore.hasScope("apiKey:update"));
		const tabOptions = computed(() => [{
			label: i18n.baseText("settings.api.tabs.mine"),
			value: "mine",
			tag: String(totalMineCount.value)
		}, {
			label: i18n.baseText("settings.api.tabs.all"),
			value: "all",
			tag: String(totalAllCount.value)
		}]);
		async function onTabChange(newOwnership) {
			try {
				loading.value = true;
				await setOwnership(newOwnership);
				if (newOwnership === "all") telemetry.track("User viewed all API keys");
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		async function onTableUpdate() {
			try {
				loading.value = true;
				await applyTableOptions();
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		const onCreateApiKey = () => {
			telemetry.track("User clicked create API key button");
			uiStore.openModalWithData({
				name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
				data: { mode: "new" }
			});
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.api"));
			if (!isPublicApiEnabled) return;
			apiKeysStore.$reset();
			searchQuery.value = "";
			await getApiKeysAndScopes();
		});
		onBeforeUnmount(() => {
			apiKeysStore.$reset();
		});
		function onUpgrade() {
			goToUpgrade("settings-n8n-api", "upgrade-api", "redirect");
		}
		async function getApiKeysAndScopes() {
			try {
				loading.value = true;
				await Promise.all([fetchApiKeys(), getApiKeyAvailableScopes()]);
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		function onEdit(apiKey) {
			uiStore.openModalWithData({
				name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
				data: {
					mode: "edit",
					activeId: apiKey.id
				}
			});
		}
		function onRevokeRequest(apiKey) {
			revokeApiKey.value = apiKey;
		}
		async function onRevokeConfirm() {
			if (!revokeApiKey.value) return;
			const apiKey = revokeApiKey.value;
			revoking.value = true;
			try {
				await deleteApiKey(apiKey.id);
				showMessage({
					title: i18n.baseText("settings.api.revoke.toast"),
					type: "success"
				});
				revokeApiKey.value = null;
			} catch (e) {
				showError(e, i18n.baseText("settings.api.delete.error"));
			} finally {
				revoking.value = false;
				telemetry.track("User clicked delete API key button", { is_own: apiKey.owner?.id === usersStore.currentUser?.id });
			}
		}
		function onRotateRequest(apiKey) {
			rotateConfirmApiKey.value = apiKey;
		}
		async function onRotateConfirm() {
			if (!rotateConfirmApiKey.value) return;
			const apiKey = rotateConfirmApiKey.value;
			rotating.value = true;
			try {
				const rotated = await rotateApiKey(apiKey.id);
				rotateConfirmApiKey.value = null;
				showMessage({
					title: i18n.baseText("settings.api.rotate.toast"),
					type: "success"
				});
				uiStore.openModalWithData({
					name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
					data: {
						mode: "new",
						rotatedApiKey: rotated
					}
				});
				telemetry.track("User clicked rotate API key button", { is_own: true });
			} catch (e) {
				showError(e, i18n.baseText("settings.api.rotate.error"));
			} finally {
				rotating.value = false;
			}
		}
		function onOpenScopes(apiKey) {
			scopesModalApiKey.value = apiKey;
			telemetry.track("User clicked view API key scopes", { is_own: apiKey.owner?.id === usersStore.currentUser?.id });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				"full-width": "",
				class: normalizeClass(_ctx.$style.layout)
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.api"),
						"show-docs-link": false,
						"data-test-id": "api-keys-header"
					}, {
						description: withCtx(() => [createVNode(unref(N8nText_default), {
							size: "medium",
							color: "text-base"
						}, {
							default: withCtx(() => [createVNode(unref(I18nT), {
								keypath: "settings.api.view.info",
								tag: "span",
								scope: "global"
							}, {
								apiPlayground: withCtx(() => [createBaseVNode("a", {
									class: normalizeClass(_ctx.$style.docLink),
									"data-test-id": "api-playground-link",
									href: apiDocsURL.value,
									target: "_blank",
									textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.apiPlayground"))
								}, null, 10, _hoisted_1)]),
								webhook: withCtx(() => [createBaseVNode("a", {
									class: normalizeClass(_ctx.$style.docLink),
									"data-test-id": "webhook-docs-link",
									href: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/",
									target: "_blank",
									textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.webhook"))
								}, null, 10, _hoisted_2)]),
								documentation: withCtx(() => [createBaseVNode("a", {
									class: normalizeClass(_ctx.$style.docLink),
									"data-test-id": "api-docs-link",
									href: "https://docs.n8n.io/api",
									target: "_blank",
									textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.documentation"))
								}, null, 10, _hoisted_3)]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					}, 8, ["title"]),
					unref(isPublicApiEnabled) && unref(hasAnyKeys) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.tableArea)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [canManageAllKeys.value ? (openBlock(), createBlock(unref(N8nTabs_default), {
						key: 0,
						"model-value": unref(ownership),
						options: tabOptions.value,
						"data-test-id": "api-keys-tabs",
						class: normalizeClass(_ctx.$style.tabs),
						"onUpdate:modelValue": onTabChange
					}, null, 8, [
						"model-value",
						"options",
						"class"
					])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [
						createVNode(unref(Input_default), {
							"model-value": searchQuery.value,
							placeholder: unref(i18n).baseText("settings.api.search.placeholder"),
							class: normalizeClass(_ctx.$style.search),
							size: "medium",
							clearable: "",
							"data-test-id": "api-keys-search",
							"onUpdate:modelValue": onSearchInput
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"model-value",
							"placeholder",
							"class"
						]),
						canManageAllKeys.value && unref(ownership) === "all" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.ownerFilter)
						}, [createVNode(ApiKeyOwnerFilter_default, {
							"model-value": selectedOwnerIds.value,
							users: ownerOptions.value,
							counts: ownerKeyCounts.value,
							"total-count": unref(totalAllCount),
							"current-user-id": unref(usersStore).currentUser?.id,
							"data-test-id": "api-keys-owner-filter",
							"onUpdate:modelValue": onOwnerFilterChange
						}, null, 8, [
							"model-value",
							"users",
							"counts",
							"total-count",
							"current-user-id"
						])], 2)) : createCommentVNode("", true),
						createVNode(unref(N8nTooltip_default), {
							disabled: canCreateKeys.value,
							content: unref(i18n).baseText("settings.api.create.disabledTooltip")
						}, {
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								size: "medium",
								disabled: !canCreateKeys.value,
								"data-test-id": "api-key-create-button",
								onClick: onCreateApiKey
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.create.button")), 1)]),
								_: 1
							}, 8, ["disabled"])]),
							_: 1
						}, 8, ["disabled", "content"])
					], 2)], 2), unref(totalCountForOwnership) > 0 && unref(apiKeysCount) > 0 ? (openBlock(), createBlock(ApiKeyTable_default, {
						key: 0,
						"table-options": unref(tableOptions),
						"onUpdate:tableOptions": _cache[0] || (_cache[0] = ($event) => isRef(tableOptions) ? tableOptions.value = $event : null),
						"api-keys": unref(apiKeys),
						"items-length": unref(apiKeysCount),
						loading: loading.value,
						"current-user-id": unref(usersStore).currentUser?.id,
						"show-owner": canManageAllKeys.value && unref(ownership) === "all",
						"can-update": canUpdateKeys.value,
						class: normalizeClass(_ctx.$style.table),
						onEdit,
						onRevoke: onRevokeRequest,
						onRotate: onRotateRequest,
						onOpenScopes,
						"onUpdate:options": onTableUpdate
					}, null, 8, [
						"table-options",
						"api-keys",
						"items-length",
						"loading",
						"current-user-id",
						"show-owner",
						"can-update",
						"class"
					])) : unref(labelFilter).trim() ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-light",
						class: normalizeClass(_ctx.$style.noResults),
						"data-test-id": "api-keys-no-results"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.search.noResults")), 1)]),
						_: 1
					}, 8, ["class"])) : unref(ownership) === "mine" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						color: "text-light",
						class: normalizeClass(_ctx.$style.noResults),
						"data-test-id": "api-keys-empty-mine"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.empty.mine")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					!unref(isPublicApiEnabled) && unref(cloudPlanStore).userIsTrialing ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 1,
						"data-test-id": "public-api-upgrade-cta",
						heading: unref(i18n).baseText("settings.api.trial.upgradePlan.title"),
						description: unref(i18n).baseText("settings.api.trial.upgradePlan.description"),
						"button-text": unref(i18n).baseText("settings.api.trial.upgradePlan.cta"),
						"onClick:button": onUpgrade
					}, null, 8, [
						"heading",
						"description",
						"button-text"
					])) : createCommentVNode("", true),
					unref(isPublicApiEnabled) && !unref(hasAnyKeys) ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 2,
						"button-text": unref(i18n).baseText(loading.value ? "settings.api.create.button.loading" : "settings.api.create.button"),
						"button-disabled": !canCreateKeys.value,
						description: unref(i18n).baseText("settings.api.create.description"),
						"onClick:button": onCreateApiKey
					}, {
						disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.create.disabledTooltip")), 1)]),
						_: 1
					}, 8, [
						"button-text",
						"button-disabled",
						"description"
					])) : createCommentVNode("", true),
					createVNode(ApiKeyScopesModal_default, {
						"api-key": scopesModalApiKey.value,
						open: !!scopesModalApiKey.value,
						"onUpdate:open": _cache[1] || (_cache[1] = ($event) => scopesModalApiKey.value = null)
					}, null, 8, ["api-key", "open"]),
					createVNode(RevokeApiKeyConfirmModal_default, {
						"api-key": revokeApiKey.value,
						open: !!revokeApiKey.value,
						loading: revoking.value,
						"revoking-for-other": !!revokeApiKey.value?.owner && revokeApiKey.value.owner.id !== unref(usersStore).currentUser?.id,
						onConfirm: onRevokeConfirm,
						onCancel: _cache[2] || (_cache[2] = ($event) => revokeApiKey.value = null),
						"onUpdate:open": _cache[3] || (_cache[3] = ($event) => revokeApiKey.value = null)
					}, null, 8, [
						"api-key",
						"open",
						"loading",
						"revoking-for-other"
					]),
					createVNode(RotateApiKeyConfirmModal_default, {
						"api-key": rotateConfirmApiKey.value,
						open: !!rotateConfirmApiKey.value,
						loading: rotating.value,
						onConfirm: onRotateConfirm,
						onCancel: _cache[4] || (_cache[4] = ($event) => rotateConfirmApiKey.value = null),
						"onUpdate:open": _cache[5] || (_cache[5] = ($event) => rotateConfirmApiKey.value = null)
					}, null, 8, [
						"api-key",
						"open",
						"loading"
					])
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/settings/apiKeys/views/SettingsApiView.vue?vue&type=style&index=0&lang.module.scss
var layout = "_layout_1iqan_390";
var docLink = "_docLink_1iqan_394";
var tableArea = "_tableArea_1iqan_405";
var toolbar = "_toolbar_1iqan_415";
var tabs = "_tabs_1iqan_422";
var controls = "_controls_1iqan_427";
var search = "_search_1iqan_435";
var ownerFilter = "_ownerFilter_1iqan_439";
var table = "_table_1iqan_405";
var noResults = "_noResults_1iqan_448";
var shimmer = "_shimmer_1iqan_1";
var spin = "_spin_1iqan_1";
var opacityPulse = "_opacityPulse_1iqan_1";
var popoverIn = "_popoverIn_1iqan_1";
var fadeIn = "_fadeIn_1iqan_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1iqan_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1iqan_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1iqan_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1iqan_1";
var blurSwapIn = "_blurSwapIn_1iqan_1";
var blurSwapOut = "_blurSwapOut_1iqan_1";
var pulseGlow = "_pulseGlow_1iqan_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1iqan_1";
var fade = "_fade_1iqan_1";
var fadeInUp = "_fadeInUp_1iqan_1";
var fadeInDown = "_fadeInDown_1iqan_1";
var fadeInLeft = "_fadeInLeft_1iqan_1";
var fadeInRight = "_fadeInRight_1iqan_1";
var fadeOut = "_fadeOut_1iqan_1";
var fadeOutDown = "_fadeOutDown_1iqan_1";
var fadeOutUp = "_fadeOutUp_1iqan_1";
var fadeOutLeft = "_fadeOutLeft_1iqan_1";
var fadeOutRight = "_fadeOutRight_1iqan_1";
var ping = "_ping_1iqan_1";
var blinkBackground = "_blinkBackground_1iqan_1";
var typingBlink = "_typingBlink_1iqan_1";
var SettingsApiView_vue_vue_type_style_index_0_lang_module_default = {
	layout,
	docLink,
	tableArea,
	toolbar,
	tabs,
	controls,
	search,
	ownerFilter,
	table,
	noResults,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1iqan_1",
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
var SettingsApiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsApiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsApiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsApiView_default as default };
