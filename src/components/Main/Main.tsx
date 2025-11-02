import { useAppSelector } from '../../hooks/redux';
import { EmptyTours } from '../EmptyTours/EmptyTours';
import { Spinner } from '../Spinner/Spinner';
import { ToursList } from '../ToursList/ToursList';

export const Main = () => {
  const { tours } = useAppSelector(state => state.toursReducer)
  const { loading, hasSearched } = useAppSelector(state => state.searchReducer)
  console.log('tours', tours)
  return (
    <div className='main'>
      {loading && <div className='main__spinner'><Spinner /></div>}
      {!loading && hasSearched && tours.length === 0 && <EmptyTours />}
      {!loading && tours.length > 0 && <ToursList />}
    </div>
  )
}
