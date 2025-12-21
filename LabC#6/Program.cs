using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace LabC_6
{
    internal class Program
    {
        static void Main(string[] args)
        {
        Console.InputEncoding = Encoding.Unicode;
        Console.OutputEncoding = Encoding.Unicode;
            int countUpper = 0;
            string input;

            do
            {
                Console.Write("Введіть фразу з власними назвами: ");
                input = Console.ReadLine();

                foreach (char c in input)
                {
                    if (char.IsUpper(c))
                        countUpper++;

                    if (c == '.')
                        break;
                }

            } while (!input.Contains('.'));

            Console.WriteLine($"Кількість власних назв: {countUpper}");
        }
        }
}
