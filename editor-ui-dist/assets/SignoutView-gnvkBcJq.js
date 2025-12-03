import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-BeTg2SLq.js";
import { b as useRouter } from "./truncate-C0ZrWWly.js";
import "./icon-BZmmo3dP.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-CoXPwd1O.js";
import { t as useToast } from "./useToast-CiTWVxuS.js";
import { Po as VIEWS } from "./constants-KkYd5iUv.js";
import "./merge-Ad7Lg676.js";
import "./_baseOrderBy-CqDCB2Jl.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-C0tYxqZn.js";
import "./useExternalHooks-D7tUrTse.js";
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
