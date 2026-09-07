import "./vue.runtime.esm-bundler-DYHsQBZB.js";
//#region ../../../node_modules/.pnpm/vue-demi@0.14.10_vue@3.5.26_typescript@6.0.2_/node_modules/vue-demi/lib/index.mjs
function set(target, key, val) {
	if (Array.isArray(target)) {
		target.length = Math.max(target.length, key);
		target.splice(key, 1, val);
		return val;
	}
	target[key] = val;
	return val;
}
//#endregion
export { set as t };
