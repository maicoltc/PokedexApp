/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react'
import { Typography, CircularProgress, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import DetailPokemon from './components/DetailPokemon'
import { getData } from './api'

const Pokemon = (props) => {
  const { match } = props
  const { params } = match
  const { pokemonId } = params
  const [pokemon, setPokemon] = useState(undefined)

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((data) => setPokemon(data))
      .catch(function (error) {
        setPokemon(false)
      })
  }, [pokemonId])

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon && <DetailPokemon pokemon={pokemon} />}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Link to="/">
          <Button variant="contained">back to pokedex</Button>
        </Link>
      )}
    </>
  )
}

export default Pokemon