import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-Bkr0M48W.js";
import { b as useRouter } from "./truncate-Br6bKSnz.js";
import "./icon-CFf5tU6n.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-F1cLDt40.js";
import { t as useToast } from "./useToast-DwhNu6O6.js";
import { Po as VIEWS } from "./constants-D65dAEd5.js";
import "./merge-CqRJC8Rq.js";
import "./_baseOrderBy-zPjeknZ0.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-CxR5wG0F.js";
import "./useExternalHooks-BdLzYczL.js";
import "./useStyles-DhM0cpS7.js";
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
