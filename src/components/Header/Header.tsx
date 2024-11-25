import logo from '../../assets/logo.png'

import { GenersBtn } from '../GenersBtn/GenersBtn'
import { useAppSelector } from '../../store/hooks'

import './Header.css'
const Header = () => {
    const {geners} = useAppSelector(state => state.genersPage)
  return (
    <header>
        <div className='logo-block'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='btns-wrapper'> 
            {
                geners.map((gener:any)=>{
                    return <GenersBtn  key={gener.id} gener={gener} />
                })
            }
            
        </div>
        <div>
            <input />
            <select>
                <option>ru</option>
            </select>
        </div>
    </header>
  )
}

export default Header