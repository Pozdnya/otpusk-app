import { IconClearButton } from '../IconClearButton/IconClearButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { dropdownSlice } from '../../store/reducers/DropdownSlice';
import type { FC } from 'react';
interface Props {
  onClick: () => void
}
export const Input: FC<Props> = ({onClick}) => {
  const { query } = useAppSelector(state => state.dropdownReducer)
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(dropdownSlice.actions.setQueryValue(event.target.value));

    if (!event.target.value) {
      dispatch(dropdownSlice.actions.openDropdown(false));
    }
  }

  return (
    <div className='input-container'>
      <input
        autoComplete="off"
        type='text'
        name='input'
        placeholder='Введіть місто'
        className='input'
        value={query}
        onChange={handleChange}
        onClick={onClick}
      />
      {query && <IconClearButton />}
    </div>
  )
}
