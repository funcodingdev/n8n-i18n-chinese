import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, Mt as markRaw, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bn as normalizeStyle, bt as withCtx, dt as useModel, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as __vitePreload } from "./preload-helper-CMc80dNB.js";
import { t as useI18n } from "./useI18n-CBepoSka.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nIconButton_default } from "./N8nIconButton-CMP0ih80.js";
import { I as refDebounced, r as onClickOutside } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-CkIGinhL.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as N8nPopover_default } from "./N8nPopover-KufkLzBT.js";
import { t as N8nRecycleScroller_default } from "./N8nRecycleScroller-C40uNXfM.js";
import { t as N8nTabs_default } from "./N8nTabs-D1Q6GI32.js";
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
var _hoisted_1$3 = ["aria-label"];
var _hoisted_2$2 = [
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
					}, null, 6)], 10, _hoisted_2$2);
				}), 64))], 10, _hoisted_1$3)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
var IconColorPicker_vue_vue_type_style_index_0_lang_module_default = {
	triggerButton: "_triggerButton_1tapy_125",
	triggerCircle: "_triggerCircle_1tapy_129",
	colorGrid: "_colorGrid_1tapy_137",
	swatch: "_swatch_1tapy_145",
	active: "_active_1tapy_161",
	swatchInner: "_swatchInner_1tapy_165"
};
var IconColorPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(IconColorPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": IconColorPicker_vue_vue_type_style_index_0_lang_module_default }]]);
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
var _hoisted_1$2 = ["aria-label"];
var _hoisted_2$1 = [
	"aria-checked",
	"aria-label",
	"title",
	"data-test-id",
	"onClick"
];
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
					"aria-label": unref(t)("iconPicker.skinTone.selectSkinTone"),
					"data-test-id": "emoji-skin-tone-trigger"
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerEmoji) }, toDisplayString(displayEmoji.value), 3)]),
					_: 1
				}, 8, ["class", "aria-label"])]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.toneRow),
					role: "radiogroup",
					"aria-label": unref(t)("iconPicker.skinTone.tooltip"),
					"data-test-id": "emoji-skin-tone-popover"
				}, [(openBlock(), createElementBlock(Fragment, null, renderList(tones, (tone) => {
					return createBaseVNode("button", {
						key: tone.index,
						class: normalizeClass([_ctx.$style.toneSwatch, { [_ctx.$style.active]: model.value === tone.index }]),
						type: "button",
						role: "radio",
						"aria-checked": model.value === tone.index,
						"aria-label": unref(t)(tone.labelKey),
						title: unref(t)(tone.labelKey),
						"data-test-id": `skin-tone-${tone.index}`,
						onClick: ($event) => selectTone(tone.index)
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toneEmoji) }, toDisplayString(tone.emoji), 3)], 10, _hoisted_2$1);
				}), 64))], 10, _hoisted_1$2)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
