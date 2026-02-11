import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-QsspBGu3.js";
import "./src-BEm78MRO.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-DL0zLgIY.js";
import "./MainSidebarHeader-BTYu_340.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-DHjkuIny.js";
import "./merge-DbYy2v29.js";
import "./_baseOrderBy-DJiV7OMR.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BOxncLS8.js";
import "./versions.store-BEG_UWxV.js";
import "./usePageRedirectionHelper-2ZReIdRk.js";
import "./useBugReporting-BnHjYWu2.js";
import "./canvas.utils-CNSSOCqc.js";
import "./folders.store-7FWLVs_Q.js";
import "./KeyboardShortcutTooltip-Czu0Hhz4.js";
import "./sourceControl.eventBus-Dw1wveQw.js";
import "./useKeybindings-CWjGJY6q.js";
import "./useGlobalEntityCreation-BF1af-TO.js";
import "./useSettingsItems-sZ0IkN2h.js";
import { t as AppSidebar_default } from "./AppSidebar-B7wpooQ3.js";
import "./readyToRun.store-55duHxnx.js";
import "./resourceCenter.store-Bmyzhc6B.js";
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
