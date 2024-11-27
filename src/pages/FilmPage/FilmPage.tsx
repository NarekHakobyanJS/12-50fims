import { useParams } from 'react-router-dom'
import './FilmPage.css'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getFilmByIdThunk } from '../../store/slices/filmsSlice';

const FilmPage = () => {
    const { id }= useParams();
    const dispatch = useAppDispatch()
    const {film} = useAppSelector((state) => state.filmsPage);

    useEffect(()=> {
        dispatch(getFilmByIdThunk(id))
    }, [id])

  return (
    <div>
        <h2 className='film-title'>{film?.title}</h2>
        <div className='film-poster'>
            <img className='film-img' src={`${process.env.REACT_APP_POSTER_URL}${film?.poster_path}`} />

            <img className='background-img' src={`${process.env.REACT_APP_POSTER_URL}${film?.backdrop_path}`} />
            <div className='overlay'></div>
            <div className='film-info'>
                <p> <b>Release Date: </b>{film?.release_date}</p>
                <p> <b>Rating: </b>10/{film?.vote_average.toFixed(2)}</p>
                <p> <b>Description:</b> {film?.overview}</p>
            </div>
        </div>
        
    </div>
  )
}

export default FilmPage