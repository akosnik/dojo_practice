using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
  public class HomeController : Controller
  {
    [HttpGet("")]
    public IActionResult Index()
    {
      string message = "THIS IS MY MESSAGE";
      return View(model: message);
    }

    [HttpGet("numbers")]
    public IActionResult Numbers()
    {
      int[] numbers = { 0, 1, 2, 3, 5, 7, 11 };
      return View(model: numbers);
    }

    [HttpGet("user")]
    public IActionResult SingleUser()
    {
      User user = new User()
      {
        FirstName = "Deltron",
        LastName = "Zee"
      };
      return View(model: user);
    }

    [HttpGet("users")]
    public IActionResult Users()
    {
      User a = new User()
      {
        FirstName = "Ace",
        LastName = "Ventura"
      };
      User b = new User()
      {
        FirstName = "Bee",
        LastName = "Agressive"
      };
      User c = new User()
      {
        FirstName = "Cici",
        LastName = "Babcock"
      };

      List<User> users = new List<User>()
      {
        a, b, c
      };

      return View(model: users);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
