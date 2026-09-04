import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, ot as resolveDirective, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { Gn as getAppNameFromNodeName, P as getNodeTypeDisplayableCredentials, V as useNodeTypesStore, wt as useCredentialsStore } from "./workflows.store-qP-dtzSs.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as require_sortBy } from "./sortBy-CmiWfS8c.js";
import { n as keyFromCredentialTypeAndName, r as normalizeTemplateNodeCredentials } from "./templateTransforms-BzkJodJR.js";
import { t as NodeIcon_default } from "./NodeIcon-BEjbYzbB.js";
import { t as CredentialPicker_default } from "./CredentialPicker-D3gH084l.js";
//#region src/features/workflows/templates/composables/useCredentialSetupState.ts
var import_sortBy = /* @__PURE__ */ __toESM(require_sortBy(), 1);
/**
* Returns the nodes in the template that require credentials
* and the required credentials for each node.
*/
var getNodesRequiringCredentials = (nodeTypeProvider, nodes) => {
	return nodes.map((node) => ({
		node,
		requiredCredentials: getNodeTypeDisplayableCredentials(nodeTypeProvider, node)
	})).filter(({ requiredCredentials }) => requiredCredentials.length > 0);
};
var groupNodeCredentialsByKey = (nodeWithRequiredCredentials) => {
	const credentialsByTypeName = /* @__PURE__ */ new Map();
	for (const { node, requiredCredentials } of nodeWithRequiredCredentials) {
		const normalizedNodeCreds = node.credentials ? normalizeTemplateNodeCredentials(node.credentials) : {};
		for (const credentialDescription of requiredCredentials) {
			const credentialType = credentialDescription.name;
			const nodeCredentialName = normalizedNodeCreds[credentialDescription.name] ?? "";
			const key = keyFromCredentialTypeAndName(credentialType, nodeCredentialName);
			let credentialUsages = credentialsByTypeName.get(key);
			if (!credentialUsages) {
				credentialUsages = {
					key,
					nodeTypeName: node.type,
					credentialName: nodeCredentialName,
					credentialType,
					usedBy: []
				};
				credentialsByTypeName.set(key, credentialUsages);
			}
			credentialUsages.usedBy.push(node);
		}
	}
	return credentialsByTypeName;
};
var getAppCredentials = (credentialUsages, getAppNameByNodeType) => {
	const credentialsByAppName = /* @__PURE__ */ new Map();
	for (const credentialUsage of credentialUsages) {
		const nodeTypeName = credentialUsage.nodeTypeName;
		const appName = getAppNameByNodeType(nodeTypeName) ?? nodeTypeName;
		const appCredentials = credentialsByAppName.get(appName);
		if (appCredentials) appCredentials.credentials.push(credentialUsage);
		else credentialsByAppName.set(appName, {
			appName,
			credentials: [credentialUsage]
		});
	}
	return Array.from(credentialsByAppName.values());
};
var useCredentialSetupState = (nodes) => {
	/**
	* Credentials user has selected from the UI. Map from credential
	* name in the template to the credential ID.
	*/
	const selectedCredentialIdByKey = ref({});
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const appNameByNodeType = (nodeTypeName, version) => {
		const nodeType = nodeTypesStore.getNodeType(nodeTypeName, version);
		return nodeType ? getAppNameFromNodeName(nodeType.displayName) : nodeTypeName;
	};
	const nodesRequiringCredentialsSorted = computed(() => {
		return (0, import_sortBy.default)(nodes.value ? getNodesRequiringCredentials(nodeTypesStore, nodes.value) : [], ({ node }) => node.position[0]);
	});
	const credentialsByKey = computed(() => {
		return groupNodeCredentialsByKey(nodesRequiringCredentialsSorted.value);
	});
	const credentialUsages = computed(() => {
		return Array.from(credentialsByKey.value.values());
	});
	const appCredentials = computed(() => {
		return getAppCredentials(credentialUsages.value, appNameByNodeType);
	});
	const credentialOverrides = computed(() => {
		const overrides = {};
		for (const [key, credentialId] of Object.entries(selectedCredentialIdByKey.value)) {
			const credential = credentialsStore.getCredentialById(credentialId);
			if (!credential) continue;
			overrides[key] = {
				id: credentialId,
				name: credential.name
			};
		}
		return overrides;
	});
	const numFilledCredentials = computed(() => {
		return Object.keys(selectedCredentialIdByKey.value).length;
	});
	const setSelectedCredentialId = (credentialKey, credentialId) => {
		selectedCredentialIdByKey.value[credentialKey] = credentialId;
	};
	const unsetSelectedCredential = (credentialKey) => {
		delete selectedCredentialIdByKey.value[credentialKey];
	};
	return {
		appCredentials,
		credentialOverrides,
		credentialUsages,
		credentialsByKey,
		nodesRequiringCredentialsSorted,
		numFilledCredentials,
		selectedCredentialIdByKey,
		setSelectedCredentialId,
		unsetSelectedCredential
	};
};
//#endregion
//#region src/app/utils/formatters/listFormatter.ts
/**
* Formats a list of items into a string. Each item is formatted using
* the given function and the are separated by a comma except for the last
* item which is separated by "and".
*
* @example
* formatList(['a', 'b', 'c'], {
*   formatFn: (x) => `"${x}"`
*   i18n
* });
* // => '"a", "b" and "c"'
*/
var formatList = (list, opts) => {
	const { i18n, formatFn } = opts;
	if (list.length === 0) return "";
	if (list.length === 1) return formatFn(list[0]);
	const allButLast = list.slice(0, -1);
	const last = list[list.length - 1];
	return `${allButLast.map(formatFn).join(", ")} ${i18n.baseText("generic.and")} ${formatFn(last)}`;
};
//#endregion
//#region src/features/workflows/templates/components/AppsRequiringCredsNotice.vue?vue&type=script&setup=true&lang.ts
var AppsRequiringCredsNotice_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppsRequiringCredsNotice",
	props: {
		appCredentials: {},
		source: {}
	},
	setup(__props) {
		const i18n = useI18n();
		const props = __props;
		const instructionsKey = computed(() => {
			if (props.source === "builder") return "templateSetup.instructions.builder";
			return "templateSetup.instructions";
		});
		const formatApp = (app) => `<b>${app.credentials.length}x ${app.appName}</b>`;
		const appNodeCounts = computed(() => {
			return formatList(props.appCredentials, {
				formatFn: formatApp,
				i18n
			});
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(unref(N8nNotice_default), {
				class: normalizeClass(_ctx.$style.notice),
				theme: "info"
			}, {
				default: withCtx(() => [createVNode(unref(I18nT), {
					tag: "span",
					keypath: instructionsKey.value,
					scope: "global"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, appNodeCounts.value]])]),
					_: 1
				}, 8, ["keypath"])]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/components/AppsRequiringCredsNotice.vue?vue&type=style&index=0&lang.module.scss
var notice = "_notice_19m2p_388";
var shimmer$1 = "_shimmer_19m2p_1";
var spin$1 = "_spin_19m2p_1";
var opacityPulse$1 = "_opacityPulse_19m2p_1";
var popoverIn$1 = "_popoverIn_19m2p_1";
var fadeIn$1 = "_fadeIn_19m2p_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_19m2p_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_19m2p_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_19m2p_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_19m2p_1";
var blurSwapIn$1 = "_blurSwapIn_19m2p_1";
var blurSwapOut$1 = "_blurSwapOut_19m2p_1";
var pulseGlow$1 = "_pulseGlow_19m2p_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_19m2p_1";
var fade$1 = "_fade_19m2p_1";
var fadeInUp$1 = "_fadeInUp_19m2p_1";
var fadeInDown$1 = "_fadeInDown_19m2p_1";
var fadeInLeft$1 = "_fadeInLeft_19m2p_1";
var fadeInRight$1 = "_fadeInRight_19m2p_1";
var fadeOut$1 = "_fadeOut_19m2p_1";
var fadeOutDown$1 = "_fadeOutDown_19m2p_1";
var fadeOutUp$1 = "_fadeOutUp_19m2p_1";
var fadeOutLeft$1 = "_fadeOutLeft_19m2p_1";
var fadeOutRight$1 = "_fadeOutRight_19m2p_1";
var ping$1 = "_ping_19m2p_1";
var blinkBackground$1 = "_blinkBackground_19m2p_1";
var typingBlink$1 = "_typingBlink_19m2p_1";
var AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default = {
	notice,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_19m2p_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var AppsRequiringCredsNotice_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AppsRequiringCredsNotice_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/components/IconSuccess.vue
var _sfc_main = {};
var _hoisted_1 = { class: "el-icon-success" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("i", _hoisted_1);
}
var IconSuccess_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-563d175d"]]);
//#endregion
//#region src/features/workflows/templates/components/SetupTemplateFormStep.vue?vue&type=script&setup=true&lang.ts
var SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupTemplateFormStep",
	props: {
		order: {},
		credentials: {},
		selectedCredentialId: { default: null },
		source: {}
	},
	emits: ["credentialSelected", "credentialDeselected"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const node = computed(() => props.credentials.usedBy[0]);
		const nodeType = computed(() => nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion));
		const appName = computed(() => nodeType.value ? getAppNameFromNodeName(nodeType.value.displayName) : node.value.type);
		const nodeNames = computed(() => {
			const formatNodeName = (nodeToFormat) => `<b>${nodeToFormat.name}</b>`;
			return formatList(props.credentials.usedBy, {
				formatFn: formatNodeName,
				i18n
			});
		});
		const credentialDescriptionKey = computed(() => {
			if (props.source === "builder") return "templateSetup.credential.description.builder";
			return "templateSetup.credential.description";
		});
		const onCredentialModalOpened = () => {
			telemetry.track("User opened Credential modal", {
				source: "cred_setup",
				credentialType: props.credentials.credentialType,
				new_credential: !props.selectedCredentialId
			});
		};
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("li", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "setup-credentials-form-step"
			}, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [nodeType.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.heading),
						"data-test-id": "credential-step-heading"
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.headingOrder) }, toDisplayString(__props.order) + ".", 3),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.headingIcon) }, [createVNode(NodeIcon_default, { "node-type": nodeType.value }, null, 8, ["node-type"])], 2),
						createTextVNode(" " + toDisplayString(appName.value), 1)
					], 2)) : createCommentVNode("", true)]),
					_: 1
				}),
				createBaseVNode("p", {
					class: normalizeClass(_ctx.$style.description),
					"data-test-id": "credential-step-description"
				}, [createVNode(unref(I18nT), {
					tag: "span",
					keypath: credentialDescriptionKey.value,
					plural: __props.credentials.usedBy.length,
					scope: "global"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, nodeNames.value]])]),
					_: 1
				}, 8, ["keypath", "plural"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentials) }, [createVNode(CredentialPicker_default, {
					class: normalizeClass(_ctx.$style.credentialPicker),
					"app-name": appName.value,
					"credential-type": props.credentials.credentialType,
					"selected-credential-id": __props.selectedCredentialId,
					onCredentialSelected: _cache[0] || (_cache[0] = ($event) => emit("credentialSelected", {
						credentialUsageKey: _ctx.$props.credentials.key,
						credentialId: $event
					})),
					onCredentialDeselected: _cache[1] || (_cache[1] = ($event) => emit("credentialDeselected", { credentialUsageKey: _ctx.$props.credentials.key })),
					onCredentialModalOpened
				}, null, 8, [
					"class",
					"app-name",
					"credential-type",
					"selected-credential-id"
				]), createVNode(IconSuccess_default, { class: normalizeClass({
					[_ctx.$style.credentialOk]: true,
					[_ctx.$style.invisible]: !__props.selectedCredentialId
				}) }, null, 8, ["class"])], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/components/SetupTemplateFormStep.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_11vu1_388";
