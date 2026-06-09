const addButton = document.querySelector(".todoInput button");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".todo-list ul");

addButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText) {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
                            <input type="checkbox" id="t${Date.now()}" />
                            <span class="custom-checkbox"></span>
                            <label for="t${Date.now()}">${taskText}</label>
                            <button class="delete" aria-label="Delete">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        `;
        todoList.appendChild(newTask);
        todoInput.value = "";
    }
});

todoList.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("delete") ||
        e.target.parentElement.classList.contains("delete")
    ) {
        const taskItem = e.target.closest("li");
        taskItem.remove();
    }
});

todoList.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const taskItem = e.target.closest("li");
        taskItem.classList.toggle("completed", e.target.checked);
    }
});

todoList.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName === "LABEL") {
        const checkbox = e.target.previousElementSibling;
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
    }

    if (e.key === "Delete" && e.target.tagName === "LABEL") {
        const taskItem = e.target.closest("li");
        taskItem.remove();
    }

    if (e.key === "Tab" && e.target.tagName === "LABEL") {
        e.preventDefault();
        const nextElement = e.target.parentElement.nextElementSibling;
        if (nextElement) {
            nextElement.querySelector("label").focus();
        }
    }
});
