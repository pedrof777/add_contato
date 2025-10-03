import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: []
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoContato = state.itens[state.itens.length - 1]
      if (action.payload.nome && action.payload.numeroTel) {
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      } else {
        alert('Digite nome e numero')
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const idContato = state.itens.findIndex(
        (contato) => contato.id == action.payload.id
      )
      if (idContato >= 0) {
        state.itens[idContato] = action.payload
      }
    }
  }
})

export const { adicionar, editar, remover } = contatoSlice.actions
export default contatoSlice.reducer
