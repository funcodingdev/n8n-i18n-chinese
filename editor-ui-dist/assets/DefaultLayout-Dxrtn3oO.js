import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B254lxCP.js";
import "./src-i9Rem1HJ.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-pjk3GVP4.js";
import "./MainSidebarHeader-Bj_OjvUr.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-NfpEUugO.js";
import "./merge-QGykZl3H.js";
import "./_baseOrderBy-WW5xCbr3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-VbLgPqZj.js";
import "./versions.store-DBHWOzd4.js";
import "./usePageRedirectionHelper-4B8pRc9a.js";
import "./useBugReporting-DQFVjUM2.js";
import "./canvas.utils-Fh6fe87k.js";
import "./folders.store-eP-CiqUf.js";
import "./KeyboardShortcutTooltip-BWva8bcA.js";
import "./sourceControl.eventBus-BaCT9vRl.js";
import "./useKeybindings-C56kkQg_.js";
import "./useGlobalEntityCreation-C8j_Fnpo.js";
import "./useSettingsItems-C1Hi2qrn.js";
import { t as AppSidebar_default } from "./AppSidebar-CbfsM9PF.js";
import "./readyToRun.store-Bywh__Z5.js";
import "./resourceCenter.store-CiBY0JM6.js";
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
