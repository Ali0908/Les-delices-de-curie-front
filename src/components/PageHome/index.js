import React from 'react';

// == Import composants
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { makeStyles, Link } from '@material-ui/core';
import CardHome from '../CardHome';
import CarouselHome from '../CarouselHome';

import './style.css';

/* ----STYLE CSS---- */
const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    margin: '2rem',
    /* ----RESPONSIVE mob---- */
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',

    },
    /* ----RESPONSIVE tab---- */
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-evenly',
    },
    /* ----RESPONSIVE desktop---- */
    [theme.breakpoints.up('lg')]: {

    },
  },
  list: {
    border: '0.2rem solid grey',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.5rem',
  },

  imageList: {
    gap: '0.7rem!important',
    /* ----RESPONSIVE mob---- */
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)!important',
    },
    /* ----RESPONSIVE tab et desk---- */
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)!important',
    },
  },

  buttonList: {
    margin: '0.6rem 0!important',
    backgroundColor: '#1d152d!important',
    color:'#f0eeef',
  },
  

}));

function PageHome() {
  // const navigate = useNavigate();
  // const routeChange = () => {
  //   const path = 'allRecipies';
  //   navigate(path);
  // };

  const classes = useStyles();

  const  [photoRecette, setPhotoRecette] = React.useState([]);

  React.useEffect(() => {
    fetch('http://ali0908-server.eddi.cloud/projet-26-les-delices-de-curie-back/current/public/api/recipe/')
      .then((response) => response.json())
      .then((data) => setPhotoRecette(data));
  }, []);
 console.log(photoRecette);

  return (
    <div>
      <CarouselHome />

      <Box className={classes.box}>
        {/* <div className={classes.list}> */}
        {/* <h2 className={classes.h2}>Coup de coeur</h2>

          <ImageList className={classes.imageList}>

            <ImageListItem>
              <img className={classes.pizaa} src={pizza} alt="pizza" />
              <CardHome />
            </ImageListItem>
            <ImageListItem>
              <img className={classes.pizaa} src={pizza} alt="pizza" />
              <CardHome />
            </ImageListItem>
            <ImageListItem>
              <img className={classes.pizaa} src={pizza} alt="pizza" />
              <CardHome />
            </ImageListItem>
            <ImageListItem>
              <img className={classes.pizaa} src={pizza} alt="pizza" />
              <CardHome />
            </ImageListItem>
          </ImageList> */}

        {/* <Button
            className={classes.buttonList}
            variant="contained"
            href="/coupdecoeur"
          >Voir plus
          </Button> */}
        {/* </div> */}
       <div className={classes.list}>

          <h2 >Recettes de la semaine </h2>

          <ImageList className={classes.imageList}>

          {photoRecette.slice(0,6).map((recette,index) => (
            <ImageListItem>
              <CardHome recette={recette} index={index} key={index}/>
            </ImageListItem>
          ))
          }
          </ImageList>

          <Button
            className={classes.buttonList}
            variant="contained"
            href="/recettes"
          >Voir plus
          </Button>
        </div>
       </Box>

    </div>
  );
}

export default PageHome;
