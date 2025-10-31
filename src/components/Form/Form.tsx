import { Button } from '../../controls/Button/Button'
import { Input } from '../../controls/Input/Input'

export const Form = () => {
  return (
    <div className='form-container'>
      <form className="form">
        <h2 className='form__title'>Форма пошуку турів</h2>
        <div style={{width: '100%'}}>
          <Input />
          <div className='form__dropdown'>
            dropdown
          </div>
        </div>
        <Button text='Знайти' />
      </form>
    </div>
  )
}
