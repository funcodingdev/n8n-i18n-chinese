import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, _ as Fragment, bn as normalizeStyle, bt as withCtx, it as renderSlot, j as createVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-CBepoSka.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-CKqMFO_n.js";
import { t as N8nPagination_default } from "./N8nPagination-PFjTn45D.js";
import { t as TableBase_default } from "./TableBase-BJZN4_ld.js";
//#region ../@n8n/design-system/src/utils/valueByPath.ts
/**
* Get a deeply nested value based on a given path string
*
* @param object
* @param path
* @returns {T}
*/
function getValueByPath(object, path) {
	return path.split(".").reduce((acc, part) => {
		return acc?.[part];
	}, object);
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nDatatable/Datatable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 1 };
var _hoisted_2 = { class: "pagination" };
var _hoisted_3 = { class: "pageSizeSelector" };
var ALL_ROWS = -1;
//#endregion
//#region ../@n8n/design-system/src/components/N8nDatatable/index.ts
var N8nDatatable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "N8nDatatable",
	__name: "Datatable",
	props: {
		columns: {},
		rows: {},
		currentPage: { default: 1 },
		pagination: {
			type: Boolean,
			default: true
		},
		rowsPerPage: { default: 10 }
	},
	emits: ["update:currentPage", "update:rowsPerPage"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { t } = useI18n();
		const rowsPerPageOptions = ref([
			1,
			10,
			25,
			50,
			100
		]);
		const totalPages = computed(() => {
			return Math.ceil(props.rows.length / props.rowsPerPage);
		});
		const totalRows = computed(() => {
			return props.rows.length;
		});
		const visibleRows = computed(() => {
			if (props.rowsPerPage === ALL_ROWS) return props.rows;
			const start = (props.currentPage - 1) * props.rowsPerPage;
			const end = start + props.rowsPerPage;
			return props.rows.slice(start, end);
		});
		function onUpdateCurrentPage(value) {
			emit("update:currentPage", value);
		}
		function onRowsPerPageChange(value) {
			emit("update:rowsPerPage", value);
			if (value === ALL_ROWS) {
				onUpdateCurrentPage(1);
				return;
			}
			const maxPage = Math.ceil(totalRows.value / value);
			if (maxPage < props.currentPage) onUpdateCurrentPage(maxPage);
		}
		function getTdValue(row, column) {
			return getValueByPath(row, column.path);
		}
		function getThStyle(column) {
			return { ...column.width ? { width: column.width } : {} };
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: "datatable datatableWrapper" }, _ctx.$attrs), [
				createVNode(unref(TableBase_default), null, {
					default: withCtx(() => [createBaseVNode("thead", null, [createBaseVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
						return openBlock(), createElementBlock("th", {
							key: column.id,
							class: normalizeClass(column.classes),
							style: normalizeStyle(getThStyle(column))
						}, toDisplayString(column.label), 7);
					}), 128))])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (row) => {
						return renderSlot(_ctx.$slots, "row", {
							columns: __props.columns,
							row,
							getTdValue
						}, () => [(openBlock(), createElementBlock("tr", { key: row.id }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
							return openBlock(), createElementBlock("td", {
								key: column.id,
								class: normalizeClass(column.classes)
							}, [column.render ? (openBlock(), createBlock(resolveDynamicComponent(column.render), {
								key: 0,
								row,
								column
							}, null, 8, ["row", "column"])) : (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(getTdValue(row, column)), 1))], 2);
						}), 128))]))], true);
					}), 256))])]),
					_: 3
				}),
				renderSlot(_ctx.$slots, "postdata", {}, void 0, true),
				createBaseVNode("div", _hoisted_2, [totalPages.value > 1 ? (openBlock(), createBlock(unref(N8nPagination_default), {
					key: 0,
					background: "",
					"pager-count": 5,
					"page-size": __props.rowsPerPage,
					layout: "prev, pager, next",
					total: totalRows.value,
					"current-page": __props.currentPage,
					"onUpdate:currentPage": onUpdateCurrentPage
				}, null, 8, [
					"page-size",
					"total",
					"current-page"
				])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_3, [createVNode(unref(N8nSelect_default), {
					size: "mini",
					"model-value": __props.rowsPerPage,
					teleported: "",
					"onUpdate:modelValue": onRowsPerPageChange
				}, {
					prepend: withCtx(() => [createTextVNode(toDisplayString(unref(t)("datatable.pageSize")), 1)]),
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(rowsPerPageOptions.value, (size) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: size,
							label: `${size}`,
							value: size
						}, null, 8, ["label", "value"]);
					}), 128)), createVNode(unref(N8nOption_default), {
						label: `All`,
						value: ALL_ROWS
					})]),
					_: 1
				}, 8, ["model-value"])])])
			], 16);
		};
	}
}), [["__scopeId", "data-v-3462c386"]]);
//#endregion
export { N8nDatatable_default as t };
