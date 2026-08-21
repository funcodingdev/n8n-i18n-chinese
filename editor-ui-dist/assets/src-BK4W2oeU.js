import { $n as ZodUnion, Gn as ZodLazy, Hn as ZodArray, Jn as ZodObject, Kn as ZodNonOptional, Qn as ZodType, Un as ZodCatch, Wn as ZodDefault, Xn as ZodReadonly, Yn as ZodOptional, Zn as ZodRecord, ar as object, cr as union, er as _enum, ir as number, lr as unknown, nr as boolean, or as record, qn as ZodNullable, rr as literal, sr as string, tr as array } from "./src-Vot4VemC.js";
//#region ../../@n8n/telemetry/src/validate.ts
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function formatPath(path) {
	return path.map(String).join(".") || "(root)";
}
function isObjectSchema(schema) {
	return schema instanceof ZodObject;
}
function isUnionSchema(schema) {
	return schema instanceof ZodUnion;
}
function isArraySchema(schema) {
	return schema instanceof ZodArray;
}
function isRecordSchema(schema) {
	return schema instanceof ZodRecord;
}
function isWrappedSchema(schema) {
	return schema instanceof ZodOptional || schema instanceof ZodNullable || schema instanceof ZodDefault || schema instanceof ZodNonOptional || schema instanceof ZodCatch || schema instanceof ZodLazy;
}
function isReadonlySchema(schema) {
	return schema instanceof ZodReadonly;
}
function isSchema(value) {
	return value instanceof ZodType;
}
function getWrappedSchema(schema) {
	if (isWrappedSchema(schema)) return schema.unwrap();
	if (isReadonlySchema(schema)) return schema.def.innerType;
}
function getUnrecognizedPropertyIssues(schema, value, path = []) {
	const wrappedSchema = getWrappedSchema(schema);
	if (wrappedSchema !== void 0) return getUnrecognizedPropertyIssues(wrappedSchema, value, path);
	if (isObjectSchema(schema)) {
		if (!isRecord(value)) return [];
		const issues = [];
		for (const [key, childValue] of Object.entries(value)) {
			const childPath = [...path, key];
			const childSchema = schema.shape[key];
			if (childSchema !== void 0) issues.push(...getUnrecognizedPropertyIssues(childSchema, childValue, childPath));
			else if (schema.def.catchall === void 0) issues.push(`${formatPath(childPath)}: unrecognized property`);
			else if (isSchema(schema.def.catchall)) issues.push(...getUnrecognizedPropertyIssues(schema.def.catchall, childValue, childPath));
		}
		return issues;
	}
	if (isArraySchema(schema)) {
		if (!Array.isArray(value)) return [];
		return value.flatMap((item, index) => getUnrecognizedPropertyIssues(schema.element, item, [...path, index]));
	}
	if (isRecordSchema(schema)) {
		if (!isRecord(value)) return [];
		return Object.entries(value).flatMap(([key, childValue]) => getUnrecognizedPropertyIssues(schema.valueType, childValue, [...path, key]));
	}
	if (isUnionSchema(schema)) {
		const matchingOptions = schema.options.filter((option) => option.safeParse(value).success);
		if (matchingOptions.length === 0) return [];
		return matchingOptions.map((option) => getUnrecognizedPropertyIssues(option, value, path)).reduce((fewestIssues, optionIssues) => optionIssues.length < fewestIssues.length ? optionIssues : fewestIssues);
	}
	return [];
}
function getEventValidationError(event, properties) {
	const issues = [];
	const result = event.properties.safeParse(properties);
	if (!result.success) for (const issue of result.error.issues) issues.push(`${issue.path.map(String).join(".") || "(root)"}: ${issue.message}`);
	issues.push(...getUnrecognizedPropertyIssues(event.properties, properties));
	if (issues.length === 0) return null;
	return `Telemetry event "${event.name}" failed schema validation: ${issues.join("; ")}`;
}
//#endregion
//#region ../../@n8n/telemetry/src/define.ts
function defineTelemetryEvents(events) {
	const result = {};
	for (const [key, event] of Object.entries(events)) result[key] = {
		...event,
		getValidationError: (properties) => getEventValidationError(event, properties)
	};
	return result;
}
//#endregion
//#region ../../@n8n/telemetry/src/events/agents.ts
var builderSessionIdentity = {
	agent_id: string(),
	user_id: string(),
	thread_id: string().optional().describe("Instance AI thread hosting the builder session"),
	run_id: string().optional().describe("Instance AI run that triggered this builder call")
};
var agentStatus = _enum(["draft", "production"]);
var agentRunType = _enum(["test", "production"]).describe("production means the run executed the published snapshot; test means it ran a draft");
var agentConfigurationTelemetry = {
	model: string().nullable(),
	channels: array(string()),
	tool_types: array(string()),
	tool_count: number(),
	num_skills: number(),
	memory_type: _enum([
		"none",
		"n8n",
		"n8n_observational",
		"n8n_episodic",
		"n8n_observational_episodic"
	])
};
var builderPreWriteStatus = agentStatus.describe("Agent status before the builder's write");
var sessionId = string().describe("Editor push session id (pushRef)");
var agentConfigFingerprint = object({
	instructions: string(),
	tools: array(string()),
	skills: array(string()),
	tasks: array(string()),
	triggers: array(string()),
	vector_stores: array(string()),
	memory: object({
		enabled: boolean(),
		storage: literal("n8n")
	}).nullable(),
	model: string().nullable(),
	config_version: string()
});
var toolIdentity = {
	node_type: string().optional(),
	workflow: string().optional(),
	custom_id: string().optional(),
	server_name: string().optional()
};
var optionalAgentId = string().optional();
var agentCapabilityKind = _enum([
	"channel",
	"tool",
	"mcpServer",
	"skill",
	"task",
	"subAgent",
	"vectorStore"
]);
var agentConfigPart = _enum([
	"instructions",
	"model",
	"credential",
	"memory",
	"name",
	"config",
	"tools",
	"providerTools",
	"skills",
	"tasks",
	"triggers",
	"subAgents",
	"mcpServers",
	"vectorStores"
]);
/** Identity carried by every per-surface agent lifecycle event. */
var agentActorIdentity = {
	agent_id: string(),
	project_id: string(),
	user_id: string().describe("The acting user, on every surface including MCP")
};
/**
* What the agent looked like at the moment of the event. Shared by the write
* events and the publish events, using the same names and semantics as
* "Agent setup completed", so an agent's profile lines up across its whole
* lifecycle.
*/
var agentCapabilityProfile = {
	capability_kinds: array(agentCapabilityKind),
	capability_count: number(),
	tool_count: number(),
	skill_count: number(),
	sub_agent_count: number(),
	mcp_server_count: number(),
	vector_store_count: number(),
	task_count: number(),
	trigger_count: number(),
	model: string().nullable(),
	tool_types: array(string()).describe("Tool types, never user-authored tool names")
};
/**
* Shared by the six creation and modification events, which differ only in
* which surface wrote and whether the write was the agent's first — so they
* union into one picture of every agent write. `event_version` is per-event.
*/
var agentWrite = {
	...agentActorIdentity,
	...agentCapabilityProfile,
	changed_parts: array(agentConfigPart).describe("Config parts this save actually changed. \"credential\" is the model credential, which the retired \"User edited agent config\" reported as part \"model\". \"config\" is the feature block: web search and prompt caching. \"providerTools\" is the provider-native tools map, including web-search tool settings reconciled from config.webSearch."),
	has_published_version: boolean().describe("Whether a live published version exists; stable across an editing session. Always false on the creation events, which is what makes the six safe to union.")
};
/**
* Shared by the three publish events. `republish` activates an older snapshot
* — a rollback rather than shipping new work — so a "published" count that
* should mean the latter must exclude it. `channel_connect` and `slack_setup`
* are retained only for compatibility with historical auto-publish rows.
*/
var agentPublishTrigger = _enum([
	"explicit",
	"republish",
	"channel_connect",
	"slack_setup"
]).describe("What caused the publish, as opposed to who performed it. channel_connect and slack_setup are historical values only.");
var agentPublish = {
	...agentActorIdentity,
	...agentCapabilityProfile,
	trigger: agentPublishTrigger,
	version_id: string().describe("AgentHistory versionId that became active")
};
var AGENTS_TELEMETRY = defineTelemetryEvents({
	AGENT_SETUP_COMPLETED: {
		name: "Agent setup completed",
		description: "The first time an agent reached a complete setup: it passes the same validation the Publish button requires, and has at least one configured capability. Fires at most once per agent, guarded by the persisted `agents.setupCompletedAt`. Emitted from the config-save path, with the publish path as a backstop so a published agent is always marked first.",
		properties: object({
			agent_id: string(),
			project_id: string(),
			user_id: string().optional().describe("Absent for builder writes made without an acting user"),
			capability_kinds: array(agentCapabilityKind).describe("Capability kinds with at least one configured entry"),
			capability_count: number().describe("Total configured capabilities across all kinds"),
			tool_count: number(),
			skill_count: number(),
			sub_agent_count: number(),
			mcp_server_count: number().describe("MCP servers with a URL set"),
			vector_store_count: number(),
			task_count: number(),
			trigger_count: number().describe("Configured chat integrations; draft channels excluded"),
			status: agentStatus
		})
	},
	AGENT_EXECUTION_COUNT: {
		name: "Agent execution count",
		description: "Six-hourly pulse of aggregate agent usage, bucketed by agent, run type and optional user. event_version 2 added run_type; version 1 rows are a mix of test and production and must not be read as production. token_count is broader than \"Agent session metrics\".cost_sum: it also covers LLM calls belonging to no single turn (title generation, observational/episodic memory, embeddings).",
		properties: object({
			event_version: literal("2"),
			agent_id: string(),
			user_id: string().optional().describe("Present only for runs with an n8n user — absent for chat integrations and cron"),
			run_type: agentRunType,
			message_count: number().describe("Fresh top-level user turns; delegated child runs excluded"),
			token_count: number().describe("Includes LLM calls belonging to no turn (title generation, memory, embeddings), so runs higher than \"Agent session metrics\".token_count_sum"),
			tool_call_count: number()
		})
	},
	AGENT_SESSION_METRICS: {
		name: "Agent session metrics",
		description: "Six-hourly pulse of agent session and turn metrics, bucketed by agent, run type, turn status and configuration. Two token numbers exist across the agent events and they measure different things: token_count_sum here covers only the recorded turns, from the same usage as cost_sum so the two reconcile, while token_count on \"Agent execution count\" additionally covers LLM calls belonging to no turn (title generation, observational/episodic memory, embeddings) and so runs higher.",
		properties: object({
			event_version: literal("1"),
			agent_id: string(),
			agent_type: literal("inline").optional(),
			run_type: agentRunType,
			turn_status: _enum(["succeeded", "failed"]),
			session_count: number(),
			turn_count: number(),
			latency_ms_sum: number(),
			cost_sum: number(),
			token_count_sum: number().describe("Recorded-turn tokens only; reconciles with cost_sum, unlike token_count"),
			tool_call_count_sum: number(),
			num_skills_sum: number(),
			...agentConfigurationTelemetry
		})
	},
	BUILDER_CREATED_AGENT: {
		name: "Builder created agent",
		description: "The Instance AI builder was the first surface to configure an agent. One of three same-shaped creation events (\"User created agent\", \"MCP created agent\") — union them for total agent creation, or read one for that surface alone. Emitted from `AgentConfigService.updateConfig` on the agent's first configuring write, so the builder minting an agent row emits nothing and a build that fails before writing config never counts. event_version 2 replaced thread_id with user_id, moved the emit from the frontend-facing delegate wrapper to the config-save path, and added the write profile.",
		properties: object({
			...agentWrite,
			event_version: literal("2")
		})
	},
	USER_CREATED_AGENT: {
		name: "User created agent",
		description: "A user was the first surface to configure an agent, from the editor. One of three same-shaped creation events (\"Builder created agent\", \"MCP created agent\") — union them for total agent creation, or read one for that surface alone. Emitted from `AgentConfigService.updateConfig` on the agent's first configuring write: agents are created lazily and the row alone emits nothing, so this fires when the agent gains a model, instructions or a capability rather than on the click, and an abandoned new-agent flow never counts. A rename or an icon change does not qualify. \"User clicked new agent\" carries the same agent_id, so the two join into a click-to-creation funnel whose gap is abandoned flows. event_version 2 dropped source (editor-only knowledge, still on the click event), added project_id, user_id and the write profile, and moved the emit to the backend.",
		properties: object({
			...agentWrite,
			event_version: literal("2")
		})
	},
	MCP_CREATED_AGENT: {
		name: "MCP created agent",
		description: "An MCP client was the first surface to configure an agent, through the `create_agent` or `mutate_agent` tool. One of three same-shaped creation events (\"User created agent\", \"Builder created agent\") — union them for total agent creation, or read one for that surface alone. Emitted from `AgentConfigService.updateConfig` on the agent's first configuring write, so a `create_agent` call carrying no initial config emits nothing until something configures the agent. The coarser \"User called mcp tool\" event also fires for the same call.",
		properties: object({
			...agentWrite,
			event_version: literal("1")
		})
	},
	USER_MODIFIED_AGENT: {
		name: "User modified agent",
		description: "A user saved a change to an agent that was already configured, from the editor. One of three same-shaped modification events (\"Builder modified agent\", \"MCP modified agent\") — union them for total agent modification, or read one for that surface alone. Emitted once per save from `AgentConfigService.updateConfig`; a save that changed nothing emits nothing, and the agent's first configuring write emits the matching creation event instead — so a write is never counted as both, and this event is not inflated by every agent's birth. The capability counts mirror \"Agent setup completed\", so a profile at each modification lines up with the profile at setup completion. Replaces the per-part \"User edited agent config\" and the per-item \"User added/removed tools/skills/tasks\" and \"User added/removed agent tool\" events, which fired several times for a single save and never covered the builder or MCP.",
		properties: object({
			...agentWrite,
			event_version: literal("1")
		})
	},
	BUILDER_MODIFIED_AGENT: {
		name: "Builder modified agent",
		description: "The Instance AI builder saved a change to an agent that was already configured. One of three same-shaped modification events (\"User modified agent\", \"MCP modified agent\") — union them for total agent modification, or read one for that surface alone. Emitted once per save from `AgentConfigService.updateConfig`; a save that changed nothing emits nothing, and the agent's first configuring write emits \"Builder created agent\" instead. The capability counts mirror \"Agent setup completed\", so a profile at each modification lines up with the profile at setup completion. Replaces the per-item \"Builder added tools/skills to agent\" and \"Builder removed tasks from agent\" events.",
		properties: object({
			...agentWrite,
			event_version: literal("1")
		})
	},
	MCP_MODIFIED_AGENT: {
		name: "MCP modified agent",
		description: "An MCP client saved a change to an agent that was already configured, through the `create_agent` or `mutate_agent` tool. One of three same-shaped modification events (\"User modified agent\", \"Builder modified agent\") — union them for total agent modification, or read one for that surface alone. Emitted once per save from `AgentConfigService.updateConfig`; a save that changed nothing emits nothing, and the agent's first configuring write emits \"MCP created agent\" instead. The capability counts mirror \"Agent setup completed\", so a profile at each modification lines up with the profile at setup completion. This surface had no modification telemetry before. The coarser \"User called mcp tool\" event also fires for the same call.",
		properties: object({
			...agentWrite,
			event_version: literal("1")
		})
	},
	USER_PUBLISHED_AGENT: {
		name: "User published agent",
		description: "A user explicitly published an agent version, making it the active one. One of three same-shaped publish events (\"Builder published agent\", \"MCP published agent\") — union them for total agent publishing, or read one for that surface alone. Emitted from `AgentPublishService.publishAgent`; an idempotent no-op publish emits nothing. `republish` identifies a rollback to an older snapshot; `channel_connect` and `slack_setup` are retained only as historical trigger values. event_version 2 moved the emit from the frontend to the backend, which replaced the editor-only scope (version-history publishes were missing) with every user surface, dropped config_version, status and session_id, and added project_id, user_id, trigger, version_id and the capability profile.",
		properties: object({
			...agentPublish,
			event_version: literal("2")
		})
	},
	BUILDER_PUBLISHED_AGENT: {
		name: "Builder published agent",
		description: "The Instance AI builder published an agent version through its publish_agent tool. One of three same-shaped publish events (\"User published agent\", \"MCP published agent\") — union them for total agent publishing, or read one for that surface alone. Emitted from `AgentPublishService.publishAgent`; an idempotent no-op publish emits nothing.",
		properties: object({
			...agentPublish,
			event_version: literal("1")
		})
	},
	MCP_PUBLISHED_AGENT: {
		name: "MCP published agent",
		description: "An MCP client explicitly published an agent version through the `publish_agent` tool. One of three same-shaped publish events (\"User published agent\", \"Builder published agent\") — union them for total agent publishing, or read one for that surface alone. Emitted from `AgentPublishService.publishAgent`; an idempotent no-op publish emits nothing. Before this event existed these publishes were reported as \"Agent published\" with source \"builder\", so they were indistinguishable from Instance AI builder publishes.",
		properties: object({
			...agentPublish,
			event_version: literal("1")
		})
	},
	USER_UNPUBLISHED_AGENT: {
		name: "User unpublished agent",
		description: "A user unpublished an agent, clearing its active version. One of three same-shaped unpublish events (\"Builder unpublished agent\", \"MCP unpublished agent\") — union them for total agent unpublishing, or read one for that surface alone. Emitted from `AgentPublishService.unpublishAgent`. Unlike the publish events these carry no trigger (there is one way to unpublish) and no capability profile. event_version 2 moved the emit from the frontend to the backend and replaced status and session_id with project_id and user_id.",
		properties: object({
			...agentActorIdentity,
			event_version: literal("2")
		})
	},
	BUILDER_UNPUBLISHED_AGENT: {
		name: "Builder unpublished agent",
		description: "The Instance AI builder unpublished an agent through its unpublish_agent tool. One of three same-shaped unpublish events (\"User unpublished agent\", \"MCP unpublished agent\") — union them for total agent unpublishing, or read one for that surface alone. Emitted from `AgentPublishService.unpublishAgent`.",
		properties: object({
			...agentActorIdentity,
			event_version: literal("1")
		})
	},
	MCP_UNPUBLISHED_AGENT: {
		name: "MCP unpublished agent",
		description: "An MCP client unpublished an agent through the `unpublish_agent` tool. One of three same-shaped unpublish events (\"User unpublished agent\", \"Builder unpublished agent\") — union them for total agent unpublishing, or read one for that surface alone. Emitted from `AgentPublishService.unpublishAgent`. Before this event existed these unpublishes were reported as \"Agent unpublished\" with source \"builder\", so they were indistinguishable from Instance AI builder unpublishes.",
		properties: object({
			...agentActorIdentity,
			event_version: literal("1")
		})
	},
	INSTANCE_AI_OPENED_FROM_AGENT_PREVIEW: {
		name: "Instance AI opened from agent preview",
		description: "The user handed a preview chat session off to Instance AI from the agent builder preview panel.",
		properties: object({
			agent_id: string(),
			preview_thread_id: string(),
			preview_execution_id: string().optional()
		})
	},
	USER_GAVE_MCP_ACCESS_TO_AGENT: {
		name: "User gave MCP access to agent",
		description: "An agent was exposed over MCP. The sibling \"User gave MCP access to workflow\" and \"User toggled MCP access\" events are not registered.",
		properties: object({ agent_id: string() })
	},
	USER_SELECTED_AGENTS_FOR_MCP: {
		name: "User selected agent from list",
		description: "The user confirmed a bulk agent selection in the MCP connect-agents dialog. Property is camelCase for warehouse continuity with existing rows.",
		properties: object({
			agentIds: array(string()),
			count: number()
		})
	},
	USER_DISMISSED_MCP_AGENTS_DIALOG: {
		name: "User dismissed mcp agents dialog",
		description: "The user closed the MCP connect-agents dialog without confirming a selection.",
		properties: object({})
	},
	USER_CLICKED_CONNECT_AGENTS_FROM_MCP_SETTINGS: {
		name: "User clicked connect agents from mcp settings",
		description: "The user opened the MCP connect-agents dialog from the MCP settings page.",
		properties: object({})
	},
	BUILDER_ADDED_TASKS: {
		name: "Builder added tasks to agent",
		description: "The Instance AI builder created a scheduled task through the `create_tasks` tool. That path persists outside `AgentConfigService.updateConfig`, so it is not covered by \"Builder modified agent\" — this event stays until the task write path is folded in.",
		properties: object({
			...builderSessionIdentity,
			task_added: string().describe("Identifier of the newly added task"),
			tasks: array(string()).describe("Full task identifier list after the save"),
			status: builderPreWriteStatus
		})
	},
	BUILDER_ADDED_TRIGGER: {
		name: "Builder added trigger to agent",
		description: "The Instance AI builder configured and persisted a chat channel for the target agent through the configure_channel tool, mirroring the frontend \"User added trigger to agent\" event.",
		properties: object({
			...builderSessionIdentity,
			trigger_type: string().describe("Chat integration type that was configured and persisted")
		})
	},
	BUILDER_ASKED_QUESTIONS: {
		name: "Builder asked questions",
		description: "The Instance AI builder used the ask_questions tool and suspended, showing the user a batch of questions to determine the shape of the agent.",
		properties: object({
			...builderSessionIdentity,
			question_count: number(),
			question_types: array(string()).describe("Distinct question types in the batch")
		})
	},
	USER_ANSWERED_BUILDER_QUESTIONS: {
		name: "User answered builder questions",
		description: "The user resumed a builder ask_questions card by answering, skipping, or dismissing it.",
		properties: object({
			...builderSessionIdentity,
			outcome: _enum([
				"answered",
				"skipped",
				"dismissed"
			]),
			answered_count: number(),
			skipped_count: number()
		})
	},
	BUILDER_REQUESTED_CREDENTIAL: {
		name: "Builder requested credential",
		description: "The Instance AI builder used the ask_credential (or ask_embedding_credential) tool and suspended to show a credential picker card. Does not fire when the request auto-resolves without showing a card.",
		properties: object({
			...builderSessionIdentity,
			credential_type: string()
		})
	},
	USER_PROVIDED_CREDENTIAL: {
		name: "User provided credential",
		description: "The user resumed a builder credential picker card by selecting a credential or skipping.",
		properties: object({
			...builderSessionIdentity,
			credential_type: string(),
			outcome: _enum(["provided", "skipped"])
		})
	},
	USER_CLICKED_NEW_AGENT: {
		name: "User clicked new agent",
		description: "The user clicked a new-agent entry point (button, dropdown, or card). No agent exists at this point — `agent_id` is the id minted for the click, which whichever path later persists the agent creates it under, so this joins to the eventual creation event. Clicks with no matching creation are abandoned new-agent flows.",
		properties: object({
			source: _enum([
				"button",
				"dropdown",
				"card"
			]),
			agent_id: string().describe("Minted at the click; no agent row exists yet"),
			session_id: sessionId
		})
	},
	USER_SUBMITTED_MESSAGE_TO_AGENT: {
		name: "User submitted message to agent",
		description: "The user sent a test-mode chat message to an agent, with a fingerprint of the agent config at send time.",
		properties: object({
			agent_id: string(),
			mode: literal("test").describe("Constant dimension kept for warehouse-schema stability"),
			status: agentStatus,
			agent_config: agentConfigFingerprint,
			session_id: sessionId
		})
	},
	USER_ADDED_TRIGGER_TO_AGENT: {
		name: "User added trigger to agent",
		description: "The user configured and persisted a chat trigger from the agent builder.",
		properties: object({
			agent_id: string(),
			trigger_type: string(),
			triggers: array(string()).describe("Configured trigger types after the change"),
			config_version: string(),
			status: agentStatus,
			session_id: sessionId
		})
	},
	USER_ADDED_AGENT_NODE: {
		name: "User added agent node",
		description: "The user added a Message an Agent node to the workflow canvas. agent_source distinguishes the inline agent variant from calling an existing agent.",
		properties: object({
			agent_source: _enum(["inline", "referenced"]).optional().describe("Omitted when the node was added without the agents panel preset (treat as 'referenced')"),
			agent_id: string().optional().describe("Referenced agent ID, when one was picked"),
			workflow_id: string(),
			node_id: string(),
			node_version: number()
		})
	},
	USER_OPENED_AGENT_TOOL: {
		name: "User opened agent tool",
		description: "The user opened a tool from the builder capabilities list.",
		properties: object({
			agent_id: string(),
			tool_type: string(),
			session_id: sessionId
		})
	},
	USER_OPENED_AGENT_SKILL: {
		name: "User opened agent skill",
		description: "The user opened a skill from the builder capabilities list.",
		properties: object({
			agent_id: string(),
			skill_id: string(),
			session_id: sessionId
		})
	},
	USER_OPENED_ADD_SKILL_MODAL: {
		name: "User opened add skill modal",
		description: "The user opened the add-skill modal in the builder.",
		properties: object({
			agent_id: string(),
			session_id: sessionId
		})
	},
	USER_IMPORTED_AGENT_SKILL: {
		name: "User imported agent skill",
		description: "The user imported a skill into an agent from a skill file or folder, with success or error outcome.",
		properties: object({
			agent_id: string(),
			source: _enum(["skill_file", "folder"]),
			status: _enum(["success", "error"]),
			reference_count: number(),
			error: string().optional(),
			session_id: sessionId
		})
	},
	USER_STARTED_ADDING_AGENT_TOOL: {
		name: "User started adding agent tool",
		description: "The user clicked Connect on an available row in the tools modal, starting a new tool flow.",
		properties: object({
			tool_type: _enum([
				"custom",
				"workflow",
				"node"
			]),
			source: literal("manual"),
			agent_id: optionalAgentId
		})
	},
	USER_EDITED_AGENT_TOOL: {
		name: "User edited agent tool",
		description: "An existing agent tool's configuration was saved from the tools modal.",
		properties: object({
			tool_type: _enum([
				"custom",
				"workflow",
				"node"
			]),
			...toolIdentity,
			agent_id: optionalAgentId
		})
	},
	USER_OPENED_AGENT_PREVIEW: {
		name: "User opened agent preview",
		description: "The user opened the agent preview panel in the builder.",
		properties: object({ agent_id: string() })
	},
	USER_SAVED_AGENT_SKILL: {
		name: "User saved agent skill",
		description: "An agent skill autosave completed in the builder.",
		properties: object({
			agent_id: string(),
			skill_id: string()
		})
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/events/credentials.ts
var CREDENTIALS_TELEMETRY = defineTelemetryEvents({ USER_PROBED_CREDENTIAL: {
	name: "User probed credential",
	description: "A stored credential was auth-probed against its own persisted test URL (POST /credentials/:id/probe) — the test path for generic credential types that declare no test, currently Simplified Custom Auth. Fires once per probe, including retries. The outcome is the probe's three-state verdict; joins to 'User created credentials' on credential_id.",
	properties: object({
		user_id: string(),
		credential_id: string(),
		outcome: _enum([
			"accepted",
			"rejected",
			"unverified"
		]).describe("'accepted' = the service took the credential (2xx, or a service-declared accepted status code); 'rejected' = explicit 401/403 auth rejection; 'unverified' = anything else (wrong test URL, unreachable service) — proves nothing about the credential")
	})
} });
//#endregion
//#region ../../@n8n/telemetry/src/events/instance.ts
var INSTANCE_TELEMETRY = defineTelemetryEvents({ INSTANCE_STARTED: {
	name: "Instance started",
	description: "Instance finished booting, reported once per main process start with a snapshot of its configuration.",
	properties: object({
		version_cli: string(),
		db_type: _enum(["sqlite", "postgresdb"]),
		db_version: string().nullable().describe("Postgres server version, or SQLite library version. Null when it could not be determined, which for `postgresdb` means the query failed rather than that the instance runs SQLite."),
		n8n_version_notifications_enabled: boolean(),
		n8n_disable_production_main_process: boolean(),
		system_info: object({
			os: object({
				type: string(),
				version: string()
			}),
			memory: number().describe("Total system memory in KiB"),
			cpus: object({
				count: number(),
				model: string(),
				speed: number().describe("Clock speed in MHz")
			}),
			is_docker: boolean()
		}),
		execution_variables: object({
			executions_mode: _enum(["regular", "queue"]),
			executions_timeout: number().describe("Seconds, -1 for unlimited"),
			executions_timeout_max: number().describe("Seconds"),
			executions_data_save_on_error: _enum(["all", "none"]),
			executions_data_save_on_success: _enum(["all", "none"]),
			executions_data_save_on_progress: boolean(),
			executions_data_save_manual_executions: boolean(),
			executions_data_prune: boolean(),
			executions_data_max_age: number().describe("Hours")
		}),
		workflow_history: object({
			compaction_optimizing_time_window_hours: number(),
			compaction_trim_on_start_up: boolean(),
			compaction_trimming_time_window_days: number()
		}),
		n8n_deployment_type: string(),
		n8n_binary_data_mode: _enum([
			"default",
			"filesystem",
			"s3",
			"azure",
			"database"
		]),
		smtp_set_up: boolean(),
		ldap_allowed: boolean(),
		saml_enabled: boolean(),
		license_plan_name: string(),
		license_tenant_id: number(),
		binary_data_s3: boolean().describe("S3 binary data is selected, available and licensed, all three"),
		multi_main_setup_enabled: boolean(),
		instance_ai: object({
			sandbox_enabled: boolean(),
			sandbox_provider: string(),
			search_brave_set: boolean(),
			search_searxng_set: boolean(),
			model_env_set: boolean().describe("Model connection env vars are set (API key or base URL). UI-credential model state is on the \"AI Assistant setup completed\" and \"User viewed AI Assistant setup page\" events instead"),
			model_id: string().describe("Configured model identifier incl. provider, e.g. 'anthropic/claude-sonnet-4'")
		}).describe("Which model, sandbox and search providers are configured via env vars, never key values"),
		metrics: object({
			metrics_enabled: boolean(),
			metrics_category_default: boolean(),
			metrics_category_routes: boolean(),
			metrics_category_cache: boolean(),
			metrics_category_logs: boolean(),
			metrics_category_queue: boolean(),
			metrics_category_execution_data: boolean(),
			metrics_category_webhooks: boolean(),
			metrics_category_forms: boolean(),
			metrics_category_workflow_info: boolean()
		}),
		earliest_workflow_created: unknown().describe("Date of the oldest workflow, absent when the instance has none"),
		otel: object({
			enabled: boolean(),
			include_node_spans: boolean()
		}),
		settings_managed_by_env_vars: object({
			owner_managed_by_env: boolean(),
			sso_managed_by_env: boolean(),
			security_policy_managed_by_env: boolean(),
			log_streaming_managed_by_env: boolean(),
			mcp_managed_by_env: boolean(),
			community_packages_managed_by_env: boolean()
		})
	})
} });
//#endregion
//#region ../../@n8n/telemetry/src/events/instance-ai.ts
/**
* How each AI Assistant setup component is configured. Source (who set it) and
* type/provider (what it is) are separate properties on purpose: an env-var
* Daytona sandbox reports sandbox_source 'env' and sandbox_type 'daytona',
* so neither dimension shadows the other.
*/
var setupSnapshotProps = {
	model_source: _enum([
		"ui",
		"env",
		"none"
	]).describe("Whether the model is configured via a UI credential, env vars, or not at all"),
	model_provider: string().nullable().describe("Model provider, e.g. 'anthropic'. Null when not configured or not derivable"),
	model_name: string().nullable().describe("Selected model name. Null when not configured; on the page-view event also null when the name is env-managed, which the emitting frontend cannot resolve — \"AI Assistant setup completed\" carries the resolved name"),
	sandbox_source: _enum([
		"ui",
		"env",
		"none"
	]),
	sandbox_type: _enum(["n8n-sandbox", "daytona"]).nullable(),
	web_search_source: _enum([
		"ui",
		"env",
		"disabled",
		"none"
	]).describe("'disabled' means the admin explicitly turned web search off, which counts as decided"),
	web_search_provider: _enum(["brave", "searxng"]).nullable()
};
var INSTANCE_AI_TELEMETRY = defineTelemetryEvents({
	BUILDER_SPECCED_TEMPLATED_CRED: {
		name: "Builder specced templated cred",
		description: "The Instance AI workflow builder composed a Simplified Custom Auth recipe (credentialHints) and suspended to show its setup card. Captures the recipe fields so template and link quality are observable in production — one event per recipe in the suspension. Contains no secrets by construction: recipes are agent-authored before any user input.",
		properties: object({
			thread_id: string(),
			input_thread_id: string().describe("Joins with 'Builder asked for input' / 'User finished providing input'"),
			template: record(string(), unknown()).describe("Auth request parts with {{placeholder}} markers, never real values"),
			placeholders: array(record(string(), unknown())).describe("Placeholder defs (name, title, info, type, optional)"),
			test_url: string().optional(),
			docs_url: string().optional().describe("Provider key page the credential help thread directs the user to"),
			service_host: string().optional().describe("API host the recipe targets (server-derived) — groups events by service"),
			accepted_status_codes: array(number()).optional().describe("No longer model-suppliable; expected absent — presence flags a regression")
		})
	},
	USER_VIEWED_AI_ASSISTANT_SETUP_PAGE: {
		name: "User viewed AI Assistant setup page",
		description: "The user landed on a self-hosted AI Assistant setup surface: the onboarding takeover on /assistant, or the settings page on /settings/assistant. Carries the configuration snapshot at view time, so joined with \"AI Assistant setup completed\" it measures setup drop-off. Not emitted on cloud or proxy deployments, where setup is managed.",
		properties: object({
			page: _enum(["onboarding", "settings"]).describe("Which setup surface: the first-run onboarding wizard or the settings page"),
			...setupSnapshotProps
		})
	},
	USER_CONFIGURED_AI_ASSISTANT_MODEL: {
		name: "User configured AI Assistant model",
		description: "An admin saved an AI Assistant model connection (PUT /instance-ai/settings), covering the first connect, later changes, and same-provider key rotations: first connects are rows where previous_provider is absent. The event marks a saved configuration, not a verified one — the setup wizard verifies before saving, but a direct API save can skip verification. Env-var model config never emits this; it is visible on \"Instance started\" and on the snapshot events instead.",
		properties: object({
			provider: string().describe("Model provider derived from the credential type, e.g. 'anthropic'"),
			model: string(),
			previous_provider: string().optional().describe("Absent when nothing was configured before — an absent value marks a first connect"),
			previous_model: string().optional()
		})
	},
	USER_CONFIGURED_AI_ASSISTANT_SANDBOX: {
		name: "User configured AI Assistant sandbox",
		description: "An admin saved an AI Assistant sandbox connection (PUT /instance-ai/settings), covering the first connect, later changes, and same-provider key rotations: first connects are rows where previous_sandbox_type is absent. Env-var sandbox config never emits this.",
		properties: object({
			sandbox_type: _enum(["n8n-sandbox", "daytona"]),
			previous_sandbox_type: _enum(["n8n-sandbox", "daytona"]).optional().describe("Absent when nothing was configured before — an absent value marks a first connect")
		})
	},
	USER_CONFIGURED_AI_ASSISTANT_WEB_SEARCH: {
		name: "User configured AI Assistant web search",
		description: "An admin saved an AI Assistant web search connection (PUT /instance-ai/settings), covering the first connect, later changes, and same-provider key rotations: first connects are rows where previous_provider is absent. Explicitly disabling web search does not emit this; that decision is visible as web_search_source \"disabled\" on the snapshot events.",
		properties: object({
			provider: _enum(["brave", "searxng"]),
			previous_provider: _enum(["brave", "searxng"]).optional().describe("Absent when nothing was configured before — an absent value marks a first connect")
		})
	},
	AI_ASSISTANT_CONNECTION_FAILED: {
		name: "AI Assistant connection failed",
		description: "A setup verification call (POST /instance-ai/settings/verify/*) failed for a model, sandbox, or web search connection. One event covers all three components; the component property tells them apart. Fires once per failed verify attempt, including retries.",
		properties: object({
			component: _enum([
				"model",
				"sandbox",
				"web_search"
			]),
			provider: string().nullable().describe("Provider being verified, when known — model provider, sandbox type, or search provider"),
			failure: _enum([
				"unauthorized",
				"forbidden",
				"quota_exceeded",
				"rate_limited",
				"timeout",
				"unreachable",
				"invalid_response",
				"provider_error"
			]).describe("Classified failure, same taxonomy the verify response returns to the UI"),
			error_message: string().describe("Sanitized provider error: URL queries stripped, length capped, never key values")
		})
	},
	AI_ASSISTANT_SETUP_COMPLETED: {
		name: "AI Assistant setup completed",
		description: "A self-hosted instance reached a complete AI Assistant setup for the first time: model configured, sandbox configured, and web search decided (configured or explicitly disabled) — the same predicate that unlocks the assistant UI. Fires at most once per instance, guarded by a persisted settings key, regardless of how the last piece was set: emitted from the settings save path, with a boot-time check so an env-var finish is also counted. No \"User\" prefix because the last piece can land via env vars with no acting user.",
		properties: object({ ...setupSnapshotProps })
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/telemetry-events.ts
var TELEMETRY_EVENT = {
	PLATFORM: defineTelemetryEvents({
		USER_IS_PART_OF_EXPERIMENT: {
			name: "User is part of experiment",
			description: "User was assigned a variant of a running experiment, reported when feature flags resolve in the editor.",
			properties: object({
				name: string().describe("Experiment feature-flag key"),
				variant: union([string(), boolean()]).describe("Variant assigned to the user")
			})
		},
		TASK_RUNNER_DISCONNECTED: {
			name: "Task runner disconnected",
			description: "The broker tore down a task runner connection because the runner was unhealthy: it failed a heartbeat check, or was reported unresponsive after it stopped acknowledging or offering tasks. Normal shutdowns are not reported.",
			properties: object({
				reason: _enum(["failed-heartbeat-check", "runner-unresponsive"]).describe("Which detection reported the runner as unhealthy"),
				mode: _enum(["internal", "external"]).describe("Task runners deployment mode")
			})
		}
	}),
	AGENTS: AGENTS_TELEMETRY,
	CREDENTIALS: CREDENTIALS_TELEMETRY,
	INSTANCE: INSTANCE_TELEMETRY,
	INSTANCE_AI: INSTANCE_AI_TELEMETRY
};
//#endregion
//#region ../../@n8n/telemetry/src/constants.ts
var POSTHOG_EVENTS_BLACKLIST = [TELEMETRY_EVENT.PLATFORM.USER_IS_PART_OF_EXPERIMENT];
//#endregion
export { TELEMETRY_EVENT as n, POSTHOG_EVENTS_BLACKLIST as t };
