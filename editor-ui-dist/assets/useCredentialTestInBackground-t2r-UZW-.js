import { wt as useCredentialsStore } from "./workflows.store-Bo6ZgF_O.js";
//#region src/features/credentials/composables/useCredentialTestInBackground.ts
function useCredentialTestInBackground() {
	const credentialsStore = useCredentialsStore();
	/**
	* Checks whether a credential type has a test mechanism defined.
	* Kept as part of this composable's surface — several callers consume it from here.
	*/
	const isCredentialTypeTestable = (credentialTypeName) => credentialsStore.isCredentialTypeTestable(credentialTypeName);
	/**
	* Tests a saved credential in the background.
	* Fetches the credential's redacted data first so the backend can unredact and test.
	* Skips if the credential is already tested OK or has a test in flight.
	* The result is tracked automatically in the credentials store as a side effect of testCredential.
	*/
	async function testCredentialInBackground(credentialId, credentialName, credentialType) {
		if (!isCredentialTypeTestable(credentialType)) return;
		if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
		let credentialData;
		try {
			credentialData = (await credentialsStore.getCredentialData({ id: credentialId }))?.data;
		} catch {
			credentialData = void 0;
		}
		if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
		if (!credentialData || typeof credentialData === "string") {
			if (!credentialsStore.credentialTestResults.has(credentialId)) credentialsStore.credentialTestResults.set(credentialId, "success");
			return;
		}
		const { ownedBy, sharedWithProjects, oauthTokenData, ...data } = credentialData;
		if (oauthTokenData) {
			credentialsStore.credentialTestResults.set(credentialId, "success");
			return;
		}
		try {
			await credentialsStore.testCredential({
				id: credentialId,
				name: credentialName,
				type: credentialType,
				data
			});
		} catch {}
	}
	function hydrateCredentialTestResults(results) {
		for (const { id, success } of results) credentialsStore.credentialTestResults.set(id, success ? "success" : "error");
	}
	return {
		isCredentialTypeTestable,
		testCredentialInBackground,
		hydrateCredentialTestResults
	};
}
//#endregion
export { useCredentialTestInBackground as t };
