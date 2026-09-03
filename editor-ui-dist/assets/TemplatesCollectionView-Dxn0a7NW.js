import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nMarkdown_default } from "./N8nMarkdown-Coqw_pnO.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { V as useNodeTypesStore, Vn as filterTemplateNodes, _t as isTemplatesWorkflow, gt as isFullTemplatesCollection } from "./workflows.store-Bo6ZgF_O.js";
import { t as N8nTags_default } from "./N8nTags-Bw0YQUjA.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DPRLSskW.js";
import { t as abbreviateNumber } from "./typesUtils-D4N0bsbb.js";
import { n as useDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { t as useExternalHooks } from "./useExternalHooks-3NU1HG1V.js";
import { t as useTemplatesStore } from "./templates.store-CPTN09Ar.js";
import { t as NodeIcon_default } from "./NodeIcon-IZ0wyAnH.js";
import { t as TimeAgo_default } from "./TimeAgo-DdOhC6Ae.js";
import { n as useTemplateWorkflow } from "./templateActions-0v6TKnaw.js";
import { t as TemplatesView_default } from "./TemplatesView-LiwzyAFS.js";
import { t as TemplateList_default } from "./TemplateList-CIDwtGU8.js";
//#region src/features/workflows/templates/components/TemplateDetailsBlock.vue?vue&type=script&setup=true&lang.ts
var TemplateDetailsBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateDetailsBlock",
	props: { title: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.block) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				tag: "h3",
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/components/TemplateDetailsBlock.vue?vue&type=style&index=0&lang.module.scss
var block = "_block_10rvo_388";
var header = "_header_10rvo_392";
var content = "_content_10rvo_397";
var shimmer$2 = "_shimmer_10rvo_1";
var spin$2 = "_spin_10rvo_1";
var opacityPulse$2 = "_opacityPulse_10rvo_1";
var popoverIn$2 = "_popoverIn_10rvo_1";
var fadeIn$2 = "_fadeIn_10rvo_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_10rvo_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_10rvo_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_10rvo_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_10rvo_1";
var blurSwapIn$2 = "_blurSwapIn_10rvo_1";
var blurSwapOut$2 = "_blurSwapOut_10rvo_1";
var pulseGlow$2 = "_pulseGlow_10rvo_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_10rvo_1";
var fade$2 = "_fade_10rvo_1";
var fadeInUp$2 = "_fadeInUp_10rvo_1";
var fadeInDown$2 = "_fadeInDown_10rvo_1";
var fadeInLeft$2 = "_fadeInLeft_10rvo_1";
var fadeInRight$2 = "_fadeInRight_10rvo_1";
var fadeOut$2 = "_fadeOut_10rvo_1";
var fadeOutDown$2 = "_fadeOutDown_10rvo_1";
var fadeOutUp$2 = "_fadeOutUp_10rvo_1";
var fadeOutLeft$2 = "_fadeOutLeft_10rvo_1";
var fadeOutRight$2 = "_fadeOutRight_10rvo_1";
var ping$2 = "_ping_10rvo_1";
var blinkBackground$2 = "_blinkBackground_10rvo_1";
var typingBlink$2 = "_typingBlink_10rvo_1";
var TemplateDetailsBlock_vue_vue_type_style_index_0_lang_module_default = {
	block,
	header,
	content,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_10rvo_1",
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
var TemplateDetailsBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplateDetailsBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateDetailsBlock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/components/TemplateDetails.vue?vue&type=script&setup=true&lang.ts
var TemplateDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateDetails",
	props: {
		template: {},
		blockTitle: {},
		loading: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const router = useRouter();
		const i18n = useI18n();
		const templatesStore = useTemplatesStore();
		const categoriesAsTags = computed(() => props.template && "categories" in props.template ? props.template.categories.map((category) => ({
			id: `${category.id}`,
			name: category.name
		})) : []);
		const redirectToCategory = (id) => {
			templatesStore.resetSessionId();
			router.push(`/templates?categories=${id}`);
		};
		const redirectToSearchPage = (node) => {
			templatesStore.resetSessionId();
			router.push(`/templates?search=${node.displayName}`);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(unref(N8nLoading_default), {
					loading: __props.loading,
					rows: 5,
					variant: "p"
				}, null, 8, ["loading"]),
				!__props.loading && __props.template && __props.template.nodes.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
					key: 0,
					title: __props.blockTitle
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.icons) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filterTemplateNodes)(__props.template.nodes), (node) => {
						return openBlock(), createElementBlock("div", {
							key: node.name,
							class: normalizeClass(_ctx.$style.icon)
						}, [createVNode(NodeIcon_default, {
							"node-type": node,
							size: 24,
							"show-tooltip": true,
							onClick: ($event) => redirectToSearchPage(node)
						}, null, 8, ["node-type", "onClick"])], 2);
					}), 128))], 2)]),
					_: 1
				}, 8, ["title"])) : createCommentVNode("", true),
				!__props.loading && unref(isFullTemplatesCollection)(__props.template) && categoriesAsTags.value.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
					key: 1,
					title: unref(i18n).baseText("template.details.categories")
				}, {
					default: withCtx(() => [createVNode(unref(N8nTags_default), {
						tags: categoriesAsTags.value,
						"onClick:tag": redirectToCategory
					}, null, 8, ["tags"])]),
					_: 1
				}, 8, ["title"])) : createCommentVNode("", true),
				!__props.loading && __props.template ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
					key: 2,
					title: unref(i18n).baseText("template.details.details")
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [unref(isTemplatesWorkflow)(__props.template) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(unref(i18n).baseText("template.details.created")) + " ", 1),
							createVNode(TimeAgo_default, { date: __props.template.createdAt }, null, 8, ["date"]),
							createTextVNode(" " + toDisplayString(unref(i18n).baseText("template.details.by")) + " " + toDisplayString(__props.template.user ? __props.template.user.username : "n8n team"), 1)
						]),
						_: 1
					})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [unref(isTemplatesWorkflow)(__props.template) && __props.template.totalViews !== 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("template.details.viewed")) + " " + toDisplayString(unref(abbreviateNumber)(__props.template.totalViews)) + " " + toDisplayString(unref(i18n).baseText("template.details.times")), 1)]),
						_: 1
					})) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["title"])) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/components/TemplateDetails.vue?vue&type=style&index=0&lang.module.scss
