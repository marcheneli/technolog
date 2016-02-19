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
                .Include("~/Content/Site.css"));

            bundles.Add(new ScriptBundle("~/bundles/main-scripts")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/react.js")
                .Include("~/Scripts/react-dom.js"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr")
                .Include("~/Scripts/modernizr-{version}.js"));

            bundles.Add(new BabelBundle("~/bundles/app-scripts")
                .Include("~/Content/js/app/techProcessListSection.jsx")
                .Include("~/Content/js/app/techOperationListSection.jsx")
                .Include("~/Content/js/app/partListSection.jsx")
                .Include("~/Content/js/app/toolListSection.jsx")
                .Include("~/Content/js/app/mainContentSection.jsx")
                .Include("~/Content/js/app/mainSidebar.jsx")
                .Include("~/Content/js/app/portal.jsx")
                .Include("~/Content/js/app/app.jsx"));

            //BundleTable.EnableOptimizations = true;
        }
    }
}