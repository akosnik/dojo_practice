using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
  class Program
  {
    static void Main(string[] args)
    {
      // ARRAYS
      int[] arr1 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
      string[] arr2 = { "Tim", "Martin", "Nikki", "Sara" };
      bool[] arr3 = { true, false, true, false, true, false, true, false, true, false };

      // LISTS
      List<string> flavors = new List<string>() { "Chocolate", "Vanilla", "Mint", "Cookie Dough", "Moose Tracks" };

      Console.WriteLine("List Length " + flavors.Count);
      Console.WriteLine("3rd Flavor " + flavors[2]);
      flavors.RemoveAt(2);
      Console.WriteLine("List Length " + flavors.Count);
      Console.WriteLine("3rd Flavor " + flavors[2]);

      // DICTIONARY
      Dictionary<string, string> nameFlavor = new Dictionary<string, string>();
      for (int i = 0; i < arr2.Length; i++)
      {
        Random rand = new Random();
        string flavor = flavors[rand.Next(0, flavors.Count)];
        // Console.WriteLine("Name - " + arr2[i]);
        // Console.WriteLine("Flavor - " + flavor);
        // Console.WriteLine("");
        nameFlavor.Add(arr2[i], flavor);
      }
      foreach (var entry in nameFlavor)
      {
        Console.WriteLine(entry.Key + " - " + entry.Value);
      }
    }
  }
}
