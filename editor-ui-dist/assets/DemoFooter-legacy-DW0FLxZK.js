;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-MxDNiCoP.js", "./src-legacy-DYR1O0ZW.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BmpPclhB.js", "./icon-legacy-lgJvwOWE.js", "./overlay-legacy-DgXKM83s.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-jFkoodOd.js", "./useTelemetry-legacy-yLgrtxmH.js", "./useToast-legacy-BOts9kyk.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-e6rCvq4v.js", "./merge-legacy-BoQxmYVg.js", "./assistant.store-legacy-Bapc2m1g.js", "./_baseOrderBy-legacy-Dt_IoFJy.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-fbZ2NKGi.js", "./useExternalHooks-legacy-DshJDEVC.js", "./useStyles-legacy-E8NPEyeD.js", "./chatPanel.store-legacy-ChFlma9W.js", "./npsSurvey.store-legacy-CMvKIkk9.js", "./cloudPlan.store-legacy-S5mOM9Ss.js", "./templates.store-legacy-BOXMdtiU.js", "./focusPanel.store-legacy-l3_G5Nhz.js", "./useWorkflowSaving-legacy-CuXqLsbJ.js", "./retry-legacy-CTwsGM7o.js", "./executions.store-legacy-CRn7Fn7i.js", "./useRunWorkflow-legacy-C0Sds_OU.js", "./usePinnedData-legacy-Cx8Fc7uU.js", "./nodeCreator.store-legacy-De0hgngq.js", "./nodeIcon-legacy-DWUI1OnX.js", "./useClipboard-legacy-D9B-VsN2.js", "./useCanvasOperations-legacy-BBWn7x8m.js", "./LogsPanel-legacy-C--U0VT1.js", "./folders.store-legacy-5a_pyf1j.js", "./NodeIcon-legacy-D9UpxQ8B.js", "./KeyboardShortcutTooltip-legacy-ksdYXHkm.js", "./isEmpty-legacy-CPWh4TlZ.js", "./NDVEmptyState-legacy-C9dIHjtc.js", "./externalSecrets.ee.store-legacy-k1_6LWey.js", "./uniqBy-legacy-D8SSpi53.js", "./RunDataHtml-legacy-BRE8NZRs.js", "./VueMarkdown-legacy-2pGDJDGN.js", "./schemaPreview.store-legacy-CSdJcFBp.js", "./FileSaver.min-legacy-D7uxxng5.js", "./vue-json-pretty-legacy-DXTjoBRT.js", "./dateFormatter-legacy-BlB6mT6i.js", "./useExecutionHelpers-legacy-Dq861qSH.js", "./fileUtils-legacy-BbiGYBne.js", "./useKeybindings-legacy-CReUuU-2.js", "./core-legacy-CE24FyzQ.js", "./ChatFile-legacy-5tjvkOZY.js", "./xml-legacy-Bml4tBFF.js", "./AnimatedSpinner-legacy-Bc8CRgqr.js", "./useLogsTreeExpand-legacy-pioiIq_x.js", "./core-legacy-DSRhYczf.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, defineComponent, createBlock, openBlock, useWorkflowsStore, LogsPanel_default, DemoFooter_vue_vue_type_script_setup_true_lang_default, DemoFooter_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {}, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {}, function (_mergeLegacy00VJs) {}, function (_assistantStoreLegacy00XJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_chatPanelStoreLegacy017Js) {}, function (_npsSurveyStoreLegacy01bJs) {}, function (_cloudPlanStoreLegacy01dJs) {}, function (_templatesStoreLegacy01fJs) {}, function (_focusPanelStoreLegacy01hJs) {}, function (_useWorkflowSavingLegacy01jJs) {}, function (_retryLegacy01lJs) {}, function (_executionsStoreLegacy01nJs) {}, function (_useRunWorkflowLegacy01pJs) {}, function (_usePinnedDataLegacy01rJs) {}, function (_nodeCreatorStoreLegacy01tJs) {}, function (_nodeIconLegacy01vJs) {}, function (_useClipboardLegacy01xJs) {}, function (_useCanvasOperationsLegacy01zJs) {}, function (_LogsPanelLegacy01BJs) {
        LogsPanel_default = _LogsPanelLegacy01BJs.t;
      }, function (_foldersStoreLegacy01DJs) {}, function (_NodeIconLegacy01FJs) {}, function (_KeyboardShortcutTooltipLegacy01HJs) {}, function (_isEmptyLegacy021Js) {}, function (_NDVEmptyStateLegacy023Js) {}, function (_externalSecretsEeStoreLegacy027Js) {}, function (_uniqByLegacy029Js) {}, function (_RunDataHtmlLegacy02nJs) {}, function (_VueMarkdownLegacy02rJs) {}, function (_schemaPreviewStoreLegacy02BJs) {}, function (_FileSaverMinLegacy02HJs) {}, function (_vueJsonPrettyLegacy02JJs) {}, function (_dateFormatterLegacy02LJs) {}, function (_useExecutionHelpersLegacy02NJs) {}, function (_fileUtilsLegacy03pJs) {}, function (_useKeybindingsLegacy03LJs) {}, function (_coreLegacy03$Js) {}, function (_ChatFileLegacy05dJs) {}, function (_xmlLegacy05tJs) {}, function (_AnimatedSpinnerLegacy05DJs) {}, function (_useLogsTreeExpandLegacy06TJs) {}, function (_coreLegacy06VJs) {}],
      execute: function () {
        //#region src/features/execution/logs/components/DemoFooter.vue?vue&type=script&setup=true&lang.ts
        DemoFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "DemoFooter",
          setup(__props) {
            const workflowsStore = useWorkflowsStore();
            const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
            return (_ctx, _cache) => {
              return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
                key: 0,
                "is-read-only": true
              })) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/execution/logs/components/DemoFooter.vue
        _export("default", DemoFooter_default = DemoFooter_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();