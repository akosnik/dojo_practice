import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  
  const { id, color='black', size=24 } = useParams();
  
  return (
    <div>
      { isNaN(id)
      ?<h1 style={{color: color, fontSize: `${size}px`}}>{id}'s PROFILE PAGE</h1>
      :<h1 style={{color: color, fontSize: `${size}px`}}>PROFILE PAGE #{id}</h1>
      }
      
    </div>
  );
}
