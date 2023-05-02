import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const hours = Math.floor(props.duration / 60);
  const minutes = props.duration % 60;

  const location = useLocation();

  const [buttonText, setButtonText] = React.useState('');
  const [buttonClassName, setButtonClassName] = React.useState('');
  const [buttonVisibility, setButtonVisibility] = React.useState('');

  React.useEffect(() => {
    if (props.saved === true) {
      setButtonText('');
      setButtonClassName('movie-card__button-delete');
      if (location.pathname === '/saved-movies') {
        setButtonVisibility('movie-card__button_invisible');
      }
    } else {
      setButtonText('Сохранить');
      setButtonClassName('movie-card__button-save');
      setButtonVisibility('movie-card__button_invisible');
    }
  }, []
  )

  function handleButtonChange() {
    if (buttonClassName === 'movie-card__button-delete') {
      setButtonClassName('movie-card__button-save');
      setButtonText('Сохранить');
    } else {
      setButtonText('');
      setButtonClassName('movie-card__button-delete');
    }
  }

  function handleMouseOver() {
    if (location.pathname === '/movies') {
      if (buttonClassName === 'movie-card__button-save') {
        setButtonVisibility('')
      }
    } else {
      setButtonVisibility('')
    }

  }

  function handleMouseLeave() {
    if (location.pathname === '/movies') {
      if (buttonClassName === 'movie-card__button-save') {
        setButtonVisibility('movie-card__button_invisible')
      }
    } else {
      setButtonVisibility('movie-card__button_invisible')
    }
  }

  return (
    <div className='movie-card'>
      <div className='movie-card__container' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <img src={props.url} alt='Постер' className='movie-card__image' />
        {
          location.pathname === '/movies' && (
            <button className={`${buttonClassName} ${buttonVisibility}`} onClick={handleButtonChange}>{buttonText}</button>
          )
        }
        {
          location.pathname === '/saved-movies' && (
            <button className={`movie-card__button-remove ${buttonVisibility}`}></button>
          )
        }
      </div>
      <div className='movie-card__description'>
        <p className='movie-card__name'>{props.name}</p>
        <span className='movie-card__duration'>{`${hours}ч ${minutes}м`}</span>
      </div>
    </div>
  )
}

export default MoviesCard;
