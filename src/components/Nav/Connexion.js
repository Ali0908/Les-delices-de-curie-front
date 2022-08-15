/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Connexion.css';

import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Button, makeStyles, Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const usesStyles = makeStyles((theme) => ({

}));

function Connexion() {
  const classes = usesStyles();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ];

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      }
      else {
        setIsSubmitted(true);
      }
    }
    else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) => name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>
  );
  const handleDeconnexion = (event) => {
    // Prevent page reload
    event.preventDefault();
    setIsSubmitted(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // JSX code for login form
  const renderForm = (

    <div className="form-connexion">
      <form className="from-connexion" onSubmit={handleSubmit}>
        <div className="input-container">
          <input placeholder="pseudo" type="text" name="uname" required />
          {renderErrorMessage('uname')}
        </div>
        <div className="input-container">
          <input placeholder="mot de passe" type="password" name="pass" required />
          {renderErrorMessage('pass')}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="connexion">
      <div className="login-form">
        {isSubmitted===false&&<div className="title"> Connexion </div>}
        {isSubmitted ? (
          <div className="profil">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >

              <MenuItem onClick={handleClose}>Gerer son profile</MenuItem>
              <MenuItem onClick={handleClose}><Link href="/nouvelleRecette">Ajouter une recette</Link></MenuItem>
              {/* <MenuItem onClick={popupState.close}>Newsletter</MenuItem>
              <MenuItem onClick={popupState.close}>Favoris</MenuItem> */}
            </Menu>

            <div>
              
              <p>Bienvenue,{}</p>
              <button
                onClick={handleDeconnexion}
              > Deconnexion
              </button>
            </div>

          </div>
        ) : renderForm}
      </div>
    </div>
  );
}

export default Connexion;
