import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-UZ2WMbsO.js";
import { xi as useRouter } from "./src-DZTtiFxe.js";
import "./sanitize-html-DjneYy0u.js";
import { t as useUsersStore, yr as useToast } from "./users.store-C9ftYS5u.js";
import { ns as VIEWS } from "./constants-B_yD81Xq.js";
import "./merge-05YB9VDi.js";
import "./_baseOrderBy-CFaMwZa0.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-72hE04FI.js";
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
