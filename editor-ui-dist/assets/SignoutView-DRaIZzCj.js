import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-WB-ZLHq4.js";
import { b as useRouter } from "./truncate-D51dJrpW.js";
import "./icon-DbRNM3BY.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-fX8cvQe2.js";
import { t as useToast } from "./useToast-DhtBVxde.js";
import { Lo as VIEWS } from "./constants-0OA-5Cg4.js";
import "./merge-DVRhUwJL.js";
import "./_baseOrderBy-CmlQEDFB.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-C59RSHk-.js";
import "./useExternalHooks-CStf1glV.js";
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
