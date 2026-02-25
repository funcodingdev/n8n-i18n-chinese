import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BhiJVBN1.js";
import "./src-CoXSecun.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DNFsxBs3.js";
import "./MainSidebarHeader-B6mBZ23v.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-B69HgT-U.js";
import "./merge-Ch7EvJB5.js";
import "./_baseOrderBy-DDmiqX1z.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-fUGsrtT8.js";
import "./versions.store-Chs1fBwd.js";
import "./usePageRedirectionHelper-BTliaMg6.js";
import "./useBugReporting-Df0gv857.js";
import "./canvas.utils-BDUvA23o.js";
import "./folders.store-b4jaUjZA.js";
import "./KeyboardShortcutTooltip-ChSOtraR.js";
import "./sourceControl.eventBus-CLfLTBfX.js";
import "./useKeybindings-nBCpcOQo.js";
import "./useGlobalEntityCreation-C1r8Uub9.js";
import "./useSettingsItems-CnIe1ssJ.js";
import { t as AppSidebar_default } from "./AppSidebar-C5lkqniG.js";
import "./readyToRun.store-C6Bp8VXA.js";
import "./resourceCenter.store-Z53J4zJI.js";
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
