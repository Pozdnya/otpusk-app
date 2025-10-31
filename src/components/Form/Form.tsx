import { Button } from '../../controls/Button/Button'
import { Dropdown } from '../../controls/Dropdown/Dropdown'
import { Input } from '../../controls/Input/Input'
import { useAppDispatch } from '../../hooks/redux'
import { countriesAPI } from '../../services/CountiesService'
import { dropdownSlice } from '../../store/reducers/DropdownSlice'

export const Form = () => {
  const dispatch = useAppDispatch();
  const [getCountries, { data: countries, isLoading: isCountriesLoading, isError: isCountriesError }] = countriesAPI.useLazyGetCountriesQuery();

  const handleInputClick = () => {
    dispatch(dropdownSlice.actions.openDropdown(true));
    getCountries();
    console.log('data', countries, isCountriesLoading, isCountriesError)
  }

  return (
    <div className='form-container'>
      <form className="form">
        <h2 className='form__title'>Форма пошуку турів</h2>
        <div className='form__inputs'>
          <Input onClick={handleInputClick} />
          {countries && <Dropdown countries={countries} />}
        </div>
        <Button text='Знайти' />
      </form>
    </div>
  )
}
