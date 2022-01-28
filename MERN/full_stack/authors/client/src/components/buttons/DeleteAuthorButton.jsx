import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleteAuthorButton(props) {
  const history = useHistory();
  const { id } = props

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log("Success deleting: ", res)
        history.push('/')
      })
      .catch(err => {
        console.log("Something went wrong while deleting author", err)
      })
  }
  return (
    <>
      <button className='btn btn-danger' onClick={() => handleDelete(id)}>Delete</button>
    </>
  );
}

export default DeleteAuthorButton;
