import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, c as useCssModule, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-CBepoSka.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nBadge_default } from "./N8nBadge-DOliSzFF.js";
import { t as N8nAvatar_default } from "./N8nAvatar-Dfrs4IJZ.js";
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
var UserInfo_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1wlyx_125",
	avatarContainer: "_avatarContainer_1wlyx_130",
	infoContainer: "_infoContainer_1wlyx_137",
	pendingUser: "_pendingUser_1wlyx_145",
	pendingBadge: "_pendingBadge_1wlyx_152",
	disabled: "_disabled_1wlyx_156"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nUserInfo/index.ts
var N8nUserInfo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(UserInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": UserInfo_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nUserInfo_default as t };
