using System;

namespace IronNinja
{
  class SpiceHound : Ninja
  {
    public override bool IsFull
    {
      get { return calorieIntake > 1200; }
    }

    public override void Consume(IConsumable item)
    {

      if (IsFull)
      {
        Console.WriteLine("This spice hound is too full to eat.");
      }
      else
      {
        if (item.IsSpicy)
        {
          this.calorieIntake -= 5;
        }
        this.calorieIntake += item.Calories;
        this.ConsumptionHistory.Add(item);
        item.GetInfo();
      }

    }
  }
}
