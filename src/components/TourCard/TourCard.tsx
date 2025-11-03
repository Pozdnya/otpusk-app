import type { FC } from 'react'
import type { FullHotelWithPrice, HotelWithPrice } from '../../types';
import { NavLink } from 'react-router';
interface Props {
  tour: HotelWithPrice | FullHotelWithPrice;
}
export const TourCard: FC<Props> = ({ tour }) => {
  const startDate = new Date(tour.startDate).toLocaleDateString('uk-UA');
  const formattedPrice = new Intl.NumberFormat('uk-UA').format(tour.amount);
  
  return (
    <div className="tour">
      <img src={tour.img || '/no-image.jpg'} alt={tour.name} className="tour-image" />
      <div className="tour__info">
        <h3 className="tour__title">{tour.name}</h3>
        <p className="tour__location">
          {tour.countryName}, {tour.cityName}
        </p>
        <p className="tour__date">Початок: {startDate}</p>
        <p className="tour__price">
          {formattedPrice} {tour.currency === 'usd' ? '$' : 'грн'}
        </p>
        {'priceId'in tour && <NavLink
          to={`/tour?priceId=${tour.priceId}&hotelId=${tour.id}`}
          className="tour__link"
        >
          Відкрити ціну
        </NavLink>}
      </div>
    </div>
  )
}
