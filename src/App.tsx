import { Form } from './components/Form/Form'
import { Main } from './components/Main/Main'

export const App = () => {
  return (
    <>
      <div className='content'>
        <aside>
          <Form />
        </aside>
        <main className='content__main'>
          <Main />
        </main>
      </div>
    </>
  )
}
