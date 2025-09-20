// ======================
// Part 1: Variables & Conditionals
// ======================
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = "You are an adult!";
  } else if (age > 0) {
    result = "You are a minor!";
  } else {
    result = "Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
});

// ======================
// Part 2: Functions
// ======================
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

function addNumbers(a, b) {
  return a + b;
}

document.getElementById("greetBtn").addEventListener("click", function () {
  let message = greetUser("Student");
  document.getElementById("greetResult").textContent = message;
});

document.getElementById("calcBtn").addEventListener("click", function () {
  let sum = addNumbers(5, 10);
  document.getElementById("calcResult").textContent = "Result: " + sum;
});

// ======================
// Part 3: Loops
// ======================
// Example 1: For loop
document.getElementById("listNumbersBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Example 2: While loop (countdown)
document.getElementById("countdownBtn").addEventListener("click", function () {
  let countdown = 5;
  let result = "";
  while (countdown > 0) {
    result += countdown + " ";
    countdown--;
  }
  document.getElementById("countdownResult").textContent = result;
});

// ======================
// Part 4: DOM Manipulation
// ======================
// Example 1: Change background color
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Example 2: Add a new list item
document.getElementById("addItemBtn").addEventListener("click", function () {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});

// Example 3: Toggle text content
document.getElementById("greetBtn").addEventListener("dblclick", function () {
  document.getElementById("greetResult").textContent =
    "You double-clicked the greeting button!";
});
