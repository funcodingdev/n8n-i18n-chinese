import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BhiJVBN1.js";
import { Ci as useRoute } from "./src-CoXSecun.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-DNFsxBs3.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-B69HgT-U.js";
import "./merge-Ch7EvJB5.js";
import "./_baseOrderBy-DDmiqX1z.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-fUGsrtT8.js";
import "./useClipboard-CQ_Uhb1w.js";
import "./executions.store-DHH2BiK8.js";
import "./assistant.store-BzAvwlAU.js";
import "./chatPanel.store-iPbty1hv.js";
import "./RunData-BgEucZdE.js";
import "./NDVEmptyState-Cdm1At8u.js";
import "./useEnvFeatureFlag-DUmya-lf.js";
import "./externalSecrets.ee.store-By0_F3Jt.js";
import "./uniqBy-CmQy5pUu.js";
import "./usePinnedData-DsohccEA.js";
import "./nodeIcon-BcpIPds6.js";
import "./canvas.utils-BDUvA23o.js";
import "./nodeCreator.store-BnureRr3.js";
import "./useCanvasOperations-G8rwRmFs.js";
import "./folders.store-b4jaUjZA.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-C8wQqbVB.js";
import "./useRunWorkflow-CboG-y2C.js";
import "./pushConnection.store-C86FgEPy.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-BXIFY4WE.js";
import "./dateFormatter-jGhDtpFs.js";
import "./useExecutionHelpers-DsDOyTD4.js";
import "./KeyboardShortcutTooltip-ChSOtraR.js";
import "./useKeybindings-nBCpcOQo.js";
import "./useLogsTreeExpand-oguRdeqE.js";
import { t as LogsPanel_default } from "./LogsPanel-CCOhPk86.js";
import "./AnimatedSpinner-DxjSO1-I.js";
import "./useResizablePanel-DouLg8Jd.js";
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
