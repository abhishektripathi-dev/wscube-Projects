const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos") || []);

// Save to LocalStrorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todo));
}

// Render Todos
function renderTodos() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
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
    });

    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    });

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);
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

// Initial render
renderTodos();