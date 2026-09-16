import "./src-BU1EKX6o.js";
//#region ../../modules/otel/frontend/src/otel.constants.ts
var OTEL_STORE = "otel";
/**
* Mirrors CREDENTIAL_BLANKING_VALUE from n8n-workflow (not a dependency of this
* module) — the placeholder the API returns in place of each header value.
* Keys come back as-is; only values are blanked.
*/
var CREDENTIALS_BLANKING_VALUE = "__n8n_BLANK_VALUE_e5362baf-c777-4d57-a609-6eaf1f9e87f6";
/**
* Route name for the OpenTelemetry settings page. Owned by this module rather
* than by the shared `VIEWS` enum, so the module can be packaged without the
* shell holding one of its identifiers. The value is unchanged, so existing
* URLs and telemetry keep resolving.
*/
var OTEL_SETTINGS_VIEW = "SettingsOpenTelemetryView";
/** Name of the span emitted by the "Send test trace" button — shown in the result copy. */
var OTEL_TEST_SPAN_NAME = "n8n.test_trace";
/** Maps each settings field to its env-var name — shown in per-field tooltips. */
var OTEL_FIELD_ENV_VARS = {
	enabled: "N8N_OTEL_ENABLED",
	exporterProtocol: "N8N_OTEL_EXPORTER_OTLP_PROTOCOL",
	exporterEndpoint: "N8N_OTEL_EXPORTER_OTLP_ENDPOINT",
	exporterTracingPath: "N8N_OTEL_EXPORTER_OTLP_TRACING_PATH",
	exporterServiceName: "N8N_OTEL_EXPORTER_SERVICE_NAME",
	exporterHeaders: "N8N_OTEL_EXPORTER_OTLP_HEADERS",
	tracesSampleRate: "N8N_OTEL_TRACES_SAMPLE_RATE",
	startupConnectivityTimeoutMs: "N8N_OTEL_STARTUP_CONNECTIVITY_TIMEOUT_MS",
	includeNodeSpans: "N8N_OTEL_TRACES_INCLUDE_NODE_SPANS",
	injectOutbound: "N8N_OTEL_TRACES_INJECT_OUTBOUND",
	productionExecutionsOnly: "N8N_OTEL_TRACES_PRODUCTION_ONLY"
};
//#endregion
export { OTEL_TEST_SPAN_NAME as a, OTEL_STORE as i, OTEL_FIELD_ENV_VARS as n, OTEL_SETTINGS_VIEW as r, CREDENTIALS_BLANKING_VALUE as t };
