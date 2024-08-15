interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //* methods in interfaces
  printAuthor(): void;
  printTitle(message: string): string;

  // alternative way to set up methods, first way (one above) is most used and the most straight froward
  printSomething: (someValue: number) => number; // property with a function type
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  printAuthor() {
    console.log('author:', this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  //* printSomething: function (someValue) {
  //*   return someValue;
  //* },

  // second option
  printSomething: (someValue) => {
    // arrow function captures the global 'this', compared to regular function where be have access to properties with this
    console.log(`genre: ${deepWork.genre}`);
    return someValue;
  },
};

deepWork.printAuthor();
const result = deepWork.printTitle('is a great book');
console.log(result);

console.log(deepWork.printSomething(34));

// challenge
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(num: number): number;
  // upgradeRam: (num: number) => number;
}

const macBookAir: Computer = {
  id: 1,
  brand: 'Apple',
  ram: 8,
  upgradeRam(num) {
    this.ram += num;
    return this.ram;
  },
  // upgradeRam: (num) => {
  //   macBookAir.ram += num;
  //   return macBookAir.ram;
  // },
};

macBookAir.id = 2; //! cannot change id prop because tis readonly
macBookAir.storage = 256;

console.log(macBookAir.upgradeRam(8));
console.log(macBookAir);
