namespace _20230907evenOrOdd
{
    public class Program
    {
        static string EvenOrOdd(int number)
        {
            return number % 2 == 0 ? "Even" : "Odd";
        }
        static void Main(string[] args)
        {
            Console.WriteLine($"{EvenOrOdd(1)} should be Odd");
            Console.WriteLine($"{EvenOrOdd(2)} should be Even");
        }
    }
}