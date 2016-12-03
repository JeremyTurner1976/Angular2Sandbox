using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularBase.Api.ViewModels
{
	public class PagedResponse<T> : ApiResponse<T>
	{
		public int Total { get; set; }
		public IQueryable<T> Data { get; set; }
	}
}