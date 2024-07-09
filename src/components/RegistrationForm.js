import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom'; 

function RegistrationForm() {
  const navigate = useNavigate();  
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com/api/Users', userData);
      Swal.fire('Success!', response.data.message, 'success');
      navigate('/'); // i can also use window.location
    } catch (error) { 
      if (error.response) {
        Swal.fire('Error!', error.response.data.message, 'error');
      } else {
        Swal.fire('Error!', 'An unknown error occurred.', 'error');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Enter name" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required />
      </Form.Group>
      <Button variant="light" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default RegistrationForm;
