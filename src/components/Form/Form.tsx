import { Button } from '../../controls/Button/Button'

export const Form = () => {
  return (
    <div className='form-container'>
      <form className="form">
        <h2 className='form__title'>Форма пошуку турів</h2>
        <input type='text' placeholder='Введіть місто'className='form__input'/>
        <div className='form__dropdown'>
          dropdown
        </div>
        <Button text='Знайти' />
      </form>
    </div>
  )
}
