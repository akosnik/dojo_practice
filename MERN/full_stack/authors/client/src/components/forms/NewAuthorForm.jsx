import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const NewAuthorForm = () => {
  const history = useHistory();

  const [name, setName] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/authors', { name })
      .then(res => {
        // console.log("Post response:", res)
        if (res.data.error) {
          setErrors(res.data.error.errors)
          console.log('ERRORS', res.data.error.errors)
        } else {
          console.log('New Author created successfully!')
          history.push('/')
        }
      })
      .catch(err => {
        console.log("There was an error while posting:", err)
      })
  }

  return (
    <>
      <h2>New Author Form</h2>
      <form onSubmit={handleSubmit} className='form author-form'>

        <div className="form-group">
          <label >Name</label>
          <input className='input name-input' type="text" name="name" onChange={(e) => setName(e.target.value)} />
          <p className='text-danger'>{errors?.name?.message}</p>
        </div>

        <span>
          <Link to='/' className='btn btn-warning'>Cancel</Link>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </span>
      </form>
    </>
  );
}

export default NewAuthorForm;
