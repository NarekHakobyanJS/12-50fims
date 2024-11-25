import React from 'react'
import './Films.css'
import { useAppSelector } from '../../store/hooks'
import { FilmType } from '../../types/types'


export const imgUrl = "https://image.tmdb.org/t/p/w500/"

const Films = () => {

  const {films} = useAppSelector(state => state.filmsPage)
  console.log(films);
  return (
    <div>{
      films.map((film: FilmType) => {
        return <div>
          <img src={imgUrl + film.poster_path} />
        </div>
      })
      }</div>
  )
}

export default Films