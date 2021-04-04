import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    fetchPokemons() {},
    setPokemons(state, action) {
      return { pokemons: action.payload }
    },
  },
})
export const { fetchPokemons, setPokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer