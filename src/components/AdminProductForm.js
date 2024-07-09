import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AdminProductForm = ({ product, onUpdate, onClose }) => {
  const [name, setName] = useState(product ? product.Name : '');
  const [description, setDescription] = useState(product ? product.Description : '');
  const [price, setPrice] = useState(product ? product.Price : '');
  const [image, setImage] = useState(null);
  const [cid, setCid] = useState(product ? product.CId : '');

  useEffect(() => {
    if (product) {
      setName(product.Name);
      setDescription(product.Description);
      setPrice(product.Price);
      setCid(product.CId);
    }
  }, [product]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Description', description);
    formData.append('Price', price);
    formData.append('CId', cid);

    if (image) {
      formData.append('Image', image);
    }
    
    

    try {
      if (product) {
        await axios.put(`https://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com/api/Product/${product.PId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axios.post('https://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com/api/Product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          onChange={handleImageChange}
        />
        {product && product.Image && <img src={`https://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com${product.Image}`} alt="Product" style={{ marginTop: '10px', maxHeight: '200px' }} />}
      </Form.Group>

      <Form.Group controlId="formCid">
  <Form.Label>Category</Form.Label>
  <Form.Select
    value={cid}
    onChange={(e) => setCid(e.target.value)}
    required
  >
    <option value="">Select category </option>
    <option value="1">Clothing</option>
    <option value="2">Shoes </option>
    <option value="3">Furniture </option>
    <option value="4">TVs</option>
  </Form.Select>
</Form.Group>


      <Button variant="primary" type="submit">
        {product ? 'Update Product' : 'Add Product'}
      </Button>
    </Form>
  );
};

export default AdminProductForm;
