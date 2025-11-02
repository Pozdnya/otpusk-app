import type { FC } from 'react'
import type { PriceOffer } from '../../types';
interface Props {
  tour: PriceOffer;
}
export const TourItem: FC<Props> = ({tour}) => {
  console.log('tour', tour)
  return (
    <div className='tour-item'>
      <p>{tour.currency}</p>
    </div>
  )
}
