import { Typography, Link } from '@material-ui/core'
import PropTypes from 'prop-types'

import { toFirstCharUppercase } from '../constants'

const DetailPokemon = ({ pokemon }) => {
  const { name, id, species, height, weight, types } = pokemon
  const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

  return (
    <>
      <Typography variant="h1">
        {`${id}.`} {toFirstCharUppercase(name)}
      </Typography>
      <img
        style={{ width: '300px', height: '300px' }}
        src={fullImageUrl}
        alt="pokemon"
      />
      <Typography variant="h3">Pokemon Info</Typography>
      <Typography>
        {'Species: '}
        <Link href={species.url}>{species.name} </Link>
      </Typography>
      <Typography>Height: {height} </Typography>
      <Typography>Weight: {weight} </Typography>
      <Typography variant="h6"> Types:</Typography>
      {types.map((typeInfo) => {
        const { type } = typeInfo
        const { name } = type
        return <Typography key={name}> {`${name}`}</Typography>
      })}
    </>
  )
}
DetailPokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    species: PropTypes.object,
    height: PropTypes.number,
    weight: PropTypes.number,
    types: PropTypes.array,
    sprites: PropTypes.object,
  }),
}

export default DetailPokemon