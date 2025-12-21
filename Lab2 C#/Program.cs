using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab2_C_
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Input a: ");
            double a = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Input b: ");
            double b = Convert.ToDouble(Console.ReadLine());

            double P = 2 * a + b;

            double h = Math.Sqrt(a * a - (b / 2) * (b / 2));

            double S = (b * h) / 2;

            Console.WriteLine($"P = {P}\tS = {S}");
            Console.ReadKey();

        }
    }
}
