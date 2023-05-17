import './Register.css';
import '../EntryForm/EntryForm.css';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  return (
    <section className="register">
      <div className='entry'>
        <Link to='/' className='entry__logo' />
        <h2 className='entry__title'>Добро пожаловать!</h2>
        <form className='entry__form' onSubmit={handleSubmit} noValidate>
          <div className='entry__container'>
            <label className='entry__label'>
              Имя
              <input id='register-name' type='text' name='name' className={`entry__input  ${errors.name && 'entry__input_invalid'}`} required
                value={values.name || ''}
                onChange={handleChange}
                minLength='2'
                maxLength='30'
              />
              <span className='entry__input-error'>{errors.name}</span>
            </label>
            <label className='entry__label'>
              E-mail
              <input id='register-email' type='email' name='email' className={`entry__input  ${errors.email && 'entry__input_invalid'}`} required
                value={values.email || ''}
                onChange={handleChange}
              />
              <span className='entry__input-error'>{errors.email}</span>
            </label>
            <label className='entry__label'>
              Пароль
              <input id='register-password' type='password' name='password' className={`entry__input  ${errors.password && 'entry__input_invalid'}`} required
                value={values.password || ''}
                onChange={handleChange}
              />
              <span className='entry__input-error'>{errors.password}</span>
            </label>
          </div>
          <button type='submit' className={`entry__submit-button ${!isValid && 'entry__submit-button_disabled'}`} disabled={!isValid}>Зарегистрироваться</button>
        </form>
      </div>
      <p className='register__text'>Уже зарегистрированы?
        <Link to='/signin' className='register__link'> Войти</Link>
      </p>
    </section>
  )
}

export default Register;