var icons = "_icons_1ubtc_388";
var icon = "_icon_1ubtc_388";
var text = "_text_1ubtc_399";
var shimmer$1 = "_shimmer_1ubtc_1";
var spin$1 = "_spin_1ubtc_1";
var opacityPulse$1 = "_opacityPulse_1ubtc_1";
var popoverIn$1 = "_popoverIn_1ubtc_1";
var fadeIn$1 = "_fadeIn_1ubtc_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1ubtc_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1ubtc_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1ubtc_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1ubtc_1";
var blurSwapIn$1 = "_blurSwapIn_1ubtc_1";
var blurSwapOut$1 = "_blurSwapOut_1ubtc_1";
var pulseGlow$1 = "_pulseGlow_1ubtc_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1ubtc_1";
var fade$1 = "_fade_1ubtc_1";
var fadeInUp$1 = "_fadeInUp_1ubtc_1";
var fadeInDown$1 = "_fadeInDown_1ubtc_1";
var fadeInLeft$1 = "_fadeInLeft_1ubtc_1";
var fadeInRight$1 = "_fadeInRight_1ubtc_1";
var fadeOut$1 = "_fadeOut_1ubtc_1";
var fadeOutDown$1 = "_fadeOutDown_1ubtc_1";
var fadeOutUp$1 = "_fadeOutUp_1ubtc_1";
var fadeOutLeft$1 = "_fadeOutLeft_1ubtc_1";
var fadeOutRight$1 = "_fadeOutRight_1ubtc_1";
var ping$1 = "_ping_1ubtc_1";
var blinkBackground$1 = "_blinkBackground_1ubtc_1";
var typingBlink$1 = "_typingBlink_1ubtc_1";
var TemplateDetails_vue_vue_type_style_index_0_lang_module_default = {
	icons,
	icon,
	text,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1ubtc_1",
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
var TemplateDetails_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplateDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateDetails_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/views/TemplatesCollectionView.vue?vue&type=script&setup=true&lang.ts
var TemplatesCollectionView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesCollectionView",
	setup(__props) {
		const externalHooks = useExternalHooks();
		const templatesStore = useTemplatesStore();
		const nodeTypesStore = useNodeTypesStore();
		const route = useRoute();
		const router = useRouter();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const loading = ref(true);
		const notFoundError = ref(false);
		const collectionId = computed(() => {
			const { id } = route.params;
			return Array.isArray(id) ? id[0] : id;
		});
		const collection = computed(() => templatesStore.getCollectionById[collectionId.value]);
		const collectionWorkflows = computed(() => {
			if (!collection.value || loading.value) return [];
			return collection.value.workflows.map(({ id }) => templatesStore.getTemplatesById(id.toString())).filter((workflow) => !!workflow);
		});
		const scrollToTop = () => {
			setTimeout(() => {
				const contentArea = document.getElementById("content");
				if (contentArea) contentArea.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}, 50);
		};
		const onOpenTemplate = ({ event, id }) => {
			navigateTo(event, VIEWS.TEMPLATE, `${id}`);
		};
		const onUseWorkflow = async ({ event, id }) => {
			await useTemplateWorkflow({
				router,
				templateId: `${id}`,
				inNewBrowserTab: event.metaKey || event.ctrlKey,
				templatesStore,
				externalHooks,
				nodeTypesStore,
				telemetry,
				source: "template_list"
			});
		};
		const navigateTo = (e, page, id) => {
			if (e.metaKey || e.ctrlKey) {
				const { href } = router.resolve({
					name: page,
					params: { id }
				});
				window.open(href, "_blank");
				return;
			} else router.push({
				name: page,
				params: { id }
			});
		};
		watch(() => collection.value, () => {
			if (collection.value && "full" in collection.value && collection.value.full) documentTitle.set(`Template collection: ${collection.value.name}`);
			else documentTitle.set("Templates");
		});
		onMounted(async () => {
			scrollToTop();
			if (collection.value && "full" in collection.value && collection.value.full) {
				loading.value = false;
				return;
			}
			try {
				await templatesStore.fetchCollectionById(collectionId.value);
			} catch (e) {
				notFoundError.value = true;
			}
			loading.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TemplatesView_default, { "go-back-enabled": true }, createSlots({
				header: withCtx(() => [!notFoundError.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.wrapper)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
					collection.value && collection.value.name ? (openBlock(), createBlock(unref(N8nHeading_default), {
						key: 0,
						tag: "h1",
						size: "2xlarge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(collection.value.name), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					collection.value && collection.value.name ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.collection")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nLoading_default), {
						loading: !collection.value || !collection.value.name,
						rows: 2,
						variant: "h1"
					}, null, 8, ["loading"])
				], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.notFound)
				}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.collectionsNotFound")), 1)]),
					_: 1
				})], 2))]),
				_: 2
			}, [!notFoundError.value ? {
				name: "content",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainContent) }, [loading.value || unref(isFullTemplatesCollection)(collection.value) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.markdown)
				}, [createVNode(unref(N8nMarkdown_default), {
					content: unref(isFullTemplatesCollection)(collection.value) && collection.value.description ? collection.value.description : "",
					images: unref(isFullTemplatesCollection)(collection.value) && collection.value.image ? collection.value.image : void 0,
					loading: loading.value
				}, null, 8, [
					"content",
					"images",
					"loading"
				])], 2)) : createCommentVNode("", true), createVNode(TemplateList_default, {
					"infinite-scroll-enabled": false,
					loading: loading.value,
					"use-workflow-button": true,
					workflows: collectionWorkflows.value,
					onUseWorkflow,
					onOpenTemplate
				}, null, 8, ["loading", "workflows"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [createVNode(TemplateDetails_default, {
					"block-title": unref(i18n).baseText("template.details.appsInTheCollection"),
					loading: loading.value,
					template: collection.value
				}, null, 8, [
					"block-title",
					"loading",
					"template"
				])], 2)], 2)]),
				key: "0"
			} : void 0]), 1024);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/views/TemplatesCollectionView.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_1sox3_388";
