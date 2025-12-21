using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabC__4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double a, b;
            int m;

            Console.Write("Input a: ");
            a = Convert.ToDouble(Console.ReadLine());
            Console.Write("Input b: ");
            b = Convert.ToDouble(Console.ReadLine());
            Console.Write("Input m: ");
            m = Convert.ToInt32(Console.ReadLine());

            double dx = (b - a) / m;
            double x, fx;

            Console.WriteLine("For...i... ");
            for(int i=0; i<=m; i++)
            {
                fx = Math.Sin(a + i * dx) * Math.Sin(a + i * dx);
                Console.WriteLine($"f({a + i * dx}) = {fx}");
            }
            Console.ReadKey();
        }
    }
}
