;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-gleHKmVW.js", "./src-legacy-Camt-rlz.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Dz2LFabB.js", "./icon-legacy-CDTZCDTQ.js", "./overlay-legacy-Bgg5aTJT.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-huUrlPKL.js", "./useTelemetry-legacy-DnSAoKz5.js", "./useToast-legacy-Ce_kWqRg.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-BWxkEIkt.js", "./merge-legacy-BQQjbHNn.js", "./assistant.store-legacy-GAwboCtk.js", "./_baseOrderBy-legacy-D_9iEaXg.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-DbNQUeQG.js", "./useExternalHooks-legacy-CISqywdp.js", "./useStyles-legacy-E8NPEyeD.js", "./chatPanel.store-legacy-BdmfWW-T.js", "./npsSurvey.store-legacy-BJ_guQdF.js", "./cloudPlan.store-legacy-CZH2Moc6.js", "./templates.store-legacy-VhWNRCtn.js", "./focusPanel.store-legacy-dsuRvUzL.js", "./useWorkflowSaving-legacy-ByBgBBeZ.js", "./retry-legacy-CTwsGM7o.js", "./executions.store-legacy-tm6krGjM.js", "./useRunWorkflow-legacy-lqdKtPlE.js", "./usePinnedData-legacy-m_KbfAf0.js", "./nodeCreator.store-legacy-B5AMVNwt.js", "./nodeIcon-legacy-bsJU0cD4.js", "./useClipboard-legacy-GjZOQV5D.js", "./useCanvasOperations-legacy-Dufl_Bry.js", "./LogsPanel-legacy-BWje6Wcl.js", "./folders.store-legacy-CS04zJPd.js", "./NodeIcon-legacy-B7HbXMU5.js", "./KeyboardShortcutTooltip-legacy-Bw05eFwa.js", "./isEmpty-legacy-BrTl1VxB.js", "./NDVEmptyState-legacy-DYrlNtHw.js", "./externalSecrets.ee.store-legacy-C5xeWgDO.js", "./uniqBy-legacy-DvpG9o0i.js", "./RunDataHtml-legacy-BRE8NZRs.js", "./VueMarkdown-legacy-BEnF5p8s.js", "./schemaPreview.store-legacy-1KyGoxMe.js", "./FileSaver.min-legacy-D7uxxng5.js", "./vue-json-pretty-legacy-DXTjoBRT.js", "./dateFormatter-legacy-Dw4bfnEC.js", "./useExecutionHelpers-legacy-B_30BoFF.js", "./fileUtils-legacy-BbiGYBne.js", "./useKeybindings-legacy-qOFzmvnr.js", "./core-legacy-CE24FyzQ.js", "./ChatFile-legacy-5tjvkOZY.js", "./xml-legacy-Bml4tBFF.js", "./AnimatedSpinner-legacy-Bc8CRgqr.js", "./useLogsTreeExpand-legacy-BlqcPCga.js", "./core-legacy-DSRhYczf.js"], function (_export, _context) {
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