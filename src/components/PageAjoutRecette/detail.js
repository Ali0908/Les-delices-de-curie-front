import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import TextField from '@mui/material/TextField';
import { Input } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { makeStyles } from '@material-ui/core/styles';
import './style.css';

/* ----STYLE CSS---- */
const useStyles = makeStyles((theme) => ({
  listInfos: {
    display: 'grid',
    gap: '1rem',

    /* [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(4, 1fr)!important',

    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)!important',

    }, */
  },

}));

function Detail() {
  const classes = useStyles();
  const [difficulte, setDifficulte] = React.useState('');
  const [tempPrepa, setTemps] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleDifficulte = (event) => {
    setDifficulte(event.target.value);
    console.log(difficulte);
  };

  const handleTemps = (e) => {
    setTemps(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  return (

    <div>
      <h3>Informations complementaires</h3>
      <Grid className={classes.listInfos}>
        <TextField
          fullWidth
          size="small"
          placeholder="Description"
          required
          multiline
          rows={4}
          value={description}
          onChange={handleDescription}
        />

        <div>
          <label htmlFor="photo"> Photo recette</label>
          <input type="file" id="photo" name=" " />
        </div>

        <div>
          <label htmlFor="temps"> Temps de preparation</label>
          <input
            id="temps"
            type="number"
            value={tempPrepa}
            required
            onChange={(e) => {
              handleTemps(e);
            }}
          /> min
        </div>

        <FormControl required>
          <Select
            className={classes.difficulte}
            required

            value={difficulte}
            onChange={handleDifficulte}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em>Difficulté</em>
            </MenuItem>
            <MenuItem value={10}>Easy</MenuItem>
            <MenuItem value={20}>Normal</MenuItem>
            <MenuItem value={30}>Hard</MenuItem>
          </Select>
        </FormControl>

      </Grid>

    </div>
  );
}

export default Detail;
