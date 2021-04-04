import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Grid,
  CircularProgress,
  Toolbar,
  AppBar,
  TextField,
} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import CardPokemon from './components/CardPokemon'
import { fetchPokemons } from './state/pokemons/pokemonsReducer'

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  cardMedia: {
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center',
  },
  searchContainer: {
    display: 'flex',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '5px',
  },
  searchInput: {
    width: '200px',
    margin: '5px',
  },
}))

const Pokedex = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons.pokemons)
  const [pokemonData, setPokemonData] = useState(pokemons)
  const [pokemonsToShow, setPokemonsToShow] = useState(pokemons)

  useEffect(() => {
    setPokemonData(pokemons)
    setPokemonsToShow(pokemons)
  }, [pokemons])

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [dispatch])

  const handleSearchChange = (e) => {
    const pokemonsFiltered = pokemonData.filter(
      (pokemon) =>
        pokemon.name &&
        pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    const temp = pokemonsFiltered || pokemonData
    setPokemonsToShow([...temp])
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Pokemon"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonsToShow ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {pokemonsToShow.map(({ name, url }, index) => (
            <CardPokemon name={name} url={url} key={`${name}_${index}`} />
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  )
}

export default Pokedex