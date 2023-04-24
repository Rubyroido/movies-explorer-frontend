import './AboutProject.css';

function AboutProject() {
  return (
    <section id='about-project' className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__description">
        <li>
          <h3 className="about-project__text-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <h3 className="about-project__text-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__scheme">
        <span className="about-project__scheme-backend">1 неделя</span>
        <span className="about-project__scheme-frontend">4 недели</span>
      </div>
      <div className="about-project__scheme">
        <span className="about-project__backend-title">Back-end</span>
        <span className="about-project__frontend-title">Front-end</span>
      </div>
    </section>
  )
}

export default AboutProject;
