import './Login.css';
import EntryForm from '../EntryForm/EntryForm';
import { Link } from 'react-router-dom';

function Login() {
  const title = 'Рады видеть!';
  const inputs = [
    {
      id: 'login-email',
      type: 'email',
      name: 'user-email',
      label: 'E-mail'
    },
    {
      id: 'login-password',
      type: 'password',
      name: 'user-password',
      label: 'Пароль'
    }
  ];
  const buttonText = 'Войти';

  return (
    <section className="login">
      <EntryForm title={title} inputs={inputs} buttonText={buttonText} />
      <p className='login__text'>Ещё не зарегистрированы?
        <Link to='/signup' className='login__link'> Регистрация</Link>
      </p>
    </section>
  )
}

export default Login;
