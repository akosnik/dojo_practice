using System;
using System.Collections.Generic;

namespace Boxing
{
  class Program
  {
    static void Main(string[] args)
    {
      List<object> objects = new List<object>();
      objects.Add(7);
      objects.Add(28);
      objects.Add(-1);
      objects.Add(true);
      objects.Add("chair");

      int sum = 0;
      foreach (var item in objects)
      {
        Console.WriteLine("item " + item);
        if (item is int)
        {
          int val = (int)item;
          sum += val;
        }
      }
      Console.WriteLine("sum " + sum);
    }
  }
}
