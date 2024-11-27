import React from 'react'
import './Films.css'
import { useAppSelector } from '../../store/hooks'
import { FilmType } from '../../types/types'
import Film from '../Film/Film'


export const imgUrl = "https://image.tmdb.org/t/p/w500/"

const Films = () => {

  const {films} = useAppSelector(state => state.filmsPage)

  return (
    <div className='films'>{
      films.map((film: FilmType) => {
        return <Film key={film.id} film={film}/>
      })
      }</div>
  )
}

export default Films