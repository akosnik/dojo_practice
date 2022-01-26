import axios from 'axios';
import React, { useState } from 'react';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const productFormObj = { title, price, description }

    axios.post('http://localhost:8000/api/products', productFormObj)
      .then( res => {
        console.log("Post response:", res)
      })
      .catch( err => {
        console.log("There was an error while posting:", err)
      })
  }

  return (
  <>
    <form onSubmit={ handleSubmit } className='form productForm'>
      <h2>Product Info Form</h2>
      <div className="form-group">
        <label >Title</label>
        <input className='input title-input' type="text" name="title" onChange={ (e)=> setTitle(e.target.value) }/>
      </div>
      <div className="form-group">
        <label >Price</label>
        <input className='input price-input' type="float" name="price" onChange={ (e)=> setPrice(e.target.value) }/>
      </div>
      <div className="form-group">
        <label >Description</label>
        <textarea className='input description-input' type="textField" name="description" onChange={ (e)=> setDescription(e.target.value) }/>
      </div>
      <button type="submit">Submit</button>
    </form>
  </>
  );
}

export default ProductForm;
