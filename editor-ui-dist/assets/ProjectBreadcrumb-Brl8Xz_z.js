import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, bt as withCtx, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { bn as ProjectTypes } from "./workflows.store-Bo6ZgF_O.js";
import { t as isIconOrEmoji } from "./types-BozgK3KO.js";
import { t as ProjectIcon_default } from "./ProjectIcon-Ckn88iUF.js";
//#region src/features/core/folders/components/ProjectBreadcrumb.vue?vue&type=script&setup=true&lang.ts
var ProjectBreadcrumb_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectBreadcrumb",
	props: {
		currentProject: { default: void 0 },
		isDragging: {
			type: Boolean,
			default: false
		},
		isShared: {
			type: Boolean,
			default: false
		},
		icon: { default: void 0 }
	},
	emits: ["projectHover", "projectDrop"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const projectIcon = computed(() => {
			if (props.icon) return props.icon;
			if (props.isShared) return {
				type: "icon",
				value: "share"
			};
			if (props.currentProject?.type === ProjectTypes.Personal) return {
				type: "icon",
				value: "user"
			};
			if (props.currentProject?.name) return isIconOrEmoji(props.currentProject.icon) ? props.currentProject.icon : {
				type: "icon",
				value: "layers"
			};
			return {
				type: "icon",
				value: "house"
			};
		});
		const projectName = computed(() => {
			if (props.isShared) return i18n.baseText("projects.menu.shared");
			if (props.currentProject?.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
			return props.currentProject?.name;
		});
		const projectLink = computed(() => {
			if (props.isShared) return "/shared";
			if (props.currentProject) return `/projects/${props.currentProject.id}`;
			return "/home";
		});
		const onHover = () => {
			emit("projectHover");
		};
		const onProjectMouseUp = () => {
			if (props.isDragging) emit("projectDrop");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass({
					[_ctx.$style["home-project"]]: true,
					[_ctx.$style.dragging]: __props.isDragging
				}),
				"data-test-id": "home-project",
				"data-droppable": "",
				onMouseenter: onHover,
				onMouseup: _cache[0] || (_cache[0] = ($event) => __props.isDragging ? onProjectMouseUp() : null)
			}, [createVNode(unref(N8nLink_default), {
				to: projectLink.value,
				class: normalizeClass([_ctx.$style["project-link"]])
			}, {
				default: withCtx(() => [createVNode(ProjectIcon_default, {
					icon: projectIcon.value,
					"border-less": true,
					size: "mini",
					title: projectName.value
				}, null, 8, ["icon", "title"]), createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-base",
					class: normalizeClass(_ctx.$style["project-label"]),
					title: projectName.value
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(projectName.value), 1)]),
					_: 1
				}, 8, ["class", "title"])]),
				_: 1
			}, 8, ["to", "class"])], 34);
		};
	}
});
//#endregion
//#region src/features/core/folders/components/ProjectBreadcrumb.vue?vue&type=style&index=0&lang.module.scss
var dragging = "_dragging_13lx8_393";
var shimmer = "_shimmer_13lx8_1";
var spin = "_spin_13lx8_1";
var opacityPulse = "_opacityPulse_13lx8_1";
var popoverIn = "_popoverIn_13lx8_1";
var fadeIn = "_fadeIn_13lx8_1";
var collapsibleSlideDown = "_collapsibleSlideDown_13lx8_1";
var collapsibleSlideUp = "_collapsibleSlideUp_13lx8_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_13lx8_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_13lx8_1";
var blurSwapIn = "_blurSwapIn_13lx8_1";
var blurSwapOut = "_blurSwapOut_13lx8_1";
var pulseGlow = "_pulseGlow_13lx8_1";
var pulseGlowDelayed = "_pulseGlowDelayed_13lx8_1";
var fade = "_fade_13lx8_1";
var fadeInUp = "_fadeInUp_13lx8_1";
var fadeInDown = "_fadeInDown_13lx8_1";
var fadeInLeft = "_fadeInLeft_13lx8_1";
var fadeInRight = "_fadeInRight_13lx8_1";
var fadeOut = "_fadeOut_13lx8_1";
var fadeOutDown = "_fadeOutDown_13lx8_1";
var fadeOutUp = "_fadeOutUp_13lx8_1";
var fadeOutLeft = "_fadeOutLeft_13lx8_1";
var fadeOutRight = "_fadeOutRight_13lx8_1";
var ping = "_ping_13lx8_1";
var blinkBackground = "_blinkBackground_13lx8_1";
var typingBlink = "_typingBlink_13lx8_1";
var ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default = {
	"home-project": "_home-project_13lx8_388",
	dragging,
	"project-link": "_project-link_13lx8_406",
	"project-label": "_project-label_13lx8_412",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_13lx8_1",
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
var ProjectBreadcrumb_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectBreadcrumb_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectBreadcrumb_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ProjectBreadcrumb_default as t };
