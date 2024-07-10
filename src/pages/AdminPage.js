import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminProductForm from '../components/AdminProductForm';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'animate.css/animate.min.css';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

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
    {
      Header: 'ID',
      accessor: 'PId',
    },
    {
      Header: 'Name',
      accessor: 'Name',
    },
    {
      Header: 'Description',
      accessor: 'Description',
      Cell: row => <div>{row.value.slice(0, 30) + "..."}</div>,
    },
    {
      Header: 'Image',
      accessor: 'Image',
    },
    {
      Header: 'Price',
      accessor: 'Price',
    },
    {
      Header: 'Category ID',
      accessor: 'CId',
    },
    {
      Header: 'Actions',
      Cell: row => (
        <div>
          <Button variant="warning" onClick={() => handleEdit(row.original)}>Edit</Button>
          <Button variant="danger" onClick={() => handleDelete(row.original.PId)}>Delete</Button>
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

      <div className="table-container">
        <ReactTable
          data={products}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
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