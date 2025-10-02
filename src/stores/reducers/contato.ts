import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Augusto de Lima',
      email: 'agl@gmail.com',
      numero: '31998980998',
      id: 1
    },
    {
      nome: 'Paulo Noberto',
      email: 'paulao@gmail.com',
      numero: '31998980998',
      id: 2
    },
    {
      nome: 'Faria Pereira',
      email: 'fariapereira@gmail.com',
      numero: '31998980998',
      id: 3
    }
  ]
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
      if (action.payload.nome && action.payload.numero) {
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      } else {
        alert('Digite nome e numero  ')
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const idContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (idContato >= 0) {
        state.itens[idContato] = action.payload
      }
    }
  }
})

export const { adicionar, editar, remover } = contatoSlice.actions
export default contatoSlice.reducer
