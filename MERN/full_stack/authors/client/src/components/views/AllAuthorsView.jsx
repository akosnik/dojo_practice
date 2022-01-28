import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllAuthorsView = () => {

  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res => {
        setAuthorList(res.data.results);
      })
      .catch(err => {
        console.log("Something went wrong while sending api request", err)
      })
  }, [])


  const handleDelete = (id) => {

    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log("Success deleting: ", res)

        const updatedAuthorList = authorList.filter(author => author._id != id)
        console.log('updated', updatedAuthorList)
        setAuthorList(updatedAuthorList);
      })
      .catch(err => {
        console.log("Something went wrong while deleting Author", err)
      })
  }


  return (
    <div>
      <h2>All Authors</h2>
      <div className="Authors">
        {authorList.map((author, idx) => {
          return (
            <div key={idx} className="Author">
              <h3><Link to={`/authors/view/${author._id}`}>{author.name}</Link></h3>
              <span>
                <Link to={`/authors/view/${author._id}`} className='btn btn-primary'>View</Link>
                <Link to={`/authors/edit/${author._id}`} className='btn btn-warning'>Edit</Link>
                <button className='btn btn-danger' onClick={() => handleDelete(author._id)}>Delete</button>
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default AllAuthorsView;
