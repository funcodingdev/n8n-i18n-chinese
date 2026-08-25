//#region ../@n8n/frontend-constants/src/views.ts
/**
* Router view identifiers, shared across the frontend.
*
* Declared as a plain `enum` (not a `const enum`) so this package's emitted
* `dist` declarations contain a regular `declare enum` backed by a real runtime
* object. A `const enum` would emit an *ambient* const enum, which downstream
* packages compiled with `isolatedModules: true` cannot read (TS2748) — and being
* consumed from `dist` across the package boundary is this package's entire
* purpose. A plain `enum` also preserves the nominal enum-member types the rest of
* the frontend relies on, so relocating `VIEWS` here is behavior-preserving.
*
* The repo's default lint bans raw enums in favor of `const enum` for runtime
* overhead; that guidance is inverted here because `const enum` is precisely what
* breaks dist consumption. The `no-restricted-syntax` rule (and the camelCase
* naming-convention rule, since view identifiers are UPPER_CASE by convention)
* are relaxed for this file in `eslint.config.mjs`.
*
* `editor-ui` re-exports this from `@/app/constants` for existing importers.
*/
var VIEWS = /* @__PURE__ */ function(VIEWS) {
	VIEWS["HOMEPAGE"] = "Homepage";
	VIEWS["COLLECTION"] = "TemplatesCollectionView";
	VIEWS["EXECUTIONS"] = "Executions";
	VIEWS["EXECUTION_PREVIEW"] = "ExecutionPreview";
	VIEWS["EXECUTION_DEBUG"] = "ExecutionDebug";
	VIEWS["EXECUTION_HOME"] = "ExecutionsLandingPage";
	VIEWS["TEMPLATE"] = "TemplatesWorkflowView";
	VIEWS["TEMPLATE_SETUP"] = "TemplatesWorkflowSetupView";
	VIEWS["TEMPLATES"] = "TemplatesSearchView";
	VIEWS["CREDENTIALS"] = "CredentialsView";
	VIEWS["NEW_WORKFLOW"] = "NodeViewNew";
	VIEWS["WORKFLOW"] = "NodeViewExisting";
	VIEWS["DEMO"] = "WorkflowDemo";
	VIEWS["DEMO_DIFF"] = "WorkflowDemoDiff";
	VIEWS["TEMPLATE_IMPORT"] = "WorkflowTemplate";
	VIEWS["WORKFLOW_ONBOARDING"] = "WorkflowOnboarding";
	VIEWS["SIGNIN"] = "SigninView";
	VIEWS["SIGNUP"] = "SignupView";
	VIEWS["SIGNOUT"] = "SignoutView";
	VIEWS["SETUP"] = "SetupView";
	VIEWS["FORGOT_PASSWORD"] = "ForgotMyPasswordView";
	VIEWS["CHANGE_PASSWORD"] = "ChangePasswordView";
	VIEWS["SETTINGS"] = "Settings";
	VIEWS["USERS_SETTINGS"] = "UsersSettings";
	VIEWS["LDAP_SETTINGS"] = "LdapSettings";
	VIEWS["PERSONAL_SETTINGS"] = "PersonalSettings";
	VIEWS["SECURITY_SETTINGS"] = "SecuritySettings";
	VIEWS["API_SETTINGS"] = "APISettings";
	VIEWS["NOT_FOUND"] = "NotFoundView";
	VIEWS["COMMUNITY_NODES"] = "CommunityNodes";
	VIEWS["WORKFLOWS"] = "WorkflowsView";
	VIEWS["WORKFLOW_EXECUTIONS"] = "WorkflowExecutions";
	VIEWS["EVALUATION"] = "Evaluation";
	VIEWS["EVALUATION_EDIT"] = "EvaluationEdit";
	VIEWS["EVALUATION_RUNS_DETAIL"] = "EvaluationRunsDetail";
	VIEWS["EVALUATION_COLLECTION_COMPARE"] = "EvaluationCollectionCompare";
	VIEWS["USAGE"] = "Usage";
	VIEWS["LOG_STREAMING_SETTINGS"] = "LogStreamingSettingsView";
	VIEWS["OPENTELEMETRY_SETTINGS"] = "SettingsOpenTelemetryView";
	VIEWS["SSO_SETTINGS"] = "SSoSettings";
	VIEWS["ENCRYPTION_KEYS_SETTINGS"] = "EncryptionKeysSettings";
	VIEWS["EXTERNAL_SECRETS_SETTINGS"] = "ExternalSecretsSettings";
	VIEWS["SAML_ONBOARDING"] = "SamlOnboarding";
	VIEWS["SOURCE_CONTROL"] = "SourceControl";
	VIEWS["MFA_VIEW"] = "MfaView";
	VIEWS["WORKFLOW_HISTORY"] = "WorkflowHistory";
	VIEWS["WORKER_VIEW"] = "WorkerView";
	VIEWS["PROJECTS"] = "Projects";
	VIEWS["PROJECT_DETAILS"] = "ProjectDetails";
	VIEWS["PROJECTS_WORKFLOWS"] = "ProjectsWorkflows";
	VIEWS["PROJECTS_CREDENTIALS"] = "ProjectsCredentials";
	VIEWS["PROJECT_SETTINGS"] = "ProjectSettings";
	VIEWS["PROJECTS_EXECUTIONS"] = "ProjectsExecutions";
	VIEWS["ROLES_SETTINGS"] = "RolesSettingsView";
	VIEWS["PROJECT_ROLES_SETTINGS"] = "ProjectRolesSettingsView";
	VIEWS["PROJECT_ROLE_SETTINGS"] = "ProjectRoleSettingsView";
	VIEWS["PROJECT_NEW_ROLE"] = "ProjectNewRoleView";
	VIEWS["PROJECT_ROLE_VIEW"] = "ProjectRoleViewView";
	VIEWS["INSTANCE_NEW_ROLE"] = "InstanceNewRoleView";
	VIEWS["INSTANCE_ROLE_SETTINGS"] = "InstanceRoleSettingsView";
	VIEWS["INSTANCE_ROLE_VIEW"] = "InstanceRoleViewView";
	VIEWS["PROJECTS_VARIABLES"] = "ProjectsVariables";
	VIEWS["HOME_VARIABLES"] = "HomeVariables";
	VIEWS["FOLDERS"] = "Folders";
	VIEWS["PROJECTS_FOLDERS"] = "ProjectsFolders";
	VIEWS["INSIGHTS"] = "Insights";
	VIEWS["SHARED_WITH_ME"] = "SharedWithMe";
	VIEWS["SHARED_WORKFLOWS"] = "SharedWorkflows";
	VIEWS["SHARED_CREDENTIALS"] = "SharedCredentials";
	VIEWS["ENTITY_NOT_FOUND"] = "EntityNotFound";
	VIEWS["ENTITY_UNAUTHORIZED"] = "EntityUnAuthorized";
	VIEWS["PRE_BUILT_AGENT_TEMPLATES"] = "PreBuiltAgentTemplates";
	VIEWS["AI_SETTINGS"] = "AISettingsView";
	VIEWS["AI_GATEWAY_SETTINGS"] = "AIGatewaySettingsView";
	VIEWS["OAUTH_CONSENT"] = "OAuthConsent";
	VIEWS["MIGRATION_REPORT"] = "MigrationReport";
	VIEWS["MIGRATION_RULE_REPORT"] = "MigrationRuleReport";
	VIEWS["RESOLVERS"] = "Resolvers";
	VIEWS["RESOURCE_CENTER"] = "ResourceCenter";
	return VIEWS;
}({});
//#endregion
export { VIEWS as t };
