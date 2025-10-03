import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import * as S from './styles'
import { adicionar } from '../../stores/reducers/contato'

const CadastroContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [numeroTel, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()
    if (nome || numeroTel) {
      dispatch(
        adicionar({
          nome,
          email,
          numeroTel
        })
      )
      navigate('/')
    } else {
      alert('Digite nome e numero')
    }
  }
  return (
    <>
      <S.ContainerForm>
        <S.ContainerBack>
          <S.Back to="/">Voltar</S.Back>
        </S.ContainerBack>
        <S.Form onSubmit={adicionarContato}>
          <S.LabelInput>
            <label htmlFor="nome">Nome:</label>
            <S.Campo
              value={nome}
              onChange={({ target }) => setNome(target.value)}
              type="text"
              id="nome"
            />
          </S.LabelInput>
          <S.LabelInput>
            <label htmlFor="numero">Numero:</label>
            <S.Campo
              maxLength={11}
              value={numeroTel}
              onChange={({ target }) => setNumero(target.value)}
              type="tel"
              id="numero"
            />
          </S.LabelInput>
          <S.LabelInput>
            <label htmlFor="email">Email:</label>
            <S.Campo
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              id="email"
            />
          </S.LabelInput>
          <S.addButton type="submit">+</S.addButton>
        </S.Form>
      </S.ContainerForm>
    </>
  )
}

export default CadastroContato
