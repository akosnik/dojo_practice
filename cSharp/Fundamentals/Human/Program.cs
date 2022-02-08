using System;

namespace Human
{
  class Program
  {
    static void Main(string[] args)
    {
      Human A = new Human("Ace");
      Human B = new Human("Bee");

      B.Attack(A);

      Console.WriteLine(A.getHealth());

    }
  }
}
