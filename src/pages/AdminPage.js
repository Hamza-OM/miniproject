import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminProductForm from '../components/AdminProductForm';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'animate.css/animate.min.css';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com/api/Product');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hamzaalsiyabi-app-33d30b4be32b.herokuapp.com/api/Product/${id}`);
      setProducts(products.filter((product) => product.PId !== id));
      Swal.fire('Success', 'Product deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting product:', error);
      Swal.fire('Error', error.response.data.message, 'error');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowAddModal = () => {
    setSelectedProduct(null);
    setShowModal(true);
  };

  return (
    <div className="admin-container animate__animated animate__fadeIn">
      <h2 className="text-center">Admin Panel</h2>

      <div className="admin-button-container d-flex justify-content-center">
        <Button variant="secondary" onClick={handleShowAddModal}>Add Product</Button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Category ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.PId}>
                <td>{product.PId}</td>
                <td>{product.Name}</td>
                <td>{product.Description.slice(0, 30) + "..."}</td>
                <td>{product.Image}</td>
                <td>{product.Price}</td>
                <td>{product.CId}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(product)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(product.PId)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdminProductForm product={selectedProduct} onUpdate={fetchProducts} onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminPage;