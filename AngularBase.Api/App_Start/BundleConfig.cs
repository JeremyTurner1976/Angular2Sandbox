using System.Web;
using System.Web.Optimization;

namespace AngularBase.Api
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			//this will minify code
			BundleTable.EnableOptimizations = true;

			bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
						"~/Scripts/jquery-{version}.js"));

			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
						"~/Scripts/modernizr-*"));

			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
					  "~/Scripts/bootstrap.js",
					  "~/Scripts/respond.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					  "~/Content/bootstrap.css",
					  "~/Content/site.css"));

			//Ember App Directory
			//NOTE, if you want to find the line of a jt76EmberBase bundle error
			//run the project and follow the stacktrace lines on the source tab of the console
//            var appBundle = new ScriptBundle("~/bundles/jt76EmberBase").Include(
//                "~/Jt76EmberBase/application.js",
//                "~/Jt76EmberBase/index.js",
//                "~/Jt76EmberBase/modal.js",
//                "~/Jt76EmberBase/config.js",
//                "~/Jt76EmberBase/config.exceptionHandler.js",
//                "~/Jt76EmberBase/config.route.js",
//                "~/Jt76EmberBase/Data/models.js"
//            )
//            .IncludeDirectory("~/Jt76EmberBase/Common", "*.js", true)
//            .IncludeDirectory("~/Jt76EmberBase/components", "*.js", true)
//            .IncludeDirectory("~/Jt76EmberBase/Data", "*.js", true)
//            .IncludeDirectory("~/Jt76EmberBase/Layout", "*.js", true)
//            .IncludeDirectory("~/Jt76EmberBase/Modules", "*.js", true);
//#if DEBUG
//            //remove minification on this bundle in debug
//            appBundle.Transforms.Clear();
//#endif
//            bundles.Add(appBundle);

		}
	}
}
