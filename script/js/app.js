document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.querySelector("form");
    const taskList = document.getElementById("taskList");

    // Add Task Animation
    taskForm.addEventListener("submit", function (event) {
        const taskInput = document.querySelector("[name='task']");
        if (taskInput.value.trim() === "") {
            alert("Task cannot be empty!");
            event.preventDefault();
        } else {
            alert("Task added successfully!");
        }
    });

    // Delete Task Animation
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-task")) {
            const taskItem = event.target.closest("li");
            taskItem.classList.add("removing");
            setTimeout(() => taskItem.remove(), 500);
        }
    });

    // Mark as Completed Animation
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("mark-complete")) {
            const taskItem = event.target.closest("li");
            const statusText = taskItem.querySelector("small");
            taskItem.classList.add("completed");
            statusText.innerHTML = statusText.innerHTML.replace("Pending", "Completed");
        }
    });
});
