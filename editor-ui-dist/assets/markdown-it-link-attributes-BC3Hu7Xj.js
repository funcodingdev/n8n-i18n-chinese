import { t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
//#region ../../../node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js
var require_markdown_it_link_attributes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function findFirstMatchingConfig(link, configs) {
		var i, config;
		var href = link.attrs[link.attrIndex("href")][1];
		for (i = 0; i < configs.length; ++i) {
			config = configs[i];
			if (typeof config.matcher === "function") if (config.matcher(href, config)) return config;
			else continue;
			return config;
		}
	}
	function applyAttributes(idx, tokens, attributes) {
		Object.keys(attributes).forEach(function(attr) {
			var attrIndex;
			var value = attributes[attr];
			if (attr === "className") attr = "class";
			attrIndex = tokens[idx].attrIndex(attr);
			if (attrIndex < 0) tokens[idx].attrPush([attr, value]);
			else tokens[idx].attrs[attrIndex][1] = value;
		});
	}
	function markdownitLinkAttributes(md, configs) {
		if (!configs) configs = [];
		else configs = Array.isArray(configs) ? configs : [configs];
		Object.freeze(configs);
		var defaultRender = md.renderer.rules.link_open || this.defaultRender;
		md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
			var config = findFirstMatchingConfig(tokens[idx], configs);
			var attributes = config && config.attrs;
			if (attributes) applyAttributes(idx, tokens, attributes);
			return defaultRender(tokens, idx, options, env, self);
		};
	}
	markdownitLinkAttributes.defaultRender = function(tokens, idx, options, env, self) {
		return self.renderToken(tokens, idx, options);
	};
	module.exports = markdownitLinkAttributes;
}));
//#endregion
export { require_markdown_it_link_attributes as t };
