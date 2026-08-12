import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-CEAOc3R8.js";
import { _ as useRouter } from "./htmlUtils-Bwndk9_P.js";
import { t as useUsersStore } from "./users.store-DxLlfUHA.js";
import { t as VIEWS } from "./views-DcCKen6o.js";
import { n as useToast } from "./useToast-B_ymsMmy.js";
import "./constants-DCcvObnS.js";
import { n as useSSOStore } from "./sso.store-k37xhQnl.js";
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
