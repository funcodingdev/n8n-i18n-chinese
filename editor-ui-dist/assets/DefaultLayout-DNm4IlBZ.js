import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-7s9WlDJz.js";
import "./src-BmkbTfty.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BuTOTUJu.js";
import "./MainSidebarHeader-Ba8jaec0.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-4mYM-BCx.js";
import "./merge-DIySfLBl.js";
import "./_baseOrderBy-C9x_k_9m.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-q3EZxFLd.js";
import "./versions.store-BSeJNXsx.js";
import "./usePageRedirectionHelper-CrRYpHck.js";
import "./useBugReporting-CqQUWP5w.js";
import "./canvas.utils-DDNpbd20.js";
import "./folders.store-PpGQTRLC.js";
import "./KeyboardShortcutTooltip-BE5OR9r9.js";
import "./sourceControl.eventBus-Bgghvi0-.js";
import "./useKeybindings-1aYOI4UR.js";
import "./useGlobalEntityCreation-Cu8xeS4z.js";
import "./useSettingsItems-CblTtwaG.js";
import { t as AppSidebar_default } from "./AppSidebar-DU54NqTz.js";
import "./readyToRun.store-CRln19JI.js";
import "./resourceCenter.store-BhogRMR5.js";
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
