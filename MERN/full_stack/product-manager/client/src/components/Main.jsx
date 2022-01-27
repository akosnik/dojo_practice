import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {


  return (
    <>
      <h1>Main</h1>
      <span>
        <Link to='/'>Home</Link>
        <span> | </span>
        <Link to='/products/new'>Add Product</Link>
      </span>
    </>
  );
}

export default Main;