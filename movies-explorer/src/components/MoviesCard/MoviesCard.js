import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  const hours = Math.floor(props.duration / 60);
  const minutes = props.duration % 60;

  const [buttonText, setButtonText] = React.useState('');
  const [buttonClassName, setButtonClassName] = React.useState('');
  const [buttonVisibility, setButtonVisibility] = React.useState('');

  React.useEffect(() => {
    if (props.saved === true) {
      setButtonText('');
      setButtonClassName('movie-card__button-delete')
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
    if (buttonClassName === 'movie-card__button-save') {
      setButtonVisibility('')
    }
  }

  function handleMouseLeave() {
    if (buttonClassName === 'movie-card__button-save') {
      setButtonVisibility('movie-card__button_invisible')
    }
  }

  return (
    <div className='movie-card'>
      <div className='movie-card__container' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <img src={props.url} alt='Постер' className='movie-card__image' />
        <button className={`${buttonClassName} ${buttonVisibility}`} onClick={handleButtonChange}>{buttonText}</button>
      </div>
      <div className='movie-card__description'>
        <p className='movie-card__name'>{props.name}</p>
        <span className='movie-card__duration'>{`${hours}ч ${minutes}м`}</span>
      </div>
    </div>
  )
}

export default MoviesCard;
