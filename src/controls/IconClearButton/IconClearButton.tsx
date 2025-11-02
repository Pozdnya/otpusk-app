import { useAppDispatch } from '../../hooks/redux';
import { searchAPI } from '../../services/SearchService';
import { dropdownSlice } from '../../store/reducers/DropdownSlice';

export const IconClearButton = () => {
  const dispatch = useAppDispatch();
  const [fetchCountries] = searchAPI.useLazyFetchCountriesQuery();
  
  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(dropdownSlice.actions.setQueryValue(''));
    dispatch(searchAPI.util.resetApiState());
    fetchCountries();
  }

  return (
    <button className='clear-button' onClick={handleClear}>X</button>
  )
}
