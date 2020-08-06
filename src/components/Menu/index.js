/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo-pinguflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo Pinguflix" />
      </Link>

      <Button as={Link} className="botaoLink" to="/cadastro/video">
        Novo vídeo
      </Button>

    </nav>
  );
}

export default Menu;
