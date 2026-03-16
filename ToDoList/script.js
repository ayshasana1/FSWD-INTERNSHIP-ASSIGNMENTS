const input = document.getElementById("taskinput");
const addBtn = document.getElementById("addbtn");
const taskList = document.getElementById("tasklist");
const clearBtn = document.getElementById("clearBtn"); 
const taskCount = document.getElementById("taskCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//load saved task
function loadTasks() {
    taskList.innerHTML = "";
    tasks.foreach((task, index) => {
        createTaskElement(task.Text, task.completed, index);
    });
    updateCount();
}

//create task element
function createTaskElement(text, completed, index) {
    const li = document.createElement("li");
    if (completed)li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = text;

    span.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

}


//add task
function addTask() {
    const taskText = input.ariaValueMax.trim();

    if(taskText === " ") {
        alert("Please enter a task.");
        return;
    }
}
//update task counter
 function updateCount() {
    taskCount.textContent = '${tasks.length} task${tasks.length !== 1 ? "s" : ""}';

}

//clear all tasks
clearBtn.addEventListener("click", () => {
    tasks = [];
    localStorage.removeItem("tasks");
    loadTasks();
});

//event listener for add button
addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function(Event){
    if(event.key === "Enter") {
        addTask();
    }
});

//initial load
loadTasks();

