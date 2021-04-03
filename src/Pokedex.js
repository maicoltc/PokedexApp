import { useEffect, useState } from 'react'
import {
  Grid,
  CircularProgress,
  Toolbar,
  AppBar,
  TextField,
} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

import { getData } from './api'
import CardPokemon from './components/CardPokemon'

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
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonsToShow, setPokemonsToShow] = useState([])

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon?limit=807`).then((response) => {
      const { results } = response

      setPokemonData(results)
      setPokemonsToShow(results)
    })
  }, [])

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