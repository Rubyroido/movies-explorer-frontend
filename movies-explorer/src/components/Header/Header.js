import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({isLoggedIn}) {
  return (
    <header className="header">
      <Link to={'/'} className="header__logo"/>
      <Navigation isLoggedIn={isLoggedIn}/>
    </header>
  )
}

export default Header;
