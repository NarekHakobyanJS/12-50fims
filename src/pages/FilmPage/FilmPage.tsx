import { useParams } from 'react-router-dom'
import './FilmPage.css'
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTrailer, getFilmByIdThunk } from '../../store/slices/filmsSlice';

const FilmPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const { film } = useAppSelector((state) => state.filmsPage);
    const iframe =  useRef(null)

    useEffect(() => {
        dispatch(getFilmByIdThunk(id))
    }, [id])

    useEffect(() => {
        dispatch(fetchTrailer({filmId:id, iframe}))
    }, [id])

    return (
        <div>
            <h2 className='film-title'>{film?.title}</h2>
            <div className='film-poster'>
                <img className='background-img' src={`${process.env.REACT_APP_POSTER_URL}${film?.backdrop_path}`} />
                <div className='overlay'></div>
                <div className='film-info'>
                    <img className='film-img' src={`${process.env.REACT_APP_POSTER_URL}${film?.poster_path}`} />
                    <div>
                    <p> <b>Release Date: </b>{film?.release_date}</p>
                    <p> <b>Rating: </b>10/{film?.vote_average.toFixed(2)}</p>
                    <p> <b>Description:</b> {film?.overview}</p>
                    </div>
                </div>
            </div>
            <iframe ref={iframe}></iframe>
        </div>
    )
}

export default FilmPage