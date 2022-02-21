using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers
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

    public IActionResult Index()
    {
      List<Dish> AllDishes = _context.Dishes.ToList();
      return View(model: AllDishes);
    }

    [HttpGet("dish/new")]
    public IActionResult NewDish()
    {
      return View();
    }

    [HttpPost("dish/create")]
    public IActionResult CreateDish(Dish dish)
    {
      if (ModelState.IsValid)
      {
        _context.Add(dish);
        _context.SaveChanges();
        return RedirectToAction("Index");
      }
      return View("NewDish");
    }

    [HttpGet("view/{dishID}")]
    public IActionResult ViewDish(int dishID)
    {
      Dish dishToView = _context.Dishes.FirstOrDefault(d => d.DishId == dishID);
      return View(dishToView);
    }

    [HttpGet("edit/{dishID}")]
    public IActionResult EditDish(int dishID)
    {
      Dish dishToView = _context.Dishes.FirstOrDefault(d => d.DishId == dishID);
      return View(dishToView);
    }

    [HttpPost("update/{dishID}")]
    public IActionResult UpdateDish(int dishID, Dish editedDish)
    {
      Dish original = _context.Dishes.FirstOrDefault(d => d.DishId == dishID);
      if (ModelState.IsValid)
      {
        original.Name = editedDish.Name;
        original.Chef = editedDish.Chef;
        original.Tastiness = editedDish.Tastiness;
        original.Calories = editedDish.Calories;
        original.Description = editedDish.Description;
        _context.SaveChanges();
        return RedirectToAction("Index");
      }
      return View("EditDish", model: original);
    }

    [HttpGet("delete/{dishID}")]
    public IActionResult DeleteDish(int dishID)
    {
      Dish dish = _context.Dishes.SingleOrDefault(d => d.DishId == dishID);
      _context.Dishes.Remove(dish);
      _context.SaveChanges();
      return RedirectToAction("Index");
    }
  }
}
