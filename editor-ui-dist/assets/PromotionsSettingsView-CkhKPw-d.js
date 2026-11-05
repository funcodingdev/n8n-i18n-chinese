import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Bf as shallowRef, Cf as watch, Gd as createVNode, If as reactive, Kf as unref, Ld as computed, Nd as withModifiers, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, af as onBeforeUnmount, bd as I18nT, ep as init_shared_esm_bundler, ff as renderList, os as useRouter, pf as renderSlot, pp as normalizeClass, qd as defineComponent, rf as nextTick, sf as onMounted, uf as openBlock, vp as toDisplayString, xf as useTemplateRef, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { C as PROMOTIONS_ENVIRONMENT_ADD_VIEW, CE as PreviewBadge_default, CT as DialogHeader_default, Cm as useProjectsStore, Dx as promotionDirectionSchema, ED as N8nText_default, FD as N8nIcon_default, HE as N8nExternalLink_default, Hy as useToast, LE as N8nLink_default, ND as N8nIconButton_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, ST as DialogTitle_default, Tm as useSourceControlStore, UD as useI18n, UE as N8nEmptyState_default, Xy as useRootStore, ZT as N8nStatusDot_default, aD as N8nCallout_default, bT as DialogDescription_default, cE as SettingsSection_default, cT as Loading_default, fE as SettingsRow_default, hE as SettingsLayout_default, lT as useMessage, mD as N8nActionToggle_default, mE as SettingsPageHeader_default, np as useDocumentTitle, qT as N8nSwitch_default, uE as SettingsRowGroup_default, vT as DialogFooter_default, w as PROMOTIONS_ENVIRONMENT_EDIT_VIEW, xT as Dialog_default, yT as DialogBody_default, yb as ResponseError } from "./app-CfhiRDif.js";
import { t as useLatestFetch } from "./useLatestFetch-qxqEmkzg.js";
import { _ as promotePackage, d as deleteProviderIfUnused, i as applyPromotion, m as fetchPromotionEnvironments, p as fetchPromotionEnvironment, t as invalidateInstancePromotionConnection, u as deletePromotionEnvironment } from "./useInstancePromotionConnection-DMPuvGv7.js";
import { a as promotionEnvironmentBranch, s as promotionProviderIcon } from "./promotionsSettings.utils-BSGZ5goy.js";
import { t as usePromotionCheckout } from "./usePromotionCheckout-ADqluFxy.js";
import { a as PromotionCommitMessageField_default, i as withMoveAndRenameNote, o as usePromotionBindings, r as warningSegments, s as usePromotionBindingCreation, t as httpUrl } from "./promotionResult-CLHH-qUP.js";
import { t as useEnvironmentsVersionSwitch } from "./useEnvironmentsVersionSwitch-Ce-k2cYJ.js";
//#region src/features/integrations/promotions.ee/components/PromotionBindingsDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$1 = { key: 0 };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { key: 1 };
var _hoisted_4 = { key: 4 };
var _hoisted_5 = { key: 0 };
var _hoisted_6 = { key: 0 };
var _hoisted_7 = ["aria-label"];
var _hoisted_8 = { scope: "col" };
var _hoisted_9 = { scope: "col" };
var _hoisted_10 = { scope: "col" };
var _hoisted_11 = { "aria-live": "polite" };
var LISTED_COLUMNS_LIMIT = 5;
var PromotionBindingsDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionBindingsDialog",
	props: {
		open: { type: Boolean },
		blockedResult: {},
		createBinding: { type: Function }
	},
	emits: [
		"update:open",
		"applied",
		"preflight-updated",
		"source-changed",
		"close-requested"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = useTemplateRef("title");
		const bindings = usePromotionBindings();
		const { preflight, groups, destructiveChanges, projectDeletions, needsConfirmation, hardConflicts, mode, unresolvedCount, savedResources, isBusy, isSubmitting, isCreating, sourceChanged, error, canContinue } = bindings;
		watch(() => props.open, (open) => {
			if (open) bindings.start(props.blockedResult);
			else bindings.end();
		}, { immediate: true });
		watch(preflight, (value) => {
			if (value) emit("preflight-updated", value);
		}, {
			immediate: true,
			flush: "sync"
		});
		onBeforeUnmount(bindings.end);
		const header = computed(() => {
			if (mode.value === "bindings") return {
				title: i18n.baseText("promotions.bindings.title"),
				subtitle: i18n.baseText("promotions.bindings.subtitle")
			};
			return {
				title: i18n.baseText(`promotions.bindings.${mode.value}.title`),
				subtitle: i18n.baseText(`promotions.bindings.${mode.value}.subtitle`)
			};
		});
		const visibleGroups = computed(() => mode.value === "bindings" ? groups.value : []);
		const destructiveSummary = computed(() => i18n.baseText(mode.value === "blocked" ? "promotions.bindings.destructive.description" : "promotions.bindings.destructive.confirmDescription", { adjustToNumber: destructiveChanges.value.length }));
		function destructiveColumns(changes) {
			const columns = changes.flatMap((change) => change.kind === "remove-column" || change.kind === "change-column-type" ? change.column : []);
			const list = columns.slice(0, LISTED_COLUMNS_LIMIT).join(", ");
			const hidden = columns.length - LISTED_COLUMNS_LIMIT;
			return hidden > 0 ? i18n.baseText("promotions.bindings.destructive.columnsMore", { interpolate: {
				list,
				count: hidden
			} }) : i18n.baseText("promotions.bindings.destructive.columns", { interpolate: { list } });
		}
		const submitLabel = computed(() => {
			if (projectDeletions.value.length) return i18n.baseText("promotions.bindings.deleteProjectsAndApply", {
				adjustToNumber: projectDeletions.value.length,
				interpolate: { count: String(projectDeletions.value.length) }
			});
			return i18n.baseText(destructiveChanges.value.length ? "promotions.bindings.applyDataTableChanges" : "promotions.bindings.continue");
		});
		const errorDetail = computed(() => error.value?.kind === "continue" && error.value.cause instanceof Error ? error.value.cause.message : void 0);
		function close() {
			if (!props.open || isBusy.value) return;
			emit("close-requested", savedResources.value);
			emit("update:open", false);
		}
		function preventBusyDismissal(event) {
			if (isBusy.value) event.preventDefault();
		}
		function preventEscapeDismissal(event) {
			const dialog = title.value?.closest("[role=\"dialog\"]");
			if (isBusy.value || !(event.target instanceof Node) || !dialog?.contains(event.target)) event.preventDefault();
		}
		function focusTitle(event) {
			event.preventDefault();
			nextTick(() => title.value?.focus());
		}
		function destinationScope(binding) {
			if (binding.kind === "credential") return binding.ownerProject.name;
			return binding.scope.kind === "global" ? i18n.baseText("promotions.bindings.global") : binding.scope.project.name;
		}
		function consumerNames(consumers) {
			return consumers.map((consumer) => i18n.baseText("promotions.bindings.consumers", { interpolate: {
				project: consumer.project.name,
				workflows: consumer.workflows.map((workflow) => workflow.name).join(", ")
			} })).join("; ");
		}
		async function create(key, event) {
			const trigger = event.currentTarget;
			const row = trigger instanceof HTMLElement ? trigger.closest("tr") : null;
			await bindings.createBinding(key, props.createBinding);
			await nextTick();
			if (!props.open || !row?.isConnected) return;
			if (trigger instanceof HTMLButtonElement && trigger.isConnected && !trigger.disabled) trigger.focus();
			else row.focus();
		}
		async function continueApply() {
			const result = await bindings.continueInstanceApply();
			if (result?.status === "applied") {
				emit("applied", result);
				emit("update:open", false);
			} else if (result?.status === "source-changed") emit("source-changed", result);
			else if (result?.status === "blocked") {
				await nextTick();
				title.value?.focus();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "xlarge",
				"show-close-button": !unref(isBusy),
				"trap-focus": !unref(isCreating),
				"disable-outside-pointer-events": !unref(isCreating),
				onOpenAutoFocus: focusTitle,
				"onUpdate:open": close,
				onEscapeKeyDown: preventEscapeDismissal,
				onInteractOutside: preventBusyDismissal
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), { class: normalizeClass(_ctx.$style.header) }, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							type: "button",
							variant: "ghost",
							size: "small",
							icon: "arrow-left",
							"icon-only": "",
							"aria-label": unref(i18n).baseText("promotions.bindings.back"),
							disabled: unref(isBusy),
							onClick: close
						}, null, 8, ["aria-label", "disabled"]), createBaseVNode("div", null, [createVNode(unref(DialogTitle_default), { "as-child": "" }, {
							default: withCtx(() => [createBaseVNode("h2", {
								ref_key: "title",
								ref: title,
								class: normalizeClass(_ctx.$style.title),
								tabindex: "-1"
							}, toDisplayString(header.value.title), 3)]),
							_: 1
						}), createVNode(unref(DialogDescription_default), { class: normalizeClass(_ctx.$style.subtitle) }, {
							default: withCtx(() => [createTextVNode(toDisplayString(header.value.subtitle), 1)]),
							_: 1
						}, 8, ["class"])])]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(DialogBody_default), null, {
						default: withCtx(() => [createBaseVNode("form", {
							id: "promotion-bindings-form",
							class: normalizeClass(_ctx.$style.form),
							onSubmit: withModifiers(continueApply, ["prevent"])
						}, [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.body),
							"data-test-id": "promotion-bindings-body"
						}, [
							renderSlot(_ctx.$slots, "notices"),
							unref(sourceChanged) ? (openBlock(), createBlock(unref(N8nCallout_default), {
								key: 0,
								theme: "warning"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.sourceChanged")), 1)]),
								_: 1
							})) : createCommentVNode("", true),
							unref(error) ? (openBlock(), createBlock(unref(N8nCallout_default), {
								key: 1,
								theme: "danger"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`promotions.bindings.error.${unref(error).kind}`)) + " ", 1), errorDetail.value ? (openBlock(), createElementBlock("p", _hoisted_1$1, toDisplayString(errorDetail.value), 1)) : createCommentVNode("", true)]),
								_: 1
							})) : createCommentVNode("", true),
							unref(preflight)?.accessRequirements.length ? (openBlock(), createElementBlock("section", {
								key: 2,
								class: normalizeClass(_ctx.$style.notices)
							}, [createBaseVNode("h3", null, toDisplayString(unref(i18n).baseText("promotions.bindings.access.title")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(preflight).accessRequirements, (item) => {
								return openBlock(), createBlock(unref(N8nCallout_default), {
									key: item.sourceId,
									theme: "warning"
								}, {
									default: withCtx(() => [
										createBaseVNode("strong", null, toDisplayString(item.name), 1),
										createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("promotions.bindings.access.description")), 1),
										createBaseVNode("p", null, toDisplayString(consumerNames(item.consumers)), 1)
									]),
									_: 2
								}, 1024);
							}), 128))], 2)) : createCommentVNode("", true),
							unref(hardConflicts).length ? (openBlock(), createElementBlock("section", {
								key: 3,
								class: normalizeClass(_ctx.$style.notices)
							}, [createBaseVNode("h3", null, toDisplayString(unref(i18n).baseText("promotions.bindings.conflicts.title")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hardConflicts), (item, index) => {
								return openBlock(), createBlock(unref(N8nCallout_default), {
									key: index,
									theme: "warning"
								}, {
									default: withCtx(() => [
										createBaseVNode("strong", null, toDisplayString(item.kind === "project" ? item.project.name : item.name), 1),
										createBaseVNode("p", null, toDisplayString(unref(i18n).baseText(`promotions.bindings.conflicts.${item.code}`)), 1),
										item.kind !== "project" ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(consumerNames(item.consumers)), 1)) : (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(item.workflows.map((workflow) => workflow.name).join(", ")), 1))
									]),
									_: 2
								}, 1024);
							}), 128))], 2)) : createCommentVNode("", true),
							unref(mode) === "blocked" ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(unref(i18n).baseText("promotions.bindings.restart")), 1)) : createCommentVNode("", true),
							unref(projectDeletions).length ? (openBlock(), createElementBlock("section", {
								key: 5,
								class: normalizeClass(_ctx.$style.notices)
							}, [
								createBaseVNode("h3", null, toDisplayString(unref(i18n).baseText("promotions.bindings.projectDeletion.title")), 1),
								createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("promotions.bindings.projectDeletion.description", { adjustToNumber: unref(projectDeletions).length })), 1),
								(openBlock(true), createElementBlock(Fragment, null, renderList(unref(projectDeletions), (item) => {
									return openBlock(), createBlock(unref(N8nCallout_default), {
										key: item.project.id,
										theme: "warning",
										iconless: ""
									}, {
										default: withCtx(() => [createBaseVNode("strong", null, toDisplayString(item.project.name), 1)]),
										_: 2
									}, 1024);
								}), 128))
							], 2)) : createCommentVNode("", true),
							unref(destructiveChanges).length ? (openBlock(), createElementBlock("section", {
								key: 6,
								class: normalizeClass(_ctx.$style.notices)
							}, [
								unref(mode) !== "review" || unref(projectDeletions).length ? (openBlock(), createElementBlock("h3", _hoisted_5, toDisplayString(unref(i18n).baseText("promotions.bindings.destructive.title")), 1)) : createCommentVNode("", true),
								createBaseVNode("p", null, toDisplayString(destructiveSummary.value), 1),
								(openBlock(true), createElementBlock(Fragment, null, renderList(unref(destructiveChanges), (item) => {
									return openBlock(), createBlock(unref(N8nCallout_default), {
										key: item.id,
										theme: "warning",
										iconless: ""
									}, {
										default: withCtx(() => [createBaseVNode("strong", null, toDisplayString(item.name), 1), createBaseVNode("p", null, toDisplayString(destructiveColumns(item.changes)), 1)]),
										_: 2
									}, 1024);
								}), 128))
							], 2)) : createCommentVNode("", true),
							unref(mode) === "bindings" ? (openBlock(), createElementBlock("div", {
								key: 7,
								class: normalizeClass(_ctx.$style.notices)
							}, [unref(needsConfirmation) ? (openBlock(), createElementBlock("h3", _hoisted_6, toDisplayString(unref(i18n).baseText("promotions.bindings.bindingsSection.title")), 1)) : createCommentVNode("", true), createBaseVNode("p", { class: normalizeClass(_ctx.$style.description) }, toDisplayString(unref(i18n).baseText("promotions.bindings.description")), 3)], 2)) : createCommentVNode("", true),
							(openBlock(true), createElementBlock(Fragment, null, renderList(visibleGroups.value, (group) => {
								return openBlock(), createElementBlock("section", {
									key: group.project.id,
									class: normalizeClass(_ctx.$style.project)
								}, [unref(groups).length > 1 ? (openBlock(), createElementBlock("h3", {
									key: 0,
									class: normalizeClass(_ctx.$style.projectName)
								}, toDisplayString(group.project.name), 3)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(group.workflows, (entry) => {
									return openBlock(), createElementBlock("section", { key: entry.workflow.id }, [createBaseVNode("h4", { class: normalizeClass(_ctx.$style.workflow) }, [createVNode(unref(N8nIcon_default), {
										icon: "workflow",
										size: "small"
									}), createBaseVNode("span", null, toDisplayString(entry.workflow.name), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableContainer) }, [createBaseVNode("table", {
										class: normalizeClass(_ctx.$style.table),
										"aria-label": entry.workflow.name
									}, [
										createBaseVNode("colgroup", null, [
											createBaseVNode("col", { class: normalizeClass(_ctx.$style.sourceColumn) }, null, 2),
											createBaseVNode("col", { class: normalizeClass(_ctx.$style.destinationColumn) }, null, 2),
											createBaseVNode("col", { class: normalizeClass(_ctx.$style.statusColumn) }, null, 2)
										]),
										createBaseVNode("thead", null, [createBaseVNode("tr", null, [
											createBaseVNode("th", _hoisted_8, toDisplayString(unref(i18n).baseText("promotions.bindings.source")), 1),
											createBaseVNode("th", _hoisted_9, toDisplayString(unref(i18n).baseText("promotions.bindings.destination")), 1),
											createBaseVNode("th", _hoisted_10, toDisplayString(unref(i18n).baseText("promotions.bindings.status")), 1)
										])]),
										createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(entry.rows, (row) => {
											return openBlock(), createElementBlock("tr", {
												key: row.key,
												tabindex: "-1"
											}, [
												createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sourceItem) }, [createVNode(unref(N8nIcon_default), {
													icon: row.binding.kind === "credential" ? "key-round" : "json",
													size: "small",
													"aria-hidden": "false",
													"aria-label": unref(i18n).baseText(`promotions.bindings.kind.${row.binding.kind}`)
												}, null, 8, ["icon", "aria-label"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.name) }, toDisplayString(row.binding.name), 3)], 2)]),
												createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.destination) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.destinationItem, row.status === "missing" && _ctx.$style.pendingItem]) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.name) }, toDisplayString(row.status === "missing" ? unref(i18n).baseText("promotions.bindings.notCreated") : row.created?.name ?? row.binding.name), 3), row.status === "missing" ? (openBlock(), createBlock(unref(N8nIcon_default), {
													key: 0,
													icon: "circle-alert",
													size: "small"
												})) : createCommentVNode("", true)], 2), row.status === "missing" ? (openBlock(), createBlock(unref(N8nButton_default), {
													key: 0,
													type: "button",
													variant: "outline",
													size: "small",
													icon: "plus",
													"icon-only": "",
													disabled: unref(isBusy) || unref(sourceChanged),
													"aria-label": unref(i18n).baseText("promotions.bindings.createNamed", { interpolate: { name: row.binding.name } }),
													onClick: ($event) => create(row.key, $event)
												}, null, 8, [
													"disabled",
													"aria-label",
													"onClick"
												])) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.scope) }, toDisplayString(destinationScope(row.binding)), 3)]),
												createBaseVNode("td", _hoisted_11, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.status, row.status === "resolved" ? _ctx.$style.resolved : _ctx.$style.pending]) }, [createVNode(unref(N8nIcon_default), {
													icon: row.status === "resolved" ? "circle-check" : "circle-alert",
													size: "small"
												}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText(`promotions.bindings.status.${row.status}`)), 1)], 2)])
											]);
										}), 128))])
									], 10, _hoisted_7)], 2)]);
								}), 128))], 2);
							}), 128)),
							unref(preflight)?.warnings.length ? (openBlock(), createElementBlock("section", {
								key: 8,
								class: normalizeClass(_ctx.$style.notices)
							}, [createBaseVNode("h3", null, toDisplayString(unref(i18n).baseText("promotions.bindings.warnings.title")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(preflight).warnings, (item, index) => {
								return openBlock(), createBlock(unref(N8nCallout_default), {
									key: index,
									theme: "info"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.warnings.variableShadowed", { interpolate: { name: item.name } })) + " ", 1), createBaseVNode("p", null, toDisplayString(consumerNames(item.consumers)), 1)]),
									_: 2
								}, 1024);
							}), 128))], 2)) : createCommentVNode("", true)
						], 2), unref(savedResources).length ? (openBlock(), createElementBlock("p", {
							key: 0,
							class: normalizeClass(_ctx.$style.savedResources)
						}, toDisplayString(unref(i18n).baseText("promotions.bindings.savedResources")), 3)) : createCommentVNode("", true)], 34)]),
						_: 3
					}),
					createVNode(unref(DialogFooter_default), { class: normalizeClass(_ctx.$style.actions) }, {
						default: withCtx(() => [
							unref(mode) === "bindings" ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.count),
								role: "status"
							}, toDisplayString(unref(i18n).baseText("promotions.bindings.unresolvedCount", {
								adjustToNumber: unref(unresolvedCount),
								interpolate: { count: unref(unresolvedCount) }
							})), 3)) : createCommentVNode("", true),
							createVNode(unref(N8nButton_default), {
								type: "button",
								variant: unref(mode) === "blocked" ? "solid" : "outline",
								size: "small",
								disabled: unref(isBusy),
								onClick: close
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.close")), 1)]),
								_: 1
							}, 8, ["variant", "disabled"]),
							unref(mode) !== "blocked" ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 1,
								type: "submit",
								form: "promotion-bindings-form",
								size: "small",
								variant: unref(needsConfirmation) ? "destructive" : "solid",
								disabled: !unref(canContinue),
								loading: unref(isSubmitting)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(submitLabel.value), 1)]),
								_: 1
							}, 8, [
								"variant",
								"disabled",
								"loading"
							])) : createCommentVNode("", true)
						]),
						_: 1
					}, 8, ["class"])
				]),
				_: 3
			}, 8, [
				"open",
				"show-close-button",
				"trap-focus",
				"disable-outside-pointer-events"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	form: "_form_ywpuo_1",
	description: "_description_ywpuo_7",
	header: "_header_ywpuo_12",
	subtitle: "_subtitle_ywpuo_19",
	title: "_title_ywpuo_25",
	body: "_body_ywpuo_29",
	project: "_project_ywpuo_38",
	notices: "_notices_ywpuo_39",
	projectName: "_projectName_ywpuo_45",
	workflow: "_workflow_ywpuo_51",
	tableContainer: "_tableContainer_ywpuo_63",
	table: "_table_ywpuo_63",
	sourceColumn: "_sourceColumn_ywpuo_91",
	destinationColumn: "_destinationColumn_ywpuo_92",
	statusColumn: "_statusColumn_ywpuo_96",
	sourceItem: "_sourceItem_ywpuo_100",
	destination: "_destination_ywpuo_92",
	destinationItem: "_destinationItem_ywpuo_102",
	status: "_status_ywpuo_96",
	name: "_name_ywpuo_124",
	pendingItem: "_pendingItem_ywpuo_139",
	scope: "_scope_ywpuo_144",
	pending: "_pending_ywpuo_139",
	resolved: "_resolved_ywpuo_159",
	savedResources: "_savedResources_ywpuo_168",
	actions: "_actions_ywpuo_175",
	count: "_count_ywpuo_179"
} }]]);
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionBindingsFlow.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionBindingsFlow.vue
var PromotionBindingsFlow_default = /* @__PURE__ */ defineComponent({
	__name: "PromotionBindingsFlow",
	props: {
		open: { type: Boolean },
		blockedResult: {}
	},
	emits: [
		"update:open",
		"applied",
		"source-changed",
		"close-requested",
		"project-created"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { createBinding, createdProjects, updatePreflight } = usePromotionBindingCreation(props.blockedResult, (project) => emit("project-created", project));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PromotionBindingsDialog_default, {
				open: __props.open,
				"blocked-result": __props.blockedResult,
				"create-binding": unref(createBinding),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => emit("update:open", $event)),
				onPreflightUpdated: unref(updatePreflight),
				onApplied: _cache[1] || (_cache[1] = ($event) => emit("applied", $event)),
				onSourceChanged: _cache[2] || (_cache[2] = ($event) => emit("source-changed", $event)),
				onCloseRequested: _cache[3] || (_cache[3] = ($event) => emit("close-requested", $event))
			}, {
				notices: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(createdProjects), (project) => {
					return openBlock(), createBlock(unref(N8nCallout_default), {
						key: project.id,
						theme: "info"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.bindings.projectSetup.retained", { interpolate: { projectName: project.name } })), 1)]),
						_: 2
					}, 1024);
				}), 128))]),
				_: 1
			}, 8, [
				"open",
				"blocked-result",
				"create-binding",
				"onPreflightUpdated"
			]);
		};
	}
});
//#endregion
//#region src/features/integrations/promotions.ee/components/ApplyInstanceDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var ApplyInstanceDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ApplyInstanceDialog",
	props: {
		open: { type: Boolean },
		environmentId: {},
		branchName: {}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const projectsStore = useProjectsStore();
		const isSubmitting = ref(false);
		const blockedResult = shallowRef();
		function close() {
			emit("update:open", false);
		}
		function onOpenChange(value) {
			if (value || isSubmitting.value) return;
			close();
		}
		function reportApplied(result) {
			const { projects, workflows } = result.counts;
			const notPublished = workflows.publishing.failed + workflows.publishing.blocked;
			const interpolate = {
				projectsCreated: String(projects.created),
				projectsDeleted: String(projects.deleted),
				created: String(workflows.created),
				updated: String(workflows.updated),
				archived: String(workflows.archived),
				deleted: String(workflows.deleted),
				notPublished: String(notPublished)
			};
			toast.showMessage({
				title: i18n.baseText("settings.promotions.apply.toast.success.title"),
				message: withMoveAndRenameNote(i18n, i18n.baseText(notPublished ? "settings.promotions.apply.toast.success.messageNotPublished" : "settings.promotions.apply.toast.success.message", { interpolate }), result.counts),
				type: notPublished ? "warning" : "success"
			});
		}
		async function refreshProjects() {
			try {
				await Promise.all([
					projectsStore.getMyProjects(),
					projectsStore.getProjectsCount(),
					...projectsStore.globalProjectPermissions.list ? [projectsStore.getAllProjects()] : []
				]);
			} catch {}
		}
		async function onApplied(result) {
			reportApplied(result);
			close();
			await refreshProjects();
		}
		function reportSourceChanged() {
			toast.showMessage({
				title: i18n.baseText("settings.promotions.apply.toast.sourceChanged.title"),
				message: i18n.baseText("settings.promotions.apply.toast.sourceChanged.message", { interpolate: { branch: props.branchName } }),
				type: "warning"
			});
		}
		async function submit() {
			if (isSubmitting.value) return;
			isSubmitting.value = true;
			try {
				const result = await applyPromotion(rootStore.publicApiContext, props.environmentId);
				if (result.status === "applied") {
					await onApplied(result);
					return;
				}
				if (result.status === "blocked") {
					blockedResult.value = result;
					return;
				}
				reportSourceChanged();
				close();
			} catch (error) {
				const refused = error instanceof ResponseError && error.httpStatusCode === 409;
				toast.showError(error, i18n.baseText("settings.promotions.apply.toast.error"), { message: i18n.baseText(refused ? "settings.promotions.apply.toast.error.refused" : "settings.promotions.apply.toast.error.message") });
				refreshProjects();
			} finally {
				isSubmitting.value = false;
			}
		}
		async function onBindingsApplied(result) {
			blockedResult.value = void 0;
			await onApplied(result);
		}
		function onBindingsSourceChanged() {
			blockedResult.value = void 0;
			reportSourceChanged();
			close();
		}
		function onBindingsOpenChange(open) {
			if (open || !blockedResult.value) return;
			blockedResult.value = void 0;
			close();
			refreshProjects();
		}
		return (_ctx, _cache) => {
			return !blockedResult.value ? (openBlock(), createBlock(unref(Dialog_default), {
				key: 0,
				open: __props.open,
				size: "medium",
				"aria-description": unref(i18n).baseText("settings.promotions.apply.dialog.ariaDescription", { interpolate: { branch: __props.branchName } }),
				"data-test-id": "apply-instance-dialog",
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.apply.dialog.title")), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(DialogBody_default), null, {
						default: withCtx(() => [createBaseVNode("form", {
							id: "apply-instance-form",
							class: normalizeClass(_ctx.$style.form),
							onSubmit: withModifiers(submit, ["prevent"])
						}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.apply.dialog.body", { interpolate: { branch: __props.branchName } })), 1)]),
							_: 1
						})], 34)]),
						_: 1
					}),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							type: "button",
							variant: "outline",
							disabled: isSubmitting.value,
							"data-test-id": "apply-cancel-button",
							onClick: close
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
							_: 1
						}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
							type: "submit",
							form: "apply-instance-form",
							loading: isSubmitting.value,
							"data-test-id": "apply-confirm-button"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.apply.dialog.confirm")), 1)]),
							_: 1
						}, 8, ["loading"])]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["open", "aria-description"])) : (openBlock(), createBlock(PromotionBindingsFlow_default, {
				key: 1,
				open: true,
				"blocked-result": blockedResult.value,
				onApplied: onBindingsApplied,
				onSourceChanged: onBindingsSourceChanged,
				"onUpdate:open": onBindingsOpenChange
			}, null, 8, ["blocked-result"]));
		};
	}
}), [["__cssModules", { "$style": { form: "_form_i1mrt_1" } }]]);
//#endregion
//#region src/features/integrations/promotions.ee/components/PromoteInstanceDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var PromoteInstanceDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromoteInstanceDialog",
	props: {
		open: { type: Boolean },
		environmentId: {},
		baseBranchName: {},
		createBranchOnPromotion: { type: Boolean },
		providerType: {}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const commitMessage = ref("");
		const isSubmitting = ref(false);
		const result = ref(null);
		const messageField = useTemplateRef("messageField");
		const dialogTitle = computed(() => i18n.baseText(result.value ? "settings.promotions.promote.dialog.result.title" : "settings.promotions.promote.dialog.title"));
		const ariaDescription = computed(() => result.value ? dialogTitle.value : i18n.baseText("settings.promotions.promote.dialog.ariaDescription"));
		const bodyText = computed(() => {
			if (props.providerType === "gitlab" && props.createBranchOnPromotion) return i18n.baseText("settings.promotions.promote.dialog.body.mergeRequest", { interpolate: { branch: props.baseBranchName } });
			return props.createBranchOnPromotion ? i18n.baseText("settings.promotions.promote.dialog.body.newBranch") : i18n.baseText("settings.promotions.promote.dialog.body.toBranch", { interpolate: { branch: props.baseBranchName } });
		});
		const mergeRequestUrl = computed(() => httpUrl(result.value?.review?.webUrl));
		const reviewNotRecorded = computed(() => i18n.baseText("promotions.result.reviewNotRecorded"));
		const pushedText = computed(() => result.value ? i18n.baseText("promotions.result.pushed", { interpolate: { branch: result.value.git.branchName } }) : "");
		function close() {
			emit("update:open", false);
		}
		function onOpenChange(value) {
			if (value || isSubmitting.value) return;
			close();
		}
		function onOpenAutoFocus(event) {
			event.preventDefault();
			nextTick(() => messageField.value?.focus());
		}
		async function submit() {
			if (isSubmitting.value) return;
			const message = commitMessage.value.trim();
			isSubmitting.value = true;
			try {
				result.value = await promotePackage(rootStore.publicApiContext, props.environmentId, message ? { commitMessage: message } : {});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.promotions.promote.toast.error"));
			} finally {
				isSubmitting.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"aria-description": ariaDescription.value,
				"data-test-id": "promote-instance-dialog",
				onOpenAutoFocus,
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DialogHeader_default), null, {
					default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(dialogTitle.value), 1)]),
						_: 1
					})]),
					_: 1
				}), !result.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(DialogBody_default), null, {
					default: withCtx(() => [createBaseVNode("form", {
						id: "promote-instance-form",
						class: normalizeClass(_ctx.$style.body),
						onSubmit: withModifiers(submit, ["prevent"])
					}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(bodyText.value), 1)]),
						_: 1
					}), createVNode(PromotionCommitMessageField_default, {
						ref_key: "messageField",
						ref: messageField,
						modelValue: commitMessage.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => commitMessage.value = $event),
						disabled: isSubmitting.value
					}, null, 8, ["modelValue", "disabled"])], 34)]),
					_: 1
				}), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "button",
						variant: "outline",
						disabled: isSubmitting.value,
						"data-test-id": "promote-cancel-button",
						onClick: close
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						type: "submit",
						form: "promote-instance-form",
						disabled: isSubmitting.value,
						loading: isSubmitting.value,
						"data-test-id": "promote-confirm-button"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.promote.dialog.confirm")), 1)]),
						_: 1
					}, 8, ["disabled", "loading"])]),
					_: 1
				})], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(DialogBody_default), null, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [mergeRequestUrl.value ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 0,
						to: mergeRequestUrl.value,
						"new-window": "",
						"data-test-id": "promote-merge-request-link"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("promotions.result.viewMergeRequest")), 1)]),
						_: 1
					}, 8, ["to"])) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						"data-test-id": "promote-result-summary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(pushedText.value), 1)]),
						_: 1
					})), (openBlock(true), createElementBlock(Fragment, null, renderList(result.value.warnings, (warning, index) => {
						return openBlock(), createBlock(unref(N8nText_default), {
							key: index,
							color: "text-base",
							"data-test-id": "promote-warning"
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(warningSegments)(warning, reviewNotRecorded.value), (segment, segmentIndex) => {
								return openBlock(), createElementBlock(Fragment, { key: segmentIndex }, [segment.kind === "link" ? (openBlock(), createBlock(unref(N8nLink_default), {
									key: 0,
									to: segment.url,
									"new-window": ""
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(segment.url), 1)]),
									_: 2
								}, 1032, ["to"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(segment.text), 1)], 64))], 64);
							}), 128))]),
							_: 2
						}, 1024);
					}), 128))], 2)]),
					_: 1
				}), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "button",
						"data-test-id": "promote-close-button",
						onClick: close
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
						_: 1
					})]),
					_: 1
				})], 64))]),
				_: 1
			}, 8, ["open", "aria-description"]);
		};
	}
}), [["__cssModules", { "$style": { body: "_body_htak6_1" } }]]);
//#endregion
//#region src/features/integrations/promotions.ee/components/PromotionEnvironmentCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var PromotionEnvironmentCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionEnvironmentCard",
	props: {
		environment: {},
		busy: {},
		connectError: {},
		canClone: { type: Boolean }
	},
	emits: [
		"retry",
		"edit",
		"remove"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { permissions } = usePromotionCheckout();
		const dialogOpen = ref(false);
		const branch = computed(() => promotionEnvironmentBranch(props.environment));
		const status = computed(() => {
			const { hasCheckout, matchesEnvironment } = props.environment.checkout;
			if (!hasCheckout) return "notConnected";
			return matchesEnvironment ? "connected" : "outOfDate";
		});
		const statusDotVariant = {
			connected: "success",
			outOfDate: "warning",
			notConnected: "danger"
		};
		const canRun = computed(() => props.environment.direction === "apply" ? !!permissions.value.pull : !!permissions.value.push);
		const actions = computed(() => [{
			label: i18n.baseText("generic.edit"),
			value: "edit"
		}, {
			label: i18n.baseText("settings.promotions.environment.remove"),
			value: "remove",
			destructive: true
		}]);
		function onAction(action) {
			if (action === "edit") emit("edit");
			else emit("remove");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(unref(SettingsRow_default), {
					title: unref(i18n).baseText(`settings.promotions.environments.${__props.environment.direction}.title`),
					"show-divider": false
				}, {
					action: withCtx(() => [createVNode(unref(N8nActionToggle_default), {
						actions: actions.value,
						disabled: !!__props.busy,
						"data-test-id": "promotion-environment-menu",
						onAction
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							icon: "ellipsis",
							size: "small",
							disabled: !!__props.busy,
							"aria-label": unref(i18n).baseText("settings.promotions.environment.menu")
						}, null, 8, ["disabled", "aria-label"])]),
						_: 1
					}, 8, ["actions", "disabled"])]),
					_: 1
				}, 8, ["title"]),
				createVNode(unref(SettingsRow_default), { "show-divider": false }, {
					info: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.environment.name), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.remote),
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.environment.remoteSummary", { interpolate: {
							type: unref(i18n).baseText(`settings.promotions.providers.type.${__props.environment.provider.type}`),
							remoteUrl: __props.environment.remote.remoteUrl,
							branch: branch.value
						} })), 1)]),
						_: 1
					}, 8, ["class"])]),
					visual: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: unref(promotionProviderIcon)[__props.environment.provider.type],
						color: "text-dark",
						size: "xlarge"
					}, null, 8, ["icon"])]),
					_: 1
				}),
				createVNode(unref(SettingsRow_default), { "show-divider": false }, {
					info: withCtx(() => [createBaseVNode("div", {
						role: "status",
						class: normalizeClass(_ctx.$style.status),
						"data-test-id": "promotion-environment-status"
					}, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.state) }, [createVNode(unref(N8nStatusDot_default), { variant: statusDotVariant[status.value] }, null, 8, ["variant"]), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-dark"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.promotions.environment.status.${status.value}`)), 1)]),
							_: 1
						})], 2),
						status.value === "outOfDate" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "warning"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.environment.status.outOfDate.description")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						status.value !== "connected" && __props.connectError ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "danger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.connectError), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					], 2)]),
					action: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [status.value !== "connected" && __props.canClone ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "outline",
						size: "small",
						loading: __props.busy === "retry",
						disabled: __props.busy === "remove",
						"data-test-id": "promotion-environment-retry",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("retry"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(status.value === "outOfDate" ? "settings.promotions.environment.reconnect" : "generic.retry")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"])) : createCommentVNode("", true), canRun.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						size: "small",
						disabled: status.value !== "connected" || !!__props.busy,
						"data-test-id": `${__props.environment.direction}-instance-button`,
						onClick: _cache[1] || (_cache[1] = ($event) => dialogOpen.value = true)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.promotions.${__props.environment.direction}.button`)), 1)]),
						_: 1
					}, 8, ["disabled", "data-test-id"])) : createCommentVNode("", true)], 2)]),
					_: 1
				}),
				dialogOpen.value && __props.environment.direction === "promote" ? (openBlock(), createBlock(PromoteInstanceDialog_default, {
					key: 0,
					open: dialogOpen.value,
					"environment-id": __props.environment.id,
					"base-branch-name": __props.environment.settings.baseBranchName,
					"create-branch-on-promotion": __props.environment.settings.createBranchOnPromotion,
					"provider-type": __props.environment.provider.type,
					"onUpdate:open": _cache[2] || (_cache[2] = ($event) => dialogOpen.value = $event)
				}, null, 8, [
					"open",
					"environment-id",
					"base-branch-name",
					"create-branch-on-promotion",
					"provider-type"
				])) : createCommentVNode("", true),
				dialogOpen.value && __props.environment.direction === "apply" ? (openBlock(), createBlock(ApplyInstanceDialog_default, {
					key: 1,
					open: dialogOpen.value,
					"environment-id": __props.environment.id,
					"branch-name": __props.environment.settings.branchName,
					"onUpdate:open": _cache[3] || (_cache[3] = ($event) => dialogOpen.value = $event)
				}, null, 8, [
					"open",
					"environment-id",
					"branch-name"
				])) : createCommentVNode("", true)
			]);
		};
	}
}), [["__cssModules", { "$style": {
	remote: "_remote_ybzgs_1",
	status: "_status_ybzgs_5",
	state: "_state_ybzgs_11",
	actions: "_actions_ybzgs_17"
} }]]);
//#endregion
//#region src/features/integrations/promotions.ee/composables/useInstanceProtection.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* The protected instance setting on the Environments v2 page. It lives in the source control
* preferences, so this is the one place to change when the setting moves to its own endpoint.
*/
function useInstanceProtection() {
	const i18n = useI18n();
	const toast = useToast();
	const sourceControlStore = useSourceControlStore();
	const busy = ref(true);
	const isProtected = computed(() => sourceControlStore.preferences.branchReadOnly);
	async function load() {
		try {
			await sourceControlStore.getPreferences();
			busy.value = false;
		} catch (error) {
			toast.showError(error, i18n.baseText("settings.promotions.protected.toast.error.load"), { message: i18n.baseText("settings.promotions.protected.toast.error.description") });
		}
	}
	async function set(value) {
		busy.value = true;
		try {
			await sourceControlStore.updatePreferences({ branchReadOnly: value });
			toast.showMessage({
				title: i18n.baseText("settings.sourceControl.saved.title"),
				type: "success"
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("settings.promotions.protected.toast.error.save"), { message: i18n.baseText("settings.promotions.protected.toast.error.description") });
		} finally {
			busy.value = false;
		}
	}
	return {
		busy,
		isProtected,
		load,
		set
	};
}
//#endregion
//#region src/features/integrations/promotions.ee/views/PromotionsSettingsView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["disabled"];
var PromotionsSettingsView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionsSettingsView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const router = useRouter();
		const rootStore = useRootStore();
		const documentTitle = useDocumentTitle();
		const { next: nextLoad } = useLatestFetch();
		const { connectErrors, canClone, connect } = usePromotionCheckout();
		const { busy: switchBusy, canSwitchBack, switchTo: switchEnvironmentsVersion } = useEnvironmentsVersionSwitch();
		const { busy: protectionBusy, isProtected, load: loadProtection, set: setProtected } = useInstanceProtection();
		const environments = ref({});
		const isInitialLoading = ref(true);
		const loadError = ref(false);
		const busy = reactive(/* @__PURE__ */ new Map());
		const addButtons = {};
		async function load() {
			const isLatestLoad = nextLoad();
			loadError.value = false;
			try {
				const context = rootStore.publicApiContext;
				const summaries = await fetchPromotionEnvironments(context, { scope: "instance" });
				const details = await Promise.all(summaries.map(async ({ id }) => await fetchPromotionEnvironment(context, id)));
				if (!isLatestLoad()) return;
				environments.value = Object.fromEntries(details.map((detail) => [detail.direction, detail]));
			} catch (error) {
				if (!isLatestLoad()) return;
				loadError.value = true;
				toast.showError(error, i18n.baseText("settings.promotions.environments.error.title"));
			} finally {
				if (isLatestLoad()) isInitialLoading.value = false;
			}
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.promotions.title"));
			await Promise.all([load(), loadProtection()]);
		});
		async function retry(environment) {
			busy.set(environment.id, "retry");
			if (await connect(environment.id)) await load();
			busy.delete(environment.id);
		}
		async function remove(environment) {
			if (await message.confirm(i18n.baseText("settings.promotions.environment.remove.confirm.message", { interpolate: { name: environment.name } }), i18n.baseText("settings.promotions.environment.remove.confirm.title"), {
				confirmButtonText: i18n.baseText("settings.promotions.environment.remove.confirm.button"),
				cancelButtonText: i18n.baseText("generic.cancel"),
				customClass: "el-message-box--destructive",
				showClose: true
			}) !== "confirm") return;
			const context = rootStore.publicApiContext;
			busy.set(environment.id, "remove");
			try {
				await deletePromotionEnvironment(context, environment.id);
			} catch (error) {
				if (!(error instanceof ResponseError && error.httpStatusCode === 404)) {
					busy.delete(environment.id);
					toast.showError(error, i18n.baseText("settings.promotions.environment.toast.error.remove"));
					return;
				}
			}
			try {
				await deleteProviderIfUnused(context, environment.provider.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.promotions.provider.toast.error.delete"));
			}
			connectErrors.delete(environment.id);
			invalidateInstancePromotionConnection();
			await load();
			busy.delete(environment.id);
			toast.showMessage({
				title: i18n.baseText("settings.promotions.environment.toast.removed", { interpolate: { name: environment.name } }),
				type: "success"
			});
			await nextTick();
			const addButton = addButtons[environment.direction];
			if (addButton && "$el" in addButton && addButton.$el instanceof HTMLElement) addButton.$el.focus();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), { class: normalizeClass(_ctx.$style.layout) }, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.promotions.title"),
						description: unref(i18n).baseText("settings.promotions.description"),
						"show-docs-link": false
					}, {
						titleTrailing: withCtx(() => [createVNode(unref(PreviewBadge_default), { size: "xsmall" })]),
						_: 1
					}, 8, ["title", "description"]),
					createVNode(unref(SettingsSection_default), { title: unref(i18n).baseText("settings.promotions.environments.title") }, {
						description: withCtx(() => [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-base"
						}, {
							default: withCtx(() => [createVNode(unref(I18nT), {
								keypath: "settings.promotions.environments.description",
								tag: "span",
								scope: "global"
							}, {
								environments: withCtx(() => [createVNode(unref(N8nExternalLink_default), {
									inline: "",
									size: "small",
									href: "#"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.environments.description.link")), 1)]),
									_: 1
								})]),
								_: 1
							})]),
							_: 1
						})]),
						default: withCtx(() => [isInitialLoading.value ? (openBlock(), createBlock(unref(Loading_default), {
							key: 0,
							rows: 2,
							"shrink-last": false
						})) : loadError.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
							key: 1,
							heading: unref(i18n).baseText("settings.promotions.environments.error.title"),
							description: unref(i18n).baseText("settings.promotions.environments.error.description"),
							"button-text": unref(i18n).baseText("generic.retry"),
							"data-test-id": "promotion-environments-load-error",
							"onClick:button": load
						}, null, 8, [
							"heading",
							"description",
							"button-text"
						])) : (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 2 }, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.columns) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(promotionDirectionSchema).options, (direction) => {
								return openBlock(), createElementBlock(Fragment, { key: direction }, [environments.value[direction] ? (openBlock(), createBlock(PromotionEnvironmentCard_default, {
									key: environments.value[direction].id,
									class: normalizeClass(_ctx.$style.column),
									environment: environments.value[direction],
									busy: busy.get(environments.value[direction].id),
									"connect-error": unref(connectErrors).get(environments.value[direction].id),
									"can-clone": unref(canClone),
									"data-test-id": `promotion-environment-card-${direction}`,
									onRetry: ($event) => retry(environments.value[direction]),
									onEdit: ($event) => unref(router).push({
										name: unref(PROMOTIONS_ENVIRONMENT_EDIT_VIEW),
										params: { environmentId: environments.value[direction].id }
									}),
									onRemove: ($event) => remove(environments.value[direction])
								}, null, 8, [
									"class",
									"environment",
									"busy",
									"connect-error",
									"can-clone",
									"data-test-id",
									"onRetry",
									"onEdit",
									"onRemove"
								])) : (openBlock(), createElementBlock("div", {
									key: 1,
									class: normalizeClass(_ctx.$style.column)
								}, [createVNode(unref(SettingsRow_default), {
									title: unref(i18n).baseText(`settings.promotions.environments.${direction}.title`),
									"show-divider": false
								}, null, 8, ["title"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.empty) }, [createVNode(unref(N8nButton_default), {
									ref_for: true,
									ref: (button) => addButtons[direction] = button,
									variant: "outline",
									icon: "plus",
									"data-test-id": `promotion-environment-add-${direction}`,
									onClick: ($event) => unref(router).push({
										name: unref(PROMOTIONS_ENVIRONMENT_ADD_VIEW),
										params: { direction }
									})
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.promotions.environments.add")), 1)]),
									_: 1
								}, 8, ["data-test-id", "onClick"])], 2)], 2))], 64);
							}), 128))], 2)]),
							_: 1
						})), createVNode(unref(SettingsRowGroup_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRow_default), {
								title: unref(i18n).baseText("settings.sourceControl.protected.bold"),
								description: unref(i18n).baseText("settings.promotions.protected.description")
							}, {
								action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
									"model-value": unref(isProtected),
									disabled: unref(protectionBusy),
									"aria-label": unref(i18n).baseText("settings.sourceControl.protected.bold"),
									"data-test-id": "promotion-protected-instance-switch",
									"onUpdate:modelValue": unref(setProtected)
								}, null, 8, [
									"model-value",
									"disabled",
									"aria-label",
									"onUpdate:modelValue"
								])]),
								_: 1
							}, 8, ["title", "description"])]),
							_: 1
						})]),
						_: 1
					}, 8, ["title"]),
					unref(canSwitchBack) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						tag: "p",
						size: "small",
						color: "text-light",
						class: "mt-2xl",
						"data-test-id": "promotions-switch-back"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "settings.promotions.switchBack.text",
							tag: "span",
							scope: "global"
						}, {
							action: withCtx(() => [createBaseVNode("button", {
								type: "button",
								class: normalizeClass(_ctx.$style.switchBack),
								disabled: unref(switchBusy),
								"data-test-id": "promotions-switch-to-v1",
								onClick: _cache[0] || (_cache[0] = ($event) => unref(switchEnvironmentsVersion)("v1"))
							}, toDisplayString(unref(i18n).baseText("settings.promotions.switchBack.button")), 11, _hoisted_1)]),
							_: 1
						})]),
						_: 1
					})) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	layout: "_layout_3cw8z_1",
	columns: "_columns_3cw8z_6",
	column: "_column_3cw8z_6",
	switchBack: "_switchBack_3cw8z_30",
	empty: "_empty_3cw8z_40"
} }]]);
//#endregion
export { PromotionsSettingsView_default as default };
