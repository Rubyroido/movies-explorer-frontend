import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, isSaved }) {
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  const location = useLocation();

  const [buttonText, setButtonText] = React.useState('');
  const [buttonClassName, setButtonClassName] = React.useState('');
  const [buttonVisibility, setButtonVisibility] = React.useState('movie-card__button_invisible');

  React.useEffect(() => {
    if (isSaved) {
      setButtonText('');
      setButtonClassName('movie-card__button-delete');
      setButtonVisibility('');
      if (location.pathname === '/saved-movies') {
        setButtonVisibility('movie-card__button_invisible');
      }
    } else {
      setButtonText('Сохранить');
      setButtonClassName('movie-card__button-save');
      setButtonVisibility('movie-card__button_invisible');
    }
  }, [isSaved]
  )

  function handleButtonChange(evt) {
    evt.preventDefault();
    if (isSaved) {
      onDeleteMovie(movie);
      setButtonClassName('movie-card__button-save');
      setButtonText('Сохранить');
    } else {
      onSaveMovie(movie);
      setButtonText('');
      setButtonClassName('movie-card__button-delete');
    }
  }

  function handleDelete(evt) {
    evt.preventDefault();
    onDeleteMovie(movie);
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
      <a href={movie.trailerLink} className='movie-card__container' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} target="_blank" rel="noreferrer">
        <img src={location.pathname === '/movies'?`https://api.nomoreparties.co/${movie.image.url}`:`${movie.image}`} alt='Постер' className='movie-card__image' />
        {
          location.pathname === '/movies' && (
            <button className={`movie-card__button ${buttonClassName} ${buttonVisibility}`} onClick={handleButtonChange}>{buttonText}</button>
          )
        }
        {
          location.pathname === '/saved-movies' && (
            <button className={`movie-card__button movie-card__button-remove ${buttonVisibility}`} onClick={handleDelete}></button>
          )
        }
      </a>
      <div className='movie-card__description'>
        <p className='movie-card__name'>{movie.nameRU}</p>
        <span className='movie-card__duration'>{`${hours}ч ${minutes}м`}</span>
      </div>
    </div>
  )
}

export default MoviesCard;
