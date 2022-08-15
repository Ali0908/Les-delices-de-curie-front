import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import './style.css';

import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import CardHome from '../CardHome';
import Link from '@mui/material/Link';

/* ----STYLE CSS---- */
const useStyles = makeStyles((theme) => ({
  allRecipies: {
    display: 'grid',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)!important',

    },
  },

  pagination: {
    '& > *': {
      margin: '1.5rem!important',
      justifyContent: 'center',
    },

  },

  recette: {
    columns: '2',
    border: '0.2rem solid grey',

  },

  descriptionRecette: {
    backgroundColor: '#a3c8e9',
  },

}));

function PageAllRecipies() {
  const classes = useStyles();

 const  [infoRecette, setInfoRecette] = React.useState([]);

  React.useEffect(() => {
    fetch('http://ali0908-server.eddi.cloud/projet-26-les-delices-de-curie-back/current/public/api/recipe/')
      .then((response) => response.json())
      .then((data) => setInfoRecette(data));
  }, []);
  
  /* console.log(infoRecette); */


//---Pour pagination---
  

  const [currentPage, setCurentPage] = React.useState(1);
  const [recettesPerPage, setRecettesPerPage] = React.useState(10);
  const nrPages=Math.ceil(infoRecette.length/recettesPerPage);

  const indexOfLastPost = currentPage * recettesPerPage;
  const indexOfFirstPost = indexOfLastPost - recettesPerPage;
  const currentRecettes = infoRecette.slice(indexOfFirstPost,indexOfLastPost);
  
  const handleChangePage = (event, value) => {
    setCurentPage(value);
  };

 

  return (
    <div>

      <h2>Tous les recettes </h2>

      <Grid className={classes.allRecipies}>

        {
        currentRecettes.map((recette,index) => (
         
          <Grid className={classes.recette} item>
           
            <CardHome  recette={recette} index={index} key={index} />
            <div className={classes.descriptionRecette}>
            {recette.description}
            </div>
            
          </Grid>
        ))
      }

      </Grid>

      <Pagination className={classes.pagination} variant="outlined" count={nrPages} page={currentPage} onChange={handleChangePage} shape="rounded" />

    </div>

  );
}

export default PageAllRecipies;
