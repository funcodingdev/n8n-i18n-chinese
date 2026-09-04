import { o as __toESM, t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, ot as resolveDirective, p as vShow, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter, o as onBeforeRouteLeave } from "./vue-router-DPnGeMd9.js";
import { t as require_isObject } from "./isObject-CUkREaNL.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useUsersStore } from "./users.store-BBpeiveu.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { u as CREATOR_HUB_URL } from "./constants-CMdL1Kzl.js";
import { n as useDebounce, r as require_debounce } from "./useDebounce-BffpVo23.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as useTemplatesStore } from "./templates.store-C3uT-kFa.js";
import { t as require_orderBy } from "./orderBy-B3RMZl-q.js";
import { t as TemplatesView_default } from "./TemplatesView-IBpne1lo.js";
import { n as NodeList_default, t as TemplateList_default } from "./TemplateList-MxS9OomP.js";
//#region src/app/components/CollectionWorkflowCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["textContent"];
var CollectionWorkflowCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CollectionWorkflowCard",
	props: {
		loading: { type: Boolean },
		title: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), mergeProps({ class: _ctx.$style.card }, _ctx.$attrs), createSlots({
				default: withCtx(() => [createVNode(unref(N8nLoading_default), {
					loading: __props.loading,
					rows: 3,
					variant: "p"
				}, null, 8, ["loading"])]),
				_: 2
			}, [!__props.loading && __props.title ? {
				name: "header",
				fn: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.title),
					textContent: toDisplayString(__props.title)
				}, null, 10, _hoisted_1$3)]),
				key: "0"
			} : void 0, !__props.loading ? {
				name: "footer",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
				key: "1"
			} : void 0]), 1040, ["class"]);
		};
	}
});
//#endregion
//#region src/app/components/CollectionWorkflowCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_j9kra_388";
var title$1 = "_title_j9kra_404";
var shimmer$3 = "_shimmer_j9kra_1";
var spin$3 = "_spin_j9kra_1";
var opacityPulse$3 = "_opacityPulse_j9kra_1";
var popoverIn$3 = "_popoverIn_j9kra_1";
var fadeIn$3 = "_fadeIn_j9kra_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_j9kra_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_j9kra_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_j9kra_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_j9kra_1";
var blurSwapIn$3 = "_blurSwapIn_j9kra_1";
var blurSwapOut$3 = "_blurSwapOut_j9kra_1";
var pulseGlow$3 = "_pulseGlow_j9kra_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_j9kra_1";
var fade$3 = "_fade_j9kra_1";
var fadeInUp$3 = "_fadeInUp_j9kra_1";
var fadeInDown$3 = "_fadeInDown_j9kra_1";
var fadeInLeft$3 = "_fadeInLeft_j9kra_1";
var fadeInRight$3 = "_fadeInRight_j9kra_1";
var fadeOut$3 = "_fadeOut_j9kra_1";
var fadeOutDown$3 = "_fadeOutDown_j9kra_1";
var fadeOutUp$3 = "_fadeOutUp_j9kra_1";
var fadeOutLeft$3 = "_fadeOutLeft_j9kra_1";
var fadeOutRight$3 = "_fadeOutRight_j9kra_1";
var ping$3 = "_ping_j9kra_1";
var blinkBackground$3 = "_blinkBackground_j9kra_1";
var typingBlink$3 = "_typingBlink_j9kra_1";
var CollectionWorkflowCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	title: title$1,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_j9kra_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var CollectionWorkflowCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CollectionWorkflowCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CollectionWorkflowCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/components/TemplatesInfoCard.vue
var TemplatesInfoCard_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesInfoCard",
	props: {
		collection: {},
		loading: {
			type: Boolean,
			default: false
		},
		showItemCount: {
			type: Boolean,
			default: true
		},
		width: {}
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(CollectionWorkflowCard_default, {
				loading: __props.loading,
				title: __props.collection.name,
				style: normalizeStyle({ width: __props.width })
			}, {
				footer: withCtx(() => [createBaseVNode("span", null, [withDirectives(createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.collection.workflows.length) + " " + toDisplayString(unref(i18n).baseText("templates.workflows")), 1)]),
					_: 1
				}, 512), [[vShow, __props.showItemCount]])]), createVNode(NodeList_default, {
					nodes: __props.collection.nodes,
					"show-more": false
				}, null, 8, ["nodes"])]),
				_: 1
			}, 8, [
				"loading",
				"title",
				"style"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/vue-agile@2.0.0/node_modules/vue-agile/src/mixins/handlers.js
/**
* Handlers methods for mouse/touch events
*/
var mixin$6 = { methods: {
	handleMouseDown(e) {
		this.isMouseDown = true;
		if (e.type.indexOf("touch") !== -1) {
			this.dragStartX = e.touches[0].clientX;
			this.dragStartY = e.touches[0].clientY;
		}
		if (e.type.indexOf("mouse") !== -1) {
			this.dragStartX = e.clientX;
			this.dragStartY = e.clientY;
		}
	},
	handleMouseMove(e) {
		let positionX;
		let positionY;
		if (e.type.indexOf("touch") !== -1) {
			positionX = e.touches[0].clientX;
			positionY = e.touches[0].clientY;
		}
		if (e.type.indexOf("mouse") !== -1) {
			positionX = e.clientX;
			positionY = e.clientY;
		}
		if (Math.abs(positionX - this.dragStartX) > 3 * Math.abs(positionY - this.dragStartY)) {
			this.disableScroll();
			this.dragDistance = positionX - this.dragStartX;
		}
	},
	handleMouseUp() {
		this.isMouseDown = false;
		this.enableScroll();
	},
	handleMouseOver(element) {
		if (this.settings.autoplay) {
			if (element === "dot" && this.settings.pauseOnDotsHover || element === "track" && this.settings.pauseOnHover) this.isAutoplayPaused = true;
		}
	},
	handleMouseOut(element) {
		if (this.settings.autoplay) {
			if (element === "dot" && this.settings.pauseOnDotsHover || element === "track" && this.settings.pauseOnHover) this.isAutoplayPaused = false;
		}
	}
} };
//#endregion
//#region ../../../node_modules/.pnpm/vue-agile@2.0.0/node_modules/vue-agile/src/mixins/helpers.js
/**
* Helpers methods
*/
var mixin$5 = { methods: {
	getWidth() {
		if (this.isSSR) return false;
		this.widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.widthContainer = this.$refs.list.clientWidth;
	},
	htmlCollectionToArray(collection) {
		return Array.prototype.slice.call(collection, 0);
	}
} };
//#endregion
//#region ../../../node_modules/.pnpm/vue-agile@2.0.0/node_modules/vue-agile/src/mixins/methods.js
/**
* All not public methods doesn't classified elsewhere
*/
var mixin$4 = { methods: {
	clearAutoPlayPause() {
		clearTimeout(this.autoplayTimeout);
		this.autoplayRemaining = null;
	},
	disableAutoPlay() {
		clearInterval(this.autoplayInterval);
		this.autoplayInterval = null;
	},
	disableScroll() {
		document.ontouchmove = (e) => e.preventDefault();
	},
	enableScroll() {
		document.ontouchmove = () => true;
	},
	restartAutoPlay() {
		this.disableAutoPlay();
		this.toggleAutoPlay();
	},
	toggleAutoPlay() {
		const enabled = !this.settings.unagile && this.settings.autoplay;
		if (!this.autoplayInterval && enabled) this.autoplayInterval = setInterval(() => {
			if (!document.hidden) if (!this.canGoToNext) this.disableAutoPlay();
			else this.goToNext();
		}, this.settings.autoplaySpeed);
		else this.disableAutoPlay();
	},
	toggleFade() {
		const enabled = !this.settings.unagile && this.settings.fade;
		for (let i = 0; i < this.countSlides; i++) {
			this.slides[i].style.transition = enabled ? "opacity " + this.settings.timing + " " + this.settings.speed + "ms" : "none";
			this.slides[i].style.transform = enabled ? `translate(-${i * this.widthSlide}px)` : "none";
		}
	}
} };
//#endregion
//#region ../../../node_modules/.pnpm/vue-agile@2.0.0/node_modules/vue-agile/src/mixins/preparations.js
/**
* Carousel preparation methods
*/
var mixin$3 = { methods: {
	prepareSlides() {
		this.slides = this.htmlCollectionToArray(this.$refs.slides.children);
		if (this.slidesCloned) {
			this.slidesClonedBefore = this.htmlCollectionToArray(this.$refs.slidesClonedBefore.children);
			this.slidesClonedAfter = this.htmlCollectionToArray(this.$refs.slidesClonedAfter.children);
		}
		for (const slide of this.slidesAll) slide.classList.add("agile__slide");
	},
	prepareSlidesClasses() {
		if (this.currentSlide === null) return false;
		for (let i = 0; i < this.countSlides; i++) {
			this.slides[i].classList.remove("agile__slide--active");
			this.slides[i].classList.remove("agile__slide--current");
		}
		setTimeout(() => this.slides[this.currentSlide].classList.add("agile__slide--active"), this.changeDelay);
		let start = this.slidesCloned ? this.countSlides + this.currentSlide : this.currentSlide;
		if (this.centerMode) start -= Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0);
		for (let i = Math.max(start, 0); i < Math.min(start + this.settings.slidesToShow, this.countSlides); i++) this.slidesAll[i].classList.add("agile__slide--current");
	},
	prepareCarousel() {
		if (this.settings.unagile) this.translateX = 0;
		else {
			if (this.currentSlide === null && this.countSlides) this.currentSlide = this.settings.initialSlide;
			if (this.currentSlide > this.countSlides) this.currentSlide = this.countSlides - 1;
			this.goTo(this.currentSlide, false, false);
		}
	}
} };
//#endregion
//#region ../../../node_modules/.pnpm/vue-agile@2.0.0/node_modules/vue-agile/src/mixins/settings.js
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy());
var mixin$2 = {
	props: {
		asNavFor: {
			type: Array,
			default: function() {
				return [];
			}
		},
		autoplay: {
			type: Boolean,
			default: false
		},
		autoplaySpeed: {
			type: Number,
			default: 3e3
		},
		centerMode: {
			type: Boolean,
			default: false
		},
		centerPadding: {
			type: String,
			default: "15%"
		},
		changeDelay: {
			type: Number,
			default: 0
		},
		dots: {
			type: Boolean,
			default: true
		},
		fade: {
			type: Boolean,
			default: false
		},
		infinite: {
			type: Boolean,
			default: true
		},
		initialSlide: {
			type: Number,
			default: 0
		},
		mobileFirst: {
			type: Boolean,
			default: true
		},
		navButtons: {
			type: Boolean,
			default: true
		},
		options: {
			type: Object,
			default: () => null
		},
		pauseOnDotsHover: {
			type: Boolean,
			default: false
		},
		pauseOnHover: {
			type: Boolean,
			default: true
		},
		responsive: {
			type: Array,
			default: () => null
		},
		rtl: {
			type: Boolean,
			default: false
		},
		slidesToScroll: {
			type: Number,
			default: 1
		},
		slidesToShow: {
			type: Number,
			default: 1
		},
		speed: {
			type: Number,
			default: 300
		},
		swipeDistance: {
			type: Number,
			default: 50
		},
		throttleDelay: {
			type: Number,
			default: 500
		},
		timing: {
			type: String,
			default: "ease",
			validator: (value) => {
				return [
					"ease",
					"linear",
					"ease-in",
					"ease-out",
					"ease-in-out"
				].indexOf(value) !== -1;
			}
		},
		unagile: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		initialSettings: function() {
			let { options, ...initialSettings } = this.$props;
			if (options) initialSettings = {
				...initialSettings,
				...options
			};
			if (initialSettings.responsive) initialSettings.responsive = (0, import_orderBy.default)(initialSettings.responsive, "breakpoint");
			return initialSettings;
		},
		settings: function() {
			const { responsive, ...settings } = this.initialSettings;
			if (responsive) responsive.forEach((option) => {
				if (settings.mobileFirst ? option.breakpoint < this.widthWindow : option.breakpoint > this.widthWindow) for (const key in option.settings) settings[key] = option.settings[key];
			});
			return settings;
		}
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/vue-agile@2.0.0/node_modules/vue-agile/src/mixins/throttle.js
var import_throttle = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var debounce = require_debounce(), isObject = require_isObject();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/**
	* Creates a throttled function that only invokes `func` at most once per
	* every `wait` milliseconds. The throttled function comes with a `cancel`
	* method to cancel delayed `func` invocations and a `flush` method to
	* immediately invoke them. Provide `options` to indicate whether `func`
	* should be invoked on the leading and/or trailing edge of the `wait`
	* timeout. The `func` is invoked with the last arguments provided to the
	* throttled function. Subsequent calls to the throttled function return the
	* result of the last `func` invocation.
	*
	* **Note:** If `leading` and `trailing` options are `true`, `func` is
	* invoked on the trailing edge of the timeout only if the throttled function
	* is invoked more than once during the `wait` timeout.
	*
	* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	* until to the next tick, similar to `setTimeout` with a timeout of `0`.
	*
	* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	* for details over the differences between `_.throttle` and `_.debounce`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Function
	* @param {Function} func The function to throttle.
	* @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	* @param {Object} [options={}] The options object.
	* @param {boolean} [options.leading=true]
	*  Specify invoking on the leading edge of the timeout.
	* @param {boolean} [options.trailing=true]
	*  Specify invoking on the trailing edge of the timeout.
	* @returns {Function} Returns the new throttled function.
	* @example
	*
	* // Avoid excessively updating the position while scrolling.
	* jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	*
	* // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	* var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	* jQuery(element).on('click', throttled);
	*
	* // Cancel the trailing throttled invocation.
	* jQuery(window).on('popstate', throttled.cancel);
	*/
	function throttle(func, wait, options) {
		var leading = true, trailing = true;
		if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
		if (isObject(options)) {
			leading = "leading" in options ? !!options.leading : leading;
			trailing = "trailing" in options ? !!options.trailing : trailing;
		}
		return debounce(func, wait, {
			"leading": leading,
			"maxWait": wait,
			"trailing": trailing
		});
	}
	module.exports = throttle;
})))());
//#endregion
//#region ../../../node_modules/.pnpm/vue-agile@2.0.0/node_modules/vue-agile/src/Agile.vue
var _sfc_main = {
	name: "agile",
	mixins: [
		mixin$6,
		mixin$5,
		mixin$4,
		mixin$3,
		mixin$2,
		{ created() {
			this.goTo = (0, import_throttle.default)(this.goTo, this.throttleDelay);
			this.getWidth = (0, import_throttle.default)(this.getWidth, 500);
		} },
		{ watch: {
			currentBreakpoint() {
				this.$emit("breakpoint", { breakpoint: this.currentBreakpoint });
			},
			currentSlide() {
				this.prepareSlidesClasses();
				this.autoplayStartTimestamp = this.settings.autoplay ? +/* @__PURE__ */ new Date() : null;
				this.$emit("after-change", { currentSlide: this.currentSlide });
			},
			dragDistance() {
				if (this.isMouseDown) {
					const { rtl } = this.settings;
					const dragDistance = this.dragDistance * (rtl ? -1 : 1);
					if (dragDistance > this.swipeDistance && this.canGoToPrev) {
						this.goToPrev();
						this.handleMouseUp();
					}
					if (dragDistance < -1 * this.swipeDistance && this.canGoToNext) {
						this.goToNext();
						this.handleMouseUp();
					}
				}
			},
			isAutoplayPaused(nevValue) {
				if (nevValue) {
					this.remaining = this.settings.autoplaySpeed - (+/* @__PURE__ */ new Date() - this.autoplayStartTimestamp);
					this.disableAutoPlay();
					this.clearAutoPlayPause();
				} else this.autoplayTimeout = setTimeout(() => {
					this.clearAutoPlayPause();
					this.goToNext();
					this.toggleAutoPlay();
				}, this.remaining);
			},
			"settings.autoplay"() {
				this.toggleAutoPlay();
			},
			"settings.fade"() {
				this.toggleFade();
			},
			"settings.unagile"() {},
			widthSlide() {
				for (let i = 0; i < this.countSlidesAll; i++) this.slidesAll[i].style.width = `${this.widthSlide}${this.widthSlide !== "auto" ? "px" : ""}`;
			},
			widthWindow(newValue, oldValue) {
				if (oldValue) {
					this.prepareCarousel();
					this.toggleFade();
				}
			}
		} }
	],
	emits: [
		"before-change",
		"after-change",
		"breakpoint"
	],
	data() {
		return {
			autoplayInterval: null,
			autoplayRemaining: null,
			autoplayStartTimestamp: null,
			autoplayTimeout: null,
			currentSlide: null,
			dragDistance: 0,
			dragStartX: 0,
			dragStartY: 0,
			isAutoplayPaused: false,
			isMouseDown: false,
			slides: [],
			slidesClonedAfter: [],
			slidesClonedBefore: [],
			isSSR: typeof window === "undefined",
			transitionDelay: 0,
			translateX: 0,
			widthWindow: 0,
			widthContainer: 0
		};
	},
	computed: {
		breakpoints: function() {
			return !this.initialSettings.responsive ? [] : this.initialSettings.responsive.map((item) => item.breakpoint);
		},
		canGoToPrev: function() {
			return this.settings.infinite || this.currentSlide > 0;
		},
		canGoToNext: function() {
			return this.settings.infinite || this.currentSlide < this.countSlides - 1;
		},
		countSlides: function() {
			return this.isSSR ? this.htmlCollectionToArray(this.$slots.default).length : this.slides.length;
		},
		countSlidesAll: function() {
			return this.slidesAll.length;
		},
		currentBreakpoint: function() {
			const breakpoints = this.breakpoints.map((item) => item).reverse();
			return this.initialSettings.mobileFirst ? breakpoints.find((item) => item < this.widthWindow) || 0 : breakpoints.find((item) => item > this.widthWindow) || null;
		},
		marginX: function() {
			if (this.settings.unagile) return 0;
			let marginX = this.slidesCloned ? this.countSlides * this.widthSlide : 0;
			if (this.settings.centerMode) marginX -= (Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0)) * this.widthSlide;
			return this.settings.rtl ? marginX : -1 * marginX;
		},
		slidesCloned: function() {
			return !this.settings.unagile && !this.settings.fade && this.settings.infinite;
		},
		slidesAll: function() {
			return this.slidesCloned ? [
				...this.slidesClonedBefore,
				...this.slides,
				...this.slidesClonedAfter
			] : this.slides;
		},
		widthSlide: function() {
			return !this.settings.unagile ? this.widthContainer / this.settings.slidesToShow : "auto";
		}
	},
	mounted() {
		window.addEventListener("resize", this.getWidth);
		this.$refs.track.addEventListener("touchstart", this.handleMouseDown);
		this.$refs.track.addEventListener("touchend", this.handleMouseUp);
		this.$refs.track.addEventListener("touchmove", this.handleMouseMove);
		this.$refs.track.addEventListener("mousedown", this.handleMouseDown);
		this.$refs.track.addEventListener("mouseup", this.handleMouseUp);
		this.$refs.track.addEventListener("mousemove", this.handleMouseMove);
		this.isSSR = false;
		this.reload();
	},
	beforeUnmount() {
		this.destroy();
	},
	methods: {
		destroy() {
			window.removeEventListener("resize", this.getWidth);
			this.$refs.track.removeEventListener("touchstart", this.handleMouseDown);
			this.$refs.track.removeEventListener("touchend", this.handleMouseUp);
			this.$refs.track.removeEventListener("touchmove", this.handleMouseMove);
			this.$refs.track.removeEventListener("mousedown", this.handleMouseDown);
			this.$refs.track.removeEventListener("mouseup", this.handleMouseUp);
			this.$refs.track.removeEventListener("mousemove", this.handleMouseMove);
			this.disableAutoPlay();
		},
		getCurrentBreakpoint() {
			return this.currentBreakpoint;
		},
		getCurrentSettings() {
			return this.settings;
		},
		getCurrentSlide() {
			return this.currentSlide;
		},
		getInitialSettings() {
			return this.initialSettings;
		},
		goTo(n, transition = true, asNav = false) {
			if (this.settings.unagile) return false;
			if (!asNav) this.settings.asNavFor.forEach((carousel) => {
				if (carousel) carousel.goTo(n, transition, true);
			});
			let slideNextReal = n;
			if (transition) {
				if (this.settings.infinite && n < 0) slideNextReal = this.countSlides - 1;
				else if (n >= this.countSlides) slideNextReal = 0;
				this.$emit("before-change", {
					currentSlide: this.currentSlide,
					nextSlide: slideNextReal
				});
				this.currentSlide = slideNextReal;
				if (n !== slideNextReal) setTimeout(() => {
					this.goTo(slideNextReal, false);
				}, this.settings.speed);
			}
			const translateX = !this.settings.fade ? n * this.widthSlide * this.settings.slidesToScroll : 0;
			this.transitionDelay = transition ? this.speed : 0;
			if (this.infinite || this.currentSlide + this.slidesToShow <= this.countSlides) this.translateX = this.settings.rtl ? translateX : -1 * translateX;
		},
		goToNext() {
			if (this.canGoToNext) this.goTo(this.currentSlide + 1);
		},
		goToPrev() {
			if (this.canGoToPrev) this.goTo(this.currentSlide - 1);
		},
		reload() {
			this.getWidth();
			this.prepareSlides();
			this.prepareCarousel();
			this.toggleFade();
			this.toggleAutoPlay();
		}
	}
};
var _hoisted_1$2 = {
	ref: "list",
	class: "agile__list"
};
var _hoisted_2$1 = {
	ref: "slidesClonedBefore",
	class: "agile__slides agile__slides--cloned"
};
var _hoisted_3 = {
	ref: "slides",
	class: "agile__slides agile__slides--regular"
};
var _hoisted_4 = {
	ref: "slidesClonedAfter",
	class: "agile__slides agile__slides--cloned"
};
var _hoisted_5 = {
	key: 0,
	class: "agile__caption"
};
var _hoisted_6 = {
	key: 1,
	class: "agile__actions"
};
var _hoisted_7 = ["disabled"];
var _hoisted_8 = {
	key: 1,
	ref: "dots",
	class: "agile__dots"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", {
		class: normalizeClass([{
			"agile--ssr": $data.isSSR,
			"agile--auto-play": _ctx.settings.autoplay,
			"agile--disabled": _ctx.settings.unagile,
			"agile--fade": _ctx.settings.fade && !_ctx.settings.unagile,
			"agile--rtl": _ctx.settings.rtl,
			"agile--no-nav-buttons": !_ctx.settings.navButtons
		}, "agile"]),
		onTouchstart: () => {}
	}, [
		createBaseVNode("div", _hoisted_1$2, [createBaseVNode("div", {
			ref: "track",
			style: normalizeStyle({
				transform: `translate(${$data.translateX + $options.marginX}px)`,
				transition: `transform ${_ctx.settings.timing} ${$data.transitionDelay}ms`
			}),
			class: "agile__track",
			onMouseout: _cache[0] || (_cache[0] = ($event) => _ctx.handleMouseOut("track")),
			onMouseover: _cache[1] || (_cache[1] = ($event) => _ctx.handleMouseOver("track"))
		}, [
			withDirectives(createBaseVNode("div", _hoisted_2$1, [renderSlot(_ctx.$slots, "default")], 512), [[vShow, $options.slidesCloned]]),
			createBaseVNode("div", _hoisted_3, [renderSlot(_ctx.$slots, "default")], 512),
			withDirectives(createBaseVNode("div", _hoisted_4, [renderSlot(_ctx.$slots, "default")], 512), [[vShow, $options.slidesCloned]])
		], 36)], 512),
		_ctx.$slots.caption ? (openBlock(), createElementBlock("div", _hoisted_5, [renderSlot(_ctx.$slots, "caption")])) : createCommentVNode("", true),
		!_ctx.settings.unagile && (_ctx.settings.navButtons || _ctx.settings.dots) ? (openBlock(), createElementBlock("div", _hoisted_6, [
			_ctx.settings.navButtons && !_ctx.settings.unagile ? (openBlock(), createElementBlock("button", {
				key: 0,
				ref: "prevButton",
				disabled: !$options.canGoToPrev,
				"aria-label": "Previous",
				class: "agile__nav-button agile__nav-button--prev",
				type: "button",
				onClick: _cache[2] || (_cache[2] = ($event) => ($options.goToPrev(), _ctx.restartAutoPlay()))
			}, [renderSlot(_ctx.$slots, "prevButton", {}, () => [_cache[6] || (_cache[6] = createTextVNode(" ← ", -1))])], 8, _hoisted_7)) : createCommentVNode("", true),
			_ctx.settings.dots && !_ctx.settings.unagile ? (openBlock(), createElementBlock("ul", _hoisted_8, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.countSlides, (n) => {
				return openBlock(), createElementBlock("li", {
					key: n,
					class: normalizeClass([{ "agile__dot--current": n - 1 === $data.currentSlide }, "agile__dot"]),
					onMouseout: _cache[3] || (_cache[3] = ($event) => _ctx.handleMouseOut("dot")),
					onMouseover: _cache[4] || (_cache[4] = ($event) => _ctx.handleMouseOver("dot"))
				}, [createBaseVNode("button", {
					type: "button",
					onClick: ($event) => ($options.goTo(n - 1), _ctx.restartAutoPlay())
				}, toDisplayString(n), 9, _hoisted_9)], 34);
			}), 128))], 512)) : createCommentVNode("", true),
			_ctx.settings.navButtons && !_ctx.settings.unagile ? (openBlock(), createElementBlock("button", {
				key: 2,
				ref: "nextButton",
				disabled: !$options.canGoToNext,
				"aria-label": "Next",
				class: "agile__nav-button agile__nav-button--next",
				type: "button",
				onClick: _cache[5] || (_cache[5] = ($event) => ($options.goToNext(), _ctx.restartAutoPlay()))
			}, [renderSlot(_ctx.$slots, "nextButton", {}, () => [_cache[7] || (_cache[7] = createTextVNode(" → ", -1))])], 8, _hoisted_10)) : createCommentVNode("", true)
		])) : createCommentVNode("", true)
	], 34);
}
var Agile_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region src/features/workflows/templates/components/TemplatesInfoCarousel.vue?vue&type=script&setup=true&lang.ts
var TemplatesInfoCarousel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesInfoCarousel",
	props: {
		collections: {},
		loading: {
			type: Boolean,
			default: false
		},
		showItemCount: {
			type: Boolean,
			default: true
		},
		showNavigation: {
			type: Boolean,
			default: true
		},
		cardsWidth: { default: "240px" }
	},
	emits: ["openCollection"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const carouselScrollPosition = ref(0);
		const cardWidth = ref(parseInt(props.cardsWidth, 10));
		const scrollEnd = ref(false);
		const listElement = ref(null);
		const sliderRef = ref(null);
		const updateCarouselScroll = () => {
			if (listElement.value) {
				carouselScrollPosition.value = Number(listElement.value.scrollLeft.toFixed());
				const width = listElement.value.clientWidth;
				const scrollWidth = listElement.value.scrollWidth;
				const scrollLeft = carouselScrollPosition.value;
				scrollEnd.value = scrollWidth - width <= scrollLeft + 7;
			}
		};
		const onCardClick = (event, id) => {
			emit("openCollection", {
				event,
				id
			});
		};
		const scrollLeft = () => {
			if (listElement.value) listElement.value.scrollBy({
				left: -(cardWidth.value * 2),
				top: 0,
				behavior: "smooth"
			});
		};
		const scrollRight = () => {
			if (listElement.value) listElement.value.scrollBy({
				left: cardWidth.value * 2,
				top: 0,
				behavior: "smooth"
			});
		};
		watch(() => props.collections, () => {
			setTimeout(() => {
				updateCarouselScroll();
			}, 0);
		});
		watch(() => props.loading, () => {
			setTimeout(() => {
				updateCarouselScroll();
			}, 0);
		});
		onMounted(async () => {
			await nextTick();
			if (!sliderRef.value) return;
			listElement.value = sliderRef.value.$el.querySelector(".agile__list");
			if (listElement.value) listElement.value.addEventListener("scroll", updateCarouselScroll);
		});
		onBeforeMount(() => {
			if (sliderRef.value) sliderRef.value.destroy();
			window.addEventListener("scroll", updateCarouselScroll);
		});
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(Agile_default), {
					ref_key: "sliderRef",
					ref: sliderRef,
					dots: false,
					"nav-buttons": false,
					infinite: false,
					"slides-to-show": 4,
					onAfterChange: updateCarouselScroll
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.loading ? 4 : 0, (n) => {
						return openBlock(), createBlock(CollectionWorkflowCard_default, {
							key: `loading-${n}`,
							loading: __props.loading
						}, null, 8, ["loading"]);
					}), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.loading ? [] : __props.collections, (collection) => {
						return openBlock(), createBlock(TemplatesInfoCard_default, {
							key: collection.id,
							"data-test-id": "templates-info-card",
							collection,
							"show-item-count": __props.showItemCount,
							width: __props.cardsWidth,
							onClick: (e) => onCardClick(e, collection.id)
						}, null, 8, [
							"collection",
							"show-item-count",
							"width",
							"onClick"
						]);
					}), 128))]),
					_: 1
				}, 512),
				withDirectives(createBaseVNode("button", {
					class: normalizeClass({ [_ctx.$style.leftButton]: true }),
					onClick: scrollLeft
				}, [createVNode(unref(N8nIcon_default), { icon: "chevron-left" })], 2), [[vShow, __props.showNavigation && carouselScrollPosition.value > 0]]),
				withDirectives(createBaseVNode("button", {
					class: normalizeClass({ [_ctx.$style.rightButton]: true }),
					onClick: scrollRight
				}, [createVNode(unref(N8nIcon_default), { icon: "chevron-right" })], 2), [[vShow, __props.showNavigation && !scrollEnd.value]])
			], 2)), [[vShow, __props.loading || __props.collections.length]]);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/components/TemplatesInfoCarousel.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_6bkwx_388";
