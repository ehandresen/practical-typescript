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

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  // special return type
  // check if managePeople method is in the object
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}
