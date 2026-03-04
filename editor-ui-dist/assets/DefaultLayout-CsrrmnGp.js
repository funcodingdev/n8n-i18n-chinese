import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CWW28IIa.js";
import "./src-KhoUjpIZ.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-_5IHF4E9.js";
import "./MainSidebarHeader-CWBQyU3j.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-BvvNYkkp.js";
import "./merge-DwOwVsNY.js";
import "./_baseOrderBy-FLsk2_E-.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-_1izN00A.js";
import "./versions.store-CATNXynl.js";
import "./usePageRedirectionHelper-D2mJVEny.js";
import "./useBugReporting-xb-cOVHK.js";
import "./canvas.utils-CGnqcSax.js";
import "./folders.store-CXDRqrH6.js";
import "./KeyboardShortcutTooltip-4wNXDHqQ.js";
import "./sourceControl.eventBus-C2kt5jJL.js";
import "./useKeybindings-DOW_IPWG.js";
import "./useGlobalEntityCreation-BWuBAupA.js";
import "./useSettingsItems-C1_UMccf.js";
import { t as AppSidebar_default } from "./AppSidebar-DQnm2RpW.js";
import "./readyToRun.store-jC-v6jRz.js";
import "./resourceCenter.store-C2z94DH1.js";
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
