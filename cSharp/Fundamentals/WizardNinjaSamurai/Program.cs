using System;

namespace WizardNinjaSamurai
{
  class Program
  {
    static void Main(string[] args)
    {
      Ninja leo = new Ninja("Leonardo");
      Wizard jordan = new Wizard("Jordan");

      jordan.Attack(leo);
      leo.Attack(jordan);
    }
  }
}
