// import * as React from 'react';
// import { palette } from '@mui/system';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core';
import pizza from './pizza.png';
import pancakes from './pancakes.png';
import hamburger from './hamburger.png';
import './style.css';

const usesStyles = makeStyles({
  logo: {

  },

});

function CarouselHome() {
  const classes = usesStyles();
  return (
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
    >
      <div className="carouselAnim">
        <img className={classes.pizaa} src={pizza} alt="pizza" />
        <p className="legend">"Les délices de Curie" vous invite trouver l'inspiration culinaire tous les jours!</p>
      </div>

      <div className="carouselAnim">
        <img className={classes.hamburger} src={hamburger} alt="hamburger" />
        <p className="legend">Nos plats sont simple et facille à préparer </p>
      </div>
      <div className="carouselAnim">
        <img className={classes.pancakes} src={pancakes} alt="pancakes" />
        <p className="legend">Vous pouvez ajouter et partager avec les autres votre recette préférée.</p>
      </div>
      
    </Carousel>
  );
}

export default CarouselHome;
