import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nPagination_default } from "./N8nPagination-CqSQsgnT.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { u as averageNormalizedScore } from "./src-C3aqUyDp.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import "./constants-DPRLSskW.js";
import { t as useEvaluationStore } from "./evaluation.store-Ilr0RB0T.js";
import { a as countSettledRuns, o as deriveRunsStatus, t as buildScoreShapedMetricGroups } from "./evaluation.utils-BMEdc42j.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-BvLKOmrY.js";
import { a as RunningIndicator_default, n as VersionAvatar_default, o as useEvalCollectionsStore, t as GroupedMetricChart_default } from "./GroupedMetricChart-CZwsqG53.js";
//#region src/features/ai/evaluation.ee/components/EvalCollectionsListView/CollectionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var CollectionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CollectionCard",
	props: {
		collection: {},
		detail: {},
		workflowId: {},
		datasetName: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const store = useEvalCollectionsStore();
		const openCompare = () => {
			router.push({
				name: VIEWS.EVALUATION_COLLECTION_COMPARE,
				params: {
					workflowId: props.workflowId,
					collectionId: props.collection.id
				}
			});
		};
		const status = computed(() => props.detail ? deriveRunsStatus(props.detail.runs) : null);
		const isRunning = computed(() => status.value === "running");
		const completedCount = computed(() => countSettledRuns(props.detail?.runs ?? []));
		const versionCount = computed(() => props.detail?.runs.length ?? 0);
		const statusBadge = computed(() => {
			switch (status.value) {
				case "done": return {
					theme: "success",
					label: i18n.baseText("evaluation.collections.card.done")
				};
				case "error": return {
					theme: "danger",
					label: i18n.baseText("evaluation.collections.card.failed")
				};
				default: return null;
			}
		});
		const ctaLabel = computed(() => {
			const key = status.value === "running" ? "evaluation.compare.viewProgress" : "evaluation.compare.openCompare";
			return `${i18n.baseText(key)} →`;
		});
		const lastRunRelative = computed(() => {
			const completedAts = (props.detail?.runs ?? []).map((r) => r.completedAt ?? r.runAt).filter((v) => !!v).map((s) => new Date(s).getTime()).filter((n) => !Number.isNaN(n));
			const ts = completedAts.length ? Math.max(...completedAts) : new Date(props.collection.updatedAt ?? 0).getTime();
			if (!ts || Number.isNaN(ts)) return null;
			const d = new Date(ts);
			const today = /* @__PURE__ */ new Date();
			const sameDay = d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
			const timeFmt = d.toLocaleTimeString(void 0, {
				hour: "2-digit",
				minute: "2-digit"
			});
			if (sameDay) return i18n.baseText("evaluation.collections.card.lastRunToday", { interpolate: { time: timeFmt } });
			const dateFmt = d.toLocaleDateString(void 0, {
				month: "short",
				day: "numeric"
			});
			return i18n.baseText("evaluation.collections.card.lastRunOn", { interpolate: {
				date: dateFmt,
				time: timeFmt
			} });
		});
		const shortHash = (id) => id.slice(0, 7);
		const versionChips = computed(() => (props.detail?.runs ?? []).map((run, idx) => ({
			key: run.testRunId,
			index: idx,
			label: run.workflowVersionId === null ? i18n.baseText("evaluation.collections.card.currentDraft") : shortHash(run.workflowVersionId),
			score: run.avgScore !== null ? Math.round(run.avgScore * 100) : null
		})));
		const groups = computed(() => props.detail ? buildScoreShapedMetricGroups(props.detail.runs, props.detail.metricScales).map(({ key, values }) => ({
			label: key,
			values
		})) : []);
		const cardRef = ref(null);
		const requested = ref(false);
		const ensureDetailLoaded = () => {
			if (props.detail || requested.value) return;
			requested.value = true;
			store.fetchCollectionDetail(props.workflowId, props.collection.id).catch(() => {
				requested.value = false;
			});
		};
		const { observe } = useIntersectionObserver({
			root: ref(null),
			onIntersect: ensureDetailLoaded,
			once: false
		});
		onMounted(() => observe(cardRef.value));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("article", {
				ref_key: "cardRef",
				ref: cardRef,
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "eval-collections-card"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardTopRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeading) }, [createVNode(unref(N8nText_default), {
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.collection.name), 1)]),
					_: 1
				}), isRunning.value ? (openBlock(), createBlock(RunningIndicator_default, {
					key: 0,
					completed: completedCount.value,
					total: versionCount.value
				}, null, 8, ["completed", "total"])) : statusBadge.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 1,
					theme: statusBadge.value.theme,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(statusBadge.value.label), 1)]),
					_: 1
				}, 8, ["theme"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), {
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [
						createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("evaluation.collections.card.meta.versions", { adjustToNumber: __props.detail?.runs.length ?? __props.collection.runCount })), 1),
						__props.datasetName ? (openBlock(), createElementBlock("span", _hoisted_1$2, " · " + toDisplayString(__props.datasetName), 1)) : createCommentVNode("", true),
						lastRunRelative.value ? (openBlock(), createElementBlock("span", _hoisted_2$1, " · " + toDisplayString(lastRunRelative.value), 1)) : createCommentVNode("", true)
					]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardCta) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					label: ctaLabel.value,
					"data-test-id": "eval-collections-card-cta",
					onClick: openCompare
				}, null, 8, ["label"])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.versionsRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(versionChips.value, (chip) => {
					return openBlock(), createElementBlock("span", {
						key: chip.key,
						class: normalizeClass(_ctx.$style.versionChip)
					}, [
						createVNode(VersionAvatar_default, {
							index: chip.index,
							variant: "dot",
							size: "small"
						}, null, 8, ["index"]),
						createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(chip.label), 1)]),
							_: 2
						}, 1024),
						chip.score !== null ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "xsmall",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(chip.score) + "%", 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)
					], 2);
				}), 128))], 2),
				groups.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.cardChart)
				}, [createVNode(GroupedMetricChart_default, {
					groups: groups.value,
					max: 1
				}, null, 8, ["groups"])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/EvalCollectionsListView/CollectionCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_1s8wf_388";
var cardTopRow = "_cardTopRow_1s8wf_402";
var cardHeader = "_cardHeader_1s8wf_409";
var cardHeading = "_cardHeading_1s8wf_416";
var versionsRow = "_versionsRow_1s8wf_422";
var versionChip = "_versionChip_1s8wf_428";
var cardChart = "_cardChart_1s8wf_437";
var cardCta = "_cardCta_1s8wf_441";
var shimmer$5 = "_shimmer_1s8wf_1";
var spin$5 = "_spin_1s8wf_1";
var opacityPulse$5 = "_opacityPulse_1s8wf_1";
var popoverIn$5 = "_popoverIn_1s8wf_1";
var fadeIn$5 = "_fadeIn_1s8wf_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_1s8wf_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_1s8wf_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_1s8wf_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_1s8wf_1";
var blurSwapIn$5 = "_blurSwapIn_1s8wf_1";
var blurSwapOut$5 = "_blurSwapOut_1s8wf_1";
var pulseGlow$5 = "_pulseGlow_1s8wf_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_1s8wf_1";
var fade$5 = "_fade_1s8wf_1";
var fadeInUp$5 = "_fadeInUp_1s8wf_1";
var fadeInDown$5 = "_fadeInDown_1s8wf_1";
var fadeInLeft$5 = "_fadeInLeft_1s8wf_1";
var fadeInRight$5 = "_fadeInRight_1s8wf_1";
var fadeOut$5 = "_fadeOut_1s8wf_1";
var fadeOutDown$5 = "_fadeOutDown_1s8wf_1";
var fadeOutUp$5 = "_fadeOutUp_1s8wf_1";
var fadeOutLeft$5 = "_fadeOutLeft_1s8wf_1";
var fadeOutRight$5 = "_fadeOutRight_1s8wf_1";
var ping$5 = "_ping_1s8wf_1";
var blinkBackground$5 = "_blinkBackground_1s8wf_1";
var typingBlink$5 = "_typingBlink_1s8wf_1";
var CollectionCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	cardTopRow,
	cardHeader,
	cardHeading,
	versionsRow,
	versionChip,
	cardChart,
	cardCta,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_1s8wf_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var CollectionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CollectionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CollectionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupCollectionWizard/DatasetPicker.vue?vue&type=script&setup=true&lang.ts
var DatasetPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DatasetPicker",
	props: {
		options: {},
		selectedId: {},
		matchingVersionsCount: {},
		hasSelection: { type: Boolean }
	},
	emits: ["update:selectedId"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrap),
				"data-test-id": "dataset-picker"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.pickerRow) }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.datasetIcon),
				"aria-hidden": "true"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "database",
				size: "small"
			})], 2), createVNode(unref(N8nSelect_default), {
				class: normalizeClass(_ctx.$style.select),
				"model-value": __props.selectedId ?? "",
				placeholder: unref(i18n).baseText("evaluation.setup.dataset.placeholder"),
				size: "medium",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:selectedId", $event))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (opt) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: opt.id,
						value: opt.id,
						label: opt.label
					}, null, 8, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, [
				"class",
				"model-value",
				"placeholder"
			])], 2), __props.hasSelection ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.helper)
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.dot) }, null, 2), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.dataset.matchCount", { adjustToNumber: __props.matchingVersionsCount })), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupCollectionWizard/DatasetPicker.vue?vue&type=style&index=0&lang.module.scss
var wrap$1 = "_wrap_17a0d_388";
var pickerRow = "_pickerRow_17a0d_394";
var datasetIcon = "_datasetIcon_17a0d_401";
var select = "_select_17a0d_412";
var helper = "_helper_17a0d_416";
var dot = "_dot_17a0d_423";
var shimmer$4 = "_shimmer_17a0d_1";
var spin$4 = "_spin_17a0d_1";
var opacityPulse$4 = "_opacityPulse_17a0d_1";
var popoverIn$4 = "_popoverIn_17a0d_1";
var fadeIn$4 = "_fadeIn_17a0d_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_17a0d_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_17a0d_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_17a0d_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_17a0d_1";
var blurSwapIn$4 = "_blurSwapIn_17a0d_1";
var blurSwapOut$4 = "_blurSwapOut_17a0d_1";
var pulseGlow$4 = "_pulseGlow_17a0d_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_17a0d_1";
var fade$4 = "_fade_17a0d_1";
var fadeInUp$4 = "_fadeInUp_17a0d_1";
var fadeInDown$4 = "_fadeInDown_17a0d_1";
var fadeInLeft$4 = "_fadeInLeft_17a0d_1";
var fadeInRight$4 = "_fadeInRight_17a0d_1";
var fadeOut$4 = "_fadeOut_17a0d_1";
var fadeOutDown$4 = "_fadeOutDown_17a0d_1";
var fadeOutUp$4 = "_fadeOutUp_17a0d_1";
var fadeOutLeft$4 = "_fadeOutLeft_17a0d_1";
var fadeOutRight$4 = "_fadeOutRight_17a0d_1";
var ping$4 = "_ping_17a0d_1";
var blinkBackground$4 = "_blinkBackground_17a0d_1";
var typingBlink$4 = "_typingBlink_17a0d_1";
var DatasetPicker_vue_vue_type_style_index_0_lang_module_default = {
	wrap: wrap$1,
	pickerRow,
	datasetIcon,
	select,
	helper,
	dot,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_17a0d_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var DatasetPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DatasetPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DatasetPicker_vue_vue_type_style_index_0_lang_module_default }]]);
