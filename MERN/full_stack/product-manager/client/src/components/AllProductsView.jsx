import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllProductsView = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        setProductList(res.data.results);
      })
      .catch(err => {
        console.log("Something went wrong while sending api request", err)
      })
  }, [])


  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log("Success message: ", res)

        const updatedProductList = productList.filter(product => product._id != id)
        console.log('updated', updatedProductList)
        setProductList(updatedProductList);
      })
      .catch(err => {
        console.log("Something went wrong while deleting product", err)
      })
  }


  return (
    <div>
      <h2>All Products</h2>
      <div className="products">
        {productList.map((product, idx) => {
          return (
            <div key={idx} className="product">
              <h3><Link to={`/products/view/${product._id}`}>{product.title}</Link></h3>
              {/* <p>{product.description}</p>
              <p>Only: ${product.price}</p> */}
              <span>
                <Link to={`/products/view/${product._id}`} className='btn btn-primary'>View</Link>
                <Link to={`/products/edit/${product._id}`} className='btn btn-warning'>Edit</Link>
                <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button>
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default AllProductsView;
