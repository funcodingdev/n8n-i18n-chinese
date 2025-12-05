import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-Bt5LFKyw.js";
import { b as useRouter } from "./truncate-DVkJizy2.js";
import "./icon-CI7V5P40.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-BhT0XQHJ.js";
import { t as useToast } from "./useToast-BCcOgf8O.js";
import { Ro as VIEWS } from "./constants-CpJ68bS0.js";
import "./merge-BCaF98OS.js";
import "./_baseOrderBy-C6INhU3l.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-Djl0X-gq.js";
import "./useExternalHooks-3IJ7LStW.js";
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
