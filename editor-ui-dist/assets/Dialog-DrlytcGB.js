import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, it as renderSlot, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { a as DialogContent_default, c as DialogRoot_default, i as DialogDescription_default, n as DialogOverlay_default, r as DialogHeader_default, s as DialogPortal_default, t as DialogTitle_default } from "./DialogTitle-vvfpWO6w.js";
//#endregion
//#region ../@n8n/design-system/src/components/N8nDialog/Dialog.vue
var Dialog_default = /* @__PURE__ */ defineComponent({
	__name: "Dialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: {
			type: Boolean,
			default: true
		},
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
		header: {},
		description: {},
		stacked: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"escapeKeyDown",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus",
		"update:open"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const handleOpenChange = (value) => {
			emit("update:open", value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogRoot_default), {
				open: __props.open,
				"default-open": __props.defaultOpen,
				modal: __props.modal,
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DialogPortal_default), null, {
					default: withCtx(() => [createVNode(DialogOverlay_default, { stacked: __props.stacked }, null, 8, ["stacked"]), createVNode(DialogContent_default, {
						size: __props.size,
						"force-mount": __props.forceMount,
						"trap-focus": __props.trapFocus,
						"disable-outside-pointer-events": __props.disableOutsidePointerEvents,
						"show-close-button": __props.showCloseButton,
						"aria-label": __props.ariaLabel,
						"aria-description": __props.ariaDescription,
						stacked: __props.stacked,
						onEscapeKeyDown: _cache[0] || (_cache[0] = ($event) => emit("escapeKeyDown", $event)),
						onInteractOutside: _cache[1] || (_cache[1] = ($event) => emit("interactOutside", $event)),
						onOpenAutoFocus: _cache[2] || (_cache[2] = ($event) => emit("openAutoFocus", $event)),
						onCloseAutoFocus: _cache[3] || (_cache[3] = ($event) => emit("closeAutoFocus", $event))
					}, {
						default: withCtx(() => [__props.header ? (openBlock(), createBlock(DialogHeader_default, { key: 0 }, {
							default: withCtx(() => [createVNode(DialogTitle_default, null, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.header), 1)]),
								_: 1
							}), __props.description ? (openBlock(), createBlock(DialogDescription_default, { key: 0 }, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
								_: 1
							})) : createCommentVNode("", true)]),
							_: 1
						})) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 8, [
						"size",
						"force-mount",
						"trap-focus",
						"disable-outside-pointer-events",
						"show-close-button",
						"aria-label",
						"aria-description",
						"stacked"
					])]),
					_: 3
				})]),
				_: 3
			}, 8, [
				"open",
				"default-open",
				"modal"
			]);
		};
	}
});
//#endregion
export { Dialog_default as t };
