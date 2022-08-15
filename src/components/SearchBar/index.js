import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CardHome from '../CardHome';

const usesStyles = makeStyles((theme) => ({
  form: {

    margin: '1rem',

    borderRadius: '3px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: 'auto',
      marginTop: '1rem',

    },
  },
  TextField: {

    [theme.breakpoints.down('sm')]: {
      width: '18rem',

    },
  },

}));

export default function SearchBar() {
  const classes = usesStyles();

  const [recetteApi, setRecetteApi] = React.useState([]);
  const [recetteFiltre, setRecetteFiltre] = React.useState([]);

  React.useEffect(() => {
    fetch('http://ali0908-server.eddi.cloud/projet-26-les-delices-de-curie-back/current/public/api/recipe/')
      .then((response) => response.json())
      .then((data) => setRecetteApi(data));
  }, []);

  const [nameRecette, setNameRecette] = React.useState('');

  const handleChercheRecette = (event) => {
    const searchValue = event.target.value;
    setNameRecette(searchValue);
  };

  const handleClickSearch = () => {
    const filtered = recetteApi
      .filter((filteredRecette) =>

        /* console.log(filteredRecette.name.toLowerCase().includes(nameRecette.toLowerCase())); */
        filteredRecette.name.toLowerCase().includes(nameRecette.toLowerCase()));

    setRecetteFiltre(filtered);   
  };

  const handleClickRemove=()=> {
    setNameRecette('');
    setRecetteFiltre([]);   
  };

  return (
    <form className={classes.form}>
      <TextField
        fullWidth
        className={classes.TextField}
        id="search-bar"
        variant="outlined"
        color="success"
        placeholder="Search..."
        size="large"
        value={nameRecette}
        onChange={handleChercheRecette}
      />

      <Button
        onClick={() => handleClickSearch()}
      >Chercher
      </Button>

      <Button
        onClick={() => handleClickRemove()}
      >Annuler
      </Button>

      <div className={classes.list}>

        <ImageList className={classes.imageList}>

          {recetteFiltre
            .map((recette, index) => (
              <ImageListItem>
                <CardHome recette={recette} index={index} key={index} />
              </ImageListItem>
            ))}
        </ImageList>
      </div>

    </form>
  );
}
