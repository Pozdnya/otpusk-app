import { useSearchParams } from 'react-router'
import { searchAPI } from '../../services/SearchService';
import { TourCard } from '../../components/TourCard/TourCard';
import type { FullHotelWithPrice } from '../../types';

export const TourPage = () => {
  const [searchParams] = useSearchParams();
  const priceId = searchParams.get('priceId');
  const hotelId = Number(searchParams.get('hotelId'));
  if (!priceId) {
    return (
      <div>Price not found</div>
    )
  }
  if (!hotelId) {
    return (
      <div>Hotel not found</div>
    )
  }
  const { data: price } = searchAPI.useFetchPriceQuery(priceId);
  const { data: hotel } = searchAPI.useFetchHotelQuery(hotelId);

  if (!price || !hotel) return;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _, ...priceData } = price;
  const compareFullTour: FullHotelWithPrice = {
    ...hotel,
    ...priceData,
  };
  return (
    <div>
      <TourCard tour={compareFullTour} />
    </div>
  )
}
