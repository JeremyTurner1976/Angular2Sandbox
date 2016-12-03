using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Autofac;

namespace AngularBase.Api
{
	public class WebApiApplication : System.Web.HttpApplication
	{
		protected void Application_Start()
		{
			AreaRegistration.RegisterAllAreas();
			GlobalConfiguration.Configure(WebApiConfig.Register);
			FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
			RouteConfig.RegisterRoutes(RouteTable.Routes);
			BundleConfig.RegisterBundles(BundleTable.Bundles);
			AutofacConfig.RegisterAutofac();
			SqlServerTypes.Utilities.LoadNativeAssemblies(Server.MapPath("~/bin"));
		}

		//In Global.asax to catch all errors
		//At this point the only C# try catch logic wanted is when logging an error, or wanting to skip a minor exception
		protected void Application_Error(object sender, EventArgs e)
		{
			Exception ex = Server.GetLastError();

			//using (var scope = AutofacConfig.Container.BeginLifetimeScope())
			//{
			//	var uiService = scope.Resolve<IUiService>();
			//	uiService.HandleError(ex); ;
			//}

			Server.ClearError();
		}

		//protected void Application_BeginRequest()
		//{
		//	//http://stackoverflow.com/questions/27504256/mvc-web-api-no-access-control-allow-origin-header-is-present-on-the-requested
		//	if (Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS")
		//	{
		//		Response.Flush();
		//	}
		//}
	}
}
