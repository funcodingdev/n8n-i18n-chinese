//#region ../../../node_modules/.pnpm/highlight.js@11.8.0/node_modules/highlight.js/es/languages/json.js
function json(hljs) {
	const ATTRIBUTE = {
		className: "attr",
		begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
		relevance: 1.01
	};
	const PUNCTUATION = {
		match: /[{}[\],:]/,
		className: "punctuation",
		relevance: 0
	};
	const LITERALS = [
		"true",
		"false",
		"null"
	];
	const LITERALS_MODE = {
		scope: "literal",
		beginKeywords: LITERALS.join(" ")
	};
	return {
		name: "JSON",
		keywords: { literal: LITERALS },
		contains: [
			ATTRIBUTE,
			PUNCTUATION,
			hljs.QUOTE_STRING_MODE,
			LITERALS_MODE,
			hljs.C_NUMBER_MODE,
			hljs.C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE
		],
		illegal: "\\S"
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/highlight.js@11.8.0/node_modules/highlight.js/es/languages/python.js
function python(hljs) {
	const regex = hljs.regex;
	const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
	const RESERVED_WORDS = [
		"and",
		"as",
		"assert",
		"async",
		"await",
		"break",
		"case",
		"class",
		"continue",
		"def",
		"del",
		"elif",
		"else",
		"except",
		"finally",
		"for",
		"from",
		"global",
		"if",
		"import",
		"in",
		"is",
		"lambda",
		"match",
		"nonlocal|10",
		"not",
		"or",
		"pass",
		"raise",
		"return",
		"try",
		"while",
		"with",
		"yield"
	];
	const KEYWORDS = {
		$pattern: /[A-Za-z]\w+|__\w+__/,
		keyword: RESERVED_WORDS,
		built_in: [
			"__import__",
			"abs",
			"all",
			"any",
			"ascii",
			"bin",
			"bool",
			"breakpoint",
			"bytearray",
			"bytes",
			"callable",
			"chr",
			"classmethod",
			"compile",
			"complex",
			"delattr",
			"dict",
			"dir",
			"divmod",
			"enumerate",
			"eval",
			"exec",
			"filter",
			"float",
			"format",
			"frozenset",
			"getattr",
			"globals",
			"hasattr",
			"hash",
			"help",
			"hex",
			"id",
			"input",
			"int",
			"isinstance",
			"issubclass",
			"iter",
			"len",
			"list",
			"locals",
			"map",
			"max",
			"memoryview",
			"min",
			"next",
			"object",
			"oct",
			"open",
			"ord",
			"pow",
			"print",
			"property",
			"range",
			"repr",
			"reversed",
			"round",
			"set",
			"setattr",
			"slice",
			"sorted",
			"staticmethod",
			"str",
			"sum",
			"super",
			"tuple",
			"type",
			"vars",
			"zip"
		],
		literal: [
			"__debug__",
			"Ellipsis",
			"False",
			"None",
			"NotImplemented",
			"True"
		],
		type: [
			"Any",
			"Callable",
			"Coroutine",
			"Dict",
			"List",
			"Literal",
			"Generic",
			"Optional",
			"Sequence",
			"Set",
			"Tuple",
			"Type",
			"Union"
		]
	};
	const PROMPT = {
		className: "meta",
		begin: /^(>>>|\.\.\.) /
	};
	const SUBST = {
		className: "subst",
		begin: /\{/,
		end: /\}/,
		keywords: KEYWORDS,
		illegal: /#/
	};
	const LITERAL_BRACKET = {
		begin: /\{\{/,
		relevance: 0
	};
	const STRING = {
		className: "string",
		contains: [hljs.BACKSLASH_ESCAPE],
		variants: [
			{
				begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
				end: /'''/,
				contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
				relevance: 10
			},
			{
				begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
				end: /"""/,
				contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
				relevance: 10
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])'''/,
				end: /'''/,
				contains: [
					hljs.BACKSLASH_ESCAPE,
					PROMPT,
					LITERAL_BRACKET,
					SUBST
				]
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])"""/,
				end: /"""/,
				contains: [
					hljs.BACKSLASH_ESCAPE,
					PROMPT,
					LITERAL_BRACKET,
					SUBST
				]
			},
			{
				begin: /([uU]|[rR])'/,
				end: /'/,
				relevance: 10
			},
			{
				begin: /([uU]|[rR])"/,
				end: /"/,
				relevance: 10
			},
			{
				begin: /([bB]|[bB][rR]|[rR][bB])'/,
				end: /'/
			},
			{
				begin: /([bB]|[bB][rR]|[rR][bB])"/,
				end: /"/
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])'/,
				end: /'/,
				contains: [
					hljs.BACKSLASH_ESCAPE,
					LITERAL_BRACKET,
					SUBST
				]
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])"/,
				end: /"/,
				contains: [
					hljs.BACKSLASH_ESCAPE,
					LITERAL_BRACKET,
					SUBST
				]
			},
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE
		]
	};
	const digitpart = "[0-9](_?[0-9])*";
	const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
	const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
	const NUMBER = {
		className: "number",
		relevance: 0,
		variants: [
			{ begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})` },
			{ begin: `(${pointfloat})[jJ]?` },
			{ begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})` },
			{ begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})` },
			{ begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})` },
			{ begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})` },
			{ begin: `\\b(${digitpart})[jJ](?=${lookahead})` }
		]
	};
	const COMMENT_TYPE = {
		className: "comment",
		begin: regex.lookahead(/# type:/),
		end: /$/,
		keywords: KEYWORDS,
		contains: [{ begin: /# type:/ }, {
			begin: /#/,
			end: /\b\B/,
			endsWithParent: true
		}]
	};
	const PARAMS = {
		className: "params",
		variants: [{
			className: "",
			begin: /\(\s*\)/,
			skip: true
		}, {
			begin: /\(/,
			end: /\)/,
			excludeBegin: true,
			excludeEnd: true,
			keywords: KEYWORDS,
			contains: [
				"self",
				PROMPT,
				NUMBER,
				STRING,
				hljs.HASH_COMMENT_MODE
			]
		}]
	};
	SUBST.contains = [
		STRING,
		NUMBER,
		PROMPT
	];
	return {
		name: "Python",
		aliases: [
			"py",
			"gyp",
			"ipython"
		],
		unicodeRegex: true,
		keywords: KEYWORDS,
		illegal: /(<\/|\?)|=>/,
		contains: [
			PROMPT,
			NUMBER,
			{ begin: /\bself\b/ },
			{
				beginKeywords: "if",
				relevance: 0
			},
			STRING,
			COMMENT_TYPE,
			hljs.HASH_COMMENT_MODE,
			{
				match: [
					/\bdef/,
					/\s+/,
					IDENT_RE
				],
				scope: {
					1: "keyword",
					3: "title.function"
				},
				contains: [PARAMS]
			},
			{
				variants: [{ match: [
					/\bclass/,
					/\s+/,
					IDENT_RE,
					/\s*/,
					/\(\s*/,
					IDENT_RE,
					/\s*\)/
				] }, { match: [
					/\bclass/,
					/\s+/,
					IDENT_RE
				] }],
				scope: {
					1: "keyword",
					3: "title.class",
					6: "title.class.inherited"
				}
			},
			{
				className: "meta",
				begin: /^[\t ]*@/,
				end: /(?=#)|$/,
				contains: [
					NUMBER,
					PARAMS,
					STRING
				]
			}
		]
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/highlight.js@11.8.0/node_modules/highlight.js/es/languages/typescript.js
var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
var KEYWORDS = [
	"as",
	"in",
	"of",
	"if",
	"for",
	"while",
	"finally",
	"var",
	"new",
	"function",
	"do",
	"return",
	"void",
	"else",
	"break",
	"catch",
	"instanceof",
	"with",
	"throw",
	"case",
	"default",
	"try",
	"switch",
	"continue",
	"typeof",
	"delete",
	"let",
	"yield",
	"const",
	"class",
	"debugger",
	"async",
	"await",
	"static",
	"import",
	"from",
	"export",
	"extends"
];
var LITERALS = [
	"true",
	"false",
	"null",
	"undefined",
	"NaN",
	"Infinity"
];
var TYPES = [
	"Object",
	"Function",
	"Boolean",
	"Symbol",
	"Math",
	"Date",
	"Number",
	"BigInt",
	"String",
	"RegExp",
	"Array",
	"Float32Array",
	"Float64Array",
	"Int8Array",
	"Uint8Array",
	"Uint8ClampedArray",
	"Int16Array",
	"Int32Array",
	"Uint16Array",
	"Uint32Array",
	"BigInt64Array",
	"BigUint64Array",
	"Set",
	"Map",
	"WeakSet",
	"WeakMap",
	"ArrayBuffer",
	"SharedArrayBuffer",
	"Atomics",
	"DataView",
	"JSON",
	"Promise",
	"Generator",
	"GeneratorFunction",
	"AsyncFunction",
	"Reflect",
	"Proxy",
	"Intl",
	"WebAssembly"
];
var ERROR_TYPES = [
	"Error",
	"EvalError",
	"InternalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError"
];
var BUILT_IN_GLOBALS = [
	"setInterval",
	"setTimeout",
	"clearInterval",
	"clearTimeout",
	"require",
	"exports",
	"eval",
	"isFinite",
	"isNaN",
	"parseFloat",
	"parseInt",
	"decodeURI",
	"decodeURIComponent",
	"encodeURI",
	"encodeURIComponent",
	"escape",
	"unescape"
];
var BUILT_IN_VARIABLES = [
	"arguments",
	"this",
	"super",
	"console",
	"window",
	"document",
	"localStorage",
	"sessionStorage",
	"module",
	"global"
];
var BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
/** @type LanguageFn */
function javascript(hljs) {
	const regex = hljs.regex;
	/**
	* Takes a string like "<Booger" and checks to see
	* if we can find a matching "</Booger" later in the
	* content.
	* @param {RegExpMatchArray} match
	* @param {{after:number}} param1
	*/
	const hasClosingTag = (match, { after }) => {
		const tag = "</" + match[0].slice(1);
		return match.input.indexOf(tag, after) !== -1;
	};
	const IDENT_RE$1 = IDENT_RE;
	const FRAGMENT = {
		begin: "<>",
		end: "</>"
	};
	const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
	const XML_TAG = {
		begin: /<[A-Za-z0-9\\._:-]+/,
		end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
		isTrulyOpeningTag: (match, response) => {
			const afterMatchIndex = match[0].length + match.index;
			const nextChar = match.input[afterMatchIndex];
			if (nextChar === "<" || nextChar === ",") {
				response.ignoreMatch();
				return;
			}
			if (nextChar === ">") {
				if (!hasClosingTag(match, { after: afterMatchIndex })) response.ignoreMatch();
			}
			let m;
			const afterMatch = match.input.substring(afterMatchIndex);
			if (m = afterMatch.match(/^\s*=/)) {
				response.ignoreMatch();
				return;
			}
			if (m = afterMatch.match(/^\s+extends\s+/)) {
				if (m.index === 0) {
					response.ignoreMatch();
					return;
				}
			}
		}
	};
	const KEYWORDS$1 = {
		$pattern: IDENT_RE,
		keyword: KEYWORDS,
		literal: LITERALS,
		built_in: BUILT_INS,
		"variable.language": BUILT_IN_VARIABLES
	};
	const decimalDigits = "[0-9](_?[0-9])*";
	const frac = `\\.(${decimalDigits})`;
	const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
	const NUMBER = {
		className: "number",
		variants: [
			{ begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
			{ begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
			{ begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
			{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
			{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
			{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
			{ begin: "\\b0[0-7]+n?\\b" }
		],
		relevance: 0
	};
	const SUBST = {
		className: "subst",
		begin: "\\$\\{",
		end: "\\}",
		keywords: KEYWORDS$1,
		contains: []
	};
	const HTML_TEMPLATE = {
		begin: "html`",
		end: "",
		starts: {
			end: "`",
			returnEnd: false,
			contains: [hljs.BACKSLASH_ESCAPE, SUBST],
			subLanguage: "xml"
		}
	};
	const CSS_TEMPLATE = {
		begin: "css`",
		end: "",
		starts: {
			end: "`",
			returnEnd: false,
			contains: [hljs.BACKSLASH_ESCAPE, SUBST],
			subLanguage: "css"
		}
	};
	const GRAPHQL_TEMPLATE = {
		begin: "gql`",
		end: "",
		starts: {
			end: "`",
			returnEnd: false,
			contains: [hljs.BACKSLASH_ESCAPE, SUBST],
			subLanguage: "graphql"
		}
	};
	const TEMPLATE_STRING = {
		className: "string",
		begin: "`",
		end: "`",
		contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	};
	const COMMENT = {
		className: "comment",
		variants: [
			hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
				relevance: 0,
				contains: [{
					begin: "(?=@[A-Za-z]+)",
					relevance: 0,
					contains: [
						{
							className: "doctag",
							begin: "@[A-Za-z]+"
						},
						{
							className: "type",
							begin: "\\{",
							end: "\\}",
							excludeEnd: true,
							excludeBegin: true,
							relevance: 0
						},
						{
							className: "variable",
							begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
							endsParent: true,
							relevance: 0
						},
						{
							begin: /(?=[^\n])\s/,
							relevance: 0
						}
					]
				}]
			}),
			hljs.C_BLOCK_COMMENT_MODE,
			hljs.C_LINE_COMMENT_MODE
		]
	};
	const SUBST_INTERNALS = [
		hljs.APOS_STRING_MODE,
		hljs.QUOTE_STRING_MODE,
		HTML_TEMPLATE,
		CSS_TEMPLATE,
		GRAPHQL_TEMPLATE,
		TEMPLATE_STRING,
		{ match: /\$\d+/ },
		NUMBER
	];
	SUBST.contains = SUBST_INTERNALS.concat({
		begin: /\{/,
		end: /\}/,
		keywords: KEYWORDS$1,
		contains: ["self"].concat(SUBST_INTERNALS)
	});
	const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
	const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([{
		begin: /\(/,
		end: /\)/,
		keywords: KEYWORDS$1,
		contains: ["self"].concat(SUBST_AND_COMMENTS)
	}]);
	const PARAMS = {
		className: "params",
		begin: /\(/,
		end: /\)/,
		excludeBegin: true,
		excludeEnd: true,
		keywords: KEYWORDS$1,
		contains: PARAMS_CONTAINS
	};
	const CLASS_OR_EXTENDS = { variants: [{
		match: [
			/class/,
			/\s+/,
			IDENT_RE$1,
			/\s+/,
			/extends/,
			/\s+/,
			regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
		],
		scope: {
			1: "keyword",
			3: "title.class",
			5: "keyword",
			7: "title.class.inherited"
		}
	}, {
		match: [
			/class/,
			/\s+/,
			IDENT_RE$1
		],
		scope: {
			1: "keyword",
			3: "title.class"
		}
	}] };
	const CLASS_REFERENCE = {
		relevance: 0,
		match: regex.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
		className: "title.class",
		keywords: { _: [...TYPES, ...ERROR_TYPES] }
	};
	const USE_STRICT = {
		label: "use_strict",
		className: "meta",
		relevance: 10,
		begin: /^\s*['"]use (strict|asm)['"]/
	};
	const FUNCTION_DEFINITION = {
		variants: [{ match: [
			/function/,
			/\s+/,
			IDENT_RE$1,
			/(?=\s*\()/
		] }, { match: [/function/, /\s*(?=\()/] }],
		className: {
			1: "keyword",
			3: "title.function"
		},
		label: "func.def",
		contains: [PARAMS],
		illegal: /%/
	};
	const UPPER_CASE_CONSTANT = {
		relevance: 0,
		match: /\b[A-Z][A-Z_0-9]+\b/,
		className: "variable.constant"
	};
	function noneOf(list) {
		return regex.concat("(?!", list.join("|"), ")");
	}
	const FUNCTION_CALL = {
		match: regex.concat(/\b/, noneOf([
			...BUILT_IN_GLOBALS,
			"super",
			"import"
		]), IDENT_RE$1, regex.lookahead(/\(/)),
		className: "title.function",
		relevance: 0
	};
	const PROPERTY_ACCESS = {
		begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
		end: IDENT_RE$1,
		excludeBegin: true,
		keywords: "prototype",
		className: "property",
		relevance: 0
	};
	const GETTER_OR_SETTER = {
		match: [
			/get|set/,
			/\s+/,
			IDENT_RE$1,
			/(?=\()/
		],
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [{ begin: /\(\)/ }, PARAMS]
	};
	const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
	const FUNCTION_VARIABLE = {
		match: [
			/const|var|let/,
			/\s+/,
			IDENT_RE$1,
			/\s*/,
			/=\s*/,
			/(async\s*)?/,
			regex.lookahead(FUNC_LEAD_IN_RE)
		],
		keywords: "async",
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [PARAMS]
	};
	return {
		name: "JavaScript",
		aliases: [
			"js",
			"jsx",
			"mjs",
			"cjs"
		],
		keywords: KEYWORDS$1,
		exports: {
			PARAMS_CONTAINS,
			CLASS_REFERENCE
		},
		illegal: /#(?![$_A-z])/,
		contains: [
			hljs.SHEBANG({
				label: "shebang",
				binary: "node",
				relevance: 5
			}),
			USE_STRICT,
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE,
			HTML_TEMPLATE,
			CSS_TEMPLATE,
			GRAPHQL_TEMPLATE,
			TEMPLATE_STRING,
			COMMENT,
			{ match: /\$\d+/ },
			NUMBER,
			CLASS_REFERENCE,
			{
				className: "attr",
				begin: IDENT_RE$1 + regex.lookahead(":"),
				relevance: 0
			},
			FUNCTION_VARIABLE,
			{
				begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
				keywords: "return throw case",
				relevance: 0,
				contains: [
					COMMENT,
					hljs.REGEXP_MODE,
					{
						className: "function",
						begin: FUNC_LEAD_IN_RE,
						returnBegin: true,
						end: "\\s*=>",
						contains: [{
							className: "params",
							variants: [
								{
									begin: hljs.UNDERSCORE_IDENT_RE,
									relevance: 0
								},
								{
									className: null,
									begin: /\(\s*\)/,
									skip: true
								},
								{
									begin: /\(/,
									end: /\)/,
									excludeBegin: true,
									excludeEnd: true,
									keywords: KEYWORDS$1,
									contains: PARAMS_CONTAINS
								}
							]
						}]
					},
					{
						begin: /,/,
						relevance: 0
					},
					{
						match: /\s+/,
						relevance: 0
					},
					{
						variants: [
							{
								begin: FRAGMENT.begin,
								end: FRAGMENT.end
							},
							{ match: XML_SELF_CLOSING },
							{
								begin: XML_TAG.begin,
								"on:begin": XML_TAG.isTrulyOpeningTag,
								end: XML_TAG.end
							}
						],
						subLanguage: "xml",
						contains: [{
							begin: XML_TAG.begin,
							end: XML_TAG.end,
							skip: true,
							contains: ["self"]
						}]
					}
				]
			},
			FUNCTION_DEFINITION,
			{ beginKeywords: "while if switch catch for" },
			{
				begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
				returnBegin: true,
				label: "func.def",
				contains: [PARAMS, hljs.inherit(hljs.TITLE_MODE, {
					begin: IDENT_RE$1,
					className: "title.function"
				})]
			},
			{
				match: /\.\.\./,
				relevance: 0
			},
			PROPERTY_ACCESS,
			{
				match: "\\$" + IDENT_RE$1,
				relevance: 0
			},
			{
				match: [/\bconstructor(?=\s*\()/],
				className: { 1: "title.function" },
				contains: [PARAMS]
			},
			FUNCTION_CALL,
			UPPER_CASE_CONSTANT,
			CLASS_OR_EXTENDS,
			GETTER_OR_SETTER,
			{ match: /\$[(.]/ }
		]
	};
}
/** @type LanguageFn */
function typescript(hljs) {
	const tsLanguage = javascript(hljs);
	const IDENT_RE$1 = IDENT_RE;
	const TYPES = [
		"any",
		"void",
		"number",
		"boolean",
		"string",
		"object",
		"never",
		"symbol",
		"bigint",
		"unknown"
	];
	const NAMESPACE = {
		beginKeywords: "namespace",
		end: /\{/,
		excludeEnd: true,
		contains: [tsLanguage.exports.CLASS_REFERENCE]
	};
	const INTERFACE = {
		beginKeywords: "interface",
		end: /\{/,
		excludeEnd: true,
		keywords: {
			keyword: "interface extends",
			built_in: TYPES
		},
		contains: [tsLanguage.exports.CLASS_REFERENCE]
	};
	const USE_STRICT = {
		className: "meta",
		relevance: 10,
		begin: /^\s*['"]use strict['"]/
	};
	const KEYWORDS$1 = {
		$pattern: IDENT_RE,
		keyword: KEYWORDS.concat([
			"type",
			"namespace",
			"interface",
			"public",
			"private",
			"protected",
			"implements",
			"declare",
			"abstract",
			"readonly",
			"enum",
			"override"
		]),
		literal: LITERALS,
		built_in: BUILT_INS.concat(TYPES),
		"variable.language": BUILT_IN_VARIABLES
	};
	const DECORATOR = {
		className: "meta",
		begin: "@" + IDENT_RE$1
	};
	const swapMode = (mode, label, replacement) => {
		const indx = mode.contains.findIndex((m) => m.label === label);
		if (indx === -1) throw new Error("can not find mode to replace");
		mode.contains.splice(indx, 1, replacement);
	};
	Object.assign(tsLanguage.keywords, KEYWORDS$1);
	tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
	tsLanguage.contains = tsLanguage.contains.concat([
		DECORATOR,
		NAMESPACE,
		INTERFACE
	]);
	swapMode(tsLanguage, "shebang", hljs.SHEBANG());
	swapMode(tsLanguage, "use_strict", USE_STRICT);
	const functionDeclaration = tsLanguage.contains.find((m) => m.label === "func.def");
	functionDeclaration.relevance = 0;
	Object.assign(tsLanguage, {
		name: "TypeScript",
		aliases: [
			"ts",
			"tsx",
			"mts",
			"cts"
		]
	});
	return tsLanguage;
}
//#endregion
export { python as n, json as r, typescript as t };
