using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;

namespace DojoSurvey.Controllers
{
  public class SurveyController : Controller
  {
    public static List<string> FormInfo = new List<string>();

    [HttpGet("")]
    public ViewResult Index()
    {
      return View();
    }


    [HttpPost("formpost")]
    public IActionResult Formpost(string name, string location, string language, string comment)
    {

      FormInfo.Add(name);
      FormInfo.Add(location);
      FormInfo.Add(language);
      FormInfo.Add(comment);

      Console.WriteLine("STEP 1 ---" + FormInfo[0]);

      return RedirectToAction("Result");
    }


    [HttpGet("result")]
    public ViewResult Result()
    {
      Console.WriteLine("STEP 2 ---" + FormInfo[0]);
      ViewBag.FormInfo = FormInfo;
      return View("Result");
    }


  }
}