import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-bZK-mH1x.js";
import "./src-Bv1Pmwk0.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-m21ecfQE.js";
import "./MainSidebarHeader-Bcs-fwfd.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-DyCBvby_.js";
import "./merge-KW8DRp15.js";
import "./_baseOrderBy-pei3qMdR.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BqsT-emR.js";
import "./versions.store-YUfQdrS-.js";
import "./usePageRedirectionHelper-BdtEkD4-.js";
import "./useBugReporting-DP-PBtqs.js";
import "./canvas.utils-pgZ5Bbxb.js";
import "./folders.store-C7BxTlZm.js";
import "./KeyboardShortcutTooltip-L_R2A2dh.js";
import "./sourceControl.eventBus-BylVL00A.js";
import "./useKeybindings-DAj1EUIU.js";
import "./useGlobalEntityCreation-CwOdI2md.js";
import "./useSettingsItems-jFsPVLhi.js";
import { t as AppSidebar_default } from "./AppSidebar-CDqS4Eop.js";
import "./readyToRun.store-Bo1L4w6W.js";
import "./resourceCenter.store-B_Vfo3eG.js";
var DefaultLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(AppSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DefaultLayout_default as default };
