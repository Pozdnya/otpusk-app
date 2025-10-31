import { useAppDispatch } from '../../hooks/redux';
import { dropdownSlice } from '../../store/reducers/DropdownSlice';

export const IconClearButton = () => {
  const dispatch = useAppDispatch();

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(dropdownSlice.actions.setQueryValue(''));
    dispatch(dropdownSlice.actions.openDropdown(false));
  }
  return (
    <button className='clear-button' onClick={handleClear}>X</button>
  )
}
