import { ho as defineStore, jf as init_reactivity_esm_bundler, zf as ref } from "./vendor-AGzaQJYe.js";
import { kx as makeRestApiRequest, nx as useRootStore } from "./app-DGoK9ugD.js";
//#region src/features/settings/context/skills.api.ts
var ENDPOINT = "/skills";
var SOURCES_ENDPOINT = "/skill-sources";
async function getSkills(context, query = {}) {
	return await makeRestApiRequest(context, "GET", ENDPOINT, { ...query });
}
/** The users who created a skill that the current user can see. */
async function getSkillCreators(context) {
	return await makeRestApiRequest(context, "GET", `${ENDPOINT}/creators`);
}
/** The agents the current user can read, searched by name, for the agent filter. */
async function getSkillAgents(context, query = {}) {
	return await makeRestApiRequest(context, "GET", `${ENDPOINT}/agents`, { ...query });
}
/** A name that no skill in the scope has yet: the requested name, or the name with a number. */
async function getNewSkillName(context, query) {
	return (await makeRestApiRequest(context, "GET", `${ENDPOINT}/new-name`, { ...query })).name;
}
async function getSkill(context, id) {
	return await makeRestApiRequest(context, "GET", `${ENDPOINT}/${id}`);
}
async function createSkill(context, payload) {
	return await makeRestApiRequest(context, "POST", ENDPOINT, payload);
}
/** Saves the next version. Answers `created: false` when the content matches the latest one. */
async function saveSkill(context, id, payload) {
	return await makeRestApiRequest(context, "PATCH", `${ENDPOINT}/${id}`, payload);
}
async function deleteSkill(context, id) {
	await makeRestApiRequest(context, "DELETE", `${ENDPOINT}/${id}`);
}
/** The scope of a source, as the credential and repository lists take it. */
/** The credentials that a source in the scope accepts and that the user can use. */
async function getSkillSourceCredentials(context, query) {
	return await makeRestApiRequest(context, "GET", `${SOURCES_ENDPOINT}/credentials`, { ...query });
}
/** The repositories that a credential can read, for the owner and repository selects. */
async function getSkillSourceRepositories(context, query) {
	return await makeRestApiRequest(context, "GET", `${SOURCES_ENDPOINT}/repositories`, { ...query });
}
/** Reads a link, with a credential for a private one, and lists the skills in it. Writes nothing. */
async function discoverSkillSource(context, payload) {
	return await makeRestApiRequest(context, "POST", `${SOURCES_ENDPOINT}/discover`, payload);
}
/** Connects the source in the scope and imports the picked skills as synced skills. */
async function connectSkillSource(context, payload) {
	return await makeRestApiRequest(context, "POST", SOURCES_ENDPOINT, payload);
}
/** Stops syncing one skill: it keeps its versions and becomes a normal, editable skill. */
/** Check now: checks the whole source of a synced skill for updates. */
async function checkSkillForUpdates(context, skillId) {
	return await makeRestApiRequest(context, "POST", `${SOURCES_ENDPOINT}/skills/${skillId}/check`);
}
async function stopSyncingSkill(context, skillId) {
	await makeRestApiRequest(context, "POST", `${SOURCES_ENDPOINT}/skills/${skillId}/stop-syncing`);
}
//#endregion
//#region src/features/settings/context/skills.store.ts
init_reactivity_esm_bundler();
/** The skills list in Settings > Context > Skills. */
var useSkillsStore = defineStore("contextSkills", () => {
	const rootStore = useRootStore();
	const skills = ref([]);
	const count = ref(0);
	const loading = ref(false);
	let latestRead = 0;
	async function fetchSkills(query = {}) {
		const read = ++latestRead;
		loading.value = true;
		try {
			const response = await getSkills(rootStore.restApiContext, query);
			if (read === latestRead) {
				skills.value = response.data;
				count.value = response.count;
			}
			return response;
		} finally {
			if (read === latestRead) loading.value = false;
		}
	}
	/** The overview card needs the total only, so it asks for a single row. */
	async function fetchSkillCount() {
		await fetchSkills({ take: 1 });
	}
	/** For the creator filter of the skills list. */
	async function fetchCreators() {
		return await getSkillCreators(rootStore.restApiContext);
	}
	/** For the agent filter of the skills list. */
	async function fetchAgents(query = {}) {
		return await getSkillAgents(rootStore.restApiContext, query);
	}
	/** A default name that no skill in the scope has yet. */
	async function fetchNewSkillName(query) {
		return await getNewSkillName(rootStore.restApiContext, query);
	}
	async function fetchSkill(id) {
		return await getSkill(rootStore.restApiContext, id);
	}
	async function createSkill$1(payload) {
		return await createSkill(rootStore.restApiContext, payload);
	}
	async function saveSkill$1(id, payload) {
		return await saveSkill(rootStore.restApiContext, id, payload);
	}
	async function deleteSkill$1(id) {
		await deleteSkill(rootStore.restApiContext, id);
	}
	/** The credentials that can read a private source in the scope. */
	async function fetchSourceCredentials(query) {
		return await getSkillSourceCredentials(rootStore.restApiContext, query);
	}
	/** The repositories that a credential can read, to pick one in place of a link. */
	async function fetchSourceRepositories(query) {
		return await getSkillSourceRepositories(rootStore.restApiContext, query);
	}
	/** Lists the skills that a GitHub link holds, for the "Choose skills" picker. */
	async function discoverSource(payload) {
		return await discoverSkillSource(rootStore.restApiContext, payload);
	}
	/** Connects a GitHub link and imports the picked skills. The caller reloads the list. */
	async function connectSource(payload) {
		return await connectSkillSource(rootStore.restApiContext, payload);
	}
	/** Stops syncing one skill, which makes it editable. The caller reloads the list. */
	async function stopSyncingSkill$1(id) {
		await stopSyncingSkill(rootStore.restApiContext, id);
	}
	/** Check now on the source of a synced skill. The caller reloads the list. */
	async function checkForUpdates(id) {
		return await checkSkillForUpdates(rootStore.restApiContext, id);
	}
	return {
		skills,
		count,
		loading,
		fetchSkills,
		fetchSkillCount,
		fetchCreators,
		fetchAgents,
		fetchSkill,
		fetchNewSkillName,
		createSkill: createSkill$1,
		saveSkill: saveSkill$1,
		deleteSkill: deleteSkill$1,
		fetchSourceCredentials,
		fetchSourceRepositories,
		discoverSource,
		connectSource,
		stopSyncingSkill: stopSyncingSkill$1,
		checkForUpdates
	};
});
//#endregion
export { useSkillsStore as t };
