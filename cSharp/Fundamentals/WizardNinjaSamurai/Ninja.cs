using System;

namespace WizardNinjaSamurai
{
  class Ninja : Human
  {
    public Ninja(string name) : base(name, 3, 3, 175, 100)
    {
    }

    public override int Attack(Human target)
    {
      int dmg = 5 * this.Dexterity;

      Random rand = new Random();
      if (rand.Next(5) == 0)
      {
        dmg += 10;
      }

      int targetHP = target.GetHealth() - dmg;
      target.SetHealth(targetHP);

      return dmg;
    }

    public void Steal(Human target)
    {
      int dmg = 5;

      int targetHP = target.GetHealth();
      target.SetHealth(targetHP - dmg);

      int ninjaHP = GetHealth();
      SetHealth(ninjaHP + 5);
    }
  }
}