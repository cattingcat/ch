using System.Web;
using System.Web.Optimization;

namespace MyProject.Chat.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/scripts")
                .Include("~/scripts/libs/jquery-1.6.4.min.js")
                .Include("~/scripts/libs/jquery.signalR-2.2.0.js")
                .Include("~/scripts/common/*.js"));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/site.css"));
        }
    }
}
