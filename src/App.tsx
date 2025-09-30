import ListaContatos from './containers/Contatos'
import Cabecalho from './containers/Header'
import { Container, EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <Container>
        <EstiloGlobal />
        <Cabecalho />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
