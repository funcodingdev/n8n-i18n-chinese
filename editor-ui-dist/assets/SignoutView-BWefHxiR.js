import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-DusWbG7h.js";
import { y as useRouter } from "./truncate-jOkHoXqp.js";
import { Dr as useUsersStore, v as useToast } from "./builder.store-CDNWj6sj.js";
import "./empty-BUjCyq3U.js";
import { Bo as VIEWS } from "./constants-BNL5AX-V.js";
import "./merge-yX5iBHH2.js";
import "./_baseOrderBy-B3tKhkT-.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-DOH2YHyv.js";
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
