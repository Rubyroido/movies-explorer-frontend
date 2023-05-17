import './Profile.css';
import React, { useContext,useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

function Profile({ onSignOut, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, resetForm, errors, isValid } = useForm();

  const [buttonEditState, setButtonEditState] = useState('');
  const [buttonSaveState, setButtonSaveState] = useState('profile__button_disabled');
  const [buttonExitState, setButtonExitState] = useState('');
  const [inputState, setInputState] = useState('disabled')

  function handleEditButton(evt) {
    evt.preventDefault()
    setButtonEditState('profile__button_disabled');
    setButtonSaveState('');
    setButtonExitState('profile__button_disabled');
    setInputState('');
  }

  function handleSumbit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
    setButtonEditState('');
    setButtonSaveState('profile__button_disabled');
    setButtonExitState('');
    setInputState('disabled');
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  return (
    <section className='profile'>
      <h3 className='profile__greeting'>Привет, {currentUser.name}!</h3>
      <form className='profile__form' onSubmit={handleSumbit} noValidate>
        <div className='profile__container'>
          <label className='profile__input-name'>
            Имя
            <input id='profile-name' type='text' name='name' className={`profile__input ${errors.name && 'profile__input_invalid'}`} required
              disabled={inputState}
              value={values.name || ''}
              onChange={handleChange}
              minLength='2'
              maxLength='30'
            />
          </label>
          <span className='profile__input-error'>{errors.name}</span>
          <label className='profile__input-name'>
            E-mail
            <input id='profile-email' type='email' name='email' className={`profile__input ${errors.email && 'profile__input_invalid'}`} required
              disabled={inputState}
              value={values.email || ''}
              onChange={handleChange}
            />
          </label>
          <span className='profile__input-error'>{errors.email}</span>
        </div>
        <button onClick={handleEditButton} className={`profile__button-edit ${buttonEditState}`}>Редактировать</button>
        <button type='submit'  className={`profile__button-save ${buttonSaveState} ${!isValid && 'profile__button-save_inactive'}`} disabled={!isValid}>Сохранить</button>
      </form>
      <button className={`profile__button-logout ${buttonExitState}`} onClick={onSignOut}>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;
