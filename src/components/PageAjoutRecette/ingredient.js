import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import './style.css';

const useStyles = makeStyles((theme) => ({

  formIngredients: {
    display: 'flex',
    justifyContent: 'center',

  },

  quantite: {
    width: '25%',
    margin: '0.2rem!important',
  },

  ingredient: {
    width: '50%',
    margin: '0.2rem!important',
  },
  addIngredient: {
    width: '20%',
    margin: '0.2rem!important',
    fontSize: '0.6rem!important',
  },

  listStyle:{
    display:"flex",
    justifyContent:"space-between",
    alignItems: "center",
    } ,

  }));

function Ingredient() {
  const classes = useStyles();

  const [oneIngredient, setOneIngredient] = React.useState('');
  const [quantite, setQuantite] = React.useState('');
  const [ingredients, setIngredients] = React.useState([]);

  const handleOneIngredient = (e) => {
    setOneIngredient(e.target.value);
  };

  const handleQuantite = (e) => {
    setQuantite(e.target.value);
  };

  const handleAddIngredient = () => {
    const newIngredients = [...ingredients, [oneIngredient, quantite]];
    setIngredients(newIngredients);
    setOneIngredient('');
    setQuantite('');
    console.log([{ newIngredients }]);
  };


  const handleRemoveIngredient = (item) => {
    console.log(item);

    const filteredIngredients = ingredients.filter(
      (i) => 
        i !== item // ce qu'il reste-true
      ,
    );

    setIngredients(filteredIngredients);
    // console.log(filteredEtapes);
  };

  return (
    
      <Grid className={classes.listIngredients}>
        <h3>Listez les ingredients</h3>

        <div className={classes.formIngredients}>

          <TextField
            className={classes.quantite}
            error
                // required
            value={quantite}
            placeholder="Quantité"
            onChange={handleQuantite}
          />

          <TextField
            className={classes.ingredient}
            error
                /* required */
            placeholder="Ingredient"
            value={oneIngredient}
            onChange={handleOneIngredient}
          />

          <Button
            className={classes.addIngredient}
            variant="contained"
            color="success"
            onClick={handleAddIngredient}
          > Ajouter
          </Button>

        </div>

        <ul className="listIngredients">
          {
                ingredients.map((ingredient) => (
                  
                    
                   <li key={ingredient} className={classes.listStyle} >
                     <div className="styleElm">
                      <div><ControlPointIcon color="success"/>  </div>
                        {ingredient[1]} {ingredient[0]}
                  </div>
                      <Button type="button" onClick={() => handleRemoveIngredient(ingredient)}>
                      <DeleteIcon color="action" /></Button>
                  </li>
                  
                      ))

              }

        </ul>

      </Grid>

   
  );
}

export default Ingredient;
