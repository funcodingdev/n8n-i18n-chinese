import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-Banis3EH.js";
import { y as useRouter } from "./truncate-BqCVbASU.js";
import { br as useToast, t as useUsersStore } from "./users.store-DJMeXEOS.js";
import "./empty-nq5-pHAR.js";
import { zo as VIEWS } from "./constants-D1Zk0Rfs.js";
import "./merge-pMO1haKT.js";
import "./_baseOrderBy-DkS43jOk.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DvbBkL8g.js";
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
