import { $d as init_runtime_core_esm_bundler, Rd as computed, Zd as h, jf as init_reactivity_esm_bundler, ns as useRouter, zf as ref } from "./vendor-AGzaQJYe.js";
import { GO as useI18n, Jb as useToast, Th as hasPermission, UD as N8nExternalLink_default, Yb as VIEWS, h as PROMOTIONS_SETTINGS_VIEW, uE as useMessage, wh as useSourceControlStore } from "./app-DGoK9ugD.js";
//#region src/features/shared/promotions/useEnvironmentsVersionSwitch.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** Moves the instance between Environments (v1) and Environments v2 after a confirmation. */
function useEnvironmentsVersionSwitch() {
	const i18n = useI18n();
	const message = useMessage();
	const toast = useToast();
	const router = useRouter();
	const sourceControlStore = useSourceControlStore();
	/** While Environments v2 is in preview, any admin can switch back, with or without a classic setup. */
	const canSwitchBack = computed(() => hasPermission(["rbac"], { rbac: { scope: "sourceControl:manage" } }));
	const busy = ref(false);
	async function switchTo(version) {
		if (busy.value) return;
		busy.value = true;
		const keys = version === "v2" ? "settings.sourceControl.switch.confirm" : "settings.promotions.switchBack.confirm";
		const [beforeLink, afterLink] = i18n.baseText(`${keys}.hint`, { interpolate: { link: "{link}" } }).split("{link}");
		try {
			if (await message.confirm(h("div", [h("p", { class: "mb-l" }, i18n.baseText(`${keys}.message`)), h("p", [
				beforeLink,
				h(N8nExternalLink_default, {
					href: `https://docs.n8n.io/administer/environments/upgrade-from-environments-classic#compare-classic-and-environments`,
					inline: true,
					size: "small"
				}, () => i18n.baseText("settings.sourceControl.switch.link")),
				afterLink
			])]), i18n.baseText(`${keys}.title`), {
				confirmButtonText: i18n.baseText(`${keys}.button`),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return;
			await sourceControlStore.updatePreferences({ environmentsVersion: version });
		} catch (error) {
			toast.showError(error, i18n.baseText("settings.sourceControl.switch.error"));
			return;
		} finally {
			busy.value = false;
		}
		await router.push({ name: version === "v2" ? PROMOTIONS_SETTINGS_VIEW : VIEWS.SOURCE_CONTROL });
	}
	return {
		busy,
		canSwitchBack,
		switchTo
	};
}
//#endregion
export { useEnvironmentsVersionSwitch as t };