var button$1 = "_button_6bkwx_392";
var leftButton = "_leftButton_6bkwx_413 _button_6bkwx_392";
var rightButton = "_rightButton_6bkwx_422 _button_6bkwx_392";
var shimmer$2 = "_shimmer_6bkwx_1";
var spin$2 = "_spin_6bkwx_1";
var opacityPulse$2 = "_opacityPulse_6bkwx_1";
var popoverIn$2 = "_popoverIn_6bkwx_1";
var fadeIn$2 = "_fadeIn_6bkwx_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_6bkwx_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_6bkwx_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_6bkwx_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_6bkwx_1";
var blurSwapIn$2 = "_blurSwapIn_6bkwx_1";
var blurSwapOut$2 = "_blurSwapOut_6bkwx_1";
var pulseGlow$2 = "_pulseGlow_6bkwx_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_6bkwx_1";
var fade$2 = "_fade_6bkwx_1";
var fadeInUp$2 = "_fadeInUp_6bkwx_1";
var fadeInDown$2 = "_fadeInDown_6bkwx_1";
var fadeInLeft$2 = "_fadeInLeft_6bkwx_1";
var fadeInRight$2 = "_fadeInRight_6bkwx_1";
var fadeOut$2 = "_fadeOut_6bkwx_1";
var fadeOutDown$2 = "_fadeOutDown_6bkwx_1";
var fadeOutUp$2 = "_fadeOutUp_6bkwx_1";
var fadeOutLeft$2 = "_fadeOutLeft_6bkwx_1";
var fadeOutRight$2 = "_fadeOutRight_6bkwx_1";
var ping$2 = "_ping_6bkwx_1";
var blinkBackground$2 = "_blinkBackground_6bkwx_1";
var typingBlink$2 = "_typingBlink_6bkwx_1";
var TemplatesInfoCarousel_vue_vue_type_style_index_0_lang_module_default = {
	container,
	button: button$1,
	leftButton,
	rightButton,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_6bkwx_1",
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
var TemplatesInfoCarousel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplatesInfoCarousel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesInfoCarousel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/components/TemplateFilters.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["textContent"];
var _hoisted_2 = ["data-test-id"];
var TemplateFilters_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateFilters",
	props: {
		categories: { default: () => [] },
		sortOnPopulate: {
			type: Boolean,
			default: false
		},
		expandLimit: { default: 12 },
		loading: {
			type: Boolean,
			default: false
		},
		selected: { default: () => [] }
	},
	emits: [
		"clearAll",
		"select",
		"clear"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const collapsed = ref(true);
		const sortedCategories = ref([]);
		const allSelected = computed(() => {
			return props.selected.length === 0;
		});
		function sortCategories() {
			if (!props.sortOnPopulate) sortedCategories.value = props.categories;
			else {
				const selected = props.selected || [];
				const selectedCategories = props.categories.filter((cat) => selected.includes(cat));
				const notSelectedCategories = props.categories.filter((cat) => !selected.includes(cat));
				sortedCategories.value = selectedCategories.concat(notSelectedCategories);
			}
		}
		function collapseAction() {
			collapsed.value = false;
		}
		function handleCheckboxChanged(value, selectedCategory) {
			if (value) emit("select", selectedCategory);
			else emit("clear", selectedCategory);
		}
		function isSelected(category) {
			return props.selected.includes(category);
		}
		function resetCategories() {
			emit("clearAll");
		}
		watch(() => props.sortOnPopulate, (value) => {
			if (value) sortCategories();
		}, { immediate: true });
		watch(() => props.categories, (categories) => {
			if (categories.length > 0) sortCategories();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.filters, "template-filters"]),
				"data-test-id": "templates-filter-container"
			}, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.title),
					textContent: toDisplayString(unref(i18n).baseText("templates.categoriesHeading"))
				}, null, 10, _hoisted_1$1),
				__props.loading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.list)
				}, [createVNode(unref(N8nLoading_default), {
					loading: __props.loading,
					rows: __props.expandLimit
				}, null, 8, ["loading", "rows"])], 2)) : createCommentVNode("", true),
				!__props.loading ? (openBlock(), createElementBlock("ul", {
					key: 1,
					class: normalizeClass(_ctx.$style.categories)
				}, [createBaseVNode("li", {
					class: normalizeClass(_ctx.$style.item),
					"data-test-id": "template-filter-all-categories"
				}, [createVNode(unref(Checkbox_default), {
					"model-value": allSelected.value,
					label: unref(i18n).baseText("templates.allCategories"),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = () => resetCategories())
				}, null, 8, ["model-value", "label"])], 2), (openBlock(true), createElementBlock(Fragment, null, renderList(collapsed.value ? sortedCategories.value.slice(0, __props.expandLimit) : sortedCategories.value, (category, index) => {
					return openBlock(), createElementBlock("li", {
						key: index,
						class: normalizeClass(_ctx.$style.item),
						"data-test-id": `template-filter-${category.name.toLowerCase().replaceAll(" ", "-")}`
					}, [createVNode(unref(Checkbox_default), {
						"model-value": isSelected(category),
						label: category.name,
						"onUpdate:modelValue": (value) => handleCheckboxChanged(value, category)
					}, null, 8, [
						"model-value",
						"label",
						"onUpdate:modelValue"
					])], 10, _hoisted_2);
				}), 128))], 2)) : createCommentVNode("", true),
				sortedCategories.value.length > __props.expandLimit && collapsed.value && !__props.loading ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.button),
					"data-test-id": "expand-categories-button",
					onClick: collapseAction
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "primary"
				}, {
					default: withCtx(() => [createTextVNode(" + " + toDisplayString(`${sortedCategories.value.length - __props.expandLimit} more`), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/components/TemplateFilters.vue?vue&type=style&index=0&lang.module.scss
var title = "_title_1gcxy_388";
var categories = "_categories_1gcxy_393";
var item = "_item_1gcxy_398";
var button = "_button_1gcxy_405";
var shimmer$1 = "_shimmer_1gcxy_1";
var spin$1 = "_spin_1gcxy_1";
var opacityPulse$1 = "_opacityPulse_1gcxy_1";
var popoverIn$1 = "_popoverIn_1gcxy_1";
var fadeIn$1 = "_fadeIn_1gcxy_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1gcxy_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1gcxy_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1gcxy_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1gcxy_1";
var blurSwapIn$1 = "_blurSwapIn_1gcxy_1";
var blurSwapOut$1 = "_blurSwapOut_1gcxy_1";
var pulseGlow$1 = "_pulseGlow_1gcxy_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1gcxy_1";
var fade$1 = "_fade_1gcxy_1";
var fadeInUp$1 = "_fadeInUp_1gcxy_1";
var fadeInDown$1 = "_fadeInDown_1gcxy_1";
var fadeInLeft$1 = "_fadeInLeft_1gcxy_1";
var fadeInRight$1 = "_fadeInRight_1gcxy_1";
var fadeOut$1 = "_fadeOut_1gcxy_1";
var fadeOutDown$1 = "_fadeOutDown_1gcxy_1";
var fadeOutUp$1 = "_fadeOutUp_1gcxy_1";
var fadeOutLeft$1 = "_fadeOutLeft_1gcxy_1";
var fadeOutRight$1 = "_fadeOutRight_1gcxy_1";
var ping$1 = "_ping_1gcxy_1";
var blinkBackground$1 = "_blinkBackground_1gcxy_1";
var typingBlink$1 = "_typingBlink_1gcxy_1";
var TemplateFilters_vue_vue_type_style_index_0_lang_module_default = {
	title,
	categories,
	item,
	button,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1gcxy_1",
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
var TemplateFilters_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplateFilters_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateFilters_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/views/TemplatesSearchView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["textContent"];
var TemplatesSearchView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesSearchView",
	setup(__props) {
		const areCategoriesPrepopulated = ref(false);
		const categories = ref([]);
		const loadingCategories = ref(true);
		const loadingCollections = ref(true);
		const loadingWorkflows = ref(true);
		const search = ref("");
		const searchEventToTrack = ref(null);
		const errorLoadingWorkflows = ref(false);
		const { callDebounced } = useDebounce();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const settingsStore = useSettingsStore();
		const templatesStore = useTemplatesStore();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const telemetry = useTelemetry();
		const createQueryObject = (categoryId) => {
			return {
				categories: categories.value.map((category) => categoryId === "name" ? category.name : String(category.id)),
				search: search.value
			};
		};
		const totalWorkflows = computed(() => templatesStore.getSearchedWorkflowsTotal(createQueryObject("name")));
		const workflows = computed(() => templatesStore.getSearchedWorkflows(createQueryObject("name")) ?? []);
		const collections = computed(() => templatesStore.getSearchedCollections(createQueryObject("id")) ?? []);
		const endOfSearchMessage = computed(() => {
			if (loadingWorkflows.value) return null;
			if (!loadingCollections.value && workflows.value.length === 0 && collections.value.length === 0) {
				if (!settingsStore.isTemplatesEndpointReachable && errorLoadingWorkflows.value) return i18n.baseText("templates.connectionWarning");
				return i18n.baseText("templates.noSearchResults");
			}
			return null;
		});
		const updateQueryParam = (search, category) => {
			const query = Object.assign({}, route.query);
			if (category.length) query.categories = category;
			else delete query.categories;
			if (search.length) query.search = search;
			else delete query.search;
			router.replace({ query });
		};
		const updateSearch = () => {
			updateQueryParam(search.value, categories.value.map((category) => category.id).join(","));
			loadWorkflowsAndCollections(false);
		};
		const loadWorkflows = async () => {
			try {
				loadingWorkflows.value = true;
				await templatesStore.getWorkflows({
					search: search.value,
					categories: categories.value.map((category) => category.name)
				});
				errorLoadingWorkflows.value = false;
			} catch (e) {
				errorLoadingWorkflows.value = true;
			}
			loadingWorkflows.value = false;
		};
		const loadCollections = async () => {
			try {
				loadingCollections.value = true;
				await templatesStore.getCollections({
					categories: categories.value.map((category) => String(category.id)),
					search: search.value
				});
			} catch (e) {}
			loadingCollections.value = false;
		};
		const updateSearchTracking = (search, categories) => {
			if (!search) return;
			if (searchEventToTrack.value && searchEventToTrack.value.search_string.length > search.length) return;
			searchEventToTrack.value = {
				search_string: search,
				workflow_results_count: workflows.value.length,
				collection_results_count: collections.value.length,
				categories_applied: categories.map((categoryId) => templatesStore.getCategoryById(categoryId.toString())),
				wf_template_repo_session_id: templatesStore.currentSessionId
			};
		};
		const trackCategories = () => {
			if (categories.value.length) telemetry.track("User changed template filters", {
				search_string: search.value,
				categories_applied: categories.value,
				wf_template_repo_session_id: templatesStore.currentSessionId
			});
		};
		const loadWorkflowsAndCollections = async (initialLoad) => {
			const _categories = [...categories.value];
			const _search = search.value;
			await Promise.all([loadWorkflows(), loadCollections()]);
			if (!initialLoad) updateSearchTracking(_search, _categories.map((category) => category.id));
		};
		const navigateTo = (e, page, id) => {
			if (e.metaKey || e.ctrlKey) {
				const route = router.resolve({
					name: page,
					params: { id }
				});
				window.open(route.href, "_blank");
				return;
			} else router.push({
				name: page,
				params: { id }
			});
		};
		const onOpenCollection = ({ event, id }) => {
			navigateTo(event, VIEWS.COLLECTION, id);
		};
		const onOpenTemplate = ({ event, id }) => {
			navigateTo(event, VIEWS.TEMPLATE, id);
		};
		const trackSearch = () => {
			if (searchEventToTrack.value) {
				telemetry.track("User searched workflow templates", searchEventToTrack.value);
				searchEventToTrack.value = null;
			}
		};
		const onSearchInput = (searchText) => {
			loadingWorkflows.value = true;
			loadingCollections.value = true;
			search.value = searchText;
			callDebounced(updateSearch, {
				debounceTime: 500,
				trailing: true
			});
			if (searchText.length === 0) trackSearch();
		};
		const onCategorySelected = (selected) => {
			categories.value = categories.value.concat(selected);
			updateSearch();
			trackCategories();
		};
		const onCategoryUnselected = (selected) => {
			categories.value = categories.value.filter((category) => category.id !== selected.id);
			updateSearch();
			trackCategories();
		};
		const onCategoriesCleared = () => {
			categories.value = [];
			updateSearch();
		};
		const onLoadMore = async () => {
			if (workflows.value.length >= totalWorkflows.value) return;
			try {
				loadingWorkflows.value = true;
				await templatesStore.getMoreWorkflows({
					categories: categories.value.map((category) => category.name),
					search: search.value
				});
			} catch (e) {
				toast.showMessage({
					title: "Error",
					message: "Could not load more workflows",
					type: "error"
				});
			} finally {
				loadingWorkflows.value = false;
			}
		};
		const loadCategories = async () => {
			try {
				await templatesStore.getCategories();
			} catch (e) {}
			loadingCategories.value = false;
		};
		const scrollTo = (position, behavior = "smooth") => {
			setTimeout(() => {
				const contentArea = document.getElementById("content");
				if (contentArea) contentArea.scrollTo({
					top: position,
					behavior
				});
			}, 0);
		};
		const restoreSearchFromRoute = () => {
			let shouldUpdateSearch = false;
			if (route.query.search && typeof route.query.search === "string") {
				search.value = route.query.search;
				shouldUpdateSearch = true;
			}
			if (typeof route.query.categories === "string" && route.query.categories.length) {
				const categoriesFromURL = route.query.categories.split(",");
				categories.value = templatesStore.allCategories.filter((category) => categoriesFromURL.includes(category.id.toString()));
				shouldUpdateSearch = true;
			}
			if (shouldUpdateSearch) {
				updateSearch();
				trackCategories();
				areCategoriesPrepopulated.value = true;
			}
		};
		onMounted(async () => {
			documentTitle.set("Templates");
			await loadCategories();
			loadWorkflowsAndCollections(true);
			usersStore.showPersonalizationSurvey();
			restoreSearchFromRoute();
			if (settingsStore.isTemplatesEnabled) settingsStore.testTemplatesEndpoint().catch(() => {});
			setTimeout(() => {
				const scrollOffset = route.meta?.scrollOffset;
				if (typeof scrollOffset === "number" && scrollOffset > 0) scrollTo(scrollOffset, "auto");
			}, 100);
		});
		onBeforeRouteLeave((_to, _from, next) => {
			const contentArea = document.getElementById("content");
			if (contentArea) route.meta?.setScrollPosition?.(contentArea.scrollTop);
			trackSearch();
			next();
		});
		watch(workflows, (newWorkflows) => {
			if (newWorkflows.length === 0) window.scrollTo(0, 0);
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(TemplatesView_default, null, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.heading")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.button) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "large",
					href: unref(CREATOR_HUB_URL),
					label: unref(i18n).baseText("templates.shareWorkflow"),
					target: "_blank"
				}, null, 8, ["href", "label"])], 2)], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.filters) }, [createVNode(TemplateFilters_default, {
					categories: unref(templatesStore).allCategories,
					"sort-on-populate": areCategoriesPrepopulated.value,
					selected: categories.value,
					loading: loadingCategories.value,
					onClear: onCategoryUnselected,
					onClearAll: onCategoriesCleared,
					onSelect: onCategorySelected
				}, null, 8, [
					"categories",
					"sort-on-populate",
					"selected",
					"loading"
				])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.search) }, [
					createVNode(unref(Input_default), {
						"model-value": search.value,
						placeholder: unref(i18n).baseText("templates.searchPlaceholder"),
						clearable: "",
						"data-test-id": "template-search-input",
						"onUpdate:modelValue": onSearchInput,
						onBlur: trackSearch
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, ["model-value", "placeholder"]),
					withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style.carouselContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
						bold: true,
						size: "medium",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.collections")) + " ", 1), !loadingCollections.value ? (openBlock(), createElementBlock("span", {
							key: 0,
							"data-test-id": "collection-count-label",
							textContent: toDisplayString(`(${collections.value.length})`)
						}, null, 8, _hoisted_1)) : createCommentVNode("", true)]),
						_: 1
					})], 2), createVNode(TemplatesInfoCarousel_default, {
						collections: collections.value,
						loading: loadingCollections.value,
						onOpenCollection
					}, null, 8, ["collections", "loading"])], 2), [[vShow, collections.value.length || loadingCollections.value]]),
					createVNode(TemplateList_default, {
						"infinite-scroll-enabled": true,
						loading: loadingWorkflows.value,
						workflows: workflows.value,
						"total-count": totalWorkflows.value,
						onLoadMore,
						onOpenTemplate
					}, null, 8, [
						"loading",
						"workflows",
						"total-count"
					]),
					endOfSearchMessage.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.endText)
					}, [createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-base"
					}, {
						default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, endOfSearchMessage.value]])]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)], 2)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/workflows/templates/views/TemplatesSearchView.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_rgf2m_388";
