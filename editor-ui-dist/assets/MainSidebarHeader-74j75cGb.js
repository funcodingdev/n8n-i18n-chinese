import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, I as h, It as ref, N as defineComponent, P as getCurrentInstance, Pt as reactive, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, W as nextTick, X as onMounted, _ as Fragment, _t as watchEffect, at as resolveComponent, bt as withCtx, cn as isObject, ft as useSlots, gt as watch, it as renderSlot, j as createVNode, lt as useAttrs, m as withKeys, mn as isString, n as Transition, p as vShow, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, tn as init_shared_esm_bundler, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-CcR38nth.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nIconButton_default } from "./N8nIconButton-CMP0ih80.js";
import { r as onClickOutside } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as N8nPopover_default } from "./N8nPopover-KufkLzBT.js";
import { r as triggerEvent } from "./useMessage-B2KuXuge.js";
import { t as ElTooltip } from "./tooltip-ajJuL6NM.js";
import { S as useTimeoutFn, a as removeClass, h as useResizeObserver, i as hasClass, s as throwError, t as addClass } from "./style-D4NTVD8o.js";
import { a as buildProps, o as definePropType, r as useNamespace } from "./use-namespace-BOyjzxct.js";
import { i as isNil, r as EVENT_CODE } from "./focus-trap-B9RNkCJO.js";
import { a as arrow_down_default, i as withNoopInstall, n as withInstall, s as arrow_right_default, t as _export_sfc, w as more_default } from "./plugin-vue_export-helper-BwbYAlq0.js";
import { i as useDeprecated, l as iconPropType, t as ElIcon } from "./icon-a_YnoStc.js";
import { a as flattedChildren } from "./overlay-CD7ds3qj.js";
import { r as mutable } from "./input-DkRuN_WS.js";
import { n as TinyColor } from "./button-RT_9pd39.js";
import { n as _CollapseTransition } from "./collapse-transition-BWQSHPg5.js";
import { t as RouterLink } from "./vue-router-Dl3cOHxO.js";
import { t as N8nLink_default } from "./N8nLink-DzyV3f-o.js";
import { t as N8nLogo_default } from "./N8nLogo-CadhsNjD.js";
import { t as N8nMenuItem_default } from "./N8nMenuItem-BEtEh5sY.js";
import { gn as useSourceControlStore } from "./workflows.store-Dju5360D.js";
import { t as useSettingsStore } from "./settings.store-ClBf6TZq.js";
import { t as useUsersStore } from "./users.store-Dgvdd0Ok.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-nKOH1E5v.js";
import { t as VIEWS } from "./views-o5a97N_l.js";
import { c as CHANGELOG_URL } from "./constants-BP1FOJvU.js";
import { t as useVersionsStore } from "./versions.store-Cw8a5sNw.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-D0LoRFri.js";
import { t as useGlobalEntityCreation } from "./useGlobalEntityCreation-B_3qmG5W.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/utils/submenu.mjs
var SubMenu$1 = class {
	constructor(parent, domNode) {
		this.parent = parent;
		this.domNode = domNode;
		this.subIndex = 0;
		this.subIndex = 0;
		this.init();
	}
	init() {
		this.subMenuItems = this.domNode.querySelectorAll("li");
		this.addListeners();
	}
	gotoSubIndex(idx) {
		if (idx === this.subMenuItems.length) idx = 0;
		else if (idx < 0) idx = this.subMenuItems.length - 1;
		this.subMenuItems[idx].focus();
		this.subIndex = idx;
	}
	addListeners() {
		const parentNode = this.parent.domNode;
		Array.prototype.forEach.call(this.subMenuItems, (el) => {
			el.addEventListener("keydown", (event) => {
				let prevDef = false;
				switch (event.code) {
					case EVENT_CODE.down:
						this.gotoSubIndex(this.subIndex + 1);
						prevDef = true;
						break;
					case EVENT_CODE.up:
						this.gotoSubIndex(this.subIndex - 1);
						prevDef = true;
						break;
					case EVENT_CODE.tab:
						triggerEvent(parentNode, "mouseleave");
						break;
					case EVENT_CODE.enter:
					case EVENT_CODE.space:
						prevDef = true;
						event.currentTarget.click();
						break;
				}
				if (prevDef) {
					event.preventDefault();
					event.stopPropagation();
				}
				return false;
			});
		});
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/utils/menu-item.mjs
var MenuItem$1 = class {
	constructor(domNode, namespace) {
		this.domNode = domNode;
		this.submenu = null;
		this.submenu = null;
		this.init(namespace);
	}
	init(namespace) {
		this.domNode.setAttribute("tabindex", "0");
		const menuChild = this.domNode.querySelector(`.${namespace}-menu`);
		if (menuChild) this.submenu = new SubMenu$1(this, menuChild);
		this.addListeners();
	}
	addListeners() {
		this.domNode.addEventListener("keydown", (event) => {
			let prevDef = false;
			switch (event.code) {
				case EVENT_CODE.down:
					triggerEvent(event.currentTarget, "mouseenter");
					this.submenu && this.submenu.gotoSubIndex(0);
					prevDef = true;
					break;
				case EVENT_CODE.up:
					triggerEvent(event.currentTarget, "mouseenter");
					this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
					prevDef = true;
					break;
				case EVENT_CODE.tab:
					triggerEvent(event.currentTarget, "mouseleave");
					break;
				case EVENT_CODE.enter:
				case EVENT_CODE.space:
					prevDef = true;
					event.currentTarget.click();
					break;
			}
			if (prevDef) event.preventDefault();
		});
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/utils/menu-bar.mjs
var Menu$1 = class {
	constructor(domNode, namespace) {
		this.domNode = domNode;
		this.init(namespace);
	}
	init(namespace) {
		const menuChildren = this.domNode.childNodes;
		Array.from(menuChildren).forEach((child) => {
			if (child.nodeType === 1) new MenuItem$1(child, namespace);
		});
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/menu-collapse-transition.mjs
var _sfc_main$2 = defineComponent({
	name: "ElMenuCollapseTransition",
	setup() {
		const ns = useNamespace("menu");
		return { listeners: {
			onBeforeEnter: (el) => el.style.opacity = "0.2",
			onEnter(el, done) {
				addClass(el, `${ns.namespace.value}-opacity-transition`);
				el.style.opacity = "1";
				done();
			},
			onAfterEnter(el) {
				removeClass(el, `${ns.namespace.value}-opacity-transition`);
				el.style.opacity = "";
			},
			onBeforeLeave(el) {
				if (!el.dataset) el.dataset = {};
				if (hasClass(el, ns.m("collapse"))) {
					removeClass(el, ns.m("collapse"));
					el.dataset.oldOverflow = el.style.overflow;
					el.dataset.scrollWidth = el.clientWidth.toString();
					addClass(el, ns.m("collapse"));
				} else {
					addClass(el, ns.m("collapse"));
					el.dataset.oldOverflow = el.style.overflow;
					el.dataset.scrollWidth = el.clientWidth.toString();
					removeClass(el, ns.m("collapse"));
				}
				el.style.width = `${el.scrollWidth}px`;
				el.style.overflow = "hidden";
			},
			onLeave(el) {
				addClass(el, "horizontal-collapse-transition");
				el.style.width = `${el.dataset.scrollWidth}px`;
			}
		} };
	}
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, _ctx.listeners), {
		default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
		_: 3
	}, 16);
}
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/use-menu.mjs
function useMenu(instance, currentIndex) {
	const indexPath = computed(() => {
		let parent = instance.parent;
		const path = [currentIndex.value];
		while (parent.type.name !== "ElMenu") {
			if (parent.props.index) path.unshift(parent.props.index);
			parent = parent.parent;
		}
		return path;
	});
	return {
		parentMenu: computed(() => {
			let parent = instance.parent;
			while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) parent = parent.parent;
			return parent;
		}),
		indexPath
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/use-menu-color.mjs
function useMenuColor(props) {
	return computed(() => {
		const color = props.backgroundColor;
		if (!color) return "";
		else return new TinyColor(color).shade(20).toString();
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/use-menu-css-var.mjs
var useMenuCssVar = (props, level) => {
	const ns = useNamespace("menu");
	return computed(() => {
		return ns.cssVarBlock({
			"text-color": props.textColor || "",
			"hover-text-color": props.textColor || "",
			"bg-color": props.backgroundColor || "",
			"hover-bg-color": useMenuColor(props).value || "",
			"active-color": props.activeTextColor || "",
			level: `${level}`
		});
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/sub-menu.mjs
init_shared_esm_bundler();
var subMenuProps = buildProps({
	index: {
		type: String,
		required: true
	},
	showTimeout: {
		type: Number,
		default: 300
	},
	hideTimeout: {
		type: Number,
		default: 300
	},
	popperClass: String,
	disabled: Boolean,
	popperAppendToBody: {
		type: Boolean,
		default: void 0
	},
	teleported: {
		type: Boolean,
		default: void 0
	},
	popperOffset: {
		type: Number,
		default: 6
	},
	expandCloseIcon: { type: iconPropType },
	expandOpenIcon: { type: iconPropType },
	collapseCloseIcon: { type: iconPropType },
	collapseOpenIcon: { type: iconPropType }
});
var COMPONENT_NAME$1 = "ElSubMenu";
var SubMenu = defineComponent({
	name: COMPONENT_NAME$1,
	props: subMenuProps,
	setup(props, { slots, expose }) {
		useDeprecated({
			from: "popper-append-to-body",
			replacement: "teleported",
			scope: COMPONENT_NAME$1,
			version: "2.3.0",
			ref: "https://element-plus.org/en-US/component/menu.html#submenu-attributes"
		}, computed(() => props.popperAppendToBody !== void 0));
		const instance = getCurrentInstance();
		const { indexPath, parentMenu } = useMenu(instance, computed(() => props.index));
		const nsMenu = useNamespace("menu");
		const nsSubMenu = useNamespace("sub-menu");
		const rootMenu = inject("rootMenu");
		if (!rootMenu) throwError(COMPONENT_NAME$1, "can not inject root menu");
		const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
		if (!subMenu) throwError(COMPONENT_NAME$1, "can not inject sub menu");
		const items = ref({});
		const subMenus = ref({});
		let timeout;
		const mouseInChild = ref(false);
		const verticalTitleRef = ref();
		const vPopper = ref(null);
		const currentPlacement = computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
		const subMenuTitleIcon = computed(() => {
			return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? props.expandCloseIcon && props.expandOpenIcon ? opened.value ? props.expandOpenIcon : props.expandCloseIcon : arrow_down_default : props.collapseCloseIcon && props.collapseOpenIcon ? opened.value ? props.collapseOpenIcon : props.collapseCloseIcon : arrow_right_default;
		});
		const isFirstLevel = computed(() => {
			return subMenu.level === 0;
		});
		const appendToBody = computed(() => {
			var _a;
			const value = (_a = props.teleported) != null ? _a : props.popperAppendToBody;
			return value === void 0 ? isFirstLevel.value : value;
		});
		const menuTransitionName = computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
		const fallbackPlacements = computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
			"bottom-start",
			"bottom-end",
			"top-start",
			"top-end",
			"right-start",
			"left-start"
		] : [
			"right-start",
			"right",
			"right-end",
			"left-start",
			"bottom-start",
			"bottom-end",
			"top-start",
			"top-end"
		]);
		const opened = computed(() => rootMenu.openedMenus.includes(props.index));
		const active = computed(() => {
			let isActive = false;
			Object.values(items.value).forEach((item2) => {
				if (item2.active) isActive = true;
			});
			Object.values(subMenus.value).forEach((subItem) => {
				if (subItem.active) isActive = true;
			});
			return isActive;
		});
		const mode = computed(() => rootMenu.props.mode);
		const item = reactive({
			index: props.index,
			indexPath,
			active
		});
		const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
		const doDestroy = () => {
			var _a, _b, _c;
			return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
		};
		const handleCollapseToggle = (value) => {
			if (!value) doDestroy();
		};
		const handleClick = () => {
			if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) return;
			rootMenu.handleSubMenuClick({
				index: props.index,
				indexPath: indexPath.value,
				active: active.value
			});
		};
		const handleMouseenter = (event, showTimeout = props.showTimeout) => {
			var _a;
			if (event.type === "focus") return;
			if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) return;
			subMenu.mouseInChild.value = true;
			timeout?.();
			({stop: timeout} = useTimeoutFn(() => {
				rootMenu.openMenu(props.index, indexPath.value);
			}, showTimeout));
			if (appendToBody.value) (_a = parentMenu.value.vnode.el) == null || _a.dispatchEvent(new MouseEvent("mouseenter"));
		};
		const handleMouseleave = (deepDispatch = false) => {
			var _a, _b;
			if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") return;
			timeout?.();
			subMenu.mouseInChild.value = false;
			({stop: timeout} = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), props.hideTimeout));
			if (appendToBody.value && deepDispatch) {
				if (((_a = instance.parent) == null ? void 0 : _a.type.name) === "ElSubMenu") (_b = subMenu.handleMouseleave) == null || _b.call(subMenu, true);
			}
		};
		watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
		{
			const addSubMenu = (item2) => {
				subMenus.value[item2.index] = item2;
			};
			const removeSubMenu = (item2) => {
				delete subMenus.value[item2.index];
			};
			provide(`subMenu:${instance.uid}`, {
				addSubMenu,
				removeSubMenu,
				handleMouseleave,
				mouseInChild,
				level: subMenu.level + 1
			});
		}
		expose({ opened });
		onMounted(() => {
			rootMenu.addSubMenu(item);
			subMenu.addSubMenu(item);
		});
		onBeforeUnmount(() => {
			subMenu.removeSubMenu(item);
			rootMenu.removeSubMenu(item);
		});
		return () => {
			var _a;
			const titleTag = [(_a = slots.title) == null ? void 0 : _a.call(slots), h(ElIcon, {
				class: nsSubMenu.e("icon-arrow"),
				style: { transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none" }
			}, { default: () => isString(subMenuTitleIcon.value) ? h(instance.appContext.components[subMenuTitleIcon.value]) : h(subMenuTitleIcon.value) })];
			const child = rootMenu.isMenuPopup ? h(ElTooltip, {
				ref: vPopper,
				visible: opened.value,
				effect: "light",
				pure: true,
				offset: props.popperOffset,
				showArrow: false,
				persistent: true,
				popperClass: props.popperClass,
				placement: currentPlacement.value,
				teleported: appendToBody.value,
				fallbackPlacements: fallbackPlacements.value,
				transition: menuTransitionName.value,
				gpuAcceleration: false
			}, {
				content: () => {
					var _a2;
					return h("div", {
						class: [
							nsMenu.m(mode.value),
							nsMenu.m("popup-container"),
							props.popperClass
						],
						onMouseenter: (evt) => handleMouseenter(evt, 100),
						onMouseleave: () => handleMouseleave(true),
						onFocus: (evt) => handleMouseenter(evt, 100)
					}, [h("ul", {
						class: [
							nsMenu.b(),
							nsMenu.m("popup"),
							nsMenu.m(`popup-${currentPlacement.value}`)
						],
						style: ulStyle.value
					}, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])]);
				},
				default: () => h("div", {
					class: nsSubMenu.e("title"),
					onClick: handleClick
				}, titleTag)
			}) : h(Fragment, {}, [h("div", {
				class: nsSubMenu.e("title"),
				ref: verticalTitleRef,
				onClick: handleClick
			}, titleTag), h(_CollapseTransition, {}, { default: () => {
				var _a2;
				return withDirectives(h("ul", {
					role: "menu",
					class: [nsMenu.b(), nsMenu.m("inline")],
					style: ulStyle.value
				}, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vShow, opened.value]]);
			} })]);
			return h("li", {
				class: [
					nsSubMenu.b(),
					nsSubMenu.is("active", active.value),
					nsSubMenu.is("opened", opened.value),
					nsSubMenu.is("disabled", props.disabled)
				],
				role: "menuitem",
				ariaHaspopup: true,
				ariaExpanded: opened.value,
				onMouseenter: handleMouseenter,
				onMouseleave: () => handleMouseleave(true),
				onFocus: handleMouseenter
			}, [child]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/menu.mjs
init_shared_esm_bundler();
var menuProps = buildProps({
	mode: {
		type: String,
		values: ["horizontal", "vertical"],
		default: "vertical"
	},
	defaultActive: {
		type: String,
		default: ""
	},
	defaultOpeneds: {
		type: definePropType(Array),
		default: () => mutable([])
	},
	uniqueOpened: Boolean,
	router: Boolean,
	menuTrigger: {
		type: String,
		values: ["hover", "click"],
		default: "hover"
	},
	collapse: Boolean,
	backgroundColor: String,
	textColor: String,
	activeTextColor: String,
	collapseTransition: {
		type: Boolean,
		default: true
	},
	ellipsis: {
		type: Boolean,
		default: true
	},
	popperEffect: {
		type: String,
		values: ["dark", "light"],
		default: "dark"
	}
});
var checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => isString(path));
var Menu = defineComponent({
	name: "ElMenu",
	props: menuProps,
	emits: {
		close: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
		open: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
		select: (index, indexPath, item, routerResult) => isString(index) && checkIndexPath(indexPath) && isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
	},
	setup(props, { emit, slots, expose }) {
		const instance = getCurrentInstance();
		const router = instance.appContext.config.globalProperties.$router;
		const menu = ref();
		const nsMenu = useNamespace("menu");
		const nsSubMenu = useNamespace("sub-menu");
		const sliceIndex = ref(-1);
		const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
		const activeIndex = ref(props.defaultActive);
		const items = ref({});
		const subMenus = ref({});
		const isMenuPopup = computed(() => {
			return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
		});
		const initMenu = () => {
			const activeItem = activeIndex.value && items.value[activeIndex.value];
			if (!activeItem || props.mode === "horizontal" || props.collapse) return;
			activeItem.indexPath.forEach((index) => {
				const subMenu = subMenus.value[index];
				subMenu && openMenu(index, subMenu.indexPath);
			});
		};
		const openMenu = (index, indexPath) => {
			if (openedMenus.value.includes(index)) return;
			if (props.uniqueOpened) openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
			openedMenus.value.push(index);
			emit("open", index, indexPath);
		};
		const close = (index) => {
			const i = openedMenus.value.indexOf(index);
			if (i !== -1) openedMenus.value.splice(i, 1);
		};
		const closeMenu = (index, indexPath) => {
			close(index);
			emit("close", index, indexPath);
		};
		const handleSubMenuClick = ({ index, indexPath }) => {
			if (openedMenus.value.includes(index)) closeMenu(index, indexPath);
			else openMenu(index, indexPath);
		};
		const handleMenuItemClick = (menuItem) => {
			if (props.mode === "horizontal" || props.collapse) openedMenus.value = [];
			const { index, indexPath } = menuItem;
			if (isNil(index) || isNil(indexPath)) return;
			if (props.router && router) {
				const route = menuItem.route || index;
				const routerResult = router.push(route).then((res) => {
					if (!res) activeIndex.value = index;
					return res;
				});
				emit("select", index, indexPath, {
					index,
					indexPath,
					route
				}, routerResult);
			} else {
				activeIndex.value = index;
				emit("select", index, indexPath, {
					index,
					indexPath
				});
			}
		};
		const updateActiveIndex = (val) => {
			const itemsInData = items.value;
			const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
			if (item) activeIndex.value = item.index;
			else activeIndex.value = val;
		};
		const calcSliceIndex = () => {
			var _a, _b;
			if (!menu.value) return -1;
			const items2 = Array.from((_b = (_a = menu.value) == null ? void 0 : _a.childNodes) != null ? _b : []).filter((item) => item.nodeName !== "#comment" && (item.nodeName !== "#text" || item.nodeValue));
			const moreItemWidth = 64;
			const paddingLeft = Number.parseInt(getComputedStyle(menu.value).paddingLeft, 10);
			const paddingRight = Number.parseInt(getComputedStyle(menu.value).paddingRight, 10);
			const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
			let calcWidth = 0;
			let sliceIndex2 = 0;
			items2.forEach((item, index) => {
				calcWidth += item.offsetWidth || 0;
				if (calcWidth <= menuWidth - moreItemWidth) sliceIndex2 = index + 1;
			});
			return sliceIndex2 === items2.length ? -1 : sliceIndex2;
		};
		const debounce = (fn, wait = 33.34) => {
			let timmer;
			return () => {
				timmer && clearTimeout(timmer);
				timmer = setTimeout(() => {
					fn();
				}, wait);
			};
		};
		let isFirstTimeRender = true;
		const handleResize = () => {
			const callback = () => {
				sliceIndex.value = -1;
				nextTick(() => {
					sliceIndex.value = calcSliceIndex();
				});
			};
			isFirstTimeRender ? callback() : debounce(callback)();
			isFirstTimeRender = false;
		};
		watch(() => props.defaultActive, (currentActive) => {
			if (!items.value[currentActive]) activeIndex.value = "";
			updateActiveIndex(currentActive);
		});
		watch(() => props.collapse, (value) => {
			if (value) openedMenus.value = [];
		});
		watch(items.value, initMenu);
		let resizeStopper;
		watchEffect(() => {
			if (props.mode === "horizontal" && props.ellipsis) resizeStopper = useResizeObserver(menu, handleResize).stop;
			else resizeStopper?.();
		});
		{
			const addSubMenu = (item) => {
				subMenus.value[item.index] = item;
			};
			const removeSubMenu = (item) => {
				delete subMenus.value[item.index];
			};
			const addMenuItem = (item) => {
				items.value[item.index] = item;
			};
			const removeMenuItem = (item) => {
				delete items.value[item.index];
			};
			provide("rootMenu", reactive({
				props,
				openedMenus,
				items,
				subMenus,
				activeIndex,
				isMenuPopup,
				addMenuItem,
				removeMenuItem,
				addSubMenu,
				removeSubMenu,
				openMenu,
				closeMenu,
				handleMenuItemClick,
				handleSubMenuClick
			}));
			provide(`subMenu:${instance.uid}`, {
				addSubMenu,
				removeSubMenu,
				mouseInChild: ref(false),
				level: 0
			});
		}
		onMounted(() => {
			if (props.mode === "horizontal") new Menu$1(instance.vnode.el, nsMenu.namespace.value);
		});
		{
			const open = (index) => {
				const { indexPath } = subMenus.value[index];
				indexPath.forEach((i) => openMenu(i, indexPath));
			};
			expose({
				open,
				close,
				handleResize
			});
		}
		return () => {
			var _a, _b;
			let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
			const vShowMore = [];
			if (props.mode === "horizontal" && menu.value) {
				const originalSlot = flattedChildren(slot);
				const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
				const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
				if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
					slot = slotDefault;
					vShowMore.push(h(SubMenu, {
						index: "sub-menu-more",
						class: nsSubMenu.e("hide-arrow")
					}, {
						title: () => h(ElIcon, { class: nsSubMenu.e("icon-more") }, { default: () => h(more_default) }),
						default: () => slotMore
					}));
				}
			}
			const ulStyle = useMenuCssVar(props, 0);
			const vMenu = h("ul", {
				key: String(props.collapse),
				role: "menubar",
				ref: menu,
				style: ulStyle.value,
				class: {
					[nsMenu.b()]: true,
					[nsMenu.m(props.mode)]: true,
					[nsMenu.m("collapse")]: props.collapse
				}
			}, [...slot, ...vShowMore]);
			if (props.collapseTransition && props.mode === "vertical") return h(ElMenuCollapseTransition, () => vMenu);
			return vMenu;
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/menu-item.mjs
init_shared_esm_bundler();
var menuItemProps = buildProps({
	index: {
		type: definePropType([String, null]),
		default: null
	},
	route: { type: definePropType([String, Object]) },
	disabled: Boolean
});
var menuItemEmits = { click: (item) => isString(item.index) && Array.isArray(item.indexPath) };
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/menu-item2.mjs
var COMPONENT_NAME = "ElMenuItem";
var _sfc_main$1 = defineComponent({
	name: COMPONENT_NAME,
	components: { ElTooltip },
	props: menuItemProps,
	emits: menuItemEmits,
	setup(props, { emit }) {
		const instance = getCurrentInstance();
		const rootMenu = inject("rootMenu");
		const nsMenu = useNamespace("menu");
		const nsMenuItem = useNamespace("menu-item");
		if (!rootMenu) throwError(COMPONENT_NAME, "can not inject root menu");
		const { parentMenu, indexPath } = useMenu(instance, toRef(props, "index"));
		const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
		if (!subMenu) throwError(COMPONENT_NAME, "can not inject sub menu");
		const active = computed(() => props.index === rootMenu.activeIndex);
		const item = reactive({
			index: props.index,
			indexPath,
			active
		});
		const handleClick = () => {
			if (!props.disabled) {
				rootMenu.handleMenuItemClick({
					index: props.index,
					indexPath: indexPath.value,
					route: props.route
				});
				emit("click", item);
			}
		};
		onMounted(() => {
			subMenu.addSubMenu(item);
			rootMenu.addMenuItem(item);
		});
		onBeforeUnmount(() => {
			subMenu.removeSubMenu(item);
			rootMenu.removeMenuItem(item);
		});
		return {
			parentMenu,
			rootMenu,
			active,
			nsMenu,
			nsMenuItem,
			handleClick
		};
	}
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_el_tooltip = resolveComponent("el-tooltip");
	return openBlock(), createElementBlock("li", {
		class: normalizeClass([
			_ctx.nsMenuItem.b(),
			_ctx.nsMenuItem.is("active", _ctx.active),
			_ctx.nsMenuItem.is("disabled", _ctx.disabled)
		]),
		role: "menuitem",
		tabindex: "-1",
		onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
	}, [_ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
		key: 0,
		effect: _ctx.rootMenu.props.popperEffect,
		placement: "right",
		"fallback-placements": ["left"],
		persistent: ""
	}, {
		content: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
		default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.nsMenu.be("tooltip", "trigger")) }, [renderSlot(_ctx.$slots, "default")], 2)]),
		_: 3
	}, 8, ["effect"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [renderSlot(_ctx.$slots, "default"), renderSlot(_ctx.$slots, "title")], 64))], 2);
}
var MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/src/menu-item-group2.mjs
var _sfc_main = defineComponent({
	name: "ElMenuItemGroup",
	props: { title: String },
	setup() {
		return { ns: useNamespace("menu-item-group") };
	}
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("li", { class: normalizeClass(_ctx.ns.b()) }, [createBaseVNode("div", { class: normalizeClass(_ctx.ns.e("title")) }, [!_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.title), 1)], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 })], 2), createBaseVNode("ul", null, [renderSlot(_ctx.$slots, "default")])], 2);
}
var MenuItemGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/menu/index.mjs
var ElMenu = withInstall(Menu, {
	MenuItem,
	MenuItemGroup,
	SubMenu
});
var ElMenuItem = withNoopInstall(MenuItem);
withNoopInstall(MenuItemGroup);
var ElSubMenu = withNoopInstall(SubMenu);
//#endregion
//#region ../@n8n/design-system/src/components/ConditionalRouterLink/index.ts
var ConditionalRouterLink_default = /* @__PURE__ */ defineComponent({
	name: "ConditionalRouterLink",
	inheritAttrs: false,
	__name: "CondtionalRouterLink",
	props: {
		to: { default: void 0 },
		replace: { type: Boolean },
		activeClass: {},
		exactActiveClass: {},
		custom: { type: Boolean },
		ariaCurrentValue: { default: "page" }
	},
	setup(__props) {
		/**
		* Component that renders either a RouterLink or a normal anchor tag or
		* just the slot content based on whether the `to` or `href` prop is
		* passed or not.
		*/
		/**
		* Declared here rather than spread from `RouterLink.props`, which does not exist
		* on RouterLink's type at all (`_RouterLinkI` declares only `new()` and
		* `useLink`) — the spread needed a `@ts-expect-error`, and the recovered `any`
		* collapsed this component's whole props type to `{}` in the emitted
		* declarations. Mirrors RouterLink's runtime prop declarations exactly, except
		* that `to` is optional here — without it the component falls back to an `<a>`
		* or to the bare slot.
		*
		* Deliberately absent: `viewTransition`. It is in the `RouterLinkProps` *type*
		* but is not one of RouterLink's declared props — it is a `useLink()` option, and
		* `RouterLinkImpl.setup` passes only the declared props to `useLink`, so it is
		* unreachable through `<RouterLink>` itself (vue-router 4.5.0). Declaring it here
		* adds a prop RouterLink does not have, which Vue then binds as a stray
		* `viewtransition="false"` DOM attribute on every rendered link — measured, not
		* predicted. `ConditionalRouterLink.test.ts` compares this list against
		* `RouterLink.props` at run time, so a vue-router that promotes `viewTransition`
		* to a real prop fails that test and tells us to add it then.
		*/
		const props = __props;
		const attrs = useAttrs();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [props.to ? (openBlock(), createBlock(unref(RouterLink), mergeProps({ key: 0 }, props, { to: props.to }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["to"])) : unref(attrs).href ? (openBlock(), createElementBlock("a", normalizeProps(mergeProps({ key: 1 }, unref(attrs))), [renderSlot(_ctx.$slots, "default")], 16)) : renderSlot(_ctx.$slots, "default", { key: 2 })]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nNavigationDropdown/NavigationDropdown.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 0 };
var ROOT_MENU_INDEX = "-1";
var NavigationDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nNavigationDropdown",
	__name: "NavigationDropdown",
	props: {
		menu: {},
		disabled: { type: Boolean },
		teleport: { type: Boolean },
		submenuClass: {}
	},
	emits: ["itemClick", "select"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const menuRef = ref(null);
		const NoopIcon = defineComponent({
			name: "NoopIcon",
			render: () => null
		});
		const emit = __emit;
		const slots = useSlots();
		const hasAppendSlot = (id) => Boolean(slots[`item.append.${id}`]);
		const orderedMenu = computed(() => {
			const workflowIndex = props.menu.findIndex((item) => !item.isDivider && item.id === "workflow");
			const agentIndex = props.menu.findIndex((item) => !item.isDivider && item.id === "agent");
			if (workflowIndex === -1 || agentIndex === -1 || agentIndex === workflowIndex + 1) return props.menu;
			const ordered = [...props.menu];
			const [agentItem] = ordered.splice(agentIndex, 1);
			const nextWorkflowIndex = ordered.findIndex((item) => !item.isDivider && item.id === "workflow");
			ordered.splice(nextWorkflowIndex + 1, 0, agentItem);
			return ordered;
		});
		const open = () => {
			menuRef.value?.open(ROOT_MENU_INDEX);
		};
		const close = () => {
			menuRef.value?.close(ROOT_MENU_INDEX);
		};
		const menuTrigger = ref("click");
		const onOpen = (index) => {
			if (index !== ROOT_MENU_INDEX) return;
			menuTrigger.value = "hover";
		};
		const onClose = (index) => {
			if (index !== ROOT_MENU_INDEX) return;
			menuTrigger.value = "click";
		};
		__expose({
			open,
			close
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElMenu), {
				ref_key: "menuRef",
				ref: menuRef,
				mode: "horizontal",
				"unique-opened": "",
				"menu-trigger": menuTrigger.value,
				ellipsis: false,
				class: normalizeClass(_ctx.$style.dropdown),
				onSelect: _cache[1] || (_cache[1] = ($event) => emit("select", $event)),
				onKeyup: withKeys(close, ["escape"]),
				onOpen,
				onClose
			}, {
				default: withCtx(() => [createVNode(unref(ElSubMenu), {
					index: ROOT_MENU_INDEX,
					class: normalizeClass(_ctx.$style.trigger),
					"popper-offset": -10,
					"popper-class": [_ctx.$style.submenu, __props.submenuClass ?? ""].join(" "),
					disabled: __props.disabled,
					teleported: __props.teleport
				}, {
					title: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(orderedMenu.value, (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.isDivider ? (openBlock(), createElementBlock("hr", _hoisted_1)) : item.submenu ? (openBlock(), createBlock(unref(ElSubMenu), {
							key: 1,
							"popper-class": _ctx.$style.nestedSubmenu,
							index: item.id,
							"popper-offset": -10,
							"expand-close-icon": unref(NoopIcon),
							"expand-open-icon": unref(NoopIcon),
							"data-test-id": "navigation-submenu"
						}, {
							title: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.subMenuTitle) }, [renderSlot(_ctx.$slots, "item-icon", mergeProps({ ref_for: true }, { item }), () => [item.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [typeof item.icon === "string" || item.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 0,
								class: normalizeClass({ [_ctx.$style.submenu__icon]: item.iconMargin !== false }),
								icon: typeof item.icon === "object" ? item.icon.value : item.icon,
								size: item.iconSize
							}, null, 8, [
								"class",
								"icon",
								"size"
							])) : item.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 1,
								class: normalizeClass({ [_ctx.$style.submenu__icon]: item.iconMargin !== false })
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.icon.value), 1)]),
								_: 2
							}, 1032, ["class"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)]), createTextVNode(" " + toDisplayString(item.title), 1)], 2)]),
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(item.submenu, (subitem) => {
								return openBlock(), createElementBlock(Fragment, { key: subitem.id }, [subitem.isDivider ? (openBlock(), createElementBlock("hr", _hoisted_2)) : (openBlock(), createBlock(unref(ConditionalRouterLink_default), {
									key: 1,
									to: !subitem.disabled && subitem.route || void 0
								}, {
									default: withCtx(() => [createVNode(unref(ElMenuItem), {
										"data-test-id": "navigation-submenu-item",
										index: subitem.id,
										disabled: subitem.disabled,
										onClick: _cache[0] || (_cache[0] = ($event) => emit("itemClick", $event))
									}, {
										default: withCtx(() => [
											renderSlot(_ctx.$slots, "item-icon", mergeProps({ ref_for: true }, { item: subitem }), () => [subitem.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [typeof subitem.icon === "string" || subitem.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
												key: 0,
												class: normalizeClass({ [_ctx.$style.submenu__icon]: subitem.iconMargin !== false }),
												icon: typeof subitem.icon === "object" ? subitem.icon.value : subitem.icon,
												size: subitem.iconSize
											}, null, 8, [
												"class",
												"icon",
												"size"
											])) : subitem.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
												key: 1,
												class: normalizeClass({ [_ctx.$style.submenu__icon]: subitem.iconMargin !== false })
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(subitem.icon.value), 1)]),
												_: 2
											}, 1032, ["class"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)]),
											createBaseVNode("span", { class: normalizeClass(_ctx.$style.menuItemTitle) }, toDisplayString(subitem.title), 3),
											subitem.description ? (openBlock(), createBlock(unref(N8nTooltip_default), {
												key: 0,
												content: subitem.description,
												placement: "right",
												class: normalizeClass(_ctx.$style.infoTooltip)
											}, {
												default: withCtx(() => [createVNode(unref(N8nIcon_default), {
													icon: "info",
													size: "medium",
													class: normalizeClass(_ctx.$style.infoIcon)
												}, null, 8, ["class"])]),
												_: 1
											}, 8, ["content", "class"])) : createCommentVNode("", true),
											hasAppendSlot(item.id) ? (openBlock(), createElementBlock("span", {
												key: 1,
												class: normalizeClass(_ctx.$style.menuItemAppend)
											}, [renderSlot(_ctx.$slots, `item.append.${item.id}`, mergeProps({ ref_for: true }, { item }))], 2)) : createCommentVNode("", true)
										]),
										_: 2
									}, 1032, ["index", "disabled"])]),
									_: 2
								}, 1032, ["to"]))], 64);
							}), 128))]),
							_: 2
						}, 1032, [
							"popper-class",
							"index",
							"expand-close-icon",
							"expand-open-icon"
						])) : (openBlock(), createBlock(unref(ConditionalRouterLink_default), {
							key: 2,
							to: !item.disabled && item.route || void 0
						}, {
							default: withCtx(() => [createVNode(unref(ElMenuItem), {
								index: item.id,
								disabled: item.disabled,
								"data-test-id": "navigation-menu-item"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.title) + " ", 1), hasAppendSlot(item.id) ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.menuItemAppend)
								}, [renderSlot(_ctx.$slots, `item.append.${item.id}`, mergeProps({ ref_for: true }, { item }))], 2)) : createCommentVNode("", true)]),
								_: 2
							}, 1032, ["index", "disabled"])]),
							_: 2
						}, 1032, ["to"]))], 64);
					}), 128))]),
					_: 3
				}, 8, [
					"class",
					"popper-class",
					"disabled",
					"teleported"
				])]),
				_: 3
			}, 8, ["menu-trigger", "class"]);
		};
	}
});
var NavigationDropdown_vue_vue_type_style_index_0_lang_module_default = {
	dropdown: "_dropdown_7bmjr_125",
	nestedSubmenu: "_nestedSubmenu_7bmjr_142",
	submenu: "_submenu_7bmjr_147",
	subMenuTitle: "_subMenuTitle_7bmjr_180",
	submenu__icon: "_submenu__icon_7bmjr_186",
	menuItemTitle: "_menuItemTitle_7bmjr_191",
	menuItemAppend: "_menuItemAppend_7bmjr_199",
	infoTooltip: "_infoTooltip_7bmjr_206",
	infoIcon: "_infoIcon_7bmjr_213"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nNavigationDropdown/index.ts
var N8nNavigationDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NavigationDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NavigationDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/types/menu.ts
var isCustomMenuItem = (e) => "component" in e;
//#endregion
//#region src/app/components/VersionUpdateCTA.vue
var VersionUpdateCTA_default = /* @__PURE__ */ defineComponent({
	__name: "VersionUpdateCTA",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		tooltipText: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const versionsStore = useVersionsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const telemetry = useTelemetry();
		const onUpdateClick = async () => {
			telemetry.track("User clicked on update button", { source: "main-sidebar" });
			await pageRedirectionHelper.goToVersions();
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nMenuItem_default), {
				"data-test-id": "version-update-cta-button",
				item: {
					id: "version-update-cta",
					icon: {
						value: "status-warning",
						type: "icon",
						color: "primary"
					},
					disabled: props.disabled,
					disabledReason: props.tooltipText,
					label: unref(i18n).baseText("whatsNew.versionsBehind", { interpolate: { count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length } })
				},
				onClick: onUpdateClick
			}, null, 8, ["item"]);
		};
	}
});
//#endregion
//#region src/app/components/BottomMenu.vue?vue&type=script&setup=true&lang.ts
var BottomMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BottomMenu",
	props: {
		items: {},
		isCollapsed: { type: Boolean }
	},
	emits: ["select", "logout"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const versionsStore = useVersionsStore();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const whatsNewItems = computed(() => ({
			available: versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.length > 0,
			children: [
				...versionsStore.whatsNewArticles.map((article) => ({
					id: `whats-new-article-${article.id}`,
					label: article.title,
					size: "small",
					customIconSize: "small",
					icon: {
						type: "emoji",
						value: "•",
						color: !versionsStore.isWhatsNewArticleRead(article.id) ? "primary" : "text-light"
					}
				})),
				{
					id: "full-changelog",
					icon: "external-link",
					label: i18n.baseText("mainSidebar.whatsNew.fullChangelog"),
					link: {
						href: CHANGELOG_URL,
						target: "_blank"
					},
					size: "small",
					customIconSize: "small"
				},
				...versionsStore.hasVersionUpdates ? [{
					id: "version-upgrade-cta",
					component: VersionUpdateCTA_default,
					props: {
						tooltipText: !usersStore.canUserUpdateVersion ? i18n.baseText("whatsNew.updateNudgeTooltip") : void 0,
						disabled: !usersStore.canUserUpdateVersion
					}
				}] : []
			]
		}));
		function handleSelect(key) {
			emit("select", key);
		}
		function onLogout() {
			emit("logout");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.bottomMenu]: true,
				[_ctx.$style.collapsed]: __props.isCollapsed
			}) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.bottomMenuItems) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.children && item.id === "help" ? (openBlock(), createBlock(unref(N8nPopover_default), {
					key: "help",
					side: "right",
					align: "end",
					"side-offset": 12
				}, {
					content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child) => {
						return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
							key: 0,
							ref_for: true
						}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item: child,
							onClick: () => handleSelect(child.id)
						}, null, 8, ["item", "onClick"]))], 64);
					}), 128)), whatsNewItems.value.available ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "small",
						class: normalizeClass(_ctx.$style.popoverTitle),
						color: "text-light"
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("What's new", -1)])]),
						_: 1
					}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(whatsNewItems.value.children, (child) => {
						return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
							key: 0,
							ref_for: true
						}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item: child,
							onClick: () => handleSelect(child.id)
						}, null, 8, ["item", "onClick"]))], 64);
					}), 128))], 64)) : createCommentVNode("", true)], 2)]),
					trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						"data-test-id": `main-sidebar-${item.id}`,
						item,
						compact: __props.isCollapsed,
						onClick: () => handleSelect(item.id)
					}, null, 8, [
						"data-test-id",
						"item",
						"compact",
						"onClick"
					])]),
					_: 2
				}, 1024)) : item.children && item.id === "settings" ? (openBlock(), createBlock(unref(N8nPopover_default), {
					key: "settings",
					side: "right",
					align: "end",
					"side-offset": 12
				}, {
					content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [
						(openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child) => {
							return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
								key: 0,
								ref_for: true
							}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
								key: 1,
								item: child,
								onClick: () => handleSelect(child.id)
							}, null, 8, ["item", "onClick"]))], 64);
						}), 128)),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.divider) }, null, 2),
						createVNode(unref(N8nMenuItem_default), {
							"data-test-id": "main-sidebar-log-out",
							item: {
								id: "sign-out",
								label: unref(i18n).baseText("auth.signout"),
								icon: "door-open"
							},
							onClick: onLogout
						}, null, 8, ["item"])
					], 2)]),
					trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						"data-test-id": `main-sidebar-${item.id}`,
						item,
						compact: __props.isCollapsed,
						onClick: () => handleSelect(item.id)
					}, null, 8, [
						"data-test-id",
						"item",
						"compact",
						"onClick"
					])]),
					_: 2
				}, 1024)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
					key: 2,
					"data-test-id": `main-sidebar-${item.id}`,
					item,
					compact: __props.isCollapsed,
					class: normalizeClass(item.id === "resource-center" ? _ctx.$style.resourceCenterMenuItem : void 0),
					onClick: () => handleSelect(item.id)
				}, null, 8, [
					"data-test-id",
					"item",
					"compact",
					"class",
					"onClick"
				]))], 64);
			}), 128))], 2)], 2);
		};
	}
});
var BottomMenu_vue_vue_type_style_index_0_lang_module_default = {
	bottomMenu: "_bottomMenu_1ff4z_125",
	collapsed: "_collapsed_1ff4z_130",
	bottomMenuItems: "_bottomMenuItems_1ff4z_134",
	resourceCenterMenuItem: "_resourceCenterMenuItem_1ff4z_138",
	popover: "_popover_1ff4z_142",
	popoverTitle: "_popoverTitle_1ff4z_147",
	divider: "_divider_1ff4z_154"
};
var BottomMenu_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BottomMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BottomMenu_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/MainSidebarHeader.vue?vue&type=script&setup=true&lang.ts
var MainSidebarHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebarHeader",
	props: {
		isCollapsed: { type: Boolean },
		hideCreate: { type: Boolean }
	},
	emits: ["collapse", "openCommandBar"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const sourceControlStore = useSourceControlStore();
		const settingsStore = useSettingsStore();
		const createBtn = ref();
		onClickOutside(createBtn, () => {
			createBtn.value?.close();
		});
		function toggleCollapse() {
			emit("collapse");
		}
		function openCommandBar(event) {
			emit("openCommandBar", event);
		}
		const { menu, handleSelect: handleMenuSelect, createProjectAppendSlotName, createWorkflowsAppendSlotName, createCredentialsAppendSlotName, projectsLimitReachedMessage, upgradeLabel, hasPermissionToCreateProjects } = useGlobalEntityCreation();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.header]: true,
				[_ctx.$style.collapsed]: __props.isCollapsed
			}) }, [
				!__props.isCollapsed ? (openBlock(), createBlock(unref(RouterLink), {
					key: 0,
					to: { name: unref(VIEWS).HOMEPAGE },
					class: normalizeClass(_ctx.$style.logo)
				}, {
					default: withCtx(() => [createVNode(unref(N8nLogo_default), {
						size: "small",
						collapsed: __props.isCollapsed,
						"release-channel": unref(settingsStore).settings.releaseChannel
					}, {
						default: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly && !__props.isCollapsed ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							placement: "bottom"
						}, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								keypath: "readOnlyEnv.tooltip",
								scope: "global"
							}, {
								link: withCtx(() => [createVNode(unref(N8nLink_default), {
									to: "https://docs.n8n.io/source-control-environments/setup/#step-4-connect-n8n-and-configure-your-instance",
									size: "small"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.tooltip.link")), 1)]),
									_: 1
								})]),
								_: 1
							})]),
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								"data-test-id": "read-only-env-icon",
								icon: "lock",
								class: normalizeClass(_ctx.$style.readOnlyEnvironmentIcon)
							}, null, 8, ["class"])]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["collapsed", "release-channel"])]),
					_: 1
				}, 8, ["to", "class"])) : createCommentVNode("", true),
				!__props.hideCreate ? (openBlock(), createBlock(unref(N8nNavigationDropdown_default), {
					key: 1,
					ref_key: "createBtn",
					ref: createBtn,
					"data-test-id": "universal-add",
					menu: unref(menu),
					teleport: true,
					onSelect: unref(handleMenuSelect)
				}, {
					[unref(createWorkflowsAppendSlotName)]: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.workflow")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)]),
					[unref(createCredentialsAppendSlotName)]: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.credential")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)]),
					[unref(createProjectAppendSlotName)]: withCtx(({ item }) => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.project")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : item.disabled ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "right",
						content: unref(projectsLimitReachedMessage)
					}, {
						default: withCtx(() => [!unref(hasPermissionToCreateProjects) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "subtle",
							size: "mini",
							class: normalizeClass(_ctx.$style.upgradeButton),
							onClick: ($event) => unref(handleMenuSelect)(item.id)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(upgradeLabel)), 1)]),
							_: 1
						}, 8, ["class", "onClick"]))]),
						_: 2
					}, 1032, ["content"])) : createCommentVNode("", true)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "plus",
						"icon-size": "large",
						"aria-label": "Add new item"
					})]),
					_: 2
				}, 1032, ["menu", "onSelect"])) : createCommentVNode("", true),
				!unref(settingsStore).isCanvasOnly ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
					key: 2,
					placement: __props.isCollapsed ? "right" : "bottom",
					"show-after": 500,
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "search",
						"icon-size": "large",
						"aria-label": "Open command palette",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["placement", "label"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: __props.isCollapsed ? "right" : "bottom",
					label: __props.isCollapsed ? unref(i18n).baseText("mainSidebar.state.expand") : unref(i18n).baseText("mainSidebar.state.collapse"),
					"show-after": 500,
					shortcut: { keys: ["["] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						id: "toggle-sidebar-button",
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "panel-left",
						"icon-size": "large",
						"aria-label": "Toggle sidebar",
						onClick: toggleCollapse
					})]),
					_: 1
				}, 8, ["placement", "label"])
			], 2);
		};
	}
});
var MainSidebarHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1bvb0_125",
	collapsed: "_collapsed_1bvb0_138",
	logo: "_logo_1bvb0_143",
	readOnlyEnvironmentIcon: "_readOnlyEnvironmentIcon_1bvb0_147",
	iconButton: "_iconButton_1bvb0_157",
	upgradeButton: "_upgradeButton_1bvb0_162"
};
var MainSidebarHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MainSidebarHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { BottomMenu_default as n, MainSidebarHeader_default as t };
