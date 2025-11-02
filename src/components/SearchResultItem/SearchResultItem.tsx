import type { FC } from 'react'
import { EntityTypes, type GeoEntity } from '../../types'
import { useAppDispatch } from '../../hooks/redux';
import { dropdownSlice } from '../../store/reducers/DropdownSlice';
import HotelIcon from '../../assets/hotel.svg';
import CityIcon from '../../assets/city.svg';
interface Props {
  searchResult: GeoEntity;
}
export const SearchResultItem: FC<Props> = ({ searchResult }) => {
  const dispatch = useAppDispatch();
  const handleSelect = (event: React.MouseEvent) => {
    const input = event.target as HTMLInputElement

    dispatch(dropdownSlice.actions.setQueryValue(input.innerText));
    dispatch(dropdownSlice.actions.openDropdown(false));
  }

  return (
    <div className='country-item' onClick={handleSelect}>
      {
        searchResult.type === EntityTypes.COUNTRY ?
          <img
            src={searchResult.flag}
            alt='Flag image'
            className='country-item__flag'
          /> :
          <img
            src={
              searchResult.type === EntityTypes.CITY
                ? CityIcon
                : HotelIcon
            }
            alt='Flag image'
            className='country-item__flag'
          />
      }
      <p className='country-item__name'>{searchResult.name}</p>
    </div>
  )
}
