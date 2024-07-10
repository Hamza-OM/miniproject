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
      <footer class="footer fixed-bottom bg-light text-dark d-flex flex-wrap justify-content-between align-items-center py-3 px-5">
  <div class="col">
    <a href="#" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
      <h5 class="text-white fs-4">Hamza Alsiyabi</h5>
    </a>
    <p class="text-muted">&copy; 2024 Hamza Alsiyabi</p>
  </div>

  <ul class="nav col-md-auto mb-md-0 justify-content-end list-unstyled">
    <li class="nav-item"><a href="#" class="nav-link px-3 text-white">About Us</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-3 text-white">Contact Us</a></li>
    
  </ul>

  <ul class="nav col-md-3 justify-content-end mb-md-0 list-unstyled">
    <li class="nav-item">
      <a href="#" class="nav-link px-3 text-white">
        <i class="bi bi-twitter fs-4"></i>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link px-3 text-white">
        <i class="bi bi-instagram fs-4"></i>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link px-3 text-white">
        <i class="bi bi-facebook fs-4"></i>
      </a>
    </li>
  </ul>
</footer>

    </Container>
  );
}

export default HomePage;
