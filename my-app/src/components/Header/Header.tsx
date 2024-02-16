import { Link } from 'react-router-dom'
import './header.css'
import Logout from '../Logout/Logout'

const Header = () => {
  return (
    <header className='header'>
        <h3>INCORA NEWS</h3>
        <Link to = '/'>
            <Logout />
        </Link>
    </header>
  )
}

export default Header