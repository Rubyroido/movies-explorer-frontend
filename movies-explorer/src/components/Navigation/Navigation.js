import './Navigation.css';
import Burger from '../Burger/Burger';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const location = useLocation();

  const [buttonState, setButtonState] = useState('navigation__popup-button_open');
  const [overlayState, setOverlayState] = useState('');
  const [popupState, setPopupState] = useState('');

  function handlePopup() {
    if (buttonState === 'navigation__popup-button_open') {
      setButtonState('navigation__popup-button_close');
      setOverlayState('navigation__popup-overlay_close')
      setPopupState('navigation__popup_active');

    } else {
      setButtonState('navigation__popup-button_open');
      setOverlayState('');
      setPopupState('');
    }
  }

  return (
    <div className='navigation'>
      {
        location.pathname === '/' ?
          <nav className='navigation__authorization-container'>
            <Link to={'/signup'} className='navigation__signup'>Регистрация</Link>
            <Link to={'/signin'} className='navigation__signin'>Войти</Link>
          </nav> :
          <div className='navigation__menu-container'>
            <Burger />
            <div className={`navigation__popup-overlay ${overlayState}`}>
              <div className={`navigation__popup ${popupState}`}>
                <Burger />
              </div>
            </div>
            <button onClick={handlePopup} className={`navigation__popup-button ${buttonState}`} />
          </div>
      }
    </div>
  )
}

export default Navigation;
