import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as useAsyncState } from "./dist-BkE9aYmt.js";
import { h as $14e0f24ef4ac5c92$export$aa8b41735afcabd2 } from "./CalendarDate-DwzQ3MAK.js";
import { $n as makeRestApiRequest, dr as defineStore, t as useRootStore } from "./useRootStore-CDIOxWm8.js";
import { ca as getResourcePermissions } from "./src-Vot4VemC.js";
import { t as useSettingsStore } from "./settings.store-JwowxuW0.js";
import { t as useUsersStore } from "./users.store-BI68ysRg.js";
import { c as transformInsightsSummary } from "./insights.utils-vaoSyXcv.js";
//#region src/features/execution/insights/insights.api.ts
function serializeInsightsFilter(filter) {
	if (!filter) return void 0;
	const { startDate, endDate, ...rest } = filter;
	const serialized = { ...rest };
	if (startDate) serialized.startDate = startDate.toISOString();
	if (endDate) serialized.endDate = endDate.toISOString();
	serialized.timeZone = $14e0f24ef4ac5c92$export$aa8b41735afcabd2();
	return serialized;
}
var fetchInsightsSummary = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/summary", serializeInsightsFilter(filter));
var fetchInsightsByTime = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time", serializeInsightsFilter(filter));
var fetchInsightsTimeSaved = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time/time-saved", serializeInsightsFilter(filter));
var fetchInsightsByWorkflow = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-workflow", serializeInsightsFilter(filter));
//#endregion
//#region src/features/execution/insights/insights.store.ts
var useInsightsStore = defineStore("insights", () => {
	const rootStore = useRootStore();
	const usersStore = useUsersStore();
	const settingsStore = useSettingsStore();
	const globalInsightsPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).insights);
	const isInsightsEnabled = computed(() => settingsStore.isModuleActive("insights"));
	const isDashboardEnabled = computed(() => !!settingsStore.moduleSettings.insights?.dashboard);
	return {
		globalInsightsPermissions,
		isInsightsEnabled,
		isSummaryEnabled: computed(() => globalInsightsPermissions.value.list && isInsightsEnabled.value),
		isDashboardEnabled,
		weeklySummary: useAsyncState(async () => {
			return transformInsightsSummary(await fetchInsightsSummary(rootStore.restApiContext));
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		summary: useAsyncState(async (filter) => {
			return transformInsightsSummary(await fetchInsightsSummary(rootStore.restApiContext, filter));
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		charts: useAsyncState(async (filter) => {
			return await (isDashboardEnabled.value ? fetchInsightsByTime : fetchInsightsTimeSaved)(rootStore.restApiContext, filter);
		}, [], {
			immediate: false,
			resetOnExecute: false
		}),
		table: useAsyncState(async (filter) => {
			return await fetchInsightsByWorkflow(rootStore.restApiContext, filter);
		}, {
			count: 0,
			data: []
		}, {
			immediate: false,
			resetOnExecute: false
		}),
		dateRanges: computed(() => settingsStore.moduleSettings.insights?.dateRanges ?? []),
		earliestDataDate: computed(() => settingsStore.moduleSettings.insights?.earliestDataDate ?? null)
	};
});
//#endregion
export { useInsightsStore as t };
