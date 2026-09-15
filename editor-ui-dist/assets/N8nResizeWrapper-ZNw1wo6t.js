import { $ as openBlock, E as createElementBlock, It as ref, N as defineComponent, S as computed, _ as Fragment, it as renderSlot, q as onBeforeUnmount, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/types/resize.ts
var directionsCursorMaps = {
	right: "col-resize",
	top: "row-resize",
	bottom: "row-resize",
	left: "col-resize",
	topLeft: "nw-resize",
	topRight: "ne-resize",
	bottomLeft: "sw-resize",
	bottomRight: "se-resize"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nResizeWrapper/ResizeWrapper.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-dir"];
var ResizeWrapper_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResizeWrapper",
	props: {
		isResizingEnabled: {
			type: Boolean,
			default: true
		},
		height: { default: 0 },
		width: { default: 0 },
		minHeight: { default: 0 },
		maxHeight: { default: Number.POSITIVE_INFINITY },
		minWidth: { default: 0 },
		maxWidth: { default: Number.POSITIVE_INFINITY },
		scale: { default: 1 },
		gridSize: { default: 20 },
		supportedDirections: { default: () => [] },
		window: { default: void 0 }
	},
	emits: [
		"resizestart",
		"resize",
		"resizeend"
	],
	setup(__props, { emit: __emit }) {
		function closestNumber(value, divisor) {
			const q = value / divisor;
			const n1 = divisor * q;
			const n2 = value * divisor > 0 ? divisor * (q + 1) : divisor * (q - 1);
			if (Math.abs(value - n1) < Math.abs(value - n2)) return n1;
			return n2;
		}
		function getSize(min, virtual, gridSize, max) {
			if (virtual <= 0) return min;
			const target = closestNumber(virtual, gridSize);
			if (target <= min) return min;
			if (target >= max) return max;
			return target;
		}
		const props = __props;
		const emit = __emit;
		const enabledDirections = computed(() => {
			const availableDirections = Object.keys(directionsCursorMaps);
			if (!props.isResizingEnabled) return [];
			if (props.supportedDirections.length === 0) return availableDirections;
			return props.supportedDirections;
		});
		const state = {
			dir: ref(""),
			dHeight: ref(0),
			dWidth: ref(0),
			vHeight: ref(0),
			vWidth: ref(0),
			x: ref(0),
			y: ref(0)
		};
		const activeDirection = computed(() => state.dir.value);
		const mouseMove = (event) => {
			event.preventDefault();
			event.stopPropagation();
			let dWidth = 0;
			let dHeight = 0;
			let top = false;
			let left = false;
			if (state.dir.value.includes("right")) dWidth = event.pageX - state.x.value;
			if (state.dir.value.includes("left")) {
				dWidth = state.x.value - event.pageX;
				left = true;
			}
			if (state.dir.value.includes("top")) {
				dHeight = state.y.value - event.pageY;
				top = true;
			}
			if (state.dir.value.includes("bottom")) dHeight = event.pageY - state.y.value;
			const deltaWidth = (dWidth - state.dWidth.value) / props.scale;
			const deltaHeight = (dHeight - state.dHeight.value) / props.scale;
			state.vHeight.value = state.vHeight.value + deltaHeight;
			state.vWidth.value = state.vWidth.value + deltaWidth;
			const height = getSize(props.minHeight, state.vHeight.value, props.gridSize, props.maxHeight);
			const width = getSize(props.minWidth, state.vWidth.value, props.gridSize, props.maxWidth);
			const dX = left && width !== props.width ? -1 * (width - props.width) : 0;
			const dY = top && height !== props.height ? -1 * (height - props.height) : 0;
			const x = event.x;
			const y = event.y;
			const direction = state.dir.value;
			emit("resize", {
				height,
				width,
				dX,
				dY,
				x,
				y,
				direction
			});
			state.dHeight.value = dHeight;
			state.dWidth.value = dWidth;
		};
		const cleanupResize = () => {
			if (state.dir.value === "") return false;
			const w = props.window ?? window;
			w.removeEventListener("mousemove", mouseMove);
			w.removeEventListener("mouseup", mouseUp);
			w.removeEventListener("blur", onBlur);
			document.body.style.cursor = "unset";
			document.body.classList.remove("n8n-resizing");
			state.dir.value = "";
			return true;
		};
		const onBlur = () => {
			if (cleanupResize()) emit("resizeend");
		};
		const mouseUp = (event) => {
			event.preventDefault();
			event.stopPropagation();
			if (cleanupResize()) emit("resizeend");
		};
		onBeforeUnmount(() => {
			cleanupResize();
		});
		const resizerMove = (event) => {
			event.preventDefault();
			event.stopPropagation();
			const targetResizer = event.target;
			if (targetResizer) state.dir.value = targetResizer.dataset.dir.toLocaleLowerCase();
			document.body.style.cursor = directionsCursorMaps[state.dir.value];
			document.body.classList.add("n8n-resizing");
			state.x.value = event.pageX;
			state.y.value = event.pageY;
			state.dWidth.value = 0;
			state.dHeight.value = 0;
			state.vHeight.value = props.height;
			state.vWidth.value = props.width;
			const w = props.window ?? window;
			w.addEventListener("mousemove", mouseMove);
			w.addEventListener("mouseup", mouseUp);
			w.addEventListener("blur", onBlur);
			emit("resizestart");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.resize) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(enabledDirections.value, (direction) => {
				return openBlock(), createElementBlock("div", {
					key: direction,
					"data-dir": direction,
					class: normalizeClass({
						[_ctx.$style.resizer]: true,
						[_ctx.$style[direction]]: true,
						[_ctx.$style.active]: activeDirection.value === direction.toLowerCase()
					}),
					"data-test-id": "resize-handle",
					onMousedown: resizerMove
				}, null, 42, _hoisted_1);
			}), 128)), renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nResizeWrapper/ResizeWrapper.vue?vue&type=style&index=0&lang.module.scss
var resize = "_resize_1tmof_388";
var resizer = "_resizer_1tmof_400";
var right = "_right_1tmof_405";
var top = "_top_1tmof_415";
var bottom = "_bottom_1tmof_423";
var left = "_left_1tmof_431";
var topLeft = "_topLeft_1tmof_439";
var topRight = "_topRight_1tmof_447";
var bottomLeft = "_bottomLeft_1tmof_455";
var bottomRight = "_bottomRight_1tmof_463";
var active = "_active_1tmof_492";
var shimmer = "_shimmer_1tmof_1";
var spin = "_spin_1tmof_1";
var opacityPulse = "_opacityPulse_1tmof_1";
var popoverIn = "_popoverIn_1tmof_1";
var fadeIn = "_fadeIn_1tmof_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1tmof_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1tmof_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1tmof_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1tmof_1";
var blurSwapIn = "_blurSwapIn_1tmof_1";
var blurSwapOut = "_blurSwapOut_1tmof_1";
var pulseGlow = "_pulseGlow_1tmof_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1tmof_1";
var fade = "_fade_1tmof_1";
var fadeInUp = "_fadeInUp_1tmof_1";
var fadeInDown = "_fadeInDown_1tmof_1";
var fadeInLeft = "_fadeInLeft_1tmof_1";
var fadeInRight = "_fadeInRight_1tmof_1";
var fadeOut = "_fadeOut_1tmof_1";
var fadeOutDown = "_fadeOutDown_1tmof_1";
var fadeOutUp = "_fadeOutUp_1tmof_1";
var fadeOutLeft = "_fadeOutLeft_1tmof_1";
var fadeOutRight = "_fadeOutRight_1tmof_1";
var ping = "_ping_1tmof_1";
var blinkBackground = "_blinkBackground_1tmof_1";
var typingBlink = "_typingBlink_1tmof_1";
var ResizeWrapper_vue_vue_type_style_index_0_lang_module_default = {
	resize,
	resizer,
	right,
	top,
	bottom,
	left,
	topLeft,
	topRight,
	bottomLeft,
	bottomRight,
	active,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1tmof_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nResizeWrapper/index.ts
var N8nResizeWrapper_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResizeWrapper_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResizeWrapper_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nResizeWrapper_default as t };
