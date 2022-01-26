import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Main = () => {
  
  // const [ message, setMessage ] = useState('Loading...')

  // useEffect( () => {
  //   axios.get('http://localhost:8000/api')
  //     .then(res => setMessage(res.data.message))
  //     .catch(err => console.log('Error loading main', err))
  // }, []);
  
  return (
    <>
      <h1>Main</h1>
      {/* <p>{message}</p> */}
    </>
  );
}

export default Main;