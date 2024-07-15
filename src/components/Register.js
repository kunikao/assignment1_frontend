import React, { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from "../consistents";
import { Link } from 'react-router-dom';
function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BaseUrl}register/`, formData)
      .then((response) => {
        console.log(response.data);
        // Handle success (e.g., show success message)
        alert('Registration successful!');
        window.location.href = '/auth';
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show error message)
        alert('Registration failed. Please try again.'); // Example: Show error message
      });
  };

  return (
      <div>
          <h2>Maungawhau Institute of Studies </h2><h2>Register</h2>
          <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="Username" value={formData.username}
                     onChange={handleChange}/>
              <input type="password" name="password" placeholder="Password" value={formData.password}
                     onChange={handleChange}/>
              <button type="submit">Register</button>
          </form>
          <p>Already have an account? <Link to="/auth">Login here</Link></p>
      </div>
  );
}

export default Register;
