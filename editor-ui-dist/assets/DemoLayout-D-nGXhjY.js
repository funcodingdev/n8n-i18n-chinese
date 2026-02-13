import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BCefTEYw.js";
import { yi as useRoute } from "./src-wu1DeT-q.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-3JSNDD0x.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { xc as WorkflowIdKey } from "./constants-BxuLnwsr.js";
import "./merge-DfoBmFWu.js";
import "./_baseOrderBy-Bum33Aot.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-C4hcAGMS.js";
import "./useClipboard-CfVVNZ3q.js";
import "./executions.store-2ZJHbp3w.js";
import "./assistant.store-DWm7md31.js";
import "./chatPanel.store-C-bODv4n.js";
import "./RunData-B3L18GoQ.js";
import "./NDVEmptyState-CCaRpg4_.js";
import "./useEnvFeatureFlag-DRFkPIWE.js";
import "./externalSecrets.ee.store-DwAmbPcP.js";
import "./uniqBy-Dd1XCBfE.js";
import "./usePinnedData-CNo2Q31E.js";
import "./nodeIcon-DljzfVJF.js";
import "./canvas.utils-D8qyRd7D.js";
import "./nodeCreator.store-EYN2gKyC.js";
import "./useCanvasOperations-DPQBl29O.js";
import "./folders.store-D-n1yqo8.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-COQ7Hcq3.js";
import "./useRunWorkflow-BQQEzEJH.js";
import "./pushConnection.store-DV3d5ZOH.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-Hk05FXbw.js";
import "./dateFormatter-CgSkNeCX.js";
import "./useExecutionHelpers-zDCKOjN_.js";
import "./KeyboardShortcutTooltip-DcSHUlWs.js";
import "./useKeybindings-CcLUcQRr.js";
import "./useLogsTreeExpand-BxIssuFH.js";
import { t as LogsPanel_default } from "./LogsPanel-zMew1Ea2.js";
import "./AnimatedSpinner--2Ek9VrF.js";
import "./ChatFile-BrXecLHH.js";
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
