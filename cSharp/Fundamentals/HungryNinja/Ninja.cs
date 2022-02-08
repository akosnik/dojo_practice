using System;
using System.Collections.Generic;

namespace HungryNinja
{
  public class Ninja
  {
    int CalorieIntake;
    List<Food> FoodHistory;
    public Ninja()
    {
      CalorieIntake = 0;
      FoodHistory = new List<Food>();
    }

    public bool isFull()
    {
      return this.CalorieIntake > 1200;
    }

    public void Eat(Food item)
    {
      if (this.isFull())
      {
        Console.WriteLine("This ninja is too full to eat!");
      }
      else
      {
        this.CalorieIntake += item.Calories;
        this.FoodHistory.Add(item);
        string message = $"This ninja ate {item.Name}.";
        if (item.isSpicy && item.isSweet)
        {
          message += "It was so sweet and spicy!";
        }
        else if (item.isSpicy)
        {
          message += " It was pretty spicy.";
        }
        else if (item.isSweet)
        {
          message += " It was sweet to eat.";
        }

        Console.WriteLine(message);
      }
    }
  }
}