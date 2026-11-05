import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Gd as createVNode, Kf as unref, Ld as computed, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, ep as init_shared_esm_bundler, ff as renderList, gf as resolveDynamicComponent, pp as normalizeClass, qd as defineComponent, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { CT as DialogHeader_default, ED as N8nText_default, FD as N8nIcon_default, HT as N8nTimeAgo_default, Hy as useToast, Jy as useUsersStore, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, ST as DialogTitle_default, UD as useI18n, Xy as useRootStore, _T as AlertDialog_default, _a as useMCPStore, bT as DialogDescription_default, ba as getClientBrand, ga as useMcp, vT as DialogFooter_default, xT as Dialog_default, xa as scopeLabel, yT as DialogBody_default } from "./app-CfhiRDif.js";
//#region ../../modules/mcp/frontend/src/components/OAuthClientDetailsModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var OAuthClientDetailsModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "OAuthClientDetailsModal",
	props: {
		client: {},
		open: { type: Boolean }
	},
	emits: ["update:open", "revoke"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const brand = computed(() => props.client ? getClientBrand(props.client.name) : null);
		const ownerLabel = computed(() => {
			const owner = props.client?.owner;
			if (!owner) return null;
			const name = [owner.firstName, owner.lastName].filter(Boolean).join(" ");
			return name ? `${name} (${owner.email})` : owner.email;
		});
		const subtitle = computed(() => {
			const type = brand.value?.type;
			if (!type) return i18n.baseText("settings.mcp.oAuthClients.details.subtitle");
			return i18n.baseText("settings.mcp.oAuthClients.details.subtitleWithType", { interpolate: { type: i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`) } });
		});
		/** Granted scopes as human labels, listed plainly in grant order. */
		const grantedScopes = computed(() => props.client?.scopes ?? []);
		function onRevoke() {
			if (!props.client) return;
			emit("revoke", props.client);
			emit("update:open", false);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"data-test-id": "mcp-client-details-modal",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [__props.client ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style["icon-chip"]) }, [brand.value?.icon ? (openBlock(), createBlock(resolveDynamicComponent(brand.value.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "mcp",
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"]))], 2), createTextVNode(" " + toDisplayString(__props.client.name), 1)], 2)]),
							_: 1
						}), createVNode(unref(DialogDescription_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(subtitle.value), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(DialogBody_default), null, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [
							ownerLabel.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
								color: "text-light",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedBy")), 1)]),
								_: 1
							}), createVNode(unref(N8nText_default), {
								color: "text-dark",
								size: "small",
								"data-test-id": "mcp-client-details-connected-by"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(ownerLabel.value), 1)]),
								_: 1
							})], 64)) : createCommentVNode("", true),
							createVNode(unref(N8nText_default), {
								color: "text-light",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedOn")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								color: "text-dark",
								size: "small",
								"data-test-id": "mcp-client-details-connected-on"
							}, {
								default: withCtx(() => [createVNode(unref(N8nTimeAgo_default), {
									date: new Date(__props.client.grantedAt).toISOString(),
									capitalize: "",
									locale: unref(rootStore).defaultLocale
								}, null, 8, ["date", "locale"])]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								color: "text-light",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.access")), 1)]),
								_: 1
							}),
							createBaseVNode("div", {
								class: normalizeClass(_ctx.$style.access),
								"data-test-id": "mcp-client-details-access"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(grantedScopes.value, (scope) => {
								return openBlock(), createBlock(unref(N8nText_default), {
									key: scope,
									color: "text-dark",
									size: "small",
									"data-test-id": `mcp-client-details-scope-${scope}`
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(scopeLabel)(unref(i18n), scope)), 1)]),
									_: 2
								}, 1032, ["data-test-id"]);
							}), 128))], 2)
						], 2)]),
						_: 1
					}),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							"data-test-id": "mcp-client-details-close",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
							_: 1
						}), createVNode(unref(N8nButton_default), {
							variant: "destructive",
							"data-test-id": "mcp-client-details-revoke",
							onClick: onRevoke
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess")), 1)]),
							_: 1
						})]),
						_: 1
					})
				], 64)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open"]);
		};
	}
}), [["__cssModules", { "$style": {
	title: "_title_1ihzg_1",
	"icon-chip": "_icon-chip_1ihzg_7",
	icon: "_icon_1ihzg_7",
	details: "_details_1ihzg_27",
	access: "_access_1ihzg_37"
} }]]);
//#endregion
//#region ../../modules/mcp/frontend/src/components/RevokeOAuthClientConfirmModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region ../../modules/mcp/frontend/src/components/RevokeOAuthClientConfirmModal.vue
var RevokeOAuthClientConfirmModal_default = /* @__PURE__ */ defineComponent({
	__name: "RevokeOAuthClientConfirmModal",
	props: {
		client: {},
		open: { type: Boolean },
		loading: { type: Boolean },
		revokingForOther: { type: Boolean }
	},
	emits: [
		"update:open",
		"confirm",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = computed(() => props.client ? i18n.baseText("settings.mcp.oAuthClients.revoke.title", { interpolate: { name: props.client.name } }) : "");
		const description = computed(() => {
			if (!props.client) return "";
			if (props.revokingForOther) {
				const owner = props.client.owner;
				const ownerName = [owner?.firstName, owner?.lastName].filter(Boolean).join(" ") || owner?.email || "";
				return i18n.baseText("settings.mcp.oAuthClients.revoke.description.other", { interpolate: { ownerName } });
			}
			return i18n.baseText("settings.mcp.oAuthClients.revoke.description.own");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialog_default), {
				open: __props.open,
				title: title.value,
				description: description.value,
				"action-label": unref(i18n).baseText("settings.mcp.oAuthClients.revoke.button"),
				"cancel-label": unref(i18n).baseText("generic.cancel"),
				"action-variant": "destructive",
				loading: __props.loading,
				size: "medium",
				"data-test-id": "mcp-client-revoke-confirm",
				onAction: _cache[0] || (_cache[0] = ($event) => emit("confirm")),
				onCancel: _cache[1] || (_cache[1] = ($event) => emit("cancel")),
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, null, 8, [
				"open",
				"title",
				"description",
				"action-label",
				"cancel-label",
				"loading"
			]);
		};
	}
});
//#endregion
//#region ../../modules/mcp/frontend/src/composables/useOAuthClientRevoke.ts
init_reactivity_esm_bundler();
/**
* The confirm-then-revoke flow for a connected client, shared by the settings
* overview and the clients page. `requestRevoke` opens the confirmation (the
* pending client is the dialog's `open` state), `confirmRevoke` performs the
* revoke and reports it, `cancelRevoke` dismisses.
*
* `onRevoked` runs after a successful revoke so the caller can refresh its own
* view of the data. It owns its error handling: the revoke already succeeded,
* so a failed refresh must not be reported as a failed revoke.
*
* `refreshList` (default true) refetches the clients page's list after the
* revoke. Callers that don't render that list (the overview) turn it off and
* refresh their own data in `onRevoked`, so the list's persisted ownership and
* filters are never requested from a page that doesn't show them.
*/
function useOAuthClientRevoke(options = {}) {
	const i18n = useI18n();
	const toast = useToast();
	const mcp = useMcp();
	const mcpStore = useMCPStore();
	const usersStore = useUsersStore();
	const revokeClient = ref(null);
	const revoking = ref(false);
	/** An admin revoking someone else's grant rather than their own. */
	const isRevokingForOther = (client) => !!client.owner && client.owner.id !== usersStore.currentUser?.id;
	const requestRevoke = (client) => {
		revokeClient.value = client;
	};
	const cancelRevoke = () => {
		revokeClient.value = null;
	};
	const confirmRevoke = async () => {
		const client = revokeClient.value;
		if (!client) return;
		let revoked = false;
		try {
			revoking.value = true;
			await mcpStore.removeOAuthClient(client.id, client.owner?.id, { refreshList: options.refreshList ?? true });
			revoked = true;
			mcp.trackClientAccessRevoked({
				clientId: client.id,
				clientName: client.name,
				revokedForOther: isRevokingForOther(client)
			});
			toast.showMessage({
				type: "success",
				title: i18n.baseText("settings.mcp.oAuthClients.revoke.success.title"),
				message: i18n.baseText("settings.mcp.oAuthClients.revoke.success.message", { interpolate: { name: client.name } })
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("settings.mcp.oAuthClients.revoke.error"));
		} finally {
			revoking.value = false;
			revokeClient.value = null;
		}
		if (revoked) await options.onRevoked?.();
	};
	return {
		revokeClient,
		revoking,
		isRevokingForOther,
		requestRevoke,
		cancelRevoke,
		confirmRevoke
	};
}
//#endregion
export { RevokeOAuthClientConfirmModal_default as n, OAuthClientDetailsModal_default as r, useOAuthClientRevoke as t };
