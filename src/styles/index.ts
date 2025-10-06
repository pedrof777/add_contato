import styled, { createGlobalStyle } from 'styled-components'
import { RootReducer } from '../stores'
import { useSelector } from 'react-redux'

function Contato() {
  const { itens } = useSelector((state: RootReducer) => state.contato)

  if (itens.length > 0) {
    return 'unset'
  }
  return '100vh'
}

export const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
}

  body{
    overflow-x: hidden;
  }
`

export const Container = styled.div`
  background-color: #d8d8d8ff;
  height: ${() => Contato()};
  max-width: 600px;
  margin: 0 auto;
  border-radius: 20px;
`
export const Button = styled.button`
  padding: 10px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
`
