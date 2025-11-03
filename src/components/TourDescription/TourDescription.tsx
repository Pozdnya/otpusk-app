import type { FC } from 'react'

interface Props {
  description: string
}
export const TourDescription: FC<Props> = ({description}) => {
  return (
    <div className='tour__description description'>
      <h3 className="description__title">Опис</h3>
      <p className="description__text">{description}</p>
    </div>
  )
}
