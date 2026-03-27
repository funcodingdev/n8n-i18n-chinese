import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-BFpNgXhv.js";
import { _t as useRouter } from "./src-C1Fv__jy.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Tr as useToast, t as useUsersStore } from "./users.store-Bu2w-Rub.js";
import { ms as VIEWS } from "./constants-B8dhY4J-.js";
import "./merge-B2S5Sbon.js";
import "./_baseOrderBy-BvZrFzTC.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BlJA7mcw.js";
var SignoutView_default = /* @__PURE__ */ defineComponent({
	__name: "SignoutView",
	setup(__props) {
		const usersStore = useUsersStore();
		const toast = useToast();
		const router = useRouter();
		const i18n = useI18n();
		const logout = async () => {
			try {
				await usersStore.logout();
				window.location.href = router.resolve({ name: VIEWS.SIGNIN }).href;
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
export { SignoutView_default as default };
