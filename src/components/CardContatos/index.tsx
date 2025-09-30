import * as S from './styles'

const CardContato = () => {
  return (
    <>
      <S.ContainerCard>
        <div>
          <S.ContatoNome>Fulano Beltrano da Silva</S.ContatoNome>
          <S.ContainerContato>
            <S.CardInfo>
              <S.InfosTitle>Numero:</S.InfosTitle>
              <S.InfosText>(31) 99494-9898</S.InfosText>
            </S.CardInfo>
            <S.CardInfo>
              <S.InfosTitle>Email:</S.InfosTitle>
              <S.InfosText>pabloescobar@gmail.com</S.InfosText>
            </S.CardInfo>
          </S.ContainerContato>
        </div>
        <div>
          <button>editar</button>
          <button>deletar</button>
        </div>
      </S.ContainerCard>
    </>
  )
}

export default CardContato
