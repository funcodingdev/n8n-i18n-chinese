import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { N as updateAgentConfig, p as getAgentConfig } from "./useAgentApi-sdUpTCk-.js";
//#region src/features/agents/composables/useAgentConfig.ts
function useAgentConfig() {
	const rootStore = useRootStore();
	const config = ref(null);
	const loading = ref(false);
	let latestKey = null;
	function keyFor(projectId, agentId) {
		return `${projectId}:${agentId}`;
	}
	/**
	* Repoint the active (project, agent) pair without fetching: any in-flight
	* fetch/update for the previous pair resolves as stale, and the previous
	* pair's config is dropped so watchers stop serving it. Used on agent
	* switch BEFORE flushing the previous agent's pending save — otherwise that
	* save's response would land as current and repopulate the working copy
	* with the old agent's data.
	*/
	function repoint(projectId, agentId) {
		latestKey = keyFor(projectId, agentId);
		config.value = null;
		loading.value = false;
	}
	async function fetchConfig(projectId, agentId) {
		const key = keyFor(projectId, agentId);
		latestKey = key;
		loading.value = true;
		try {
			const fresh = await getAgentConfig(rootStore.restApiContext, projectId, agentId);
			if (latestKey === key) config.value = fresh;
		} finally {
			if (latestKey === key) loading.value = false;
		}
	}
	async function updateConfig(projectId, agentId, data) {
		const key = keyFor(projectId, agentId);
		const result = await updateAgentConfig(rootStore.restApiContext, projectId, agentId, data);
		const stale = latestKey !== key;
		if (!stale) config.value = result.config;
		return {
			versionId: result.versionId,
			stale
		};
	}
	return {
		config,
		loading,
		repoint,
		fetchConfig,
		updateConfig
	};
}
//#endregion
export { useAgentConfig as t };
