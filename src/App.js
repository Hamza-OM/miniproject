import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import ProductListPage from './pages/ProductListPage'; 
import CustomNavbar from './pages/navbar'; // Import the CustomNavbar component


function App() {
  return (
    <Router>
      <CustomNavbar /> {/* Include the CustomNavbar component here */}
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products" element={<ProductListPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;