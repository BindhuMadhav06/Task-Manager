document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.querySelector("form");
    const taskList = document.getElementById("taskList");

    // Add Task Animation
    taskForm.addEventListener("submit", function (event) {
        const taskInput = document.querySelector("[name='task']");
        if (taskInput.value.trim() === "") {
            alert("Task cannot be empty!");
            event.preventDefault();
            return;
        }
        const newTask = document.createElement("li");
        newTask.className = "task-list-item adding"; // Adding class for animation
        newTask.innerHTML = `
            <div>
                <strong>Task:</strong> ${taskInput.value} <br>
                <small><strong>Status:</strong> Pending</small>
            </div>
            <div class="task-actions">
                <button class="btn btn-success btn-sm mark-complete">Mark as Completed</button>
                <button class="btn btn-danger btn-sm delete-task">Delete</button>
            </div>
        `;
        taskList.appendChild(newTask);

        // Smoothly show the task
        setTimeout(() => newTask.classList.remove("adding"), 10);
        alert("Task added successfully!");
    });

    // Remove Task Animation
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-task")) {
            const taskItem = event.target.closest("li");
            taskItem.classList.add("removing"); // Adding class for animation
            setTimeout(() => taskItem.remove(), 500); // Remove after animation
        }
    });

    // Mark Task as Completed Animation
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("mark-complete")) {
            const taskItem = event.target.closest("li");
            const statusText = taskItem.querySelector("small");
            taskItem.classList.add("completed");
            statusText.innerHTML = "<strong>Status:</strong> Completed!";
        }
    });
});
