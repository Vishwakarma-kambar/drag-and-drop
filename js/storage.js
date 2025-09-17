const STORAGE_KEY = "kanbanTasks";

//Saves the current tasks to localStorage.

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

//Loads tasks from localStorage.

export function loadTasks() {
  const tasksJSON = localStorage.getItem(STORAGE_KEY);
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}
