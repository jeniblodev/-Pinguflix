import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Img404 from './img/img-404.gif';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

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


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={PaginaErro} />

    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);



