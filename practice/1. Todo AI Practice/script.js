const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let currentFilter = "all";

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Save to localStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Filter Logic Function
function getFilteredTodos() {
    if (currentFilter === "completed") {
        return todos.filter((todo) => todo.completed);
    } else if (currentFilter === "pending") {
        return todos.filter((todo) => !todo.completed);
    }
    return todos;
}

// Render Todos
function renderTodos() {
    list.innerHTML = "";

    // todos.forEach((todo, index) => {
    getFilteredTodos().forEach((todo, index) => {
        const li = document.createElement("li");

        // Text
        const span = document.createElement("span");
        span.innerText = todo.text;

        if (todo.completed) {
            span.classList.add("completed");
        }

        // Toggle complete
        span.addEventListener("click", () => {
            todo.completed = !todo.completed;
            saveTodos();
            renderTodos();
        });

        // Buttons container
        const actions = document.createElement("div");
        actions.className = "actions";

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        if (todo.completed) {
            editBtn.disabled = true;
        }

        editBtn.addEventListener("click", () => {
            const newText = prompt("Edit task:", todo.text);
            if (newText) {
                todo.text = newText;
                saveTodos();
                renderTodos();
            }
        });

        // Delete Button
        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";

        delBtn.addEventListener("click", () => {
            // todos.splice(index, 1);
            const realIndex = todos.indexOf(todo);
            todos.splice(realIndex, 1);
            saveTodos();
            renderTodos();
        });

        actions.appendChild(editBtn);
        actions.appendChild(delBtn);

        li.appendChild(span);
        li.appendChild(actions);

        list.appendChild(li);
    });
}

// Add Todo
addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    todos.push({
        text: input.value,
        completed: false,
    });

    input.value = "";
    saveTodos();
    renderTodos();
});

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;

        // UI active state
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        renderTodos();
    });
});

// Initial render
renderTodos();
