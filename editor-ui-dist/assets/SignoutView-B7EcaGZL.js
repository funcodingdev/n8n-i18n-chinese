import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-ChH4gKEU.js";
import { c as useRouter } from "./vue-router-Dl3cOHxO.js";
import { t as useUsersStore } from "./users.store-De0JUnse.js";
import { t as VIEWS } from "./views-o5a97N_l.js";
import { n as useToast } from "./useToast-D3cREU6j.js";
import "./constants-BP1FOJvU.js";
import { n as useSSOStore } from "./sso.store-Cfo2Mbm2.js";
//#endregion
//#region src/features/core/auth/views/SignoutView.vue
var SignoutView_default = /* @__PURE__ */ defineComponent({
	__name: "SignoutView",
	setup(__props) {
		const usersStore = useUsersStore();
		const ssoStore = useSSOStore();
		const toast = useToast();
		const router = useRouter();
		const i18n = useI18n();
		const logout = async () => {
			try {
				const viaOidc = ssoStore.isDefaultAuthenticationOidc;
				const { redirectUrl } = await usersStore.logout({ viaOidc });
				window.location.href = redirectUrl ?? router.resolve({ name: VIEWS.SIGNIN }).href;
			} catch (e) {
				toast.showError(e, i18n.baseText("auth.signout.error"));
			}
		};
		onMounted(() => {
			logout();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
//#endregion
export { SignoutView_default as default };
