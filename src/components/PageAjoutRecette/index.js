import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import TextField from '@mui/material/TextField';
import { Input } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, Button } from '@mui/material';
import { Box } from '@mui/system';

import { makeStyles } from '@material-ui/core/styles';

import Etape from './etape';
import Ingredient from './ingredient';
import Detail from './detail';

import './style.css';

/* ----STYLE CSS---- */
const useStyles = makeStyles((theme) => ({
  formulaire: {
    marginTop: '2rem',
    display: 'grid',
    gap: '1rem!important',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)!important',

    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)!important',

    },

  },

  

  submit: {
    margin: '1rem 0!important',
  },

}));

function PageAjoutRecette() {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  

  // pour envoyer le form
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('La recette a bien été envoyé');
    window.location='/nouvelleRecette';

    console.log('submit ok');
  };

  return (

    <Box className="nouvelleRecette">
      <h2> Wow, une nouvelle recette!</h2>
      <form onSubmit={handleSubmit} method="post">
        <div >
          <label htmlFor="title" > Title de la recette </label>
          <input className="titleNouvelleRecette"
            type="text"
            value={title}
            required
            onChange={(e) => {
              handleTitle(e);
            }}
          />
        </div>
        <Box className={classes.formulaire}>

          <Ingredient />
          <Etape />
          <Detail />

        </Box>
        
        <Button
          className={classes.submit}
          type="submit"
          fullWidth
          variant="contained"
          color="warning"

        >
          Envoyer la recette
        </Button>
      </form>

    </Box>

  );
}

export default PageAjoutRecette;
