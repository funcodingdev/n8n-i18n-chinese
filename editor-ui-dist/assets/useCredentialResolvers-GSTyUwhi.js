import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, I as h, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { Cn as deleteCredentialResolver, Dn as getCredentialResolvers, En as getCredentialResolverWorkflows, Tn as getCredentialResolverTypes, t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { Kr as CREDENTIAL_RESOLVER_EDIT_MODAL_KEY } from "./constants-DPRLSskW.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
//#region src/features/resolvers/components/ResolverDeleteConfirmMessage.vue?vue&type=script&setup=true&lang.ts
var MAX_DISPLAYED_WORKFLOWS = 5;
var ResolverDeleteConfirmMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResolverDeleteConfirmMessage",
	props: {
		resolverName: {},
		affectedWorkflows: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const displayed = computed(() => props.affectedWorkflows.slice(0, MAX_DISPLAYED_WORKFLOWS));
		const remaining = computed(() => props.affectedWorkflows.length - displayed.value.length);
		const messageKey = computed(() => props.affectedWorkflows.length > 0 ? "credentialResolverEdit.confirmMessage.deleteResolver.messageWithWorkflows" : "credentialResolverEdit.confirmMessage.deleteResolver.message");
		const messageParts = computed(() => {
			const [before, after] = i18n.baseText(messageKey.value, { interpolate: { savedResolverName: "{{RESOLVER_NAME}}" } }).split("{{RESOLVER_NAME}}");
			return {
				before,
				after
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [
						createTextVNode(toDisplayString(messageParts.value.before), 1),
						createVNode(unref(N8nText_default), {
							bold: "",
							tag: "span"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(props.resolverName), 1)]),
							_: 1
						}),
						createTextVNode(toDisplayString(messageParts.value.after), 1)
					]),
					_: 1
				}),
				__props.affectedWorkflows.length > 0 ? (openBlock(), createElementBlock("ul", {
					key: 0,
					class: normalizeClass(_ctx.$style.workflowList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayed.value, (workflow) => {
					return openBlock(), createElementBlock("li", {
						key: workflow.id,
						class: normalizeClass(_ctx.$style.workflowItem)
					}, [createVNode(unref(N8nLink_default), {
						href: unref(router).resolve({
							name: unref(VIEWS).WORKFLOW,
							params: { workflowId: workflow.id }
						}).href,
						"new-window": ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(workflow.name), 1)]),
						_: 2
					}, 1032, ["href"])], 2);
				}), 128))], 2)) : createCommentVNode("", true),
				remaining.value > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolverEdit.confirmMessage.deleteResolver.andMore", { interpolate: { count: String(remaining.value) } })), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/resolvers/components/ResolverDeleteConfirmMessage.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_13pps_388";
var workflowList = "_workflowList_13pps_394";
var workflowItem = "_workflowItem_13pps_400";
var shimmer = "_shimmer_13pps_1";
var spin = "_spin_13pps_1";
var opacityPulse = "_opacityPulse_13pps_1";
var popoverIn = "_popoverIn_13pps_1";
var fadeIn = "_fadeIn_13pps_1";
var collapsibleSlideDown = "_collapsibleSlideDown_13pps_1";
var collapsibleSlideUp = "_collapsibleSlideUp_13pps_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_13pps_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_13pps_1";
var blurSwapIn = "_blurSwapIn_13pps_1";
var blurSwapOut = "_blurSwapOut_13pps_1";
var pulseGlow = "_pulseGlow_13pps_1";
var pulseGlowDelayed = "_pulseGlowDelayed_13pps_1";
var fade = "_fade_13pps_1";
var fadeInUp = "_fadeInUp_13pps_1";
var fadeInDown = "_fadeInDown_13pps_1";
var fadeInLeft = "_fadeInLeft_13pps_1";
var fadeInRight = "_fadeInRight_13pps_1";
var fadeOut = "_fadeOut_13pps_1";
var fadeOutDown = "_fadeOutDown_13pps_1";
var fadeOutUp = "_fadeOutUp_13pps_1";
var fadeOutLeft = "_fadeOutLeft_13pps_1";
var fadeOutRight = "_fadeOutRight_13pps_1";
var ping = "_ping_13pps_1";
var blinkBackground = "_blinkBackground_13pps_1";
var typingBlink = "_typingBlink_13pps_1";
var ResolverDeleteConfirmMessage_vue_vue_type_style_index_0_lang_module_default = {
	container,
	workflowList,
	workflowItem,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_13pps_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var ResolverDeleteConfirmMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResolverDeleteConfirmMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResolverDeleteConfirmMessage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/resolvers/composables/useCredentialResolvers.ts
function useCredentialResolvers() {
	const rootStore = useRootStore();
	const uiStore = useUIStore();
	const message = useMessage();
	const toast = useToast();
	const i18n = useI18n();
	const resolvers = ref([]);
	const resolverTypes = ref([]);
	const isLoading = ref(false);
	const isDeleting = ref(false);
	const fetchResolvers = async (options = {}) => {
		try {
			isLoading.value = true;
			resolvers.value = await getCredentialResolvers(rootStore.restApiContext, options);
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("workflowSettings.showError.fetchSettings.title"));
			return false;
		} finally {
			isLoading.value = false;
		}
	};
	const fetchResolverTypes = async () => {
		try {
			resolverTypes.value = await getCredentialResolverTypes(rootStore.restApiContext);
		} catch (error) {
			toast.showError(error, i18n.baseText("credentialResolverEdit.error.loadTypes"));
		}
	};
	const confirmAndDeleteResolver = async (resolver) => {
		let affectedWorkflows = [];
		try {
			affectedWorkflows = await getCredentialResolverWorkflows(rootStore.restApiContext, resolver.id);
		} catch {}
		const confirmMessage = h(ResolverDeleteConfirmMessage_default, {
			resolverName: resolver.name,
			affectedWorkflows
		});
		if (await message.confirm(confirmMessage, i18n.baseText("credentialResolverEdit.confirmMessage.deleteResolver.headline"), {
			confirmButtonText: i18n.baseText("credentialResolverEdit.confirmMessage.deleteResolver.confirmButtonText"),
			customClass: "el-message-box--destructive",
			showClose: true
		}) !== "confirm") return false;
		try {
			isDeleting.value = true;
			await deleteCredentialResolver(rootStore.restApiContext, resolver.id);
			toast.showMessage({
				title: i18n.baseText("credentialResolverEdit.deleteSuccess.title"),
				type: "success"
			});
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("credentialResolverEdit.error.delete"));
			return false;
		} finally {
			isDeleting.value = false;
		}
	};
	const refreshResolvers = async () => await fetchResolvers();
	const openCreateModal = (callbacks) => {
		uiStore.openModalWithData({
			name: CREDENTIAL_RESOLVER_EDIT_MODAL_KEY,
			data: { onSave: callbacks?.onSave ?? refreshResolvers }
		});
	};
	const openEditModal = (resolverId, callbacks) => {
		uiStore.openModalWithData({
			name: CREDENTIAL_RESOLVER_EDIT_MODAL_KEY,
			data: {
				resolverId,
				onSave: callbacks?.onSave ?? refreshResolvers,
				onDelete: callbacks?.onDelete ?? refreshResolvers
			}
		});
	};
	return {
		resolvers,
		resolverTypes,
		isLoading,
		isDeleting,
		fetchResolvers,
		fetchResolverTypes,
		deleteResolver: confirmAndDeleteResolver,
		openCreateModal,
		openEditModal
	};
}
//#endregion
export { useCredentialResolvers as t };
