import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__text-container">
          <h3 className="techs__subtitle">7 технологий</h3>
          <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className="techs__list">
          <li>
            <span className="techs__list-item">HTML</span>
          </li>
          <li>
            <span className="techs__list-item">CSS</span>
          </li>
          <li>
            <span className="techs__list-item">JS</span>
          </li>
          <li>
            <span className="techs__list-item">React</span>
          </li>
          <li>
            <span className="techs__list-item">Git</span>
          </li>
          <li>
            <span className="techs__list-item">Express.js</span>
          </li>
          <li>
            <span className="techs__list-item">mongoDB</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;
