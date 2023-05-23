import './InfoToolTip.css';
import React from 'react';

function InfoToolTip({ isOpen, message, onClose }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <p className='popup__message'>
          {message}
        </p>
        <button type='button' className='popup__button-close' onClick={onClose} />
      </div>
    </div>
  )
}

export default InfoToolTip;
