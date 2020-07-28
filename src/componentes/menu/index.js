import React from 'react';
import Logo from '../../img/logo-pinguflix.png';
import './menu.css';
import BotaoLink from '../../componentes/botao';

function Menu() {
    return (
        <nav className='menu'>
            <a href='/'>
                <img className='logo' src={Logo} alt='Logo Pinguflix'></img>
            </a>

            <BotaoLink className='botaoLink' href='/'>
                Novo vídeo
            </BotaoLink>
        </nav>
    );
}

export default Menu;