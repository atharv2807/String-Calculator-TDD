export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.slice(2, delimiterEnd));
      numbers = numbers.slice(delimiterEnd + 1);
    }

    const numberArray = numbers.split(delimiter).map(Number);
    const negatives = numberArray.filter(n => n < 0);

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
