import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

function SavedMovies({ savedMovies, onDeleteMovie, setInfoToolTipOpened, setInfoToolTipMessage }) {
  const [isShortChecked, setIsShortChecked] = useState(false);
  const [initialMovies, setInitialMovies] = useState(savedMovies);
  const [searchResult, setSearchResult] = useState(initialMovies);

  function filterShortMovies(movies) {
    return movies.filter((movie) =>
      movie.duration <= 40
    )
  }

  function handleFilter(query) {
    const result = savedMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      )
    })
    if(result.length === 0) {
      setInfoToolTipOpened(true);
      setInfoToolTipMessage('По вашему запросу ничего не найдено')
    }
    setInitialMovies(result);
    setSearchResult(isShortChecked ? filterShortMovies(result) : result);
  }

  function handleShort() {
    setIsShortChecked(!isShortChecked);
    if (!isShortChecked) {
      setSearchResult(filterShortMovies(initialMovies))
    } else {
      setSearchResult(initialMovies)
    }
  }

  function onSearchSubmit(inputData) {
    localStorage.setItem('saved-query', inputData);
    handleFilter(inputData);
  }

  useEffect(() => {
    const savedQuery = localStorage.getItem('saved-query');
    console.log(savedQuery);
    if(savedQuery !== null) {
      const result = savedMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(savedQuery.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(savedQuery.toLowerCase())
        )
      })
      setInitialMovies(result);
      setSearchResult(isShortChecked ? filterShortMovies(result) : result);
    }
  }, [savedMovies, isShortChecked])

  return (
    <div className='saved-movies'>
      <SearchForm
        onSearch={onSearchSubmit}
        isShort={isShortChecked}
        handleShort={handleShort} />
      <MoviesCardList
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
        movies={searchResult}
      />
    </div>
  )
}

export default SavedMovies;
