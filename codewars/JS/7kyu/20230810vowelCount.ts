//Count the number of vowels in a string

export class Kata {
    static getCount(str: string): number {
        const vowels: string = "aeiou";
        let vowelCount: number = 0;
        str.split('').forEach(item => {
            if (vowels.includes(item)) vowelCount ++;
        })
        return vowelCount;
    }
}