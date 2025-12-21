using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double x, y;

            Console.Write("Input x: ");
            x = Convert.ToDouble(Console.ReadLine());

            if (x < -Math.PI)
            {
                y = Math.Log(x);
            }
            else
                if (x >= -Math.PI && x < Math.PI)
            {
                y = Math.Sin(x) - Math.Cos(x);
            }
            else
                if (x >= Math.PI && x < 10)
            {
                y = x + 1;
            }
            else
                if (x >= 10 && x < 100)
            {
                y = x + 3 / x * x + 8;
            }
            else
                y = Math.Log(x);
            Console.WriteLine($"y = {y}\tx = {x}");
            Console.ReadKey();
        }
    }
}
