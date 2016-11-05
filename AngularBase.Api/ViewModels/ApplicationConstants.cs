using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngularBase.Data.AdventureWorks;

namespace AngularBase.Api.ViewModels
{
	public class ApplicationConstants
	{
		public IQueryable<ProductCategory> ProductCategories { get; set; }
		public IQueryable<ProductSubcategory> ProductSubcategories { get; set; }
	}
}