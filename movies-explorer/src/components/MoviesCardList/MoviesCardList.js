import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from './MoviesTemp';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const location = useLocation();
  const savedFilms = movies.filter((movie) => movie.saved === true);
  console.log(savedFilms);

  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__cards'>
        {
          location.pathname === '/movies' && (
            movies.map((movie) => {
              return (
                <li>
                  <MoviesCard duration={movie.duration} name={movie.name} url={movie.url} saved={movie.saved} />
                </li>
              )
            })
          )
        }
        {
          location.pathname === '/saved-movies' && (
            savedFilms.map((movie) => {
              return (
                <li>
                  <MoviesCard duration={movie.duration} name={movie.name} url={movie.url} saved={movie.saved} />
                </li>
              )
            })
          )
        }
      </ul>
      <button className='movies-card-list__button'>Ещё</button>
    </section>
  )
}

export default MoviesCardList;
