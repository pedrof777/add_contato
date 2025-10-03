import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  align-items: center;
`

export const AddContato = styled(Link)`
  margin-left: 185px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: ${variaveis.azulClaro};
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-left: 150px;
  }
`
