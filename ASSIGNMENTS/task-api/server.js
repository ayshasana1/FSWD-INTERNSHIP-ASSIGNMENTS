const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});