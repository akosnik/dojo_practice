using System;

namespace Basic13
{
  class Program
  {
    static void Main(string[] args)
    {

      int[] arr1 = { 5, -10, 15, 20, -25 };
      //   Print1to255();
      // 
      //   PrintOdds();
      //    
      //   PrintSum();
      //   
      //   LoopArray(arr1);
      //   
      //   Console.WriteLine(FindMax(arr1));
      //   
      //   Console.WriteLine(GetAverage(arr1));
      //   
      //   OddArray();
      //  
      //   Console.WriteLine(GreaterThanY(arr1, 10));
      //   
      //   SquareArrayValues(arr1);
      //   foreach (var item in arr1)
      //   {
      //     Console.WriteLine(item);
      //   }
      //   
      //   MinMaxAverage(arr1);
      // 
      //   ShiftingValues(arr1);
      // 
      NumToString(arr1);



    }

    public static void Print1to255()
    {
      for (int i = 1; i < 256; i++)
      {
        Console.WriteLine(i);
      }
    }
    public static void PrintOdds()
    {
      for (int i = 1; i <= 255; i += 2)
      {
        Console.WriteLine(i);
      }
    }
    public static void PrintSum()
    {
      int sum = 0;
      for (int i = 0; i <= 255; i++)
      {
        sum += i;
        Console.WriteLine(sum);
      }
    }

    public static void LoopArray(int[] numbers)
    {
      for (int i = 0; i < numbers.Length; i++)
      {
        Console.WriteLine(numbers[i]);
      }
    }

    public static int FindMax(int[] numbers)
    {
      int max = numbers[0];
      for (int i = 0; i < numbers.Length; i++)
      {
        if (max < numbers[i])
        {
          max = numbers[i];
        }
      }
      return max;
    }

    public static float GetAverage(int[] numbers)
    {
      float avg = 0;
      for (int i = 0; i < numbers.Length; i++)
      {
        avg += numbers[i];
      }
      avg = avg / numbers.Length;
      return avg;
    }

    public static int[] OddArray()
    {
      int[] arr = new int[128];
      for (int i = 0; i <= 127; i++)
      {
        arr[i] = i * 2 + 1;
        Console.WriteLine("i - " + i + "  val - " + arr[i]);
      }
      return arr;
    }

    public static int GreaterThanY(int[] numbers, int y)
    {
      int count = 0;
      for (int i = 0; i < numbers.Length; i++)
      {
        if (numbers[i] > y)
        {
          count++;
        }
      }
      return count;
    }

    public static void SquareArrayValues(int[] numbers)
    {
      for (int i = 0; i < numbers.Length; i++)
      {
        numbers[i] = numbers[i] * numbers[i];
      }
    }

    public static void EliminateNegatives(int[] numbers)
    {
      for (int i = 0; i < numbers.Length; i++)
      {
        if (numbers[i] < 0)
        {
          numbers[i] = 0;
        }
      }
    }

    public static void MinMaxAverage(int[] numbers)
    {
      int min = numbers[0];
      int max = numbers[0];
      float avg = 0;

      for (int i = 0; i < numbers.Length; i++)
      {
        if (min > numbers[i])
        {
          min = numbers[i];
        }
        if (max < numbers[i])
        {
          max = numbers[i];
        }
        avg += numbers[i];
      }
      avg = avg / numbers.Length;
      Console.WriteLine("Avg = " + avg);
      Console.WriteLine("Min = " + min);
      Console.WriteLine("Max = " + max);
    }

    public static void ShiftingValues(int[] numbers)
    {
      for (int i = 0; i < numbers.Length - 1; i++)
      {
        numbers[i] = numbers[i + 1];
      }
      numbers[numbers.Length - 1] = 0;
      foreach (int val in numbers)
      {
        Console.WriteLine(val);
      }
    }

    public static object[] NumToString(int[] numbers)
    {
      object[] results = new object[numbers.Length];
      for (int i = 0; i < results.Length; i++)
      {
        if (numbers[i] < 0)
        {
          results[i] = "dojo";
        }
        else
        {
          results[i] = numbers[i];
        }
      }
      foreach (var item in results)
      {
        Console.WriteLine(item);
      }
      return results;
    }
  }
}
