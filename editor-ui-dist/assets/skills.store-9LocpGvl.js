import { Af as init_reactivity_esm_bundler, Rf as ref, mo as defineStore } from "./vendor-BA8kaY8M.js";
import { Xy as useRootStore, bb as makeRestApiRequest } from "./app-DbOOaPK6.js";
//#region src/features/settings/context/skills.api.ts
var ENDPOINT = "/skills";
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
		deleteSkill: deleteSkill$1
	};
});
//#endregion
export { useSkillsStore as t };
