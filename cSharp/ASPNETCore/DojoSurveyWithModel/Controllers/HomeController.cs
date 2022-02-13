using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DojoSurveyWithModel.Models;


namespace DojoSurveyWithModel.Controllers
{
  public class HomeController : Controller
  {

    public static Survey survey = new Survey();

    [HttpGet("")]
    public IActionResult Index()
    {
      return View();
    }

    [HttpPost("survey")]
    public IActionResult Submission(Survey yourSurvey)
    {
      survey = yourSurvey;
      return RedirectToAction("result");
    }

    [HttpGet("result")]
    public IActionResult Result()
    {
      Console.WriteLine("SURVEY NAME ~~~~~~~ " + survey.Name);
      return View(model: survey);
    }
  }
}
