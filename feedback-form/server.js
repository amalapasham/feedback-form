const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const users = [];

app.post("/add-feedback", (req, res) => {
  try {
    const { name, email, mobile, feedback } = req.body || {};

    // Validation: check required fields
    if (!name || !email || !mobile || !feedback) {
      console.log("❌ Missing required fields:", req.body);
      return res.status(400).json({ message: "Please fill all fields." });
    }

    // Store feedback temporarily in memory
    users.push({ name, email, mobile, feedback, time: new Date().toISOString() });
    console.log("✅ Feedback received:", users[users.length - 1]);

    return res.json({ message: "Feedback submitted successfully!" });
  } catch (err) {
    console.error("💥 Server error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