var heading = "_heading_11vu1_392";
var headingOrder = "_headingOrder_11vu1_398";
var headingIcon = "_headingIcon_11vu1_403";
var description = "_description_11vu1_407";
var credentials = "_credentials_11vu1_413";
var credentialPicker = "_credentialPicker_11vu1_419";
var credentialOk = "_credentialOk_11vu1_423";
var invisible = "_invisible_11vu1_428";
var shimmer = "_shimmer_11vu1_1";
var spin = "_spin_11vu1_1";
var opacityPulse = "_opacityPulse_11vu1_1";
var popoverIn = "_popoverIn_11vu1_1";
var fadeIn = "_fadeIn_11vu1_1";
var collapsibleSlideDown = "_collapsibleSlideDown_11vu1_1";
var collapsibleSlideUp = "_collapsibleSlideUp_11vu1_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_11vu1_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_11vu1_1";
var blurSwapIn = "_blurSwapIn_11vu1_1";
var blurSwapOut = "_blurSwapOut_11vu1_1";
var pulseGlow = "_pulseGlow_11vu1_1";
var pulseGlowDelayed = "_pulseGlowDelayed_11vu1_1";
var fade = "_fade_11vu1_1";
var fadeInUp = "_fadeInUp_11vu1_1";
var fadeInDown = "_fadeInDown_11vu1_1";
var fadeInLeft = "_fadeInLeft_11vu1_1";
var fadeInRight = "_fadeInRight_11vu1_1";
var fadeOut = "_fadeOut_11vu1_1";
var fadeOutDown = "_fadeOutDown_11vu1_1";
var fadeOutUp = "_fadeOutUp_11vu1_1";
var fadeOutLeft = "_fadeOutLeft_11vu1_1";
var fadeOutRight = "_fadeOutRight_11vu1_1";
var ping = "_ping_11vu1_1";
var blinkBackground = "_blinkBackground_11vu1_1";
var typingBlink = "_typingBlink_11vu1_1";
var SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default = {
	container,
	heading,
	headingOrder,
	headingIcon,
	description,
	credentials,
	credentialPicker,
	credentialOk,
	invisible,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_11vu1_1",
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
var SetupTemplateFormStep_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AppsRequiringCredsNotice_default as n, useCredentialSetupState as r, SetupTemplateFormStep_default as t };
