// Componnets
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import FilmPage from './pages/FilmPage/FilmPage';
// Libary
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getGenersThunk } from './store/slices/genersSlice';
//Redux
import { changePage, getFilmsByPageThunk } from './store/slices/filmsSlice';
// Css
import './App.css';
import GenresPage from './pages/GenresPage/GenresPage';

function App() {
  const [load, setLaod] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  const {page} = useAppSelector((state) => state.filmsPage)
  
  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
  }, [])

  
  useEffect(() => {
    dispatch(getGenersThunk());
    dispatch(getFilmsByPageThunk(page));
    if(load){
      dispatch(changePage())
    }
  }, [load])

  const handleScroll = (e : any) => {

    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setLaod(true)
    }else {
      setLaod(false)
    }
  }

  return (
    <>
    <Header />
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/film/:id' element={<FilmPage /> }/>
        <Route path='/genre/:id' element={<GenresPage /> }/>
      </Routes>
    </div>
    </>
  );
}

export default App;


