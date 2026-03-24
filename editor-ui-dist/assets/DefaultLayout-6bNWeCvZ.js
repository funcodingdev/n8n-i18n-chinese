import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache--L8adXi_.js";
import "./src-DWsTOZiq.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Sw4oHdJA.js";
import "./MainSidebarHeader-Rs5x5voB.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-C3KfTTly.js";
import "./merge-DjxP3JHE.js";
import "./_baseOrderBy-BACeL77R.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DyfAlHJb.js";
import "./versions.store-DQTr37Y7.js";
import "./usePageRedirectionHelper-B_JO0oEg.js";
import "./useBugReporting-DmrjrFtY.js";
import "./canvas.utils-CkJ5V5RF.js";
import "./KeyboardShortcutTooltip-DNxAB_ov.js";
import "./folders.store-CwawaN0b.js";
import "./sourceControl.eventBus-DYVcoqbk.js";
import "./useKeybindings-YLfeG_AN.js";
import "./useGlobalEntityCreation-DI9p7iWT.js";
import "./useSettingsItems-Bs6C2kT6.js";
import { t as AppSidebar_default } from "./AppSidebar-BONf97qV.js";
import "./readyToRun.store-Bkl0Jyva.js";
import "./resourceCenter.store-BdLjNrMn.js";
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
