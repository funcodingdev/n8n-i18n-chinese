import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-Blne6VeP.js";
import { b as useRouter } from "./truncate-B6V3BCxD.js";
import "./icon-Bwxqkz6b.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-BptP8y2R.js";
import { t as useToast } from "./useToast-CgdJyGuK.js";
import { Ro as VIEWS } from "./constants-C1tPaXRr.js";
import "./merge-BMIIWfjy.js";
import "./_baseOrderBy-LtFDYziM.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-B5py4jN5.js";
import "./useExternalHooks-BhreC2H_.js";
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
