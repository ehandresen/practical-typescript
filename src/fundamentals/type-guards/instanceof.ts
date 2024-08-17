try {
  throw 'some error';
  throw new Error('this is an error');
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log('unknown error');
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random = checkInput('2020-05-05');

console.log(year);
console.log(random);
