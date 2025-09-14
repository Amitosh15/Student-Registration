// Inserting html elements
const studentForm = document.getElementById("studentForm");
const container = document.querySelector(".students");
const nameInput = document.getElementById("name");
const idInput = document.getElementById("id");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact");

const students = [
  {
    name: "Rohan",
    id: 105,
    email: "rohan@gmail.com",
    contact: 2222222222,
  },
];

const addStudent = (name, id, email, contact) => {};

// Create elements to add form data in it
const createElement = ({ name, id, email, contact }) => {
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("p");
  const studentId = document.createElement("p");
  const studentEmail = document.createElement("p");
  const studentContact = document.createElement("p");

  studentName.innerHTML = name;
  studentId.innerHTML = id;
  studentEmail.innerHTML = email;
  studentContact.innerHTML = contact;

  studentDiv.append(studentName, studentId, studentEmail, studentContact);
  container.appendChild(studentDiv);
};

// passing index
students.forEach(createElement);
