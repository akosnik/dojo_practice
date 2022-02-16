using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RandomPasscode.Models;
using Microsoft.AspNetCore.Http;



namespace RandomPasscode.Controllers
{

  public class HomeController : Controller
  {
    [HttpGet()]
    public IActionResult Index()
    {
      string[] chars = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" };
      Random rand = new Random();
      string randomPass = "";
      for (int i = 0; i < 14; i++)
      {
        randomPass += chars[rand.Next(chars.Length)];
      }
      ViewBag.RandomPass = randomPass;

      if (HttpContext.Session.GetInt32("Count") == null)
      {
        HttpContext.Session.SetInt32("Count", 0);
      }
      int? count = HttpContext.Session.GetInt32("Count");
      HttpContext.Session.SetInt32("Count", (int)++count);
      ViewBag.Count = count;

      return View("Index");
    }
  }
}
