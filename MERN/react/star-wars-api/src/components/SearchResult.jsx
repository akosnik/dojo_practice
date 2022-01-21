import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SearchResult() {

  const {criteria, id} = useParams();
  const [searchResult, setSearchResult] = useState({})
  


  useEffect(() => {
    axios.get(`https://swapi.dev/api/${criteria}/${id}`)
    .then(response => {
      setSearchResult(response.data)
      console.log(response.data);
    })
    .catch(err => {
      setSearchResult('')
      console.log('Error', err)
    })
  }, [criteria, id]);



  const renderSwitch = (criteria) => {
    let sr = searchResult;

    if (!sr) {
      return
    }
    
    const redirect = (url) => {
      if (url){
        let match = 'https://swapi.dev/api/';
        return url.replace(match, '');
      }
    }

    switch(criteria) {
      case 'films':
        return(
          <>
          <h2>{sr.title}</h2>
          <h3>Episode {sr.episode_id}</h3>
          <div className='crawlText'>{sr.opening_crawl}</div>
          </>
        );
      case 'people':
        return(
          <>
          <h2>{sr.name}</h2>
          <ul className='attributes'>
            <li>Hair: {sr.hair_color}</li>
            <li>Height: {sr.height} cm</li>
            <li>Mass: {sr.mass} kg</li>
          </ul>
          {/* <a  onClick={ () => redirect(sr.homeworld) }>Homeworld</a> */}
          <Link className='link' to={`/${redirect(sr.homeworld)}`}>Homeworld</Link>
          </>
        );
      case 'planets':
        return(
          <>
          <h2>{sr.name}</h2>
          <ul className='attributes'>
            <li>Climate: {sr.climate}</li>
            <li>Terrain: {sr.terrain}</li>
            <li>Population: {sr.population}</li>
          </ul>
          </>
        );
      case 'species':
        return(
          <>
          <h2>{sr.name}</h2>
          <ul className='attributes'>
            <li>Language: {sr.language}</li>
            <li>Designation: {sr.designation}</li>
            <li>Average Height: {sr.average_height} cm</li>
            <li>Average Lifespan: {sr.average_lifespan} gy</li>
          </ul>
          <Link className='link' to={`/${redirect(sr.homeworld)}`}>Homeworld</Link>
          </>
        );
      case 'starships':
        return(
          <>
          <h2>{sr.name}</h2>
          <ul className='attributes'>
            <li>Cost: {sr.cost_in_credits} credits</li>
            <li>Crew: {sr.crew}</li>
            <li>Length: {sr.length} m</li>
            <li>Hypderdrive Rating: {sr.hyperdrive_rating}</li>
          </ul>
          </>

        );
      case 'vehicles':
        return(
          <h2>Vehicles</h2>
        );
      default:
        return(
          <h2>No Droids</h2>
        );
    }  
  }

  return <div className='SearchResults'>
    <h2>Results</h2>
    {
      searchResult? renderSwitch(criteria):renderSwitch('No Result')
    }    

  </div>;
}
