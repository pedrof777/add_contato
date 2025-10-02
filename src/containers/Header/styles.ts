import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
`

export const AddContato = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 720px;
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: ${variaveis.azulClaro};
  cursor: pointer;
  text-decoration: none;
`
