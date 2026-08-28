import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, h as withModifiers, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-CBepoSka.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nLink_default } from "./N8nLink-DzyV3f-o.js";
import { t as N8nTag_default } from "./N8nTag-DRIEYo3D.js";
//#region ../@n8n/design-system/src/components/N8nTags/Tags.vue?vue&type=script&setup=true&lang.ts
var Tags_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nTags",
	__name: "Tags",
	props: {
		tags: { default: () => [] },
		truncate: {
			type: Boolean,
			default: false
		},
		truncateAt: { default: 3 },
		clickable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["expand", "click:tag"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { t } = useI18n();
		const showAll = ref(false);
		const visibleTags = computed(() => {
			const { tags, truncate, truncateAt } = props;
			if (truncate && !showAll.value && tags.length > truncateAt) return tags.slice(0, truncateAt);
			return tags;
		});
		const hiddenTagsLength = computed(() => props.tags.length - props.truncateAt);
		const onExpand = () => {
			showAll.value = true;
			emit("expand", true);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["n8n-tags", _ctx.$style.tags]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleTags.value, (tag) => {
				return openBlock(), createBlock(unref(N8nTag_default), {
					key: tag.id,
					text: tag.name,
					clickable: __props.clickable,
					onClick: ($event) => emit("click:tag", tag.id, $event)
				}, null, 8, [
					"text",
					"clickable",
					"onClick"
				]);
			}), 128)), __props.truncate && !showAll.value && hiddenTagsLength.value > 0 ? (openBlock(), createBlock(unref(N8nLink_default), {
				key: 0,
				theme: "text",
				underline: "",
				size: "small",
				onClick: withModifiers(onExpand, ["stop", "prevent"])
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("tags.showMore", [`${hiddenTagsLength.value}`])), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2);
		};
	}
});
var Tags_vue_vue_type_style_index_0_lang_module_default = { tags: "_tags_ph5ng_125" };
//#endregion
//#region ../@n8n/design-system/src/components/N8nTags/index.ts
var N8nTags_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Tags_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Tags_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nTags_default as t };