var SkinTonePicker_vue_vue_type_style_index_0_lang_module_default = {
	triggerButton: "_triggerButton_1n54k_125",
	triggerEmoji: "_triggerEmoji_1n54k_129",
	toneRow: "_toneRow_1n54k_135",
	toneSwatch: "_toneSwatch_1n54k_142",
	active: "_active_1n54k_158",
	toneEmoji: "_toneEmoji_1n54k_162"
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
function useIconPickerSearch(lucideData, emojiSectionsData, query, selectedCategory, selectedSkinTone, delay = 150) {
	const debouncedQuery = refDebounced(query, delay);
	return {
		filteredIcons: computed(() => {
			if (!lucideData.value) return [];
			let entries = Object.entries(lucideData.value);
			if (selectedCategory.value) {
				const cat = selectedCategory.value;
				entries = entries.filter(([, icon]) => icon.categories.includes(cat));
			}
			const q = debouncedQuery.value.toLowerCase().trim();
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
			const q = debouncedQuery.value.toLowerCase().trim();
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
		}),
		debouncedQuery
	};
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/useIconPickerVirtualRows.ts
var DEFAULT_COLUMNS = 10;
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
var _hoisted_1$1 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [createBaseVNode("g", {
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
var _hoisted_1 = [
	"title",
	"aria-label",
	"onClick"
];
var _hoisted_2 = [
	"title",
	"aria-label",
	"onClick"
];
/**
* Icon picker with support for all Lucide icons and emojis.
* Search metadata (keywords, categories) and emoji data are lazy data modules,
* prefetched on hover over the trigger button for instant popup open.
* Icon SVG bodies load on demand in hash-bucketed chunks via the IconBodyLoader
* injected into N8nIcon (see src/icons/lucide), deduplicated per bucket.
* Emojis use emojibase-data with categories and skin tone support.
*/
var SKIN_TONE_STORAGE_KEY = "n8n-emoji-skin-tone";
var VIRTUAL_ROW_SIZE = 32;
var IconPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nIconPicker",
	__name: "IconPicker",
	props: /* @__PURE__ */ mergeModels({
		buttonTooltip: {},
		buttonSize: { default: "large" },
		isReadOnly: { type: Boolean },
		iconsOnly: {
			type: Boolean,
			default: false
		},
		showColorPicker: {
			type: Boolean,
			default: false
		},
		containerClass: {},
		buttonClass: {}
	}, {
		"modelValue": { default: {
			type: "icon",
			value: "smile"
		} },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const VIRTUAL_ROW_STYLE = { minHeight: "var(--height--md)" };
		const { t } = useI18n();
		const props = __props;
		const model = useModel(__props, "modelValue");
		const lucideData = ref(null);
		const rawEmojiSections = ref([]);
		const dataLoaded = ref(false);
		const dataLoading = ref(false);
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
		async function loadData() {
			if (dataLoaded.value || dataLoading.value) return;
			dataLoading.value = true;
			try {
				const [metaMod, emojiMod] = await Promise.all([__vitePreload(() => import("./lucideIconData-BZHdZSni.js"), []), __vitePreload(() => import("./emojiData-fjDv2_Lz.js"), [])]);
				lucideData.value = metaMod.lucideIcons;
				rawEmojiSections.value = emojiMod.emojiSections;
				dataLoaded.value = true;
			} finally {
				dataLoading.value = false;
			}
		}
		const popupVisible = ref(false);
		const tabs = computed(() => [{
			value: "icons",
			label: t("iconPicker.tabs.icons")
		}, ...props.iconsOnly ? [] : [{
			value: "emojis",
			label: t("iconPicker.tabs.emojis")
		}]]);
		const selectedTab = ref("icons");
		const searchQuery = ref("");
		const selectedCategory = ref(null);
		const selectedColor = ref(props.showColorPicker && model.value.type === "icon" ? model.value.color : void 0);
		const buttonIconName = computed(() => model.value.type === "icon" ? model.value.value : "smile");
		const selectedSkinTone = ref(parseInt(localStorage.getItem(SKIN_TONE_STORAGE_KEY) ?? "0", 10) || 0);
		const container = ref();
		const searchInputRef = ref();
		const colorPickerRef = ref();
		const skinTonePickerRef = ref();
		onClickOutside(container, () => {
			popupVisible.value = false;
		});
		const { filteredIcons, filteredIconSections, filteredEmojiSections, debouncedQuery } = useIconPickerSearch(availableLucideData, supportedEmojiSections, searchQuery, selectedCategory, selectedSkinTone);
		const isSearching = computed(() => debouncedQuery.value.trim().length > 0);
		const iconRows = computed(() => isSearching.value ? buildIconSearchRows(filteredIcons.value) : buildIconBrowseRows(filteredIconSections.value));
		const emojiRows = computed(() => buildEmojiRows(filteredEmojiSections.value));
		const selectIcon = (value) => {
			model.value = value;
			popupVisible.value = false;
		};
		const togglePopup = async () => {
			popupVisible.value = !popupVisible.value;
			if (popupVisible.value) {
				selectedTab.value = !props.iconsOnly && model.value.type === "emoji" ? "emojis" : "icons";
				searchQuery.value = "";
				selectedCategory.value = null;
				selectedColor.value = props.showColorPicker && model.value.type === "icon" ? model.value.color : void 0;
				await loadData();
				await nextTick();
				focusSearchInput();
			}
		};
		function focusSearchInput() {
			searchInputRef.value?.focus();
		}
		watch(selectedSkinTone, (tone) => {
			localStorage.setItem(SKIN_TONE_STORAGE_KEY, String(tone));
		});
		watch(selectedTab, async () => {
			await nextTick();
			focusSearchInput();
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
		function humanizeIconName(name) {
			return name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "container",
				ref: container,
				class: normalizeClass([{
					[_ctx.$style.container]: true,
					[_ctx.$style.isReadOnly]: __props.isReadOnly,
					[_ctx.$style[props.buttonSize]]: true
				}, __props.containerClass])
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style["icon-picker-button"]),
				onPointerenter: loadData
			}, [createVNode(unref(N8nTooltip_default), {
				placement: "top",
				"data-test-id": "icon-picker-tooltip",
				disabled: __props.isReadOnly
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(props.buttonTooltip ?? unref(t)("iconPicker.button.defaultToolTip")), 1)]),
				default: withCtx(() => [model.value.type === "icon" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					class: normalizeClass([_ctx.$style["icon-button"], __props.buttonClass]),
					icon: buttonIconName.value,
					size: __props.buttonSize,
					"icon-only": "",
					disabled: __props.isReadOnly,
					variant: "subtle",
					"aria-label": props.buttonTooltip ?? unref(t)("iconPicker.button.defaultToolTip"),
					"aria-expanded": popupVisible.value,
					"aria-haspopup": "true",
					"data-test-id": "icon-picker-button",
					style: normalizeStyle(model.value.type === "icon" && model.value.color ? { color: `var(${model.value.color})` } : void 0),
					onClick: togglePopup
				}, null, 8, [
					"class",
					"icon",
					"size",
					"disabled",
					"aria-label",
					"aria-expanded",
					"style"
				])) : model.value.type === "emoji" ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					class: normalizeClass([_ctx.$style["emoji-button"], __props.buttonClass]),
					size: __props.buttonSize,
					"icon-only": "",
					variant: "subtle",
					"aria-label": props.buttonTooltip ?? unref(t)("iconPicker.button.defaultToolTip"),
					"aria-expanded": popupVisible.value,
					"aria-haspopup": "true",
					"data-test-id": "icon-picker-button",
					disabled: __props.isReadOnly,
					onClick: togglePopup
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(model.value.value), 1)]),
					_: 1
				}, 8, [
					"class",
					"size",
					"aria-label",
					"aria-expanded",
					"disabled"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["disabled"])], 34), popupVisible.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.popup, { [_ctx.$style.iconsOnly]: props.iconsOnly }]),
				"data-test-id": "icon-picker-popup"
			}, [
				!props.iconsOnly ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.tabs)
				}, [createVNode(unref(N8nTabs_default), {
					modelValue: selectedTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTab.value = $event),
					options: tabs.value,
					"data-test-id": "icon-picker-tabs"
				}, null, 8, ["modelValue", "options"])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.searchRow) }, [
					createVNode(unref(Input_default), {
						ref_key: "searchInputRef",
						ref: searchInputRef,
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchQuery.value = $event),
						placeholder: unref(t)("iconPicker.search.placeholder"),
						clearable: "",
						size: "small",
						"data-test-id": "icon-picker-search"
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "search",
							size: 14
						})]),
						_: 1
					}, 8, ["modelValue", "placeholder"]),
					selectedTab.value === "icons" && __props.showColorPicker ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "top",
						disabled: colorPickerRef.value?.isOpen,
						teleported: false
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(t)("iconPicker.colorPicker.selectColor")), 1)]),
						default: withCtx(() => [createVNode(IconColorPicker_default, {
							ref_key: "colorPickerRef",
							ref: colorPickerRef,
							modelValue: selectedColor.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedColor.value = $event),
							"data-test-id": "icon-color-picker"
						}, null, 8, ["modelValue"])]),
						_: 1
					}, 8, ["disabled"])) : createCommentVNode("", true),
					!props.iconsOnly && selectedTab.value === "emojis" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "top",
						disabled: skinTonePickerRef.value?.isOpen,
						teleported: false
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(t)("iconPicker.skinTone.selectSkinTone")), 1)]),
						default: withCtx(() => [createVNode(SkinTonePicker_default, {
							ref_key: "skinTonePickerRef",
							ref: skinTonePickerRef,
							modelValue: selectedSkinTone.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedSkinTone.value = $event)
						}, null, 8, ["modelValue"])]),
						_: 1
					}, 8, ["disabled"])) : createCommentVNode("", true),
					createVNode(unref(N8nTooltip_default), {
						placement: "top",
						teleported: false
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(selectedTab.value === "icons" ? unref(t)("iconPicker.random.icon") : unref(t)("iconPicker.random.emoji")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							class: normalizeClass(_ctx.$style.shuffleButton),
							variant: "outline",
							size: "medium",
							"icon-only": "",
							"aria-label": selectedTab.value === "icons" ? unref(t)("iconPicker.random.icon") : unref(t)("iconPicker.random.emoji"),
							"data-test-id": "icon-picker-random",
							onClick: _cache[4] || (_cache[4] = ($event) => selectedTab.value === "icons" ? selectRandomIcon() : selectRandomEmoji())
						}, {
							default: withCtx(() => [createVNode(unref(shuffle_default), { class: normalizeClass(_ctx.$style.shuffleIcon) }, null, 8, ["class"])]),
							_: 1
						}, 8, ["class", "aria-label"])]),
						_: 1
					})
				], 2),
				dataLoading.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.loadingState),
					"data-test-id": "icon-picker-loading"
				}, toDisplayString(unref(t)("iconPicker.loading")), 3)) : selectedTab.value === "icons" && dataLoaded.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.content)
				}, [iconRows.value.length > 0 ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
					key: 0,
					items: iconRows.value,
					"item-key": "id",
					"item-size": VIRTUAL_ROW_SIZE
				}, {
					default: withCtx(({ item }) => [item.type === "header" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.sectionHeaderRow)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, toDisplayString(unref(t)(item.labelKey)), 3)], 2)) : item.type === "icon-row" ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.iconGridRow),
						style: VIRTUAL_ROW_STYLE
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.iconNames, (name) => {
						return openBlock(), createElementBlock("button", {
							key: name,
							type: "button",
							class: normalizeClass(_ctx.$style.iconButton),
							style: normalizeStyle(selectedColor.value ? { color: `var(${selectedColor.value})` } : void 0),
							"data-test-id": "icon-picker-icon",
							title: humanizeIconName(name),
							"aria-label": humanizeIconName(name),
							onClick: ($event) => selectIcon({
								type: "icon",
								value: name,
								color: selectedColor.value
							})
						}, [createVNode(unref(N8nIcon_default), {
							icon: name,
							size: 20,
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, ["icon", "class"])], 14, _hoisted_1);
					}), 128))], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["items"])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.emptyState),
					"data-test-id": "icon-picker-no-results"
				}, toDisplayString(unref(t)("iconPicker.search.noResults")), 3))], 2)) : !props.iconsOnly && selectedTab.value === "emojis" && dataLoaded.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.content)
				}, [emojiRows.value.length > 0 ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
					key: 0,
					items: emojiRows.value,
					"item-key": "id",
					"item-size": VIRTUAL_ROW_SIZE
				}, {
					default: withCtx(({ item }) => [item.type === "header" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.sectionHeaderRow)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, toDisplayString(unref(t)(item.labelKey)), 3)], 2)) : item.type === "emoji-row" ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emojiGridRow),
						style: VIRTUAL_ROW_STYLE
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.emojis, (emoji) => {
						return openBlock(), createElementBlock("button", {
							key: emoji.u,
							type: "button",
							class: normalizeClass(_ctx.$style.emojiButton),
							"data-test-id": "icon-picker-emoji",
							title: emoji.l,
							"aria-label": emoji.l,
							onClick: ($event) => selectIcon({
								type: "emoji",
								value: emoji.display
							})
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.emoji) }, toDisplayString(emoji.display), 3)], 10, _hoisted_2);
					}), 128))], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["items"])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.emptyState),
					"data-test-id": "icon-picker-no-results"
				}, toDisplayString(unref(t)("iconPicker.search.noResults")), 3))], 2)) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/IconPicker.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1almw_125";
