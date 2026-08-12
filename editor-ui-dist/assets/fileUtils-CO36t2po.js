import { Si as fileTypeFromMimeType } from "./src-D3mf01t5.js";
//#region src/app/utils/fileUtils.ts
/** Matches `path.parse().ext`: a leading dot (`.env`) or no dot (`README`) means no extension. */
function getFileExtension(fileName) {
	const dotIndex = fileName.lastIndexOf(".");
	return dotIndex > 0 ? fileName.slice(dotIndex + 1) : "";
}
/** Display/download name for binary data; `fileName` usually already carries the extension. */
function getBinaryDataFileName({ fileName, fileExtension }) {
	const name = fileName ?? "file";
	if (name.includes(".") || !fileExtension) return name;
	return `${name}.${fileExtension}`;
}
async function convertFileToBinaryData(file) {
	const reader = new FileReader();
	return await new Promise((resolve, reject) => {
		reader.onload = () => {
			resolve({
				data: reader.result.split("base64,")?.[1] ?? "",
				mimeType: file.type,
				fileName: file.name,
				fileSize: `${file.size} bytes`,
				fileExtension: getFileExtension(file.name) || void 0,
				fileType: fileTypeFromMimeType(file.type)
			});
		};
		reader.onerror = () => {
			reject(/* @__PURE__ */ new Error("Failed to convert file to binary data"));
		};
		reader.readAsDataURL(file);
	});
}
//#endregion
export { getBinaryDataFileName as n, convertFileToBinaryData as t };
