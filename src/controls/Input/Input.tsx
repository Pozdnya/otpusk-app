import { IconClearButton } from '../IconClearButton/IconClearButton'
import { useAppSelector } from '../../hooks/redux'
import type { FC } from 'react';
interface Props {
  handleClick: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: FC<Props> = ({ handleClick, handleChange }) => {
  const { query } = useAppSelector(state => state.dropdownReducer)

  return (
    <div className='input-container'>
      <input
        autoComplete="off"
        type='text'
        name='input'
        placeholder='Введіть місто'
        className='input'
        value={query}
        onChange={handleChange}
        onClick={handleClick}
      />
      {query && <IconClearButton />}
    </div>
  )
}
