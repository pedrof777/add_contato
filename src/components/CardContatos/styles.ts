import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Button } from '../../styles'

export const ContainerCard = styled.div`
  background-color: #ccccccff;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
export const FormContato = styled.form`
  display: flex;
`
export const ContatoNome = styled.input`
  font-size: 1.2em;
  margin-bottom: 5px;
  background-color: unset;
  border: none;
  outline: none;
`
export const CardInfo = styled.div`
  font-size: 1em;
  display: flex;
`
export const CardInfoNumber = styled(CardInfo)`
  width: 170px;
`

export const InfosTitle = styled.label`
  font-size: 0.9em;
  color: ${variaveis.cinzaEscuro};
`
export const InfosText = styled.input`
  font-size: 0.9em;
  color: ${variaveis.cinzaEscuro};
  margin: 0 5px;
  background-color: unset;
  border: none;
  outline: none;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonEditarESalvar = styled(Button)`
  background-color: ${variaveis.azulClaro};
`

export const ButtonDeletarECancelar = styled(Button)`
  background-color: #c00000ff;
`
