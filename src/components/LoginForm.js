import React, { useState } from 'react';
import { Form, Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; 

const LoginForm = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const adminEmail = 'admin@live.com';
  const adminPassword = '123';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('hhttps://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com/api/UserLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire('Success', data.message, 'success');
        if (formData.email === adminEmail && formData.password === adminPassword) {
         
          navigate('/admin')
        }else{
        
        navigate('/products'); 
        }
      } else {
        Swal.fire('Error', data.message, 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'An error occurred', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <FormLabel>Email address</FormLabel>
        <FormControl
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicPassword">
        <FormLabel>Password</FormLabel>
        <FormControl
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Form.Check type="checkbox" label="Remember Me" />
      </FormGroup>
      <Button variant="light" type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Form>
  );
};
export default LoginForm