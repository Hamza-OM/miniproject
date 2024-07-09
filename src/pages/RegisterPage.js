import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import RegisterForm from '../components/RegistrationForm';
import 'animate.css/animate.min.css';



const RegisterPage = () => {
  return (
    <Container fluid className="register-container animate__animated animate__fadeIn" >
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="register-form-container glass ">
          <h2 className="register-title">Register</h2>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;