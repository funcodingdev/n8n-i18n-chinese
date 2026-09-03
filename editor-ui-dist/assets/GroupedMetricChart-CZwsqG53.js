import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bn as normalizeStyle, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { Qn as makeRestApiRequest, fr as defineStore, lr as STORES, t as useRootStore } from "./useRootStore-Bapf3biO.js";
//#region src/features/ai/evaluation.ee/evalCollections.api.ts
var collectionsPath = (workflowId, collectionId) => `/workflows/${workflowId}/eval-collections${collectionId ? `/${collectionId}` : ""}`;
var getCollections = async (context, workflowId) => {
	return await makeRestApiRequest(context, "GET", collectionsPath(workflowId));
};
var getCollection = async (context, workflowId, collectionId) => {
	return await makeRestApiRequest(context, "GET", collectionsPath(workflowId, collectionId));
};
var createCollection = async (context, workflowId, payload) => {
	return await makeRestApiRequest(context, "POST", collectionsPath(workflowId), payload);
};
var rerunCollection = async (context, workflowId, collectionId) => {
	return await makeRestApiRequest(context, "POST", `${collectionsPath(workflowId, collectionId)}/rerun`);
};
var updateCollection = async (context, workflowId, collectionId, payload) => {
	return await makeRestApiRequest(context, "PATCH", collectionsPath(workflowId, collectionId), payload);
};
var deleteCollection = async (context, workflowId, collectionId) => {
	return await makeRestApiRequest(context, "DELETE", collectionsPath(workflowId, collectionId));
};
var addRunToCollection = async (context, workflowId, collectionId, payload) => {
	return await makeRestApiRequest(context, "POST", `${collectionsPath(workflowId, collectionId)}/runs`, payload);
};
var removeRunFromCollection = async (context, workflowId, collectionId, runId) => {
	return await makeRestApiRequest(context, "DELETE", `${collectionsPath(workflowId, collectionId)}/runs/${runId}`);
};
var getEvalVersions = async (context, workflowId, evaluationConfigId) => {
	return await makeRestApiRequest(context, "GET", `/workflows/${workflowId}/eval-versions`, { evaluationConfigId });
};
var generateInsights = async (context, workflowId, collectionId, payload = {}) => {
	return await makeRestApiRequest(context, "POST", `${collectionsPath(workflowId, collectionId)}/insights`, payload);
};
//#endregion
//#region src/features/ai/evaluation.ee/evalCollections.store.ts
var POLL_INTERVAL_MS = 3e3;
var MAX_POLL_FAILURES = 3;
var isTerminal = (status) => status === "completed" || status === "error" || status === "cancelled";
var hasInFlightRuns = (detail) => detail.runs.some((r) => !isTerminal(r.status));
var useEvalCollectionsStore = defineStore(STORES.EVAL_COLLECTIONS, () => {
	const rootStore = useRootStore();
	const collectionsByWorkflowId = ref({});
	const collectionDetailById = ref({});
	const insightsByCollectionId = ref({});
	const versionsByConfigId = ref({});
	const pollingTimeouts = ref({});
	const pollTokens = /* @__PURE__ */ new Map();
	const nextPollToken = (collectionId) => {
		const token = (pollTokens.get(collectionId) ?? 0) + 1;
		pollTokens.set(collectionId, token);
		return token;
	};
	const loadingCollections = ref(false);
	const loadingDetail = ref({});
	const loadingVersions = ref({});
	const loadingInsights = ref({});
	const isLoading = computed(() => loadingCollections.value);
	const getCollections$1 = (workflowId) => collectionsByWorkflowId.value[workflowId] ?? [];
	const getDetail = (collectionId) => collectionDetailById.value[collectionId] ?? null;
	const getInsights = (collectionId) => insightsByCollectionId.value[collectionId] ?? null;
	const getVersions = (evaluationConfigId) => versionsByConfigId.value[evaluationConfigId] ?? null;
	const fetchCollections = async (workflowId) => {
		loadingCollections.value = true;
		try {
			const list = await getCollections(rootStore.restApiContext, workflowId);
			collectionsByWorkflowId.value = {
				...collectionsByWorkflowId.value,
				[workflowId]: list
			};
			return list;
		} finally {
			loadingCollections.value = false;
		}
	};
	const fetchCollectionDetail = async (workflowId, collectionId) => {
		loadingDetail.value = {
			...loadingDetail.value,
			[collectionId]: true
		};
		try {
			const detail = await getCollection(rootStore.restApiContext, workflowId, collectionId);
			collectionDetailById.value = {
				...collectionDetailById.value,
				[collectionId]: detail
			};
			if (hasInFlightRuns(detail)) startPolling(workflowId, collectionId);
			else stopPolling(collectionId);
			return detail;
		} finally {
			loadingDetail.value = {
				...loadingDetail.value,
				[collectionId]: false
			};
		}
	};
	const fetchEvalVersions = async (workflowId, evaluationConfigId) => {
		loadingVersions.value = {
			...loadingVersions.value,
			[evaluationConfigId]: true
		};
		try {
			const response = await getEvalVersions(rootStore.restApiContext, workflowId, evaluationConfigId);
			versionsByConfigId.value = {
				...versionsByConfigId.value,
				[evaluationConfigId]: response
			};
			return response;
		} finally {
			loadingVersions.value = {
				...loadingVersions.value,
				[evaluationConfigId]: false
			};
		}
	};
	const createCollection$1 = async (workflowId, payload) => {
		const response = await createCollection(rootStore.restApiContext, workflowId, payload);
		const { runsStartedIds: _runs, ...record } = response;
		const list = collectionsByWorkflowId.value[workflowId] ?? [];
		collectionsByWorkflowId.value = {
			...collectionsByWorkflowId.value,
			[workflowId]: [record, ...list]
		};
		await fetchCollectionDetail(workflowId, record.id).catch(() => null);
		return response;
	};
	const rerunCollection$1 = async (workflowId, collectionId) => {
		const response = await rerunCollection(rootStore.restApiContext, workflowId, collectionId);
		const { [collectionId]: _stale, ...rest } = insightsByCollectionId.value;
		insightsByCollectionId.value = rest;
		await fetchCollectionDetail(workflowId, collectionId).catch(() => null);
		startPolling(workflowId, collectionId);
		return response;
	};
	const updateCollection$1 = async (workflowId, collectionId, payload) => {
		const updated = await updateCollection(rootStore.restApiContext, workflowId, collectionId, payload);
		const list = collectionsByWorkflowId.value[workflowId] ?? [];
		collectionsByWorkflowId.value = {
			...collectionsByWorkflowId.value,
			[workflowId]: list.map((c) => c.id === collectionId ? {
				...c,
				...updated
			} : c)
		};
		const cachedDetail = collectionDetailById.value[collectionId];
		if (cachedDetail) collectionDetailById.value = {
			...collectionDetailById.value,
			[collectionId]: {
				...cachedDetail,
				...updated
			}
		};
		return updated;
	};
	const deleteCollection$1 = async (workflowId, collectionId) => {
		const result = await deleteCollection(rootStore.restApiContext, workflowId, collectionId);
		if (result.success) {
			stopPolling(collectionId);
			const list = collectionsByWorkflowId.value[workflowId] ?? [];
			collectionsByWorkflowId.value = {
				...collectionsByWorkflowId.value,
				[workflowId]: list.filter((c) => c.id !== collectionId)
			};
			const { [collectionId]: _detail, ...restDetails } = collectionDetailById.value;
			collectionDetailById.value = restDetails;
			const { [collectionId]: _insights, ...restInsights } = insightsByCollectionId.value;
			insightsByCollectionId.value = restInsights;
		}
		return result;
	};
	const applyMembershipChange = (workflowId, collectionId, detail) => {
		collectionDetailById.value = {
			...collectionDetailById.value,
			[collectionId]: detail
		};
		const { [collectionId]: _stale, ...rest } = insightsByCollectionId.value;
		insightsByCollectionId.value = rest;
		if (hasInFlightRuns(detail)) startPolling(workflowId, collectionId);
		else stopPolling(collectionId);
	};
	const addExistingRun = async (workflowId, collectionId, testRunId) => {
		const detail = await addRunToCollection(rootStore.restApiContext, workflowId, collectionId, { testRunId });
		applyMembershipChange(workflowId, collectionId, detail);
		return detail;
	};
	const removeRun = async (workflowId, collectionId, runId) => {
		const detail = await removeRunFromCollection(rootStore.restApiContext, workflowId, collectionId, runId);
		applyMembershipChange(workflowId, collectionId, detail);
		return detail;
	};
	const generateInsights$1 = async (workflowId, collectionId, forceRegenerate = false) => {
		loadingInsights.value = {
			...loadingInsights.value,
			[collectionId]: true
		};
		try {
			const response = await generateInsights(rootStore.restApiContext, workflowId, collectionId, { forceRegenerate });
			insightsByCollectionId.value = {
				...insightsByCollectionId.value,
				[collectionId]: response
			};
			return response;
		} finally {
			loadingInsights.value = {
				...loadingInsights.value,
				[collectionId]: false
			};
		}
	};
	const startPolling = (workflowId, collectionId) => {
		if (pollingTimeouts.value[collectionId]) return;
		const token = nextPollToken(collectionId);
		const isCurrent = () => pollTokens.get(collectionId) === token;
		let failures = 0;
		const tick = async () => {
			if (!isCurrent()) return;
			try {
				const detail = await getCollection(rootStore.restApiContext, workflowId, collectionId);
				if (!isCurrent()) return;
				failures = 0;
				collectionDetailById.value = {
					...collectionDetailById.value,
					[collectionId]: detail
				};
				if (hasInFlightRuns(detail)) pollingTimeouts.value[collectionId] = setTimeout(tick, POLL_INTERVAL_MS);
				else {
					const { [collectionId]: _stale, ...rest } = insightsByCollectionId.value;
					insightsByCollectionId.value = rest;
					delete pollingTimeouts.value[collectionId];
				}
			} catch {
				if (!isCurrent()) return;
				failures += 1;
				if (failures >= MAX_POLL_FAILURES) {
					delete pollingTimeouts.value[collectionId];
					return;
				}
				pollingTimeouts.value[collectionId] = setTimeout(tick, POLL_INTERVAL_MS);
			}
		};
		pollingTimeouts.value[collectionId] = setTimeout(tick, POLL_INTERVAL_MS);
	};
	const stopPolling = (collectionId) => {
		nextPollToken(collectionId);
		const handle = pollingTimeouts.value[collectionId];
		if (handle) {
			clearTimeout(handle);
			delete pollingTimeouts.value[collectionId];
		}
	};
	const cleanupPolling = () => {
		for (const collectionId of pollTokens.keys()) nextPollToken(collectionId);
		Object.values(pollingTimeouts.value).forEach((handle) => clearTimeout(handle));
		pollingTimeouts.value = {};
	};
	return {
		collectionsByWorkflowId,
		collectionDetailById,
		insightsByCollectionId,
		versionsByConfigId,
		loadingDetail,
		loadingVersions,
		loadingInsights,
		isLoading,
		getCollections: getCollections$1,
		getDetail,
		getInsights,
		getVersions,
		fetchCollections,
		fetchCollectionDetail,
		fetchEvalVersions,
		createCollection: createCollection$1,
		rerunCollection: rerunCollection$1,
		updateCollection: updateCollection$1,
		deleteCollection: deleteCollection$1,
		addExistingRun,
		removeRun,
		generateInsights: generateInsights$1,
		startPolling,
		stopPolling,
		cleanupPolling
	};
});
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/RunningIndicator.vue?vue&type=script&setup=true&lang.ts
var RunningIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunningIndicator",
	props: {
		completed: {},
		total: {}
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(_ctx.$style.indicator),
				"data-test-id": "eval-running-indicator"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "spinner",
				size: "xsmall",
				spin: ""
			}), createVNode(unref(N8nText_default), {
				size: "xsmall",
				bold: true,
				compact: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.card.runningProgress", { interpolate: {
					completed: __props.completed,
					total: __props.total
				} })), 1)]),
				_: 1
			})], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/RunningIndicator.vue?vue&type=style&index=0&lang.module.scss
