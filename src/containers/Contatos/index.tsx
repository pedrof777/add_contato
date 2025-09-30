import CardContato from '../../components/CardContatos'
import * as S from './styles'

const ListaContatos = () => {
  return (
    <>
      <S.SectionContato>
        <ul>
          <li>
            <CardContato />
          </li>
        </ul>
      </S.SectionContato>
    </>
  )
}

export default ListaContatos
