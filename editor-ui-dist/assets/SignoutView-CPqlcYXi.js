import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-DusWbG7h.js";
import { y as useRouter } from "./truncate-jOkHoXqp.js";
import { Dr as useUsersStore, v as useToast } from "./builder.store-CVU0urSe.js";
import "./empty-DUjwPfU3.js";
import { Bo as VIEWS } from "./constants-DoicWdWM.js";
import "./merge-BZDfnXRQ.js";
import "./_baseOrderBy-D59Lwb9y.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-BiJlY84n.js";
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
