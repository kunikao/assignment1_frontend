// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from "../consistents";

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BaseUrl}login/`, formData)
      .then((response) => {
        console.log(response.data);
        // Example: Assuming response.data.token exists for successful login
        if (response.data.token) {
          // Handle success (e.g., set user session, store token in localStorage)
          localStorage.setItem('token', response.data.token); // Example: Storing token in localStorage
          navigate('/mainform'); // Navigate to mainform after successful login
        } else {
          // Handle error (e.g., show error message)
          alert('Login failed. Invalid credentials.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Incorrect username or password. Please try again.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
