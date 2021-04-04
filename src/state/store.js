import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from '@reduxjs/toolkit'
  import createSagaMiddleware from 'redux-saga'
  import rootSaga from './rootSaga'
  
  import pokemons from './pokemons/pokemonsReducer'
  
  const reducer = combineReducers({ pokemons })
  let sagaMiddleware = createSagaMiddleware()
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
  
  const store = configureStore({
    reducer,
    middleware,
  })
  
  sagaMiddleware.run(rootSaga)
  
  export default store