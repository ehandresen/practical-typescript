interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: 'tim',
  age: 30,
  getDetails() {
    return `name: ${this.name}, age: ${this.age}`;
  },
};

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'Jane',
  age: 28,
  employeeId: 112,
  getDetails() {
    return this.employeeId.toString();
  },
};

console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'bob',
  age: 40,
  dogName: 'rex',
  getDetails() {
    return this.name;
  },
  managePeople() {
    return 'managing people...';
  },
  getDogDetails() {
    return this.dogName;
  },
};

console.log(manager.getDogDetails());
console.log(manager.managePeople());
