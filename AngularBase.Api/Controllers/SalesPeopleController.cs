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
using Newtonsoft.Json;

namespace AngularBase.Api.Controllers
{
	public class SalesPeopleController : BaseApiController
	{
		// GET: api/SalesPeople
		public SalesPeopleController(AdventureWorks adventureWorks)
		{
			AdventureWorks = adventureWorks;
		}

		// GET: api/SalesPeople/5
		[ResponseType(typeof(SalesPerson))]
		public IHttpActionResult GetSalesPerson(int id)
		{
			//SalesPerson salesPerson = AdventureWorks.SalesPersons.Find(id);

			SalesPerson salesPerson = 
				AdventureWorks.SalesPersons
				//.Include(x => x.SalesOrderHeaders)
				//.Include(x => x.SalesPersonQuotaHistories)
				//.Include(x => x.SalesTerritoryHistories)
				//.Include(x => x.Stores)
				.FirstOrDefault(x => x.BusinessEntityID == id);

			if (salesPerson == null)
			{
				return NotFound();
			}

			return Ok(salesPerson);
		}

		// PUT: api/SalesPeople/5
		[ResponseType(typeof(void))]
		public IHttpActionResult PutSalesPerson(int id, SalesPerson salesPerson)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (id != salesPerson.BusinessEntityID)
			{
				return BadRequest();
			}

			AdventureWorks.Entry(salesPerson).State = EntityState.Modified;

			try
			{
				AdventureWorks.SaveChanges();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!SalesPersonExists(id))
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

		// POST: api/SalesPeople
		[ResponseType(typeof(SalesPerson))]
		public IHttpActionResult PostSalesPerson(SalesPerson salesPerson)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			AdventureWorks.SalesPersons.Add(salesPerson);

			try
			{
				AdventureWorks.SaveChanges();
			}
			catch (DbUpdateException)
			{
				if (SalesPersonExists(salesPerson.BusinessEntityID))
				{
					return Conflict();
				}
				else
				{
					throw;
				}
			}

			return CreatedAtRoute("DefaultApi", new { id = salesPerson.BusinessEntityID }, salesPerson);
		}

		// DELETE: api/SalesPeople/5
		[ResponseType(typeof(SalesPerson))]
		public IHttpActionResult DeleteSalesPerson(int id)
		{
			SalesPerson salesPerson = AdventureWorks.SalesPersons.Find(id);
			if (salesPerson == null)
			{
				return NotFound();
			}

			AdventureWorks.SalesPersons.Remove(salesPerson);
			AdventureWorks.SaveChanges();

			return Ok(salesPerson);
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				AdventureWorks.Dispose();
			}
			base.Dispose(disposing);
		}

		private bool SalesPersonExists(int id)
		{
			return AdventureWorks.SalesPersons.Count(e => e.BusinessEntityID == id) > 0;
		}
	}
}