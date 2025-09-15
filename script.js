// Inserting html elements
const studentForm = document.getElementById("studentForm");
const container = document.querySelector(".students");
const nameInput = document.getElementById("name");
const idInput = document.getElementById("id");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact");

const students = [
  {
    name: "Aman",
    id: 202,
    email: "aman@gmail.com",
    contact: 8989889898,
  },
];

// Create elements to add form data in it
const createElement = ({ name, id, email, contact }) => {
  const studentDiv = document.createElement("div");

  studentDiv.innerHTML = `
  <p>${name}</p>
  <p>${id}</p>
  <p>${email}</p>
  <p>${contact}</p>
  `;

  container.append(studentDiv);
};

students.forEach(createElement);
