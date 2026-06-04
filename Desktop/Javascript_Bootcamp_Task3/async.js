const studentDatabase = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    course: "Computer Science",
    age: 20,
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    course: "Data Science",
    age: 22,
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    course: "Information Systems",
    age: 21,
  },
  {
    id: 4,
    firstName: "Diana",
    lastName: "Williams",
    email: "diana.williams@example.com",
    course: "Software Engineering",
    age: 23,
  },
  {
    id: 5,
    firstName: "Ethan",
    lastName: "Taylor",
    email: "ethan.taylor@example.com",
    course: "Artificial Intelligence",
    age: 24,
  },
];

const studentDatabase = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    course: "Computer Science",
    age: 20,
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    course: "Data Science",
    age: 22,
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    course: "Information Systems",
    age: 21,
  },
  {
    id: 4,
    firstName: "Diana",
    lastName: "Williams",
    email: "diana.williams@example.com",
    course: "Software Engineering",
    age: 23,
  },
  {
    id: 5,
    firstName: "Ethan",
    lastName: "Taylor",
    email: "ethan.taylor@example.com",
    course: "Artificial Intelligence",
    age: 24,
  },
];
synchronousDemo();

function displayStudentsWithDelay() {
  console.log("Fetching student records... please wait 3 seconds");

  setTimeout(() => {
    console.log("Student Records:");
    studentDatabase.forEach((student) => {
      console.log(
        `ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Email: ${student.email}, Course: ${student.course}, Age: ${student.age}`,
      );
    });
  }, 3000);
}
displayStudentsWithDelay();
