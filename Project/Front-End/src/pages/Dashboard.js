import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [plans, setPlans] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', guests: '' });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  // 🔄 Load plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get('http://localhost:7777/api/plans');
        setPlans(res.data);
      } catch (err) {
        console.error('Error fetching plans:', err);
      }
    };
    fetchPlans();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.guests) return;

    try {
      if (editId) {
        const res = await axios.put(`http://localhost:7777/api/plans/${editId}`, formData);
        setPlans(plans.map(plan => (plan.id === editId ? res.data : plan)));
        setEditId(null);
      } else {
        const res = await axios.post('http://localhost:7777/api/plans', formData);
        setPlans([...plans, res.data]);
      }
      setFormData({ name: '', price: '', guests: '' });
    } catch (err) {
      console.error('Error saving plan:', err);
      alert('Failed to save plan. Try again.');
    }
  };

  const handleEdit = (plan) => {
    setFormData({ name: plan.name, price: plan.price, guests: plan.guests });
    setEditId(plan.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7777/api/plans/${id}`);
      setPlans(plans.filter(plan => plan.id !== id));
    } catch (err) {
      console.error('Error deleting plan:', err);
    }
  };

  const handleLogout = () => {
    // Clear token/localStorage if needed
    localStorage.removeItem('token'); // If you're using tokens
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">Wedding Plans</li>
            <li>Users</li>
            <li>Bookings</li>
            <li>Settings</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="dashboard-header">
          <h2>Wedding Plans Management</h2>
        </header>

        <div className="dashboard-content">
          <form onSubmit={handleSubmit} className="dashboard-form">
          <select
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
>
  <option value="">Select Plan</option>
  <option value="Silver">Silver</option>
  <option value="Gold">Gold</option>
  <option value="Platinum">Platinum</option>
</select>

    
            <input type="text" name="price" placeholder="Plan Price" value={formData.price} onChange={handleChange} required />
            <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} required />
            <button type="submit">{editId ? 'Update Plan' : 'Add Plan'}</button>
          </form>

           <h3>Current Plans</h3>
          {formData.name && (
  <div className="current-selected-plan">
    <h4>Selected Plan: <span>{formData.name}</span></h4>
  </div>
)}
          <div className="plans-container">
           
            <ul className="plan-list">
              {plans.map(plan => (
                <li key={plan.id} className="plan-item">
                  <p><strong>ID:</strong> {plan.id}</p>
                  <p><strong>{plan.name}</strong></p>
                  <p>₹{plan.price} | {plan.guests} Guests</p>
                  <div className="plan-actions">
                    <button onClick={() => handleEdit(plan)}>Edit</button>
                    <button onClick={() => handleDelete(plan.id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
