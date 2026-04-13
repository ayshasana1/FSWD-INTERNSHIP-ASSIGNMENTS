const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json());

// Secret key for JWT
const SECRET = "mysecretkey";

// Dummy users with roles
const users = [
  { id: 1, username: "admin", password: "123", role: "admin" },
  { id: 2, username: "user", password: "123", role: "user" }
];

// ================= LOGIN ROUTE =================
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check user
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Create token
  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token: token
  });
});

// ================= AUTH MIDDLEWARE =================
function authenticate(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "Token required" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// ================= ROLE MIDDLEWARE =================
function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({
        message: "Access denied. Only " + role + " allowed"
      });
    }
    next();
  };
}

// ================= ROUTES =================

// Public route
app.get("/", (req, res) => {
  res.send("Public route - anyone can access");
});

// User route (any logged-in user)
app.get("/user", authenticate, (req, res) => {
  res.json({
    message: "User route accessed",
    user: req.user
  });
});

// Admin route (only admin allowed)
app.get("/admin", authenticate, authorizeRole("admin"), (req, res) => {
  res.json({
    message: "Admin route accessed"
  });
});

// ================= SERVER =================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});