// Inserting html elements
const studentForm = document.getElementById("studentForm");
const container = document.getElementById("student-records");
const nameInput = document.getElementById("name");
const idInput = document.getElementById("id");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact");

// Form validation
nameInput.addEventListener("input", () => {
  const nameValue = nameInput.value;
  const invalidChars = /[^a-zA-Z\s]/g;
  const nameError = document.getElementById("name-error");

  if (invalidChars.test(nameValue)) {
    nameError.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i>Only characters are accepted.';
  } else {
    nameError.innerHTML = "";
  }

  nameError.value = nameValue.replace(invalidChars, "");
});

idInput.addEventListener("input", () => {
  const idValue = idInput.value;
  const idError = document.getElementById("id-error");
  const invalidChars = /[^0-9]/g;
});

emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(emailValue)) {
    emailError.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Write a valid email';
  } else {
    emailError.innerHTML = "";
  }
});

// Fetch student data if available in local storage otherwise create new
const students = JSON.parse(localStorage.getItem("students")) || [];

// Using unshift to add student data at beginning in array and return this data to display on html page
const addStudent = (name, id, email, contact) => {
  students.unshift({
    name,
    id,
    email,
    contact,
  });
};

// Create elements to add form data in it
const createElement = (student, index) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td>${student.name}</td>
  <td>${student.id}</td>
  <td>${student.email}</td>
  <td>${student.contact}</td>
  <td>
    <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
  </td>
  `;

  // Edit data
  const editBtn = tr.querySelector(".edit-btn");

  editBtn.addEventListener("click", () => {
    document.getElementById("studentId").value = student.id;
    nameInput.value = student.name;
    idInput.value = student.id;
    emailInput.value = student.email;
    contactInput.value = student.contact;
  });

  // Delete data
  const deleteBtn = tr.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
    students.splice(index, 1);
    // After delete updating local storage
    localStorage.setItem("students", JSON.stringify(students));
    // Calling function to re-render the data after deletion or addition
    renderStudents();
  });

  container.append(tr);
};

function renderStudents() {
  container.innerHTML = "";
  students.forEach((student, index) => createElement(student, index));
  dynamicScroll();
}

// render
renderStudents();

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Getting form values
  const studentId = document.getElementById("studentId").value;
  const name = nameInput.value;
  const id = idInput.value;
  const email = emailInput.value;
  const contact = contactInput.value;

  // It finds student in a students array by matching studentId and then updates their details
  if (studentId) {
    const student = students.find((s) => s.id === studentId);
    student.name = name;
    student.id = id;
    student.email = email;
    student.contact = contact;
  } else {
    // If studentId is empty then this function send the values to addStudent
    addStudent(name, id, email, contact);
  }

  // Saving data to localStorage after either adding or updating
  localStorage.setItem("students", JSON.stringify(students));

  renderStudents();
  // It will reset form after submit
  studentForm.reset();
  document.getElementById("studentId").value = "";
});

// Dynamic Scrollbar
function dynamicScroll() {
  const scrollBar = document.querySelector(".scroll");
  const maxHeight = 400;

  if (scrollBar.scrollHeight > maxHeight) {
    scrollBar.style.height = maxHeight + "px";
    scrollBar.style.overflowY = "scroll";
  } else {
    scrollBar.style.height = "auto";
    scrollBar.style.overflowY = "visible";
  }
}
