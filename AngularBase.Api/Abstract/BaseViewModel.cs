using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngularBase.Data.AdventureWorks;

namespace AngularBase.Api.Abstract
{
	public interface IViewModel
	{

	}

	public class BaseViewModel : IViewModel
	{
		//injected via autofac, if called in constructor
		protected AdventureWorks AdventureWorks { get; set; }
	}
}