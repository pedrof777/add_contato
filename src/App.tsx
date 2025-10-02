import { Provider } from 'react-redux'

import ListaContatos from './containers/Contatos'
import Cabecalho from './containers/Header'
import { Container, EstiloGlobal } from './styles'
import store from './stores'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <Container>
          <EstiloGlobal />
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  )
}

export default App
