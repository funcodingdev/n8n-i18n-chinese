import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nNodeIcon_default } from "./N8nNodeIcon-85L9TdKh.js";
import { $n as getThemedValue, V as useNodeTypesStore, wt as useCredentialsStore } from "./workflows.store-QD0eo9S6.js";
import { t as useRootStore } from "./useRootStore-CvqfnFUt.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
import { n as getNodeIconSource } from "./nodeIcon-BBqyEJm7.js";
//#region src/features/credentials/components/CredentialIcon.vue?vue&type=script&setup=true&lang.ts
var CredentialIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialIcon",
	props: {
		credentialTypeName: {},
		size: {},
		theme: {}
	},
	setup(__props) {
		const props = __props;
		const credentialsStore = useCredentialsStore();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const credentialWithIcon = computed(() => getCredentialWithIcon(props.credentialTypeName));
		const theme = computed(() => props.theme ?? uiStore.appliedTheme);
		const referencedNodeIconSource = computed(() => {
			const icon = getThemedValue(credentialWithIcon.value?.icon, theme.value);
			if (!icon?.startsWith("node:")) return void 0;
			const nodeType = nodeTypesStore.getNodeType(icon.replace("node:", ""));
			if (nodeType) return getNodeIconSource(nodeType, null, null);
			return {
				type: "icon",
				name: icon
			};
		});
		const iconSource = computed(() => {
			if (referencedNodeIconSource.value?.type === "file") return referencedNodeIconSource.value.src;
			const themeIconUrl = getThemedValue(credentialWithIcon.value?.iconUrl, theme.value);
			if (!themeIconUrl) return void 0;
			return rootStore.baseUrl + themeIconUrl;
		});
		const iconType = computed(() => {
			if (iconSource.value) return "file";
			else if (iconName.value) return "icon";
			return "unknown";
		});
		const iconName = computed(() => {
			if (referencedNodeIconSource.value?.type === "icon") return referencedNodeIconSource.value.name;
			const icon = getThemedValue(credentialWithIcon.value?.icon, theme.value);
			if (!icon?.startsWith("fa:")) return void 0;
			return icon.replace("fa:", "");
		});
		const iconColor = computed(() => {
			if (referencedNodeIconSource.value?.type === "icon" && referencedNodeIconSource.value.color) return referencedNodeIconSource.value.color;
			const { iconColor: color } = credentialWithIcon.value ?? {};
			if (!color) return void 0;
			return `var(--node--icon--color--${color})`;
		});
		function getCredentialWithIcon(name) {
			if (!name) return null;
			const type = credentialsStore.getCredentialTypeByName(name);
			if (!type) return null;
			if (type.icon ?? type.iconUrl) return type;
			if (type.extends) {
				let parentCred = null;
				type.extends.forEach((credType) => {
					parentCred = getCredentialWithIcon(credType);
					if (parentCred !== null) return;
				});
				return parentCred;
			}
			return null;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeIcon_default), {
				class: normalizeClass(_ctx.$style.icon),
				type: iconType.value,
				size: __props.size ?? 26,
				src: iconSource.value,
				name: iconName.value,
				color: iconColor.value
			}, null, 8, [
				"class",
				"type",
				"size",
				"src",
				"name",
				"color"
			]);
		};
	}
});
//#endregion
//#region src/features/credentials/components/CredentialIcon.vue?vue&type=style&index=0&lang.module.scss
var icon = "_icon_ybeqc_388";
var shimmer = "_shimmer_ybeqc_1";
var spin = "_spin_ybeqc_1";
var opacityPulse = "_opacityPulse_ybeqc_1";
var popoverIn = "_popoverIn_ybeqc_1";
var fadeIn = "_fadeIn_ybeqc_1";
var collapsibleSlideDown = "_collapsibleSlideDown_ybeqc_1";
var collapsibleSlideUp = "_collapsibleSlideUp_ybeqc_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_ybeqc_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_ybeqc_1";
var blurSwapIn = "_blurSwapIn_ybeqc_1";
var blurSwapOut = "_blurSwapOut_ybeqc_1";
var pulseGlow = "_pulseGlow_ybeqc_1";
var pulseGlowDelayed = "_pulseGlowDelayed_ybeqc_1";
var fade = "_fade_ybeqc_1";
var fadeInUp = "_fadeInUp_ybeqc_1";
var fadeInDown = "_fadeInDown_ybeqc_1";
var fadeInLeft = "_fadeInLeft_ybeqc_1";
var fadeInRight = "_fadeInRight_ybeqc_1";
var fadeOut = "_fadeOut_ybeqc_1";
var fadeOutDown = "_fadeOutDown_ybeqc_1";
var fadeOutUp = "_fadeOutUp_ybeqc_1";
var fadeOutLeft = "_fadeOutLeft_ybeqc_1";
var fadeOutRight = "_fadeOutRight_ybeqc_1";
var ping = "_ping_ybeqc_1";
var blinkBackground = "_blinkBackground_ybeqc_1";
var typingBlink = "_typingBlink_ybeqc_1";
var CredentialIcon_vue_vue_type_style_index_0_lang_module_default = {
	icon,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_ybeqc_1",
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
var CredentialIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CredentialIcon_default as t };
