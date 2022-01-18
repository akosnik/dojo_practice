import React, {useState, useEffect} from 'react'
import axios from 'axios';


const PokemonUsingAxios = () => {

  const [listOfPokemon, setListOfPokemon] = useState([])

  

  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
    .then(response => {
      console.log(response)
      setListOfPokemon(response.data.results);
    })
    .catch(err => {
      console.log("There was an error:", err)
    })
    
  }

  useEffect(getPokemon, []);

  return (
    <>
      <h1>Pokemon</h1>
      {/* <p><button onClick={getPokemon}>Dynamite</button></p> */}
      <div className="pokemon-container">
        <ul className='poke-list'>
          {
            listOfPokemon.map((pokeObj, i) => {
              return (
                <li key={i}>{pokeObj.name}</li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}


export default PokemonUsingAxios;