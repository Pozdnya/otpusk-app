import type { FC } from 'react'
import { EntityTypes, type GeoEntity } from '../../types'
import { useAppDispatch } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { FaCity } from 'react-icons/fa';
import { BiHotel } from 'react-icons/bi';
interface Props {
  searchResult: GeoEntity;
}
export const SearchResultItem: FC<Props> = ({ searchResult }) => {
  const dispatch = useAppDispatch();
  const handleSelect = (event: React.MouseEvent) => {
    const input = event.target as HTMLInputElement

    dispatch(searchSlice.actions.setQueryValue(input.innerText));
    dispatch(searchSlice.actions.openDropdown(false));

    const countryId = searchResult.type === EntityTypes.COUNTRY ? searchResult.id : searchResult.countryId

    dispatch(searchSlice.actions.setCountryId(countryId));
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
            // <img
            //   src={
            //     searchResult.type === EntityTypes.CITY
            //       ? CityIcon
            //       : HotelIcon
            //   }
            //   alt='Flag image'
            //   className='country-item__flag'
            // />
            searchResult.type === EntityTypes.CITY ? <FaCity className='country-item__flag' /> : <BiHotel className='country-item__flag' /> 
      }
      <p className='country-item__name'>{searchResult.name}</p>
    </div>
  )
}
