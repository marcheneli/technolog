using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace Technolog.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/bundles/main-styles")
                .Include("~/Content/bootstrap.css")
                .Include("~/Content/Site.css")
                .Include("~/Content/spin.css"));

            bundles.Add(new ScriptBundle("~/bundles/main-scripts")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/react.js")
                .Include("~/Scripts/react-dom.js")
                .Include("~/Scripts/react-router.js")
                .Include("~/Scripts/flux.js")
                .Include("~/Scripts/event-emitter.js")
                .Include("~/Scripts/object-assign.js"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr")
                .Include("~/Scripts/modernizr-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/app-ts-scripts")
                .Include("~/Scripts/dist/bundle.js"));

            bundles.Add(new BabelBundle("~/bundles/app-scripts")
                .Include("~/Content/js/app/constants/pageConstants.js")
                .Include("~/Content/js/app/constants/toolConstants.js")
                .Include("~/Content/js/app/constants/errorConstants.js")
                .Include("~/Content/js/app/managers/pageParamsManager.js")
                .Include("~/Content/js/app/managers/navigationManager.js")
                .Include("~/Content/js/app/dispatcher/appDispatcher.js")
                .Include("~/Content/js/app/actions/errorActions.js")
                .Include("~/Content/js/app/actions/toolActions.js")
                .Include("~/Content/js/app/stores/toolStore.js")
                .Include("~/Content/js/app/stores/errorStore.js")
                .Include("~/Content/js/app/itemsPerPageSelector.jsx")
                .Include("~/Content/js/app/pagination.jsx")
                .Include("~/Content/js/app/confirmDelete.jsx")
                .Include("~/Content/js/app/inputError.jsx")
                .Include("~/Content/js/app/textInput.jsx")
                .Include("~/Content/js/app/components/tableRow.jsx")
                .Include("~/Content/js/app/searchInput.jsx")
                .Include("~/Content/js/app/toolEditForm.jsx")
                .Include("~/Content/js/app/partEditForm.jsx")
                .Include("~/Content/js/app/techProcessListSection.jsx")
                .Include("~/Content/js/app/techOperationListSection.jsx")
                .Include("~/Content/js/app/partListSection.jsx")
                .Include("~/Content/js/app/toolListSection.jsx")
                .Include("~/Content/js/app/mainContentSection.jsx")
                .Include("~/Content/js/app/mainSidebar.jsx")
                .Include("~/Content/js/app/components/errorNotifier.jsx")
                .Include("~/Content/js/app/main.jsx")
                .Include("~/Content/js/app/portal.jsx")
                .Include("~/Content/js/app/app.jsx"));

            BundleTable.EnableOptimizations = true;
        }
    }
}