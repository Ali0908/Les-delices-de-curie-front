import React, { useState } from 'react';

import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Link from '@mui/material/Link';

import pancakes from '../CarouselHome/pancakes.png';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#a9a7a7',

  },
  CardActions: {
    justifyContent: 'space-between',
    backgroundColor: '#469b72',
  },
  nomRecette: {
    margin: 0,
    fontFamily:'Playfair Display',
  },
});

function CardHome(props) {
  const classes = useStyles();
  /* const [count, setCount] = useState(0); */

  
  return (
    <Card className={classes.card}>
      <Link href={"/recettes/"+props.index}>
        
          <CardMedia
            component="img"
            alt="image recette"
            width="400"
            image={props.recette&&props.recette.image}
            title="image recette"
          />

        </Link>
     
      <CardActions className={classes.CardActions}>
        <Typography className={`${classes.nomRecette} ${classes.nomRecetteDisplayNone}`}>
        {props.recette&&props.recette.name}
        </Typography>
 
        {/* <div className="recipe-like">
          <p>{count}</p> 
          <Button size="small" color="default" onClick={() => setCount(count + 1)}>
            <ThumbUpIcon> </ThumbUpIcon>
          </Button>
        </div> */}

      </CardActions>
    </Card>
  );
}

export default CardHome;
