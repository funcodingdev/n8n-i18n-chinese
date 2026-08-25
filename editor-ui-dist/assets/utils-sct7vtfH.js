import { n as getActiveElement } from "./useDirection-C9_E-bw1.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Menu/utils.js
var ITEM_SELECT = "menu.itemSelect";
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = [
	"ArrowDown",
	"PageUp",
	"Home"
];
var LAST_KEYS = [
	"ArrowUp",
	"PageDown",
	"End"
];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
	ltr: [...SELECTION_KEYS, "ArrowRight"],
	rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
};
function getOpenState(open) {
	return open ? "open" : "closed";
}
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getCheckedState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
	const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus();
		if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
function isPointerInGraceArea(event, area) {
	if (!area) return false;
	return isPointInPolygon({
		x: event.clientX,
		y: event.clientY
	}, area);
}
function isMouseEvent(event) {
	return event.pointerType === "mouse";
}
//#endregion
export { SUB_CLOSE_KEYS as a, getCheckedState as c, isMouseEvent as d, isPointerInGraceArea as f, SELECTION_KEYS as i, getOpenState as l, ITEM_SELECT as n, SUB_OPEN_KEYS as o, LAST_KEYS as r, focusFirst as s, FIRST_LAST_KEYS as t, isIndeterminate as u };
