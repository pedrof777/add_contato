import { useSelector } from 'react-redux'
import CardContato from '../../components/CardContatos'
import * as S from './styles'
import { RootReducer } from '../../stores'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  return (
    <>
      <S.SectionContato>
        <ul>
          {itens.map((contato) => (
            <li key={contato.nome}>
              <CardContato
                id={contato.id}
                nome={contato.nome}
                email={contato.email}
                numero={contato.numero}
              />
            </li>
          ))}
        </ul>
      </S.SectionContato>
    </>
  )
}

export default ListaContatos
