import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BhiJVBN1.js";
import "./src-fKjZmfjv.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-V01ymwEk.js";
import "./MainSidebarHeader-DVHTC-6h.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-dxedTdnr.js";
import "./merge-Ch7EvJB5.js";
import "./_baseOrderBy-D9ro0sYB.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DRfCRtqt.js";
import "./versions.store-BzJQJG3D.js";
import "./usePageRedirectionHelper-C8MKg8Qh.js";
import "./useBugReporting-DareMcns.js";
import "./canvas.utils-Df6_R1uh.js";
import "./folders.store-B_rpgfRe.js";
import "./KeyboardShortcutTooltip-ky7f2v05.js";
import "./sourceControl.eventBus-BosH8k9W.js";
import "./useKeybindings-B8dWavhW.js";
import "./useGlobalEntityCreation-YtszZEB4.js";
import "./useSettingsItems-CdqA6GLn.js";
import { t as AppSidebar_default } from "./AppSidebar-gXm2-D-E.js";
import "./readyToRun.store-BI1T7qrS.js";
import "./resourceCenter.store-CRROM-_s.js";
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
