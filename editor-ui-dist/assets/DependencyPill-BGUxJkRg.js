import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-YW7iHGBi.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-6YtyWN3Q.js";
import { t as DropdownMenu_default } from "./DropdownMenu-CjHKX5W2.js";
import { t as N8nTooltip_default } from "./N8nTooltip-B3IH6E0U.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { l as useRouter } from "./vue-router-D2dKRIiV.js";
import { t as useTelemetry } from "./useTelemetry-CgKpOMtU.js";
import { t as VIEWS } from "./views-BVx7SJLW.js";
import { _r as AGENT_BUILDER_VIEW, ir as DATA_TABLE_DETAILS } from "./constants-C8twx5N6.js";
import { n as useUIStore } from "./ui.store-CKjJFOJW.js";
import { t as useDependencies } from "./useDependencies-BNvownbQ.js";
//#region src/app/components/DependencyPill.vue?vue&type=script&setup=true&lang.ts
var MIN_ITEMS_FOR_SEARCH = 6;
var DependencyPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const router = useRouter();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const { getDependencies, fetchDependencies, getTotalCount } = useDependencies();
		const isLoadingDetails = ref(false);
		const depsResult = computed(() => getDependencies(props.resourceId));
		const effectiveCount = computed(() => {
			const result = depsResult.value;
			if (result) return result.dependencies.length + result.inaccessibleCount;
			return getTotalCount(props.resourceId) ?? 0;
		});
		const hasHiddenDeps = computed(() => (depsResult.value?.inaccessibleCount ?? 0) > 0);
		const tooltipText = computed(() => i18n.baseText(`workflows.dependencies.tooltip.${props.resourceType}`));
		const showSearch = computed(() => (depsResult.value?.dependencies.length ?? 0) >= MIN_ITEMS_FOR_SEARCH);
		const searchTerm = ref("");
		const typeConfig = {
			credentialId: {
				icon: "key-round",
				labelKey: "workflows.dependencies.type.credentials"
			},
			dataTableId: {
				icon: "table",
				labelKey: "workflows.dependencies.type.dataTables"
			},
			agentUsage: {
				icon: "bot",
				labelKey: "workflows.dependencies.type.agents"
			},
			errorWorkflow: {
				icon: "bug",
				labelKey: "workflows.dependencies.type.errorWorkflow"
			},
			errorWorkflowParent: {
				icon: "bug",
				labelKey: "workflows.dependencies.type.errorWorkflowParent"
			},
			workflowCall: {
				icon: "log-in",
				labelKey: "workflows.dependencies.type.subWorkflows"
			},
			workflowParent: {
				icon: "log-in",
				labelKey: "workflows.dependencies.type.parentWorkflows"
			}
		};
		const displayOrder = [
			"credentialId",
			"dataTableId",
			"workflowCall",
			"workflowParent",
			"agentUsage",
			"errorWorkflow",
			"errorWorkflowParent"
		];
		const menuItems = computed(() => {
			const deps = depsResult.value?.dependencies ?? [];
			if (deps.length === 0) return [];
			const query = searchTerm.value.toLowerCase().trim();
			const filtered = query ? deps.filter((dep) => dep.name.toLowerCase().includes(query)) : deps;
			const groups = {
				credentialId: [],
				dataTableId: [],
				agentUsage: [],
				errorWorkflow: [],
				errorWorkflowParent: [],
				workflowCall: [],
				workflowParent: []
			};
			for (const dep of filtered) {
				const key = dep.type;
				if (groups[key]) groups[key].push(dep);
			}
			const items = [];
			for (const typeKey of displayOrder) {
				const deps = groups[typeKey];
				if (deps.length === 0) continue;
				const config = typeConfig[typeKey];
				items.push({
					id: `header-${typeKey}`,
					label: i18n.baseText(config.labelKey),
					icon: {
						type: "icon",
						value: config.icon
					},
					disabled: true,
					divided: items.length > 0
				});
				for (const dep of deps) items.push({
					id: `${dep.type}:${dep.id}`,
					label: dep.name
				});
			}
			return items;
		});
		function onSelect(value) {
			const [type, id] = value.split(":");
			if (!type || !id) return;
			const dep = (depsResult.value?.dependencies ?? []).find((d) => d.type === type && d.id === id);
			if (!dep) return;
			telemetry.track("User clicked dependency pill item", {
				source: props.source,
				dependency_type: dep.type,
				dependency_count: effectiveCount.value
			});
			switch (dep.type) {
				case "credentialId":
					uiStore.openExistingCredential(dep.id);
					break;
				case "workflowCall":
				case "workflowParent":
				case "errorWorkflow":
				case "errorWorkflowParent":
					const href = router.resolve({
						name: VIEWS.WORKFLOW,
						params: { workflowId: dep.id }
					}).href;
					window.open(href, "_blank");
					break;
				case "dataTableId":
					if (dep.projectId) {
						const href = router.resolve({
							name: DATA_TABLE_DETAILS,
							params: {
								projectId: dep.projectId,
								id: dep.id
							}
						}).href;
						window.open(href, "_blank");
					}
					break;
				case "agentUsage":
					if (dep.projectId) {
						const href = router.resolve({
							name: AGENT_BUILDER_VIEW,
							params: {
								projectId: dep.projectId,
								agentId: dep.id
							}
						}).href;
						window.open(href, "_blank");
					}
					break;
			}
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
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: tooltipText.value,
				placement: "top",
				"show-after": 300
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
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
					trigger: withCtx(() => [createVNode(unref(N8nBadge_default), {
						theme: "tertiary",
						"show-border": false,
						class: normalizeClass(_ctx.$style.badge)
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.badgeText) }, [createVNode(unref(N8nIcon_default), {
							icon: "link",
							size: "small"
						}), createTextVNode(" " + toDisplayString(effectiveCount.value), 1)], 2)]),
						_: 1
					}, 8, ["class"])]),
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
				])]),
				_: 1
			}, 8, ["content"]);
		};
	}
});
//#endregion
//#region src/app/components/DependencyPill.vue?vue&type=style&index=0&lang.module.scss
var badge = "_badge_wpwlv_388";
var badgeText = "_badgeText_wpwlv_402";
var hiddenNotice = "_hiddenNotice_wpwlv_409";
var shimmer = "_shimmer_wpwlv_1";
var spin = "_spin_wpwlv_1";
var opacityPulse = "_opacityPulse_wpwlv_1";
var popoverIn = "_popoverIn_wpwlv_1";
var fadeIn = "_fadeIn_wpwlv_1";
var collapsibleSlideDown = "_collapsibleSlideDown_wpwlv_1";
var collapsibleSlideUp = "_collapsibleSlideUp_wpwlv_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_wpwlv_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_wpwlv_1";
var blurSwapIn = "_blurSwapIn_wpwlv_1";
var blurSwapOut = "_blurSwapOut_wpwlv_1";
var pulseGlow = "_pulseGlow_wpwlv_1";
var pulseGlowDelayed = "_pulseGlowDelayed_wpwlv_1";
var fade = "_fade_wpwlv_1";
var fadeInUp = "_fadeInUp_wpwlv_1";
var fadeInDown = "_fadeInDown_wpwlv_1";
var fadeInLeft = "_fadeInLeft_wpwlv_1";
var fadeInRight = "_fadeInRight_wpwlv_1";
var fadeOut = "_fadeOut_wpwlv_1";
var fadeOutDown = "_fadeOutDown_wpwlv_1";
var fadeOutUp = "_fadeOutUp_wpwlv_1";
var fadeOutLeft = "_fadeOutLeft_wpwlv_1";
var fadeOutRight = "_fadeOutRight_wpwlv_1";
var ping = "_ping_wpwlv_1";
var blinkBackground = "_blinkBackground_wpwlv_1";
var typingBlink = "_typingBlink_wpwlv_1";
var DependencyPill_vue_vue_type_style_index_0_lang_module_default = {
	badge,
	badgeText,
	hiddenNotice,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_wpwlv_1",
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
var DependencyPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DependencyPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DependencyPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DependencyPill_default as t };
