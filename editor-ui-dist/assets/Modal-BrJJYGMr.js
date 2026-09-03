import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, bn as normalizeStyle, bt as withCtx, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, q as onBeforeUnmount, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as ElDialog } from "./dialog-BWWCBb2k.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { O as APP_MODALS_ELEMENT_ID } from "./constants-DPRLSskW.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { t as useStyles } from "./useStyles-BreHshnR.js";
//#region src/app/components/Modal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var Modal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Modal",
	props: {
		name: {},
		title: { default: "" },
		subtitle: { default: "" },
		eventBus: {},
		showClose: {
			type: Boolean,
			default: true
		},
		loading: {
			type: Boolean,
			default: false
		},
		classic: {
			type: Boolean,
			default: false
		},
		beforeClose: {},
		customClass: { default: "" },
		overlayClass: { default: "" },
		center: {
			type: Boolean,
			default: true
		},
		width: { default: "50%" },
		minWidth: {},
		maxWidth: {},
		height: {},
		minHeight: {},
		maxHeight: {},
		scrollable: {
			type: Boolean,
			default: false
		},
		centerTitle: {
			type: Boolean,
			default: false
		},
		closeOnClickModal: {
			type: Boolean,
			default: true
		},
		closeOnPressEscape: {
			type: Boolean,
			default: true
		},
		appendToBody: {
			type: Boolean,
			default: false
		},
		lockScroll: {
			type: Boolean,
			default: true
		}
	},
	emits: ["enter"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { APP_Z_INDEXES } = useStyles();
		const styles = computed(() => {
			const styles = {};
			if (props.height) styles["--dialog--height"] = props.height;
			if (props.minHeight) styles["--dialog--min-height"] = props.minHeight;
			if (props.maxHeight) styles["--dialog--max-height"] = props.maxHeight;
			if (props.maxWidth) styles["--dialog--max-width"] = props.maxWidth;
			if (props.minWidth) styles["--dialog--min-width"] = props.minWidth;
			return styles;
		});
		const appModalsId = `#${APP_MODALS_ELEMENT_ID}`;
		onMounted(() => {
			window.addEventListener("keydown", onWindowKeydown);
			props.eventBus?.on("close", closeDialog);
			const activeElement = document.activeElement;
			if (activeElement && uiStore.modalsById[props.name]?.open) activeElement.blur();
		});
		onBeforeUnmount(() => {
			props.eventBus?.off("close", closeDialog);
			window.removeEventListener("keydown", onWindowKeydown);
		});
		const uiStore = useUIStore();
		function handleEnter() {
			if (!uiStore.isModalActiveById[props.name]) return;
			emit("enter");
		}
		function onOpened() {
			props.eventBus?.emit("opened");
		}
		function onWindowKeydown(event) {
			if (event?.keyCode === 13) handleEnter();
		}
		async function closeDialog(returnData) {
			if (props.beforeClose) {
				if (await props.beforeClose() === false) return;
			}
			uiStore.closeModal(props.name);
			props.eventBus?.emit("closed", returnData);
		}
		async function onCloseDialog() {
			await closeDialog();
		}
		function getCustomClass() {
			let classes = props.customClass || "";
			if (props.classic) classes = `${classes} classic`;
			return classes;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				"model-value": unref(uiStore).modalsById[__props.name]?.open,
				"before-close": onCloseDialog,
				class: normalizeClass({
					"dialog-wrapper": true,
					scrollable: __props.scrollable,
					[getCustomClass()]: true
				}),
				center: __props.center,
				width: __props.width,
				"show-close": __props.showClose,
				"close-on-click-modal": __props.closeOnClickModal,
				"close-on-press-escape": __props.closeOnPressEscape,
				style: normalizeStyle(styles.value),
				"append-to": __props.appendToBody ? void 0 : appModalsId,
				"lock-scroll": __props.lockScroll,
				"append-to-body": __props.appendToBody,
				"data-test-id": `${__props.name}-modal`,
				"modal-class": [__props.center ? _ctx.$style.center : "", __props.overlayClass].filter(Boolean).join(" "),
				"z-index": unref(APP_Z_INDEXES).MODALS,
				onOpened
			}, createSlots({
				default: withCtx(() => [createBaseVNode("div", {
					class: "modal-content",
					onKeydown: [
						_cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
						withKeys(handleEnter, ["enter"]),
						withKeys(onCloseDialog, ["esc"])
					]
				}, [!__props.loading ? renderSlot(_ctx.$slots, "content", { key: 0 }) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.loader)
				}, [createVNode(unref(N8nSpinner_default))], 2))], 32), !__props.loading && _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, [renderSlot(_ctx.$slots, "footer", { close: closeDialog })], 2)) : createCommentVNode("", true)]),
				_: 2
			}, [_ctx.$slots.header ? {
				name: "header",
				fn: withCtx(() => [!__props.loading ? renderSlot(_ctx.$slots, "header", normalizeProps(mergeProps({ key: 0 }, { closeDialog }))) : createCommentVNode("", true)]),
				key: "0"
			} : __props.title ? {
				name: "title",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(__props.centerTitle ? _ctx.$style.centerTitle : "") }, [__props.title ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				})])) : createCommentVNode("", true), __props.subtitle ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.subtitle)
				}, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.subtitle), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)], 2)]),
				key: "1"
			} : void 0]), 1032, [
				"model-value",
				"class",
				"center",
				"width",
				"show-close",
				"close-on-click-modal",
				"close-on-press-escape",
				"style",
				"append-to",
				"lock-scroll",
				"append-to-body",
				"data-test-id",
				"modal-class",
				"z-index"
			]);
		};
	}
});
//#endregion
//#region src/app/components/Modal.vue?vue&type=style&index=1&lang.module.scss
var center = "_center_o3zzt_388";
var loader = "_loader_o3zzt_392";
var centerTitle = "_centerTitle_o3zzt_401";
var subtitle = "_subtitle_o3zzt_405";
var footer = "_footer_o3zzt_409";
var shimmer = "_shimmer_o3zzt_1";
var spin = "_spin_o3zzt_1";
var opacityPulse = "_opacityPulse_o3zzt_1";
var popoverIn = "_popoverIn_o3zzt_1";
var fadeIn = "_fadeIn_o3zzt_1";
var collapsibleSlideDown = "_collapsibleSlideDown_o3zzt_1";
var collapsibleSlideUp = "_collapsibleSlideUp_o3zzt_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_o3zzt_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_o3zzt_1";
var blurSwapIn = "_blurSwapIn_o3zzt_1";
var blurSwapOut = "_blurSwapOut_o3zzt_1";
var pulseGlow = "_pulseGlow_o3zzt_1";
var pulseGlowDelayed = "_pulseGlowDelayed_o3zzt_1";
var fade = "_fade_o3zzt_1";
var fadeInUp = "_fadeInUp_o3zzt_1";
var fadeInDown = "_fadeInDown_o3zzt_1";
var fadeInLeft = "_fadeInLeft_o3zzt_1";
var fadeInRight = "_fadeInRight_o3zzt_1";
var fadeOut = "_fadeOut_o3zzt_1";
var fadeOutDown = "_fadeOutDown_o3zzt_1";
var fadeOutUp = "_fadeOutUp_o3zzt_1";
var fadeOutLeft = "_fadeOutLeft_o3zzt_1";
var fadeOutRight = "_fadeOutRight_o3zzt_1";
var ping = "_ping_o3zzt_1";
var blinkBackground = "_blinkBackground_o3zzt_1";
var typingBlink = "_typingBlink_o3zzt_1";
var Modal_vue_vue_type_style_index_1_lang_module_default = {
	center,
	loader,
	centerTitle,
	subtitle,
	footer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_o3zzt_1",
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
var Modal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Modal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Modal_vue_vue_type_style_index_1_lang_module_default }]]);
//#endregion
export { Modal_default as t };
