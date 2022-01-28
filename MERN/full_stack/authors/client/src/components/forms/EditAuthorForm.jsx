import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

const EditAuthorForm = () => {
  const history = useHistory();
  const { id } = useParams();


  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log(res);
        initializeAuthorInfo(res.data.results)
      })
      .catch(err => {
        console.log("There was an error initializing Author info", err)
        history.push('/authors/404')
      })
  }, []);

  const initializeAuthorInfo = (AuthorInfo) => {
    setName(AuthorInfo.name)
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    const authorFormObj = { name }


    axios.put(`http://localhost:8000/api/authors/${id}`, authorFormObj)
      .then(res => {
        console.log("Post response:", res)
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
      <form onSubmit={handleSubmit} className='form AuthorForm'>
        <h2>Author Edit Form</h2>

        <div className="form-group">
          <label >name</label>
          <input className='input name-input' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <p className='text-danger'>{errors.name?.message}</p>
        </div>

        <span>
          <Link to='/' className='btn btn-warning'>Cancel</Link>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </span>
      </form>
    </>
  );
}

export default EditAuthorForm;
