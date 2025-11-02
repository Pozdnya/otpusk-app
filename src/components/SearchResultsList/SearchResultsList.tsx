import type { FC } from 'react'
import type { GeoEntity } from '../../types'
import { SearchResultItem } from '../SearchResultItem/SearchResultItem'


interface Props {
  searchResults: GeoEntity[]
}

export const SearchResultsList: FC<Props> = ({ searchResults }) => {
  return (
    <div className='country-list'>
      {searchResults.map(searchResult => <SearchResultItem searchResult={searchResult} key={searchResult.id} />)}
    </div>
  )
}
