// backend/server.js
const express = require("express");
const cors = require("cors");
const npm = require("npm-programmatic");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.post("/install-package", async (req, res) => {
  const { packageName } = req.body;

  try {
    await npm.install([packageName], { save: true, cwd: __dirname });
    res.status(200).json({ success: true, message: `${packageName} installed successfully!` });
  } catch (error) {
    res.status(500).json({ success: false, message: `Failed to install ${packageName}: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});