import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bn as normalizeStyle, h as withModifiers, j as createVNode, m as withKeys, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { V as useNodeTypesStore, Vn as filterTemplateNodes } from "./workflows.store-Bo6ZgF_O.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { n as useDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { t as require_uniqBy } from "./uniqBy-D4nbu_Ia.js";
import { t as NodeIcon_default } from "./NodeIcon-IZ0wyAnH.js";
import { n as quickStartWorkflows, t as useResourceCenterStore } from "./resourceCenter.store-DQiRyrZ9.js";
//#region src/experiments/resourceCenter/components/ResourceCard.vue?vue&type=script&setup=true&lang.ts
var import_uniqBy = /* @__PURE__ */ __toESM(require_uniqBy(), 1);
var _hoisted_1$2 = ["onKeydown", "onKeyup"];
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { key: 2 };
var ResourceCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceCard",
	props: { item: {} },
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const emitClick = () => emit("click");
		const onCardKeyActivate = (event) => {
			if (event.target !== event.currentTarget) return;
			emitClick();
		};
		const tagLabel = computed(() => props.item.type === "video" ? i18n.baseText("experiments.resourceCenter.badge.video") : i18n.baseText("experiments.resourceCenter.badge.template"));
		const resolvedTemplateNodeTypes = computed(() => {
			if (props.item.type !== "template" || !props.item.nodeTypes?.length) return [];
			const allResolved = props.item.nodeTypes.map((type) => nodeTypesStore.getNodeType(type)).filter((nodeType) => nodeType !== null && nodeType !== void 0);
			const seenNodeNames = /* @__PURE__ */ new Set();
			return allResolved.filter((nodeType) => {
				if (seenNodeNames.has(nodeType.name)) return false;
				seenNodeNames.add(nodeType.name);
				return true;
			});
		});
		const visibleNodeTypes = computed(() => resolvedTemplateNodeTypes.value.slice(0, 3));
		const remainingNodeTypeCount = computed(() => Math.max(0, resolvedTemplateNodeTypes.value.length - visibleNodeTypes.value.length));
		const videoSourceLabel = computed(() => {
			if (props.item.type !== "video") return "";
			if (!props.item.url) return "youtube.com";
			try {
				return new URL(props.item.url).hostname.replace(/^www\./, "");
			} catch {
				return props.item.url;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("article", {
				class: normalizeClass(_ctx.$style.card),
				role: "button",
				tabindex: "0",
				"data-testid": "resource-card",
				onClick: emitClick,
				onKeydown: withKeys(withModifiers(onCardKeyActivate, ["prevent"]), ["enter"]),
				onKeyup: withKeys(withModifiers(onCardKeyActivate, ["prevent"]), ["space"])
			}, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.tag),
					"data-testid": "resource-card-badge"
				}, toDisplayString(tagLabel.value), 3),
				createBaseVNode("h3", {
					class: normalizeClass(_ctx.$style.title),
					"data-testid": "resource-card-title"
				}, toDisplayString(__props.item.title), 3),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.footer),
					"data-testid": "resource-card-metadata"
				}, [createBaseVNode("p", { class: normalizeClass(_ctx.$style.meta) }, [__props.item.type === "video" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(videoSourceLabel.value), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					__props.item.setupTime ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(__props.item.setupTime), 1)) : createCommentVNode("", true),
					__props.item.setupTime && __props.item.nodeCount ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.separator)
					}, "•", 2)) : createCommentVNode("", true),
					__props.item.nodeCount ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.sandbox.nodes", { interpolate: { count: String(__props.item.nodeCount) } })), 1)) : createCommentVNode("", true)
				], 64))], 2), visibleNodeTypes.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.iconStack)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleNodeTypes.value, (nodeType, index) => {
					return openBlock(), createElementBlock("span", {
						key: nodeType.name,
						class: normalizeClass(_ctx.$style.iconBubble),
						style: normalizeStyle({ zIndex: String(visibleNodeTypes.value.length - index + 1) })
					}, [createVNode(NodeIcon_default, {
						"node-type": nodeType,
						size: 12,
						circle: true
					}, null, 8, ["node-type"])], 6);
				}), 128)), remainingNodeTypeCount.value > 0 ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.countBubble),
					style: { zIndex: "1" }
				}, " +" + toDisplayString(remainingNodeTypeCount.value), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2)
			], 42, _hoisted_1$2);
		};
	}
});
//#endregion
//#region src/experiments/resourceCenter/components/ResourceCard.vue?vue&type=style&index=0&lang.module.scss
var card$1 = "_card_11nhl_388";
var tag = "_tag_11nhl_411";
var title$1 = "_title_11nhl_426";
var footer = "_footer_11nhl_439";
var meta = "_meta_11nhl_447";
var separator = "_separator_11nhl_458";
var iconStack = "_iconStack_11nhl_462";
var iconBubble = "_iconBubble_11nhl_470";
var countBubble = "_countBubble_11nhl_471";
var shimmer$2 = "_shimmer_11nhl_1";
var spin$2 = "_spin_11nhl_1";
var opacityPulse$2 = "_opacityPulse_11nhl_1";
var popoverIn$2 = "_popoverIn_11nhl_1";
var fadeIn$2 = "_fadeIn_11nhl_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_11nhl_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_11nhl_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_11nhl_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_11nhl_1";
var blurSwapIn$2 = "_blurSwapIn_11nhl_1";
var blurSwapOut$2 = "_blurSwapOut_11nhl_1";
var pulseGlow$2 = "_pulseGlow_11nhl_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_11nhl_1";
var fade$2 = "_fade_11nhl_1";
var fadeInUp$2 = "_fadeInUp_11nhl_1";
var fadeInDown$2 = "_fadeInDown_11nhl_1";
var fadeInLeft$2 = "_fadeInLeft_11nhl_1";
var fadeInRight$2 = "_fadeInRight_11nhl_1";
var fadeOut$2 = "_fadeOut_11nhl_1";
var fadeOutDown$2 = "_fadeOutDown_11nhl_1";
var fadeOutUp$2 = "_fadeOutUp_11nhl_1";
var fadeOutLeft$2 = "_fadeOutLeft_11nhl_1";
var fadeOutRight$2 = "_fadeOutRight_11nhl_1";
var ping$2 = "_ping_11nhl_1";
var blinkBackground$2 = "_blinkBackground_11nhl_1";
var typingBlink$2 = "_typingBlink_11nhl_1";
var ResourceCard_vue_vue_type_style_index_0_lang_module_default = {
	card: card$1,
	tag,
	title: title$1,
	footer,
	meta,
	separator,
	iconStack,
	iconBubble,
	countBubble,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_11nhl_1",
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
var ResourceCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResourceCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/resourceCenter/components/ResourceFeatureCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["onKeydown", "onKeyup"];
var ResourceFeatureCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceFeatureCard",
	props: {
		item: {},
		tone: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const toneClass = computed(() => props.tone === "amber" ? "toneAmber" : "toneRose");
		const isDarkTheme = computed(() => uiStore.appliedTheme === "dark");
		const emitClick = () => emit("click");
		const onCardKeyActivate = (event) => {
			if (event.target !== event.currentTarget) return;
			emitClick();
		};
		const resolvedArtworkNodeTypes = computed(() => {
			if (!props.item.nodeTypes?.length) return [];
			const seenNodeNames = /* @__PURE__ */ new Set();
			return props.item.nodeTypes.map((type) => nodeTypesStore.getNodeType(type)).filter((nodeType) => {
				if (nodeType === null || nodeType === void 0 || seenNodeNames.has(nodeType.name)) return false;
				seenNodeNames.add(nodeType.name);
				return true;
			}).slice(0, 4);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("article", {
				class: normalizeClass([
					_ctx.$style.card,
					_ctx.$style[toneClass.value],
					{ [_ctx.$style.dark]: isDarkTheme.value }
				]),
				role: "button",
				tabindex: "0",
				"data-testid": "resource-feature-card",
				onClick: emitClick,
				onKeydown: withKeys(withModifiers(onCardKeyActivate, ["prevent"]), ["enter"]),
				onKeyup: withKeys(withModifiers(onCardKeyActivate, ["prevent"]), ["space"])
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.copy) }, [createBaseVNode("h2", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(__props.item.title), 3), createBaseVNode("p", { class: normalizeClass(_ctx.$style.subtitle) }, toDisplayString(unref(i18n).baseText("templates.card.readyToRun")), 3)], 2), createBaseVNode("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.runButton),
				onClick: withModifiers(emitClick, ["stop"])
			}, [createVNode(unref(N8nIcon_default), {
				icon: "play",
				size: "xsmall"
			}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.output.run")), 1)], 2)], 2), createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.artwork),
				"aria-hidden": "true"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(resolvedArtworkNodeTypes.value, (nodeType, index) => {
				return openBlock(), createElementBlock("div", {
					key: nodeType.name,
					class: normalizeClass([_ctx.$style.artTile, _ctx.$style[`artTile${index + 1}`]])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tileInner) }, [createVNode(NodeIcon_default, {
					"node-type": nodeType,
					size: index === 0 ? 64 : 58
				}, null, 8, ["node-type", "size"])], 2)], 2);
			}), 128))], 2)], 42, _hoisted_1$1);
		};
	}
});
//#endregion
//#region src/experiments/resourceCenter/components/ResourceFeatureCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_10yhm_388";
var dark$1 = "_dark_10yhm_436";
var toneAmber = "_toneAmber_10yhm_443";
var content$1 = "_content_10yhm_452";
var copy = "_copy_10yhm_463";
var title = "_title_10yhm_469";
var subtitle = "_subtitle_10yhm_482";
var runButton = "_runButton_10yhm_489";
var artwork = "_artwork_10yhm_510";
var artTile = "_artTile_10yhm_517";
var tileInner = "_tileInner_10yhm_529";
var artTile1 = "_artTile1_10yhm_537";
var artTile2 = "_artTile2_10yhm_545";
var artTile3 = "_artTile3_10yhm_553";
var artTile4 = "_artTile4_10yhm_561";
var shimmer$1 = "_shimmer_10yhm_1";
var spin$1 = "_spin_10yhm_1";
var opacityPulse$1 = "_opacityPulse_10yhm_1";
var popoverIn$1 = "_popoverIn_10yhm_1";
var fadeIn$1 = "_fadeIn_10yhm_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_10yhm_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_10yhm_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_10yhm_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_10yhm_1";
var blurSwapIn$1 = "_blurSwapIn_10yhm_1";
var blurSwapOut$1 = "_blurSwapOut_10yhm_1";
var pulseGlow$1 = "_pulseGlow_10yhm_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_10yhm_1";
var fade$1 = "_fade_10yhm_1";
var fadeInUp$1 = "_fadeInUp_10yhm_1";
var fadeInDown$1 = "_fadeInDown_10yhm_1";
var fadeInLeft$1 = "_fadeInLeft_10yhm_1";
var fadeInRight$1 = "_fadeInRight_10yhm_1";
var fadeOut$1 = "_fadeOut_10yhm_1";
var fadeOutDown$1 = "_fadeOutDown_10yhm_1";
var fadeOutUp$1 = "_fadeOutUp_10yhm_1";
var fadeOutLeft$1 = "_fadeOutLeft_10yhm_1";
var fadeOutRight$1 = "_fadeOutRight_10yhm_1";
var ping$1 = "_ping_10yhm_1";
var blinkBackground$1 = "_blinkBackground_10yhm_1";
var typingBlink$1 = "_typingBlink_10yhm_1";
var ResourceFeatureCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	dark: dark$1,
	toneAmber,
	content: content$1,
	copy,
	title,
	subtitle,
	runButton,
	artwork,
	artTile,
	tileInner,
	artTile1,
	artTile2,
	artTile3,
	artTile4,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_10yhm_1",
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
var ResourceFeatureCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResourceFeatureCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceFeatureCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/resourceCenter/data/resourceCenterData.ts
var getTemplateIds = (items) => items.flatMap((item) => item.type === "template" ? [item.templateId] : []);
var getInspiredContent = [
	{
		type: "template",
		templateId: 10427,
		title: "Analyse Facebook Ads automatically"
	},
	{
		type: "video",
		videoId: "jPea9Sp9xYQ",
		title: "OpenClaw clone in n8n",
		description: "Building an Open Claw Clone in n8n"
	},
	{
		type: "template",
		templateId: 7639,
		title: "Chat with your Google Sheet"
	},
	{
		type: "video",
		videoId: "A0OwvNOLNlw",
		title: "Whatsapp based AI agent",
		description: "Build an AI agent that works through WhatsApp",
		duration: "7 min"
	},
	{
		type: "template",
		templateId: 3050,
		title: "AI data analyst chatbot"
	},
	{
		type: "template",
		templateId: 4966,
		title: "Support WhatsApp bot with Google Docs knowledge base"
	},
	{
		type: "video",
		videoId: "k3mcttDLJB4",
		title: "Voice Agent",
		description: "Create a voice-powered AI agent",
		duration: "28 min"
	},
	{
		type: "template",
		templateId: 7177,
		title: "Inventory alerts for low stock & expiring"
	},
	{
		type: "video",
		videoId: "h7BLVKh7yzc",
		title: "Build an Outlook inbox manager",
		description: "Automate your email management with Outlook integration",
		duration: "32 min"
	},
	{
		type: "template",
		templateId: 8779,
		title: "Self Improving Email AI Support with Human in the Loop"
	},
	{
		type: "template",
		templateId: 3100,
		title: "Analyze Landing Page to get Optimization Tips"
	}
];
var learnContent = [
	{
		type: "template",
		templateId: 8527,
		title: "n8n basics in 3 easy steps"
	},
	{
		type: "video",
		videoId: "ZHH3sr234zY",
		title: "Build AI Agents & Automate Workflows (Masterclass)",
		description: "Comprehensive masterclass on building AI agents with n8n",
		duration: "1h 32 min",
		level: "Masterclass"
	},
	{
		type: "video",
		videoId: "4cQWJViybAQ",
		title: "Build your first workflow",
		description: "Get started with n8n by building your first workflow from scratch",
		duration: "15 min",
		level: "Beginner"
	},
	{
		type: "video",
		videoId: "OCO3aq3G0mk",
		title: "Get Claude to build workflows",
		description: "Build workflow from Claude directly in n8n using MCP and skills"
	},
	{
		type: "template",
		templateId: 6270,
		title: "Build your first AI agent"
	},
	{
		type: "video",
		videoId: "UIf-SlmMays",
		title: "Zero to Hero (Masterclass)",
		description: "Complete journey from beginner to advanced n8n user",
		duration: "3h 35 min",
		level: "Masterclass"
	},
	{
		type: "video",
		videoId: "kkrA7tGHYNo",
		title: "Basic workflow concepts",
		description: "Learn the fundamental concepts of n8n workflows",
		duration: "14 min",
		level: "Beginner"
	},
	{
		type: "video",
		videoId: "D9MIGseFB3g",
		title: "Essential nodes with use cases",
		description: "Learn the most important nodes and when to use them",
		duration: "24 min",
		level: "Masterclass"
	},
	{
		type: "video",
		videoId: "rCPXBkeBWCQ",
		title: "Nodes",
		description: "Understanding how nodes work in n8n workflows",
		duration: "13 min",
		level: "Beginner"
	},
	{
		type: "video",
		videoId: "zMy5yoA-ub8",
		title: "25 Tips & Tricks",
		description: "Power user tips and tricks to boost your productivity",
		duration: "15 min",
		level: "Masterclass"
	},
	{
		type: "video",
		videoId: "a5sJNwfZ528",
		title: "Using the AI workflow builder",
		description: "Learn how to use AI to build workflows faster",
		duration: "18 min",
		level: "Beginner"
	},
	{
		type: "video",
		videoId: "zcNB8L4_9mA",
		title: "Use test data (Pinning)",
		description: "Learn how to use pinning to test your workflows with sample data",
		duration: "7 min",
		level: "Beginner"
	},
	{
		type: "video",
		videoId: "kvEGWVMo-2c",
		title: "Connect any API with HTTP node",
		description: "Master API integrations using the HTTP Request node",
		duration: "5 min",
		level: "Intermediate"
	},
	{
		type: "video",
		videoId: "Gxe_RfCRH-o",
		title: "Fixing issues (Debugging)",
		description: "Learn how to debug and fix issues in your workflows",
		duration: "16 min",
		level: "Intermediate"
	},
	{
		type: "video",
		videoId: "bTF3tACqPRU",
		title: "Handling errors",
		description: "Set up error handling to make your workflows more robust",
		duration: "10 min",
		level: "Intermediate"
	}
];
var featuredTemplateIds = getTemplateIds(getInspiredContent);
var learnTemplateIds = getTemplateIds(learnContent);
//#endregion
//#region src/experiments/resourceCenter/views/ResourceCenterView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["value", "placeholder"];
var ResourceCenterView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceCenterView",
	setup(__props) {
		const READY_TO_RUN_ARTWORK_EXCLUDED_TYPES = new Set([
			"n8n-nodes-base.stickyNote",
			"n8n-nodes-base.manualTrigger",
			"n8n-nodes-base.set",
			"@n8n/n8n-nodes-langchain.memoryBufferWindow"
		]);
		const DEPRIORITIZED_TEMPLATE_CARD_NODE_PREFIXES = ["@n8n/n8n-nodes-langchain."];
		const i18n = useI18n();
		const router = useRouter();
		const uiStore = useUIStore();
		const resourceCenterStore = useResourceCenterStore();
		const featuredTemplates = ref([]);
		const learnTemplates = ref([]);
		const isLoading = ref(false);
		const searchQuery = ref("");
		const debouncedSearch = ref("");
		const searchPlaceholder = computed(() => i18n.baseText("experiments.resourceCenter.search.placeholder"));
		const isDarkTheme = computed(() => uiStore.appliedTheme === "dark");
		const onSearchInput = useDebounceFn((value) => {
			debouncedSearch.value = value;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const handleSearchInput = (event) => {
			if (!(event.target instanceof HTMLInputElement)) return;
			searchQuery.value = event.target.value;
			onSearchInput(event.target.value);
		};
		const matchesSearch = (item) => {
			if (!debouncedSearch.value) return true;
			return item.title.toLowerCase().includes(debouncedSearch.value.toLowerCase());
		};
		const filterItems = (items) => items.filter(matchesSearch);
		const getTemplateCardNodeTypes = (template) => {
			const filteredNodes = filterTemplateNodes(template.nodes ?? []);
			const preferredNodes = filteredNodes.filter((node) => !DEPRIORITIZED_TEMPLATE_CARD_NODE_PREFIXES.some((prefix) => node.name.startsWith(prefix)));
			const fallbackNodes = filteredNodes.filter((node) => DEPRIORITIZED_TEMPLATE_CARD_NODE_PREFIXES.some((prefix) => node.name.startsWith(prefix)));
			return (0, import_uniqBy.default)([...preferredNodes, ...fallbackNodes], (node) => node.icon).map((node) => node.name).filter((nodeName) => nodeName !== "");
		};
		const buildTemplateResourceItem = (template, section, title) => {
			const nodeCount = template.workflowInfo.nodeCount;
			return {
				id: template.id,
				type: "template",
				title,
				description: template.description ?? "",
				section,
				templateId: template.id,
				nodeTypes: getTemplateCardNodeTypes(template),
				nodeCount,
				setupTime: `${Math.max(5, Math.ceil(nodeCount / 3 * 5))} min`
			};
		};
		const buildOrderedSectionItems = (content, templatesById, section) => content.flatMap((entry) => {
			if (entry.type === "video") return [{
				id: entry.videoId,
				type: "video",
				title: entry.title,
				description: entry.description,
				section,
				videoId: entry.videoId,
				url: entry.url,
				duration: entry.duration,
				level: entry.level
			}];
			const template = templatesById.get(entry.templateId);
			return template ? [buildTemplateResourceItem(template, section, entry.title)] : [];
		});
		const featuredTemplatesById = computed(() => new Map(featuredTemplates.value.map((template) => [template.id, template])));
		const learnTemplatesById = computed(() => new Map(learnTemplates.value.map((template) => [template.id, template])));
		const getStartedItems = computed(() => quickStartWorkflows.map((workflow) => ({
			id: workflow.id,
			type: "ready-to-run",
			title: workflow.name,
			description: workflow.description,
			section: "quick-start",
			quickStartId: workflow.id,
			nodeTypes: [...new Set(workflow.workflow.nodes?.map((node) => node.type) ?? workflow.nodeTypes)].filter((nodeType) => !READY_TO_RUN_ARTWORK_EXCLUDED_TYPES.has(nodeType)),
			nodeCount: workflow.nodeCount
		})));
		const getInspiredItems = computed(() => buildOrderedSectionItems(getInspiredContent, featuredTemplatesById.value, "inspiration"));
		const learnItems = computed(() => buildOrderedSectionItems(learnContent, learnTemplatesById.value, "learn"));
		const filteredGetStarted = computed(() => filterItems(getStartedItems.value));
		const filteredGetInspired = computed(() => filterItems(getInspiredItems.value));
		const filteredLearn = computed(() => filterItems(learnItems.value));
		const hasResults = computed(() => filteredGetStarted.value.length > 0 || filteredGetInspired.value.length > 0 || filteredLearn.value.length > 0);
		const isSearching = computed(() => debouncedSearch.value !== "");
		const handleCardClick = (item) => {
			if (item.type === "ready-to-run" && item.quickStartId) {
				resourceCenterStore.trackTileClick("quick-start", "ready-to-run", item.quickStartId);
				resourceCenterStore.createAndOpenQuickStartWorkflow(item.quickStartId);
				return;
			}
			if (item.type === "video") {
				const section = item.section ?? "learn";
				resourceCenterStore.trackTileClick(section, "video", item.id);
				const url = item.url ?? `https://www.youtube.com/watch?v=${item.videoId}`;
				window.open(url, "_blank", "noopener,noreferrer");
				return;
			}
			if (item.type === "template" && item.templateId) {
				const section = item.section ?? "learn";
				resourceCenterStore.trackTileClick(section, "template", item.templateId);
				router.push(resourceCenterStore.getTemplateRoute(item.templateId));
			}
		};
		const loadAllTemplates = async () => {
			isLoading.value = true;
			try {
				const [featured, learn] = await Promise.all([resourceCenterStore.loadTemplates(featuredTemplateIds), resourceCenterStore.loadTemplates(learnTemplateIds)]);
				featuredTemplates.value = featured;
				learnTemplates.value = learn;
			} finally {
				isLoading.value = false;
			}
		};
		const documentTitle = useDocumentTitle();
		onMounted(() => {
			documentTitle.set("Resource Center");
			resourceCenterStore.trackResourceCenterView();
			loadAllTemplates();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.container, { [_ctx.$style.dark]: isDarkTheme.value }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("h1", { class: normalizeClass(_ctx.$style.pageTitle) }, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.title")), 3), createBaseVNode("label", { class: normalizeClass(_ctx.$style.searchInput) }, [createVNode(unref(N8nIcon_default), {
				icon: "search",
				size: "small",
				class: normalizeClass(_ctx.$style.searchIcon)
			}, null, 8, ["class"]), createBaseVNode("input", {
				type: "text",
				value: searchQuery.value,
				placeholder: searchPlaceholder.value,
				class: normalizeClass(_ctx.$style.searchField),
				"data-testid": "resource-center-search",
				onInput: handleSearchInput
			}, null, 42, _hoisted_1)], 2)], 2), !isLoading.value && isSearching.value && !hasResults.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.noResults)
			}, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.search.noResults")), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				filteredGetStarted.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.heroGrid)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredGetStarted.value, (item, index) => {
					return openBlock(), createBlock(ResourceFeatureCard_default, {
						key: item.id,
						item,
						tone: index % 2 === 0 ? "rose" : "amber",
						onClick: ($event) => handleCardClick(item)
					}, null, 8, [
						"item",
						"tone",
						"onClick"
					]);
				}), 128))], 2)) : createCommentVNode("", true),
				filteredGetInspired.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 1,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.getInspired.title")), 3), isLoading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nSpinner_default), { size: "small" })], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.grid)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredGetInspired.value, (item) => {
					return openBlock(), createBlock(ResourceCard_default, {
						key: item.id,
						item,
						onClick: ($event) => handleCardClick(item)
					}, null, 8, ["item", "onClick"]);
				}), 128))], 2))], 2)) : createCommentVNode("", true),
				filteredLearn.value.length > 0 ? (openBlock(), createElementBlock("section", {
					key: 2,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("workflows.empty.learnN8n")), 3), isLoading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nSpinner_default), { size: "small" })], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.grid)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredLearn.value, (item) => {
					return openBlock(), createBlock(ResourceCard_default, {
						key: item.id,
						item,
						onClick: ($event) => handleCardClick(item)
					}, null, 8, ["item", "onClick"]);
				}), 128))], 2))], 2)) : createCommentVNode("", true)
			], 64))], 2)], 2);
		};
	}
});
//#endregion
//#region src/experiments/resourceCenter/views/ResourceCenterView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_18ed2_388";
var dark = "_dark_18ed2_430";
var content = "_content_18ed2_455";
var header = "_header_18ed2_464";
var pageTitle = "_pageTitle_18ed2_472";
var searchInput = "_searchInput_18ed2_480";
var searchIcon = "_searchIcon_18ed2_487";
var searchField = "_searchField_18ed2_496";
var heroGrid = "_heroGrid_18ed2_518";
var section = "_section_18ed2_525";
var sectionTitle = "_sectionTitle_18ed2_532";
var grid = "_grid_18ed2_544";
var loading = "_loading_18ed2_550";
var noResults = "_noResults_18ed2_557";
var shimmer = "_shimmer_18ed2_1";
var spin = "_spin_18ed2_1";
var opacityPulse = "_opacityPulse_18ed2_1";
var popoverIn = "_popoverIn_18ed2_1";
var fadeIn = "_fadeIn_18ed2_1";
var collapsibleSlideDown = "_collapsibleSlideDown_18ed2_1";
var collapsibleSlideUp = "_collapsibleSlideUp_18ed2_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_18ed2_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_18ed2_1";
var blurSwapIn = "_blurSwapIn_18ed2_1";
var blurSwapOut = "_blurSwapOut_18ed2_1";
var pulseGlow = "_pulseGlow_18ed2_1";
var pulseGlowDelayed = "_pulseGlowDelayed_18ed2_1";
var fade = "_fade_18ed2_1";
var fadeInUp = "_fadeInUp_18ed2_1";
var fadeInDown = "_fadeInDown_18ed2_1";
var fadeInLeft = "_fadeInLeft_18ed2_1";
var fadeInRight = "_fadeInRight_18ed2_1";
var fadeOut = "_fadeOut_18ed2_1";
var fadeOutDown = "_fadeOutDown_18ed2_1";
var fadeOutUp = "_fadeOutUp_18ed2_1";
var fadeOutLeft = "_fadeOutLeft_18ed2_1";
var fadeOutRight = "_fadeOutRight_18ed2_1";
var ping = "_ping_18ed2_1";
var blinkBackground = "_blinkBackground_18ed2_1";
var typingBlink = "_typingBlink_18ed2_1";
var ResourceCenterView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	dark,
	content,
	header,
	pageTitle,
	searchInput,
	searchIcon,
	searchField,
	heroGrid,
	section,
	sectionTitle,
	grid,
	loading,
	noResults,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_18ed2_1",
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
var ResourceCenterView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResourceCenterView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceCenterView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ResourceCenterView_default as default };