var indicator = "_indicator_ira3m_388";
var shimmer$2 = "_shimmer_ira3m_1";
var spin$2 = "_spin_ira3m_1";
var opacityPulse$2 = "_opacityPulse_ira3m_1";
var popoverIn$2 = "_popoverIn_ira3m_1";
var fadeIn$2 = "_fadeIn_ira3m_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_ira3m_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_ira3m_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_ira3m_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_ira3m_1";
var blurSwapIn$2 = "_blurSwapIn_ira3m_1";
var blurSwapOut$2 = "_blurSwapOut_ira3m_1";
var pulseGlow$2 = "_pulseGlow_ira3m_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_ira3m_1";
var fade$2 = "_fade_ira3m_1";
var fadeInUp$2 = "_fadeInUp_ira3m_1";
var fadeInDown$2 = "_fadeInDown_ira3m_1";
var fadeInLeft$2 = "_fadeInLeft_ira3m_1";
var fadeInRight$2 = "_fadeInRight_ira3m_1";
var fadeOut$2 = "_fadeOut_ira3m_1";
var fadeOutDown$2 = "_fadeOutDown_ira3m_1";
var fadeOutUp$2 = "_fadeOutUp_ira3m_1";
var fadeOutLeft$2 = "_fadeOutLeft_ira3m_1";
var fadeOutRight$2 = "_fadeOutRight_ira3m_1";
var ping$2 = "_ping_ira3m_1";
var blinkBackground$2 = "_blinkBackground_ira3m_1";
var typingBlink$2 = "_typingBlink_ira3m_1";
var RunningIndicator_vue_vue_type_style_index_0_lang_module_default = {
	indicator,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_ira3m_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var RunningIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunningIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunningIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/versionPalette.ts
var VERSION_PALETTE = [
	"--color--neutral-800",
	"--color--green-600",
	"--color--orange-500",
	"--color--blue-600",
	"--color--purple-600",
	"--color--red-600"
];
var versionColorVar = (index) => `var(${VERSION_PALETTE[index % VERSION_PALETTE.length]})`;
var versionLetter = (index) => {
	if (index < 26) return String.fromCharCode(65 + index);
	const first = Math.floor(index / 26) - 1;
	const second = index % 26;
	return String.fromCharCode(65 + first) + String.fromCharCode(65 + second);
};
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/VersionAvatar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var VersionAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VersionAvatar",
	props: {
		index: {},
		variant: { default: "square" },
		size: { default: "medium" }
	},
	setup(__props) {
		const props = __props;
		const label = computed(() => versionLetter(props.index));
		const swatch = computed(() => versionColorVar(props.index));
		return (_ctx, _cache) => {
			return __props.variant === "square" ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass([_ctx.$style.avatar, _ctx.$style[__props.size]]),
				style: normalizeStyle({ background: swatch.value }),
				"data-test-id": "version-avatar"
			}, toDisplayString(label.value), 7)) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass([_ctx.$style.dot, _ctx.$style[__props.size]]),
				style: normalizeStyle({ background: swatch.value }),
				"data-test-id": "version-avatar-dot",
				"aria-label": label.value
			}, null, 14, _hoisted_1$1));
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/VersionAvatar.vue?vue&type=style&index=0&lang.module.scss
var avatar = "_avatar_1w4fy_388";
var small = "_small_1w4fy_399";
var medium = "_medium_1w4fy_405";
var dot = "_dot_1w4fy_411";
var shimmer$1 = "_shimmer_1w4fy_1";
var spin$1 = "_spin_1w4fy_1";
var opacityPulse$1 = "_opacityPulse_1w4fy_1";
var popoverIn$1 = "_popoverIn_1w4fy_1";
var fadeIn$1 = "_fadeIn_1w4fy_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1w4fy_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1w4fy_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1w4fy_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1w4fy_1";
var blurSwapIn$1 = "_blurSwapIn_1w4fy_1";
var blurSwapOut$1 = "_blurSwapOut_1w4fy_1";
var pulseGlow$1 = "_pulseGlow_1w4fy_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1w4fy_1";
var fade$1 = "_fade_1w4fy_1";
var fadeInUp$1 = "_fadeInUp_1w4fy_1";
var fadeInDown$1 = "_fadeInDown_1w4fy_1";
var fadeInLeft$1 = "_fadeInLeft_1w4fy_1";
var fadeInRight$1 = "_fadeInRight_1w4fy_1";
var fadeOut$1 = "_fadeOut_1w4fy_1";
var fadeOutDown$1 = "_fadeOutDown_1w4fy_1";
var fadeOutUp$1 = "_fadeOutUp_1w4fy_1";
var fadeOutLeft$1 = "_fadeOutLeft_1w4fy_1";
var fadeOutRight$1 = "_fadeOutRight_1w4fy_1";
var ping$1 = "_ping_1w4fy_1";
var blinkBackground$1 = "_blinkBackground_1w4fy_1";
var typingBlink$1 = "_typingBlink_1w4fy_1";
var VersionAvatar_vue_vue_type_style_index_0_lang_module_default = {
	avatar,
	small,
	medium,
	dot,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1w4fy_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var VersionAvatar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(VersionAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VersionAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/GroupedMetricChart.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["title"];
var _hoisted_2 = [
	"width",
	"height",
	"viewBox",
	"aria-label"
];
var _hoisted_3 = [
	"x",
	"y",
	"fill"
];
var _hoisted_4 = [
	"x",
	"y",
	"width",
	"height",
	"fill"
];
var _hoisted_5 = ["x", "y"];
var CRITICAL_COLOR = "var(--icon-color--danger)";
var GroupedMetricChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GroupedMetricChart",
	props: {
		groups: {},
		max: { default: 1 },
		variant: { default: "mini" },
		criticalThreshold: { default: null }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const GEOMETRY = {
			mini: {
				barWidth: 18,
				barGap: 5,
				groupGap: 72,
				barsHeight: 72,
				topPad: 0,
				bottomPad: 0
			},
			detailed: {
				barWidth: 28,
				barGap: 12,
				groupGap: 40,
				barsHeight: 120,
				topPad: 20,
				bottomPad: 22
			}
		};
		const geo = computed(() => GEOMETRY[props.variant]);
		const clamp01 = (v, max) => {
			if (!Number.isFinite(v)) return 0;
			return Math.max(0, Math.min(1, v / max));
		};
		const isCritical = (value) => props.criticalThreshold !== null && value !== null && value / props.max < props.criticalThreshold;
		const layout = computed(() => {
			const { barWidth, barGap, groupGap, barsHeight, topPad } = geo.value;
			const detailed = props.variant === "detailed";
			const rendered = [];
			let x = 0;
			const versionsPerGroup = props.groups[0]?.values.length ?? 0;
			const groupWidth = versionsPerGroup * barWidth + Math.max(0, versionsPerGroup - 1) * barGap;
			for (const group of props.groups) {
				const bars = [];
				group.values.forEach((value, vi) => {
					const fraction = value === null ? 0 : clamp01(value, props.max);
					const h = Math.round(fraction * barsHeight);
					const barX = x + vi * (barWidth + barGap);
					const critical = isCritical(value);
					bars.push({
						x: barX,
						y: topPad + (barsHeight - h),
						width: barWidth,
						height: h,
						color: critical ? CRITICAL_COLOR : versionColorVar(vi),
						labelX: barX + barWidth / 2,
						valueLabel: detailed && value !== null ? `${Math.round(value / props.max * 100)}%` : null,
						letter: detailed ? group.letters?.[vi] ?? null : null,
						titleText: value === null ? i18n.baseText("evaluation.collections.chart.barNoData", { interpolate: { metric: group.label } }) : i18n.baseText("evaluation.collections.chart.barValue", { interpolate: {
							metric: group.label,
							value: String(Math.round(value * 100))
						} })
					});
				});
				rendered.push({
					label: group.label,
					x,
					width: groupWidth,
					bars
				});
				x += groupWidth + groupGap;
			}
			return {
				width: x === 0 ? 0 : x - groupGap,
				groups: rendered
			};
		});
		const svgHeight = computed(() => geo.value.topPad + geo.value.barsHeight + geo.value.bottomPad);
		const letterY = computed(() => geo.value.topPad + geo.value.barsHeight + geo.value.bottomPad - 6);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrap),
				"data-test-id": "grouped-metric-chart"
			}, [__props.variant === "mini" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.labelsRow),
				style: normalizeStyle({ width: `${layout.value.width}px` })
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(layout.value.groups, (group) => {
				return openBlock(), createElementBlock("div", {
					key: `label-${group.label}`,
					class: normalizeClass(_ctx.$style.label),
					style: normalizeStyle({
						width: `${group.width + geo.value.groupGap}px`,
						marginRight: 0
					}),
					title: group.label
				}, toDisplayString(group.label), 15, _hoisted_1);
			}), 128))], 6)) : createCommentVNode("", true), (openBlock(), createElementBlock("svg", {
				width: layout.value.width,
				height: svgHeight.value,
				viewBox: `0 0 ${layout.value.width} ${svgHeight.value}`,
				role: "img",
				"aria-label": unref(i18n).baseText("evaluation.collections.chart.ariaLabel", { adjustToNumber: __props.groups.length })
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(layout.value.groups, (group) => {
				return openBlock(), createElementBlock("g", { key: group.label }, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.bars, (bar) => {
					return openBlock(), createElementBlock(Fragment, { key: `${group.label}-${bar.x}` }, [
						bar.valueLabel !== null ? (openBlock(), createElementBlock("text", {
							key: 0,
							x: bar.labelX,
							y: geo.value.topPad - 6,
							class: normalizeClass(_ctx.$style.valueLabel),
							fill: bar.color,
							"text-anchor": "middle"
						}, toDisplayString(bar.valueLabel), 11, _hoisted_3)) : createCommentVNode("", true),
						createBaseVNode("rect", {
							x: bar.x,
							y: bar.y,
							width: bar.width,
							height: bar.height,
							rx: "1.5",
							fill: bar.color
						}, [createBaseVNode("title", null, toDisplayString(bar.titleText), 1)], 8, _hoisted_4),
						bar.letter !== null ? (openBlock(), createElementBlock("text", {
							key: 1,
							x: bar.labelX,
							y: letterY.value,
							class: normalizeClass(_ctx.$style.letterLabel),
							"text-anchor": "middle"
						}, toDisplayString(bar.letter), 11, _hoisted_5)) : createCommentVNode("", true)
					], 64);
				}), 128))]);
			}), 128))], 8, _hoisted_2))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/GroupedMetricChart.vue?vue&type=style&index=0&lang.module.scss
