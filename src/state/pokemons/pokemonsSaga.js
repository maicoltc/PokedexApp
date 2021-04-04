import { put, call, takeLatest } from 'redux-saga/effects'

import { fetchPokemons, setPokemons } from './pokemonsReducer'

import { getData } from '../../api'

export function* fetchPokemonsSaga(action) {
  try {
    const pokemons = yield call(
      getData,
      'https://pokeapi.co/api/v2/pokemon?limit=807'
    )
    yield put(setPokemons(pokemons.results))
  } catch (error) {
    console.log(error)
  }
}

export function* watcherSaga() {
  yield takeLatest(fetchPokemons.type, fetchPokemonsSaga)
}