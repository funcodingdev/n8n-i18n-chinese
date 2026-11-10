import { $d as init_runtime_core_esm_bundler, Ef as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, bp as toDisplayString, df as openBlock, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, zd as createBaseVNode } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, GD as N8nHeading_default, GO as useI18n, IO as N8nButton_default, OO as N8nText_default, nO as N8nCard_default } from "./app-DGoK9ugD.js";
//#region src/app/views/EntityNotFound.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "entity-not-found-view" };
//#endregion
//#region src/app/views/EntityNotFound.vue
var EntityNotFound_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "EntityNotFound",
	props: { entityType: {} },
	setup(__props) {
		const locale = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nCard_default), { class: "entity-card" }, {
				default: withCtx(() => [
					_cache[0] || (_cache[0] = createBaseVNode("div", { class: "text-center mb-l" }, [createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none"
					}, [
						createBaseVNode("circle", {
							cx: "12",
							cy: "12",
							r: "10",
							stroke: "var(--text-button--color--text--secondary)",
							"stroke-width": "2"
						}),
						createBaseVNode("rect", {
							x: "11",
							y: "6",
							width: "2",
							height: "8",
							fill: "var(--text-button--color--text--secondary)"
						}),
						createBaseVNode("rect", {
							x: "11",
							y: "16",
							width: "2",
							height: "2",
							fill: "var(--text-button--color--text--secondary)"
						})
					])], -1)),
					createVNode(unref(N8nHeading_default), {
						size: "xlarge",
						align: "center",
						tag: "h2",
						color: "text-dark",
						class: "mb-2xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.title", { interpolate: { entity: unref(locale).baseText(`generic.${__props.entityType}`) } })), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						color: "text-base",
						tag: "p",
						align: "center",
						class: "mb-m"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.text", { interpolate: { entity: unref(locale).baseText(`generic.${__props.entityType}`).toLocaleLowerCase() } })), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						href: "/"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.action")), 1)]),
						_: 1
					})
				]),
				_: 1
			})]);
		};
	}
}), [["__scopeId", "data-v-b88b407b"]]);
//#endregion
export { EntityNotFound_default as default };
