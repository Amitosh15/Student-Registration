// Inserting html elements
const studentForm = document.getElementById("studentForm");
const container = document.querySelector(".students");
const nameInput = document.getElementById("name");
const idInput = document.getElementById("id");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact");

// Fetch student data if available in local storage otherwise create new
const students = JSON.parse(localStorage.getItem("students")) || [];

// Push student data in array and return this data to display on html page
const addStudent = (name, id, email, contact) => {
  students.push({
    name,
    id,
    email,
    contact,
  });

  // Store student data in local storage
  localStorage.setItem("students", JSON.stringify(students));

  return { name, id, email, contact };
};

// Create elements to add form data in it
// Destructuring the student data
const createElement = ({ name, id, email, contact }, index) => {
  const studentDiv = document.createElement("div");

  studentDiv.innerHTML = `
  <p>${name}</p>
  <p>${id}</p>
  <p>${email}</p>
  <p>${contact}</p>
  <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
  `;

  // Delete data
  const deleteBtn = studentDiv.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    students.splice(index, 1);
    // After delete updating local storage
    localStorage.setItem("students", JSON.stringify(students));
    // Added this function to re-render the data after deletion or addition
    renderStudents();
  });

  container.append(studentDiv);
};

function renderStudents() {
  container.innerHTML = "";
  students.forEach((student, index) => createElement(student, index));
}

// render
renderStudents();

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Creat new student
  const newStudent = addStudent(
    nameInput.value,
    idInput.value,
    emailInput.value,
    contactInput.value
  );

  // This newStudent go inside createElement function
  createElement(newStudent);

  renderStudents();
  // It will reset form after submit
  studentForm.reset();
});
