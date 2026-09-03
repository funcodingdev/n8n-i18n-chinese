import { di as NodeConnectionTypes } from "./src-C3aqUyDp.js";
//#region src/app/constants/samples.ts
var DUMMY_PIN_DATA = [{
	name: "First item",
	code: 1
}, {
	name: "Second item",
	code: 2
}];
var SAMPLE_SUBWORKFLOW_TRIGGER_ID = "c055762a-8fe7-4141-a639-df2372f30060";
var SAMPLE_SUBWORKFLOW_WORKFLOW = {
	name: "My Sub-Workflow",
	nodes: [{
		id: SAMPLE_SUBWORKFLOW_TRIGGER_ID,
		typeVersion: 1.1,
		name: "When Executed by Another Workflow",
		type: "n8n-nodes-base.executeWorkflowTrigger",
		position: [260, 340],
		parameters: {}
	}, {
		id: "b5942df6-0160-4ef7-965d-57583acdc8aa",
		name: "Replace me with your logic",
		type: "n8n-nodes-base.noOp",
		position: [520, 340],
		parameters: {}
	}],
	connections: { "When Executed by Another Workflow": { main: [[{
		node: "Replace me with your logic",
		type: NodeConnectionTypes.Main,
		index: 0
	}]] } },
	settings: { executionOrder: "v1" },
	pinData: {}
};
NodeConnectionTypes.Main, NodeConnectionTypes.Main;
//#endregion
export { SAMPLE_SUBWORKFLOW_TRIGGER_ID as n, SAMPLE_SUBWORKFLOW_WORKFLOW as r, DUMMY_PIN_DATA as t };
