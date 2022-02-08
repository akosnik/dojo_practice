using System;

namespace MultiplicationTable
{
  class Program
  {
    static void Main(string[] args)
    {
      int[,] multiplication = MultiplicationTable();
      Print2DArray(multiplication);
    }

    public static int[,] MultiplicationTable()
    {
      int[,] array2D = new int[10, 10];
      for (int i = 0; i < 10; i++)
      {
        for (int j = 0; j < 10; j++)
        {
          array2D[i, j] = (i + 1) * (j + 1);
        }
      }

      return array2D;
    }

    public static void Print2DArray(int[,] array2D)
    {
      Console.WriteLine(array2D.GetLength(0));
      Console.WriteLine(array2D.GetLength(1));
      Console.WriteLine();

      for (int i = 0; i < array2D.GetLength(0); i++)
      {
        string message = "[ ";
        for (int j = 0; j < array2D.GetLength(1); j++)
        {
          if (array2D[i, j] < 10)
          {
            message += array2D[i, j] + ",  ";
          }
          else if (array2D[i, j] < 100)
          {
            message += array2D[i, j] + ", ";
          }
          else
          {
            message += array2D[i, j] + ",";
          }
        }
        message += "]";
        Console.WriteLine(message);
      }
    }
  }
}
