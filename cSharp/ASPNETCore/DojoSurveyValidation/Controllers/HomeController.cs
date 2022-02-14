using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DojoSurveyValidation.Models;

namespace DojoSurveyValidation.Controllers
{
  public class HomeController : Controller
  {

    public static Survey survey = new Survey();

    [HttpGet("")]
    public IActionResult Index()
    {
      return View();
    }

    [HttpPost("Create")]
    public IActionResult Create(Survey yourSurvey)
    {
      if (ModelState.IsValid)
      {
        survey = yourSurvey;
        return RedirectToAction("result");
      }
      return View("Index");
    }

    [HttpGet("result")]
    public IActionResult Result()
    {
      return View(model: survey);
    }
  }
}
