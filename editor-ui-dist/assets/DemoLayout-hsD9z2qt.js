import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-0tqKZ63u.js";
import { yi as useRoute } from "./src-y1U2VbqR.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-ACeMu33y.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { xc as WorkflowIdKey } from "./constants-Cf-1GDJg.js";
import "./merge-ZzFu8YvX.js";
import "./_baseOrderBy-BBXzPM_B.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Di-EYAP3.js";
import "./useClipboard-CqJB6UAE.js";
import "./executions.store-D1pRj1S6.js";
import "./assistant.store-fSdyqRSP.js";
import "./chatPanel.store-D5s21RKD.js";
import "./RunData-ChfeF1sA.js";
import "./NDVEmptyState-C6lBU6KU.js";
import "./useEnvFeatureFlag-BICEthSZ.js";
import "./externalSecrets.ee.store-DDY8sHG3.js";
import "./uniqBy-C0ynS4J8.js";
import "./usePinnedData-B-b-xNbo.js";
import "./nodeIcon-BEBhQ4Ga.js";
import "./canvas.utils-mi2pDTnY.js";
import "./nodeCreator.store-DQcZpKBd.js";
import "./useCanvasOperations-CEJGjxXj.js";
import "./folders.store-Cb-OxJuh.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-CxAnFHRw.js";
import "./useRunWorkflow-D5q_vshw.js";
import "./pushConnection.store-B3bwHrSo.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-DHXTJD-H.js";
import "./dateFormatter-BhJ8mAh5.js";
import "./useExecutionHelpers-Cb6gwq1Q.js";
import "./KeyboardShortcutTooltip-Bz3HCEhu.js";
import "./useKeybindings-CZU4od4t.js";
import "./useLogsTreeExpand-DysxC8fG.js";
import { t as LogsPanel_default } from "./LogsPanel-dWI6nsfv.js";
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
