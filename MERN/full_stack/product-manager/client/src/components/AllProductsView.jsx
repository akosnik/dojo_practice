import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AllProductsView = () => {
  
  const [productList, setProductList] = useState({});

  useEffect(()=> {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        setProductList(res.data.results);
      })
  }, [])

  return (
  <div>
    <h2>All Products</h2>
    <div className="products">
      {productList.map((product) => {
        return (
          <div className="product">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Only: ${product.price}</p>
            <span>
              <button>View NOT SETUP</button>
              <button>Edit NOT SETUP</button>
              <button>Delete NOT SETUP</button>
            </span>
          </div>
        );
      })}

    </div>
  </div>
  );
}

export default AllProductsView;
