using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using AngularBase.Data.AdventureWorks;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularBase.Api
{
	public static class WebApiConfig
	{
		public class ValidateModelAttribute : ActionFilterAttribute
		{
			public override void OnActionExecuting(HttpActionContext actionContext)
			{
				if (actionContext.ModelState.IsValid == false)
				{
					actionContext.Response = actionContext.Request.CreateErrorResponse(
						HttpStatusCode.BadRequest, actionContext.ModelState);
				}
			}
		}


		public static void Register(HttpConfiguration config)
		{
			//register validation error json returns (breeze now handles this)
			config.Filters.Add(new ValidateModelAttribute());

			//Web API configuration and services

			//make this return camelcased Json
			JsonMediaTypeFormatter jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
			jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

			//add other supported media types
			config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/json"));
			config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

			config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
			config.Formatters.JsonFormatter.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;

			//return JSON for all requests for now
			//If XML output is desired, the objects to be serialized in XML will need DataContracts and IsReference="true"
			config.Formatters.Remove(config.Formatters.XmlFormatter);

			config.MapHttpAttributeRoutes();

			config.Routes.MapHttpRoute(
				name: "DefaultApi",
				routeTemplate: "api/{controller}/{id}",
				defaults: new { id = RouteParameter.Optional }
			);

            config.EnableCors();
        }
	}
}
