import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import './style.css';

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

function Page404() {
  const classes = useStyles();

  return (
    <div>
      <h1>404</h1>

    </div>

  );
}

export default Page404;
