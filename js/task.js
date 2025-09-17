import { createElement } from "./dom.js";

//Creates a task element.

export function createTaskElement(task) {
  const taskElement = createElement("div", "task");
  taskElement.dataset.id = task.id;
  taskElement.draggable = true;

  if (task.status === "in-progress") {
    taskElement.classList.add("task-in-progress");
  } else if (task.status === "done") {
    taskElement.classList.add("task-done");
  }

  const title = createElement("h3", "task-title", task.title);
  taskElement.appendChild(title);

  // --- CONDITIONAL RENDERING FOR DESCRIPTION ---
  if (task.description) {
    const description = createElement(
      "p",
      "task-description",
      task.description
    );
    taskElement.appendChild(description);
  }

  return taskElement;
}

//Renders all tasks on the board.

export function renderTasks(tasks) {
  document
    .querySelectorAll(".tasks")
    .forEach((column) => (column.innerHTML = ""));
  tasks.forEach((task) => {
    const column = document.querySelector(
      `[data-status="${task.status}"] .tasks`
    );
    if (column) {
      column.appendChild(createTaskElement(task));
    }
  });
}
