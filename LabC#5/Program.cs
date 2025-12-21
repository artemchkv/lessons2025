using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabC_5
{
    internal class Program
    {

        static void Main(string[] args)
        {
        Console.InputEncoding = Encoding.Unicode;
        Console.OutputEncoding = Encoding.Unicode;
            double[] Time = new double[20];
            double[] Speed = new double[20];

            Console.WriteLine("Введіть час у секундах для 20 спортсменів:");

            for (int i = 0; i < 20; i++)
            {
                Console.Write($"Спортсмен {i + 1}: ");
                Time[i] = Convert.ToDouble(Console.ReadLine());
            }
            for (int i = 0; i < 20; i++)
            {
                Speed[i] = 100 / Time[i];
            }
            Console.WriteLine("\nСередня швидкість спортсменів (м/с):");
            for (int i = 0; i < 20; i++)
            {
                Console.WriteLine($"Спортсмен {i + 1}: {Speed[i]:F2} м/с");
            }
            }
    }
}
