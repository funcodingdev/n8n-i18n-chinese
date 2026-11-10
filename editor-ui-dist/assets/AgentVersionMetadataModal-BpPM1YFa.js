import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, Vd as createCommentVNode, bp as toDisplayString, df as openBlock, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, zf as ref } from "./vendor-AGzaQJYe.js";
import { GO as useI18n, IO as N8nButton_default, Ka as WorkflowVersionForm_default, NC as WORKFLOW_VERSION_DESCRIPTION_MAX_LENGTH, OO as N8nText_default, s_ as useUIStore } from "./app-DGoK9ugD.js";
import { t as AgentModal_default } from "./AgentModal-D0qALa2v.js";
//#region src/features/agents/components/AgentVersionMetadataModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/components/AgentVersionMetadataModal.vue
var AgentVersionMetadataModal_default = /* @__PURE__ */ defineComponent({
	__name: "AgentVersionMetadataModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const open = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const name = ref(props.data.name ?? "");
		const description = ref(props.data.description ?? "");
		const submitting = ref(false);
		const error = ref("");
		const title = computed(() => i18n.baseText(props.data.mode === "publish" ? "agents.versionHistory.metadata.publishTitle" : "agents.versionHistory.metadata.editTitle"));
		function close() {
			if (submitting.value) return;
			uiStore.closeModal(props.modalName);
			props.data.onClose(false);
		}
		async function submit() {
			if (submitting.value) return;
			error.value = "";
			if (name.value.length > 128 || description.value.length > 2048) {
				error.value = i18n.baseText("agents.versionHistory.metadata.tooLong", { interpolate: {
					nameMax: 128,
					descriptionMax: WORKFLOW_VERSION_DESCRIPTION_MAX_LENGTH
				} });
				return;
			}
			submitting.value = true;
			try {
				if (await props.data.onSubmit({
					name: name.value.trim() || null,
					description: description.value || null
				})) {
					uiStore.closeModal(props.modalName);
					props.data.onClose(true);
				}
			} finally {
				submitting.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: open.value,
				title: title.value,
				busy: submitting.value,
				size: "large",
				"data-testid": "agent-version-metadata-modal",
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => !$event && close())
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					loading: submitting.value,
					"data-testid": "agent-version-metadata-submit",
					onClick: submit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.data.mode === "publish" ? "agents.publish.button.publish" : "generic.save")), 1)]),
					_: 1
				}, 8, ["loading"])]),
				default: withCtx(() => [createVNode(WorkflowVersionForm_default, {
					"version-name": name.value,
					"onUpdate:versionName": _cache[0] || (_cache[0] = ($event) => name.value = $event),
					description: description.value,
					"onUpdate:description": _cache[1] || (_cache[1] = ($event) => description.value = $event),
					"name-required": false,
					disabled: submitting.value,
					"version-name-test-id": "agent-version-name",
					"description-test-id": "agent-version-description",
					onSubmit: submit
				}, null, 8, [
					"version-name",
					"description",
					"disabled"
				]), error.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "danger",
					role: "alert"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"open",
				"title",
				"busy"
			]);
		};
	}
});
//#endregion
export { AgentVersionMetadataModal_default as default };
