import { useSearchParams } from 'react-router'
import { searchAPI } from '../../services/SearchService';
import { TourCard } from '../../components/TourCard/TourCard';
import { CardModeEnum, type FullHotel, type FullHotelWithPrice, type PriceOffer } from '../../types';
import { useEffect, useState } from 'react';

export const TourPage = () => {
  const [searchParams] = useSearchParams();
  const priceId = searchParams.get('priceId');
  const hotelId = searchParams.get('hotelId');

  const [fetchHotelById] = searchAPI.useLazyFetchHotelQuery();
  const [fetchPriceById] = searchAPI.useLazyFetchPriceQuery();
  const [tour, setTour] = useState<FullHotelWithPrice | null>(null);

  const loadData = async () => {
    if (!hotelId || !priceId) return;

    const hotel = (await fetchHotelById(Number(hotelId)).unwrap()) as FullHotel;
    const price = (await fetchPriceById(priceId).unwrap()) as PriceOffer;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _, ...priceData } = price;
    const fullTour: FullHotelWithPrice = { ...hotel, ...priceData };

    setTour(fullTour);
  };

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchHotelById, fetchPriceById, hotelId, priceId]);

  return (
    <div className='tour-page-container'>
      {tour && <TourCard tour={tour} mode={CardModeEnum.FUll}/>}
    </div>
  )
}
