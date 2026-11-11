import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Pd as withModifiers, Rd as computed, Ud as createSlots, Vd as createCommentVNode, bp as toDisplayString, cf as onMounted, df as openBlock, ho as defineStore, hp as normalizeClass, jf as init_reactivity_esm_bundler, mf as renderSlot, np as init_shared_esm_bundler, ns as useRouter, of as onBeforeUnmount, pf as renderList, pt as require_uniqBy, ts as useRoute, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { $b as useTelemetry, AO as N8nText_default, DD as N8nMarkdown_default, Dd as normalizeTemplateNodeCredentials, Ed as keyFromCredentialTypeAndName, Eo as ensurePersonalProjectId, Fo as useInstanceAiHandoff, HO as _plugin_vue_export_helper_default, Jp as useDocumentTitle, Ju as NodeIcon_default, Qp as createWorkflowDocumentId, RO as N8nButton_default, Tp as useExternalHooks, Xb as VIEWS, cm as getNodeTypeDisplayableCredentials, dm as useNodeTypesStore, hp as useInstanceAiAvailable, iO as N8nCard_default, mp as useTemplatesStore, qE as N8nTag_default, qO as useI18n, zO as N8nIcon_default } from "./app-MbtXRI_F.js";
import { n as useTemplateWorkflow } from "./templateActions-jlUyXHhs.js";
import { t as TemplatesView_default } from "./TemplatesView-u6vzP4pj.js";
import { t as WorkflowPreviewHost_default } from "./WorkflowPreviewHost-DeUleACc.js";
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
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = ["src", "alt"];
var _hoisted_2 = { key: 2 };
var RecommendedTemplateCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
					const credentialName = normalizedNodeCredentials[credentialType] ?? "";
					const key = keyFromCredentialTypeAndName(credentialType, credentialName);
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
}), [["__cssModules", { "$style": {
	suggestion: "_suggestion_nic0m_1",
	clickable: "_clickable_nic0m_10",
	title: "_title_nic0m_16",
	cardContent: "_cardContent_nic0m_21",
	nodes: "_nodes_nic0m_28",
	statItemLeft: "_statItemLeft_nic0m_33",
	userInfo: "_userInfo_nic0m_40",
	userAvatar: "_userAvatar_nic0m_47",
	verifiedBadge: "_verifiedBadge_nic0m_54",
	categories: "_categories_nic0m_61",
	categoryTag: "_categoryTag_nic0m_67",
	statItem: "_statItem_nic0m_33",
	mintGreen: "_mintGreen_nic0m_80"
} }]]);
//#endregion
//#region src/features/workflows/templates/views/TemplatesWorkflowView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var TemplatesWorkflowView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
				kind: "prefill",
				prefillType: "template_adjustment"
			}, {
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
}), [["__cssModules", { "$style": {
	notFound: "_notFound_i735a_1",
	previewWrapper: "_previewWrapper_i735a_5",
	image: "_image_i735a_9",
	button: "_button_i735a_19",
	contentContainer: "_contentContainer_i735a_27",
	content: "_content_i735a_27",
	templateActions: "_templateActions_i735a_43",
	startWithAi: "_startWithAi_i735a_50",
	templateCard: "_templateCard_i735a_68",
	markdown: "_markdown_i735a_83"
} }]]);
//#endregion
export { TemplatesWorkflowView_default as default };
