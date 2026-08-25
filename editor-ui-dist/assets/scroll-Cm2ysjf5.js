import { y as isClient } from "./style-D4NTVD8o.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/dom/scroll.mjs
var scrollBarWidth;
var getScrollBarWidth = (namespace) => {
	var _a;
	if (!isClient) return 0;
	if (scrollBarWidth !== void 0) return scrollBarWidth;
	const outer = document.createElement("div");
	outer.className = `${namespace}-scrollbar__wrap`;
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.position = "absolute";
	outer.style.top = "-9999px";
	document.body.appendChild(outer);
	const widthNoScroll = outer.offsetWidth;
	outer.style.overflow = "scroll";
	const inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);
	const widthWithScroll = inner.offsetWidth;
	(_a = outer.parentNode) == null || _a.removeChild(outer);
	scrollBarWidth = widthNoScroll - widthWithScroll;
	return scrollBarWidth;
};
function scrollIntoView(container, selected) {
	if (!isClient) return;
	if (!selected) {
		container.scrollTop = 0;
		return;
	}
	const offsetParents = [];
	let pointer = selected.offsetParent;
	while (pointer !== null && container !== pointer && container.contains(pointer)) {
		offsetParents.push(pointer);
		pointer = pointer.offsetParent;
	}
	const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
	const bottom = top + selected.offsetHeight;
	const viewRectTop = container.scrollTop;
	const viewRectBottom = viewRectTop + container.clientHeight;
	if (top < viewRectTop) container.scrollTop = top;
	else if (bottom > viewRectBottom) container.scrollTop = bottom - container.clientHeight;
}
//#endregion
export { scrollIntoView as n, getScrollBarWidth as t };
