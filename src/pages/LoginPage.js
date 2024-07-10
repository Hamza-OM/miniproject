import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import LoginForm from '../components/LoginForm';
import 'animate.css/animate.min.css';


const LoginPage = () => {
  return (
    
    <Container fluid className="login-container animate__animated animate__fadeIn">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="login-form-container glass-morphism" >
          <h2 className="login-title">Welcome Back!</h2>
          <p lassName="login-subtitle">Please sign in to your account.</p>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;