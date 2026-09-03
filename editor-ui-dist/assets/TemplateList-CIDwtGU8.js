import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { Vn as filterTemplateNodes } from "./workflows.store-Bo6ZgF_O.js";
import { t as abbreviateNumber } from "./typesUtils-D4N0bsbb.js";
import { t as NodeIcon_default } from "./NodeIcon-IZ0wyAnH.js";
import { t as TimeAgo_default } from "./TimeAgo-DdOhC6Ae.js";
//#region src/app/components/NodeList.vue?vue&type=script&setup=true&lang.ts
var NodeList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeList",
	props: {
		nodes: {},
		limit: { default: 4 },
		size: { default: "sm" }
	},
	setup(__props) {
		const props = __props;
		const filteredCoreNodes = computed(() => {
			return filterTemplateNodes(props.nodes);
		});
		const hiddenNodes = computed(() => {
			return filteredCoreNodes.value.length - countNodesToBeSliced(filteredCoreNodes.value);
		});
		const slicedNodes = computed(() => {
			return filteredCoreNodes.value.slice(0, countNodesToBeSliced(filteredCoreNodes.value));
		});
		const countNodesToBeSliced = (nodes) => {
			if (nodes.length > props.limit) return props.limit - 1;
			else return props.limit;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.list) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(slicedNodes.value, (node) => {
				return openBlock(), createElementBlock("div", {
					key: node.name,
					class: normalizeClass([_ctx.$style.container, _ctx.$style[__props.size]])
				}, [createVNode(NodeIcon_default, {
					"node-type": node,
					size: __props.size === "md" ? 24 : 18,
					"show-tooltip": true
				}, null, 8, ["node-type", "size"])], 2);
			}), 128)), filteredCoreNodes.value.length > __props.limit + 1 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.button, __props.size === "md" ? _ctx.$style.buttonMd : _ctx.$style.buttonSm])
			}, " +" + toDisplayString(hiddenNodes.value), 3)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/app/components/NodeList.vue?vue&type=style&index=0&lang.module.scss
