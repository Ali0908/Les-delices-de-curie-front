// == Import routes
import { Route, Routes } from 'react-router-dom';
// import React from 'react';
// import axios from 'axios';

// == Import composants
import Container from '@mui/material/Container';
import Nav from '../Nav';
import SearchBar from '../SearchBar';
import PageHome from '../PageHome';
import Footer from '../Footer';
import PageAllRecipies from '../PageAllRecipies';
import PageInscription from '../PageInscription';
import Page1Recette from '../Page1Recette';
import PageAjoutRecette from '../PageAjoutRecette';
import Page404 from '../Page404';

// == Import style
import './style.css';

// const baseURL = 'http://ali0908-server.eddi.cloud/projet-26-les-delices-de-curie-back/current/public/api/categories/';

// == Composant
function App() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // console.log(post);

  // if (!post) return null;

  return (
    <div className="app">
      <Container>

        <Nav />
        <SearchBar />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/recettes" element={<PageAllRecipies />} />
         {/*  <Route path="/coupdecoeur" element={<Cdc />} /> */}
          <Route path="/recettes/:index" element={<Page1Recette />} />
          <Route path="/inscription" element={<PageInscription />} />
          <Route path="/error" element={<Page404 />} />
          <Route path="/nouvelleRecette" element={<PageAjoutRecette />} />
        </Routes>

        <Footer />
      </Container>

    </div>
  );
}

// == Export
export default App;
