import { useEffect, useRef, useState } from 'react'
import { Button } from '../../controls/Button/Button'
import { Dropdown } from '../../controls/Dropdown/Dropdown'
import { Input } from '../../controls/Input/Input'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { searchAPI } from '../../services/SearchService'
// import { dropdownSlice } from '../../store/reducers/SearchSlice'
import { searchSlice } from '../../store/reducers/SearchSlice'
import { toursSlice } from '../../store/reducers/ToursSlice'
import type { Hotel, HotelWithPrice, PriceOffer } from '../../types'

export const Form = () => {
  const dispatch = useAppDispatch();
  const [fetchCountries, { data: countries }] = searchAPI.useLazyFetchCountriesQuery();
  const [fetchStartSearchPrices] = searchAPI.useLazyFetchStartSearchPricesQuery();
  const [fetchGetSearchPrices] = searchAPI.useLazyFetchGetSearchPricesQuery();
  const [fetchHotels] = searchAPI.useLazyFetchHotelsQuery();
  const { query, countryId } = useAppSelector(state => state.searchReducer)
  const [fetchGeo, { data: geo }] = searchAPI.useLazyFetchGeoQuery();
  const activeTokenRef = useRef<string | null>(null);
  const isCancelledRef = useRef(false);
  const [stopSearch] = searchAPI.useLazyStopSearchPricesQuery();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const handleInputClick = () => {
    dispatch(searchSlice.actions.openDropdown(true));
    fetchCountries();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSlice.actions.setQueryValue(event.target.value));

    if (!event.target.value.length) {
      dispatch(searchSlice.actions.openDropdown(true));
      dispatch(searchAPI.util.resetApiState());
      fetchCountries();
      return;
    }
  }

  const pollForResults = async (token: string, waitUntil: number, retry = 0): Promise<void> => {
    console.log(`⏳ Waiting ${waitUntil}ms before next request...`);
    await new Promise((resolve) => setTimeout(resolve, Number(waitUntil)));

    try {
      const prices = await fetchGetSearchPrices(token).unwrap();
      console.log('🚀 Prices:', prices);
      const hotels = await fetchHotels(countryId || '').unwrap();
      console.log('🚀 Hotels:', hotels);
      const hotelMap = new Map<number, Hotel>(hotels.map(hotel => [hotel.id, hotel]));
      const hotelsWithPrices: HotelWithPrice[] = prices.prices
        .filter((price): price is PriceOffer & { hotelID: string } => !!price.hotelID)
        .map(price => {
          const hotel = hotelMap.get(Number(price.hotelID));
          if (!hotel) return null;

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { id: priceId, hotelID: _, ...priceData } = price;

          return {
            ...hotel,
            ...priceData,
            priceId,
          };
        })
        .filter((item): item is HotelWithPrice => item !== null);

      dispatch(toursSlice.actions.setHotelsWithPrice(hotelsWithPrices));

      console.log('✅ Hotels with prices:', hotelsWithPrices);
    } catch (error) {
      console.error('⚠️ Error fetching results:', error);

      if (retry < 2) {
        console.log(`🔄 Retrying... attempt ${retry + 1}`);
        await pollForResults(token, waitUntil, retry + 1);
      } else {
        console.error('🚫 Max retries reached. Aborting.');
        dispatch(searchSlice.actions.setError('Max retries reached. Aborting.'));
      }
    }
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchSlice.actions.openDropdown(false));
    if (!countryId) {
      return;
    }

    if (activeTokenRef.current) {
      isCancelledRef.current = true;
      try {
        await stopSearch(activeTokenRef.current).unwrap();
        console.log("🛑 Попередній пошук скасовано");
      } catch (error) {
        console.warn("⚠️ Не вдалося скасувати попередній пошук", error);
      }
    }

     isCancelledRef.current = false;

    try {
      dispatch(searchSlice.actions.setHasSearched(false));
      dispatch(searchSlice.actions.setLoading(true));
      dispatch(searchSlice.actions.setHasSearched(true));
      setIsButtonDisabled(true);
      const { token, waitUntil } = await fetchStartSearchPrices(countryId).unwrap();
      activeTokenRef.current = token;
      const delay = new Date(waitUntil).getTime() - Date.now();

      await pollForResults(token, delay);

      dispatch(searchSlice.actions.setLoading(false));
    } catch (error) {
      const err = error instanceof Error ? error.message : 'Неочікувана помилка';
      dispatch(searchSlice.actions.setError(err));
      dispatch(searchSlice.actions.setLoading(false));
      return { error: error as Error };
    } finally {
      setIsButtonDisabled(false);
    }
  }

  useEffect(() => {
    if (!query.length) {
      return;
    }
    const timeot = setTimeout(() => {
      fetchGeo(query);
    }, 300)
    return () => clearTimeout(timeot)
  }, [fetchGeo, query]);

  return (
    <div className='form-container'>
      <form className="form" onSubmit={handleFormSubmit}>
        <h2 className='form__title'>Форма пошуку турів</h2>
        <div className='form__inputs'>
          <Input handleClick={handleInputClick} handleChange={handleInputChange} />
          {countries && (
            <Dropdown
              searchResults={
                geo && geo.length
                  ? geo
                  : countries
              }
            />
          )}
        </div>
        <Button text='Знайти' disabled={isButtonDisabled} />
      </form>
    </div>
  )
}
