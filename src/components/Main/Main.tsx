import { useAppSelector } from '../../hooks/redux';
import { ResultStatus } from '../ResultStatus/ResultStatus';
import { Spinner } from '../Spinner/Spinner';
import { ToursList } from '../ToursList/ToursList';

export const Main = () => {
  const { hotelsWithPrice } = useAppSelector(state => state.toursReducer)
  const { loading, hasSearched, error } = useAppSelector(state => state.searchReducer)
  return (
    <div className='main'>
      {loading && <div className='main__spinner'><Spinner /></div>}
      {(!loading && hasSearched && hotelsWithPrice.length === 0) && <ResultStatus text={'За вашим запитом турів не знайдено'} />}
      {(!loading && hasSearched && error) && <ResultStatus text={'Помилка при завантаженні турiв'} />}
      {(!loading && hotelsWithPrice.length > 0) && <ToursList tour={hotelsWithPrice} />}
    </div>
  )
}
