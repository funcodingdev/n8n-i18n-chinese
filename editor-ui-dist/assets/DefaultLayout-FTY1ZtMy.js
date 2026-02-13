import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BCefTEYw.js";
import "./src-wu1DeT-q.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-3JSNDD0x.js";
import "./MainSidebarHeader-BM2eMJtJ.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-BxuLnwsr.js";
import "./merge-DfoBmFWu.js";
import "./_baseOrderBy-Bum33Aot.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-C4hcAGMS.js";
import "./versions.store-Buk91XEo.js";
import "./usePageRedirectionHelper-C5k_Hu_s.js";
import "./useBugReporting-Dw_q4LOO.js";
import "./canvas.utils-D8qyRd7D.js";
import "./folders.store-D-n1yqo8.js";
import "./KeyboardShortcutTooltip-DcSHUlWs.js";
import "./sourceControl.eventBus-DIsyUlWA.js";
import "./useKeybindings-CcLUcQRr.js";
import "./useGlobalEntityCreation-UW5esem6.js";
import "./useSettingsItems-vvBr-nf4.js";
import { t as AppSidebar_default } from "./AppSidebar-CL20nCoW.js";
import "./readyToRun.store-BECc8sOd.js";
import "./resourceCenter.store-Ba1GZYyc.js";
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
