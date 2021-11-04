import { FizzBuzzPlus } from '../src/fizzbuzzplus';
import assert from 'power-assert';

let fizzbuzzplus: FizzBuzzPlus;

beforeEach(() => {
  fizzbuzzplus = new FizzBuzzPlus();
});

describe('任意の文字列が出力できる', () => {
  test('1を渡すと文字列"1"が出力できる', () => {
    assert.deepEqual(fizzbuzzplus.stringify(1), '1');
  });
  test('2を渡すと文字列"2"が出力できる', () => {
    assert.deepEqual(fizzbuzzplus.stringify(2), '2');
  });
  test('3を渡すと”Fizz”が出力できる', () => {
    assert.deepEqual(fizzbuzzplus.stringify(3), 'Fizz');
  });
  test('5を渡すと”Buzz”が出力できる', () => {
    assert.deepEqual(fizzbuzzplus.stringify(5), 'Buzz');
  });
})

