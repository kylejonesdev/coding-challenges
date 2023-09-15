namespace _20230915doubleInt
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(DoubleInteger(2));
            Console.WriteLine(StringToArray("Bob Bobbertson")[0]);
        }
        public static int DoubleInteger(int n)
        {
            return n * 2;
        }
        public static string[] StringToArray(string str)
        {
            return str.Split(' ');
        }
    }
}