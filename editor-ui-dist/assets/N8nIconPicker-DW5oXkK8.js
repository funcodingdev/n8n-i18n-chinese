import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, Mt as markRaw, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, _ as Fragment, bn as normalizeStyle, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, y as Teleport } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as __vitePreload } from "./preload-helper-CMc80dNB.js";
import { t as useI18n } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { n as N8nToggle_default, t as N8nToggleGroup_default } from "./N8nToggleGroup-CDIsb9T8.js";
import { t as N8nPopover_default } from "./N8nPopover-C7WJvH2j.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
//#region ../../../node_modules/.pnpm/is-emoji-supported@0.0.5/node_modules/is-emoji-supported/dist/esm/is-emoji-supported.js
/**
* @var {Object} cache
*/
var cache = /* @__PURE__ */ new Map();
/**
* Check if emoji is supported with cache
*
* @params {string} unicode
* @returns {boolean}
*/
function isEmojiSupported(unicode) {
	if (cache.has(unicode)) return cache.get(unicode);
	var supported = isSupported(unicode);
	cache.set(unicode, supported);
	return supported;
}
/**
* Check if the two pixels parts are perfectly the sames
*
* @params {string} unicode
* @returns {boolean}
*/
var isSupported = (function() {
	var ctx = null;
	try {
		ctx = document.createElement("canvas").getContext("2d");
	} catch (_a) {}
	if (!ctx) return function() {
		return false;
	};
	var CANVAS_HEIGHT = 25;
	var CANVAS_WIDTH = 20;
	var textSize = Math.floor(CANVAS_HEIGHT / 2);
	ctx.font = textSize + "px Arial, Sans-Serif";
	ctx.textBaseline = "top";
	ctx.canvas.width = CANVAS_WIDTH * 2;
	ctx.canvas.height = CANVAS_HEIGHT;
	return function(unicode) {
		ctx.clearRect(0, 0, CANVAS_WIDTH * 2, CANVAS_HEIGHT);
		ctx.fillStyle = "#FF0000";
		ctx.fillText(unicode, 0, 22);
		ctx.fillStyle = "#0000FF";
		ctx.fillText(unicode, CANVAS_WIDTH, 22);
		var a = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
		var count = a.length;
		var i = 0;
		for (; i < count && !a[i + 3]; i += 4);
		if (i >= count) return false;
		var x = CANVAS_WIDTH + i / 4 % CANVAS_WIDTH;
		var y = Math.floor(i / 4 / CANVAS_WIDTH);
		var b = ctx.getImageData(x, y, 1, 1).data;
		if (a[i] !== b[0] || a[i + 2] !== b[2]) return false;
		if (ctx.measureText(unicode).width >= CANVAS_WIDTH) return false;
		return true;
	};
})();
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/IconColorPicker.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2 = [
	"aria-checked",
	"aria-label",
	"title",
	"data-test-id",
	"onClick"
];
var DEFAULT_COLOR_VARIABLE = "--node--icon--color--neutral";
var IconColorPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "IconColorPicker",
	__name: "IconColorPicker",
	props: {
		"modelValue": { default: void 0 },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		const { t } = useI18n();
		const model = useModel(__props, "modelValue");
		const isOpen = ref(false);
		const colors = [
			{
				name: "blue",
				variable: "--node--icon--color--blue",
				labelKey: "iconPicker.colorPicker.blue"
			},
			{
				name: "light-blue",
				variable: "--node--icon--color--light-blue",
				labelKey: "iconPicker.colorPicker.lightBlue"
			},
			{
				name: "azure",
				variable: "--node--icon--color--azure",
				labelKey: "iconPicker.colorPicker.azure"
			},
			{
				name: "purple",
				variable: "--node--icon--color--purple",
				labelKey: "iconPicker.colorPicker.purple"
			},
			{
				name: "pink-red",
				variable: "--node--icon--color--pink-red",
				labelKey: "iconPicker.colorPicker.pink"
			},
			{
				name: "red",
				variable: "--node--icon--color--red",
				labelKey: "iconPicker.colorPicker.red"
			},
			{
				name: "orange",
				variable: "--node--icon--color--orange",
				labelKey: "iconPicker.colorPicker.orange"
			},
			{
				name: "green",
				variable: "--node--icon--color--green",
				labelKey: "iconPicker.colorPicker.green"
			},
			{
				name: "dark-green",
				variable: "--node--icon--color--dark-green",
				labelKey: "iconPicker.colorPicker.darkGreen"
			},
			{
				name: "neutral",
				variable: "--node--icon--color--neutral",
				labelKey: "iconPicker.colorPicker.gray"
			}
		];
		/** The effective color variable, treating undefined (no selection) as neutral/gray. */
		const effectiveColor = computed(() => model.value ?? DEFAULT_COLOR_VARIABLE);
		const displayColor = computed(() => `var(${effectiveColor.value})`);
		function isActive(variable) {
			return effectiveColor.value === variable;
		}
		function selectColor(variable) {
			model.value = variable;
			isOpen.value = false;
		}
		function getColorLabel(color) {
			return t(color.labelKey);
		}
		__expose({ isOpen });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
				side: "bottom",
				align: "end",
				"enable-scrolling": false,
				"suppress-auto-focus": true,
				teleported: false
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					class: normalizeClass(_ctx.$style.triggerButton),
					variant: "outline",
					size: "medium",
					"icon-only": "",
					"aria-label": unref(t)("iconPicker.colorPicker.selectColor"),
					"data-test-id": "icon-color-picker-trigger"
				}, {
					default: withCtx(() => [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.triggerCircle),
						style: normalizeStyle({ backgroundColor: displayColor.value })
					}, null, 6)]),
					_: 1
				}, 8, ["class", "aria-label"])]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.colorGrid),
					role: "radiogroup",
					"aria-label": unref(t)("iconPicker.colorPicker.tooltip"),
					"data-test-id": "icon-color-picker-popover"
				}, [(openBlock(), createElementBlock(Fragment, null, renderList(colors, (color) => {
					return createBaseVNode("button", {
						key: color.name,
						class: normalizeClass([_ctx.$style.swatch, { [_ctx.$style.active]: isActive(color.variable) }]),
						type: "button",
						role: "radio",
						"aria-checked": isActive(color.variable),
						"aria-label": getColorLabel(color),
						title: getColorLabel(color),
						"data-test-id": `icon-color-${color.name}`,
						onClick: ($event) => selectColor(color.variable)
					}, [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.swatchInner),
						style: normalizeStyle({ backgroundColor: `var(${color.variable})` })
					}, null, 6)], 10, _hoisted_2);
				}), 64))], 10, _hoisted_1$1)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/IconColorPicker.vue?vue&type=style&index=0&lang.module.scss
