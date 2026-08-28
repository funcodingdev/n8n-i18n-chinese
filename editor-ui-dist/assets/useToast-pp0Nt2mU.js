import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CcR38nth.js";
import { s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { c as sanitizeHtml } from "./htmlUtils-Dazt0V2g.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { t as VIEWS } from "./views-o5a97N_l.js";
import { t as APP_Z_INDEXES } from "./z-indexes-D-00RDH8.js";
import { n as useExternalHooks } from "./useExternalHooks-C7evY7zM.js";
//#region ../@n8n/composables/src/useToast.ts
var registeredNotify;
/**
* Register the notification function. Called once at bootstrap by
* `editor-ui` (passing a suppression-aware wrapper around `ElNotification`) so
* `useToast` can issue notifications without importing element-plus directly —
* keeping the DTS build lightweight.
*
* This is the *only* toast dependency the app registers. Whether a notification
* is actually shown is the notifier's decision, so if you are chasing a toast
* that never appeared, look at the registration site, not here.
*/
function setNotify(fn) {
	registeredNotify = fn;
}
var noopHandle = { close() {} };
var noopNotify = () => noopHandle;
function resolveNotify() {
	if (registeredNotify) return registeredNotify;
	return noopNotify;
}
var stickyNotificationQueue = [];
function useToast() {
	const telemetry = useTelemetry();
	const route = useRoute();
	const workflowId = computed(() => {
		if (route?.name === VIEWS.DEMO || route?.name === VIEWS.DEMO_DIFF) return "demo";
		const id = route?.params?.workflowId;
		return (Array.isArray(id) ? id[0] : id) ?? "";
	});
	const externalHooks = useExternalHooks();
	const i18n = useI18n();
	function causedByCredential(message) {
		if (!message || typeof message !== "string") return false;
		return message.includes("Credentials for") && message.includes("are not set");
	}
	function showMessage(messageData, track = true) {
		const notify = resolveNotify();
		const messageDefaults = {
			dangerouslyUseHTMLString: true,
			position: "bottom-right",
			zIndex: APP_Z_INDEXES.TOASTS,
			appendTo: "#n8n-app",
			customClass: "content-toast"
		};
		const { message, title } = messageData;
		const params = {
			...messageDefaults,
			...messageData
		};
		if (typeof message === "string") params.message = sanitizeHtml(message);
		if (typeof title === "string") params.title = sanitizeHtml(title);
		const notification = notify(params);
		if (!notification) return noopHandle;
		if (params.duration === 0) stickyNotificationQueue.push(notification);
		if (params.type === "error" && track) {
			let messageForTelemetry;
			if (typeof params.message === "string") messageForTelemetry = params.message;
			else if (params.message && typeof params.message === "object" && "props" in params.message && params.message.props) {
				const props = params.message.props;
				const hasErrorMessage = typeof props === "object" && props !== null && "errorMessage" in props;
				const hasMessage = typeof props === "object" && props !== null && "message" in props;
				if (hasErrorMessage) messageForTelemetry = String(props.errorMessage);
				else if (hasMessage) messageForTelemetry = String(props.message);
				else messageForTelemetry = "Unknown error";
			} else messageForTelemetry = "Unknown error";
			telemetry.track("Instance FE emitted error", {
				error_title: params.title,
				error_message: messageForTelemetry,
				caused_by_credential: causedByCredential(messageForTelemetry),
				workflow_id: workflowId.value
			});
		}
		return notification;
	}
	function showToast(config) {
		let notification;
		if (config.closeOnClick) {
			const originalOnClick = config.onClick;
			config.onClick = () => {
				if (notification) notification.close();
				if (originalOnClick) originalOnClick();
			};
		}
		notification = showMessage({
			title: config.title,
			message: config.message,
			onClick: config.onClick,
			onClose: config.onClose,
			duration: config.duration,
			customClass: config.customClass,
			type: config.type
		});
		return notification;
	}
	function collapsableDetails(description) {
		const errorDescription = description.length > 500 ? `${description.slice(0, 500)}...` : description;
		return `
				<br>
				<br>
				<details>
					<summary
						style="color: #ff6d5a; font-weight: bold; cursor: pointer;"
					>
						${i18n.baseText("showMessage.showDetails")}
					</summary>
					<p>${errorDescription}</p>
				</details>
			`;
	}
	function showError(e, title, options) {
		const error = e;
		const message = options?.message;
		const description = options?.description ?? error.description;
		showMessage({
			title,
			message: `
					${message ? `${message}<br/>` : ""}
					<i>${error.message}</i>
					${description ? collapsableDetails(description) : ""}`,
			type: "error",
			duration: 0
		}, false);
		externalHooks.run("showMessage.showError", {
			title,
			message,
			errorMessage: error.message
		});
		telemetry.track("Instance FE emitted error", {
			error_title: title,
			error_description: message,
			error_message: error.message,
			caused_by_credential: causedByCredential(error.message),
			workflow_id: workflowId.value
		});
	}
	function clearAllStickyNotifications() {
		stickyNotificationQueue.forEach((notification) => {
			if (notification) notification.close();
		});
		stickyNotificationQueue.length = 0;
	}
	return {
		showMessage,
		showToast,
		showError,
		clearAllStickyNotifications
	};
}
//#endregion
export { useToast as n, setNotify as t };