var versionRowKey = (version) => version.workflowVersionId ?? "__draft__";
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupCollectionWizard/VersionsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["onClick"];
var _hoisted_2 = ["href"];
var VersionsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VersionsTable",
	props: {
		versions: {},
		selectedVersionIds: {},
		datasetLabel: {},
		workflowId: {},
		colorIndexByKey: {}
	},
	emits: ["toggle-version"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const versionHref = (v) => router.resolve(v.workflowVersionId ? {
			name: VIEWS.WORKFLOW_HISTORY,
			params: {
				workflowId: props.workflowId,
				versionId: v.workflowVersionId
			}
		} : {
			name: VIEWS.WORKFLOW,
			params: { workflowId: props.workflowId }
		}).href;
		const rows = computed(() => props.versions.map((version, idx) => {
			const key = versionRowKey(version);
			return {
				key,
				index: props.colorIndexByKey?.[key] ?? idx,
				version,
				checked: props.selectedVersionIds.has(key),
				href: versionHref(version)
			};
		}));
		const formatScore = (value) => {
			if (value === null) return "—";
			return `${Math.round(value * 100)}%`;
		};
		const formatRunAt = (iso) => {
			if (!iso) return i18n.baseText("evaluation.setup.versions.noRunYet");
			const date = new Date(iso);
			if (Number.isNaN(date.getTime())) return iso;
			return date.toLocaleString(void 0, {
				month: "short",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit"
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrap),
				"data-test-id": "versions-table"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_check) }, null, 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_version) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions.col.version")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_lastRun) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions.col.lastRun", { interpolate: { dataset: __props.datasetLabel } })), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_score) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions.col.avgScore")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_action) }, null, 2)
				], 2),
				rows.value.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.empty)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions.empty")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row) => {
					return openBlock(), createElementBlock("div", {
						key: row.key,
						class: normalizeClass([
							_ctx.$style.row,
							row.checked && _ctx.$style.row_selected,
							row.version.workflowVersionId === null && _ctx.$style.row_draft
						]),
						"data-test-id": "versions-table-row",
						onClick: ($event) => emit("toggle-version", row.key)
					}, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_check) }, [createVNode(unref(Checkbox_default), {
							"model-value": row.checked,
							"data-test-id": "versions-table-row-checkbox",
							onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
							"onUpdate:modelValue": ($event) => emit("toggle-version", row.key)
						}, null, 8, ["model-value", "onUpdate:modelValue"])], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_version) }, [createVNode(VersionAvatar_default, {
							index: row.index,
							size: "small"
						}, null, 8, ["index"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.versionMeta) }, [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-dark",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(row.version.label), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(row.version.sourceLabel), 1)]),
							_: 2
						}, 1024)], 2)], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_lastRun) }, [!row.version.lastRun ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							theme: "tertiary",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions.noRunYet")), 1)]),
							_: 1
						})) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(formatRunAt(row.version.lastRun.runAt)), 1)]),
							_: 2
						}, 1024))], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_score) }, [createVNode(unref(N8nText_default), {
							size: "small",
							color: row.version.lastRun?.isCritical ? "danger" : "text-dark",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(formatScore(row.version.lastRun?.avgScore ?? null)), 1)]),
							_: 2
						}, 1032, ["color"]), row.version.lastRun?.isBest ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							theme: "success",
							size: "small",
							"data-test-id": "versions-table-row-best"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "star",
								size: "xsmall"
							}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("evaluation.setup.versions.bestPill")), 1)]),
							_: 1
						})) : row.version.lastRun?.isCritical ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 1,
							theme: "danger",
							size: "small",
							"data-test-id": "versions-table-row-low"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "triangle-alert",
								size: "xsmall"
							}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("evaluation.setup.versions.lowPill")), 1)]),
							_: 1
						})) : createCommentVNode("", true)], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.col_action) }, [createBaseVNode("a", {
							href: row.href,
							target: "_blank",
							rel: "noopener noreferrer",
							class: normalizeClass(_ctx.$style.viewLink),
							"data-test-id": "versions-table-row-view",
							onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
						}, [createVNode(unref(N8nIcon_default), {
							icon: "arrow-up-right",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("evaluation.setup.versions.viewAction")), 1)], 10, _hoisted_2)], 2)
					], 10, _hoisted_1$1);
				}), 128))
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupCollectionWizard/VersionsTable.vue?vue&type=style&index=0&lang.module.scss
var wrap = "_wrap_v69pf_388";
var header$1 = "_header_v69pf_395";
var row = "_row_v69pf_396";
var row_selected = "_row_selected_v69pf_423";
var row_draft = "_row_draft_v69pf_427";
var col_check = "_col_check_v69pf_433";
var col_version = "_col_version_v69pf_438";
var versionMeta = "_versionMeta_v69pf_445";
var col_lastRun = "_col_lastRun_v69pf_451";
var col_score = "_col_score_v69pf_455";
var col_action = "_col_action_v69pf_461";
var viewLink = "_viewLink_v69pf_466";
var empty = "_empty_v69pf_483";
var shimmer$3 = "_shimmer_v69pf_1";
var spin$3 = "_spin_v69pf_1";
var opacityPulse$3 = "_opacityPulse_v69pf_1";
var popoverIn$3 = "_popoverIn_v69pf_1";
var fadeIn$3 = "_fadeIn_v69pf_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_v69pf_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_v69pf_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_v69pf_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_v69pf_1";
var blurSwapIn$3 = "_blurSwapIn_v69pf_1";
var blurSwapOut$3 = "_blurSwapOut_v69pf_1";
var pulseGlow$3 = "_pulseGlow_v69pf_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_v69pf_1";
var fade$3 = "_fade_v69pf_1";
var fadeInUp$3 = "_fadeInUp_v69pf_1";
var fadeInDown$3 = "_fadeInDown_v69pf_1";
var fadeInLeft$3 = "_fadeInLeft_v69pf_1";
var fadeInRight$3 = "_fadeInRight_v69pf_1";
var fadeOut$3 = "_fadeOut_v69pf_1";
var fadeOutDown$3 = "_fadeOutDown_v69pf_1";
var fadeOutUp$3 = "_fadeOutUp_v69pf_1";
var fadeOutLeft$3 = "_fadeOutLeft_v69pf_1";
var fadeOutRight$3 = "_fadeOutRight_v69pf_1";
var ping$3 = "_ping_v69pf_1";
var blinkBackground$3 = "_blinkBackground_v69pf_1";
var typingBlink$3 = "_typingBlink_v69pf_1";
var VersionsTable_vue_vue_type_style_index_0_lang_module_default = {
	wrap,
	header: header$1,
	row,
	row_selected,
	row_draft,
	col_check,
	col_version,
	versionMeta,
	col_lastRun,
	col_score,
	col_action,
	viewLink,
	empty,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_v69pf_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var VersionsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(VersionsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VersionsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupCollectionWizard/buildVersionEntries.ts
var isReusableRun = (run) => !!run && run.status === "completed";
var buildVersionEntries = (versions) => versions.map((version) => ({
	workflowVersionId: version.workflowVersionId,
	existingTestRunId: isReusableRun(version.lastRun) ? version.lastRun.testRunId : void 0
}));
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupCollectionWizard/SetupCollectionWizard.vue?vue&type=script&setup=true&lang.ts
var SetupCollectionWizard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupCollectionWizard",
	props: {
		open: { type: Boolean },
		workflowId: {}
	},
	emits: ["update:open", "created"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const store = useEvalCollectionsStore();
		const evaluationStore = useEvaluationStore();
		const toast = useToast();
		const name = ref("");
		const selectedConfigId = ref(null);
		const selectedVersionKeys = ref(/* @__PURE__ */ new Set());
		const state = ref("collecting");
		const sourceFilter = ref("all");
		const sortOrder = ref("recent");
		const onSourceChange = (value) => {
			sourceFilter.value = String(value);
		};
		const onSortChange = (value) => {
			sortOrder.value = value === "oldest" ? "oldest" : "recent";
		};
		const configs = computed(() => evaluationStore.evaluationConfigsByWorkflowId[props.workflowId] ?? []);
		const versionsResponse = computed(() => selectedConfigId.value ? store.getVersions(selectedConfigId.value) : null);
		const allVersions = computed(() => versionsResponse.value?.versions ?? []);
		const datasetLabel = computed(() => {
			if (!selectedConfigId.value) return "";
			return configs.value.find((c) => c.id === selectedConfigId.value)?.name ?? "";
		});
		const allMetricNames = computed(() => {
			if (!selectedConfigId.value) return [];
			return (configs.value.find((c) => c.id === selectedConfigId.value)?.metrics ?? []).map((m) => m.name);
		});
		const sourceOptions = computed(() => {
			const seen = /* @__PURE__ */ new Set();
			const opts = [{
				value: "all",
				label: i18n.baseText("evaluation.setup.versions.filter.all")
			}];
			for (const v of allVersions.value) if (v.sourceLabel && !seen.has(v.sourceLabel)) {
				seen.add(v.sourceLabel);
				opts.push({
					value: v.sourceLabel,
					label: v.sourceLabel
				});
			}
			return opts;
		});
		const visibleVersions = computed(() => {
			const filtered = sourceFilter.value === "all" ? allVersions.value : allVersions.value.filter((v) => v.sourceLabel === sourceFilter.value);
			const seen = /* @__PURE__ */ new Set();
			const sorted = [...filtered.filter((v) => {
				const key = versionRowKey(v);
				if (seen.has(key)) return false;
				seen.add(key);
				return true;
			})].sort((a, b) => {
				const aTs = a.lastRun ? new Date(a.lastRun.runAt).getTime() : 0;
				const bTs = b.lastRun ? new Date(b.lastRun.runAt).getTime() : 0;
				return sortOrder.value === "recent" ? bTs - aTs : aTs - bTs;
			});
			const draftIndex = sorted.findIndex((v) => v.workflowVersionId === null);
			if (draftIndex > 0) sorted.unshift(sorted.splice(draftIndex, 1)[0]);
			return sorted;
		});
		const versionColorByKey = computed(() => {
			const map = {};
			allVersions.value.forEach((v, index) => {
				map[versionRowKey(v)] = index;
			});
			return map;
		});
		const selectedVersions = computed(() => allVersions.value.filter((v) => selectedVersionKeys.value.has(versionRowKey(v))));
		const selectedCount = computed(() => selectedVersionKeys.value.size);
		const reuseCount = computed(() => selectedVersions.value.filter((v) => isReusableRun(v.lastRun)).length);
		const newRunCount = computed(() => selectedCount.value - reuseCount.value);
		const canSubmit = computed(() => state.value === "collecting" && name.value.trim().length > 0 && selectedConfigId.value !== null && selectedCount.value >= 2);
		const footerSummaryText = computed(() => {
			if (selectedCount.value < 2) return i18n.baseText("evaluation.setup.footer.summary.pickMore");
			if (newRunCount.value === 0) return i18n.baseText("evaluation.setup.footer.summary.reuse", { adjustToNumber: selectedCount.value });
			return i18n.baseText("evaluation.setup.footer.summary.mixed", { interpolate: {
				total: String(selectedCount.value),
				newCount: String(newRunCount.value)
			} });
		});
		const footerExplainText = computed(() => {
			if (selectedCount.value < 2) return "";
			if (newRunCount.value === 0) return i18n.baseText("evaluation.setup.footer.runsExplain.reuse", { interpolate: { dataset: datasetLabel.value } });
			return i18n.baseText("evaluation.setup.footer.runsExplain.mixed", { interpolate: {
				newCount: String(newRunCount.value),
				dataset: datasetLabel.value
			} });
		});
		const ctaText = computed(() => {
			if (newRunCount.value === 0) return i18n.baseText("evaluation.setup.footer.cta.compare", { adjustToNumber: selectedCount.value });
			return i18n.baseText("evaluation.setup.footer.cta.runAndCompare", { adjustToNumber: selectedCount.value });
		});
		const onSelectConfig = async (configId) => {
			selectedConfigId.value = configId;
			selectedVersionKeys.value = /* @__PURE__ */ new Set();
			sourceFilter.value = "all";
			state.value = "versionsLoading";
			try {
				await store.fetchEvalVersions(props.workflowId, configId);
			} catch (error) {
				toast.showError(error, i18n.baseText("evaluation.setup.errors.loadVersionsFailed"));
			} finally {
				state.value = "collecting";
			}
		};
		const onToggleVersion = (versionKey) => {
			const next = new Set(selectedVersionKeys.value);
			if (next.has(versionKey)) next.delete(versionKey);
			else next.add(versionKey);
			selectedVersionKeys.value = next;
		};
		const close = () => {
			emit("update:open", false);
		};
		const reset = () => {
			name.value = "";
			selectedConfigId.value = null;
			selectedVersionKeys.value = /* @__PURE__ */ new Set();
			state.value = "collecting";
			sourceFilter.value = "all";
			sortOrder.value = "recent";
		};
		watch(() => props.open, async (isOpen) => {
			if (!isOpen) return;
			reset();
			try {
				await evaluationStore.fetchEvaluationConfigs(props.workflowId);
			} catch (error) {
				toast.showError(error, i18n.baseText("evaluation.setup.errors.loadDatasetsFailed"));
			}
		}, { immediate: true });
		const onSubmit = async () => {
			if (!canSubmit.value || !selectedConfigId.value) return;
			state.value = "submitting";
			const entries = buildVersionEntries(selectedVersions.value);
			try {
				const result = await store.createCollection(props.workflowId, {
					name: name.value.trim(),
					evaluationConfigId: selectedConfigId.value,
					versions: entries
				});
				state.value = "done";
				emit("created", result.id);
				close();
			} catch (error) {
				state.value = "collecting";
				toast.showError(error, i18n.baseText("evaluation.setup.errors.createFailed"));
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "2xlarge",
				"show-close-button": true,
				header: unref(i18n).baseText("evaluation.setup.title"),
				description: unref(i18n).baseText("evaluation.setup.subtitle"),
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.body),
					"data-test-id": "setup-collection-wizard"
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.collectionName")), 1)]),
						_: 1
					}), createVNode(unref(Input_default), {
						modelValue: name.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event),
						placeholder: unref(i18n).baseText("evaluation.setup.collectionName.placeholder"),
						size: "medium",
						"data-test-id": "setup-collection-wizard-name"
					}, null, 8, ["modelValue", "placeholder"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.dataset")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.dataset.helper")), 1)]),
						_: 1
					})], 2), createVNode(DatasetPicker_default, {
						options: configs.value.map((c) => ({
							id: c.id,
							label: c.name
						})),
						"selected-id": selectedConfigId.value,
						"matching-versions-count": allVersions.value.length,
						"has-selection": selectedConfigId.value !== null && state.value !== "versionsLoading",
						"onUpdate:selectedId": onSelectConfig
					}, null, 8, [
						"options",
						"selected-id",
						"matching-versions-count",
						"has-selection"
					])], 2),
					selectedConfigId.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.field)
					}, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-base",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions")), 1)]),
							_: 1
						}), createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions.helper")), 1)]),
							_: 1
						})], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableControls) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.controlChip) }, [createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions.filter.source")), 1)]),
							_: 1
						}), createVNode(unref(N8nSelect_default), {
							"model-value": sourceFilter.value,
							size: "small",
							class: normalizeClass(_ctx.$style.controlSelect),
							"onUpdate:modelValue": onSourceChange
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sourceOptions.value, (opt) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: opt.value,
									value: opt.value,
									label: opt.label
								}, null, 8, ["value", "label"]);
							}), 128))]),
							_: 1
						}, 8, ["model-value", "class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.controlChip) }, [createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.versions.sort.label")), 1)]),
							_: 1
						}), createVNode(unref(N8nSelect_default), {
							"model-value": sortOrder.value,
							size: "small",
							class: normalizeClass(_ctx.$style.controlSelect),
							"onUpdate:modelValue": onSortChange
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "recent",
								label: unref(i18n).baseText("evaluation.setup.versions.sort.recent")
							}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
								value: "oldest",
								label: unref(i18n).baseText("evaluation.setup.versions.sort.oldest")
							}, null, 8, ["label"])]),
							_: 1
						}, 8, ["model-value", "class"])], 2)], 2),
						createVNode(VersionsTable_default, {
							versions: visibleVersions.value,
							"selected-version-ids": selectedVersionKeys.value,
							"dataset-label": datasetLabel.value,
							"workflow-id": __props.workflowId,
							"color-index-by-key": versionColorByKey.value,
							onToggleVersion
						}, null, 8, [
							"versions",
							"selected-version-ids",
							"dataset-label",
							"workflow-id",
							"color-index-by-key"
						])
					], 2)) : createCommentVNode("", true),
					selectedConfigId.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.field)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labelRow) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.metrics")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.metrics.helper")), 1)]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.metricsRow) }, [
						(openBlock(true), createElementBlock(Fragment, null, renderList(allMetricNames.value, (metric) => {
							return openBlock(), createElementBlock("span", {
								key: metric,
								class: normalizeClass([_ctx.$style.metricPill, _ctx.$style.metricPill_static]),
								"data-test-id": "setup-collection-wizard-metric"
							}, [createVNode(unref(N8nIcon_default), {
								icon: "check",
								size: "xsmall"
							}), createBaseVNode("span", null, toDisplayString(metric), 1)], 2);
						}), 128)),
						allMetricNames.value.length > 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							placement: "top",
							content: unref(i18n).baseText("evaluation.setup.metrics.addComingSoon")
						}, {
							default: withCtx(() => [createBaseVNode("button", {
								type: "button",
								disabled: "",
								class: normalizeClass([_ctx.$style.metricPill, _ctx.$style.metricPill_add]),
								"data-test-id": "setup-collection-wizard-add-metric"
							}, [createVNode(unref(N8nIcon_default), {
								icon: "plus",
								size: "xsmall"
							}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("evaluation.setup.metrics.addMetric")), 1)], 2)]),
							_: 1
						}, 8, ["content"])) : createCommentVNode("", true),
						allMetricNames.value.length === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.setup.metrics.empty")), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					], 2)], 2)) : createCommentVNode("", true)
				], 2), createBaseVNode("footer", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerSummary) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(footerSummaryText.value), 1)]),
					_: 1
				}), footerExplainText.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(footerExplainText.value), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					label: unref(i18n).baseText("evaluation.setup.footer.cancel"),
					"data-test-id": "setup-collection-wizard-cancel",
					onClick: close
				}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					label: ctaText.value,
					disabled: !canSubmit.value,
					loading: state.value === "submitting",
					"data-test-id": "setup-collection-wizard-submit",
					onClick: onSubmit
				}, null, 8, [
					"label",
					"disabled",
					"loading"
				])], 2)], 2)]),
				_: 1
			}, 8, [
				"open",
				"header",
				"description"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupCollectionWizard/SetupCollectionWizard.vue?vue&type=style&index=0&lang.module.scss
var body = "_body_ffm96_388";
var field = "_field_ffm96_397";
var labelRow = "_labelRow_ffm96_403";
var tableControls = "_tableControls_ffm96_409";
var controlChip = "_controlChip_ffm96_416";
var controlSelect = "_controlSelect_ffm96_422";
var metricsRow = "_metricsRow_ffm96_426";
var metricPill = "_metricPill_ffm96_433";
var metricPill_static = "_metricPill_static_ffm96_447";
var metricPill_add = "_metricPill_add_ffm96_453";
var footer = "_footer_ffm96_460";
var footerSummary = "_footerSummary_ffm96_470";
var footerActions = "_footerActions_ffm96_477";
var shimmer$2 = "_shimmer_ffm96_1";
var spin$2 = "_spin_ffm96_1";
var opacityPulse$2 = "_opacityPulse_ffm96_1";
var popoverIn$2 = "_popoverIn_ffm96_1";
var fadeIn$2 = "_fadeIn_ffm96_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_ffm96_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_ffm96_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_ffm96_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_ffm96_1";
var blurSwapIn$2 = "_blurSwapIn_ffm96_1";
var blurSwapOut$2 = "_blurSwapOut_ffm96_1";
var pulseGlow$2 = "_pulseGlow_ffm96_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_ffm96_1";
var fade$2 = "_fade_ffm96_1";
var fadeInUp$2 = "_fadeInUp_ffm96_1";
var fadeInDown$2 = "_fadeInDown_ffm96_1";
var fadeInLeft$2 = "_fadeInLeft_ffm96_1";
var fadeInRight$2 = "_fadeInRight_ffm96_1";
var fadeOut$2 = "_fadeOut_ffm96_1";
var fadeOutDown$2 = "_fadeOutDown_ffm96_1";
var fadeOutUp$2 = "_fadeOutUp_ffm96_1";
var fadeOutLeft$2 = "_fadeOutLeft_ffm96_1";
var fadeOutRight$2 = "_fadeOutRight_ffm96_1";
var ping$2 = "_ping_ffm96_1";
var blinkBackground$2 = "_blinkBackground_ffm96_1";
var typingBlink$2 = "_typingBlink_ffm96_1";
var SetupCollectionWizard_vue_vue_type_style_index_0_lang_module_default = {
	body,
	field,
	labelRow,
	tableControls,
	controlChip,
	controlSelect,
	metricsRow,
	metricPill,
	metricPill_static,
	metricPill_add,
	footer,
	footerSummary,
	footerActions,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_ffm96_1",
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
var SetupCollectionWizard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupCollectionWizard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupCollectionWizard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/EvalCollectionsListView/UngroupedRunRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-hidden"];
var UngroupedRunRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "UngroupedRunRow",
	props: {
		run: {},
		datasetNameByConfigId: {}
	},
	setup(__props) {
		const STATUS_PILL_THEME = {
			completed: "success",
			running: "tertiary",
			new: "tertiary",
			error: "danger",
			cancelled: "warning",
			success: "success",
			warning: "warning"
		};
		const STATUS_FRIENDLY_KEY = {
			completed: "evaluation.collections.row.status.done",
			success: "evaluation.collections.row.status.done",
			running: "evaluation.collections.row.status.running",
			new: "evaluation.collections.row.status.queued",
			error: "evaluation.collections.row.status.failed",
			cancelled: "evaluation.collections.row.status.cancelled",
			warning: "evaluation.collections.row.status.warning"
		};
		const props = __props;
		const i18n = useI18n();
		const score = computed(() => {
			const avg = averageNormalizedScore(props.run.metrics);
			return avg === null ? null : Math.round(avg * 100);
		});
		const statusTheme = computed(() => STATUS_PILL_THEME[props.run.status] ?? "tertiary");
		const statusLabel = computed(() => {
			const key = STATUS_FRIENDLY_KEY[props.run.status];
			if (key) return i18n.baseText(key);
			return props.run.status;
		});
		const datasetName = computed(() => {
			const cfgId = props.run.evaluationConfigId;
			if (!cfgId) return null;
			return props.datasetNameByConfigId?.[cfgId] ?? null;
		});
		const formattedDate = computed(() => {
			const d = new Date(props.run.runAt);
			if (Number.isNaN(d.getTime())) return props.run.runAt;
			return `${d.toLocaleDateString(void 0, {
				month: "short",
				day: "numeric"
			})} · ${d.toLocaleTimeString(void 0, {
				hour: "2-digit",
				minute: "2-digit"
			})}`;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.runRow),
				"data-test-id": "eval-collections-ungrouped-row"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.runId) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode("#" + toDisplayString(__props.run.id.slice(0, 8)), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedDate.value), 1)]),
					_: 1
				})], 2),
				datasetName.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					theme: "tertiary",
					size: "small",
					class: normalizeClass(_ctx.$style.datasetChip)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(datasetName.value), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.datasetEmpty)
				}, [createVNode(unref(N8nText_default), {
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.row.noDataset")), 1)]),
					_: 1
				})], 2)),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.progressTrack),
					"aria-hidden": score.value === null
				}, [score.value !== null ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.progressFill),
					style: normalizeStyle({ width: `${score.value}%` })
				}, null, 6)) : createCommentVNode("", true)], 10, _hoisted_1),
				score.value !== null ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					size: "small",
					bold: "",
					class: normalizeClass(_ctx.$style.scoreText)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(score.value) + "%", 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 3,
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.scoreText)
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("—", -1)])]),
					_: 1
				}, 8, ["class"])),
				createVNode(unref(N8nBadge_default), {
					theme: statusTheme.value,
					size: "small",
					class: normalizeClass(_ctx.$style.statusPill)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(statusLabel.value), 1)]),
					_: 1
				}, 8, ["theme", "class"])
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/EvalCollectionsListView/UngroupedRunRow.vue?vue&type=style&index=0&lang.module.scss
var runRow = "_runRow_1pcos_388";
var runId = "_runId_1pcos_399";
var datasetChip = "_datasetChip_1pcos_407";
var datasetEmpty = "_datasetEmpty_1pcos_411";
var progressTrack = "_progressTrack_1pcos_415";
var progressFill = "_progressFill_1pcos_423";
var scoreText = "_scoreText_1pcos_433";
var statusPill = "_statusPill_1pcos_438";
var shimmer$1 = "_shimmer_1pcos_1";
var spin$1 = "_spin_1pcos_1";
var opacityPulse$1 = "_opacityPulse_1pcos_1";
var popoverIn$1 = "_popoverIn_1pcos_1";
var fadeIn$1 = "_fadeIn_1pcos_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1pcos_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1pcos_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1pcos_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1pcos_1";
var blurSwapIn$1 = "_blurSwapIn_1pcos_1";
var blurSwapOut$1 = "_blurSwapOut_1pcos_1";
var pulseGlow$1 = "_pulseGlow_1pcos_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1pcos_1";
var fade$1 = "_fade_1pcos_1";
var fadeInUp$1 = "_fadeInUp_1pcos_1";
var fadeInDown$1 = "_fadeInDown_1pcos_1";
var fadeInLeft$1 = "_fadeInLeft_1pcos_1";
var fadeInRight$1 = "_fadeInRight_1pcos_1";
var fadeOut$1 = "_fadeOut_1pcos_1";
var fadeOutDown$1 = "_fadeOutDown_1pcos_1";
var fadeOutUp$1 = "_fadeOutUp_1pcos_1";
var fadeOutLeft$1 = "_fadeOutLeft_1pcos_1";
var fadeOutRight$1 = "_fadeOutRight_1pcos_1";
var ping$1 = "_ping_1pcos_1";
var blinkBackground$1 = "_blinkBackground_1pcos_1";
var typingBlink$1 = "_typingBlink_1pcos_1";
var UngroupedRunRow_vue_vue_type_style_index_0_lang_module_default = {
	runRow,
	runId,
	datasetChip,
	datasetEmpty,
	progressTrack,
	progressFill,
	scoreText,
	statusPill,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1pcos_1",
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
var UngroupedRunRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(UngroupedRunRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": UngroupedRunRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/views/EvalCollectionsListView.vue?vue&type=script&setup=true&lang.ts
var EvalCollectionsListView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EvalCollectionsListView",
	props: {
		workflowId: {},
		pageSize: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const store = useEvalCollectionsStore();
		const evaluationStore = useEvaluationStore();
		const wizardOpen = ref(false);
		const collections = computed(() => store.getCollections(props.workflowId));
		const collectionsPage = ref(1);
		const showCollectionsPagination = computed(() => !!props.pageSize && collections.value.length > props.pageSize);
		const pagedCollections = computed(() => {
			if (!props.pageSize) return collections.value;
			const start = (collectionsPage.value - 1) * props.pageSize;
			return collections.value.slice(start, start + props.pageSize);
		});
		watch(() => collections.value.length, () => {
			const maxPage = props.pageSize ? Math.max(1, Math.ceil(collections.value.length / props.pageSize)) : 1;
			if (collectionsPage.value > maxPage) collectionsPage.value = maxPage;
		});
		const ungroupedRuns = computed(() => {
			return (evaluationStore.testRunsByWorkflowId[props.workflowId] ?? []).filter((r) => !r.collectionId).sort((a, b) => new Date(b.runAt).getTime() - new Date(a.runAt).getTime());
		});
		const datasetNameByConfigId = computed(() => {
			const map = {};
			for (const cfg of evaluationStore.evaluationConfigsByWorkflowId[props.workflowId] ?? []) map[cfg.id] = cfg.name;
			return map;
		});
		const onOpenWizard = () => {
			wizardOpen.value = true;
		};
		const onCreated = async () => {
			await Promise.all([store.fetchCollections(props.workflowId), evaluationStore.fetchTestRuns(props.workflowId)]);
		};
		const loadForWorkflow = async (workflowId) => {
			try {
				await Promise.all([
					store.fetchCollections(workflowId),
					evaluationStore.fetchEvaluationConfigs(workflowId).catch(() => null),
					evaluationStore.fetchTestRuns(workflowId)
				]);
				await Promise.all(store.getCollections(workflowId).slice(0, 3).map((c) => store.fetchCollectionDetail(workflowId, c.id).catch(() => null)));
			} catch (error) {
				toast.showError(error, i18n.baseText("evaluation.collections.errors.fetchFailed"));
			}
		};
		onMounted(async () => {
			await loadForWorkflow(props.workflowId);
		});
		const stopAllPolling = () => {
			store.cleanupPolling();
			evaluationStore.cleanupPolling();
		};
		watch(() => props.workflowId, async (next, prev) => {
			if (next === prev) return;
			collectionsPage.value = 1;
			stopAllPolling();
			await loadForWorkflow(next);
		});
		onBeforeUnmount(() => {
			stopAllPolling();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.viewWrapper) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.view),
				"data-test-id": "eval-collections-list-view"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerText) }, [createVNode(unref(N8nText_default), {
					tag: "h2",
					size: "xlarge",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					tag: "p",
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.subtitle")), 1)]),
					_: 1
				})], 2), createVNode(unref(N8nButton_default), {
					variant: "solid",
					icon: "plus",
					label: unref(i18n).baseText("evaluation.collections.newCollection"),
					"data-test-id": "eval-collections-new-button",
					onClick: onOpenWizard
				}, null, 8, ["label"])], 2),
				createBaseVNode("section", { class: normalizeClass(_ctx.$style.section) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nText_default), {
						tag: "h3",
						size: "medium",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.section.collections")), 1)]),
						_: 1
					}), createVNode(unref(N8nBadge_default), {
						theme: "tertiary",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(collections.value.length), 1)]),
						_: 1
					})], 2),
					collections.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyHint)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "layers",
						size: "medium"
					}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.emptyHintBody) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.empty.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.empty.subtitle")), 1)]),
						_: 1
					})], 2)], 2)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(pagedCollections.value, (collection) => {
						return openBlock(), createBlock(CollectionCard_default, {
							key: collection.id,
							collection,
							detail: unref(store).getDetail(collection.id),
							"workflow-id": __props.workflowId,
							"dataset-name": datasetNameByConfigId.value[collection.evaluationConfigId]
						}, null, 8, [
							"collection",
							"detail",
							"workflow-id",
							"dataset-name"
						]);
					}), 128)),
					showCollectionsPagination.value ? (openBlock(), createBlock(unref(N8nPagination_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.pagination),
						page: collectionsPage.value,
						"onUpdate:page": _cache[0] || (_cache[0] = ($event) => collectionsPage.value = $event),
						"items-per-page": __props.pageSize,
						total: collections.value.length,
						"show-total": false,
						"show-sizes": false
					}, null, 8, [
						"class",
						"page",
						"items-per-page",
						"total"
					])) : createCommentVNode("", true)
				], 2),
				createBaseVNode("section", { class: normalizeClass(_ctx.$style.section) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [
						createVNode(unref(N8nText_default), {
							tag: "h3",
							size: "medium",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.section.ungrouped")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nBadge_default), {
							theme: "tertiary",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(ungroupedRuns.value.length), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.ungroupedHelper),
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.section.ungrouped.helper")), 1)]),
							_: 1
						}, 8, ["class"])
					], 2),
					ungroupedRuns.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyHint)
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.section.ungrouped.empty")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(ungroupedRuns.value, (run) => {
						return openBlock(), createBlock(UngroupedRunRow_default, {
							key: run.id,
							run,
							"dataset-name-by-config-id": datasetNameByConfigId.value
						}, null, 8, ["run", "dataset-name-by-config-id"]);
					}), 128))
				], 2),
				createVNode(SetupCollectionWizard_default, {
					open: wizardOpen.value,
					"workflow-id": __props.workflowId,
					"onUpdate:open": _cache[1] || (_cache[1] = ($event) => wizardOpen.value = $event),
					onCreated
				}, null, 8, ["open", "workflow-id"])
			], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/views/EvalCollectionsListView.vue?vue&type=style&index=0&lang.module.scss
