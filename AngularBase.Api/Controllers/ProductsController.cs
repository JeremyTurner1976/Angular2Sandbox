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
		public PagedResponse<ProductsViewModel.ListProduct> GetProducts(PredicateObject predicateObject)
		{
			try
			{
				//NOTE: I used to send a stringified json object to handle this
				//and a factory to build the predicate set and sql query 
				//and params based on object property types from that string
				//	It is very straightforward using reflection to ensure 
				//	conditional values are types expected
				//	and wheres and orderbys point to properties of the object
				//	and no issues arise from Little Bobby Tables (string checks)
				//Can use RowNumber Based SQL selects, ensure all API
				//GetMultiples() and GetCounts() handle this

				return new PagedResponse<ProductsViewModel.ListProduct>()
				{
					Data = viewModel.GetProducts(predicateObject),
					Total = viewModel.GetProductCount(predicateObject)
				};
			}
			catch (Exception ex)
			{
				var that = ex;
				//TODO UIService for error handling and logging
				return new PagedResponse<ProductsViewModel.ListProduct>()
				{
					Data = new List<ProductsViewModel.ListProduct>().AsQueryable(),
					Total = 0,
					Error = ex.Message + Environment.NewLine + Environment.NewLine + ex.StackTrace
				};
			}
		}

		// GET: api/Products/5
		[ResponseType(typeof(Product))]
		public IHttpActionResult GetProduct(int id)
		{
			//Product product = AdventureWorks.Products.Find(id);

			Product product =
				AdventureWorks.Products
				.Include(x => x.ProductModel)
				.Include(x => x.ProductDocument)
				.Include(x => x.ProductProductPhotoes)
				.Include(x => x.ProductReviews)
				.FirstOrDefault(x => x.ProductID == id);

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