import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-BglvSEXj.js";
import { y as useRouter } from "./truncate-DdOETwle.js";
import { Dr as useUsersStore, v as useToast } from "./builder.store-BeLWlcP2.js";
import "./empty-BuGRxzl4.js";
import { Ro as VIEWS } from "./constants-FahOT5kS.js";
import "./merge-kb10eFGs.js";
import "./_baseOrderBy-AV9v5liQ.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-CrpREbgs.js";
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
