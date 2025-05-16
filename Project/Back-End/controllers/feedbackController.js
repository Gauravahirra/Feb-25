import db from "../config/db.js";

export const submitFeedback = (req, res) => {
  const { name, email, message } = req.body;
  db.query(
    "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)",
    [name, email, message],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Feedback submitted" });
    }
  );
};

export const getFeedback = (req, res) => {
  db.query("SELECT * FROM feedback ORDER BY submitted_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};