import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './style.css';

const useStyles = makeStyles((theme) => ({
  formEtapes: {
    display: 'flex',
    justifyContent: 'center',
  },
  inputEtapes: {
    width: '75%',
    margin: '0.2rem!important',
  },
  addEtapes: {
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

function Etape() {
  const classes = useStyles();
  const [oneStep, setOneStep] = React.useState('');
  const [etapes, setEtapes] = React.useState([]);

  const handleOneStep = (e) => {
    setOneStep(e.target.value);
  };

  const handleAddStep = () => {
    const newSteps = [...etapes, oneStep];
    setEtapes(newSteps);
    setOneStep('');
    console.log(newSteps);
  };

  const handleRemoveStep = (item) => {
    console.log(item);

    const filteredEtapes = etapes.filter(
      (i) => // ce qu'il reste-true
        i !== item
      ,
    );

    setEtapes(filteredEtapes);
    // console.log(filteredEtapes);
  };

  return (
    <div>
      <Grid className={classes.listEtapes}>
        <h3>Listez les étapes de préparation</h3>
        <div className={classes.formEtapes}>
          <TextField
            className={classes.inputEtapes}
            error
                // required
            placeholder="Une etape"
           
            value={oneStep}
            onChange={handleOneStep}
          />
          <Button
            className={classes.addEtapes}
            variant="contained"
            color="success"
            onClick={handleAddStep}
          >Ajouter
          </Button>
        </div>
        <ul className="listSteps">
          {
                etapes.map((etape) => (
                  
                  <li key={etape} className={classes.listStyle} >
                  <div className="styleElm">
                    <div><ArrowForwardIcon color="success"/>  </div> 
                   {etape}</div>

                    <Button type="button" onClick={() => handleRemoveStep(etape)}>
                      <DeleteIcon color="action"  />
                    </Button>
                  </li>

                ))
              }

        </ul>
      </Grid>
    </div>
  );
}
export default Etape;
