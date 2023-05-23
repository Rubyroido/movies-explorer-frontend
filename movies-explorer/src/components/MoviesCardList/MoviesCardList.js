import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MoviesCardList({ savedMovies, onSaveMovie, onDeleteMovie, movies }) {
  const location = useLocation();
  const [shownResult, setShownResult] = useState(0);

  function setShownNumber() {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth > 1230) {
      setShownResult(12)
    } else if (windowInnerWidth > 550 && windowInnerWidth < 1230) {
      setShownResult(8)
    } else if (windowInnerWidth < 550) {
      setShownResult(5)
    }
  }

  useEffect(() => {
    setShownNumber()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', setShownNumber)
    }, 100)
  })

  function onShowMore() {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth > 1230) {
      setShownResult(shownResult + 3)
    } else if (windowInnerWidth > 550 && windowInnerWidth < 1230) {
      setShownResult(shownResult + 2)
    } else if (windowInnerWidth < 550) {
      setShownResult(shownResult + 1)
    }
  }

  function getIsMovieSaved(movie) {
    return savedMovies.some((m) => {
      return m.movieId === movie.id;
    })
  }

  return (
    <div className='movies-card-list'>
      <ul className='movies-card-list__cards'>
        {
          location.pathname === '/movies' && (
            movies.slice(0, shownResult).map((movie) => {
              return (
                <li>
                  <MoviesCard movie={movie} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} isSaved={getIsMovieSaved(movie)} />
                </li>
              )
            })
          )
        }
        {
          location.pathname === '/saved-movies' && (
            movies.map((movie) => {
              return (
                <li>
                  <MoviesCard movie={movie} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} isSaved={getIsMovieSaved(movie)} />
                </li>
              )
            })
          )
        }
      </ul>
      {
        location.pathname === '/movies' && shownResult < movies.length && shownResult > 5 && (
          <button className='movies-card-list__button' onClick={onShowMore}>Ещё</button>
        )
      }
    </div>
  )
}

export default MoviesCardList;
