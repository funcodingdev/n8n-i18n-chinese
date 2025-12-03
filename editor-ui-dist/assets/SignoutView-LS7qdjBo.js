import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-B3wBxKdj.js";
import { b as useRouter } from "./truncate-5E8n_f_n.js";
import "./icon-DjIleTpX.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-DNwFBRX7.js";
import { t as useToast } from "./useToast-CyeeQKoz.js";
import { Fo as VIEWS } from "./constants-ASQneu7i.js";
import "./merge-D31ghcsp.js";
import "./_baseOrderBy-Um45iusw.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-B6sO5jq1.js";
import "./useExternalHooks-CpxhaYt5.js";
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
