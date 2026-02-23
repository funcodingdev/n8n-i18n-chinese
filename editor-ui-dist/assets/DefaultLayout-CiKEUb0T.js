import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-pm4B1YcD.js";
import "./src-B3wEFHds.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Cfyj76Cq.js";
import "./MainSidebarHeader-NyWLRhEe.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Da_CaOjC.js";
import "./merge-C53jWkdi.js";
import "./_baseOrderBy-sLFpBNOQ.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-ChH2wV-P.js";
import "./versions.store-DKta0mo5.js";
import "./usePageRedirectionHelper-Ccwa7dw-.js";
import "./useBugReporting-CKR5RRmF.js";
import "./canvas.utils-BVvTHoyE.js";
import "./folders.store-C98OBIEG.js";
import "./KeyboardShortcutTooltip-tTk--iEd.js";
import "./sourceControl.eventBus-3JbomTkd.js";
import "./useKeybindings-uQMAw0tC.js";
import "./useGlobalEntityCreation-BDDsRYbK.js";
import "./useSettingsItems-CHheGKJ6.js";
import { t as AppSidebar_default } from "./AppSidebar-CQSn6vtb.js";
import "./readyToRun.store-BjkyGuVu.js";
import "./resourceCenter.store-BuxAhmRS.js";
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
