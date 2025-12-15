;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-By9GzIrR.js", "./src-legacy-cpQRHYsC.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Dvb8sNHI.js", "./icon-legacy-D2nAG1Q8.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-D11VqDwV.js", "./useToast-legacy-D-s48SLf.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-CylJU6xq.js", "./merge-legacy-DgmAhl0m.js", "./_baseOrderBy-legacy-gbKt-EDA.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-ClBFrXFH.js", "./useExternalHooks-legacy-DY4QJM8_.js", "./useStyles-legacy-E8NPEyeD.js", "./sso.store-legacy-CKt900AP.js", "./AuthView-legacy-DCTdz1oC.js"], function (_export, _context) {
    "use strict";

    var ref, defineComponent, reactive, createBlock, openBlock, useI18n, useRouter, useUsersStore, useToast, VIEWS, AuthView_default, SamlOnboarding_vue_vue_type_script_setup_true_lang_default, SamlOnboarding_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useUsersStore = _useTelemetryLegacy00HJs.nr;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Po;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_ssoStoreLegacy039Js) {}, function (_AuthViewLegacy05RJs) {
        AuthView_default = _AuthViewLegacy05RJs.t;
      }],
      execute: function () {
        //#region src/features/settings/sso/views/SamlOnboarding.vue?vue&type=script&setup=true&lang.ts
        SamlOnboarding_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SamlOnboarding",
          setup(__props) {
            const router = useRouter();
            const locale = useI18n();
            const toast = useToast();
            const usersStore = useUsersStore();
            const loading = ref(false);
            const FORM_CONFIG = reactive({
              title: locale.baseText("auth.signup.setupYourAccount"),
              buttonText: locale.baseText("auth.signup.finishAccountSetup"),
              inputs: [{
                name: "firstName",
                initialValue: usersStore.currentUser?.firstName,
                properties: {
                  label: locale.baseText("auth.firstName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "given-name",
                  capitalize: true
                }
              }, {
                name: "lastName",
                initialValue: usersStore.currentUser?.lastName,
                properties: {
                  label: locale.baseText("auth.lastName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "family-name",
                  capitalize: true
                }
              }]
            });
            const isFormWithFirstAndLastName = values => {
              return "firstName" in values && "lastName" in values;
            };
            const onSubmit = async values => {
              if (!isFormWithFirstAndLastName(values)) return;
              try {
                loading.value = true;
                await usersStore.updateUserName(values);
                await router.push({
                  name: VIEWS.HOMEPAGE
                });
              } catch (error) {
                loading.value = false;
                toast.showError(error, "Error", error.message);
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(AuthView_default, {
                form: FORM_CONFIG,
                "form-loading": loading.value,
                onSubmit
              }, null, 8, ["form", "form-loading"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/views/SamlOnboarding.vue
        _export("default", SamlOnboarding_default = SamlOnboarding_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();