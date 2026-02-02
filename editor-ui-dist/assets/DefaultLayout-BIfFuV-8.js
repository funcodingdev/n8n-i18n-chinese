import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BRoeWkyP.js";
import "./src-BNc_2bHf.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-Xk7McM6o.js";
import "./MainSidebarHeader-C9oc6m2p.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-B-_GdCoL.js";
import "./merge-Dbz2MpYT.js";
import "./_baseOrderBy-Bs_4IhiB.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BLKt5VoA.js";
import "./versions.store-BtdbYQ-h.js";
import "./usePageRedirectionHelper-C-W9fZQc.js";
import "./useBugReporting-gNEdeTBP.js";
import "./canvas.utils-akH8haRX.js";
import "./folders.store-qinaeGKi.js";
import "./KeyboardShortcutTooltip-C7NzTLc7.js";
import "./sourceControl.eventBus-DAix1LAx.js";
import "./useKeybindings-DYuGYFP7.js";
import "./useGlobalEntityCreation-DyLJo3VY.js";
import "./useSettingsItems-bC1XIv4M.js";
import { t as AppSidebar_default } from "./AppSidebar-Bzndpe1n.js";
import "./readyToRun.store-C07-7ugc.js";
import "./resourceCenter.store-xqtOAzud.js";
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
