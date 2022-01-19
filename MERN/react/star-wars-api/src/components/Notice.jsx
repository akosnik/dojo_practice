import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Notice() {

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/noticed");
  }

  return (
  <form onSubmit={handleSubmit}>
    <h1>NOTICE:</h1>
    <h2>This is a notice.</h2>
    <button type="submit">Note</button>
  </form>
  );
}
