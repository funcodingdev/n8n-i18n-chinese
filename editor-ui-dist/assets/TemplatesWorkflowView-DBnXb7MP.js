import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { t as N8nMarkdown_default } from "./N8nMarkdown-Coqw_pnO.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nTag_default } from "./N8nTag-BOt_Vn3b.js";
import { P as getNodeTypeDisplayableCredentials, T as createWorkflowDocumentId, V as useNodeTypesStore } from "./workflows.store-QD0eo9S6.js";
import { fr as defineStore } from "./useRootStore-CvqfnFUt.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DxozP3cY.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { t as useExternalHooks } from "./useExternalHooks-BlrUXQBD.js";
import { t as useInstanceAiAvailable } from "./useInstanceAiAvailability-bQ9YCAwp.js";
import { t as useTemplatesStore } from "./templates.store-DdsiDi7z.js";
import { t as require_uniqBy } from "./uniqBy-DP0so_cF.js";
import { n as keyFromCredentialTypeAndName, r as normalizeTemplateNodeCredentials } from "./templateTransforms-DvGUSYn9.js";
import { t as NodeIcon_default } from "./NodeIcon-D58U7cBX.js";
import { u as ensurePersonalProjectId, v as useInstanceAiHandoff } from "./useInstanceAiHandoff-DP0Skybf.js";
import { n as useTemplateWorkflow } from "./templateActions-BKvGdRQJ.js";
import { t as TemplatesView_default } from "./TemplatesView-BpncFT7g.js";
import { t as WorkflowPreviewHost_default } from "./WorkflowPreviewHost-BsR8ejKd.js";
//#region src/features/workflows/templates/recommendations/recommendedTemplates.store.ts
var import_uniqBy = /* @__PURE__ */ __toESM(require_uniqBy(), 1);
var useRecommendedTemplatesStore = defineStore("recommendedTemplates", () => {
	const telemetry = useTelemetry();
	function getTemplateRoute(id) {
		return {
			name: VIEWS.TEMPLATE,
			params: { id }
		};
	}
	function trackTemplateTileClick(templateId) {
		telemetry.track("User viewed template detail", { templateId });
	}
	function trackTemplateShown(templateId, tileNumber) {
		telemetry.track("User viewed template cell", {
			tileNumber,
			templateId
		});
	}
	return {
		getTemplateRoute,
		trackTemplateTileClick,
		trackTemplateShown
	};
});
//#endregion
//#region src/features/workflows/templates/recommendations/components/RecommendedTemplateCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src", "alt"];
var _hoisted_2 = { key: 2 };
var RecommendedTemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RecommendedTemplateCard",
	props: {
		template: {},
		tileNumber: {},
		showDetails: { type: Boolean },
		clickable: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const { getTemplateRoute, trackTemplateTileClick, trackTemplateShown } = useRecommendedTemplatesStore();
		const router = useRouter();
		const templateNodes = computed(() => {
			if (!props.template?.nodes) return [];
			const uniqueNodeTypes = (0, import_uniqBy.default)(props.template.nodes, (node) => node.icon).map((node) => node.name);
			return Array.from(uniqueNodeTypes).slice(0, 2).map((nodeType) => nodeTypesStore.getNodeType(nodeType)).filter(Boolean);
		});
		const credentialsCount = computed(() => {
			const workflowNodes = props.template?.workflow?.nodes ?? [];
			if (workflowNodes.length === 0) return 0;
			const uniqueCredentialKeys = /* @__PURE__ */ new Set();
			for (const node of workflowNodes) {
				const requiredCredentials = getNodeTypeDisplayableCredentials(nodeTypesStore, node);
				if (requiredCredentials.length === 0) continue;
				const normalizedNodeCredentials = node.credentials ? normalizeTemplateNodeCredentials(node.credentials) : {};
				for (const credentialDescription of requiredCredentials) {
					const credentialType = credentialDescription.name;
					const key = keyFromCredentialTypeAndName(credentialType, normalizedNodeCredentials[credentialType] ?? "");
					uniqueCredentialKeys.add(key);
				}
			}
			return uniqueCredentialKeys.size;
		});
		const setupTimeMinutes = computed(() => {
			return 2 + credentialsCount.value * 3;
		});
		const hasTrackedShown = ref(false);
		const cardRef = ref(null);
		let observer = null;
		const trackWhenVisible = () => {
			if (hasTrackedShown.value || props.tileNumber === void 0) return;
			hasTrackedShown.value = true;
			trackTemplateShown(props.template.id, props.tileNumber);
			if (observer && cardRef.value) observer.unobserve(cardRef.value.$el);
			observer = null;
		};
		const handleUseTemplate = async () => {
			if (!props.clickable) return;
			trackTemplateTileClick(props.template.id);
			await router.push(getTemplateRoute(props.template.id));
		};
		onMounted(() => {
			if (!cardRef.value) return;
			if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
				trackWhenVisible();
				return;
			}
			observer = new IntersectionObserver((entries) => {
				for (const entry of entries) if (entry.isIntersecting) {
					trackWhenVisible();
					break;
				}
			});
			observer.observe(cardRef.value.$el);
		});
		onBeforeUnmount(() => {
			if (observer) {
				observer.disconnect();
				observer = null;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				ref_key: "cardRef",
				ref: cardRef,
				class: normalizeClass([_ctx.$style.suggestion, { [_ctx.$style.clickable]: __props.clickable }]),
				onClick: handleUseTemplate
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [
					createVNode(unref(N8nText_default), {
						size: "large",
						bold: true,
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.template.name), 1)]),
						_: 1
					}, 8, ["class"]),
					__props.template.user ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.userInfo)
					}, [
						__props.template.user.avatar ? (openBlock(), createElementBlock("img", {
							key: 0,
							src: __props.template.user.avatar,
							alt: __props.template.user.name,
							class: normalizeClass(_ctx.$style.userAvatar)
						}, null, 10, _hoisted_1)) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "user",
							size: 16
						})),
						createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.template.user.name), 1)]),
							_: 1
						}),
						__props.template.user.verified ? (openBlock(), createElementBlock("span", {
							key: 2,
							class: normalizeClass(_ctx.$style.verifiedBadge)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "shield-half",
							size: 16
						}), createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.verified")), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true)
					], 2)) : createCommentVNode("", true),
					__props.showDetails && __props.template.categories?.length ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.categories)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.template.categories, (category) => {
						return openBlock(), createBlock(unref(N8nTag_default), {
							key: category.id,
							text: category.name,
							clickable: false,
							class: normalizeClass(_ctx.$style.categoryTag)
						}, null, 8, ["text", "class"]);
					}), 128))], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.statItemLeft) }, [__props.template.readyToDemo === true ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass([_ctx.$style.statItem, _ctx.$style.mintGreen])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "zap",
						size: 16
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.readyToRun")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.statItem)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "clock",
						size: 16
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.setupTime", { interpolate: { count: setupTimeMinutes.value } })), 1)]),
						_: 1
					})], 2))], 2), templateNodes.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.nodes)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(templateNodes.value, (nodeType) => {
						return openBlock(), createBlock(NodeIcon_default, {
							key: nodeType.name,
							size: 20,
							"node-type": nodeType
						}, null, 8, ["node-type"]);
					}), 128))], 2)) : createCommentVNode("", true)], 2),
					_ctx.$slots.belowContent ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "belowContent")])) : createCommentVNode("", true)
				], 2)]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/recommendations/components/RecommendedTemplateCard.vue?vue&type=style&index=0&lang.module.scss
