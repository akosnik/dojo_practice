using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SimpleLoginReg.Models;

namespace SimpleLoginReg.Controllers
{
  public class HomeController : Controller
  {

    [HttpGet()]
    public IActionResult Index()
    {
      return View();
    }

    [HttpPost("Login")]
    public IActionResult Login(Login login)
    {
      if (ModelState.IsValid)
      {
        return RedirectToAction("Welcome");
      }
      return View("Index");
    }

    [HttpPost("Register")]
    public IActionResult Register(Registration registration)
    {
      if (ModelState.IsValid)
      {
        return RedirectToAction("Welcome");
      }
      return View("Index");
    }

    [HttpGet("Welcome")]
    public IActionResult Welcome()
    {
      return View("Welcome");
    }
  }
}
