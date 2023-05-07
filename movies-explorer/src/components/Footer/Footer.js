import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__content">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links">
          <li>
            <a href="https://practicum.yandex.ru/"
            target="_blank" rel="noreferrer"
            className="footer__link">Яндекс.Практикум</a>
          </li>
          <li>
            <a href="https://github.com/Rubyroido"
            target="_blank" rel="noreferrer"
            className="footer__link">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
