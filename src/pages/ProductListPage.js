import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Dropdown, DropdownButton, Card, Button } from 'react-bootstrap';
import 'animate.css/animate.min.css';


const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com/api/Product');
        const filteredProducts = response.data.filter((product) =>
          product.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedCategoryId ? product.CId === selectedCategoryId : true)
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [searchTerm, selectedCategoryId]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="product-list-container animate__animated animate__fadeIn">
      <div className="search-and-filter d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="flex-grow-1">
          <FormControl
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
        <DropdownButton
          id="dropdown-basic-button"
          title={selectedCategoryId ? `Category ${selectedCategoryId}` : 'All Categories'}
          variant="light"
          className="category-dropdown"
        >
          <Dropdown.Item onClick={() => handleCategoryChange(null)}>All Categories</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange(1)}>Clothing</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange(2)}>Shoes</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange(3)}>Furniture</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange(4)}>TVs</Dropdown.Item>
        </DropdownButton>
      </div>

      <h1 className="product-list-heading mb-3">Products</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4 product-grid">
        {products.map((product) => (
          <div key={product.PId} className="col product-card">
            <Card className="h-100">
              {product.Image && (
                <Card.Img
                  variant="top"
                  src={`https://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com${product.Image}`}
                  alt="Product"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
              )}
              <Card.Body>
                <Card.Title>{product.Name}</Card.Title>
                <Card.Text>{product.Description}</Card.Text>
                <Card.Text>Price: ${product.Price}</Card.Text>
                <Card.Text>Category ID: {product.CId}</Card.Text>
                <Button variant="light">add to cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;


