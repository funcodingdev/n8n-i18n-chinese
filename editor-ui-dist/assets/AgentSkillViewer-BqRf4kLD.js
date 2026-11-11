import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Lf as reactive, Rd as computed, Vd as createCommentVNode, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, mf as renderSlot, np as init_shared_esm_bundler, pf as renderList, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, DD as N8nMarkdown_default, GC as AGENT_SKILL_REFERENCE_CONTENT_MAX_LENGTH, HC as AGENT_SKILL_DESCRIPTION_MAX_LENGTH, HO as _plugin_vue_export_helper_default, LD as N8nFormInput_default, RO as N8nButton_default, UC as AGENT_SKILL_INSTRUCTIONS_MAX_LENGTH, VD as N8nInputLabel_default, oE as MarkdownEditor_default, qO as useI18n, zO as N8nIcon_default } from "./app-MbtXRI_F.js";
//#region src/features/agents/components/skillVersions/SkillDiffCount.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var SkillDiffCount_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillDiffCount",
	props: {
		count: {},
		hideZero: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.count && (__props.count.added > 0 || __props.count.removed > 0) ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.counts),
				"data-testid": "skill-diff-count"
			}, [!__props.hideZero || __props.count.removed > 0 ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.removed)
			}, "−" + toDisplayString(__props.count.removed), 3)) : createCommentVNode("", true), !__props.hideZero || __props.count.added > 0 ? (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.added)
			}, "+" + toDisplayString(__props.count.added), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": {
	counts: "_counts_pkrbl_1",
	removed: "_removed_pkrbl_8",
	added: "_added_pkrbl_12"
} }]]);
//#endregion
//#region src/features/agents/components/AgentSkillFileNav.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["aria-label"];
var _hoisted_2 = ["aria-current"];
var _hoisted_3 = [
	"aria-current",
	"aria-label",
	"data-testid",
	"onClick"
];
var SKILL_FILE$1 = "SKILL.md";
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
		invalidPaths: { default: () => [] },
		changeCounts: {}
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
		/** The name a screen reader reads for a reference row. The status icon itself is hidden from it. */
		function referenceLabel(path) {
			const label = isInvalid(path) ? i18n.baseText("agents.builder.skills.references.invalidLabel", { interpolate: { path } }) : path;
			const status = props.changeCounts?.[path]?.status;
			if (!status) return label;
			return `${label}, ${i18n.baseText(status === "added" ? "agents.builder.skills.versions.fileAdded" : "agents.builder.skills.versions.fileDeleted")}`;
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
				class: normalizeClass([_ctx.$style.item, isSelected(SKILL_FILE$1) && _ctx.$style.selected]),
				"aria-current": isSelected(SKILL_FILE$1) ? "page" : void 0,
				"data-testid": "agent-skill-file-nav-item",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("select", SKILL_FILE$1))
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: "file-text",
					size: 16,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]),
				createVNode(unref(N8nText_default), {
					size: "medium",
					class: normalizeClass(_ctx.$style.path)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(SKILL_FILE$1))]),
					_: 1
				}, 8, ["class"]),
				createVNode(SkillDiffCount_default, {
					count: props.changeCounts?.[SKILL_FILE$1],
					class: normalizeClass(_ctx.$style.count)
				}, null, 8, ["count", "class"])
			], 10, _hoisted_2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
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
					size: "small",
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
						"aria-label": referenceLabel(reference.path),
						"data-testid": testIdForPath(reference.path),
						onClick: ($event) => emit("select", reference.path)
					}, [
						createVNode(unref(N8nIcon_default), {
							icon: isInvalid(reference.path) ? "triangle-alert" : "file-text",
							size: 16,
							class: normalizeClass([_ctx.$style.icon, isInvalid(reference.path) && _ctx.$style.invalidIcon]),
							"data-testid": isInvalid(reference.path) ? `${testIdForPath(reference.path)}-invalid` : void 0
						}, null, 8, [
							"icon",
							"class",
							"data-testid"
						]),
						createVNode(unref(N8nText_default), {
							size: "medium",
							class: normalizeClass(_ctx.$style.path)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(reference.path), 1)]),
							_: 2
						}, 1032, ["class"]),
						props.changeCounts?.[reference.path] ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.count)
						}, [props.changeCounts[reference.path].status ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: props.changeCounts[reference.path].status === "added" ? "file-plus" : "file-minus",
							size: "small",
							class: normalizeClass(props.changeCounts[reference.path].status === "added" ? _ctx.$style.fileAdded : _ctx.$style.fileDeleted),
							"data-testid": `${testIdForPath(reference.path)}-${props.changeCounts[reference.path].status}`
						}, null, 8, [
							"icon",
							"class",
							"data-testid"
						])) : createCommentVNode("", true), createVNode(SkillDiffCount_default, {
							count: props.changeCounts[reference.path],
							"hide-zero": !!props.changeCounts[reference.path].status
						}, null, 8, ["count", "hide-zero"])], 2)) : createCommentVNode("", true)
					], 10, _hoisted_3), !props.readOnly ? (openBlock(), createBlock(unref(N8nButton_default), {
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
			], 2)], 10, _hoisted_1);
		};
	}
}), [["__cssModules", { "$style": {
	nav: "_nav_13ik9_1",
	section: "_section_13ik9_13",
	sectionHeader: "_sectionHeader_13ik9_19",
	item: "_item_13ik9_26",
	icon: "_icon_13ik9_44",
	referenceRow: "_referenceRow_13ik9_48",
	removeReference: "_removeReference_13ik9_56",
	reference: "_reference_13ik9_48",
	sectionTitle: "_sectionTitle_13ik9_74",
	addReference: "_addReference_13ik9_78",
	invalidIcon: "_invalidIcon_13ik9_91",
	selected: "_selected_13ik9_95",
	path: "_path_13ik9_100",
	count: "_count_13ik9_116",
	fileAdded: "_fileAdded_13ik9_123",
	fileDeleted: "_fileDeleted_13ik9_127"
} }]]);
//#endregion
//#region src/features/agents/components/AgentSkillViewer.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SKILL_FILE = "SKILL.md";
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
		selectedPath: { default: SKILL_FILE },
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
			config: { maximum: AGENT_SKILL_DESCRIPTION_MAX_LENGTH }
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
		const isSkillFileSelected = computed(() => props.selectedPath === SKILL_FILE);
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
						"container-class": _ctx.$style.resizable,
						"model-value": props.skill.instructions ?? "",
						placeholder: unref(i18n).baseText("agents.builder.skills.instructions.placeholder"),
						"show-toolbar": "floating",
						disabled: props.disabled,
						"max-height": "none",
						"data-testid": "agent-skill-instructions-editor",
						"onUpdate:modelValue": onInstructionsInput
					}, null, 8, [
						"class",
						"container-class",
						"model-value",
						"placeholder",
						"disabled"
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
					disabled: props.disabled,
					"max-height": "none",
					"data-testid": "agent-skill-reference-editor",
					"onUpdate:modelValue": onReferenceInput
				}, null, 8, [
					"class",
					"model-value",
					"placeholder",
					"disabled"
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
	panel: "_panel_1u7js_1",
	readOnlyField: "_readOnlyField_1u7js_10",
	readOnlyText: "_readOnlyText_1u7js_16",
	readOnlyMarkdown: "_readOnlyMarkdown_1u7js_22",
	field: "_field_1u7js_52",
	editor: "_editor_1u7js_58",
	resizable: "_resizable_1u7js_65",
	referenceEditor: "_referenceEditor_1u7js_73",
	editorLabel: "_editorLabel_1u7js_77",
	editorMeta: "_editorMeta_1u7js_83",
	characterCount: "_characterCount_1u7js_89"
} }]]);
//#endregion
export { AgentSkillFileNav_default as n, SkillDiffCount_default as r, AgentSkillViewer_default as t };
