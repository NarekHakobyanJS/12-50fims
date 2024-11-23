
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { getGenersThunk } from './store/slices/genersSlice';



function App() {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getGenersThunk());
  }, [])
  return (
    <>
    <Header />
    <div className="App">
      
    </div>
    </>
  );
}

export default App;
