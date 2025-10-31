import { IconClearButton } from '../IconClearButton/IconClearButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { dropdownSlice } from '../../store/reducers/DropdownSlice';

export const Input = () => {
  const { query } = useAppSelector(state => state.dropdownReducer)
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(dropdownSlice.actions.setQueryValue(event.target.value));
    dispatch(dropdownSlice.actions.openDropdown(true));
  }

  return (
    <div className='input-container'>
      <input
        type='text'
        name='input'
        placeholder='Введіть місто'
        className='input'
        value={query}
        onChange={handleChange}
      />
      {query && <IconClearButton />}
    </div>
  )
}
