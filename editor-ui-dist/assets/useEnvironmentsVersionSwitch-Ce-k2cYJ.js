import { Af as init_reactivity_esm_bundler, Ld as computed, Qd as init_runtime_core_esm_bundler, Rf as ref, Xd as h, os as useRouter } from "./vendor-BA8kaY8M.js";
import { E as PROMOTIONS_SETTINGS_VIEW, Em as hasPermission, HE as N8nExternalLink_default, Hy as useToast, Tm as useSourceControlStore, UD as useI18n, Uy as VIEWS, lT as useMessage } from "./app-CfhiRDif.js";
//#region src/features/shared/promotions/useEnvironmentsVersionSwitch.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** Moves the instance between Environments (v1) and Environments v2 after a confirmation. */
function useEnvironmentsVersionSwitch() {
	const i18n = useI18n();
	const message = useMessage();
	const toast = useToast();
	const router = useRouter();
	const sourceControlStore = useSourceControlStore();
	/** Only an admin of an instance with a v1 repository has a classic setup to go back to. */
	const canSwitchBack = computed(() => sourceControlStore.preferences.connected && hasPermission(["rbac"], { rbac: { scope: "sourceControl:manage" } }));
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
					href: "#",
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
