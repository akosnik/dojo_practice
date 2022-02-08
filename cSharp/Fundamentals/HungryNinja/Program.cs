using System;

namespace HungryNinja
{
  class Program
  {
    static void Main(string[] args)
    {
      Buffet menu = new Buffet();
      Food item = menu.Serve();
      Ninja ninja = new Ninja();
      ninja.Eat(item);
    }
  }
}
