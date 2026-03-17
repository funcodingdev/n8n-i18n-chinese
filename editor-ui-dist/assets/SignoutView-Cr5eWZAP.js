import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-Dq2XPUGI.js";
import { Di as useRouter } from "./src-caSpAzoz.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Tr as useToast, t as useUsersStore } from "./users.store-2EsruVYR.js";
import { us as VIEWS } from "./constants-_O8nYJwx.js";
import "./merge-DC9T2n_q.js";
import "./_baseOrderBy-V792pLeL.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BZgy_zf7.js";
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
