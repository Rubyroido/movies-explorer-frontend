import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <a href="https://rubyroido.github.io/how-to-learn/"
          target="_blank" className="portfolio__project-name" rel="noreferrer">
            Статичный сайт</a>
          <div className="portfolio__project-link" />
        </li>
        <li className="portfolio__project">
          <a href="https://rubyroido.github.io/russian-travel/"
          target="_blank" className="portfolio__project-name" rel="noreferrer">
            Адаптивный сайт</a>
          <div className="portfolio__project-link" />
        </li>
        <li className="portfolio__project">
          <a href="https://rubyroido.mesto.nomoredomains.icu"
          target="_blank" className="portfolio__project-name" rel="noreferrer">
            Одностраничное приложение</a>
          <div className="portfolio__project-link" />
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