var suggestion = "_suggestion_1qosa_388";
var clickable = "_clickable_1qosa_397";
var title = "_title_1qosa_403";
var cardContent = "_cardContent_1qosa_408";
var nodes = "_nodes_1qosa_415";
var statItemLeft = "_statItemLeft_1qosa_420";
var userInfo = "_userInfo_1qosa_427";
var userAvatar = "_userAvatar_1qosa_434";
var verifiedBadge = "_verifiedBadge_1qosa_441";
var categories = "_categories_1qosa_448";
var categoryTag = "_categoryTag_1qosa_454";
var statItem = "_statItem_1qosa_420";
var mintGreen = "_mintGreen_1qosa_467";
var shimmer$1 = "_shimmer_1qosa_1";
var spin$1 = "_spin_1qosa_1";
var opacityPulse$1 = "_opacityPulse_1qosa_1";
var popoverIn$1 = "_popoverIn_1qosa_1";
var fadeIn$1 = "_fadeIn_1qosa_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1qosa_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1qosa_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1qosa_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1qosa_1";
var blurSwapIn$1 = "_blurSwapIn_1qosa_1";
var blurSwapOut$1 = "_blurSwapOut_1qosa_1";
var pulseGlow$1 = "_pulseGlow_1qosa_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1qosa_1";
var fade$1 = "_fade_1qosa_1";
var fadeInUp$1 = "_fadeInUp_1qosa_1";
var fadeInDown$1 = "_fadeInDown_1qosa_1";
var fadeInLeft$1 = "_fadeInLeft_1qosa_1";
var fadeInRight$1 = "_fadeInRight_1qosa_1";
var fadeOut$1 = "_fadeOut_1qosa_1";
var fadeOutDown$1 = "_fadeOutDown_1qosa_1";
var fadeOutUp$1 = "_fadeOutUp_1qosa_1";
var fadeOutLeft$1 = "_fadeOutLeft_1qosa_1";
var fadeOutRight$1 = "_fadeOutRight_1qosa_1";
var ping$1 = "_ping_1qosa_1";
var blinkBackground$1 = "_blinkBackground_1qosa_1";
var typingBlink$1 = "_typingBlink_1qosa_1";
var RecommendedTemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	suggestion,
	clickable,
	title,
	cardContent,
	nodes,
	statItemLeft,
	userInfo,
	userAvatar,
	verifiedBadge,
	categories,
	categoryTag,
	statItem,
	mintGreen,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1qosa_1",
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
var RecommendedTemplateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RecommendedTemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RecommendedTemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/views/TemplatesWorkflowView.vue?vue&type=script&setup=true&lang.ts
var TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesWorkflowView",
	setup(__props) {
		const externalHooks = useExternalHooks();
		const templatesStore = useTemplatesStore();
		const nodeTypesStore = useNodeTypesStore();
		const route = useRoute();
		const router = useRouter();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const instanceAiHandoff = useInstanceAiHandoff();
		const instanceAiAvailable = useInstanceAiAvailable();
		const loading = ref(true);
		const showPreview = ref(true);
		const notFoundError = ref(false);
		const isPreviewVisible = ref(true);
		const previewWrapperRef = ref(null);
		let previewObserver = null;
		const templateId = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
		const template = computed(() => templatesStore.getFullTemplateById(templateId.value));
		const openTemplateSetup = async (id, e) => {
			await useTemplateWorkflow({
				router,
				templateId: id,
				inNewBrowserTab: e.metaKey || e.ctrlKey,
				externalHooks,
				nodeTypesStore,
				telemetry,
				templatesStore,
				source: "template_preview"
			});
		};
		const startWithAi = async () => {
			if (!template.value || !instanceAiAvailable.value) return;
			const projectId = await ensurePersonalProjectId();
			if (!projectId) return;
			await instanceAiHandoff.startThread(projectId, i18n.baseText("instanceAi.launch.template.message", { interpolate: {
				name: template.value.name,
				id: templateId.value
			} }), {
				source: "template-view",
				origin: "internal",
				sourceContext: {
					templateId: templateId.value,
					templateName: template.value.name
				}
			});
		};
		const scrollToTop = () => {
			const contentArea = document.getElementById("content");
			if (contentArea) contentArea.scrollTo({ top: 0 });
		};
		watch(() => template.value, (newTemplate) => {
			if (newTemplate) documentTitle.set(`Template template: ${newTemplate.name}`);
			else documentTitle.set("Templates");
		});
		watch(previewWrapperRef, (newRef) => {
			if (previewObserver) {
				previewObserver.disconnect();
				previewObserver = null;
			}
			if (newRef) {
				previewObserver = new IntersectionObserver((entries) => {
					for (const entry of entries) isPreviewVisible.value = entry.isIntersecting;
				}, { threshold: 0 });
				previewObserver.observe(newRef);
			}
		}, { immediate: true });
		onMounted(async () => {
			scrollToTop();
			if (nodeTypesStore.allNodeTypes.length === 0) nodeTypesStore.getNodeTypes();
			nodeTypesStore.fetchCommunityNodePreviews();
			if (template.value?.full) {
				loading.value = false;
				return;
			}
			try {
				await templatesStore.fetchTemplateById(templateId.value);
			} catch (e) {
				notFoundError.value = true;
			}
			loading.value = false;
		});
		onBeforeUnmount(() => {
			if (previewObserver) {
				previewObserver.disconnect();
				previewObserver = null;
			}
		});
		const strippedWorkflow = computed(() => {
			if (!template.value?.workflow) return void 0;
			if (template.value.readyToDemo) return template.value.workflow;
			return {
				...template.value.workflow,
				pinData: {}
			};
		});
		const previewDocumentId = computed(() => createWorkflowDocumentId(`template-${templateId.value}`, "preview"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TemplatesView_default, { "full-width": true }, createSlots({ _: 2 }, [notFoundError.value ? {
				name: "header",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.notFound) }, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflowsNotFound")), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0, !notFoundError.value ? {
				name: "content",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewWrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.image) }, [showPreview.value && !loading.value && strippedWorkflow.value ? (openBlock(), createBlock(WorkflowPreviewHost_default, {
					key: 0,
					"document-id": previewDocumentId.value,
					workflow: strippedWorkflow.value
				}, null, 8, ["document-id", "workflow"])) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.templateCard) }, [template.value ? (openBlock(), createBlock(RecommendedTemplateCard_default, {
					key: 0,
					template: template.value,
					"show-details": true
				}, {
					belowContent: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.templateActions) }, [createVNode(unref(N8nButton_default), {
						"data-test-id": "use-template-button",
						label: unref(i18n).baseText("template.buttons.tryTemplate"),
						size: "large",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => openTemplateSetup(templateId.value, $event), ["stop"]))
					}, null, 8, ["label"]), unref(instanceAiAvailable) ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						"data-test-id": "start-with-ai-button",
						class: normalizeClass(_ctx.$style.startWithAi),
						label: unref(i18n).baseText("template.buttons.startWithAi"),
						variant: "ghost",
						icon: "sparkles",
						size: "large",
						onClick: withModifiers(startWithAi, ["stop"])
					}, null, 8, ["class", "label"])) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["template"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.markdown),
					"data-test-id": "template-description"
				}, [createVNode(unref(N8nMarkdown_default), {
					content: template.value?.description,
					images: template.value?.image,
					loading: loading.value
				}, null, 8, [
					"content",
					"images",
					"loading"
				])], 2)], 2)], 2)]),
				key: "1"
			} : void 0]), 1024);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/views/TemplatesWorkflowView.vue?vue&type=style&index=0&lang.module.scss
