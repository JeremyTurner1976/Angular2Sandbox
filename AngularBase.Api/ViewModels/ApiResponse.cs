using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularBase.Api.ViewModels
{
	public abstract class ApiResponse<T>
	{
		public string Error { get; set; }
	}
}