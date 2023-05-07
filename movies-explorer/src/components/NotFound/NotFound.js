import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__description">
        <h3 className="not-found__error">404</h3>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button onClick={() => navigate(-1)} className="not-found__button">Назад</button>
    </section>
  )
}

export default NotFound;
