import { Route, Routes } from 'react-router'
import App from './App'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
