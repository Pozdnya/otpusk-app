import { useAppSelector } from '../../hooks/redux'
import cls from 'classnames'
import type { GeoEntity } from '../../types'
import type { FC } from 'react'
import { SearchResultsList } from '../../components/SearchResultsList/SearchResultsList'

interface Props {
  searchResults: GeoEntity[],
}
export const Dropdown: FC<Props> = ({searchResults}) => {
  const { isOpened } = useAppSelector(state => state.dropdownReducer)
  return (
    <div className={cls(
      'dropdown',
      { 'dropdown--opened': isOpened },
      { 'dropdown--closed': !isOpened },
    )}>
      {isOpened && <SearchResultsList searchResults={searchResults} />}
    </div>
  )
}
