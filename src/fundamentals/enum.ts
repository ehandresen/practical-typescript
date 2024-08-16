enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value);
  }
});

console.log(ServerResponseStatus);
/* {
    0: 'Success',
    1: 'Error',
    Success: 0,
    Error: 1
  } */

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();

console.log(response);

/* Define an enum named UserRole with members Admin, Manager, and Employee.
Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
Define a function named createUser that takes a User object as its parameter and returns a User object.
Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console. */

enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
  Employee = 'Employee',
}

console.log(UserRole);

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [email: string, phone: string];
};

function createUser(user: User): User {
  return user;
}

const user: User = {
  id: 1,
  name: 'john',
  role: UserRole.Employee,
  contact: ['john@gmail.com', '99405500'],
};

const userResponse = createUser(user);
console.log(userResponse);
