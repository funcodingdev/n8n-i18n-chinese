import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, U as mergeProps, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as N8nUserInfo_default } from "./N8nUserInfo-CeS-_dpV.js";
//#region ../@n8n/design-system/src/components/N8nUserSelect/UserSelect.vue?vue&type=script&setup=true&lang.ts
var UserSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "UserSelect",
	props: {
		users: { default: () => [] },
		modelValue: { default: "" },
		ignoreIds: { default: () => [] },
		currentUserId: { default: "" },
		placeholder: {},
		size: {},
		remote: {
			type: Boolean,
			default: false
		},
		remoteMethod: {},
		loading: {
			type: Boolean,
			default: false
		},
		teleported: {
			type: Boolean,
			default: true
		}
	},
	emits: ["blur", "focus"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { t } = useI18n();
		const filter = ref("");
		const filteredUsers = computed(() => {
			if (props.remote) return props.users.filter((user) => !props.ignoreIds.includes(user.id));
			return props.users.filter((user) => {
				if (props.ignoreIds.includes(user.id)) return false;
				if (user.fullName && user.email) {
					if (user.fullName.toLowerCase().includes(filter.value.toLowerCase())) return true;
				}
				return user.email?.includes(filter.value) ?? false;
			});
		});
		const sortedUsers = computed(() => [...filteredUsers.value].sort((a, b) => {
			if (a.lastName && b.lastName && a.lastName !== b.lastName) return a.lastName > b.lastName ? 1 : -1;
			if (a.firstName && b.firstName && a.firstName !== b.firstName) return a.firstName > b.firstName ? 1 : -1;
			if (!a.email || !b.email) throw new Error("Expected all users to have email");
			return a.email > b.email ? 1 : -1;
		}));
		const setFilter = (value = "") => {
			filter.value = value;
			if (props.remote && props.remoteMethod) props.remoteMethod(value);
		};
		const onBlur = () => emit("blur");
		const onFocus = () => emit("focus");
		const getLabel = (user) => (!user.fullName ? user.email : `${user.fullName} (${user.email})`) ?? "";
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nSelect_default), mergeProps({ "data-test-id": "user-select-trigger" }, _ctx.$attrs, {
				"model-value": __props.modelValue,
				filterable: true,
				"filter-method": setFilter,
				placeholder: __props.placeholder || unref(t)("nds.userSelect.selectUser"),
				"default-first-option": true,
				teleported: __props.teleported,
				"popper-class": _ctx.$style.limitPopperWidth,
				"no-data-text": unref(t)("nds.userSelect.noMatchingUsers"),
				size: __props.size,
				remote: __props.remote,
				loading: __props.loading,
				onBlur,
				onFocus
			}), createSlots({
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedUsers.value, (user) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						id: `user-select-option-id-${user.id}`,
						key: user.id,
						value: user.id,
						class: normalizeClass(_ctx.$style.itemContainer),
						label: getLabel(user),
						disabled: user.disabled
					}, {
						default: withCtx(() => [createVNode(unref(N8nUserInfo_default), mergeProps({ ref_for: true }, user, { "is-current-user": __props.currentUserId === user.id }), null, 16, ["is-current-user"])]),
						_: 2
					}, 1032, [
						"id",
						"value",
						"class",
						"label",
						"disabled"
					]);
				}), 128))]),
				_: 2
			}, [_ctx.$slots.prefix ? {
				name: "prefix",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "prefix")]),
				key: "0"
			} : void 0]), 1040, [
				"model-value",
				"placeholder",
				"teleported",
				"popper-class",
				"no-data-text",
				"size",
				"remote",
				"loading"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nUserSelect/UserSelect.vue?vue&type=style&index=0&lang.module.scss
var itemContainer = "_itemContainer_1qj0m_388";
var limitPopperWidth = "_limitPopperWidth_1qj0m_393";
var shimmer = "_shimmer_1qj0m_1";
var spin = "_spin_1qj0m_1";
var opacityPulse = "_opacityPulse_1qj0m_1";
var popoverIn = "_popoverIn_1qj0m_1";
var fadeIn = "_fadeIn_1qj0m_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1qj0m_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1qj0m_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1qj0m_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1qj0m_1";
var blurSwapIn = "_blurSwapIn_1qj0m_1";
var blurSwapOut = "_blurSwapOut_1qj0m_1";
var pulseGlow = "_pulseGlow_1qj0m_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1qj0m_1";
var fade = "_fade_1qj0m_1";
var fadeInUp = "_fadeInUp_1qj0m_1";
var fadeInDown = "_fadeInDown_1qj0m_1";
var fadeInLeft = "_fadeInLeft_1qj0m_1";
var fadeInRight = "_fadeInRight_1qj0m_1";
var fadeOut = "_fadeOut_1qj0m_1";
var fadeOutDown = "_fadeOutDown_1qj0m_1";
var fadeOutUp = "_fadeOutUp_1qj0m_1";
var fadeOutLeft = "_fadeOutLeft_1qj0m_1";
var fadeOutRight = "_fadeOutRight_1qj0m_1";
var ping = "_ping_1qj0m_1";
var blinkBackground = "_blinkBackground_1qj0m_1";
var typingBlink = "_typingBlink_1qj0m_1";
var UserSelect_vue_vue_type_style_index_0_lang_module_default = {
	itemContainer,
	limitPopperWidth,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1qj0m_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nUserSelect/index.ts
var N8nUserSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(UserSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": UserSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nUserSelect_default as t };
