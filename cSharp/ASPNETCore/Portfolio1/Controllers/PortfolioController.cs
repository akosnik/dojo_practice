using Microsoft.AspNetCore.Mvc;

using System;

namespace Portfolio1.Controllers
{
  public class PortfolioController : Controller
  {
    [HttpGet("")]
    public ViewResult Index()
    {
      return View();
    }

    [HttpGet("/projects")]
    public ViewResult Projects()
    {
      return View();
    }

    [HttpGet("/contact")]
    public ViewResult Contact()
    {
      Console.WriteLine("CONSOLE");
      return View();
    }
  }
}