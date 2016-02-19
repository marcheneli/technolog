using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

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

            //BundleTable.EnableOptimizations = true;
        }
    }
}