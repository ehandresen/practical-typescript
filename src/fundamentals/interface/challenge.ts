interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
  const randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum);

  if (randomNum > 3) {
    return {
      name: 'tim',
    };
  } else if (randomNum > 6) {
    return {
      name: 'sara',
      dogName: 'rex',
    };
  } else {
    return {
      name: 'bob',
      dogName: 'avi',
      managePeople() {
        console.log('managing people...');
      },
      delegateTasks() {
        console.log('delegating tasks...');
      },
    };
  }
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);
