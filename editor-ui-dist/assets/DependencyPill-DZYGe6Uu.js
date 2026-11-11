import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, Ud as createSlots, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { $b as useTelemetry, HO as _plugin_vue_export_helper_default, MO as N8nTooltip_default, SO as DropdownMenu_default, TO as N8nBadge_default, _c as useDependencies, qO as useI18n, zO as N8nIcon_default } from "./app-MbtXRI_F.js";
import { t as useDependencyMenu } from "./useDependencyMenu-CqBvjzn1.js";
//#region src/app/components/DependencyPill.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var MIN_ITEMS_FOR_SEARCH = 6;
var DependencyPill_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "DependencyPill",
	props: {
		resourceType: {},
		resourceId: {},
		totalCount: {},
		source: {},
		dataTestId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { getDependencies, fetchDependencies, getTotalCount } = useDependencies();
		const { buildDependencyMenuItems, resolveDependencyMenuId, openDependency } = useDependencyMenu();
		const isLoadingDetails = ref(false);
		const depsResult = computed(() => getDependencies(props.resourceId, props.resourceType));
		const effectiveCount = computed(() => {
			const result = depsResult.value;
			if (result) return result.dependencies.length + result.inaccessibleCount;
			return getTotalCount(props.resourceId, props.resourceType) ?? 0;
		});
		const hasHiddenDeps = computed(() => (depsResult.value?.inaccessibleCount ?? 0) > 0);
		const tooltipText = computed(() => i18n.baseText(`workflows.dependencies.tooltip.${props.resourceType}`));
		const showSearch = computed(() => (depsResult.value?.dependencies.length ?? 0) >= MIN_ITEMS_FOR_SEARCH);
		const searchTerm = ref("");
		const menuItems = computed(() => buildDependencyMenuItems(depsResult.value?.dependencies ?? [], searchTerm.value));
		function onSelect(value) {
			const dep = resolveDependencyMenuId(depsResult.value?.dependencies ?? [], value);
			if (!dep) return;
			telemetry.track("User clicked dependency pill item", {
				source: props.source,
				dependency_type: dep.type,
				dependency_count: effectiveCount.value
			});
			openDependency(dep);
		}
		function onSearch(term) {
			searchTerm.value = term;
		}
		async function loadDetails() {
			await fetchDependencies([props.resourceId], props.resourceType);
		}
		async function onDropdownToggle(open) {
			if (open) {
				telemetry.track("User opened dependency pill", {
					source: props.source,
					dependency_count: effectiveCount.value
				});
				if (!isLoadingDetails.value) {
					isLoadingDetails.value = true;
					await loadDetails();
					isLoadingDetails.value = false;
				}
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				items: menuItems.value,
				placement: "bottom-end",
				loading: isLoadingDetails.value,
				"loading-item-count": 1,
				searchable: showSearch.value,
				"extra-popper-class": "dependency-pill-dropdown",
				"search-placeholder": unref(i18n).baseText("workflows.dependencies.search.placeholder"),
				"max-height": 280,
				"data-test-id": __props.dataTestId,
				onSelect,
				onSearch,
				"onUpdate:modelValue": onDropdownToggle
			}, createSlots({
				trigger: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					content: tooltipText.value,
					placement: "top",
					"as-child": ""
				}, {
					default: withCtx(() => [createVNode(unref(N8nBadge_default), {
						variant: "outline",
						clickable: ""
					}, {
						leading: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "graph-12",
							size: "small",
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, ["class"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(effectiveCount.value), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["content"])]),
				_: 2
			}, [hasHiddenDeps.value ? {
				name: "footer",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.hiddenNotice) }, toDisplayString(unref(i18n).baseText("workflows.dependencies.hiddenNotice", {
					adjustToNumber: depsResult.value.inaccessibleCount,
					interpolate: { count: String(depsResult.value.inaccessibleCount) }
				})), 3)]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"loading",
				"searchable",
				"search-placeholder",
				"data-test-id"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	icon: "_icon_5gs8z_2",
	hiddenNotice: "_hiddenNotice_5gs8z_7"
} }]]);
//#endregion
export { DependencyPill_default as t };
