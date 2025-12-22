//src/index.ts

// TODO status enum 
enum TodoStatus {
    PENDING = "Pending",
    IN_PROGRESS = "In Progress",
    COMPLETED = "Completed"
}

// todo type
type Todo = {
   readonly id: number;
    title: string;
    description?: string;
    status: TodoStatus;
}

//in memory todo list
let todos: Todo[] = [];
let nextId = 1;

const input=document.getElementById('todoInput') as HTMLInputElement;
const addButton=document.getElementById('addBtn') as HTMLButtonElement;
const todoList=document.getElementById('todoList') as HTMLUListElement;

//function to render todos
function renderTodos(): void {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.title} - ${todo.status}`;
        todoList.appendChild(li);
    });
}

// function to add a new todo
function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: nextId++,
        title: title,
        status: TodoStatus.PENDING
    };
    todos.push(newTodo);
    return newTodo;
}