using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Lesson01
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double t, l;
            const double g = 9.81;
            const double pi = 3.14;
            Console.WriteLine("Input l: ");
            l = Convert.ToDouble(Console.ReadLine());

            t = 2*pi*Math.Sqrt(l/g);

            Console.WriteLine($"t = {t}\nl = {l}");

            Console.WriteLine("Press Enter to Exit programm");
            Console.ReadLine();
        }
    }
}
