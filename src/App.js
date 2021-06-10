import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route /*,Link*/ } from 'react-router-dom';  //para cambiar de ventas con react
import Header from './Components/Header'
import Inicio from './Components/Inicio';
import Blog from './Components/Blog';
import Acerca_de from './Components/Acerca_de';
import Post from './Components/Post';


function App() {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Route path="/" exact={true}>
            <Inicio />
          </Route>

          <Route path="/blog" component={Blog} />
          <Route path="/post/:id" component={Post} />
          <Route path="/acerca_de" component={Acerca_de} />

        </Main>
      </ContenedorPrincipal>
    </BrowserRouter >
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;
const Main = styled.main`
background-color: #B3B6B7;
padding: 40px;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(129,129,129,.1);
`;


export default App;
