import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import './style.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import TextField from '@mui/material/TextField';
import CardHome from '../CardHome';
import { useParams } from 'react-router';

/* ----STYLE CSS---- */
const useStyles = makeStyles((theme) => ({
  oneRecette: {
    display: 'grid',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)!important',

    },
  },

  recetteId: {
    border: '0.2rem solid grey',
    marginBottom: '0.3rem',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)!important',
      columns: '2',
      width: '70vw',
      marginBottom: '0',
    },

  },

  details: {
    backgroundColor: '#a3c8e9',
    border: '0.2rem solid grey',

    [theme.breakpoints.up('sm')]: {
      marginLeft: '0.3rem',
    },
  },

  etapes: {
    border: '0.2rem solid grey!important',
    margin: '0.3rem 0 !important',
    '& ol': {
      listStyleType: 'decimal',
      padding: '1.3rem',

    },
  },

  comment: {
    border: '0.2rem solid grey',
    margin: '0.3rem 0',
  },

  ingredients: {

    '& ul': {
      listStyle: 'square',
      padding: '1.3rem',

    },
  },

  listStyle: {
    padding: '0.2rem',
  },

  /* nomRecette :{
    display :'none',
  } */

}));

function Page1Recette() {
  const classes = useStyles();


  const params = useParams(); // recuppere le parametre (index)

  const  [infoRecette, setInfoRecette] = React.useState([]);

  React.useEffect(() => {
    fetch('http://ali0908-server.eddi.cloud/projet-26-les-delices-de-curie-back/current/public/api/recipe/')
      .then((response) => response.json())
      .then((data) => setInfoRecette(data));
  }, []);

   /* console.log(infoRecette);
  console.log(params); */
  

  //const uneRecette = infoRecette[params.index];
  /* console.log(uneRecette); */

  return (
    <div>

      <h2 >  </h2>

      <Grid className={classes.oneRecette}>

        <Grid className={classes.recetteId}>
          <CardHome recette={infoRecette[params.index]} />
          <div className={classes.ingredients}>
            <ul>
              <li className={classes.listStyle}>ingredient - quantité </li>
              <li className={classes.listStyle}>ingredient - quantité </li>
              <li className={classes.listStyle}>ingredient - quantité </li>
              <li className={classes.listStyle}>ingredient - quantité </li>
            </ul>
          </div>
        </Grid>
        <Grid className={classes.details}>
          <ul>
            <li className={classes.listStyle}><AccessTimeIcon /> temps de prepa </li>
            <li className={classes.listStyle}><BarChartIcon /> difficulte</li>
          </ul>
        </Grid>

      </Grid>

      <div className={classes.etapes}>
        <ol>
          <li className={classes.listStyle}>etape </li>
          <li className={classes.listStyle}>etape</li>
          <li className={classes.listStyle}>etape</li>
          <li className={classes.listStyle}>etape</li>
        </ol>
      </div>

      {/*  <div className={classes.comment}>
      <TextField fullWidth id="outlined-basic" label="Commentaire" variant="outlined" />
        <ul>
              <li>comment 1, date </li>
              <li>comment 2</li>
              <li>comment 3</li>
              <li> </li>
        </ul>
      </div>  */}

    </div>

  );
}

export default Page1Recette;
