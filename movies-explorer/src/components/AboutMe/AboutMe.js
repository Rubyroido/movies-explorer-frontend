import './AboutMe.css';

function AboutMe() {
  return (
    <section id='about-me' className='about-me'>
      <h2 className='about-me__title'>Студент</h2>

      <div className='about-me__description'>
        <div className='about-me__text'>
          <div className='about-me__text-main'>
            <h3 className='about-me__name'>Станислав</h3>
            <p className='about-me__job'>Фронтенд-разработчик, 26 лет</p>
            <article className='about-me__article'>
              Я вырос и живу в Люберцах. Закончил бакалавриат и магистратуру в ИЭФ РУТ МИИТ.
              Несколько лет работал бухгалтером, но после пандемии задумался о смене вида деятельности.
              В 2021 начал изучать IT-индустрию - профессии, направления, и в этом же году пошел на курс по веб-разработке.
              Из увлечений - обычный гик-набор: книги, игры, фильмы и пр.
            </article>
          </div>
          <a href='https://github.com/Rubyroido' className='about-me__github' target="_blank" rel="noreferrer">Github</a>
        </div>
        <div className='about-me__photo' />
      </div>

    </section>
  )
}

export default AboutMe;
