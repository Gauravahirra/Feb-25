import express from 'express';
import db from '../config/db.js';

const router = express.Router();

// Get all plans
router.get('/', (req, res) => {
  const query = 'SELECT * FROM wedding_plans';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching plans:', err);
      return res.status(500).json({ error: 'Error fetching plans' });
    }
    res.json(results);
  });
});

// Create a new plan
router.post('/', (req, res) => {
  const { name, price, guests } = req.body;
  const query = 'INSERT INTO wedding_plans (name, price, guests) VALUES (?, ?, ?)';
  
  db.query(query, [name, price, guests], (err, result) => {
    if (err) {
      console.error('Error creating plan:', err);
      return res.status(500).json({ error: 'Error creating plan' });
    }
    
    const newPlan = {
      id: result.insertId,
      name,
      price,
      guests
    };
    res.status(201).json(newPlan);
  });
});

// Update a plan
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, guests } = req.body;
  const query = 'UPDATE wedding_plans SET name = ?, price = ?, guests = ? WHERE id = ?';
  
  db.query(query, [name, price, guests, id], (err, result) => {
    if (err) {
      console.error('Error updating plan:', err);
      return res.status(500).json({ error: 'Error updating plan' });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Plan not found' });
    }
    
    res.json({ id, name, price, guests });
  });
});

// Delete a plan
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM wedding_plans WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting plan:', err);
      return res.status(500).json({ error: 'Error deleting plan' });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Plan not found' });
    }
    
    res.json({ message: 'Plan deleted successfully' });
  });
});

export default router; 