import './App.css';
import imgRickyMorty from './img/rick-morty.png';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    console.log(characters);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {/* valida si tiene algo muestra el components de characters */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />

        ) : (
          <>
            <img src={imgRickyMorty} className="img-home" />
            <button onClick={reqApi} className="btn-search">Buscar personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
