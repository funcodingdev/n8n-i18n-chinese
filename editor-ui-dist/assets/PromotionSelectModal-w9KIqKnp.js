import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, jt as isRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-80JFTwhd.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-DG2qVkaw.js";
import { t as Input_default } from "./Input-CPcwWTAi.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-CyX3uExb.js";
import { t as createEventBus } from "./event-bus-RxIHoNRV.js";
import { t as N8nSwitch_default } from "./N8nSwitch-Dps2fVeL.js";
import { t as useRootStore } from "./useRootStore-BtIOvEaj.js";
import { t as useUsersStore } from "./users.store-DV5KojI7.js";
import { n as useToast } from "./useToast-DorWhso8.js";
import { n as useUIStore } from "./ui.store-CTw9iEqo.js";
import { t as Modal_default } from "./Modal-CQdo-GE8.js";
import { t as TimeAgo_default } from "./TimeAgo-CsO1hYOL.js";
import { n as promoteChanges, t as getPromotableChanges } from "./promotions.api-C7TJa3sq.js";
//#region src/features/integrations/promotions.ee/composables/usePromotionChanges.ts
function usePromotionChanges(projectId) {
	const rootStore = useRootStore();
	const changes = ref([]);
	const isLoading = ref(false);
	const error = ref(null);
	const searchQuery = ref("");
	const selectedIds = ref(/* @__PURE__ */ new Set());
	const filteredChanges = computed(() => {
		if (!searchQuery.value) return changes.value;
		const term = searchQuery.value.toLowerCase();
		return changes.value.filter((c) => c.name.toLowerCase().includes(term));
	});
	const selectedCount = computed(() => selectedIds.value.size);
	const allSelected = computed(() => filteredChanges.value.length > 0 && filteredChanges.value.every((c) => selectedIds.value.has(c.id)));
	const someSelected = computed(() => filteredChanges.value.some((c) => selectedIds.value.has(c.id)) && !allSelected.value);
	function reconcileSelection() {
		const availableIds = new Set(changes.value.map((c) => c.id));
		selectedIds.value = new Set([...selectedIds.value].filter((id) => availableIds.has(id)));
	}
	async function fetchChanges(search) {
		isLoading.value = true;
		error.value = null;
		try {
			changes.value = await getPromotableChanges(rootStore.restApiContext, projectId, { search });
			reconcileSelection();
		} catch (e) {
			error.value = e instanceof Error ? e : new Error(String(e));
		} finally {
			isLoading.value = false;
		}
	}
	function toggleSelected(id) {
		const next = new Set(selectedIds.value);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		selectedIds.value = next;
	}
	function toggleSelectAll() {
		const next = new Set(selectedIds.value);
		if (allSelected.value) for (const c of filteredChanges.value) next.delete(c.id);
		else for (const c of filteredChanges.value) next.add(c.id);
		selectedIds.value = next;
	}
	async function promote(createBranch) {
		return await promoteChanges(rootStore.restApiContext, projectId, {
			workflowIds: [...selectedIds.value],
			createBranch
		});
	}
	return {
		changes,
		filteredChanges,
		isLoading,
		error,
		searchQuery,
		selectedIds,
		selectedCount,
		allSelected,
		someSelected,
		fetchChanges,
		toggleSelected,
		toggleSelectAll,
		promote
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionSelectModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var PromotionSelectModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionSelectModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const modalBus = createEventBus();
		const createBranch = ref(false);
		const isPromoting = ref(false);
		const { changes, filteredChanges, isLoading, error, searchQuery, selectedIds, selectedCount, allSelected, someSelected, fetchChanges, toggleSelected, toggleSelectAll, promote } = usePromotionChanges(props.data.projectId);
		const hasNoSearchResults = computed(() => !isLoading.value && !error.value && changes.value.length > 0 && filteredChanges.value.length === 0);
		function getStatusLabel(status) {
			return i18n.baseText(`promotions.modal.status.${status}`);
		}
		function getDependencyLabel(count) {
			if (count === 0) return i18n.baseText("promotions.modal.noDependencies");
			if (count === 1) return i18n.baseText("promotions.modal.dependency");
			return i18n.baseText("promotions.modal.dependencies", { interpolate: { count: String(count) } });
		}
		function resolveUserName(userId) {
			if (!userId) return null;
			const user = usersStore.usersById[userId];
			if (!user) return null;
			return [user.firstName, user.lastName].filter(Boolean).join(" ") || null;
		}
		function getChangedByLabel(userId) {
			const name = resolveUserName(userId);
			if (!name) return "";
			return i18n.baseText("promotions.modal.changedBy", { interpolate: { name } });
		}
		function getPromoteButtonLabel() {
			if (selectedCount.value === 1) return i18n.baseText("promotions.modal.promoteSingle");
			return i18n.baseText("promotions.modal.promote", { interpolate: { count: String(selectedCount.value) } });
		}
		function isSelected(id) {
			return selectedIds.value.has(id);
		}
		async function onPromote() {
			isPromoting.value = true;
			try {
				await promote(createBranch.value);
				toast.showMessage({
					title: i18n.baseText("promotions.modal.promoteSuccess"),
					type: "success"
				});
				uiStore.closeModal(props.modalName);
			} catch (e) {
				toast.showError(e instanceof Error ? e : new Error(String(e)), i18n.baseText("promotions.modal.promoteError"));
			} finally {
				isPromoting.value = false;
			}
		}
		function onClose() {
			uiStore.closeModal(props.modalName);
		}
		async function onRefresh() {
			await fetchChanges();
		}
		onMounted(async () => {
			await fetchChanges();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				title: unref(i18n).baseText("promotions.modal.title"),
				"event-bus": unref(modalBus),
				width: "640px",
				height: "80vh",
				"max-height": "680px",
				"custom-class": "promotion-modal"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
					createVNode(unref(Checkbox_default), {
						"model-value": unref(allSelected),
						indeterminate: unref(someSelected),
						"data-test-id": "promotion-select-all",
						"onUpdate:modelValue": unref(toggleSelectAll)
					}, null, 8, [
						"model-value",
						"indeterminate",
						"onUpdate:modelValue"
					]),
					createVNode(unref(Input_default), {
						modelValue: unref(searchQuery),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
						placeholder: unref(i18n).baseText("promotions.modal.search.placeholder"),
						size: "small",
						clearable: "",
						"data-test-id": "promotion-search",
						class: normalizeClass(_ctx.$style.searchInput)
					}, null, 8, [
						"modelValue",
						"placeholder",
						"class"
					]),
					createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						icon: "refresh-cw",
						"data-test-id": "promotion-refresh",
						onClick: onRefresh
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.refresh")), 1)]),
						_: 1
					})
				], 2), unref(isLoading) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.loading")), 1)]),
					_: 1
				})], 2)) : unref(error) ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.empty),
					"data-test-id": "promotion-error"
				}, [
					createVNode(unref(N8nText_default), {
						size: "medium",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.error")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.error.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						"data-test-id": "promotion-retry",
						onClick: onRefresh
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.retry")), 1)]),
						_: 1
					})
				], 2)) : unref(changes).length === 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.empty)
				}, [createVNode(unref(N8nText_default), {
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.empty")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.empty.description")), 1)]),
					_: 1
				})], 2)) : hasNoSearchResults.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.empty),
					"data-test-id": "promotion-no-results"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.noResults")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass(_ctx.$style.listContainer)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.list) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredChanges), (change, index) => {
					return openBlock(), createElementBlock("div", {
						key: change.id,
						class: normalizeClass([
							_ctx.$style.row,
							isSelected(change.id) && _ctx.$style.rowSelected,
							index === 0 && _ctx.$style.rowFirst,
							index === unref(filteredChanges).length - 1 && _ctx.$style.rowLast
						]),
						"data-test-id": "promotion-change-row",
						onClick: ($event) => unref(toggleSelected)(change.id)
					}, [createVNode(unref(Checkbox_default), {
						"model-value": isSelected(change.id),
						"onUpdate:modelValue": ($event) => unref(toggleSelected)(change.id),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
					}, null, 8, ["model-value", "onUpdate:modelValue"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowHeader) }, [createVNode(unref(N8nText_default), {
						size: "medium",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(change.name), 1)]),
						_: 2
					}, 1024), createBaseVNode("span", {
						class: normalizeClass([
							_ctx.$style.statusLabel,
							change.status === "archived" && _ctx.$style.statusArchived,
							change.status === "deleted" && _ctx.$style.statusDeleted
						]),
						"data-test-id": "promotion-change-status"
					}, toDisplayString(getStatusLabel(change.status)), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowMeta) }, [
						getChangedByLabel(change.updatedBy) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(getChangedByLabel(change.updatedBy)), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true),
						getChangedByLabel(change.updatedBy) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("·", -1)])]),
							_: 1
						})) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createVNode(TimeAgo_default, { date: change.updatedAt }, null, 8, ["date"])]),
							_: 2
						}, 1024),
						change.dependencyCount > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("·", -1)])]),
							_: 1
						}), createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(getDependencyLabel(change.dependencyCount)), 1)]),
							_: 2
						}, 1024)], 64)) : createCommentVNode("", true)
					], 2)], 2)], 10, _hoisted_1);
				}), 128))], 2)], 2))], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerLeft) }, [createVNode(unref(N8nSwitch_default), {
					modelValue: createBranch.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => createBranch.value = $event),
					label: unref(i18n).baseText("promotions.modal.createBranch"),
					size: "small",
					"data-test-id": "promotion-create-branch"
				}, null, 8, ["modelValue", "label"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: onClose
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.modal.close")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					disabled: unref(selectedCount) === 0 || unref(isLoading) || !!unref(error) || isPromoting.value,
					loading: isPromoting.value,
					"data-test-id": "promotion-submit",
					onClick: onPromote
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(getPromoteButtonLabel()), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])], 2)], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
});
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionSelectModal.vue?vue&type=style&index=1&lang.module.scss
var content = "_content_kwd5g_401";
var toolbar = "_toolbar_kwd5g_409";
var searchInput = "_searchInput_kwd5g_419";
var loading = "_loading_kwd5g_424";
var empty = "_empty_kwd5g_431";
var listContainer = "_listContainer_kwd5g_440";
var list = "_list_kwd5g_440";
var row = "_row_kwd5g_456";
var rowFirst = "_rowFirst_kwd5g_473";
var rowLast = "_rowLast_kwd5g_477";
var rowSelected = "_rowSelected_kwd5g_481";
var rowContent = "_rowContent_kwd5g_485";
var rowHeader = "_rowHeader_kwd5g_492";
var statusLabel = "_statusLabel_kwd5g_499";
var statusArchived = "_statusArchived_kwd5g_504";
var statusDeleted = "_statusDeleted_kwd5g_508";
var rowMeta = "_rowMeta_kwd5g_512";
var footer = "_footer_kwd5g_518";
var footerLeft = "_footerLeft_kwd5g_524";
var footerRight = "_footerRight_kwd5g_529";
var shimmer = "_shimmer_kwd5g_1";
var spin = "_spin_kwd5g_1";
var opacityPulse = "_opacityPulse_kwd5g_1";
var popoverIn = "_popoverIn_kwd5g_1";
var fadeIn = "_fadeIn_kwd5g_1";
var collapsibleSlideDown = "_collapsibleSlideDown_kwd5g_1";
var collapsibleSlideUp = "_collapsibleSlideUp_kwd5g_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_kwd5g_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_kwd5g_1";
var blurSwapIn = "_blurSwapIn_kwd5g_1";
var blurSwapOut = "_blurSwapOut_kwd5g_1";
var pulseGlow = "_pulseGlow_kwd5g_1";
var pulseGlowDelayed = "_pulseGlowDelayed_kwd5g_1";
var fade = "_fade_kwd5g_1";
var fadeInUp = "_fadeInUp_kwd5g_1";
var fadeInDown = "_fadeInDown_kwd5g_1";
var fadeInLeft = "_fadeInLeft_kwd5g_1";
var fadeInRight = "_fadeInRight_kwd5g_1";
var fadeOut = "_fadeOut_kwd5g_1";
var fadeOutDown = "_fadeOutDown_kwd5g_1";
var fadeOutUp = "_fadeOutUp_kwd5g_1";
var fadeOutLeft = "_fadeOutLeft_kwd5g_1";
var fadeOutRight = "_fadeOutRight_kwd5g_1";
var ping = "_ping_kwd5g_1";
var blinkBackground = "_blinkBackground_kwd5g_1";
var typingBlink = "_typingBlink_kwd5g_1";
var PromotionSelectModal_vue_vue_type_style_index_1_lang_module_default = {
	content,
	toolbar,
	searchInput,
	loading,
	empty,
	listContainer,
	list,
	row,
	rowFirst,
	rowLast,
	rowSelected,
	rowContent,
	rowHeader,
	statusLabel,
	statusArchived,
	statusDeleted,
	rowMeta,
	footer,
	footerLeft,
	footerRight,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_kwd5g_1",
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
var PromotionSelectModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromotionSelectModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromotionSelectModal_vue_vue_type_style_index_1_lang_module_default }]]);
//#endregion
export { PromotionSelectModal_default as default };
