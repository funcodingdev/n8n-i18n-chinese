import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, W as nextTick, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
//#region src/features/credentials/components/CredentialPicker/CredentialsDropdown.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["disabled"];
var CredentialsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialsDropdown",
	props: {
		credentialOptions: {},
		selectedCredentialId: {},
		permissions: {},
		placeholder: {},
		loading: { type: Boolean },
		disabled: { type: Boolean },
		teleported: { type: Boolean },
		size: {}
	},
	emits: ["credentialSelected", "newCredential"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const selectRefs = ref(null);
		const filter = ref("");
		function matches(needle, haystack) {
			return haystack.toLocaleLowerCase().includes(needle.toLocaleLowerCase());
		}
		const filteredOptions = computed(() => {
			if (!filter.value) return props.credentialOptions;
			return props.credentialOptions.filter((option) => matches(filter.value, option.name) || option.homeProject?.name && matches(filter.value, option.homeProject.name));
		});
		const onFilter = (newFilter = "") => {
			filter.value = newFilter;
		};
		const closeSelect = () => {
			selectRefs.value?.innerSelect?.handleClose();
			selectRefs.value?.blur();
		};
		const onCredentialSelected = (credentialId) => {
			closeSelect();
			emit("credentialSelected", credentialId);
		};
		const onCreateNewCredential = async () => {
			closeSelect();
			await nextTick();
			emit("newCredential");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nSelect_default), {
				ref_key: "selectRefs",
				ref: selectRefs,
				size: props.size ?? "small",
				filterable: "",
				"filter-method": onFilter,
				"model-value": props.selectedCredentialId,
				placeholder: props.placeholder,
				loading: props.loading,
				disabled: props.disabled,
				teleported: props.teleported ?? false,
				"popper-class": _ctx.$style.selectPopper,
				"onUpdate:modelValue": onCredentialSelected
			}, {
				empty: withCtx(() => [..._cache[1] || (_cache[1] = [])]),
				footer: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					disabled: props.permissions.create,
					content: unref(i18n).baseText("nodeCredentials.createNew.permissionDenied"),
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("button", {
						type: "button",
						"data-test-id": "node-credentials-select-item-new",
						class: normalizeClass([_ctx.$style.newCredential]),
						disabled: !props.permissions.create,
						onClick: _cache[0] || (_cache[0] = ($event) => onCreateNewCredential())
					}, [createVNode(unref(N8nIcon_default), {
						size: "xsmall",
						icon: "plus"
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("nodeCredentials.createNew")), 1)], 10, _hoisted_1)]),
					_: 1
				}, 8, ["disabled", "content"])]),
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (item) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: item.id,
						"data-test-id": `node-credentials-select-item-${item.id}`,
						label: item.name,
						value: item.id,
						onClick: closeSelect
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.credentialOption, "mt-2xs mb-2xs"]) }, [createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
							_: 2
						}, 1024), item.homeProject ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(`${item.typeDisplayName} - ${item.homeProject?.name}`), 1)]),
							_: 2
						}, 1024)) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.typeDisplayName), 1)]),
							_: 2
						}, 1024))], 2)]),
						_: 2
					}, 1032, [
						"data-test-id",
						"label",
						"value"
					]);
				}), 128))]),
				_: 1
			}, 8, [
				"size",
				"model-value",
				"placeholder",
				"loading",
				"disabled",
				"teleported",
				"popper-class"
			]);
		};
	}
});
//#endregion
//#region src/features/credentials/components/CredentialPicker/CredentialsDropdown.vue?vue&type=style&index=0&lang.module.scss
var selectPopper = "_selectPopper_y9e4e_388";
var newCredential = "_newCredential_y9e4e_391";
var credentialOption = "_credentialOption_y9e4e_400";
var shimmer = "_shimmer_y9e4e_1";
var spin = "_spin_y9e4e_1";
var opacityPulse = "_opacityPulse_y9e4e_1";
var popoverIn = "_popoverIn_y9e4e_1";
var fadeIn = "_fadeIn_y9e4e_1";
var collapsibleSlideDown = "_collapsibleSlideDown_y9e4e_1";
var collapsibleSlideUp = "_collapsibleSlideUp_y9e4e_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_y9e4e_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_y9e4e_1";
var blurSwapIn = "_blurSwapIn_y9e4e_1";
var blurSwapOut = "_blurSwapOut_y9e4e_1";
var pulseGlow = "_pulseGlow_y9e4e_1";
var pulseGlowDelayed = "_pulseGlowDelayed_y9e4e_1";
var fade = "_fade_y9e4e_1";
var fadeInUp = "_fadeInUp_y9e4e_1";
var fadeInDown = "_fadeInDown_y9e4e_1";
var fadeInLeft = "_fadeInLeft_y9e4e_1";
var fadeInRight = "_fadeInRight_y9e4e_1";
var fadeOut = "_fadeOut_y9e4e_1";
var fadeOutDown = "_fadeOutDown_y9e4e_1";
var fadeOutUp = "_fadeOutUp_y9e4e_1";
var fadeOutLeft = "_fadeOutLeft_y9e4e_1";
var fadeOutRight = "_fadeOutRight_y9e4e_1";
var ping = "_ping_y9e4e_1";
var blinkBackground = "_blinkBackground_y9e4e_1";
var typingBlink = "_typingBlink_y9e4e_1";
var CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default = {
	selectPopper,
	newCredential,
	credentialOption,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_y9e4e_1",
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
var CredentialsDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialsDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CredentialsDropdown_default as t };
