// TODO Status Enum
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Pending"] = "pending";
    TodoStatus["Completed"] = "completed";
})(TodoStatus || (TodoStatus = {}));
// In-Memory Todo List
const todos = [];
let nextId = 1;
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
// Function for Complete Todo
function completeTodo(id) {
    const todo = todos.find(item => item.id === id);
    if (!todo) {
        return;
    }
    todo.status = TodoStatus.Completed;
    renderTodos();
}
// Function to render todos
function renderTodos() {
    list.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.innerText = `${todo.title} - ${todo.status}`;
        if (todo.status === TodoStatus.Pending) {
            const btn = document.createElement("button");
            btn.innerText = "Complete";
            btn.onclick = () => completeTodo(todo.id);
            li.appendChild(btn);
        }
        list.appendChild(li);
    });
}
// Function to add a new Todo
function addTodo(title) {
    const newTodo = {
        id: nextId++,
        title: title,
        status: TodoStatus.Pending
    };
    todos.push(newTodo);
    renderTodos();
}
addBtn.onclick = () => {
    const value = input.value.trim();
    if (!value)
        return;
    addTodo(value);
    input.value = "";
};
export {};
//# sourceMappingURL=index.js.map