import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <input className='search-form__input' placeholder='Фильм'/>
        <button className='search-form__button' type='submit'/>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;
