import React from 'react';
import { Link } from 'react-router-dom';

const AuthorNotFound = () => {
  return (
    <>
      <h3>Author not found.</h3>
      <h4>Would you like to create a new author?</h4>
      <Link to='/authors/new' className='btn btn-primary'>New</Link>
      <Link to='/' className='btn btn-primary'>Home</Link>
    </>
  );
}

export default AuthorNotFound;
