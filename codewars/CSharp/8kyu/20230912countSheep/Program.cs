namespace _20230912countSheep
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(CountSheep(3));
        }
        public static string CountSheep(int n)
        {
            string res = "";
            for(int i = 1; i <= n; i++)
            {
                res += $"{i} sheep...";
            }
            return res;
        }
    }
}