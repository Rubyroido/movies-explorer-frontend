import './Register.css';
import EntryForm from '../EntryForm/EntryForm';
import { Link } from 'react-router-dom';

function Register() {
  const title = 'Добро пожаловать!';
  const inputs = [
    {
      id: 'register-name',
      type: 'text',
      name: 'user-name',
      label: 'Имя'
    },
    {
      id: 'register-email',
      type: 'email',
      name: 'user-email',
      label: 'E-mail'
    },
    {
      id: 'register-password',
      type: 'password',
      name: 'user-password',
      label: 'Пароль'
    }
  ];
  const buttonText = 'Зарегистрироваться';

  return (
    <section className="register">
      <EntryForm title={title} inputs={inputs} buttonText={buttonText} />
      <p className='register__text'>Уже зарегистрированы?
        <Link to='/signin' className='register__link'> Войти</Link>
      </p>
    </section>
  )
}

export default Register;
