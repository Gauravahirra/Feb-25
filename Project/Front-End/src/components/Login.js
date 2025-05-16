import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import axios from "axios";

const initialValues = {
  email: "",
  password: ""
};

const Login = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues,
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }

      return errors;
    },
    onSubmit: async (values, action) => {
      try {
        const res = await axios.post("http://localhost:7777/api/auth/login", {
          email: values.email,
          password: values.password
        });
        console.log(res);
        alert("Login successful!");
        action.resetForm();
        navigate("/dashboard");
      } catch (error) {
        console.error("Error during login", error);
        if (error.response?.status === 401) {
          alert(error.response.data.message);
        } else {
          alert("Error during login. Please try again.");
        }
        action.resetForm();
      }
    }
  });

  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to your account to continue planning your dream wedding</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>
            <input 
              type="email" 
              id="login-email" 
              className="form-control" 
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
              {touched.email && errors.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input 
              type="password" 
              id="login-password" 
              className="form-control" 
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
              {touched.password && errors.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" required/>
          
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="forgot-password">
              <Link to="#">Forgot password?</Link>
            </div>
          </div>

          <button type="submit" className="auth-btn">Login</button>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          </div>
        </form>

        <div className="social-login">
          <p>Or login with</p>
          <div className="social-buttons">
            <a href="https://www.facebook.com/" className="social-btn facebook"><FaFacebookF /></a>
            <a href="https://www.gmail.com/" className="social-btn google"><FaGoogle /></a>
            <a href="https://x.com/?lang=en-in" className="social-btn twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
