namespace _20230911stringIf
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(greet("Johnny"));
        }
        public static string greet(string name)
        {
            if (name == "Johnny") return "Hello, my love!";
            return "Hello, " + name + "!";
        }
    }
}