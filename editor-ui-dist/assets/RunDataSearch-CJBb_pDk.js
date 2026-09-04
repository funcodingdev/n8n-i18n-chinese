import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, R as inject, S as computed, bn as normalizeStyle, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { h as useEventListener } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as useDeviceSupport } from "./useDeviceSupport-CZosAKtc.js";
import { n as useDebounce } from "./useDebounce-BffpVo23.js";
import { t as PopOutWindowKey } from "./injectionKeys-DCtELIvT.js";
//#region src/features/ndv/runData/components/RunDataSearch.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "ndv-search-container" };
var COLLAPSED_WIDTH = "30px";
var OPEN_WIDTH = "204px";
var OPEN_MIN_WIDTH = "120px";
var RunDataSearch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataSearch",
	props: {
		modelValue: {},
		paneType: { default: "output" },
		displayMode: { default: "schema" },
		shortcut: { default: void 0 }
	},
	emits: ["update:modelValue", "focus"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const locale = useI18n();
		const { debounce } = useDebounce();
		const { isCtrlKeyPressed, controlKeyText } = useDeviceSupport();
		const popOutWindow = inject(PopOutWindowKey, void 0);
		const keyboardEventTarget = computed(() => popOutWindow?.value?.document ?? window.document);
		const focusReturnTo = ref(null);
		const inputRef = ref(null);
		const search = ref(props.modelValue ?? "");
		const opened = ref(!!search.value);
		const placeholder = computed(() => {
			if (props.shortcut === "ctrl+f") return locale.baseText("ndv.search.placeholder.shortcutHint", { interpolate: { shortcut: `${controlKeyText.value}+F` } });
			if (props.paneType === "output") return locale.baseText("ndv.search.placeholder.output");
			if (props.displayMode === "schema") return locale.baseText("ndv.search.placeholder.input.schema");
			return locale.baseText("ndv.search.placeholder.input");
		});
		const style = computed(() => opened.value ? {
			maxWidth: OPEN_WIDTH,
			minWidth: OPEN_MIN_WIDTH
		} : { maxWidth: COLLAPSED_WIDTH });
		const documentKeyHandler = (event) => {
			const action = getKeyboardActionToTrigger(event);
			if (!action) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			switch (action) {
				case "open":
					focusReturnTo.value = document.activeElement;
					inputRef.value?.focus();
					inputRef.value?.select();
					break;
				case "cancel":
					inputRef.value?.blur();
					opened.value = false;
					emit("update:modelValue", "");
					if (focusReturnTo.value instanceof HTMLElement) focusReturnTo.value.focus();
			}
		};
		const debouncedEmitUpdate = debounce(async (value) => emit("update:modelValue", value), {
			debounceTime: 300,
			trailing: true
		});
		const onSearchUpdate = (value) => {
			search.value = value;
			debouncedEmitUpdate(value);
		};
		const onFocus = () => {
			opened.value = true;
			inputRef.value?.select();
			emit("focus");
		};
		const onBlur = () => {
			if (!props.modelValue) opened.value = false;
		};
		function isTargetEditable(target) {
			if (!(target instanceof HTMLElement)) return false;
			return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || target.getAttribute("contentEditable") === "true";
		}
		function getKeyboardActionToTrigger(event) {
			if (opened.value && event.key === "Escape") return "cancel";
			switch (props.shortcut) {
				case "/": return event.key === "/" && !isTargetEditable(event.target) ? "open" : void 0;
				case "ctrl+f": return event.key === "f" && isCtrlKeyPressed(event) ? "open" : void 0;
				case void 0: return;
			}
		}
		useEventListener(keyboardEventTarget, "keydown", documentKeyHandler, { capture: true });
		watch(() => props.modelValue, (value) => {
			const searchClearedFromOutside = search.value && !value;
			search.value = value;
			if (searchClearedFromOutside) opened.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(Input_default), {
				ref_key: "inputRef",
				ref: inputRef,
				"data-test-id": "ndv-search",
				class: normalizeClass({
					[_ctx.$style.ioSearch]: true,
					[_ctx.$style.ioSearchOpened]: opened.value
				}),
				style: normalizeStyle(style.value),
				"model-value": search.value,
				placeholder: placeholder.value,
				size: "small",
				"onUpdate:modelValue": onSearchUpdate,
				onFocus,
				onBlur
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.ioSearchIcon),
					icon: "search",
					size: "large"
				}, null, 8, ["class"])]),
				_: 1
			}, 8, [
				"class",
				"style",
				"model-value",
				"placeholder"
			])]);
		};
	}
});
//#endregion
//#region src/features/ndv/runData/components/RunDataSearch.vue?vue&type=style&index=0&lang.module.scss
var ioSearch = "_ioSearch_ds06s_388";
var ioSearchIcon = "_ioSearchIcon_ds06s_395";
var ioSearchOpened = "_ioSearchOpened_ds06s_405";
var shimmer = "_shimmer_ds06s_1";
var spin = "_spin_ds06s_1";
var opacityPulse = "_opacityPulse_ds06s_1";
var popoverIn = "_popoverIn_ds06s_1";
var fadeIn = "_fadeIn_ds06s_1";
var collapsibleSlideDown = "_collapsibleSlideDown_ds06s_1";
var collapsibleSlideUp = "_collapsibleSlideUp_ds06s_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_ds06s_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_ds06s_1";
var blurSwapIn = "_blurSwapIn_ds06s_1";
var blurSwapOut = "_blurSwapOut_ds06s_1";
var pulseGlow = "_pulseGlow_ds06s_1";
var pulseGlowDelayed = "_pulseGlowDelayed_ds06s_1";
var fade = "_fade_ds06s_1";
var fadeInUp = "_fadeInUp_ds06s_1";
var fadeInDown = "_fadeInDown_ds06s_1";
var fadeInLeft = "_fadeInLeft_ds06s_1";
var fadeInRight = "_fadeInRight_ds06s_1";
var fadeOut = "_fadeOut_ds06s_1";
var fadeOutDown = "_fadeOutDown_ds06s_1";
var fadeOutUp = "_fadeOutUp_ds06s_1";
var fadeOutLeft = "_fadeOutLeft_ds06s_1";
var fadeOutRight = "_fadeOutRight_ds06s_1";
var ping = "_ping_ds06s_1";
var blinkBackground = "_blinkBackground_ds06s_1";
var typingBlink = "_typingBlink_ds06s_1";
var RunDataSearch_vue_vue_type_style_index_0_lang_module_default = {
	ioSearch,
	ioSearchIcon,
	ioSearchOpened,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_ds06s_1",
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
var RunDataSearch_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataSearch_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataSearch_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RunDataSearch_default as default };
