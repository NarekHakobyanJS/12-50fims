import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changePage, getGenreFilmsThunk } from '../../store/slices/genersSlice';
import Film from '../../components/Film/Film';
import "./GenresPage.css"

const GenresPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { genreFilms, total_pages, page } = useAppSelector((state) => state.genersPage);

// pagination functionality
  let arr = []
  for (let i = 1; i <= total_pages; i++) {
    arr.push(i)
  }
  let portionSize = 10
  let [portionNumber, setPortionNumber] = useState<number>(1);

  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  // verjanalu diapazone
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(() => {
    dispatch(getGenreFilmsThunk({ id, page }))
  }, [id, page])

  return (
    <>
      <div className='pagination'>
        {portionNumber > 1 &&
          <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
        }
        <div>
          {
            arr
              .filter(p => p >= leftPortionNumber && p <= rightPortionPageNumber)
              .map((p) => {
                return <button key={p}
                  className={p === page ? 'a' : ''} onClick={() => dispatch(changePage(p))}>{p}</button>
              })
          }
        </div>
        {
          // true
          total_pages > portionNumber &&
          <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
        }
      </div>
      <div className='films-wrapper'>
        {
          genreFilms.map((film) => {
            return <Film key={film.id} film={film} />
          })
        }
      </div>
    </>

  )
}

export default GenresPage