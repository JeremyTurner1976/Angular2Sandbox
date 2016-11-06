﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Drawing;
using System.Linq;
using System.Web;
using AngularBase.Api.Abstract;
using AngularBase.Data.AdventureWorks;

namespace AngularBase.Api.ViewModels
{
	public class ProductsViewModel : BaseViewModel
	{
		private const string NoImageString = "no_image";

		public ProductsViewModel(AdventureWorks adventureWorks)
		{
			AdventureWorks = adventureWorks;
		}

		public IQueryable<ListProduct> GetProducts()
		{
			var products = AdventureWorks.Products

				.Join(AdventureWorks.ProductProductPhotoes,
					 x => x.ProductID,
					 y => y.ProductID,
					 (x, y) => new { x, y })
				.Join(AdventureWorks.ProductPhotoes,
					a => a.y.ProductPhotoID,
					b => b.ProductPhotoID,
					(a, b) => new { a, b })
				.Where(
					product => product.a.x.Name != null
					&& product.a.x.ListPrice > 0
					&& product.a.x.StandardCost > 0
					&& product.b.ThumbNailPhoto != null
					&& product.b.LargePhoto != null
					&& !product.b.ThumbnailPhotoFileName.Contains(NoImageString)
					&& !product.b.LargePhotoFileName.Contains(NoImageString))
				.Take(100)
				.OrderBy(product => product.a.x.SellStartDate)
				.Select(product => new ListProduct()
				{
					ProductID = product.a.x.ProductID,
					Name = product.a.x.Name,
					ProductNumber = product.a.x.ProductNumber,
					Color = product.a.x.Color,
					StandardCost = product.a.x.StandardCost,
					ListPrice = product.a.x.ListPrice,
					DaysToManufacture = product.a.x.DaysToManufacture,
					ProductLine = product.a.x.ProductLine,
					Class = product.a.x.Class,
					Style = product.a.x.Style,
					ProductSubcategoryID = product.a.x.ProductSubcategoryID,
					ProductModelID = product.a.x.ProductModelID,
					SellStartDate = product.a.x.SellStartDate,
					ProductThumbnail = product.b.ThumbNailPhoto,
					ProductThumbnailFileName = product.b.ThumbnailPhotoFileName
				});

			return products;
		}


		public class ListProduct
		{
			public int ProductID { get; set; }

			[Required]
			[StringLength(50)]
			public string Name { get; set; }

			[Required]
			[StringLength(25)]
			public string ProductNumber { get; set; }

			[StringLength(15)]
			public string Color { get; set; }

			[Column(TypeName = "money")]
			public decimal StandardCost { get; set; }

			[Column(TypeName = "money")]
			public decimal ListPrice { get; set; }

			public int DaysToManufacture { get; set; }

			[StringLength(2)]
			public string ProductLine { get; set; }

			[StringLength(2)]
			public string Class { get; set; }

			[StringLength(2)]
			public string Style { get; set; }

			public int? ProductSubcategoryID { get; set; }

			public int? ProductModelID { get; set; }

			public DateTime SellStartDate { get; set; }

			public ICollection<ProductProductPhoto> ProductProductPhotoes { get; set; }

			public byte[] ProductThumbnail { get; set; }

			public string Base64Thumbnail { get; set; }

			public string ProductThumbnailFileName { get; set; }
		}

	}
}