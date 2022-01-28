import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import DeleteAuthorButton from '../buttons/DeleteAuthorButton';

const OneAuthorView = () => {
  const { id } = useParams();
  const history = useHistory();

  const [author, setAuthor] = useState({})


  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log('success', res);
        setAuthor(res.data.results);
      })
      .catch(err => {
        console.log("Something went wrong while sending api request", err)
      })
  }, [])

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
    <div>
      <h2>Single Author View</h2>

      <div className="author">
        <h3>{author.name}</h3>
        <span>
          <Link to={`/authors/edit/${author._id}`} className='btn btn-warning'>Edit</Link>
          <DeleteAuthorButton id={author._id} />
        </span>
      </div>
    </div>
  );
}

export default OneAuthorView;