var viewWrapper = "_viewWrapper_f4pht_388";
var view = "_view_f4pht_388";
var header = "_header_f4pht_404";
var headerText = "_headerText_f4pht_411";
var section = "_section_f4pht_417";
var pagination = "_pagination_f4pht_423";
var sectionHeader = "_sectionHeader_f4pht_429";
var ungroupedHelper = "_ungroupedHelper_f4pht_435";
var emptyHint = "_emptyHint_f4pht_439";
var emptyHintBody = "_emptyHintBody_f4pht_450";
var shimmer = "_shimmer_f4pht_1";
var spin = "_spin_f4pht_1";
var opacityPulse = "_opacityPulse_f4pht_1";
var popoverIn = "_popoverIn_f4pht_1";
var fadeIn = "_fadeIn_f4pht_1";
var collapsibleSlideDown = "_collapsibleSlideDown_f4pht_1";
var collapsibleSlideUp = "_collapsibleSlideUp_f4pht_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_f4pht_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_f4pht_1";
var blurSwapIn = "_blurSwapIn_f4pht_1";
var blurSwapOut = "_blurSwapOut_f4pht_1";
var pulseGlow = "_pulseGlow_f4pht_1";
var pulseGlowDelayed = "_pulseGlowDelayed_f4pht_1";
var fade = "_fade_f4pht_1";
var fadeInUp = "_fadeInUp_f4pht_1";
var fadeInDown = "_fadeInDown_f4pht_1";
var fadeInLeft = "_fadeInLeft_f4pht_1";
var fadeInRight = "_fadeInRight_f4pht_1";
var fadeOut = "_fadeOut_f4pht_1";
var fadeOutDown = "_fadeOutDown_f4pht_1";
var fadeOutUp = "_fadeOutUp_f4pht_1";
var fadeOutLeft = "_fadeOutLeft_f4pht_1";
var fadeOutRight = "_fadeOutRight_f4pht_1";
var ping = "_ping_f4pht_1";
var blinkBackground = "_blinkBackground_f4pht_1";
var typingBlink = "_typingBlink_f4pht_1";
var EvalCollectionsListView_vue_vue_type_style_index_0_lang_module_default = {
	viewWrapper,
	view,
	header,
	headerText,
	section,
	pagination,
	sectionHeader,
	ungroupedHelper,
	emptyHint,
	emptyHintBody,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_f4pht_1",
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
var EvalCollectionsListView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EvalCollectionsListView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EvalCollectionsListView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { EvalCollectionsListView_default as default };