var triggerButton = "_triggerButton_1kqyz_388";
var triggerCircle = "_triggerCircle_1kqyz_392";
var colorGrid = "_colorGrid_1kqyz_400";
var swatch = "_swatch_1kqyz_408";
var active = "_active_1kqyz_424";
var swatchInner = "_swatchInner_1kqyz_428";
var shimmer$2 = "_shimmer_1kqyz_1";
var spin$2 = "_spin_1kqyz_1";
var opacityPulse$2 = "_opacityPulse_1kqyz_1";
var popoverIn$2 = "_popoverIn_1kqyz_1";
var fadeIn$2 = "_fadeIn_1kqyz_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1kqyz_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1kqyz_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1kqyz_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1kqyz_1";
var blurSwapIn$2 = "_blurSwapIn_1kqyz_1";
var blurSwapOut$2 = "_blurSwapOut_1kqyz_1";
var pulseGlow$2 = "_pulseGlow_1kqyz_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1kqyz_1";
var fade$2 = "_fade_1kqyz_1";
var fadeInUp$2 = "_fadeInUp_1kqyz_1";
var fadeInDown$2 = "_fadeInDown_1kqyz_1";
var fadeInLeft$2 = "_fadeInLeft_1kqyz_1";
var fadeInRight$2 = "_fadeInRight_1kqyz_1";
var fadeOut$2 = "_fadeOut_1kqyz_1";
var fadeOutDown$2 = "_fadeOutDown_1kqyz_1";
var fadeOutUp$2 = "_fadeOutUp_1kqyz_1";
var fadeOutLeft$2 = "_fadeOutLeft_1kqyz_1";
var fadeOutRight$2 = "_fadeOutRight_1kqyz_1";
var ping$2 = "_ping_1kqyz_1";
var blinkBackground$2 = "_blinkBackground_1kqyz_1";
var typingBlink$2 = "_typingBlink_1kqyz_1";
var IconColorPicker_vue_vue_type_style_index_0_lang_module_default = {
	triggerButton,
	triggerCircle,
	colorGrid,
	swatch,
	active,
	swatchInner,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1kqyz_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var IconColorPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(IconColorPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": IconColorPicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/IconPicker.utils.ts
function getPickerDirection(key) {
	if (key === "ArrowUp") return "up";
	if (key === "ArrowDown") return "down";
	if (key === "ArrowLeft") return "left";
	if (key === "ArrowRight") return "right";
}
function getPickerOptionId(coordinate) {
	return `icon-picker-option-${coordinate.row}-${coordinate.column}`;
}
function isSamePickerCoordinate(left, right) {
	return left?.row === right.row && left.column === right.column;
}
function humanizeIconName(name) {
	return name.replace(/-/g, " ").replace(/\b\w/g, function capitalizeLetter(letter) {
		return letter.toUpperCase();
	});
}
function getRowItemCount(row) {
	if (row.type === "icon-row") return row.iconNames.length;
	if (row.type === "emoji-row") return row.emojis.length;
	return 0;
}
function getPickerCoordinates(rows) {
	return rows.flatMap(function mapRowToCoordinates(row, rowIndex) {
		return Array.from({ length: getRowItemCount(row) }, function createCoordinate(_, column) {
			return {
				row: rowIndex,
				column
			};
		});
	});
}
function getVerticalCoordinate(rows, current, direction) {
	for (let rowIndex = current.row + direction; rowIndex >= 0 && rowIndex < rows.length; rowIndex += direction) {
		const row = rows[rowIndex];
		if (!row) continue;
		const itemCount = getRowItemCount(row);
		if (itemCount > 0) return {
			row: rowIndex,
			column: Math.min(current.column, itemCount - 1)
		};
	}
}
function getAdjacentPickerCoordinate(rows, current, direction) {
	if (direction === "up" || direction === "down") return getVerticalCoordinate(rows, current, direction === "up" ? -1 : 1);
	const coordinates = getPickerCoordinates(rows);
	return coordinates[coordinates.findIndex(function findCurrentCoordinate(coordinate) {
		return isSamePickerCoordinate(current, coordinate);
	}) + (direction === "left" ? -1 : 1)];
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/iconPickerBlocklist.ts
/**
* Icons that are excluded from the project icon picker because they are
* already used in n8n's navigation, settings, or environment UI.
* Selecting these as project icons would create visual confusion between
* projects and core application functions.
*
* To update: search the codebase for icon usage in sidebar, header,
* settings, and environment components.
*
* Last audited: 2026-02-11
*/
var ICON_PICKER_BLOCKLIST = new Set([
	"house",
	"search",
	"plus",
	"panel-left",
	"lock",
	"share",
	"user",
	"message-circle",
	"cloud",
	"lightbulb",
	"package-open",
	"chart-column-decreasing",
	"circle-help",
	"video",
	"book",
	"users",
	"graduation-cap",
	"bug",
	"info",
	"settings",
	"door-open",
	"external-link",
	"ellipsis",
	"layers",
	"message-square",
	"bot",
	"arrow-left",
	"circle-user-round",
	"user-round",
	"sparkles",
	"plug",
	"vault",
	"key-round",
	"user-lock",
	"shield",
	"network",
	"waypoints",
	"log-in",
	"box",
	"list-checks",
	"mcp",
	"git-branch",
	"git-branch-plus",
	"git-commit-horizontal",
	"git-commit-vertical",
	"git-compare",
	"git-compare-arrows",
	"git-fork",
	"git-graph",
	"git-merge",
	"git-pull-request",
	"git-pull-request-arrow",
	"git-pull-request-closed",
	"git-pull-request-create",
	"git-pull-request-create-arrow",
	"git-pull-request-draft",
	"folder-git",
	"folder-git-2",
	"merge",
	"arrow-down",
	"arrow-up",
	"slack",
	"cog",
	"bell",
	"bell-dot",
	"bell-electric",
	"bell-minus",
	"bell-off",
	"bell-plus",
	"bell-ring",
	"chevron-down",
	"chevron-first",
	"chevron-last",
	"chevron-left",
	"chevron-right",
	"chevron-up",
	"chevrons-down",
	"chevrons-down-up",
	"chevrons-left",
	"chevrons-left-right",
	"chevrons-left-right-ellipsis",
	"chevrons-right",
	"chevrons-right-left",
	"chevrons-up",
	"chevrons-up-down",
	"database",
	"database-backup",
	"database-zap",
	"table",
	"table-2",
	"table-cells-merge",
	"table-cells-split",
	"table-columns-split",
	"table-of-contents",
	"table-properties",
	"table-rows-split"
]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/SkinTonePicker.vue?vue&type=script&setup=true&lang.ts
var SkinTonePicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "SkinTonePicker",
	__name: "SkinTonePicker",
	props: {
		"modelValue": { default: 0 },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		const { t } = useI18n();
		const model = useModel(__props, "modelValue");
		const isOpen = ref(false);
		const tones = [
			{
				index: 0,
				emoji: "🖐️",
				labelKey: "iconPicker.skinTone.default"
			},
			{
				index: 1,
				emoji: "🖐🏻",
				labelKey: "iconPicker.skinTone.light"
			},
			{
				index: 2,
				emoji: "🖐🏼",
				labelKey: "iconPicker.skinTone.mediumLight"
			},
			{
				index: 3,
				emoji: "🖐🏽",
				labelKey: "iconPicker.skinTone.medium"
			},
			{
				index: 4,
				emoji: "🖐🏾",
				labelKey: "iconPicker.skinTone.mediumDark"
			},
			{
				index: 5,
				emoji: "🖐🏿",
				labelKey: "iconPicker.skinTone.dark"
			}
		];
		const displayEmoji = computed(() => tones[model.value]?.emoji ?? tones[0].emoji);
		async function selectTone(index) {
			model.value = index;
			await nextTick();
			isOpen.value = false;
		}
		__expose({ isOpen });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
				side: "bottom",
				align: "start",
				"content-class": _ctx.$style.popover,
				"enable-scrolling": false
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					class: normalizeClass(_ctx.$style.triggerButton),
					variant: "outline",
					size: "medium",
					"icon-only": "",
					"aria-label": unref(t)("iconPicker.skinTone.selectSkinTone"),
					"data-test-id": "emoji-skin-tone-trigger"
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerEmoji) }, toDisplayString(displayEmoji.value), 3)]),
					_: 1
				}, 8, ["class", "aria-label"])]),
				content: withCtx(() => [createVNode(unref(N8nToggleGroup_default), {
					"model-value": model.value,
					variant: "ghost",
					"aria-label": unref(t)("iconPicker.skinTone.tooltip"),
					"data-test-id": "emoji-skin-tone-popover"
				}, {
					default: withCtx((slotProps) => [(openBlock(), createElementBlock(Fragment, null, renderList(tones, (tone) => {
						return createVNode(unref(N8nToggle_default), mergeProps({
							key: tone.index,
							value: tone.index,
							label: unref(t)(tone.labelKey),
							"data-test-id": `skin-tone-${tone.index}`,
							"show-tooltip": false
						}, { ref_for: true }, slotProps, { onClick: ($event) => selectTone(tone.index) }), {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toneEmoji) }, toDisplayString(tone.emoji), 3)]),
							_: 2
						}, 1040, [
							"value",
							"label",
							"data-test-id",
							"onClick"
						]);
					}), 64))]),
					_: 1
				}, 8, ["model-value", "aria-label"])]),
				_: 1
			}, 8, ["open", "content-class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/SkinTonePicker.vue?vue&type=style&index=0&lang.module.scss
var popover = "_popover_vbt6g_388";
var triggerEmoji = "_triggerEmoji_vbt6g_392";
var toneEmoji = "_toneEmoji_vbt6g_396";
var shimmer$1 = "_shimmer_vbt6g_1";
var spin$1 = "_spin_vbt6g_1";
var opacityPulse$1 = "_opacityPulse_vbt6g_1";
var popoverIn$1 = "_popoverIn_vbt6g_1";
var fadeIn$1 = "_fadeIn_vbt6g_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_vbt6g_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_vbt6g_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_vbt6g_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_vbt6g_1";
var blurSwapIn$1 = "_blurSwapIn_vbt6g_1";
var blurSwapOut$1 = "_blurSwapOut_vbt6g_1";
var pulseGlow$1 = "_pulseGlow_vbt6g_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_vbt6g_1";
var fade$1 = "_fade_vbt6g_1";
var fadeInUp$1 = "_fadeInUp_vbt6g_1";
var fadeInDown$1 = "_fadeInDown_vbt6g_1";
var fadeInLeft$1 = "_fadeInLeft_vbt6g_1";
var fadeInRight$1 = "_fadeInRight_vbt6g_1";
var fadeOut$1 = "_fadeOut_vbt6g_1";
var fadeOutDown$1 = "_fadeOutDown_vbt6g_1";
var fadeOutUp$1 = "_fadeOutUp_vbt6g_1";
var fadeOutLeft$1 = "_fadeOutLeft_vbt6g_1";
var fadeOutRight$1 = "_fadeOutRight_vbt6g_1";
var ping$1 = "_ping_vbt6g_1";
var blinkBackground$1 = "_blinkBackground_vbt6g_1";
var typingBlink$1 = "_typingBlink_vbt6g_1";
var SkinTonePicker_vue_vue_type_style_index_0_lang_module_default = {
	popover,
	triggerEmoji,
	toneEmoji,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_vbt6g_1",
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
var SkinTonePicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SkinTonePicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SkinTonePicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/iconCategories.ts
/**
* Ordered list of icon categories matching the official Lucide categories page.
* Empty categories (no matching icons) are automatically excluded during rendering.
* @see https://lucide.dev/icons/categories
*/
var ICON_CATEGORIES = [
	{
		key: "accessibility",
		labelKey: "iconPicker.iconSection.accessibility",
		slugs: ["accessibility"]
	},
	{
		key: "account",
		labelKey: "iconPicker.iconSection.account",
		slugs: ["account"]
	},
	{
		key: "animals",
		labelKey: "iconPicker.iconSection.animals",
		slugs: ["animals"]
	},
	{
		key: "arrows",
		labelKey: "iconPicker.iconSection.arrows",
		slugs: ["arrows"]
	},
	{
		key: "brands",
		labelKey: "iconPicker.iconSection.brands",
		slugs: ["brands"]
	},
	{
		key: "buildings",
		labelKey: "iconPicker.iconSection.buildings",
		slugs: ["buildings"]
	},
	{
		key: "charts",
		labelKey: "iconPicker.iconSection.charts",
		slugs: ["charts"]
	},
	{
		key: "communication",
		labelKey: "iconPicker.iconSection.communication",
		slugs: ["communication"]
	},
	{
		key: "connectivity",
		labelKey: "iconPicker.iconSection.connectivity",
		slugs: ["connectivity"]
	},
	{
		key: "cursors",
		labelKey: "iconPicker.iconSection.cursors",
		slugs: ["cursors"]
	},
	{
		key: "design",
		labelKey: "iconPicker.iconSection.design",
		slugs: ["design"]
	},
	{
		key: "development",
		labelKey: "iconPicker.iconSection.development",
		slugs: ["development"]
	},
	{
		key: "devices",
		labelKey: "iconPicker.iconSection.devices",
		slugs: ["devices"]
	},
	{
		key: "emoji",
		labelKey: "iconPicker.iconSection.emoji",
		slugs: ["emoji"]
	},
	{
		key: "files",
		labelKey: "iconPicker.iconSection.files",
		slugs: ["files"]
	},
	{
		key: "finance",
		labelKey: "iconPicker.iconSection.finance",
		slugs: ["currency", "money"]
	},
	{
		key: "food-beverage",
		labelKey: "iconPicker.iconSection.foodBeverage",
		slugs: ["food-beverage"]
	},
	{
		key: "gaming",
		labelKey: "iconPicker.iconSection.gaming",
		slugs: ["gaming"]
	},
	{
		key: "home",
		labelKey: "iconPicker.iconSection.home",
		slugs: ["home"]
	},
	{
		key: "layout",
		labelKey: "iconPicker.iconSection.layout",
		slugs: ["layout"]
	},
	{
		key: "mail",
		labelKey: "iconPicker.iconSection.mail",
		slugs: ["mail"]
	},
	{
		key: "math",
		labelKey: "iconPicker.iconSection.math",
		slugs: ["math"]
	},
	{
		key: "medical",
		labelKey: "iconPicker.iconSection.medical",
		slugs: ["medical"]
	},
	{
		key: "multimedia",
		labelKey: "iconPicker.iconSection.multimedia",
		slugs: ["multimedia"]
	},
	{
		key: "nature",
		labelKey: "iconPicker.iconSection.nature",
		slugs: ["nature"]
	},
	{
		key: "navigation",
		labelKey: "iconPicker.iconSection.navigation",
		slugs: ["navigation", "maps"]
	},
	{
		key: "notifications",
		labelKey: "iconPicker.iconSection.notifications",
		slugs: ["notifications"]
	},
	{
		key: "people",
		labelKey: "iconPicker.iconSection.people",
		slugs: ["people"]
	},
	{
		key: "photography",
		labelKey: "iconPicker.iconSection.photography",
		slugs: ["photography"]
	},
	{
		key: "science",
		labelKey: "iconPicker.iconSection.science",
		slugs: ["science"]
	},
	{
		key: "seasons",
		labelKey: "iconPicker.iconSection.seasons",
		slugs: ["seasons"]
	},
	{
		key: "security",
		labelKey: "iconPicker.iconSection.security",
		slugs: ["security"]
	},
	{
		key: "shapes",
		labelKey: "iconPicker.iconSection.shapes",
		slugs: ["shapes"]
	},
	{
		key: "shopping",
		labelKey: "iconPicker.iconSection.shopping",
		slugs: ["shopping"]
	},
	{
		key: "social",
		labelKey: "iconPicker.iconSection.social",
		slugs: ["social"]
	},
	{
		key: "sports",
		labelKey: "iconPicker.iconSection.sports",
		slugs: ["sports"]
	},
	{
		key: "sustainability",
		labelKey: "iconPicker.iconSection.sustainability",
		slugs: ["sustainability"]
	},
	{
		key: "text",
		labelKey: "iconPicker.iconSection.text",
		slugs: ["text"]
	},
	{
		key: "time",
		labelKey: "iconPicker.iconSection.time",
		slugs: ["time"]
	},
	{
		key: "tools",
		labelKey: "iconPicker.iconSection.tools",
		slugs: ["tools"]
	},
	{
		key: "transportation",
		labelKey: "iconPicker.iconSection.transportation",
		slugs: ["transportation"]
	},
	{
		key: "travel",
		labelKey: "iconPicker.iconSection.travel",
		slugs: ["travel"]
	},
	{
		key: "weather",
		labelKey: "iconPicker.iconSection.weather",
		slugs: ["weather"]
	}
];
/** "Other" section for icons without any recognized category */
var OTHER_CATEGORY = {
	key: "other",
	labelKey: "iconPicker.iconSection.other",
	slugs: []
};
/**
* Reverse lookup: Lucide data slug → display category key.
* Built once from ICON_CATEGORIES at import time.
*/
var SLUG_TO_CATEGORY_KEY = Object.fromEntries(ICON_CATEGORIES.flatMap((cat) => cat.slugs.map((slug) => [slug, cat.key])));
/**
* Returns the display category key for an icon based on its first recognized category slug.
* Falls back to 'other' if no category slug matches any defined category.
*
* This ensures each icon appears in exactly one section — its "primary" category
* is determined by the first slug in its categories array that maps to a known
* display category.
*/
function getPrimaryCategoryKey(categories) {
	for (const slug of categories) {
		const key = SLUG_TO_CATEGORY_KEY[slug];
		if (key !== void 0) return key;
	}
	return "other";
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/useIconPickerSearch.ts
function useIconPickerSearch(lucideData, emojiSectionsData, query, selectedCategory, selectedSkinTone) {
	return {
		filteredIcons: computed(() => {
			if (!lucideData.value) return [];
			let entries = Object.entries(lucideData.value);
			if (selectedCategory.value) {
				const cat = selectedCategory.value;
				entries = entries.filter(([, icon]) => icon.categories.includes(cat));
			}
			const q = query.value.toLowerCase().trim();
			if (q) {
				const tokens = q.split(/\s+/);
				entries = entries.filter(([name, icon]) => tokens.every((token) => name.includes(token) || icon.keywords.some((kw) => kw.includes(token))));
			}
			return entries;
		}),
		filteredIconSections: computed(() => {
			if (!lucideData.value) return [];
			const entries = Object.entries(lucideData.value);
			const categoryMap = /* @__PURE__ */ new Map();
			for (const entry of entries) {
				const catKey = getPrimaryCategoryKey(entry[1].categories);
				let bucket = categoryMap.get(catKey);
				if (!bucket) {
					bucket = [];
					categoryMap.set(catKey, bucket);
				}
				bucket.push(entry);
			}
			const sections = [];
			for (const def of ICON_CATEGORIES) {
				const icons = categoryMap.get(def.key);
				if (icons && icons.length > 0) sections.push({
					key: def.key,
					labelKey: def.labelKey,
					icons
				});
			}
			const otherIcons = categoryMap.get("other");
			if (otherIcons && otherIcons.length > 0) sections.push({
				key: OTHER_CATEGORY.key,
				labelKey: OTHER_CATEGORY.labelKey,
				icons: otherIcons
			});
			return sections;
		}),
		filteredEmojiSections: computed(() => {
			const q = query.value.toLowerCase().trim();
			const tokens = q ? q.split(/\s+/) : [];
			const tone = selectedSkinTone.value;
			return emojiSectionsData.value.map((section) => {
				let emojis = section.emojis;
				if (q) emojis = emojis.filter((e) => tokens.every((token) => e.k.some((kw) => kw.includes(token))));
				const displayEmojis = emojis.map((e) => ({
					...e,
					display: tone > 0 && e.s ? e.s[tone - 1] : e.u
				}));
				return {
					key: section.key,
					labelKey: section.labelKey,
					emojis: displayEmojis
				};
			}).filter((section) => section.emojis.length > 0);
		})
	};
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/useIconPickerVirtualRows.ts
var DEFAULT_COLUMNS = 12;
function chunkItems(items, columns) {
	const rows = [];
	for (let index = 0; index < items.length; index += columns) rows.push(items.slice(index, index + columns));
	return rows;
}
function buildIconBrowseRows(sections, columns = DEFAULT_COLUMNS) {
	const rows = [];
	for (const section of sections) {
		rows.push({
			id: `header-${section.key}`,
			type: "header",
			sectionKey: section.key,
			labelKey: section.labelKey
		});
		for (const [rowIndex, row] of chunkItems(section.icons, columns).entries()) rows.push({
			id: `icons-${section.key}-${rowIndex}`,
			type: "icon-row",
			sectionKey: section.key,
			labelKey: section.labelKey,
			iconNames: row.map(([name]) => name)
		});
	}
	return rows;
}
function buildIconSearchRows(icons, columns = DEFAULT_COLUMNS) {
	return chunkItems(icons, columns).map((row, rowIndex) => ({
		id: `search-icons-${rowIndex}`,
		type: "icon-row",
		iconNames: row.map(([name]) => name)
	}));
}
function buildEmojiRows(sections, columns = DEFAULT_COLUMNS) {
	const rows = [];
	for (const section of sections) {
		rows.push({
			id: `header-${section.key}`,
			type: "header",
			sectionKey: section.key,
			labelKey: section.labelKey
		});
		for (const [rowIndex, row] of chunkItems(section.emojis, columns).entries()) rows.push({
			id: `emojis-${section.key}-${rowIndex}`,
			type: "emoji-row",
			sectionKey: section.key,
			labelKey: section.labelKey,
			emojis: row
		});
	}
	return rows;
}
//#endregion
//#region ~icons/lucide/shuffle
var _hoisted_1 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
		fill: "none",
		stroke: "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2"
	}, [createBaseVNode("path", { d: "m18 14l4 4l-4 4m0-20l4 4l-4 4" }), createBaseVNode("path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" })], -1)])]);
}
var shuffle_default = markRaw({
	name: "lucide-shuffle",
	render
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/IconPicker.vue?vue&type=script&setup=true&lang.ts
/**
* Icon picker with support for all Lucide icons and emojis.
* Search metadata (keywords, categories) and emoji data are lazy data modules,
* prefetched on hover over the trigger button for instant popup open.
* Icon SVG bodies load on demand in hash-bucketed chunks via the IconBodyLoader
* injected into N8nIcon (see src/icons/lucide), deduplicated per bucket.
* Emojis use emojibase-data with categories and skin tone support.
*/
var SKIN_TONE_STORAGE_KEY = "n8n-emoji-skin-tone";
var INITIAL_ROW_COUNT = 10;
var ROW_BATCH_SIZE = 10;
var ITEM_TOOLTIP_SHOW_DELAY = 150;
var IconPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nIconPicker",
	__name: "IconPicker",
	props: /* @__PURE__ */ mergeModels({
		isReadOnly: { type: Boolean },
		iconsOnly: {
			type: Boolean,
			default: false
		},
		showColorPicker: {
			type: Boolean,
			default: false
		},
		containerClass: { default: void 0 },
		buttonTooltip: {},
		buttonVariant: { default: "subtle" },
		buttonSize: { default: "large" },
		buttonClass: { default: void 0 },
		defaultTab: { default: "icons" }
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const { t } = useI18n();
		const props = __props;
		const model = useModel(__props, "modelValue");
		const lucideData = ref(null);
		const rawEmojiSections = ref([]);
		const iconsLoaded = ref(false);
		const iconsLoading = ref(false);
		const emojisLoaded = ref(false);
		const emojisLoading = ref(false);
		const popupVisible = ref(false);
		const selectedTab = ref(getDefaultTab());
		const searchQuery = ref("");
		const supportedEmojiSections = computed(() => {
			return rawEmojiSections.value.map((section) => ({
				...section,
				emojis: section.emojis.filter((e) => isEmojiSupported(e.u))
			})).filter((section) => section.emojis.length > 0);
		});
		const availableLucideData = computed(() => {
			if (!lucideData.value) return null;
			return Object.fromEntries(Object.entries(lucideData.value).filter(([name]) => !ICON_PICKER_BLOCKLIST.has(name)));
		});
		/** Use the selected value type before the configured default tab. */
		function getDefaultTab() {
			if (props.iconsOnly) return "icons";
			if (model.value) return model.value.type === "emoji" ? "emojis" : "icons";
			return props.defaultTab;
		}
		/** Load Icons/Emojis seperately so we don't block the thread. Both load on hover so render is instant. */
		async function loadIconData() {
			if (iconsLoaded.value || iconsLoading.value) return;
			iconsLoading.value = true;
			try {
				lucideData.value = (await __vitePreload(() => import("./lucideIconData-C0314Pxe.js"), [])).lucideIcons;
				iconsLoaded.value = true;
			} finally {
				iconsLoading.value = false;
			}
		}
		async function loadEmojiData() {
			if (props.iconsOnly) return;
			if (emojisLoaded.value || emojisLoading.value) return;
			emojisLoading.value = true;
			try {
				rawEmojiSections.value = (await __vitePreload(() => import("./emojiData-C_CbvSGF.js"), [])).emojiSections;
				emojisLoaded.value = true;
			} finally {
				emojisLoading.value = false;
			}
		}
		const tabs = computed(() => [{
			value: "icons",
			label: t("iconPicker.tabs.icons")
		}, ...props.iconsOnly ? [] : [{
			value: "emojis",
			label: t("iconPicker.tabs.emojis")
		}]]);
		const selectedCategory = ref(null);
		const selectedColor = ref(props.showColorPicker && model.value?.type === "icon" ? model.value.color : void 0);
		const buttonIconName = computed(() => model.value?.type === "icon" ? model.value.value : "smile");
		const selectedSkinTone = ref(parseInt(localStorage.getItem(SKIN_TONE_STORAGE_KEY) ?? "0", 10) || 0);
		const searchInputRef = ref();
		const popupRef = ref();
		const colorPickerRef = ref();
		const skinTonePickerRef = ref();
		const itemTooltip = ref(null);
		let itemTooltipTimer;
		let activeElement = null;
		const { filteredIcons, filteredIconSections, filteredEmojiSections } = useIconPickerSearch(availableLucideData, supportedEmojiSections, searchQuery, selectedCategory, selectedSkinTone);
		const isSearching = computed(() => searchQuery.value.trim().length > 0);
		const iconRows = computed(() => isSearching.value ? buildIconSearchRows(filteredIcons.value) : buildIconBrowseRows(filteredIconSections.value));
		const emojiRows = computed(() => buildEmojiRows(filteredEmojiSections.value));
		/** Progressively render first set of rows for instant view. Alternative to virtualisation which breaks key navigation and adds overhead/deps. */
		const activeRows = computed(function getActiveRows() {
			return selectedTab.value === "icons" ? iconRows.value : emojiRows.value;
		});
		const activeDataLoaded = computed(function getActiveDataLoaded() {
			return selectedTab.value === "icons" ? iconsLoaded.value : emojisLoaded.value;
		});
		const activeDataLoading = computed(function getActiveDataLoading() {
			return selectedTab.value === "icons" ? iconsLoading.value : emojisLoading.value;
		});
		const renderedRowCount = ref(INITIAL_ROW_COUNT);
		const visibleRows = computed(function getVisibleRows() {
			return activeRows.value.slice(0, renderedRowCount.value);
		});
		const activeCoordinate = ref(null);
		const hasActiveItem = computed(() => activeCoordinate.value !== null);
		let activeDescendantOwner = null;
		let renderFrame;
		function renderNextBatch() {
			if (!popupVisible.value) return;
			renderedRowCount.value = Math.min(renderedRowCount.value + ROW_BATCH_SIZE, activeRows.value.length);
			if (renderedRowCount.value < activeRows.value.length) renderFrame = requestAnimationFrame(renderNextBatch);
		}
		function startProgressiveRender() {
			if (renderFrame !== void 0) cancelAnimationFrame(renderFrame);
			renderedRowCount.value = INITIAL_ROW_COUNT;
			if (renderedRowCount.value < activeRows.value.length) renderFrame = requestAnimationFrame(renderNextBatch);
		}
		function loadActiveTabData() {
			if (selectedTab.value === "icons") loadIconData();
			else loadEmojiData();
		}
		function handleTabsPointerOver(event) {
			const target = event.target;
			if (target instanceof Element && target.closest("[data-test-id=\"tab-emojis\"]")) loadEmojiData();
			else loadIconData();
		}
		function selectIcon(value) {
			model.value = value;
			popupVisible.value = false;
		}
		async function handlePopupOpen() {
			activeCoordinate.value = null;
			selectedTab.value = getDefaultTab();
			searchQuery.value = "";
			selectedCategory.value = null;
			selectedColor.value = props.showColorPicker && model.value?.type === "icon" ? model.value.color : void 0;
			loadActiveTabData();
			startProgressiveRender();
			await nextTick();
			focusSearchInput();
		}
		function focusSearchInput() {
			searchInputRef.value?.focus();
		}
		/** Custom tooltip is needed so we don't render 1,000+ N8nToolips. Instead we render a custom element and position it over the active element. */
		function showItemTooltip(event, label) {
			const target = event.currentTarget;
			if (!(target instanceof HTMLElement)) return;
			showItemTooltipForElement(target, label);
		}
		function scheduleItemTooltip(event, label) {
			const target = event.currentTarget;
			if (!(target instanceof HTMLElement)) return;
			hideItemTooltip();
			itemTooltipTimer = setTimeout(function showScheduledItemTooltip() {
				showItemTooltipForElement(target, label);
				itemTooltipTimer = void 0;
			}, ITEM_TOOLTIP_SHOW_DELAY);
		}
		function showItemTooltipForElement(target, label) {
			const rect = target.getBoundingClientRect();
			itemTooltip.value = {
				label,
				left: rect.left + rect.width / 2,
				top: rect.top
			};
		}
		function hideItemTooltip() {
			if (itemTooltipTimer !== void 0) {
				clearTimeout(itemTooltipTimer);
				itemTooltipTimer = void 0;
			}
			itemTooltip.value = null;
		}
		watch(popupVisible, function handlePopupVisibilityChange(isOpen) {
			if (isOpen) handlePopupOpen();
			else clearActiveElement();
		});
		watch(selectedSkinTone, (tone) => {
			localStorage.setItem(SKIN_TONE_STORAGE_KEY, String(tone));
		});
		watch(selectedTab, async () => {
			loadActiveTabData();
			await nextTick();
			focusSearchInput();
		});
		watch(activeRows, function handleActiveRowsChange() {
			activeCoordinate.value = null;
			clearActiveElement();
			hideItemTooltip();
			if (popupVisible.value) startProgressiveRender();
		});
		onBeforeUnmount(function cancelPendingWork() {
			if (renderFrame !== void 0) cancelAnimationFrame(renderFrame);
			if (itemTooltipTimer !== void 0) clearTimeout(itemTooltipTimer);
		});
		const selectRandomIcon = () => {
			if (!availableLucideData.value) return;
			const entries = Object.keys(availableLucideData.value);
			if (entries.length === 0) return;
			const name = entries[Math.floor(Math.random() * entries.length)];
			selectIcon({
				type: "icon",
				value: name,
				color: selectedColor.value
			});
		};
		const selectRandomEmoji = () => {
			const allEmojis = supportedEmojiSections.value.flatMap((section) => section.emojis);
			if (allEmojis.length === 0) return;
			const emoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
			const tone = selectedSkinTone.value;
			selectIcon({
				type: "emoji",
				value: tone > 0 && emoji.s ? emoji.s[tone - 1] : emoji.u
			});
		};
		function clearActiveElement() {
			activeElement?.removeAttribute("data-active");
			activeDescendantOwner?.removeAttribute("aria-activedescendant");
			activeCoordinate.value = null;
			activeElement = null;
			activeDescendantOwner = null;
			hideItemTooltip();
		}
		function updateActiveElement(item) {
			activeElement?.removeAttribute("data-active");
			item.dataset.active = "true";
			activeElement = item;
		}
		/** Avoid queued asynchronous activations. Progressive rendering should complete before users reach later rows. */
		function activatePickerItem(coordinate, owner) {
			const itemId = getPickerOptionId(coordinate);
			const item = popupRef.value?.querySelector(`#${itemId}`);
			const scrollArea = item?.closest("[data-icon-picker-scroll-area]");
			if (!item || !scrollArea) return;
			activeCoordinate.value = coordinate;
			activeDescendantOwner = owner;
			owner.setAttribute("aria-activedescendant", itemId);
			updateActiveElement(item);
			const itemRect = item.getBoundingClientRect();
			const scrollAreaRect = scrollArea.getBoundingClientRect();
			if (itemRect.top < scrollAreaRect.top || itemRect.bottom > scrollAreaRect.bottom) item.scrollIntoView({ block: "nearest" });
		}
		function selectActiveItem() {
			if (!activeCoordinate.value) return;
			const row = activeRows.value[activeCoordinate.value.row];
			if (row?.type === "icon-row") {
				const name = row.iconNames[activeCoordinate.value.column];
				if (name) selectIcon({
					type: "icon",
					value: name,
					color: selectedColor.value
				});
			} else if (row?.type === "emoji-row") {
				const emoji = row.emojis[activeCoordinate.value.column];
				if (emoji) selectIcon({
					type: "emoji",
					value: emoji.display
				});
			}
		}
		function handlePickerKeydown(event) {
			const target = event.target;
			if (!(target instanceof HTMLElement)) return;
			if (!target.closest("[data-test-id=\"icon-picker-search\"]")) return;
			if (event.key === "Enter" && activeCoordinate.value) {
				event.preventDefault();
				selectActiveItem();
				return;
			}
			if (![
				"ArrowUp",
				"ArrowDown",
				"ArrowLeft",
				"ArrowRight"
			].includes(event.key)) return;
			hideItemTooltip();
			const coordinates = getPickerCoordinates(activeRows.value);
			if (coordinates.length === 0) return;
			/** Rows are progressively rendered, so we must start on first item regardless of arrow direction */
			event.preventDefault();
			if (!activeCoordinate.value) {
				const coordinate = coordinates[0];
				if (coordinate) activatePickerItem(coordinate, target);
				return;
			}
			const direction = getPickerDirection(event.key);
			if (!direction) return;
			const nextCoordinate = getAdjacentPickerCoordinate(activeRows.value, activeCoordinate.value, direction);
			if (nextCoordinate) activatePickerItem(nextCoordinate, target);
			else if (direction === "up") clearActiveElement();
		}
		/** Show tooltip on keyup so holding down arrow keys doesn't queue lots of events */
		function handlePickerKeyup(event) {
			if (![
				"ArrowUp",
				"ArrowDown",
				"ArrowLeft",
				"ArrowRight"
			].includes(event.key)) return;
			if (!activeCoordinate.value) return;
			const item = popupRef.value?.querySelector(`#${getPickerOptionId(activeCoordinate.value)}`);
			if (item) showItemTooltipForElement(item, item.getAttribute("aria-label") ?? "");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: popupVisible.value,
				"onUpdate:open": _cache[7] || (_cache[7] = ($event) => popupVisible.value = $event),
				"content-class": [_ctx.$style.popup, props.iconsOnly ? _ctx.$style.iconsOnly : ""].join(" "),
				"enable-scrolling": false,
				"suppress-auto-focus": true,
				width: "400px"
			}, {
				trigger: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass([{
						[_ctx.$style.container]: true,
						[_ctx.$style.isReadOnly]: __props.isReadOnly,
						[_ctx.$style[props.buttonSize]]: true
					}, __props.containerClass]),
					onPointerenter: loadIconData
				}, [createVNode(unref(N8nTooltip_default), {
					placement: "top",
					"data-test-id": "icon-picker-tooltip",
					disabled: __props.isReadOnly
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(props.buttonTooltip ?? unref(t)("iconPicker.button.defaultToolTip")), 1)]),
					default: withCtx(() => [!model.value || model.value.type === "icon" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						class: normalizeClass([_ctx.$style["icon-button"], __props.buttonClass]),
						icon: buttonIconName.value,
						size: __props.buttonSize,
						"icon-only": "",
						disabled: __props.isReadOnly,
						variant: __props.buttonVariant,
						"aria-label": props.buttonTooltip ?? unref(t)("iconPicker.button.defaultToolTip"),
						"aria-expanded": popupVisible.value,
						"aria-haspopup": "true",
						"data-test-id": "icon-picker-button",
						style: normalizeStyle(model.value?.type === "icon" && model.value.color ? { color: `var(${model.value.color})` } : void 0),
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => popupVisible.value = !popupVisible.value, ["stop"]))
					}, null, 8, [
						"class",
						"icon",
						"size",
						"disabled",
						"variant",
						"aria-label",
						"aria-expanded",
						"style"
					])) : model.value.type === "emoji" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						class: normalizeClass([_ctx.$style["emoji-button"], __props.buttonClass]),
						size: __props.buttonSize,
						"icon-only": "",
						variant: __props.buttonVariant,
						"aria-label": props.buttonTooltip ?? unref(t)("iconPicker.button.defaultToolTip"),
						"aria-expanded": popupVisible.value,
						"aria-haspopup": "true",
						"data-test-id": "icon-picker-button",
						disabled: __props.isReadOnly,
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => popupVisible.value = !popupVisible.value, ["stop"]))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(model.value.value), 1)]),
						_: 1
					}, 8, [
						"class",
						"size",
						"variant",
						"aria-label",
						"aria-expanded",
						"disabled"
					])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["disabled"])], 34)]),
				content: withCtx(() => [popupVisible.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "popupRef",
					ref: popupRef,
					class: normalizeClass({ [_ctx.$style.iconsOnly]: props.iconsOnly }),
					"data-test-id": "icon-picker-popup",
					onKeydown: handlePickerKeydown,
					onKeyup: handlePickerKeyup
				}, [
					(openBlock(), createBlock(Teleport, { to: "body" }, [itemTooltip.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						role: "tooltip",
						class: normalizeClass(_ctx.$style.itemTooltip),
						style: normalizeStyle({
							left: `${itemTooltip.value.left}px`,
							top: `${itemTooltip.value.top}px`
						})
					}, toDisplayString(itemTooltip.value.label), 7)) : createCommentVNode("", true)])),
					!props.iconsOnly ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.tabs),
						onPointerover: handleTabsPointerOver
					}, [createVNode(unref(N8nTabs_default), {
						modelValue: selectedTab.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedTab.value = $event),
						options: tabs.value,
						"data-test-id": "icon-picker-tabs"
					}, null, 8, ["modelValue", "options"])], 34)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.searchRow) }, [
						createVNode(unref(Input_default), {
							ref_key: "searchInputRef",
							ref: searchInputRef,
							modelValue: searchQuery.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => searchQuery.value = $event),
							class: normalizeClass({ [_ctx.$style.searchWithActiveItem]: hasActiveItem.value }),
							placeholder: unref(t)("iconPicker.search.placeholder"),
							clearable: "",
							size: "medium",
							role: "combobox",
							"aria-autocomplete": "list",
							"aria-controls": "icon-picker-options",
							"aria-expanded": popupVisible.value,
							"data-test-id": "icon-picker-search",
							onBlur: clearActiveElement
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "search",
								size: 14
							})]),
							_: 1
						}, 8, [
							"modelValue",
							"class",
							"placeholder",
							"aria-expanded"
						]),
						selectedTab.value === "icons" && __props.showColorPicker ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							placement: "top",
							disabled: colorPickerRef.value?.isOpen
						}, {
							content: withCtx(() => [createTextVNode(toDisplayString(unref(t)("iconPicker.colorPicker.selectColor")), 1)]),
							default: withCtx(() => [createVNode(IconColorPicker_default, {
								ref_key: "colorPickerRef",
								ref: colorPickerRef,
								modelValue: selectedColor.value,
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedColor.value = $event),
								"data-test-id": "icon-color-picker"
							}, null, 8, ["modelValue"])]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true),
						!props.iconsOnly && selectedTab.value === "emojis" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 1,
							placement: "top",
							disabled: skinTonePickerRef.value?.isOpen
						}, {
							content: withCtx(() => [createTextVNode(toDisplayString(unref(t)("iconPicker.skinTone.selectSkinTone")), 1)]),
							default: withCtx(() => [createVNode(SkinTonePicker_default, {
								ref_key: "skinTonePickerRef",
								ref: skinTonePickerRef,
								modelValue: selectedSkinTone.value,
								"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedSkinTone.value = $event)
							}, null, 8, ["modelValue"])]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true),
						createVNode(unref(N8nTooltip_default), { placement: "top" }, {
							content: withCtx(() => [createTextVNode(toDisplayString(selectedTab.value === "icons" ? unref(t)("iconPicker.random.icon") : unref(t)("iconPicker.random.emoji")), 1)]),
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								class: normalizeClass(_ctx.$style.shuffleButton),
								variant: "outline",
								size: "medium",
								"icon-only": "",
								"aria-label": selectedTab.value === "icons" ? unref(t)("iconPicker.random.icon") : unref(t)("iconPicker.random.emoji"),
								"data-test-id": "icon-picker-random",
								onClick: _cache[6] || (_cache[6] = ($event) => selectedTab.value === "icons" ? selectRandomIcon() : selectRandomEmoji())
							}, {
								default: withCtx(() => [createVNode(unref(shuffle_default), { class: normalizeClass(_ctx.$style.shuffleIcon) }, null, 8, ["class"])]),
								_: 1
							}, 8, ["class", "aria-label"])]),
							_: 1
						})
					], 2),
					activeDataLoading.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.loadingState),
						"data-test-id": "icon-picker-loading"
					}, toDisplayString(unref(t)("iconPicker.loading")), 3)) : selectedTab.value === "icons" && activeDataLoaded.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.content)
					}, [visibleRows.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						id: "icon-picker-options",
						role: "grid",
						class: normalizeClass(_ctx.$style.scrollArea),
						"data-icon-picker-scroll-area": ""
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (item, rowIndex) => {
						return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.type === "header" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.sectionHeaderRow)
						}, [createVNode(unref(N8nText_default), {
							step: "xs",
							bold: "",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(t)(item.labelKey)), 1)]),
							_: 2
						}, 1024)], 2)) : item.type === "icon-row" ? (openBlock(), createElementBlock("div", {
							key: 1,
							role: "row",
							class: normalizeClass(_ctx.$style.iconGridRow)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.iconNames, (name, columnIndex) => {
							return openBlock(), createBlock(unref(N8nButton_default), {
								key: name,
								variant: "ghost",
								size: "medium",
								"icon-only": "",
								style: normalizeStyle(selectedColor.value ? { color: `var(${selectedColor.value})` } : void 0),
								id: unref(getPickerOptionId)({
									row: rowIndex,
									column: columnIndex
								}),
								role: "gridcell",
								tabindex: "-1",
								"data-test-id": "icon-picker-icon",
								"data-picker-row": rowIndex,
								"data-picker-column": columnIndex,
								"aria-label": unref(humanizeIconName)(name),
								onMouseenter: ($event) => scheduleItemTooltip($event, unref(humanizeIconName)(name)),
								onMouseleave: hideItemTooltip,
								onFocus: ($event) => showItemTooltip($event, unref(humanizeIconName)(name)),
								onBlur: hideItemTooltip,
								onClick: ($event) => selectIcon({
									type: "icon",
									value: name,
									color: selectedColor.value
								})
							}, {
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: name,
									size: 20
								}, null, 8, ["icon"])]),
								_: 2
							}, 1032, [
								"style",
								"id",
								"data-picker-row",
								"data-picker-column",
								"aria-label",
								"onMouseenter",
								"onFocus",
								"onClick"
							]);
						}), 128))], 2)) : createCommentVNode("", true)], 64);
					}), 128))], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState),
						"data-test-id": "icon-picker-no-results"
					}, toDisplayString(unref(t)("iconPicker.search.noResults")), 3))], 2)) : !props.iconsOnly && selectedTab.value === "emojis" && activeDataLoaded.value ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.content)
					}, [visibleRows.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						id: "icon-picker-options",
						role: "grid",
						class: normalizeClass(_ctx.$style.scrollArea),
						"data-icon-picker-scroll-area": ""
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (item, rowIndex) => {
						return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.type === "header" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.sectionHeaderRow)
						}, [createVNode(unref(N8nText_default), {
							step: "xs",
							bold: "",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(t)(item.labelKey)), 1)]),
							_: 2
						}, 1024)], 2)) : item.type === "emoji-row" ? (openBlock(), createElementBlock("div", {
							key: 1,
							role: "row",
							class: normalizeClass(_ctx.$style.emojiGridRow)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.emojis, (emoji, columnIndex) => {
							return openBlock(), createBlock(unref(N8nButton_default), {
								key: emoji.u,
								variant: "ghost",
								size: "medium",
								"icon-only": "",
								id: unref(getPickerOptionId)({
									row: rowIndex,
									column: columnIndex
								}),
								role: "gridcell",
								tabindex: "-1",
								"data-test-id": "icon-picker-emoji",
								"data-picker-row": rowIndex,
								"data-picker-column": columnIndex,
								"aria-label": emoji.l,
								onMouseenter: ($event) => scheduleItemTooltip($event, emoji.l),
								onMouseleave: hideItemTooltip,
								onFocus: ($event) => showItemTooltip($event, emoji.l),
								onBlur: hideItemTooltip,
								onClick: ($event) => selectIcon({
									type: "emoji",
									value: emoji.display
								})
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.emoji) }, toDisplayString(emoji.display), 3)]),
								_: 2
							}, 1032, [
								"id",
								"data-picker-row",
								"data-picker-column",
								"aria-label",
								"onMouseenter",
								"onFocus",
								"onClick"
							]);
						}), 128))], 2)) : createCommentVNode("", true)], 64);
					}), 128))], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState),
						"data-test-id": "icon-picker-no-results"
					}, toDisplayString(unref(t)("iconPicker.search.noResults")), 3))], 2)) : createCommentVNode("", true)
				], 34)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open", "content-class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/IconPicker.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_xihxr_388";
