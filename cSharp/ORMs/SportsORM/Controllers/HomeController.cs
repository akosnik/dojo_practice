using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensLeagues = _context.Leagues
                .Where(league => league.Name.Contains("Women"))
                .ToList();

            ViewBag.HockeyLeagues = _context.Leagues
                .Where(league => league.Sport.Contains("Hockey"))
                .ToList();
                
            ViewBag.NonFootballLeagues = _context.Leagues
                .Where(league => !league.Sport.Contains("Football"))
                .ToList();

            ViewBag.ConferenceLeagues = _context.Leagues
                .Where(league => league.Name.Contains("Conference"))
                .ToList();

            ViewBag.AtlanticLeagues = _context.Leagues
                .Where(league => league.Name.Contains("Atlantic"))
                .ToList();

            ViewBag.DallasTeams = _context.Teams
                .Where(team => team.Location.Contains("Dallas"))
                .ToList();

            ViewBag.RaptorsTeams = _context.Teams
                .Where(team => team.TeamName.Contains("Raptors"))
                .ToList();

            ViewBag.CityTeams = _context.Teams
                .Where(team => team.Location.Contains("City"))
                .ToList();

            ViewBag.TTeams = _context.Teams
                .Where(team => team.TeamName.StartsWith("t"))
                .ToList();
            
            ViewBag.TeamsLocationAlphabetical = _context.Teams
                .OrderBy(team => team.Location)
                .ToList();
            
            ViewBag.TeamsReverseAlphabetical = _context.Teams
                .OrderByDescending(team => team.TeamName)
                .ToList();
            
            ViewBag.CooperPlayers = _context.Players
                .Where(player => player.LastName.Contains("Cooper"))
                .ToList();
            
            ViewBag.JoshuaPlayers = _context.Players
                .Where(player => player.FirstName.Contains("Joshua"))
                .ToList();
            
            ViewBag.CooperNotJoshuaPlayers = _context.Players
                .Where(player => player.LastName.Contains("Cooper"))
                .Where(player => !player.FirstName.Contains("Joshua"))
                .ToList();            
            
            ViewBag.AlexanderOrWyattPlayers = _context.Players
                .Where(player => player.FirstName.Contains("Alexander") 
                || player.FirstName.Contains("Wyatt"))
                .OrderBy(player => player.LastName)
                .OrderBy(player => player.FirstName)
                .ToList();
            

    
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}