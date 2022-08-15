import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function PageInscription() {
  const [Pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  // function to update state of Pseudo with
  // value enter by user in form
  const handleChange = (e) => {
    setPseudo(e.target.value);
  };

  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (password != confPassword) {
      // if 'password' and 'confirm password'
      // does not match.
      alert('Mots de passe incorrect');
    }
    else {
      // display alert box with user
      // 'Pseudo' and 'email' deatils .
      alert(`Compte créer bienvenue :"${Pseudo}" `);
    }
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* when user submit the form , handleSubmit()
        function will be called . */}
          <h2> Creation de compte </h2>

          <label > Pseudo:</label>
          <input
            placeholder="Pseudo"
            type="text"
            value={Pseudo}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label>Email:
            
          </label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          {/* when user write in email input box , handleEmailChange()
              function will be called. */}
          <label>
            Mots de passe:
          </label>
          <input
            placeholder="Mots de passe"
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          {/* when user write in password input box ,
                  handlePasswordChange() function will be called. */}
          <label>
            Confirmer mot de passe:
          </label>
          <input
            placeholder="Confirmer mot de passe"
            type="password"
            value={confPassword}
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          /><br />
          {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called. */}
          <input type="submit" value="Créer" />
        </form>
      </header>
    </div>
  );
}

export default PageInscription;
