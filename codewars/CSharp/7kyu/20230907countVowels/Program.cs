namespace _20230907countVowels
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(GetVowelCount("a"));
            Console.WriteLine(GetVowelCount("aaa"));
            Console.WriteLine(GetVowelCount("aeiou"));
        }
        public static int GetVowelCount(string str)
        {
            int vowelCount = 0;
            foreach (char character in str)
            {
                if ("aeiou".Contains(character))
                {
                    vowelCount = vowelCount + 1;
                }
            }
            return vowelCount;
        }
        //Overly complicated. C# strings can be iterated without transformation.
        public static int GetVowelCount2(string str)
        {
            int vowelCount = 0;
            char[] charArray = str.ToCharArray();
            for(int i = 0; i < charArray.Length; i++)
            {
                if ("aeiou".Contains(charArray[i]))
                {
                    vowelCount = vowelCount + 1;
                }
            }
            return vowelCount;
        }
    }
}