var notFound = "_notFound_1hymb_388";
var previewWrapper = "_previewWrapper_1hymb_392";
var image = "_image_1hymb_396";
var button = "_button_1hymb_406";
var contentContainer = "_contentContainer_1hymb_414";
var content = "_content_1hymb_414";
var templateActions = "_templateActions_1hymb_430";
var startWithAi = "_startWithAi_1hymb_437";
var templateCard = "_templateCard_1hymb_455";
var markdown = "_markdown_1hymb_470";
var shimmer = "_shimmer_1hymb_1";
var spin = "_spin_1hymb_1";
var opacityPulse = "_opacityPulse_1hymb_1";
var popoverIn = "_popoverIn_1hymb_1";
var fadeIn = "_fadeIn_1hymb_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1hymb_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1hymb_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1hymb_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1hymb_1";
var blurSwapIn = "_blurSwapIn_1hymb_1";
var blurSwapOut = "_blurSwapOut_1hymb_1";
var pulseGlow = "_pulseGlow_1hymb_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1hymb_1";
var fade = "_fade_1hymb_1";
var fadeInUp = "_fadeInUp_1hymb_1";
var fadeInDown = "_fadeInDown_1hymb_1";
var fadeInLeft = "_fadeInLeft_1hymb_1";
var fadeInRight = "_fadeInRight_1hymb_1";
var fadeOut = "_fadeOut_1hymb_1";
var fadeOutDown = "_fadeOutDown_1hymb_1";
var fadeOutUp = "_fadeOutUp_1hymb_1";
var fadeOutLeft = "_fadeOutLeft_1hymb_1";
var fadeOutRight = "_fadeOutRight_1hymb_1";
var ping = "_ping_1hymb_1";
var blinkBackground = "_blinkBackground_1hymb_1";
var typingBlink = "_typingBlink_1hymb_1";
var TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default = {
	notFound,
	previewWrapper,
	image,
	button,
	contentContainer,
	content,
	templateActions,
	startWithAi,
	templateCard,
	markdown,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1hymb_1",
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
var TemplatesWorkflowView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TemplatesWorkflowView_default as default };
