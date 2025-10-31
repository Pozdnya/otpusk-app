import { Button } from '../../controls/Button/Button'
import { Dropdown } from '../../controls/Dropdown/Dropdown'
import { Input } from '../../controls/Input/Input'

export const Form = () => {
  return (
    <div className='form-container'>
      <form className="form">
        <h2 className='form__title'>Форма пошуку турів</h2>
        <div className='form__inputs'>
          <Input />
          <Dropdown />
        </div>
        <Button text='Знайти' />
      </form>
    </div>
  )
}
