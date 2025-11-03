import type { FC } from 'react'
import { CardModeEnum, type HotelWithPrice } from '../../types'
import { TourCard } from '../TourCard/TourCard'


interface Props {
  tour: HotelWithPrice[]
}
export const ToursList: FC<Props> = ({ tour }) => {
  return (
    <div className='tour-list'>
      <div className="tours-grid">
        {tour.map(tour => <TourCard tour={tour} mode={CardModeEnum.SHORT} key={tour.id} />)}
      </div>
    </div>
  )
}
