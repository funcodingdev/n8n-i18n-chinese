import { $ as openBlock, E as createElementBlock, It as ref, N as defineComponent, Nt as onScopeDispose, S as computed, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as canvasEventBus } from "./canvas.eventBus-DY3F6oPr.js";
import { t as useCalloutHelpers } from "./useCalloutHelpers-DrjQ3xso.js";
//#region ../@n8n/design-system/src/components/N8nButtonList/ButtonList.vue?vue&type=script&setup=true&lang.ts
var ButtonList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ButtonList",
	props: { orientation: { default: "horizontal" } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.root, __props.orientation === "vertical" ? _ctx.$style.vertical : _ctx.$style.horizontal]),
				role: "group"
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ButtonList_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_4iue9_125",
	horizontal: "_horizontal_4iue9_131",
	vertical: "_vertical_4iue9_136"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nButtonList/index.ts
var N8nButtonList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ButtonList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ButtonList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/composables/useNodeCreatorShortcutCoachmark.ts
var NODE_CREATOR_SHORTCUT_COACHMARK_KEY = "node-creator-shortcut-coachmark";
function useNodeCreatorShortcutCoachmark() {
	const { isCalloutDismissed, dismissCallout } = useCalloutHelpers();
	const isTabPressed = ref(false);
	const shouldShowCoachmark = computed(() => {
		return isTabPressed.value && !isCalloutDismissed("node-creator-shortcut-coachmark");
	});
	function onDeprecatedTabShortcut() {
		isTabPressed.value = true;
	}
	canvasEventBus.on("deprecated:tab-shortcut", onDeprecatedTabShortcut);
	onScopeDispose(() => {
		canvasEventBus.off("deprecated:tab-shortcut", onDeprecatedTabShortcut);
	});
	async function onDismissCoachmark() {
		isTabPressed.value = false;
		await dismissCallout(NODE_CREATOR_SHORTCUT_COACHMARK_KEY);
	}
	return {
		shouldShowCoachmark,
		onDismissCoachmark
	};
}
//#endregion
export { useNodeCreatorShortcutCoachmark as n, N8nButtonList_default as r, NODE_CREATOR_SHORTCUT_COACHMARK_KEY as t };
