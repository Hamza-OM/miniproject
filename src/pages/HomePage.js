import React from 'react';
import { Container, Row, Col, Carousel, NavLink } from 'react-bootstrap';
import '../style.css'; // Assuming your custom styles are in style.css
import image1 from '../image1.jpg'; // Import the images
import image2 from '../image2.jpg'; // Import the images
import 'animate.css/animate.min.css';

function HomePage() {
  return (
    <Container fluid className="home-page animate__animated animate__fadeIn">
      {/* Full Page Image Slider Header */}
      <Carousel fade className="d-block w-100">
        <Carousel.Item>
          <img
            className="d-block w-100 custom-slider-image" // Add custom class
            src={image1} // Use the imported image
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>Slide 1 Heading</h3>
              <p>Slide 1 Description</p> */}
            <NavLink to="/products" className="btn btn-primary">
              Shop Now
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-slider-image" // Add custom class
            src={image2} // Use the imported image
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Slide 2 Heading</h3>
              <p>Slide 2 Description</p> */}
            <NavLink to="/products" className="btn btn-secondary">
              Explore More
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Item elements for additional slides */}
      </Carousel>

      {/* Rest of your homepage content */}
      <Row>
        <Col>
          {/* Your main content goes here */}
        </Col>
      </Row>

      {/* Improved Footer */}
      <footer className="footer fixed-bottom bg-light py-2 border-top d-flex justify-content-between align-items-center">
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
  <div className="col-md-4 text-end">
    <h5>Follow Us</h5>
    <p>
      <i className="bi bi-twitter"></i> Twitter
    </p>
    <p>
      <i className="bi bi-instagram"></i> Instagram
    </p>
    <p>
      <i className="bi bi-facebook"></i> Facebook
    </p>
  </div>
</footer>
    </Container>
  );
}

export default HomePage;
