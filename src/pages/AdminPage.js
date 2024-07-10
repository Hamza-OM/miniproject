import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminProductForm from '../components/AdminProductForm';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'animate.css/animate.min.css';
import { DataGrid } from '@mui/x-data-grid'; // Import DataGrid from Material-UI

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

  const columns = [
    { field: 'PId', headerName: 'ID', width: 100 },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'Description', headerName: 'Description', width: 300 },
    { field: 'Image', headerName: 'Image', width: 150 },
    { field: 'Price', headerName: 'Price', width: 120 },
    { field: 'CId', headerName: 'Category ID', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div>
          <Button variant="warning" onClick={() => handleEdit(params.row)}>Edit</Button>
          <Button variant="danger" onClick={() => handleDelete(params.row.PId)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="admin-container animate__animated animate__fadeIn">
      <h2 className="text-center">Admin Panel</h2>

      <div className="admin-button-container d-flex justify-content-center">
        <Button variant="secondary" onClick={handleShowAddModal}>Add Product</Button>
      </div>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          checkboxSelection
        />
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