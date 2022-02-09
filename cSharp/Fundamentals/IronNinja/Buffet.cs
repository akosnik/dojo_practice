using System;
using System.Collections.Generic;

namespace IronNinja
{

  public class Buffet
  {
    List<IConsumable> Menu;
    public Buffet()
    {
      Menu = new List<IConsumable>()
      {
        new Food("Pizza", 600, false, false),
        new Food("Lo Mein", 500, false, false),
        new Food("PB+J", 400, false, true),
        new Food("Vindaloo", 400, true, false),
        new Food("Burrito", 600, true, false),
        new Food("Ice Cream", 400, false, true),
        new Food("Salad", 200, false, false),
        new Drink("Falooda", 250, false),
        new Drink("Horchata", 300, false),
        new Drink("Water", 0, false)
      };
    }
    public IConsumable Serve()
    {
      Random rand = new Random();
      int idx = rand.Next(Menu.Count);
      return Menu[idx];
    }
  }
}