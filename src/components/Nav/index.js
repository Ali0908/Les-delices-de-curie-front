/* eslint-disable max-len */
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles, Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Select } from '@mui/material';
import { InputLabel,FormControl } from '@mui/material';

import Logo from './Logo';
import Connexion from './Connexion';
/* import Hamburger from 'hamburger-react'; */

import './style.css';

const usesStyles = makeStyles((theme) => ({
  menu: {
    display: 'flex',
     justifyContent: 'space-between',
    padding: '0',
    // width: '100%',
    // justifyContent: 'center',
    // margin: '0 auto',
    backgroundColor: '#469b72',
    // height: '6rem',
    border: 'solid black 1px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: 'auto',
      // width: '100%',
      
    },

  },
  buttonUser: {

    backgroundColor: '#1d152d',
    margin: '0.5rem',
    height: '3rem',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: 'auto',
      marginTop: '1rem',
      width: '15rem',

    },

    buttonsMenu: {
      display: 'flex',
      flexDirection: 'row',
    },
    userButtons: {
      display: 'flex',
      flexDirection: 'row',
    },
    

  },

}));

export default function Nav() {
  const classes = usesStyles();

  const [conexion, setConnexion] = React.useState(false);
  const [buttonsConexion, setButtonsConnexion] = React.useState(true);

  const [values, setValues] = React.useState([
    "Bam",
    "Kate",
    "Nicole",
    "Aaron"
  ]);
  const [selected, setSelected] = React.useState('');
  
  function handleCatégories(event) {
    setSelected(event.target.value); /////il faut l' envoyer sur la page concerné
    console.log('ok');
    }
  
  /* const [isOpen, setOpen] = useState(false)

   <Hamburger toggled={isOpen} toggle={setOpen} size={20} duration={0.8}

   <Hamburger onToggle={toggled => {
  if (toggled) {
     // open a menu
  } else {
     // close a menu
  }
}} />/> */

  const handleConnexion = () => {
    setConnexion(true);
    setButtonsConnexion(false);
  };

   const  [nomCategorie, setNomCategorie] = React.useState([]);

  React.useEffect(() => {
    fetch('http://ali0908-server.eddi.cloud/projet-26-les-delices-de-curie-back/current/public/api/categories/')
      .then((response) => response.json())
      .then((data) => setNomCategorie(data));
  }, []);

console.log(nomCategorie); 

  return (
    <div className={classes.menu}>
      <Logo />
      <div className="navigation" > 
        <ul >
          <li className="liColor" >
            <div className="liCategorie">
              <p>Recettes par Catégories</p>
          
             <Select
        value={selected}
        onClick={handleCatégories}
        /* inputProps={} */
      ><MenuItem value="all" key='all'>
      <em>Tous</em>
    </MenuItem>
         {nomCategorie.map((categorie) => {
          return <MenuItem value={categorie} key={categorie} >{categorie.name}</MenuItem>;
        })}
      </Select>
     
          </div>
          </li>
          <li className="liColor"><Link href="/recettesdumonde">Recettes du monde</Link></li>
          <li className="liColor"><Link href="/recettesdutilisateurs">Recettes des utilisateurs</Link> </li>
        </ul>

      </div>

        
        {buttonsConexion && (
        <div className="userButtons">
          <Button
            className={classes.buttonUser}
            variant="contained"
            color="primary"
            href="/inscription"
          >
            Inscription
          </Button>

          <Button
            className={classes.buttonUser}
            variant="contained"
            color="primary"
            onClick={handleConnexion}
          >
            Connexion
          </Button>

        </div>
        )}

        <div> {conexion && <Connexion />}</div>
      </div>

      


  /* <Button className={classes.button} variant="contained" color="primary">
    Dans la cuisine
  </Button> */
  /* <Button className={classes.button} variant="contained" color="primary">
    Recette au hasard
  </Button> */

  
  );
}
