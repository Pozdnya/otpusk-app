import { Button } from '../../controls/Button/Button'
import { Dropdown } from '../../controls/Dropdown/Dropdown'
import { Input } from '../../controls/Input/Input'
import { useAppDispatch } from '../../hooks/redux'
import { searchAPI } from '../../services/SearchService'
import { dropdownSlice } from '../../store/reducers/DropdownSlice'

export const Form = () => {
  const dispatch = useAppDispatch();
  const [fetchCountries, { data: countries }] = searchAPI.useLazyFetchCountriesQuery();

  const [fetchGeo, { data: geo }] = searchAPI.useLazyFetchGeoQuery();
  const handleInputClick = () => {
    dispatch(dropdownSlice.actions.openDropdown(true));
    fetchCountries();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(dropdownSlice.actions.setQueryValue(event.target.value));
    if (!event.target.value) {
      dispatch(dropdownSlice.actions.openDropdown(false));
    }

    fetchGeo(event.target.value);
  }

  return (
    <div className='form-container'>
      <form className="form">
        <h2 className='form__title'>Форма пошуку турів</h2>
        <div className='form__inputs'>
          <Input handleClick={handleInputClick} handleChange={handleInputChange} />
          {countries && (
            <Dropdown
              searchResults={
                geo
                  ? geo
                  : countries
              }
            />
          )}
        </div>
        <Button text='Знайти' />
      </form>
    </div>
  )
}
