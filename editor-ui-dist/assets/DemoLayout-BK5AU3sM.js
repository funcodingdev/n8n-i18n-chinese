import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-pm4B1YcD.js";
import { Ci as useRoute } from "./src-B3wEFHds.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-Cfyj76Cq.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-Da_CaOjC.js";
import "./merge-C53jWkdi.js";
import "./_baseOrderBy-sLFpBNOQ.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-ChH2wV-P.js";
import "./useClipboard-de0mRNfc.js";
import "./executions.store-C1uP3mjd.js";
import "./assistant.store-BINIpHue.js";
import "./chatPanel.store-niMC_nma.js";
import "./RunData-Dmu-F2Ma.js";
import "./NDVEmptyState-80UtyM16.js";
import "./useEnvFeatureFlag-ChToAhDn.js";
import "./externalSecrets.ee.store-CFWJ7aVK.js";
import "./uniqBy-Dv3czTGz.js";
import "./usePinnedData-Bzp4yEO4.js";
import "./nodeIcon-CXujg-pV.js";
import "./canvas.utils-BVvTHoyE.js";
import "./nodeCreator.store-BzWVn9l7.js";
import "./useCanvasOperations-DOt8fOsU.js";
import "./folders.store-C98OBIEG.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-gEYnuVIT.js";
import "./useRunWorkflow-dTCfA8UQ.js";
import "./pushConnection.store-BX30GAEI.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-DnZd9c3G.js";
import "./dateFormatter-CprFMyvM.js";
import "./useExecutionHelpers-CoaC3ECl.js";
import "./KeyboardShortcutTooltip-tTk--iEd.js";
import "./useKeybindings-uQMAw0tC.js";
import "./useLogsTreeExpand-CqKuay-I.js";
import { t as LogsPanel_default } from "./LogsPanel-BJbYRsfV.js";
import "./AnimatedSpinner-DxjSO1-I.js";
import "./useResizablePanel-DiLEneSp.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const route = useRoute();
		provide(WorkflowIdKey, computed(() => {
			const name = route.params.name;
			return Array.isArray(name) ? name[0] : name;
		}));
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };
