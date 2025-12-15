;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-By9GzIrR.js", "./src-legacy-cpQRHYsC.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Dvb8sNHI.js", "./icon-legacy-D2nAG1Q8.js", "./overlay-legacy-CybXzK8L.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-dQoFIqlf.js", "./useTelemetry-legacy-D11VqDwV.js", "./useToast-legacy-D-s48SLf.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-CylJU6xq.js", "./merge-legacy-DgmAhl0m.js", "./assistant.store-legacy-1xMjvEiZ.js", "./_baseOrderBy-legacy-gbKt-EDA.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-ClBFrXFH.js", "./useExternalHooks-legacy-DY4QJM8_.js", "./useStyles-legacy-E8NPEyeD.js", "./chatPanel.store-legacy-DD9O94Ol.js", "./npsSurvey.store-legacy-CRiQ8eAk.js", "./cloudPlan.store-legacy-NfJ72kyH.js", "./templates.store-legacy-w55IC_R-.js", "./focusPanel.store-legacy-C0x9Xt5I.js", "./useWorkflowSaving-legacy-76PUdzsj.js", "./retry-legacy-CTwsGM7o.js", "./executions.store-legacy-Djg7oeSh.js", "./useRunWorkflow-legacy-DLk1uIGG.js", "./usePinnedData-legacy-oja2leYa.js", "./nodeCreator.store-legacy-_54soaLc.js", "./nodeIcon-legacy-CLMaH24c.js", "./useClipboard-legacy-DpjeC7EC.js", "./useCanvasOperations-legacy-fGzTe6P3.js", "./LogsPanel-legacy-BYdW2UrV.js", "./folders.store-legacy-OI9KzUNC.js", "./NodeIcon-legacy-DZRT-qKm.js", "./KeyboardShortcutTooltip-legacy-BVRmFuLY.js", "./isEmpty-legacy-C6cuXO0-.js", "./NDVEmptyState-legacy-nMft-z2t.js", "./externalSecrets.ee.store-legacy-D2FPryxy.js", "./uniqBy-legacy-QmuVWUpk.js", "./RunDataHtml-legacy-BRE8NZRs.js", "./VueMarkdown-legacy-DYn-khZ6.js", "./schemaPreview.store-legacy-PTps3T9e.js", "./FileSaver.min-legacy-D7uxxng5.js", "./vue-json-pretty-legacy-DXTjoBRT.js", "./dateFormatter-legacy-tinsCcix.js", "./useExecutionHelpers-legacy-khaPcgsb.js", "./fileUtils-legacy-BbiGYBne.js", "./useKeybindings-legacy-YWCLFhjv.js", "./core-legacy-Dbm4ZHjr.js", "./ChatFile-legacy-ChynqrzQ.js", "./xml-legacy-AlS_MIEy.js", "./AnimatedSpinner-legacy-jmjQlQzV.js", "./useLogsTreeExpand-legacy-CbNS49xy.js", "./core-legacy-CovukW6E.js"], function (_export, _context) {
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
      }, function (_foldersStoreLegacy01DJs) {}, function (_NodeIconLegacy01FJs) {}, function (_KeyboardShortcutTooltipLegacy01HJs) {}, function (_isEmptyLegacy021Js) {}, function (_NDVEmptyStateLegacy023Js) {}, function (_externalSecretsEeStoreLegacy027Js) {}, function (_uniqByLegacy029Js) {}, function (_RunDataHtmlLegacy02nJs) {}, function (_VueMarkdownLegacy02rJs) {}, function (_schemaPreviewStoreLegacy02BJs) {}, function (_FileSaverMinLegacy02HJs) {}, function (_vueJsonPrettyLegacy02JJs) {}, function (_dateFormatterLegacy02LJs) {}, function (_useExecutionHelpersLegacy02NJs) {}, function (_fileUtilsLegacy03pJs) {}, function (_useKeybindingsLegacy03LJs) {}, function (_coreLegacy03ZJs) {}, function (_ChatFileLegacy05bJs) {}, function (_xmlLegacy05rJs) {}, function (_AnimatedSpinnerLegacy05BJs) {}, function (_useLogsTreeExpandLegacy06RJs) {}, function (_coreLegacy06TJs) {}],
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