var list = "_list_lvvtw_388";
var container = "_container_lvvtw_396";
var sm = "_sm_lvvtw_401";
var md = "_md_lvvtw_405";
var button$1 = "_button_lvvtw_409";
var buttonSm = "_buttonSm_lvvtw_423";
var buttonMd = "_buttonMd_lvvtw_430";
var shimmer$2 = "_shimmer_lvvtw_1";
var spin$2 = "_spin_lvvtw_1";
var opacityPulse$2 = "_opacityPulse_lvvtw_1";
var popoverIn$2 = "_popoverIn_lvvtw_1";
var fadeIn$2 = "_fadeIn_lvvtw_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_lvvtw_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_lvvtw_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_lvvtw_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_lvvtw_1";
var blurSwapIn$2 = "_blurSwapIn_lvvtw_1";
var blurSwapOut$2 = "_blurSwapOut_lvvtw_1";
var pulseGlow$2 = "_pulseGlow_lvvtw_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_lvvtw_1";
var fade$2 = "_fade_lvvtw_1";
var fadeInUp$2 = "_fadeInUp_lvvtw_1";
var fadeInDown$2 = "_fadeInDown_lvvtw_1";
var fadeInLeft$2 = "_fadeInLeft_lvvtw_1";
var fadeInRight$2 = "_fadeInRight_lvvtw_1";
var fadeOut$2 = "_fadeOut_lvvtw_1";
var fadeOutDown$2 = "_fadeOutDown_lvvtw_1";
var fadeOutUp$2 = "_fadeOutUp_lvvtw_1";
var fadeOutLeft$2 = "_fadeOutLeft_lvvtw_1";
var fadeOutRight$2 = "_fadeOutRight_lvvtw_1";
var ping$2 = "_ping_lvvtw_1";
var blinkBackground$2 = "_blinkBackground_lvvtw_1";
var typingBlink$2 = "_typingBlink_lvvtw_1";
var NodeList_vue_vue_type_style_index_0_lang_module_default = {
	list,
	container,
	sm,
	md,
	button: button$1,
	buttonSm,
	buttonMd,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_lvvtw_1",
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
var NodeList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/components/TemplateCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 1 };
var _hoisted_2$1 = { key: 0 };
var nodesToBeShown = 5;
var TemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateCard",
	props: {
		workflow: {},
		lastItem: {
			type: Boolean,
			default: false
		},
		firstItem: {
			type: Boolean,
			default: false
		},
		useWorkflowButton: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		simpleView: {
			type: Boolean,
			default: false
		}
	},
	emits: ["useWorkflow", "click"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const emit = __emit;
		function onUseWorkflowClick(e) {
			emit("useWorkflow", e);
		}
		function onCardClick(e) {
			emit("click", e);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([
					_ctx.$style.card,
					__props.lastItem && _ctx.$style.last,
					__props.firstItem && _ctx.$style.first,
					!__props.loading && _ctx.$style.loaded
				]),
				"data-test-id": "template-card",
				onClick: onCardClick
			}, [
				__props.loading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nLoading_default), {
					rows: 2,
					"shrink-last": false,
					loading: __props.loading
				}, null, 8, ["loading"])], 2)) : __props.workflow ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nHeading_default), {
					bold: true,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.workflow.name), 1)]),
					_: 1
				}), !__props.simpleView ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [
					__props.workflow.totalViews ? (openBlock(), createElementBlock("span", _hoisted_2$1, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "eye",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(unref(abbreviateNumber)(__props.workflow.totalViews)), 1)]),
						_: 1
					})])) : createCommentVNode("", true),
					__props.workflow.totalViews ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.line),
						textContent: "|"
					}, null, 2)) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createVNode(TimeAgo_default, { date: __props.workflow.createdAt }, null, 8, ["date"])]),
						_: 1
					}),
					__props.workflow.user ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.line),
						textContent: "|"
					}, null, 2)) : createCommentVNode("", true),
					__props.workflow.user ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 3,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("template.byAuthor", { interpolate: { name: __props.workflow.user.username } })), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)])) : createCommentVNode("", true),
				!__props.loading && __props.workflow ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass([_ctx.$style.nodesContainer, __props.useWorkflowButton && _ctx.$style.hideOnHover])
				}, [__props.workflow.nodes ? (openBlock(), createBlock(NodeList_default, {
					key: 0,
					nodes: __props.workflow.nodes,
					limit: nodesToBeShown,
					size: "md"
				}, null, 8, ["nodes"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				__props.useWorkflowButton ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.buttonContainer)
				}, [__props.useWorkflowButton ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "outline",
					label: "Use workflow",
					"data-test-id": "use-workflow-button",
					onClick: withModifiers(onUseWorkflowClick, ["stop"])
				})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/components/TemplateCard.vue?vue&type=style&index=0&lang.module.scss
var nodes$1 = "_nodes_1y6ac_388";
var icon = "_icon_1y6ac_395";
var card = "_card_1y6ac_399";
var hideOnHover = "_hideOnHover_1y6ac_411";
var buttonContainer = "_buttonContainer_1y6ac_414";
var loaded = "_loaded_1y6ac_425";
var first = "_first_1y6ac_429";
var last = "_last_1y6ac_435";
var content = "_content_1y6ac_440";
var line = "_line_1y6ac_445";
var loading = "_loading_1y6ac_451";
var nodesContainer = "_nodesContainer_1y6ac_456";
var shimmer$1 = "_shimmer_1y6ac_1";
var spin$1 = "_spin_1y6ac_1";
var opacityPulse$1 = "_opacityPulse_1y6ac_1";
var popoverIn$1 = "_popoverIn_1y6ac_1";
var fadeIn$1 = "_fadeIn_1y6ac_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1y6ac_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1y6ac_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1y6ac_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1y6ac_1";
var blurSwapIn$1 = "_blurSwapIn_1y6ac_1";
var blurSwapOut$1 = "_blurSwapOut_1y6ac_1";
var pulseGlow$1 = "_pulseGlow_1y6ac_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1y6ac_1";
var fade$1 = "_fade_1y6ac_1";
var fadeInUp$1 = "_fadeInUp_1y6ac_1";
var fadeInDown$1 = "_fadeInDown_1y6ac_1";
var fadeInLeft$1 = "_fadeInLeft_1y6ac_1";
var fadeInRight$1 = "_fadeInRight_1y6ac_1";
var fadeOut$1 = "_fadeOut_1y6ac_1";
var fadeOutDown$1 = "_fadeOutDown_1y6ac_1";
var fadeOutUp$1 = "_fadeOutUp_1y6ac_1";
var fadeOutLeft$1 = "_fadeOutLeft_1y6ac_1";
var fadeOutRight$1 = "_fadeOutRight_1y6ac_1";
var ping$1 = "_ping_1y6ac_1";
var blinkBackground$1 = "_blinkBackground_1y6ac_1";
var typingBlink$1 = "_typingBlink_1y6ac_1";
var TemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	nodes: nodes$1,
	icon,
	card,
	hideOnHover,
	buttonContainer,
	loaded,
	first,
	last,
	content,
	line,
	loading,
	nodesContainer,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1y6ac_1",
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
var TemplateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/components/TemplateList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"data-test-id": "template-count-label"
};
var _hoisted_2 = ["textContent"];
var _hoisted_3 = {
	key: 1,
	"data-test-id": "templates-loading-container"
};
var TemplateList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateList",
	props: {
		workflows: { default: () => [] },
		infiniteScrollEnabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		useWorkflowButton: {
			type: Boolean,
			default: false
		},
		totalWorkflows: { default: 0 },
		simpleView: {
			type: Boolean,
			default: false
		},
		totalCount: { default: 0 }
	},
	emits: [
		"loadMore",
		"openTemplate",
		"useWorkflow"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const i18n = useI18n();
		const loader = ref(null);
		onMounted(() => {
			if (props.infiniteScrollEnabled) {
				const content = document.getElementById("content");
				if (content) content.addEventListener("scroll", onScroll);
			}
		});
		onBeforeUnmount(() => {
			const content = document.getElementById("content");
			if (content) content.removeEventListener("scroll", onScroll);
		});
		function onScroll() {
			const loaderRef = loader.value;
			if (!loaderRef || props.loading) return;
			const rect = loaderRef.getBoundingClientRect();
			if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) emit("loadMore");
		}
		function onCardClick(event, id) {
			emit("openTemplate", {
				event,
				id
			});
		}
		function onUseWorkflow(event, id) {
			emit("useWorkflow", {
				event,
				id
			});
		}
		return (_ctx, _cache) => {
			return __props.loading || __props.workflows.length ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.list)
			}, [!__props.simpleView ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [createVNode(unref(N8nHeading_default), {
				bold: true,
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [
					createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflows")) + " ", 1),
					__props.totalCount > 0 ? (openBlock(), createElementBlock("span", _hoisted_1, "(" + toDisplayString(__props.totalCount) + ")", 1)) : createCommentVNode("", true),
					!__props.loading && __props.totalWorkflows ? (openBlock(), createElementBlock("span", {
						key: 1,
						textContent: toDisplayString(`(${__props.totalWorkflows})`)
					}, null, 8, _hoisted_2)) : createCommentVNode("", true)
				]),
				_: 1
			})], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(__props.workflows, (workflow, index) => {
					return openBlock(), createBlock(TemplateCard_default, {
						key: workflow.id,
						workflow,
						"first-item": index === 0,
						"simple-view": __props.simpleView,
						"last-item": index === __props.workflows.length - 1 && !__props.loading,
						"use-workflow-button": __props.useWorkflowButton,
						onClick: (e) => onCardClick(e, workflow.id),
						onUseWorkflow: (e) => onUseWorkflow(e, workflow.id)
					}, null, 8, [
						"workflow",
						"first-item",
						"simple-view",
						"last-item",
						"use-workflow-button",
						"onClick",
						"onUseWorkflow"
					]);
				}), 128)),
				__props.infiniteScrollEnabled ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "loader",
					ref: loader
				}, null, 512)) : createCommentVNode("", true),
				__props.loading ? (openBlock(), createElementBlock("div", _hoisted_3, [(openBlock(), createElementBlock(Fragment, null, renderList(4, (n) => {
					return createVNode(TemplateCard_default, {
						key: "index-" + n,
						loading: true,
						"first-item": __props.workflows.length === 0 && n === 1,
						"last-item": n === 4
					}, null, 8, ["first-item", "last-item"]);
				}), 64))])) : createCommentVNode("", true)
			], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/components/TemplateList.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_b9q5h_388";
