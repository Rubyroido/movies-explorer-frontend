import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import * as mainApi from '../../utils/MainApi';
import getMovies from '../../utils/MovieApi';

function Movies({ savedMovies, onSaveMovie, onDeleteMovie }) {
  const [allMovies, setAllMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [isShortChecked, setIsShortChecked] = useState(false);

  function filterShortMovies(movies) {
    return movies.filter((movie) =>
      movie.duration <= 40
    )
  }

  function handleFilter(query) {
    const result = allMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      )
    })
    setInitialMovies(result);
    setSearchResult(isShortChecked ? filterShortMovies(result) : result);
    localStorage.setItem('foundMovies', JSON.stringify(result))
  }

  function handleShort() {
    setIsShortChecked(!isShortChecked);
    if (!isShortChecked) {
      setSearchResult(filterShortMovies(initialMovies))
    } else {
      setSearchResult(initialMovies)
    }
    localStorage.setItem('shortMovies', !isShortChecked)
  }

  function onSearchSubmit(inputData) {
    localStorage.setItem('userQuery', inputData);
    localStorage.setItem('shortMovies', isShortChecked);
    if (allMovies.length === 0) {
      getMovies()
        .then((movies) => {
          setAllMovies(movies);
          handleFilter(inputData);
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      handleFilter(inputData)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('foundMovies')) {
      const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
      setInitialMovies(foundMovies);

      if (localStorage.getItem('shortMovies') === 'true') {
        setSearchResult(filterShortMovies(foundMovies));
      } else {
        setSearchResult(foundMovies);
      }
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setIsShortChecked(true)
    } else {
      setIsShortChecked(false)
    }
  }, [])

  return (
    <div className='movies'>
      <SearchForm
        onSearch={onSearchSubmit}
        isShort={isShortChecked}
        handleShort={handleShort}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        movies={searchResult}
      />
    </div>
  )
}

export default Movies;
