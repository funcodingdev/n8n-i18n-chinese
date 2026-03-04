import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-CWW28IIa.js";
import { Ci as useRouter } from "./src-KhoUjpIZ.js";
import "./sanitize-html-JHjOJhXQ.js";
import { br as useToast, t as useUsersStore } from "./users.store-_5IHF4E9.js";
import { is as VIEWS } from "./constants-BvvNYkkp.js";
import "./merge-DwOwVsNY.js";
import "./_baseOrderBy-FLsk2_E-.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-_1izN00A.js";
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
