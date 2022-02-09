using System;

namespace IronNinja
{
  class SweetTooth : Ninja
  {
    public override bool IsFull
    {
      get { return calorieIntake > 1500; }
    }

    public override void Consume(IConsumable item)
    {

      if (IsFull)
      {
        Console.WriteLine("This sweet tooth is too full to eat.");
      }
      else
      {
        if (item.IsSweet)
        {
          this.calorieIntake += 10;
        }
        this.calorieIntake += item.Calories;
        this.ConsumptionHistory.Add(item);
        item.GetInfo();
      }

    }
  }
}
