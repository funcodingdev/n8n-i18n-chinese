import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DwkzWRqU.js";
import "./src-GXsra_I5.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DSeNCs16.js";
import "./MainSidebarHeader-C_d0_M7m.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-DFXtU1Pw.js";
import "./merge-CKdiHidc.js";
import "./_baseOrderBy-COGSHfpp.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-q-aewVnG.js";
import "./versions.store-0KhR93TZ.js";
import "./usePageRedirectionHelper-CeCcUN8g.js";
import "./useBugReporting-h_pMl0Op.js";
import "./canvas.utils-CEDTlx4N.js";
import "./folders.store-DKweL38s.js";
import "./KeyboardShortcutTooltip-vazuCnnx.js";
import "./sourceControl.eventBus-BKH_5HZk.js";
import "./useKeybindings-BYqiw-Cj.js";
import "./useGlobalEntityCreation-DU-FUAGX.js";
import "./useSettingsItems-YPqimjQn.js";
import { t as AppSidebar_default } from "./AppSidebar-1X2qyL39.js";
import "./readyToRun.store-DyR6U5Tv.js";
import "./resourceCenter.store-B3odhkLx.js";
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
