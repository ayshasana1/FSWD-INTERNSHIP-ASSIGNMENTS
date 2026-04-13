const taskModel = require("../models/taskModels");

// GET all tasks
const getTasks = (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.status(200).json({ message: "All tasks fetched", tasks });
};

// GET single task
const getTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = taskModel.getTaskById(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ message: "Task fetched", task });
};

// CREATE task
const createTask = (req, res) => {
  const { title, status } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = taskModel.createTask(title, status);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask
  });
};

// UPDATE task
const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, status } = req.body;

  const updatedTask = taskModel.updateTask(id, title, status);

  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({
    message: "Task updated successfully",
    task: updatedTask
  });
};

// DELETE task
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const deletedTask = taskModel.deleteTask(id);

  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({
    message: "Task deleted successfully",
    task: deletedTask
  });
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};