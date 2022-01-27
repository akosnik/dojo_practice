import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProductForm = () => {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();

    const productFormObj = { title, price, description }

    axios.post('http://localhost:8000/api/products', productFormObj)
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
        <h2>Product Info Form</h2>
        <div className="form-group">
          <label >Title</label>
          <input className='input title-input' type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
          <p className='text-danger'>{errors.title?.message}</p>
        </div>
        <div className="form-group">
          <label >Price</label>
          <input className='input price-input' type="float" name="price" onChange={(e) => setPrice(e.target.value)} />
          <p className='text-danger'>{errors.price?.message}</p>
        </div>
        <div className="form-group">
          <label >Description</label>
          <textarea className='input description-input' type="textField" name="description" onChange={(e) => setDescription(e.target.value)} />
          <p className='text-danger'>{errors.description?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ProductForm;
