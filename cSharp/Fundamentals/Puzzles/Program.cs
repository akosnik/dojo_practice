using System;
using System.Collections.Generic;

namespace Puzzles
{
  class Program
  {
    static void Main(string[] args)
    {
      //   RandomArray();
      //   TossCoin();
      List<string> results = Names();
      Console.WriteLine("RESULTS");
      foreach (string item in results)
      {
        Console.WriteLine(item);
      }
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

    public static List<string> Names()
    {
      List<string> names = new List<string>();
      names.Add("Todd");
      names.Add("Tiffany");
      names.Add("Charlie");
      names.Add("Geneva");
      names.Add("Sydney");
      names = ShuffleList(names);
      foreach (string item in names)
      {
        Console.WriteLine(item);
      }

      List<string> results = new List<string>();
      foreach (string item in names)
      {
        if (item.Length > 5)
        {
          results.Add(item);
        }
      }
      return results;
    }

    public static List<string> ShuffleList(List<string> myList)
    {
      List<string> newList = new List<string>();
      while (myList.Count > 0)
      {
        Random rand = new Random();
        int ranIdx = rand.Next(myList.Count);
        newList.Add(myList[ranIdx]);
        myList.RemoveAt(ranIdx);
      }
      return newList;
    }
  }
}
