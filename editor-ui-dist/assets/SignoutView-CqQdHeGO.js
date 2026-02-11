import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-QsspBGu3.js";
import { bi as useRouter } from "./src-BEm78MRO.js";
import "./sanitize-html-DjneYy0u.js";
import { gr as useToast, t as useUsersStore } from "./users.store-DL0zLgIY.js";
import { ts as VIEWS } from "./constants-DHjkuIny.js";
import "./merge-DbYy2v29.js";
import "./_baseOrderBy-DJiV7OMR.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BOxncLS8.js";
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