var itemTooltip = "_itemTooltip_xihxr_393";
var isReadOnly = "_isReadOnly_xihxr_416";
var xlarge = "_xlarge_xihxr_427";
var xxlarge = "_xxlarge_xihxr_431";
var small = "_small_xihxr_440";
var popup = "_popup_xihxr_450";
var tabs = "_tabs_xihxr_455";
var searchRow = "_searchRow_xihxr_463";
var content = "_content_xihxr_473";
var scrollArea = "_scrollArea_xihxr_477";
var sectionHeaderRow = "_sectionHeaderRow_xihxr_519";
var iconGridRow = "_iconGridRow_xihxr_522";
var emojiGridRow = "_emojiGridRow_xihxr_523";
var searchWithActiveItem = "_searchWithActiveItem_xihxr_527";
var emoji = "_emoji_xihxr_417";
var shuffleButton = "_shuffleButton_xihxr_546";
var shuffleIcon = "_shuffleIcon_xihxr_549";
var loadingState = "_loadingState_xihxr_555";
var emptyState = "_emptyState_xihxr_556";
var shimmer = "_shimmer_xihxr_1";
var spin = "_spin_xihxr_1";
var opacityPulse = "_opacityPulse_xihxr_1";
var popoverIn = "_popoverIn_xihxr_1";
var fadeIn = "_fadeIn_xihxr_1";
var collapsibleSlideDown = "_collapsibleSlideDown_xihxr_1";
var collapsibleSlideUp = "_collapsibleSlideUp_xihxr_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_xihxr_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_xihxr_1";
var blurSwapIn = "_blurSwapIn_xihxr_1";
var blurSwapOut = "_blurSwapOut_xihxr_1";
var pulseGlow = "_pulseGlow_xihxr_1";
var pulseGlowDelayed = "_pulseGlowDelayed_xihxr_1";
var fade = "_fade_xihxr_1";
var fadeInUp = "_fadeInUp_xihxr_1";
var fadeInDown = "_fadeInDown_xihxr_1";
var fadeInLeft = "_fadeInLeft_xihxr_1";
var fadeInRight = "_fadeInRight_xihxr_1";
var fadeOut = "_fadeOut_xihxr_1";
var fadeOutDown = "_fadeOutDown_xihxr_1";
var fadeOutUp = "_fadeOutUp_xihxr_1";
var fadeOutLeft = "_fadeOutLeft_xihxr_1";
var fadeOutRight = "_fadeOutRight_xihxr_1";
var ping = "_ping_xihxr_1";
var blinkBackground = "_blinkBackground_xihxr_1";
var typingBlink = "_typingBlink_xihxr_1";
var IconPicker_vue_vue_type_style_index_0_lang_module_default = {
	container,
	itemTooltip,
	isReadOnly,
	"icon-button": "_icon-button_xihxr_416",
	"emoji-button": "_emoji-button_xihxr_417",
	xlarge,
	xxlarge,
	small,
	popup,
	tabs,
	searchRow,
	content,
	scrollArea,
	sectionHeaderRow,
	iconGridRow,
	emojiGridRow,
	searchWithActiveItem,
	emoji,
	shuffleButton,
	shuffleIcon,
	loadingState,
	emptyState,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_xihxr_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/index.ts
var N8nIconPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(IconPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": IconPicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nIconPicker_default as t };
