using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LoginReg.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace LoginReg.Controllers
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
    public IActionResult Register()
    {
      return View("Register");
    }

    [HttpPost("registering")]
    public IActionResult Registering(User newUser)
    {
      if (ModelState.IsValid)
      {
        if (_context.Users.Any(u => u.Email == newUser.Email))
        {
          ModelState.AddModelError("Email", "Email already registered.");
          return View("Register");
        }
        PasswordHasher<User> Hasher = new PasswordHasher<User>();
        newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
        _context.Users.Add(newUser);
        _context.SaveChanges();
        HttpContext.Session.SetString("UserEmail", newUser.Email);
        return RedirectToAction("Success");
      }
      return View("Register");
    }

    [HttpGet("login")]
    public IActionResult Login()
    {
      return View("Login");
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
          return View("Login");
        }
        PasswordHasher<LogUser> Hasher = new PasswordHasher<LogUser>();
        PasswordVerificationResult result = Hasher.VerifyHashedPassword(logUser, dbUser.Password, logUser.LogPassword);
        if (result == 0)
        {
          ModelState.AddModelError("LogEmail", "Login failed.");
          return View("Login");
        }
        HttpContext.Session.SetString("UserEmail", dbUser.Email);
        return RedirectToAction("Success");
      }
      return View("Login");
    }

    [HttpGet("success")]
    public IActionResult Success()
    {
      string email = HttpContext.Session.GetString("UserEmail");
      User loggedInUser = _context.Users.FirstOrDefault(u => u.Email == email);
      return View("Success", model: loggedInUser);
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
