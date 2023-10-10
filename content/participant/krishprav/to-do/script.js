const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const deadlineInput = document.querySelector(".deadline-input");
const quoteElement = document.querySelector(".quote");
const completeSound = document.querySelector(".complete-sound");

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    const deadlineText = deadlineInput.value.trim();

    if (!todoText || !deadlineText) {
        showErrorMessage("Please enter both the task and deadline.");
        return;
    }

    const todoDiv = createTodoDiv(todoText, deadlineText);
    todoList.appendChild(todoDiv);

    saveLocalTodos(todoText);
    playCompleteSound();
    displayRandomQuote();

    todoInput.value = "";
    deadlineInput.value = "";
}

function createTodoDiv(todoText, deadlineText) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoText;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = createButton('<i class="fas fa-check-circle"></i>', "complete-btn");
    completedButton.addEventListener("click", toggleTodoCompletion);
    todoDiv.appendChild(completedButton);

    const trashButton = createButton('<i class="fas fa-trash"></i>', "trash-btn");
    trashButton.addEventListener("click", deleteTodo);
    todoDiv.appendChild(trashButton);

    const deadlineTime = document.createElement("p");
    deadlineTime.innerText = formatDeadline(deadlineText);
    deadlineTime.classList.add("deadline-time");
    todoDiv.appendChild(deadlineTime);

    return todoDiv;
}

function createButton(iconHTML, className) {
    const button = document.createElement("button");
    button.innerHTML = iconHTML;
    button.classList.add(className);
    return button;
}

function toggleTodoCompletion(event) {
    const todo = event.target.parentElement;
    todo.classList.toggle("completed");
    playCompleteSound();
}

function deleteTodo(event) {
    const todo = event.target.parentElement;
    todo.classList.add("slide");

    todo.addEventListener("transitionend", function () {
        todo.remove();
        removeLocalTodos(todo.children[0].innerText);
    });
}

function filterTodo() {
    const todos = Array.from(todoList.childNodes);
    const filterValue = filterOption.value;

    todos.forEach(function (todo) {
        if (filterValue === "all" || (filterValue === "completed" && todo.classList.contains("completed")) || (filterValue === "incomplete" && !todo.classList.contains("completed"))) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
}

function showErrorMessage(message) {
    const msg = document.getElementById("msg");
    msg.innerHTML = message;
    msg.style.display = "block";
}

function formatDeadline(deadline) {
    const date = new Date(deadline);
    const options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
    return date.toLocaleString("en-US", options);
}

function saveLocalTodos(todoText) {
    const todos = getLocalTodos();
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
}

function removeLocalTodos(todoText) {
    const todos = getLocalTodos();
    const todoIndex = todos.indexOf(todoText);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function playCompleteSound() {
    completeSound.currentTime = 0;
    completeSound.play();
}

function displayRandomQuote() {
    const quotes = [
        "The future depends on what you do today.",
        "Believe you can and you're halfway there.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Don't watch the clock; do what it does. Keep going.",
        "The secret of getting ahead is getting started.",
        "You don't have to be great to start, but you have to start to be great."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Initialize the page with the saved todos
function init() {
    const savedTodos = getLocalTodos();
    savedTodos.forEach(function (todoText) {
        const todoDiv = createTodoDiv(todoText, "");
        todoList.appendChild(todoDiv);
    });
}

init();
