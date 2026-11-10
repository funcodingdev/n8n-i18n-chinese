import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Nd as withKeys, Rd as computed, Vd as createCommentVNode, bp as toDisplayString, df as openBlock, ef as inject, hp as normalizeClass, if as nextTick, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, of as onBeforeUnmount, pf as renderList, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, Fs as ASSISTANT_AGENT_THREAD_ID, GO as useI18n, IO as N8nButton_default, Iu as usePushConnectionStore, OO as N8nText_default, PO as Input_default, Ps as ASSISTANT_AGENT_PROJECT_ID, Qb as useTelemetry, dO as ApprovalCard_default, gs as buildAlwaysAllowKey, mC as INSTANCE_AI_THREAD_SOURCE_FALLBACK, nO as N8nCard_default, nx as useRootStore } from "./app-DGoK9ugD.js";
import { t as useApprovalCardLabels } from "./useApprovalCardLabels-oq877zd5.js";
import { _ as questionsInputs, a as GatewayResourceDecision_default, b as textInputs, c as formatApprovalTitle, d as AppBlueprintCard_default, f as appBlueprintInputs, g as mcpConnectInputs, h as getConfirmationType, i as InstanceAiChannelSetup_default, l as InstanceAiMcpConnectCard_default, m as continueInputs, n as InstanceAiQuestions_default, o as DomainAccessApproval_default, p as approvalInputs, r as InstanceAiCredentialSetup_default, s as formatApprovalDetails, t as InstanceAiWorkflowSetup_default, v as skippedTextInputs, x as trackInputCompleted, y as testListenerInputs } from "./InstanceAiWorkflowSetup-B7--d1j0.js";
//#region src/features/ai/instanceAi/assistantAgent/AssistantConfirmationCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var AssistantConfirmationCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AssistantConfirmationCard",
	props: {
		input: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		/**
		* An n8n Assistant confirmation in the agents chat of the Assistant agent. The
		* card emits the Assistant confirm body as the resume data, and the chat resumes
		* the suspended tool call with it.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const approvalLabels = useApprovalCardLabels();
		const telemetry = useTelemetry();
		const rootStore = useRootStore();
		const threadId = inject(ASSISTANT_AGENT_THREAD_ID, "");
		const submitted = ref(false);
		const attempt = ref(0);
		const textValue = ref("");
		const isInactive = computed(() => props.disabled || submitted.value);
		function reopen() {
			submitted.value = false;
			attempt.value += 1;
		}
		const threadProjectId = inject(ASSISTANT_AGENT_PROJECT_ID, void 0);
		const projectId = computed(() => props.input.projectId ?? threadProjectId);
		/** The same order as the current Assistant confirmation panel. */
		const variant = computed(() => {
			const { input } = props;
			if (input.inputType === "questions" && input.questions?.length) return "questions";
			if (input.mcpConnectRequest) return "mcp-connect";
			if (input.appBlueprint) return "app-blueprint";
			if (input.setupRequests?.length) return "workflow-setup";
			if (input.credentialRequests?.length) return "credential-setup";
			if (input.inputType === "text") return "text";
			if (input.inputType === "continue") return "continue";
			if (input.testListener) return "test-listener";
			if (input.inputType === "resource-decision" && input.resourceDecision) return "resource-decision";
			if (input.channelConfig) return "channel-config";
			if (input.domainAccess) return "domain-access";
			if (input.webSearch) return "web-search";
			if (input.credentialDestination) return "credential-destination";
			return "approval";
		});
		/** The same event as `InstanceAiConfirmationPanel` sends, for an answer that the server accepted. */
		function trackAnswer(inputs) {
			trackInputCompleted(telemetry, {
				threadId,
				inputThreadId: props.input.inputThreadId,
				instanceId: rootStore.instanceId,
				actionSource: INSTANCE_AI_THREAD_SOURCE_FALLBACK,
				type: getConfirmationType(props.input),
				runtime: "agents"
			}, inputs);
		}
		/**
		* `inputs` is the telemetry of the answer, sent once the server accepts it. A card
		* that the backend settles has none.
		*/
		function submit(body, inputs) {
			if (isInactive.value) return;
			submitted.value = true;
			emit("submit", body, inputs ? () => trackAnswer(inputs) : void 0);
			nextTick(reopen);
		}
		const workflowSetupOutcome = ref();
		function onWorkflowSetupApply(payload) {
			submit({
				kind: "setupWorkflowApply",
				...payload
			});
			workflowSetupOutcome.value = { state: "applied" };
		}
		function onWorkflowSetupDefer() {
			submit({
				kind: "approval",
				approved: false
			});
			workflowSetupOutcome.value = { state: "deferred" };
		}
		function onQuestionsSubmit(answers) {
			submit({
				kind: "questions",
				answers: answers.map(({ questionId, selectedOptions, customText, skipped }) => ({
					questionId,
					selectedOptions,
					...customText !== void 0 ? { customText } : {},
					...skipped !== void 0 ? { skipped } : {}
				}))
			}, questionsInputs(props.input.questions ?? [], answers));
		}
		function onTextSubmit() {
			const value = textValue.value.trim();
			if (!value) return;
			submit({
				kind: "approval",
				approved: true,
				userInput: value
			}, textInputs(props.input.message, value));
		}
		function onTextSkip() {
			submit({
				kind: "approval",
				approved: false
			}, skippedTextInputs(props.input.message));
		}
		function onContinue() {
			submit({
				kind: "approval",
				approved: true
			}, continueInputs(props.input.message));
		}
		function onMcpConnectResolve({ approved, connectedSlugs }) {
			submit({
				kind: "mcpConnect",
				approved,
				connectedSlugs
			}, mcpConnectInputs(props.input.mcpConnectRequest?.servers ?? [], approved, connectedSlugs));
		}
		const credentialDestinationTitle = computed(() => {
			const destination = props.input.credentialDestination;
			if (!destination) return "";
			return i18n.baseText("instanceAi.confirmation.credentialDestination.title", { interpolate: { origin: destination.origin } });
		});
		const credentialDestinationDescription = computed(() => {
			const destination = props.input.credentialDestination;
			if (!destination) return "";
			const [nodeName] = destination.nodeNames;
			if (destination.nodeNames.length === 1 && nodeName) return i18n.baseText("instanceAi.confirmation.credentialDestination.description", { interpolate: { nodeName } });
			return i18n.baseText("instanceAi.confirmation.credentialDestination.descriptionMultiple", { interpolate: { nodeNames: destination.nodeNames.join(", ") } });
		});
		const credentialDestinationOptions = computed(() => [{
			key: "allow-once",
			icon: "check",
			label: i18n.baseText("instanceAi.confirmation.credentialDestination.approve")
		}, {
			key: "deny",
			icon: "ban",
			label: i18n.baseText("instanceAi.confirmation.credentialDestination.deny")
		}]);
		function onCredentialDestinationSelect(key) {
			const destination = props.input.credentialDestination;
			if (!destination || key !== "allow-once" && key !== "deny") return;
			const approved = key === "allow-once";
			submit({
				kind: "credentialDestination",
				approved,
				origin: destination.origin
			}, approvalInputs(props.input.message, approved ? "approve" : "deny", false));
		}
		/** `fromPush`: a push event settles the card without a user choice, so it records no input. */
		function settleTestListener(approved, executionId, fromPush = false) {
			submit({
				kind: "approval",
				approved,
				...executionId ? { userInput: executionId } : {}
			}, fromPush ? void 0 : testListenerInputs(props.input.message, approved));
		}
		function formatDeadline(iso) {
			return new Date(iso).toLocaleTimeString(void 0, {
				hour: "2-digit",
				minute: "2-digit"
			});
		}
		if (props.input.testListener) {
			const removePushListener = usePushConnectionStore().addEventListener((event) => {
				if (event.type !== "testWebhookReceived" && event.type !== "testWebhookDeleted") return;
				if (props.input.testListener?.workflowId !== event.data.workflowId) return;
				settleTestListener(true, event.type === "testWebhookReceived" ? event.data.executionId : void 0, true);
			});
			onBeforeUnmount(removePushListener);
		}
		const approvalTitle = computed(() => {
			const { targetApproval, toolName, args, resourceName } = props.input;
			if (targetApproval || !toolName) return i18n.baseText("agents.chat.approval.title");
			return formatApprovalTitle({
				toolName,
				args,
				resourceName
			});
		});
		const approvalDescription = computed(() => {
			const { targetApproval, approvalDetails, message } = props.input;
			if (targetApproval) return i18n.baseText("agents.chat.approval.description", { interpolate: { toolName: targetApproval.displayName ?? targetApproval.toolName } });
			return approvalDetails ? formatApprovalDetails(approvalDetails) : message;
		});
		/** The same rule as the current panel: never for destructive or cross-target actions, or unscoped keys. */
		const canAlwaysAllow = computed(() => {
			const { toolName, args, severity, targetApproval, credentialDestination, workflowId } = props.input;
			if (!toolName || severity === "destructive" || targetApproval || credentialDestination) return false;
			return buildAlwaysAllowKey(toolName, args ?? {}, workflowId) !== null;
		});
		function onApprovalSelect(key) {
			const { message } = props.input;
			if (key === "always-allow" && canAlwaysAllow.value) {
				submit({
					kind: "approval",
					approved: true,
					scope: "session"
				}, approvalInputs(message, "approve_always", true));
				return;
			}
			if (key === "allow-once" || key === "deny") {
				const approved = key === "allow-once";
				submit({
					kind: "approval",
					approved
				}, approvalInputs(message, approved ? "approve" : "deny", canAlwaysAllow.value));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { key: attempt.value }, [variant.value === "questions" ? (openBlock(), createBlock(InstanceAiQuestions_default, {
				key: 0,
				questions: __props.input.questions ?? [],
				"intro-message": __props.input.introMessage,
				disabled: isInactive.value,
				"data-test-id": "assistant-agent-questions",
				onSubmit: onQuestionsSubmit
			}, null, 8, [
				"questions",
				"intro-message",
				"disabled"
			])) : variant.value === "mcp-connect" && __props.input.mcpConnectRequest ? (openBlock(), createBlock(InstanceAiMcpConnectCard_default, {
				key: 1,
				servers: __props.input.mcpConnectRequest.servers,
				"read-only": isInactive.value,
				"data-test-id": "assistant-agent-mcp-connect",
				onResolve: onMcpConnectResolve
			}, null, 8, ["servers", "read-only"])) : variant.value === "app-blueprint" && __props.input.appBlueprint ? (openBlock(), createBlock(AppBlueprintCard_default, {
				key: 2,
				blueprint: __props.input.appBlueprint,
				"read-only": isInactive.value,
				"data-test-id": "assistant-agent-app-blueprint",
				onSubmit: _cache[0] || (_cache[0] = (body) => submit(body, body.kind === "appBlueprint" ? unref(appBlueprintInputs)(body.approved) : void 0))
			}, null, 8, ["blueprint", "read-only"])) : variant.value === "workflow-setup" && __props.input.setupRequests ? (openBlock(), createBlock(InstanceAiWorkflowSetup_default, {
				key: 3,
				"request-id": __props.input.requestId,
				"setup-requests": __props.input.setupRequests,
				"project-id": projectId.value,
				"credential-flow": __props.input.credentialFlow,
				"workflow-id": __props.input.workflowId,
				"thread-id": unref(threadId),
				"input-thread-id": __props.input.inputThreadId,
				outcome: workflowSetupOutcome.value,
				onApply: onWorkflowSetupApply,
				onDefer: onWorkflowSetupDefer
			}, null, 8, [
				"request-id",
				"setup-requests",
				"project-id",
				"credential-flow",
				"workflow-id",
				"thread-id",
				"input-thread-id",
				"outcome"
			])) : variant.value === "credential-setup" && __props.input.credentialRequests ? (openBlock(), createBlock(InstanceAiCredentialSetup_default, {
				key: 4,
				"credential-requests": __props.input.credentialRequests,
				message: __props.input.message,
				"project-id": projectId.value,
				"credential-flow": __props.input.credentialFlow,
				"require-user-selection": __props.input.requireUserSelection,
				"thread-id": unref(threadId),
				"input-thread-id": __props.input.inputThreadId,
				onDecide: _cache[1] || (_cache[1] = (body) => submit(body))
			}, null, 8, [
				"credential-requests",
				"message",
				"project-id",
				"credential-flow",
				"require-user-selection",
				"thread-id",
				"input-thread-id"
			])) : variant.value === "resource-decision" && __props.input.resourceDecision ? (openBlock(), createBlock(GatewayResourceDecision_default, {
				key: 5,
				resource: __props.input.resourceDecision.resource,
				description: __props.input.resourceDecision.description,
				options: __props.input.resourceDecision.options,
				"thread-id": unref(threadId),
				"input-thread-id": __props.input.inputThreadId,
				onDecide: _cache[2] || (_cache[2] = (decision) => submit({
					kind: "resourceDecision",
					resourceDecision: decision
				}))
			}, null, 8, [
				"resource",
				"description",
				"options",
				"thread-id",
				"input-thread-id"
			])) : variant.value === "channel-config" && __props.input.channelConfig ? (openBlock(), createBlock(InstanceAiChannelSetup_default, {
				key: 6,
				"integration-type": __props.input.channelConfig.integrationType,
				"agent-id": __props.input.channelConfig.agentId,
				"project-id": projectId.value ?? "",
				onDecide: _cache[3] || (_cache[3] = (approved) => submit({
					kind: "approval",
					approved
				}))
			}, null, 8, [
				"integration-type",
				"agent-id",
				"project-id"
			])) : variant.value === "test-listener" && __props.input.testListener ? (openBlock(), createBlock(unref(N8nCard_default), {
				key: 7,
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "assistant-agent-test-listener"
			}, {
				default: withCtx(() => [
					createVNode(unref(N8nText_default), { tag: "div" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.input.message), 1)]),
						_: 1
					}),
					(openBlock(true), createElementBlock(Fragment, null, renderList(__props.input.testListener.triggers, (trigger) => {
						return openBlock(), createElementBlock("div", {
							key: trigger.nodeName,
							class: normalizeClass(_ctx.$style.testListenerUrl)
						}, [createVNode(unref(N8nText_default), {
							tag: "span",
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(trigger.method), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), {
							tag: "code",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(trigger.url), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128)),
					createVNode(unref(N8nText_default), {
						tag: "div",
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testListener.deadline", { interpolate: { time: formatDeadline(__props.input.testListener.deadlineAt) } })), 1)]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.row, _ctx.$style.end]) }, [createVNode(unref(N8nButton_default), {
						"data-test-id": "assistant-agent-test-listener-cancel",
						size: "medium",
						variant: "outline",
						disabled: isInactive.value,
						onClick: _cache[4] || (_cache[4] = ($event) => settleTestListener(false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testListener.cancel")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						"data-test-id": "assistant-agent-test-listener-sent",
						size: "medium",
						variant: "solid",
						disabled: isInactive.value,
						onClick: _cache[5] || (_cache[5] = ($event) => settleTestListener(true))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.testListener.sent")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)
				]),
				_: 1
			}, 8, ["class"])) : variant.value === "domain-access" && __props.input.domainAccess ? (openBlock(), createBlock(DomainAccessApproval_default, {
				key: 8,
				url: __props.input.domainAccess.url,
				host: __props.input.domainAccess.host,
				severity: __props.input.severity,
				onDecide: submit
			}, null, 8, [
				"url",
				"host",
				"severity"
			])) : variant.value === "web-search" && __props.input.webSearch ? (openBlock(), createBlock(DomainAccessApproval_default, {
				key: 9,
				query: __props.input.webSearch.query,
				severity: __props.input.severity,
				onDecide: submit
			}, null, 8, ["query", "severity"])) : variant.value === "text" ? (openBlock(), createBlock(unref(N8nCard_default), {
				key: 10,
				class: normalizeClass(_ctx.$style.card)
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), { tag: "div" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.message), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [
					createVNode(unref(Input_default), {
						modelValue: textValue.value,
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => textValue.value = $event),
						type: "text",
						size: "small",
						disabled: isInactive.value,
						placeholder: unref(i18n).baseText("instanceAi.askUser.placeholder"),
						"data-test-id": "assistant-agent-text-input",
						onKeydown: withKeys(onTextSubmit, ["enter"])
					}, null, 8, [
						"modelValue",
						"disabled",
						"placeholder"
					]),
					!textValue.value.trim() ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						size: "medium",
						variant: "outline",
						disabled: isInactive.value,
						onClick: onTextSkip
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.askUser.skip")), 1)]),
						_: 1
					}, 8, ["disabled"])) : createCommentVNode("", true),
					createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "solid",
						disabled: isInactive.value || !textValue.value.trim(),
						"data-test-id": "assistant-agent-text-submit",
						onClick: onTextSubmit
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.askUser.submit")), 1)]),
						_: 1
					}, 8, ["disabled"])
				], 2)]),
				_: 1
			}, 8, ["class"])) : variant.value === "continue" ? (openBlock(), createBlock(unref(N8nCard_default), {
				key: 11,
				class: normalizeClass(_ctx.$style.card)
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), { tag: "div" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.message), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass([_ctx.$style.row, _ctx.$style.end]) }, [createVNode(unref(N8nButton_default), {
					size: "medium",
					variant: "solid",
					disabled: isInactive.value,
					"data-test-id": "assistant-agent-continue",
					onClick: onContinue
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.confirmation.continue")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["class"])) : variant.value === "credential-destination" && __props.input.credentialDestination ? (openBlock(), createBlock(unref(ApprovalCard_default), {
				key: 12,
				title: credentialDestinationTitle.value,
				labels: unref(approvalLabels),
				description: credentialDestinationDescription.value,
				options: credentialDestinationOptions.value,
				disabled: isInactive.value,
				"data-test-id": "assistant-agent-credential-destination",
				onSelect: onCredentialDestinationSelect
			}, null, 8, [
				"title",
				"labels",
				"description",
				"options",
				"disabled"
			])) : (openBlock(), createBlock(unref(ApprovalCard_default), {
				key: 13,
				title: approvalTitle.value,
				labels: unref(approvalLabels),
				description: approvalDescription.value,
				"description-label": unref(i18n).baseText("instanceAi.confirmation.details"),
				args: __props.input.targetApproval?.args,
				destructive: __props.input.severity === "destructive",
				"supports-session-approval": canAlwaysAllow.value,
				disabled: isInactive.value,
				"data-test-id": "assistant-agent-approval",
				onSelect: onApprovalSelect
			}, null, 8, [
				"title",
				"labels",
				"description",
				"description-label",
				"args",
				"destructive",
				"supports-session-approval",
				"disabled"
			]))]);
		};
	}
}), [["__cssModules", { "$style": {
	card: "_card_6pxhu_1",
	row: "_row_6pxhu_7",
	end: "_end_6pxhu_14",
	testListenerUrl: "_testListenerUrl_6pxhu_18"
} }]]);
//#endregion
export { AssistantConfirmationCard_default as default };
