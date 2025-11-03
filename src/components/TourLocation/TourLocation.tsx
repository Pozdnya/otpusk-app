import { MdLocationPin } from 'react-icons/md';
import { BiHotel } from 'react-icons/bi';
import type { FC } from 'react';
interface Props {
  tour: {
    countryName: string,
    cityName: string
  }
}
export const TourLocation:FC<Props> = ({tour}) => {
  return (
    <div className='tour__location'>
      <div className='location'>
        <MdLocationPin className='location__image' />
        <p className="location__text">
          {tour.countryName}
        </p>
      </div>
      <div className='location'>
        <BiHotel className='location__image' />
        <p className="location__text">{tour.cityName}</p>
      </div>
    </div>
  )
}
