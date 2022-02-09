using System;

namespace IronNinja
{
  class Program
  {
    static void Main(string[] args)
    {
      Buffet buffet = new Buffet();
      SweetTooth sweety = new SweetTooth();
      SpiceHound spicy = new SpiceHound();

      while (!sweety.IsFull)
      {
        sweety.Consume(buffet.Serve());
      }
      while (!spicy.IsFull)
      {
        spicy.Consume(buffet.Serve());
      }
      int spicyCount = spicy.ConsumptionHistory.Count;
      int sweetyCount = sweety.ConsumptionHistory.Count;

      if (spicyCount > sweetyCount)
      {
        Console.WriteLine($"Spicy ate the most by eating {spicyCount} items.");
      }
      else if (spicyCount < sweetyCount)
      {
        Console.WriteLine($"Sweety ate the most by eating {sweetyCount} items.");
      }
      else
      {
        Console.WriteLine($"Spicy and sweety both at {sweetyCount} items.");
      }
    }
  }
}
