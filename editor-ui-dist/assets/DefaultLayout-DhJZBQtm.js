import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Bl0j8A0i.js";
import "./src-DNuWeQoI.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-CgsgTstk.js";
import "./MainSidebarHeader-DYXM9-9d.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-DEPRN4fc.js";
import "./merge-Ce71GKIY.js";
import "./_baseOrderBy-DCYhjK32.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-s8cKxpSe.js";
import "./versions.store-Do3StdTZ.js";
import "./usePageRedirectionHelper-z-UqKyIw.js";
import "./useBugReporting-D8M60R0G.js";
import "./canvas.utils-BwcAweXC.js";
import "./folders.store-Bmhcjh89.js";
import "./KeyboardShortcutTooltip-DsRUp4Db.js";
import "./sourceControl.eventBus-CIR19qQL.js";
import "./useKeybindings-DMkPq03z.js";
import "./useGlobalEntityCreation-Dt2SlaCa.js";
import "./useSettingsItems-Vzs4rDkZ.js";
import { t as AppSidebar_default } from "./AppSidebar-B_Dqu99j.js";
import "./readyToRun.store-DygHrsIe.js";
import "./resourceCenter.store-CSh4jJnT.js";
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
