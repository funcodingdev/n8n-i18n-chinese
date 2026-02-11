import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-0tqKZ63u.js";
import "./src-y1U2VbqR.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-ACeMu33y.js";
import "./MainSidebarHeader-BaV8nEOE.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Cf-1GDJg.js";
import "./merge-ZzFu8YvX.js";
import "./_baseOrderBy-BBXzPM_B.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Di-EYAP3.js";
import "./versions.store-DPecTnDi.js";
import "./usePageRedirectionHelper-CZRAKr2A.js";
import "./useBugReporting-Bouux0pk.js";
import "./canvas.utils-mi2pDTnY.js";
import "./folders.store-Cb-OxJuh.js";
import "./KeyboardShortcutTooltip-Bz3HCEhu.js";
import "./sourceControl.eventBus-CugKAxPB.js";
import "./useKeybindings-CZU4od4t.js";
import "./useGlobalEntityCreation-DGq6SD66.js";
import "./useSettingsItems-DyRrswM2.js";
import { t as AppSidebar_default } from "./AppSidebar-BbYYcJzf.js";
import "./readyToRun.store-CxyRFxVc.js";
import "./resourceCenter.store-d4jDKkZm.js";
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
