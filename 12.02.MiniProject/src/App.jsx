import './App.scss'
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import { Link } from 'react-router-dom';


function App() {

  const ditpatch = useDispatch()
  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151))
  }, [])

  return (
    <>
      <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='flex gap-[10px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/detail/:pokemon'}>상세정보</Link>
        <Link to={'/search'}>검색</Link>
        <Link to={'/favorite'}>찜목록</Link>
      </nav>
      <main className='flex justify-center flex-wrap gap-[20px] pt-[20px]'>
      <Routes>
        <Route path={'/'} element={ <Main />} /> 
        <Route path={'/detail/:pokemonId'} element={ <Detail />} /> 
        <Route path={'/search'} element={ <Search />} /> 
        <Route path={'/favorite'} element={ <Favorite />} /> 
      </Routes>
      </main>
    </>
  )
}

export default App
