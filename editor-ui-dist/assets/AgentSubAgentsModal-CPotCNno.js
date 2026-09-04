import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-EbE2ruUr.js";
import "./src-B255AdRt.js";
import { t as MarkdownEditor_default } from "./MarkdownEditor-Bc5pLbyW.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { t as Modal_default } from "./Modal-DYw1gJ5H.js";
//#region src/features/agents/components/AgentSubAgentsModal.vue?vue&type=script&setup=true&lang.ts
var AgentSubAgentsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSubAgentsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const availableAgents = computed(() => "agents" in props.data ? props.data.agents : []);
		const hasAgents = computed(() => availableAgents.value.length > 0);
		const searchQuery = ref("");
		const normalizedSearchQuery = computed(() => searchQuery.value.trim().toLowerCase());
		const filteredAgents = computed(() => normalizedSearchQuery.value ? availableAgents.value.filter((agent) => agent.name.toLowerCase().includes(normalizedSearchQuery.value)) : availableAgents.value);
		const hasMatchingAgents = computed(() => filteredAgents.value.length > 0);
		const isEditing = computed(() => Boolean(props.data.selectedAgent));
		const invalidReasons = computed(() => "invalidReasons" in props.data ? props.data.invalidReasons ?? [] : []);
		const selectedAgent = ref(props.data.selectedAgent ?? null);
		const useWhen = ref(("useWhen" in props.data ? props.data.useWhen : "") ?? "");
		const useWhenTrimmed = computed(() => useWhen.value.trim());
		const useWhenError = computed(() => {
			if (useWhenTrimmed.value.length <= 512) return "";
			return i18n.baseText("agents.builder.subAgents.useWhen.validation.maxLength", { interpolate: { max: String(512) } });
		});
		const canConfirm = computed(() => !useWhenError.value);
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		function onSelectAgent(agent) {
			selectedAgent.value = agent;
			useWhen.value = "";
		}
		function onBack() {
			if (isEditing.value) return;
			selectedAgent.value = null;
			useWhen.value = "";
		}
		function onRemove() {
			if (!selectedAgent.value) return;
			props.data.onRemove?.(selectedAgent.value.id);
			closeModal();
		}
		function onConfirm() {
			if (!selectedAgent.value || !canConfirm.value) return;
			props.data.onConfirm({
				agentId: selectedAgent.value.id,
				...useWhenTrimmed.value ? { useWhen: useWhenTrimmed.value } : {}
			});
			closeModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				width: "640px",
				"custom-class": _ctx.$style.modal,
				"data-testid": "agent-sub-agents-modal"
			}, createSlots({
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(selectedAgent.value ? selectedAgent.value.name : unref(i18n).baseText("agents.builder.subAgents.modal.title")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [!selectedAgent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.description")), 1)]),
						_: 1
					}),
					hasAgents.value ? (openBlock(), createBlock(unref(Input_default), {
						key: 0,
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						placeholder: unref(i18n).baseText("agents.builder.subAgents.modal.search.placeholder"),
						clearable: "",
						"data-testid": "agent-sub-agents-modal-search"
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "search",
							size: 16
						})]),
						_: 1
					}, 8, ["modelValue", "placeholder"])) : createCommentVNode("", true),
					hasAgents.value && hasMatchingAgents.value ? (openBlock(), createBlock(unref(N8nScrollArea_default), {
						key: 1,
						"max-height": "420px",
						type: "auto"
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAgents.value, (agent) => {
							return openBlock(), createElementBlock("div", {
								key: agent.id,
								class: normalizeClass(_ctx.$style.row),
								"data-testid": "agent-sub-agents-modal-row"
							}, [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [createVNode(unref(N8nIcon_default), {
									icon: "bot",
									size: 24,
									class: normalizeClass(_ctx.$style.itemIcon)
								}, null, 8, ["class"])], 2),
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowBody) }, [createVNode(unref(N8nText_default), {
									size: "small",
									color: "text-dark",
									class: normalizeClass(_ctx.$style.name)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(agent.name), 1)]),
									_: 2
								}, 1032, ["class"])], 2),
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
									variant: "subtle",
									size: "small",
									"data-testid": "agent-sub-agents-modal-add",
									onClick: ($event) => onSelectAgent(agent)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.add")), 1)]),
									_: 1
								}, 8, ["onClick"])], 2)
							], 2);
						}), 128))], 2)]),
						_: 1
					})) : hasAgents.value && !hasMatchingAgents.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 2,
						icon: {
							type: "icon",
							value: "bot"
						},
						heading: unref(i18n).baseText("agents.builder.subAgents.modal.noResults.title"),
						description: unref(i18n).baseText("agents.builder.subAgents.modal.noResults.description"),
						"data-testid": "agent-sub-agents-modal-no-results"
					}, null, 8, ["heading", "description"])) : (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 3,
						icon: {
							type: "icon",
							value: "bot"
						},
						heading: unref(i18n).baseText("agents.builder.subAgents.modal.empty.title"),
						description: unref(i18n).baseText("agents.builder.subAgents.modal.empty.description"),
						"data-testid": "agent-sub-agents-modal-empty"
					}, null, 8, ["heading", "description"]))
				], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.content, _ctx.$style.configureContent])
				}, [invalidReasons.value.length > 0 ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "danger",
					"data-testid": "agent-sub-agents-modal-invalid-callout"
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(invalidReasons.value, (reason) => {
						return openBlock(), createElementBlock("div", { key: reason }, toDisplayString(reason), 1);
					}), 128))]),
					_: 1
				})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
					createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.useWhen.label")), 1)]),
						_: 1
					})], 2),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.useWhen.hint")), 1)]),
						_: 1
					}),
					createVNode(unref(MarkdownEditor_default), {
						class: normalizeClass(_ctx.$style.useWhenEditor),
						"model-value": useWhen.value,
						placeholder: unref(i18n).baseText("agents.builder.subAgents.useWhen.placeholder"),
						"max-height": "100%",
						"data-testid": "agent-sub-agents-modal-use-when",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => useWhen.value = $event)
					}, null, 8, [
						"class",
						"model-value",
						"placeholder"
					]),
					useWhenError.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "danger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(useWhenError.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.useWhen.characterCount", { interpolate: {
							count: String(useWhen.value.length),
							max: String(unref(512))
						} })), 1)]),
						_: 1
					})
				], 2)], 2))]),
				_: 2
			}, [selectedAgent.value ? {
				name: "footer",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [isEditing.value && __props.data.onRemove ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					"data-testid": "agent-sub-agents-modal-remove",
					onClick: onRemove
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.remove")), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "subtle",
					"data-testid": "agent-sub-agents-modal-back",
					onClick: onBack
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.back")), 1)]),
					_: 1
				})), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: closeModal
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !canConfirm.value,
					"data-testid": "agent-sub-agents-modal-confirm",
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(isEditing.value ? "generic.save" : "agents.builder.subAgents.modal.add")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)]),
				key: "0"
			} : void 0]), 1032, ["name", "custom-class"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentSubAgentsModal.vue?vue&type=style&index=0&lang.module.scss
var modal = "_modal_7bkb9_388";
var content = "_content_7bkb9_392";
var configureContent = "_configureContent_7bkb9_400";
var rows = "_rows_7bkb9_405";
var row = "_row_7bkb9_405";
var iconWrapper = "_iconWrapper_7bkb9_419";
var rowBody = "_rowBody_7bkb9_427";
var name = "_name_7bkb9_435";
var itemIcon = "_itemIcon_7bkb9_444";
var actions = "_actions_7bkb9_448";
var field = "_field_7bkb9_455";
var label = "_label_7bkb9_463";
var useWhenEditor = "_useWhenEditor_7bkb9_467";
var footer = "_footer_7bkb9_471";
var footerActions = "_footerActions_7bkb9_477";
var shimmer = "_shimmer_7bkb9_1";
var spin = "_spin_7bkb9_1";
var opacityPulse = "_opacityPulse_7bkb9_1";
var popoverIn = "_popoverIn_7bkb9_1";
var fadeIn = "_fadeIn_7bkb9_1";
var collapsibleSlideDown = "_collapsibleSlideDown_7bkb9_1";
var collapsibleSlideUp = "_collapsibleSlideUp_7bkb9_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_7bkb9_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_7bkb9_1";
var blurSwapIn = "_blurSwapIn_7bkb9_1";
var blurSwapOut = "_blurSwapOut_7bkb9_1";
var pulseGlow = "_pulseGlow_7bkb9_1";
var pulseGlowDelayed = "_pulseGlowDelayed_7bkb9_1";
var fade = "_fade_7bkb9_1";
var fadeInUp = "_fadeInUp_7bkb9_1";
var fadeInDown = "_fadeInDown_7bkb9_1";
var fadeInLeft = "_fadeInLeft_7bkb9_1";
var fadeInRight = "_fadeInRight_7bkb9_1";
var fadeOut = "_fadeOut_7bkb9_1";
var fadeOutDown = "_fadeOutDown_7bkb9_1";
var fadeOutUp = "_fadeOutUp_7bkb9_1";
var fadeOutLeft = "_fadeOutLeft_7bkb9_1";
var fadeOutRight = "_fadeOutRight_7bkb9_1";
var ping = "_ping_7bkb9_1";
var blinkBackground = "_blinkBackground_7bkb9_1";
var typingBlink = "_typingBlink_7bkb9_1";
var AgentSubAgentsModal_vue_vue_type_style_index_0_lang_module_default = {
	modal,
	content,
	configureContent,
	rows,
	row,
	iconWrapper,
	rowBody,
	name,
	itemIcon,
	actions,
	field,
	label,
	useWhenEditor,
	footer,
	footerActions,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_7bkb9_1",
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
var AgentSubAgentsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSubAgentsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSubAgentsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSubAgentsModal_default as default };
