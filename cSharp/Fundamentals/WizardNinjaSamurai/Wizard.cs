using System;

namespace WizardNinjaSamurai
{
  class Wizard : Human
  {
    public Wizard(string name) : base(name, 3, 25, 3, 50)
    {
    }

    public override int Attack(Human target)
    {
      int dmg = 5 * this.Intelligence;

      int targetHP = target.GetHealth() - dmg;
      target.SetHealth(targetHP);

      int wizardHP = this.GetHealth() + dmg;
      this.SetHealth(wizardHP);

      return dmg;
    }

    public void Heal(Human target)
    {
      int heal = 10 * this.Intelligence;
      int targetHP = target.GetHealth();
      target.SetHealth(targetHP + heal);
    }
  }
}