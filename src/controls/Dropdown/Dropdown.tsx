import { useAppSelector } from '../../hooks/redux'
import cls from 'classnames'

export const Dropdown = () => {
  const { isOpened } = useAppSelector(state => state.dropdownReducer)
  return (
    <div className={cls(
      'dropdown',
      { 'dropdown--opened': isOpened },
      { 'dropdown--closed': !isOpened },
    )}>
      Dropdown
    </div>
  )
}
