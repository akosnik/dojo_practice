using System;

namespace Fundamentals1
{
  class Program
  {
    static void Main(string[] args)
    {
      // Print numbers 1-255
      //   for (int i = 1; i <= 255; i++)
      //   {
      //     Console.WriteLine(i);
      //   }

      // FizzBuzz
      for (int j = 0; j < 100; j++)
      {
        if (j % 3 == 0 && j % 5 == 0)
        {
          string message = $"{j}, FizzBuzz";
          Console.WriteLine(message);
        }
        else if (j % 3 == 0)
        {
          string message = $"{j}, Fizz";
          Console.WriteLine(message);
        }
        else if (j % 5 == 0)
        {
          string message = $"{j}, Buzz";
          Console.WriteLine(message);
        }
      }


    }
  }
}
