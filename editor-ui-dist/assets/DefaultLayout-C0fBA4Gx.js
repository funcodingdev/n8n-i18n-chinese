import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Dai8_t5K.js";
import "./src-CWDygSR1.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-w97vXh5N.js";
import "./MainSidebarHeader-BP_26Z9p.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Dqd5rpvc.js";
import "./merge-Bihz6yfm.js";
import "./_baseOrderBy-Docd1orE.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BDilYlES.js";
import "./versions.store-D9D1AfN2.js";
import "./usePageRedirectionHelper-DRxfdJyq.js";
import "./useBugReporting-B5wVp1Tc.js";
import "./canvas.utils-DY0w3_Dr.js";
import "./folders.store-8pwdG93Q.js";
import "./KeyboardShortcutTooltip-CBN9pr_a.js";
import "./sourceControl.eventBus-Bjv0MY6L.js";
import "./useKeybindings-DN0uNVBL.js";
import "./useGlobalEntityCreation-BaN83T9D.js";
import "./useSettingsItems-DE-bmmvV.js";
import { t as AppSidebar_default } from "./AppSidebar-DEwQ31FV.js";
import "./readyToRun.store-D-ZPuUa7.js";
import "./resourceCenter.store-DkCOX2Fk.js";
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
