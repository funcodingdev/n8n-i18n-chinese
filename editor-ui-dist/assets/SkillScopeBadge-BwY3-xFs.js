import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, CO as N8nBadge_default, GO as useI18n, LO as N8nIcon_default, Sh as useProjectsStore, yh as splitName } from "./app-DGoK9ugD.js";
//#region src/features/settings/context/skills.utils.ts
var PROJECT_SCOPE_PREFIX = "project:";
/** The scope and project of a scope picker value. */
function parseScope(value) {
	if (value.startsWith("project:")) return {
		scope: "project",
		projectId: value.slice(8)
	};
	return { scope: "instance" };
}
/** How the badge and the modal name the scope of a skill. */
function useSkillScopeDisplay() {
	const i18n = useI18n();
	const projectsStore = useProjectsStore();
	function projectLabel(projectId, projectName, projectType) {
		if (projectId === projectsStore.personalProject?.id) return i18n.baseText("settings.context.skills.scope.personalProject");
		if (projectType === "personal" && projectName) {
			const { name, email } = splitName(projectName);
			return name ?? email ?? projectName;
		}
		return projectName ?? i18n.baseText("settings.context.skills.scope.project");
	}
	function scopeDisplay(skill) {
		switch (skill.scope) {
			case "instance": return {
				icon: "globe",
				label: i18n.baseText("settings.context.skills.scope.instance")
			};
			case "project":
				if (!skill.projectId) return {
					icon: "layers",
					label: i18n.baseText("settings.context.skills.scope.project")
				};
				return {
					icon: skill.projectType === "personal" ? "user" : "layers",
					label: projectLabel(skill.projectId, skill.projectName, skill.projectType)
				};
		}
	}
	return { scopeDisplay };
}
/**
* Why a skill cannot be deleted now, or undefined when it can. The backend refuses to
* delete a skill that an agent uses, so the action is off before the user tries.
*/
function useSkillDeleteRule() {
	const i18n = useI18n();
	function deleteBlockedReason(skill) {
		if (!skill.canDelete) return i18n.baseText("settings.context.skills.readOnly");
		if (skill.usedByAgents === 0) return void 0;
		return i18n.baseText("settings.context.skills.delete.inUse", {
			interpolate: { count: skill.usedByAgents },
			adjustToNumber: skill.usedByAgents
		});
	}
	return { deleteBlockedReason };
}
/** The text for each reason code. A code that the editor does not know gets the generic text. */
var SKILL_SOURCE_REASON_KEYS = {
	invalid_url: "settings.context.skills.connect.error.invalidUrl",
	unsupported_provider: "settings.context.skills.connect.error.unsupportedProvider",
	not_found: "settings.context.skills.connect.error.notFound",
	rate_limited: "settings.context.skills.connect.error.rateLimited",
	unreachable: "settings.context.skills.connect.error.unreachable",
	no_skills_found: "settings.context.skills.connect.error.noSkillsFound",
	too_many_skills: "settings.context.skills.connect.error.tooManySkills",
	too_deep: "settings.context.skills.connect.error.tooDeep",
	archive_too_large: "settings.context.skills.connect.error.archiveTooLarge",
	parse_error: "settings.context.skills.connect.error.parseError",
	blocked_by_check: "settings.context.skills.connect.error.blockedByCheck",
	review_required: "settings.context.skills.connect.error.reviewRequired",
	name_taken: "settings.context.skills.connect.error.nameTaken",
	duplicate_source: "settings.context.skills.connect.error.duplicateSource",
	credential_invalid: "settings.context.skills.connect.error.credentialInvalid",
	credential_missing: "settings.context.skills.connect.error.credentialMissing",
	credential_out_of_scope: "settings.context.skills.connect.error.credentialOutOfScope",
	host_blocked: "settings.context.skills.connect.error.hostBlocked"
};
/** The short form in the import toast, as in "Could not add seo-check (reason)". */
var FAILED_SKILL_REASON_KEYS = {
	name_taken: "settings.context.skills.connect.failed.reason.nameTaken",
	not_found: "settings.context.skills.connect.failed.reason.notFound",
	parse_error: "settings.context.skills.connect.failed.reason.parseError",
	blocked_by_check: "settings.context.skills.connect.failed.reason.blockedByCheck",
	review_required: "settings.context.skills.connect.failed.reason.reviewRequired",
	rate_limited: "settings.context.skills.connect.failed.reason.rateLimited",
	unreachable: "settings.context.skills.connect.failed.reason.unreachable"
};
/** The text for each rule of the security check. The server text is English only. */
var SKILL_SCAN_RULE_KEYS = {
	invalid_skill: "settings.context.skills.connect.check.rule.invalidSkill",
	over_limit: "settings.context.skills.connect.check.rule.overLimit",
	file_skipped: "settings.context.skills.connect.check.rule.fileSkipped",
	hidden_unicode: "settings.context.skills.connect.check.rule.hiddenUnicode",
	new_url: "settings.context.skills.connect.check.rule.newUrl",
	permission_change: "settings.context.skills.connect.check.rule.permissionChange",
	suspicious_phrase: "settings.context.skills.connect.check.rule.suspiciousPhrase",
	lossy_conversion: "settings.context.skills.connect.check.rule.lossyConversion"
};
/** A link to a branch, a folder on a branch, or a file on a branch. */
var GITHUB_BRANCH_LINK = /^https?:\/\/(www\.)?github\.com\/[\w.-]+\/[\w.-]+\/(tree|blob)\/[^/?#]+/i;
function isKnownReason(reason) {
	return typeof reason === "string" && reason in SKILL_SOURCE_REASON_KEYS;
}
/** Translated text for the reason codes of Skill Sync, for the link, the picker and the toast. */
function useSkillSourceReasons() {
	const i18n = useI18n();
	/**
	* A full sentence for why n8n cannot read a link or one skill in it. `link` is the link the
	* user pasted: a well-formed branch link with `invalid_url` means the branch is missing.
	* `withCredential` says that the read used a credential.
	*/
	function reasonText(reason, link, { withCredential = false } = {}) {
		if (!isKnownReason(reason)) return i18n.baseText("settings.context.skills.connect.error.discover");
		if (reason === "not_found" && withCredential) return i18n.baseText("settings.context.skills.connect.error.notFoundWithCredential");
		if (reason === "invalid_url" && link && GITHUB_BRANCH_LINK.test(link)) return i18n.baseText("settings.context.skills.connect.error.branchNotFound");
		if (reason === "too_many_skills") return i18n.baseText("settings.context.skills.connect.error.tooManySkills", { interpolate: { count: 200 } });
		return i18n.baseText(SKILL_SOURCE_REASON_KEYS[reason]);
	}
	/** The short reason for a picked skill that did not come in. */
	function failedSkillReason(reason) {
		return i18n.baseText(FAILED_SKILL_REASON_KEYS[reason] ?? "settings.context.skills.connect.failed.reason.other");
	}
	/**
	* The findings that need review or block the skill, each rule and file one time. `info`
	* findings change nothing, and the picker lists skipped files on their own line.
	*/
	function findingsText(findings) {
		const texts = findings.filter((finding) => finding.severity !== "info").map(({ rule, file }) => {
			const finding = i18n.baseText(SKILL_SCAN_RULE_KEYS[rule]);
			return file ? i18n.baseText("settings.context.skills.connect.check.findingInFile", { interpolate: {
				finding,
				file
			} }) : finding;
		});
		return [...new Set(texts)].join(". ");
	}
	/**
	* The domains that a skill links to. At import a link needs no review, but the user still
	* sees where the skill can send an agent.
	*/
	function linkedDomainsText(findings) {
		const domains = new Set(findings.flatMap((finding) => finding.rule === "new_url" && finding.domain ? [finding.domain] : []));
		if (domains.size === 0) return "";
		return i18n.baseText("settings.context.skills.connect.check.linksTo", { interpolate: { domains: [...domains].join(", ") } });
	}
	return {
		reasonText,
		failedSkillReason,
		findingsText,
		linkedDomainsText
	};
}
//#endregion
//#region src/features/settings/context/components/SkillScopeBadge.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SkillScopeBadge_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SkillScopeBadge",
	props: { skill: {} },
	setup(__props) {
		const props = __props;
		const { scopeDisplay } = useSkillScopeDisplay();
		const display = computed(() => scopeDisplay(props.skill));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nBadge_default), {
				variant: "outline",
				class: normalizeClass(_ctx.$style.badge),
				"data-test-id": "skill-scope-badge"
			}, {
				leading: withCtx(() => [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: display.value.icon,
					size: "small"
				}, null, 8, ["class", "icon"])]),
				default: withCtx(() => [createTextVNode(" " + toDisplayString(display.value.label), 1)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	badge: "_badge_rs0ww_1",
	icon: "_icon_rs0ww_9"
} }]]);
//#endregion
export { useSkillScopeDisplay as a, useSkillDeleteRule as i, PROJECT_SCOPE_PREFIX as n, useSkillSourceReasons as o, parseScope as r, SkillScopeBadge_default as t };
