using System.Data.Entity;
using System.Web.Http;
using AngularBase.Api.Controllers;
using AngularBase.Data.AdventureWorks;
using Autofac;
using Autofac.Integration.WebApi;

namespace AngularBase.Api
{
	public class AutofacConfig
	{
		public static IContainer Container { get; set; }


		public static void RegisterAutofac()
		{
			var builder = new ContainerBuilder();

			//Implement the specific injectors for Data and the view models
			builder.RegisterType<AdventureWorks>().AsSelf().As<DbContext>()
                .PropertiesAutowired().InstancePerLifetimeScope();


            // Register your Web API controllers
            builder.RegisterApiControllers(typeof (ConstantsController).Assembly);
			builder.RegisterApiControllers(typeof (ProductsController).Assembly);
			builder.RegisterApiControllers(typeof (SalesPeopleController).Assembly);

			// OPTIONAL: Register the Autofac filter provider.
			builder.RegisterWebApiFilterProvider(GlobalConfiguration.Configuration);

			// Set the dependency resolver to be Autofac.
			var container = builder.Build();
			Container = container;

			// Web API
			var resolver = new AutofacWebApiDependencyResolver(container);
			GlobalConfiguration.Configuration.DependencyResolver = resolver;
		}

	}
}