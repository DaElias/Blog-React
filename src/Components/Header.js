import React from 'react';
import { /*Link,*/NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {
  return (
    <ContenedorHeader>
      <Titulo>Mi blog</Titulo>
      <Menu>
        <NavLink to="/" exact={true}>Inicio</NavLink> {/*NavLink puede ser igual a Link */}
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/acerca_de">Acerca de</NavLink>
      </Menu>
    </ContenedorHeader>
  )
};

const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;
const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Menu = styled.nav`
  a {
    text-decoration:none;
    color: #165168;
    margin: 0 10px;
  }
  a:hover{
    color:black;
  }
  a.active{
    color:black;
    border-bottom: 2px solid black;
  }
`;

export default Header;