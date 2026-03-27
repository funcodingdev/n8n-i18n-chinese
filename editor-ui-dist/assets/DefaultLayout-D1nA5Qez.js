import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-BFpNgXhv.js";
import "./src-C1Fv__jy.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Bu2w-Rub.js";
import "./MainSidebarHeader-uQjTpTHf.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-B8dhY4J-.js";
import "./merge-B2S5Sbon.js";
import "./_baseOrderBy-BvZrFzTC.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BlJA7mcw.js";
import "./versions.store-BV4ECOMQ.js";
import "./usePageRedirectionHelper-Dgke26Ay.js";
import "./useBugReporting-BNE2WRWM.js";
import "./canvas.utils-BbjPIdL6.js";
import "./KeyboardShortcutTooltip-CG9nHdEi.js";
import "./folders.store-Dm1uSNVe.js";
import "./sourceControl.eventBus-9MT730QD.js";
import "./useKeybindings-BFaq2cuM.js";
import "./useGlobalEntityCreation-DV_t0MB4.js";
import "./useSettingsItems-DMvkBwtv.js";
import { t as AppSidebar_default } from "./AppSidebar-BH9RQ9ER.js";
import "./readyToRun.store-p7TgAmRH.js";
import "./resourceCenter.store-0wvsEAkR.js";
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
