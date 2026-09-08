//#region vite/expression-runtime-stub.ts
/**
* Browser stub for @n8n/expression-runtime.
* The real implementation uses isolated-vm (a Node.js-only native module).
* IS_FRONTEND guards in expression.ts prevent these from ever being instantiated.
*/
var ExpressionEvaluator = class {
	constructor(_config) {
		throw new Error("ExpressionEvaluator is not available in browser environments");
	}
};
var IsolatedVmBridge = class {
	constructor(_config) {
		throw new Error("IsolatedVmBridge is not available in browser environments");
	}
};
var ExpressionError = class extends Error {
	constructor(message, context = {}) {
		super(message);
		this.context = context;
	}
};
var MemoryLimitError = class extends Error {};
var TimeoutError = class extends Error {};
var SecurityViolationError = class extends Error {};
var RuntimeError = class extends Error {};
function extend() {}
function extendOptional() {}
var EXTENSION_OBJECTS = [];
var ExpressionExtensionError = class extends Error {};
var IsolateError = class extends Error {};
var DEFAULT_BRIDGE_CONFIG = {};
//#endregion
export { ExpressionExtensionError as a, MemoryLimitError as c, TimeoutError as d, extend as f, ExpressionEvaluator as i, RuntimeError as l, EXTENSION_OBJECTS as n, IsolateError as o, extendOptional as p, ExpressionError as r, IsolatedVmBridge as s, DEFAULT_BRIDGE_CONFIG as t, SecurityViolationError as u };
