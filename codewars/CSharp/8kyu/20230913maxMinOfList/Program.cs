namespace _20230914maxMinOfList
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] list = { 0, 5, 4, 1, 3, 2 };
            Program program = new Program();

            Console.WriteLine(program.Min(list));
            Console.WriteLine(program.Max(list));
        }
        public int Min(int[] list)
        {
            System.Array.Sort(list);
            return list[0];
        }

        public int Max(int[] list)
        {
            System.Array.Sort(list);
            return list[list.Length - 1];
        }
    }
}