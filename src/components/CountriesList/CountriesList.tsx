import type { FC } from 'react'
import type { Country } from '../../types'
import { CountryItem } from '../CountryItem/CountryItem'

interface Props {
  countries: Country[]
}

export const CountriesList: FC<Props> = ({ countries }) => {
  return (
    <div className='country-list'>
      {countries.map(country => <CountryItem country={country} key={country.id} />)}
    </div>
  )
}
