import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-KSuovqBc.js";
import { b as useRouter } from "./truncate-CsmjEd1C.js";
import "./icon-DAtatbOD.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-Cl1nGv7u.js";
import { t as useToast } from "./useToast-HHn1Uk1h.js";
import { Lo as VIEWS } from "./constants-BpPtFtwh.js";
import "./merge-R4sXNnHR.js";
import "./_baseOrderBy-B_owI2r3.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-DaPPp2cy.js";
import "./useExternalHooks-DRyTVRnF.js";
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