var isReadOnly = "_isReadOnly_1almw_130";
var xlarge = "_xlarge_1almw_141";
var xxlarge = "_xxlarge_1almw_145";
var small = "_small_1almw_154";
var popup = "_popup_1almw_164";
var tabs = "_tabs_1almw_177";
var searchRow = "_searchRow_1almw_181";
var iconsOnly = "_iconsOnly_1almw_191";
var content = "_content_1almw_194";
var sectionHeaderRow = "_sectionHeaderRow_1almw_198";
var iconGridRow = "_iconGridRow_1almw_201";
var emojiGridRow = "_emojiGridRow_1almw_202";
var iconButton = "_iconButton_1almw_206";
var emojiButton = "_emojiButton_1almw_207";
var icon = "_icon_1almw_130";
var emoji = "_emoji_1almw_131";
var sectionHeader = "_sectionHeader_1almw_198";
var shuffleButton = "_shuffleButton_1almw_253";
var shuffleIcon = "_shuffleIcon_1almw_256";
var loadingState = "_loadingState_1almw_262";
var emptyState = "_emptyState_1almw_263";
var IconPicker_vue_vue_type_style_index_0_lang_module_default = {
	container,
	isReadOnly,
	"icon-button": "_icon-button_1almw_130",
	"emoji-button": "_emoji-button_1almw_131",
	xlarge,
	xxlarge,
	small,
	popup,
	tabs,
	searchRow,
	iconsOnly,
	content,
	sectionHeaderRow,
	iconGridRow,
	emojiGridRow,
	iconButton,
	emojiButton,
	icon,
	emoji,
	sectionHeader,
	shuffleButton,
	shuffleIcon,
	loadingState,
	emptyState
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconPicker/index.ts
var N8nIconPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(IconPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": IconPicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nIconPicker_default as t };