var contentWrapper = "_contentWrapper_rgf2m_393";
var filters = "_filters_rgf2m_403";
var search = "_search_rgf2m_409";
var header = "_header_rgf2m_421";
var shimmer = "_shimmer_rgf2m_1";
var spin = "_spin_rgf2m_1";
var opacityPulse = "_opacityPulse_rgf2m_1";
var popoverIn = "_popoverIn_rgf2m_1";
var fadeIn = "_fadeIn_rgf2m_1";
var collapsibleSlideDown = "_collapsibleSlideDown_rgf2m_1";
var collapsibleSlideUp = "_collapsibleSlideUp_rgf2m_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_rgf2m_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_rgf2m_1";
var blurSwapIn = "_blurSwapIn_rgf2m_1";
var blurSwapOut = "_blurSwapOut_rgf2m_1";
var pulseGlow = "_pulseGlow_rgf2m_1";
var pulseGlowDelayed = "_pulseGlowDelayed_rgf2m_1";
var fade = "_fade_rgf2m_1";
var fadeInUp = "_fadeInUp_rgf2m_1";
var fadeInDown = "_fadeInDown_rgf2m_1";
var fadeInLeft = "_fadeInLeft_rgf2m_1";
var fadeInRight = "_fadeInRight_rgf2m_1";
var fadeOut = "_fadeOut_rgf2m_1";
var fadeOutDown = "_fadeOutDown_rgf2m_1";
var fadeOutUp = "_fadeOutUp_rgf2m_1";
var fadeOutLeft = "_fadeOutLeft_rgf2m_1";
var fadeOutRight = "_fadeOutRight_rgf2m_1";
var ping = "_ping_rgf2m_1";
var blinkBackground = "_blinkBackground_rgf2m_1";
var typingBlink = "_typingBlink_rgf2m_1";
var TemplatesSearchView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	contentWrapper,
	filters,
	search,
	header,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_rgf2m_1",
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
var TemplatesSearchView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplatesSearchView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesSearchView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TemplatesSearchView_default as default };
