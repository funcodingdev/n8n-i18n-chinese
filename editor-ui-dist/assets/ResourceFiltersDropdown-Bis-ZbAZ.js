import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nPopover_default } from "./N8nPopover-C7WJvH2j.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { gn as useAvailableProjectSearch, vn as useProjectsStore } from "./workflows.store-qP-dtzSs.js";
import { no as EnterpriseEditionFeature } from "./constants-CMdL1Kzl.js";
import { t as EnterpriseEdition_ee_default } from "./EnterpriseEdition.ee-CN0lT5lL.js";
import { t as ProjectSharing_default } from "./ProjectSharing-Bg5_IJ1H.js";
//#region src/app/components/forms/ResourceFiltersDropdown.vue?vue&type=script&setup=true&lang.ts
var ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceFiltersDropdown",
	props: {
		modelValue: { default: () => ({}) },
		keys: { default: () => [] },
		shareable: {
			type: Boolean,
			default: true
		},
		reset: {
			type: Function,
			default: () => {}
		},
		justIcon: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue", "update:filtersLength"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const projectsStore = useProjectsStore();
		const i18n = useI18n();
		const searchFn = useAvailableProjectSearch();
		const selectedProject = computed({
			get: () => {
				return projectsStore.availableProjects.find((project) => project.id === props.modelValue.homeProject) ?? null;
			},
			set: (value) => {
				setKeyValue("homeProject", value?.id ?? "");
			}
		});
		const filtersLength = computed(() => {
			let length = 0;
			props.keys.forEach((key) => {
				if (key === "search") return;
				const value = props.modelValue[key];
				if (value === true) length += 1;
				if (Array.isArray(value) && value.length) length += 1;
				if (typeof value === "string" && value !== "") length += 1;
			});
			return length;
		});
		const hasFilters = computed(() => filtersLength.value > 0);
		const setKeyValue = (key, value) => {
			emit("update:modelValue", {
				...props.modelValue,
				[key]: value
			});
		};
		const resetFilters = () => {
			if (props.reset) props.reset();
			else {
				const filters = { ...props.modelValue };
				props.keys.forEach((key) => {
					filters[key] = Array.isArray(props.modelValue[key]) ? [] : "";
				});
				emit("update:modelValue", filters);
			}
			selectedProject.value = null;
		};
		const shouldBeIconButton = computed(() => {
			return !hasFilters.value;
		});
		watch(filtersLength, (value) => {
			emit("update:filtersLength", value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				width: "304px",
				"content-class": _ctx.$style["popover-content"],
				align: "end"
			}, {
				trigger: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["trigger-wrapper"]) }, [createVNode(unref(N8nTooltip_default), null, {
					content: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Filters ", -1)])]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						icon: "funnel",
						size: "medium",
						iconOnly: shouldBeIconButton.value,
						active: hasFilters.value,
						"aria-label": unref(i18n).baseText("forms.resourceFiltersDropdown.filters"),
						class: normalizeClass({
							[_ctx.$style["filter-button"]]: true,
							[_ctx.$style["no-label"]]: __props.justIcon && filtersLength.value === 0
						}),
						"data-test-id": "resources-list-filters-trigger"
					}, {
						default: withCtx(() => [filtersLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							class: normalizeClass(_ctx.$style["filter-button-count"]),
							"data-test-id": "resources-list-filters-count",
							theme: "primary"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(filtersLength.value), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true), !__props.justIcon ? (openBlock(), createElementBlock("span", {
							key: 1,
							class: normalizeClass(_ctx.$style["filter-button-text"])
						}, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 3)) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"iconOnly",
						"active",
						"aria-label",
						"class"
					])]),
					_: 1
				})], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["filters-dropdown"]),
					"data-test-id": "resources-list-filters-dropdown"
				}, [
					renderSlot(_ctx.$slots, "default", {
						filters: __props.modelValue,
						setKeyValue
					}),
					__props.shareable && unref(projectsStore).isProjectHome ? (openBlock(), createBlock(EnterpriseEdition_ee_default, {
						key: 0,
						features: [unref(EnterpriseEditionFeature).Sharing]
					}, {
						default: withCtx(() => [createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("forms.resourceFiltersDropdown.owner"),
							bold: false,
							size: "small",
							color: "text-base",
							class: "mb-3xs"
						}, null, 8, ["label"]), createVNode(ProjectSharing_default, {
							modelValue: selectedProject.value,
							"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => selectedProject.value = $event), _cache[1] || (_cache[1] = ($event) => setKeyValue("homeProject", $event.id))],
							"search-fn": unref(searchFn),
							"show-suffix": "",
							placeholder: unref(i18n).baseText("forms.resourceFiltersDropdown.owner.placeholder"),
							"empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects")
						}, null, 8, [
							"modelValue",
							"search-fn",
							"placeholder",
							"empty-options-text"
						])]),
						_: 1
					}, 8, ["features"])) : createCommentVNode("", true),
					hasFilters.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
					}, [createVNode(unref(N8nLink_default), { onClick: resetFilters }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 3
			}, 8, ["content-class"]);
		};
	}
});
//#endregion
//#region src/app/components/forms/ResourceFiltersDropdown.vue?vue&type=style&index=0&lang.module.scss
var shimmer = "_shimmer_29y0e_1";
var spin = "_spin_29y0e_1";
var opacityPulse = "_opacityPulse_29y0e_1";
var popoverIn = "_popoverIn_29y0e_1";
var fadeIn = "_fadeIn_29y0e_1";
var collapsibleSlideDown = "_collapsibleSlideDown_29y0e_1";
var collapsibleSlideUp = "_collapsibleSlideUp_29y0e_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_29y0e_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_29y0e_1";
var blurSwapIn = "_blurSwapIn_29y0e_1";
var blurSwapOut = "_blurSwapOut_29y0e_1";
var pulseGlow = "_pulseGlow_29y0e_1";
var pulseGlowDelayed = "_pulseGlowDelayed_29y0e_1";
var fade = "_fade_29y0e_1";
var fadeInUp = "_fadeInUp_29y0e_1";
var fadeInDown = "_fadeInDown_29y0e_1";
var fadeInLeft = "_fadeInLeft_29y0e_1";
var fadeInRight = "_fadeInRight_29y0e_1";
var fadeOut = "_fadeOut_29y0e_1";
var fadeOutDown = "_fadeOutDown_29y0e_1";
var fadeOutUp = "_fadeOutUp_29y0e_1";
var fadeOutLeft = "_fadeOutLeft_29y0e_1";
var fadeOutRight = "_fadeOutRight_29y0e_1";
var ping = "_ping_29y0e_1";
var blinkBackground = "_blinkBackground_29y0e_1";
var typingBlink = "_typingBlink_29y0e_1";
var ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default = {
	"filter-button": "_filter-button_29y0e_388",
	"filter-button-count": "_filter-button-count_29y0e_388",
	"filter-button-text": "_filter-button-text_29y0e_393",
	"filters-dropdown-footer": "_filters-dropdown-footer_29y0e_401",
	"popover-content": "_popover-content_29y0e_407",
	"trigger-wrapper": "_trigger-wrapper_29y0e_411",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_29y0e_1",
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
var ResourceFiltersDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ResourceFiltersDropdown_default as t };
