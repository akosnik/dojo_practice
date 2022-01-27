import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const SingleProductView = () => {
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState({})


  useEffect(() => {

    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res);
        setProduct(res.data.results);
      })
      .catch(err => {
        console.log("Something went wrong while sending api request", err)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log("Success message: ", res)

        history.push('/')
      })
      .catch(err => {
        console.log("Something went wrong while deleting product", err)
      })
  }

  return (
    <div>
      <h2>Single Product View</h2>

      <div className="product">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Only: ${product.price}</p>
        <span>
          <Link to={`/products/edit/${product._id}`} className='btn btn-warning'>Edit</Link>
          <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button>
        </span>
      </div>
    </div>
  );
}

export default SingleProductView;
