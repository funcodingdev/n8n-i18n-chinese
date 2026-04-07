import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-C80pWp05.js";
import "./src-DXhOkTfb.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-bYJP9NEL.js";
import "./MainSidebarHeader-DYG_W-C_.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import "./constants-neq36s1h.js";
import "./merge-CyZj1oIp.js";
import "./_baseOrderBy-2EL3KkTw.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-CnJGc_VC.js";
import "./versions.store-DRn-fBav.js";
import "./usePageRedirectionHelper-r_VQqP2d.js";
import "./useBugReporting-B-h_nRJ_.js";
import "./canvas.utils-I742fAt-.js";
import "./KeyboardShortcutTooltip-B8YykjpW.js";
import "./folders.store-9rCuieqg.js";
import "./sourceControl.eventBus-C3Us3oio.js";
import "./useKeybindings-D6ZApcVM.js";
import "./useGlobalEntityCreation-CqgadQlN.js";
import "./useSettingsItems-C__c1Mc2.js";
import { t as AppSidebar_default } from "./AppSidebar-BeEkdEub.js";
import "./readyToRun.store-DMFQZQY9.js";
import "./resourceCenter.store-D9DKeNfQ.js";
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
