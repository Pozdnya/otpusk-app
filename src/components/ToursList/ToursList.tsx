import type { FC } from 'react'
import type { HotelWithPrice } from '../../types'
import { TourItem } from '../TourItem/TourItem'

interface Props {
  tour: HotelWithPrice[]
}
export const ToursList: FC<Props> = ({ tour }) => {
  return (
    <div className='tour-list'>
      {tour.map(tour => <TourItem tour={tour} key={tour.id} />)}
    </div>
  )
}
