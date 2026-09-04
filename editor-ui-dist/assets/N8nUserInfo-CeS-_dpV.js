import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, c as useCssModule, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as N8nAvatar_default } from "./N8nAvatar-BN7Hde99.js";
//#region ../@n8n/design-system/src/components/N8nUserInfo/UserInfo.vue?vue&type=script&setup=true&lang.ts
var UserInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "UserInfo",
	props: {
		firstName: {},
		lastName: {},
		email: {},
		isOwner: { type: Boolean },
		isPendingUser: { type: Boolean },
		isCurrentUser: { type: Boolean },
		disabled: {
			type: Boolean,
			default: false
		},
		settings: {},
		isSamlLoginEnabled: { type: Boolean },
		mfaEnabled: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const { t } = useI18n();
		const $style = useCssModule();
		const classes = computed(() => ({
			[$style.container]: true,
			[$style.disabled]: props.disabled
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(classes.value) }, [createBaseVNode("div", { class: normalizeClass(unref($style).avatarContainer) }, [createVNode(unref(N8nAvatar_default), {
				"first-name": __props.firstName,
				"last-name": __props.lastName
			}, null, 8, ["first-name", "last-name"])], 2), __props.isPendingUser ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).pendingUser)
			}, [createVNode(unref(N8nText_default), { bold: true }, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.email), 1)]),
				_: 1
			}), createBaseVNode("span", { class: normalizeClass(unref($style).pendingBadge) }, [createVNode(unref(N8nBadge_default), { bold: true }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Pending", -1)])]),
				_: 1
			})], 2)], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(unref($style).infoContainer)
			}, [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
				bold: true,
				color: "text-dark"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.firstName) + " " + toDisplayString(__props.lastName) + " " + toDisplayString(__props.isCurrentUser ? unref(t)("nds.userInfo.you") : ""), 1)]),
				_: 1
			}), __props.disabled ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(unref($style).pendingBadge)
			}, [createVNode(unref(N8nBadge_default), { bold: true }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Disabled", -1)])]),
				_: 1
			})], 2)) : createCommentVNode("", true)]), createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
				"data-test-id": "user-email",
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.email), 1)]),
				_: 1
			})])], 2))], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nUserInfo/UserInfo.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_j6gc8_388";
var avatarContainer = "_avatarContainer_j6gc8_393";
var infoContainer = "_infoContainer_j6gc8_400";
var pendingUser = "_pendingUser_j6gc8_408";
var pendingBadge = "_pendingBadge_j6gc8_415";
var disabled = "_disabled_j6gc8_419";
var shimmer = "_shimmer_j6gc8_1";
var spin = "_spin_j6gc8_1";
var opacityPulse = "_opacityPulse_j6gc8_1";
var popoverIn = "_popoverIn_j6gc8_1";
var fadeIn = "_fadeIn_j6gc8_1";
var collapsibleSlideDown = "_collapsibleSlideDown_j6gc8_1";
var collapsibleSlideUp = "_collapsibleSlideUp_j6gc8_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_j6gc8_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_j6gc8_1";
var blurSwapIn = "_blurSwapIn_j6gc8_1";
var blurSwapOut = "_blurSwapOut_j6gc8_1";
var pulseGlow = "_pulseGlow_j6gc8_1";
var pulseGlowDelayed = "_pulseGlowDelayed_j6gc8_1";
var fade = "_fade_j6gc8_1";
var fadeInUp = "_fadeInUp_j6gc8_1";
var fadeInDown = "_fadeInDown_j6gc8_1";
var fadeInLeft = "_fadeInLeft_j6gc8_1";
var fadeInRight = "_fadeInRight_j6gc8_1";
var fadeOut = "_fadeOut_j6gc8_1";
var fadeOutDown = "_fadeOutDown_j6gc8_1";
var fadeOutUp = "_fadeOutUp_j6gc8_1";
var fadeOutLeft = "_fadeOutLeft_j6gc8_1";
var fadeOutRight = "_fadeOutRight_j6gc8_1";
var ping = "_ping_j6gc8_1";
var blinkBackground = "_blinkBackground_j6gc8_1";
var typingBlink = "_typingBlink_j6gc8_1";
var UserInfo_vue_vue_type_style_index_0_lang_module_default = {
	container,
	avatarContainer,
	infoContainer,
	pendingUser,
	pendingBadge,
	disabled,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_j6gc8_1",
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
//#region ../@n8n/design-system/src/components/N8nUserInfo/index.ts
var N8nUserInfo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(UserInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": UserInfo_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nUserInfo_default as t };
