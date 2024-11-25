// Componnets
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
// Libary
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { getGenersThunk } from './store/slices/genersSlice';
// Css
import './App.css';
import { getFilmsByPageThunk } from './store/slices/filmsSlice';




function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGenersThunk());
  }, [])

  useEffect(() => {
    dispatch(getFilmsByPageThunk());
  }, [])
  return (
    <>
    <Header />
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> }/>
      </Routes>
    </div>
    </>
  );
}

export default App;
