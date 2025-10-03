import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../stores/reducers/contato'

type Props = ContatoClass

const CardContato = ({
  id,
  nome: nome,
  email: email,
  numeroTel: numeroTel
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [name, setName] = useState('')
  const [numeroInput, setNumber] = useState('')
  const [mail, setMail] = useState('')

  useEffect(() => {
    if (nome.length || email.length || numeroTel.length >= 0) {
      setName(nome)
      setMail(email)
      setNumber(numeroTel)
    }
  }, [nome, numeroTel, email])

  function cancelar() {
    setEstaEditando(false)
    setName(nome)
    setMail(email)
    setNumber(numeroTel)
  }
  return (
    <>
      {!estaEditando ? (
        <div>
          <h3>CLique no + para adicionar um novo contato</h3>
        </div>
      ) : (
        <S.ContainerCard>
          <div>
            <S.ContatoNome
              readOnly={!estaEditando}
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <S.FormContato action="">
              <S.CardInfoNumber>
                <S.InfosTitle htmlFor="fone">Numero:</S.InfosTitle>
                <S.InfosText
                  readOnly={!estaEditando}
                  id="fone"
                  type="tel"
                  maxLength={11}
                  placeholder="(xx) 9xxxx-xxxx"
                  value={numeroInput}
                  onChange={({ target }) => setNumber(target.value)}
                />
              </S.CardInfoNumber>
              <S.CardInfo>
                <S.InfosTitle htmlFor="email">Email:</S.InfosTitle>
                <S.InfosText
                  readOnly={!estaEditando}
                  onChange={({ target }) => setMail(target.value)}
                  id="email"
                  type="email"
                  value={mail}
                />
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
                        nome: name,
                        email: mail,
                        numeroTel: numeroInput,
                        id
                      })
                    )
                    setEstaEditando(false)
                  }}
                >
                  Salvar
                </S.ButtonEditarESalvar>
                <S.ButtonDeletarECancelar onClick={() => cancelar()}>
                  Cancelar
                </S.ButtonDeletarECancelar>
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
      )}
    </>
  )
}

export default CardContato
