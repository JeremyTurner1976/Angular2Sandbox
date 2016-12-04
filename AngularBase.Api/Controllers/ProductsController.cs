using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web.Http.ModelBinding;
using AngularBase.Api.Abstract;
using AngularBase.Api.ViewModels;
using AngularBase.Data.AdventureWorks;

namespace AngularBase.Api.Controllers
{


	public class ProductsController : BaseApiController
	{
		private readonly ProductsViewModel viewModel;

		public ProductsController(
			AdventureWorks adventureWorks,
			ProductsViewModel productsViewModel)
		{
			AdventureWorks = adventureWorks;
			viewModel = productsViewModel;
		}

		[HttpPost]
		[Route("api/v0_0/pagedProducts")]
		public PagedResponse<ListProduct> GetProducts(PredicateObject predicateObject)
		{
			try
			{
				//NOTE: I will send a stringified json object to handle this
				//and a factory to build the predicate set and sql query 
				//both in C# and in Angular 2, this will create a dynamic query
				//from those params based on object property types from the object itself
				//	It is very straightforward using reflection to ensure 
				//	conditional values are types expected
				//	and wheres and orderbys point to properties of the object
				//	and no issues arise from Little Bobby Tables (string checks ;drop tables)
				//	-This will be the first public version of that API, 
				//   previous had 0 vulnerabilities in penetration testing

				//Will use RowNumber Based SQL selects
				//Handled by Entity: Insert<T>(Object), Update<T>(Object), Delete<T>(ObjectId)
				//Accepts the Predicate Object: Get[Object](), Get[Object]s(), and Get[Object]Count()
					//This only handles very simple joins

				//Predicate object property creation needs filters and cleans
				//This is the simplest case, will have to extend the where for each filter type
				//Still leaning towards a SQL dynamic command using RowNumber
				//and intelligent Safe scripts

				//NOTE: On this rebuild also add a front end string [] for each property
				//I want returned from the full list (can clean up partial class selection)

				//Working on matching breeze api again but for RxJs
				/*
				 Breeze client side code:
				 return breeze.EntityQuery.from('TodoLists')
					  .select('name','id','propertyA', ...)
					  .where('Title', 'startsWith', 'T')
					  .take(3).orderBy('title')
					  .using(manager).execute()
					  .then(success).catch(failure)
				*/

				return new PagedResponse<ListProduct>()
				{
					Data = viewModel.GetProducts(predicateObject),
					Total = viewModel.GetProductCount(predicateObject)
				};
			}
			catch (Exception ex)
			{
				var that = ex;
				//TODO UIService for error handling and logging
				return new PagedResponse<ListProduct>()
				{
					Data = new List<ListProduct>().AsQueryable(),
					Total = 0,
					Error = ex.Message + Environment.NewLine + Environment.NewLine + ex.StackTrace
				};
			}
		}

		// GET: api/Products/5
		[ResponseType(typeof(FullProduct))]
		public IHttpActionResult GetProduct(int id)
		{
			//Product product = AdventureWorks.Products.Find(id);

			FullProduct product = viewModel.GetProduct(id);
			if (product == null)
			{
				return NotFound();
			}

			return Ok(product);
		}

		// PUT: api/Products/5
		[ResponseType(typeof(void))]
		public IHttpActionResult PutProduct(int id, Product product)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (id != product.ProductID)
			{
				return BadRequest();
			}

			AdventureWorks.Entry(product).State = EntityState.Modified;

			try
			{
				AdventureWorks.SaveChanges();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!ProductExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return StatusCode(HttpStatusCode.NoContent);
		}

		// POST: api/Products
		[ResponseType(typeof(Product))]
		public IHttpActionResult PostProduct(Product product)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			AdventureWorks.Products.Add(product);
			AdventureWorks.SaveChanges();

			return CreatedAtRoute("DefaultApi", new { id = product.ProductID }, product);
		}

		// DELETE: api/Products/5
		[ResponseType(typeof(Product))]
		public IHttpActionResult DeleteProduct(int id)
		{
			Product product = AdventureWorks.Products.Find(id);
			if (product == null)
			{
				return NotFound();
			}

			AdventureWorks.Products.Remove(product);
			AdventureWorks.SaveChanges();

			return Ok(product);
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				AdventureWorks.Dispose();
			}
			base.Dispose(disposing);
		}

		private bool ProductExists(int id)
		{
			return AdventureWorks.Products.Count(e => e.ProductID == id) > 0;
		}
	}
}