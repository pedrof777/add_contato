import { use, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../stores/reducers/contato'

type Props = ContatoClass

const CardContato = ({
  id,
  nome: nameState,
  email: mailState,
  numero: numberState
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [mail, setMail] = useState('')

  return (
    <>
      <S.ContainerCard>
        <div>
          <S.ContatoNome>{name}</S.ContatoNome>
          <S.FormContato action="">
            <S.CardInfoNumber>
              <S.InfosTitle htmlFor="fone">Numero:</S.InfosTitle>
              <S.InfosText
                id="fone"
                type="tel"
                placeholder="(xx) 9xxxx-xxxx"
                value={number}
                onChange={({ target }) => {
                  setNumber(target.value)
                }}
              />
            </S.CardInfoNumber>
            <S.CardInfo>
              <S.InfosTitle htmlFor="email">Email:</S.InfosTitle>
              <S.InfosText id="email" type="email" value={mail} />
            </S.CardInfo>
          </S.FormContato>
        </div>
        <S.Buttons>
          {estaEditando ? (
            <>
              <S.ButtonEditarESalvar
                onClick={() => {
                  dispatch(
                    editar({
                      nome,
                      email,
                      numero,
                      id
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </S.ButtonEditarESalvar>
              <S.ButtonDeletarECancelar>Cancelar</S.ButtonDeletarECancelar>
            </>
          ) : (
            <>
              <S.ButtonEditarESalvar onClick={() => setEstaEditando(true)}>
                Editar
              </S.ButtonEditarESalvar>
              <S.ButtonDeletarECancelar onClick={() => dispatch(remover(id))}>
                Deletar
              </S.ButtonDeletarECancelar>
            </>
          )}
        </S.Buttons>
      </S.ContainerCard>
    </>
  )
}

export default CardContato
