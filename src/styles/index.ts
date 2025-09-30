import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: Roboto, sans-serif;
}
`

export const Container = styled.div`
  background-color: #d8d8d8ff;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 20px;
`
