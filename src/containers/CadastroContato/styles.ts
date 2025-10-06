import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Button } from '../../styles'
import variaveis from '../../styles/variaveis'

export const ContainerForm = styled.div`
  display: inline;
`
export const ContainerBack = styled.div`
  padding: 15px;
`

export const Back = styled(Link)`
  font-size: 1.1em;
  text-decoration: none;
  color: ${variaveis.azulClaro};
`

export const Form = styled.form`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
`
export const Campo = styled.input`
  background-color: #eeeeeeff;
  width: 400px;
  padding: 15px;
  border-radius: 20px;
  border: none;
  font-size: 0.9em;

  @media (max-width: 768px) {
    width: 300px;
  }
`

export const addButton = styled(Button)`
  background-color: ${variaveis.azulClaro};
  width: 80px;
`
