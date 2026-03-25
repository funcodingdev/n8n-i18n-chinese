import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-BLQlsGfT.js";
import "./src-C3dDmkfF.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-YX3xGXV-.js";
import "./MainSidebarHeader-CVF5E93P.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-sixw52iU.js";
import "./merge-k3cP0hku.js";
import "./_baseOrderBy-BrADeb8X.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-C7GCj9g0.js";
import "./versions.store-D2KkYDJw.js";
import "./usePageRedirectionHelper-s_DBFOnw.js";
import "./useBugReporting-CLYcG3BT.js";
import "./canvas.utils-NT0VdpQR.js";
import "./KeyboardShortcutTooltip-QKY_4PlZ.js";
import "./folders.store-CbB4N3_K.js";
import "./sourceControl.eventBus-Bck5ElJ1.js";
import "./useKeybindings-DV-CkP0X.js";
import "./useGlobalEntityCreation-sAggvTCU.js";
import "./useSettingsItems-fwooeAwF.js";
import { t as AppSidebar_default } from "./AppSidebar-dHVSwRm3.js";
import "./readyToRun.store-DbiXVnB8.js";
import "./resourceCenter.store-Y2fHhbmM.js";
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
