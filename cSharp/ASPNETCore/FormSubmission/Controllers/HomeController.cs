using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FormSubmission.Models;

namespace FormSubmission.Controllers
{
  public class HomeController : Controller
  {
    public static User saveUser = new User();

    [HttpGet("")]
    public IActionResult Index()
    {
      return View();
    }

    [HttpPost("Create")]
    public IActionResult Create(User myUser)
    {
      if (ModelState.IsValid)
      {
        saveUser = myUser;
        return RedirectToAction("result");
      }
      else
      {
        return View("Index");
      }
    }

    [HttpGet("result")]
    public IActionResult Result()
    {
      return View(model: saveUser);
    }



    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
