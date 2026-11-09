import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Cf as watch, Ef as withDirectives, Gd as createVNode, Hd as createSlots, If as reactive, Iu as useDropZone, Kf as unref, Ld as computed, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, ep as init_shared_esm_bundler, ff as renderList, ja as require_isEqual, jd as vShow, os as useRouter, pf as renderSlot, pp as normalizeClass, qd as defineComponent, rf as nextTick, sf as onMounted, tf as mergeModels, uf as openBlock, vp as toDisplayString, wi as require_cloneDeep, xf as useTemplateRef, yf as useModel, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { $S as AGENT_SKILL_REFERENCE_CONTENT_MAX_LENGTH, Di as useAgentTelemetry, ED as N8nText_default, FD as N8nIcon_default, FE as N8nSelect_default, Hc as getHubSkill, Hy as useToast, IE as N8nOption_default, Jr as normalizeAgentSkillForSave, Kr as agentsLosingSkill, OC as isRecord, OD as N8nTooltip_default, PD as N8nButton_default, PE as N8nFormInput_default, RD as _plugin_vue_export_helper_default, RE as N8nInputLabel_default, UD as useI18n, Uy as VIEWS, Xy as useRootStore, ZS as AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH, aD as N8nCallout_default, ag as useUIStore, el as listAttachableSkills, iT as MarkdownEditor_default, qT as N8nSwitch_default, vx as skillNameKey, wE as N8nMarkdown_default } from "./app-DbOOaPK6.js";
import { t as ToolsConnectionModal_default } from "./ToolsConnectionModal-CUryTGZb.js";
import { t as parse } from "./browser-C1q7id8k.js";
import { t as AgentModalMultiStep_default } from "./AgentModalMultiStep-DiRrYot_.js";
//#region src/features/agents/components/AgentSkillFileNav.vue?vue&type=script&setup=true&lang.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_cloneDeep = /* @__PURE__ */ __toESM(require_cloneDeep(), 1);
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2$1 = ["aria-current"];
var _hoisted_3$1 = [
	"aria-current",
	"aria-label",
	"data-testid",
	"onClick"
];
var SKILL_FILE$2 = "SKILL.md";
var AgentSkillFileNav_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentSkillFileNav",
	props: {
		skill: {},
		selectedPath: {},
		addReferenceDisabled: {
			type: Boolean,
			default: false
		},
		readOnly: {
			type: Boolean,
			default: false
		},
		invalidPaths: { default: () => [] }
	},
	emits: [
		"select",
		"add-reference",
		"remove-reference"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const references = computed(() => props.skill.references ?? []);
		function isInvalid(path) {
			return props.invalidPaths.includes(path);
		}
		function isSelected(path) {
			return props.selectedPath === path;
		}
		function testIdForPath(path) {
			return `agent-skill-reference-nav-item-${path.replace(/[^A-Za-z0-9_-]+/g, "-")}`;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("nav", {
				class: normalizeClass(_ctx.$style.nav),
				"aria-label": unref(i18n).baseText("agents.builder.skills.filesNav.label"),
				"data-testid": "agent-skill-file-nav"
			}, [createBaseVNode("button", {
				type: "button",
				class: normalizeClass([_ctx.$style.item, isSelected(SKILL_FILE$2) && _ctx.$style.selected]),
				"aria-current": isSelected(SKILL_FILE$2) ? "page" : void 0,
				"data-testid": "agent-skill-file-nav-item",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("select", SKILL_FILE$2))
			}, [createVNode(unref(N8nIcon_default), {
				icon: "file-text",
				size: 16,
				class: normalizeClass(_ctx.$style.icon)
			}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
				size: "small",
				bold: true,
				class: normalizeClass(_ctx.$style.path)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(SKILL_FILE$2))]),
				_: 1
			}, 8, ["class"])], 10, _hoisted_2$1), createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nText_default), {
					size: "xsmall",
					color: "text-light",
					bold: true,
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.references.title")), 1)]),
					_: 1
				}, 8, ["class"]), !props.readOnly ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.addReference),
					variant: "ghost",
					size: "xsmall",
					"icon-only": "",
					icon: "plus",
					disabled: props.addReferenceDisabled,
					"aria-label": unref(i18n).baseText("agents.builder.skills.references.add"),
					"data-testid": "agent-skill-add-reference",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("add-reference"))
				}, null, 8, [
					"class",
					"disabled",
					"aria-label"
				])) : createCommentVNode("", true)], 2),
				references.value.length === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "text-light",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.references.empty")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(references.value, (reference) => {
					return openBlock(), createElementBlock("div", {
						key: reference.path,
						class: normalizeClass([_ctx.$style.referenceRow, isSelected(reference.path) && _ctx.$style.selected])
					}, [createBaseVNode("button", {
						type: "button",
						class: normalizeClass([_ctx.$style.item, _ctx.$style.reference]),
						"aria-current": isSelected(reference.path) ? "page" : void 0,
						"aria-label": isInvalid(reference.path) ? unref(i18n).baseText("agents.builder.skills.references.invalidLabel", { interpolate: { path: reference.path } }) : reference.path,
						"data-testid": testIdForPath(reference.path),
						onClick: ($event) => emit("select", reference.path)
					}, [createVNode(unref(N8nIcon_default), {
						icon: isInvalid(reference.path) ? "triangle-alert" : "file-text",
						size: 16,
						class: normalizeClass([_ctx.$style.icon, isInvalid(reference.path) && _ctx.$style.invalidIcon]),
						"data-testid": isInvalid(reference.path) ? `${testIdForPath(reference.path)}-invalid` : void 0
					}, null, 8, [
						"icon",
						"class",
						"data-testid"
					]), createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.path)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(reference.path), 1)]),
						_: 2
					}, 1032, ["class"])], 10, _hoisted_3$1), !props.readOnly ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.removeReference),
						variant: "ghost",
						size: "xsmall",
						"icon-only": "",
						icon: "trash-2",
						"aria-label": unref(i18n).baseText("agents.builder.skills.references.remove"),
						"data-testid": `${testIdForPath(reference.path)}-remove`,
						onClick: ($event) => emit("remove-reference", reference.path)
					}, null, 8, [
						"class",
						"aria-label",
						"data-testid",
						"onClick"
					])) : createCommentVNode("", true)], 2);
				}), 128))
			], 2)], 10, _hoisted_1$1);
		};
	}
}), [["__cssModules", { "$style": {
	nav: "_nav_1aunx_1",
	section: "_section_1aunx_13",
	sectionHeader: "_sectionHeader_1aunx_19",
	item: "_item_1aunx_26",
	icon: "_icon_1aunx_44",
	referenceRow: "_referenceRow_1aunx_48",
	removeReference: "_removeReference_1aunx_56",
	reference: "_reference_1aunx_48",
	sectionTitle: "_sectionTitle_1aunx_74",
	addReference: "_addReference_1aunx_78",
	invalidIcon: "_invalidIcon_1aunx_91",
	selected: "_selected_1aunx_95",
	path: "_path_1aunx_99"
} }]]);
//#endregion
//#region src/features/agents/composables/useAgentSkillImport.ts
var SKILL_FILE_NAME = "SKILL.md";
var FRONTMATTER_DELIMITER = "---";
/** Largest UTF-8 encoding of a reference at the character limit: 4 bytes per character. */
var MAX_REFERENCE_FILE_BYTES = AGENT_SKILL_REFERENCE_CONTENT_MAX_LENGTH * 4;
var AgentSkillImportError = class extends Error {
	i18nKey;
	constructor(i18nKey) {
		super(i18nKey);
		this.i18nKey = i18nKey;
	}
};
function useAgentSkillImport() {
	async function importSkillFiles(files) {
		return await importFiles(files.map((file) => ({
			file,
			path: normalizePath(file.webkitRelativePath || file.name)
		})));
	}
	async function importSkillEntries(entries) {
		return await importFiles((await Promise.all(entries.map(readEntry))).flat());
	}
	async function importFiles(fileEntries) {
		if (fileEntries.length === 0) throw new AgentSkillImportError("agents.builder.skills.import.noFiles");
		const skillFile = findSkillFile(fileEntries);
		if (!skillFile) throw new AgentSkillImportError("agents.builder.skills.import.missingSkillFile");
		const skillDir = skillFile.path.slice(0, -8).replace(/\/$/, "");
		const parsed = parseSkillMarkdown(await readFileText(skillFile.file));
		const references = [];
		const seenPaths = /* @__PURE__ */ new Set();
		let totalReferenceLength = 0;
		for (const entry of fileEntries) {
			if (entry === skillFile) continue;
			const relativePath = pathRelativeToSkillDir(entry.path, skillDir);
			if (!relativePath) continue;
			if (relativePath === SKILL_FILE_NAME) continue;
			if (relativePath.startsWith("scripts/")) throw new AgentSkillImportError("agents.builder.skills.import.scriptsUnsupported");
			if (!relativePath.startsWith("references/")) continue;
			if (!isMarkdownPath(relativePath)) throw new AgentSkillImportError("agents.builder.skills.import.referenceMarkdownOnly");
			if (seenPaths.has(relativePath)) throw new AgentSkillImportError("agents.builder.skills.import.duplicateReference");
			if (references.length >= 20) throw new AgentSkillImportError("agents.builder.skills.import.tooManyReferences");
			if (entry.file.size > MAX_REFERENCE_FILE_BYTES) throw new AgentSkillImportError("agents.builder.skills.import.referenceTooLarge");
			seenPaths.add(relativePath);
			const content = await readFileText(entry.file);
			if (content.length > 65536) throw new AgentSkillImportError("agents.builder.skills.import.referenceTooLarge");
			totalReferenceLength += content.length;
			if (totalReferenceLength > 262144) throw new AgentSkillImportError("agents.builder.skills.import.referencesTooLarge");
			references.push({
				path: relativePath,
				content
			});
		}
		return {
			...parsed,
			allowedTools: parsed.allowedTools,
			references: references.length > 0 ? references : void 0
		};
	}
	return {
		importSkillFiles,
		importSkillEntries
	};
}
function isFileEntry(entry) {
	return entry.isFile;
}
function isDirectoryEntry(entry) {
	return entry.isDirectory;
}
async function readEntry(entry) {
	if (isFileEntry(entry)) return [{
		file: await new Promise((resolve, reject) => entry.file(resolve, reject)),
		path: normalizePath(entry.fullPath)
	}];
	if (!isDirectoryEntry(entry)) return [];
	const reader = entry.createReader();
	const files = [];
	let entries;
	do {
		entries = await new Promise((resolve, reject) => reader.readEntries(resolve, reject));
		for (const child of entries) files.push(...await readEntry(child));
	} while (entries.length > 0);
	return files;
}
function findSkillFile(entries) {
	return entries.find((entry) => entry.path === SKILL_FILE_NAME || entry.path.endsWith(`/${SKILL_FILE_NAME}`));
}
function pathRelativeToSkillDir(path, skillDir) {
	if (!skillDir) return path;
	if (!path.startsWith(`${skillDir}/`)) return null;
	return path.slice(skillDir.length + 1);
}
function parseSkillMarkdown(content) {
	const lines = content.split(/\r?\n/);
	if (lines[0]?.trim() !== FRONTMATTER_DELIMITER) throw new AgentSkillImportError("agents.builder.skills.import.missingFrontmatter");
	const endIndex = lines.findIndex((line, index) => index > 0 && line.trim() === FRONTMATTER_DELIMITER);
	if (endIndex === -1) throw new AgentSkillImportError("agents.builder.skills.import.invalidFrontmatter");
	const data = parse(lines.slice(1, endIndex).join("\n"));
	if (!isRecord(data)) throw new AgentSkillImportError("agents.builder.skills.import.invalidFrontmatter");
	const name = readRequiredString(data.name, "name");
	const description = readRequiredString(data.description, "description");
	const instructions = lines.slice(endIndex + 1).join("\n").trim();
	if (!instructions) throw new AgentSkillImportError("agents.builder.skills.validation.instructionsRequired");
	return {
		name,
		description,
		instructions,
		...optionalStringArrayField("allowedTools", data.allowed_tools)
	};
}
function readRequiredString(value, field) {
	if (typeof value !== "string" || !value.trim()) throw new AgentSkillImportError(field === "name" ? "agents.builder.skills.import.missingName" : "agents.builder.skills.import.missingDescription");
	return value.trim();
}
function optionalStringArrayField(field, value) {
	if (typeof value === "string" && value.trim()) return { [field]: [value.trim()] };
	return optionalStringArrayProperty(field, value);
}
function optionalStringArrayProperty(field, value) {
	if (!Array.isArray(value)) return {};
	const strings = value.filter((item) => typeof item === "string" && Boolean(item.trim()));
	return strings.length > 0 ? { [field]: strings.map((item) => item.trim()) } : {};
}
function normalizePath(path) {
	return path.replaceAll("\\", "/").replace(/^\/+/, "");
}
function isMarkdownPath(path) {
	return path.endsWith(".md") || path.endsWith(".markdown");
}
async function readFileText(file) {
	if (typeof file.text === "function") return await file.text();
	return await new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result ?? ""));
		reader.onerror = () => reject(reader.error ?? /* @__PURE__ */ new Error("Could not read file"));
		reader.readAsText(file);
	});
}
//#endregion
//#region src/features/agents/components/AgentSkillUpload.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["aria-busy"];
var _hoisted_2 = ["disabled"];
var _hoisted_3 = ["disabled"];
var _hoisted_4 = ["disabled"];
var AgentSkillUpload_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentSkillUpload",
	props: {
		"busy": {
			type: Boolean,
			default: false
		},
		"busyModifiers": {}
	},
	emits: /*@__PURE__*/ mergeModels([
		"uploaded",
		"add-manually",
		"import:skill"
	], ["update:busy"]),
	setup(__props, { emit: __emit }) {
		const busy = useModel(__props, "busy");
		const emit = __emit;
		const i18n = useI18n();
		const { importSkillFiles, importSkillEntries } = useAgentSkillImport();
		const skillFileInput = useTemplateRef("skillFileInput");
		const skillFolderInput = useTemplateRef("skillFolderInput");
		const dropZone = useTemplateRef("dropZone");
		const fileError = ref("");
		const { isOverDropZone } = useDropZone(dropZone, onDrop);
		async function importSkill(loadSkill, source) {
			if (busy.value) return;
			busy.value = true;
			fileError.value = "";
			try {
				const skill = await loadSkill();
				emit("import:skill", {
					source,
					status: "success",
					referenceCount: skill.references?.length ?? 0
				});
				emit("uploaded", skill);
			} catch (error) {
				fileError.value = error instanceof AgentSkillImportError ? i18n.baseText(error.i18nKey) : i18n.baseText("agents.builder.skills.import.invalidFolder");
				emit("import:skill", {
					source,
					status: "error",
					error: error instanceof AgentSkillImportError ? error.i18nKey : "unknown"
				});
			} finally {
				busy.value = false;
			}
		}
		function onFilesSelected(event, source) {
			const input = event.target;
			if (!(input instanceof HTMLInputElement)) return;
			const files = Array.from(input.files ?? []);
			if (files.length > 0) importSkill(async () => await importSkillFiles(files), source);
			input.value = "";
		}
		function onDrop(files, event) {
			const entries = Array.from(event.dataTransfer?.items ?? []).map((item) => item.webkitGetAsEntry?.()).filter((entry) => entry !== null && entry !== void 0);
			importSkill(async () => {
				if (entries.length > 0) return await importSkillEntries(entries);
				return await importSkillFiles(files ?? []);
			}, entries.some((entry) => entry.isDirectory) ? "folder" : "skill_file");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.upload),
				"aria-busy": busy.value,
				"data-testid": "agent-skill-upload"
			}, [
				createBaseVNode("div", {
					ref_key: "dropZone",
					ref: dropZone,
					class: normalizeClass([_ctx.$style.dropZone, unref(isOverDropZone) && !busy.value && _ctx.$style.dragOver]),
					"data-testid": "agent-skill-drop-zone"
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: "book-open",
						size: 32,
						color: "text-light",
						"aria-hidden": "true"
					}),
					createBaseVNode("h2", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(unref(i18n).baseText("agents.builder.skills.import.title")), 3),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.import.description")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
						variant: "solid",
						loading: busy.value,
						disabled: busy.value,
						"data-testid": "agent-skill-upload-folder",
						onClick: _cache[0] || (_cache[0] = ($event) => skillFolderInput.value?.click())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.import.folder")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"]), createVNode(unref(N8nButton_default), {
						variant: "outline",
						disabled: busy.value,
						"data-testid": "agent-skill-upload-skill-md",
						onClick: _cache[1] || (_cache[1] = ($event) => skillFileInput.value?.click())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.import.skillFile")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2),
					fileError.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "danger",
						role: "alert"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(fileError.value), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.manual) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.import.manualPrompt")) + " ", 1), createBaseVNode("button", {
						type: "button",
						class: normalizeClass(_ctx.$style.manualButton),
						disabled: busy.value,
						"data-testid": "agent-skill-add-manually",
						onClick: _cache[2] || (_cache[2] = ($event) => emit("add-manually"))
					}, toDisplayString(unref(i18n).baseText("agents.builder.skills.import.addManually")), 11, _hoisted_2)]),
					_: 1
				})], 2),
				createBaseVNode("input", {
					ref_key: "skillFileInput",
					ref: skillFileInput,
					type: "file",
					accept: ".md,text/markdown",
					hidden: "",
					tabindex: "-1",
					disabled: busy.value,
					"data-testid": "agent-skill-skill-md-file-input",
					onChange: _cache[3] || (_cache[3] = ($event) => onFilesSelected($event, "skill_file"))
				}, null, 40, _hoisted_3),
				createBaseVNode("input", {
					ref_key: "skillFolderInput",
					ref: skillFolderInput,
					type: "file",
					webkitdirectory: "",
					multiple: "",
					hidden: "",
					tabindex: "-1",
					disabled: busy.value,
					"data-testid": "agent-skill-folder-file-input",
					onChange: _cache[4] || (_cache[4] = ($event) => onFilesSelected($event, "folder"))
				}, null, 40, _hoisted_4)
			], 10, _hoisted_1);
		};
	}
}), [["__cssModules", { "$style": {
	upload: "_upload_5o0ud_2",
	dropZone: "_dropZone_5o0ud_12",
	dragOver: "_dragOver_5o0ud_25",
	title: "_title_5o0ud_30",
	description: "_description_5o0ud_36",
	actions: "_actions_5o0ud_42",
	manual: "_manual_5o0ud_50",
	manualButton: "_manualButton_5o0ud_54"
} }]]);
//#endregion
//#region src/features/agents/components/AgentSkillViewer.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SKILL_FILE$1 = "SKILL.md";
var AgentSkillViewer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentSkillViewer",
	props: {
		skill: {},
		disabled: {
			type: Boolean,
			default: false
		},
		readOnly: {
			type: Boolean,
			default: false
		},
		errors: {},
		selectedPath: { default: SKILL_FILE$1 },
		showValidationWarnings: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update:skill",
		"update:valid",
		"select:path"
	],
	setup(__props, { emit: __emit }) {
		const READ_ONLY_MARKDOWN_OPTIONS = { tasklists: {
			enabled: false,
			label: true,
			labelAfter: false
		} };
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const description = ref(props.skill.description);
		const referenceFileName = ref("");
		const formValidation = reactive({
			description: false,
			referenceName: true
		});
		const descriptionValidationRules = [{
			name: "MAX_LENGTH",
			config: { maximum: 512 }
		}];
		const referenceNameValidationRules = [{ name: "referenceFileName" }];
		const referenceNameValidators = { referenceFileName: { validate: (value) => validateReferenceFileName(String(value ?? "")) } };
		const instructionsLength = computed(() => (props.skill.instructions ?? "").length);
		const instructionsError = computed(() => {
			if (!(props.skill.instructions ?? "").trim()) return "";
			if (instructionsLength.value > 65536) return i18n.baseText("agents.builder.skills.validation.instructionsMaxLength", { interpolate: { max: AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH.toLocaleString() } });
			return "";
		});
		const instructionsValid = computed(() => Boolean((props.skill.instructions ?? "").trim()) && !instructionsError.value);
		const referenceLength = (reference) => reference.content.length;
		const invalidReferences = computed(() => (props.skill.references ?? []).filter((reference) => !reference.content.trim() || referenceLength(reference) > 65536));
		const totalReferenceLength = computed(() => (props.skill.references ?? []).reduce((total, reference) => total + referenceLength(reference), 0));
		const referencesTotalError = computed(() => {
			if (totalReferenceLength.value <= 262144) return "";
			return i18n.baseText("agents.builder.skills.import.referencesTooLarge");
		});
		const referencesCountError = computed(() => {
			if ((props.skill.references ?? []).length <= 20) return "";
			return i18n.baseText("agents.builder.skills.references.maxCount", { interpolate: { max: 20 .toLocaleString() } });
		});
		const referencesValid = computed(() => invalidReferences.value.length === 0 && !referencesTotalError.value && !referencesCountError.value);
		const formIsValid = computed(() => formValidation.description && (!selectedReference.value || formValidation.referenceName) && instructionsValid.value && referencesValid.value);
		const instructionsCharacterCount = computed(() => i18n.baseText("agents.builder.skills.instructions.characterCount", { interpolate: {
			count: instructionsLength.value.toLocaleString(),
			max: AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH.toLocaleString()
		} }));
		const isSkillFileSelected = computed(() => props.selectedPath === SKILL_FILE$1);
		const selectedReference = computed(() => (props.skill.references ?? []).find((reference) => reference.path === props.selectedPath));
		const selectedReferenceCharacterCount = computed(() => i18n.baseText("agents.builder.skills.references.characterCount", { interpolate: {
			count: (selectedReference.value ? referenceLength(selectedReference.value) : 0).toLocaleString(),
			max: AGENT_SKILL_REFERENCE_CONTENT_MAX_LENGTH.toLocaleString()
		} }));
		const selectedReferenceError = computed(() => {
			const reference = selectedReference.value;
			if (!reference) return "";
			if (!reference.content.trim()) return i18n.baseText("agents.builder.skills.references.contentRequired");
			if (referenceLength(reference) > 65536) return i18n.baseText("agents.builder.skills.references.contentMaxLength", { interpolate: { max: AGENT_SKILL_REFERENCE_CONTENT_MAX_LENGTH.toLocaleString() } });
			return "";
		});
		const referencesError = computed(() => {
			if (referencesCountError.value) return referencesCountError.value;
			if (referencesTotalError.value) return referencesTotalError.value;
			if (referencesValid.value) return "";
			const [first] = invalidReferences.value;
			if (!first) return i18n.baseText("agents.builder.skills.references.invalidSummary");
			if (!first.content.trim()) return i18n.baseText("agents.builder.skills.references.emptyFile", { interpolate: { path: first.path } });
			return i18n.baseText("agents.builder.skills.references.tooLongFile", { interpolate: {
				path: first.path,
				max: AGENT_SKILL_REFERENCE_CONTENT_MAX_LENGTH.toLocaleString()
			} });
		});
		function onDescriptionInput(value) {
			const next = typeof value === "string" ? value : String(value ?? "");
			description.value = next;
			emit("update:skill", { description: next });
		}
		function onDescriptionValidate(valid) {
			formValidation.description = valid;
		}
		function onReferenceNameValidate(valid) {
			formValidation.referenceName = valid;
		}
		function onInstructionsInput(value) {
			emit("update:skill", { instructions: value });
		}
		function replaceReference(updated, currentPath = updated.path) {
			emit("update:skill", { references: (props.skill.references ?? []).map((reference) => reference.path === currentPath ? updated : reference) });
		}
		function onReferenceInput(value) {
			const reference = selectedReference.value;
			if (!reference) return;
			replaceReference({
				path: reference.path,
				content: value
			});
		}
		function onReferenceNameInput(value) {
			const reference = selectedReference.value;
			if (!reference) return;
			const nextFileName = typeof value === "string" ? value : String(value ?? "");
			referenceFileName.value = nextFileName;
			if (validateReferenceFileName(nextFileName)) return;
			const path = referencePathFromFileName(nextFileName);
			replaceReference({
				path,
				content: reference.content
			}, reference.path);
			emit("select:path", path);
		}
		function validateReferenceFileName(value) {
			const fileName = normalizeReferenceFileName(value);
			if (!fileName) return { messageKey: "agents.builder.skills.references.name.required" };
			if (fileName === "." || fileName === "..") return { messageKey: "agents.builder.skills.references.name.invalid" };
			if (/[\\/]/.test(value)) return { messageKey: "agents.builder.skills.references.name.noPathSeparators" };
			if (!/^[A-Za-z0-9 _-]+$/.test(fileName)) return { messageKey: "agents.builder.skills.references.name.invalidCharacters" };
			const path = referencePathFromFileName(fileName);
			if ((props.skill.references ?? []).some((reference) => reference.path !== selectedReference.value?.path && reference.path === path)) return { messageKey: "agents.builder.skills.references.name.duplicate" };
			return false;
		}
		function fileNameFromReferencePath(path) {
			return path.replace(/^references\//, "").replace(/\.(md|markdown)$/i, "");
		}
		function referencePathFromFileName(value) {
			const fileName = normalizeReferenceFileName(value);
			if (!fileName) return "references/reference.md";
			return `references/${fileName}.md`;
		}
		function normalizeReferenceFileName(value) {
			return value.trim().replace(/\.(md|markdown)$/i, "");
		}
		watch(() => props.skill.description, (value) => {
			if (value !== description.value) description.value = value;
		});
		watch(() => selectedReference.value?.path, (path) => {
			referenceFileName.value = path ? fileNameFromReferencePath(path) : "";
			formValidation.referenceName = true;
		}, { immediate: true });
		watch(formIsValid, (valid) => emit("update:valid", valid), { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.panel),
				"data-testid": "agent-skill-viewer"
			}, [props.readOnly ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [isSkillFileSelected.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nInputLabel_default), {
				class: normalizeClass(_ctx.$style.readOnlyField),
				label: unref(i18n).baseText("agents.builder.skills.description.label"),
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "p",
					color: "text-base",
					class: normalizeClass(_ctx.$style.readOnlyText),
					"data-testid": "agent-skill-description-text"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.skill.description), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["class", "label"]), createVNode(unref(N8nInputLabel_default), {
				class: normalizeClass(_ctx.$style.readOnlyField),
				label: unref(i18n).baseText("agents.builder.skills.instructions.label"),
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [createVNode(unref(N8nMarkdown_default), {
					class: normalizeClass(_ctx.$style.readOnlyMarkdown),
					options: READ_ONLY_MARKDOWN_OPTIONS,
					content: props.skill.instructions,
					"data-testid": "agent-skill-instructions-text"
				}, null, 8, ["class", "content"])]),
				_: 1
			}, 8, ["class", "label"])], 64)) : selectedReference.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
				key: 1,
				class: normalizeClass(_ctx.$style.readOnlyField),
				label: selectedReference.value.path,
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [createVNode(unref(N8nMarkdown_default), {
					class: normalizeClass(_ctx.$style.readOnlyMarkdown),
					options: READ_ONLY_MARKDOWN_OPTIONS,
					content: selectedReference.value.content,
					"data-testid": "agent-skill-reference-text"
				}, null, 8, ["class", "content"])]),
				_: 1
			}, 8, ["class", "label"])) : createCommentVNode("", true)], 64)) : isSkillFileSelected.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				referencesError.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "danger",
					"data-testid": "agent-skill-references-error"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(referencesError.value), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				props.errors?.references && !referencesError.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "danger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.errors.references), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "fields-start"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nFormInput_default), {
					"model-value": description.value,
					label: unref(i18n).baseText("agents.builder.skills.description.label"),
					name: "skill-description",
					required: "",
					"label-size": "small",
					placeholder: unref(i18n).baseText("agents.builder.skills.description.placeholder"),
					disabled: props.disabled,
					"show-validation-warnings": props.showValidationWarnings,
					"validation-rules": descriptionValidationRules,
					"data-testid": "agent-skill-description-input",
					"onUpdate:modelValue": onDescriptionInput,
					onValidate: onDescriptionValidate
				}, null, 8, [
					"model-value",
					"label",
					"placeholder",
					"disabled",
					"show-validation-warnings"
				])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nInputLabel_default), {
					class: normalizeClass(_ctx.$style.editorLabel),
					label: unref(i18n).baseText("agents.builder.skills.instructions.label"),
					required: true,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(MarkdownEditor_default), {
						class: normalizeClass(_ctx.$style.editor),
						"model-value": props.skill.instructions ?? "",
						placeholder: unref(i18n).baseText("agents.builder.skills.instructions.placeholder"),
						"show-toolbar": "floating",
						readonly: props.disabled,
						"max-height": "none",
						"data-testid": "agent-skill-instructions-editor",
						"onUpdate:modelValue": onInstructionsInput
					}, null, 8, [
						"class",
						"model-value",
						"placeholder",
						"readonly"
					]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.editorMeta) }, [
						instructionsError.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "danger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(instructionsError.value), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						props.errors?.instructions ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "danger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(props.errors.instructions), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light",
							class: normalizeClass(_ctx.$style.characterCount)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(instructionsCharacterCount.value), 1)]),
							_: 1
						}, 8, ["class"])
					], 2)]),
					_: 1
				}, 8, ["class", "label"])], 2)
			], 64)) : selectedReference.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nFormInput_default), {
				"model-value": referenceFileName.value,
				label: unref(i18n).baseText("agents.builder.skills.references.name.label"),
				name: "skill-reference-name",
				required: "",
				"focus-initially": "",
				"label-size": "small",
				placeholder: unref(i18n).baseText("agents.builder.skills.references.name.placeholder"),
				disabled: props.disabled,
				"show-validation-warnings": props.showValidationWarnings,
				"validation-rules": referenceNameValidationRules,
				validators: referenceNameValidators,
				"data-testid": "agent-skill-reference-name-input",
				"onUpdate:modelValue": onReferenceNameInput,
				onValidate: onReferenceNameValidate
			}, null, 8, [
				"model-value",
				"label",
				"placeholder",
				"disabled",
				"show-validation-warnings"
			])], 2), createVNode(unref(N8nInputLabel_default), {
				class: normalizeClass(_ctx.$style.editorLabel),
				label: unref(i18n).baseText("agents.builder.skills.references.content.label"),
				required: true,
				size: "small"
			}, {
				default: withCtx(() => [createVNode(unref(MarkdownEditor_default), {
					class: normalizeClass([_ctx.$style.editor, _ctx.$style.referenceEditor]),
					"model-value": selectedReference.value.content,
					placeholder: unref(i18n).baseText("agents.builder.skills.references.content.placeholder"),
					"show-toolbar": "floating",
					readonly: props.disabled,
					"max-height": "none",
					"data-testid": "agent-skill-reference-editor",
					"onUpdate:modelValue": onReferenceInput
				}, null, 8, [
					"class",
					"model-value",
					"placeholder",
					"readonly"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.editorMeta) }, [
					selectedReferenceError.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "danger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(selectedReferenceError.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					referencesError.value && !selectedReferenceError.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "danger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(referencesError.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light",
						class: normalizeClass(_ctx.$style.characterCount)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(selectedReferenceCharacterCount.value), 1)]),
						_: 1
					}, 8, ["class"])
				], 2)]),
				_: 1
			}, 8, ["class", "label"])], 64)) : createCommentVNode("", true)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	panel: "_panel_1wzxk_1",
	readOnlyField: "_readOnlyField_1wzxk_10",
	readOnlyText: "_readOnlyText_1wzxk_16",
	readOnlyMarkdown: "_readOnlyMarkdown_1wzxk_22",
	field: "_field_1wzxk_45",
	editor: "_editor_1wzxk_51",
	referenceEditor: "_referenceEditor_1wzxk_55",
	editorLabel: "_editorLabel_1wzxk_59",
	editorMeta: "_editorMeta_1wzxk_65",
	characterCount: "_characterCount_1wzxk_71"
} }]]);
//#endregion
//#region src/features/agents/components/AgentSkillModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler(), init_shared_esm_bundler();
var SKILL_FILE = "SKILL.md";
var AgentSkillModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentSkillModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const router = useRouter();
		const rootStore = useRootStore();
		const { showError } = useToast();
		const agentTelemetry = useAgentTelemetry();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const agentModal = useTemplateRef("agentModal");
		const existingNameKeys = computed(() => {
			const names = props.data.getAttachedSkills ? props.data.getAttachedSkills().map(({ name }) => name) : props.data.existingSkillNames ?? [];
			return new Set(names.map(skillNameKey));
		});
		function getDefaultSkillName() {
			const baseName = i18n.baseText("agents.builder.skills.defaultName");
			if (!existingNameKeys.value.has(skillNameKey(baseName))) return baseName;
			let suffix = 2;
			while (existingNameKeys.value.has(skillNameKey(`${baseName} ${suffix}`))) suffix += 1;
			return `${baseName} ${suffix}`;
		}
		const initialSkill = normalizeSkill({
			name: props.data.skill?.name ?? getDefaultSkillName(),
			description: props.data.skill?.description ?? "",
			instructions: props.data.skill?.instructions ?? "",
			...props.data.skill?.references ? { references: props.data.skill.references } : {}
		});
		const skill = ref((0, import_cloneDeep.default)(initialSkill));
		const submitted = ref(false);
		const formIsValid = ref(false);
		const selectedPath = ref(SKILL_FILE);
		const isEditing = computed(() => !!props.data.skillId);
		const createMethod = ref("manual");
		const hasPicker = !props.data.skillId && !!props.data.hubSkillsEnabled && !!props.data.onAttach;
		const step = ref(props.data.skill || props.data.skillId ? "edit" : hasPicker ? "select" : "upload");
		const isImporting = ref(false);
		const isSaving = ref(false);
		/** A name error from the server, such as a taken name. Typing a new name clears it. */
		const serverNameError = ref("");
		const scope = ref(props.data.initialScope ?? props.data.scopeOptions?.[0]?.value ?? "");
		const availableToAssistant = ref(props.data.availableToAssistant ?? false);
		const showAssistantAvailability = computed(() => props.data.availableToAssistant !== void 0 && (scope.value === "instance" || scope.value.startsWith("project:")));
		const assistantAvailabilityChanged = computed(() => showAssistantAvailability.value && availableToAssistant.value !== props.data.availableToAssistant);
		/** The last default name the server gave. A name the user typed is never replaced. */
		const serverDefaultName = ref(null);
		/** Save waits for the lookup, so a taken local default cannot fail after the modal closes. */
		const defaultNameLoading = ref(false);
		let latestNameRequest = 0;
		async function refreshDefaultName() {
			if (!props.data.getDefaultName || props.data.skillId) return;
			const current = skill.value.name;
			if (current !== getDefaultSkillName() && current !== serverDefaultName.value) return;
			const request = ++latestNameRequest;
			const requestedScope = nameScope.value;
			defaultNameLoading.value = true;
			try {
				const name = await props.data.getDefaultName(requestedScope);
				if (request !== latestNameRequest || nameScope.value !== requestedScope) return;
				if (skill.value.name !== current) return;
				serverDefaultName.value = name;
				skill.value = {
					...skill.value,
					name
				};
			} catch {} finally {
				if (request === latestNameRequest) defaultNameLoading.value = false;
			}
		}
		function onAddManually() {
			createMethod.value = "manual";
			step.value = "manual";
			refreshDefaultName();
		}
		const showScope = computed(() => !!props.data.scopeOptions?.length && step.value !== "preview");
		const canChangeScope = computed(() => showScope.value && !props.data.scopeLockedReason && !props.data.readOnly);
		const selectedScopeIcon = computed(() => props.data.scopeOptions?.find((option) => option.value === scope.value)?.icon);
		const availableTo = ref("project");
		/**
		* Where the new skill goes, for its default name: the scope field in Settings, or
		* "available to" in the agent builder. `getDefaultName` gets this value.
		*/
		const nameScope = computed(() => showScope.value ? scope.value : availableTo.value);
		watch(nameScope, () => {
			if (step.value === "manual") refreshDefaultName();
		});
		const librarySkills = ref([]);
		const libraryLoading = ref(false);
		const attachedSkills = computed(() => props.data.getAttachedSkills?.() ?? []);
		const attachedSkillIds = computed(() => new Set(attachedSkills.value.map(({ id }) => id)));
		const attachingSkillIds = ref(/* @__PURE__ */ new Set());
		const pickerItems = computed(() => librarySkills.value.map((librarySkill) => {
			const attached = attachedSkillIds.value.has(librarySkill.id);
			const attaching = attachingSkillIds.value.has(librarySkill.id);
			const similarNameReason = attached || attaching ? void 0 : getSimilarNameReason(librarySkill.name);
			return {
				id: `skill:${librarySkill.id}`,
				kind: "skill",
				skillId: librarySkill.id,
				title: librarySkill.name,
				description: librarySkill.description,
				category: getPickerCategory(librarySkill),
				status: "none",
				attached: attached || attaching,
				attaching,
				disabled: similarNameReason !== void 0,
				...similarNameReason ? { disabledReason: similarNameReason } : {}
			};
		}));
		const previewSkill = ref(null);
		const previewPath = ref(SKILL_FILE);
		const previewLoading = ref(false);
		const previewIsAdded = computed(() => !!previewSkill.value && attachedSkillIds.value.has(previewSkill.value.id));
		const showRemove = computed(() => {
			if (!props.data.onRemove) return false;
			return step.value === "preview" ? previewIsAdded.value : isEditing.value;
		});
		const footerPrimaryAction = computed(() => {
			if (step.value === "select") return void 0;
			if (step.value === "preview") return previewIsAdded.value ? void 0 : "add";
			if (isOutdated.value) return props.data.onUseLatestVersion ? "useLatest" : void 0;
			return isReadOnly.value ? void 0 : "save";
		});
		const modalTitle = computed(() => {
			if (step.value === "select") return i18n.baseText("agents.builder.skills.title");
			if (step.value === "upload") return i18n.baseText("agents.builder.skills.add");
			if (step.value === "preview") return previewSkill.value?.name ?? "";
			return skill.value.name;
		});
		const skillAccess = ref(null);
		const skillAccessLoading = ref(false);
		const skillAccessFailed = ref(false);
		const isOutdated = computed(() => isEditing.value && !!props.data.outdated);
		const isReadOnly = computed(() => props.data.readOnly === true || skillAccessLoading.value || skillAccessFailed.value || skillAccess.value?.canEdit === false || isOutdated.value);
		const cannotEdit = computed(() => props.data.readOnly === true || skillAccess.value?.canEdit === false || isOutdated.value);
		/** Save sends a snapshot, so the editor is locked until the answer comes back. */
		const editorLocked = computed(() => isReadOnly.value || isSaving.value);
		const savedTarget = computed(() => {
			if (!skillAccess.value) return void 0;
			if (skillAccess.value.agentId) return "agent";
			return skillAccess.value.scope === "instance" ? "instance" : "project";
		});
		const showAvailabilitySelect = computed(() => {
			if (!props.data.hubSkillsEnabled || step.value === "preview") return false;
			if (!isEditing.value) return true;
			return !!savedTarget.value && !cannotEdit.value;
		});
		const showInstanceTarget = computed(() => !!props.data.canCreateInstanceSkills || savedTarget.value === "instance");
		const AVAILABILITY_ICONS = {
			project: "layers",
			agent: "bot",
			instance: "globe"
		};
		const availabilityOptions = computed(() => [
			{
				value: "project",
				label: props.data.projectLabel ?? i18n.baseText("agents.builder.skills.availableTo.project")
			},
			{
				value: "agent",
				label: i18n.baseText("agents.builder.skills.availableTo.agent")
			},
			...showInstanceTarget.value ? [{
				value: "instance",
				label: i18n.baseText("agents.builder.skills.availableTo.instance")
			}] : []
		]);
		/** Where a changed scope or "available to" field moves the skill, with its label and users. */
		const pendingMove = computed(() => {
			if (showScope.value) {
				if (!canChangeScope.value || scope.value === props.data.initialScope) return void 0;
				const option = props.data.scopeOptions?.find(({ value }) => value === scope.value);
				const usage = props.data.usedBy;
				return option?.target && usage ? {
					target: option.target,
					destination: option.label,
					usage
				} : void 0;
			}
			const agentId = props.data.agentId;
			const usage = skillAccess.value?.usedBy;
			if (!showAvailabilitySelect.value || !isEditing.value || !agentId || !usage) return void 0;
			if (availableTo.value === savedTarget.value) return void 0;
			return {
				target: availableTo.value === "project" ? {
					projectId: props.data.projectId ?? null,
					agentId: null
				} : {
					projectId: null,
					agentId: availableTo.value === "agent" ? agentId : null
				},
				destination: availabilityOptions.value.find(({ value }) => value === availableTo.value)?.label ?? "",
				usage
			};
		});
		/**
		* The warning for a move that takes the skill from agents that use it, or an empty string.
		* The backend refuses such a move, so Save stays off while the warning shows.
		*/
		const accessWarning = computed(() => {
			if (!pendingMove.value) return "";
			const { target, destination, usage } = pendingMove.value;
			const { names, hidden } = agentsLosingSkill(usage, target, props.data.agentId);
			const parts = [];
			if (names.length > 0) parts.push(i18n.baseText(target.agentId ? "agents.builder.skills.loseAccess.agentOnly" : "agents.builder.skills.loseAccess", {
				interpolate: {
					agents: names.join(", "),
					destination
				},
				adjustToNumber: names.length
			}));
			if (hidden > 0) parts.push(i18n.baseText("agents.builder.skills.loseAccess.hidden", {
				interpolate: { count: hidden },
				adjustToNumber: hidden
			}));
			return parts.join(" ");
		});
		const removeLabel = computed(() => props.data.hubSkillsEnabled ? i18n.baseText("agents.builder.skills.detach") : i18n.baseText("agents.builder.skills.remove"));
		const footerHint = computed(() => {
			const shownSkill = step.value === "preview" ? previewSkill.value : skillAccess.value;
			if (step.value === "edit" && isOutdated.value) return i18n.baseText("agents.builder.skills.hint.outdated");
			if (!shownSkill || step.value !== "preview" && step.value !== "edit") return "";
			if (!shownSkill.canEdit) return shownSkill.scope === "instance" ? i18n.baseText("agents.builder.skills.hint.readOnly.instance") : i18n.baseText("agents.builder.skills.hint.readOnly.project");
			if (step.value !== "preview" || previewIsAdded.value) return "";
			return i18n.baseText("agents.builder.skills.hint.addToEdit");
		});
		const canAddReference = computed(() => (skill.value.references ?? []).length < 20);
		const openedWithMissingContent = computed(() => isEditing.value && !(props.data.skill?.instructions ?? "").trim());
		const validationErrors = computed(() => {
			const errors = {};
			const name = skill.value.name.trim();
			const description = skill.value.description.trim();
			const instructions = skill.value.instructions.trim();
			if (!name) errors.name = i18n.baseText("agents.builder.skills.validation.nameRequired");
			else if (name.length > 128) errors.name = i18n.baseText("agents.builder.skills.validation.nameMaxLength");
			else if (existingNameKeys.value.has(skillNameKey(name))) errors.name = i18n.baseText("agents.builder.skills.validation.nameDuplicate");
			if (!description) errors.description = i18n.baseText("agents.builder.skills.validation.descriptionRequired");
			else if (description.length > 512) errors.description = i18n.baseText("agents.builder.skills.validation.descriptionMaxLength");
			if (!instructions) errors.instructions = i18n.baseText("agents.builder.skills.validation.instructionsRequired");
			else if (skill.value.instructions.length > 65536) errors.instructions = i18n.baseText("agents.builder.skills.validation.instructionsMaxLength", { interpolate: { max: AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH.toLocaleString() } });
			if (skill.value.references?.some((reference) => !reference.content.trim())) errors.references = i18n.baseText("agents.builder.skills.references.invalidSummary");
			return errors;
		});
		/** Reference files that block a save: empty, or longer than the limit. */
		const invalidReferencePaths = computed(() => (skill.value.references ?? []).filter((reference) => !reference.content.trim() || reference.content.length > 65536).map((reference) => reference.path));
		const visibleInvalidReferencePaths = computed(() => submitted.value ? invalidReferencePaths.value : []);
		/**
		* A blocked save must show why. Open the file that holds the problem: the first broken
		* reference, else SKILL.md when its fields are invalid and a reference is open.
		*/
		function showFirstInvalidFile() {
			const [firstInvalidReference] = invalidReferencePaths.value;
			if (firstInvalidReference) {
				selectedPath.value = firstInvalidReference;
				return;
			}
			const { references: _references, ...skillFileErrors } = validationErrors.value;
			if (Object.keys(skillFileErrors).length > 0) selectedPath.value = SKILL_FILE;
		}
		const visibleErrors = computed(() => submitted.value || openedWithMissingContent.value ? validationErrors.value : {});
		const visibleNameError = computed(() => (submitted.value ? validationErrors.value.name : void 0) ?? serverNameError.value);
		const canSave = computed(() => formIsValid.value && !validationErrors.value.name && !isReadOnly.value);
		const hasChanges = computed(() => !isEditing.value || !(0, import_isEqual.default)(skill.value, initialSkill) || assistantAvailabilityChanged.value || showAvailabilitySelect.value && availableTo.value !== savedTarget.value || canChangeScope.value && scope.value !== props.data.initialScope);
		function getSimilarNameReason(name) {
			const key = skillNameKey(name);
			const similarNames = attachedSkills.value.map((attachedSkill) => attachedSkill.name).filter((attachedName) => skillNameKey(attachedName) === key);
			if (similarNames.length === 0) return void 0;
			return i18n.baseText("agents.builder.skills.picker.similarName", { interpolate: { names: [...similarNames, name].map((value) => `"${value}"`).join(", ") } });
		}
		function getPickerCategory(librarySkill) {
			if (librarySkill.scope === "instance") return "global";
			return librarySkill.agentId ? "this-agent" : "project";
		}
		async function loadLibrarySkills() {
			if (!props.data.agentId) return;
			libraryLoading.value = true;
			try {
				librarySkills.value = await listAttachableSkills(rootStore.restApiContext, props.data.agentId);
			} catch (error) {
				showError(error, i18n.baseText("agents.builder.skills.picker.loadError"));
			} finally {
				libraryLoading.value = false;
			}
		}
		function targetForPickerCategory(category) {
			if (category === "project") return "project";
			if (category === "global" && props.data.canCreateInstanceSkills) return "instance";
			return "agent";
		}
		function onPickerCreate(category) {
			availableTo.value = targetForPickerCategory(category);
			step.value = "upload";
		}
		async function loadSkillAccess(skillId) {
			skillAccessLoading.value = true;
			try {
				skillAccess.value = await getHubSkill(rootStore.restApiContext, skillId);
				availableTo.value = savedTarget.value ?? "project";
			} catch (error) {
				skillAccess.value = null;
				skillAccessFailed.value = true;
				showError(error, i18n.baseText("agents.builder.skills.accessError"));
			} finally {
				skillAccessLoading.value = false;
			}
		}
		function onPickerItemAttach(item) {
			if (item.kind !== "skill" || item.disabled || item.attached) return;
			attachLibrarySkill(item.skillId);
		}
		async function onPickerItemPreview(item) {
			if (item.kind !== "skill" || item.disabled) return;
			previewLoading.value = true;
			try {
				previewSkill.value = await getHubSkill(rootStore.restApiContext, item.skillId);
				previewPath.value = SKILL_FILE;
				step.value = "preview";
			} catch (error) {
				showError(error, i18n.baseText("agents.builder.skills.picker.previewError"));
			} finally {
				previewLoading.value = false;
			}
		}
		async function attachLibrarySkill(skillId) {
			const librarySkill = librarySkills.value.find((candidate) => candidate.id === skillId);
			if (!librarySkill || !props.data.onAttach) return;
			attachingSkillIds.value = /* @__PURE__ */ new Set([...attachingSkillIds.value, skillId]);
			try {
				await props.data.onAttach(librarySkill);
			} finally {
				const remaining = new Set(attachingSkillIds.value);
				remaining.delete(skillId);
				attachingSkillIds.value = remaining;
			}
		}
		/** Opens Settings > Context > Skills in a new tab, so the agent and the picker stay open. */
		function onManageSkills() {
			window.open(router.resolve({ name: VIEWS.SETTINGS_CONTEXT_SKILLS }).href, "_blank", "noopener");
		}
		function onPreviewAdd() {
			if (!previewSkill.value) return;
			attachLibrarySkill(previewSkill.value.id);
			step.value = "select";
		}
		onMounted(() => {
			if (hasPicker) loadLibrarySkills();
			if (props.data.skillId && props.data.hubSkillsEnabled) loadSkillAccess(props.data.skillId);
		});
		function onSkillUploaded(importedSkill) {
			createMethod.value = "upload";
			skill.value = normalizeSkill(importedSkill);
			serverNameError.value = "";
			selectedPath.value = SKILL_FILE;
			submitted.value = false;
			step.value = "edit";
		}
		function onBack() {
			if (step.value === "upload" || step.value === "preview") {
				step.value = "select";
				return;
			}
			skill.value = {
				name: getDefaultSkillName(),
				description: "",
				instructions: ""
			};
			serverNameError.value = "";
			selectedPath.value = SKILL_FILE;
			submitted.value = false;
			formIsValid.value = false;
			step.value = "upload";
		}
		function onSkillUpdate(updates) {
			if (isReadOnly.value) return;
			if (updates.name !== void 0 && updates.name !== skill.value.name) serverNameError.value = "";
			skill.value = normalizeSkill({
				...skill.value,
				...updates
			});
			if (selectedPath.value !== SKILL_FILE && !skill.value.references?.some((reference) => reference.path === selectedPath.value)) selectedPath.value = SKILL_FILE;
		}
		function normalizeSkill(skill) {
			return normalizeAgentSkillForSave(skill);
		}
		function onAddReference() {
			if (!canAddReference.value) return;
			const path = nextReferencePath(skill.value.references ?? []);
			skill.value = {
				...skill.value,
				references: [...skill.value.references ?? [], {
					path,
					content: ""
				}]
			};
			selectedPath.value = path;
		}
		function onRemoveReference(path) {
			skill.value = {
				...skill.value,
				references: (skill.value.references ?? []).filter((reference) => reference.path !== path)
			};
			if (selectedPath.value === path) selectedPath.value = SKILL_FILE;
		}
		function nextReferencePath(references) {
			const existingPaths = new Set(references.map((reference) => reference.path));
			let index = 1;
			let path = "references/reference.md";
			while (existingPaths.has(path)) {
				index += 1;
				path = `references/reference-${index}.md`;
			}
			return path;
		}
		function onValidUpdate(valid) {
			formIsValid.value = valid;
		}
		function onImportSkill(payload) {
			if (!props.data.agentId) return;
			agentTelemetry.trackImportedSkill({
				agentId: props.data.agentId,
				...payload
			});
		}
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		async function onSave() {
			if (defaultNameLoading.value || isSaving.value || accessWarning.value) return;
			submitted.value = true;
			if (!canSave.value) {
				showFirstInvalidFile();
				return;
			}
			const payload = normalizeSkill({
				name: skill.value.name.trim(),
				description: skill.value.description.trim(),
				instructions: skill.value.instructions,
				...skill.value.references ? { references: skill.value.references } : {}
			});
			const targetChanged = !isEditing.value || availableTo.value !== savedTarget.value;
			isSaving.value = true;
			let result;
			try {
				result = await props.data.onConfirm({
					id: props.data.skillId,
					skill: payload,
					...showAvailabilitySelect.value && targetChanged ? { availableTo: availableTo.value } : {},
					...canChangeScope.value ? { scope: scope.value } : {},
					...assistantAvailabilityChanged.value ? { availableToAssistant: availableToAssistant.value } : {},
					...isEditing.value ? {} : { method: createMethod.value }
				});
			} catch {
				return;
			} finally {
				isSaving.value = false;
			}
			if (result?.saved === false) {
				if (result.nameError) {
					serverNameError.value = result.nameError;
					await focusName();
				}
				return;
			}
			closeModal();
		}
		async function focusName() {
			await nextTick();
			agentModal.value?.focusTitle();
		}
		watch(step, async (next) => {
			if ((next === "manual" || next === "edit") && !isEditing.value && !isReadOnly.value) await focusName();
		});
		function onUseLatestVersion() {
			if (!props.data.skillId) return;
			const skillId = props.data.skillId;
			closeModal();
			props.data.onUseLatestVersion?.(skillId);
		}
		function onRemove() {
			if (step.value === "preview") {
				if (previewSkill.value) props.data.onRemove?.(previewSkill.value.id);
				step.value = "select";
				return;
			}
			if (!props.data.skillId) return;
			props.data.onRemove?.(props.data.skillId);
			closeModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModalMultiStep_default, {
				ref_key: "agentModal",
				ref: agentModal,
				open: modalOpen.value,
				step: step.value,
				title: modalTitle.value,
				"title-placeholder": unref(i18n).baseText("agents.builder.skills.name.placeholder"),
				"title-max-length": 128,
				"title-error": visibleNameError.value,
				"editable-title": step.value === "manual" || step.value === "edit" && !isReadOnly.value,
				"show-back": step.value === "manual" || step.value === "preview" || step.value === "upload" && unref(hasPicker),
				"show-footer": step.value === "select" || step.value === "manual" || step.value === "edit" || step.value === "preview",
				"show-cancel": step.value !== "select",
				busy: isImporting.value || previewLoading.value || isSaving.value,
				size: "fit",
				"data-testid": "agent-skill-modal",
				"onUpdate:open": _cache[8] || (_cache[8] = ($event) => !$event && closeModal()),
				"onUpdate:title": _cache[9] || (_cache[9] = ($event) => onSkillUpdate({ name: $event })),
				onBack
			}, createSlots({
				default: withCtx(() => [unref(hasPicker) ? withDirectives((openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.picker)
				}, [createVNode(ToolsConnectionModal_default, {
					open: modalOpen.value && step.value === "select",
					items: pickerItems.value,
					categories: [
						"all",
						"project",
						"this-agent",
						"global"
					],
					"category-labels": __props.data.projectLabel ? { project: __props.data.projectLabel } : void 0,
					"detail-item": null,
					"search-placeholder": unref(i18n).baseText("agents.builder.skills.picker.search.placeholder"),
					"empty-message": libraryLoading.value ? unref(i18n).baseText("agents.builder.skills.picker.loading") : unref(i18n).baseText("agents.builder.skills.picker.empty"),
					"no-results-message": unref(i18n).baseText("agents.builder.skills.picker.noResults"),
					"create-action": {
						label: unref(i18n).baseText("agents.builder.skills.picker.create"),
						description: unref(i18n).baseText("agents.builder.skills.picker.create.description"),
						testId: "agent-skill-picker-create"
					},
					"connect-label": () => unref(i18n).baseText("agents.builder.skills.picker.add"),
					"connect-aria-label": (item) => unref(i18n).baseText("agents.builder.skills.picker.addAriaLabel", { interpolate: { name: item.title } }),
					embedded: "",
					"show-connect-actions": "",
					"hide-empty-categories": "",
					"iconless-rows": "",
					"persistent-scrollbar": "",
					"data-testid": "agent-skill-picker",
					onConnect: onPickerItemAttach,
					onOpenDetail: onPickerItemPreview,
					onCreate: onPickerCreate
				}, null, 8, [
					"open",
					"items",
					"category-labels",
					"search-placeholder",
					"empty-message",
					"no-results-message",
					"create-action",
					"connect-label",
					"connect-aria-label"
				])], 2)), [[vShow, step.value === "select"]]) : createCommentVNode("", true), step.value === "preview" && previewSkill.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.content),
					"data-testid": "agent-skill-preview"
				}, [createVNode(AgentSkillFileNav_default, {
					skill: previewSkill.value.skill,
					"selected-path": previewPath.value,
					"read-only": "",
					onSelect: _cache[0] || (_cache[0] = ($event) => previewPath.value = $event)
				}, null, 8, ["skill", "selected-path"]), createVNode(AgentSkillViewer_default, {
					skill: previewSkill.value.skill,
					"selected-path": previewPath.value,
					"read-only": "",
					"onSelect:path": _cache[1] || (_cache[1] = ($event) => previewPath.value = $event)
				}, null, 8, ["skill", "selected-path"])], 2)) : step.value !== "select" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					__props.data.readOnly ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 0,
						theme: "info",
						class: normalizeClass(_ctx.$style.callout),
						"data-testid": "agent-skill-read-only-callout"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.readOnly")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					openedWithMissingContent.value && !isReadOnly.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 1,
						theme: "warning",
						class: normalizeClass(_ctx.$style.callout),
						"data-testid": "agent-skill-missing-content-callout"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.missingContent.callout")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [step.value === "upload" ? (openBlock(), createBlock(AgentSkillUpload_default, {
						key: 0,
						busy: isImporting.value,
						"onUpdate:busy": _cache[2] || (_cache[2] = ($event) => isImporting.value = $event),
						onUploaded: onSkillUploaded,
						onAddManually,
						"onImport:skill": onImportSkill
					}, null, 8, ["busy"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(AgentSkillFileNav_default, {
						skill: skill.value,
						"selected-path": selectedPath.value,
						"add-reference-disabled": !canAddReference.value,
						"read-only": editorLocked.value,
						"invalid-paths": visibleInvalidReferencePaths.value,
						onAddReference,
						onRemoveReference,
						onSelect: _cache[3] || (_cache[3] = ($event) => selectedPath.value = $event)
					}, null, 8, [
						"skill",
						"selected-path",
						"add-reference-disabled",
						"read-only",
						"invalid-paths"
					]), createVNode(AgentSkillViewer_default, {
						skill: skill.value,
						"selected-path": selectedPath.value,
						disabled: editorLocked.value,
						"read-only": cannotEdit.value,
						errors: visibleErrors.value,
						"show-validation-warnings": submitted.value || openedWithMissingContent.value,
						"onSelect:path": _cache[7] || (_cache[7] = ($event) => selectedPath.value = $event),
						"onUpdate:skill": onSkillUpdate,
						"onUpdate:valid": onValidUpdate
					}, createSlots({ _: 2 }, [showScope.value || showAvailabilitySelect.value ? {
						name: "fields-start",
						fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.scopeField) }, [showScope.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
							key: 0,
							label: unref(i18n).baseText("settings.context.skills.modal.scope.label"),
							"tooltip-text": unref(i18n).baseText("settings.context.skills.modal.scope.tooltip"),
							size: "small",
							"data-testid": "agent-skill-scope"
						}, {
							default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
								disabled: !__props.data.scopeLockedReason,
								content: __props.data.scopeLockedReason,
								placement: "top"
							}, {
								default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nSelect_default), {
									modelValue: scope.value,
									"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => scope.value = $event),
									size: "large",
									disabled: !canChangeScope.value || isSaving.value,
									teleported: false,
									"data-testid": "agent-skill-scope-select"
								}, createSlots({
									default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.data.scopeOptions, (option) => {
										return openBlock(), createBlock(unref(N8nOption_default), {
											key: option.value,
											value: option.value,
											label: option.label
										}, {
											default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.availabilityOption) }, [createVNode(unref(N8nIcon_default), { icon: option.icon }, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(option.label), 1)], 2)]),
											_: 2
										}, 1032, ["value", "label"]);
									}), 128))]),
									_: 2
								}, [selectedScopeIcon.value ? {
									name: "prefix",
									fn: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: selectedScopeIcon.value }, null, 8, ["icon"])]),
									key: "0"
								} : void 0]), 1032, ["modelValue", "disabled"])])]),
								_: 1
							}, 8, ["disabled", "content"])]),
							_: 1
						}, 8, ["label", "tooltip-text"])) : (openBlock(), createBlock(unref(N8nInputLabel_default), {
							key: 1,
							label: unref(i18n).baseText("agents.builder.skills.availableTo.label"),
							"tooltip-text": unref(i18n).baseText("agents.builder.skills.availableTo.tooltip"),
							"show-tooltip": "",
							size: "small"
						}, {
							default: withCtx(() => [createVNode(unref(N8nSelect_default), {
								modelValue: availableTo.value,
								"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => availableTo.value = $event),
								teleported: false,
								"data-testid": "agent-skill-availability-select"
							}, {
								prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: AVAILABILITY_ICONS[availableTo.value],
									size: 16,
									color: "text-dark"
								}, null, 8, ["icon"])]),
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availabilityOptions.value, (option) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: option.value,
										value: option.value,
										label: option.label
									}, {
										default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.availabilityOption) }, [createVNode(unref(N8nIcon_default), {
											icon: AVAILABILITY_ICONS[option.value],
											size: 16
										}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(option.label), 1)], 2)]),
										_: 2
									}, 1032, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, ["modelValue"])]),
							_: 1
						}, 8, ["label", "tooltip-text"])), accessWarning.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 2,
							theme: "warning",
							slim: "",
							"data-testid": "agent-skill-access-warning"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(accessWarning.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)], 2), showScope.value && showAssistantAvailability.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
							key: 0,
							"input-name": "skill-assistant-availability",
							label: unref(i18n).baseText("settings.context.skills.assistant.label"),
							"tooltip-text": unref(i18n).baseText("settings.context.skills.assistant.tooltip"),
							size: "small"
						}, {
							default: withCtx(() => [createVNode(unref(N8nSwitch_default), {
								id: "skill-assistant-availability",
								modelValue: availableToAssistant.value,
								"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => availableToAssistant.value = $event),
								"aria-label": unref(i18n).baseText("settings.context.skills.assistant.label"),
								disabled: editorLocked.value,
								"data-testid": "skill-assistant-availability"
							}, null, 8, [
								"modelValue",
								"aria-label",
								"disabled"
							])]),
							_: 1
						}, 8, ["label", "tooltip-text"])) : createCommentVNode("", true)]),
						key: "0"
					} : void 0]), 1032, [
						"skill",
						"selected-path",
						"disabled",
						"read-only",
						"errors",
						"show-validation-warnings"
					])], 64))], 2)
				], 64)) : createCommentVNode("", true)]),
				_: 2
			}, [
				showRemove.value ? {
					name: "footerLeft",
					fn: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						"data-testid": "agent-skill-remove",
						onClick: onRemove
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: __props.data.hubSkillsEnabled ? "unlink" : "trash-2",
							size: 16
						}, null, 8, ["icon"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(removeLabel.value), 1)]),
						_: 1
					})]),
					key: "0"
				} : step.value === "select" ? {
					name: "footerLeft",
					fn: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						"data-testid": "agent-skill-picker-manage",
						onClick: onManageSkills
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "settings",
							size: 16
						})]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.skills.picker.manage")), 1)]),
						_: 1
					})]),
					key: "1"
				} : void 0,
				footerHint.value ? {
					name: "footerBeforeCancel",
					fn: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.footerHint),
						"data-testid": "agent-skill-footer-hint"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(footerHint.value), 1)]),
						_: 1
					}, 8, ["class"])]),
					key: "2"
				} : void 0,
				footerPrimaryAction.value ? {
					name: "footerActions",
					fn: withCtx(() => [footerPrimaryAction.value === "add" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "solid",
						"data-testid": "agent-skill-preview-add",
						onClick: onPreviewAdd
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.picker.add")), 1)]),
						_: 1
					})) : footerPrimaryAction.value === "useLatest" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						variant: "solid",
						"data-testid": "agent-skill-use-latest",
						onClick: onUseLatestVersion
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.useLatest")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 2,
						variant: "solid",
						disabled: !hasChanges.value || defaultNameLoading.value || !!accessWarning.value,
						loading: isSaving.value,
						"data-testid": "agent-skill-create-save",
						onClick: onSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.save")), 1)]),
						_: 1
					}, 8, ["disabled", "loading"]))]),
					key: "3"
				} : void 0
			]), 1032, [
				"open",
				"step",
				"title",
				"title-placeholder",
				"title-error",
				"editable-title",
				"show-back",
				"show-footer",
				"show-cancel",
				"busy"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_1w6c1_2",
	picker: "_picker_1w6c1_9",
	callout: "_callout_1w6c1_14",
	footerHint: "_footerHint_1w6c1_18",
	scopeField: "_scopeField_1w6c1_22",
	availabilityOption: "_availabilityOption_1w6c1_28"
} }]]);
//#endregion
export { AgentSkillModal_default as default };
