let strings = generateArray<string>(3, 'hello'); // ['hello', 'hello', 'hello']
let numbers = generateArray<number>(4, 100); // [100, 100, 100, 100]

function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

function generateArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(strings);
console.log(numbers);
