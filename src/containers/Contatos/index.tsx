import { useSelector } from 'react-redux'
import CardContato from '../../components/CardContatos'
import * as S from './styles'
import { RootReducer } from '../../stores'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  return (
    <>
      {itens.length <= 0 ? (
        <S.ContainerAviso>
          <h4>Clique no + para adicionar um novo contato</h4>
        </S.ContainerAviso>
      ) : (
        <S.SectionContato>
          <ul>
            {itens.map((contato) => (
              <li key={contato.nome}>
                <CardContato
                  id={contato.id}
                  nome={contato.nome}
                  email={contato.email}
                  numeroTel={contato.numeroTel}
                />
              </li>
            ))}
          </ul>
        </S.SectionContato>
      )}
    </>
  )
}

export default ListaContatos
