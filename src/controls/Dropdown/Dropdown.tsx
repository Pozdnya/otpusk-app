import { useAppSelector } from '../../hooks/redux'
import cls from 'classnames'
import type { Country } from '../../types'
import type { FC } from 'react'
import { CountriesList } from '../../components/CountriesList/CountriesList'

interface Props {
  countries: Country[],
}
export const Dropdown: FC<Props> = ({countries}) => {
  const { isOpened } = useAppSelector(state => state.dropdownReducer)
  return (
    <div className={cls(
      'dropdown',
      { 'dropdown--opened': isOpened },
      { 'dropdown--closed': !isOpened },
    )}>
      {isOpened && <CountriesList countries={countries} />}
    </div>
  )
}
