import * as S from './styles'

const Cabecalho = () => {
  return (
    <S.ContainerHeader>
      <h1>Contatos</h1>
      <S.AddContato to="/novo">+</S.AddContato>
    </S.ContainerHeader>
  )
}

export default Cabecalho