var notFound = "_notFound_1sox3_398";
var title = "_title_1sox3_402";
var button = "_button_1sox3_406";
var mainContent = "_mainContent_1sox3_410";
var markdown = "_markdown_1sox3_421";
var details = "_details_1sox3_425";
var shimmer = "_shimmer_1sox3_1";
var spin = "_spin_1sox3_1";
var opacityPulse = "_opacityPulse_1sox3_1";
var popoverIn = "_popoverIn_1sox3_1";
var fadeIn = "_fadeIn_1sox3_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1sox3_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1sox3_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1sox3_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1sox3_1";
var blurSwapIn = "_blurSwapIn_1sox3_1";
var blurSwapOut = "_blurSwapOut_1sox3_1";
var pulseGlow = "_pulseGlow_1sox3_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1sox3_1";
var fade = "_fade_1sox3_1";
var fadeInUp = "_fadeInUp_1sox3_1";
var fadeInDown = "_fadeInDown_1sox3_1";
var fadeInLeft = "_fadeInLeft_1sox3_1";
var fadeInRight = "_fadeInRight_1sox3_1";
var fadeOut = "_fadeOut_1sox3_1";
var fadeOutDown = "_fadeOutDown_1sox3_1";
var fadeOutUp = "_fadeOutUp_1sox3_1";
var fadeOutLeft = "_fadeOutLeft_1sox3_1";
var fadeOutRight = "_fadeOutRight_1sox3_1";
var ping = "_ping_1sox3_1";
var blinkBackground = "_blinkBackground_1sox3_1";
var typingBlink = "_typingBlink_1sox3_1";
var TemplatesCollectionView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	notFound,
	title,
	button,
	mainContent,
	markdown,
	details,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1sox3_1",
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
var TemplatesCollectionView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplatesCollectionView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesCollectionView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TemplatesCollectionView_default as default };
