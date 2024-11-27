import React from 'react'
import './Film.css'
import { FilmType } from '../../types/types'
import { NavLink } from 'react-router-dom'

type FilmPropsType = {
    film: FilmType
}

const Film = ({ film }: FilmPropsType) => {
    return (
        <div className='film-block'>
            <NavLink to={`/film/${film.id}`} >
            <img src={process.env.REACT_APP_IMG_URL + film.poster_path} />
            <h2>{film.title.length >= 22 ? `${film.title.slice(22)} ...` : film.title}</h2>
            <b>{film.vote_average}</b>
            </NavLink>
        </div>
    )
}

export default Film