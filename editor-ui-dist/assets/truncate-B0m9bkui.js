//#region ../../@n8n/utils/src/string/truncate.ts
var truncate = (text, length = 30) => text.length > length ? text.slice(0, length) + "..." : text;
/**
* Replace part of given text with ellipsis following the rules below:
*
* - Remove chars just before the last word, as long as the last word is between
*   minLastWordLength and 15 chars
* - Otherwise preserve the last `lastCharsLength` chars and remove chars before that
*/
function truncateBeforeLast(text, maxLength, lastCharsLength = 5, minLastWordLength = 1) {
	const chars = [];
	const segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
	for (const { segment } of segmenter.segment(text)) chars.push(segment);
	if (chars.length <= maxLength) return text;
	const lastWordIndex = chars.findLastIndex((ch) => ch.match(/^\s+$/)) + 1;
	const lastWord = chars.slice(lastWordIndex);
	const ellipsis = "…";
	const ellipsisLength = 1;
	if (lastWord.length >= minLastWordLength && lastWord.length < 15) {
		const charsToRemove = chars.length - maxLength + ellipsisLength;
		const indexBeforeLastWord = lastWordIndex;
		const keepLength = indexBeforeLastWord - charsToRemove;
		if (keepLength > 0) return chars.slice(0, keepLength).join("") + ellipsis + chars.slice(indexBeforeLastWord).join("");
	}
	if (lastCharsLength < 1) return chars.slice(0, maxLength).join("") + ellipsis;
	return chars.slice(0, maxLength - lastCharsLength - ellipsisLength).join("") + ellipsis + chars.slice(-lastCharsLength).join("");
}
//#endregion
export { truncateBeforeLast as n, truncate as t };
