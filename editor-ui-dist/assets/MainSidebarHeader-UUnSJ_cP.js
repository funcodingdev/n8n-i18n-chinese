import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Gd as createVNode, Kf as unref, Ld as computed, Nd as withModifiers, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Qo as RouterLink, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, bd as I18nT, ep as init_shared_esm_bundler, ff as renderList, gf as resolveDynamicComponent, nf as mergeProps, os as useRouter, pp as normalizeClass, qd as defineComponent, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { By as useVersionsStore, CE as PreviewBadge_default, ED as N8nText_default, FD as N8nIcon_default, Fs as KeyboardShortcutTooltip_default, Jy as useUsersStore, Ky as useTelemetry, LE as N8nLink_default, Mr as ClaudeLogo_default, ND as N8nIconButton_default, NT as N8nScrollArea_default, OD as N8nTooltip_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, SE as NewBadge_default, TE as N8nLogo_default, Tm as useSourceControlStore, UD as useI18n, Uy as VIEWS, Yy as useSettingsStore, dn as useGlobalEntityCreation, ea as useMcpDiscovery, hg as PROTECTED_INSTANCE_DOCS_URL, n_ as CHANGELOG_URL, oE as N8nPopover_default, of as usePageRedirectionHelper, tE as isCustomMenuItem, vD as DropdownMenu_default, xD as N8nBadge_default, xE as N8nMenuItem_default, yD as DropdownMenuItem_default } from "./app-CfhiRDif.js";
//#region src/app/components/VersionUpdateCTA.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/app/components/VersionUpdateCTA.vue
var VersionUpdateCTA_default = /* @__PURE__ */ defineComponent({
	__name: "VersionUpdateCTA",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		tooltipText: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const versionsStore = useVersionsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const telemetry = useTelemetry();
		const onUpdateClick = async () => {
			telemetry.track("User clicked on update button", { source: "main-sidebar" });
			await pageRedirectionHelper.goToVersions();
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nMenuItem_default), {
				"data-test-id": "version-update-cta-button",
				item: {
					id: "version-update-cta",
					icon: {
						value: "status-warning",
						type: "icon",
						color: "primary"
					},
					disabled: props.disabled,
					disabledReason: props.tooltipText,
					label: unref(i18n).baseText("whatsNew.versionsBehind", { interpolate: { count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length } })
				},
				onClick: onUpdateClick
			}, null, 8, ["item"]);
		};
	}
});
//#endregion
//#region src/app/components/BottomMenu.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var BottomMenu_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "BottomMenu",
	props: {
		items: {},
		isCollapsed: { type: Boolean },
		settingsSections: { default: void 0 }
	},
	emits: ["select", "logout"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const router = useRouter();
		const versionsStore = useVersionsStore();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const isHelpOpen = ref(false);
		const isSettingsOpen = ref(false);
		/** A settings row keeps its menu item in `data`, so the trailing slot can show its tags. */
		function toSettingsEntry(item) {
			return {
				id: item.id,
				testId: item.id,
				label: item.label,
				icon: typeof item.icon === "string" ? {
					type: "icon",
					value: item.icon
				} : item.icon,
				disabled: item.disabled,
				data: item
			};
		}
		const settingsEntries = computed(() => {
			if (props.settingsSections) return props.settingsSections.flatMap((section) => [...section.title ? [{
				id: `section-${section.id}`,
				label: section.title,
				header: true
			}] : [], ...section.items.map(toSettingsEntry)]);
			return (props.items.find((item) => item.id === "settings")?.children ?? []).filter((child) => !isCustomMenuItem(child)).map(toSettingsEntry);
		});
		function handleSettingsSelect(key) {
			const item = settingsEntries.value.find((entry) => entry.id === key)?.data;
			if (item?.route?.to) router.push(item.route.to);
			else if (item?.link) window.open(item.link.href, item.link.target ?? "_self");
			handleSelect(key);
		}
		const whatsNewItems = computed(() => ({
			available: versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.length > 0,
			children: [
				...versionsStore.whatsNewArticles.map((article) => ({
					id: `whats-new-article-${article.id}`,
					label: article.title,
					size: "small",
					customIconSize: "small",
					icon: {
						type: "emoji",
						value: "•",
						color: !versionsStore.isWhatsNewArticleRead(article.id) ? "primary" : "text-light"
					}
				})),
				{
					id: "full-changelog",
					icon: "external-link",
					label: i18n.baseText("mainSidebar.whatsNew.fullChangelog"),
					link: {
						href: CHANGELOG_URL,
						target: "_blank"
					},
					size: "small",
					customIconSize: "small"
				},
				...versionsStore.hasVersionUpdates ? [{
					id: "version-upgrade-cta",
					component: VersionUpdateCTA_default,
					props: {
						tooltipText: !usersStore.canUserUpdateVersion ? i18n.baseText("whatsNew.updateNudgeTooltip") : void 0,
						disabled: !usersStore.canUserUpdateVersion
					}
				}] : []
			]
		}));
		function handleSelect(key) {
			emit("select", key);
		}
		function onLogout() {
			emit("logout");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.bottomMenu]: true,
				[_ctx.$style.collapsed]: __props.isCollapsed
			}) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.bottomMenuItems) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.children && item.id === "help" ? (openBlock(), createBlock(unref(N8nPopover_default), {
					key: "help",
					open: isHelpOpen.value,
					"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isHelpOpen.value = $event),
					side: "right",
					align: "end"
				}, {
					content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child) => {
						return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
							key: 0,
							ref_for: true
						}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item: child,
							onClick: () => handleSelect(child.id)
						}, null, 8, ["item", "onClick"]))], 64);
					}), 128)), whatsNewItems.value.available ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "small",
						class: normalizeClass(_ctx.$style.popoverTitle),
						color: "text-light"
					}, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("What's new", -1)])]),
						_: 1
					}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(whatsNewItems.value.children, (child) => {
						return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
							key: 0,
							ref_for: true
						}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item: child,
							onClick: () => handleSelect(child.id)
						}, null, 8, ["item", "onClick"]))], 64);
					}), 128))], 64)) : createCommentVNode("", true)], 2)]),
					trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						"data-test-id": `main-sidebar-${item.id}`,
						item,
						compact: __props.isCollapsed,
						active: isHelpOpen.value,
						onClick: () => handleSelect(item.id)
					}, null, 8, [
						"data-test-id",
						"item",
						"compact",
						"active",
						"onClick"
					])]),
					_: 2
				}, 1032, ["open"])) : item.children && item.id === "settings" ? (openBlock(), createBlock(unref(DropdownMenu_default), {
					key: "settings",
					modelValue: isSettingsOpen.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isSettingsOpen.value = $event),
					items: settingsEntries.value,
					placement: "right-end",
					"max-height": "min(530px, var(--reka-dropdown-menu-content-available-height))",
					"extra-popper-class": _ctx.$style.settingsMenu,
					"content-test-id": "main-sidebar-settings-list"
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						"data-test-id": `main-sidebar-${item.id}`,
						class: normalizeClass(_ctx.$style.menuTrigger),
						item,
						compact: __props.isCollapsed,
						active: isSettingsOpen.value,
						role: "button",
						tabindex: "0",
						onClick: () => handleSelect(item.id)
					}, null, 8, [
						"data-test-id",
						"class",
						"item",
						"compact",
						"active",
						"onClick"
					])]),
					content: withCtx(() => [createVNode(unref(N8nScrollArea_default), {
						"edge-fade": "y",
						class: normalizeClass(_ctx.$style.settingsList)
					}, {
						default: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.settingsItems),
							"data-menu-items": ""
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(settingsEntries.value, (entry) => {
							return openBlock(), createBlock(unref(DropdownMenuItem_default), mergeProps({ key: entry.id }, { ref_for: true }, entry, { onSelect: handleSettingsSelect }), {
								"item-trailing": withCtx(({ item: row, ui }) => [
									row.data?.preview ? (openBlock(), createBlock(unref(PreviewBadge_default), {
										key: 0,
										class: normalizeClass(ui.class)
									}, null, 8, ["class"])) : createCommentVNode("", true),
									row.data?.new ? (openBlock(), createBlock(unref(NewBadge_default), {
										key: 1,
										class: normalizeClass(ui.class)
									}, null, 8, ["class"])) : createCommentVNode("", true),
									row.data?.creditsTag ? (openBlock(), createBlock(unref(N8nBadge_default), {
										key: 2,
										size: "xxsmall",
										variant: "success",
										class: normalizeClass(ui.class)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(row.data.creditsTag), 1)]),
										_: 2
									}, 1032, ["class"])) : createCommentVNode("", true)
								]),
								_: 1
							}, 16);
						}), 128))], 2)]),
						_: 1
					}, 8, ["class"]), createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.settingsFooter),
						"data-test-id": "main-sidebar-settings-footer"
					}, [createVNode(unref(DropdownMenuItem_default), {
						id: "sign-out",
						"test-id": "main-sidebar-log-out",
						label: unref(i18n).baseText("auth.signout"),
						icon: {
							type: "icon",
							value: "log-out"
						},
						onSelect: onLogout
					}, null, 8, ["label"])], 2)]),
					_: 2
				}, 1032, [
					"modelValue",
					"items",
					"extra-popper-class"
				])) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
					key: 2,
					"data-test-id": `main-sidebar-${item.id}`,
					item,
					compact: __props.isCollapsed,
					class: normalizeClass(item.id === "resource-center" ? _ctx.$style.resourceCenterMenuItem : void 0),
					onClick: () => handleSelect(item.id)
				}, null, 8, [
					"data-test-id",
					"item",
					"compact",
					"class",
					"onClick"
				]))], 64);
			}), 128))], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	bottomMenu: "_bottomMenu_1y1rq_3",
	collapsed: "_collapsed_1y1rq_8",
	bottomMenuItems: "_bottomMenuItems_1y1rq_12",
	resourceCenterMenuItem: "_resourceCenterMenuItem_1y1rq_16",
	popover: "_popover_1y1rq_20",
	popoverTitle: "_popoverTitle_1y1rq_25",
	menuTrigger: "_menuTrigger_1y1rq_33",
	settingsMenu: "_settingsMenu_1y1rq_47",
	settingsList: "_settingsList_1y1rq_54",
	settingsItems: "_settingsItems_1y1rq_59",
	settingsFooter: "_settingsFooter_1y1rq_67"
} }]]);
//#endregion
//#region src/experiments/surfaceMcpToClaudeTrialUsers/useClaudeCreateMenu.ts
init_runtime_core_esm_bundler();
function useClaudeCreateMenu(menu, handleMenuSelect) {
	const { showMcpDiscovery, mcpDiscovery, entryLabel, openEntry } = useMcpDiscovery();
	const claudeAppendSlotName = "item.append.claude-mcp";
	const claudeMenu = computed(() => showMcpDiscovery.value ? [
		...menu.value,
		{
			id: "claude-divider",
			isDivider: true
		},
		{
			id: "claude-mcp",
			title: entryLabel.value
		}
	] : menu.value);
	function selectItem(id) {
		if (id === "claude-mcp") openEntry("create_menu");
		else handleMenuSelect(id);
	}
	return {
		claudeMenu,
		claudeAppendSlotName,
		selectItem,
		trackOpen: () => {
			if (showMcpDiscovery.value) mcpDiscovery.trackEntry("create_menu", "viewed");
		}
	};
}
//#endregion
//#region src/app/components/MainSidebarHeader.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = ["href"];
var MainSidebarHeader_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "MainSidebarHeader",
	props: {
		isCollapsed: { type: Boolean },
		hideCreate: { type: Boolean }
	},
	emits: ["collapse", "openCommandBar"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const sourceControlStore = useSourceControlStore();
		const settingsStore = useSettingsStore();
		const router = useRouter();
		function toggleCollapse() {
			emit("collapse");
		}
		function openCommandBar(event) {
			emit("openCommandBar", event);
		}
		const { menu, handleSelect: handleMenuSelect, projectsLimitReachedMessage, upgradeLabel, hasPermissionToCreateProjects } = useGlobalEntityCreation();
		const { claudeMenu, selectItem, trackOpen } = useClaudeCreateMenu(menu, handleMenuSelect);
		function toDropdownItem(item) {
			return {
				id: item.id,
				label: item.title,
				disabled: item.disabled,
				icon: typeof item.icon === "string" ? {
					type: "icon",
					value: item.icon
				} : item.icon,
				data: { route: item.route },
				children: item.submenu?.map(toDropdownItem)
			};
		}
		const creationMenu = computed(() => {
			const items = [];
			let divided = false;
			for (const item of claudeMenu.value) {
				if ("isDivider" in item && item.isDivider) {
					divided = true;
					continue;
				}
				items.push({
					...toDropdownItem(item),
					divided
				});
				divided = false;
			}
			const workflowIndex = items.findIndex((item) => item.id === "workflow");
			const agentIndex = items.findIndex((item) => item.id === "agent");
			if (workflowIndex !== -1 && agentIndex !== -1 && agentIndex !== workflowIndex + 1) {
				const [agentItem] = items.splice(agentIndex, 1);
				items.splice(items.findIndex((item) => item.id === "workflow") + 1, 0, agentItem);
			}
			return items;
		});
		function handleSelect(id) {
			const item = creationMenu.value.flatMap((item) => [item, ...item.children ?? []]).find((item) => item.id === id);
			if (item?.data?.route) router.push(item.data.route);
			selectItem(id);
		}
		function handleLinkClick(event) {
			if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) event.stopPropagation();
			else event.preventDefault();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.header]: true,
				[_ctx.$style.collapsed]: __props.isCollapsed
			}) }, [
				!__props.isCollapsed ? (openBlock(), createBlock(unref(RouterLink), {
					key: 0,
					to: { name: unref(VIEWS).HOMEPAGE },
					class: normalizeClass(_ctx.$style.logo)
				}, {
					default: withCtx(() => [createVNode(unref(N8nLogo_default), {
						size: "small",
						collapsed: __props.isCollapsed,
						"release-channel": unref(settingsStore).settings.releaseChannel
					}, {
						default: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly && !__props.isCollapsed ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							placement: "bottom"
						}, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								keypath: "readOnlyEnv.tooltip",
								scope: "global"
							}, {
								link: withCtx(() => [createVNode(unref(N8nLink_default), {
									to: unref(PROTECTED_INSTANCE_DOCS_URL),
									size: "small"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.tooltip.link")), 1)]),
									_: 1
								}, 8, ["to"])]),
								_: 1
							})]),
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								"data-test-id": "read-only-env-icon",
								icon: "lock",
								class: normalizeClass(_ctx.$style.readOnlyEnvironmentIcon)
							}, null, 8, ["class"])]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["collapsed", "release-channel"])]),
					_: 1
				}, 8, ["to", "class"])) : createCommentVNode("", true),
				!__props.hideCreate ? (openBlock(), createBlock(unref(DropdownMenu_default), {
					key: 1,
					"data-test-id": "universal-add",
					items: creationMenu.value,
					"content-test-id": "creation-menu",
					placement: "bottom-start",
					modal: false,
					onSelect: handleSelect
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "plus",
						"icon-size": "large",
						"aria-label": "Add new item",
						onClick: unref(trackOpen)
					}, null, 8, ["onClick"])]),
					"item-leading": withCtx(({ item, ui }) => [item.id === "claude-mcp" ? (openBlock(), createBlock(ClaudeLogo_default, {
						key: 0,
						class: normalizeClass(ui.class)
					}, null, 8, ["class"])) : item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: item.icon.value,
						class: normalizeClass(ui.class),
						size: "large"
					}, null, 8, ["icon", "class"])) : item.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
						key: 2,
						class: normalizeClass(ui.class)
					}, toDisplayString(item.icon.value), 3)) : createCommentVNode("", true)]),
					"item-label": withCtx(({ item, ui }) => [item.data?.route && !item.disabled ? (openBlock(), createElementBlock("a", {
						key: 0,
						href: unref(router).resolve(item.data.route).href,
						class: normalizeClass([ui.class, _ctx.$style.creationLink]),
						tabindex: "-1",
						onClick: handleLinkClick
					}, toDisplayString(item.label), 11, _hoisted_1)) : (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(ui.class)
					}, toDisplayString(item.label), 3))]),
					"item-trailing": withCtx(({ item }) => [item.id === "workflow" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.workflow")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)], 64)) : item.id === "credential" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.credential")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)], 64)) : item.id === "create-project" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.project")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : item.disabled ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "right",
						content: unref(projectsLimitReachedMessage)
					}, {
						default: withCtx(() => [!unref(hasPermissionToCreateProjects) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "outline",
							size: "mini",
							class: normalizeClass(_ctx.$style.upgradeButton),
							onClick: withModifiers(($event) => unref(handleMenuSelect)(item.id), ["stop"])
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(upgradeLabel)), 1)]),
							_: 1
						}, 8, ["class", "onClick"]))]),
						_: 2
					}, 1032, ["content"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["items"])) : createCommentVNode("", true),
				!unref(settingsStore).isCanvasOnly ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
					key: 2,
					placement: __props.isCollapsed ? "right" : "bottom",
					"show-after": 500,
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "search",
						"icon-size": "large",
						"aria-label": "Open command palette",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["placement", "label"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: __props.isCollapsed ? "right" : "bottom",
					label: __props.isCollapsed ? unref(i18n).baseText("mainSidebar.state.expand") : unref(i18n).baseText("mainSidebar.state.collapse"),
					"show-after": 500,
					shortcut: { keys: ["["] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						id: "toggle-sidebar-button",
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "panel-left",
						"icon-size": "large",
						"aria-label": "Toggle sidebar",
						onClick: toggleCollapse
					})]),
					_: 1
				}, 8, ["placement", "label"])
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	header: "_header_1y5cs_3",
	collapsed: "_collapsed_1y5cs_16",
	logo: "_logo_1y5cs_21",
	readOnlyEnvironmentIcon: "_readOnlyEnvironmentIcon_1y5cs_29",
	iconButton: "_iconButton_1y5cs_39",
	creationLink: "_creationLink_1y5cs_44",
	upgradeButton: "_upgradeButton_1y5cs_48"
} }]]);
//#endregion
export { BottomMenu_default as n, MainSidebarHeader_default as t };
