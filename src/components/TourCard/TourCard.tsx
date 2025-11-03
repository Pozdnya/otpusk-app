import type { FC } from 'react'
import { CardModeEnum, type FullHotelWithPrice, type HotelWithPrice } from '../../types';
import { NavLink, useNavigate } from 'react-router';
import СalendarIcon from '../../assets/calendar.svg';
import CityIcon from '../../assets/city.svg';
import HotelIcon from '../../assets/hotel.svg';
import { TourServices } from '../TourServices/TourServices';
import { FaArrowLeft } from 'react-icons/fa';

interface Props {
  tour: HotelWithPrice | FullHotelWithPrice;
  mode: CardModeEnum;
}
export const TourCard: FC<Props> = ({ tour, mode }) => {
  const startDate = new Date(tour.startDate).toLocaleDateString('uk-UA');
  const formattedPrice = new Intl.NumberFormat('uk-UA').format(tour.amount);
  const navigate = useNavigate();
  const isFullMode = mode === CardModeEnum.FUll;
  const isShortMode = mode === CardModeEnum.SHORT;

  const handleGoHome = () => {
    navigate('/')
  }
  return (
    <>
      {
        isFullMode && <div className='navigate-back'>
          <NavLink to='/' onClick={handleGoHome} className="navigate-back__icon">
            <FaArrowLeft />
          </NavLink>
        </div>
      }
      <div className="tour">
        {
          isFullMode &&
          <div className='tour__location'>
            <div className='location'>
              <img src={CityIcon} alt='City Icon' className='location__image' />
              <p className="location__text">
                {tour.countryName}
              </p>
            </div>
            <div className='location'>
              <img src={HotelIcon} alt="Hotel Icon" className='location__image' />
              <p className="location__text">{tour.cityName}</p>
            </div>
          </div>
        }
        {isFullMode && <h3 className="tour__title">{tour.name}</h3>}
        <img
          src={tour.img || '/no-image.jpg'}
          alt={tour.name}
          className={isFullMode ? "tour__image--full" : "tour__image"}
        />
        {
          isFullMode && 'description' in tour &&
          <div className='tour__description description'>
            <h3 className="description__title">Опис</h3>
            <p className="description__text">{tour.description}</p>
          </div>
        }
        {isFullMode && <div className='tour__services services'>
        </div>}
        <div className="tour__info">
          {isShortMode && <h3 className="tour__title">{tour.name}</h3>}
          {
            isShortMode && <p className="tour__location">
              {tour.countryName}, {tour.cityName}
            </p>
          }
          {
            isFullMode && 'services' in tour && <div className='tour__services'>
              <TourServices services={tour.services} />
            </div>
          }
          {isFullMode && <div className='tour__divider'></div>}

          <div className="tour__date date">
            {
              isShortMode
                ? <p>Старт туру: </p>
                : <img className='date__icon' src={СalendarIcon} alt="Calendar Icon" />
            }
            {startDate}
          </div>
          <p className="tour__price">
            {formattedPrice} {tour.currency === 'usd' ? '$' : 'грн'}
          </p>
          {
            'priceId' in tour && <NavLink
              to={`/tour?priceId=${tour.priceId}&hotelId=${tour.id}`}
              className="tour__link"
            >
              Відкрити ціну
            </NavLink>
          }
        </div>
      </div>
    </>
  )
}
