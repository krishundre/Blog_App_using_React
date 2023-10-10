import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginForm.css'; // Import your CSS file

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation: Check if username and password are correct
    if (formData.username === 'admin' && formData.password === 'admin') {
      // Redirect to the homepage upon successful login
      history.push('/');
    } else {
      setErrors({ ...errors, username: 'Invalid credentials', password: 'Invalid credentials' });
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <span className="error-message">{errors.username}</span>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error-message">{errors.password}</span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
