import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, If as onScopeDispose, Jd as defineComponent, Jf as unref, Kd as createVNode, Kf as toValue, Rd as computed, Vd as createCommentVNode, _f as resolveDynamicComponent, _p as normalizeStyle, bf as useModel, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, nf as mergeModels, np as init_shared_esm_bundler, ns as useRouter, of as onBeforeUnmount, pf as renderList, rf as mergeProps, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nTooltip_default, BO as _plugin_vue_export_helper_default, CO as N8nBadge_default, Ex as ResponseError, FO as N8nIconButton_default, GD as N8nHeading_default, GO as useI18n, IO as N8nButton_default, Jb as useToast, KE as N8nTabs_default, LO as N8nIcon_default, Mf as useClipboard, OO as N8nText_default, PO as Input_default, SO as N8nLoading_default, WD as N8nEmptyState_default, _O as N8nActionDropdown_default, a as APP_DETAIL_VIEW, bO as DropdownMenu_default, dD as SettingsRowGroup_default, eE as appNameSchema, gE as isIconOrEmoji, iD as N8nSegmentControl_default, kE as N8nBreadcrumbs_default, mx as getProject, nx as useRootStore, o as PROJECT_APPS, pD as SettingsRow_default, s as getAppPermissions, tE as appNamespaceSchema, uE as useMessage } from "./app-DGoK9ugD.js";
import { t as useLatestFetch } from "./useLatestFetch-Bxfz-zbp.js";
import { a as listAppVersions, c as unpublishApp, i as getAppBuild, l as updateApp, n as createAppPreview, o as listApps, r as getApp, s as publishApp, t as AppActions_default } from "./AppActions-Q_KixknD.js";
//#region ../../modules/apps/frontend/src/composables/useAppVersions.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var POLL_INTERVAL_MS = 3e3;
function isBuilding(status) {
	return status === "queued" || status === "running";
}
function isBuilt(version) {
	return version.buildStatus === "succeeded" && version.bundleArtifactId !== null;
}
function useAppVersions(projectId, appId) {
	const i18n = useI18n();
	const toast = useToast();
	const rootStore = useRootStore();
	const latestFetch = useLatestFetch();
	const versions = ref([]);
	const loading = ref(false);
	const failed = ref(false);
	let pollTimer;
	const head = computed(() => versions.value[0] ?? null);
	const latestBuilt = computed(() => versions.value.find(isBuilt) ?? null);
	const building = computed(() => isBuilding(head.value?.buildStatus));
	function stopPolling() {
		clearTimeout(pollTimer);
		pollTimer = void 0;
	}
	function poll(id, versionId) {
		pollTimer = setTimeout(async () => {
			const isLatest = latestFetch.next();
			try {
				const build = await getAppBuild(rootStore.restApiContext, toValue(projectId), id, versionId);
				if (!isLatest()) return;
				if (isBuilding(build.status)) {
					poll(id, versionId);
					return;
				}
			} catch {
				if (!isLatest()) return;
			}
			await refresh();
		}, POLL_INTERVAL_MS);
	}
	async function refresh() {
		stopPolling();
		const isLatest = latestFetch.next();
		const id = toValue(appId);
		failed.value = false;
		if (!id) {
			versions.value = [];
			loading.value = false;
			return;
		}
		loading.value = true;
		try {
			const result = await listAppVersions(rootStore.restApiContext, toValue(projectId), id);
			if (!isLatest()) return;
			versions.value = result;
			if (head.value && building.value) poll(id, head.value.id);
		} catch (error) {
			if (!isLatest()) return;
			failed.value = true;
			toast.showError(error, i18n.baseText("apps.versions.loadError"));
		} finally {
			if (isLatest()) loading.value = false;
		}
	}
	watch(() => toValue(appId), refresh, { immediate: true });
	onScopeDispose(() => {
		stopPolling();
		latestFetch.invalidate();
	});
	return {
		versions,
		head,
		latestBuilt,
		building,
		loading,
		failed,
		refresh
	};
}
//#endregion
//#region ../../modules/apps/frontend/src/components/AppPublishButton.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AppPublishButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AppPublishButton",
	props: {
		app: {},
		version: {}
	},
	emits: ["updated"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const clipboard = useClipboard();
		const rootStore = useRootStore();
		const busy = ref(false);
		const canUpdate = computed(() => getAppPermissions(props.app.projectId).canUpdate);
		const isUpToDate = computed(() => props.version !== null && props.app.publishedVersionId === props.version.id);
		const menuItems = computed(() => {
			if (!props.app.publishedUrl) return [];
			const items = [{
				id: "open",
				label: i18n.baseText("apps.publish.openApp"),
				icon: "external-link"
			}, {
				id: "copy",
				label: i18n.baseText("apps.publish.copyUrl"),
				icon: "copy"
			}];
			if (canUpdate.value) items.push({
				id: "unpublish",
				label: i18n.baseText("apps.publish.unpublish"),
				icon: "eye-off",
				divided: true
			});
			return items;
		});
		async function update(request, errorTitle) {
			busy.value = true;
			try {
				emit("updated", await request());
			} catch (error) {
				toast.showError(error, errorTitle);
			} finally {
				busy.value = false;
			}
		}
		async function publish() {
			const versionId = props.version?.id;
			if (!versionId) return;
			await update(async () => await publishApp(rootStore.restApiContext, props.app.projectId, props.app.id, versionId), i18n.baseText("apps.publish.error"));
		}
		async function unpublish() {
			if (await message.confirm(i18n.baseText("apps.publish.unpublishConfirm.message", { interpolate: { name: props.app.name } }), i18n.baseText("apps.publish.unpublishConfirm.title"), {
				confirmButtonText: i18n.baseText("apps.publish.unpublish"),
				cancelButtonText: i18n.baseText("generic.cancel"),
				type: "warning"
			}) !== "confirm") return;
			await update(async () => await unpublishApp(rootStore.restApiContext, props.app.projectId, props.app.id), i18n.baseText("apps.publish.unpublishError"));
		}
		async function onMenuSelect(action) {
			const url = props.app.publishedUrl;
			if (!url) return;
			if (action === "open") window.open(url, "_blank", "noopener");
			else if (action === "copy") {
				await clipboard.copy(url);
				toast.showMessage({
					title: i18n.baseText("apps.publish.urlCopied"),
					type: "success"
				});
			} else await unpublish();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass({ [_ctx.$style.group]: menuItems.value.length > 0 }),
				"data-test-id": "app-publish"
			}, [createVNode(unref(N8nButton_default), {
				class: normalizeClass([_ctx.$style.main, { [_ctx.$style.published]: isUpToDate.value }]),
				variant: "outline",
				loading: busy.value,
				disabled: !canUpdate.value || !__props.version || isUpToDate.value,
				"data-test-id": "app-publish-button",
				onClick: publish
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(isUpToDate.value ? "apps.publish.published" : "apps.publish.publish")), 1)]),
				_: 1
			}, 8, [
				"class",
				"loading",
				"disabled"
			]), menuItems.value.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
				key: 0,
				items: menuItems.value,
				disabled: busy.value,
				placement: "bottom-end",
				"data-test-id": "app-publish-menu",
				onSelect: onMenuSelect
			}, {
				activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					class: normalizeClass(_ctx.$style.toggle),
					variant: "outline",
					icon: "chevron-down",
					disabled: busy.value,
					"aria-label": unref(i18n).baseText("apps.publish.menuAriaLabel"),
					"data-test-id": "app-publish-menu-trigger"
				}, null, 8, [
					"class",
					"disabled",
					"aria-label"
				])]),
				_: 1
			}, 8, ["items", "disabled"])) : createCommentVNode("", true)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	group: "_group_1pnyl_1",
	main: "_main_1pnyl_4",
	toggle: "_toggle_1pnyl_8",
	published: "_published_1pnyl_14"
} }]]);
//#endregion
//#region ../../modules/apps/frontend/src/components/AppHeader.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var NO_OTHER_APPS = "__empty__";
var SWITCHER_MAX_APPS = 100;
var AppHeader_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AppHeader",
	props: /*@__PURE__*/ mergeModels({
		projectId: {},
		app: {},
		publishableVersion: {}
	}, {
		"tab": { required: true },
		"tabModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["updated", "deleted"], ["update:tab"]),
	setup(__props, { emit: __emit }) {
		const PERSONAL_PROJECT_ICON = {
			type: "icon",
			value: "user"
		};
		const DEFAULT_PROJECT_ICON = {
			type: "icon",
			value: "layers"
		};
		function projectIcon(project) {
			return isIconOrEmoji(project?.icon) ? project.icon : DEFAULT_PROJECT_ICON;
		}
		const props = __props;
		const emit = __emit;
		const tab = useModel(__props, "tab");
		const i18n = useI18n();
		const router = useRouter();
		const rootStore = useRootStore();
		const latestProjectFetch = useLatestFetch();
		const latestAppsFetch = useLatestFetch();
		const project = ref(null);
		const projectApps = ref([]);
		const tabOptions = computed(() => [{
			value: "preview",
			label: i18n.baseText("apps.detail.tabs.preview")
		}, {
			value: "configure",
			label: i18n.baseText("apps.detail.tabs.configure")
		}]);
		const appsRoute = computed(() => ({
			name: PROJECT_APPS,
			params: { projectId: props.projectId }
		}));
		const breadcrumbItems = computed(() => {
			const isPersonal = project.value?.type === "personal";
			return [{
				id: props.projectId,
				label: isPersonal ? i18n.baseText("projects.menu.personal") : project.value?.name ?? i18n.baseText("apps.detail.projectFallback"),
				icon: isPersonal ? PERSONAL_PROJECT_ICON : projectIcon(project.value),
				href: router.resolve(appsRoute.value).href
			}];
		});
		const switcherOptions = computed(() => {
			const others = projectApps.value.filter((projectApp) => projectApp.id !== props.app?.id);
			if (others.length === 0) return [{
				id: NO_OTHER_APPS,
				label: i18n.baseText("apps.detail.switcher.empty"),
				disabled: true
			}];
			return others.map((projectApp) => ({
				id: projectApp.id,
				label: projectApp.name
			}));
		});
		function onSwitcherSelect(appId) {
			if (appId === NO_OTHER_APPS) return;
			router.push({
				name: APP_DETAIL_VIEW,
				params: {
					projectId: props.projectId,
					appId
				}
			});
		}
		async function loadProject() {
			const isLatest = latestProjectFetch.next();
			try {
				const result = await getProject(rootStore.restApiContext, props.projectId);
				if (isLatest()) project.value = result;
			} catch {
				if (isLatest()) project.value = null;
			}
		}
		async function loadProjectApps() {
			const isLatest = latestAppsFetch.next();
			try {
				const { data } = await listApps(rootStore.restApiContext, props.projectId, {
					skip: 0,
					take: SWITCHER_MAX_APPS,
					sortBy: "name:asc"
				});
				if (isLatest()) projectApps.value = data;
			} catch {
				if (isLatest()) projectApps.value = [];
			}
		}
		watch(() => props.projectId, () => {
			loadProject();
			loadProjectApps();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-test-id": "app-header"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.left) }, [createVNode(unref(N8nBreadcrumbs_default), {
					class: normalizeClass(_ctx.$style.breadcrumbs),
					items: breadcrumbItems.value,
					theme: "medium",
					onItemSelected: _cache[1] || (_cache[1] = ($event) => unref(router).push(appsRoute.value))
				}, {
					append: withCtx(() => [
						createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.separator),
							"aria-hidden": "true"
						}, "/", 2),
						createVNode(unref(DropdownMenu_default), {
							items: switcherOptions.value,
							placement: "bottom-start",
							"data-test-id": "app-header-switcher",
							onSelect: onSwitcherSelect
						}, {
							trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "ghost",
								size: "small",
								class: normalizeClass(_ctx.$style.switcherButton),
								"aria-label": unref(i18n).baseText("apps.detail.switcher.ariaLabel")
							}, {
								default: withCtx(() => [createBaseVNode("span", {
									class: normalizeClass(_ctx.$style.appName),
									"data-test-id": "app-header-name"
								}, toDisplayString(__props.app?.name ?? "…"), 3), createVNode(unref(N8nIcon_default), {
									icon: "chevron-down",
									size: 12
								})]),
								_: 1
							}, 8, ["class", "aria-label"])]),
							_: 1
						}, 8, ["items"]),
						__props.app ? (openBlock(), createBlock(AppActions_default, {
							key: 0,
							app: __props.app,
							onDeleted: _cache[0] || (_cache[0] = ($event) => emit("deleted", $event))
						}, null, 8, ["app"])) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["class", "items"])], 2),
				__props.app ? (openBlock(), createBlock(unref(N8nSegmentControl_default), {
					key: 0,
					modelValue: tab.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => tab.value = $event),
					options: tabOptions.value,
					class: normalizeClass(_ctx.$style.center),
					"data-test-id": "app-header-tabs"
				}, null, 8, [
					"modelValue",
					"options",
					"class"
				])) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.right) }, [__props.app ? (openBlock(), createBlock(AppPublishButton_default, {
					key: 0,
					app: __props.app,
					version: __props.publishableVersion,
					onUpdated: _cache[3] || (_cache[3] = ($event) => emit("updated", $event))
				}, null, 8, ["app", "version"])) : createCommentVNode("", true)], 2)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	header: "_header_1f720_1",
	separator: "_separator_1f720_22",
	left: "_left_1f720_26",
	right: "_right_1f720_27",
	breadcrumbs: "_breadcrumbs_1f720_39",
	center: "_center_1f720_43",
	switcherButton: "_switcherButton_1f720_59",
	appName: "_appName_1f720_66"
} }]]);
//#endregion
//#region ../../modules/apps/frontend/src/components/AppPreviewOptionMenu.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region ../../modules/apps/frontend/src/components/AppPreviewOptionMenu.vue
var AppPreviewOptionMenu_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "AppPreviewOptionMenu",
	props: /*@__PURE__*/ mergeModels({
		options: {},
		label: {}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const selected = useModel(__props, "modelValue");
		const items = computed(() => props.options.map(({ value, label, icon }) => ({
			id: value,
			label,
			icon: {
				type: "icon",
				value: icon
			},
			checked: value === selected.value
		})));
		const selectedOption = computed(() => props.options.find(({ value }) => value === selected.value));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), { content: __props.label }, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), mergeProps(_ctx.$attrs, {
					items: items.value,
					placement: "bottom-end",
					onSelect: _cache[0] || (_cache[0] = ($event) => selected.value = $event)
				}), {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						"aria-label": __props.label
					}, {
						default: withCtx(() => [selectedOption.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: selectedOption.value.icon,
							size: "small"
						}, null, 8, ["icon"])) : createCommentVNode("", true), createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: 12
						})]),
						_: 1
					}, 8, ["aria-label"])]),
					_: 1
				}, 16, ["items"])]),
				_: 1
			}, 8, ["content"]);
		};
	}
});
//#endregion
//#region ../../modules/apps/frontend/src/components/AppPreview.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = ["src", "title"];
var GRANT_REFRESH_MS = 33e5;
var AppPreview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AppPreview",
	props: {
		projectId: {},
		app: {},
		versions: {}
	},
	setup(__props) {
		const SCREEN_SIZES = [
			"desktop",
			"tablet",
			"mobile"
		];
		const SCREEN_WIDTHS = {
			desktop: "100%",
			tablet: "768px",
			mobile: "375px"
		};
		const THEMES = ["light", "dark"];
		const OPTION_ICONS = {
			desktop: "monitor",
			tablet: "tablet",
			mobile: "smartphone",
			light: "sun",
			dark: "moon"
		};
		function editorTheme() {
			const theme = document.body.dataset.theme;
			if (theme === "light" || theme === "dark") return theme;
			return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		}
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const latestFetch = useLatestFetch();
		const { head, latestBuilt, building } = props.versions;
		const preview = ref(null);
		const granting = ref(false);
		const grantFailed = ref(false);
		const screenSize = ref("desktop");
		const theme = ref(editorTheme());
		let refreshTimer;
		const sizeOptions = computed(() => SCREEN_SIZES.map((value) => ({
			value,
			label: i18n.baseText(`apps.preview.size.${value}`),
			icon: OPTION_ICONS[value]
		})));
		const themeOptions = computed(() => THEMES.map((value) => ({
			value,
			label: i18n.baseText(`apps.preview.theme.${value}`),
			icon: OPTION_ICONS[value]
		})));
		const loading = computed(() => props.versions.loading.value || granting.value);
		const failed = computed(() => props.versions.failed.value || grantFailed.value);
		const buildFailed = computed(() => head.value?.buildStatus === "failed");
		const versionLabel = computed(() => {
			const version = preview.value?.version;
			return version ? version.label ?? version.id.slice(-8) : null;
		});
		async function grant(versionId) {
			return await createAppPreview(rootStore.restApiContext, props.projectId, props.app.id, versionId);
		}
		function showPreview(next) {
			clearTimeout(refreshTimer);
			preview.value = next;
			if (next) refreshTimer = setTimeout(async () => await show(true), GRANT_REFRESH_MS);
		}
		async function show(force = false) {
			const version = latestBuilt.value;
			if (!force && version?.id === preview.value?.version.id) return;
			const isLatest = latestFetch.next();
			if (!version) {
				granting.value = false;
				showPreview(null);
				return;
			}
			granting.value = true;
			try {
				const { url } = await grant(version.id);
				if (!isLatest()) return;
				showPreview({
					version,
					url
				});
				grantFailed.value = false;
			} catch (error) {
				if (!isLatest()) return;
				grantFailed.value = true;
				toast.showError(error, i18n.baseText("apps.preview.loadError"));
			} finally {
				if (isLatest()) granting.value = false;
			}
		}
		async function reload() {
			await props.versions.refresh();
			if (!props.versions.failed.value) await show(true);
		}
		async function openInNewTab() {
			const version = preview.value?.version;
			if (!version) return;
			const tab = window.open("about:blank", "_blank");
			if (!tab) return;
			tab.opener = null;
			try {
				tab.location.href = (await grant(version.id)).url;
			} catch (error) {
				tab.close();
				toast.showError(error, i18n.baseText("apps.preview.loadError"));
			}
		}
		watch(() => latestBuilt.value?.id, async () => await show(), { immediate: true });
		onBeforeUnmount(() => {
			clearTimeout(refreshTimer);
			latestFetch.invalidate();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.preview),
				"data-test-id": "app-preview"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.left) }, [createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("apps.preview.reload") }, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "refresh-cw",
						variant: "ghost",
						size: "small",
						"aria-label": unref(i18n).baseText("apps.preview.reload"),
						loading: loading.value,
						"data-test-id": "app-preview-reload",
						onClick: reload
					}, null, 8, ["aria-label", "loading"])]),
					_: 1
				}, 8, ["content"]), unref(building) ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					variant: "info",
					"data-test-id": "app-preview-status"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("apps.preview.building")), 1)]),
					_: 1
				})) : buildFailed.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 1,
					variant: "danger",
					"data-test-id": "app-preview-status"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("apps.preview.buildFailed")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2),
				versionLabel.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.version),
					"data-test-id": "app-preview-version"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("apps.preview.version", { interpolate: { version: versionLabel.value } })), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.right) }, [
					createVNode(AppPreviewOptionMenu_default, {
						modelValue: screenSize.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => screenSize.value = $event),
						options: sizeOptions.value,
						label: unref(i18n).baseText("apps.preview.size.label"),
						"data-test-id": "app-preview-size"
					}, null, 8, [
						"modelValue",
						"options",
						"label"
					]),
					createVNode(AppPreviewOptionMenu_default, {
						modelValue: theme.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => theme.value = $event),
						options: themeOptions.value,
						label: unref(i18n).baseText("apps.preview.theme.label"),
						"data-test-id": "app-preview-theme"
					}, null, 8, [
						"modelValue",
						"options",
						"label"
					]),
					createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("apps.preview.openInNewTab") }, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "external-link",
							variant: "ghost",
							size: "small",
							"aria-label": unref(i18n).baseText("apps.preview.openInNewTab"),
							disabled: !preview.value,
							"data-test-id": "app-preview-open",
							onClick: openInNewTab
						}, null, 8, ["aria-label", "disabled"])]),
						_: 1
					}, 8, ["content"])
				], 2)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.stage) }, [loading.value && !preview.value && !failed.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				loading: true,
				rows: 3,
				"data-test-id": "app-preview-loading"
			})) : failed.value && !preview.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 1,
				icon: {
					type: "icon",
					value: "triangle-alert"
				},
				heading: unref(i18n).baseText("apps.preview.error.heading"),
				description: unref(i18n).baseText("apps.preview.error.description"),
				"data-test-id": "app-preview-error"
			}, null, 8, ["heading", "description"])) : preview.value ? (openBlock(), createElementBlock("iframe", {
				key: preview.value.url,
				src: preview.value.url,
				title: unref(i18n).baseText("apps.preview.frameTitle", { interpolate: { name: __props.app.name } }),
				style: normalizeStyle({
					width: SCREEN_WIDTHS[screenSize.value],
					colorScheme: theme.value
				}),
				class: normalizeClass(_ctx.$style.frame),
				sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals allow-downloads",
				"data-test-id": "app-preview-frame"
			}, null, 14, _hoisted_1$1)) : unref(building) ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 3,
				icon: {
					type: "icon",
					value: "wrench"
				},
				heading: unref(i18n).baseText("apps.preview.firstBuild.heading"),
				description: unref(i18n).baseText("apps.preview.firstBuild.description"),
				"data-test-id": "app-preview-first-build"
			}, null, 8, ["heading", "description"])) : buildFailed.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 4,
				icon: {
					type: "icon",
					value: "triangle-alert"
				},
				heading: unref(i18n).baseText("apps.preview.buildFailedState.heading"),
				description: unref(i18n).baseText("apps.preview.buildFailedState.description"),
				"data-test-id": "app-preview-build-failed"
			}, null, 8, ["heading", "description"])) : (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 5,
				icon: {
					type: "icon",
					value: "eye"
				},
				heading: unref(i18n).baseText("apps.preview.empty.heading"),
				description: unref(i18n).baseText("apps.preview.empty.description"),
				"data-test-id": "app-preview-empty"
			}, null, 8, ["heading", "description"]))], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	preview: "_preview_1s8ii_1",
	toolbar: "_toolbar_1s8ii_8",
	left: "_left_1s8ii_16",
	right: "_right_1s8ii_17",
	version: "_version_1s8ii_36",
	stage: "_stage_1s8ii_44",
	frame: "_frame_1s8ii_55"
} }]]);
//#endregion
//#region ../../modules/apps/frontend/src/components/configure/AppConfigureTabBasics.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { "data-test-id": "app-configure-basics" };
//#endregion
//#region ../../modules/apps/frontend/src/components/configure/appConfigureTabs.ts
var APP_CONFIGURE_TABS = [{
	name: "basics",
	component: /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
		__name: "AppConfigureTabBasics",
		props: {
			app: {},
			versions: {}
		},
		emits: ["updated"],
		setup(__props, { emit: __emit }) {
			const FIELDS = [{
				id: "name",
				schema: appNameSchema,
				maxLength: 128,
				label: "apps.configure.basics.name",
				description: void 0,
				invalidText: "apps.configure.basics.nameInvalid"
			}, {
				id: "namespace",
				schema: appNamespaceSchema,
				maxLength: 54,
				label: "apps.configure.basics.namespace",
				description: "apps.configure.basics.namespaceDescription",
				invalidText: "apps.configure.basics.namespaceInvalid"
			}];
			const props = __props;
			const emit = __emit;
			const i18n = useI18n();
			const toast = useToast();
			const message = useMessage();
			const rootStore = useRootStore();
			const form = ref({
				name: props.app.name,
				namespace: props.app.namespace
			});
			const saving = ref({});
			let pendingSave = Promise.resolve();
			const canUpdate = computed(() => getAppPermissions(props.app.projectId).canUpdate);
			const invalid = computed(() => new Set(FIELDS.filter(({ id, schema }) => !schema.safeParse(form.value[id]).success).map(({ id }) => id)));
			function reset(field) {
				form.value[field] = props.app[field];
			}
			async function confirmNamespaceChange() {
				if (!props.app.publishedUrl) return true;
				return await message.confirm(i18n.baseText("apps.configure.basics.namespaceConfirm.message"), i18n.baseText("apps.configure.basics.namespaceConfirm.title"), {
					confirmButtonText: i18n.baseText("apps.configure.basics.namespaceConfirm.confirm"),
					cancelButtonText: i18n.baseText("generic.cancel"),
					type: "warning"
				}) === "confirm";
			}
			async function save(field, value) {
				try {
					if (field === "namespace" && !await confirmNamespaceChange()) {
						reset(field);
						return;
					}
					const changes = {};
					changes[field] = value;
					emit("updated", await updateApp(rootStore.restApiContext, props.app.projectId, props.app.id, changes));
				} catch (error) {
					toast.showError(error, i18n.baseText("apps.configure.basics.saveError"));
				} finally {
					saving.value[field] = false;
				}
			}
			function commit(field) {
				const value = form.value[field].trim();
				if (saving.value[field] || invalid.value.has(field)) return;
				if (value === props.app[field]) {
					reset(field);
					return;
				}
				saving.value[field] = true;
				pendingSave = pendingSave.then(async () => await save(field, value));
			}
			function onKeydown(event, field) {
				if (event.key === "Escape") reset(field);
				if ((event.key === "Enter" || event.key === "Escape") && event.target instanceof HTMLElement) event.target.blur();
			}
			watch(() => props.app.name, () => reset("name"));
			watch(() => props.app.namespace, () => reset("namespace"));
			return (_ctx, _cache) => {
				return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(SettingsRowGroup_default), null, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createVNode(unref(N8nHeading_default), {
						tag: "h2",
						size: "medium",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("apps.configure.basics.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("apps.configure.basics.description")), 1)]),
						_: 1
					})], 2), (openBlock(), createElementBlock(Fragment, null, renderList(FIELDS, (field) => {
						return createVNode(unref(SettingsRow_default), {
							key: field.id,
							title: unref(i18n).baseText(field.label),
							description: field.description && unref(i18n).baseText(field.description),
							layout: "vertical"
						}, {
							action: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(Input_default), {
								modelValue: form.value[field.id],
								"onUpdate:modelValue": ($event) => form.value[field.id] = $event,
								class: normalizeClass({ [_ctx.$style.invalid]: invalid.value.has(field.id) }),
								maxlength: field.maxLength,
								disabled: !canUpdate.value || saving.value[field.id],
								"aria-label": unref(i18n).baseText(field.label),
								"data-test-id": `app-configure-${field.id}`,
								onBlur: ($event) => commit(field.id),
								onKeydown: ($event) => onKeydown($event, field.id)
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"class",
								"maxlength",
								"disabled",
								"aria-label",
								"data-test-id",
								"onBlur",
								"onKeydown"
							]), invalid.value.has(field.id) ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								class: normalizeClass(_ctx.$style.error),
								"data-test-id": `app-configure-${field.id}-error`
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(field.invalidText)), 1)]),
								_: 2
							}, 1032, ["class", "data-test-id"])) : createCommentVNode("", true)], 2)]),
							_: 2
						}, 1032, ["title", "description"]);
					}), 64))]),
					_: 1
				})]);
			};
		}
	}), [["__cssModules", { "$style": {
		field: "_field_22jkb_1",
		invalid: "_invalid_22jkb_7",
		error: "_error_22jkb_11",
		cardHeader: "_cardHeader_22jkb_17"
	} }]])
}];
var DEFAULT_APP_CONFIGURE_TAB = APP_CONFIGURE_TABS[0].name;
function isAppConfigureTab(value) {
	return APP_CONFIGURE_TABS.some((tab) => tab.name === value);
}
//#endregion
//#region ../../modules/apps/frontend/src/components/configure/AppConfigure.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AppConfigure_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AppConfigure",
	props: /*@__PURE__*/ mergeModels({
		app: {},
		versions: {}
	}, {
		"tab": { required: true },
		"tabModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["updated"], ["update:tab"]),
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const tab = useModel(__props, "tab");
		const i18n = useI18n();
		const tabOptions = computed(() => APP_CONFIGURE_TABS.map(({ name }) => ({
			value: name,
			label: i18n.baseText(`apps.configure.tabs.${name}`)
		})));
		const activeTab = computed(() => APP_CONFIGURE_TABS.find(({ name }) => name === tab.value) ?? APP_CONFIGURE_TABS[0]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.configure),
				"data-test-id": "app-view-configure"
			}, [createVNode(unref(N8nTabs_default), {
				modelValue: tab.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tab.value = $event),
				options: tabOptions.value,
				"data-test-id": "app-configure-tabs"
			}, null, 8, ["modelValue", "options"]), (openBlock(), createBlock(resolveDynamicComponent(activeTab.value.component), {
				app: __props.app,
				versions: __props.versions,
				onUpdated: _cache[1] || (_cache[1] = ($event) => emit("updated", $event))
			}, null, 40, ["app", "versions"]))], 2);
		};
	}
}), [["__cssModules", { "$style": { configure: "_configure_18vmd_1" } }]]);
//#endregion
//#region ../../modules/apps/frontend/src/components/AppView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AppView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AppView",
	props: /*@__PURE__*/ mergeModels({
		projectId: {},
		appId: {}
	}, {
		"section": { default: "preview" },
		"sectionModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["deleted"], ["update:section"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const latestFetch = useLatestFetch();
		const app = ref(null);
		const loading = ref(true);
		const versions = useAppVersions(() => props.projectId, () => app.value?.id);
		const section = useModel(__props, "section");
		const sectionParts = computed(() => section.value.split("."));
		const activeTab = computed({
			get: () => sectionParts.value[0] === "configure" ? "configure" : "preview",
			set: (tab) => {
				section.value = tab;
			}
		});
		const configureTab = computed({
			get: () => {
				const subTab = sectionParts.value[1];
				return isAppConfigureTab(subTab) ? subTab : DEFAULT_APP_CONFIGURE_TAB;
			},
			set: (tab) => {
				section.value = `configure.${tab}`;
			}
		});
		async function loadApp(keepView = false) {
			const isLatest = latestFetch.next();
			if (!keepView) {
				app.value = null;
				loading.value = true;
			}
			try {
				const result = await getApp(rootStore.restApiContext, props.projectId, props.appId);
				if (!isLatest()) return;
				app.value = result;
			} catch (error) {
				if (!isLatest()) return;
				if (error instanceof ResponseError && error.httpStatusCode === 404) app.value = null;
				else toast.showError(error, i18n.baseText("apps.detail.loadError"));
			}
			loading.value = false;
		}
		async function refresh() {
			await Promise.all([loadApp(true), versions.refresh()]);
		}
		watch(() => [props.projectId, props.appId], async () => await loadApp(), { immediate: true });
		__expose({ refresh });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.view),
				"data-test-id": "app-view"
			}, [loading.value || app.value ? (openBlock(), createBlock(AppHeader_default, {
				key: 0,
				tab: activeTab.value,
				"onUpdate:tab": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
				"project-id": __props.projectId,
				app: app.value,
				"publishable-version": unref(versions).latestBuilt.value,
				onUpdated: _cache[1] || (_cache[1] = ($event) => app.value = $event),
				onDeleted: _cache[2] || (_cache[2] = ($event) => emit("deleted", $event))
			}, null, 8, [
				"tab",
				"project-id",
				"app",
				"publishable-version"
			])) : createCommentVNode("", true), createBaseVNode("main", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.flush]: app.value && activeTab.value === "preview" }]) }, [loading.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				loading: true,
				rows: 3,
				"data-test-id": "app-view-loading"
			})) : !app.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 1,
				heading: unref(i18n).baseText("apps.detail.notFound.heading"),
				description: unref(i18n).baseText("apps.detail.notFound.description"),
				"data-test-id": "app-view-not-found"
			}, null, 8, ["heading", "description"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [activeTab.value === "preview" ? (openBlock(), createBlock(AppPreview_default, {
				key: 0,
				"project-id": __props.projectId,
				app: app.value,
				versions: unref(versions)
			}, null, 8, [
				"project-id",
				"app",
				"versions"
			])) : (openBlock(), createBlock(AppConfigure_default, {
				key: 1,
				tab: configureTab.value,
				"onUpdate:tab": _cache[3] || (_cache[3] = ($event) => configureTab.value = $event),
				app: app.value,
				versions: unref(versions),
				onUpdated: _cache[4] || (_cache[4] = ($event) => app.value = $event)
			}, null, 8, [
				"tab",
				"app",
				"versions"
			]))], 64))], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	view: "_view_apomj_1",
	content: "_content_apomj_8",
	flush: "_flush_apomj_17"
} }]]);
//#endregion
export { AppView_default as t };
