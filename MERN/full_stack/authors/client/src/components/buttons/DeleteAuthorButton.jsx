import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button'

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
      <Button variant='outlined' className='btn btn-danger' onClick={() => handleDelete(id)}>Delete</Button>
    </>
  );
}

export default DeleteAuthorButton;
