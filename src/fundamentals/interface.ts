interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //* methods in interfaces
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

deepWork.printAuthor();
const result = deepWork.printTitle('is a great book');
console.log(result);
