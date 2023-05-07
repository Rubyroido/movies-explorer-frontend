import './Profile.css';
import React from 'react';

function Profile() {
  const testUser = {
    email: 'test@mail.ru',
    password: '123',
    name: 'Тест'
  };

  const [buttonEditState, setButtonEditState] = React.useState('');
  const [buttonSaveState, setButtonSaveState] = React.useState('profile__button_disabled');
  const [buttonExitState, setButtonExitState] = React.useState('');
  const [inputState, setInputState] = React.useState('disabled')

  function handleEditButton(event) {
    event.preventDefault()
    setButtonEditState('profile__button_disabled');
    setButtonSaveState('');
    setButtonExitState('profile__button_disabled');
    setInputState('');
  }

  function handleSaveButton(event) {
    event.preventDefault()
    setButtonEditState('');
    setButtonSaveState('profile__button_disabled');
    setButtonExitState('');
    setInputState('disabled');
  }

  return (
    <section className='profile'>
      <h3 className='profile__greeting'>Привет, {testUser.name}!</h3>
      <form className='profile__form'>
        <div className='profile__container'>
          <label className='profile__input-name'>
            Имя
            <input type='text' defaultValue={testUser.name} className='profile__input' disabled={inputState} />
          </label>
          <label className='profile__input-name'>
            E-mail
            <input type='text' defaultValue={testUser.email} className='profile__input' disabled={inputState} />
          </label>
        </div>
        <button onClick={handleEditButton} className={`profile__button-edit ${buttonEditState}`}>Редактировать</button>
        <button onClick={handleSaveButton} className={`profile__button-save ${buttonSaveState}`}>Сохранить</button>
      </form>
      <button className={`profile__button-logout ${buttonExitState}`}>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;
