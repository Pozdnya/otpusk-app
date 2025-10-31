import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div className='layout'>
      <div className="layout__container">
        <Outlet />
      </div>
    </div>
  )
}