var wrap = "_wrap_1vk6o_388";
var labelsRow = "_labelsRow_1vk6o_394";
var label = "_label_1vk6o_394";
var valueLabel = "_valueLabel_1vk6o_413";
var letterLabel = "_letterLabel_1vk6o_419";
var shimmer = "_shimmer_1vk6o_1";
var spin = "_spin_1vk6o_1";
var opacityPulse = "_opacityPulse_1vk6o_1";
var popoverIn = "_popoverIn_1vk6o_1";
var fadeIn = "_fadeIn_1vk6o_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1vk6o_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1vk6o_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1vk6o_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1vk6o_1";
var blurSwapIn = "_blurSwapIn_1vk6o_1";
var blurSwapOut = "_blurSwapOut_1vk6o_1";
var pulseGlow = "_pulseGlow_1vk6o_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1vk6o_1";
var fade = "_fade_1vk6o_1";
var fadeInUp = "_fadeInUp_1vk6o_1";
var fadeInDown = "_fadeInDown_1vk6o_1";
var fadeInLeft = "_fadeInLeft_1vk6o_1";
var fadeInRight = "_fadeInRight_1vk6o_1";
var fadeOut = "_fadeOut_1vk6o_1";
var fadeOutDown = "_fadeOutDown_1vk6o_1";
var fadeOutUp = "_fadeOutUp_1vk6o_1";
var fadeOutLeft = "_fadeOutLeft_1vk6o_1";
var fadeOutRight = "_fadeOutRight_1vk6o_1";
var ping = "_ping_1vk6o_1";
var blinkBackground = "_blinkBackground_1vk6o_1";
var typingBlink = "_typingBlink_1vk6o_1";
var GroupedMetricChart_vue_vue_type_style_index_0_lang_module_default = {
	wrap,
	labelsRow,
	label,
	valueLabel,
	letterLabel,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1vk6o_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var GroupedMetricChart_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GroupedMetricChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GroupedMetricChart_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RunningIndicator_default as a, versionLetter as i, VersionAvatar_default as n, useEvalCollectionsStore as o, versionColorVar as r, GroupedMetricChart_default as t };
