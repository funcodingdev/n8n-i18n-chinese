import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Tf as withCtx, ep as init_shared_esm_bundler, os as useRouter, pp as normalizeClass, qd as defineComponent, sf as onMounted, uf as openBlock, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { CE as PreviewBadge_default, Hy as useToast, RD as _plugin_vue_export_helper_default, UD as useI18n, Uy as VIEWS, dE as SettingsRowConfigure_default, fE as SettingsRow_default, hE as SettingsLayout_default, l as isContextPreferencesEnabled, mE as SettingsPageHeader_default, np as useDocumentTitle, u as isContextSkillsEnabled, uE as SettingsRowGroup_default } from "./app-DbOOaPK6.js";
import { t as useContextStore } from "./context.store-PUZN83kU.js";
import { t as useSkillsStore } from "./skills.store-9LocpGvl.js";
//#region src/features/settings/context/views/SettingsContextView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SettingsContextView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SettingsContextView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const contextStore = useContextStore();
		const skillsStore = useSkillsStore();
		const preferencesEnabled = isContextPreferencesEnabled();
		const skillsEnabled = isContextSkillsEnabled();
		const { showError } = useToast();
		const preferenceCount = computed(() => i18n.baseText("settings.context.preferences.count", {
			interpolate: { count: contextStore.count },
			adjustToNumber: contextStore.count
		}));
		const skillCount = computed(() => i18n.baseText("settings.context.skills.count", {
			interpolate: { count: skillsStore.count },
			adjustToNumber: skillsStore.count
		}));
		async function openSkills() {
			await router.push({ name: VIEWS.SETTINGS_CONTEXT_SKILLS });
		}
		async function openPreferences() {
			await router.push({ name: VIEWS.SETTINGS_CONTEXT_PREFERENCES });
		}
		/** Each row reports its own failure: it would otherwise show a zero as though it were real. */
		async function loadCount(fetchCount, errorKey) {
			try {
				await fetchCount();
			} catch (error) {
				showError(error, i18n.baseText(errorKey));
			}
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.context.title"));
			await Promise.all([preferencesEnabled && loadCount(async () => await contextStore.fetchPreferenceCount(), "settings.context.preferences.error.load"), skillsEnabled && loadCount(async () => await skillsStore.fetchSkillCount(), "settings.context.skills.error.load")]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				class: normalizeClass(_ctx.$style.layout),
				"data-test-id": "settings-context-view"
			}, {
				default: withCtx(() => [createVNode(unref(SettingsPageHeader_default), {
					title: unref(i18n).baseText("settings.context.title"),
					description: unref(i18n).baseText("settings.context.description"),
					"show-docs-link": false
				}, {
					titleTrailing: withCtx(() => [createVNode(unref(PreviewBadge_default), { size: "xsmall" })]),
					_: 1
				}, 8, ["title", "description"]), createVNode(unref(SettingsRowGroup_default), null, {
					default: withCtx(() => [
						unref(preferencesEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 0,
							clickable: "",
							title: unref(i18n).baseText("settings.context.preferences.title"),
							description: unref(i18n).baseText("settings.context.preferences.subtitle"),
							"data-test-id": "settings-context-preferences-row",
							onClick: openPreferences
						}, {
							action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: preferenceCount.value }, null, 8, ["value"])]),
							_: 1
						}, 8, ["title", "description"])) : createCommentVNode("", true),
						unref(skillsEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 1,
							clickable: "",
							title: unref(i18n).baseText("settings.context.skills.title"),
							description: unref(i18n).baseText("settings.context.skills.subtitle"),
							"data-test-id": "settings-context-skills-row",
							onClick: openSkills
						}, {
							action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: skillCount.value }, null, 8, ["value"])]),
							_: 1
						}, 8, ["title", "description"])) : (openBlock(), createBlock(unref(SettingsRow_default), {
							key: 2,
							title: unref(i18n).baseText("settings.context.skills.title"),
							description: unref(i18n).baseText("settings.context.comingSoon"),
							"data-test-id": "settings-context-skills-row"
						}, null, 8, ["title", "description"])),
						createVNode(unref(SettingsRow_default), {
							title: unref(i18n).baseText("settings.context.sources.title"),
							description: unref(i18n).baseText("settings.context.comingSoon"),
							"data-test-id": "settings-context-sources-row"
						}, null, 8, ["title", "description"])
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": { layout: "_layout_121n7_2" } }]]);
//#endregion
export { SettingsContextView_default as default };