var workflowButton = "_workflowButton_b9q5h_392";
var button = "_button_b9q5h_392";
var nodes = "_nodes_b9q5h_395";
var shimmer = "_shimmer_b9q5h_1";
var spin = "_spin_b9q5h_1";
var opacityPulse = "_opacityPulse_b9q5h_1";
var popoverIn = "_popoverIn_b9q5h_1";
var fadeIn = "_fadeIn_b9q5h_1";
var collapsibleSlideDown = "_collapsibleSlideDown_b9q5h_1";
var collapsibleSlideUp = "_collapsibleSlideUp_b9q5h_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_b9q5h_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_b9q5h_1";
var blurSwapIn = "_blurSwapIn_b9q5h_1";
var blurSwapOut = "_blurSwapOut_b9q5h_1";
var pulseGlow = "_pulseGlow_b9q5h_1";
var pulseGlowDelayed = "_pulseGlowDelayed_b9q5h_1";
var fade = "_fade_b9q5h_1";
var fadeInUp = "_fadeInUp_b9q5h_1";
var fadeInDown = "_fadeInDown_b9q5h_1";
var fadeInLeft = "_fadeInLeft_b9q5h_1";
var fadeInRight = "_fadeInRight_b9q5h_1";
var fadeOut = "_fadeOut_b9q5h_1";
var fadeOutDown = "_fadeOutDown_b9q5h_1";
var fadeOutUp = "_fadeOutUp_b9q5h_1";
var fadeOutLeft = "_fadeOutLeft_b9q5h_1";
var fadeOutRight = "_fadeOutRight_b9q5h_1";
var ping = "_ping_b9q5h_1";
var blinkBackground = "_blinkBackground_b9q5h_1";
var typingBlink = "_typingBlink_b9q5h_1";
var TemplateList_vue_vue_type_style_index_0_lang_module_default = {
	header,
	workflowButton,
	button,
	nodes,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_b9q5h_1",
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
var TemplateList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplateList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NodeList_default as n, TemplateList_default as t };
