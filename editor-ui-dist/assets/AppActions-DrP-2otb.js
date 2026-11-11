import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Jd as defineComponent, Jf as unref, Rd as computed, Vd as createCommentVNode, df as openBlock, jf as init_reactivity_esm_bundler } from "./vendor-AGzaQJYe.js";
import { Ax as makeRestApiRequest, Dx as ResponseError, Ox as getFullApiResponse, Yb as useToast, fE as useMessage, qO as useI18n, rx as useRootStore, s as getAppPermissions, vO as N8nActionToggle_default } from "./app-MbtXRI_F.js";
//#region ../../modules/apps/frontend/src/apps.api.ts
async function listApps(context, projectId, options) {
	const endpoint = projectId ? `/projects/${projectId}/apps` : "/apps";
	return await getFullApiResponse(context, "GET", endpoint, options);
}
async function getApp(context, projectId, appId) {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/apps/${appId}`);
}
async function updateApp(context, projectId, appId, changes) {
	return await makeRestApiRequest(context, "PATCH", `/projects/${projectId}/apps/${appId}`, changes);
}
async function deleteApp(context, projectId, appId) {
	await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/apps/${appId}`);
}
async function listAppVersions(context, projectId, appId) {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/apps/${appId}/versions`);
}
async function getAppBuild(context, projectId, appId, versionId) {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/apps/${appId}/versions/${versionId}/build`);
}
async function createAppPreview(context, projectId, appId, versionId) {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/apps/${appId}/versions/${versionId}/preview`);
}
async function publishApp(context, projectId, appId, versionId) {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/apps/${appId}/publish`, { versionId });
}
async function unpublishApp(context, projectId, appId) {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/apps/${appId}/unpublish`);
}
//#endregion
//#region ../../modules/apps/frontend/src/components/AppActions.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region ../../modules/apps/frontend/src/components/AppActions.vue
var AppActions_default = /* @__PURE__ */ defineComponent({
	__name: "AppActions",
	props: { app: {} },
	emits: ["deleted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const rootStore = useRootStore();
		const canDelete = computed(() => getAppPermissions(props.app.projectId).canDelete);
		const actions = computed(() => [{
			label: i18n.baseText("generic.delete"),
			value: "delete"
		}]);
		async function onAction(action) {
			if (action !== "delete") return;
			if (await message.confirm(i18n.baseText("apps.delete.message", { interpolate: { name: props.app.name } }), i18n.baseText("apps.delete.title"), {
				confirmButtonText: i18n.baseText("generic.delete"),
				cancelButtonText: i18n.baseText("generic.cancel"),
				type: "warning"
			}) !== "confirm") return;
			try {
				await deleteApp(rootStore.restApiContext, props.app.projectId, props.app.id);
				emit("deleted", props.app.id);
			} catch (error) {
				if (error instanceof ResponseError && error.httpStatusCode === 404) {
					emit("deleted", props.app.id);
					return;
				}
				toast.showError(error, i18n.baseText("apps.delete.error"));
			}
		}
		return (_ctx, _cache) => {
			return canDelete.value ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
				key: 0,
				actions: actions.value,
				theme: "dark",
				"data-test-id": "app-actions",
				onAction
			}, null, 8, ["actions"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { listAppVersions as a, unpublishApp as c, getAppBuild as i, updateApp as l, createAppPreview as n, listApps as o, getApp as r, publishApp as s, AppActions_default as t };
