import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from './MoviesTemp';

function MoviesCardList() {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__cards'>
        {
          movies.map((movie) => {
            return (
              <li>
                <MoviesCard duration={movie.duration} name={movie.name} url={movie.url} />
              </li>
            )
          })
        }
      </ul>
      <button className='movies-card-list__button'>Ещё</button>
    </section>
  )
}

export default MoviesCardList;
