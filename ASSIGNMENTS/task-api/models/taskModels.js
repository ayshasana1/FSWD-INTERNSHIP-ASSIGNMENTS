let tasks = [
  { id: 1, title: "Learn MVC", status: "pending" },
  { id: 2, title: "Refactor API", status: "completed" }
];

let currentId = 3;

// Get all tasks
const getAllTasks = () => tasks;

// Get task by ID
const getTaskById = (id) => tasks.find(t => t.id === id);

// Create task
const createTask = (title, status) => {
  const newTask = {
    id: currentId++,
    title,
    status: status || "pending"
  };
  tasks.push(newTask);
  return newTask;
};

// Update task
const updateTask = (id, title, status) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  if (title) task.title = title;
  if (status) task.status = status;

  return task;
};

// Delete task
const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;

  return tasks.splice(index, 1);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};