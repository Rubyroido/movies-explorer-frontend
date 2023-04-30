import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  const hours = Math.floor(props.duration / 60);
  const minutes = props.duration % 60;

  // const [buttonSaveState, setButtonSaveState] = React.useState('');
  // const [buttonDeleteState, setButtonDeleteState] = React.useState('movie-card__button_disabled');

  // function handleSaveButton() {
  //   setButtonSaveState('movie-card__button_disabled');
  //   setButtonDeleteState('');
  // }

  // function handleDeleteButton() {
  //   setButtonSaveState('');
  //   setButtonDeleteState('movie-card__button_disabled');
  // }

  return (
    <div className='movie-card'>
      <div className='movie-card__container'>
        <img src={props.url} alt='Постер' className='movie-card__image' />
        {/* <button onClick={handleSaveButton} className={`movie-card__button-save ${buttonSaveState}`}>Сохранить</button>
        <button onClick={handleDeleteButton} className={`movie-card__button-delete ${buttonDeleteState}`}/> */}
      </div>
      <div className='movie-card__description'>
        <p className='movie-card__name'>{props.name}</p>
        <span className='movie-card__duration'>{`${hours}ч ${minutes}м`}</span>
      </div>
    </div>
  )
}

export default MoviesCard;
