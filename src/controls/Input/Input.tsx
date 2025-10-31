import { useState } from 'react'
import { IconClearButton } from '../IconClearButton/IconClearButton'

export const Input = () => {
  const [ query, setQuery ] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <div className='input-container'>
      <input
        type='text'
        name='input'
        placeholder='Введіть місто'
        className='input'
        value={query}
        onChange={handleChange}
      />
      {query && <IconClearButton />}
    </div>
  )
}
