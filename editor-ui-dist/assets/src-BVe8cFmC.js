import { It as ref, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { cr as defineStore, hn as getClusterInfo, t as useRootStore } from "./useRootStore-CLEJA2KF.js";
//#region ../../modules/instance-registry/frontend/src/instance-registry.module.ts
/**
* Store-only: this module contributes no UI surface, so registering it is a no-op —
* `moduleInitializer` guards every surface it reads. `AboutModal` and `useDebugInfo`
* consume the store directly; the descriptor is what makes this a module the shell
* knows about rather than a library it happens to import.
*/
var InstanceRegistryModule = {
	id: "instance-registry",
	name: "Instance Registry",
	description: "Reports which instances are in this deployment and their health",
	icon: "server"
};
//#endregion
//#region ../../modules/instance-registry/frontend/src/instance-registry.store.ts
var useInstanceRegistryStore = defineStore("instanceRegistry", () => {
	const rootStore = useRootStore();
	const clusterInfo = ref(null);
	const isAvailable = computed(() => clusterInfo.value !== null);
	async function fetchClusterInfo() {
		try {
			clusterInfo.value = await getClusterInfo(rootStore.restApiContext);
		} catch (error) {
			console.debug("Failed to fetch instance registry cluster info", error);
		}
	}
	return {
		clusterInfo,
		isAvailable,
		fetchClusterInfo
	};
});
//#endregion
export { InstanceRegistryModule as n, useInstanceRegistryStore as t };
