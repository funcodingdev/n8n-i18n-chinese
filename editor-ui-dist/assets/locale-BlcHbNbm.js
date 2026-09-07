const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/en-BL1_k0tU.js","assets/en-_6UGVoq3.js"])))=>i.map(i=>d[i]);
import { t as en_default } from "./en-_6UGVoq3.js";
import { t as __vitePreload } from "./preload-helper-CMc80dNB.js";
//#region \0rolldown_dynamic_import_helper.js
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
//#endregion
//#region ../@n8n/design-system/src/locale/format.ts
var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
*  String format template
*  - Inspired:
*    https://github.com/ElemeFE/element/blob/dev/src/locale/format.js
*    https://github.com/Matt-Esch/string-template/index.js
*/
function format_default() {
	const isReplacementGroup = (target, key) => key in target;
	function template(value, ...args) {
		if (typeof value === "function") return value(args);
		const str = value;
		let replacements = args;
		if (args.length === 1 && typeof args[0] === "object") replacements = args[0];
		if (!replacements?.hasOwnProperty) replacements = {};
		return str.replace(RE_NARGS, (match, _, group, index) => {
			let result;
			if (str[index - 1] === "{" && str[index + match.length] === "}") return `${group}`;
			else {
				result = isReplacementGroup(replacements, group) ? `${replacements[group]}` : null;
				if (result === null || result === void 0) return "";
				return result;
			}
		});
	}
	return template;
}
//#endregion
//#region ../@n8n/design-system/src/locale/index.ts
var format = format_default();
var lang = en_default;
var i18nHandler;
var t = function(path, options) {
	if (typeof i18nHandler === "function") {
		const value = i18nHandler(path, options);
		if (value !== null && value !== void 0 && value !== path) return String(value);
	}
	if (lang[path] !== void 0) return format(lang[path], ...options ? [options] : []);
	return "";
};
async function use(l) {
	try {
		lang = (await _rolldown_dynamic_import_helper_default(/* @__PURE__ */ Object.assign({ "./lang/en.ts": () => __vitePreload(() => import("./en-BL1_k0tU.js"), __vite__mapDeps([0,1])) }), `./lang/${l}.ts`, 3)).default;
	} catch (e) {}
}
//#endregion
export { use as n, t };
