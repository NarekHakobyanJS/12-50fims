import { useSelector } from 'react-redux'
import logo from '../../assets/logo.png'
import './Header.css'
import { GenersBtn } from '../GenersBtn/GenersBtn'

const Header = () => {
    const {geners} = useSelector((state:any) => state.genersPage)
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