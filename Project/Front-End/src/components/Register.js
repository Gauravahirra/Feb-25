import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: ""
};

const Register = () => {
  const navigate = useNavigate();
  const {values,errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues : initialValues,
     validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.phone) {
      errors.phone = 'Phone is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords must match';
    }

    return errors;
  },
    onSubmit: async (values, action) => {
      try {
        await axios.post("http://localhost:7777/api/auth/register", {
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password
        });
        alert("User registered successfully!");
        action.resetForm();
        navigate("/login");
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Failed to register. Please try again.");
      }
    }
  });
  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Register to start planning your dream wedding with us</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="reg-name">Full Name</label>
            <input 
              type="text" 
              id="reg-name"
              name="name"
              className="form-control"
              value={values.name} 
              onChange={handleChange}
              onBlur={handleBlur}
              required />
              {touched.name && errors.name ? (
                <div className="error">{errors.name}</div>
              ): null}
          </div>
          <div className="form-group">
            <label htmlFor="reg-email">Email Address</label>
            <input 
              type="email" 
              id="reg-email" 
              name="email"
              className="form-control" 
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
              {touched.email && errors.email ? (
                <div className="error">{errors.email}</div>
              ):null}
          </div>
          <div className="form-group">
            <label htmlFor="reg-phone">Phone Number</label>
            <input 
              type="tel" 
              id="reg-phone" 
              name="phone"
              className="form-control" 
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
              {touched.phone && errors.phone ? (
                <div className="error">{errors.phone}</div>
              ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="reg-password">Password</label>
            <input 
              type="password" 
              id="reg-password" 
              name="password"
              className="form-control" 
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
              {touched.password && errors.password ? (
                <div className="error">{errors.password}</div>
              ): null}
          </div>
          <div className="form-group">
            <label htmlFor="reg-confirm">Confirm Password</label>
            <input 
              type="password" 
              id="reg-confirm" 
              className="form-control" 
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
              {touched.confirmPassword && errors.confirmPassword ? (
                <div className="error">{errors.confirmPassword}</div>
              ) : null}
          </div>
          <div className="form-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the <Link to="#">Terms & Conditions</Link> and <Link to="#">Privacy Policy</Link></label>
          </div>
          <button type="submit" className="auth-btn">Register</button>
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </form>
        <div className="social-login">
          <p>Or register with</p>
          <div className="social-buttons">
            <a href="#" className="social-btn facebook"><FaFacebookF /></a>
            <a href="#" className="social-btn google"><FaGoogle /></a>
            <a href="#" className="social-btn twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;