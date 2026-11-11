import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Cd as Transition, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Fl as FocusScope_default, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Pd as withModifiers, Rd as computed, Sf as useTemplateRef, Vd as createCommentVNode, bp as toDisplayString, df as openBlock, ff as provide, hp as normalizeClass, if as nextTick, jf as init_reactivity_esm_bundler, mf as renderSlot, np as init_shared_esm_bundler, xf as useSlots, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, EE as DialogHeader_default, HO as _plugin_vue_export_helper_default, LO as N8nIconButton_default, RO as N8nButton_default, SE as DialogBody_default, TE as DialogTitle_default, kE as N8nInlineTextEdit_default, qO as useI18n, tb as ParameterInputModalContextKey, wE as Dialog_default, xE as DialogFooter_default, zO as N8nIcon_default } from "./app-MbtXRI_F.js";
//#region src/features/agents/components/modals/AgentModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var bodyAutofocusSelector = "[data-agent-modal-autofocus], input:not([type=\"hidden\"]):not([disabled]):not([tabindex=\"-1\"]), textarea:not([disabled]), select:not([disabled]), [contenteditable=\"true\"]";
var AgentModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentModal",
	props: {
		open: { type: Boolean },
		title: {},
		editableTitle: {
			type: Boolean,
			default: false
		},
		titlePlaceholder: { default: "" },
		titleMaxLength: { default: 128 },
		titleError: { default: "" },
		showBack: {
			type: Boolean,
			default: false
		},
		showFooter: {
			type: Boolean,
			default: void 0
		},
		showCancel: {
			type: Boolean,
			default: true
		},
		cancelLabel: { default: void 0 },
		headerDivider: {
			type: Boolean,
			default: false
		},
		headerDividerTone: { default: "default" },
		bodyScrollable: {
			type: Boolean,
			default: true
		},
		bodyFlush: {
			type: Boolean,
			default: false
		},
		stableHeight: {
			type: Boolean,
			default: false
		},
		fixedSize: {
			type: Boolean,
			default: false
		},
		busy: {
			type: Boolean,
			default: false
		},
		size: { default: "2xlarge" },
		stacked: {
			type: Boolean,
			default: false
		},
		trapFocus: {
			type: Boolean,
			default: true
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"update:open",
		"update:title",
		"back",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const slots = useSlots();
		const i18n = useI18n();
		const bodyRoot = useTemplateRef("bodyRoot");
		function bodyElement() {
			const element = bodyRoot.value?.$el;
			return element instanceof HTMLElement ? element : null;
		}
		const parameterDialogs = ref(/* @__PURE__ */ new Set());
		provide(ParameterInputModalContextKey, {
			openDialogs: parameterDialogs,
			appendTo: "body"
		});
		const trapFocus = computed(() => props.trapFocus && parameterDialogs.value.size === 0);
		const hasFooter = computed(() => props.showFooter ?? Boolean(slots.footer || slots.footerLeft || slots.footerBeforeCancel || slots.footerActions));
		const dismissalBlocked = computed(() => props.busy || !trapFocus.value);
		function onOpenChange(open) {
			if (!open && dismissalBlocked.value) return;
			emit("update:open", open);
		}
		function close() {
			if (!dismissalBlocked.value) emit("update:open", false);
		}
		function onBack() {
			if (!dismissalBlocked.value) emit("back");
		}
		function onEscapeKeyDown(event) {
			const isOutsideDialog = event.target instanceof Node && !bodyElement()?.closest("[role=\"dialog\"]")?.contains(event.target);
			if (dismissalBlocked.value || isOutsideDialog) event.preventDefault();
		}
		function onInteractOutside(event) {
			if (dismissalBlocked.value) event.preventDefault();
			emit("interactOutside", event);
		}
		function onOpenAutoFocus(event) {
			const body = bodyElement() ?? document.querySelector("[data-testid=\"agent-modal-body\"]");
			const dialog = body?.closest("[role=\"dialog\"]");
			const autofocusTarget = body?.querySelector(bodyAutofocusSelector) ?? body?.querySelector("button:not([disabled])") ?? dialog?.querySelector("[data-testid=\"dialog-close-button\"]:not([disabled]), [data-test-id=\"dialog-close-button\"]:not([disabled])");
			if (!autofocusTarget) return;
			event.preventDefault();
			nextTick(() => autofocusTarget.focus());
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: props.open,
				size: props.size,
				stacked: props.stacked,
				"trap-focus": trapFocus.value,
				"disable-outside-pointer-events": props.disableOutsidePointerEvents && parameterDialogs.value.size === 0,
				"show-close-button": !dismissalBlocked.value,
				"container-class": props.fixedSize ? `${_ctx.$style.dialog} ${_ctx.$style.dialogFixed}` : _ctx.$style.dialog,
				onEscapeKeyDown,
				onInteractOutside,
				onOpenAutoFocus,
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DialogHeader_default), { class: normalizeClass([_ctx.$style.header, props.headerDivider && !props.fixedSize && _ctx.$style.headerDivider]) }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContent) }, [
						props.showBack ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							icon: "arrow-left",
							variant: "ghost",
							size: "small",
							disabled: dismissalBlocked.value,
							class: normalizeClass(_ctx.$style.backButton),
							"aria-label": unref(i18n).baseText("generic.back"),
							"data-testid": "agent-modal-back",
							onClick: onBack
						}, null, 8, [
							"disabled",
							"class",
							"aria-label"
						])) : createCommentVNode("", true),
						_ctx.$slots.titlePrefix ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.titlePrefix)
						}, [renderSlot(_ctx.$slots, "titlePrefix")], 2)) : createCommentVNode("", true),
						createVNode(unref(DialogTitle_default), { "as-child": "" }, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.titleGroup, _ctx.$slots.titleSuffix && _ctx.$style.titleGroupWithSuffix]) }, [props.editableTitle ? (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
								key: 0,
								"model-value": props.title,
								"max-length": props.titleMaxLength,
								"max-width": "100%",
								placeholder: props.titlePlaceholder,
								disabled: props.busy,
								class: normalizeClass(_ctx.$style.editableTitle),
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:title", $event))
							}, null, 8, [
								"model-value",
								"max-length",
								"placeholder",
								"disabled",
								"class"
							])) : (openBlock(), createElementBlock("span", {
								key: 1,
								class: normalizeClass(_ctx.$style.title)
							}, toDisplayString(props.title), 3)), props.editableTitle ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 2,
								icon: "pencil",
								size: "small",
								class: normalizeClass(_ctx.$style.editIcon),
								"aria-hidden": "true"
							}, null, 8, ["class"])) : createCommentVNode("", true)], 2)]),
							_: 1
						}),
						_ctx.$slots.titleSuffix ? (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.titleSuffix)
						}, [renderSlot(_ctx.$slots, "titleSuffix")], 2)) : createCommentVNode("", true),
						_ctx.$slots.headerActions ? (openBlock(), createElementBlock("div", {
							key: 3,
							class: normalizeClass(_ctx.$style.headerActions)
						}, [renderSlot(_ctx.$slots, "headerActions")], 2)) : createCommentVNode("", true)
					], 2), props.titleError ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "danger",
						class: normalizeClass([_ctx.$style.titleError, props.showBack && _ctx.$style.titleErrorWithBack])
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.titleError), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 3
				}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass([
					_ctx.$style.split,
					(_ctx.$slots.sidePanel || props.fixedSize) && _ctx.$style.splitWithPanel,
					props.headerDivider && props.fixedSize && _ctx.$style.splitDivided,
					props.headerDividerTone === "warning" && _ctx.$style.dividerWarning
				]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.main) }, [createVNode(unref(DialogBody_default), {
					ref_key: "bodyRoot",
					ref: bodyRoot,
					class: normalizeClass([_ctx.$style.body, props.stableHeight && _ctx.$style.bodyStableHeight]),
					"data-flush": props.bodyFlush ? "true" : void 0,
					"data-scrollable": props.bodyScrollable ? "true" : "false",
					"data-testid": "agent-modal-body"
				}, {
					default: withCtx(() => [!trapFocus.value ? (openBlock(), createBlock(unref(FocusScope_default), {
						key: 0,
						"as-child": "",
						onMountAutoFocus: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"])),
						onUnmountAutoFocus: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"]))
					}, {
						default: withCtx(() => [..._cache[3] || (_cache[3] = [createBaseVNode("span", {
							hidden: "",
							"aria-hidden": "true"
						}, null, -1)])]),
						_: 1
					})) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"class",
					"data-flush",
					"data-scrollable"
				]), hasFooter.value ? (openBlock(), createBlock(unref(DialogFooter_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "footer", {}, () => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerLayout) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerLeft) }, [renderSlot(_ctx.$slots, "footerLeft")], 2), createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.footerActions),
						"data-testid": "agent-modal-footer-actions"
					}, [
						renderSlot(_ctx.$slots, "footerBeforeCancel"),
						props.showCancel ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "outline",
							disabled: dismissalBlocked.value,
							"data-testid": "agent-modal-cancel",
							onClick: close
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(props.cancelLabel ?? unref(i18n).baseText("generic.cancel")), 1)]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true),
						renderSlot(_ctx.$slots, "footerActions")
					], 2)], 2)])]),
					_: 3
				}, 8, ["class"])) : createCommentVNode("", true)], 2), createVNode(Transition, {
					"enter-active-class": _ctx.$style.sidePanelMotion,
					"leave-active-class": _ctx.$style.sidePanelMotion,
					"enter-from-class": _ctx.$style.sidePanelHidden,
					"leave-to-class": _ctx.$style.sidePanelHidden
				}, {
					default: withCtx(() => [_ctx.$slots.sidePanel ? (openBlock(), createElementBlock("aside", {
						key: 0,
						class: normalizeClass(_ctx.$style.sidePanel),
						"data-testid": "agent-modal-side-panel"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sidePanelScroll) }, [renderSlot(_ctx.$slots, "sidePanel")], 2)], 2)) : createCommentVNode("", true)]),
					_: 3
				}, 8, [
					"enter-active-class",
					"leave-active-class",
					"enter-from-class",
					"leave-to-class"
				])], 2)]),
				_: 3
			}, 8, [
				"open",
				"size",
				"stacked",
				"trap-focus",
				"disable-outside-pointer-events",
				"show-close-button",
				"container-class"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	dialog: "_dialog_n8ed0_121",
	header: "_header_n8ed0_129",
	headerDivider: "_headerDivider_n8ed0_136",
	splitDivided: "_splitDivided_n8ed0_140",
	main: "_main_n8ed0_140",
	sidePanel: "_sidePanel_n8ed0_141",
	dividerWarning: "_dividerWarning_n8ed0_144",
	titleError: "_titleError_n8ed0_148",
	titleErrorWithBack: "_titleErrorWithBack_n8ed0_152",
	headerContent: "_headerContent_n8ed0_156",
	backButton: "_backButton_n8ed0_164",
	titlePrefix: "_titlePrefix_n8ed0_168",
	titleGroup: "_titleGroup_n8ed0_174",
	editIcon: "_editIcon_n8ed0_181",
	titleGroupWithSuffix: "_titleGroupWithSuffix_n8ed0_186",
	titleSuffix: "_titleSuffix_n8ed0_190",
	title: "_title_n8ed0_148",
	editableTitle: "_editableTitle_n8ed0_202",
	headerActions: "_headerActions_n8ed0_216",
	dialogFixed: "_dialogFixed_n8ed0_224",
	splitWithPanel: "_splitWithPanel_n8ed0_229",
	body: "_body_n8ed0_232",
	split: "_split_n8ed0_140",
	sidePanelMotion: "_sidePanelMotion_n8ed0_276",
	sidePanelHidden: "_sidePanelHidden_n8ed0_280",
	sidePanelScroll: "_sidePanelScroll_n8ed0_292",
	footer: "_footer_n8ed0_319",
	bodyStableHeight: "_bodyStableHeight_n8ed0_377",
	footerLayout: "_footerLayout_n8ed0_404",
	footerLeft: "_footerLeft_n8ed0_412",
	footerActions: "_footerActions_n8ed0_413"
} }]]);
//#endregion
export { AgentModal_default as t };
