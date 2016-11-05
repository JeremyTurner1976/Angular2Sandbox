using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AngularBase.Api.Abstract;
using AngularBase.Data.AdventureWorks;

namespace AngularBase.Api.Controllers
{
	public class ProductsController : BaseApiController
	{
		public ProductsController(AdventureWorks adventureWorks)
		{
			AdventureWorks = adventureWorks;
		}

		// GET: api/Products
		public IQueryable<Product> GetProducts()
		{
			return AdventureWorks.Products.Where(x => x.Name != null && x.ProductID <= 1000);
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