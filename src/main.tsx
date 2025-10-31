import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router'
import { RootRouter } from './RootRouter.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

const store = setupStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
