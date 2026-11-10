import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, bp as toDisplayString, cf as onMounted, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, ns as useRouter, of as onBeforeUnmount, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { $_ as TELEMETRY_EVENT, BD as Checkbox_default, BO as _plugin_vue_export_helper_default, GO as useI18n, IO as N8nButton_default, Nf as Modal_default, OO as N8nText_default, Qb as useTelemetry, Ra as MCP_SETTINGS_VIEW, U as MCP_JSON_NUDGE_MODAL_KEY, eO as createEventBus, wa as McpClientLogoCards_default } from "./app-DGoK9ugD.js";
import { t as useMcpJsonNudgeEligibility } from "./useMcpJsonNudgeEligibility-G00ExNoT.js";
//#region src/experiments/mcpJsonNudge/components/McpJsonNudgeModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var McpJsonNudgeModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "McpJsonNudgeModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const telemetry = useTelemetry();
		const eligibility = useMcpJsonNudgeEligibility();
		const modalBus = createEventBus();
		const closedByAction = ref(false);
		const dontShowAgain = ref(false);
		const TITLE_KEY_BY_SURFACE = {
			export: "experiments.mcpJsonNudge.modal.export.title",
			import_file: "experiments.mcpJsonNudge.modal.import.title",
			import_url: "experiments.mcpJsonNudge.modal.import.title",
			copy: "experiments.mcpJsonNudge.modal.copy.title",
			paste: "experiments.mcpJsonNudge.modal.paste.title"
		};
		const title = computed(() => i18n.baseText(TITLE_KEY_BY_SURFACE[props.data.surface]));
		function onDontShowAgainChange(value) {
			dontShowAgain.value = value;
			if (value) {
				telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_OPTED_OUT, { surface: props.data.surface });
				eligibility.dismissForever();
			}
		}
		function onConnect(close) {
			closedByAction.value = true;
			telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_CONNECT_CLICKED, { surface: props.data.surface });
			router.push({ name: MCP_SETTINGS_VIEW });
			close();
		}
		function onSkip(close) {
			closedByAction.value = true;
			telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_SKIPPED, { surface: props.data.surface });
			props.data.onContinue?.();
			close();
		}
		function onModalClosed() {
			if (!closedByAction.value) {
				telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_DISMISSED, { surface: props.data.surface });
				props.data.onContinue?.();
			}
		}
		onMounted(() => {
			modalBus.on("closed", onModalClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", onModalClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(MCP_JSON_NUDGE_MODAL_KEY),
				title: title.value,
				width: "480px",
				"event-bus": unref(modalBus)
			}, {
				content: withCtx(() => [createVNode(unref(McpClientLogoCards_default), { class: normalizeClass(_ctx.$style.logoCards) }, null, 8, ["class"]), createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.mcpJsonNudge.modal.body")), 1)]),
					_: 1
				})]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(Checkbox_default), {
					"model-value": dontShowAgain.value,
					"data-test-id": "mcp-json-nudge-dont-show-again",
					"onUpdate:modelValue": onDontShowAgainChange
				}, {
					label: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.dontShowAgain")), 1)]),
					_: 1
				}, 8, ["model-value"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					label: unref(i18n).baseText("experiments.mcpJsonNudge.modal.skip"),
					"data-test-id": "mcp-json-nudge-skip-button",
					onClick: ($event) => onSkip(close)
				}, null, 8, ["label", "onClick"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					label: unref(i18n).baseText("experiments.mcpJsonNudge.modal.connect"),
					"data-test-id": "mcp-json-nudge-connect-button",
					onClick: ($event) => onConnect(close)
				}, null, 8, ["label", "onClick"])], 2)], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	logoCards: "_logoCards_4cmib_2",
	footer: "_footer_4cmib_9",
	actions: "_actions_4cmib_16"
} }]]);
//#endregion
export { McpJsonNudgeModal_default as default };
