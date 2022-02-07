using System;

namespace Puzzles
{
  class Program
  {
    static void Main(string[] args)
    {
      //   RandomArray();
      TossCoin();
    }

    public static int[] RandomArray()
    {
      int min = int.MaxValue;
      int max = int.MinValue;
      int sum = 0;
      int[] results = new int[10];
      for (int i = 0; i < results.Length; i++)
      {
        Random rand = new Random();
        results[i] = rand.Next(5, 26);

        sum += results[i];
        if (min > results[i])
        {
          min = results[i];
        }
        if (max < results[i])
        {
          max = results[i];
        }
      }
      Console.WriteLine("min " + min);
      Console.WriteLine("max " + max);
      Console.WriteLine("sum " + sum);
      foreach (var item in results)
      {
        Console.WriteLine(item);
      }
      return results;
    }

    public static string TossCoin()
    {
      string result;
      string[] coinResults = { "Heads", "Tails" };

      Console.WriteLine("Tossing a coin.");
      Random rand = new Random();
      int coinIndex = rand.Next(coinResults.Length);

      result = coinResults[coinIndex];
      Console.WriteLine("It landed on " + result);
      return result;
    }
  }
}
