function createString(arg: string): string {
  return arg;
}

function createNumber(arg: number): number {
  return arg;
}
// this above gets annoying and unnecessary
// lets create a generic function that can take any type
// <T> conventional naming, stands for 'type'
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('hello world');
const someNumberValue = genericFunction<number>(100);
const someBoolean = genericFunction<boolean>(true);

console.log(someStringValue, someNumberValue, someBoolean);
