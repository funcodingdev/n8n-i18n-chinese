import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as Icon_default } from "./Icon-D-jZgYpP.js";
import { c as useForwardExpose, i as Presence_default, j as createContext, m as useVModel, n as Primitive, o as useId, t as VisuallyHidden_default } from "./VisuallyHidden-OSLEy_KR.js";
import { n as getActiveElement } from "./useDirection-C9_E-bw1.js";
import { d as useEmitAsProps, o as Teleport_default, s as DismissableLayer_default } from "./PopperContent-CAUwWps2.js";
import { n as useBodyScrollLock, t as useHideOthers } from "./useHideOthers-Cz1LBL9y.js";
import { t as FocusScope_default } from "./FocusScope-B624AD2F.js";
import { l as getOpenState } from "./utils-sct7vtfH.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogRoot.js
var [injectDialogRootContext, provideDialogRootContext] = createContext("DialogRoot");
var DialogRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DialogRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: false,
			default: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const open = useVModel(props, "open", __emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const triggerElement = ref();
		const contentElement = ref();
		const { modal } = toRefs(props);
		provideDialogRootContext({
			open,
			modal,
			openModal: () => {
				open.value = true;
			},
			onOpenChange: (value) => {
				open.value = value;
			},
			onOpenToggle: () => {
				open.value = !open.value;
			},
			contentId: "",
			titleId: "",
			descriptionId: "",
			triggerElement,
			contentElement
		});
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default", {
				open: unref(open),
				close: () => open.value = false
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogClose.js
var DialogClose_default$1 = /* @__PURE__ */ defineComponent({
	__name: "DialogClose",
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
		const rootContext = injectDialogRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				type: _ctx.as === "button" ? "button" : void 0,
				onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["type"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogContentImpl.js
var DialogContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentImpl",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
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
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const { forwardRef, currentElement: contentElement } = useForwardExpose();
		rootContext.titleId ||= useId(void 0, "reka-dialog-title");
		rootContext.descriptionId ||= useId(void 0, "reka-dialog-description");
		onMounted(() => {
			rootContext.contentElement = contentElement;
			if (getActiveElement() !== document.body) rootContext.triggerElement.value = getActiveElement();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(FocusScope_default), {
				"as-child": "",
				loop: "",
				trapped: props.trapFocus,
				onMountAutoFocus: _cache[5] || (_cache[5] = ($event) => emits("openAutoFocus", $event)),
				onUnmountAutoFocus: _cache[6] || (_cache[6] = ($event) => emits("closeAutoFocus", $event))
			}, {
				default: withCtx(() => [createVNode(unref(DismissableLayer_default), mergeProps({
					id: unref(rootContext).contentId,
					ref: unref(forwardRef),
					as: _ctx.as,
					"as-child": _ctx.asChild,
					"disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
					role: "dialog",
					"aria-describedby": unref(rootContext).descriptionId,
					"aria-labelledby": unref(rootContext).titleId,
					"data-state": unref(getOpenState)(unref(rootContext).open.value)
				}, _ctx.$attrs, {
					onDismiss: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false)),
					onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
					onFocusOutside: _cache[2] || (_cache[2] = ($event) => emits("focusOutside", $event)),
					onInteractOutside: _cache[3] || (_cache[3] = ($event) => emits("interactOutside", $event)),
					onPointerDownOutside: _cache[4] || (_cache[4] = ($event) => emits("pointerDownOutside", $event))
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"as",
					"as-child",
					"disable-outside-pointer-events",
					"aria-describedby",
					"aria-labelledby",
					"data-state"
				])]),
				_: 3
			}, 8, ["trapped"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogContentModal.js
var DialogContentModal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentModal",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
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
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const emitsAsProps = useEmitAsProps(emits);
		const { forwardRef, currentElement } = useForwardExpose();
		useHideOthers(currentElement);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DialogContentImpl_default, mergeProps({
				...props,
				...unref(emitsAsProps)
			}, {
				ref: unref(forwardRef),
				"trap-focus": unref(rootContext).open.value,
				"disable-outside-pointer-events": true,
				onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
					if (!event.defaultPrevented) {
						event.preventDefault();
						unref(rootContext).triggerElement.value?.focus();
					}
				}),
				onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
					const originalEvent = event.detail.originalEvent;
					const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
					if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
				}),
				onFocusOutside: _cache[2] || (_cache[2] = (event) => {
					event.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["trap-focus"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogContentNonModal.js
var DialogContentNonModal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentNonModal",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
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
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		const rootContext = injectDialogRootContext();
		const hasInteractedOutsideRef = ref(false);
		const hasPointerDownOutsideRef = ref(false);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DialogContentImpl_default, mergeProps({
				...props,
				...unref(emitsAsProps)
			}, {
				"trap-focus": false,
				"disable-outside-pointer-events": false,
				onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
					if (!event.defaultPrevented) {
						if (!hasInteractedOutsideRef.value) unref(rootContext).triggerElement.value?.focus();
						event.preventDefault();
					}
					hasInteractedOutsideRef.value = false;
					hasPointerDownOutsideRef.value = false;
				}),
				onInteractOutside: _cache[1] || (_cache[1] = (event) => {
					if (!event.defaultPrevented) {
						hasInteractedOutsideRef.value = true;
						if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.value = true;
					}
					const target = event.target;
					if (unref(rootContext).triggerElement.value?.contains(target)) event.preventDefault();
					if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.value) event.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogContent.js
var DialogContent_default$1 = /* @__PURE__ */ defineComponent({
	__name: "DialogContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
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
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const emitsAsProps = useEmitAsProps(emits);
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
				default: withCtx(() => [unref(rootContext).modal.value ? (openBlock(), createBlock(DialogContentModal_default, mergeProps({
					key: 0,
					ref: unref(forwardRef)
				}, {
					...props,
					...unref(emitsAsProps),
					..._ctx.$attrs
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16)) : (openBlock(), createBlock(DialogContentNonModal_default, mergeProps({
					key: 1,
					ref: unref(forwardRef)
				}, {
					...props,
					...unref(emitsAsProps),
					..._ctx.$attrs
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16))]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogDescription.js
var DialogDescription_default$1 = /* @__PURE__ */ defineComponent({
	__name: "DialogDescription",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "p"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectDialogRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(rootContext).descriptionId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogOverlayImpl.js
var DialogOverlayImpl_default = /* @__PURE__ */ defineComponent({
	__name: "DialogOverlayImpl",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const rootContext = injectDialogRootContext();
		useBodyScrollLock(true);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: _ctx.as,
				"as-child": _ctx.asChild,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				style: { "pointer-events": "auto" }
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-state"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogOverlay.js
var DialogOverlay_default$1 = /* @__PURE__ */ defineComponent({
	__name: "DialogOverlay",
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
	setup(__props) {
		const rootContext = injectDialogRootContext();
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return unref(rootContext)?.modal.value ? (openBlock(), createBlock(unref(Presence_default), {
				key: 0,
				present: _ctx.forceMount || unref(rootContext).open.value
			}, {
				default: withCtx(() => [createVNode(DialogOverlayImpl_default, mergeProps(_ctx.$attrs, {
					ref: unref(forwardRef),
					as: _ctx.as,
					"as-child": _ctx.asChild
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["as", "as-child"])]),
				_: 3
			}, 8, ["present"])) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogPortal.js
var DialogPortal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Dialog/DialogTitle.js
var DialogTitle_default$1 = /* @__PURE__ */ defineComponent({
	__name: "DialogTitle",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "h2"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDialogRootContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(rootContext).titleId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/DialogClose.vue?vue&type=script&setup=true&lang.ts
var DialogClose_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DialogClose",
	props: { asChild: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.asChild ? (openBlock(), createBlock(unref(DialogClose_default$1), {
				key: 0,
				"as-child": ""
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			})) : (openBlock(), createBlock(unref(DialogClose_default$1), {
				key: 1,
				class: normalizeClass(_ctx.$style["close-button"]),
				"aria-label": "Close dialog",
				"data-test-id": "dialog-close-button"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(Icon_default, { icon: "x" })])]),
				_: 3
			}, 8, ["class"]));
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/DialogClose.vue?vue&type=style&index=0&lang.module.scss
var DialogClose_vue_vue_type_style_index_0_lang_module_default = { "close-button": "_close-button_1ta9a_125" };
var DialogClose_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DialogClose_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DialogClose_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/DialogContent.vue?vue&type=script&setup=true&lang.ts
var DialogContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContent",
	props: {
		size: { default: "medium" },
		forceMount: { type: Boolean },
		trapFocus: {
			type: Boolean,
			default: true
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			default: true
		},
		showCloseButton: {
			type: Boolean,
			default: true
		},
		ariaLabel: {},
		ariaDescription: {},
		stacked: { type: Boolean }
	},
	emits: [
		"escapeKeyDown",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const $style = useCssModule();
		const sizeClasses = {
			small: $style.small,
			medium: $style.medium,
			large: $style.large,
			xlarge: $style.xlarge,
			"2xlarge": $style["2xlarge"],
			fit: $style.fit,
			full: $style.full,
			cover: $style.cover
		};
		const sizeClass = computed(() => sizeClasses[props.size]);
		/** ARIA Fallbacks: These are visually hidden but accessible to screen readers **/
		const needsFallbackTitle = computed(() => !!props.ariaLabel);
		const needsFallbackDescription = computed(() => !!props.ariaDescription);
		/**
		* Handles outside interaction events to prevent Reka UI from closing the dialog
		* when interacting with Element Plus teleported elements (dropdowns, selects, overlays).
		* These elements are teleported to body as siblings of the dialog, so Reka UI's
		* DismissableLayer detects clicks on them as "outside" clicks.
		*
		* TODO: Remove once Element Plus components are migrated to Reka UI, and replace with a simple emit.
		*/
		function handleInteractOutside(e) {
			if (e.target?.closest(".el-popper, .el-select-dropdown, .el-overlay")) e.preventDefault();
			emit("interactOutside", e);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogContent_default$1), {
				"force-mount": __props.forceMount,
				"trap-focus": __props.trapFocus,
				"disable-outside-pointer-events": __props.disableOutsidePointerEvents,
				class: normalizeClass([
					unref($style).content,
					sizeClass.value,
					__props.stacked && unref($style).stacked
				]),
				onEscapeKeyDown: _cache[0] || (_cache[0] = ($event) => emit("escapeKeyDown", $event)),
				onInteractOutside: handleInteractOutside,
				onOpenAutoFocus: _cache[1] || (_cache[1] = ($event) => emit("openAutoFocus", $event)),
				onCloseAutoFocus: _cache[2] || (_cache[2] = ($event) => emit("closeAutoFocus", $event))
			}, {
				default: withCtx(() => [
					needsFallbackTitle.value ? (openBlock(), createBlock(unref(VisuallyHidden_default), {
						key: 0,
						"as-child": ""
					}, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default$1), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.ariaLabel), 1)]),
							_: 1
						})]),
						_: 1
					})) : createCommentVNode("", true),
					needsFallbackDescription.value ? (openBlock(), createBlock(unref(VisuallyHidden_default), {
						key: 1,
						"as-child": ""
					}, {
						default: withCtx(() => [createVNode(unref(DialogDescription_default$1), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.ariaDescription), 1)]),
							_: 1
						})]),
						_: 1
					})) : createCommentVNode("", true),
					renderSlot(_ctx.$slots, "default"),
					__props.showCloseButton ? (openBlock(), createBlock(DialogClose_default, { key: 2 })) : createCommentVNode("", true)
				]),
				_: 3
			}, 8, [
				"force-mount",
				"trap-focus",
				"disable-outside-pointer-events",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/DialogContent.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_2ytjg_145";
var stacked$1 = "_stacked_2ytjg_162";
var dialogFadeIn = "_dialogFadeIn_2ytjg_1";
var dialogFadeOut = "_dialogFadeOut_2ytjg_1";
var small = "_small_2ytjg_174";
var medium = "_medium_2ytjg_183";
var large = "_large_2ytjg_192";
var xlarge = "_xlarge_2ytjg_201";
var fit = "_fit_2ytjg_219";
var full = "_full_2ytjg_224";
var cover = "_cover_2ytjg_228";
var DialogContent_vue_vue_type_style_index_0_lang_module_default = {
	content,
	stacked: stacked$1,
	dialogFadeIn,
	dialogFadeOut,
	small,
	medium,
	large,
	xlarge,
	"2xlarge": "_2xlarge_2ytjg_210",
	fit,
	full,
	cover
};
var DialogContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DialogContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DialogContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/DialogDescription.vue?vue&type=script&setup=true&lang.ts
var DialogDescription_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DialogDescription",
	props: { asChild: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogDescription_default$1), {
				"as-child": __props.asChild,
				class: normalizeClass(_ctx.$style.description)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["as-child", "class"]);
		};
	}
});
var DialogDescription_vue_vue_type_style_index_0_lang_module_default = { description: "_description_1frqr_2" };
var DialogDescription_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DialogDescription_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DialogDescription_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/DialogHeader.vue?vue&type=script&setup=true&lang.ts
var DialogHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DialogHeader",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", { class: normalizeClass(_ctx.$style.header) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var DialogHeader_vue_vue_type_style_index_0_lang_module_default = { header: "_header_14mig_2" };
var DialogHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DialogHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DialogHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/DialogOverlay.vue?vue&type=script&setup=true&lang.ts
var DialogOverlay_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DialogOverlay",
	props: {
		forceMount: { type: Boolean },
		stacked: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogOverlay_default$1), { class: normalizeClass([_ctx.$style.overlay, __props.stacked && _ctx.$style.stacked]) }, null, 8, ["class"]);
		};
	}
});
var DialogOverlay_vue_vue_type_style_index_0_lang_module_default = {
	overlay: "_overlay_m2nn5_141",
	stacked: "_stacked_m2nn5_149",
	overlayFadeIn: "_overlayFadeIn_m2nn5_1",
	overlayFadeOut: "_overlayFadeOut_m2nn5_1"
};
var DialogOverlay_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DialogOverlay_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DialogOverlay_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/DialogTitle.vue?vue&type=script&setup=true&lang.ts
var DialogTitle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DialogTitle",
	props: { asChild: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogTitle_default$1), {
				"as-child": __props.asChild,
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["as-child", "class"]);
		};
	}
});
var DialogTitle_vue_vue_type_style_index_0_lang_module_default = { title: "_title_19uaa_2" };
var DialogTitle_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DialogTitle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DialogTitle_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DialogContent_default as a, DialogRoot_default as c, DialogDescription_default as i, DialogOverlay_default as n, DialogClose_default as o, DialogHeader_default as r, DialogPortal_default as s, DialogTitle_default as t };
