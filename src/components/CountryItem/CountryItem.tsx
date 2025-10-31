import type { FC } from 'react'
import type { Country } from '../../types'

interface Props {
  country: Country
}
export const CountryItem: FC<Props> = ({country}) => {
  return (
    <div className='country-item'>
      <img src={country.flag} alt='Flag image' className='country-item__flag'/>
      <p className='country-item__name'>{country.name}</p>
    </div>
  )
}
