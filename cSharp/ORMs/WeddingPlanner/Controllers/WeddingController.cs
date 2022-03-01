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
  public class WeddingController : Controller
  {
    private MyContext _context;

    public WeddingController(MyContext context)
    {
      _context = context;
    }

    [HttpGet("weddings")]
    public IActionResult Weddings()
    {
      string email = HttpContext.Session.GetString("UserEmail");
      if (email == null)
      {
        return RedirectToAction("LogReg", "Home");
      }
      User loggedInUser = _context.Users.FirstOrDefault(u => u.Email == email);
      ViewBag.LoggedInUser = loggedInUser;

      List<Wedding> weddings = _context.Weddings
      .Include(w => w.GuestList)
      .ThenInclude(gl => gl.User)
      .ToList();
      return View("Weddings", model: weddings);
    }

    [HttpGet("weddings/new")]
    public IActionResult NewWedding()
    {
      string email = HttpContext.Session.GetString("UserEmail");
      if (email == null)
      {
        return RedirectToAction("LogReg", "Home");
      }
      return View();
    }

    [HttpPost("weddings/create")]
    public IActionResult CreateWedding(Wedding newWedding)
    {
      if (ModelState.IsValid)
      {
        int? SessionId = HttpContext.Session.GetInt32("UserId");
        newWedding.CreatorId = (int)SessionId;
        // newWedding.CreatorId = (int)HttpContext.Session.GetInt32("UserId");
        _context.Add(newWedding);
        _context.SaveChanges();
        return Redirect($"/weddings/{newWedding.WeddingId}");
      }
      return View("NewWedding");
    }

    [HttpGet("weddings/{wedId}")]
    public IActionResult OneWedding(int wedId)
    {
      string email = HttpContext.Session.GetString("UserEmail");
      if (email == null)
      {
        return RedirectToAction("LogReg", "Home");
      }
      Wedding Wedding = _context.Weddings
        .Include(w => w.Creator)
        .Include(w => w.GuestList)
        .ThenInclude(gl => gl.User)
        .FirstOrDefault(w => w.WeddingId == wedId);
      return View(Wedding);
    }

    [HttpGet("weddings/delete/{wedId}")]
    public IActionResult DeleteWedding(int wedId)
    {
      Wedding WeddingToDelete = _context.Weddings.SingleOrDefault(w => w.WeddingId == wedId);
      _context.Weddings.Remove(WeddingToDelete);
      _context.SaveChanges();
      return RedirectToAction("Weddings");
    }

    [HttpGet("weddings/rsvp/{wedId}/{guestId}")]
    public IActionResult RSVP(int wedId, int guestId)
    {
      GuestList newRSVP = new GuestList();
      newRSVP.WeddingId = wedId;
      newRSVP.UserId = guestId;
      _context.GuestList.Add(newRSVP);
      _context.SaveChanges();
      return RedirectToAction("Weddings");
    }

    [HttpGet("weddings/cancelRsvp/{wedId}/{guestId}")]
    public IActionResult CancelRSVP(int wedId, int guestId)
    {
      GuestList itemToDelete = _context.GuestList.SingleOrDefault(gl => gl.WeddingId == wedId && gl.UserId == guestId);
      _context.GuestList.Remove(itemToDelete);
      _context.SaveChanges();
      return RedirectToAction("Weddings");
    }
  }
}
