using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductsCategories.Models;

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
  }
}
