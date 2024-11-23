import { GenerType } from '../../types/types'
import './GenersBtn.css'

type GenersBtnPropsType = {
    gener: GenerType
}

export const GenersBtn = ({gener}: GenersBtnPropsType) => {
    return (
        <button className='gener-btn'>{gener.name}</button>
    )
}
