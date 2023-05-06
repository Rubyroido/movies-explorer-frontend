import './EntryForm.css';
import { Link } from 'react-router-dom';

function EntryForm(props) {
  return (
    <div className='entry'>
      <Link to='/' className='entry__logo' />
      <h2 className='entry__title'>{props.title}</h2>
      <form className='entry__form'>
        <div className='entry__container'>
          {
            props.inputs.map((input) => {
              return (
                <label className='entry__label'>
                  {input.label}
                  <input id={input.id} type={input.type} name={input.name} className={'entry__input'} required/>
                  <span className='entry__input-error'></span>
                </label>
              )
            })
          }
        </div>
        <button type='submit' className='entry__submit-button'>{props.buttonText}</button>
      </form>
    </div>
  )
}

export default EntryForm;
