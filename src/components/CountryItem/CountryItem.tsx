import type { FC } from 'react'
import type { Country } from '../../types'
import { useAppDispatch } from '../../hooks/redux';
import { dropdownSlice } from '../../store/reducers/DropdownSlice';

interface Props {
  country: Country
}
export const CountryItem: FC<Props> = ({country}) => {
  const dispath = useAppDispatch();
  const handleSelect = (event: React.MouseEvent) => {
    const input = event.target as HTMLInputElement

    dispath(dropdownSlice.actions.setQueryValue(input.innerText));
  }

  return (
    <div className='country-item' onClick={handleSelect}>
      <img src={country.flag} alt='Flag image' className='country-item__flag'/>
      <p className='country-item__name'>{country.name}</p>
    </div>
  )
}
