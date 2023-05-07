import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <input type='checkbox' id='toggle' className='filter-checkbox__button'/>
      <label for='toggle' className='filter-checkbox__label'/>
      <span className='filter-checkbox__text'>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
