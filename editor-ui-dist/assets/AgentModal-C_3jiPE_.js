import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Gd as createVNode, Kf as unref, Ld as computed, Nd as withModifiers, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, bf as useSlots, df as provide, ep as init_shared_esm_bundler, nu as FocusScope_default, pf as renderSlot, pp as normalizeClass, qd as defineComponent, rf as nextTick, uf as openBlock, vp as toDisplayString, xf as useTemplateRef, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { CT as DialogHeader_default, ED as N8nText_default, ET as N8nInlineTextEdit_default, FD as N8nIcon_default, ND as N8nIconButton_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, ST as DialogTitle_default, UD as useI18n, Zv as ParameterInputModalContextKey, vT as DialogFooter_default, xT as Dialog_default, yT as DialogBody_default } from "./app-DbOOaPK6.js";
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
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const slots = useSlots();
		const i18n = useI18n();
		const bodyRoot = useTemplateRef("bodyRoot");
		const titleEdit = useTemplateRef("titleEdit");
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
		function focusTitle() {
			titleEdit.value?.forceFocus();
		}
		__expose({ focusTitle });
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
				"container-class": _ctx.$style.dialog,
				onEscapeKeyDown,
				onInteractOutside,
				onOpenAutoFocus,
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), { class: normalizeClass(_ctx.$style.header) }, {
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
								default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleGroup) }, [props.editableTitle ? (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
									key: 0,
									ref_key: "titleEdit",
									ref: titleEdit,
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
							_ctx.$slots.headerActions ? (openBlock(), createElementBlock("div", {
								key: 2,
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
					}, 8, ["class"]),
					createVNode(unref(DialogBody_default), {
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
					]),
					hasFooter.value ? (openBlock(), createBlock(unref(DialogFooter_default), {
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
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
								_: 1
							}, 8, ["disabled"])) : createCommentVNode("", true),
							renderSlot(_ctx.$slots, "footerActions")
						], 2)], 2)])]),
						_: 3
					}, 8, ["class"])) : createCommentVNode("", true)
				]),
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
	dialog: "_dialog_3pwdo_121",
	header: "_header_3pwdo_129",
	titleError: "_titleError_3pwdo_136",
	titleErrorWithBack: "_titleErrorWithBack_3pwdo_140",
	headerContent: "_headerContent_3pwdo_144",
	backButton: "_backButton_3pwdo_152",
	titlePrefix: "_titlePrefix_3pwdo_156",
	titleGroup: "_titleGroup_3pwdo_162",
	editIcon: "_editIcon_3pwdo_169",
	title: "_title_3pwdo_136",
	editableTitle: "_editableTitle_3pwdo_179",
	headerActions: "_headerActions_3pwdo_193",
	footer: "_footer_3pwdo_200",
	body: "_body_3pwdo_205",
	bodyStableHeight: "_bodyStableHeight_3pwdo_253",
	footerLayout: "_footerLayout_3pwdo_280",
	footerLeft: "_footerLeft_3pwdo_288",
	footerActions: "_footerActions_3pwdo_289"
} }]]);
//#endregion
export { AgentModal_default as t };
