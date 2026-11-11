import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Df as withDirectives, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Hf as shallowRef, Jd as defineComponent, Jf as unref, Kd as createVNode, Kf as toValue, Lu as useDropZone, Ma as require_isEqual, Md as vShow, Pd as withModifiers, Rd as computed, Sf as useTemplateRef, Ti as require_cloneDeep, Ud as createSlots, Vd as createCommentVNode, bf as useModel, bp as toDisplayString, cf as onMounted, df as openBlock, hp as normalizeClass, if as nextTick, jf as init_reactivity_esm_bundler, kd as useCssModule, nf as mergeModels, np as init_shared_esm_bundler, ns as useRouter, pf as renderList, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, DD as N8nMarkdown_default, DS as skillNameKey, GC as AGENT_SKILL_REFERENCE_CONTENT_MAX_LENGTH, HC as AGENT_SKILL_DESCRIPTION_MAX_LENGTH, HO as _plugin_vue_export_helper_default, Kl as listSkillVersions, LD as N8nFormInput_default, LO as N8nIconButton_default, MO as N8nTooltip_default, Ml as getSkillVersion, Ow as isRecord, Pc as convertToDisplayDate, RD as N8nSelect_default, RO as N8nButton_default, TO as N8nBadge_default, UC as AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH, Ul as listAttachableSkills, XE as N8nSwitch_default, Xb as VIEWS, Yb as useToast, cO as N8nCallout_default, fE as useMessage, ii as normalizeAgentSkillForSave, jl as getSkillDetail, ni as agentsLosingSkill, qO as useI18n, rx as useRootStore, s_ as useUIStore, un as preferenceUserName, yO as N8nActionDropdown_default, zD as N8nOption_default, zO as N8nIcon_default, zi as useAgentTelemetry } from "./app-MbtXRI_F.js";
import { t as ToolsConnectionModal_default } from "./ToolsConnectionModal-BAAQ0335.js";
import { n as AgentSkillFileNav_default, r as SkillDiffCount_default, t as AgentSkillViewer_default } from "./AgentSkillViewer-BqRf4kLD.js";
import { t as parse } from "./browser-C1q7id8k.js";
import { t as AgentModalMultiStep_default } from "./AgentModalMultiStep-DuBJkppn.js";
//#region src/features/agents/components/skillVersions/skillVersionDiff.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_cloneDeep = /* @__PURE__ */ __toESM(require_cloneDeep(), 1);
/** The SKILL.md file, as the editor names it in the file list. */
var SKILL_FILE$1 = "SKILL.md";
/**
* The largest table the diff fills (about 16 MB). Two long texts with nothing in common
* would need far more, so above it the changed part shows as removed and then added.
*/
var MAX_TABLE_CELLS = 4e6;
function toLines(text) {
	return text === "" ? [] : text.split("\n");
}
/**
* The longest common subsequence of two lists, as pairs of indexes. The common head and
* tail are matched first, so a small edit in a long text stays cheap.
*/
function commonPairs(a, b) {
	let start = 0;
	while (start < a.length && start < b.length && a[start] === b[start]) start++;
	let endA = a.length;
	let endB = b.length;
	while (endA > start && endB > start && a[endA - 1] === b[endB - 1]) {
		endA--;
		endB--;
	}
	const rows = endA - start;
	const cols = endB - start;
	const pairs = [];
	for (let i = 0; i < start; i++) pairs.push([i, i]);
	const tail = () => {
		for (let k = 0; endA + k < a.length; k++) pairs.push([endA + k, endB + k]);
		return pairs;
	};
	if (rows * cols > MAX_TABLE_CELLS) return tail();
	const table = Array.from({ length: rows + 1 }, () => new Uint32Array(cols + 1));
	for (let i = rows - 1; i >= 0; i--) for (let j = cols - 1; j >= 0; j--) table[i][j] = a[start + i] === b[start + j] ? table[i + 1][j + 1] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
	let i = 0;
	let j = 0;
	while (i < rows && j < cols) if (a[start + i] === b[start + j]) {
		pairs.push([start + i, start + j]);
		i++;
		j++;
	} else if (table[i + 1][j] >= table[i][j + 1]) i++;
	else j++;
	return tail();
}
/** Marks the words of `from` and `to` that the other side does not have. */
function diffWords(from, to) {
	const a = from.split(/(\s+)/).filter(Boolean);
	const b = to.split(/(\s+)/).filter(Boolean);
	const pairs = commonPairs(a, b);
	const keptA = new Set(pairs.map(([i]) => i));
	const keptB = new Set(pairs.map(([, j]) => j));
	const segments = (tokens, kept) => tokens.map((text, index) => ({
		text,
		changed: !kept.has(index) && text.trim() !== ""
	}));
	return {
		from: segments(a, keptA),
		to: segments(b, keptB)
	};
}
function diffText(from, to) {
	const a = toLines(from);
	const b = toLines(to);
	const lines = [];
	const count = {
		added: 0,
		removed: 0
	};
	let i = 0;
	let j = 0;
	const flush = (untilA, untilB) => {
		const removed = a.slice(i, untilA);
		const added = b.slice(j, untilB);
		count.removed += removed.length;
		count.added += added.length;
		const words = removed.map((line, index) => index < added.length ? diffWords(line, added[index]) : void 0);
		removed.forEach((text, index) => lines.push({
			type: "removed",
			text,
			segments: words[index]?.from ?? [{
				text,
				changed: true
			}]
		}));
		added.forEach((text, index) => lines.push({
			type: "added",
			text,
			segments: words[index]?.to ?? [{
				text,
				changed: true
			}]
		}));
	};
	for (const [pairA, pairB] of commonPairs(a, b)) {
		flush(pairA, pairB);
		lines.push({
			type: "equal",
			text: a[pairA]
		});
		i = pairA + 1;
		j = pairB + 1;
	}
	flush(a.length, b.length);
	return {
		lines,
		...count
	};
}
function section(key, from, to) {
	return {
		key,
		...diffText(from, to)
	};
}
/** The fields of SKILL.md and every reference file that either version has. */
function diffSkills(from, to) {
	const fromFiles = new Map((from.references ?? []).map((file) => [file.path, file.content]));
	const toFiles = new Map((to.references ?? []).map((file) => [file.path, file.content]));
	const paths = [.../* @__PURE__ */ new Set([...fromFiles.keys(), ...toFiles.keys()])].sort();
	return [
		section("name", from.name, to.name),
		section("description", from.description, to.description),
		section("instructions", from.instructions, to.instructions),
		...paths.map((path) => ({
			...section(path, fromFiles.get(path) ?? "", toFiles.get(path) ?? ""),
			...fileStatus(fromFiles.has(path), toFiles.has(path))
		}))
	];
}
function fileStatus(inFrom, inTo) {
	if (!inFrom) return { status: "added" };
	if (!inTo) return { status: "removed" };
	return {};
}
/** Lines added and removed in each file, keyed by path, for the file list. */
function countsByFile(sections) {
	const counts = { [SKILL_FILE$1]: {
		added: 0,
		removed: 0
	} };
	for (const { key, added, removed, status } of sections) {
		const path = key === "name" || key === "description" || key === "instructions" ? SKILL_FILE$1 : key;
		const count = counts[path] ?? {
			added: 0,
			removed: 0
		};
		counts[path] = {
			added: count.added + added,
			removed: count.removed + removed,
			...status ? { status } : {}
		};
	}
	return counts;
}
//#endregion
//#region src/features/agents/composables/useSkillVersions.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* The saved versions of one skill, and the version the user opened. `baseVersion` is the version
* the editor shows: a pinned agent's version in the builder, else the latest.
*/
function useSkillVersions(skillId, baseVersion) {
	const rootStore = useRootStore();
	const i18n = useI18n();
	const { showError } = useToast();
	/** Newest first. Null until the Versions panel opens. */
	const versions = ref(null);
	/** An older version the user opened. Null shows the latest. */
	const viewedVersion = ref(null);
	const fetched = /* @__PURE__ */ new Map();
	function reportLoadError(error) {
		showError(error, i18n.baseText("agents.builder.skills.versions.loadError"));
	}
	/** The skill that `versions` belongs to, so another skill loads its own list. */
	let versionsOf;
	async function loadVersions() {
		const id = toValue(skillId);
		if (!id || versions.value && versionsOf === id) return;
		try {
			const list = await listSkillVersions(rootStore.restApiContext, id);
			if (toValue(skillId) !== id) return;
			versions.value = list;
			versionsOf = id;
		} catch (error) {
			reportLoadError(error);
		}
	}
	/** Loads the list again, for example after a save added a version. */
	async function reloadVersions() {
		versionsOf = void 0;
		await loadVersions();
	}
	async function fetchVersion(version) {
		const id = toValue(skillId);
		if (!id) return void 0;
		const key = `${id}:${version}`;
		const cached = fetched.get(key);
		if (cached) return cached;
		try {
			const detail = await getSkillVersion(rootStore.restApiContext, id, version);
			fetched.set(key, detail);
			return detail;
		} catch (error) {
			reportLoadError(error);
			return;
		}
	}
	/** The version the user asked for last, so a slower earlier answer cannot replace it. */
	let requestedVersion = null;
	/** Shows another version. The base version shows the editor again. */
	async function openVersion(version) {
		requestedVersion = version;
		if (version === (toValue(baseVersion) ?? versions.value?.[0]?.version)) {
			viewedVersion.value = null;
			return;
		}
		const detail = await fetchVersion(version);
		if (detail && requestedVersion === version) viewedVersion.value = detail;
	}
	/** Compare mode: the two versions and their skills, older first. Null outside compare mode. */
	const comparison = shallowRef(null);
	const diffSections = computed(() => comparison.value ? diffSkills(comparison.value.fromSkill, comparison.value.toSkill) : []);
	const diffCounts = computed(() => countsByFile(diffSections.value));
	/** The compared skill with every file either version has, for the file list. */
	const comparedSkill = computed(() => {
		if (!comparison.value) return null;
		const { fromSkill, toSkill } = comparison.value;
		const paths = new Set((toSkill.references ?? []).map((file) => file.path));
		return {
			...toSkill,
			references: [...toSkill.references ?? [], ...(fromSkill.references ?? []).filter((file) => !paths.has(file.path))]
		};
	});
	/** Compares two versions, in either order. */
	let compareRequest = 0;
	async function compareVersions(a, b) {
		const [from, to] = a < b ? [a, b] : [b, a];
		const request = ++compareRequest;
		const [fromDetail, toDetail] = await Promise.all([fetchVersion(from), fetchVersion(to)]);
		if (!fromDetail || !toDetail || request !== compareRequest) return;
		comparison.value = {
			from,
			to,
			fromSkill: fromDetail.skill,
			toSkill: toDetail.skill
		};
	}
	return {
		versions,
		viewedVersion,
		loadVersions,
		reloadVersions,
		fetchVersion,
		openVersion,
		comparison,
		diffSections,
		diffCounts,
		comparedSkill,
		compareVersions
	};
}
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
		instructions
	};
}
function readRequiredString(value, field) {
	if (typeof value !== "string" || !value.trim()) throw new AgentSkillImportError(field === "name" ? "agents.builder.skills.import.missingName" : "agents.builder.skills.import.missingDescription");
	return value.trim();
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
var _hoisted_1$3 = ["aria-busy"];
var _hoisted_2$1 = ["disabled"];
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
					}, toDisplayString(unref(i18n).baseText("agents.builder.skills.import.addManually")), 11, _hoisted_2$1)]),
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
			], 10, _hoisted_1$3);
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
//#region src/features/agents/components/skillVersions/SkillVersionDiff.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1$2 = ["data-testid"];
var _hoisted_2 = ["data-testid"];
var SkillVersionDiff_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillVersionDiff",
	props: {
		sections: {},
		selectedPath: {}
	},
	setup(__props) {
		const FIELD_LABELS = {
			name: "agents.builder.skills.name.label",
			description: "agents.builder.skills.description.label",
			instructions: "agents.builder.skills.instructions.label"
		};
		/** Fields whose text is markdown: their unchanged lines render as markdown. */
		const MARKDOWN_FIELDS = /* @__PURE__ */ new Set(["instructions"]);
		const props = __props;
		const i18n = useI18n();
		/** The sections of the selected file, each with its blocks worked out once. */
		const shownSections = computed(() => props.sections.filter((section) => props.selectedPath === "SKILL.md" ? section.key in FIELD_LABELS : section.key === props.selectedPath).map((section) => ({
			...section,
			blocks: blocksOf(section.lines)
		})));
		function blocksOf(lines) {
			const blocks = [];
			for (const line of lines) {
				const last = blocks.at(-1);
				if (line.type === "equal") {
					if (last?.kind === "equal") last.text += `\n${line.text}`;
					else blocks.push({
						kind: "equal",
						text: line.text
					});
				} else blocks.push({
					kind: "change",
					line
				});
			}
			return blocks;
		}
		function labelOf(section) {
			const key = FIELD_LABELS[section.key];
			return key ? i18n.baseText(key) : section.key;
		}
		function isMarkdown(section) {
			return MARKDOWN_FIELDS.has(section.key) || section.key.endsWith(".md");
		}
		/**
		* Whether an unchanged run renders as markdown. A run that opens or closes a code fence
		* without the other half would turn the rest of the run into code, so it stays plain text.
		*/
		function rendersAsMarkdown(section, text) {
			if (!isMarkdown(section)) return false;
			return text.split("\n").filter((line) => /^\s*(```|~~~)/.test(line)).length % 2 === 0;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.diff),
				"data-testid": "skill-version-diff"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(shownSections.value, (section) => {
				return openBlock(), createElementBlock("section", {
					key: section.key,
					class: normalizeClass(_ctx.$style.field),
					"data-testid": `skill-version-diff-${section.key}`
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.fieldHeader) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(labelOf(section)), 1)]),
					_: 2
				}, 1024), createVNode(SkillDiffCount_default, { count: section }, null, 8, ["count"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(section.blocks, (block, index) => {
					return openBlock(), createElementBlock(Fragment, { key: index }, [block.kind === "equal" && rendersAsMarkdown(section, block.text) ? (openBlock(), createBlock(unref(N8nMarkdown_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.equal),
						content: block.text
					}, null, 8, ["class", "content"])) : block.kind === "equal" ? (openBlock(), createElementBlock("p", {
						key: 1,
						class: normalizeClass([_ctx.$style.line, _ctx.$style.equal])
					}, toDisplayString(block.text), 3)) : (openBlock(), createElementBlock("p", {
						key: 2,
						class: normalizeClass([_ctx.$style.line, block.line.type === "added" ? _ctx.$style.added : _ctx.$style.removed]),
						"data-testid": `skill-version-diff-${block.line.type}`
					}, [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.marker),
						"aria-hidden": "true"
					}, toDisplayString(block.line.type === "added" ? "+" : "−"), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(block.line.segments, (segment, segmentIndex) => {
						return openBlock(), createElementBlock("span", {
							key: segmentIndex,
							class: normalizeClass(segment.changed && _ctx.$style.changedWord)
						}, toDisplayString(segment.text), 3);
					}), 128))], 10, _hoisted_2))], 64);
				}), 128))], 2)], 10, _hoisted_1$2);
			}), 128))], 2);
		};
	}
}), [["__cssModules", { "$style": {
	diff: "_diff_1drwg_1",
	field: "_field_1drwg_9",
	fieldHeader: "_fieldHeader_1drwg_15",
	body: "_body_1drwg_21",
	line: "_line_1drwg_30",
	equal: "_equal_1drwg_39",
	marker: "_marker_1drwg_43",
	removed: "_removed_1drwg_49",
	added: "_added_1drwg_54",
	changedWord: "_changedWord_1drwg_59"
} }]]);
//#endregion
//#region src/features/agents/components/skillVersions/SkillVersionTimeline.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$1 = ["data-testid", "onClick"];
var SkillVersionTimeline_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillVersionTimeline",
	props: {
		versions: {},
		shownVersion: {},
		canRestore: { type: Boolean },
		agent: {}
	},
	emits: [
		"open",
		"restore",
		"compare",
		"use",
		"useLatest"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const $style = useCssModule();
		function savedBy(version) {
			const { date, time } = convertToDisplayDate(version.createdAt);
			return i18n.baseText("agents.builder.skills.versions.savedBy", { interpolate: {
				author: preferenceUserName(version.createdBy) || i18n.baseText("agents.builder.skills.versions.unknownUser"),
				date,
				time
			} });
		}
		function actionsFor(index, version) {
			return [
				{
					id: "open",
					label: i18n.baseText("agents.builder.skills.versions.open"),
					icon: "eye"
				},
				...props.agent && version !== props.agent.draft ? [{
					id: "use",
					label: i18n.baseText("agents.builder.skills.versions.useIn", { interpolate: { agent: props.agent.name } }),
					icon: "node-pin"
				}] : [],
				...props.canRestore && index > 0 ? [{
					id: "restore",
					label: i18n.baseText("agents.builder.skills.versions.restore"),
					icon: "history"
				}] : []
			];
		}
		function onAction(version, action) {
			if (action === "open") emit("open", version);
			else if (action === "use") emit("use", version);
			else emit("restore", version);
		}
		/** The dot of a row: the draft and the published agent in the builder, the latest in Settings. */
		function dotClass(version, index) {
			if (!props.agent) return index === 0 && $style.latestDot;
			return [version === props.agent.draft && $style.draftDot, version === props.agent.published && $style.publishedDot];
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(unref($style).panel),
				"data-testid": "skill-version-timeline"
			}, [createBaseVNode("div", { class: normalizeClass(unref($style).header) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "medium",
				bold: "",
				class: normalizeClass(unref($style).title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.title")), 1)]),
				_: 1
			}, 8, ["class"]), props.agent ? (openBlock(), createBlock(unref(N8nSwitch_default), {
				key: 0,
				"model-value": !props.agent.pinned,
				label: unref(i18n).baseText("agents.builder.skills.versions.useLatest"),
				"data-testid": "skill-version-use-latest",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $event ? emit("useLatest") : emit("use", props.agent.draft))
			}, null, 8, ["model-value", "label"])) : createCommentVNode("", true)], 2), createBaseVNode("ol", { class: normalizeClass(unref($style).list) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.versions, (version, index) => {
				return openBlock(), createElementBlock("li", {
					key: version.id,
					class: normalizeClass([unref($style).row, version.version === props.shownVersion && unref($style).shown]),
					"data-testid": `skill-version-row-${version.version}`,
					onClick: ($event) => emit("open", version.version)
				}, [
					createBaseVNode("span", {
						class: normalizeClass([unref($style).dot, dotClass(version.version, index)]),
						"aria-hidden": "true"
					}, null, 2),
					createBaseVNode("div", { class: normalizeClass(unref($style).text) }, [createBaseVNode("span", { class: normalizeClass(unref($style).versionLine) }, [
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-dark",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.number", { interpolate: { version: version.version } })), 1)]),
							_: 2
						}, 1024),
						index === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.latest")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						props.agent && version.version === props.agent.published ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "text-light",
							"data-testid": "skill-version-published"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.inPublishedAgent")), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					], 2), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(savedBy(version)), 1)]),
						_: 2
					}, 1024)], 2),
					createBaseVNode("span", {
						class: normalizeClass(unref($style).actions),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
					}, [version.version !== props.shownVersion ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						variant: "ghost",
						size: "small",
						icon: "file-diff",
						"aria-label": unref(i18n).baseText("agents.builder.skills.versions.compare", { interpolate: {
							from: version.version,
							to: props.shownVersion ?? ""
						} }),
						"data-testid": `skill-version-compare-${version.version}`,
						onClick: ($event) => emit("compare", version.version)
					}, null, 8, [
						"aria-label",
						"data-testid",
						"onClick"
					])) : createCommentVNode("", true), createVNode(unref(N8nActionDropdown_default), {
						items: actionsFor(index, version.version),
						"activator-icon": "ellipsis",
						"activator-size": "small",
						placement: "bottom-end",
						"data-testid": `skill-version-actions-${version.version}`,
						onSelect: (action) => onAction(version.version, action)
					}, null, 8, [
						"items",
						"data-testid",
						"onSelect"
					])], 2)
				], 10, _hoisted_1$1);
			}), 128))], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	panel: "_panel_1k1tl_1",
	header: "_header_1k1tl_8",
	title: "_title_1k1tl_14",
	list: "_list_1k1tl_18",
	row: "_row_1k1tl_28",
	shown: "_shown_1k1tl_37",
	dot: "_dot_1k1tl_53",
	draftDot: "_draftDot_1k1tl_62",
	latestDot: "_latestDot_1k1tl_67",
	publishedDot: "_publishedDot_1k1tl_72",
	versionLine: "_versionLine_1k1tl_83",
	text: "_text_1k1tl_89",
	actions: "_actions_1k1tl_96"
} }]]);
//#endregion
//#region src/features/agents/components/AgentSkillModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { "data-testid": "agent-skill-menu-delete-reason" };
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
		const $style = useCssModule();
		const message = useMessage();
		const uiStore = useUIStore();
		const router = useRouter();
		const rootStore = useRootStore();
		const { showError } = useToast();
		const agentTelemetry = useAgentTelemetry();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
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
		function toFormSkill(source) {
			return normalizeSkill({
				name: source?.name ?? getDefaultSkillName(),
				description: source?.description ?? "",
				instructions: source?.instructions ?? "",
				...source?.references ? { references: source.references } : {}
			});
		}
		const initialSkill = ref(toFormSkill(props.data.skill));
		const skill = ref((0, import_cloneDeep.default)(initialSkill.value));
		const submitted = ref(false);
		const formIsValid = ref(false);
		const selectedPath = ref(SKILL_FILE);
		const isEditing = computed(() => !!props.data.skillId);
		const createMethod = ref("manual");
		const hasPicker = !props.data.skillId && !!props.data.skillRefsEnabled && !!props.data.onAttach;
		const step = ref(props.data.skill || props.data.skillId ? "edit" : hasPicker ? "select" : "upload");
		/** The form steps show the scope badge, the header menu and "Close" instead of "Cancel". */
		const isFormStep = computed(() => step.value === "manual" || step.value === "edit");
		const isImporting = ref(false);
		const isSaving = ref(false);
		/** A name error from the server, such as a taken name. Typing a new name clears it. */
		const serverNameError = ref("");
		const scope = ref(props.data.initialScope ?? props.data.scopeOptions?.[0]?.value ?? "");
		const availableToAssistant = ref(props.data.availableToAssistant ?? false);
		const showAssistantAvailability = computed(() => props.data.availableToAssistant !== void 0 && (scope.value === "instance" || scope.value.startsWith("project:")));
		const assistantAvailabilityChanged = computed(() => showAssistantAvailability.value && availableToAssistant.value !== props.data.availableToAssistant);
		const availableToMCP = ref(props.data.availableToMCP ?? false);
		const showAvailableToMCP = computed(() => props.data.availableToMCP !== void 0 && (scope.value === "instance" || scope.value.startsWith("project:")));
		const availableToMCPChanged = computed(() => showAvailableToMCP.value && availableToMCP.value !== props.data.availableToMCP);
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
			if (step.value === "preview") return previewIsAdded.value;
			return isEditing.value && !props.data.skillRefsEnabled;
		});
		const footerPrimaryAction = computed(() => {
			if (step.value === "select") return void 0;
			if (step.value === "preview") return previewIsAdded.value ? void 0 : "add";
			if (viewedVersion.value) return "viewing";
			if (isPinned.value) return "save";
			if (isOutdated.value) return props.data.onUseLatestVersion ? "useLatest" : void 0;
			return isReadOnly.value ? void 0 : "save";
		});
		const modalTitle = computed(() => {
			if (step.value === "select") return i18n.baseText("agents.builder.skills.title");
			if (step.value === "upload") return i18n.baseText("agents.builder.skills.add");
			if (step.value === "preview") return previewSkill.value?.name ?? "";
			return viewedVersion.value?.skill.name ?? skill.value.name;
		});
		const skillAccess = ref(null);
		const skillAccessLoading = ref(false);
		const skillAccessFailed = ref(false);
		/** A pinned skill is read-only in the builder: the agent runs that version, not the latest. */
		const isPinned = computed(() => isEditing.value && !!props.data.agentVersions?.pinned);
		const isOutdated = computed(() => isEditing.value && !!props.data.outdated);
		/**
		* Where a synced skill comes from, for the banner and the source link. The server already
		* marks a synced skill `canEdit: false`, so it does not feed the read-only rule here.
		*/
		const syncedFrom = computed(() => props.data.syncedFrom ?? skillAccess.value?.syncedFrom ?? null);
		const canStopSyncing = computed(() => !!syncedFrom.value?.canStopSyncing && !!props.data.onStopSyncing && !!props.data.skillId);
		/** True while a stop runs, so a second click cannot send it again. */
		const isStoppingSync = ref(false);
		async function onStopSyncing() {
			if (!props.data.skillId || !props.data.onStopSyncing || isStoppingSync.value) return;
			isStoppingSync.value = true;
			try {
				await props.data.onStopSyncing(props.data.skillId);
			} finally {
				isStoppingSync.value = false;
			}
		}
		const isReadOnly = computed(() => props.data.readOnly === true || skillAccessLoading.value || skillAccessFailed.value || skillAccess.value?.canEdit === false || isOutdated.value || isPinned.value);
		const cannotEdit = computed(() => props.data.readOnly === true || skillAccess.value?.canEdit === false || isOutdated.value || isPinned.value);
		/** Save sends a snapshot, so the editor is locked until the answer comes back. */
		const editorLocked = computed(() => isReadOnly.value || isSaving.value);
		const savedTarget = computed(() => skillAccess.value?.scope);
		const showAvailabilitySelect = computed(() => {
			if (!props.data.skillRefsEnabled || step.value === "preview") return false;
			if (!isEditing.value) return true;
			return !!savedTarget.value && !cannotEdit.value;
		});
		const showInstanceTarget = computed(() => !!props.data.canCreateInstanceSkills || savedTarget.value === "instance");
		const AVAILABILITY_ICONS = {
			project: "layers",
			instance: "globe"
		};
		const availabilityOptions = computed(() => [{
			value: "project",
			label: props.data.projectLabel ?? i18n.baseText("agents.builder.skills.availableTo.project")
		}, ...showInstanceTarget.value ? [{
			value: "instance",
			label: i18n.baseText("agents.builder.skills.availableTo.instance")
		}] : []]);
		const scopeChoices = computed(() => {
			if (showScope.value) return props.data.scopeOptions ?? [];
			return availabilityOptions.value.map((option) => ({
				...option,
				icon: AVAILABILITY_ICONS[option.value]
			}));
		});
		const selectedScopeValue = computed(() => showScope.value ? scope.value : availableTo.value);
		const selectedScope = computed(() => scopeChoices.value.find((choice) => choice.value === selectedScopeValue.value));
		const showScopeBadge = computed(() => isFormStep.value && (showScope.value || !!props.data.skillRefsEnabled && (!isEditing.value || !!savedTarget.value)));
		const scopeEditable = computed(() => showScope.value ? canChangeScope.value && !isSaving.value : showAvailabilitySelect.value);
		function onScopeChoice(value) {
			if (!scopeEditable.value) return;
			if (showScope.value) {
				scope.value = value;
				return;
			}
			if (value === "project" || value === "instance") availableTo.value = value;
		}
		function scopeItems(testIdPrefix) {
			return scopeChoices.value.map((choice) => ({
				id: `scope:${choice.value}`,
				label: choice.label,
				icon: choice.icon,
				checked: choice.value === selectedScopeValue.value,
				testId: `${testIdPrefix}${choice.value}`
			}));
		}
		const scopeBadgeItems = computed(() => scopeItems("agent-skill-scope-option-"));
		/** "Add to <agent>" toggles the attachment of a hub skill to the agent it was opened from. */
		const showAttachToggle = computed(() => step.value === "edit" && isEditing.value && !!props.data.skillRefsEnabled && !!props.data.agentId && !!props.data.onRemove);
		const headerMenuItems = computed(() => {
			const items = [];
			if (showAttachToggle.value) items.push({
				id: "attach",
				label: props.data.agentName ? i18n.baseText("agents.builder.skills.menu.addToAgent", { interpolate: { agent: props.data.agentName } }) : i18n.baseText("agents.builder.skills.menu.addToThisAgent"),
				icon: "bot",
				customClass: $style.menuItem,
				testId: "agent-skill-menu-attach"
			});
			if (showScopeBadge.value) items.push({
				id: "change-scope",
				label: i18n.baseText("agents.builder.skills.menu.changeScope"),
				icon: "globe",
				disabled: !scopeEditable.value,
				customClass: $style.menuItem,
				testId: "agent-skill-menu-change-scope",
				children: scopeItems("agent-skill-menu-scope-option-").map((item) => ({
					...item,
					customClass: $style.menuItem
				}))
			});
			if (isEditing.value && (props.data.onDelete || showAttachToggle.value)) items.push({
				id: "delete",
				label: i18n.baseText("agents.builder.skills.menu.delete"),
				icon: "trash-2",
				divided: items.length > 0,
				disabled: !props.data.onDelete || !!props.data.deleteDisabledReason || isSaving.value,
				customClass: [$style.menuItem, $style.deleteItem].join(" "),
				testId: "agent-skill-menu-delete"
			});
			return items;
		});
		function onHeaderMenuSelect(action) {
			if (action.startsWith("scope:")) {
				onScopeChoice(action.slice(6));
				return;
			}
			if (action === "attach") {
				onRemove();
				return;
			}
			if (action === "delete" && props.data.skillId && props.data.onDelete) props.data.onDelete(props.data.skillId);
		}
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
			const usage = skillAccess.value?.usedBy;
			if (!showAvailabilitySelect.value || !isEditing.value || !props.data.agentId || !usage) return;
			if (availableTo.value === savedTarget.value) return void 0;
			return {
				target: { projectId: availableTo.value === "project" ? props.data.projectId ?? null : null },
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
			if (names.length > 0) parts.push(i18n.baseText("agents.builder.skills.loseAccess", {
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
		const removeLabel = computed(() => props.data.skillRefsEnabled ? i18n.baseText("agents.builder.skills.detach") : i18n.baseText("agents.builder.skills.remove"));
		const footerHint = computed(() => {
			const shownSkill = step.value === "preview" ? previewSkill.value : skillAccess.value;
			if (step.value === "edit" && isOutdated.value) return isPinned.value ? "" : i18n.baseText("agents.builder.skills.hint.outdated");
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
			else if (description.length > 1024) errors.description = i18n.baseText("agents.builder.skills.validation.descriptionMaxLength", { interpolate: { max: AGENT_SKILL_DESCRIPTION_MAX_LENGTH.toLocaleString() } });
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
		const hasChanges = computed(() => !isEditing.value || !(0, import_isEqual.default)(skill.value, initialSkill.value) || assistantAvailabilityChanged.value || availableToMCPChanged.value || showAvailabilitySelect.value && availableTo.value !== savedTarget.value || canChangeScope.value && scope.value !== props.data.initialScope);
		function getSimilarNameReason(name) {
			const key = skillNameKey(name);
			const similarNames = attachedSkills.value.map((attachedSkill) => attachedSkill.name).filter((attachedName) => skillNameKey(attachedName) === key);
			if (similarNames.length === 0) return void 0;
			return i18n.baseText("agents.builder.skills.picker.similarName", { interpolate: { names: [...similarNames, name].map((value) => `"${value}"`).join(", ") } });
		}
		function getPickerCategory(librarySkill) {
			return librarySkill.scope === "instance" ? "global" : "project";
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
			return category === "global" && props.data.canCreateInstanceSkills ? "instance" : "project";
		}
		function onPickerCreate(category) {
			availableTo.value = targetForPickerCategory(category);
			step.value = "upload";
		}
		async function loadSkillAccess(skillId) {
			skillAccessLoading.value = true;
			try {
				skillAccess.value = await getSkillDetail(rootStore.restApiContext, skillId);
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
				previewSkill.value = await getSkillDetail(rootStore.restApiContext, item.skillId);
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
			if (props.data.skillId && props.data.skillRefsEnabled) loadSkillAccess(props.data.skillId);
		});
		const showAssistantToggle = computed(() => showScope.value && showAssistantAvailability.value && !cannotEdit.value);
		const showMcpToggle = computed(() => showScope.value && showAvailableToMCP.value && !cannotEdit.value);
		const versionsOpen = ref(!!props.data.initialVersionsOpen);
		const { versions, viewedVersion, loadVersions, reloadVersions, fetchVersion, openVersion, comparison, diffSections, diffCounts, comparedSkill, compareVersions } = useSkillVersions(() => props.data.skillId, () => baseVersion.value);
		const latestVersion = computed(() => props.data.skillId ? versions.value?.[0]?.version ?? props.data.latestVersion : void 0);
		/** The version the editor shows: the one a pinned agent runs, else the latest. */
		const baseVersion = computed(() => isPinned.value ? props.data.agentVersions?.draft : versions.value?.[0]?.version);
		/** The warning strip of a pinned skill. Compare mode and an opened version have their own bars. */
		const showPinnedBar = computed(() => isPinned.value && !viewedVersion.value && !comparison.value);
		/** The Versions panel shows beside the editor once its list has loaded. Compare mode hides it. */
		const showVersionsPanel = computed(() => isFormStep.value && versionsOpen.value && !!versions.value && !comparison.value);
		watch(versionsOpen, (open) => {
			if (open) loadVersions();
		}, { immediate: true });
		const displayedSkill = computed(() => viewedVersion.value?.skill ?? skill.value);
		const viewingText = computed(() => {
			const viewed = viewedVersion.value;
			if (!viewed) return "";
			const { date, time } = convertToDisplayDate(viewed.createdAt);
			const key = viewed.version === versions.value?.[0]?.version ? "agents.builder.skills.versions.viewingLatest" : "agents.builder.skills.versions.viewing";
			return i18n.baseText(key, { interpolate: {
				version: viewed.version,
				author: preferenceUserName(viewed.createdBy) || i18n.baseText("agents.builder.skills.versions.unknownUser"),
				date,
				time: time.slice(0, 5)
			} });
		});
		const canRestore = computed(() => !isReadOnly.value);
		async function onOpenVersion(version) {
			selectedPath.value = SKILL_FILE;
			await openVersion(version);
		}
		const versionOptions = computed(() => (versions.value ?? []).map(({ version }) => ({
			value: version,
			label: i18n.baseText("agents.builder.skills.versions.number", { interpolate: { version } })
		})));
		/** The agent the builder opened the editor from, for the markers and "Use in <agent>". */
		const timelineAgent = computed(() => props.data.agentVersions && props.data.agentName ? {
			name: props.data.agentName,
			...props.data.agentVersions,
			draft: props.data.agentVersions.pinned ? props.data.agentVersions.draft : latestVersion.value ?? props.data.agentVersions.draft
		} : void 0);
		const versionsButtonLabel = computed(() => {
			const agentVersions = props.data.agentVersions;
			const key = !agentVersions ? "agents.builder.skills.versions.number" : agentVersions.pinned ? "agents.builder.skills.versions.usingVersion" : "agents.builder.skills.versions.usingLatest";
			const version = agentVersions?.pinned ? agentVersions.draft : latestVersion.value;
			return i18n.baseText(key, { interpolate: { version: version ?? "" } });
		});
		async function useVersion(version) {
			const skillId = props.data.skillId;
			if (!skillId || !props.data.onUseVersion) return;
			if (isEditing.value && hasChanges.value) {
				if (await message.confirm(i18n.baseText("agents.builder.skills.versions.discardEdits.message"), i18n.baseText("agents.builder.skills.versions.discardEdits.title"), {
					type: "warning",
					confirmButtonText: i18n.baseText("agents.builder.skills.versions.discardEdits.confirm"),
					cancelButtonText: i18n.baseText("agents.builder.skills.versions.discardEdits.cancel")
				}) !== "confirm" || !modalOpen.value) return;
			}
			const summary = versions.value?.find((item) => item.version === version);
			const detail = summary && version === props.data.agentVersions?.draft && props.data.skill ? {
				...summary,
				skill: props.data.skill
			} : await fetchVersion(version);
			if (!detail || !modalOpen.value) return;
			props.data.onUseVersion(skillId, detail);
		}
		async function onCompare(a, b) {
			selectedPath.value = SKILL_FILE;
			await compareVersions(a, b);
		}
		/** Done leaves compare mode for the latest version, which the user can edit. */
		function leaveCompare() {
			comparison.value = null;
			viewedVersion.value = null;
		}
		/** Saves the content of an older version as the next version and keeps the editor open on it. */
		async function restoreVersion(version) {
			if (!canRestore.value || isSaving.value) return;
			const detail = viewedVersion.value?.version === version ? viewedVersion.value : await fetchVersion(version);
			if (!detail) return;
			const restored = normalizeSkill({ ...detail.skill });
			if (!await submit(restored, { restoredFrom: version })) return;
			showSavedSkill(restored);
			selectedPath.value = SKILL_FILE;
			submitted.value = false;
			serverNameError.value = "";
			await reloadVersions();
		}
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
			if (await submit(payload, {
				...showAvailabilitySelect.value && targetChanged ? { availableTo: availableTo.value } : {},
				...canChangeScope.value ? { scope: scope.value } : {},
				...assistantAvailabilityChanged.value ? { availableToAssistant: availableToAssistant.value } : {},
				...availableToMCPChanged.value ? { availableToMCP: availableToMCP.value } : {},
				...isEditing.value ? {} : { method: createMethod.value }
			})) closeModal();
		}
		/** Hands the skill to the caller. A refused save keeps the modal open with the user's edits. */
		async function submit(payload, extras) {
			isSaving.value = true;
			let result;
			try {
				result = await props.data.onConfirm({
					id: props.data.skillId,
					skill: payload,
					...extras
				});
			} catch {
				return false;
			} finally {
				isSaving.value = false;
			}
			if (result?.saved === false) {
				if (result.nameError) {
					serverNameError.value = result.nameError;
					await focusName();
				}
				return false;
			}
			return true;
		}
		const nameField = useTemplateRef("nameField");
		async function focusName() {
			await nextTick();
			nameField.value?.querySelector("input")?.focus();
		}
		watch(step, async (next) => {
			if ((next === "manual" || next === "edit") && !isEditing.value && !isReadOnly.value) await focusName();
		});
		function onUseLatestVersion() {
			if (!props.data.skillId) return;
			props.data.onUseLatestVersion?.(props.data.skillId);
		}
		/** Shows a saved skill in place of the editor content, as the state to compare edits with. */
		function showSavedSkill(saved) {
			initialSkill.value = toFormSkill(saved);
			skill.value = (0, import_cloneDeep.default)(initialSkill.value);
			viewedVersion.value = null;
			comparison.value = null;
			if (!(saved.references ?? []).some((file) => file.path === selectedPath.value)) selectedPath.value = SKILL_FILE;
		}
		watch(() => props.data.skill, (next) => {
			if (!next || !isEditing.value) return;
			showSavedSkill(next);
			if (props.data.initialVersionsOpen) versionsOpen.value = true;
		});
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
				open: modalOpen.value,
				step: step.value,
				title: modalTitle.value,
				"show-back": step.value === "manual" || step.value === "preview" || step.value === "upload" && unref(hasPicker),
				"show-footer": !unref(comparison) && (step.value === "select" || step.value === "manual" || step.value === "edit" || step.value === "preview"),
				"show-cancel": step.value !== "select" && !unref(viewedVersion),
				"cancel-label": isFormStep.value ? unref(i18n).baseText("generic.close") : void 0,
				"header-divider": isFormStep.value,
				"header-divider-tone": showPinnedBar.value ? "warning" : "default",
				"body-flush": isFormStep.value,
				"fixed-size": isFormStep.value,
				busy: isImporting.value || previewLoading.value || isSaving.value,
				size: "fit",
				"data-testid": "agent-skill-modal",
				"onUpdate:open": _cache[16] || (_cache[16] = ($event) => !$event && closeModal()),
				onBack
			}, createSlots({
				default: withCtx(() => [unref(hasPicker) ? withDirectives((openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref($style).picker)
				}, [createVNode(ToolsConnectionModal_default, {
					open: modalOpen.value && step.value === "select",
					items: pickerItems.value,
					categories: [
						"all",
						"project",
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
					class: normalizeClass(unref($style).content),
					"data-testid": "agent-skill-preview"
				}, [createVNode(AgentSkillFileNav_default, {
					skill: previewSkill.value.skill,
					"selected-path": previewPath.value,
					"read-only": "",
					onSelect: _cache[3] || (_cache[3] = ($event) => previewPath.value = $event)
				}, null, 8, ["skill", "selected-path"]), createVNode(AgentSkillViewer_default, {
					skill: previewSkill.value.skill,
					"selected-path": previewPath.value,
					"read-only": "",
					"onSelect:path": _cache[4] || (_cache[4] = ($event) => previewPath.value = $event)
				}, null, 8, ["skill", "selected-path"])], 2)) : step.value !== "select" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					syncedFrom.value && step.value === "edit" ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 0,
						theme: "info",
						icon: "git-branch",
						class: normalizeClass([unref($style).callout, isFormStep.value && unref($style).calloutInset]),
						"data-testid": "agent-skill-synced-banner"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.synced.banner", { interpolate: { repo: syncedFrom.value.label } })), 1)]),
						_: 1
					}, 8, ["class"])) : __props.data.readOnly ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 1,
						theme: "info",
						class: normalizeClass([unref($style).callout, isFormStep.value && unref($style).calloutInset]),
						"data-testid": "agent-skill-read-only-callout"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.context.skills.readOnly")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					openedWithMissingContent.value && !isReadOnly.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 2,
						theme: "warning",
						class: normalizeClass([unref($style).callout, isFormStep.value && unref($style).calloutInset]),
						"data-testid": "agent-skill-missing-content-callout"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.missingContent.callout")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					accessWarning.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 3,
						theme: "warning",
						class: normalizeClass([unref($style).callout, isFormStep.value && unref($style).calloutInset]),
						"data-testid": "agent-skill-access-warning"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(accessWarning.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					unref(comparison) ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(unref($style).compareBar),
						"data-testid": "agent-skill-compare-bar"
					}, [
						createVNode(unref(N8nIcon_default), {
							icon: "file-diff",
							size: 14
						}),
						createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.compare.from")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nSelect_default), {
							"model-value": unref(comparison).from,
							size: "small",
							teleported: false,
							class: normalizeClass(unref($style).compareSelect),
							"data-testid": "agent-skill-compare-from",
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => onCompare(Number($event), unref(comparison).to))
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(versionOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: option.value,
									value: option.value,
									label: option.label
								}, null, 8, ["value", "label"]);
							}), 128))]),
							_: 1
						}, 8, ["model-value", "class"]),
						createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.compare.to")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nSelect_default), {
							"model-value": unref(comparison).to,
							size: "small",
							teleported: false,
							class: normalizeClass(unref($style).compareSelect),
							"data-testid": "agent-skill-compare-to",
							"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => onCompare(unref(comparison).from, Number($event)))
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(versionOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: option.value,
									value: option.value,
									label: option.label
								}, null, 8, ["value", "label"]);
							}), 128))]),
							_: 1
						}, 8, ["model-value", "class"]),
						createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "small",
							class: normalizeClass(unref($style).compareDone),
							"data-testid": "agent-skill-compare-done",
							onClick: leaveCompare
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.done")), 1)]),
							_: 1
						}, 8, ["class"])
					], 2)) : showPinnedBar.value && __props.data.agentVersions ? (openBlock(), createElementBlock("div", {
						key: 5,
						class: normalizeClass(unref($style).pinnedBar),
						"data-testid": "agent-skill-pinned-bar"
					}, [
						createVNode(unref(N8nIcon_default), {
							icon: "pin",
							size: 14,
							class: normalizeClass(unref($style).pinnedIcon)
						}, null, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							class: normalizeClass(unref($style).pinnedText)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.pinned", { interpolate: {
								agent: __props.data.agentName ?? "",
								version: __props.data.agentVersions.draft
							} })), 1)]),
							_: 1
						}, 8, ["class"]),
						__props.data.onUseLatestVersion && !versionsOpen.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "outline",
							size: "small",
							class: normalizeClass(unref($style).barAction),
							"data-testid": "agent-skill-pinned-use-latest",
							onClick: onUseLatestVersion
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.useLatest")), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)
					], 2)) : unref(viewedVersion) ? (openBlock(), createElementBlock("div", {
						key: 6,
						class: normalizeClass(unref($style).viewingBar),
						"data-testid": "agent-skill-viewing-version"
					}, [createVNode(unref(N8nIcon_default), {
						icon: "history",
						size: 14
					}), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(viewingText.value), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass([unref($style).content, isFormStep.value && unref($style).contentFlush]) }, [step.value === "upload" ? (openBlock(), createBlock(AgentSkillUpload_default, {
						key: 0,
						busy: isImporting.value,
						"onUpdate:busy": _cache[7] || (_cache[7] = ($event) => isImporting.value = $event),
						onUploaded: onSkillUploaded,
						onAddManually,
						"onImport:skill": onImportSkill
					}, null, 8, ["busy"])) : unref(comparison) && unref(comparedSkill) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(AgentSkillFileNav_default, {
						class: normalizeClass(unref($style).fileColumn),
						skill: unref(comparedSkill),
						"selected-path": selectedPath.value,
						"change-counts": unref(diffCounts),
						"read-only": "",
						onSelect: _cache[8] || (_cache[8] = ($event) => selectedPath.value = $event)
					}, null, 8, [
						"class",
						"skill",
						"selected-path",
						"change-counts"
					]), createVNode(SkillVersionDiff_default, {
						class: normalizeClass(unref($style).formColumn),
						sections: unref(diffSections),
						"selected-path": selectedPath.value
					}, null, 8, [
						"class",
						"sections",
						"selected-path"
					])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(AgentSkillFileNav_default, {
						class: normalizeClass(isFormStep.value && unref($style).fileColumn),
						skill: displayedSkill.value,
						"selected-path": selectedPath.value,
						"add-reference-disabled": !canAddReference.value,
						"read-only": editorLocked.value || !!unref(viewedVersion),
						"invalid-paths": visibleInvalidReferencePaths.value,
						onAddReference,
						onRemoveReference,
						onSelect: _cache[9] || (_cache[9] = ($event) => selectedPath.value = $event)
					}, null, 8, [
						"class",
						"skill",
						"selected-path",
						"add-reference-disabled",
						"read-only",
						"invalid-paths"
					]), (openBlock(), createBlock(AgentSkillViewer_default, {
						key: unref(viewedVersion)?.version ?? "latest",
						class: normalizeClass(isFormStep.value && unref($style).formColumn),
						skill: displayedSkill.value,
						"selected-path": selectedPath.value,
						disabled: editorLocked.value,
						"read-only": cannotEdit.value && !isPinned.value || !!unref(viewedVersion),
						errors: visibleErrors.value,
						"show-validation-warnings": submitted.value || openedWithMissingContent.value,
						"onSelect:path": _cache[11] || (_cache[11] = ($event) => selectedPath.value = $event),
						"onUpdate:skill": onSkillUpdate,
						"onUpdate:valid": onValidUpdate
					}, {
						"fields-start": withCtx(() => [createBaseVNode("div", {
							ref_key: "nameField",
							ref: nameField
						}, [createVNode(unref(N8nFormInput_default), {
							"model-value": skill.value.name,
							label: unref(i18n).baseText("agents.builder.skills.name.label"),
							name: "skill-name",
							required: "",
							"label-size": "small",
							maxlength: 128,
							placeholder: unref(i18n).baseText("agents.builder.skills.name.placeholder"),
							disabled: editorLocked.value,
							"data-testid": "agent-skill-name-input",
							"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => onSkillUpdate({ name: String($event ?? "") }))
						}, null, 8, [
							"model-value",
							"label",
							"placeholder",
							"disabled"
						]), visibleNameError.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "danger",
							"data-testid": "agent-skill-name-error"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(visibleNameError.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)], 512)]),
						_: 1
					}, 8, [
						"class",
						"skill",
						"selected-path",
						"disabled",
						"read-only",
						"errors",
						"show-validation-warnings"
					]))], 64))], 2)
				], 64)) : createCommentVNode("", true)]),
				_: 2
			}, [
				showScopeBadge.value && selectedScope.value ? {
					name: "titlePrefix",
					fn: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						disabled: scopeEditable.value || !__props.data.scopeLockedReason,
						content: __props.data.scopeLockedReason,
						placement: "bottom"
					}, {
						default: withCtx(() => [createVNode(unref(N8nActionDropdown_default), {
							items: scopeBadgeItems.value,
							disabled: !scopeEditable.value,
							placement: "bottom-start",
							"data-testid": "agent-skill-scope",
							onSelect: onHeaderMenuSelect
						}, {
							activator: withCtx(() => [createVNode(unref(N8nBadge_default), {
								variant: "outline",
								clickable: scopeEditable.value,
								class: normalizeClass(unref($style).scopeBadge),
								"data-testid": "agent-skill-scope-badge"
							}, {
								leading: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: selectedScope.value.icon,
									size: "small"
								}, null, 8, ["icon"])]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(selectedScope.value.label), 1)]),
								_: 1
							}, 8, ["clickable", "class"])]),
							_: 1
						}, 8, ["items", "disabled"])]),
						_: 1
					}, 8, ["disabled", "content"])]),
					key: "0"
				} : void 0,
				isFormStep.value && headerMenuItems.value.length > 0 ? {
					name: "titleSuffix",
					fn: withCtx(() => [createVNode(unref(N8nActionDropdown_default), {
						items: headerMenuItems.value,
						placement: "bottom-start",
						"activator-icon": "ellipsis",
						"activator-size": "small",
						"data-testid": "agent-skill-header-menu",
						onSelect: onHeaderMenuSelect
					}, {
						menuItem: withCtx((item) => [item.id === "attach" ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(unref($style).menuSwitchRow)
						}, [createTextVNode(toDisplayString(item.label) + " ", 1), createVNode(unref(N8nSwitch_default), {
							"model-value": true,
							class: normalizeClass(unref($style).menuSwitch),
							tabindex: "-1",
							"aria-hidden": "true",
							"data-testid": "agent-skill-menu-attach-switch"
						}, null, 8, ["class"])], 2)) : item.id === "delete" && __props.data.deleteDisabledReason ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 1,
							content: __props.data.deleteDisabledReason,
							placement: "right"
						}, {
							default: withCtx(() => [createBaseVNode("span", _hoisted_1, toDisplayString(item.label), 1)]),
							_: 2
						}, 1032, ["content"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(item.label), 1)], 64))]),
						_: 1
					}, 8, ["items"])]),
					key: "1"
				} : void 0,
				isFormStep.value && (showAssistantToggle.value || showMcpToggle.value || latestVersion.value) ? {
					name: "headerActions",
					fn: withCtx(() => [
						showAssistantToggle.value ? (openBlock(), createBlock(unref(N8nSwitch_default), {
							key: 0,
							id: "skill-assistant-availability",
							modelValue: availableToAssistant.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => availableToAssistant.value = $event),
							label: unref(i18n).baseText("settings.context.skills.assistant.toggle"),
							disabled: editorLocked.value,
							"data-testid": "skill-assistant-availability"
						}, null, 8, [
							"modelValue",
							"label",
							"disabled"
						])) : createCommentVNode("", true),
						showMcpToggle.value ? (openBlock(), createBlock(unref(N8nSwitch_default), {
							key: 1,
							id: "skill-available-to-mcp",
							modelValue: availableToMCP.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => availableToMCP.value = $event),
							label: unref(i18n).baseText("settings.context.skills.modal.mcp.toggle"),
							disabled: editorLocked.value,
							"data-testid": "skill-available-to-mcp"
						}, {
							label: withCtx(({ label }) => [createTextVNode(toDisplayString(label) + " ", 1), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.context.skills.modal.mcp.tooltip") }, {
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "circle-help",
									size: "small",
									"data-testid": "skill-available-to-mcp-help"
								})]),
								_: 1
							}, 8, ["content"])]),
							_: 1
						}, 8, [
							"modelValue",
							"label",
							"disabled"
						])) : createCommentVNode("", true),
						latestVersion.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 2,
							variant: "ghost",
							size: "small",
							class: normalizeClass(versionsOpen.value && unref($style).versionsButtonActive),
							"aria-pressed": versionsOpen.value,
							"aria-label": unref(i18n).baseText("agents.builder.skills.versions.toggle"),
							"data-testid": "agent-skill-versions-button",
							onClick: _cache[2] || (_cache[2] = ($event) => versionsOpen.value = !versionsOpen.value)
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "history",
								size: 16
							})]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(versionsButtonLabel.value), 1)]),
							_: 1
						}, 8, [
							"class",
							"aria-pressed",
							"aria-label"
						])) : createCommentVNode("", true)
					]),
					key: "2"
				} : void 0,
				showVersionsPanel.value && unref(versions) ? {
					name: "sidePanel",
					fn: withCtx(() => [createVNode(SkillVersionTimeline_default, {
						versions: unref(versions),
						"shown-version": unref(viewedVersion)?.version ?? baseVersion.value,
						"can-restore": canRestore.value,
						onOpen: onOpenVersion,
						onRestore: restoreVersion,
						onCompare: _cache[12] || (_cache[12] = ($event) => onCompare($event, unref(viewedVersion)?.version ?? baseVersion.value ?? versionOptions.value[0].value)),
						agent: timelineAgent.value,
						onUse: useVersion,
						onUseLatest: onUseLatestVersion
					}, null, 8, [
						"versions",
						"shown-version",
						"can-restore",
						"agent"
					])]),
					key: "3"
				} : void 0,
				showRemove.value ? {
					name: "footerLeft",
					fn: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						"data-testid": "agent-skill-remove",
						onClick: onRemove
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: __props.data.skillRefsEnabled ? "unlink" : "trash-2",
							size: 16
						}, null, 8, ["icon"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(removeLabel.value), 1)]),
						_: 1
					})]),
					key: "4"
				} : syncedFrom.value && step.value === "edit" ? {
					name: "footerLeft",
					fn: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						href: syncedFrom.value?.webUrl,
						target: "_blank",
						"data-testid": "agent-skill-open-in-github"
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "external-link",
							size: 16
						})]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("settings.context.skills.synced.openInGithub")), 1)]),
						_: 1
					}, 8, ["href"]), canStopSyncing.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "ghost",
						disabled: isSaving.value || isStoppingSync.value,
						"data-testid": "agent-skill-stop-syncing",
						onClick: onStopSyncing
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "unlink",
							size: 16
						})]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("settings.context.skills.stopSyncing.action")), 1)]),
						_: 1
					}, 8, ["disabled"])) : createCommentVNode("", true)]),
					key: "5"
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
					key: "6"
				} : void 0,
				footerHint.value ? {
					name: "footerBeforeCancel",
					fn: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(unref($style).footerHint),
						"data-testid": "agent-skill-footer-hint"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(footerHint.value), 1)]),
						_: 1
					}, 8, ["class"])]),
					key: "7"
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
					})) : footerPrimaryAction.value === "viewing" && unref(viewedVersion) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createVNode(unref(N8nButton_default), {
							variant: "outline",
							"data-testid": "agent-skill-version-done",
							onClick: _cache[13] || (_cache[13] = ($event) => viewedVersion.value = null)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.done")), 1)]),
							_: 1
						}),
						timelineAgent.value && unref(viewedVersion).version !== timelineAgent.value.draft ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "outline",
							"data-testid": "agent-skill-version-use",
							onClick: _cache[14] || (_cache[14] = ($event) => useVersion(unref(viewedVersion).version))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.useVersionIn", { interpolate: {
								version: unref(viewedVersion).version,
								agent: timelineAgent.value.name
							} })), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						canRestore.value && unref(viewedVersion).version !== unref(versions)?.[0]?.version ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "solid",
							loading: isSaving.value,
							"data-testid": "agent-skill-version-restore",
							onClick: _cache[15] || (_cache[15] = ($event) => restoreVersion(unref(viewedVersion).version))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.versions.restore")), 1)]),
							_: 1
						}, 8, ["loading"])) : createCommentVNode("", true)
					], 64)) : footerPrimaryAction.value === "useLatest" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 2,
						variant: "solid",
						"data-testid": "agent-skill-use-latest",
						onClick: onUseLatestVersion
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.useLatest")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 3,
						variant: "solid",
						disabled: !hasChanges.value || defaultNameLoading.value || !!accessWarning.value || isPinned.value,
						loading: isSaving.value,
						"data-testid": "agent-skill-create-save",
						onClick: onSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.save")), 1)]),
						_: 1
					}, 8, ["disabled", "loading"]))]),
					key: "8"
				} : void 0
			]), 1032, [
				"open",
				"step",
				"title",
				"show-back",
				"show-footer",
				"show-cancel",
				"cancel-label",
				"header-divider",
				"header-divider-tone",
				"body-flush",
				"fixed-size",
				"busy"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_nwziy_2",
	picker: "_picker_nwziy_9",
	callout: "_callout_nwziy_14",
	menuItem: "_menuItem_nwziy_19",
	deleteItem: "_deleteItem_nwziy_23",
	menuSwitchRow: "_menuSwitchRow_nwziy_27",
	menuSwitch: "_menuSwitch_nwziy_27",
	pinnedBar: "_pinnedBar_nwziy_39",
	pinnedIcon: "_pinnedIcon_nwziy_49",
	pinnedText: "_pinnedText_nwziy_54",
	barAction: "_barAction_nwziy_58",
	viewingBar: "_viewingBar_nwziy_63",
	compareBar: "_compareBar_nwziy_73",
	compareSelect: "_compareSelect_nwziy_82",
	compareDone: "_compareDone_nwziy_86",
	versionsButtonActive: "_versionsButtonActive_nwziy_90",
	calloutInset: "_calloutInset_nwziy_95",
	contentFlush: "_contentFlush_nwziy_101",
	fileColumn: "_fileColumn_nwziy_109",
	formColumn: "_formColumn_nwziy_113",
	footerHint: "_footerHint_nwziy_118",
	scopeBadge: "_scopeBadge_nwziy_123"
} }]]);
//#endregion
export { AgentSkillModal_default as default };
