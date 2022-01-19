import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  
  const { id, color='black', size=24 } = useParams();
  
  return (
    <div>
      <h1 style={{color: color, fontSize: `${size}px`}}>#{id} PROFILE PAGE</h1>
    </div>
  );
}
