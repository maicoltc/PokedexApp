import { all } from 'redux-saga/effects'

import { watcherSaga } from './pokemons/pokemonsSaga'

export default function* rootSaga() {
  yield all([watcherSaga()])
}