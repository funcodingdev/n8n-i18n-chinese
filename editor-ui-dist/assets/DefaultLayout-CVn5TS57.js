import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-COzuLMdL.js";
import "./src-BvUzUaLE.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Qyayth1w.js";
import "./MainSidebarHeader-DPj1G562.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import "./constants-CbM6Kczw.js";
import "./merge-Bt9d3GSb.js";
import "./_baseOrderBy-DWejZi4o.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-DzkgMLTI.js";
import "./versions.store-C8C8jOK6.js";
import "./usePageRedirectionHelper-BHOLpoNq.js";
import "./useBugReporting-CGImaZKc.js";
import "./canvas.utils-wNLuSy5w.js";
import "./KeyboardShortcutTooltip-GKmWBYWd.js";
import "./folders.store-ulNNntFh.js";
import "./sourceControl.eventBus-BS6yrkhE.js";
import "./useKeybindings-CvSgOTGT.js";
import "./useGlobalEntityCreation-DGwQHGHU.js";
import "./useSettingsItems-AGqHmH7u.js";
import { t as AppSidebar_default } from "./AppSidebar-BrmQcCsT.js";
import "./readyToRun.store-Bw2gkH3F.js";
import "./resourceCenter.store-Bm9ItCLT.js";
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
