import React from 'react';
import { Container, Row, Col, Carousel, NavLink } from 'react-bootstrap';
import '../style.css'; // Assuming your custom styles are in style.css
import Footer from './Footer';
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

      {/* Footer */}
      <Footer />
    </Container>
  );
}

export default HomePage;