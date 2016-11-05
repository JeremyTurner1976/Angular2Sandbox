using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using AngularBase.Data.AdventureWorks;

namespace AngularBase.Api.Abstract
{
	[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
	public abstract class BaseApiController : ApiController
	{
		//injected via autofac, if called in constructor
		protected AdventureWorks AdventureWorks { get; set; }
	}
}