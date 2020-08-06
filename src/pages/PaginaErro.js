import React from 'react';
import Img404 from '../img/img-404.gif';

function PaginaErro() {
    return (
        <div className='Erro404'>
            <h1>Ops!! O Pingu ficou confuso e não sabe pra onde ir</h1>
            <a href='/'>
                <img class='perdido' src={Img404} alt='Pingu Perdido'></img>
            </a>
            <p>Error 404 - Not found</p>
        </div>
    );
  }

export default PaginaErro;