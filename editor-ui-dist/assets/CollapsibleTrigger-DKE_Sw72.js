import { $ as openBlock, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useForwardExpose, d as useEventListener, i as Presence_default, j as createContext, m as useVModel, n as Primitive, o as useId } from "./VisuallyHidden-lv4qVqRn.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Collapsible/CollapsibleRoot.js
var [injectCollapsibleRootContext, provideCollapsibleRootContext] = createContext("CollapsibleRoot");
var CollapsibleRoot_default = /* @__PURE__ */ defineComponent({
	__name: "CollapsibleRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false,
			default: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false
		},
		unmountOnHide: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const open = useVModel(props, "open", __emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const { disabled, unmountOnHide } = toRefs(props);
		provideCollapsibleRootContext({
			contentId: "",
			disabled,
			open,
			unmountOnHide,
			onOpenToggle: () => {
				if (disabled.value) return;
				open.value = !open.value;
			}
		});
		__expose({ open });
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: _ctx.as,
				"as-child": props.asChild,
				"data-state": unref(open) ? "open" : "closed",
				"data-disabled": unref(disabled) ? "" : void 0
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-state",
				"data-disabled"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Collapsible/CollapsibleContent.js
var CollapsibleContent_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "CollapsibleContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["contentFound"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectCollapsibleRootContext();
		rootContext.contentId ||= useId(void 0, "reka-collapsible-content");
		const presentRef = ref();
		const { forwardRef, currentElement } = useForwardExpose();
		const width = ref(0);
		const height = ref(0);
		const isOpen = computed(() => rootContext.open.value);
		const isMountAnimationPrevented = ref(isOpen.value);
		const currentStyle = ref();
		watch(() => [isOpen.value, presentRef.value?.present], async () => {
			await nextTick();
			const node = currentElement.value;
			if (!node) return;
			currentStyle.value = currentStyle.value || {
				transitionDuration: node.style.transitionDuration,
				animationName: node.style.animationName
			};
			node.style.transitionDuration = "0s";
			node.style.animationName = "none";
			const rect = node.getBoundingClientRect();
			height.value = rect.height;
			width.value = rect.width;
			if (!isMountAnimationPrevented.value) {
				node.style.transitionDuration = currentStyle.value.transitionDuration;
				node.style.animationName = currentStyle.value.animationName;
			}
		}, { immediate: true });
		const skipAnimation = computed(() => isMountAnimationPrevented.value && rootContext.open.value);
		onMounted(() => {
			requestAnimationFrame(() => {
				isMountAnimationPrevented.value = false;
			});
		});
		useEventListener(currentElement, "beforematch", (ev) => {
			requestAnimationFrame(() => {
				rootContext.onOpenToggle();
				emits("contentFound");
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), {
				ref_key: "presentRef",
				ref: presentRef,
				present: _ctx.forceMount || unref(rootContext).open.value,
				"force-mount": true
			}, {
				default: withCtx(({ present }) => [createVNode(unref(Primitive), mergeProps(_ctx.$attrs, {
					id: unref(rootContext).contentId,
					ref: unref(forwardRef),
					"as-child": props.asChild,
					as: _ctx.as,
					hidden: !present ? unref(rootContext).unmountOnHide.value ? "" : "until-found" : void 0,
					"data-state": skipAnimation.value ? void 0 : unref(rootContext).open.value ? "open" : "closed",
					"data-disabled": unref(rootContext).disabled?.value ? "" : void 0,
					style: {
						[`--reka-collapsible-content-height`]: `${height.value}px`,
						[`--reka-collapsible-content-width`]: `${width.value}px`
					}
				}), {
					default: withCtx(() => [(unref(rootContext).unmountOnHide.value ? present : true) ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)]),
					_: 2
				}, 1040, [
					"id",
					"as-child",
					"as",
					"hidden",
					"data-state",
					"data-disabled",
					"style"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Collapsible/CollapsibleTrigger.js
var CollapsibleTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "CollapsibleTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectCollapsibleRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				type: _ctx.as === "button" ? "button" : void 0,
				as: _ctx.as,
				"as-child": props.asChild,
				"aria-controls": unref(rootContext).contentId,
				"aria-expanded": unref(rootContext).open.value,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				"data-disabled": unref(rootContext).disabled?.value ? "" : void 0,
				disabled: unref(rootContext).disabled?.value,
				onClick: unref(rootContext).onOpenToggle
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"type",
				"as",
				"as-child",
				"aria-controls",
				"aria-expanded",
				"data-state",
				"data-disabled",
				"disabled",
				"onClick"
			]);
		};
	}
});
//#endregion
export { CollapsibleContent_default as n, CollapsibleRoot_default as r, CollapsibleTrigger_default as t };
