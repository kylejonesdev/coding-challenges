namespace _20230908DNAtoRNA
{
    internal class Program
    {
        public string dnaToRna(string dna)
        {
            string res = "";
            foreach (char c in dna)
            {
                if (c == 'T') //single quotes create a char
                {
                    res += "U"; //double quotes create a string
                }
                else
                {
                    res += c;
                }
            }
            return res;
        }
        static void Main(string[] args)
        {
            Program myProgram = new Program(); //using a non-static class requires an instance of that class 
            Console.WriteLine(myProgram.dnaToRna("GTAC"));
        }
    }
}