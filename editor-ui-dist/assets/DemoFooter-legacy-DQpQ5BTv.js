;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-CIWHOywQ.js", "./src-legacy-CCaPFMfY.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Dbhp0OXD.js", "./icon-legacy-BnDmyCDG.js", "./overlay-legacy-wTbcRiZ1.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DiNoct2x.js", "./useTelemetry-legacy-CISk46xo.js", "./useToast-legacy-WoZGemxJ.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-DuqvrHPn.js", "./merge-legacy-CzJLk6Lz.js", "./assistant.store-legacy-ByqXPqKr.js", "./_baseOrderBy-legacy-BoIlqV8l.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-BAyhcC07.js", "./useExternalHooks-legacy-DWuo7Sev.js", "./useStyles-legacy-E8NPEyeD.js", "./chatPanel.store-legacy-B-oKEB3b.js", "./npsSurvey.store-legacy-DaZ56GaJ.js", "./cloudPlan.store-legacy-CztAnTUc.js", "./templates.store-legacy-BQe4Y3Vh.js", "./focusPanel.store-legacy-DdtqRk24.js", "./useWorkflowSaving-legacy-CKxn7gAE.js", "./retry-legacy-CTwsGM7o.js", "./executions.store-legacy-CJJHUxFO.js", "./useRunWorkflow-legacy-DX_v8kHy.js", "./usePinnedData-legacy-CYTkRpTn.js", "./nodeCreator.store-legacy-D19qq8PN.js", "./nodeIcon-legacy-BpAppslE.js", "./useClipboard-legacy-BQj5GP2z.js", "./useCanvasOperations-legacy-8UtQ7k1k.js", "./LogsPanel-legacy-3fZaGK4m.js", "./folders.store-legacy-DpkSoEgT.js", "./NodeIcon-legacy-DUw0ei8s.js", "./KeyboardShortcutTooltip-legacy-CHPlXHas.js", "./isEmpty-legacy-C6f39gjs.js", "./NDVEmptyState-legacy-DeJry6_m.js", "./externalSecrets.ee.store-legacy-BG9AEUcU.js", "./uniqBy-legacy-Dupovm5U.js", "./RunDataHtml-legacy-BRE8NZRs.js", "./VueMarkdown-legacy-9FAmQiId.js", "./schemaPreview.store-legacy-Bergv6zU.js", "./FileSaver.min-legacy-D7uxxng5.js", "./vue-json-pretty-legacy-DXTjoBRT.js", "./dateFormatter-legacy-zx03TinM.js", "./useExecutionHelpers-legacy-BLga94oq.js", "./fileUtils-legacy-BbiGYBne.js", "./useKeybindings-legacy-8Sb_R72-.js", "./core-legacy-CxpJCbeR.js", "./ChatFile-legacy-C1b0zpvM.js", "./xml-legacy-BOXgU2WY.js", "./AnimatedSpinner-legacy-DsbW4NPT.js", "./useLogsTreeExpand-legacy-oQT1caED.js", "./core-legacy-C2Fhj1HO.js"], function (_export, _context) {
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
      }, function (_foldersStoreLegacy01DJs) {}, function (_NodeIconLegacy01FJs) {}, function (_KeyboardShortcutTooltipLegacy01HJs) {}, function (_isEmptyLegacy021Js) {}, function (_NDVEmptyStateLegacy023Js) {}, function (_externalSecretsEeStoreLegacy027Js) {}, function (_uniqByLegacy029Js) {}, function (_RunDataHtmlLegacy02nJs) {}, function (_VueMarkdownLegacy02rJs) {}, function (_schemaPreviewStoreLegacy02BJs) {}, function (_FileSaverMinLegacy02HJs) {}, function (_vueJsonPrettyLegacy02JJs) {}, function (_dateFormatterLegacy02LJs) {}, function (_useExecutionHelpersLegacy02NJs) {}, function (_fileUtilsLegacy03pJs) {}, function (_useKeybindingsLegacy03LJs) {}, function (_coreLegacy041Js) {}, function (_ChatFileLegacy05fJs) {}, function (_xmlLegacy05vJs) {}, function (_AnimatedSpinnerLegacy05FJs) {}, function (_useLogsTreeExpandLegacy06VJs) {}, function (_coreLegacy06XJs) {}],
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