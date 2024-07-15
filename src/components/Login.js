import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {BaseUrl} from "../consistents";
import '../App.css';

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
    axios.post(`${BaseUrl}auth/`, formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.access) {
          localStorage.setItem('token', response.data.access);
          navigate('/mainform');
        } else {
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
          <h2>Maungawhau Institute of Studies </h2>
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
              Register if you don't have an account. <Link to="/register">Register</Link>
          </p>
      </div>
  );
}

export default Login;
