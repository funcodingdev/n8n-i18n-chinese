//#region ../../@n8n/utils/src/number/bytes.ts
/**
* Format bytes to human-readable size with appropriate unit (B, KB, or MB)
*/
function formatBytes(sizeInBytes) {
	if (sizeInBytes < 1024) return `${sizeInBytes}B`;
	else if (sizeInBytes < 1048576) return `${Math.round(sizeInBytes / 1024)}KB`;
	else return `${Math.round(sizeInBytes / 1048576)}MB`;
}
//#endregion
export { formatBytes as t };
