import React from 'react'
import './SearchResult.css'
import { FilmType } from '../../types/types'
import { useNavigate } from 'react-router-dom'

type SearchResultPropsType = {
  searchFilm : FilmType, 
  goToFilmPageAndClose : () => void
}
const SearchResult = ({searchFilm, goToFilmPageAndClose} : SearchResultPropsType) => {
  const navigate = useNavigate()
  
  const goToFilmPage = (id : number) => {
    navigate(`/film/${id}`)
    goToFilmPageAndClose()
  }
  return (
    <div onClick={() => goToFilmPage(searchFilm.id)} className='result-block'>
      <img src={process.env.REACT_APP_IMG_URL + searchFilm.poster_path} />
      <h3>{searchFilm.title}</h3>
    </div>
  )
}

export default SearchResult