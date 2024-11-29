import logo from '../../assets/logo.png'

import { useState, ChangeEvent, useEffect } from 'react'
import { GenersBtn } from '../GenersBtn/GenersBtn'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { GenerType } from '../../types/types'

import './Header.css'
import { changeSearchText, getSearchFilmsThunk } from '../../store/slices/filmsSlice'
import SearchResult from '../SearchResult/SearchResult'


const Header = () => {
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    const { geners } = useAppSelector(state => state.genersPage)
    const { searchText, searchFilms } = useAppSelector((state) => state.filmsPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (searchText.length > 2) {
            dispatch(getSearchFilmsThunk(searchText))
            setOpenSearch(true)
        } else {
            setOpenSearch(false)
        }
    }, [searchText])

    const searchInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchText(e.target.value))
    }

    const goToFilmPageAndClose = () => {
        setOpenSearch(false)
        dispatch(changeSearchText(''))
    }
    return (
        <header>
            <div className='logo-block'>
                <img src={logo} alt='logo' />
            </div>
            <div className='btns-wrapper'>
                {
                    geners.map((gener: GenerType) => {
                        return <GenersBtn key={gener.id} gener={gener} />
                    })
                }
            </div>
            <div className='search'>
                <input placeholder='search...' value={searchText} onChange={searchInput} />
                {
                    openSearch && <div className='serach-block'>
                        {
                            searchFilms.map((searchFilm) => {
                                return <SearchResult key={searchFilm.id} searchFilm={searchFilm} goToFilmPageAndClose={goToFilmPageAndClose}/>
                            })
                        }
                    </div>
                }

            </div>
        </header>
    )
}

export default Header