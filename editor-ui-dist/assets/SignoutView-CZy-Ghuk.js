import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-Yj8N6E8I.js";
import { b as useRouter } from "./truncate-BE376beJ.js";
import "./icon-DWED0Ply.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-3MMgvAsT.js";
import { t as useToast } from "./useToast-dRBi8k5x.js";
import { Po as VIEWS } from "./constants-DiFLTnfN.js";
import "./merge-BxuOQkcT.js";
import "./_baseOrderBy-DYfm-2b2.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-COwwFHrZ.js";
import "./useExternalHooks-nZMP18nx.js";
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
