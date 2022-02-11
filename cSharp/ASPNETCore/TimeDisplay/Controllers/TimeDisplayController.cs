using Microsoft.AspNetCore.Mvc;
using System;

namespace TimeDisplay.Controllers
{

  public class TimeDisplayController : Controller
  {

    [HttpGet("")]
    public ViewResult Index()
    {
      String CurrentTime = DateTime.Now.ToString("dd MMMM yyyy, hh:mm tt");
      ViewBag.time = CurrentTime;
      return View();
    }
  }
}