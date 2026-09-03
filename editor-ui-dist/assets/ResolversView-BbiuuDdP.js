import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { n as Primitive } from "./VisuallyHidden-lv4qVqRn.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { g as END_USER_CREDENTIALS_DOCS_URL } from "./constants-DPRLSskW.js";
import { t as require_dateformat } from "./dateformat-DxkxG_VE.js";
import { t as TimeAgo_default } from "./TimeAgo-DdOhC6Ae.js";
import { t as useCredentialResolvers } from "./useCredentialResolvers-GSTyUwhi.js";
//#region ../@n8n/design-system/src/v2/components/Loading/Loading.vue?vue&type=script&setup=true&lang.ts
var Loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Loading",
	props: {
		animated: {
			type: Boolean,
			default: true
		},
		loading: {
			type: Boolean,
			default: true
		},
		rows: { default: 1 },
		cols: { default: 0 },
		shrinkLast: {
			type: Boolean,
			default: true
		},
		variant: { default: "p" }
	},
	setup(__props) {
		const props = __props;
		const isLastRowShrunk = computed(() => props.shrinkLast && props.rows > 1);
		const showH1Layout = computed(() => props.variant === "h1" && !props.cols);
		const showPLayout = computed(() => props.variant === "p" && !props.cols);
		const showCustomLayout = computed(() => props.variant === "custom" && !props.cols);
		const showColsLayout = computed(() => props.cols > 0);
		const showDefaultLayout = computed(() => !showH1Layout.value && !showPLayout.value && !showCustomLayout.value && !showColsLayout.value);
		function isLastRow(index, total) {
			return index === total - 1;
		}
		return (_ctx, _cache) => {
			return __props.loading ? (openBlock(), createBlock(unref(Primitive), {
				key: 0,
				as: "div",
				class: normalizeClass([
					"n8n-loading",
					`n8n-loading-${__props.variant}`,
					"el-skeleton",
					_ctx.$style.loading
				]),
				"aria-hidden": "true"
			}, {
				default: withCtx(() => [showColsLayout.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.cols, (i) => {
					return openBlock(), createElementBlock("div", {
						key: `col-${i}`,
						class: normalizeClass([
							_ctx.$style.item,
							_ctx.$style[__props.variant],
							{ [_ctx.$style.animated]: __props.animated }
						])
					}, null, 2);
				}), 128)) : showH1Layout.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.rowContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (_, index) => {
					return openBlock(), createElementBlock("div", {
						key: `h1-${index}`,
						class: normalizeClass({ [_ctx.$style.h1Last]: isLastRow(index, __props.rows) && isLastRowShrunk.value })
					}, [createBaseVNode("div", { class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.h1,
						{ [_ctx.$style.animated]: __props.animated }
					]) }, null, 2)], 2);
				}), 128))], 2)) : showPLayout.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.rowContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (_, index) => {
					return openBlock(), createElementBlock("div", {
						key: `p-${index}`,
						class: normalizeClass({ [_ctx.$style.pLast]: isLastRow(index, __props.rows) && isLastRowShrunk.value })
					}, [createBaseVNode("div", { class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.p,
						{ [_ctx.$style.animated]: __props.animated }
					]) }, null, 2)], 2);
				}), 128))], 2)) : showCustomLayout.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.custom,
						{ [_ctx.$style.animated]: __props.animated }
					])
				}, null, 2)) : showDefaultLayout.value ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style[__props.variant],
						{ [_ctx.$style.animated]: __props.animated }
					])
				}, null, 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/v2/components/Loading/Loading.vue?vue&type=style&index=0&lang.module.scss
