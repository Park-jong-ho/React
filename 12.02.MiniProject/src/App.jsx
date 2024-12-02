import './App.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/1/")
      const data = await response.json()
      console.log(data.names.find(el => el.language.name === 'ko').name);

      const pokemonData = {
        id :1,
        name: data.names.find(el => el.language.name === 'ko').name
      }
    }
    fetchAPI()

  }, [])

  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
