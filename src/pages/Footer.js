import React from 'react';


const Footer = () => {
  return (
    <footer className="footer fixed-bottom bg-light py-4 border-top">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4">
            <h5>Hamza Alsiyabi</h5>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Register</p>
            <p>Products</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p><i className="bi bi-twitter"></i> Twitter</p>
            <p><i className="bi bi-instagram"></i> Instagram</p>
            <p><i className="bi bi-facebook"></i> Facebook</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; 2024 Company, Inc</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;