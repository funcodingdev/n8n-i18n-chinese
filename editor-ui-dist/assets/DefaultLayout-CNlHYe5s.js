import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BBTLzXgM.js";
import "./src-BITqouBc.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BPj3XTmq.js";
import "./MainSidebarHeader-CUZgY6vQ.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CBEYCjLn.js";
import "./merge-BaEehfYj.js";
import "./_baseOrderBy-5iurxHHF.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-B5Huo4lB.js";
import "./versions.store-BMPHshwX.js";
import "./usePageRedirectionHelper-VUXvWB8V.js";
import "./useBugReporting-CNirGgrq.js";
import "./canvas.utils-CjCJ8R_v.js";
import "./folders.store-CL7P5e6m.js";
import "./KeyboardShortcutTooltip-Cu5GWZL2.js";
import "./sourceControl.eventBus-BFiQ5Ua7.js";
import "./useKeybindings-B5HJkh3O.js";
import "./useGlobalEntityCreation-BRnasr8C.js";
import "./useSettingsItems-CzNQvj4K.js";
import { t as AppSidebar_default } from "./AppSidebar-Dfk8PXJE.js";
import "./readyToRun.store-BcxteU3m.js";
import "./resourceCenter.store-dssxhxR5.js";
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
