const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

// Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        taskInput.focus();
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    renderTasks();

    taskInput.value = "";
    taskInput.focus();
}

function renderTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML =
            "<li><span>No tasks added yet.</span></li>";

        return;
    }

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div>

                <button onclick="completeTask(${index})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(li);
    });

}

function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    renderTasks();

}

function deleteTask(index) {

    if (confirm("Are you sure you want to delete this task?")) {

        tasks.splice(index, 1);

        renderTasks();

    }

}