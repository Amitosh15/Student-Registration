// Inserting html elements
const studentForm = document.getElementById("studentForm");
const container = document.querySelector("students");
const nameInput = document.querySelector("name");
const idInput = document.getElementById("id");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact");

const students = [];

// Create elements to add form data in it
function createElement() {
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("p");
  const studentId = document.createElement("p");
  const studentEmail = document.createElement("p");
  const studentContact = document.createElement("p");
  const submitButton = document.createElement("button");

  studentDiv.append(
    studentName,
    studentId,
    studentEmail,
    studentContact,
    submitButton
  );
  container.appendChild(studentDiv);
}
