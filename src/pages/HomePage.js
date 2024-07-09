import React from 'react';
import { Container, Row, Col, Carousel, NavLink } from 'react-bootstrap';
import '../style.css'; // Assuming your custom styles are in style.css
// import Footer from './Footer';
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
            <NavLink to="/products" className="btn">Shop Now</NavLink>
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
            <NavLink to="/products" className="btn">Explore More</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Item elements for additional slides */}
      </Carousel>

      {/* Rest of your homepage content */}
      <Row>
        <Col>
          {/* Your content goes here */}
        </Col>
      </Row>

      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
  </footer>
    </Container>
  );
}

export default HomePage;