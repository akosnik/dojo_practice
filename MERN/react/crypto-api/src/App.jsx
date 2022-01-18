import './App.css';
// import PokemonUsingFetch from './components/PokemonUsingFetch'
import PokemonUsingAxios from './components/PokemonUsingAxios';

function App() {
  return (
    <div className="App">
      {/* <PokemonUsingFetch></PokemonUsingFetch> */}
      <PokemonUsingAxios></PokemonUsingAxios>
    </div>
  );
}

export default App;
