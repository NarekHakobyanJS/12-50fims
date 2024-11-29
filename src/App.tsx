// Componnets
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
// Libary
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getGenersThunk } from './store/slices/genersSlice';
// Css
import './App.css';
import { changePage, getFilmsByPageThunk } from './store/slices/filmsSlice';
import FilmPage from './pages/FilmPage/FilmPage';




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
      </Routes>
    </div>
    </>
  );
}

export default App;
function getSearchFilms() {
  throw new Error('Function not implemented.');
}

