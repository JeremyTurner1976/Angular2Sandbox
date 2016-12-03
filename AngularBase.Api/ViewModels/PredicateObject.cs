using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json.Linq;

namespace AngularBase.Api.ViewModels
{

	public class WhereObject
	{
		public string Property { get; set; }
		public string Condition { get; set; } //TODO enum this up
		public string ComparisonValue { get; set; }
		public string AndOr { get; set; } //TODO enum this up
	}

	public class OrderByObject 
	{
		public string Property { get; set; } 
		public string OrderDirection { get; set; } //TODO enum this up
	}

	public class PredicateObject
	{

		public int Skip { get; set; }
		public int Take { get; set; } = 10;

		public List<WhereObject> WhereObjects {
			get;
			set;
		} = new List<WhereObject>();

		public List<OrderByObject> OrderByObjects
		{
			get;
			set;
		} = new List<OrderByObject>();
	}
}