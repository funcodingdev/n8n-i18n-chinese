import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-BRSIFZ-8.js";
import "./src-CKCAtrpy.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-D86YL4LK.js";
import "./MainSidebarHeader-DEgmGF2J.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import "./constants-bR1gDMyV.js";
import "./merge-CIGhcbPZ.js";
import "./_baseOrderBy-Bnq6lF9G.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B60IEvx_.js";
import "./versions.store-BbCEI1wT.js";
import "./usePageRedirectionHelper-CLbDtOGF.js";
import "./useBugReporting-DahFOFZe.js";
import "./canvas.utils-BFvfHyWG.js";
import "./KeyboardShortcutTooltip-B5-_tsGh.js";
import "./folders.store-CkWuaok6.js";
import "./sourceControl.eventBus-C2Jsx1Gy.js";
import "./useKeybindings-CtJyddQn.js";
import "./useGlobalEntityCreation-BjI5zwym.js";
import "./useSettingsItems-DxvorHbn.js";
import { t as AppSidebar_default } from "./AppSidebar-DR2kjUV-.js";
import "./readyToRun.store-BlIgv_cR.js";
import "./resourceCenter.store-CfDwBMm8.js";
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
