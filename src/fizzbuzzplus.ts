export class FizzBuzzPlus {
  stringify(num: number): string {
    if (num === 3) {
      return 'Fizz';
    }
    if (num === 5) {
      return 'Buzz';
    }
    return num.toString();
  }
}
