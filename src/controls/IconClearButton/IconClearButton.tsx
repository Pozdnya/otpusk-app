import { useAppDispatch } from '../../hooks/redux';
import { searchAPI } from '../../services/SearchService';
import { searchSlice } from '../../store/reducers/SearchSlice';

export const IconClearButton = () => {
  const dispatch = useAppDispatch();
  const [fetchCountries] = searchAPI.useLazyFetchCountriesQuery();
  
  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(searchSlice.actions.setQueryValue(''));
    dispatch(searchAPI.util.resetApiState());
    dispatch(searchSlice.actions.setHasSearched(false));
    fetchCountries();
  }

  return (
    <button className='clear-button' onClick={handleClear}>X</button>
  )
}
