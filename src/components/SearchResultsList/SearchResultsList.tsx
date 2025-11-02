import type { FC } from 'react'
import type { Country } from '../../types'
import { SearchResultItem } from '../SearchResultItem/SearchResultItem'


interface Props {
  countries: Country[]
}

export const SearchResultsList: FC<Props> = ({ countries }) => {
  return (
    <div className='country-list'>
      {countries.map(country => <SearchResultItem country={country} key={country.id} />)}
    </div>
  )
}
