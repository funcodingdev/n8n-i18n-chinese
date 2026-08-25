import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, O as createSlots, R as inject, S as computed, T as createCommentVNode, U as mergeProps, V as mergeDefaults, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, _t as watchEffect, at as resolveComponent, bn as normalizeStyle, bt as withCtx, c as useCssModule, ft as useSlots, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, jt as isRef, m as withKeys, q as onBeforeUnmount, rt as renderList, tt as provide, ut as useId, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { n as Button_default } from "./N8nButton-BNSG8N0P.js";
import { t as Icon_default } from "./Icon-D-jZgYpP.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { n as Text_default } from "./N8nText-MUZN9Sd-.js";
import { c as useForwardExpose, d as useEventListener, i as Presence_default, j as createContext, m as useVModel, n as Primitive, o as useId$1, v as createSharedComposable } from "./VisuallyHidden-OSLEy_KR.js";
import { n as getActiveElement, t as useDirection } from "./useDirection-C9_E-bw1.js";
import { a as PopperRoot_default, d as useEmitAsProps, i as PopperAnchor_default, n as PopperContent_default, o as Teleport_default, s as DismissableLayer_default, t as PopperContentPropsDefaultValue, u as useForwardPropsEmits } from "./PopperContent-CAUwWps2.js";
import { n as useBodyScrollLock, t as useHideOthers } from "./useHideOthers-Cz1LBL9y.js";
import { t as useFocusGuards } from "./useFocusGuards-CBp7GvgP.js";
import { t as useTypeahead } from "./useTypeahead-XmOW8_BU.js";
import { o as useCollection, t as RovingFocusGroup_default } from "./RovingFocusGroup-CqmzBffz.js";
import { t as FocusScope_default } from "./FocusScope-B624AD2F.js";
import { a as SUB_CLOSE_KEYS, c as getCheckedState, d as isMouseEvent, f as isPointerInGraceArea, i as SELECTION_KEYS, l as getOpenState, n as ITEM_SELECT, o as SUB_OPEN_KEYS, r as LAST_KEYS, s as focusFirst, t as FIRST_LAST_KEYS, u as isIndeterminate } from "./utils-sct7vtfH.js";
import { t as N8nLoading_default } from "./N8nLoading-COb2kWGg.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/shared/useArrowNavigation.js
var ignoredElement = ["INPUT", "TEXTAREA"];
/**
* Allow arrow navigation for every html element with data-reka-collection-item tag
*
* @param e               Keyboard event
* @param currentElement  Event initiator element or any element that wants to handle the navigation
* @param parentElement   Parent element where contains all the collection items, this will collect every item to be used when nav
* @param options         further options
* @returns               the navigated html element or null if none
*/
function useArrowNavigation(e, currentElement, parentElement, options = {}) {
	if (!currentElement || options.enableIgnoredElement && ignoredElement.includes(currentElement.nodeName)) return null;
	const { arrowKeyOptions = "both", attributeName = "[data-reka-collection-item]", itemsArray = [], loop = true, dir = "ltr", preventScroll = true, focus = false } = options;
	const [right, left, up, down, home, end] = [
		e.key === "ArrowRight",
		e.key === "ArrowLeft",
		e.key === "ArrowUp",
		e.key === "ArrowDown",
		e.key === "Home",
		e.key === "End"
	];
	const goingVertical = up || down;
	const goingHorizontal = right || left;
	if (!home && !end && (!goingVertical && !goingHorizontal || arrowKeyOptions === "vertical" && goingHorizontal || arrowKeyOptions === "horizontal" && goingVertical)) return null;
	const allCollectionItems = parentElement ? Array.from(parentElement.querySelectorAll(attributeName)) : itemsArray;
	if (!allCollectionItems.length) return null;
	if (preventScroll) e.preventDefault();
	let item = null;
	if (goingHorizontal || goingVertical) item = findNextFocusableElement(allCollectionItems, currentElement, {
		goForward: goingVertical ? down : dir === "ltr" ? right : left,
		loop
	});
	else if (home) item = allCollectionItems.at(0) || null;
	else if (end) item = allCollectionItems.at(-1) || null;
	if (focus) item?.focus();
	return item;
}
/**
* Recursive function to find the next focusable element to avoid disabled elements
*
* @param elements Elements to navigate
* @param currentElement Current active element
* @param options
* @returns next focusable element
*/
function findNextFocusableElement(elements, currentElement, options, iterations = elements.length) {
	if (--iterations === 0) return null;
	const index = elements.indexOf(currentElement);
	const newIndex = options.goForward ? index + 1 : index - 1;
	if (!options.loop && (newIndex < 0 || newIndex >= elements.length)) return null;
	const candidate = elements[(newIndex + elements.length) % elements.length];
	if (!candidate) return null;
	if (candidate.hasAttribute("disabled") && candidate.getAttribute("disabled") !== "false") return findNextFocusableElement(elements, candidate, options, iterations);
	return candidate;
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuAnchor.js
var MenuAnchor_default = /* @__PURE__ */ defineComponent({
	__name: "MenuAnchor",
	props: {
		reference: {
			type: null,
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
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/shared/useIsUsingKeyboard.js
function useIsUsingKeyboardImpl() {
	const isUsingKeyboard = ref(false);
	onMounted(() => {
		useEventListener("keydown", () => {
			isUsingKeyboard.value = true;
		}, {
			capture: true,
			passive: true
		});
		useEventListener(["pointerdown", "pointermove"], () => {
			isUsingKeyboard.value = false;
		}, {
			capture: true,
			passive: true
		});
	});
	return isUsingKeyboard;
}
var useIsUsingKeyboard = createSharedComposable(useIsUsingKeyboardImpl);
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuRoot.js
var [injectMenuContext, provideMenuContext] = createContext(["MenuRoot", "MenuSub"], "MenuContext");
var [injectMenuRootContext, provideMenuRootContext] = createContext("MenuRoot");
var MenuRoot_default = /* @__PURE__ */ defineComponent({
	__name: "MenuRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: false
		},
		dir: {
			type: String,
			required: false
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
		const emits = __emit;
		const { modal, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		const open = useVModel(props, "open", emits);
		const content = ref();
		const isUsingKeyboardRef = useIsUsingKeyboard();
		provideMenuContext({
			open,
			onOpenChange: (value) => {
				open.value = value;
			},
			content,
			onContentChange: (element) => {
				content.value = element;
			}
		});
		provideMenuRootContext({
			onClose: () => {
				open.value = false;
			},
			isUsingKeyboardRef,
			dir,
			modal
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuContentImpl.js
var [injectMenuContentContext, provideMenuContentContext] = createContext("MenuContent");
var MenuContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "MenuContentImpl",
	props: /* @__PURE__ */ mergeDefaults({
		loop: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		},
		disableOutsideScroll: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
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
	}, { ...PopperContentPropsDefaultValue }),
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus",
		"dismiss"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const menuContext = injectMenuContext();
		const rootContext = injectMenuRootContext();
		const { trapFocus, disableOutsidePointerEvents, loop } = toRefs(props);
		useFocusGuards();
		useBodyScrollLock(disableOutsidePointerEvents.value);
		const searchRef = ref("");
		const timerRef = ref(0);
		const pointerGraceTimerRef = ref(0);
		const pointerGraceIntentRef = ref(null);
		const pointerDirRef = ref("right");
		const lastPointerXRef = ref(0);
		const currentItemId = ref(null);
		const rovingFocusGroupRef = ref();
		const { forwardRef, currentElement: contentElement } = useForwardExpose();
		const { handleTypeaheadSearch } = useTypeahead();
		watch(contentElement, (el) => {
			menuContext.onContentChange(el);
		});
		onUnmounted(() => {
			window.clearTimeout(timerRef.value);
		});
		function isPointerMovingToSubmenu(event) {
			return pointerDirRef.value === pointerGraceIntentRef.value?.side && isPointerInGraceArea(event, pointerGraceIntentRef.value?.area);
		}
		async function handleMountAutoFocus(event) {
			emits("openAutoFocus", event);
			if (event.defaultPrevented) return;
			event.preventDefault();
			contentElement.value?.focus({ preventScroll: true });
		}
		function handleKeyDown(event) {
			if (event.defaultPrevented) return;
			const isKeyDownInside = event.target.closest("[data-reka-menu-content]") === event.currentTarget;
			const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
			const isCharacterKey = event.key.length === 1;
			const el = useArrowNavigation(event, getActiveElement(), contentElement.value, {
				loop: loop.value,
				arrowKeyOptions: "vertical",
				dir: rootContext?.dir.value,
				focus: true,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			if (el) return el?.focus();
			if (event.code === "Space") return;
			const collectionItems = rovingFocusGroupRef.value?.getItems() ?? [];
			if (isKeyDownInside) {
				if (event.key === "Tab") event.preventDefault();
				if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key, collectionItems);
			}
			if (event.target !== contentElement.value) return;
			if (!FIRST_LAST_KEYS.includes(event.key)) return;
			event.preventDefault();
			const candidateNodes = [...collectionItems.map((item) => item.ref)];
			if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
			focusFirst(candidateNodes);
		}
		function handleBlur(event) {
			if (!event?.currentTarget?.contains?.(event.target)) {
				window.clearTimeout(timerRef.value);
				searchRef.value = "";
			}
		}
		function handlePointerMove(event) {
			if (!isMouseEvent(event)) return;
			const target = event.target;
			const pointerXHasChanged = lastPointerXRef.value !== event.clientX;
			if ((event?.currentTarget)?.contains(target) && pointerXHasChanged) {
				pointerDirRef.value = event.clientX > lastPointerXRef.value ? "right" : "left";
				lastPointerXRef.value = event.clientX;
			}
		}
		provideMenuContentContext({
			onItemEnter: (event) => {
				if (isPointerMovingToSubmenu(event)) return true;
				else return false;
			},
			onItemLeave: (event) => {
				if (isPointerMovingToSubmenu(event)) return;
				contentElement.value?.focus();
				currentItemId.value = null;
			},
			onTriggerLeave: (event) => {
				if (isPointerMovingToSubmenu(event)) return true;
				else return false;
			},
			searchRef,
			pointerGraceTimerRef,
			onPointerGraceIntentChange: (intent) => {
				pointerGraceIntentRef.value = intent;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(FocusScope_default), {
				"as-child": "",
				trapped: unref(trapFocus),
				onMountAutoFocus: handleMountAutoFocus,
				onUnmountAutoFocus: _cache[7] || (_cache[7] = ($event) => emits("closeAutoFocus", $event))
			}, {
				default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
					"as-child": "",
					"disable-outside-pointer-events": unref(disableOutsidePointerEvents),
					onEscapeKeyDown: _cache[2] || (_cache[2] = ($event) => emits("escapeKeyDown", $event)),
					onPointerDownOutside: _cache[3] || (_cache[3] = ($event) => emits("pointerDownOutside", $event)),
					onFocusOutside: _cache[4] || (_cache[4] = ($event) => emits("focusOutside", $event)),
					onInteractOutside: _cache[5] || (_cache[5] = ($event) => emits("interactOutside", $event)),
					onDismiss: _cache[6] || (_cache[6] = ($event) => emits("dismiss"))
				}, {
					default: withCtx(() => [createVNode(unref(RovingFocusGroup_default), {
						ref_key: "rovingFocusGroupRef",
						ref: rovingFocusGroupRef,
						"current-tab-stop-id": currentItemId.value,
						"onUpdate:currentTabStopId": _cache[0] || (_cache[0] = ($event) => currentItemId.value = $event),
						"as-child": "",
						orientation: "vertical",
						dir: unref(rootContext).dir.value,
						loop: unref(loop),
						onEntryFocus: _cache[1] || (_cache[1] = (event) => {
							emits("entryFocus", event);
							if (!unref(rootContext).isUsingKeyboardRef.value) event.preventDefault();
						})
					}, {
						default: withCtx(() => [createVNode(unref(PopperContent_default), {
							ref: unref(forwardRef),
							role: "menu",
							as: _ctx.as,
							"as-child": _ctx.asChild,
							"aria-orientation": "vertical",
							"data-reka-menu-content": "",
							"data-state": unref(getOpenState)(unref(menuContext).open.value),
							dir: unref(rootContext).dir.value,
							side: _ctx.side,
							"side-offset": _ctx.sideOffset,
							align: _ctx.align,
							"align-offset": _ctx.alignOffset,
							"avoid-collisions": _ctx.avoidCollisions,
							"collision-boundary": _ctx.collisionBoundary,
							"collision-padding": _ctx.collisionPadding,
							"arrow-padding": _ctx.arrowPadding,
							"prioritize-position": _ctx.prioritizePosition,
							"position-strategy": _ctx.positionStrategy,
							"update-position-strategy": _ctx.updatePositionStrategy,
							sticky: _ctx.sticky,
							"hide-when-detached": _ctx.hideWhenDetached,
							reference: _ctx.reference,
							onKeydown: handleKeyDown,
							onBlur: handleBlur,
							onPointermove: handlePointerMove
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 8, [
							"as",
							"as-child",
							"data-state",
							"dir",
							"side",
							"side-offset",
							"align",
							"align-offset",
							"avoid-collisions",
							"collision-boundary",
							"collision-padding",
							"arrow-padding",
							"prioritize-position",
							"position-strategy",
							"update-position-strategy",
							"sticky",
							"hide-when-detached",
							"reference"
						])]),
						_: 3
					}, 8, [
						"current-tab-stop-id",
						"dir",
						"loop"
					])]),
					_: 3
				}, 8, ["disable-outside-pointer-events"])]),
				_: 3
			}, 8, ["trapped"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuItemImpl.js
var MenuItemImpl_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "MenuItemImpl",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
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
		const props = __props;
		const contentContext = injectMenuContentContext();
		const { forwardRef } = useForwardExpose();
		const { CollectionItem } = useCollection();
		const isFocused = ref(false);
		async function handlePointerMove(event) {
			if (event.defaultPrevented) return;
			if (!isMouseEvent(event)) return;
			if (props.disabled) contentContext.onItemLeave(event);
			else if (!contentContext.onItemEnter(event)) event.currentTarget?.focus({ preventScroll: true });
		}
		async function handlePointerLeave(event) {
			await nextTick();
			if (event.defaultPrevented) return;
			if (!isMouseEvent(event)) return;
			contentContext.onItemLeave(event);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), { value: { textValue: _ctx.textValue } }, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					role: "menuitem",
					tabindex: "-1"
				}, _ctx.$attrs, {
					as: _ctx.as,
					"as-child": _ctx.asChild,
					"aria-disabled": _ctx.disabled || void 0,
					"data-disabled": _ctx.disabled ? "" : void 0,
					"data-highlighted": isFocused.value ? "" : void 0,
					onPointermove: handlePointerMove,
					onPointerleave: handlePointerLeave,
					onFocus: _cache[0] || (_cache[0] = async (event) => {
						await nextTick();
						if (event.defaultPrevented || _ctx.disabled) return;
						isFocused.value = true;
					}),
					onBlur: _cache[1] || (_cache[1] = async (event) => {
						await nextTick();
						if (event.defaultPrevented) return;
						isFocused.value = false;
					})
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"as",
					"as-child",
					"aria-disabled",
					"data-disabled",
					"data-highlighted"
				])]),
				_: 3
			}, 8, ["value"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuItem.js
var MenuItem_default = /* @__PURE__ */ defineComponent({
	__name: "MenuItem",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
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
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectMenuRootContext();
		const contentContext = injectMenuContentContext();
		const isPointerDownRef = ref(false);
		async function handleSelect() {
			const menuItem = currentElement.value;
			if (!props.disabled && menuItem) {
				const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
					bubbles: true,
					cancelable: true
				});
				emits("select", itemSelectEvent);
				await nextTick();
				if (itemSelectEvent.defaultPrevented) isPointerDownRef.value = false;
				else rootContext.onClose();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuItemImpl_default, mergeProps(props, {
				ref: unref(forwardRef),
				onClick: handleSelect,
				onPointerdown: _cache[0] || (_cache[0] = () => {
					isPointerDownRef.value = true;
				}),
				onPointerup: _cache[1] || (_cache[1] = async (event) => {
					await nextTick();
					if (event.defaultPrevented) return;
					if (!isPointerDownRef.value) event.currentTarget?.click();
				}),
				onKeydown: _cache[2] || (_cache[2] = async (event) => {
					const isTypingAhead = unref(contentContext).searchRef.value !== "";
					if (_ctx.disabled || isTypingAhead && event.key === " ") return;
					if (unref(SELECTION_KEYS).includes(event.key)) {
						event.currentTarget.click();
						/**
						* We prevent default browser behaviour for selection keys as they should trigger
						* a selection only:
						* - prevents space from scrolling the page.
						* - if keydown causes focus to move, prevents keydown from firing on the new target.
						*/
						event.preventDefault();
					}
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuItemIndicator.js
var [injectMenuItemIndicatorContext, provideMenuItemIndicatorContext] = createContext(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext");
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuCheckboxItem.js
var MenuCheckboxItem_default = /* @__PURE__ */ defineComponent({
	__name: "MenuCheckboxItem",
	props: {
		modelValue: {
			type: [Boolean, String],
			required: false,
			default: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
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
	emits: ["select", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const modelValue = useVModel(props, "modelValue", emits);
		provideMenuItemIndicatorContext({ modelValue });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuItem_default, mergeProps({ role: "menuitemcheckbox" }, props, {
				"aria-checked": unref(isIndeterminate)(unref(modelValue)) ? "mixed" : unref(modelValue),
				"data-state": unref(getCheckedState)(unref(modelValue)),
				onSelect: _cache[0] || (_cache[0] = async (event) => {
					emits("select", event);
					if (unref(isIndeterminate)(unref(modelValue))) modelValue.value = true;
					else modelValue.value = !unref(modelValue);
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
				_: 3
			}, 16, ["aria-checked", "data-state"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuRootContentModal.js
var MenuRootContentModal_default = /* @__PURE__ */ defineComponent({
	__name: "MenuRootContentModal",
	props: {
		loop: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(props, emits);
		const menuContext = injectMenuContext();
		const { forwardRef, currentElement } = useForwardExpose();
		useHideOthers(currentElement);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuContentImpl_default, mergeProps(unref(forwarded), {
				ref: unref(forwardRef),
				"trap-focus": unref(menuContext).open.value,
				"disable-outside-pointer-events": unref(menuContext).open.value,
				"disable-outside-scroll": true,
				onDismiss: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onOpenChange(false)),
				onFocusOutside: _cache[1] || (_cache[1] = withModifiers(($event) => emits("focusOutside", $event), ["prevent"]))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["trap-focus", "disable-outside-pointer-events"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuRootContentNonModal.js
var MenuRootContentNonModal_default = /* @__PURE__ */ defineComponent({
	__name: "MenuRootContentNonModal",
	props: {
		loop: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const menuContext = injectMenuContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuContentImpl_default, mergeProps(unref(forwarded), {
				"trap-focus": false,
				"disable-outside-pointer-events": false,
				"disable-outside-scroll": false,
				onDismiss: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onOpenChange(false))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuContent.js
var MenuContent_default = /* @__PURE__ */ defineComponent({
	__name: "MenuContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const menuContext = injectMenuContext();
		const rootContext = injectMenuRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(menuContext).open.value }, {
				default: withCtx(() => [unref(rootContext).modal.value ? (openBlock(), createBlock(MenuRootContentModal_default, normalizeProps(mergeProps({ key: 0 }, {
					..._ctx.$attrs,
					...unref(forwarded)
				})), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16)) : (openBlock(), createBlock(MenuRootContentNonModal_default, normalizeProps(mergeProps({ key: 1 }, {
					..._ctx.$attrs,
					...unref(forwarded)
				})), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16))]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuLabel.js
var MenuLabel_default = /* @__PURE__ */ defineComponent({
	__name: "MenuLabel",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuPortal.js
var MenuPortal_default = /* @__PURE__ */ defineComponent({
	__name: "MenuPortal",
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
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuSeparator.js
var MenuSeparator_default = /* @__PURE__ */ defineComponent({
	__name: "MenuSeparator",
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
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				role: "separator",
				"aria-orientation": "horizontal"
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuSub.js
var [injectMenuSubContext, provideMenuSubContext] = createContext("MenuSub");
var MenuSub_default = /* @__PURE__ */ defineComponent({
	__name: "MenuSub",
	props: { open: {
		type: Boolean,
		required: false,
		default: void 0
	} },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const open = useVModel(props, "open", __emit, {
			defaultValue: false,
			passive: props.open === void 0
		});
		const parentMenuContext = injectMenuContext();
		const trigger = ref();
		const content = ref();
		watchEffect((cleanupFn) => {
			if (parentMenuContext?.open.value === false) open.value = false;
			cleanupFn(() => open.value = false);
		});
		provideMenuContext({
			open,
			onOpenChange: (value) => {
				open.value = value;
			},
			content,
			onContentChange: (element) => {
				content.value = element;
			}
		});
		provideMenuSubContext({
			triggerId: "",
			contentId: "",
			trigger,
			onTriggerChange: (element) => {
				trigger.value = element;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuSubContent.js
var MenuSubContent_default = /* @__PURE__ */ defineComponent({
	__name: "MenuSubContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false,
			default: true
		},
		reference: {
			type: null,
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const menuContext = injectMenuContext();
		const rootContext = injectMenuRootContext();
		const menuSubContext = injectMenuSubContext();
		const { forwardRef, currentElement: subContentElement } = useForwardExpose();
		menuSubContext.contentId ||= useId$1(void 0, "reka-menu-sub-content");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(menuContext).open.value }, {
				default: withCtx(() => [createVNode(MenuContentImpl_default, mergeProps(unref(forwarded), {
					id: unref(menuSubContext).contentId,
					ref: unref(forwardRef),
					"aria-labelledby": unref(menuSubContext).triggerId,
					align: "start",
					side: unref(rootContext).dir.value === "rtl" ? "left" : "right",
					"disable-outside-pointer-events": false,
					"disable-outside-scroll": false,
					"trap-focus": false,
					onOpenAutoFocus: _cache[0] || (_cache[0] = withModifiers((event) => {
						if (unref(rootContext).isUsingKeyboardRef.value) unref(subContentElement)?.focus();
					}, ["prevent"])),
					onCloseAutoFocus: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"])),
					onFocusOutside: _cache[2] || (_cache[2] = (event) => {
						if (event.defaultPrevented) return;
						if (event.target !== unref(menuSubContext).trigger.value) unref(menuContext).onOpenChange(false);
					}),
					onEscapeKeyDown: _cache[3] || (_cache[3] = (event) => {
						unref(rootContext).onClose();
						event.preventDefault();
					}),
					onKeydown: _cache[4] || (_cache[4] = (event) => {
						const isKeyDownInside = event.currentTarget?.contains(event.target);
						const isCloseKey = unref(SUB_CLOSE_KEYS)[unref(rootContext).dir.value].includes(event.key);
						if (isKeyDownInside && isCloseKey) {
							unref(menuContext).onOpenChange(false);
							unref(menuSubContext).trigger.value?.focus();
							event.preventDefault();
						}
					})
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"aria-labelledby",
					"side"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/MenuSubTrigger.js
var MenuSubTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "MenuSubTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
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
		const props = __props;
		const menuContext = injectMenuContext();
		const rootContext = injectMenuRootContext();
		const subContext = injectMenuSubContext();
		const contentContext = injectMenuContentContext();
		const openTimerRef = ref(null);
		subContext.triggerId ||= useId$1(void 0, "reka-menu-sub-trigger");
		function clearOpenTimer() {
			if (openTimerRef.value) window.clearTimeout(openTimerRef.value);
			openTimerRef.value = null;
		}
		onUnmounted(() => {
			clearOpenTimer();
		});
		function handlePointerMove(event) {
			if (!isMouseEvent(event)) return;
			if (contentContext.onItemEnter(event)) return;
			if (!props.disabled && !menuContext.open.value && !openTimerRef.value) {
				contentContext.onPointerGraceIntentChange(null);
				openTimerRef.value = window.setTimeout(() => {
					menuContext.onOpenChange(true);
					clearOpenTimer();
				}, 100);
			}
		}
		async function handlePointerLeave(event) {
			if (!isMouseEvent(event)) return;
			clearOpenTimer();
			const contentRect = menuContext.content.value?.getBoundingClientRect();
			if (contentRect?.width) {
				const side = menuContext.content.value?.dataset.side;
				const rightSide = side === "right";
				const bleed = rightSide ? -5 : 5;
				const contentNearEdge = contentRect[rightSide ? "left" : "right"];
				const contentFarEdge = contentRect[rightSide ? "right" : "left"];
				contentContext.onPointerGraceIntentChange({
					area: [
						{
							x: event.clientX + bleed,
							y: event.clientY
						},
						{
							x: contentNearEdge,
							y: contentRect.top
						},
						{
							x: contentFarEdge,
							y: contentRect.top
						},
						{
							x: contentFarEdge,
							y: contentRect.bottom
						},
						{
							x: contentNearEdge,
							y: contentRect.bottom
						}
					],
					side
				});
				window.clearTimeout(contentContext.pointerGraceTimerRef.value);
				contentContext.pointerGraceTimerRef.value = window.setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
			} else {
				if (contentContext.onTriggerLeave(event)) return;
				contentContext.onPointerGraceIntentChange(null);
			}
		}
		async function handleKeyDown(event) {
			const isTypingAhead = contentContext.searchRef.value !== "";
			if (props.disabled || isTypingAhead && event.key === " ") return;
			if (SUB_OPEN_KEYS[rootContext.dir.value].includes(event.key)) {
				menuContext.onOpenChange(true);
				await nextTick();
				menuContext.content.value?.focus();
				event.preventDefault();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuAnchor_default, { "as-child": "" }, {
				default: withCtx(() => [createVNode(MenuItemImpl_default, mergeProps(props, {
					id: unref(subContext).triggerId,
					ref: (vnode) => {
						unref(subContext)?.onTriggerChange(vnode?.$el);
					},
					"aria-haspopup": "menu",
					"aria-expanded": unref(menuContext).open.value,
					"aria-controls": unref(subContext).contentId,
					"data-state": unref(getOpenState)(unref(menuContext).open.value),
					onClick: _cache[0] || (_cache[0] = async (event) => {
						if (props.disabled || event.defaultPrevented) return;
						/**
						* We manually focus because iOS Safari doesn't always focus on click (e.g. buttons)
						* and we rely heavily on `onFocusOutside` for submenus to close when switching
						* between separate submenus.
						*/
						event.currentTarget.focus();
						if (!unref(menuContext).open.value) unref(menuContext).onOpenChange(true);
					}),
					onPointermove: handlePointerMove,
					onPointerleave: handlePointerLeave,
					onKeydown: handleKeyDown
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"aria-expanded",
					"aria-controls",
					"data-state"
				])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuCheckboxItem.js
var DropdownMenuCheckboxItem_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuCheckboxItem",
	props: {
		modelValue: {
			type: [Boolean, String],
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
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
	emits: ["select", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuCheckboxItem_default), normalizeProps(guardReactiveProps({
				...props,
				...unref(emitsAsProps)
			})), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuRoot.js
var [injectDropdownMenuRootContext, provideDropdownMenuRootContext] = createContext("DropdownMenuRoot");
var DropdownMenuRoot_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		dir: {
			type: String,
			required: false
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
		const emit = __emit;
		useForwardExpose();
		const open = useVModel(props, "open", emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const triggerElement = ref();
		const { modal, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		provideDropdownMenuRootContext({
			open,
			onOpenChange: (value) => {
				open.value = value;
			},
			onOpenToggle: () => {
				open.value = !open.value;
			},
			triggerId: "",
			triggerElement,
			contentId: "",
			modal,
			dir
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuRoot_default), {
				open: unref(open),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null),
				dir: unref(dir),
				modal: unref(modal)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
				_: 3
			}, 8, [
				"open",
				"dir",
				"modal"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuContent.js
var DropdownMenuContent_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
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
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		useForwardExpose();
		const rootContext = injectDropdownMenuRootContext();
		const hasInteractedOutsideRef = ref(false);
		function handleCloseAutoFocus(event) {
			if (event.defaultPrevented) return;
			if (!hasInteractedOutsideRef.value) setTimeout(() => {
				rootContext.triggerElement.value?.focus();
			}, 0);
			hasInteractedOutsideRef.value = false;
			event.preventDefault();
		}
		rootContext.contentId ||= useId$1(void 0, "reka-dropdown-menu-content");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuContent_default), mergeProps(unref(forwarded), {
				id: unref(rootContext).contentId,
				"aria-labelledby": unref(rootContext)?.triggerId,
				style: {
					"--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
					"--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
					"--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
					"--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
					"--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
				},
				onCloseAutoFocus: handleCloseAutoFocus,
				onInteractOutside: _cache[0] || (_cache[0] = (event) => {
					if (event.defaultPrevented) return;
					const originalEvent = event.detail.originalEvent;
					const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
					const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
					if (!unref(rootContext).modal.value || isRightClick) hasInteractedOutsideRef.value = true;
					if (unref(rootContext).triggerElement.value?.contains(event.target)) event.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id", "aria-labelledby"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuItem.js
var DropdownMenuItem_default$1 = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuItem",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
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
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuItem_default), normalizeProps(guardReactiveProps({
				...props,
				...unref(emitsAsProps)
			})), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuLabel.js
var DropdownMenuLabel_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuLabel",
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
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuLabel_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuPortal.js
var DropdownMenuPortal_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuPortal",
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
			return openBlock(), createBlock(unref(MenuPortal_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuSeparator.js
var DropdownMenuSeparator_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSeparator",
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
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuSeparator_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuSub.js
var DropdownMenuSub_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSub",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const open = useVModel(props, "open", __emit, {
			passive: props.open === void 0,
			defaultValue: props.defaultOpen ?? false
		});
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuSub_default), {
				open: unref(open),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
				_: 3
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuSubContent.js
var DropdownMenuSubContent_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSubContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuSubContent_default), mergeProps(unref(forwarded), { style: {
				"--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
				"--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
				"--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
			} }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuSubTrigger.js
var DropdownMenuSubTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSubTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
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
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuSubTrigger_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/DropdownMenu/DropdownMenuTrigger.js
var DropdownMenuTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
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
		const rootContext = injectDropdownMenuRootContext();
		const { forwardRef, currentElement: triggerElement } = useForwardExpose();
		onMounted(() => {
			rootContext.triggerElement = triggerElement;
		});
		rootContext.triggerId ||= useId$1(void 0, "reka-dropdown-menu-trigger");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuAnchor_default), { "as-child": "" }, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					id: unref(rootContext).triggerId,
					ref: unref(forwardRef),
					type: _ctx.as === "button" ? "button" : void 0,
					"as-child": props.asChild,
					as: _ctx.as,
					"aria-haspopup": "menu",
					"aria-expanded": unref(rootContext).open.value,
					"aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
					"data-disabled": _ctx.disabled ? "" : void 0,
					disabled: _ctx.disabled,
					"data-state": unref(rootContext).open.value ? "open" : "closed",
					onClick: _cache[0] || (_cache[0] = async (event) => {
						if (!_ctx.disabled && event.button === 0 && event.ctrlKey === false) {
							unref(rootContext)?.onOpenToggle();
							await nextTick();
							if (unref(rootContext).open.value) event.preventDefault();
						}
					}),
					onKeydown: _cache[1] || (_cache[1] = withKeys((event) => {
						if (_ctx.disabled) return;
						if (["Enter", " "].includes(event.key)) unref(rootContext).onOpenToggle();
						if (event.key === "ArrowDown") unref(rootContext).onOpenChange(true);
						if ([
							"Enter",
							" ",
							"ArrowDown"
						].includes(event.key)) event.preventDefault();
					}, [
						"enter",
						"space",
						"arrow-down"
					]))
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"id",
					"type",
					"as-child",
					"as",
					"aria-expanded",
					"aria-controls",
					"data-disabled",
					"disabled",
					"data-state"
				])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenu.typeguards.ts
var VALID_SIDES = [
	"top",
	"bottom",
	"left",
	"right"
];
var VALID_ALIGNS = [
	"start",
	"end",
	"center"
];
var isSide = (value) => VALID_SIDES.includes(value);
var isAlign = (value) => VALID_ALIGNS.includes(value);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenu.types.ts
/** Injection key for passing portalTarget to nested DropdownMenuItem sub-menus */
var DropdownMenuPortalTargetKey = Symbol("DropdownMenuPortalTarget");
/**
* Injection key overriding the max-height cap of nested sub-menu content, per
* dropdown. Default (unset) keeps the shared cap — only opted-in dropdowns pass it.
*/
var DropdownMenuSubMaxHeightKey = Symbol("DropdownMenuSubMaxHeight");
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenu.utils.ts
function hasSubMenu(item) {
	return item.children && item.children.length > 0 || !!item.loading || !!item.searchable;
}
/** Whether a searchable item can be highlighted/selected via keyboard navigation. */
function isNavigableItem(item) {
	return !!item && !item.disabled && !item.header;
}
function getNextValidIndex(items, current, direction) {
	let next = current + direction;
	while (next >= 0 && next < items.length && !isNavigableItem(items[next])) next += direction;
	if (next >= 0 && next < items.length) return next;
	return direction === -1 ? -1 : current;
}
function getItemDomId(instanceId, index) {
	return `dropdown-menu-searchable-${instanceId}-item-${index}`;
}
function scrollHighlightedItemIntoView(container) {
	const highlightedItem = container?.querySelector("[data-menu-items] [aria-selected=\"true\"]");
	if (!(container && highlightedItem instanceof HTMLElement)) return;
	const containerRect = container.getBoundingClientRect();
	const itemRect = highlightedItem.getBoundingClientRect();
	if (itemRect.top < containerRect.top) container.scrollTop -= containerRect.top - itemRect.top;
	else if (itemRect.bottom > containerRect.bottom) container.scrollTop += itemRect.bottom - containerRect.bottom;
}
function isInputCursorAtEnd(event) {
	return event.target instanceof HTMLInputElement && event.target.selectionStart === event.target.value.length;
}
function isInputCursorAtStart(event) {
	return event.target instanceof HTMLInputElement && event.target.selectionStart === 0;
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenuSearch.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = [
	"placeholder",
	"value",
	"aria-activedescendant"
];
var DropdownMenuSearch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nDropdownMenuSearch",
	__name: "DropdownMenuSearch",
	props: {
		modelValue: { default: "" },
		placeholder: { default: "Search..." },
		ariaActiveDescendant: {}
	},
	emits: ["update:modelValue", "keydown"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const slots = useSlots();
		const $style = useCssModule();
		const inputRef = ref(null);
		const handleInput = (event) => {
			if (event.target instanceof HTMLInputElement) emit("update:modelValue", event.target.value);
		};
		const handleKeydown = (event) => {
			emit("keydown", event);
		};
		const focus = (options) => {
			inputRef.value?.focus(options);
		};
		__expose({
			focus,
			inputRef
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style)["search-container"]) }, [
				slots["search-prefix"] ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(unref($style)["search-prefix"])
				}, [renderSlot(_ctx.$slots, "search-prefix")], 2)) : createCommentVNode("", true),
				createBaseVNode("input", {
					ref_key: "inputRef",
					ref: inputRef,
					type: "text",
					class: normalizeClass(unref($style)["search-input"]),
					placeholder: __props.placeholder,
					value: __props.modelValue,
					"aria-activedescendant": __props.ariaActiveDescendant,
					onInput: handleInput,
					onKeydown: withModifiers(handleKeydown, ["stop"])
				}, null, 42, _hoisted_1$1),
				slots["search-suffix"] ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(unref($style)["search-suffix"])
				}, [renderSlot(_ctx.$slots, "search-suffix")], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenuSearch.vue?vue&type=style&index=0&lang.module.css
var DropdownMenuSearch_vue_vue_type_style_index_0_lang_module_default = {
	"search-container": "_search-container_1jo6r_2",
	"search-prefix": "_search-prefix_1jo6r_10",
	"search-suffix": "_search-suffix_1jo6r_17",
	"search-input": "_search-input_1jo6r_23"
};
var DropdownMenuSearch_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DropdownMenuSearch_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DropdownMenuSearch_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenuSearchableContent.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuSearchableContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nDropdownMenuSearchableContent",
	__name: "DropdownMenuSearchableContent",
	props: {
		open: { type: Boolean },
		items: {},
		searchPlaceholder: { default: "Search..." },
		searchDebounce: { default: 0 }
	},
	emits: [
		"select",
		"search",
		"close",
		"submenu:toggle"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const slots = useSlots();
		const itemsContainerRef = ref(null);
		const searchRef = ref(null);
		const searchTerm = ref("");
		const openSubMenuIndex = ref(-1);
		const instanceId = useId();
		let searchSequence = 0;
		const highlightedIndex = ref(-1);
		const refocusSearchInput = () => {
			searchRef.value?.focus({ preventScroll: true });
		};
		const scrollHighlightedItem = () => {
			scrollHighlightedItemIntoView(itemsContainerRef.value);
			requestAnimationFrame(() => {
				scrollHighlightedItemIntoView(itemsContainerRef.value);
				refocusSearchInput();
			});
		};
		const navigate = async (direction) => {
			closeOpenSubMenu();
			if (direction === "down") highlightedIndex.value = getNextValidIndex(props.items, highlightedIndex.value, 1);
			else highlightedIndex.value = getNextValidIndex(props.items, highlightedIndex.value, -1);
			await nextTick();
			scrollHighlightedItem();
		};
		const openHighlightedSubMenu = () => {
			if (highlightedIndex.value < 0) return;
			const item = props.items[highlightedIndex.value];
			if (item && !item.disabled && hasSubMenu(item)) handleSubMenuOpenChange(highlightedIndex.value, true);
		};
		const resetHighlightedItem = () => {
			highlightedIndex.value = -1;
		};
		const updateHighlightedItem = (newItems, oldItems) => {
			if (highlightedIndex.value < 0) return;
			const highlightedItem = oldItems[highlightedIndex.value];
			const newIndex = newItems.findIndex((item) => item.id === highlightedItem?.id);
			highlightedIndex.value = isNavigableItem(newItems[newIndex]) ? newIndex : -1;
		};
		const debouncedEmitSearch = useDebounceFn((term, sequence) => {
			if (sequence === searchSequence) emit("search", term);
		}, props.searchDebounce);
		const handleSearchUpdate = async (value) => {
			searchTerm.value = value;
			searchSequence++;
			await debouncedEmitSearch(value, searchSequence);
		};
		const resetSearch = () => {
			searchSequence++;
			if (searchTerm.value === "") return;
			searchTerm.value = "";
			emit("search", "");
		};
		const resetNavigation = () => {
			resetHighlightedItem();
			openSubMenuIndex.value = -1;
		};
		const handleSubMenuOpenChange = (index, open) => {
			const item = props.items[index];
			if (item) emit("submenu:toggle", item.id, open);
			if (open) {
				openSubMenuIndex.value = index;
				resetHighlightedItem();
			} else if (openSubMenuIndex.value === index) {
				openSubMenuIndex.value = -1;
				nextTick(() => {
					highlightedIndex.value = index;
					refocusSearchInput();
				});
			}
		};
		const selectHighlightedItem = () => {
			if (highlightedIndex.value < 0) return;
			const item = props.items[highlightedIndex.value];
			if (!isNavigableItem(item)) return;
			if (hasSubMenu(item)) handleSubMenuOpenChange(highlightedIndex.value, true);
			else {
				emit("select", item.id);
				if (!item.keepOpen) emit("close");
			}
		};
		const closeOpenSubMenu = () => {
			if (openSubMenuIndex.value >= 0) handleSubMenuOpenChange(openSubMenuIndex.value, false);
		};
		const handleItemHover = (index) => {
			const item = props.items[index];
			if (!isNavigableItem(item)) return;
			highlightedIndex.value = index;
			requestAnimationFrame(() => {
				refocusSearchInput();
			});
		};
		const getItemDomId$1 = (index) => getItemDomId(instanceId, index);
		const activeDescendantId = computed(() => highlightedIndex.value >= 0 ? getItemDomId$1(highlightedIndex.value) : void 0);
		const handleSearchKeydown = (event) => {
			switch (event.key) {
				case "Escape":
					event.preventDefault();
					emit("close");
					break;
				case "Tab":
					emit("close");
					break;
				case "ArrowDown":
					event.preventDefault();
					navigate("down");
					break;
				case "ArrowUp":
					event.preventDefault();
					if (highlightedIndex.value > 0) navigate("up");
					break;
				case "ArrowRight":
					if (!(event.target instanceof HTMLInputElement) || isInputCursorAtEnd(event)) {
						event.preventDefault();
						openHighlightedSubMenu();
					}
					break;
				case "ArrowLeft":
					if (!(event.target instanceof HTMLInputElement) || isInputCursorAtStart(event)) {
						event.preventDefault();
						closeOpenSubMenu();
					}
					break;
				case "Enter":
					event.preventDefault();
					selectHighlightedItem();
					break;
			}
		};
		watch(() => props.open, (open) => {
			if (open) nextTick(() => {
				refocusSearchInput();
			});
			else {
				resetNavigation();
				resetSearch();
			}
		}, { immediate: true });
		watch(() => props.items, (newItems, oldItems) => {
			updateHighlightedItem(newItems, oldItems);
		});
		__expose({ resetNavigation });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.content),
				onKeydownCapture: handleSearchKeydown
			}, [createVNode(DropdownMenuSearch_default, {
				ref_key: "searchRef",
				ref: searchRef,
				"model-value": searchTerm.value,
				placeholder: __props.searchPlaceholder,
				"aria-active-descendant": activeDescendantId.value,
				"onUpdate:modelValue": handleSearchUpdate
			}, createSlots({ _: 2 }, [slots["search-prefix"] ? {
				name: "search-prefix",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "search-prefix")]),
				key: "0"
			} : void 0, slots["search-suffix"] ? {
				name: "search-suffix",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "search-suffix")]),
				key: "1"
			} : void 0]), 1032, [
				"model-value",
				"placeholder",
				"aria-active-descendant"
			]), createBaseVNode("div", {
				ref_key: "itemsContainerRef",
				ref: itemsContainerRef,
				class: normalizeClass(_ctx.$style.items)
			}, [renderSlot(_ctx.$slots, "default", {
				highlightedIndex: highlightedIndex.value,
				openSubMenuIndex: openSubMenuIndex.value,
				onSubMenuOpenChange: handleSubMenuOpenChange,
				onItemHover: handleItemHover,
				resetNavigation: resetHighlightedItem,
				getItemDomId: getItemDomId$1
			})], 2)], 34);
		};
	}
});
var DropdownMenuSearchableContent_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1y8o5_125",
	items: "_items_1y8o5_131"
};
var DropdownMenuSearchableContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DropdownMenuSearchableContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DropdownMenuSearchableContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenuItem.vue?vue&type=script&setup=true&lang.ts
var SUB_MENU_ITEM_GLIMPSE_RATIO = .5;
var SUB_MENU_ITEM_ALIGNMENT_TOLERANCE = 2;
var DropdownMenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nDropdownMenuItem",
	inheritAttrs: false,
	__name: "DropdownMenuItem",
	props: {
		id: {},
		testId: {},
		label: {},
		icon: {},
		disabled: { type: Boolean },
		divided: { type: Boolean },
		checked: { type: Boolean },
		keepOpen: { type: Boolean },
		header: { type: Boolean },
		checkbox: {
			type: Boolean,
			default: false
		},
		class: {},
		children: {},
		loading: { type: Boolean },
		loadingItemCount: { default: 3 },
		searchable: { type: Boolean },
		searchPlaceholder: {},
		highlighted: { type: Boolean },
		subMenuOpen: { type: Boolean },
		data: {},
		htmlId: {},
		disablePointerFocus: {
			type: Boolean,
			default: false
		},
		closeOnSelect: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"select",
		"search",
		"update:subMenuOpen",
		"pointermove"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const $style = useCssModule();
		const portalTarget = inject(DropdownMenuPortalTargetKey, ref(void 0));
		const subMenuMaxHeight = inject(DropdownMenuSubMaxHeightKey, ref(void 0));
		const internalSubMenuOpen = ref(false);
		const childrenContainerRef = ref(null);
		const subContentMaxHeight = ref();
		const waitForLayout = async () => {
			await nextTick();
			await new Promise((resolve) => requestAnimationFrame(() => resolve()));
		};
		const handleChildSearch = (term, itemId) => {
			emit("search", term, itemId);
		};
		const hasChildren = computed(() => props.children && props.children.length > 0);
		const hasSubMenu = computed(() => hasChildren.value || props.loading || props.searchable);
		const handleSubMenuOpenChange = (open) => {
			internalSubMenuOpen.value = open;
			emit("update:subMenuOpen", open);
		};
		const closeSubMenu = () => {
			internalSubMenuOpen.value = false;
			emit("update:subMenuOpen", false);
		};
		const leadingProps = computed(() => ({ class: $style["item-leading"] }));
		const labelProps = computed(() => ({ class: $style["item-label"] }));
		const trailingProps = computed(() => ({ class: $style["item-trailing"] }));
		const titleAttr = computed(() => props.label.length >= 20 ? props.label : void 0);
		const handleSelect = (value) => {
			emit("select", value);
		};
		const handleItemSelect = (event) => {
			if (props.disabled || hasSubMenu.value) return;
			if (props.keepOpen || !props.closeOnSelect) event.preventDefault();
			emit("select", props.id);
		};
		const handlePointerMove = (event) => {
			emit("pointermove", event);
		};
		const handleSubContentFocusOutside = (event) => {
			if (props.disablePointerFocus) event.preventDefault();
		};
		const updateSubContentMaxHeight = async () => {
			subContentMaxHeight.value = void 0;
			await waitForLayout();
			const container = childrenContainerRef.value;
			if (!container || container.scrollHeight <= container.clientHeight) return;
			const items = [...container.querySelectorAll("[role=\"menuitem\"]")];
			const containerTop = container.getBoundingClientRect().top;
			const viewportBottom = container.clientHeight;
			const itemRects = items.map((item) => {
				const rect = item.getBoundingClientRect();
				return {
					top: rect.top - containerTop,
					bottom: rect.bottom - containerTop,
					height: rect.height
				};
			});
			if (itemRects.some(({ top, bottom }) => top < viewportBottom - SUB_MENU_ITEM_ALIGNMENT_TOLERANCE && bottom > viewportBottom + SUB_MENU_ITEM_ALIGNMENT_TOLERANCE)) return;
			const lastFullItemIndex = itemRects.findLastIndex(({ bottom }) => bottom <= viewportBottom + SUB_MENU_ITEM_ALIGNMENT_TOLERANCE);
			const lastFullItem = itemRects[lastFullItemIndex];
			const nextItem = itemRects[lastFullItemIndex + 1];
			if (!lastFullItem || !nextItem) return;
			subContentMaxHeight.value = `${Math.floor(lastFullItem.bottom + nextItem.height * SUB_MENU_ITEM_GLIMPSE_RATIO)}px`;
		};
		const handleResize = () => {
			updateSubContentMaxHeight();
		};
		watch(() => props.subMenuOpen, (newValue) => {
			if (newValue !== void 0) internalSubMenuOpen.value = newValue;
		}, { immediate: true });
		watch(internalSubMenuOpen, (open) => {
			if (open) {
				updateSubContentMaxHeight();
				window.addEventListener("resize", handleResize);
			} else {
				window.removeEventListener("resize", handleResize);
				subContentMaxHeight.value = void 0;
			}
		});
		onBeforeUnmount(() => {
			window.removeEventListener("resize", handleResize);
		});
		return (_ctx, _cache) => {
			const _component_N8nDropdownMenuItem = resolveComponent("N8nDropdownMenuItem");
			return openBlock(), createElementBlock("div", {
				ref: "itemRef",
				class: normalizeClass(unref($style).wrapper)
			}, [__props.divided ? (openBlock(), createBlock(unref(DropdownMenuSeparator_default), {
				key: 0,
				class: normalizeClass(unref($style).separator)
			}, null, 8, ["class"])) : createCommentVNode("", true), __props.header ? (openBlock(), createBlock(unref(DropdownMenuLabel_default), {
				key: 1,
				class: normalizeClass(unref($style)["section-header"])
			}, {
				default: withCtx(() => [createVNode(Text_default, {
					size: "small",
					color: "text-light",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["class"])) : hasSubMenu.value ? (openBlock(), createBlock(unref(DropdownMenuSub_default), {
				key: 2,
				open: internalSubMenuOpen.value,
				"onUpdate:open": handleSubMenuOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenuSubTrigger_default), {
					id: __props.htmlId,
					"aria-selected": __props.highlighted || void 0,
					disabled: __props.disabled,
					"data-test-id": __props.testId,
					class: normalizeClass([
						unref($style).item,
						unref($style)["sub-trigger"],
						props.class,
						{ "is-disabled": !!__props.disabled }
					]),
					onPointermoveCapture: handlePointerMove
				}, {
					default: withCtx(() => [
						renderSlot(_ctx.$slots, "item-leading", {
							item: props,
							ui: leadingProps.value
						}, () => [__props.icon?.type === "icon" ? (openBlock(), createBlock(Icon_default, {
							key: 0,
							icon: __props.icon.value,
							class: normalizeClass([unref($style)["item-leading"], unref($style).icon]),
							color: __props.disabled ? "text-xlight" : "text-light",
							size: "large"
						}, null, 8, [
							"icon",
							"class",
							"color"
						])) : __props.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
							key: 1,
							class: normalizeClass([unref($style)["item-leading"], unref($style).emoji])
						}, toDisplayString(__props.icon.value), 3)) : createCommentVNode("", true)]),
						renderSlot(_ctx.$slots, "item-label", {
							item: props,
							ui: labelProps.value
						}, () => [createVNode(Text_default, {
							class: normalizeClass(unref($style)["item-label"]),
							title: titleAttr.value,
							size: "medium",
							color: __props.disabled ? "text-xlight" : "text-dark"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
							_: 1
						}, 8, [
							"class",
							"title",
							"color"
						])]),
						createVNode(Icon_default, {
							icon: "chevron-right",
							class: normalizeClass(unref($style)["sub-indicator"]),
							color: __props.disabled ? "text-xlight" : "text-light",
							size: "large"
						}, null, 8, ["class", "color"])
					]),
					_: 3
				}, 8, [
					"id",
					"aria-selected",
					"disabled",
					"data-test-id",
					"class"
				]), createVNode(unref(DropdownMenuPortal_default), normalizeProps(guardReactiveProps(unref(portalTarget) ? { to: unref(portalTarget) } : {})), {
					default: withCtx(() => [createVNode(unref(DropdownMenuSubContent_default), {
						class: normalizeClass(unref($style)["sub-content"]),
						style: normalizeStyle([subContentMaxHeight.value ? { maxHeight: subContentMaxHeight.value } : {}, unref(subMenuMaxHeight) ? { "--n8n-dropdown-sub-max-height": unref(subMenuMaxHeight) } : {}]),
						"side-offset": 1,
						"prioritize-position": true,
						sticky: "partial",
						onFocusOutside: handleSubContentFocusOutside
					}, {
						default: withCtx(() => [__props.searchable ? (openBlock(), createBlock(DropdownMenuSearchableContent_default, {
							key: 0,
							open: internalSubMenuOpen.value,
							items: __props.children ?? [],
							"search-placeholder": __props.searchPlaceholder,
							onSelect: handleSelect,
							onSearch: _cache[0] || (_cache[0] = (term, itemId) => emit("search", term, itemId ?? props.id)),
							onClose: closeSubMenu
						}, {
							default: withCtx((searchableContent) => [__props.loading ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(unref($style)["loading-container"])
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.loadingItemCount, (i) => {
								return openBlock(), createBlock(unref(N8nLoading_default), {
									key: i,
									rows: 1,
									class: normalizeClass(unref($style)["loading-item"]),
									variant: "p"
								}, null, 8, ["class"]);
							}), 128))], 2)) : hasChildren.value ? (openBlock(), createElementBlock("div", {
								key: 1,
								ref_key: "childrenContainerRef",
								ref: childrenContainerRef,
								class: normalizeClass(unref($style)["children-container"]),
								"data-menu-items": ""
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.children, (child, childIndex) => {
								return openBlock(), createBlock(_component_N8nDropdownMenuItem, mergeProps({
									key: child.id,
									ref_for: true
								}, child, {
									"html-id": searchableContent.getItemDomId(childIndex),
									highlighted: searchableContent.highlightedIndex === childIndex,
									"sub-menu-open": searchableContent.openSubMenuIndex === childIndex,
									"disable-pointer-focus": true,
									divided: child.divided && childIndex > 0,
									onSelect: handleSelect,
									onSearch: handleChildSearch,
									"onUpdate:subMenuOpen": ($event) => searchableContent.onSubMenuOpenChange(childIndex, $event),
									onPointermove: ($event) => searchableContent.onItemHover(childIndex)
								}), {
									"item-leading": withCtx((leadingProps) => [renderSlot(_ctx.$slots, "item-leading", mergeProps({ ref_for: true }, leadingProps))]),
									"item-label": withCtx((bodyProps) => [renderSlot(_ctx.$slots, "item-label", mergeProps({ ref_for: true }, bodyProps))]),
									"item-trailing": withCtx((trailingProps) => [renderSlot(_ctx.$slots, "item-trailing", mergeProps({ ref_for: true }, trailingProps))]),
									_: 3
								}, 16, [
									"html-id",
									"highlighted",
									"sub-menu-open",
									"divided",
									"onUpdate:subMenuOpen",
									"onPointermove"
								]);
							}), 128))], 2)) : (openBlock(), createElementBlock("div", {
								key: 2,
								class: normalizeClass(unref($style)["empty-state"])
							}, "No items", 2))]),
							_: 3
						}, 8, [
							"open",
							"items",
							"search-placeholder"
						])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.loading ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(unref($style)["loading-container"])
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.loadingItemCount, (i) => {
							return openBlock(), createBlock(unref(N8nLoading_default), {
								key: i,
								rows: 1,
								class: normalizeClass(unref($style)["loading-item"]),
								variant: "p"
							}, null, 8, ["class"]);
						}), 128))], 2)) : hasChildren.value ? (openBlock(), createElementBlock("div", {
							key: 1,
							ref_key: "childrenContainerRef",
							ref: childrenContainerRef,
							class: normalizeClass(unref($style)["children-container"]),
							"data-menu-items": ""
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.children, (child, childIndex) => {
							return openBlock(), createBlock(_component_N8nDropdownMenuItem, mergeProps({
								key: child.id,
								ref_for: true
							}, child, {
								divided: child.divided && childIndex > 0,
								onSelect: handleSelect,
								onSearch: handleChildSearch
							}), {
								"item-leading": withCtx((leadingProps) => [renderSlot(_ctx.$slots, "item-leading", mergeProps({ ref_for: true }, leadingProps))]),
								"item-label": withCtx((bodyProps) => [renderSlot(_ctx.$slots, "item-label", mergeProps({ ref_for: true }, bodyProps))]),
								"item-trailing": withCtx((trailingProps) => [renderSlot(_ctx.$slots, "item-trailing", mergeProps({ ref_for: true }, trailingProps))]),
								_: 3
							}, 16, ["divided"]);
						}), 128))], 2)) : createCommentVNode("", true)], 64))]),
						_: 3
					}, 8, ["class", "style"])]),
					_: 3
				}, 16)]),
				_: 3
			}, 8, ["open"])) : __props.checkbox ? (openBlock(), createBlock(unref(DropdownMenuCheckboxItem_default), {
				key: 3,
				id: __props.htmlId,
				"model-value": __props.checked,
				"aria-selected": __props.highlighted || void 0,
				disabled: __props.disabled,
				"data-test-id": __props.testId,
				class: normalizeClass([
					unref($style).item,
					props.class,
					{ "is-disabled": !!__props.disabled }
				]),
				onPointermoveCapture: handlePointerMove,
				onSelect: handleItemSelect
			}, {
				default: withCtx(() => [
					renderSlot(_ctx.$slots, "item-leading", {
						item: props,
						ui: leadingProps.value
					}, () => [__props.icon?.type === "icon" ? (openBlock(), createBlock(Icon_default, {
						key: 0,
						icon: __props.icon.value,
						class: normalizeClass([unref($style)["item-leading"], unref($style).icon]),
						color: __props.disabled ? "text-xlight" : "text-light",
						size: "large"
					}, null, 8, [
						"icon",
						"class",
						"color"
					])) : __props.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass([unref($style)["item-leading"], unref($style).emoji])
					}, toDisplayString(__props.icon.value), 3)) : createCommentVNode("", true)]),
					renderSlot(_ctx.$slots, "item-label", {
						item: props,
						ui: labelProps.value
					}, () => [createVNode(Text_default, {
						class: normalizeClass(unref($style)["item-label"]),
						title: titleAttr.value,
						size: "medium",
						color: __props.disabled ? "text-xlight" : "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
						_: 1
					}, 8, [
						"class",
						"title",
						"color"
					])]),
					renderSlot(_ctx.$slots, "item-trailing", {
						item: props,
						ui: trailingProps.value
					})
				]),
				_: 3
			}, 8, [
				"id",
				"model-value",
				"aria-selected",
				"disabled",
				"data-test-id",
				"class"
			])) : (openBlock(), createBlock(unref(DropdownMenuItem_default$1), {
				key: 4,
				id: __props.htmlId,
				"aria-selected": __props.highlighted || void 0,
				disabled: __props.disabled,
				"data-test-id": __props.testId,
				class: normalizeClass([
					unref($style).item,
					props.class,
					{ "is-disabled": !!__props.disabled }
				]),
				onPointermoveCapture: handlePointerMove,
				onSelect: handleItemSelect
			}, {
				default: withCtx(() => [
					renderSlot(_ctx.$slots, "item-leading", {
						item: props,
						ui: leadingProps.value
					}, () => [__props.icon?.type === "icon" ? (openBlock(), createBlock(Icon_default, {
						key: 0,
						icon: __props.icon.value,
						class: normalizeClass([unref($style)["item-leading"], unref($style).icon]),
						color: __props.disabled ? "text-xlight" : "text-light",
						size: "large"
					}, null, 8, [
						"icon",
						"class",
						"color"
					])) : __props.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass([unref($style)["item-leading"], unref($style).emoji])
					}, toDisplayString(__props.icon.value), 3)) : createCommentVNode("", true)]),
					renderSlot(_ctx.$slots, "item-label", {
						item: props,
						ui: labelProps.value
					}, () => [createVNode(Text_default, {
						class: normalizeClass(unref($style)["item-label"]),
						title: titleAttr.value,
						size: "medium",
						color: __props.disabled ? "text-xlight" : "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
						_: 1
					}, 8, [
						"class",
						"title",
						"color"
					])]),
					renderSlot(_ctx.$slots, "item-trailing", {
						item: props,
						ui: trailingProps.value
					}),
					__props.checked ? (openBlock(), createBlock(Icon_default, {
						key: 0,
						icon: "check",
						class: normalizeClass(unref($style)["item-check"]),
						size: "large",
						color: __props.disabled ? "text-xlight" : "text-light"
					}, null, 8, ["class", "color"])) : createCommentVNode("", true)
				]),
				_: 3
			}, 8, [
				"id",
				"aria-selected",
				"disabled",
				"data-test-id",
				"class"
			]))], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenuItem.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_ngnze_125";
var item = "_item_ngnze_180";
var emoji = "_emoji_ngnze_242";
var separator = "_separator_ngnze_260";
var DropdownMenuItem_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	"children-container": "_children-container_ngnze_129",
	"section-header": "_section-header_ngnze_173",
	item,
	"sub-trigger": "_sub-trigger_ngnze_206",
	"sub-indicator": "_sub-indicator_ngnze_215",
	"sub-content": "_sub-content_ngnze_221",
	"item-leading": "_item-leading_ngnze_238",
	emoji,
	"item-label": "_item-label_ngnze_247",
	"item-check": "_item-check_ngnze_254",
	"item-trailing": "_item-trailing_ngnze_255",
	separator,
	"loading-container": "_loading-container_ngnze_266",
	"loading-item": "_loading-item_ngnze_273",
	"empty-state": "_empty-state_ngnze_277"
};
var DropdownMenuItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DropdownMenuItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DropdownMenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenuItems.vue?vue&type=script&setup=true&lang.ts
var DropdownMenuItems_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nDropdownMenuItems",
	__name: "DropdownMenuItems",
	props: {
		items: {},
		loading: {
			type: Boolean,
			default: false
		},
		loadingItemCount: { default: 3 },
		emptyText: { default: "No items" },
		highlightedIndex: { default: -1 },
		openSubMenuIndex: { default: -1 },
		getItemDomId: {},
		onItemHover: {},
		disablePointerFocus: { type: Boolean }
	},
	emits: [
		"select",
		"search",
		"submenu:toggle",
		"item-mouseup"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const slots = useSlots();
		const $style = useCssModule();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(unref($style)["items-container"]),
				"data-menu-items": ""
			}, [__props.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.loadingItemCount, (i) => {
				return openBlock(), createBlock(unref(N8nLoading_default), {
					key: i,
					rows: 1,
					class: normalizeClass(unref($style)["loading-item"]),
					variant: "p"
				}, null, 8, ["class"]);
			}), 128))]) : __props.items.length === 0 ? renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [createBaseVNode("div", { class: normalizeClass(unref($style)["empty-state"]) }, toDisplayString(__props.emptyText), 3)]) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(__props.items, (item, index) => {
				return renderSlot(_ctx.$slots, "item", {
					key: item.id,
					item
				}, () => [createVNode(DropdownMenuItem_default, mergeProps({ ref_for: true }, item, {
					"html-id": __props.getItemDomId?.(index),
					highlighted: __props.highlightedIndex === index,
					"sub-menu-open": __props.openSubMenuIndex === index,
					"disable-pointer-focus": __props.disablePointerFocus,
					divided: item.divided && index > 0,
					onSelect: _cache[0] || (_cache[0] = ($event) => emit("select", $event)),
					onSearch: _cache[1] || (_cache[1] = (term, itemId) => emit("search", term, itemId)),
					"onUpdate:subMenuOpen": (open) => emit("submenu:toggle", index, open),
					onPointermove: ($event) => __props.onItemHover?.(index),
					onMouseup: ($event) => emit("item-mouseup", item)
				}), createSlots({ _: 2 }, [
					slots["item-leading"] ? {
						name: "item-leading",
						fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-leading", mergeProps({ ref_for: true }, slotProps))]),
						key: "0"
					} : void 0,
					slots["item-label"] ? {
						name: "item-label",
						fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-label", mergeProps({ ref_for: true }, slotProps))]),
						key: "1"
					} : void 0,
					slots["item-trailing"] ? {
						name: "item-trailing",
						fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-trailing", mergeProps({ ref_for: true }, slotProps))]),
						key: "2"
					} : void 0
				]), 1040, [
					"html-id",
					"highlighted",
					"sub-menu-open",
					"disable-pointer-focus",
					"divided",
					"onUpdate:subMenuOpen",
					"onPointermove",
					"onMouseup"
				])]);
			}), 128))], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenuItems.vue?vue&type=style&index=0&lang.module.scss
var DropdownMenuItems_vue_vue_type_style_index_0_lang_module_default = {
	"items-container": "_items-container_1yghw_125",
	"loading-item": "_loading-item_1yghw_132",
	"empty-state": "_empty-state_1yghw_136"
};
var DropdownMenuItems_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DropdownMenuItems_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DropdownMenuItems_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenu.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var DropdownMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DropdownMenu",
	props: {
		id: {},
		contentTestId: {},
		portalTarget: {},
		modal: {
			type: Boolean,
			default: true
		},
		items: {},
		modelValue: { type: Boolean },
		defaultOpen: { type: Boolean },
		placement: { default: "bottom" },
		trigger: { default: "click" },
		activatorIcon: { default: () => ({
			type: "icon",
			value: "ellipsis"
		}) },
		disabled: {
			type: Boolean,
			default: false
		},
		teleported: {
			type: Boolean,
			default: true
		},
		maxHeight: {},
		width: { default: "24rem" },
		subMenuMaxHeight: {},
		loading: {
			type: Boolean,
			default: false
		},
		loadingItemCount: { default: 3 },
		extraPopperClass: {},
		dataTestId: {},
		searchable: {
			type: Boolean,
			default: false
		},
		searchPlaceholder: { default: "Search..." },
		searchDebounce: { default: 0 },
		emptyText: { default: "No items" }
	},
	emits: [
		"update:modelValue",
		"select",
		"search",
		"submenu:toggle",
		"item-mouseup"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const slots = useSlots();
		const $style = useCssModule();
		provide(DropdownMenuPortalTargetKey, computed(() => props.portalTarget));
		provide(DropdownMenuSubMaxHeightKey, computed(() => props.subMenuMaxHeight === void 0 ? void 0 : typeof props.subMenuMaxHeight === "number" ? `${props.subMenuMaxHeight}px` : props.subMenuMaxHeight));
		const internalOpen = ref(props.defaultOpen ?? false);
		const contentRef = ref(null);
		let hoverCloseTimer;
		const openSubMenuIndex = ref(-1);
		const placementParts = computed(() => {
			const [sideValue, alignValue] = props.placement.split("-");
			return {
				side: isSide(sideValue) ? sideValue : "bottom",
				align: isAlign(alignValue) ? alignValue : "center"
			};
		});
		const contentContainerStyle = computed(() => {
			const maxHeightStyle = props.maxHeight ? {
				maxHeight: typeof props.maxHeight === "number" ? `${props.maxHeight}px` : props.maxHeight,
				overflowY: "auto"
			} : {};
			return {
				"--n8n--dropdown-menu-width": props.width,
				...maxHeightStyle
			};
		});
		const handleOpenChange = (open) => {
			internalOpen.value = open;
			emit("update:modelValue", open);
			if (!open) openSubMenuIndex.value = -1;
		};
		const handleSubMenuOpenChange = (index, open) => {
			const item = props.items[index];
			if (item) emit("submenu:toggle", item.id, open);
			if (open) openSubMenuIndex.value = index;
			else if (openSubMenuIndex.value === index) {
				openSubMenuIndex.value = -1;
				nextTick(() => {
					(((contentRef.value?.$el)?.querySelectorAll("[role=\"menuitem\"]"))?.[index])?.focus();
				});
			}
		};
		function findItemById(list, id) {
			for (const item of list) {
				if (item.id === id) return item;
				const found = item.children && findItemById(item.children, id);
				if (found) return found;
			}
		}
		const handleItemSelect = (value) => {
			emit("select", value);
			if (!findItemById(props.items, value)?.keepOpen) close();
		};
		const handleItemSearch = (term, itemId) => {
			emit("search", term, itemId);
		};
		const handleItemMouseUp = (item) => {
			emit("item-mouseup", item);
		};
		const cancelHoverClose = () => {
			if (hoverCloseTimer) {
				clearTimeout(hoverCloseTimer);
				hoverCloseTimer = void 0;
			}
		};
		const triggerHoverEnter = () => {
			if (props.trigger === "hover") {
				cancelHoverClose();
				open();
			}
		};
		const triggerHoverLeave = () => {
			if (props.trigger === "hover") {
				cancelHoverClose();
				hoverCloseTimer = setTimeout(() => {
					close();
				}, 100);
			}
		};
		const open = () => {
			internalOpen.value = true;
			emit("update:modelValue", true);
		};
		const close = () => {
			internalOpen.value = false;
			emit("update:modelValue", false);
			openSubMenuIndex.value = -1;
		};
		watch(() => props.modelValue, (newValue) => {
			if (newValue !== void 0) {
				internalOpen.value = newValue;
				if (!newValue) openSubMenuIndex.value = -1;
			}
		}, { immediate: true });
		onBeforeUnmount(() => {
			cancelHoverClose();
		});
		watch(internalOpen, (isOpen, _oldValue, onCleanup) => {
			const target = props.portalTarget;
			if (!target || typeof target === "string" || !isOpen) return;
			const targetDoc = target.ownerDocument;
			if (!targetDoc || targetDoc === document) return;
			let handler;
			const timerId = setTimeout(() => {
				handler = (e) => {
					const el = e.target;
					if ((contentRef.value?.$el)?.contains(el)) return;
					if (el.closest?.("[role=\"menu\"]")) return;
					setTimeout(() => {
						if (internalOpen.value) close();
					}, 0);
				};
				targetDoc.addEventListener("pointerdown", handler);
			}, 0);
			onCleanup(() => {
				clearTimeout(timerId);
				if (handler) targetDoc.removeEventListener("pointerdown", handler);
			});
		});
		__expose({
			open,
			close
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenuRoot_default), {
				modal: __props.modal,
				open: internalOpen.value,
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenuTrigger_default), {
					"as-child": "",
					disabled: __props.disabled
				}, {
					default: withCtx(() => [slots.trigger ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(unref($style).trigger),
						"data-test-id": __props.dataTestId,
						onPointerenter: triggerHoverEnter,
						onPointerleave: triggerHoverLeave
					}, [renderSlot(_ctx.$slots, "trigger")], 42, _hoisted_1)) : (openBlock(), createBlock(Button_default, {
						key: 1,
						icon: __props.activatorIcon?.type === "icon" ? __props.activatorIcon.value : void 0,
						"data-test-id": __props.dataTestId,
						disabled: __props.disabled,
						"icon-only": true,
						variant: "ghost",
						size: "xsmall",
						onPointerenter: triggerHoverEnter,
						onPointerleave: triggerHoverLeave
					}, createSlots({ _: 2 }, [__props.activatorIcon?.type === "emoji" ? {
						name: "icon",
						fn: withCtx(() => [createTextVNode(toDisplayString(__props.activatorIcon.value), 1)]),
						key: "0"
					} : void 0]), 1032, [
						"icon",
						"data-test-id",
						"disabled"
					]))]),
					_: 3
				}, 8, ["disabled"]), createVNode(unref(DropdownMenuPortal_default), mergeProps({ disabled: !__props.teleported && !__props.portalTarget }, __props.portalTarget ? { to: __props.portalTarget } : {}), {
					default: withCtx(() => [createVNode(unref(DropdownMenuContent_default), mergeProps(__props.id ? { id: __props.id } : {}, {
						ref_key: "contentRef",
						ref: contentRef,
						"data-test-id": __props.contentTestId,
						class: [
							unref($style).content,
							__props.searchable && unref($style).searchable,
							__props.extraPopperClass
						],
						"data-menu-content": "",
						side: placementParts.value.side,
						align: placementParts.value.align,
						"side-offset": 5,
						style: contentContainerStyle.value,
						"prioritize-position": true,
						onMouseenter: cancelHoverClose,
						onMouseleave: triggerHoverLeave
					}), {
						default: withCtx(() => [slots.content ? renderSlot(_ctx.$slots, "content", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.searchable ? (openBlock(), createBlock(DropdownMenuSearchableContent_default, {
							key: 0,
							open: internalOpen.value,
							items: __props.items,
							"search-placeholder": __props.searchPlaceholder,
							"search-debounce": __props.searchDebounce,
							onSelect: handleItemSelect,
							onSearch: _cache[0] || (_cache[0] = (term, itemId) => emit("search", term, itemId)),
							onClose: close,
							"onSubmenu:toggle": _cache[1] || (_cache[1] = (itemId, open) => emit("submenu:toggle", itemId, open))
						}, createSlots({
							default: withCtx((searchableContent) => [createVNode(DropdownMenuItems_default, {
								items: __props.items,
								loading: __props.loading,
								"loading-item-count": __props.loadingItemCount,
								"empty-text": __props.emptyText,
								"highlighted-index": searchableContent.highlightedIndex,
								"open-sub-menu-index": searchableContent.openSubMenuIndex,
								"get-item-dom-id": searchableContent.getItemDomId,
								"on-item-hover": searchableContent.onItemHover,
								"disable-pointer-focus": true,
								onSelect: handleItemSelect,
								onSearch: handleItemSearch,
								"onSubmenu:toggle": searchableContent.onSubMenuOpenChange,
								onItemMouseup: handleItemMouseUp
							}, createSlots({ _: 2 }, [
								slots.loading ? {
									name: "loading",
									fn: withCtx(() => [renderSlot(_ctx.$slots, "loading")]),
									key: "0"
								} : void 0,
								slots.empty ? {
									name: "empty",
									fn: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
									key: "1"
								} : void 0,
								slots.item ? {
									name: "item",
									fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item", normalizeProps(guardReactiveProps(slotProps)))]),
									key: "2"
								} : void 0,
								slots["item-leading"] ? {
									name: "item-leading",
									fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-leading", normalizeProps(guardReactiveProps(slotProps)))]),
									key: "3"
								} : void 0,
								slots["item-label"] ? {
									name: "item-label",
									fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-label", normalizeProps(guardReactiveProps(slotProps)))]),
									key: "4"
								} : void 0,
								slots["item-trailing"] ? {
									name: "item-trailing",
									fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-trailing", normalizeProps(guardReactiveProps(slotProps)))]),
									key: "5"
								} : void 0
							]), 1032, [
								"items",
								"loading",
								"loading-item-count",
								"empty-text",
								"highlighted-index",
								"open-sub-menu-index",
								"get-item-dom-id",
								"on-item-hover",
								"onSubmenu:toggle"
							])]),
							_: 2
						}, [slots["search-prefix"] ? {
							name: "search-prefix",
							fn: withCtx(() => [renderSlot(_ctx.$slots, "search-prefix")]),
							key: "0"
						} : void 0, slots["search-suffix"] ? {
							name: "search-suffix",
							fn: withCtx(() => [renderSlot(_ctx.$slots, "search-suffix")]),
							key: "1"
						} : void 0]), 1032, [
							"open",
							"items",
							"search-placeholder",
							"search-debounce"
						])) : (openBlock(), createBlock(DropdownMenuItems_default, {
							key: 1,
							items: __props.items,
							loading: __props.loading,
							"loading-item-count": __props.loadingItemCount,
							"empty-text": __props.emptyText,
							"open-sub-menu-index": openSubMenuIndex.value,
							onSelect: handleItemSelect,
							onSearch: handleItemSearch,
							"onSubmenu:toggle": handleSubMenuOpenChange,
							onItemMouseup: handleItemMouseUp
						}, createSlots({ _: 2 }, [
							slots.loading ? {
								name: "loading",
								fn: withCtx(() => [renderSlot(_ctx.$slots, "loading")]),
								key: "0"
							} : void 0,
							slots.empty ? {
								name: "empty",
								fn: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
								key: "1"
							} : void 0,
							slots.item ? {
								name: "item",
								fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item", normalizeProps(guardReactiveProps(slotProps)))]),
								key: "2"
							} : void 0,
							slots["item-leading"] ? {
								name: "item-leading",
								fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-leading", normalizeProps(guardReactiveProps(slotProps)))]),
								key: "3"
							} : void 0,
							slots["item-label"] ? {
								name: "item-label",
								fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-label", normalizeProps(guardReactiveProps(slotProps)))]),
								key: "4"
							} : void 0,
							slots["item-trailing"] ? {
								name: "item-trailing",
								fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-trailing", normalizeProps(guardReactiveProps(slotProps)))]),
								key: "5"
							} : void 0
						]), 1032, [
							"items",
							"loading",
							"loading-item-count",
							"empty-text",
							"open-sub-menu-index"
						])), slots.footer ? renderSlot(_ctx.$slots, "footer", { key: 2 }) : createCommentVNode("", true)], 64))]),
						_: 3
					}, 16, [
						"data-test-id",
						"class",
						"side",
						"align",
						"style"
					])]),
					_: 3
				}, 16, ["disabled"])]),
				_: 3
			}, 8, ["modal", "open"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/DropdownMenu.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_1dn0m_390";
var searchable = "_searchable_1dn0m_448";
var popoverIn = "_popoverIn_1dn0m_1";
var trigger = "_trigger_1dn0m_507";
var shimmer = "_shimmer_1dn0m_1";
var spin = "_spin_1dn0m_1";
var opacityPulse = "_opacityPulse_1dn0m_1";
var fadeIn = "_fadeIn_1dn0m_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1dn0m_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1dn0m_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1dn0m_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1dn0m_1";
var blurSwapIn = "_blurSwapIn_1dn0m_1";
var blurSwapOut = "_blurSwapOut_1dn0m_1";
var pulseGlow = "_pulseGlow_1dn0m_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1dn0m_1";
var fade = "_fade_1dn0m_1";
var fadeInUp = "_fadeInUp_1dn0m_1";
var fadeInDown = "_fadeInDown_1dn0m_1";
var fadeInLeft = "_fadeInLeft_1dn0m_1";
var fadeInRight = "_fadeInRight_1dn0m_1";
var fadeOut = "_fadeOut_1dn0m_1";
var fadeOutDown = "_fadeOutDown_1dn0m_1";
var fadeOutUp = "_fadeOutUp_1dn0m_1";
var fadeOutLeft = "_fadeOutLeft_1dn0m_1";
var fadeOutRight = "_fadeOutRight_1dn0m_1";
var ping = "_ping_1dn0m_1";
var blinkBackground = "_blinkBackground_1dn0m_1";
var typingBlink = "_typingBlink_1dn0m_1";
var DropdownMenu_vue_vue_type_style_index_0_lang_module_default = {
	content,
	searchable,
	popoverIn,
	trigger,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1dn0m_1",
	opacityPulse,
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
var DropdownMenu_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DropdownMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DropdownMenu_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DropdownMenuLabel_default as a, DropdownMenuRoot_default as c, MenuContent_default as d, MenuItem_default as f, DropdownMenuPortal_default as i, MenuSeparator_default as l, MenuAnchor_default as m, DropdownMenuItem_default as n, DropdownMenuItem_default$1 as o, MenuRoot_default as p, DropdownMenuTrigger_default as r, DropdownMenuContent_default as s, DropdownMenu_default as t, MenuPortal_default as u };
