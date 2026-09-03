import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, c as useCssModule, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
//#region src/features/settings/communityNodes/components/ContactAdministratorToInstall.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { style: { "padding-bottom": "8px" } };
var ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ContactAdministratorToInstall",
	props: { box: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const ownerEmailList = computed(() => usersStore.allUsers.filter((user) => user.role?.includes("owner")).map((user) => user.email));
		const classes = computed(() => ({
			[$style.contactOwnerHint]: true,
			[$style.border]: props.box
		}));
		onMounted(async () => {
			await usersStore.fetchUsers({ filter: { isOwner: true } });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(classes.value) }, [props.box ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				color: "text-light",
				icon: "info",
				size: "large"
			})) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				color: "text-base",
				size: "medium"
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, toDisplayString(unref(i18n).baseText("communityNodeInfo.contact.admin")), 1), ownerEmailList.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(ownerEmailList.value.join(", ")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/components/ContactAdministratorToInstall.vue?vue&type=style&index=0&lang.module.scss
var contactOwnerHint = "_contactOwnerHint_pzjkg_388";
var border = "_border_pzjkg_396";
var shimmer = "_shimmer_pzjkg_1";
var spin = "_spin_pzjkg_1";
var opacityPulse = "_opacityPulse_pzjkg_1";
var popoverIn = "_popoverIn_pzjkg_1";
var fadeIn = "_fadeIn_pzjkg_1";
var collapsibleSlideDown = "_collapsibleSlideDown_pzjkg_1";
var collapsibleSlideUp = "_collapsibleSlideUp_pzjkg_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_pzjkg_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_pzjkg_1";
var blurSwapIn = "_blurSwapIn_pzjkg_1";
var blurSwapOut = "_blurSwapOut_pzjkg_1";
var pulseGlow = "_pulseGlow_pzjkg_1";
var pulseGlowDelayed = "_pulseGlowDelayed_pzjkg_1";
var fade = "_fade_pzjkg_1";
var fadeInUp = "_fadeInUp_pzjkg_1";
var fadeInDown = "_fadeInDown_pzjkg_1";
var fadeInLeft = "_fadeInLeft_pzjkg_1";
var fadeInRight = "_fadeInRight_pzjkg_1";
var fadeOut = "_fadeOut_pzjkg_1";
var fadeOutDown = "_fadeOutDown_pzjkg_1";
var fadeOutUp = "_fadeOutUp_pzjkg_1";
var fadeOutLeft = "_fadeOutLeft_pzjkg_1";
var fadeOutRight = "_fadeOutRight_pzjkg_1";
var ping = "_ping_pzjkg_1";
var blinkBackground = "_blinkBackground_pzjkg_1";
var typingBlink = "_typingBlink_pzjkg_1";
var ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default = {
	contactOwnerHint,
	border,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_pzjkg_1",
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
var ContactAdministratorToInstall_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ContactAdministratorToInstall_default as t };
