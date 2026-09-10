import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { Ut as toValue } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as require_lib } from "./lib-vJcwukKE.js";
//#region ../@n8n/frontend-utils/src/constants/sanitization.ts
var ALLOWED_HTML_ATTRIBUTES = [
	"href",
	"name",
	"target",
	"title",
	"class",
	"id",
	"style"
];
var ALLOWED_HTML_TAGS = [
	"p",
	"strong",
	"b",
	"code",
	"a",
	"br",
	"i",
	"ul",
	"li",
	"em",
	"small",
	"details",
	"summary",
	"mark"
];
//#endregion
//#region ../@n8n/frontend-utils/src/htmlUtils.ts
var import_lib = /* @__PURE__ */ __toESM(require_lib(), 1);
var { escapeAttrValue, escapeHtml } = import_lib.default;
function sanitizeHtml(dirtyHtml) {
	return (0, import_lib.default)(dirtyHtml, {
		onTagAttr: (tag, name, value) => {
			if (tag === "img" && name === "src") {
				const isStaticImageFile = value.split("#")[0].match(/\.(jpeg|jpg|gif|png|webp)$/) !== null && value.startsWith("/static/");
				if (!value.startsWith("https://") && !isStaticImageFile) return "";
			}
			if (ALLOWED_HTML_ATTRIBUTES.includes(name) || name.startsWith("data-")) {
				if (name === "href" && !value.match(/^https?:\/\//) && !value.startsWith("/")) return "";
				return `${name}="${escapeAttrValue(value)}"`;
			}
		},
		onTag: (tag) => {
			if (!ALLOWED_HTML_TAGS.includes(tag)) return "";
		}
	});
}
var SAFE_OPEN_PROTOCOLS = ["http:", "https:"];
/**
* Opens a URL in a new tab, but only when it resolves to an http(s) protocol.
* Persisted, untrusted values (e.g. resource locator URLs) can carry schemes
* like `javascript:` or `data:`, so anything else is dropped. Always opens with
* `noopener,noreferrer` so the new tab cannot reach back to the opener window.
*/
function openSafeUrl(url) {
	let protocol;
	try {
		protocol = new URL(url, window.location.origin).protocol;
	} catch {
		return;
	}
	if (SAFE_OPEN_PROTOCOLS.includes(protocol)) window.open(url, "_blank", "noopener,noreferrer");
}
/**
* Checks if the input is a string and sanitizes it by removing or escaping harmful characters,
* returning the original input if it's not a string.
*/
var sanitizeIfString = (message) => {
	if (typeof message === "string") return sanitizeHtml(message);
	return message;
};
var capitalizeFirstLetter = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};
var getBannerRowHeight = async () => {
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve(document.getElementById("banners")?.clientHeight ?? 0);
		}, 0);
	});
};
function isOutsideSelected(el) {
	const selection = document.getSelection();
	if (!selection?.anchorNode || !selection.focusNode || !el) return false;
	return !el.contains(selection.anchorNode) && !el.contains(selection.focusNode) && (selection.anchorNode !== selection.focusNode || selection.anchorOffset !== selection.focusOffset);
}
var scrollbarWidth;
function getScrollbarWidth() {
	if (scrollbarWidth !== void 0) return scrollbarWidth;
	const outer = document.createElement("div");
	const inner = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll";
	document.body.appendChild(outer);
	outer.appendChild(inner);
	scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
	outer.parentElement?.removeChild(outer);
	return scrollbarWidth;
}
function isEventTargetContainedBy(eventTarget, maybeContainer) {
	return !!(eventTarget instanceof Node && toValue(maybeContainer)?.contains(eventTarget));
}
//#endregion
export { isEventTargetContainedBy as a, sanitizeHtml as c, getScrollbarWidth as i, sanitizeIfString as l, escapeHtml as n, isOutsideSelected as o, getBannerRowHeight as r, openSafeUrl as s, capitalizeFirstLetter as t };
