import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Df as withDirectives, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Hf as shallowRef, Jd as defineComponent, Jf as unref, Kd as createVNode, Md as vShow, Pd as withModifiers, Rd as computed, Sf as useTemplateRef, Ud as createSlots, Vd as createCommentVNode, Wf as toRef, _p as normalizeStyle, bf as useModel, bp as toDisplayString, df as openBlock, hp as normalizeClass, if as nextTick, jf as init_reactivity_esm_bundler, mf as renderSlot, nf as mergeModels, np as init_shared_esm_bundler, ns as useRouter, of as onBeforeUnmount, pf as renderList, ts as useRoute, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, CE as DialogTitle_default, Eh as useRBACStore, Ex as ResponseError, GD as N8nHeading_default, GO as useI18n, IO as N8nButton_default, Jb as useToast, Jp as useDocumentTitle, KE as N8nTabs_default, LO as N8nIcon_default, OO as N8nText_default, RD as N8nLink_default, SE as Dialog_default, SO as N8nLoading_default, Sh as useProjectsStore, WD as N8nEmptyState_default, WS as parsePromotionsWorkflowsMovedCrossProjectMeta, Yb as VIEWS, bE as DialogBody_default, eD as N8nResizeWrapper_default, g as PROMOTION_PREVIEW_VIEWS, j as INBOX_VIEW, m as PROMOTIONS_SETTINGS_SCOPES, my as MODAL_CONFIRM, nx as useRootStore, oO as N8nCallout_default, tD as useResizablePanel, tx as useSettingsStore, uE as useMessage, wE as DialogHeader_default, yE as DialogFooter_default } from "./app-DGoK9ugD.js";
import { t as promotionEventBus } from "./promotions.eventBus-CWwSFBjg.js";
import { t as useLatestFetch } from "./useLatestFetch-Bxfz-zbp.js";
import { n as useInstancePromotionConnection, o as continueApplyProjectSelection, r as applyProjectSelection } from "./useInstancePromotionConnection-BK6nkefC.js";
import { _ as promoteProjectSelection, a as includedChangeCount, c as selectAll, d as toggleSelection, f as totalChangeCount, i as clearSelection, m as getPromotionResourceDetails, o as initialSelectionState, p as getPromotionPreview, r as buildSelectionGraph, s as resolveInclusion, t as applyPreview, u as toggleContainer } from "./promotionPreview.selection-BUiLY0T6.js";
import { a as resourceIcon, n as cardOrder, t as buildPreviewTree } from "./promotionPreview.tree-Bgv3vvS0.js";
import { n as defaultActiveWorkflow, r as hasWorkflowDiff } from "./PromotionWorkflowSideLabel-wUCazxjk.js";
import { i as usePromotionResourceDetails, n as PromotionChangeCards_default, r as PromotionWorkflowLinks_default, t as PromotionResourceTree_default } from "./PromotionResourceTree-DbgRqwId.js";
import { a as withMoveAndRenameNote, c as indexBlockers, d as scopeCheck, f as toOperationRequest, l as isBlocking, p as touchesDestructiveChange, r as promoteSuccessToast, s as crossProjectMoveBlockers, t as usePromotionPreviewLabels, u as listBlockers } from "./usePromotionPreviewLabels-B8sk2DBQ.js";
import { l as repositoryDisplayName } from "./promotionsSettings.utils-CendYemz.js";
import { n as usePromotionBindings, r as usePromotionBindingCreation, t as PromotionCommitMessageField_default } from "./PromotionCommitMessageField-BNsMX2tw.js";
//#region src/features/integrations/promotions.ee/components/preview/PromotionBlockers.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = ["aria-expanded"];
var _hoisted_2 = { scope: "col" };
var _hoisted_3 = { scope: "col" };
var _hoisted_4 = { scope: "col" };
var _hoisted_5 = { scope: "col" };
var _hoisted_6 = ["aria-label"];
var _hoisted_7 = ["data-blocker-key"];
var _hoisted_8 = { "aria-live": "polite" };
var _hoisted_9 = ["aria-expanded"];
var _hoisted_10 = { scope: "col" };
var _hoisted_11 = { scope: "col" };
var _hoisted_12 = { scope: "col" };
var _hoisted_13 = { scope: "col" };
var _hoisted_14 = { scope: "col" };
var PromotionBlockers_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionBlockers",
	props: {
		check: {},
		busy: { type: Boolean }
	},
	emits: ["refresh", "inspect"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const labels = usePromotionPreviewLabels();
		const asBlockedResult = ({ environmentId, git, movedWorkflows, movedFolders, ...check }) => ({
			status: "blocked",
			environmentId,
			git,
			check
		});
		const bindings = usePromotionBindings();
		const creation = usePromotionBindingCreation(asBlockedResult(props.check), () => {});
		let sessionCommit;
		watch(() => props.check, (check) => {
			const result = asBlockedResult(check);
			creation.updateCheck(result.check);
			if (sessionCommit === check.git.commitSha) {
				bindings.reconcile(result);
				return;
			}
			sessionCommit = check.git.commitSha;
			bindings.start(result);
		}, { immediate: true });
		onBeforeUnmount(bindings.end);
		const usedBy = (consumers) => consumers.flatMap(({ workflows }) => workflows.map(({ id, name }) => ({
			key: `workflow:${id}`,
			name
		})));
		const status = (key) => ({
			label: i18n.baseText(`promotions.preview.blockers.status.${key}`),
			tone: key === "resolved" ? "success" : "warning"
		});
		const conflictRow = (conflict, index) => {
			if (conflict.code === "moved") return movedRow(conflict.kind, conflict);
			const row = {
				key: `conflict:${index}`,
				status: status("conflict"),
				detail: i18n.baseText(`promotions.bindings.conflicts.${conflict.code}`)
			};
			if (conflict.kind === "project") return {
				...row,
				icon: resourceIcon("project"),
				name: conflict.project.name,
				type: "project",
				usedBy: "workflows" in conflict ? conflict.workflows.map(({ id, name }) => ({
					key: `workflow:${id}`,
					name
				})) : []
			};
			if (conflict.kind === "workflow") {
				const workflows = usedBy(conflict.consumers);
				return {
					...row,
					icon: resourceIcon("workflow"),
					name: workflows.map(({ name }) => name).join(", "),
					type: "workflow",
					usedBy: workflows
				};
			}
			if (conflict.kind === "data-table" || conflict.kind === "tag") {
				const type = conflict.kind === "tag" ? "tag" : "dataTable";
				return {
					...row,
					icon: resourceIcon(type),
					name: conflict.name ?? conflict.id ?? i18n.baseText(`promotions.preview.blockers.type.${type}`),
					type,
					usedBy: usedBy(conflict.consumers)
				};
			}
			return {
				...row,
				icon: resourceIcon(conflict.kind),
				name: conflict.name,
				type: conflict.kind,
				usedBy: usedBy(conflict.consumers)
			};
		};
		function movedRow(type, move) {
			return {
				key: `moved:${type}:${move.id}`,
				icon: resourceIcon(type),
				name: move.name,
				type,
				usedBy: [],
				status: status("moved"),
				detail: labels.moveDetail(type, move)
			};
		}
		const blockerRows = computed(() => {
			const { accessRequirements, movedWorkflows, movedFolders } = props.check;
			return [
				...bindings.rows.value.map(({ key, binding, status: bindingStatus }) => ({
					key,
					icon: resourceIcon(binding.kind),
					name: binding.name,
					type: binding.kind,
					usedBy: usedBy(binding.consumers),
					status: status(bindingStatus === "resolved" ? "resolved" : "missing"),
					createLabel: bindingStatus === "missing" ? i18n.baseText(`promotions.preview.blockers.create.${binding.kind}`) : void 0
				})),
				...accessRequirements.map((access) => ({
					key: `access:${access.sourceId}`,
					icon: resourceIcon("credential"),
					name: access.name,
					type: "credential",
					usedBy: usedBy(access.consumers),
					status: status("access"),
					detail: i18n.baseText("promotions.preview.blockers.access")
				})),
				...bindings.hardConflicts.value.map(conflictRow),
				...movedWorkflows.map((move) => movedRow("workflow", move)),
				...movedFolders.map((move) => movedRow("folder", move))
			];
		});
		const unresolvedCount = computed(() => blockerRows.value.filter((row) => row.status.tone === "warning").length);
		function removedColumns(changes) {
			return changes.flatMap((change) => change.kind === "remove-column" || change.kind === "change-column-type" ? change.column : []).join(", ");
		}
		const warnings = computed(() => props.check.warnings);
		const warningCount = computed(() => bindings.destructiveChanges.value.length + warnings.value.length);
		const open = ref({
			blockers: true,
			warnings: true
		});
		async function create(key) {
			await bindings.createBinding(key, creation.createBinding);
			if (bindings.rows.value.some((row) => row.key === key && row.status === "resolved")) emit("refresh");
		}
		const isCreateDisabled = computed(() => props.busy || bindings.isBusy.value);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.blockers),
				"data-test-id": "promotion-preview-blockers"
			}, [
				renderSlot(_ctx.$slots, "default"),
				createVNode(unref(N8nText_default), {
					tag: "p",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.blockers.intro")), 1)]),
					_: 1
				}),
				unresolvedCount.value === 0 ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "success",
					slim: "",
					role: "status",
					"data-test-id": "promotion-preview-blockers-status"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.blockers.none")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				unref(bindings).error.value?.kind === "creationMismatch" ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 1,
					theme: "danger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.error.creationMismatch")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				blockerRows.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 2,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.sectionHeader),
					"aria-expanded": open.value.blockers,
					onClick: _cache[0] || (_cache[0] = ($event) => open.value.blockers = !open.value.blockers)
				}, [createVNode(unref(N8nIcon_default), {
					icon: open.value.blockers ? "chevron-down" : "chevron-right",
					size: "small"
				}, null, 8, ["icon"]), createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.blockers.section.blockers", {
						adjustToNumber: blockerRows.value.length,
						interpolate: { count: String(blockerRows.value.length) }
					})), 1)]),
					_: 1
				})], 10, _hoisted_1), withDirectives(createBaseVNode("div", null, [createBaseVNode("table", {
					class: normalizeClass([_ctx.$style.table, _ctx.$style.fixedColumns]),
					"data-test-id": "promotion-preview-blockers-table"
				}, [
					createBaseVNode("colgroup", null, [
						createBaseVNode("col", { class: normalizeClass(_ctx.$style.nameColumn) }, null, 2),
						_cache[5] || (_cache[5] = createBaseVNode("col", null, null, -1)),
						createBaseVNode("col", { class: normalizeClass(_ctx.$style.typeColumn) }, null, 2),
						createBaseVNode("col", { class: normalizeClass(_ctx.$style.statusColumn) }, null, 2),
						createBaseVNode("col", { class: normalizeClass(_ctx.$style.actionColumn) }, null, 2)
					]),
					createBaseVNode("thead", null, [createBaseVNode("tr", null, [
						createBaseVNode("th", _hoisted_2, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.name")), 1),
						createBaseVNode("th", _hoisted_3, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.usedBy")), 1),
						createBaseVNode("th", _hoisted_4, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.type")), 1),
						createBaseVNode("th", _hoisted_5, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.status")), 1),
						createBaseVNode("th", {
							scope: "col",
							"aria-label": unref(i18n).baseText("promotions.preview.blockers.column.action")
						}, null, 8, _hoisted_6)
					])]),
					createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(blockerRows.value, (row) => {
						return openBlock(), createElementBlock("tr", {
							key: row.key,
							"data-test-id": "promotion-preview-blocker-row",
							"data-blocker-key": row.key
						}, [
							createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.name) }, [createVNode(unref(N8nIcon_default), {
								icon: row.icon,
								size: "small",
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["icon", "class"]), createVNode(unref(N8nText_default), {
								step: "xs",
								color: "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(row.name), 1)]),
								_: 2
							}, 1024)], 2), row.detail ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								tag: "p",
								step: "2xs",
								color: "text-light",
								class: normalizeClass(_ctx.$style.detail)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(row.detail), 1)]),
								_: 2
							}, 1032, ["class"])) : createCommentVNode("", true)]),
							createBaseVNode("td", null, [createVNode(unref(N8nText_default), {
								step: "2xs",
								color: "text-light"
							}, {
								default: withCtx(() => [createVNode(PromotionWorkflowLinks_default, {
									workflows: row.usedBy,
									onInspect: _cache[1] || (_cache[1] = ($event) => emit("inspect", $event))
								}, null, 8, ["workflows"])]),
								_: 2
							}, 1024)]),
							createBaseVNode("td", null, [createVNode(unref(N8nText_default), {
								step: "xs",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`promotions.preview.blockers.type.${row.type}`)), 1)]),
								_: 2
							}, 1024)]),
							createBaseVNode("td", _hoisted_8, [createVNode(unref(N8nText_default), {
								size: "medium",
								class: normalizeClass([_ctx.$style.status, _ctx.$style[row.status.tone]])
							}, {
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: row.status.tone === "success" ? "circle-check" : "circle-alert",
									size: "small"
								}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(row.status.label), 1)]),
								_: 2
							}, 1032, ["class"])]),
							createBaseVNode("td", { class: normalizeClass(_ctx.$style.action) }, [row.createLabel ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								variant: "outline",
								size: "small",
								disabled: isCreateDisabled.value,
								"data-test-id": "promotion-preview-blocker-create",
								onClick: ($event) => create(row.key)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(row.createLabel), 1)]),
								_: 2
							}, 1032, ["disabled", "onClick"])) : createCommentVNode("", true)], 2)
						], 8, _hoisted_7);
					}), 128))])
				], 2)], 512), [[vShow, open.value.blockers]])], 2)) : createCommentVNode("", true),
				warningCount.value > 0 ? (openBlock(), createElementBlock("section", {
					key: 3,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.sectionHeader),
					"aria-expanded": open.value.warnings,
					onClick: _cache[2] || (_cache[2] = ($event) => open.value.warnings = !open.value.warnings)
				}, [createVNode(unref(N8nIcon_default), {
					icon: open.value.warnings ? "chevron-down" : "chevron-right",
					size: "small"
				}, null, 8, ["icon"]), createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.blockers.section.warnings", {
						adjustToNumber: warningCount.value,
						interpolate: { count: String(warningCount.value) }
					})), 1)]),
					_: 1
				})], 10, _hoisted_9), withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style.groups) }, [unref(bindings).destructiveChanges.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.group)
				}, [createVNode(unref(N8nCallout_default), {
					theme: "warning",
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						tag: "p"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.blockers.destructive.title")), 1)]),
						_: 1
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("promotions.bindings.destructive.confirmDescription", { adjustToNumber: unref(bindings).destructiveChanges.value.length })), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("table", { class: normalizeClass(_ctx.$style.table) }, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", _hoisted_10, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.dataTable")), 1),
					createBaseVNode("th", _hoisted_11, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.usedBy")), 1),
					createBaseVNode("th", _hoisted_12, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.columns")), 1)
				])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(bindings).destructiveChanges.value, (table) => {
					return openBlock(), createElementBlock("tr", { key: table.id }, [
						createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.name) }, [createVNode(unref(N8nIcon_default), {
							icon: unref(resourceIcon)("dataTable"),
							size: "small",
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, ["icon", "class"]), createVNode(unref(N8nText_default), {
							step: "xs",
							color: "text-dark"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(table.name), 1)]),
							_: 2
						}, 1024)], 2)]),
						createBaseVNode("td", null, [createVNode(unref(N8nText_default), {
							step: "2xs",
							color: "text-light"
						}, {
							default: withCtx(() => [createVNode(PromotionWorkflowLinks_default, {
								workflows: usedBy(table.consumers),
								onInspect: _cache[3] || (_cache[3] = ($event) => emit("inspect", $event))
							}, null, 8, ["workflows"])]),
							_: 2
						}, 1024)]),
						createBaseVNode("td", null, [createVNode(unref(N8nText_default), {
							step: "xs",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(removedColumns(table.changes)), 1)]),
							_: 2
						}, 1024)])
					]);
				}), 128))])], 2)], 2)) : createCommentVNode("", true), warnings.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.group)
				}, [createVNode(unref(N8nCallout_default), {
					theme: "info",
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						tag: "p"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.blockers.shadowed.title")), 1)]),
						_: 1
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("promotions.preview.blockers.shadowed.description")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("table", { class: normalizeClass(_ctx.$style.table) }, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", _hoisted_13, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.variable")), 1), createBaseVNode("th", _hoisted_14, toDisplayString(unref(i18n).baseText("promotions.preview.blockers.column.usedBy")), 1)])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(warnings.value, (warning) => {
					return openBlock(), createElementBlock("tr", { key: warning.name }, [createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.name) }, [createVNode(unref(N8nIcon_default), {
						icon: unref(resourceIcon)("variable"),
						size: "small",
						class: normalizeClass(_ctx.$style.icon)
					}, null, 8, ["icon", "class"]), createVNode(unref(N8nText_default), {
						step: "xs",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(warning.name), 1)]),
						_: 2
					}, 1024)], 2)]), createBaseVNode("td", null, [createVNode(unref(N8nText_default), {
						step: "2xs",
						color: "text-light"
					}, {
						default: withCtx(() => [createVNode(PromotionWorkflowLinks_default, {
							workflows: usedBy(warning.consumers),
							onInspect: _cache[4] || (_cache[4] = ($event) => emit("inspect", $event))
						}, null, 8, ["workflows"])]),
						_: 2
					}, 1024)])]);
				}), 128))])], 2)], 2)) : createCommentVNode("", true)], 2), [[vShow, open.value.warnings]])], 2)) : createCommentVNode("", true),
				unresolvedCount.value > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 4,
					tag: "p",
					step: "xs",
					color: "text-base",
					role: "status",
					"data-test-id": "promotion-preview-blockers-status"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.blockers.unresolved", {
						adjustToNumber: unresolvedCount.value,
						interpolate: { count: String(unresolvedCount.value) }
					})), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	blockers: "_blockers_bywr8_1",
	section: "_section_bywr8_9",
	sectionHeader: "_sectionHeader_bywr8_15",
	groups: "_groups_bywr8_31",
	group: "_group_bywr8_31",
	table: "_table_bywr8_44",
	callout: "_callout_bywr8_50",
	fixedColumns: "_fixedColumns_bywr8_80",
	nameColumn: "_nameColumn_bywr8_84",
	typeColumn: "_typeColumn_bywr8_88",
	statusColumn: "_statusColumn_bywr8_89",
	actionColumn: "_actionColumn_bywr8_93",
	name: "_name_bywr8_84",
	icon: "_icon_bywr8_103",
	detail: "_detail_bywr8_108",
	status: "_status_bywr8_89",
	warning: "_warning_bywr8_119",
	success: "_success_bywr8_123",
	action: "_action_bywr8_93"
} }]]);
//#endregion
//#region src/features/integrations/promotions.ee/components/preview/PromotionReviewBlocker.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/integrations/promotions.ee/components/preview/PromotionReviewBlocker.vue
var PromotionReviewBlocker_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionReviewBlocker",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const rbacStore = useRBACStore();
		const settingsStore = useSettingsStore();
		const canOpenInbox = computed(() => settingsStore.settings.inbox?.enabled === true && rbacStore.hasScope("promotions:readReviews"));
		async function openInbox() {
			await router.push({ name: INBOX_VIEW });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nEmptyState_default), {
				icon: {
					type: "icon",
					value: "git-branch"
				},
				heading: unref(i18n).baseText("promotions.reviewBlocker.title"),
				description: unref(i18n).baseText(canOpenInbox.value ? "promotions.reviewBlocker.description" : "promotions.reviewBlocker.noAccess"),
				"button-text": canOpenInbox.value ? unref(i18n).baseText("promotions.reviewBlocker.link") : void 0,
				"data-test-id": "promotion-review-blocker",
				"onClick:button": openInbox
			}, null, 8, [
				"heading",
				"description",
				"button-text"
			]);
		};
	}
});
//#endregion
//#region src/features/integrations/promotions.ee/components/PromoteSelectionDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var PromoteSelectionDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromoteSelectionDialog",
	props: /*@__PURE__*/ mergeModels({
		open: { type: Boolean },
		changeCount: {},
		baseBranchName: {},
		createBranchOnPromotion: { type: Boolean },
		providerType: {}
	}, {
		"commitMessage": { default: "" },
		"commitMessageModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["update:open", "confirm"], ["update:commitMessage"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const commitMessage = useModel(__props, "commitMessage");
		const i18n = useI18n();
		const messageField = useTemplateRef("messageField");
		const title = computed(() => i18n.baseText("promotions.preview.promote.dialog.title", {
			adjustToNumber: props.changeCount,
			interpolate: { count: String(props.changeCount) }
		}));
		const bodyText = computed(() => {
			if (props.providerType === "gitlab" && props.createBranchOnPromotion) return i18n.baseText("promotions.preview.promote.dialog.body.mergeRequest", { interpolate: { branch: props.baseBranchName } });
			return props.createBranchOnPromotion ? i18n.baseText("promotions.preview.promote.dialog.body.newBranch") : i18n.baseText("promotions.preview.promote.dialog.body.toBranch", { interpolate: { branch: props.baseBranchName } });
		});
		function onOpenAutoFocus(event) {
			event.preventDefault();
			nextTick(() => messageField.value?.focus());
		}
		function submit() {
			emit("confirm", commitMessage.value.trim() || void 0);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"aria-description": bodyText.value,
				"data-test-id": "promote-selection-dialog",
				onOpenAutoFocus,
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(DialogBody_default), null, {
						default: withCtx(() => [createBaseVNode("form", {
							id: "promote-selection-form",
							class: normalizeClass(_ctx.$style.body),
							onSubmit: withModifiers(submit, ["prevent"])
						}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(bodyText.value), 1)]),
							_: 1
						}), createVNode(PromotionCommitMessageField_default, {
							ref_key: "messageField",
							ref: messageField,
							modelValue: commitMessage.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => commitMessage.value = $event)
						}, null, 8, ["modelValue"])], 34)]),
						_: 1
					}),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							type: "button",
							variant: "outline",
							"data-test-id": "promote-cancel-button",
							onClick: _cache[1] || (_cache[1] = ($event) => emit("update:open", false))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
							_: 1
						}), createVNode(unref(N8nButton_default), {
							type: "submit",
							form: "promote-selection-form",
							"data-test-id": "promote-confirm-button"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.promote.dialog.confirm")), 1)]),
							_: 1
						})]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["open", "aria-description"]);
		};
	}
}), [["__cssModules", { "$style": { body: "_body_htak6_1" } }]]);
//#endregion
//#region src/features/integrations/promotions.ee/promoteErrorMessage.ts
function resolveWorkflowTitles(workflowIds, changes) {
	const nameById = new Map(changes.map((change) => [change.id, change.name]));
	return workflowIds.map((id) => nameById.get(id) ?? id).join(", ");
}
/** User-facing promote failure text; undefined falls back to the API error message. */
function getPromoteErrorMessage(error, changes, i18n) {
	if (!(error instanceof ResponseError)) return;
	const movedMeta = parsePromotionsWorkflowsMovedCrossProjectMeta(error.meta);
	if (movedMeta) return i18n.baseText("promotions.operation.promoteError.workflowsMovedCrossProject", { interpolate: { workflows: resolveWorkflowTitles(movedMeta.workflowIds, changes) } });
}
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionOutcome.ts
/** The toasts and events after a promote or an apply of a project selection. */
function usePromotionOutcome() {
	const i18n = useI18n();
	const toast = useToast();
	const projectsStore = useProjectsStore();
	function showPromoted(projectId, result) {
		promotionEventBus.emit("promoted", { projectId });
		toast.showMessage({
			title: i18n.baseText("promotions.operation.toast.success.title"),
			type: result.warnings?.length ? "warning" : "success",
			...promoteSuccessToast(result, {
				pushed: i18n.baseText("promotions.result.pushed", { interpolate: { branch: result.git.branchName } }),
				viewMergeRequest: i18n.baseText("promotions.result.viewMergeRequest"),
				reviewNotRecorded: i18n.baseText("promotions.result.reviewNotRecorded")
			})
		});
	}
	function showApplied(result) {
		const { workflows } = result.counts;
		const notPublished = workflows.publishing.failed + workflows.publishing.blocked;
		const interpolate = {
			created: String(workflows.created),
			updated: String(workflows.updated),
			archived: String(workflows.archived),
			deleted: String(workflows.deleted),
			notPublished: String(notPublished)
		};
		toast.showMessage({
			title: i18n.baseText("promotions.operation.incoming.applied.title"),
			message: withMoveAndRenameNote(i18n, i18n.baseText(notPublished ? "promotions.operation.incoming.applied.messageNotPublished" : "promotions.operation.incoming.applied.message", { interpolate }), result.counts),
			type: notPublished ? "warning" : "success"
		});
	}
	async function announceApplied(projectId) {
		try {
			const project = await projectsStore.fetchProject(projectId);
			promotionEventBus.emit("applied", {
				projectId,
				project
			});
		} catch (error) {
			if (error instanceof ResponseError && error.httpStatusCode === 404) {
				toast.showMessage({
					title: i18n.baseText("promotions.applied.projectRemoved"),
					type: "info"
				});
				promotionEventBus.emit("projectRemoved", { projectId });
				return;
			}
			promotionEventBus.emit("applied", { projectId });
		}
	}
	return {
		showPromoted,
		showApplied,
		announceApplied
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionOperation.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function errorKind(cause) {
	const status = cause instanceof ResponseError ? cause.httpStatusCode : void 0;
	if (status === void 0 || status >= 500) return "uncertain";
	return status === 409 || status === 422 ? "conflict" : "rejected";
}
/** Runs the promote or the apply of the preview page, and handles its result. */
function usePromotionOperation(projectId, direction, { preview, check, refresh }) {
	const i18n = useI18n();
	const rootStore = useRootStore();
	const router = useRouter();
	const message = useMessage();
	const outcome = usePromotionOutcome();
	const phase = ref("idle");
	/** True from the click to the result. The selection does not change in that time. */
	const isBusy = computed(() => phase.value !== "idle");
	const notice = ref(null);
	const error = shallowRef(null);
	async function confirmApply({ confirmDestructiveChanges }) {
		return (confirmDestructiveChanges ? await message.confirm(i18n.baseText("promotions.preview.confirmDestructive.message"), i18n.baseText("promotions.preview.confirmDestructive.title"), {
			type: "warning",
			confirmButtonText: i18n.baseText("promotions.bindings.applyDataTableChanges"),
			cancelButtonText: i18n.baseText("generic.cancel")
		}) : await message.confirm(i18n.baseText("promotions.operation.incoming.confirmSelected.message"), i18n.baseText("promotions.operation.incoming.confirmSelected.title"), {
			type: "warning",
			confirmButtonText: i18n.baseText("promotions.operation.incoming.confirmSelected.confirmButtonText"),
			cancelButtonText: i18n.baseText("promotions.operation.close")
		})) === MODAL_CONFIRM;
	}
	async function leave() {
		if (router.currentRoute.value.name !== PROMOTION_PREVIEW_VIEWS[direction.value]) return;
		await router.replace({
			name: VIEWS.PROJECTS_WORKFLOWS,
			params: { projectId: projectId.value }
		});
	}
	async function promote({ workflowIds, commitMessage }) {
		const result = await promoteProjectSelection(rootStore.publicApiContext, projectId.value, {
			workflowIds,
			...commitMessage && { commitMessage }
		});
		outcome.showPromoted(projectId.value, result);
		await leave();
	}
	async function apply(request, source) {
		const expected = {
			expectedSource: {
				environmentId: source.environmentId,
				...source.git
			},
			expectedPreviewRevision: preview.value?.revision
		};
		const result = request.confirmDestructiveChanges ? await continueApplyProjectSelection(rootStore.publicApiContext, projectId.value, {
			workflowIds: request.workflowIds,
			...expected,
			confirmDestructiveChanges: true
		}) : await applyProjectSelection(rootStore.publicApiContext, projectId.value, {
			workflowIds: request.workflowIds,
			...expected
		});
		if (result.status === "applied") {
			outcome.showApplied(result);
			await leave();
			await outcome.announceApplied(projectId.value);
			return;
		}
		notice.value = {
			"source-changed": "sourceChanged",
			"preview-changed": "instanceChanged",
			blocked: "newBlockers"
		}[result.status];
		await refresh();
	}
	async function submit(request) {
		if (isBusy.value || request.workflowIds.length === 0) return;
		const source = check.value;
		if (direction.value === "apply" && !source) return;
		phase.value = "confirming";
		try {
			if (direction.value === "apply" && !await confirmApply(request)) return;
			phase.value = "running";
			notice.value = null;
			error.value = null;
			if (direction.value === "promote") await promote(request);
			else if (source) await apply(request, source);
		} catch (cause) {
			const kind = errorKind(cause);
			const explained = direction.value === "promote" ? getPromoteErrorMessage(cause, preview.value?.changes ?? [], i18n) : void 0;
			error.value = explained ? {
				message: explained,
				kind: "explained"
			} : {
				message: cause instanceof Error ? cause.message : String(cause),
				kind
			};
			if (kind !== "rejected") await refresh();
		} finally {
			phase.value = "idle";
		}
	}
	return {
		isBusy,
		isRunning: computed(() => phase.value === "running"),
		notice,
		error,
		submit
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionPreview.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* Loads the preview of one project and direction for the preview page. On Apply, the preview
* also holds the blockers, so both describe the same source.
*/
function usePromotionPreview(projectId, direction) {
	const rootStore = useRootStore();
	const { next } = useLatestFetch();
	const { environments, failed: connectionFailed, load: loadConnection } = useInstancePromotionConnection();
	const state = ref("loading");
	const preview = shallowRef(null);
	const refreshing = ref(false);
	/** True when a refresh failed. The page keeps the last preview and says so. */
	const refreshFailed = ref(false);
	const lastRefreshedAt = ref(null);
	/** The Apply check. `null` on Promote, and when the branch has no commit yet. */
	const check = computed(() => {
		const result = preview.value;
		return result?.check && result.commitSha ? {
			environmentId: result.source.environmentId,
			git: {
				commitSha: result.commitSha,
				branchName: result.source.branchName
			},
			...result.check
		} : null;
	});
	const graph = computed(() => preview.value ? buildSelectionGraph(preview.value, direction.value) : null);
	const environment = computed(() => environments.value.find((candidate) => candidate.direction === direction.value) ?? null);
	const repositoryName = computed(() => environment.value ? repositoryDisplayName(environment.value.remote) : null);
	async function load() {
		const isLatest = next();
		const requested = {
			projectId: projectId.value,
			direction: direction.value
		};
		if (!preview.value) state.value = "loading";
		refreshing.value = true;
		refreshFailed.value = false;
		try {
			await loadConnection();
			if (!isLatest()) return;
			if (connectionFailed.value || !environment.value) {
				state.value = connectionFailed.value ? "connectionFailed" : "disconnected";
				preview.value = null;
				return;
			}
			const result = await getPromotionPreview(rootStore.restApiContext, requested.projectId, requested.direction);
			if (!isLatest()) return;
			preview.value = result;
			lastRefreshedAt.value = /* @__PURE__ */ new Date();
			state.value = result.blocker ? "blocked" : result.resources.length === 0 ? "empty" : "ready";
		} catch {
			if (!isLatest()) return;
			if (state.value === "ready") refreshFailed.value = true;
			else {
				preview.value = null;
				state.value = "error";
			}
		} finally {
			if (isLatest()) refreshing.value = false;
		}
	}
	watch([projectId, direction], async () => {
		preview.value = null;
		lastRefreshedAt.value = null;
		await load();
	}, { immediate: true });
	return {
		state,
		preview,
		check,
		graph,
		environment,
		repositoryName,
		refreshing,
		refreshFailed,
		lastRefreshedAt,
		refresh: load
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionSelection.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var noInclusion = {
	included: /* @__PURE__ */ new Set(),
	reasons: /* @__PURE__ */ new Map()
};
/**
* The selection on the preview page. `disabled` holds the blocked workflows. The selection does
* not change while `locked`, for example while the operation runs.
*/
function usePromotionSelection(graph, { disabled, locked }) {
	const selection = ref(initialSelectionState);
	/** Selected keys that the last refresh no longer lists, so the page can say why they left. */
	const dropped = ref([]);
	watch([graph, disabled], ([current, currentDisabled]) => {
		if (!current) {
			selection.value = initialSelectionState;
			dropped.value = [];
			return;
		}
		const result = applyPreview(selection.value, current, currentDisabled);
		selection.value = result.state;
		dropped.value = result.dropped;
	}, { immediate: true });
	const selected = computed(() => selection.value.selected);
	const inclusion = computed(() => graph.value ? resolveInclusion(graph.value, selected.value) : noInclusion);
	function update(change) {
		if (graph.value && !locked.value) selection.value = change(graph.value);
	}
	return {
		selected,
		inclusion,
		dropped,
		toggle: (key) => update((current) => toggleSelection(selection.value, current, key, disabled.value)),
		toggleAllInside: (containerKey) => update((current) => toggleContainer(selection.value, current, containerKey, disabled.value)),
		selectAll: () => update((current) => selectAll(selection.value, current, disabled.value)),
		clear: () => update(() => clearSelection())
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/views/PromotionPreviewView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var PromotionPreviewView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionPreviewView",
	props: {
		projectId: {},
		direction: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const projectsStore = useProjectsStore();
		const rbacStore = useRBACStore();
		const rootStore = useRootStore();
		const documentTitle = useDocumentTitle();
		const projectId = toRef(props, "projectId");
		const direction = toRef(props, "direction");
		const { state, preview, check, graph, environment, refreshing, refreshFailed, refresh } = usePromotionPreview(projectId, direction);
		const promoteEnvironment = computed(() => environment.value?.direction === "promote" ? environment.value : null);
		const scopedCheck = computed(() => check.value && graph.value ? scopeCheck(check.value, graph.value) : null);
		const listedWorkflowKeys = computed(() => graph.value ? [...graph.value.resources.values()].filter(({ type, selectable }) => type === "workflow" && selectable).map(({ key }) => key) : []);
		const blockerList = computed(() => [...scopedCheck.value ? listBlockers(scopedCheck.value, listedWorkflowKeys.value) : [], ...props.direction === "promote" && graph.value ? crossProjectMoveBlockers(graph.value) : []]);
		const blockers = computed(() => indexBlockers(blockerList.value));
		const operation = usePromotionOperation(projectId, direction, {
			preview,
			check,
			refresh
		});
		const selection = usePromotionSelection(graph, {
			disabled: computed(() => blockers.value.blocked),
			locked: operation.isBusy
		});
		const activeWorkflowKey = ref();
		const details = usePromotionResourceDetails(async (keys) => await getPromotionResourceDetails(rootStore.restApiContext, props.projectId, props.direction, {
			commitSha: preview.value?.commitSha ?? null,
			keys
		}), preview, graph, activeWorkflowKey);
		const projectName = computed(() => projectsStore.currentProject?.id === props.projectId ? projectsStore.currentProject.name : preview.value?.resources.find((resource) => resource.type === "project" && resource.id === props.projectId)?.name);
		const title = computed(() => {
			if (!environment.value?.name) return i18n.baseText(`promotions.preview.title.${props.direction}`);
			return i18n.baseText(projectName.value ? `promotions.preview.title.project.${props.direction}` : `settings.promotions.${props.direction}.dialog.title`, { interpolate: {
				project: projectName.value ?? "",
				environment: environment.value.name
			} });
		});
		watch(title, (value) => documentTitle.set(value), { immediate: true });
		const tree = computed(() => preview.value ? buildPreviewTree(preview.value, {
			workflows: i18n.baseText("promotions.preview.tree.section.workflows"),
			group: (group) => i18n.baseText(`promotions.preview.tree.group.${group}`)
		}) : []);
		const order = computed(() => graph.value ? cardOrder(tree.value, graph.value.resources) : []);
		const inspectedKey = computed(() => typeof route.query.resource === "string" ? route.query.resource : void 0);
		const cards = ref(null);
		const hasDiff = (key) => {
			const resource = graph.value?.resources.get(key);
			return !!resource && hasWorkflowDiff(resource);
		};
		watch(order, (keys, previous = []) => {
			const key = activeWorkflowKey.value;
			if (key ? keys.includes(key) && hasDiff(key) : previous.length > 0) return;
			activeWorkflowKey.value = graph.value ? defaultActiveWorkflow(keys, graph.value.resources, inspectedKey.value) : void 0;
		}, { immediate: true });
		watch(inspectedKey, (key) => {
			if (key && hasDiff(key)) activeWorkflowKey.value = key;
		});
		async function inspect(key) {
			if (hasDiff(key)) activeWorkflowKey.value = key;
			if (key === inspectedKey.value) {
				await cards.value?.scrollToCard(key);
				return;
			}
			await router.replace({ query: {
				...route.query,
				resource: key
			} });
		}
		const canOpenSettings = computed(() => rbacStore.hasScope([...PROMOTIONS_SETTINGS_SCOPES], {}, { mode: "allOf" }));
		const projectRoute = computed(() => ({
			name: VIEWS.PROJECTS_WORKFLOWS,
			params: { projectId: props.projectId }
		}));
		const backLabel = computed(() => i18n.baseText("promotions.preview.back", { interpolate: { project: projectsStore.currentProject?.name ?? "" } }));
		const totalChanges = computed(() => graph.value ? totalChangeCount(graph.value) : 0);
		const includedChanges = computed(() => graph.value ? includedChangeCount(graph.value, selection.inclusion.value) : 0);
		const request = computed(() => {
			const { workflowIds } = graph.value ? toOperationRequest(graph.value, selection.selected.value) : { workflowIds: [] };
			return {
				workflowIds,
				confirmDestructiveChanges: touchesDestructiveChange(blockers.value, selection.selected.value)
			};
		});
		const hasSelectedBlocked = computed(() => [...selection.selected.value].some((key) => blockers.value.blocked.has(key)));
		const submitBlockedReason = computed(() => {
			const movedFolders = scopedCheck.value?.movedFolders ?? [];
			if (movedFolders.length > 0) return i18n.baseText("promotions.preview.submit.folderMoved", {
				adjustToNumber: movedFolders.length,
				interpolate: { folders: movedFolders.map(({ name }) => `"${name}"`).join(", ") }
			});
			if (!hasSelectedBlocked.value) return void 0;
			return i18n.baseText(props.direction === "promote" ? "promotions.preview.submit.blockedPromote" : "promotions.preview.submit.blocked");
		});
		const actionableChanges = computed(() => {
			if (!graph.value || scopedCheck.value?.movedFolders.length) return 0;
			const actionable = new Set([...selection.selected.value].filter((key) => !blockers.value.blocked.has(key)));
			return includedChangeCount(graph.value, resolveInclusion(graph.value, actionable));
		});
		const canSubmit = computed(() => state.value === "ready" && !refreshing.value && !operation.isBusy.value && !submitBlockedReason.value && request.value.workflowIds.length > 0 && actionableChanges.value > 0 && (props.direction === "promote" || !!check.value));
		const submitLabel = computed(() => i18n.baseText(`promotions.preview.submit.${props.direction}`, {
			adjustToNumber: actionableChanges.value,
			interpolate: { count: String(actionableChanges.value) }
		}));
		const promoteDialogOpen = ref(false);
		const promoteCommitMessage = ref("");
		watch(projectId, () => {
			promoteCommitMessage.value = "";
		});
		async function onSubmit() {
			if (props.direction === "promote") {
				promoteDialogOpen.value = true;
				return;
			}
			await operation.submit(request.value);
		}
		async function onPromoteConfirm(commitMessage) {
			promoteDialogOpen.value = false;
			await operation.submit({
				...request.value,
				commitMessage
			});
		}
		const activeTab = ref("changes");
		const blockerCount = computed(() => blockerList.value.filter(isBlocking).length);
		const showBlockersTab = computed(() => props.direction === "apply" && !!scopedCheck.value && state.value === "ready");
		watch(showBlockersTab, (show) => {
			if (!show) activeTab.value = "changes";
		});
		const tabs = computed(() => [{
			value: "changes",
			label: i18n.baseText("promotions.preview.tab.changes"),
			tag: graph.value ? String(totalChanges.value) : void 0
		}, ...showBlockersTab.value ? [{
			value: "blockers",
			label: i18n.baseText("promotions.preview.tab.blockers"),
			tag: blockerCount.value > 0 ? String(blockerCount.value) : void 0
		}] : []]);
		function showBlockers() {
			if (showBlockersTab.value) activeTab.value = "blockers";
		}
		async function inspectFromBlockers(key) {
			activeTab.value = "changes";
			await nextTick();
			await inspect(key);
		}
		watch(operation.notice, (notice) => {
			if (notice === "newBlockers") activeTab.value = "blockers";
		});
		const panes = ref(null);
		const treeResizer = useResizablePanel({
			container: panes,
			width: {
				localStorageKey: "N8N_PROMOTION_PREVIEW_TREE_WIDTH",
				defaultSize: (size) => Math.min(Math.max(size * .24, 240), 340),
				minSize: 240,
				maxSize: (size) => Math.min(size * .5, 640),
				snap: true
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.page),
				"data-test-id": "promotion-preview-page"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(unref(N8nLink_default), {
						to: projectRoute.value,
						theme: "text",
						size: "small",
						"data-test-id": "promotion-preview-back"
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.back) }, [createVNode(unref(N8nIcon_default), {
							icon: "arrow-left",
							size: "small"
						}), createTextVNode(toDisplayString(backLabel.value), 1)], 2)]),
						_: 1
					}, 8, ["to"]),
					createVNode(unref(N8nHeading_default), {
						tag: "h1",
						size: "xlarge",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabRow) }, [createVNode(unref(N8nTabs_default), {
						modelValue: activeTab.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
						options: tabs.value,
						class: normalizeClass(_ctx.$style.tabs),
						"data-test-id": "promotion-preview-tabs"
					}, null, 8, [
						"modelValue",
						"options",
						"class"
					]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						icon: "refresh-cw",
						loading: unref(refreshing),
						disabled: unref(operation).isBusy.value,
						"data-test-id": "promotion-preview-refresh",
						onClick: unref(refresh)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.refresh")), 1)]),
						_: 1
					}, 8, [
						"loading",
						"disabled",
						"onClick"
					]), createVNode(unref(N8nButton_default), {
						variant: request.value.confirmDestructiveChanges ? "destructive" : "brand",
						size: "small",
						disabled: !canSubmit.value,
						loading: unref(operation).isRunning.value,
						"data-test-id": "promotion-preview-submit",
						onClick: onSubmit
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(submitLabel.value), 1)]),
						_: 1
					}, 8, [
						"variant",
						"disabled",
						"loading"
					])], 2)], 2)
				], 2),
				unref(state) === "loading" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.state),
					"data-test-id": "promotion-preview-loading"
				}, [createVNode(unref(N8nLoading_default), { rows: 6 })], 2)) : unref(state) === "disconnected" ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.state),
					icon: {
						type: "icon",
						value: "git-branch"
					},
					heading: unref(i18n).baseText(`promotions.preview.state.disconnected.${direction.value}.title`),
					description: unref(i18n).baseText(canOpenSettings.value ? "promotions.preview.state.disconnected.admin" : "promotions.preview.state.disconnected.member"),
					"button-text": canOpenSettings.value ? unref(i18n).baseText("promotions.preview.state.disconnected.action") : void 0,
					"data-test-id": "promotion-preview-disconnected",
					"onClick:button": _cache[1] || (_cache[1] = ($event) => unref(router).push({ name: unref("PromotionsSettings") }))
				}, null, 8, [
					"class",
					"heading",
					"description",
					"button-text"
				])) : unref(state) === "connectionFailed" || unref(state) === "error" ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
					key: 2,
					class: normalizeClass(_ctx.$style.state),
					icon: {
						type: "icon",
						value: "circle-alert"
					},
					heading: unref(i18n).baseText(unref(state) === "connectionFailed" ? "promotions.preview.state.connectionFailed" : "promotions.preview.state.error"),
					"button-text": unref(i18n).baseText("promotions.preview.state.retry"),
					"data-test-id": "promotion-preview-error",
					"onClick:button": unref(refresh)
				}, null, 8, [
					"class",
					"heading",
					"button-text",
					"onClick:button"
				])) : unref(state) === "blocked" ? (openBlock(), createBlock(PromotionReviewBlocker_default, {
					key: 3,
					class: normalizeClass(_ctx.$style.state)
				}, null, 8, ["class"])) : unref(state) === "empty" ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
					key: 4,
					class: normalizeClass(_ctx.$style.state),
					icon: {
						type: "icon",
						value: "check"
					},
					heading: unref(i18n).baseText(`promotions.preview.state.empty.${direction.value}.title`),
					description: unref(i18n).baseText("promotions.preview.state.empty.description"),
					"data-test-id": "promotion-preview-empty"
				}, null, 8, [
					"class",
					"heading",
					"description"
				])) : unref(graph) ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
					unref(operation).error.value || unref(operation).notice.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.operationNotices)
					}, [unref(operation).error.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 0,
						theme: "danger",
						"data-test-id": "promotion-preview-operation-error"
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`promotions.preview.error.${direction.value}`)), 1)]),
							_: 1
						}), createTextVNode(" " + toDisplayString(unref(operation).error.value.message) + " " + toDisplayString(unref(i18n).baseText(`promotions.preview.error.${unref(operation).error.value.kind}`)), 1)]),
						_: 1
					})) : createCommentVNode("", true), unref(operation).notice.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 1,
						theme: "warning",
						slim: "",
						"data-test-id": "promotion-preview-operation-notice"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`promotions.preview.notice.${unref(operation).notice.value}`)), 1)]),
						_: 1
					})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					withDirectives(createBaseVNode("div", {
						ref_key: "panes",
						ref: panes,
						class: normalizeClass(_ctx.$style.panes)
					}, [createVNode(unref(N8nResizeWrapper_default), {
						class: normalizeClass(_ctx.$style.tree),
						style: normalizeStyle({ width: `${unref(treeResizer).width.value}px` }),
						resizer: unref(treeResizer),
						"supported-directions": ["right"]
					}, {
						default: withCtx(() => [createVNode(PromotionResourceTree_default, {
							tree: tree.value,
							graph: unref(graph),
							selected: unref(selection).selected.value,
							inclusion: unref(selection).inclusion.value,
							"included-changes": includedChanges.value,
							"total-changes": totalChanges.value,
							"inspected-key": inspectedKey.value,
							disabled: blockers.value.blocked,
							locked: unref(operation).isBusy.value,
							direction: direction.value,
							blockers: blockers.value,
							onShowBlockers: showBlockers,
							onToggle: unref(selection).toggle,
							onToggleContainer: unref(selection).toggleAllInside,
							onSelectAll: unref(selection).selectAll,
							onClear: unref(selection).clear,
							onInspect: inspect
						}, null, 8, [
							"tree",
							"graph",
							"selected",
							"inclusion",
							"included-changes",
							"total-changes",
							"inspected-key",
							"disabled",
							"locked",
							"direction",
							"blockers",
							"onToggle",
							"onToggleContainer",
							"onSelectAll",
							"onClear"
						])]),
						_: 1
					}, 8, [
						"class",
						"style",
						"resizer"
					]), createBaseVNode("section", { class: normalizeClass(_ctx.$style.cards) }, [
						submitBlockedReason.value && !unref(operation).error.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "warning",
							slim: "",
							"data-test-id": "promotion-preview-submit-blocked"
						}, createSlots({
							default: withCtx(() => [createTextVNode(toDisplayString(submitBlockedReason.value) + " ", 1)]),
							_: 2
						}, [showBlockersTab.value ? {
							name: "trailingContent",
							fn: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "small",
								onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "blockers")
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.card.viewBlockers")), 1)]),
								_: 1
							})]),
							key: "0"
						} : void 0]), 1024)) : createCommentVNode("", true),
						unref(refreshFailed) ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 1,
							theme: "warning",
							slim: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.refreshFailed")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						unref(selection).dropped.value.length > 0 ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 2,
							theme: "info",
							slim: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.preview.dropped", {
								adjustToNumber: unref(selection).dropped.value.length,
								interpolate: { count: String(unref(selection).dropped.value.length) }
							})), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						createVNode(PromotionChangeCards_default, {
							ref_key: "cards",
							ref: cards,
							"active-workflow": activeWorkflowKey.value,
							"onUpdate:activeWorkflow": _cache[3] || (_cache[3] = ($event) => activeWorkflowKey.value = $event),
							order: order.value,
							graph: unref(graph),
							direction: direction.value,
							selected: unref(selection).selected.value,
							inclusion: unref(selection).inclusion.value,
							disabled: blockers.value.blocked,
							locked: unref(operation).isBusy.value,
							entries: unref(details).entries.value,
							"inspected-key": inspectedKey.value,
							blockers: blockers.value,
							onRetry: unref(details).retry,
							onRefresh: unref(refresh),
							onInspect: inspect,
							onToggle: unref(selection).toggle,
							onToggleContainer: unref(selection).toggleAllInside
						}, null, 8, [
							"active-workflow",
							"order",
							"graph",
							"direction",
							"selected",
							"inclusion",
							"disabled",
							"locked",
							"entries",
							"inspected-key",
							"blockers",
							"onRetry",
							"onRefresh",
							"onToggle",
							"onToggleContainer"
						])
					], 2)], 2), [[vShow, activeTab.value === "changes"]]),
					showBlockersTab.value && scopedCheck.value ? withDirectives((openBlock(), createBlock(PromotionBlockers_default, {
						key: 1,
						class: normalizeClass(_ctx.$style.blockers),
						check: scopedCheck.value,
						busy: unref(operation).isBusy.value,
						onRefresh: unref(refresh),
						onInspect: inspectFromBlockers
					}, {
						default: withCtx(() => [submitBlockedReason.value && !unref(operation).error.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "warning",
							slim: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(submitBlockedReason.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"class",
						"check",
						"busy",
						"onRefresh"
					])), [[vShow, activeTab.value === "blockers"]]) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				promoteDialogOpen.value && promoteEnvironment.value ? (openBlock(), createBlock(PromoteSelectionDialog_default, {
					key: 6,
					open: promoteDialogOpen.value,
					"onUpdate:open": _cache[4] || (_cache[4] = ($event) => promoteDialogOpen.value = $event),
					"commit-message": promoteCommitMessage.value,
					"onUpdate:commitMessage": _cache[5] || (_cache[5] = ($event) => promoteCommitMessage.value = $event),
					"change-count": includedChanges.value,
					"base-branch-name": promoteEnvironment.value.settings.baseBranchName,
					"create-branch-on-promotion": promoteEnvironment.value.settings.createBranchOnPromotion,
					"provider-type": promoteEnvironment.value.provider.type,
					onConfirm: onPromoteConfirm
				}, null, 8, [
					"open",
					"commit-message",
					"change-count",
					"base-branch-name",
					"create-branch-on-promotion",
					"provider-type"
				])) : createCommentVNode("", true)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	page: "_page_1ucha_1",
	header: "_header_1ucha_9",
	title: "_title_1ucha_19",
	back: "_back_1ucha_23",
	tabRow: "_tabRow_1ucha_29",
	tabs: "_tabs_1ucha_38",
	actions: "_actions_1ucha_43",
	state: "_state_1ucha_51",
	operationNotices: "_operationNotices_1ucha_56",
	blockers: "_blockers_1ucha_63",
	panes: "_panes_1ucha_68",
	tree: "_tree_1ucha_74",
	cards: "_cards_1ucha_81"
} }]]);
//#endregion
export { PromotionPreviewView_default as default };
