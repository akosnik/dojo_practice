using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductsCategories.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductsCategories.Controllers
{
  public class HomeController : Controller
  {
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;
    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
      _context = context;
      _logger = logger;
    }

    [HttpGet("categories")]
    public IActionResult Categories()
    {
      List<Category> allCategories = _context.Categories.ToList();
      ViewBag.AllCategories = allCategories;
      return View();
    }

    [HttpPost("category/create")]
    public IActionResult CreateCategory(Category newCategory)
    {
      if (ModelState.IsValid)
      {
        _context.Add(newCategory);
        _context.SaveChanges();
        return RedirectToAction("Categories");
      }
      List<Category> allCategories = _context.Categories.ToList();
      ViewBag.AllCategories = allCategories;
      return View("Categories");
    }

    [HttpGet("products")]
    public IActionResult Products()
    {
      List<Product> allProducts = _context.Products.ToList();
      ViewBag.AllProducts = allProducts;
      return View();
    }

    [HttpPost("products/create")]
    public IActionResult CreateProduct(Product newProduct)
    {
      if (ModelState.IsValid)
      {
        _context.Add(newProduct);
        _context.SaveChanges();
        return RedirectToAction("Products");
      }
      List<Product> allProducts = _context.Products.ToList();
      ViewBag.AllProducts = allProducts;
      return View("Products");
    }

    [HttpGet("categories/{catId}")]
    public IActionResult OneCategory(int catId)
    {
      Category OneCategory = _context.Categories.Include(c => c.Items).ThenInclude(i => i.Product).FirstOrDefault(c => c.CategoryId == catId);
      ViewBag.AllProducts = _context.Products.ToList();
      return View(OneCategory);
    }

    [HttpGet("products/{prodId}")]
    public IActionResult OneProduct(int prodId)
    {
      Product OneProduct = _context.Products.Include(p => p.Types).ThenInclude(t => t.Category).FirstOrDefault(p => p.ProductId == prodId);
      ViewBag.AllCategories = _context.Categories.ToList();
      return View(OneProduct);
    }

    [HttpPost("addItem")]
    public IActionResult AddItem(Association newAssociation)
    {
      _context.Association.Add(newAssociation);
      _context.SaveChanges();
      return Redirect($"/categories/{newAssociation.CategoryId}");
    }

    [HttpPost("addType")]
    public IActionResult AddType(Association newAssociation)
    {
      _context.Association.Add(newAssociation);
      _context.SaveChanges();
      return Redirect($"/products/{newAssociation.ProductId}");
    }
  }
}
