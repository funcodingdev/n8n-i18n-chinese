import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { cr as defineStore } from "./useRootStore-CLEJA2KF.js";
//#region src/features/agents/agentReturnContext.store.ts
var useAgentReturnContextStore = defineStore("agentReturnContext", () => {
	const context = ref(null);
	function set(ctx) {
		context.value = ctx;
	}
	function clear() {
		context.value = null;
	}
	return {
		context,
		set,
		clear
	};
});
//#endregion
export { useAgentReturnContextStore as t };
