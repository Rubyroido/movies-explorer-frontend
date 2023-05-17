import './Login.css';
import '../EntryForm/EntryForm.css';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function Login({onLogin}) {
  const { values, handleChange, errors, isValid } = useForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <section className="login">
      <div className='entry'>
        <Link to='/' className='entry__logo' />
        <h2 className='entry__title'>Рады видеть!</h2>
        <form className='entry__form' onSubmit={handleSubmit} noValidate>
          <div className='entry__container'>
            <label className='entry__label'>
              E-mail
              <input id='login-email' type='email' name='email' className={`entry__input  ${errors.email && 'entry__input_invalid'}`} required
                value={values.email || ''}
                onChange={handleChange}
              />
              <span className='entry__input-error'>{errors.email}</span>
            </label>
            <label className='entry__label'>
              Пароль
              <input id='login-password' type='password' name='password' className={`entry__input ${errors.password && 'entry__input_invalid'}`} required
                value={values.password || ''}
                onChange={handleChange}
              />
              <span className='entry__input-error'>{errors.password}</span>
            </label>
          </div>
          <button type='submit' className={`entry__submit-button ${!isValid && 'entry__submit-button_disabled'}`} disabled={!isValid}>Войти</button>
        </form>
      </div>
      <p className='login__text'>Ещё не зарегистрированы?
        <Link to='/signup' className='login__link'> Регистрация</Link>
      </p>
    </section>
  )
}

export default Login;
