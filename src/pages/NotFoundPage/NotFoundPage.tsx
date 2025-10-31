import { useNavigate } from 'react-router'
import { Button } from '../../controls/Button/Button'

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/')
  }
  
  return (
    <div className='notfound'>
      <div className="notfound__container">
        <p className='notfound__text'>Page not found</p>
        <Button text='Home' handleClick={handleGoHome}/>
      </div>
    </div>
  )
}
