import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch, isShort, handleShort }) {
  const location = useLocation();
  const [userQuery, setUserQuery] = useState('');

  function onInput(evt) {
    setUserQuery(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(userQuery)
  }

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('userQuery')) {
      const savedUserQuery = localStorage.getItem('userQuery');
      setUserQuery(savedUserQuery);
    }
  }, [])

  return (
    <div className='search-form'>
      <form className='search-form__container' onSubmit={handleSubmit}>
        <input className='search-form__input' placeholder='Фильм' id='search-form__input'
          onChange={onInput}
          value={userQuery}
        />
        <button className='search-form__button' type='submit' />
      </form>
      <FilterCheckbox isShort={isShort} handleShort={handleShort} />
    </div>
  )
}

export default SearchForm;
