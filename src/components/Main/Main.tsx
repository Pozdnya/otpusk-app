import { searchAPI } from '../../services/SearchService'

export const Main = () => {
  const [, {data: prices}] = searchAPI.useLazyFetchGetSearchPricesQuery();
  console.log('prices', prices)
  return (
    <div>Main</div>
  )
}
