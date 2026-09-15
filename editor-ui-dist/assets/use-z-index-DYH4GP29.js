import { Gt as unref, It as ref, P as getCurrentInstance, R as inject, S as computed, jt as isRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { p as isNumber, v as get } from "./use-namespace-xWWi2xIE.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/locale/lang/en.mjs
var English = {
	name: "en",
	el: {
		colorpicker: {
			confirm: "OK",
			clear: "Clear",
			defaultLabel: "color picker",
			description: "current color is {color}. press enter to select a new color."
		},
		datepicker: {
			now: "Now",
			today: "Today",
			cancel: "Cancel",
			clear: "Clear",
			confirm: "OK",
			dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
			monthTablePrompt: "Use the arrow keys and enter to select the month",
			yearTablePrompt: "Use the arrow keys and enter to select the year",
			selectedDate: "Selected date",
			selectDate: "Select date",
			selectTime: "Select time",
			startDate: "Start Date",
			startTime: "Start Time",
			endDate: "End Date",
			endTime: "End Time",
			prevYear: "Previous Year",
			nextYear: "Next Year",
			prevMonth: "Previous Month",
			nextMonth: "Next Month",
			year: "",
			month1: "January",
			month2: "February",
			month3: "March",
			month4: "April",
			month5: "May",
			month6: "June",
			month7: "July",
			month8: "August",
			month9: "September",
			month10: "October",
			month11: "November",
			month12: "December",
			week: "week",
			weeks: {
				sun: "Sun",
				mon: "Mon",
				tue: "Tue",
				wed: "Wed",
				thu: "Thu",
				fri: "Fri",
				sat: "Sat"
			},
			weeksFull: {
				sun: "Sunday",
				mon: "Monday",
				tue: "Tuesday",
				wed: "Wednesday",
				thu: "Thursday",
				fri: "Friday",
				sat: "Saturday"
			},
			months: {
				jan: "Jan",
				feb: "Feb",
				mar: "Mar",
				apr: "Apr",
				may: "May",
				jun: "Jun",
				jul: "Jul",
				aug: "Aug",
				sep: "Sep",
				oct: "Oct",
				nov: "Nov",
				dec: "Dec"
			}
		},
		inputNumber: {
			decrease: "decrease number",
			increase: "increase number"
		},
		select: {
			loading: "Loading",
			noMatch: "No matching data",
			noData: "No data",
			placeholder: "Select"
		},
		dropdown: { toggleDropdown: "Toggle Dropdown" },
		cascader: {
			noMatch: "No matching data",
			loading: "Loading",
			placeholder: "Select",
			noData: "No data"
		},
		pagination: {
			goto: "Go to",
			pagesize: "/page",
			total: "Total {total}",
			pageClassifier: "",
			page: "Page",
			prev: "Go to previous page",
			next: "Go to next page",
			currentPage: "page {pager}",
			prevPages: "Previous {pager} pages",
			nextPages: "Next {pager} pages",
			deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
		},
		dialog: { close: "Close this dialog" },
		drawer: { close: "Close this dialog" },
		messagebox: {
			title: "Message",
			confirm: "OK",
			cancel: "Cancel",
			error: "Illegal input",
			close: "Close this dialog"
		},
		upload: {
			deleteTip: "press delete to remove",
			delete: "Delete",
			preview: "Preview",
			continue: "Continue"
		},
		slider: {
			defaultLabel: "slider between {min} and {max}",
			defaultRangeStartLabel: "pick start value",
			defaultRangeEndLabel: "pick end value"
		},
		table: {
			emptyText: "No Data",
			confirmFilter: "Confirm",
			resetFilter: "Reset",
			clearFilter: "All",
			sumText: "Sum"
		},
		tree: { emptyText: "No Data" },
		transfer: {
			noMatch: "No matching data",
			noData: "No data",
			titles: ["List 1", "List 2"],
			filterPlaceholder: "Enter keyword",
			noCheckedFormat: "{total} items",
			hasCheckedFormat: "{checked}/{total} checked"
		},
		image: { error: "FAILED" },
		pageHeader: { title: "Back" },
		popconfirm: {
			confirmButtonText: "Yes",
			cancelButtonText: "No"
		}
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-locale/index.mjs
var buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
var translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
	var _a;
	return `${(_a = option == null ? void 0 : option[key]) != null ? _a : `{${key}}`}`;
});
var buildLocaleContext = (locale) => {
	return {
		lang: computed(() => unref(locale).name),
		locale: isRef(locale) ? locale : ref(locale),
		t: buildTranslator(locale)
	};
};
var localeContextKey = Symbol("localeContextKey");
var useLocale = (localeOverrides) => {
	const locale = localeOverrides || inject(localeContextKey, ref());
	return buildLocaleContext(computed(() => locale.value || English));
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-z-index/index.mjs
var zIndex = ref(0);
var defaultInitialZIndex = 2e3;
var zIndexContextKey = Symbol("zIndexContextKey");
var useZIndex = (zIndexOverrides) => {
	const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0);
	const initialZIndex = computed(() => {
		const zIndexFromInjection = unref(zIndexInjection);
		return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
	});
	const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
	const nextZIndex = () => {
		zIndex.value++;
		return currentZIndex.value;
	};
	return {
		initialZIndex,
		currentZIndex,
		nextZIndex
	};
};
//#endregion
export { useLocale as a, localeContextKey as i, useZIndex as n, zIndexContextKey as r, defaultInitialZIndex as t };
