import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, ct as toHandlers, gt as watch, it as renderSlot, j as createVNode, jt as isRef, m as withKeys, rt as renderList, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { n as usePrimitiveElement } from "./Collection-CV7FjEVf.js";
import { d as useEventListener, j as createContext, m as useVModel, n as Primitive, t as VisuallyHidden_default } from "./VisuallyHidden-lv4qVqRn.js";
import { t as useDirection } from "./useDirection-UW3tNAWY.js";
import { u as useForwardPropsEmits } from "./PopperContent-Dajl-5rg.js";
import { i as defu } from "./FocusScope-DAXHH9RF.js";
import { C as $2b4dce13dd5a17fa$export$842a2cf37af977e1, S as $3b62074eb05584b2$export$f297eb839006d339, _ as $14e0f24ef4ac5c92$export$ea39ec197993aef0, b as $3b62074eb05584b2$export$80ee6245ec4f29ec, d as $14e0f24ef4ac5c92$export$91b62ebf2ba703ee, f as $14e0f24ef4ac5c92$export$a18c89cbd24170ff, g as $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3, h as $14e0f24ef4ac5c92$export$aa8b41735afcabd2, l as $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2, m as $14e0f24ef4ac5c92$export$a5a3b454ada2268e, n as $35ea8db9cb2ccb90$export$ca871e8dbb80966f, o as $11d87f3f76e88657$export$b4a036af3fc0b032, p as $14e0f24ef4ac5c92$export$a2258d9c4118825c, r as $35ea8db9cb2ccb90$export$d3b7288e7994edea, s as $14e0f24ef4ac5c92$export$2061056d06d7cdf7, t as $35ea8db9cb2ccb90$export$99faa760c7908e4f, u as $14e0f24ef4ac5c92$export$629b0a497aa65267, v as $3b62074eb05584b2$export$4475b7e617eb123c, x as $3b62074eb05584b2$export$c36e0ecb2d4fa69d, y as $3b62074eb05584b2$export$553d7fa8e3805fc0 } from "./CalendarDate-BViQJNZ4.js";
import { t as useKbd } from "./useKbd-CNop2v9G.js";
import { t as useLocale } from "./useLocale-NoxszNkz.js";
import { i as PopoverRoot_default, n as PopoverPortal_default, r as PopoverContent_default, t as PopoverTrigger_default } from "./PopoverTrigger-Db2gWmZU.js";
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/JapaneseCalendar.mjs
var $62225008020f0a13$var$ERA_START_DATES = [
	[
		1868,
		9,
		8
	],
	[
		1912,
		7,
		30
	],
	[
		1926,
		12,
		25
	],
	[
		1989,
		1,
		8
	],
	[
		2019,
		5,
		1
	]
];
var $62225008020f0a13$var$ERA_END_DATES = [
	[
		1912,
		7,
		29
	],
	[
		1926,
		12,
		24
	],
	[
		1989,
		1,
		7
	],
	[
		2019,
		4,
		30
	]
];
var $62225008020f0a13$var$ERA_ADDENDS = [
	1867,
	1911,
	1925,
	1988,
	2018
];
var $62225008020f0a13$var$ERA_NAMES = [
	"meiji",
	"taisho",
	"showa",
	"heisei",
	"reiwa"
];
function $62225008020f0a13$var$findEraFromGregorianDate(date) {
	const idx = $62225008020f0a13$var$ERA_START_DATES.findIndex(([year, month, day]) => {
		if (date.year < year) return true;
		if (date.year === year && date.month < month) return true;
		if (date.year === year && date.month === month && date.day < day) return true;
		return false;
	});
	if (idx === -1) return $62225008020f0a13$var$ERA_START_DATES.length - 1;
	if (idx === 0) return 0;
	return idx - 1;
}
function $62225008020f0a13$var$toGregorian(date) {
	let eraAddend = $62225008020f0a13$var$ERA_ADDENDS[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
	if (!eraAddend) throw new Error("Unknown era: " + date.era);
	return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(date.year + eraAddend, date.month, date.day);
}
var $62225008020f0a13$export$b746ab2b60cdffbf = class extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
	fromJulianDay(jd) {
		let date = super.fromJulianDay(jd);
		let era = $62225008020f0a13$var$findEraFromGregorianDate(date);
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, $62225008020f0a13$var$ERA_NAMES[era], date.year - $62225008020f0a13$var$ERA_ADDENDS[era], date.month, date.day);
	}
	toJulianDay(date) {
		return super.toJulianDay($62225008020f0a13$var$toGregorian(date));
	}
	balanceDate(date) {
		let gregorianDate = $62225008020f0a13$var$toGregorian(date);
		let era = $62225008020f0a13$var$findEraFromGregorianDate(gregorianDate);
		if ($62225008020f0a13$var$ERA_NAMES[era] !== date.era) {
			date.era = $62225008020f0a13$var$ERA_NAMES[era];
			date.year = gregorianDate.year - $62225008020f0a13$var$ERA_ADDENDS[era];
		}
		this.constrainDate(date);
	}
	constrainDate(date) {
		let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
		let end = $62225008020f0a13$var$ERA_END_DATES[idx];
		if (end != null) {
			let [endYear, endMonth, endDay] = end;
			let maxYear = endYear - $62225008020f0a13$var$ERA_ADDENDS[idx];
			date.year = Math.max(1, Math.min(maxYear, date.year));
			if (date.year === maxYear) {
				date.month = Math.min(endMonth, date.month);
				if (date.month === endMonth) date.day = Math.min(endDay, date.day);
			}
		}
		if (date.year === 1 && idx >= 0) {
			let [, startMonth, startDay] = $62225008020f0a13$var$ERA_START_DATES[idx];
			date.month = Math.max(startMonth, date.month);
			if (date.month === startMonth) date.day = Math.max(startDay, date.day);
		}
	}
	getEras() {
		return $62225008020f0a13$var$ERA_NAMES;
	}
	getYearsInEra(date) {
		let era = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
		let cur = $62225008020f0a13$var$ERA_START_DATES[era];
		let next = $62225008020f0a13$var$ERA_START_DATES[era + 1];
		if (next == null) return 9999 - cur[0] + 1;
		let years = next[0] - cur[0];
		if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
		return years;
	}
	getDaysInMonth(date) {
		return super.getDaysInMonth($62225008020f0a13$var$toGregorian(date));
	}
	getMinimumMonthInYear(date) {
		let start = $62225008020f0a13$var$getMinimums(date);
		return start ? start[1] : 1;
	}
	getMinimumDayInMonth(date) {
		let start = $62225008020f0a13$var$getMinimums(date);
		return start && date.month === start[1] ? start[2] : 1;
	}
	constructor(...args) {
		super(...args), this.identifier = "japanese";
	}
};
function $62225008020f0a13$var$getMinimums(date) {
	if (date.year === 1) return $62225008020f0a13$var$ERA_START_DATES[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
}
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/BuddhistCalendar.mjs
var $8d73d47422ca7302$var$BUDDHIST_ERA_START = -543;
var $8d73d47422ca7302$export$42d20a78301dee44 = class extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
	fromJulianDay(jd) {
		let gregorianDate = super.fromJulianDay(jd);
		let year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(gregorianDate.era, gregorianDate.year);
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year - $8d73d47422ca7302$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
	}
	toJulianDay(date) {
		return super.toJulianDay($8d73d47422ca7302$var$toGregorian(date));
	}
	getEras() {
		return ["BE"];
	}
	getDaysInMonth(date) {
		return super.getDaysInMonth($8d73d47422ca7302$var$toGregorian(date));
	}
	balanceDate() {}
	constructor(...args) {
		super(...args), this.identifier = "buddhist";
	}
};
function $8d73d47422ca7302$var$toGregorian(date) {
	let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(date.year + $8d73d47422ca7302$var$BUDDHIST_ERA_START);
	return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(era, year, date.month, date.day);
}
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/TaiwanCalendar.mjs
var $5f31bd6f0c8940b2$var$TAIWAN_ERA_START = 1911;
function $5f31bd6f0c8940b2$var$gregorianYear(date) {
	return date.era === "minguo" ? date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START : 1 - date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
}
function $5f31bd6f0c8940b2$var$gregorianToTaiwan(year) {
	let y = year - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
	if (y > 0) return ["minguo", y];
	else return ["before_minguo", 1 - y];
}
var $5f31bd6f0c8940b2$export$65e01080afcb0799 = class extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
	fromJulianDay(jd) {
		let date = super.fromJulianDay(jd);
		let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan($3b62074eb05584b2$export$c36e0ecb2d4fa69d(date.era, date.year));
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, era, year, date.month, date.day);
	}
	toJulianDay(date) {
		return super.toJulianDay($5f31bd6f0c8940b2$var$toGregorian(date));
	}
	getEras() {
		return ["before_minguo", "minguo"];
	}
	balanceDate(date) {
		let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan($5f31bd6f0c8940b2$var$gregorianYear(date));
		date.era = era;
		date.year = year;
	}
	isInverseEra(date) {
		return date.era === "before_minguo";
	}
	getDaysInMonth(date) {
		return super.getDaysInMonth($5f31bd6f0c8940b2$var$toGregorian(date));
	}
	getYearsInEra(date) {
		return date.era === "before_minguo" ? 9999 : 9999 - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
	}
	constructor(...args) {
		super(...args), this.identifier = "roc";
	}
};
function $5f31bd6f0c8940b2$var$toGregorian(date) {
	let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c($5f31bd6f0c8940b2$var$gregorianYear(date));
	return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(era, year, date.month, date.day);
}
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/PersianCalendar.mjs
var $f3ed2e4472ae7e25$var$PERSIAN_EPOCH = 1948320;
var $f3ed2e4472ae7e25$var$MONTH_START = [
	0,
	31,
	62,
	93,
	124,
	155,
	186,
	216,
	246,
	276,
	306,
	336
];
var $f3ed2e4472ae7e25$export$37fccdbfd14c5939 = class {
	fromJulianDay(jd) {
		let daysSinceEpoch = jd - $f3ed2e4472ae7e25$var$PERSIAN_EPOCH;
		let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
		let dayOfYear = daysSinceEpoch - (365 * (year - 1) + Math.floor((8 * year + 21) / 33));
		let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
		let day = dayOfYear - $f3ed2e4472ae7e25$var$MONTH_START[month] + 1;
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year, month + 1, day);
	}
	toJulianDay(date) {
		let jd = $f3ed2e4472ae7e25$var$PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
		jd += $f3ed2e4472ae7e25$var$MONTH_START[date.month - 1];
		jd += date.day;
		return jd;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(date) {
		if (date.month <= 6) return 31;
		if (date.month <= 11) return 30;
		return $2b4dce13dd5a17fa$export$842a2cf37af977e1(25 * date.year + 11, 33) < 8 ? 30 : 29;
	}
	getEras() {
		return ["AP"];
	}
	getYearsInEra() {
		return 9377;
	}
	constructor() {
		this.identifier = "persian";
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/IndianCalendar.mjs
var $82c358003bdda0a8$var$INDIAN_ERA_START = 78;
var $82c358003bdda0a8$var$INDIAN_YEAR_START = 80;
var $82c358003bdda0a8$export$39f31c639fa15726 = class extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
	fromJulianDay(jd) {
		let date = super.fromJulianDay(jd);
		let indianYear = date.year - $82c358003bdda0a8$var$INDIAN_ERA_START;
		let yDay = jd - $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, 1, 1);
		let leapMonth;
		if (yDay < $82c358003bdda0a8$var$INDIAN_YEAR_START) {
			indianYear--;
			leapMonth = $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year - 1) ? 31 : 30;
			yDay += leapMonth + 155 + 90 + 10;
		} else {
			leapMonth = $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 31 : 30;
			yDay -= $82c358003bdda0a8$var$INDIAN_YEAR_START;
		}
		let indianMonth;
		let indianDay;
		if (yDay < leapMonth) {
			indianMonth = 1;
			indianDay = yDay + 1;
		} else {
			let mDay = yDay - leapMonth;
			if (mDay < 155) {
				indianMonth = Math.floor(mDay / 31) + 2;
				indianDay = mDay % 31 + 1;
			} else {
				mDay -= 155;
				indianMonth = Math.floor(mDay / 30) + 7;
				indianDay = mDay % 30 + 1;
			}
		}
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, indianYear, indianMonth, indianDay);
	}
	toJulianDay(date) {
		let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START);
		let leapMonth;
		let jd;
		if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) {
			leapMonth = 31;
			jd = $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 21);
		} else {
			leapMonth = 30;
			jd = $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 22);
		}
		if (date.month === 1) return jd + date.day - 1;
		jd += leapMonth + Math.min(date.month - 2, 5) * 31;
		if (date.month >= 8) jd += (date.month - 7) * 30;
		jd += date.day - 1;
		return jd;
	}
	getDaysInMonth(date) {
		if (date.month === 1 && $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START)) return 31;
		if (date.month >= 2 && date.month <= 6) return 31;
		return 30;
	}
	getYearsInEra() {
		return 9919;
	}
	getEras() {
		return ["saka"];
	}
	balanceDate() {}
	constructor(...args) {
		super(...args), this.identifier = "indian";
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/IslamicCalendar.mjs
var $f2f3e0e3a817edbd$var$CIVIL_EPOC = 1948440;
var $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC = 1948439;
var $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START = 1300;
var $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END = 1600;
var $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS = 460322;
function $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, day) {
	return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $f2f3e0e3a817edbd$var$julianDayToIslamic(calendar, epoch, jd) {
	let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
	let month = Math.min(12, Math.ceil((jd - (29 + $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
	return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(calendar, year, month, jd - $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, 1) + 1);
}
function $f2f3e0e3a817edbd$var$isLeapYear(year) {
	return (14 + 11 * year) % 30 < 11;
}
var $f2f3e0e3a817edbd$export$2066795aadd37bfc = class {
	fromJulianDay(jd) {
		return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$CIVIL_EPOC, jd);
	}
	toJulianDay(date) {
		return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$CIVIL_EPOC, date.year, date.month, date.day);
	}
	getDaysInMonth(date) {
		let length = 29 + date.month % 2;
		if (date.month === 12 && $f2f3e0e3a817edbd$var$isLeapYear(date.year)) length++;
		return length;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(date) {
		return $f2f3e0e3a817edbd$var$isLeapYear(date.year) ? 355 : 354;
	}
	getYearsInEra() {
		return 9665;
	}
	getEras() {
		return ["AH"];
	}
	constructor() {
		this.identifier = "islamic-civil";
	}
};
var $f2f3e0e3a817edbd$export$37f0887f2f9d22f7 = class extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
	fromJulianDay(jd) {
		return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, jd);
	}
	toJulianDay(date) {
		return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
	}
	constructor(...args) {
		super(...args), this.identifier = "islamic-tbla";
	}
};
var $f2f3e0e3a817edbd$var$UMALQURA_DATA = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
var $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH;
var $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE;
function $f2f3e0e3a817edbd$var$umalquraYearStart(year) {
	return $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS + $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
function $f2f3e0e3a817edbd$var$umalquraMonthLength(year, month) {
	let idx = year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START;
	let mask = 1 << 11 - (month - 1);
	if (($f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
	else return 30;
}
function $f2f3e0e3a817edbd$var$umalquraMonthStart(year, month) {
	let day = $f2f3e0e3a817edbd$var$umalquraYearStart(year);
	for (let i = 1; i < month; i++) day += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
	return day;
}
function $f2f3e0e3a817edbd$var$umalquraYearLength(year) {
	return $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year + 1 - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
var $f2f3e0e3a817edbd$export$5baab4758c231076 = class extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
	fromJulianDay(jd) {
		let days = jd - $f2f3e0e3a817edbd$var$CIVIL_EPOC;
		let startDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_START);
		let endDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END);
		if (days < startDays || days > endDays) return super.fromJulianDay(jd);
		else {
			let y = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START - 1;
			let m = 1;
			let d = 1;
			while (d > 0) {
				y++;
				d = days - $f2f3e0e3a817edbd$var$umalquraYearStart(y) + 1;
				let yearLength = $f2f3e0e3a817edbd$var$umalquraYearLength(y);
				if (d === yearLength) {
					m = 12;
					break;
				} else if (d < yearLength) {
					let monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
					m = 1;
					while (d > monthLength) {
						d -= monthLength;
						m++;
						monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
					}
					break;
				}
			}
			return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, y, m, days - $f2f3e0e3a817edbd$var$umalquraMonthStart(y, m) + 1);
		}
	}
	toJulianDay(date) {
		if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
		return $f2f3e0e3a817edbd$var$CIVIL_EPOC + $f2f3e0e3a817edbd$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
	}
	getDaysInMonth(date) {
		if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
		return $f2f3e0e3a817edbd$var$umalquraMonthLength(date.year, date.month);
	}
	getDaysInYear(date) {
		if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
		return $f2f3e0e3a817edbd$var$umalquraYearLength(date.year);
	}
	constructor() {
		super(), this.identifier = "islamic-umalqura";
		if (!$f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH) $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($f2f3e0e3a817edbd$var$UMALQURA_DATA), (c) => c.charCodeAt(0)).buffer);
		if (!$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE) {
			$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START + 1);
			let yearStart = 0;
			for (let year = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START; year <= $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END; year++) {
				$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] = yearStart;
				for (let i = 1; i <= 12; i++) yearStart += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
			}
		}
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/HebrewCalendar.mjs
var $7c5f6fbf42389787$var$HEBREW_EPOCH = 347997;
var $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
var $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
var $7c5f6fbf42389787$var$MONTH_DAYS = 29;
var $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
var $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
function $7c5f6fbf42389787$var$isLeapYear(year) {
	return $2b4dce13dd5a17fa$export$842a2cf37af977e1(year * 7 + 1, 19) < 7;
}
function $7c5f6fbf42389787$var$hebrewDelay1(year) {
	let months = Math.floor((235 * year - 234) / 19);
	let parts = 12084 + 13753 * months;
	let day = months * 29 + Math.floor(parts / 25920);
	if ($2b4dce13dd5a17fa$export$842a2cf37af977e1(3 * (day + 1), 7) < 3) day += 1;
	return day;
}
function $7c5f6fbf42389787$var$hebrewDelay2(year) {
	let last = $7c5f6fbf42389787$var$hebrewDelay1(year - 1);
	let present = $7c5f6fbf42389787$var$hebrewDelay1(year);
	if ($7c5f6fbf42389787$var$hebrewDelay1(year + 1) - present === 356) return 2;
	if (present - last === 382) return 1;
	return 0;
}
function $7c5f6fbf42389787$var$startOfYear(year) {
	return $7c5f6fbf42389787$var$hebrewDelay1(year) + $7c5f6fbf42389787$var$hebrewDelay2(year);
}
function $7c5f6fbf42389787$var$getDaysInYear(year) {
	return $7c5f6fbf42389787$var$startOfYear(year + 1) - $7c5f6fbf42389787$var$startOfYear(year);
}
function $7c5f6fbf42389787$var$getYearType(year) {
	let yearLength = $7c5f6fbf42389787$var$getDaysInYear(year);
	if (yearLength > 380) yearLength -= 30;
	switch (yearLength) {
		case 353: return 0;
		case 354: return 1;
		case 355: return 2;
	}
}
function $7c5f6fbf42389787$var$getDaysInMonth(year, month) {
	if (month >= 6 && !$7c5f6fbf42389787$var$isLeapYear(year)) month++;
	if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
	let yearType = $7c5f6fbf42389787$var$getYearType(year);
	if (month === 2) return yearType === 2 ? 30 : 29;
	if (month === 3) return yearType === 0 ? 29 : 30;
	if (month === 6) return $7c5f6fbf42389787$var$isLeapYear(year) ? 30 : 0;
	return 30;
}
var $7c5f6fbf42389787$export$ca405048b8fb5af = class {
	fromJulianDay(jd) {
		let d = jd - $7c5f6fbf42389787$var$HEBREW_EPOCH;
		let m = d * $7c5f6fbf42389787$var$DAY_PARTS / $7c5f6fbf42389787$var$MONTH_PARTS;
		let year = Math.floor((19 * m + 234) / 235) + 1;
		let ys = $7c5f6fbf42389787$var$startOfYear(year);
		let dayOfYear = Math.floor(d - ys);
		while (dayOfYear < 1) {
			year--;
			ys = $7c5f6fbf42389787$var$startOfYear(year);
			dayOfYear = Math.floor(d - ys);
		}
		let month = 1;
		let monthStart = 0;
		while (monthStart < dayOfYear) {
			monthStart += $7c5f6fbf42389787$var$getDaysInMonth(year, month);
			month++;
		}
		month--;
		monthStart -= $7c5f6fbf42389787$var$getDaysInMonth(year, month);
		let day = dayOfYear - monthStart;
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year, month, day);
	}
	toJulianDay(date) {
		let jd = $7c5f6fbf42389787$var$startOfYear(date.year);
		for (let month = 1; month < date.month; month++) jd += $7c5f6fbf42389787$var$getDaysInMonth(date.year, month);
		return jd + date.day + $7c5f6fbf42389787$var$HEBREW_EPOCH;
	}
	getDaysInMonth(date) {
		return $7c5f6fbf42389787$var$getDaysInMonth(date.year, date.month);
	}
	getMonthsInYear(date) {
		return $7c5f6fbf42389787$var$isLeapYear(date.year) ? 13 : 12;
	}
	getDaysInYear(date) {
		return $7c5f6fbf42389787$var$getDaysInYear(date.year);
	}
	getYearsInEra() {
		return 9999;
	}
	getEras() {
		return ["AM"];
	}
	balanceYearMonth(date, previousDate) {
		if (previousDate.year !== date.year) {
			if ($7c5f6fbf42389787$var$isLeapYear(previousDate.year) && !$7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
			else if (!$7c5f6fbf42389787$var$isLeapYear(previousDate.year) && $7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
		}
	}
	constructor() {
		this.identifier = "hebrew";
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/EthiopicCalendar.mjs
var $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH = 1723856;
var $b956b2d7a6cf451f$var$COPTIC_EPOCH = 1824665;
var $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA = 5500;
function $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, day) {
	return epoch + 365 * year + Math.floor(year / 4) + 30 * (month - 1) + day - 1;
}
function $b956b2d7a6cf451f$var$julianDayToCE(epoch, jd) {
	let year = Math.floor(4 * (jd - epoch) / 1461);
	let month = 1 + Math.floor((jd - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
	return [
		year,
		month,
		jd + 1 - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, 1)
	];
}
function $b956b2d7a6cf451f$var$getLeapDay(year) {
	return Math.floor(year % 4 / 3);
}
function $b956b2d7a6cf451f$var$getDaysInMonth(year, month) {
	if (month % 13 !== 0) return 30;
	else return $b956b2d7a6cf451f$var$getLeapDay(year) + 5;
}
var $b956b2d7a6cf451f$export$26ba6eab5e20cd7d = class {
	fromJulianDay(jd) {
		let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
		let era = "AM";
		if (year <= 0) {
			era = "AA";
			year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
		}
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, era, year, month, day);
	}
	toJulianDay(date) {
		let year = date.year;
		if (date.era === "AA") year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
		return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, year, date.month, date.day);
	}
	getDaysInMonth(date) {
		return $b956b2d7a6cf451f$var$getDaysInMonth(date.year, date.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(date) {
		return 365 + $b956b2d7a6cf451f$var$getLeapDay(date.year);
	}
	getYearsInEra(date) {
		return date.era === "AA" ? 9999 : 9991;
	}
	getEras() {
		return ["AA", "AM"];
	}
	constructor() {
		this.identifier = "ethiopic";
	}
};
var $b956b2d7a6cf451f$export$d72e0c37005a4914 = class extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
	fromJulianDay(jd) {
		let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
		year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, "AA", year, month, day);
	}
	getEras() {
		return ["AA"];
	}
	getYearsInEra() {
		return 9999;
	}
	constructor(...args) {
		super(...args), this.identifier = "ethioaa";
	}
};
var $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1 = class extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
	fromJulianDay(jd) {
		let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$COPTIC_EPOCH, jd);
		let era = "CE";
		if (year <= 0) {
			era = "BCE";
			year = 1 - year;
		}
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, era, year, month, day);
	}
	toJulianDay(date) {
		let year = date.year;
		if (date.era === "BCE") year = 1 - year;
		return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$COPTIC_EPOCH, year, date.month, date.day);
	}
	getDaysInMonth(date) {
		let year = date.year;
		if (date.era === "BCE") year = 1 - year;
		return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
	}
	isInverseEra(date) {
		return date.era === "BCE";
	}
	balanceDate(date) {
		if (date.year <= 0) {
			date.era = date.era === "BCE" ? "CE" : "BCE";
			date.year = 1 - date.year;
		}
	}
	getEras() {
		return ["BCE", "CE"];
	}
	getYearsInEra(date) {
		return date.era === "BCE" ? 9999 : 9715;
	}
	constructor(...args) {
		super(...args), this.identifier = "coptic";
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/createCalendar.mjs
function $64244302c3013299$export$dd0bbc9b26defe37(name) {
	switch (name) {
		case "buddhist": return new $8d73d47422ca7302$export$42d20a78301dee44();
		case "ethiopic": return new $b956b2d7a6cf451f$export$26ba6eab5e20cd7d();
		case "ethioaa": return new $b956b2d7a6cf451f$export$d72e0c37005a4914();
		case "coptic": return new $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1();
		case "hebrew": return new $7c5f6fbf42389787$export$ca405048b8fb5af();
		case "indian": return new $82c358003bdda0a8$export$39f31c639fa15726();
		case "islamic-civil": return new $f2f3e0e3a817edbd$export$2066795aadd37bfc();
		case "islamic-tbla": return new $f2f3e0e3a817edbd$export$37f0887f2f9d22f7();
		case "islamic-umalqura": return new $f2f3e0e3a817edbd$export$5baab4758c231076();
		case "japanese": return new $62225008020f0a13$export$b746ab2b60cdffbf();
		case "persian": return new $f3ed2e4472ae7e25$export$37fccdbfd14c5939();
		case "roc": return new $5f31bd6f0c8940b2$export$65e01080afcb0799();
		default: return new $3b62074eb05584b2$export$80ee6245ec4f29ec();
	}
}
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+date@3.9.0/node_modules/@internationalized/date/dist/DateFormatter.mjs
var $fb18d541ea1ad717$var$formatterCache = /* @__PURE__ */ new Map();
var $fb18d541ea1ad717$export$ad991b66133851cf = class {
	/** Formats a date as a string according to the locale and format options passed to the constructor. */ format(value) {
		return this.formatter.format(value);
	}
	/** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */ formatToParts(value) {
		return this.formatter.formatToParts(value);
	}
	/** Formats a date range as a string. */ formatRange(start, end) {
		if (typeof this.formatter.formatRange === "function") return this.formatter.formatRange(start, end);
		if (end < start) throw new RangeError("End date must be >= start date");
		return `${this.formatter.format(start)} \u{2013} ${this.formatter.format(end)}`;
	}
	/** Formats a date range as an array of parts. */ formatRangeToParts(start, end) {
		if (typeof this.formatter.formatRangeToParts === "function") return this.formatter.formatRangeToParts(start, end);
		if (end < start) throw new RangeError("End date must be >= start date");
		let startParts = this.formatter.formatToParts(start);
		let endParts = this.formatter.formatToParts(end);
		return [
			...startParts.map((p) => ({
				...p,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...endParts.map((p) => ({
				...p,
				source: "endRange"
			}))
		];
	}
	/** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
		let resolvedOptions = this.formatter.resolvedOptions();
		if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
			if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
			resolvedOptions.hourCycle = this.resolvedHourCycle;
			resolvedOptions.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12";
		}
		if (resolvedOptions.calendar === "ethiopic-amete-alem") resolvedOptions.calendar = "ethioaa";
		return resolvedOptions;
	}
	constructor(locale, options = {}) {
		this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
		this.options = options;
	}
};
var $fb18d541ea1ad717$var$hour12Preferences = {
	true: { ja: "h11" },
	false: {}
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
	if (typeof options.hour12 === "boolean" && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
		options = { ...options };
		let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split("-")[0]];
		let defaultHourCycle = options.hour12 ? "h12" : "h23";
		options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
		delete options.hour12;
	}
	let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
	if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
	let numberFormatter = new Intl.DateTimeFormat(locale, options);
	$fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
	return numberFormatter;
}
var $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
	if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: false
	}).format(new Date(2020, 2, 3, 0)) === "24";
	return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
var $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
	if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat("fr", {
		hour: "numeric",
		hour12: false
	}).resolvedOptions().hourCycle === "h12";
	return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
	if (!options.timeStyle && !options.hour) return void 0;
	locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
	locale += (locale.includes("-u-") ? "" : "-u") + "-nu-latn";
	let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
		...options,
		timeZone: void 0
	});
	let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p) => p.type === "hour").value, 10);
	let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p) => p.type === "hour").value, 10);
	if (min === 0 && max === 23) return "h23";
	if (min === 24 && max === 23) return "h24";
	if (min === 0 && max === 11) return "h11";
	if (min === 12 && max === 11) return "h12";
	throw new Error("Unexpected hour cycle result");
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/date/comparators.js
/**
* Given a `DateValue` object, convert it to a native `Date` object.
* If a timezone is provided, the date will be converted to that timezone.
* If no timezone is provided, the date will be converted to the local timezone.
*/
function toDate(dateValue, tz = $14e0f24ef4ac5c92$export$aa8b41735afcabd2()) {
	if (isZonedDateTime(dateValue)) return dateValue.toDate();
	else return dateValue.toDate(tz);
}
function isCalendarDateTime(dateValue) {
	return dateValue instanceof $35ea8db9cb2ccb90$export$ca871e8dbb80966f;
}
function isZonedDateTime(dateValue) {
	return dateValue instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea;
}
function hasTime(dateValue) {
	return isCalendarDateTime(dateValue) || isZonedDateTime(dateValue);
}
/**
* Given a date, return the number of days in the month.
*/
function getDaysInMonth(date) {
	if (date instanceof Date) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		/**
		* By using zero as the day, we get the
		* last day of the previous month, which
		* is the month we originally passed in.
		*/
		return new Date(year, month, 0).getDate();
	} else return date.set({ day: 100 }).day;
}
/**
* Determine if a date is before the reference date.
* @param dateToCompare - is this date before the `referenceDate`
* @param referenceDate - is the `dateToCompare` before this date
*
* @see {@link isBeforeOrSame} for inclusive
*/
function isBefore(dateToCompare, referenceDate) {
	return dateToCompare.compare(referenceDate) < 0;
}
/**
* Determine if a date is after the reference date.
* @param dateToCompare - is this date after the `referenceDate`
* @param referenceDate - is the `dateToCompare` after this date
*
* @see {@link isAfterOrSame} for inclusive
*/
function isAfter(dateToCompare, referenceDate) {
	return dateToCompare.compare(referenceDate) > 0;
}
/**
* Determine if a date is before or the same as the reference date.
*
* @param dateToCompare - the date to compare
* @param referenceDate - the reference date to make the comparison against
*
* @see {@link isBefore} for non-inclusive
*/
function isBeforeOrSame(dateToCompare, referenceDate) {
	return dateToCompare.compare(referenceDate) <= 0;
}
/**
* Determine if a date is after or the same as the reference date.
*
* @param dateToCompare - is this date after or the same as the `referenceDate`
* @param referenceDate - is the `dateToCompare` after or the same as this date
*
* @see {@link isAfter} for non-inclusive
*/
function isAfterOrSame(dateToCompare, referenceDate) {
	return dateToCompare.compare(referenceDate) >= 0;
}
/**
* Determine if a date is inclusively between a start and end reference date.
*
* @param date - is this date inclusively between the `start` and `end` dates
* @param start - the start reference date to make the comparison against
* @param end - the end reference date to make the comparison against
*
* @see {@link isBetween} for non-inclusive
*/
function isBetweenInclusive(date, start, end) {
	return isAfterOrSame(date, start) && isBeforeOrSame(date, end);
}
/**
* Determine if a date is between a start and end reference date.
*
* @param date - is this date between the `start` and `end` dates
* @param start - the start reference date to make the comparison against
* @param end - the end reference date to make the comparison against
*
* @see {@link isBetweenInclusive} for inclusive
*/
function isBetween(date, start, end) {
	return isAfter(date, start) && isBefore(date, end);
}
function getLastFirstDayOfWeek(date, firstDayOfWeek, locale) {
	const day = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale);
	if (firstDayOfWeek > day) return date.subtract({ days: day + 7 - firstDayOfWeek });
	if (firstDayOfWeek === day) return date;
	return date.subtract({ days: day - firstDayOfWeek });
}
function getNextLastDayOfWeek(date, firstDayOfWeek, locale) {
	const day = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale);
	const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
	if (day === lastDayOfWeek) return date;
	if (day > lastDayOfWeek) return date.add({ days: 7 - day + lastDayOfWeek });
	return date.add({ days: lastDayOfWeek - day });
}
function areAllDaysBetweenValid(start, end, isUnavailable, isDisabled, isHighlightable) {
	if (isUnavailable === void 0 && isDisabled === void 0 && isHighlightable === void 0) return true;
	let dCurrent = start.add({ days: 1 });
	if ((isDisabled?.(dCurrent) || isUnavailable?.(dCurrent)) && !isHighlightable?.(dCurrent)) return false;
	const dEnd = end;
	while (dCurrent.compare(dEnd) < 0) {
		dCurrent = dCurrent.add({ days: 1 });
		if ((isDisabled?.(dCurrent) || isUnavailable?.(dCurrent)) && !isHighlightable?.(dCurrent)) return false;
	}
	return true;
}
/**
* A helper function used throughout the various date builders
* to generate a default `DateValue` using the `defaultValue`,
* `defaultPlaceholder`, and `granularity` props.
*
* It's important to match the `DateValue` type being used
* elsewhere in the builder, so they behave according to the
* behavior the user expects based on the props they've provided.
*
*/
function getDefaultDate(props) {
	const { defaultValue, defaultPlaceholder, granularity = "day", locale = "en" } = props;
	if (Array.isArray(defaultValue) && defaultValue.length) return defaultValue.at(-1).copy();
	if (defaultValue && !Array.isArray(defaultValue)) return defaultValue.copy();
	if (defaultPlaceholder) return defaultPlaceholder.copy();
	const date = /* @__PURE__ */ new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const calendarDateTimeGranularities = [
		"hour",
		"minute",
		"second"
	];
	const calendar = $64244302c3013299$export$dd0bbc9b26defe37(new $fb18d541ea1ad717$export$ad991b66133851cf(locale).resolvedOptions().calendar);
	if (calendarDateTimeGranularities.includes(granularity ?? "day")) return $11d87f3f76e88657$export$b4a036af3fc0b032(new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(year, month, day, 0, 0, 0), calendar);
	return $11d87f3f76e88657$export$b4a036af3fc0b032(new $35ea8db9cb2ccb90$export$99faa760c7908e4f(year, month, day), calendar);
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/date/utils.js
/**
* Splits an array into chunks of a given size.
* @param arr The array to split.
* @param size The size of each chunk.
* @returns An array of arrays, where each sub-array has `size` elements from the original array.
* @example ```ts
* const arr = [1, 2, 3, 4, 5, 6, 7, 8];
* const chunks = chunk(arr, 3);
* // chunks = [[1, 2, 3], [4, 5, 6], [7, 8]]
* ```
*/
function chunk(arr, size) {
	const result = [];
	for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
	return result;
}
function getOptsByGranularity(granularity, hourCycle, isTimeValue = false) {
	const opts = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZoneName: "short",
		hourCycle: normalizeHourCycle(hourCycle),
		hour12: normalizeHour12(hourCycle)
	};
	if (isTimeValue) {
		delete opts.year;
		delete opts.month;
		delete opts.day;
	}
	if (granularity === "day") {
		delete opts.second;
		delete opts.hour;
		delete opts.minute;
		delete opts.timeZoneName;
	}
	if (granularity === "hour") {
		delete opts.minute;
		delete opts.second;
	}
	if (granularity === "minute") delete opts.second;
	return opts;
}
function normalizeDateStep(props) {
	return defu(props?.step, {
		year: 1,
		month: 1,
		day: 1,
		hour: 1,
		minute: 1,
		second: 1,
		millisecond: 1
	});
}
function handleCalendarInitialFocus(calendar) {
	const selectedDay = calendar.querySelector("[data-selected]");
	if (selectedDay) return selectedDay.focus();
	const today = calendar.querySelector("[data-today]");
	if (today) return today.focus();
	const firstDay = calendar.querySelector("[data-reka-calendar-day]");
	if (firstDay) return firstDay.focus();
}
function normalizeHourCycle(hourCycle) {
	if (hourCycle === 24) return "h23";
	if (hourCycle === 12) return "h11";
}
function normalizeHour12(hourCycle) {
	if (hourCycle === 24) return false;
	if (hourCycle === 12) return true;
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/date/calendar.js
/**
* Retrieves an array of date values representing the days between
* the provided start and end dates.
*/
function getDaysBetween(start, end) {
	const days = [];
	let dCurrent = start.add({ days: 1 });
	const dEnd = end;
	while (dCurrent.compare(dEnd) < 0) {
		days.push(dCurrent);
		dCurrent = dCurrent.add({ days: 1 });
	}
	return days;
}
function createMonth(props) {
	const { dateObj, weekStartsOn, fixedWeeks, locale } = props;
	const daysInMonth = getDaysInMonth(dateObj);
	const datesArray = Array.from({ length: daysInMonth }, (_, i) => dateObj.set({ day: i + 1 }));
	const firstDayOfMonth = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(dateObj);
	const lastDayOfMonth = $14e0f24ef4ac5c92$export$a2258d9c4118825c(dateObj);
	const lastSunday = getLastFirstDayOfWeek(firstDayOfMonth, weekStartsOn, locale);
	const nextSaturday = getNextLastDayOfWeek(lastDayOfMonth, weekStartsOn, locale);
	const lastMonthDays = getDaysBetween(lastSunday.subtract({ days: 1 }), firstDayOfMonth);
	const nextMonthDays = getDaysBetween(lastDayOfMonth, nextSaturday.add({ days: 1 }));
	const totalDays = lastMonthDays.length + datesArray.length + nextMonthDays.length;
	if (fixedWeeks && totalDays < 42) {
		const extraDays = 42 - totalDays;
		let startFrom = nextMonthDays[nextMonthDays.length - 1];
		if (!startFrom) startFrom = $14e0f24ef4ac5c92$export$a2258d9c4118825c(dateObj);
		const extraDaysArray = Array.from({ length: extraDays }, (_, i) => {
			const incr = i + 1;
			return startFrom.add({ days: incr });
		});
		nextMonthDays.push(...extraDaysArray);
	}
	const allDays = lastMonthDays.concat(datesArray, nextMonthDays);
	return {
		value: dateObj,
		cells: allDays,
		rows: chunk(allDays, 7)
	};
}
function createMonths(props) {
	const { numberOfMonths, dateObj, ...monthProps } = props;
	const months = [];
	if (!numberOfMonths || numberOfMonths === 1) {
		months.push(createMonth({
			...monthProps,
			dateObj
		}));
		return months;
	}
	months.push(createMonth({
		...monthProps,
		dateObj
	}));
	for (let i = 1; i < numberOfMonths; i++) {
		const nextMonth = dateObj.add({ months: i });
		months.push(createMonth({
			...monthProps,
			dateObj: nextMonth
		}));
	}
	return months;
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/shared/useDateFormatter.js
/**
* Creates a wrapper around the `DateFormatter`, which is
* an improved version of the {@link Intl.DateTimeFormat} API,
* that is used internally by the various date builders to
* easily format dates in a consistent way.
*
* @see [DateFormatter](https://react-spectrum.adobe.com/internationalized/date/DateFormatter.html)
*/
function useDateFormatter(initialLocale, opts = {}) {
	const locale = ref(initialLocale);
	function getLocale() {
		return locale.value;
	}
	function setLocale(newLocale) {
		locale.value = newLocale;
	}
	function custom(date, options) {
		return new $fb18d541ea1ad717$export$ad991b66133851cf(locale.value, {
			...opts,
			...options
		}).format(date);
	}
	function selectedDate(date, includeTime = true) {
		if (hasTime(date) && includeTime) return custom(toDate(date), {
			dateStyle: "long",
			timeStyle: "long"
		});
		else return custom(toDate(date), { dateStyle: "long" });
	}
	function fullMonthAndYear(date, options = {}) {
		return new $fb18d541ea1ad717$export$ad991b66133851cf(locale.value, {
			...opts,
			month: "long",
			year: "numeric",
			...options
		}).format(date);
	}
	function fullMonth(date, options = {}) {
		return new $fb18d541ea1ad717$export$ad991b66133851cf(locale.value, {
			...opts,
			month: "long",
			...options
		}).format(date);
	}
	function getMonths() {
		const defaultDate = $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
		return [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12
		].map((item) => ({
			label: fullMonth(toDate(defaultDate.set({ month: item }))),
			value: item
		}));
	}
	function fullYear(date, options = {}) {
		return new $fb18d541ea1ad717$export$ad991b66133851cf(locale.value, {
			...opts,
			year: "numeric",
			...options
		}).format(date);
	}
	function toParts(date, options) {
		if (isZonedDateTime(date)) return new $fb18d541ea1ad717$export$ad991b66133851cf(locale.value, {
			...opts,
			...options,
			timeZone: date.timeZone
		}).formatToParts(toDate(date));
		else return new $fb18d541ea1ad717$export$ad991b66133851cf(locale.value, {
			...opts,
			...options
		}).formatToParts(toDate(date));
	}
	function dayOfWeek(date, length = "narrow") {
		return new $fb18d541ea1ad717$export$ad991b66133851cf(locale.value, {
			...opts,
			weekday: length
		}).format(date);
	}
	function dayPeriod(date) {
		const value = new $fb18d541ea1ad717$export$ad991b66133851cf(locale.value, {
			...opts,
			hour: "numeric",
			minute: "numeric"
		}).formatToParts(date).find((p) => p.type === "dayPeriod")?.value;
		if (value === "PM" || value === "p.m.") return "PM";
		return "AM";
	}
	const defaultPartOptions = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	};
	function part(dateObj, type, options = {}) {
		const part$1 = toParts(dateObj, {
			...defaultPartOptions,
			...options
		}).find((p) => p.type === type);
		return part$1 ? part$1.value : "";
	}
	return {
		setLocale,
		getLocale,
		fullMonth,
		fullYear,
		fullMonthAndYear,
		toParts,
		custom,
		part,
		dayPeriod,
		selectedDate,
		dayOfWeek,
		getMonths
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/date/parts.js
var DATE_SEGMENT_PARTS = [
	"day",
	"month",
	"year"
];
var TIME_SEGMENT_PARTS = [
	"hour",
	"minute",
	"second",
	"dayPeriod"
];
var NON_EDITABLE_SEGMENT_PARTS = ["literal", "timeZoneName"];
var EDITABLE_SEGMENT_PARTS = [...DATE_SEGMENT_PARTS, ...TIME_SEGMENT_PARTS];
[...TIME_SEGMENT_PARTS];
[...EDITABLE_SEGMENT_PARTS, ...NON_EDITABLE_SEGMENT_PARTS].filter((part) => part !== "literal");
function isDateSegmentPart(part) {
	return DATE_SEGMENT_PARTS.includes(part);
}
function isSegmentPart(part) {
	return EDITABLE_SEGMENT_PARTS.includes(part);
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/date/placeholders.js
var supportedLocales = [
	"ach",
	"af",
	"am",
	"an",
	"ar",
	"ast",
	"az",
	"be",
	"bg",
	"bn",
	"br",
	"bs",
	"ca",
	"cak",
	"ckb",
	"cs",
	"cy",
	"da",
	"de",
	"dsb",
	"el",
	"en",
	"eo",
	"es",
	"et",
	"eu",
	"fa",
	"ff",
	"fi",
	"fr",
	"fy",
	"ga",
	"gd",
	"gl",
	"he",
	"hr",
	"hsb",
	"hu",
	"ia",
	"id",
	"it",
	"ja",
	"ka",
	"kk",
	"kn",
	"ko",
	"lb",
	"lo",
	"lt",
	"lv",
	"meh",
	"ml",
	"ms",
	"nl",
	"nn",
	"no",
	"oc",
	"pl",
	"pt",
	"rm",
	"ro",
	"ru",
	"sc",
	"scn",
	"sk",
	"sl",
	"sr",
	"sv",
	"szl",
	"tg",
	"th",
	"tr",
	"uk",
	"zh-CN",
	"zh-TW"
];
var placeholderFields = [
	"year",
	"month",
	"day"
];
var placeholders = {
	"ach": {
		year: "mwaka",
		month: "dwe",
		day: "nino"
	},
	"af": {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	"am": {
		year: "ዓዓዓዓ",
		month: "ሚሜ",
		day: "ቀቀ"
	},
	"an": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"ar": {
		year: "سنة",
		month: "شهر",
		day: "يوم"
	},
	"ast": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"az": {
		year: "iiii",
		month: "aa",
		day: "gg"
	},
	"be": {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	"bg": {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	"bn": {
		year: "yyyy",
		month: "মিমি",
		day: "dd"
	},
	"br": {
		year: "bbbb",
		month: "mm",
		day: "dd"
	},
	"bs": {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	"ca": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"cak": {
		year: "jjjj",
		month: "ii",
		day: "q'q'"
	},
	"ckb": {
		year: "ساڵ",
		month: "مانگ",
		day: "ڕۆژ"
	},
	"cs": {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	"cy": {
		year: "bbbb",
		month: "mm",
		day: "dd"
	},
	"da": {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	"de": {
		year: "jjjj",
		month: "mm",
		day: "tt"
	},
	"dsb": {
		year: "llll",
		month: "mm",
		day: "źź"
	},
	"el": {
		year: "εεεε",
		month: "μμ",
		day: "ηη"
	},
	"en": {
		year: "yyyy",
		month: "mm",
		day: "dd"
	},
	"eo": {
		year: "jjjj",
		month: "mm",
		day: "tt"
	},
	"es": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"et": {
		year: "aaaa",
		month: "kk",
		day: "pp"
	},
	"eu": {
		year: "uuuu",
		month: "hh",
		day: "ee"
	},
	"fa": {
		year: "سال",
		month: "ماه",
		day: "روز"
	},
	"ff": {
		year: "hhhh",
		month: "ll",
		day: "ññ"
	},
	"fi": {
		year: "vvvv",
		month: "kk",
		day: "pp"
	},
	"fr": {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	"fy": {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	"ga": {
		year: "bbbb",
		month: "mm",
		day: "ll"
	},
	"gd": {
		year: "bbbb",
		month: "mm",
		day: "ll"
	},
	"gl": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"he": {
		year: "שנה",
		month: "חודש",
		day: "יום"
	},
	"hr": {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	"hsb": {
		year: "llll",
		month: "mm",
		day: "dd"
	},
	"hu": {
		year: "éééé",
		month: "hh",
		day: "nn"
	},
	"ia": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"id": {
		year: "tttt",
		month: "bb",
		day: "hh"
	},
	"it": {
		year: "aaaa",
		month: "mm",
		day: "gg"
	},
	"ja": {
		year: " 年 ",
		month: "月",
		day: "日"
	},
	"ka": {
		year: "წწწწ",
		month: "თთ",
		day: "რრ"
	},
	"kk": {
		year: "жжжж",
		month: "аа",
		day: "кк"
	},
	"kn": {
		year: "ವವವವ",
		month: "ಮಿಮೀ",
		day: "ದಿದಿ"
	},
	"ko": {
		year: "연도",
		month: "월",
		day: "일"
	},
	"lb": {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	"lo": {
		year: "ປປປປ",
		month: "ດດ",
		day: "ວວ"
	},
	"lt": {
		year: "mmmm",
		month: "mm",
		day: "dd"
	},
	"lv": {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	"meh": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"ml": {
		year: "വർഷം",
		month: "മാസം",
		day: "തീയതി"
	},
	"ms": {
		year: "tttt",
		month: "mm",
		day: "hh"
	},
	"nl": {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	"nn": {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	"no": {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	"oc": {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	"pl": {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	"pt": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"rm": {
		year: "oooo",
		month: "mm",
		day: "dd"
	},
	"ro": {
		year: "aaaa",
		month: "ll",
		day: "zz"
	},
	"ru": {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	"sc": {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	"scn": {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	"sk": {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	"sl": {
		year: "llll",
		month: "mm",
		day: "dd"
	},
	"sr": {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	"sv": {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	"szl": {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	"tg": {
		year: "сссс",
		month: "мм",
		day: "рр"
	},
	"th": {
		year: "ปปปป",
		month: "ดด",
		day: "วว"
	},
	"tr": {
		year: "yyyy",
		month: "aa",
		day: "gg"
	},
	"uk": {
		year: "рррр",
		month: "мм",
		day: "дд"
	},
	"zh-CN": {
		year: "年",
		month: "月",
		day: "日"
	},
	"zh-TW": {
		year: "年",
		month: "月",
		day: "日"
	}
};
function getPlaceholderObj(locale) {
	if (!isSupportedLocale(locale)) {
		const localeLanguage = getLocaleLanguage(locale);
		if (!isSupportedLocale(localeLanguage)) return placeholders.en;
		else return placeholders[localeLanguage];
	} else return placeholders[locale];
}
function getPlaceholder(field, value, locale) {
	if (isPlaceholderField(field)) return getPlaceholderObj(locale)[field];
	if (isDefaultField(field)) return value;
	if (isTimeField(field)) return "––";
	return "";
}
function isSupportedLocale(locale) {
	return supportedLocales.includes(locale);
}
function isPlaceholderField(field) {
	return placeholderFields.includes(field);
}
function isTimeField(field) {
	return field === "hour" || field === "minute" || field === "second";
}
function isDefaultField(field) {
	return field === "era" || field === "dayPeriod";
}
function getLocaleLanguage(locale) {
	if (Intl.Locale) return new Intl.Locale(locale).language;
	return locale.split("-")[0];
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/date/parser.js
var calendarDateTimeGranularities = [
	"hour",
	"minute",
	"second"
];
function syncTimeSegmentValues(props) {
	return Object.fromEntries(TIME_SEGMENT_PARTS.map((part) => {
		if (part === "dayPeriod") return [part, props.formatter.dayPeriod(toDate(props.value))];
		return [part, props.value[part]];
	}));
}
function syncSegmentValues(props) {
	const { formatter } = props;
	const dateValues = DATE_SEGMENT_PARTS.map((part) => {
		return [part, props.value[part]];
	});
	if ("hour" in props.value) {
		const timeValues = syncTimeSegmentValues({
			value: props.value,
			formatter
		});
		return {
			...Object.fromEntries(dateValues),
			...timeValues
		};
	}
	return Object.fromEntries(dateValues);
}
function initializeSegmentValues(granularity) {
	const initialParts = EDITABLE_SEGMENT_PARTS.map((part) => {
		if (part === "dayPeriod") return [part, "AM"];
		return [part, null];
	}).filter(([key]) => {
		if (key === "literal" || key === null) return false;
		if (granularity === "minute" && key === "second") return false;
		if (granularity === "hour" && (key === "second" || key === "minute")) return false;
		if (granularity === "day") return !calendarDateTimeGranularities.includes(key) && key !== "dayPeriod";
		else return true;
	});
	return Object.fromEntries(initialParts);
}
function createContentObj(props) {
	const { segmentValues, formatter, locale } = props;
	function getPartContent(part) {
		if ("hour" in segmentValues) {
			const value = segmentValues[part];
			if (value !== null) {
				if (part === "day") return formatter.part(props.dateRef.set({
					[part]: value,
					month: segmentValues.month ?? 1
				}), part, { hourCycle: normalizeHourCycle(props.hourCycle) });
				return formatter.part(props.dateRef.set({ [part]: value }), part, { hourCycle: normalizeHourCycle(props.hourCycle) });
			} else return getPlaceholder(part, "", locale.value);
		} else {
			if (isDateSegmentPart(part)) {
				const value = segmentValues[part];
				if (value !== null) {
					if (part === "day") return formatter.part(props.dateRef.set({
						[part]: value,
						month: segmentValues.month ?? 1
					}), part);
					return formatter.part(props.dateRef.set({ [part]: value }), part);
				} else return getPlaceholder(part, "", locale.value);
			}
			return "";
		}
	}
	return Object.keys(segmentValues).reduce((obj, part) => {
		if (!isSegmentPart(part)) return obj;
		if ("hour" in segmentValues && part === "dayPeriod") {
			const value = segmentValues[part];
			if (value !== null) obj[part] = value;
			else obj[part] = getPlaceholder(part, "AM", locale.value);
		} else obj[part] = getPartContent(part);
		return obj;
	}, {});
}
function createContentArr(props) {
	const { granularity, formatter, contentObj, hideTimeZone, hourCycle, isTimeValue } = props;
	return formatter.toParts(props.dateRef, getOptsByGranularity(granularity, hourCycle, isTimeValue)).map((part) => {
		if ([
			"literal",
			"timeZoneName",
			null
		].includes(part.type) || !isSegmentPart(part.type)) return {
			part: part.type,
			value: part.value
		};
		return {
			part: part.type,
			value: contentObj[part.type]
		};
	}).filter((segment) => {
		if (segment.part === null || segment.value === null) return false;
		if (segment.part === "timeZoneName" && (!isZonedDateTime(props.dateRef) || hideTimeZone)) return false;
		return true;
	});
}
function createContent(props) {
	const contentObj = createContentObj(props);
	return {
		obj: contentObj,
		arr: createContentArr({
			contentObj,
			...props
		})
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/date/segment.js
function isSegmentNavigationKey(key) {
	const kbd = useKbd();
	if (key === kbd.ARROW_RIGHT || key === kbd.ARROW_LEFT) return true;
	return false;
}
function isNumberString(value) {
	if (Number.isNaN(Number.parseInt(value))) return false;
	return true;
}
function isAcceptableSegmentKey(key) {
	const kbd = useKbd();
	if ([
		kbd.ENTER,
		kbd.ARROW_UP,
		kbd.ARROW_DOWN,
		kbd.ARROW_LEFT,
		kbd.ARROW_RIGHT,
		kbd.BACKSPACE,
		kbd.SPACE,
		"a",
		"A",
		"p",
		"P"
	].includes(key)) return true;
	if (isNumberString(key)) return true;
	return false;
}
function getSegmentElements(parentElement) {
	return Array.from(parentElement.querySelectorAll("[data-reka-date-field-segment]")).filter((item) => item.getAttribute("data-reka-date-field-segment") !== "literal");
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/date/useDateField.js
function commonSegmentAttrs(props) {
	return {
		role: "spinbutton",
		contenteditable: true,
		tabindex: props.disabled ? void 0 : 0,
		spellcheck: false,
		inputmode: "numeric",
		autocorrect: "off",
		enterkeyhint: "next",
		style: "caret-color: transparent;"
	};
}
function daySegmentAttrs(props) {
	const { segmentValues, placeholder } = props;
	const isEmpty = segmentValues.day === null;
	const date = segmentValues.day ? placeholder.set({ day: segmentValues.day }) : placeholder;
	const valueNow = date.day;
	const valueMin = 1;
	const valueMax = getDaysInMonth(date);
	const valueText = isEmpty ? "Empty" : `${valueNow}`;
	return {
		...commonSegmentAttrs(props),
		"aria-label": "day,",
		"aria-valuemin": valueMin,
		"aria-valuemax": valueMax,
		"aria-valuenow": valueNow,
		"aria-valuetext": valueText,
		"data-placeholder": isEmpty ? "" : void 0
	};
}
function monthSegmentAttrs(props) {
	const { segmentValues, placeholder, formatter } = props;
	const isEmpty = segmentValues.month === null;
	const date = segmentValues.month ? placeholder.set({ month: segmentValues.month }) : placeholder;
	const valueNow = date.month;
	const valueMin = 1;
	const valueMax = 12;
	const valueText = isEmpty ? "Empty" : `${valueNow} - ${formatter.fullMonth(toDate(date))}`;
	return {
		...commonSegmentAttrs(props),
		"aria-label": "month, ",
		"contenteditable": true,
		"aria-valuemin": valueMin,
		"aria-valuemax": valueMax,
		"aria-valuenow": valueNow,
		"aria-valuetext": valueText,
		"data-placeholder": isEmpty ? "" : void 0
	};
}
function yearSegmentAttrs(props) {
	const { segmentValues, placeholder } = props;
	const isEmpty = segmentValues.year === null;
	const date = segmentValues.year ? placeholder.set({ year: segmentValues.year }) : placeholder;
	const valueMin = 1;
	const valueMax = 9999;
	const valueNow = date.year;
	const valueText = isEmpty ? "Empty" : `${valueNow}`;
	return {
		...commonSegmentAttrs(props),
		"aria-label": "year, ",
		"aria-valuemin": valueMin,
		"aria-valuemax": valueMax,
		"aria-valuenow": valueNow,
		"aria-valuetext": valueText,
		"data-placeholder": isEmpty ? "" : void 0
	};
}
function hourSegmentAttrs(props) {
	const { segmentValues, hourCycle, placeholder } = props;
	if (!("hour" in segmentValues) || !("hour" in placeholder)) return {};
	const isEmpty = segmentValues.hour === null;
	const date = segmentValues.hour ? placeholder.set({ hour: segmentValues.hour }) : placeholder;
	const valueMin = hourCycle === 12 ? 1 : 0;
	const valueMax = hourCycle === 12 ? 12 : 23;
	const valueNow = date.hour;
	const valueText = isEmpty ? "Empty" : `${valueNow} ${segmentValues.dayPeriod ?? ""}`;
	return {
		...commonSegmentAttrs(props),
		"aria-label": "hour, ",
		"aria-valuemin": valueMin,
		"aria-valuemax": valueMax,
		"aria-valuenow": valueNow,
		"aria-valuetext": valueText,
		"data-placeholder": isEmpty ? "" : void 0
	};
}
function minuteSegmentAttrs(props) {
	const { segmentValues, placeholder } = props;
	if (!("minute" in segmentValues) || !("minute" in placeholder)) return {};
	const isEmpty = segmentValues.minute === null;
	const valueNow = (segmentValues.minute ? placeholder.set({ minute: segmentValues.minute }) : placeholder).minute;
	const valueMin = 0;
	const valueMax = 59;
	const valueText = isEmpty ? "Empty" : `${valueNow}`;
	return {
		...commonSegmentAttrs(props),
		"aria-label": "minute, ",
		"aria-valuemin": valueMin,
		"aria-valuemax": valueMax,
		"aria-valuenow": valueNow,
		"aria-valuetext": valueText,
		"data-placeholder": isEmpty ? "" : void 0
	};
}
function secondSegmentAttrs(props) {
	const { segmentValues, placeholder } = props;
	if (!("second" in segmentValues) || !("second" in placeholder)) return {};
	const isEmpty = segmentValues.second === null;
	const valueNow = (segmentValues.second ? placeholder.set({ second: segmentValues.second }) : placeholder).second;
	const valueMin = 0;
	const valueMax = 59;
	const valueText = isEmpty ? "Empty" : `${valueNow}`;
	return {
		...commonSegmentAttrs(props),
		"aria-label": "second, ",
		"aria-valuemin": valueMin,
		"aria-valuemax": valueMax,
		"aria-valuenow": valueNow,
		"aria-valuetext": valueText,
		"data-placeholder": isEmpty ? "" : void 0
	};
}
function dayPeriodSegmentAttrs(props) {
	const { segmentValues } = props;
	if (!("dayPeriod" in segmentValues)) return {};
	const valueMin = 0;
	const valueMax = 12;
	const valueNow = segmentValues.hour ? segmentValues.hour > 12 ? segmentValues.hour - 12 : segmentValues.hour : 0;
	const valueText = segmentValues.dayPeriod ?? "AM";
	return {
		...commonSegmentAttrs(props),
		"inputmode": "text",
		"aria-label": "AM/PM",
		"aria-valuemin": valueMin,
		"aria-valuemax": valueMax,
		"aria-valuenow": valueNow,
		"aria-valuetext": valueText
	};
}
function literalSegmentAttrs(_props) {
	return {
		"aria-hidden": true,
		"data-segment": "literal"
	};
}
function timeZoneSegmentAttrs(props) {
	return {
		"role": "textbox",
		"aria-label": "timezone, ",
		"data-readonly": true,
		"data-segment": "timeZoneName",
		"tabindex": props.disabled ? void 0 : 0,
		"style": "caret-color: transparent;"
	};
}
function eraSegmentAttrs(props) {
	const { segmentValues, placeholder } = props;
	const valueMin = 0;
	const valueMax = 0;
	const valueNow = 0;
	const valueText = "era" in segmentValues ? segmentValues.era : placeholder.era;
	return {
		...commonSegmentAttrs(props),
		"aria-label": "era",
		"aria-valuemin": valueMin,
		"aria-valuemax": valueMax,
		"aria-valuenow": valueNow,
		"aria-valuetext": valueText
	};
}
var segmentBuilders = {
	day: { attrs: daySegmentAttrs },
	month: { attrs: monthSegmentAttrs },
	year: { attrs: yearSegmentAttrs },
	hour: { attrs: hourSegmentAttrs },
	minute: { attrs: minuteSegmentAttrs },
	second: { attrs: secondSegmentAttrs },
	dayPeriod: { attrs: dayPeriodSegmentAttrs },
	literal: { attrs: literalSegmentAttrs },
	timeZoneName: { attrs: timeZoneSegmentAttrs },
	era: { attrs: eraSegmentAttrs }
};
function useDateField(props) {
	const kbd = useKbd();
	function minuteSecondIncrementation({ e, part, dateRef, prevValue }) {
		const step = props.step.value[part] ?? 1;
		const sign = e.key === kbd.ARROW_UP ? step : -step;
		const min = 0;
		const max = 59;
		if (prevValue === null) return sign > 0 ? min : max;
		const cycleArgs = [part, sign];
		return dateRef.set({ [part]: prevValue }).cycle(...cycleArgs)[part];
	}
	function deleteValue(prevValue) {
		props.hasLeftFocus.value = false;
		if (prevValue === null) return prevValue;
		const str = prevValue.toString();
		if (str.length === 1) {
			props.modelValue.value = void 0;
			return null;
		}
		return Number.parseInt(str.slice(0, -1));
	}
	function dateTimeValueIncrementation({ e, part, dateRef, prevValue, hourCycle }) {
		const step = props.step.value[part] ?? 1;
		const sign = e.key === kbd.ARROW_UP ? step : -step;
		if (prevValue === null) return dateRef[part];
		if (part === "hour" && "hour" in dateRef) {
			const cycleArgs$1 = [
				part,
				sign,
				{ hourCycle }
			];
			return dateRef.set({ [part]: prevValue }).cycle(...cycleArgs$1)[part];
		}
		const cycleArgs = [part, sign];
		if (part === "day") return dateRef.set({
			[part]: prevValue,
			month: props.segmentValues.value.month ?? 1
		}).cycle(...cycleArgs)[part];
		return dateRef.set({ [part]: prevValue }).cycle(...cycleArgs)[part];
	}
	function updateDayOrMonth(max, num, prev) {
		let moveToNext = false;
		const maxStart = Math.floor(max / 10);
		/**
		* If the user has left the segment, we want to reset the
		* `prev` value so that we can start the segment over again
		* when the user types a number.
		*/
		if (props.hasLeftFocus.value) {
			props.hasLeftFocus.value = false;
			prev = null;
		}
		if (prev === null) {
			/**
			* If the user types a 0 as the first number, we want
			* to keep track of that so that when they type the next
			* number, we can move to the next segment.
			*/
			if (num === 0) {
				props.lastKeyZero.value = true;
				return {
					value: null,
					moveToNext
				};
			}
			/**
			* If the last key was a 0, or if the first number is
			* greater than the max start digit (0-3 in most cases), then
			* we want to move to the next segment, since it's not possible
			* to continue typing a valid number in this segment.
			*/
			if (props.lastKeyZero.value || num > maxStart) moveToNext = true;
			props.lastKeyZero.value = false;
			/**
			* If none of the above conditions are met, then we can just
			* return the number as the segment value and continue typing
			* in this segment.
			*/
			return {
				value: num,
				moveToNext
			};
		}
		/**
		* If the number of digits is 2, or if the total with the existing digit
		* and the pressed digit is greater than the maximum value for this
		* month, then we will reset the segment as if the user had pressed the
		* backspace key and then typed the number.
		*/
		const digits = prev.toString().length;
		const total = Number.parseInt(prev.toString() + num.toString());
		/**
		* If the number of digits is 2, or if the total with the existing digit
		* and the pressed digit is greater than the maximum value for this
		* month, then we will reset the segment as if the user had pressed the
		* backspace key and then typed the number.
		*/
		if (digits === 2 || total > max) {
			/**
			* As we're doing elsewhere, we're checking if the number is greater
			* than the max start digit (0-3 in most months), and if so, we're
			* going to move to the next segment.
			*/
			if (num > maxStart || total > max) moveToNext = true;
			return {
				value: num,
				moveToNext
			};
		}
		moveToNext = true;
		return {
			value: total,
			moveToNext
		};
	}
	function updateMinuteOrSecond(num, prev) {
		const max = 59;
		let moveToNext = false;
		const maxStart = Math.floor(max / 10);
		/**
		* If the user has left the segment, we want to reset the
		* `prev` value so that we can start the segment over again
		* when the user types a number.
		*/
		if (props.hasLeftFocus.value) {
			props.hasLeftFocus.value = false;
			prev = null;
		}
		if (prev === null) {
			/**
			* If the user types a 0 as the first number, we want
			* to keep track of that so that when they type the next
			* number, we can move to the next segment.
			*/
			if (num === 0) {
				props.lastKeyZero.value = true;
				return {
					value: 0,
					moveToNext
				};
			}
			/**
			* If the last key was a 0, or if the first number is
			* greater than the max start digit (0-3 in most cases), then
			* we want to move to the next segment, since it's not possible
			* to continue typing a valid number in this segment.
			*/
			if (props.lastKeyZero.value || num > maxStart) moveToNext = true;
			props.lastKeyZero.value = false;
			/**
			* If none of the above conditions are met, then we can just
			* return the number as the segment value and continue typing
			* in this segment.
			*/
			return {
				value: num,
				moveToNext
			};
		}
		/**
		* If the number of digits is 2, or if the total with the existing digit
		* and the pressed digit is greater than the maximum value for this
		* month, then we will reset the segment as if the user had pressed the
		* backspace key and then typed the number.
		*/
		const digits = prev.toString().length;
		const total = Number.parseInt(prev.toString() + num.toString());
		/**
		* If the number of digits is 2, or if the total with the existing digit
		* and the pressed digit is greater than the maximum value for this
		* month, then we will reset the segment as if the user had pressed the
		* backspace key and then typed the number.
		*/
		if (digits === 2 || total > max) {
			/**
			* As we're doing elsewhere, we're checking if the number is greater
			* than the max start digit (0-3 in most months), and if so, we're
			* going to move to the next segment.
			*/
			if (num > maxStart) moveToNext = true;
			return {
				value: num,
				moveToNext
			};
		}
		moveToNext = true;
		return {
			value: total,
			moveToNext
		};
	}
	function updateHour(num, prev) {
		const max = 24;
		let moveToNext = false;
		const maxStart = Math.floor(max / 10);
		/**
		* If the user has left the segment, we want to reset the
		* `prev` value so that we can start the segment over again
		* when the user types a number.
		*/
		if (props.hasLeftFocus.value) {
			props.hasLeftFocus.value = false;
			prev = null;
		}
		if (prev === null) {
			/**
			* If the user types a 0 as the first number, we want
			* to keep track of that so that when they type the next
			* number, we can move to the next segment.
			*/
			if (num === 0) {
				props.lastKeyZero.value = true;
				return {
					value: 0,
					moveToNext
				};
			}
			/**
			* If the last key was a 0, or if the first number is
			* greater than the max start digit (0-3 in most cases), then
			* we want to move to the next segment, since it's not possible
			* to continue typing a valid number in this segment.
			*/
			if (props.lastKeyZero.value || num > maxStart) moveToNext = true;
			props.lastKeyZero.value = false;
			/**
			* If none of the above conditions are met, then we can just
			* return the number as the segment value and continue typing
			* in this segment.
			*/
			return {
				value: num,
				moveToNext
			};
		}
		/**
		* If the number of digits is 2, or if the total with the existing digit
		* and the pressed digit is greater than the maximum value for this
		* month, then we will reset the segment as if the user had pressed the
		* backspace key and then typed the number.
		*/
		const digits = prev.toString().length;
		const total = Number.parseInt(prev.toString() + num.toString());
		/**
		* If the number of digits is 2, or if the total with the existing digit
		* and the pressed digit is greater than the maximum value for this
		* month, then we will reset the segment as if the user had pressed the
		* backspace key and then typed the number.
		*/
		if (digits === 2 || total > max) {
			/**
			* As we're doing elsewhere, we're checking if the number is greater
			* than the max start digit (0-3 in most months), and if so, we're
			* going to move to the next segment.
			*/
			if (num > maxStart) moveToNext = true;
			return {
				value: num,
				moveToNext
			};
		}
		moveToNext = true;
		return {
			value: total,
			moveToNext
		};
	}
	function updateYear(num, prev) {
		let moveToNext = false;
		/**
		* If the user has left the segment, we want to reset the
		* `prev` value so that we can start the segment over again
		* when the user types a number.
		*/
		if (props.hasLeftFocus.value) {
			props.hasLeftFocus.value = false;
			prev = null;
		}
		if (prev === null) return {
			value: num === 0 ? 1 : num,
			moveToNext
		};
		const str = prev.toString() + num.toString();
		if (str.length > 4) return {
			value: num === 0 ? 1 : num,
			moveToNext
		};
		if (str.length === 4) moveToNext = true;
		return {
			value: Number.parseInt(str),
			moveToNext
		};
	}
	const attributes = computed(() => segmentBuilders[props.part]?.attrs({
		disabled: props.disabled.value,
		placeholder: props.placeholder.value,
		hourCycle: props.hourCycle,
		segmentValues: props.segmentValues.value,
		formatter: props.formatter
	}) ?? {});
	function handleDaySegmentKeydown(e) {
		if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key)) return;
		const prevValue = props.segmentValues.value.day;
		if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
			props.segmentValues.value.day = dateTimeValueIncrementation({
				e,
				part: "day",
				dateRef: props.placeholder.value,
				prevValue
			});
			return;
		}
		if (isNumberString(e.key)) {
			const num = Number.parseInt(e.key);
			const segmentMonthValue = props.segmentValues.value.month;
			const { value, moveToNext } = updateDayOrMonth(segmentMonthValue ? getDaysInMonth(props.placeholder.value.set({ month: segmentMonthValue })) : 31, num, prevValue);
			props.segmentValues.value.day = value;
			if (moveToNext) props.focusNext();
		}
		if (e.key === kbd.BACKSPACE) {
			props.hasLeftFocus.value = false;
			props.segmentValues.value.day = deleteValue(prevValue);
		}
	}
	function handleMonthSegmentKeydown(e) {
		if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key)) return;
		const prevValue = props.segmentValues.value.month;
		if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
			props.segmentValues.value.month = dateTimeValueIncrementation({
				e,
				part: "month",
				dateRef: props.placeholder.value,
				prevValue
			});
			return;
		}
		if (isNumberString(e.key)) {
			const { value, moveToNext } = updateDayOrMonth(12, Number.parseInt(e.key), prevValue);
			props.segmentValues.value.month = value;
			if (moveToNext) props.focusNext();
		}
		if (e.key === kbd.BACKSPACE) {
			props.hasLeftFocus.value = false;
			props.segmentValues.value.month = deleteValue(prevValue);
		}
	}
	function handleYearSegmentKeydown(e) {
		if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key)) return;
		const prevValue = props.segmentValues.value.year;
		if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
			props.segmentValues.value.year = dateTimeValueIncrementation({
				e,
				part: "year",
				dateRef: props.placeholder.value,
				prevValue
			});
			return;
		}
		if (isNumberString(e.key)) {
			const { value, moveToNext } = updateYear(Number.parseInt(e.key), prevValue);
			props.segmentValues.value.year = value;
			if (moveToNext) props.focusNext();
		}
		if (e.key === kbd.BACKSPACE) {
			props.hasLeftFocus.value = false;
			props.segmentValues.value.year = deleteValue(prevValue);
		}
	}
	function handleHourSegmentKeydown(e) {
		const dateRef = props.placeholder.value;
		if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !("hour" in dateRef) || !("hour" in props.segmentValues.value)) return;
		const prevValue = props.segmentValues.value.hour;
		const hourCycle = props.hourCycle;
		if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) {
			props.segmentValues.value.hour = dateTimeValueIncrementation({
				e,
				part: "hour",
				dateRef: props.placeholder.value,
				prevValue,
				hourCycle
			});
			if ("dayPeriod" in props.segmentValues.value) {
				if (props.segmentValues.value.hour < 12) props.segmentValues.value.dayPeriod = "AM";
				else if (props.segmentValues.value.hour) props.segmentValues.value.dayPeriod = "PM";
			}
			return;
		}
		if (isNumberString(e.key)) {
			const { value, moveToNext } = updateHour(Number.parseInt(e.key), prevValue);
			if ("dayPeriod" in props.segmentValues.value && value && value > 12) props.segmentValues.value.dayPeriod = "PM";
			else if ("dayPeriod" in props.segmentValues.value && value) props.segmentValues.value.dayPeriod = "AM";
			props.segmentValues.value.hour = value;
			if (moveToNext) props.focusNext();
		}
		if (e.key === kbd.BACKSPACE) {
			props.hasLeftFocus.value = false;
			props.segmentValues.value.hour = deleteValue(prevValue);
		}
	}
	function handleMinuteSegmentKeydown(e) {
		const dateRef = props.placeholder.value;
		if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !("minute" in dateRef) || !("minute" in props.segmentValues.value)) return;
		const prevValue = props.segmentValues.value.minute;
		if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) props.segmentValues.value.minute = minuteSecondIncrementation({
			e,
			part: "minute",
			dateRef: props.placeholder.value,
			prevValue
		});
		if (isNumberString(e.key)) {
			const { value, moveToNext } = updateMinuteOrSecond(Number.parseInt(e.key), prevValue);
			props.segmentValues.value.minute = value;
			if (moveToNext) props.focusNext();
		}
		if (e.key === kbd.BACKSPACE) {
			props.hasLeftFocus.value = false;
			props.segmentValues.value.minute = deleteValue(prevValue);
		}
	}
	function handleSecondSegmentKeydown(e) {
		const dateRef = props.placeholder.value;
		if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !("second" in dateRef) || !("second" in props.segmentValues.value)) return;
		const prevValue = props.segmentValues.value.second;
		if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) props.segmentValues.value.second = minuteSecondIncrementation({
			e,
			part: "second",
			dateRef: props.placeholder.value,
			prevValue
		});
		if (isNumberString(e.key)) {
			const { value, moveToNext } = updateMinuteOrSecond(Number.parseInt(e.key), prevValue);
			props.segmentValues.value.second = value;
			if (moveToNext) props.focusNext();
		}
		if (e.key === kbd.BACKSPACE) {
			props.hasLeftFocus.value = false;
			props.segmentValues.value.second = deleteValue(prevValue);
		}
	}
	function handleDayPeriodSegmentKeydown(e) {
		if ((!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key)) && e.key !== "a" && e.key !== "p" || !("hour" in props.placeholder.value) || !("dayPeriod" in props.segmentValues.value)) return;
		if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) {
			if (props.segmentValues.value.dayPeriod === "AM") {
				props.segmentValues.value.dayPeriod = "PM";
				props.segmentValues.value.hour = props.segmentValues.value.hour + 12;
				return;
			}
			props.segmentValues.value.dayPeriod = "AM";
			props.segmentValues.value.hour = props.segmentValues.value.hour - 12;
			return;
		}
		if (["a", "A"].includes(e.key) && props.segmentValues.value.dayPeriod !== "AM") {
			props.segmentValues.value.dayPeriod = "AM";
			props.segmentValues.value.hour = props.segmentValues.value.hour - 12;
			return;
		}
		if (["p", "P"].includes(e.key) && props.segmentValues.value.dayPeriod !== "PM") {
			props.segmentValues.value.dayPeriod = "PM";
			props.segmentValues.value.hour = props.segmentValues.value.hour + 12;
		}
	}
	function handleSegmentClick(e) {
		if (props.disabled.value) e.preventDefault();
	}
	function handleSegmentKeydown(e) {
		const disabled = props.disabled.value;
		const readonly = props.readonly.value;
		if (e.key !== kbd.TAB) e.preventDefault();
		if (disabled || readonly) return;
		({
			day: handleDaySegmentKeydown,
			month: handleMonthSegmentKeydown,
			year: handleYearSegmentKeydown,
			hour: handleHourSegmentKeydown,
			minute: handleMinuteSegmentKeydown,
			second: handleSecondSegmentKeydown,
			dayPeriod: handleDayPeriodSegmentKeydown,
			timeZoneName: () => {}
		})[props.part](e);
		if (![kbd.ARROW_LEFT, kbd.ARROW_RIGHT].includes(e.key) && e.key !== kbd.TAB && e.key !== kbd.SHIFT && isAcceptableSegmentKey(e.key)) {
			if (Object.values(props.segmentValues.value).every((item) => item !== null)) {
				const updateObject = { ...props.segmentValues.value };
				let dateRef = props.placeholder.value.copy();
				Object.keys(updateObject).forEach((part) => {
					const value = updateObject[part];
					dateRef = dateRef.set({ [part]: value });
				});
				props.modelValue.value = dateRef.copy();
			}
		}
	}
	return {
		handleSegmentClick,
		handleSegmentKeydown,
		attributes
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Calendar/useCalendar.js
function handleNextDisabled(lastPeriodInView, nextPageFunc) {
	const firstPeriodOfNextPage = nextPageFunc(lastPeriodInView);
	const diff = firstPeriodOfNextPage.compare(lastPeriodInView);
	const duration = {};
	if (diff >= 7) duration.day = 1;
	if (diff >= getDaysInMonth(lastPeriodInView)) duration.month = 1;
	return firstPeriodOfNextPage.set({ ...duration });
}
function handlePrevDisabled(firstPeriodInView, prevPageFunc) {
	const lastPeriodOfPrevPage = prevPageFunc(firstPeriodInView);
	const diff = firstPeriodInView.compare(lastPeriodOfPrevPage);
	const duration = {};
	if (diff >= 7) duration.day = 35;
	if (diff >= getDaysInMonth(firstPeriodInView)) duration.month = 13;
	return lastPeriodOfPrevPage.set({ ...duration });
}
function handleNextPage(date, nextPageFunc) {
	return nextPageFunc(date);
}
function handlePrevPage(date, prevPageFunc) {
	return prevPageFunc(date);
}
function useCalendar(props) {
	const formatter = useDateFormatter(props.locale.value);
	const headingFormatOptions = computed(() => {
		const options = { calendar: props.placeholder.value.calendar.identifier };
		if (props.placeholder.value.calendar.identifier === "gregory" && props.placeholder.value.era === "BC") options.era = "short";
		return options;
	});
	const grid = ref(createMonths({
		dateObj: props.placeholder.value,
		weekStartsOn: props.weekStartsOn.value,
		locale: props.locale.value,
		fixedWeeks: props.fixedWeeks.value,
		numberOfMonths: props.numberOfMonths.value
	}));
	const visibleView = computed(() => {
		return grid.value.map((month) => month.value);
	});
	function isOutsideVisibleView(date) {
		return !visibleView.value.some((month) => $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(date, month));
	}
	const isNextButtonDisabled = (nextPageFunc) => {
		if (!props.maxValue.value || !grid.value.length) return false;
		if (props.disabled.value) return true;
		const lastPeriodInView = grid.value[grid.value.length - 1].value;
		if (!nextPageFunc && !props.nextPage.value) return isAfter(lastPeriodInView.add({ months: 1 }).set({ day: 1 }), props.maxValue.value);
		return isAfter(handleNextDisabled(lastPeriodInView, nextPageFunc || props.nextPage.value), props.maxValue.value);
	};
	const isPrevButtonDisabled = (prevPageFunc) => {
		if (!props.minValue.value || !grid.value.length) return false;
		if (props.disabled.value) return true;
		const firstPeriodInView = grid.value[0].value;
		if (!prevPageFunc && !props.prevPage.value) return isBefore(firstPeriodInView.subtract({ months: 1 }).set({ day: 35 }), props.minValue.value);
		return isBefore(handlePrevDisabled(firstPeriodInView, prevPageFunc || props.prevPage.value), props.minValue.value);
	};
	function isDateDisabled(dateObj) {
		if (props.isDateDisabled?.(dateObj) || props.disabled.value) return true;
		if (props.maxValue.value && isAfter(dateObj, props.maxValue.value)) return true;
		if (props.minValue.value && isBefore(dateObj, props.minValue.value)) return true;
		return false;
	}
	const isDateUnavailable = (date) => {
		if (props.isDateUnavailable?.(date)) return true;
		return false;
	};
	const weekdays = computed(() => {
		if (!grid.value.length) return [];
		return grid.value[0].rows[0].map((date) => {
			return formatter.dayOfWeek(toDate(date), props.weekdayFormat.value);
		});
	});
	const nextPage = (nextPageFunc) => {
		const firstDate = grid.value[0].value;
		if (!nextPageFunc && !props.nextPage.value) {
			const newGrid$1 = createMonths({
				dateObj: firstDate.add({ months: props.pagedNavigation.value ? props.numberOfMonths.value : 1 }),
				weekStartsOn: props.weekStartsOn.value,
				locale: props.locale.value,
				fixedWeeks: props.fixedWeeks.value,
				numberOfMonths: props.numberOfMonths.value
			});
			grid.value = newGrid$1;
			props.placeholder.value = newGrid$1[0].value.set({ day: 1 });
			return;
		}
		const newGrid = createMonths({
			dateObj: handleNextPage(firstDate, nextPageFunc || props.nextPage.value),
			weekStartsOn: props.weekStartsOn.value,
			locale: props.locale.value,
			fixedWeeks: props.fixedWeeks.value,
			numberOfMonths: props.numberOfMonths.value
		});
		grid.value = newGrid;
		const duration = {};
		if (!nextPageFunc) {
			const diff = newGrid[0].value.compare(firstDate);
			if (diff >= getDaysInMonth(firstDate)) duration.day = 1;
			if (diff >= 365) duration.month = 1;
		}
		props.placeholder.value = newGrid[0].value.set({ ...duration });
	};
	const prevPage = (prevPageFunc) => {
		const firstDate = grid.value[0].value;
		if (!prevPageFunc && !props.prevPage.value) {
			const newGrid$1 = createMonths({
				dateObj: firstDate.subtract({ months: props.pagedNavigation.value ? props.numberOfMonths.value : 1 }),
				weekStartsOn: props.weekStartsOn.value,
				locale: props.locale.value,
				fixedWeeks: props.fixedWeeks.value,
				numberOfMonths: props.numberOfMonths.value
			});
			grid.value = newGrid$1;
			props.placeholder.value = newGrid$1[0].value.set({ day: 1 });
			return;
		}
		const newGrid = createMonths({
			dateObj: handlePrevPage(firstDate, prevPageFunc || props.prevPage.value),
			weekStartsOn: props.weekStartsOn.value,
			locale: props.locale.value,
			fixedWeeks: props.fixedWeeks.value,
			numberOfMonths: props.numberOfMonths.value
		});
		grid.value = newGrid;
		const duration = {};
		if (!prevPageFunc) {
			const diff = firstDate.compare(newGrid[0].value);
			if (diff >= getDaysInMonth(firstDate)) duration.day = 1;
			if (diff >= 365) duration.month = 1;
		}
		props.placeholder.value = newGrid[0].value.set({ ...duration });
	};
	watch(props.placeholder, (value) => {
		if (visibleView.value.some((month) => $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(month, value))) return;
		grid.value = createMonths({
			dateObj: value,
			weekStartsOn: props.weekStartsOn.value,
			locale: props.locale.value,
			fixedWeeks: props.fixedWeeks.value,
			numberOfMonths: props.numberOfMonths.value
		});
	});
	watch([
		props.locale,
		props.weekStartsOn,
		props.fixedWeeks,
		props.numberOfMonths
	], () => {
		grid.value = createMonths({
			dateObj: props.placeholder.value,
			weekStartsOn: props.weekStartsOn.value,
			locale: props.locale.value,
			fixedWeeks: props.fixedWeeks.value,
			numberOfMonths: props.numberOfMonths.value
		});
	});
	const headingValue = computed(() => {
		if (!grid.value.length) return "";
		if (props.locale.value !== formatter.getLocale()) formatter.setLocale(props.locale.value);
		if (grid.value.length === 1) {
			const month = grid.value[0].value;
			return `${formatter.fullMonthAndYear(toDate(month), headingFormatOptions.value)}`;
		}
		const startMonth = toDate(grid.value[0].value);
		const endMonth = toDate(grid.value[grid.value.length - 1].value);
		const startMonthName = formatter.fullMonth(startMonth, headingFormatOptions.value);
		const endMonthName = formatter.fullMonth(endMonth, headingFormatOptions.value);
		const startMonthYear = formatter.fullYear(startMonth, headingFormatOptions.value);
		const endMonthYear = formatter.fullYear(endMonth, headingFormatOptions.value);
		return startMonthYear === endMonthYear ? `${startMonthName} - ${endMonthName} ${endMonthYear}` : `${startMonthName} ${startMonthYear} - ${endMonthName} ${endMonthYear}`;
	});
	return {
		isDateDisabled,
		isDateUnavailable,
		isNextButtonDisabled,
		isPrevButtonDisabled,
		grid,
		weekdays,
		visibleView,
		isOutsideVisibleView,
		formatter,
		nextPage,
		prevPage,
		headingValue,
		fullCalendarLabel: computed(() => `${props.calendarLabel.value ?? "Event Date"}, ${headingValue.value}`)
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Calendar/utils.js
var SELECTOR = "[data-reka-calendar-cell-trigger]:not([data-outside-view]):not([data-outside-visible-view])";
function getSelectableCells(calendar) {
	return Array.from(calendar.querySelectorAll(SELECTOR)) ?? [];
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangeField/DateRangeFieldRoot.js
var [injectDateRangeFieldRootContext, provideDateRangeFieldRootContext] = createContext("DateRangeFieldRoot");
var DateRangeFieldRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DateRangeFieldRoot",
	props: {
		defaultValue: {
			type: Object,
			required: false,
			default: void 0
		},
		defaultPlaceholder: {
			type: null,
			required: false
		},
		placeholder: {
			type: null,
			required: false,
			default: void 0
		},
		modelValue: {
			type: [Object, null],
			required: false
		},
		hourCycle: {
			type: null,
			required: false
		},
		step: {
			type: Object,
			required: false
		},
		granularity: {
			type: String,
			required: false
		},
		hideTimeZone: {
			type: Boolean,
			required: false
		},
		maxValue: {
			type: null,
			required: false
		},
		minValue: {
			type: null,
			required: false
		},
		locale: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		readonly: {
			type: Boolean,
			required: false,
			default: false
		},
		isDateUnavailable: {
			type: Function,
			required: false,
			default: void 0
		},
		id: {
			type: String,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue", "update:placeholder"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { disabled, readonly, isDateUnavailable: propsIsDateUnavailable, dir: propDir, locale: propLocale } = toRefs(props);
		const locale = useLocale(propLocale);
		const dir = useDirection(propDir);
		const formatter = useDateFormatter(locale.value, { hourCycle: normalizeHourCycle(props.hourCycle) });
		const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
		const segmentElements = ref(/* @__PURE__ */ new Set());
		onMounted(() => {
			getSegmentElements(parentElement.value).forEach((item) => segmentElements.value.add(item));
		});
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? {
				start: void 0,
				end: void 0
			},
			passive: props.modelValue === void 0
		});
		const defaultDate = getDefaultDate({
			defaultPlaceholder: props.placeholder,
			granularity: props.granularity,
			defaultValue: modelValue.value?.start,
			locale: props.locale
		});
		const placeholder = useVModel(props, "placeholder", emits, {
			defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
			passive: props.placeholder === void 0
		});
		const step = computed(() => normalizeDateStep(props));
		const inferredGranularity = computed(() => {
			if (props.granularity) return !hasTime(placeholder.value) ? "day" : props.granularity;
			return hasTime(placeholder.value) ? "minute" : "day";
		});
		const isStartInvalid = computed(() => {
			if (!modelValue.value?.start) return false;
			if (propsIsDateUnavailable.value?.(modelValue.value.start)) return true;
			if (props.minValue && isBefore(modelValue.value.start, props.minValue)) return true;
			if (props.maxValue && isBefore(props.maxValue, modelValue.value.start)) return true;
			return false;
		});
		const isEndInvalid = computed(() => {
			if (!modelValue.value?.end) return false;
			if (propsIsDateUnavailable.value?.(modelValue.value.end)) return true;
			if (props.minValue && isBefore(modelValue.value.end, props.minValue)) return true;
			if (props.maxValue && isBefore(props.maxValue, modelValue.value.end)) return true;
			return false;
		});
		const isInvalid = computed(() => {
			if (isStartInvalid.value || isEndInvalid.value) return true;
			if (!modelValue.value?.start || !modelValue.value?.end) return false;
			if (!isBeforeOrSame(modelValue.value.start, modelValue.value.end)) return true;
			if (propsIsDateUnavailable.value !== void 0) {
				if (!areAllDaysBetweenValid(modelValue.value.start, modelValue.value.end, propsIsDateUnavailable.value, void 0)) return true;
			}
			return false;
		});
		const initialSegments = initializeSegmentValues(inferredGranularity.value);
		const startSegmentValues = ref(modelValue.value?.start ? { ...syncSegmentValues({
			value: modelValue.value.start,
			formatter
		}) } : { ...initialSegments });
		const endSegmentValues = ref(modelValue.value?.end ? { ...syncSegmentValues({
			value: modelValue.value.end,
			formatter
		}) } : { ...initialSegments });
		const startSegmentContent = computed(() => createContent({
			granularity: inferredGranularity.value,
			dateRef: placeholder.value,
			formatter,
			hideTimeZone: props.hideTimeZone,
			hourCycle: props.hourCycle,
			segmentValues: startSegmentValues.value,
			locale
		}));
		const endSegmentContent = computed(() => createContent({
			granularity: inferredGranularity.value,
			dateRef: placeholder.value,
			formatter,
			hideTimeZone: props.hideTimeZone,
			hourCycle: props.hourCycle,
			segmentValues: endSegmentValues.value,
			locale
		}));
		const segmentContents = computed(() => ({
			start: startSegmentContent.value.arr,
			end: endSegmentContent.value.arr
		}));
		const editableSegmentContents = computed(() => ({
			start: segmentContents.value.start.filter(({ part }) => part !== "literal"),
			end: segmentContents.value.end.filter(({ part }) => part !== "literal")
		}));
		const startValue = ref(modelValue.value?.start?.copy());
		const endValue = ref(modelValue.value?.end?.copy());
		watch([startValue, endValue], ([_startValue, _endValue]) => {
			modelValue.value = {
				start: _startValue?.copy(),
				end: _endValue?.copy()
			};
		});
		watch(modelValue, (_modelValue) => {
			if (_modelValue?.start && startValue.value ? _modelValue.start.compare(startValue.value) !== 0 : _modelValue?.start !== startValue.value) startValue.value = _modelValue?.start?.copy();
			if (_modelValue?.end && endValue.value ? _modelValue.end.compare(endValue.value) !== 0 : _modelValue?.end !== endValue.value) endValue.value = _modelValue?.end?.copy();
		});
		watch([startValue, locale], ([_startValue]) => {
			if (_startValue !== void 0) startSegmentValues.value = { ...syncSegmentValues({
				value: _startValue,
				formatter
			}) };
			else if (Object.values(startSegmentValues.value).every((value) => value !== null) && _startValue === void 0) startSegmentValues.value = { ...initialSegments };
		});
		watch(locale, (value) => {
			if (formatter.getLocale() !== value) {
				formatter.setLocale(value);
				nextTick(() => {
					segmentElements.value.clear();
					getSegmentElements(parentElement.value).forEach((item) => segmentElements.value.add(item));
				});
			}
		});
		watch(modelValue, (_modelValue) => {
			if (_modelValue && _modelValue.start !== void 0 && placeholder.value.compare(_modelValue.start) !== 0) placeholder.value = _modelValue.start.copy();
		});
		watch([endValue, locale], ([_endValue]) => {
			if (_endValue !== void 0) endSegmentValues.value = { ...syncSegmentValues({
				value: _endValue,
				formatter
			}) };
			else if (Object.values(endSegmentValues.value).every((value) => value !== null) && _endValue === void 0) endSegmentValues.value = { ...initialSegments };
		});
		const currentFocusedElement = ref(null);
		const currentSegmentIndex = computed(() => Array.from(segmentElements.value).findIndex((el) => el.getAttribute("data-reka-date-field-segment") === currentFocusedElement.value?.getAttribute("data-reka-date-field-segment") && el.getAttribute("data-reka-date-range-field-segment-type") === currentFocusedElement.value?.getAttribute("data-reka-date-range-field-segment-type")));
		const nextFocusableSegment = computed(() => {
			const sign = dir.value === "rtl" ? -1 : 1;
			if (sign < 0 ? currentSegmentIndex.value < 0 : currentSegmentIndex.value > segmentElements.value.size - 1) return null;
			return Array.from(segmentElements.value)[currentSegmentIndex.value + sign];
		});
		const prevFocusableSegment = computed(() => {
			const sign = dir.value === "rtl" ? -1 : 1;
			if (sign > 0 ? currentSegmentIndex.value < 0 : currentSegmentIndex.value > segmentElements.value.size - 1) return null;
			return Array.from(segmentElements.value)[currentSegmentIndex.value - sign];
		});
		const kbd = useKbd();
		function handleKeydown(e) {
			if (!isSegmentNavigationKey(e.key)) return;
			if (e.key === kbd.ARROW_LEFT) prevFocusableSegment.value?.focus();
			if (e.key === kbd.ARROW_RIGHT) nextFocusableSegment.value?.focus();
		}
		function setFocusedElement(el) {
			currentFocusedElement.value = el;
		}
		provideDateRangeFieldRootContext({
			isDateUnavailable: propsIsDateUnavailable.value,
			locale,
			startValue,
			endValue,
			placeholder,
			disabled,
			formatter,
			hourCycle: props.hourCycle,
			step,
			readonly,
			segmentValues: {
				start: startSegmentValues,
				end: endSegmentValues
			},
			isInvalid,
			segmentContents: editableSegmentContents,
			elements: segmentElements,
			setFocusedElement,
			focusNext() {
				nextFocusableSegment.value?.focus();
			}
		});
		__expose({ setFocusedElement });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(_ctx.$attrs, {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				role: "group",
				"aria-disabled": unref(disabled) ? true : void 0,
				"data-disabled": unref(disabled) ? "" : void 0,
				"data-readonly": unref(readonly) ? "" : void 0,
				"data-invalid": isInvalid.value ? "" : void 0,
				dir: unref(dir),
				onKeydown: withKeys(handleKeydown, ["left", "right"])
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					segments: segmentContents.value
				}), createVNode(unref(VisuallyHidden_default), {
					id: _ctx.id,
					as: "input",
					feature: "focusable",
					tabindex: "-1",
					value: `${unref(modelValue)?.start?.toString()} - ${unref(modelValue)?.end?.toString()}`,
					name: _ctx.name,
					disabled: unref(disabled),
					required: _ctx.required,
					onFocus: _cache[0] || (_cache[0] = ($event) => Array.from(segmentElements.value)?.[0]?.focus())
				}, null, 8, [
					"id",
					"value",
					"name",
					"disabled",
					"required"
				])]),
				_: 3
			}, 16, [
				"aria-disabled",
				"data-disabled",
				"data-readonly",
				"data-invalid",
				"dir"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangeField/DateRangeFieldInput.js
var DateRangeFieldInput_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangeFieldInput",
	props: {
		part: {
			type: null,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDateRangeFieldRootContext();
		const hasLeftFocus = ref(true);
		const { handleSegmentClick, handleSegmentKeydown, attributes } = useDateField({
			hasLeftFocus,
			lastKeyZero: ref(false),
			placeholder: rootContext.placeholder,
			hourCycle: rootContext.hourCycle,
			step: rootContext.step,
			segmentValues: rootContext.segmentValues[props.type],
			formatter: rootContext.formatter,
			part: props.part,
			disabled: rootContext.disabled,
			readonly: rootContext.readonly,
			focusNext: rootContext.focusNext,
			modelValue: props.type === "start" ? rootContext.startValue : rootContext.endValue
		});
		const disabled = computed(() => rootContext.disabled.value);
		const readonly = computed(() => rootContext.readonly.value);
		const isInvalid = computed(() => rootContext.isInvalid.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({
				as: _ctx.as,
				"as-child": _ctx.asChild
			}, unref(attributes), {
				contenteditable: disabled.value || readonly.value ? false : _ctx.part !== "literal",
				"data-reka-date-field-segment": _ctx.part,
				"aria-disabled": disabled.value ? true : void 0,
				"aria-readonly": readonly.value ? true : void 0,
				"data-disabled": disabled.value ? "" : void 0,
				"data-reka-date-range-field-segment-type": _ctx.type,
				"data-invalid": isInvalid.value ? "" : void 0,
				"aria-invalid": isInvalid.value ? true : void 0
			}, toHandlers(_ctx.part !== "literal" ? {
				mousedown: unref(handleSegmentClick),
				keydown: unref(handleSegmentKeydown),
				focusout: () => {
					hasLeftFocus.value = true;
				},
				focusin: (e) => {
					unref(rootContext).setFocusedElement(e.target);
				}
			} : {})), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"contenteditable",
				"data-reka-date-field-segment",
				"aria-disabled",
				"aria-readonly",
				"data-disabled",
				"data-reka-date-range-field-segment-type",
				"data-invalid",
				"aria-invalid"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerRoot.js
var [injectDateRangePickerRootContext, provideDateRangePickerRootContext] = createContext("DateRangePickerRoot");
var DateRangePickerRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DateRangePickerRoot",
	props: {
		defaultValue: {
			type: Object,
			required: false,
			default: () => ({
				start: void 0,
				end: void 0
			})
		},
		defaultPlaceholder: {
			type: null,
			required: false
		},
		placeholder: {
			type: null,
			required: false,
			default: void 0
		},
		modelValue: {
			type: [Object, null],
			required: false
		},
		hourCycle: {
			type: null,
			required: false
		},
		step: {
			type: Object,
			required: false
		},
		granularity: {
			type: String,
			required: false
		},
		hideTimeZone: {
			type: Boolean,
			required: false
		},
		maxValue: {
			type: null,
			required: false
		},
		minValue: {
			type: null,
			required: false
		},
		locale: {
			type: String,
			required: false,
			default: "en"
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		readonly: {
			type: Boolean,
			required: false,
			default: false
		},
		isDateUnavailable: {
			type: Function,
			required: false,
			default: void 0
		},
		id: {
			type: String,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false,
			default: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		modal: {
			type: Boolean,
			required: false,
			default: false
		},
		isDateDisabled: {
			type: Function,
			required: false,
			default: void 0
		},
		pagedNavigation: {
			type: Boolean,
			required: false,
			default: false
		},
		weekStartsOn: {
			type: Number,
			required: false,
			default: 0
		},
		weekdayFormat: {
			type: String,
			required: false,
			default: "narrow"
		},
		fixedWeeks: {
			type: Boolean,
			required: false,
			default: false
		},
		numberOfMonths: {
			type: Number,
			required: false,
			default: 1
		},
		preventDeselect: {
			type: Boolean,
			required: false,
			default: false
		},
		isDateHighlightable: {
			type: Function,
			required: false,
			default: void 0
		},
		allowNonContiguousRanges: {
			type: Boolean,
			required: false,
			default: false
		},
		fixedDate: {
			type: String,
			required: false
		},
		maximumDays: {
			type: Number,
			required: false,
			default: void 0
		},
		closeOnSelect: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	emits: [
		"update:modelValue",
		"update:placeholder",
		"update:startValue",
		"update:open"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { locale, disabled, readonly, pagedNavigation, weekStartsOn, weekdayFormat, fixedWeeks, numberOfMonths, preventDeselect, isDateDisabled: propsIsDateDisabled, isDateUnavailable: propsIsDateUnavailable, isDateHighlightable: propsIsDateHighlightable, defaultOpen, modal, id, name, required, minValue, maxValue, granularity, hideTimeZone, hourCycle, dir: propsDir, allowNonContiguousRanges, fixedDate, maximumDays, step, closeOnSelect } = toRefs(props);
		const dir = useDirection(propsDir);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? {
				start: void 0,
				end: void 0
			},
			passive: props.modelValue === void 0
		});
		const defaultDate = getDefaultDate({
			defaultPlaceholder: props.placeholder,
			granularity: props.granularity,
			defaultValue: modelValue.value?.start,
			locale: props.locale
		});
		const placeholder = useVModel(props, "placeholder", emits, {
			defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
			passive: props.placeholder === void 0
		});
		const open = useVModel(props, "open", emits, {
			defaultValue: defaultOpen.value,
			passive: props.open === void 0
		});
		const dateFieldRef = ref();
		watch(modelValue, (value) => {
			if (value && value.start && value.start.compare(placeholder.value) !== 0) placeholder.value = value.start.copy();
			if (value.start && value.end) {
				if (closeOnSelect.value) open.value = false;
			}
		});
		provideDateRangePickerRootContext({
			allowNonContiguousRanges,
			isDateUnavailable: propsIsDateUnavailable.value,
			isDateDisabled: propsIsDateDisabled.value,
			isDateHighlightable: propsIsDateHighlightable.value,
			locale,
			disabled,
			pagedNavigation,
			weekStartsOn,
			weekdayFormat,
			fixedWeeks,
			numberOfMonths,
			readonly,
			preventDeselect,
			modelValue,
			placeholder,
			defaultOpen,
			modal,
			open,
			id,
			name,
			required,
			minValue,
			maxValue,
			granularity,
			hideTimeZone,
			hourCycle,
			dateFieldRef,
			dir,
			fixedDate,
			maximumDays,
			step,
			onStartValueChange(date) {
				emits("update:startValue", date);
			},
			onDateChange(date) {
				modelValue.value = {
					start: date.start?.copy(),
					end: date.end?.copy()
				};
			},
			onPlaceholderChange(date) {
				placeholder.value = date.copy();
			},
			closeOnSelect
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopoverRoot_default), {
				open: unref(open),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null),
				"default-open": unref(defaultOpen),
				modal: unref(modal)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					open: unref(open)
				})]),
				_: 3
			}, 8, [
				"open",
				"default-open",
				"modal"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/useRangeCalendar.js
function useRangeCalendarState(props) {
	const isStartInvalid = computed(() => {
		if (!props.start.value) return false;
		if (props.isDateDisabled(props.start.value)) return true;
		return false;
	});
	const isEndInvalid = computed(() => {
		if (!props.end.value) return false;
		if (props.isDateDisabled(props.end.value)) return true;
		return false;
	});
	const isInvalid = computed(() => {
		if (isStartInvalid.value || isEndInvalid.value) return false;
		if (props.start.value && props.end.value && isBefore(props.end.value, props.start.value)) return true;
		return false;
	});
	const isSelectionStart = (date) => {
		if (!props.start.value) return false;
		return $14e0f24ef4ac5c92$export$ea39ec197993aef0(props.start.value, date);
	};
	const isSelectionEnd = (date) => {
		if (!props.end.value) return false;
		return $14e0f24ef4ac5c92$export$ea39ec197993aef0(props.end.value, date);
	};
	const isSelected = (date) => {
		if (props.start.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(props.start.value, date)) return true;
		if (props.end.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(props.end.value, date)) return true;
		if (props.end.value && props.start.value) return isBetween(date, props.start.value, props.end.value);
		return false;
	};
	const rangeIsDateDisabled = (date) => {
		if (props.isDateDisabled(date)) return true;
		if (props.maximumDays?.value) {
			if (props.start.value && props.end.value) {
				if (props.fixedDate.value) {
					const diff = getDaysBetween(props.start.value, props.end.value).length;
					if (diff <= props.maximumDays.value) {
						const daysLeft = props.maximumDays.value - diff - 1;
						return !isBetween(date, props.start.value.subtract({ days: daysLeft }), props.end.value.add({ days: daysLeft }));
					}
				}
				return false;
			}
			if (props.start.value) {
				const maxDate = props.start.value.add({ days: props.maximumDays.value });
				return !isBetween(date, props.start.value.subtract({ days: props.maximumDays.value }), maxDate);
			}
		}
		if (!props.start.value || props.end.value || $14e0f24ef4ac5c92$export$ea39ec197993aef0(props.start.value, date)) return false;
		return false;
	};
	const isDateHighlightable = (date) => {
		if (props.isDateHighlightable?.(date)) return true;
		return false;
	};
	const highlightedRange = computed(() => {
		if (props.start.value && props.end.value && !props.fixedDate.value) return null;
		if (!props.start.value || !props.focusedValue.value) return null;
		const isStartBeforeFocused = isBefore(props.start.value, props.focusedValue.value);
		const start = isStartBeforeFocused ? props.start.value : props.focusedValue.value;
		const end = isStartBeforeFocused ? props.focusedValue.value : props.start.value;
		if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(start, end)) return {
			start,
			end
		};
		if (props.maximumDays?.value && !props.end.value) return {
			start,
			end: isStartBeforeFocused ? start.add({ days: props.maximumDays.value }) : start.subtract({ days: props.maximumDays.value })
		};
		if (areAllDaysBetweenValid(start, end, props.allowNonContiguousRanges.value ? () => false : props.isDateUnavailable, rangeIsDateDisabled, props.isDateHighlightable)) return {
			start,
			end
		};
		return null;
	});
	const isHighlightedStart = (date) => {
		if (!highlightedRange.value || !highlightedRange.value.start) return false;
		return $14e0f24ef4ac5c92$export$ea39ec197993aef0(highlightedRange.value.start, date);
	};
	const isHighlightedEnd = (date) => {
		if (!highlightedRange.value || !highlightedRange.value.end) return false;
		return $14e0f24ef4ac5c92$export$ea39ec197993aef0(highlightedRange.value.end, date);
	};
	return {
		isInvalid,
		isSelected,
		isDateHighlightable,
		highlightedRange,
		isSelectionStart,
		isSelectionEnd,
		isHighlightedStart,
		isHighlightedEnd,
		isDateDisabled: rangeIsDateDisabled
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarRoot.js
var _hoisted_1$1 = { style: {
	"border": "0px",
	"clip": "rect(0px, 0px, 0px, 0px)",
	"clip-path": "inset(50%)",
	"height": "1px",
	"margin": "-1px",
	"overflow": "hidden",
	"padding": "0px",
	"position": "absolute",
	"white-space": "nowrap",
	"width": "1px"
} };
var _hoisted_2 = {
	role: "heading",
	"aria-level": "2"
};
var [injectRangeCalendarRootContext, provideRangeCalendarRootContext] = createContext("RangeCalendarRoot");
var RangeCalendarRoot_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarRoot",
	props: {
		defaultPlaceholder: {
			type: null,
			required: false
		},
		defaultValue: {
			type: Object,
			required: false,
			default: () => ({
				start: void 0,
				end: void 0
			})
		},
		modelValue: {
			type: [Object, null],
			required: false
		},
		placeholder: {
			type: null,
			required: false,
			default: void 0
		},
		allowNonContiguousRanges: {
			type: Boolean,
			required: false,
			default: false
		},
		pagedNavigation: {
			type: Boolean,
			required: false,
			default: false
		},
		preventDeselect: {
			type: Boolean,
			required: false,
			default: false
		},
		maximumDays: {
			type: Number,
			required: false,
			default: void 0
		},
		weekStartsOn: {
			type: Number,
			required: false,
			default: 0
		},
		weekdayFormat: {
			type: String,
			required: false,
			default: "narrow"
		},
		calendarLabel: {
			type: String,
			required: false
		},
		fixedWeeks: {
			type: Boolean,
			required: false,
			default: false
		},
		maxValue: {
			type: null,
			required: false
		},
		minValue: {
			type: null,
			required: false
		},
		locale: {
			type: String,
			required: false
		},
		numberOfMonths: {
			type: Number,
			required: false,
			default: 1
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		readonly: {
			type: Boolean,
			required: false,
			default: false
		},
		initialFocus: {
			type: Boolean,
			required: false,
			default: false
		},
		isDateDisabled: {
			type: Function,
			required: false,
			default: void 0
		},
		isDateUnavailable: {
			type: Function,
			required: false,
			default: void 0
		},
		isDateHighlightable: {
			type: Function,
			required: false,
			default: void 0
		},
		dir: {
			type: String,
			required: false
		},
		nextPage: {
			type: Function,
			required: false
		},
		prevPage: {
			type: Function,
			required: false
		},
		disableDaysOutsideCurrentView: {
			type: Boolean,
			required: false,
			default: false
		},
		fixedDate: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	emits: [
		"update:modelValue",
		"update:validModelValue",
		"update:placeholder",
		"update:startValue"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { disabled, readonly, initialFocus, pagedNavigation, weekStartsOn, weekdayFormat, fixedWeeks, numberOfMonths, preventDeselect, isDateUnavailable: propsIsDateUnavailable, isDateHighlightable: propsIsDateHighlightable, isDateDisabled: propsIsDateDisabled, calendarLabel, maxValue, minValue, dir: propDir, locale: propLocale, nextPage: propsNextPage, prevPage: propsPrevPage, allowNonContiguousRanges, disableDaysOutsideCurrentView, fixedDate, maximumDays } = toRefs(props);
		const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
		const dir = useDirection(propDir);
		const locale = useLocale(propLocale);
		const lastPressedDateValue = ref();
		const focusedValue = ref();
		const isEditing = ref(false);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? {
				start: void 0,
				end: void 0
			},
			passive: props.modelValue === void 0
		});
		const validModelValue = ref(modelValue.value);
		watch(validModelValue, (value) => {
			emits("update:validModelValue", value);
		});
		const defaultDate = getDefaultDate({
			defaultPlaceholder: props.placeholder,
			defaultValue: modelValue.value.start,
			locale: props.locale
		});
		const startValue = ref(modelValue.value.start);
		const endValue = ref(modelValue.value.end);
		const placeholder = useVModel(props, "placeholder", emits, {
			defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
			passive: props.placeholder === void 0
		});
		function onPlaceholderChange(value) {
			placeholder.value = value.copy();
		}
		const { fullCalendarLabel, headingValue, isDateDisabled, isDateUnavailable, isNextButtonDisabled, isPrevButtonDisabled, grid, weekdays, isOutsideVisibleView, nextPage, prevPage, formatter } = useCalendar({
			locale,
			placeholder,
			weekStartsOn,
			fixedWeeks,
			numberOfMonths,
			minValue,
			maxValue,
			disabled,
			weekdayFormat,
			pagedNavigation,
			isDateDisabled: propsIsDateDisabled.value,
			isDateUnavailable: propsIsDateUnavailable.value,
			calendarLabel,
			nextPage: propsNextPage,
			prevPage: propsPrevPage
		});
		const { isInvalid, isSelected, isDateHighlightable, highlightedRange, isSelectionStart, isSelectionEnd, isHighlightedStart, isHighlightedEnd, isDateDisabled: rangeIsDateDisabled } = useRangeCalendarState({
			start: startValue,
			end: endValue,
			isDateDisabled,
			isDateUnavailable,
			isDateHighlightable: propsIsDateHighlightable.value,
			focusedValue,
			allowNonContiguousRanges,
			fixedDate,
			maximumDays
		});
		watch(modelValue, (_modelValue, _prevValue) => {
			if (!_prevValue?.start && _modelValue?.start || !_modelValue || !_modelValue.start || startValue.value && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(_modelValue.start, startValue.value)) startValue.value = _modelValue?.start?.copy?.();
			if (!_prevValue?.end && _modelValue.end || !_modelValue || !_modelValue.end || endValue.value && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(_modelValue.end, endValue.value)) endValue.value = _modelValue?.end?.copy?.();
		});
		watch(startValue, (_startValue) => {
			if (_startValue && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(_startValue, placeholder.value)) onPlaceholderChange(_startValue);
			emits("update:startValue", _startValue);
		});
		watch([startValue, endValue], ([_startValue, _endValue]) => {
			const value = modelValue.value;
			if (value && value.start && value.end && _startValue && _endValue && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(value.start, _startValue) && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(value.end, _endValue)) return;
			isEditing.value = true;
			if (_endValue && _startValue) {
				if (isBefore(_endValue, _startValue)) modelValue.value = {
					start: _endValue.copy(),
					end: _startValue.copy()
				};
				else modelValue.value = {
					start: _startValue.copy(),
					end: _endValue.copy()
				};
				isEditing.value = false;
				validModelValue.value = {
					start: modelValue.value.start?.copy(),
					end: modelValue.value.end?.copy()
				};
			} else if (_startValue) modelValue.value = {
				start: _startValue.copy(),
				end: void 0
			};
			else modelValue.value = {
				start: _endValue?.copy(),
				end: void 0
			};
		});
		const kbd = useKbd();
		useEventListener("keydown", (ev) => {
			if (ev.key === kbd.ESCAPE && isEditing.value) {
				startValue.value = validModelValue.value.start?.copy();
				endValue.value = validModelValue.value.end?.copy();
			}
		});
		provideRangeCalendarRootContext({
			isDateUnavailable,
			isDateHighlightable,
			startValue,
			endValue,
			formatter,
			modelValue,
			placeholder,
			disabled,
			initialFocus,
			pagedNavigation,
			grid,
			weekDays: weekdays,
			weekStartsOn,
			weekdayFormat,
			fixedWeeks,
			numberOfMonths,
			readonly,
			preventDeselect,
			fullCalendarLabel,
			headingValue,
			isInvalid,
			isDateDisabled: rangeIsDateDisabled,
			allowNonContiguousRanges,
			highlightedRange,
			focusedValue,
			lastPressedDateValue,
			isSelected,
			isSelectionEnd,
			isSelectionStart,
			isNextButtonDisabled,
			isPrevButtonDisabled,
			isOutsideVisibleView,
			nextPage,
			prevPage,
			parentElement,
			onPlaceholderChange,
			locale,
			dir,
			isHighlightedStart,
			isHighlightedEnd,
			disableDaysOutsideCurrentView,
			fixedDate,
			maximumDays
		});
		onMounted(() => {
			if (initialFocus.value) handleCalendarInitialFocus(parentElement.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				as: _ctx.as,
				"as-child": _ctx.asChild,
				role: "application",
				"aria-label": unref(fullCalendarLabel),
				"data-readonly": unref(readonly) ? "" : void 0,
				"data-disabled": unref(disabled) ? "" : void 0,
				"data-invalid": unref(isInvalid) ? "" : void 0,
				dir: unref(dir)
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2, toDisplayString(unref(fullCalendarLabel)), 1)]), renderSlot(_ctx.$slots, "default", {
					date: unref(placeholder),
					grid: unref(grid),
					weekDays: unref(weekdays),
					weekStartsOn: unref(weekStartsOn),
					locale: unref(locale),
					fixedWeeks: unref(fixedWeeks),
					modelValue: unref(modelValue)
				})]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"aria-label",
				"data-readonly",
				"data-disabled",
				"data-invalid",
				"dir"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerCalendar.js
var DateRangePickerCalendar_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerCalendar",
	setup(__props) {
		const rootContext = injectDateRangePickerRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarRoot_default), mergeProps({
				allowNonContiguousRanges: unref(rootContext).allowNonContiguousRanges.value,
				isDateDisabled: unref(rootContext).isDateDisabled,
				isDateUnavailable: unref(rootContext).isDateUnavailable,
				isDateHighlightable: unref(rootContext).isDateHighlightable,
				locale: unref(rootContext).locale.value,
				disabled: unref(rootContext).disabled.value,
				pagedNavigation: unref(rootContext).pagedNavigation.value,
				weekStartsOn: unref(rootContext).weekStartsOn.value,
				weekdayFormat: unref(rootContext).weekdayFormat.value,
				fixedWeeks: unref(rootContext).fixedWeeks.value,
				numberOfMonths: unref(rootContext).numberOfMonths.value,
				readonly: unref(rootContext).readonly.value,
				preventDeselect: unref(rootContext).preventDeselect.value,
				minValue: unref(rootContext).minValue.value,
				maxValue: unref(rootContext).maxValue.value,
				dir: unref(rootContext).dir.value,
				fixedDate: unref(rootContext).fixedDate.value,
				maximumDays: unref(rootContext).maximumDays?.value
			}, {
				"model-value": unref(rootContext).modelValue.value,
				placeholder: unref(rootContext).placeholder.value,
				"onUpdate:startValue": _cache[0] || (_cache[0] = (date) => {
					unref(rootContext).onStartValueChange(date);
				}),
				"onUpdate:modelValue": _cache[1] || (_cache[1] = (date) => {
					if (date.start && unref(rootContext).modelValue.value?.start && date.end && unref(rootContext).modelValue.value?.end && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(date.start, unref(rootContext).modelValue.value?.start) && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(date.end, unref(rootContext).modelValue.value?.end)) return;
					unref(rootContext).onDateChange(date);
				}),
				"onUpdate:placeholder": _cache[2] || (_cache[2] = (date) => {
					if (unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(date, unref(rootContext).placeholder.value)) return;
					unref(rootContext).onPlaceholderChange(date);
				})
			}), {
				default: withCtx(({ weekDays, grid, date, weekStartsOn, locale, fixedWeeks }) => [renderSlot(_ctx.$slots, "default", {
					date,
					grid,
					weekDays,
					weekStartsOn,
					locale,
					fixedWeeks
				})]),
				_: 3
			}, 16, ["model-value", "placeholder"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarCell.js
var RangeCalendarCell_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarCell",
	props: {
		date: {
			type: null,
			required: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "td"
		}
	},
	setup(__props) {
		const rootContext = injectRangeCalendarRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: _ctx.as,
				"as-child": _ctx.asChild,
				role: "gridcell",
				"aria-selected": unref(rootContext).isSelected(_ctx.date) ? true : void 0,
				"aria-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).isDateUnavailable?.(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value,
				"data-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value ? "" : void 0
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"aria-selected",
				"aria-disabled",
				"data-disabled"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerCell.js
var DateRangePickerCell_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerCell",
	props: {
		date: {
			type: null,
			required: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarCell_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarCellTrigger.js
var RangeCalendarCellTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarCellTrigger",
	props: {
		day: {
			type: null,
			required: true
		},
		month: {
			type: null,
			required: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectRangeCalendarRootContext();
		const kbd = useKbd();
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const labelText = computed(() => rootContext.formatter.custom(toDate(props.day), {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric"
		}));
		const isUnavailable = computed(() => rootContext.isDateUnavailable?.(props.day) ?? false);
		const isSelectedDate = computed(() => rootContext.isSelected(props.day));
		const isSelectionStart = computed(() => rootContext.isSelectionStart(props.day));
		const isSelectionEnd = computed(() => rootContext.isSelectionEnd(props.day));
		const isHighlightStart = computed(() => rootContext.isHighlightedStart(props.day));
		const isHighlightEnd = computed(() => rootContext.isHighlightedEnd(props.day));
		const isHighlighted = computed(() => rootContext.highlightedRange.value ? isBetweenInclusive(props.day, rootContext.highlightedRange.value.start, rootContext.highlightedRange.value.end) : false);
		const allowNonContiguousRanges = computed(() => rootContext.allowNonContiguousRanges.value);
		const isDateToday = computed(() => {
			return $14e0f24ef4ac5c92$export$629b0a497aa65267(props.day, $14e0f24ef4ac5c92$export$aa8b41735afcabd2());
		});
		const isOutsideView = computed(() => {
			return !$14e0f24ef4ac5c92$export$a18c89cbd24170ff(props.day, props.month);
		});
		const isOutsideVisibleView = computed(() => rootContext.isOutsideVisibleView(props.day));
		const isDisabled = computed(() => rootContext.isDateDisabled(props.day) || rootContext.disableDaysOutsideCurrentView.value && isOutsideView.value);
		const dayValue = computed(() => props.day.day.toLocaleString(rootContext.locale.value));
		const isFocusedDate = computed(() => {
			return !rootContext.disabled.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(props.day, rootContext.placeholder.value);
		});
		function changeDate(e, date) {
			if (rootContext.readonly.value) return;
			if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date)) return;
			rootContext.lastPressedDateValue.value = date.copy();
			if (rootContext.startValue.value && rootContext.highlightedRange.value === null) {
				if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(date, rootContext.startValue.value) && !rootContext.preventDeselect.value && !rootContext.endValue.value) {
					rootContext.startValue.value = void 0;
					rootContext.onPlaceholderChange(date);
					return;
				} else if (!rootContext.endValue.value) {
					e.preventDefault();
					if (rootContext.lastPressedDateValue.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(rootContext.lastPressedDateValue.value, date)) rootContext.startValue.value = date.copy();
					return;
				}
			}
			if (rootContext.startValue.value && rootContext.endValue.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(rootContext.endValue.value, date) && !rootContext.preventDeselect.value) {
				rootContext.startValue.value = void 0;
				rootContext.endValue.value = void 0;
				rootContext.onPlaceholderChange(date);
				return;
			}
			if (!rootContext.startValue.value) rootContext.startValue.value = date.copy();
			else if (!rootContext.endValue.value) rootContext.endValue.value = date.copy();
			else if (rootContext.endValue.value && rootContext.startValue.value) {
				if (!rootContext.fixedDate.value) {
					rootContext.endValue.value = void 0;
					rootContext.startValue.value = date.copy();
				} else if (rootContext.fixedDate.value === "start") if (date.compare(rootContext.startValue.value) < 0) rootContext.startValue.value = date.copy();
				else rootContext.endValue.value = date.copy();
				else if (rootContext.fixedDate.value === "end") if (date.compare(rootContext.endValue.value) > 0) rootContext.endValue.value = date.copy();
				else rootContext.startValue.value = date.copy();
			}
		}
		function handleClick(e) {
			if (isDisabled.value) return;
			changeDate(e, props.day);
		}
		function handleFocus() {
			if (isDisabled.value || rootContext.isDateUnavailable?.(props.day)) return;
			rootContext.focusedValue.value = props.day.copy();
		}
		function handleArrowKey(e) {
			if (isDisabled.value) return;
			e.preventDefault();
			e.stopPropagation();
			const parentElement = rootContext.parentElement.value;
			const indexIncrementation = 7;
			const sign = rootContext.dir.value === "rtl" ? -1 : 1;
			switch (e.code) {
				case kbd.ARROW_RIGHT:
					shiftFocus(currentElement.value, sign);
					break;
				case kbd.ARROW_LEFT:
					shiftFocus(currentElement.value, -sign);
					break;
				case kbd.ARROW_UP:
					shiftFocus(currentElement.value, -indexIncrementation);
					break;
				case kbd.ARROW_DOWN:
					shiftFocus(currentElement.value, indexIncrementation);
					break;
				case kbd.ENTER:
				case kbd.SPACE_CODE: changeDate(e, props.day);
			}
			function shiftFocus(node, add) {
				const allCollectionItems = getSelectableCells(parentElement);
				if (!allCollectionItems.length) return;
				const newIndex = allCollectionItems.indexOf(node) + add;
				if (newIndex >= 0 && newIndex < allCollectionItems.length) {
					if (allCollectionItems[newIndex].hasAttribute("data-disabled")) shiftFocus(allCollectionItems[newIndex], add);
					allCollectionItems[newIndex].focus();
					return;
				}
				if (newIndex < 0) {
					if (rootContext.isPrevButtonDisabled()) return;
					rootContext.prevPage();
					nextTick(() => {
						const newCollectionItems = getSelectableCells(parentElement);
						if (!newCollectionItems.length) return;
						if (!rootContext.pagedNavigation.value && rootContext.numberOfMonths.value > 1) {
							const computedIndex$1 = getDaysInMonth(rootContext.placeholder.value) - Math.abs(newIndex);
							if (newCollectionItems[computedIndex$1].hasAttribute("data-disabled")) shiftFocus(newCollectionItems[computedIndex$1], add);
							newCollectionItems[computedIndex$1].focus();
							return;
						}
						const computedIndex = newCollectionItems.length - Math.abs(newIndex);
						if (newCollectionItems[computedIndex].hasAttribute("data-disabled")) shiftFocus(newCollectionItems[computedIndex], add);
						newCollectionItems[computedIndex].focus();
					});
					return;
				}
				if (newIndex >= allCollectionItems.length) {
					if (rootContext.isNextButtonDisabled()) return;
					rootContext.nextPage();
					nextTick(() => {
						const newCollectionItems = getSelectableCells(parentElement);
						if (!newCollectionItems.length) return;
						if (!rootContext.pagedNavigation.value && rootContext.numberOfMonths.value > 1) {
							const numberOfDays = getDaysInMonth(rootContext.placeholder.value.add({ months: rootContext.numberOfMonths.value - 1 }));
							const computedIndex$1 = newIndex - allCollectionItems.length + (newCollectionItems.length - numberOfDays);
							if (newCollectionItems[computedIndex$1].hasAttribute("data-disabled")) shiftFocus(newCollectionItems[computedIndex$1], add);
							newCollectionItems[computedIndex$1].focus();
							return;
						}
						const computedIndex = newIndex - allCollectionItems.length;
						if (newCollectionItems[computedIndex].hasAttribute("data-disabled")) shiftFocus(newCollectionItems[computedIndex], add);
						newCollectionItems[computedIndex].focus();
					});
				}
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({
				ref_key: "primitiveElement",
				ref: primitiveElement
			}, props, {
				role: "button",
				"aria-label": labelText.value,
				"data-reka-calendar-cell-trigger": "",
				"aria-selected": isSelectedDate.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? true : void 0,
				"aria-disabled": isDisabled.value || isUnavailable.value ? true : void 0,
				"data-highlighted": isHighlighted.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? "" : void 0,
				"data-selection-start": isSelectionStart.value ? true : void 0,
				"data-selection-end": isSelectionEnd.value ? true : void 0,
				"data-highlighted-start": isHighlightStart.value ? true : void 0,
				"data-highlighted-end": isHighlightEnd.value ? true : void 0,
				"data-selected": isSelectedDate.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? true : void 0,
				"data-outside-visible-view": isOutsideVisibleView.value ? "" : void 0,
				"data-value": _ctx.day.toString(),
				"data-disabled": isDisabled.value ? "" : void 0,
				"data-unavailable": isUnavailable.value ? "" : void 0,
				"data-today": isDateToday.value ? "" : void 0,
				"data-outside-view": isOutsideView.value ? "" : void 0,
				"data-focused": isFocusedDate.value ? "" : void 0,
				tabindex: isFocusedDate.value ? 0 : isOutsideView.value || isDisabled.value ? void 0 : -1,
				onClick: handleClick,
				onFocusin: handleFocus,
				onMouseenter: handleFocus,
				onKeydown: withKeys(handleArrowKey, [
					"up",
					"down",
					"left",
					"right",
					"enter",
					"space"
				])
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					dayValue: dayValue.value,
					disabled: isDisabled.value,
					today: isDateToday.value,
					selected: isSelectedDate.value,
					outsideView: isOutsideView.value,
					outsideVisibleView: isOutsideVisibleView.value,
					unavailable: isUnavailable.value,
					highlighted: isHighlighted.value && (allowNonContiguousRanges.value || !isUnavailable.value),
					highlightedStart: isHighlightStart.value,
					highlightedEnd: isHighlightEnd.value,
					selectionStart: isSelectionStart.value,
					selectionEnd: isSelectionEnd.value
				}, () => [createTextVNode(toDisplayString(dayValue.value), 1)])]),
				_: 3
			}, 16, [
				"aria-label",
				"aria-selected",
				"aria-disabled",
				"data-highlighted",
				"data-selection-start",
				"data-selection-end",
				"data-highlighted-start",
				"data-highlighted-end",
				"data-selected",
				"data-outside-visible-view",
				"data-value",
				"data-disabled",
				"data-unavailable",
				"data-today",
				"data-outside-view",
				"data-focused",
				"tabindex"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerCellTrigger.js
var DateRangePickerCellTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerCellTrigger",
	props: {
		day: {
			type: null,
			required: true
		},
		month: {
			type: null,
			required: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarCellTrigger_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerContent.js
var DateRangePickerContent_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerContent",
	props: {
		portal: {
			type: Object,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(computed(() => ({
			...props,
			portal: void 0
		})), emits);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopoverPortal_default), normalizeProps(guardReactiveProps(_ctx.portal)), {
				default: withCtx(() => [createVNode(unref(PopoverContent_default), mergeProps({
					...unref(forwarded),
					..._ctx.$attrs
				}, { onOpenAutoFocus: _cache[0] || (_cache[0] = (event) => {
					emits("openAutoFocus", event);
					if (!event.defaultPrevented && event.target) {
						unref(handleCalendarInitialFocus)(event.target);
						event.preventDefault();
					}
				}) }), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerField.js
var DateRangePickerField_default$1 = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerField",
	setup(__props) {
		const rootContext = injectDateRangePickerRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DateRangeFieldRoot_default), mergeProps({
				ref: unref(rootContext).dateFieldRef,
				"model-value": unref(rootContext).modelValue.value,
				placeholder: unref(rootContext).placeholder.value
			}, {
				id: unref(rootContext).id.value,
				name: unref(rootContext).name.value,
				disabled: unref(rootContext).disabled.value,
				minValue: unref(rootContext).minValue.value,
				maxValue: unref(rootContext).maxValue.value,
				readonly: unref(rootContext).readonly.value,
				hourCycle: unref(rootContext).hourCycle.value,
				granularity: unref(rootContext).granularity.value,
				hideTimeZone: unref(rootContext).hideTimeZone.value,
				locale: unref(rootContext).locale.value,
				isDateUnavailable: unref(rootContext).isDateUnavailable,
				required: unref(rootContext).required.value,
				dir: unref(rootContext).dir.value,
				step: unref(rootContext).step.value
			}, {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = (date) => {
					if (date.start && unref(rootContext).modelValue.value.start && date.end && unref(rootContext).modelValue.value.end && date.start.compare(unref(rootContext).modelValue.value.start) === 0 && date.end.compare(unref(rootContext).modelValue.value.end) === 0) return;
					unref(rootContext).onDateChange(date);
				}),
				"onUpdate:placeholder": _cache[1] || (_cache[1] = (date) => {
					if (unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(date, unref(rootContext).placeholder.value) && date.compare(unref(rootContext).placeholder.value) === 0) return;
					unref(rootContext).onPlaceholderChange(date);
				})
			}), {
				default: withCtx(({ segments, modelValue }) => [renderSlot(_ctx.$slots, "default", {
					segments,
					modelValue
				})]),
				_: 3
			}, 16, ["model-value", "placeholder"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarGrid.js
var RangeCalendarGrid_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarGrid",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "table"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectRangeCalendarRootContext();
		const disabled = computed(() => rootContext.disabled.value ? true : void 0);
		const readonly = computed(() => rootContext.readonly.value ? true : void 0);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				tabindex: "-1",
				role: "grid",
				"aria-readonly": readonly.value,
				"aria-disabled": disabled.value,
				"data-readonly": readonly.value && "",
				"data-disabled": disabled.value && ""
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"aria-readonly",
				"aria-disabled",
				"data-readonly",
				"data-disabled"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerGrid.js
var DateRangePickerGrid_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerGrid",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarGrid_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarGridBody.js
var RangeCalendarGridBody_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarGridBody",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "tbody"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerGridBody.js
var DateRangePickerGridBody_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerGridBody",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarGridBody_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarGridHead.js
var RangeCalendarGridHead_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarGridHead",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "thead"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "aria-hidden": "true" }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerGridHead.js
var DateRangePickerGridHead_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerGridHead",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarGridHead_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarGridRow.js
var RangeCalendarGridRow_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarGridRow",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "tr"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerGridRow.js
var DateRangePickerGridRow_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerGridRow",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarGridRow_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarHeadCell.js
var RangeCalendarHeadCell_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarHeadCell",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "th"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerHeadCell.js
var DateRangePickerHeadCell_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerHeadCell",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarHeadCell_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarHeader.js
var RangeCalendarHeader_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarHeader",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerHeader.js
var DateRangePickerHeader_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerHeader",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarHeader_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarHeading.js
var RangeCalendarHeading_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarHeading",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectRangeCalendarRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "data-disabled": unref(rootContext).disabled.value ? "" : void 0 }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { headingValue: unref(rootContext).headingValue.value }, () => [createTextVNode(toDisplayString(unref(rootContext).headingValue.value), 1)])]),
				_: 3
			}, 16, ["data-disabled"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerHeading.js
var DateRangePickerHeading_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerHeading",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarHeading_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(({ headingValue }) => [renderSlot(_ctx.$slots, "default", { headingValue }, () => [createTextVNode(toDisplayString(headingValue), 1)])]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerInput.js
var DateRangePickerInput_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerInput",
	props: {
		part: {
			type: null,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DateRangeFieldInput_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarNext.js
var RangeCalendarNext_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarNext",
	props: {
		nextPage: {
			type: Function,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const disabled = computed(() => rootContext.disabled.value || rootContext.isNextButtonDisabled(props.nextPage));
		const rootContext = injectRangeCalendarRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"aria-label": "Next page",
				type: _ctx.as === "button" ? "button" : void 0,
				"aria-disabled": disabled.value || void 0,
				"data-disabled": disabled.value || void 0,
				disabled: disabled.value,
				onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).nextPage(props.nextPage))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[1] || (_cache[1] = createTextVNode(" Next page "))])]),
				_: 3
			}, 16, [
				"type",
				"aria-disabled",
				"data-disabled",
				"disabled"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerNext.js
var DateRangePickerNext_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerNext",
	props: {
		nextPage: {
			type: Function,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarNext_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/RangeCalendar/RangeCalendarPrev.js
var RangeCalendarPrev_default = /* @__PURE__ */ defineComponent({
	__name: "RangeCalendarPrev",
	props: {
		prevPage: {
			type: Function,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const disabled = computed(() => rootContext.disabled.value || rootContext.isPrevButtonDisabled(props.prevPage));
		const rootContext = injectRangeCalendarRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"aria-label": "Previous page",
				type: _ctx.as === "button" ? "button" : void 0,
				"aria-disabled": disabled.value || void 0,
				"data-disabled": disabled.value || void 0,
				disabled: disabled.value,
				onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).prevPage(props.prevPage))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[1] || (_cache[1] = createTextVNode(" Prev page "))])]),
				_: 3
			}, 16, [
				"type",
				"aria-disabled",
				"data-disabled",
				"disabled"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerPrev.js
var DateRangePickerPrev_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerPrev",
	props: {
		prevPage: {
			type: Function,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RangeCalendarPrev_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/DateRangePicker/DateRangePickerTrigger.js
var DateRangePickerTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDateRangePickerRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopoverTrigger_default), mergeProps({ "data-reka-date-field-segment": "trigger" }, props, {
				disabled: unref(rootContext).disabled.value,
				onFocusin: _cache[0] || (_cache[0] = (e) => {
					unref(rootContext).dateFieldRef.value?.setFocusedElement(e.target);
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["disabled"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/DateRangePicker/DateRangePicker.constants.ts
/**
* The picker's `weekdayFormat` default, typed rather than passed as a bare
* literal. `withDefaults` makes the defaulted props required, so the compiler
* writes their types out structurally instead of referencing
* `DateRangePickerRootProps` by name — and `WeekDayFormat` only reaches this
* package through reka-ui's `./date` entry, not its root. Without this named
* reference it is unnameable and the picker's declaration is silently skipped
* (TS2883).
*
* Kept out of `index.ts` so it stays off the package's public barrel.
*/
var DEFAULT_WEEKDAY_FORMAT = "short";
//#endregion
//#region ../@n8n/design-system/src/components/DateRangePicker/DateRangePickerField.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var DateRangePickerField_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePickerField",
	setup(__props) {
		function hasTime(segments) {
			return [...segments.start, ...segments.end].some((segment) => [
				"hour",
				"minute",
				"second",
				"dayPeriod"
			].includes(segment.part));
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DateRangePickerField_default$1), { "as-child": "" }, {
				default: withCtx(({ segments }) => [hasTime(segments) ? (openBlock(), createElementBlock("div", _hoisted_1, [
					createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						tag: "div",
						class: "mb-3xs"
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Start", -1)])]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.Inline, "mb-xs"]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(segments.start, (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.part }, [item.part === "literal" ? (openBlock(), createBlock(unref(DateRangePickerInput_default), {
							key: 0,
							part: item.part,
							class: "DateFieldLiteral",
							type: "start"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
							_: 2
						}, 1032, ["part"])) : (openBlock(), createBlock(unref(DateRangePickerInput_default), {
							key: 1,
							part: item.part,
							class: normalizeClass(_ctx.$style.DateFieldSegment),
							type: "start"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
							_: 2
						}, 1032, ["part", "class"]))], 64);
					}), 128))], 2),
					createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						tag: "div",
						class: "mb-3xs"
					}, {
						default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("End", -1)])]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.Inline) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(segments.end, (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.part }, [item.part === "literal" ? (openBlock(), createBlock(unref(DateRangePickerInput_default), {
							key: 0,
							part: item.part,
							class: normalizeClass(_ctx.$style.DateFieldLiteral),
							type: "end"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
							_: 2
						}, 1032, ["part", "class"])) : (openBlock(), createBlock(unref(DateRangePickerInput_default), {
							key: 1,
							part: item.part,
							class: normalizeClass(_ctx.$style.DateFieldSegment),
							type: "end"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
							_: 2
						}, 1032, ["part", "class"]))], 64);
					}), 128))], 2)
				])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.Inline)
				}, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(segments.start, (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.part }, [item.part === "literal" ? (openBlock(), createBlock(unref(DateRangePickerInput_default), {
							key: 0,
							part: item.part,
							class: "DateFieldLiteral",
							type: "start"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
							_: 2
						}, 1032, ["part"])) : (openBlock(), createBlock(unref(DateRangePickerInput_default), {
							key: 1,
							part: item.part,
							class: normalizeClass(_ctx.$style.DateFieldSegment),
							type: "start"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
							_: 2
						}, 1032, ["part", "class"]))], 64);
					}), 128)),
					_cache[2] || (_cache[2] = createTextVNode(" - ", -1)),
					(openBlock(true), createElementBlock(Fragment, null, renderList(segments.end, (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.part }, [item.part === "literal" ? (openBlock(), createBlock(unref(DateRangePickerInput_default), {
							key: 0,
							part: item.part,
							class: normalizeClass(_ctx.$style.DateFieldLiteral),
							type: "end"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
							_: 2
						}, 1032, ["part", "class"])) : (openBlock(), createBlock(unref(DateRangePickerInput_default), {
							key: 1,
							part: item.part,
							class: normalizeClass(_ctx.$style.DateFieldSegment),
							type: "end"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
							_: 2
						}, 1032, ["part", "class"]))], 64);
					}), 128))
				], 2))]),
				_: 1
			});
		};
	}
});
var DateRangePickerField_vue_vue_type_style_index_0_lang_module_default = {
	DateFieldSegment: "_DateFieldSegment_1xoaw_2",
	Inline: "_Inline_1xoaw_7"
};
var DateRangePickerField_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DateRangePickerField_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DateRangePickerField_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/DateRangePicker/DateRangePicker.vue?vue&type=script&setup=true&lang.ts
var DateRangePicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DateRangePicker",
	props: {
		defaultValue: {},
		defaultPlaceholder: {},
		placeholder: {},
		modelValue: {},
		hourCycle: { default: 24 },
		step: {},
		granularity: {},
		hideTimeZone: { type: Boolean },
		maxValue: {},
		minValue: {},
		locale: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		isDateUnavailable: {},
		id: {},
		dir: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		modal: { type: Boolean },
		isDateDisabled: {},
		pagedNavigation: { type: Boolean },
		weekStartsOn: { default: 1 },
		weekdayFormat: { default: DEFAULT_WEEKDAY_FORMAT },
		fixedWeeks: {
			type: Boolean,
			default: true
		},
		numberOfMonths: {},
		preventDeselect: { type: Boolean },
		isDateHighlightable: {},
		allowNonContiguousRanges: { type: Boolean },
		fixedDate: {},
		maximumDays: {},
		closeOnSelect: { type: Boolean },
		hideInputs: { type: Boolean }
	},
	emits: [
		"update:modelValue",
		"update:placeholder",
		"update:startValue",
		"update:open"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const closePopover = () => emit("update:open", false);
		const forwarded = useForwardPropsEmits(props, emit);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DateRangePickerRoot_default), normalizeProps(guardReactiveProps(unref(forwarded))), {
				default: withCtx(() => [createVNode(unref(DateRangePickerTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "trigger", {}, () => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						icon: "calendar",
						"aria-label": "Open calendar"
					})])]),
					_: 3
				}), createVNode(unref(DateRangePickerContent_default), {
					align: "start",
					"side-offset": 5,
					class: normalizeClass(_ctx.$style.PopoverContent)
				}, {
					default: withCtx(() => [createVNode(unref(DateRangePickerCalendar_default), { class: normalizeClass(_ctx.$style.Calendar) }, {
						default: withCtx(({ weekDays, grid }) => [!!_ctx.$slots.presets ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.Presets)
						}, [renderSlot(_ctx.$slots, "presets")], 2)) : createCommentVNode("", true), createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.CalendarWrapper) }, [createVNode(unref(DateRangePickerHeader_default), { class: normalizeClass(_ctx.$style.CalendarHeader) }, {
							default: withCtx(() => [
								createVNode(unref(DateRangePickerPrev_default), { "as-child": "" }, {
									default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
										icon: "chevron-left",
										variant: "subtle"
									})]),
									_: 1
								}),
								createVNode(unref(DateRangePickerHeading_default), { class: normalizeClass(_ctx.$style.CalendarHeading) }, null, 8, ["class"]),
								createVNode(unref(DateRangePickerNext_default), { "as-child": "" }, {
									default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
										icon: "chevron-right",
										variant: "subtle"
									})]),
									_: 1
								})
							]),
							_: 1
						}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(grid, (month) => {
							return openBlock(), createBlock(unref(DateRangePickerGrid_default), {
								key: month.value.toString(),
								class: normalizeClass(_ctx.$style.CalendarGrid)
							}, {
								default: withCtx(() => [createVNode(unref(DateRangePickerGridHead_default), null, {
									default: withCtx(() => [createVNode(unref(DateRangePickerGridRow_default), { class: normalizeClass(_ctx.$style.CalendarGridRow) }, {
										default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(weekDays, (day) => {
											return openBlock(), createBlock(unref(DateRangePickerHeadCell_default), {
												key: day,
												class: normalizeClass(_ctx.$style.CalendarHeadCell)
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(day), 1)]),
												_: 2
											}, 1032, ["class"]);
										}), 128))]),
										_: 2
									}, 1032, ["class"])]),
									_: 2
								}, 1024), createVNode(unref(DateRangePickerGridBody_default), null, {
									default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
										return openBlock(), createBlock(unref(DateRangePickerGridRow_default), {
											key: `weekDate-${index}`,
											class: normalizeClass(_ctx.$style.CalendarGridRow)
										}, {
											default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(weekDates, (weekDate) => {
												return openBlock(), createBlock(unref(DateRangePickerCell_default), {
													key: weekDate.toString(),
													date: weekDate,
													class: normalizeClass(_ctx.$style.CalendarCell)
												}, {
													default: withCtx(() => [createVNode(unref(DateRangePickerCellTrigger_default), {
														day: weekDate,
														month: month.value,
														class: normalizeClass(_ctx.$style.CalendarCellTrigger)
													}, null, 8, [
														"day",
														"month",
														"class"
													])]),
													_: 2
												}, 1032, ["date", "class"]);
											}), 128))]),
											_: 2
										}, 1032, ["class"]);
									}), 128))]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["class"]);
						}), 128))], 2), !__props.hideInputs ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.DateFieldWrapper)
						}, [
							createVNode(DateRangePickerField_default, { class: normalizeClass(_ctx.$style.DateField) }, null, 8, ["class"]),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.DateFieldError) }, "Outside of allowed range", 2),
							renderSlot(_ctx.$slots, "footer", { close: closePopover }, () => [createVNode(unref(N8nButton_default), {
								variant: "subtle",
								label: "Apply",
								class: normalizeClass(["mt-2xs", _ctx.$style.ApplyButton]),
								onClick: closePopover
							}, null, 8, ["class"])])
						], 2)) : createCommentVNode("", true)])]),
						_: 3
					}, 8, ["class"])]),
					_: 3
				}, 8, ["class"])]),
				_: 3
			}, 16);
		};
	}
});
var DateRangePicker_vue_vue_type_style_index_0_lang_module_default = {
	DateFieldWrapper: "_DateFieldWrapper_1je9t_2",
	DateField: "_DateField_1je9t_2",
	DateFieldError: "_DateFieldError_1je9t_7",
	ApplyButton: "_ApplyButton_1je9t_19",
	DateFieldSegment: "_DateFieldSegment_1je9t_23",
	Calendar: "_Calendar_1je9t_28",
	CalendarHeader: "_CalendarHeader_1je9t_32",
	CalendarWrapper: "_CalendarWrapper_1je9t_38",
	CalendarGrid: "_CalendarGrid_1je9t_42",
	CalendarGridRow: "_CalendarGridRow_1je9t_49",
	CalendarHeadCell: "_CalendarHeadCell_1je9t_56",
	CalendarCell: "_CalendarCell_1je9t_63",
	CalendarCellTrigger: "_CalendarCellTrigger_1je9t_70",
	PopoverContent: "_PopoverContent_1je9t_153",
	slideDownAndFade: "_slideDownAndFade_1je9t_1",
	slideLeftAndFade: "_slideLeftAndFade_1je9t_1",
	slideUpAndFade: "_slideUpAndFade_1je9t_1",
	slideRightAndFade: "_slideRightAndFade_1je9t_1",
	Presets: "_Presets_1je9t_179"
};
var DateRangePicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DateRangePicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DateRangePicker_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DateRangePicker_default as t };
