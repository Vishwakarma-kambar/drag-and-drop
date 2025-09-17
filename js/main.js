import { saveTasks, loadTasks } from "./storage.js";
import { renderTasks } from "./task.js";
import { initDragAndDrop } from "./dragDrop.js";

document.addEventListener("DOMContentLoaded", () => {
  let tasks = loadTasks();

  const addTaskBtn = document.getElementById("add-task-btn");
  const taskTitleInput = document.getElementById("task-title");
  const taskDescriptionInput = document.getElementById("task-description");

  const updateUI = () => {
    renderTasks(tasks);
    initDragAndDrop(onTaskDrop);
  };

  const onTaskDrop = (taskId, newStatus) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      if (task.status !== newStatus) {
        task.status = newStatus;
        saveTasks(tasks);
        updateUI();
      }
    }
  };

  addTaskBtn.addEventListener("click", () => {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();

    // --- FORM VALIDATION ---
    if (!title) {
      alert("Task title is required!");
      return;
    }

    const newTask = {
      id: `task-${new Date().getTime()}`,
      title,
      description,
      status: "todo",
    };
    tasks.push(newTask);
    saveTasks(tasks);
    updateUI();

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
  });

  updateUI();
});
