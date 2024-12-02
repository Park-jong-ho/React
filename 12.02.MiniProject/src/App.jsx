import './App.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';

function App() {

  const ditpatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  console.log(pokemonData)
  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151))
  }, [])

  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
