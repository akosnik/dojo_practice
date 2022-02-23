using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChefsNDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace ChefsNDishes.Controllers
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

    [HttpGet("")]
    public IActionResult Chefs()
    {
      List<Chef> AllChefs = _context.Chefs
        .Include(chef => chef.Dishes)
        .ToList();
      return View("Chefs", model: AllChefs);
    }

    [HttpGet("chef/new")]
    public IActionResult NewChef()
    {
      return View();
    }

    [HttpPost("chef/create")]
    public IActionResult CreateChef(Chef chef)
    {
      if (ModelState.IsValid)
      {
        int now = int.Parse(DateTime.Now.ToString("yyyyMMdd"));
        int dob = int.Parse(chef.DOB.ToString("yyyyMMdd"));
        int age = (now - dob) / 10000;
        if (age < 18)
        {
          ModelState.AddModelError("DOB", "Chef must be 18 or older to sign up.");
          return View("NewChef");
        }

        _context.Add(chef);
        _context.SaveChanges();
        return RedirectToAction("Chefs");
      }
      return View("NewChef");
    }

    [HttpGet("dishes")]
    public IActionResult Dishes()
    {
      List<Dish> dishes = _context.Dishes
        .Include(d => d.Chef)
        .ToList();
      return View("Dishes", model: dishes);
    }

    [HttpGet("dish/new")]
    public IActionResult NewDish()
    {
      List<Chef> chefs = _context.Chefs.ToList();
      ViewBag.Chefs = chefs;
      return View();
    }

    [HttpPost("dish/create")]
    public IActionResult CreateDish(Dish dish)
    {
      if (ModelState.IsValid)
      {
        _context.Add(dish);
        _context.SaveChanges();
        return RedirectToAction("Dishes");
      }
      List<Chef> chefs = _context.Chefs.ToList();
      ViewBag.Chefs = chefs;
      return View("NewDish");
    }

  }
}
