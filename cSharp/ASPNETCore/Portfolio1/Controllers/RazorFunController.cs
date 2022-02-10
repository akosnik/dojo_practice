using Microsoft.AspNetCore.Mvc;
using System;

namespace Portfolio1.Controllers
{
  public class RazorFunController : Controller
  {
    [HttpGet("razor")]
    public ViewResult Razor()
    {
      return View("Index");
    }
  }
}