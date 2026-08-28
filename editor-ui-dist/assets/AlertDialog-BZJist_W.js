import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, it as renderSlot, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { n as Button_default } from "./N8nButton-BNSG8N0P.js";
import { a as DialogContent_default, c as DialogRoot_default, i as DialogDescription_default, n as DialogOverlay_default, r as DialogHeader_default, s as DialogPortal_default, t as DialogTitle_default } from "./DialogTitle-CsjedgpC.js";
import { t as DialogFooter_default } from "./DialogFooter-AKzGUZKF.js";
//#endregion
//#region ../@n8n/design-system/src/components/N8nAlertDialog/AlertDialog.vue
var AlertDialog_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		title: {},
		description: {},
		actionLabel: { default: "Confirm" },
		actionVariant: { default: "solid" },
		cancelLabel: { default: "Cancel" },
		loading: {
			type: Boolean,
			default: false
		},
		size: { default: "small" }
	},
	emits: [
		"update:open",
		"action",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const handleOpenChange = (value) => {
			emit("update:open", value);
		};
		const handleAction = () => {
			emit("action");
		};
		const handleCancel = () => {
			emit("cancel");
			handleOpenChange(false);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogRoot_default), {
				open: __props.open,
				"default-open": __props.defaultOpen,
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DialogPortal_default), null, {
					default: withCtx(() => [createVNode(DialogOverlay_default), createVNode(DialogContent_default, {
						size: __props.size,
						"show-close-button": false
					}, {
						default: withCtx(() => [
							createVNode(DialogHeader_default, null, {
								default: withCtx(() => [createVNode(DialogTitle_default, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
									_: 1
								}), __props.description ? (openBlock(), createBlock(DialogDescription_default, { key: 0 }, {
									default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
									_: 1
								})) : createCommentVNode("", true)]),
								_: 1
							}),
							renderSlot(_ctx.$slots, "default"),
							createVNode(DialogFooter_default, null, {
								default: withCtx(() => [createVNode(Button_default, {
									variant: "subtle",
									label: __props.cancelLabel,
									onClick: handleCancel
								}, null, 8, ["label"]), createVNode(Button_default, {
									variant: __props.actionVariant === "destructive" ? "destructive" : "solid",
									label: __props.actionLabel,
									loading: __props.loading,
									onClick: handleAction
								}, null, 8, [
									"variant",
									"label",
									"loading"
								])]),
								_: 1
							})
						]),
						_: 3
					}, 8, ["size"])]),
					_: 3
				})]),
				_: 3
			}, 8, ["open", "default-open"]);
		};
	}
});
//#endregion
export { AlertDialog_default as t };
