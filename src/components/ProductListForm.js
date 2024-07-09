// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// function ProductListForm() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const response = await axios.get('http://localhost:3006/api/Product');
//             setProducts(response.data);
//         };
//         fetchProducts();
//     }, []);

//     return (
//         <div className="container mt-4"> 
//             <h1 className="mb-3">Product List</h1>
//             {products.map(product => (
//                 <div key={product.PId} className="card mb-2">
//                     <div className="card-body">
//                         <h5 className="card-title">{product.Name}</h5>
//                         <p className="card-text">{product.Description}</p>
//                         <p className="card-text">${product.Price}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
// export default ProductListForm;















{/* <h1 className="mb-3">Product List</h1>

<div className="row row-cols-1 row-cols-md-3 g-4">
  {products.map((product) => (
    <div key={product.PId} className="col">
      <div className="card h-100">
        {product.Image && (
          <img
            src={`http://localhost:3006${product.Image}`}
            className="card-img-top"
            alt="Product"
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{product.Name}</h5>
          <p className="card-text">{product.Description}</p>
          <p className="card-text">Price: {product.Price}</p>
          <p className="card-text">Category ID: {product.CId}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
); */}