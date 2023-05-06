import './Burger.css';
import { Link } from 'react-router-dom';

function Burger() {
  return (
    <nav className='burger'>
      <div className='burger__container'>
        <Link to='/' className='burger__item burger__item-main'>Главная</Link>
        <Link to='/movies' className='burger__item'>Фильмы</Link>
        <Link to='/saved-movies' className='burger__item burger__item_thin'>Сохраненные фильмы</Link>
      </div>
      <Link to='/profile' className='burger__item burger__item-profile'>Аккаунт<div className='burger__profile-button' />
      </Link>
    </nav>
  )
}

export default Burger;
