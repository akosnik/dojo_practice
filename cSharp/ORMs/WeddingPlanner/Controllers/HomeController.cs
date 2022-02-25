using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WeddingPlanner.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace WeddingPlanner.Controllers
{
  public class HomeController : Controller
  {
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
      _context = context;
      _logger = logger;
    }

    [HttpGet("")]
    public IActionResult LogReg()
    {
      return View("LogReg");
    }

    [HttpPost("registering")]
    public IActionResult Registering(User newUser)
    {
      if (ModelState.IsValid)
      {
        if (_context.Users.Any(u => u.Email == newUser.Email))
        {
          ModelState.AddModelError("Email", "Email already registered.");
          return View("LogReg");
        }
        PasswordHasher<User> Hasher = new PasswordHasher<User>();
        newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
        _context.Users.Add(newUser);
        _context.SaveChanges();
        HttpContext.Session.SetInt32("UserId", newUser.UserId);
        HttpContext.Session.SetString("UserEmail", newUser.Email);
        return RedirectToAction("Weddings", "Wedding");
      }
      return View("LogReg");
    }

    [HttpPost("logging")]
    public IActionResult Logging(LogUser logUser)
    {
      if (ModelState.IsValid)
      {
        User dbUser = _context.Users.FirstOrDefault(u => u.Email == logUser.LogEmail);
        if (dbUser == null)
        {
          ModelState.AddModelError("LogEmail", "Login failed.");
          return View("LogReg");
        }
        PasswordHasher<LogUser> Hasher = new PasswordHasher<LogUser>();
        PasswordVerificationResult result = Hasher.VerifyHashedPassword(logUser, dbUser.Password, logUser.LogPassword);
        if (result == 0)
        {
          ModelState.AddModelError("LogEmail", "Login failed.");
          return View("LogReg");
        }
        HttpContext.Session.SetInt32("UserId", dbUser.UserId);
        HttpContext.Session.SetString("UserEmail", dbUser.Email);
        return RedirectToAction("Weddings", "Wedding");
      }
      return View("LogReg");
    }


    [HttpGet("logout")]
    public IActionResult Logout()
    {
      HttpContext.Session.Clear();
      return RedirectToAction("LogReg");
    }
  }
}
