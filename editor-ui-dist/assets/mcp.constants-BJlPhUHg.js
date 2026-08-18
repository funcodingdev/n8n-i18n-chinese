//#region src/features/ai/mcpAccess/mcp.constants.ts
var MCP_ENDPOINT = "mcp-server/http";
var MCP_DOCS_PAGE_URL = "https://docs.n8n.io/connect/connect-to-n8n-mcp-server";
var MCP_SCOPE_GROUPS = [
	{
		key: "workflows",
		resources: ["workflow", "tag"]
	},
	{
		key: "executions",
		resources: ["execution"]
	},
	{
		key: "agents",
		resources: ["agent"]
	},
	{
		key: "credentials",
		resources: ["credential"]
	},
	{
		key: "dataTables",
		resources: ["dataTable"]
	},
	{
		key: "projectsAndFolders",
		resources: ["project"]
	}
];
var ELIGIBLE_WORKFLOWS_DOCS_SECTION = "workflow-eligibility";
var MCP_SETTINGS_VIEW = "McpSettings";
var MCP_WORKFLOWS_VIEW = "McpSettingsWorkflows";
var MCP_AGENTS_VIEW = "McpSettingsAgents";
var MCP_CLIENTS_VIEW = "McpSettingsClients";
var MCP_CONNECT_WORKFLOWS_MODAL_KEY = "mcpConnectWorkflowsModal";
var MCP_CONNECT_AGENTS_MODAL_KEY = "mcpConnectAgentsModal";
//#endregion
export { MCP_CONNECT_WORKFLOWS_MODAL_KEY as a, MCP_SCOPE_GROUPS as c, MCP_CONNECT_AGENTS_MODAL_KEY as i, MCP_SETTINGS_VIEW as l, MCP_AGENTS_VIEW as n, MCP_DOCS_PAGE_URL as o, MCP_CLIENTS_VIEW as r, MCP_ENDPOINT as s, ELIGIBLE_WORKFLOWS_DOCS_SECTION as t, MCP_WORKFLOWS_VIEW as u };
