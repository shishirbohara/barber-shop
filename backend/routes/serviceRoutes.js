const express = require("express");
const pool = require("../db");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/services", upload.single("image"), async (req, res) => {
  const { service_name, description } = req.body;
  const image = req.file ? req.file.path : null;

  if (!service_name || !description) {
    return res
      .status(400)
      .json({ error: "Service name and description required." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO services (service_name, image, description) VALUES ($1, $2, $3) RETURNING *",
      [service_name, image, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log("Error inserting services:", error);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/services", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM services");
    res.status(200).json(result.rows);
  } catch (error) {
    console.log("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;
