import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Jd as defineComponent, Jf as unref, Rd as computed, Vd as createCommentVNode, df as openBlock, jf as init_reactivity_esm_bundler } from "./vendor-AGzaQJYe.js";
import { LE as AiActivityStep_default } from "./app-DGoK9ugD.js";
import { t as useInstanceContextLabel } from "./instanceContextLabels-DdtzAUsV.js";
import { n as parseInstanceContextHostEvent } from "./assistantHostEvents-CHRiZydQ.js";
//#region src/features/ai/instanceAi/assistantAgent/AssistantInstanceContextHostEvent.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/ai/instanceAi/assistantAgent/AssistantInstanceContextHostEvent.vue
var AssistantInstanceContextHostEvent_default = /* @__PURE__ */ defineComponent({
	__name: "AssistantInstanceContextHostEvent",
	props: { event: {} },
	setup(__props) {
		const props = __props;
		const { getInstanceContextLabel } = useInstanceContextLabel();
		const label = computed(() => {
			const summary = parseInstanceContextHostEvent(props.event);
			return summary ? getInstanceContextLabel(summary) : "";
		});
		return (_ctx, _cache) => {
			return label.value ? (openBlock(), createBlock(unref(AiActivityStep_default), {
				key: 0,
				label: label.value,
				"has-content": false,
				"data-test-id": "assistant-agent-instance-context"
			}, null, 8, ["label"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { AssistantInstanceContextHostEvent_default as default };
