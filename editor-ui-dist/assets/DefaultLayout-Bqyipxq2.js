import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-UZ2WMbsO.js";
import "./src-DZTtiFxe.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-C9ftYS5u.js";
import "./MainSidebarHeader-BPwveX6Z.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-B_yD81Xq.js";
import "./merge-05YB9VDi.js";
import "./_baseOrderBy-CFaMwZa0.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-72hE04FI.js";
import "./versions.store-jiJTJIqn.js";
import "./usePageRedirectionHelper-CWTUB18_.js";
import "./useBugReporting-CqPfLCE0.js";
import "./canvas.utils-DuefRZOC.js";
import "./folders.store-CdB9Kg8u.js";
import "./KeyboardShortcutTooltip-u9fw5oK3.js";
import "./sourceControl.eventBus-DH8Pojwi.js";
import "./useKeybindings-Bad-8WWm.js";
import "./useGlobalEntityCreation-BhTcxJe5.js";
import "./useSettingsItems-BJweqtmi.js";
import { t as AppSidebar_default } from "./AppSidebar-ZxwL8euA.js";
import "./readyToRun.store-CZerT9eE.js";
import "./resourceCenter.store-DU6s6VwX.js";
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
