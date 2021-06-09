import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';  //para cambiar de ventas con react
import Inicio from './Components/Inicio';
import Blog from './Components/Blog';
import Acerca_de from './Components/Acerca_de';


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Mi blog</h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/acerca_de">Acerca de</Link>
          </nav>
        </header>
        <main>
          <Route path="/" exact={true}>
            <Inicio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/acerca_de">
            <Acerca_de />
          </Route>
        </main>
      </div>
    </BrowserRouter >
  );
}

export default App;
