using System.Web;
using System.Web.Optimization;

namespace MyProject.Chat
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/scripts")
                .IncludeDirectory("~/scripts/libs", "*.js")
                .Include("~/scripts/common/*.js"));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/site.css"));
        }
    }
}
