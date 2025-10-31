import { Route, Routes } from 'react-router'
import { App } from './App'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { Layout } from './Layout/Layout'

export const RootRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
