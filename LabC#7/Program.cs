using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabC_7
{
    internal class Program
    {
        static int[,] InputMatrix(int n)
        {
            int[,] a = new int[n, n];
            Console.WriteLine($"Input matrix {n}x{n} ");

            for (int i = 0; i < n; i++)
            {
                int j = 0;
                Console.WriteLine($"fill in the line {i} (need {n} numbers):");

                while (j < n)
                {
                    string line = Console.ReadLine();
                    if (string.IsNullOrWhiteSpace(line))
                    {
                        Console.WriteLine("Empty line - please enter numbers again.");
                        continue;
                    }
                    string[] parts = line.Split(new char[] { ' ', '\t', ',' }, StringSplitOptions.RemoveEmptyEntries);

                    foreach (var p in parts)
                    {
                        if (j >= n) break;

                        if (int.TryParse(p, out int value))
                        {
                            a[i, j] = value;
                            j++;
                        }
                        else
                        {
                            Console.WriteLine($"error");
                        }
                    }

                    if (j < n)
                    {
                        Console.WriteLine($"Input more {n - j} numbers for line {i}.");
                    }
                }
            }
            return a;
        }
        static void PrintMatrix(int[,] a)
        {
            int n = a.GetLength(0);
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write(a[i, j] + "\t");
                }
                Console.WriteLine();
            }
        }

        static int[,] Transpose(int[,] a)
        {
            int n = a.GetLength(0);
            int[,] t = new int[n, n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    t[j, i] = a[i, j];
            return t;
        }

        static void Main()
        {
            int[,] A = InputMatrix(4);
            int[,] B = InputMatrix(5);
            int[,] C = InputMatrix(6);

            Console.WriteLine("\nA^T:");
            PrintMatrix(Transpose(A));

            Console.WriteLine("\nB^T:");
            PrintMatrix(Transpose(B));

            Console.WriteLine("\nC^T:");
            PrintMatrix(Transpose(C));
        }
    }

}
