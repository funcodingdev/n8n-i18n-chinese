import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Dq2XPUGI.js";
import "./src-caSpAzoz.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-2EsruVYR.js";
import "./MainSidebarHeader-CNC_hbfE.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import "./constants-_O8nYJwx.js";
import "./merge-DC9T2n_q.js";
import "./_baseOrderBy-V792pLeL.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BZgy_zf7.js";
import "./versions.store-DnAfcr7U.js";
import "./usePageRedirectionHelper-Codao5gm.js";
import "./useBugReporting-C0jhDi51.js";
import "./canvas.utils-BvUu3pSa.js";
import "./KeyboardShortcutTooltip-LxsSi8Y_.js";
import "./folders.store-Ch8fVRoP.js";
import "./sourceControl.eventBus-9N-fcfmm.js";
import "./useKeybindings-Bl0CQOt2.js";
import "./useGlobalEntityCreation-BIdbbn8p.js";
import "./useSettingsItems-yB_G_7Ow.js";
import { t as AppSidebar_default } from "./AppSidebar-CNVhOmMK.js";
import "./readyToRun.store-BG36DBVi.js";
import "./resourceCenter.store-DpfzHF5S.js";
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
