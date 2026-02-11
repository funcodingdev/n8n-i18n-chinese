import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-0tqKZ63u.js";
import { bi as useRouter } from "./src-y1U2VbqR.js";
import "./sanitize-html-DjneYy0u.js";
import { gr as useToast, t as useUsersStore } from "./users.store-ACeMu33y.js";
import { ts as VIEWS } from "./constants-Cf-1GDJg.js";
import "./merge-ZzFu8YvX.js";
import "./_baseOrderBy-BBXzPM_B.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Di-EYAP3.js";
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
