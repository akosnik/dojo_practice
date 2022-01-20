import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function StarWarsApi() {
  
  const [criteriaList, setCriteriaList] = useState([]);
  const [criteria, setCriteria] = useState('');
  const [searchId, setSearchId] = useState(0);
  
  const getApiSearchCriteria = () => {
    axios.get("https://swapi.dev/api/") // people, vehicles, ...etc
    .then(response => {
      // console.log(Object.keys(response.data))
      setCriteriaList(Object.keys(response.data))
      setCriteria(Object.keys(response.data)[0])
    })
    .catch(err => {
      console.log("There was an error", err)
    })
  }

  useEffect(getApiSearchCriteria, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(criteriaList)
    // axios.get("swapi.dev/api/planets/1/")
  }
  
  return (
    
      <form onSubmit={handleSubmit} className='search-form'>
        <div className="search-items">
          
          <label htmlFor="select-criteria">Search for:</label>
          <select name="criteria" className='select-criteria' onChange={(e) => setCriteria(e.target.value)} >
            <option className='search-option' disabled>Search Criteria</option>
            {
              criteriaList.map((item, i) => {
                return(
                  <option className='search-option' key={i} value={item} >{item}</option>
                )
              })
            }
          </select>

            {/* Try putting a text field for searching here */}
            
          <label htmlFor="idInput">ID:</label>
          <input type="number" name="idInput" className='input-id' placeholder='0' onChange={(e) => setSearchId(e.target.value)}/>
          
          <input type="submit" value="Search" className='btn-search'/>
        </div>       
      </form>
  
  );
}
