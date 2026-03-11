import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-BBTLzXgM.js";
import { Di as useRouter } from "./src-BITqouBc.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Er as useToast, t as useUsersStore } from "./users.store-BPj3XTmq.js";
import { cs as VIEWS } from "./constants-CBEYCjLn.js";
import "./merge-BaEehfYj.js";
import "./_baseOrderBy-5iurxHHF.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-B5Huo4lB.js";
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
