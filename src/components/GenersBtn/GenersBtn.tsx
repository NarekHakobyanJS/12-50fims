import { NavLink } from 'react-router-dom'
import { GenerType } from '../../types/types'
import './GenersBtn.css'

type GenersBtnPropsType = {
    gener: GenerType, 
}

export const GenersBtn = ({gener}: GenersBtnPropsType) => {
    return (
        <NavLink to={`/genre/${gener.id}`} className='gener-btn'>{gener.name}</NavLink>
    )
}
