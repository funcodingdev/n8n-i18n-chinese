import { $ as openBlock, C as createBaseVNode, It as ref, N as defineComponent, S as computed, bn as normalizeStyle, bt as withCtx, it as renderSlot, p as vShow, q as onBeforeUnmount, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, xt as withDirectives, y as Teleport } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { d as isPresent } from "./typesUtils-XxdBySCt.js";
//#region src/app/components/Draggable.vue?vue&type=script&setup=true&lang.ts
var Draggable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Draggable",
	props: {
		type: {},
		data: { default: null },
		tag: { default: "div" },
		targetDataKey: { default: null },
		disabled: {
			type: Boolean,
			default: false
		},
		canDrop: {
			type: Boolean,
			default: false
		},
		stickyPosition: { default: null },
		dragThreshold: { default: 10 }
	},
	emits: [
		"drag",
		"dragstart",
		"dragend"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const isDragging = ref(false);
		const draggingElement = ref();
		const draggablePosition = ref([0, 0]);
		const animationFrameId = ref();
		const dragStartPosition = ref(null);
		const draggableStyle = computed(() => ({ transform: `translate(${draggablePosition.value[0]}px, ${draggablePosition.value[1]}px)` }));
		const onDragStart = (event) => {
			if (props.disabled || event.buttons !== 1) return;
			draggingElement.value = event.target;
			if (props.targetDataKey && draggingElement.value.dataset?.target !== props.targetDataKey) draggingElement.value = draggingElement.value.closest(`[data-target="${props.targetDataKey}"]`);
			if (props.targetDataKey && draggingElement.value?.dataset?.target !== props.targetDataKey) return;
			event.preventDefault();
			event.stopPropagation();
			isDragging.value = false;
			dragStartPosition.value = [event.pageX, event.pageY];
			draggablePosition.value = [event.pageX, event.pageY];
			window.addEventListener("mousemove", onDrag);
			window.addEventListener("mouseup", onDragEnd);
			const activeElement = document.activeElement;
			if (activeElement) activeElement.blur();
		};
		const onDrag = (event) => {
			event.preventDefault();
			event.stopPropagation();
			if (props.disabled) return;
			if (!isDragging.value && draggingElement.value) {
				if (dragStartPosition.value && props.dragThreshold > 0) {
					const dx = event.pageX - dragStartPosition.value[0];
					const dy = event.pageY - dragStartPosition.value[1];
					if (Math.sqrt(dx * dx + dy * dy) < props.dragThreshold) return;
				}
				isDragging.value = true;
				const data = props.targetDataKey ? draggingElement.value.dataset.value : props.data ?? "";
				emit("dragstart", draggingElement.value, data);
				document.body.style.cursor = "grabbing";
			}
			animationFrameId.value = window.requestAnimationFrame(() => {
				if (props.canDrop && props.stickyPosition) draggablePosition.value = props.stickyPosition;
				else draggablePosition.value = [event.pageX, event.pageY];
				emit("drag", draggablePosition.value);
			});
		};
		const onDragEnd = () => {
			if (props.disabled) return;
			document.body.style.cursor = "unset";
			window.removeEventListener("mousemove", onDrag);
			window.removeEventListener("mouseup", onDragEnd);
			if (isPresent(animationFrameId.value)) window.cancelAnimationFrame(animationFrameId.value);
			setTimeout(() => {
				if (isDragging.value && draggingElement.value) emit("dragend", draggingElement.value);
				isDragging.value = false;
				draggingElement.value = void 0;
				dragStartPosition.value = null;
			});
		};
		onBeforeUnmount(() => {
			if (isDragging.value && draggingElement.value) emit("dragend", draggingElement.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
				ref: "wrapper",
				class: normalizeClass({ [_ctx.$style.dragging]: isDragging.value }),
				"data-test-id": "draggable",
				onMousedown: onDragStart
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { isDragging: isDragging.value }), (openBlock(), createBlock(Teleport, { to: "body" }, [withDirectives(createBaseVNode("div", {
					ref: "draggable",
					class: normalizeClass(_ctx.$style.draggable),
					style: normalizeStyle(draggableStyle.value)
				}, [renderSlot(_ctx.$slots, "preview", {
					canDrop: __props.canDrop,
					el: draggingElement.value
				})], 6), [[vShow, isDragging.value]])]))]),
				_: 3
			}, 40, ["class"]);
		};
	}
});
//#endregion
//#region src/app/components/Draggable.vue?vue&type=style&index=0&lang.module.scss
var dragging = "_dragging_1gx9n_388";
var draggable = "_draggable_1gx9n_393";
var shimmer = "_shimmer_1gx9n_1";
var spin = "_spin_1gx9n_1";
var opacityPulse = "_opacityPulse_1gx9n_1";
var popoverIn = "_popoverIn_1gx9n_1";
var fadeIn = "_fadeIn_1gx9n_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1gx9n_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1gx9n_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1gx9n_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1gx9n_1";
var blurSwapIn = "_blurSwapIn_1gx9n_1";
var blurSwapOut = "_blurSwapOut_1gx9n_1";
var pulseGlow = "_pulseGlow_1gx9n_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1gx9n_1";
var fade = "_fade_1gx9n_1";
var fadeInUp = "_fadeInUp_1gx9n_1";
var fadeInDown = "_fadeInDown_1gx9n_1";
var fadeInLeft = "_fadeInLeft_1gx9n_1";
var fadeInRight = "_fadeInRight_1gx9n_1";
var fadeOut = "_fadeOut_1gx9n_1";
var fadeOutDown = "_fadeOutDown_1gx9n_1";
var fadeOutUp = "_fadeOutUp_1gx9n_1";
var fadeOutLeft = "_fadeOutLeft_1gx9n_1";
var fadeOutRight = "_fadeOutRight_1gx9n_1";
var ping = "_ping_1gx9n_1";
var blinkBackground = "_blinkBackground_1gx9n_1";
var typingBlink = "_typingBlink_1gx9n_1";
var Draggable_vue_vue_type_style_index_0_lang_module_default = {
	dragging,
	draggable,
	"draggable-data-transfer": "_draggable-data-transfer_1gx9n_401",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1gx9n_1",
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
var Draggable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Draggable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Draggable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Draggable_default as t };
