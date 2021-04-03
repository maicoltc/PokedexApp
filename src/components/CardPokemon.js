import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from '@material-ui/core'
  import { makeStyles } from '@material-ui/core/styles'
  import PropTypes from 'prop-types'
  import { Link } from 'react-router-dom'
  
  import { toFirstCharUppercase } from '../constants'
  
  const useStyles = makeStyles((theme) => ({
    cardMedia: {
      margin: 'auto',
    },
    cardContent: {
      textAlign: 'center',
    },
  }))
  
  const CardPokemon = ({ name, url }) => {
    const classes = useStyles()
  
    const numberPokemon = url.split('/')[url.split('/').length - 2]
  
    return (
      <Grid item xs={4}>
        <Link to={`/${numberPokemon}`}>
          <Card>
            <CardMedia
              className={classes.cardMedia}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberPokemon}.png`}
              style={{ width: '130px', height: '130px' }}
            />
            <CardContent className={classes.cardContent}>
              <Typography>{`${toFirstCharUppercase(name)}`}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    )
  }
  
  CardPokemon.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
  }
  
  export default CardPokemon