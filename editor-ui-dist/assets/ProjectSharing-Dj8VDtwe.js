import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as N8nAvatar_default } from "./N8nAvatar-BN7Hde99.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { bn as ProjectTypes, hn as splitName } from "./workflows.store-Bo6ZgF_O.js";
import { t as isIconOrEmoji } from "./types-BozgK3KO.js";
import "./constants-DPRLSskW.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { t as ProjectIcon_default } from "./ProjectIcon-Ckn88iUF.js";
//#region src/features/collaboration/projects/components/ProjectSharingInfo.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var ProjectSharingInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSharingInfo",
	props: { project: {} },
	setup(__props) {
		const props = __props;
		const processedName = computed(() => {
			const { name, email } = splitName(props.project.name ?? "");
			const nameArray = name?.split(" ");
			const lastName = nameArray?.pop() ?? "";
			return {
				firstName: nameArray?.join(" ") ?? "",
				lastName,
				email
			};
		});
		const projectIcon = computed(() => {
			if (props.project.icon && isIconOrEmoji(props.project.icon)) return props.project.icon;
			return null;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.projectInfo),
				"data-test-id": "project-sharing-info"
			}, [createBaseVNode("div", null, [projectIcon.value ? (openBlock(), createBlock(ProjectIcon_default, {
				key: 0,
				icon: projectIcon.value,
				size: "large",
				round: true
			}, null, 8, ["icon"])) : (openBlock(), createBlock(unref(N8nAvatar_default), {
				key: 1,
				"first-name": processedName.value.firstName,
				"last-name": processedName.value.lastName
			}, null, 8, ["first-name", "last-name"])), createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [processedName.value.firstName || processedName.value.lastName ? (openBlock(), createElementBlock("p", _hoisted_1, toDisplayString(processedName.value.firstName) + " " + toDisplayString(processedName.value.lastName), 1)) : createCommentVNode("", true), createBaseVNode("small", null, toDisplayString(processedName.value.email), 1)], 2)]), renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectSharingInfo.vue?vue&type=style&index=0&lang.module.scss
var projectInfo = "_projectInfo_vldka_388";
var text = "_text_vldka_413";
var shimmer$1 = "_shimmer_vldka_1";
var spin$1 = "_spin_vldka_1";
var opacityPulse$1 = "_opacityPulse_vldka_1";
var popoverIn$1 = "_popoverIn_vldka_1";
var fadeIn$1 = "_fadeIn_vldka_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_vldka_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_vldka_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_vldka_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_vldka_1";
var blurSwapIn$1 = "_blurSwapIn_vldka_1";
var blurSwapOut$1 = "_blurSwapOut_vldka_1";
var pulseGlow$1 = "_pulseGlow_vldka_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_vldka_1";
var fade$1 = "_fade_vldka_1";
var fadeInUp$1 = "_fadeInUp_vldka_1";
var fadeInDown$1 = "_fadeInDown_vldka_1";
var fadeInLeft$1 = "_fadeInLeft_vldka_1";
var fadeInRight$1 = "_fadeInRight_vldka_1";
var fadeOut$1 = "_fadeOut_vldka_1";
var fadeOutDown$1 = "_fadeOutDown_vldka_1";
var fadeOutUp$1 = "_fadeOutUp_vldka_1";
var fadeOutLeft$1 = "_fadeOutLeft_vldka_1";
var fadeOutRight$1 = "_fadeOutRight_vldka_1";
var ping$1 = "_ping_vldka_1";
var blinkBackground$1 = "_blinkBackground_vldka_1";
var typingBlink$1 = "_typingBlink_vldka_1";
var ProjectSharingInfo_vue_vue_type_style_index_0_lang_module_default = {
	projectInfo,
	text,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_vldka_1",
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
var ProjectSharingInfo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectSharingInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSharingInfo_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/collaboration/projects/components/ProjectSharing.vue?vue&type=script&setup=true&lang.ts
var ProjectSharing_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSharing",
	props: /* @__PURE__ */ mergeModels({
		searchFn: { type: Function },
		filterFn: { type: Function },
		homeProject: {},
		roles: {},
		readonly: { type: Boolean },
		static: { type: Boolean },
		placeholder: {},
		emptyOptionsText: {},
		size: {},
		clearable: { type: Boolean },
		canShareGlobally: { type: Boolean },
		isSharedGlobally: { type: Boolean },
		allUsersLabel: {},
		disabledTooltip: {},
		showSuffix: { type: Boolean }
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"projectAdded",
		"projectRemoved",
		"clear",
		"update:shareWithAllUsers"
	], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const locale = useI18n();
		const props = __props;
		const GLOBAL_GROUP = {
			id: "all_users",
			name: props.allUsersLabel ?? locale.baseText("projects.sharing.allUsers"),
			type: "public",
			icon: {
				type: "icon",
				value: "globe"
			},
			role: "member",
			createdAt: `${Date.now()}`,
			updatedAt: `${Date.now()}`
		};
		const model = useModel(__props, "modelValue");
		const emit = __emit;
		const selectedProject = ref(Array.isArray(model.value) ? "" : model.value?.id ?? "");
		const selectedProjects = computed(() => {
			if (!Array.isArray(model.value)) return null;
			return props.isSharedGlobally ? [GLOBAL_GROUP, ...model.value] : model.value;
		});
		const selectPlaceholder = computed(() => props.placeholder ?? locale.baseText("projects.sharing.select.placeholder"));
		const noDataText = computed(() => props.emptyOptionsText ?? locale.baseText("projects.sharing.noMatchingUsers"));
		const searchResults = ref([]);
		const searchCount = ref(0);
		const filter = ref("");
		const filteredProjects = computed(() => {
			let list = searchResults.value;
			if (props.filterFn) list = list.filter(props.filterFn);
			if (props.homeProject) list = list.filter((p) => p.id !== props.homeProject.id);
			if (Array.isArray(model.value)) {
				const selected = model.value;
				list = list.filter((p) => !selected.find((s) => s.id === p.id));
			}
			return list;
		});
		const sortedProjects = computed(() => {
			const projects = [...filteredProjects.value].sort((projectA, projectB) => (projectA.name ?? "").localeCompare(projectB.name ?? ""));
			return [...props.canShareGlobally && !props.isSharedGlobally ? [GLOBAL_GROUP] : [], ...projects];
		});
		const moreResultsCount = computed(() => {
			return Math.max(0, searchCount.value - searchResults.value.length);
		});
		const projectIcon = computed(() => {
			const defaultIcon = {
				type: "icon",
				value: "layers"
			};
			const project = searchResults.value.find((p) => p.id === selectedProject.value);
			if (project?.type === ProjectTypes.Personal) return {
				type: "icon",
				value: "user"
			};
			else if (project?.type === ProjectTypes.Team) return isIconOrEmoji(project.icon) ? project.icon : defaultIcon;
			return defaultIcon;
		});
		let searchGeneration = 0;
		const executeSearch = async (query) => {
			const generation = ++searchGeneration;
			try {
				const result = await props.searchFn(query);
				if (generation !== searchGeneration) return;
				searchResults.value = result.data ?? [];
				searchCount.value = result.count ?? 0;
			} catch {
				if (generation !== searchGeneration) return;
				searchResults.value = [];
				searchCount.value = 0;
			}
		};
		const debouncedSearch = useDebounceFn(executeSearch, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const setFilter = (query) => {
			filter.value = query;
			debouncedSearch(query);
		};
		onMounted(() => {
			executeSearch("");
		});
		const onProjectSelected = (projectId) => {
			if (projectId === GLOBAL_GROUP.id) {
				emit("update:shareWithAllUsers", true);
				return;
			}
			const project = searchResults.value.find((p) => p.id === projectId);
			if (!project) return;
			if (Array.isArray(model.value)) model.value = [...model.value, project];
			else model.value = project;
			emit("projectAdded", project);
		};
		const onRoleAction = (project, role) => {
			if (!Array.isArray(model.value) || props.readonly) return;
			if (project.id === GLOBAL_GROUP.id && role === "remove") {
				emit("update:shareWithAllUsers", false);
				return;
			}
			if (role === "remove") {
				model.value = model.value.filter((p) => p.id !== project.id);
				emit("projectRemoved", project);
			}
		};
		watch(() => model.value, () => {
			if (model.value === null || Array.isArray(model.value)) selectedProject.value = "";
			else selectedProject.value = model.value.id;
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nTooltip_default), {
				disabled: !props.disabledTooltip,
				placement: "top"
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(props.disabledTooltip), 1)]),
				default: withCtx(() => [!props.static || props.disabledTooltip ? (openBlock(), createBlock(unref(N8nSelect_default), {
					key: 0,
					"model-value": selectedProject.value,
					"data-test-id": "project-sharing-select",
					filterable: "",
					remote: "",
					"remote-show-suffix": props.showSuffix,
					"remote-method": setFilter,
					placeholder: selectPlaceholder.value,
					"default-first-option": true,
					"no-data-text": noDataText.value,
					size: __props.size ?? "medium",
					disabled: props.readonly || !!props.disabledTooltip,
					clearable: __props.clearable,
					"popper-class": _ctx.$style.popper,
					"onUpdate:modelValue": onProjectSelected,
					onClear: _cache[0] || (_cache[0] = ($event) => emit("clear"))
				}, {
					prefix: withCtx(() => [projectIcon.value.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: projectIcon.value.value,
						color: "text-dark"
					}, null, 8, ["icon"])) : projectIcon.value.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-light",
						class: normalizeClass(_ctx.$style.emoji)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(projectIcon.value.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedProjects.value, (project) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: project.id,
							value: project.id,
							label: project.name ?? ""
						}, {
							default: withCtx(() => [createVNode(ProjectSharingInfo_default, { project }, null, 8, ["project"])]),
							_: 2
						}, 1032, ["value", "label"]);
					}), 128)), moreResultsCount.value > 0 ? (openBlock(), createBlock(unref(N8nOption_default), {
						key: "more-results",
						value: "",
						label: "",
						disabled: "",
						class: normalizeClass(_ctx.$style.moreResults)
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.sharing.moreResults", { interpolate: { count: moreResultsCount.value } })), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"model-value",
					"remote-show-suffix",
					"placeholder",
					"no-data-text",
					"size",
					"disabled",
					"clearable",
					"popper-class"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["disabled"]), selectedProjects.value ? (openBlock(), createElementBlock("ul", {
				key: 0,
				class: normalizeClass(_ctx.$style.selectedProjects)
			}, [props.homeProject ? (openBlock(), createElementBlock("li", {
				key: 0,
				class: normalizeClass(_ctx.$style.project),
				"data-test-id": "project-sharing-owner"
			}, [createVNode(ProjectSharingInfo_default, { project: props.homeProject }, {
				default: withCtx(() => [createVNode(unref(N8nBadge_default), {
					theme: "tertiary",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("auth.roles.owner")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["project"])], 2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(selectedProjects.value, (project) => {
				return openBlock(), createElementBlock("li", {
					key: project.id,
					class: normalizeClass(_ctx.$style.project),
					"data-test-id": "project-sharing-list-item"
				}, [
					createVNode(ProjectSharingInfo_default, { project }, null, 8, ["project"]),
					props.roles?.length && !props.static && !(project.id === GLOBAL_GROUP.id && !__props.canShareGlobally) ? (openBlock(), createBlock(unref(N8nSelect_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.projectRoleSelect),
						"model-value": props.roles[0],
						disabled: props.readonly,
						size: "small",
						"onUpdate:modelValue": ($event) => onRoleAction(project, $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.roles, (role) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: role.slug,
								value: role.slug,
								label: role.displayName
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, [
						"class",
						"model-value",
						"disabled",
						"onUpdate:modelValue"
					])) : createCommentVNode("", true),
					!props.static && !(project.id === GLOBAL_GROUP.id && !__props.canShareGlobally) ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						variant: "subtle",
						"icon-only": "",
						"native-type": "button",
						icon: "trash-2",
						"aria-label": unref(locale).baseText("generic.delete"),
						disabled: props.readonly,
						"data-test-id": "project-sharing-remove",
						onClick: ($event) => onRoleAction(project, "remove")
					}, null, 8, [
						"aria-label",
						"disabled",
						"onClick"
					])) : createCommentVNode("", true)
				], 2);
			}), 128))], 2)) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectSharing.vue?vue&type=style&index=0&lang.module.scss
var project = "_project_8og8h_388";
var selectedProjects = "_selectedProjects_8og8h_396";
var projectRoleSelect = "_projectRoleSelect_8og8h_407";
var popper = "_popper_8og8h_411";
var emoji = "_emoji_8og8h_415";
var moreResults = "_moreResults_8og8h_419";
var shimmer = "_shimmer_8og8h_1";
var spin = "_spin_8og8h_1";
var opacityPulse = "_opacityPulse_8og8h_1";
var popoverIn = "_popoverIn_8og8h_1";
var fadeIn = "_fadeIn_8og8h_1";
var collapsibleSlideDown = "_collapsibleSlideDown_8og8h_1";
var collapsibleSlideUp = "_collapsibleSlideUp_8og8h_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_8og8h_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_8og8h_1";
var blurSwapIn = "_blurSwapIn_8og8h_1";
var blurSwapOut = "_blurSwapOut_8og8h_1";
var pulseGlow = "_pulseGlow_8og8h_1";
var pulseGlowDelayed = "_pulseGlowDelayed_8og8h_1";
var fade = "_fade_8og8h_1";
var fadeInUp = "_fadeInUp_8og8h_1";
var fadeInDown = "_fadeInDown_8og8h_1";
var fadeInLeft = "_fadeInLeft_8og8h_1";
var fadeInRight = "_fadeInRight_8og8h_1";
var fadeOut = "_fadeOut_8og8h_1";
var fadeOutDown = "_fadeOutDown_8og8h_1";
var fadeOutUp = "_fadeOutUp_8og8h_1";
var fadeOutLeft = "_fadeOutLeft_8og8h_1";
var fadeOutRight = "_fadeOutRight_8og8h_1";
var ping = "_ping_8og8h_1";
var blinkBackground = "_blinkBackground_8og8h_1";
var typingBlink = "_typingBlink_8og8h_1";
var ProjectSharing_vue_vue_type_style_index_0_lang_module_default = {
	project,
	selectedProjects,
	projectRoleSelect,
	popper,
	emoji,
	moreResults,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_8og8h_1",
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
var ProjectSharing_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectSharing_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSharing_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ProjectSharing_default as t };