var loading = "_loading_1ooe7_388";
var rowContainer = "_rowContainer_1ooe7_392";
var item = "_item_1ooe7_397";
var animated = "_animated_1ooe7_402";
var p = "_p_1ooe7_412";
var h1 = "_h1_1ooe7_417";
var h3 = "_h3_1ooe7_422";
var text = "_text_1ooe7_426";
var caption = "_caption_1ooe7_431";
var button = "_button_1ooe7_435";
var image = "_image_1ooe7_441";
var circle = "_circle_1ooe7_446";
var rect = "_rect_1ooe7_452";
var custom = "_custom_1ooe7_457";
var h1Last = "_h1Last_1ooe7_462";
var pLast = "_pLast_1ooe7_466";
var shimmer = "_shimmer_1ooe7_1";
var spin = "_spin_1ooe7_1";
var opacityPulse = "_opacityPulse_1ooe7_1";
var popoverIn = "_popoverIn_1ooe7_1";
var fadeIn = "_fadeIn_1ooe7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ooe7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ooe7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ooe7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ooe7_1";
var blurSwapIn = "_blurSwapIn_1ooe7_1";
var blurSwapOut = "_blurSwapOut_1ooe7_1";
var pulseGlow = "_pulseGlow_1ooe7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ooe7_1";
var fade = "_fade_1ooe7_1";
var fadeInUp = "_fadeInUp_1ooe7_1";
var fadeInDown = "_fadeInDown_1ooe7_1";
var fadeInLeft = "_fadeInLeft_1ooe7_1";
var fadeInRight = "_fadeInRight_1ooe7_1";
var fadeOut = "_fadeOut_1ooe7_1";
var fadeOutDown = "_fadeOutDown_1ooe7_1";
var fadeOutUp = "_fadeOutUp_1ooe7_1";
var fadeOutLeft = "_fadeOutLeft_1ooe7_1";
var fadeOutRight = "_fadeOutRight_1ooe7_1";
var ping = "_ping_1ooe7_1";
var blinkBackground = "_blinkBackground_1ooe7_1";
var typingBlink = "_typingBlink_1ooe7_1";
var Loading_vue_vue_type_style_index_0_lang_module_default = {
	loading,
	rowContainer,
	item,
	animated,
	"skeleton-pulse": "_skeleton-pulse_1ooe7_1",
	p,
	h1,
	h3,
	text,
	caption,
	button,
	image,
	circle,
	rect,
	custom,
	h1Last,
	pLast,
	shimmer,
	spin,
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
var Loading_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Loading_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Loading_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/resolvers/ResolversView.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1 = { key: 1 };
var _hoisted_2 = { key: 2 };
var ResolversView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResolversView",
	setup(__props) {
		const i18n = useI18n();
		const { resolvers, resolverTypes, isLoading, fetchResolvers, fetchResolverTypes, deleteResolver, openCreateModal, openEditModal } = useCredentialResolvers();
		const RESOLVER_LIST_ITEM_ACTIONS = {
			EDIT: "edit",
			DELETE: "delete"
		};
		onMounted(async () => {
			await Promise.all([fetchResolvers(), fetchResolverTypes()]);
		});
		const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
		function getDateFormat(date) {
			return `d mmmm${String(date).startsWith(currentYear) ? "" : ", yyyy"}`;
		}
		const actions = computed(() => {
			return [{
				label: i18n.baseText("credentialResolver.action.edit"),
				value: RESOLVER_LIST_ITEM_ACTIONS.EDIT
			}, {
				label: i18n.baseText("credentialResolver.action.delete"),
				value: RESOLVER_LIST_ITEM_ACTIONS.DELETE
			}];
		});
		function createResolver() {
			openCreateModal();
		}
		function editResolver(resolver) {
			openEditModal(resolver.id);
		}
		async function handleDeleteResolver(resolver) {
			if (await deleteResolver(resolver)) fetchResolvers();
		}
		async function onAction(action, resolver) {
			switch (action) {
				case RESOLVER_LIST_ITEM_ACTIONS.EDIT:
					editResolver(resolver);
					break;
				case RESOLVER_LIST_ITEM_ACTIONS.DELETE:
					await handleDeleteResolver(resolver);
					break;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(["mb-xl", _ctx.$style.headerContainer]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [createVNode(unref(N8nHeading_default), {
				tag: "h1",
				size: "2xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.view.title")), 1)]),
				_: 1
			}), unref(resolvers).length ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				color: "text-base",
				size: "medium"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.view.description")) + " " + toDisplayString(unref(i18n).baseText("credentialResolver.view.learnMore")) + " ", 1), createVNode(unref(N8nLink_default), {
					theme: "text",
					href: unref(END_USER_CREDENTIALS_DOCS_URL),
					size: "medium",
					"new-window": ""
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.link) }, [createTextVNode(toDisplayString(unref(i18n).baseText("generic.documentation")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "arrow-up-right" })], 2)]),
					_: 1
				}, 8, ["href"])]),
				_: 1
			})) : createCommentVNode("", true)], 2)], 2), unref(isLoading) && unref(resolvers).length === 0 ? (openBlock(), createBlock(unref(Loading_default), {
				key: 0,
				rows: 5,
				"shrink-last": false
			})) : unref(resolvers).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nEmptyState_default), {
				class: "mt-2xl mb-l",
				description: "yes"
			}, {
				description: withCtx(() => [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCardContainer) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), { icon: "key-round" })], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), { icon: "split" })], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), { icon: "user" })], 2)
					], 2),
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						size: "medium",
						align: "center",
						class: "mb-2xs"
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode(" Resolve end-user credentials from user identity ", -1)])]),
						_: 1
					}),
					createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("credentialResolver.view.description")), 1)
				]),
				additionalContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					class: "mr-2xs n8n-button--highlight",
					href: unref(END_USER_CREDENTIALS_DOCS_URL),
					target: "_blank"
				}, {
					default: withCtx(() => [_cache[1] || (_cache[1] = createTextVNode(" Learn more ", -1)), createVNode(unref(N8nIcon_default), { icon: "arrow-up-right" })]),
					_: 1
				}, 8, ["href"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					onClick: createResolver
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.addNew")), 1)]),
					_: 1
				})]),
				_: 1
			})])) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionBar) }, [createVNode(unref(N8nButton_default), {
				variant: "solid",
				class: "ml-auto",
				icon: "plus",
				onClick: createResolver
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.addNew")), 1)]),
				_: 1
			})], 2), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(resolvers), (resolver) => {
				return openBlock(), createBlock(unref(N8nCard_default), {
					key: resolver.id,
					class: "mb-2xs",
					hoverable: "",
					onClick: withModifiers(($event) => editResolver(resolver), ["stop"])
				}, {
					prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "resolver",
						color: "text-dark",
						size: 28
					})]),
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						tag: "h2",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(resolver.name), 1)]),
						_: 2
					}, 1024)]),
					append: withCtx(() => [createVNode(unref(N8nActionToggle_default), {
						actions: actions.value,
						onAction: ($event) => onAction($event, resolver)
					}, null, 8, ["actions", "onAction"])]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(resolverTypes).find(({ name }) => name === resolver.type)?.displayName || resolver.type) + " | ", 1)]),
							_: 2
						}, 1024),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [
								createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.item.updated")) + " ", 1),
								createVNode(TimeAgo_default, { date: resolver.updatedAt.toString() }, null, 8, ["date"]),
								_cache[2] || (_cache[2] = createTextVNode(" | ", -1))
							]),
							_: 2
						}, 1024),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.item.created")) + " " + toDisplayString(unref(import_dateformat.default)(resolver.createdAt, getDateFormat(resolver.createdAt))), 1)]),
							_: 2
						}, 1024)
					], 2)]),
					_: 2
				}, 1032, ["onClick"]);
			}), 128))]))], 2);
		};
	}
});
var ResolversView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1gz34_2",
	headerContainer: "_headerContainer_1gz34_7",
	actionBar: "_actionBar_1gz34_13",
	headerTitle: "_headerTitle_1gz34_19",
	iconCardContainer: "_iconCardContainer_1gz34_25",
	iconCard: "_iconCard_1gz34_25",
	link: "_link_1gz34_57"
};
var ResolversView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResolversView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResolversView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ResolversView_default as default };
