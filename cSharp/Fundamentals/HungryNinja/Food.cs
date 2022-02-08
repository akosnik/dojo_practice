using System;
using System.Collections.Generic;

namespace HungryNinja
{
  public class Food
  {
    public string Name;
    public int Calories;
    public bool isSpicy;
    public bool isSweet;

    public Food(string name, int cal, bool spice, bool sweet)
    {
      Name = name;
      Calories = cal;
      isSpicy = spice;
      isSweet = sweet;
    }
  }

  public class Buffet
  {
    public List<Food> Menu;
    public Buffet()
    {
      Menu = new List<Food>()
      {
        new Food("Pizza", 1600, false, false),
        new Food("Lo Mein", 1500, false, false),
        new Food("PB+J", 800, false, true),
        new Food("Vindaloo", 900, true, false),
        new Food("Burrito", 1000, true, false),
        new Food("Ice Cream", 800, false, true),
        new Food("Salad", 300, false, false),
      };
    }
    public Food Serve()
    {
      Random rand = new Random();
      int idx = rand.Next(Menu.Count);
      return Menu[idx];
    }
  }
}