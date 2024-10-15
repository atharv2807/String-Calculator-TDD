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
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
