import db from '../config/db.js';

export const createPlan = (req, res) => {
  const { name, price, guests } = req.body;
  const query = 'INSERT INTO plans (name, price, guests) VALUES (?, ?, ?)';
  db.query(query, [name, price, guests], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, name, price, guests });
  });
};
