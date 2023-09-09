namespace _20230909arrayToString
{
    internal class Program
    {
        public static string Smash(string[] words)
        {
            return string.Join(' ', words);
        }
        static void Main(string[] args)
        {
            Console.WriteLine(Program.Smash(new string[] { "Hello", "Bob"}) + " should show Hello Bob");
        }
    }
}