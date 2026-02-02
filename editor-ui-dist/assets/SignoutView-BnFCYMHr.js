import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-BRoeWkyP.js";
import { Rt as useRouter } from "./src-BNc_2bHf.js";
import "./sanitize-html-DjneYy0u.js";
import { hr as useToast, t as useUsersStore } from "./users.store-Xk7McM6o.js";
import { Xo as VIEWS } from "./constants-B-_GdCoL.js";
import "./merge-Dbz2MpYT.js";
import "./_baseOrderBy-Bs_4IhiB.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BLKt5VoA.js";
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
