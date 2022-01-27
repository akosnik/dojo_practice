import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const EditProductForm = () => {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(-1);
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res);
        initializeProductInfo(res.data.results)
      })
      .catch(err => {
        console.log("There was an error initializing product info", err)
      })
  }, []);

  const initializeProductInfo = (productInfo) => {
    setTitle(productInfo.title)
    setPrice(productInfo.price)
    setDescription(productInfo.description)
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    const productFormObj = { title, price, description }

    axios.put(`http://localhost:8000/api/products/${id}`, productFormObj)
      .then(res => {
        console.log("Post response:", res)
        if (res.data.error) {
          setErrors(res.data.error.errors)
          console.log('ERRORS', res.data.error.errors)
        } else {
          console.log('New product created successfully!')
          history.push('/')
        }
      })
      .catch(err => {
        console.log("There was an error while posting:", err)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form productForm'>
        <h2>Product Edit Form</h2>
        <div className="form-group">
          <label >Title</label>
          <input className='input title-input' type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <p className='text-danger'>{errors.title?.message}</p>
        </div>
        <div className="form-group">
          <label >Price</label>
          <input className='input price-input' type="float" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <p className='text-danger'>{errors.price?.message}</p>
        </div>
        <div className="form-group">
          <label >Description</label>
          <textarea className='input description-input' type="textField" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <p className='text-danger'>{errors.description?.message}</p>
        </div>
        <button className='btn btn-warning' type="submit">Submit</button>
      </form>
    </>
  );
}

export default EditProductForm;
