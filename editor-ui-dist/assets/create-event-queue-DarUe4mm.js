//#region ../../@n8n/utils/src/create-event-queue.ts
/**
* Create an event queue that processes events sequentially.
*
* @param processEvent - Async function that processes a single event.
* @returns A function that enqueues events for processing.
*/
function createEventQueue(processEvent) {
	const queue = [];
	let processing = false;
	/**
	* Process the next event in the queue (if not already processing).
	*/
	async function processNext() {
		if (processing || queue.length === 0) return;
		processing = true;
		const currentEvent = queue.shift();
		if (currentEvent !== void 0) try {
			await processEvent(currentEvent);
		} catch (error) {
			console.error("Error processing event:", error);
		}
		processing = false;
		await processNext();
	}
	/**
	* Enqueue an event and trigger processing.
	*
	* @param event - The event to enqueue.
	*/
	function enqueue(event) {
		queue.push(event);
		processNext();
	}
	return { enqueue };
}
//#endregion
export { createEventQueue as t };
